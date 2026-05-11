'use strict';

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logger
app.use((req, _res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

/**
 * GET /
 * Welcome endpoint
 */
app.get('/', (_req, res) => {
  res.json({
    message: 'Welcome to the test-aui-agent API!',
    version: '1.0.0',
  });
});

/**
 * GET /health
 * Health check endpoint
 */
app.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
  });
});

/**
 * GET /time
 * Returns the current server time as an ISO 8601 string
 */
app.get('/time', (_req, res) => {
  res.json({
    currentTime: new Date().toISOString(),
  });
});

// 404 handler
app.use((_req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: 'The requested endpoint does not exist.',
  });
});

// Global error handler
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message || 'An unexpected error occurred.',
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`[test-aui-agent] Server is running on http://localhost:${PORT}`);
  console.log(`[test-aui-agent] Branch: feature/ai-generated`);
});

module.exports = app;
