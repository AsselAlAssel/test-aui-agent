'use strict';

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logger
app.use((req, _res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

app.get('/', (_req, res) => {
  res.json({
    message: 'Welcome to the test-aui-agent API!',
  });
});

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
});

app.listen( PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
