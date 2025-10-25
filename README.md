# x429 Website

The official website and documentation hub for **x429**, the open protocol for on-demand rate limit bypass.

## About x429

x429 is an open standard that transforms HTTP 429 "Too Many Requests" responses from a purely punitive throttling mechanism into a structured micro-commerce opportunity. By extending the x402 payment protocol with rate-limit-aware logic, x429 enables API providers to offer clients an optional, immediate path to bypass or raise rate limits through dynamic payment.

**Key Features:**
- **Machine-native protocol** for automated rate-limit monetization
- **Built on x402** for proven payment infrastructure
- **Optional and transparent** - clients can always choose to wait
- **Blockchain-agnostic** - works with any payment method
- **Perfect for AI agents** - enables autonomous systems to pay for priority access

## Quick Links

- 🌐 **Website:** https://x429.org
- 📖 **Whitepaper:** https://x429.org/whitepaper
- 💬 **Discord:** https://discord.gg/5VpmgKGmf
- 🐦 **Twitter:** https://x.com/x429_org
- 🔧 **GitHub:** https://github.com/x429
- 📚 **Documentation:** https://docs.x429.org

## Repository Structure

```
x429/
├── client/                 # React/Next.js frontend
│   ├── src/
│   │   ├── pages/         # Page components
│   │   ├── components/    # Reusable UI components
│   │   ├── contexts/      # React contexts
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   └── index.css      # Global styles
│   ├── public/            # Static assets
│   │   └── whitepaper.md  # x429 Whitepaper
│   └── package.json
├── server/                # Placeholder for backend
├── shared/                # Shared types and constants
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

## Development

### Prerequisites

- Node.js 18+
- pnpm (or npm/yarn)

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site will be available at `http://localhost:3000`

### Building

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Deployment

This site is automatically deployed to Cloudflare Pages on every push to the `live` branch.

### Deployment Flow

1. Push to the `live` branch
2. GitHub Actions triggers build
3. Cloudflare Pages automatically deploys the built site
4. Site is live at https://x429.org

### Manual Deployment

To manually deploy to Cloudflare Pages:

```bash
# Build the project
pnpm build

# Deploy using Wrangler
pnpm wrangler pages deploy dist
```

## Technology Stack

- **Frontend:** React 19 + TypeScript
- **Styling:** Tailwind CSS 4 + shadcn/ui
- **Build Tool:** Vite
- **Routing:** Wouter
- **Deployment:** Cloudflare Pages
- **CI/CD:** GitHub Actions

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## Community

- **Discord:** https://discord.gg/5VpmgKGmf - Join our community for discussions and support
- **Twitter:** https://x.com/x429_org - Follow for updates and announcements
- **GitHub Discussions:** https://github.com/x429/x429-website/discussions - Ask questions and share ideas
- **Issues:** https://github.com/x429/x429-website/issues - Report bugs and request features

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Related Projects

- **x402:** https://x402.org - The payment protocol that x429 is built on
- **x429 Specification:** https://github.com/x429/x429-spec - Protocol specification and whitepaper
- **x429 Python:** https://github.com/x429/x429-py - Python reference implementation
- **x429 JavaScript:** https://github.com/x429/x429-js - JavaScript reference implementation

## Support

For questions or issues:

1. Check the [FAQ](https://x429.org#faq)
2. Search [GitHub Issues](https://github.com/x429/x429-website/issues)
3. Ask in [GitHub Discussions](https://github.com/x429/x429-website/discussions)
4. Join our [Discord](https://discord.gg/5VpmgKGmf)

## Roadmap

- [x] Launch x429.org website
- [x] Publish whitepaper
- [ ] Release v1.0 of reference implementations
- [ ] Establish x429 Foundation
- [ ] Launch token (planned for Q2 2026)
- [ ] Expand to additional blockchains

## Acknowledgments

x429 is built on the foundation of the x402 protocol by Coinbase and Cloudflare. We thank the entire web3 community for their support and feedback.

---

**Made with ❤️ by the x429 community**

