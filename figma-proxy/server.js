const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config({ path: '../.env' });

const app = express();
const PORT = process.env.PORT || 4000;
const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FILE_KEY = process.env.FILE_KEY;

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Figma REST proxy is running',
    port: PORT,
    hasToken: !!FIGMA_TOKEN,
    hasFileKey: !!FILE_KEY
  });
});

// Get Figma file endpoint
app.get('/figma-file', async (req, res) => {
  try {
    if (!FIGMA_TOKEN) {
      return res.status(500).json({ error: 'FIGMA_TOKEN not configured in .env file' });
    }
    
    if (!FILE_KEY) {
      return res.status(500).json({ error: 'FILE_KEY not configured in .env file' });
    }

    const nodeId = req.query.nodeId || req.query['node-id'];
    const url = nodeId 
      ? `https://api.figma.com/v1/files/${FILE_KEY}/nodes?ids=${nodeId}`
      : `https://api.figma.com/v1/files/${FILE_KEY}`;

    console.log(`Fetching from Figma: ${url}`);

    const response = await fetch(url, {
      headers: {
        'X-Figma-Token': FIGMA_TOKEN
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Figma API error:', response.status, errorText);
      return res.status(response.status).json({ 
        error: 'Figma API error', 
        status: response.status,
        message: errorText 
      });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get Figma images endpoint
app.get('/figma-images', async (req, res) => {
  try {
    if (!FIGMA_TOKEN || !FILE_KEY) {
      return res.status(500).json({ error: 'FIGMA_TOKEN or FILE_KEY not configured' });
    }

    const nodeIds = req.query.ids;
    const format = req.query.format || 'png';
    const scale = req.query.scale || '2';

    if (!nodeIds) {
      return res.status(400).json({ error: 'Node IDs required (ids parameter)' });
    }

    const url = `https://api.figma.com/v1/images/${FILE_KEY}?ids=${nodeIds}&format=${format}&scale=${scale}`;
    
    console.log(`Fetching images from Figma: ${url}`);

    const response = await fetch(url, {
      headers: {
        'X-Figma-Token': FIGMA_TOKEN
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({ 
        error: 'Figma API error', 
        message: errorText 
      });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`\n✅ Figma REST Proxy Server running on http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`🎨 Figma file: http://localhost:${PORT}/figma-file`);
  console.log(`🖼️  Images: http://localhost:${PORT}/figma-images?ids=NODE_ID\n`);
  
  if (!FIGMA_TOKEN) {
    console.warn('⚠️  WARNING: FIGMA_TOKEN not found in .env file');
  }
  if (!FILE_KEY) {
    console.warn('⚠️  WARNING: FILE_KEY not found in .env file');
  }
});
