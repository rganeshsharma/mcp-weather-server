# Weather MCP Server

A simple Model Context Protocol (MCP) server that provides current weather information using the Open-Meteo API.

## Features

- Get current weather conditions for any location worldwide
- Uses free Open-Meteo API (no API key required)
- Returns temperature, humidity, wind speed, and weather conditions
- Simple latitude/longitude based queries

## Installation

1. Install dependencies:
```bash
npm install
```

2. Make the script executable (Mac/Linux):
```bash
chmod +x index.js
```

## Usage

### Testing the Server

You can test the server directly:

```bash
node index.js
```

### Configure with Claude Desktop

Add this to your Claude Desktop configuration file:

**Mac**: `~/Library/Application Support/Claude/claude_desktop_config.json`

**Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "weather": {
      "command": "node",
      "args": ["/absolute/path/to/weather-mcp-server/index.js"]
    }
  }
}
```

Replace `/absolute/path/to/weather-mcp-server/` with the actual path to your project directory.

### Restart Claude Desktop

After updating the configuration, restart Claude Desktop completely.

## Example Queries in Claude

Once configured, you can ask Claude questions like:

- "What's the weather in Bangalore?" (Claude will know Bangalore's coordinates: ~12.97°N, 77.59°E)
- "Get weather for coordinates 40.7128°N, 74.0060°W" (New York City)
- "What's the temperature in London?"

## How It Works

The server implements the MCP protocol with one tool:

### `get_weather`
- **Input**: latitude (number), longitude (number)
- **Output**: Current weather conditions including temperature, humidity, wind speed, and weather description

## API Used

This server uses the free [Open-Meteo API](https://open-meteo.com/), which:
- Requires no API key
- Provides accurate weather data worldwide
- Has generous rate limits for personal use

## Project Structure

```
weather-mcp-server/
├── index.js          # Main server implementation
├── package.json      # Node.js project configuration
└── README.md         # This file
```

## Learning Points

This simple MCP server teaches:
1. Basic MCP server structure
2. Tool registration and handling
3. External API integration
4. Error handling in MCP context
5. stdio transport communication

## Next Steps

To enhance this server, you could:
- Add forecast capabilities (multiple days)
- Include more weather parameters (UV index, visibility, etc.)
- Add location name to coordinates conversion
- Cache weather data to reduce API calls
- Add historical weather data retrieval

## Troubleshooting

**Server not appearing in Claude Desktop:**
- Verify the absolute path in the configuration file
- Check that Node.js is installed and accessible
- Look at Claude Desktop logs for errors

**Weather data not returning:**
- Verify latitude/longitude are valid (-90 to 90, -180 to 180)
- Check your internet connection
- Ensure Open-Meteo API is accessible

## License

MIT