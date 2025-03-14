# Lightning Hire Documentation

This repository contains the official documentation for Lightning Hire, an AI-powered resume evaluation system. The documentation is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator focused on documentation sites.

## 📚 Documentation Features

- Complete user guides for all Lightning Hire features
- API reference documentation
- Interactive examples and components
- Custom theme matching Lightning Hire's branding
- Searchable content
- Mobile-responsive design

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or higher)
- [npm](https://www.npmjs.com/) (v9 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-organization/lightninghire-docs.git
   cd lightninghire-docs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and visit [http://localhost:3000](http://localhost:3000) to see the documentation site.

## 📝 Documentation Structure

```
docs/
├── getting-started/      # Overview, installation, configuration
├── features/             # Feature-specific documentation
│   ├── candidates/       # Candidate management
│   ├── jobs/             # Job management
│   └── evaluations/      # Evaluation system
├── bulk-operations/      # Bulk import and management
└── advanced/             # API, custom matching, advanced topics
```

## 🎨 Customization

### Theme

The documentation site has been customized to match Lightning Hire's branding with:

- Primary color (Orange: #FF7900)
- Secondary color (Purple: #7B2CBF)
- Custom typography using Inter font family
- Gradient footer and animated header elements
- Custom components for consistent styling

Theme customization is primarily controlled in:
- `src/css/custom.css` - Main theme variables and styles
- `docusaurus.config.js` - Site configuration
- Custom components in `src/theme/` directory

### Custom Components

Several custom components are available for documentation authors:

- `<Screenshot>` - For displaying application screenshots with consistent styling
- `<FeatureCard>` - For highlighting features in documentation
- `<InfoBox>` - For highlighting important information
- `<APIEndpoint>` - For documenting API endpoints
- `<Steps>` and `<Step>` - For numbered instructions

Usage examples can be found in `docs/advanced/custom-components.md`.

### Animated Header

The homepage features animated diagonal traversing logos in the header. This effect is implemented in:
- `src/components/DiagonalLogos/index.js`
- `src/components/DiagonalLogos/styles.module.css`

## 🛠 Development Workflow

### Creating New Documentation Pages

1. Create a new Markdown file in the appropriate directory under `docs/`
2. Add the proper frontmatter with title and sidebar position:
   ```md
   ---
   sidebar_position: 1
   title: Your Page Title
   ---
   ```
3. Add your content using Markdown and MDX
4. Update `sidebars.js` if needed to include the new page

### Building for Production

```bash
npm run build
```

This generates static content in the `build` directory that can be served using any static hosting service.

### Deployment

This documentation is automatically deployed using [Netlify/Vercel/GitHub Pages] with CI/CD integration.

Every push to the `main` branch triggers a new build and deployment.

## 🤝 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Run the build to test (`npm run build`)
5. Commit your changes (`git commit -m 'Add some feature'`)
6. Push to the branch (`git push origin feature/your-feature`)
7. Open a Pull Request

## 📄 License

[MIT License](LICENSE)

## 📞 Contact

- Support: [support@lightninghire.com](mailto:support@lightninghire.com)
- Website: [lightninghire.com](https://lightninghire.com)