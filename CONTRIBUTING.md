# Contributing to x429

Thank you for your interest in contributing to x429! We welcome contributions from everyone, whether it's code, documentation, bug reports, or feature requests.

## Code of Conduct

Please be respectful and inclusive in all interactions. We are committed to providing a welcoming and supportive community for everyone.

## How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:

1. A clear, descriptive title
2. A detailed description of the bug
3. Steps to reproduce the issue
4. Expected behavior
5. Actual behavior
6. Screenshots or error messages (if applicable)
7. Your environment (OS, Node version, etc.)

### Suggesting Features

To suggest a feature:

1. Check if the feature has already been suggested in [Issues](https://github.com/x429/x429-website/issues)
2. Create a new issue with:
   - A clear, descriptive title
   - A detailed description of the feature
   - Use cases and benefits
   - Possible implementation approach (optional)

### Submitting Changes

1. **Fork the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/x429-website.git
   cd x429-website
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the code style guidelines below
   - Write clear commit messages
   - Test your changes thoroughly

4. **Commit your changes**
   ```bash
   git commit -m "Add feature: description of changes"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Provide a clear description of your changes
   - Link to any related issues
   - Ensure all tests pass
   - Request review from maintainers

## Code Style Guidelines

### TypeScript/JavaScript

- Use TypeScript for type safety
- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### React Components

- Use functional components with hooks
- Keep components focused on a single responsibility
- Use proper TypeScript typing
- Export components as default exports
- Use descriptive prop names

### CSS/Styling

- Use Tailwind CSS utilities
- Follow the existing design system
- Maintain responsive design
- Use CSS variables for theming
- Avoid inline styles

### Commit Messages

Follow conventional commit format:

```
type(scope): subject

body

footer
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`

Example:
```
feat(home): add whitepaper link to footer

Add a link to the x429 whitepaper in the footer section
of the home page for easier access to documentation.

Fixes #123
```

## Development Workflow

### Setup

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Testing

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Generate coverage report
pnpm test:coverage
```

### Linting

```bash
# Check code style
pnpm lint

# Fix code style issues
pnpm lint:fix
```

### Building

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Pull Request Process

1. Update the README.md with any new features or changes
2. Update the CHANGELOG.md with your changes
3. Ensure all tests pass: `pnpm test`
4. Ensure code is properly formatted: `pnpm lint:fix`
5. Request review from at least one maintainer
6. Address any feedback or requested changes
7. Once approved, your PR will be merged

## Documentation

- Update documentation for any new features
- Keep the README.md current
- Add code comments for complex logic
- Update the whitepaper if protocol changes are made

## Community

- Join our [Discord](https://discord.gg/5VpmgKGmf) for discussions
- Follow us on [Twitter](https://x.com/x429_org) for updates
- Participate in [GitHub Discussions](https://github.com/x429/x429-website/discussions)

## Questions?

If you have questions:

1. Check the [FAQ](https://x429.org)
2. Search existing [Issues](https://github.com/x429/x429-website/issues)
3. Ask in [GitHub Discussions](https://github.com/x429/x429-website/discussions)
4. Join our [Discord](https://discord.gg/5VpmgKGmf)

## License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to x429! 🙏

