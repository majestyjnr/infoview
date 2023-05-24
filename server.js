// Require packages
const express = require('express');
const fs = require('fs');
const app = express();

// Require Routes
const route = require('./routes/routes')

// Register routes
app.use('/', route)

// Create server
const PORT = 2900
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });