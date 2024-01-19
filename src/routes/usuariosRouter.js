const express = require('express');
const router = express.Router();

// Middleware for validating scopes
const requireScope = (scope) => {
    return (req, res, next) => {
      if (req.user && req.user.scope && req.user.scope.includes(scope)) {
        next();
      } else {
        res.status(403).json({ message: 'Insufficient scope' });
      }
    };
  };

// GET all users (scope: read:usuarios)
router.get('/usuarios', requireScope('read'), async (req, res) => {
  // ...
});

// GET user by ID (scope: read:usuario)
router.get('/usuarios/:id', requireScope('read'), async (req, res) => {
  // ...
});

// POST new user (scope: write:usuario)
router.post('/usuarios', requireScope('write'), async (req, res) => {
  // ...
});

// PUT update user by ID (scope: write:usuario)
router.put('/usuarios/:id', requireScope('write'), async (req, res) => {
  // ...
});

// DELETE user by ID (scope: write:usuario)
router.delete('/usuarios/:id', requireScope('write'), async (req, res) => {
  // ...
});

module.exports = router;