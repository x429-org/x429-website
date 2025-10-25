import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github, MessageCircle, FileText, Zap, DollarSign, Rocket, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-accent">x429</div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#what-is" className="text-sm hover:text-accent transition-colors">What is x429</a>
            <a href="#benefits" className="text-sm hover:text-accent transition-colors">Benefits</a>
            <a href="#how-it-works" className="text-sm hover:text-accent transition-colors">How it Works</a>
            <a href="#get-started" className="text-sm hover:text-accent transition-colors">Get Started</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="https://github.com/x429" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" title="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://discord.gg/5VpmgKGmf" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" title="Discord">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent pointer-events-none" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 inline-block">
              <div className="border-2 border-accent rounded-lg px-4 py-2 text-accent font-mono text-sm">
                HTTP 429 Protocol
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              x429
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              An open protocol for on-demand rate limit bypass
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Convert HTTP 429 "Too Many Requests" responses into a micro-commerce opportunity. Let clients pay to raise limits dynamically—no waiting required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://docs.x429.org" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <FileText className="w-4 h-4 mr-2" />
                Read the Docs
              </Button>
            </a>
            <a href="https://github.com/x429/x429-website" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </Button>
            </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is x429 Section */}
      <section id="what-is" className="py-20 border-t border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">What is x429?</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-card border-border p-8">
                <div className="text-accent mb-4">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">The Problem</h3>
                <p className="text-muted-foreground">
                  HTTP 429 responses block clients when they exceed rate limits. In the age of AI agents and usage-based APIs, this creates friction and lost opportunities.
                </p>
              </Card>
              <Card className="bg-card border-border p-8">
                <div className="text-accent mb-4">
                  <Rocket className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">The Solution</h3>
                <p className="text-muted-foreground">
                  x429 transforms the traditional throttle/penalty state into a <strong>micro-commerce state</strong> with optional immediate resolution. Clients can pay to bypass limits dynamically.
                </p>
              </Card>
            </div>
            <Card className="bg-card border-border p-8">
              <h3 className="text-xl font-semibold mb-4">How It Works</h3>
              <p className="text-muted-foreground mb-6">
                When a client hits a rate limit, the server responds with structured metadata including payment instructions:
              </p>
              <div className="bg-background rounded p-4 font-mono text-sm text-accent overflow-x-auto">
                <pre>{`HTTP/1.1 429 Too Many Requests
Content-Type: application/x-x429+json
X-Buy-Through-Price: 0.05 USDC
X-Payment-Endpoint: https://api.example.com/x429/pay

{
  "limit": 1000,
  "remaining": 0,
  "buy_through": {
    "amount": "0.05",
    "currency": "USDC",
    "asset_network": "base",
    "payment_instruction": "…"
  },
  "token": "abcd1234"
}`}</pre>
              </div>
              <p className="text-muted-foreground mt-6">
                The client can then either wait the normal retry period, or immediately pay via the payment endpoint to get renewed/boosted access.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 border-t border-border">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Why x429?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border p-8">
              <div className="text-accent mb-4">
                <DollarSign className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-3">New Revenue Stream</h3>
              <p className="text-muted-foreground text-sm">
                Convert bursts and over-usage into optional monetization. Premium users can pay on-demand rather than subscribe to higher tiers.
              </p>
            </Card>
            <Card className="bg-card border-border p-8">
              <div className="text-accent mb-4">
                <Rocket className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Agent-Friendly</h3>
              <p className="text-muted-foreground text-sm">
                Autonomous AI agents can hit quotas and pay automatically to keep working. No human intervention required.
              </p>
            </Card>
            <Card className="bg-card border-border p-8">
              <div className="text-accent mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Flexible Tiers</h3>
              <p className="text-muted-foreground text-sm">
                Enable freemium models with base quotas and optional pay-to-exceed. Perfect for usage-based APIs and SaaS.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 border-t border-border">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Implementation</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent text-accent-foreground font-semibold">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Server-Side: Track Usage</h3>
                <p className="text-muted-foreground">
                  Monitor usage per client and define quota thresholds. When a client exceeds their quota, respond with x429 structured metadata.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent text-accent-foreground font-semibold">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Client-Side: Detect & Pay</h3>
                <p className="text-muted-foreground">
                  Detect x429 responses, extract payment instructions, and optionally submit payment proof. Retry the request with renewed access.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent text-accent-foreground font-semibold">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Leverage x402 Payment Flow</h3>
                <p className="text-muted-foreground">
                  Use existing x402 infrastructure for payment processing. Extend with rate-limit logic to tie payments to quota extension.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent text-accent-foreground font-semibold">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Adjust Quota Live</h3>
                <p className="text-muted-foreground">
                  On payment receipt, increase quota or grant additional "burst credits". Process the original request immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Perfect For</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card className="bg-card border-border p-6">
              <h3 className="font-semibold mb-2">AI & Agents</h3>
              <p className="text-sm text-muted-foreground">
                Autonomous agents hitting API quotas can pay to keep working without human intervention.
              </p>
            </Card>
            <Card className="bg-card border-border p-6">
              <h3 className="font-semibold mb-2">Usage-Based APIs</h3>
              <p className="text-sm text-muted-foreground">
                Convert burst usage into revenue. Let power users pay for extra capacity on-demand.
              </p>
            </Card>
            <Card className="bg-card border-border p-6">
              <h3 className="font-semibold mb-2">SaaS Platforms</h3>
              <p className="text-sm text-muted-foreground">
                Offer "burst packages" as upsells. Keep base subscriptions low, monetize overages.
              </p>
            </Card>
            <Card className="bg-card border-border p-6">
              <h3 className="font-semibold mb-2">Compute Services</h3>
              <p className="text-sm text-muted-foreground">
                Enable on-demand access to premium resources. Clients pay for priority or increased throughput.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section id="get-started" className="py-20 border-t border-border">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Get Started</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Join the x429 community and start building rate-limit monetization into your APIs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://docs.x429.org" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <FileText className="w-4 h-4 mr-2" />
                  Read the Docs
                </Button>
              </a>
              <a href="https://github.com/x429/x429-website" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </a>
              <a href="https://discord.gg/5VpmgKGmf" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Discord
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-20 py-12 bg-card/50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-semibold mb-4">x429</h4>
              <p className="text-sm text-muted-foreground">
                An open protocol for on-demand rate limit bypass.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://docs.x429.org" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Documentation</a></li>
                <li><a href="https://github.com/x429/x429-website" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a></li>
                <li><a href="/whitepaper" className="hover:text-accent transition-colors">Whitepaper</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://discord.gg/5VpmgKGmf" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Discord</a></li>
                <li><a href="https://x.com/x429_org" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Twitter</a></li>
                <li><a href="https://github.com/x429/x429-website/discussions" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub Discussions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Related</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://x402.org" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center gap-2">x402 Protocol <ExternalLink className="w-3 h-3" /></a></li>
                <li><a href="https://tools.ietf.org/html/rfc7231#section-6.5.10" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">HTTP 402 Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2025 x429 Protocol. Open and free for all.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors">Privacy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms</a>
              <a href="#" className="hover:text-accent transition-colors">License</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

