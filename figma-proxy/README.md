# Figma REST Proxy Server

A simple Express server that proxies requests to the Figma API, making it easy to fetch design data and images.

## 🚀 Quick Start

```bash
npm install
npm start
```

Server will run on http://localhost:4000

## 📡 Endpoints

### Health Check
```bash
GET http://localhost:4000/health
```

### Get Figma File
```bash
# Full file
GET http://localhost:4000/figma-file

# Specific node
GET http://localhost:4000/figma-file?nodeId=1-31
```

### Get Images
```bash
GET http://localhost:4000/figma-images?ids=1:2,1:3&format=png&scale=2
```

Parameters:
- `ids`: Comma-separated node IDs (required)
- `format`: png, jpg, svg, pdf (default: png)
- `scale`: 1, 2, 3, 4 (default: 2)

## 🔧 Configuration

Create a `.env` file in the parent directory:

```bash
FIGMA_TOKEN=your_figma_token_here
FILE_KEY=your_file_key_here
PORT=4000
```

## 📝 Example Usage

```bash
# Check if server is running
curl http://localhost:4000/health

# Get design data
curl http://localhost:4000/figma-file

# Get hero section
curl "http://localhost:4000/figma-file?nodeId=1-31"

# Export logo as PNG
curl "http://localhost:4000/figma-images?ids=1:2&format=png&scale=3"
```

## 🔗 Integration with Windsurf

Add to Windsurf settings (`~/.config/Windsurf/User/settings.json`):

```json
{
  "mcpServers": {
    "figma-rest-proxy": {
      "type": "http",
      "serverUrl": "http://127.0.0.1:4000/figma-file"
    }
  }
}
```

Then restart Windsurf to enable the MCP server.
