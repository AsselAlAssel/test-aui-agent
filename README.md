# test-aui-agent — Node.js Express API

This is the Express API for the **test-aui-agent** repository, generated on the `feature/ai-generated` branch.

## Getting Started

### Prerequisites

- Node.js >= 14.x
- npm

### Installation

```bash
npm install
```

### Running the Server

**Production:**
```bash
npm start
```

**Development (with auto-reload):**
```bash
npm run dev
```

The server will start on `http://localhost:3000` by default.

## API Endpoints

### GET `/`
Returns a welcome message.

**Response:**
```json
{
  "message": "Welcome to the test-aui-agent API!",
  "version": "1.0.0"
}
```

---

### GET `/health`
Returns the health status of the API.

**Response:**
```json
{
  "status": "ok",
  "uptime": 12.345
}
```

---

### GET `/time`
Returns the current server time as an ISO 8601 string.

**Response:**
```json
{
  "currentTime": "2024-01-15T10:30:00.000Z"
}
```

---

## Project Structure

```
test-aui-agent/
├── src/
│   └── index.js      # Main application entry point
├── package.json
└── README.md
```

## Branch

This code lives on the `feature/ai-generated` branch of the **test-aui-agent** repository.

## License

MIT
