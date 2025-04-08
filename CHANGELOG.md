 📜 Changelog

All notable changes to the MCPollinations will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.7] - `2025-04-08`

### Added
- Project analysis and `OVERVIEW.md` update by Pink Pixel on `2025-04-08`.
- Added Usage and Key Features sections to OVERVIEW.md.
- Comprehensive codebase analysis.
- Added ability to save generated images to a customizable file path as PNG (or other formats).
- New options for `generateImage` tool: `saveToFile`, `outputPath`, `fileName`, and `format`.
- Added hardcoded parameter `nologo=true` for all image generation.
- Added customizable parameter `safe` for content filtering (defaults to false).
- Set default seed to random for image generation to ensure variety.
- Added customizable parameter `enhance` for image quality enhancement.
- Set 'flux' as the default model for image generation.
- Changed default behavior to save images to file automatically (PNG format).
- Added comprehensive documentation in README.md about image saving behavior, locations, and accessing base64 data.
- Implemented unique filename generation to prevent overwriting existing images.
- Added automatic numeric suffixes for duplicate filenames.
- Renamed `generateText` tool to `respondText` for clarity and consistency.
- Removed `sayText` tool as it's not supported by the API.
- Removed generic `listModels` tool in favor of specific `listImageModels` and `listTextModels` tools for clarity.
- Ensured `model` parameter is properly documented as customizable for text generation.
- Improved `listAudioVoices` tool to return the complete list of available voices.
- Enhanced documentation for the `voice` parameter in `respondAudio` tool.
- Fixed tool registration to ensure all tools are properly displayed in the MCP protocol.
- Added test script to verify tool registration.
- Standardized package name references throughout the codebase.
- Replaced Claude-specific installation script with a comprehensive MCP configuration generator that supports customizing:
  - Output and temporary directories (using relative paths for portability)
  - Default parameters for image, text, and audio generation
  - Tool restrictions and permissions
  - Fixed server and package names to ensure compatibility
  - Removed nologo parameter from configuration as it's hardcoded to true
  - Added lists of available models for image and text generation to help users make informed choices
- Changed the command to start the server from "model-context-protocol" to "mcpollinations" for better branding consistency
- Removed `listPrompts` and `listResources` tools as they're not currently implemented with an API
- Removed resourceService.js and resourceSchema.js files
- Updated tool schemas to expose only the parameters we want to customize in the MCP client
- Added MIT LICENSE file
- Added comprehensive .gitignore file
- Changed default image save location to ~/mcpollinations-output in user's home directory for easier access
  - Note: When using the generateImage_npx tool directly, images may still be saved in the extension directory
  - For consistent behavior, use the MCP server directly or specify an absolute path
- Updated documentation to reflect the new configuration generator.

## [1.0.6] - `2025-04-01`

### Added
- Compatibility with Node.js versions 14.0.0 and later.
- AbortController polyfill for Node.js versions below 16.0.0.
- Troubleshooting guide in README.
- Enhanced documentation with system requirements and installation options.

### Fixed
- "AbortController is not defined" error.
- Improved error handling and reporting.

## [1.0.5] - `2025-04-01`

### Added
- Initial public release.