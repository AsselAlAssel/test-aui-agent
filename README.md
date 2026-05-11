# test-aui-agent

A Node.js Express API for the `test-aui-agent` repository.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-org/test-aui-agent.git
   cd test-aui-agent
   ```

2. Install dependencies:

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

The server will start on port `3000` by default. You can override this by setting the `PORT` environment variable.

## API Endpoints

### GET /health

Returns the health status of the API.

**Response:**

```json
{
  "status": "ok"
}
```

**Example:**

```bash
curl http://localhost:3000/health
```

## License

ISC
