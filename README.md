# System Design Simulator

An interactive tool for practicing and visualizing system design problems. Create High-Level Design (HLD) and Low-Level Design (LLD) diagrams with real-time feedback and analysis.

## Features

- **Dual Mode Operation**
  - High-Level Design (HLD) mode for system architecture
  - Low-Level Design (LLD) mode for detailed component design

- **Interactive Design Canvas**
  - Drag-and-drop interface for component placement
  - Real-time connection creation between components
  - Customizable component configurations

- **Smart Component Library**
  - Pre-configured infrastructure components (Load Balancers, CDN, etc.)
  - Compute resources (Web Servers, Application Servers)
  - Storage solutions (Databases, Caches)
  - Async components (Message Queues, Event Buses)

- **Intelligent Analysis**
  - Real-time validation of architecture
  - Performance bottleneck detection
  - Scalability analysis
  - Improvement suggestions using AI

## Getting Started

1. **Installation**
   ```bash
   # Clone the repository
   git clone https://github.com/imshambles/System-design-sim.git
   cd System-design-sim

   # Install dependencies
   cd frontend
   npm install
   ```

2. **Configuration**
   - Set up your API key in the settings panel
   - Choose between HLD and LLD modes
   - Select a problem from the dropdown menu

3. **Usage**
   - Drag components from the left palette onto the canvas
   - Connect components by dragging between connection points
   - Configure component properties in the right panel
   - Click "Run Simulation" to analyze your design

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── simulator/    # Core simulation components
│   │   └── ui/          # Reusable UI components
│   ├── pages/           # Main application pages
│   ├── mock/           # Mock data and scenarios
│   └── lib/            # Utility functions
```

## Development

```bash
# Start development server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.