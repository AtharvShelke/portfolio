import { useState, useEffect, useRef } from 'react';
import { Play, Terminal as TerminalIcon, CheckCircle2, RefreshCw, Copy, Check } from 'lucide-react';

interface CommandPreset {
  id: string;
  label: string;
  command: string;
  output: string[];
}

const COMMAND_PRESETS: CommandPreset[] = [
  {
    id: 'build',
    label: 'pnpm build',
    command: 'pnpm run build --filter=production',
    output: [
      '▲ Next.js 16.0.4 (App Router) -- Compiling production build...',
      '✓ Compiled / (Hero, Projects, Experience, Skills, Contact) in 480ms',
      '✓ Dynamic API Routes (sub-100ms target): Verified',
      '✓ Image Optimization: WebP (<200KB per asset enforced)',
      '✓ WCAG 2.1 AA Accessibility Audit: 0 violations',
      '└ Status: Ready for Vercel Edge Deployment (Core Web Vitals 100/100)'
    ]
  },
  {
    id: 'db',
    label: 'prisma migrate',
    command: 'npx prisma migrate dev --name init_fullstack_schema',
    output: [
      'Environment variables loaded from .env',
      'Prisma schema loaded from prisma/schema.prisma',
      'Datasource "db": PostgreSQL (Relational Attributes & Foreign Keys)',
      'Applying migration `20260722_init_fullstack_schema`...',
      '✓ Migration applied successfully',
      '✓ Generated Prisma Client (v6.2.0) in 210ms'
    ]
  },
  {
    id: 'health',
    label: 'curl api/health',
    command: 'curl -I -X GET https://atharvshelke.dev/api/v1/health',
    output: [
      'HTTP/2 200 OK',
      'content-type: application/json; charset=utf-8',
      'x-response-time: 14ms',
      'x-database-latency: 4ms (PostgreSQL Pool)',
      'cache-control: s-maxage=3600, stale-while-revalidate',
      '{"status":"healthy","uptime":"99.99%","region":"bom1"}'
    ]
  },
  {
    id: 'ai',
    label: 'ai validate',
    command: 'node ./scripts/validate-gemini-zod-prompts.js',
    output: [
      'Connecting to Google Gemini Generative AI SDK...',
      'Injecting biometric TDEE/BMR prompt constraints...',
      'Executing Zod JSON response validation schema...',
      '✓ Schema validation passed: 100% structured adherence',
      '✓ Non-deterministic text fallback retries: 0 required'
    ]
  }
];

export default function HeroTerminal() {
  const [activePreset, setActivePreset] = useState<CommandPreset>(COMMAND_PRESETS[0]);
  const [displayedText, setDisplayedText] = useState('');
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [copied, setCopied] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const runCommand = (preset: CommandPreset) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActivePreset(preset);
    setDisplayedText('');
    setDisplayedLines([]);
    setIsTyping(true);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setDisplayedText(preset.command);
      setDisplayedLines(preset.output);
      setIsTyping(false);
      return;
    }

    let charIndex = 0;
    const typeCommand = () => {
      if (charIndex < preset.command.length) {
        setDisplayedText(preset.command.slice(0, charIndex + 1));
        charIndex++;
        timeoutRef.current = setTimeout(typeCommand, 30);
      } else {
        setIsTyping(false);
        // Stream output lines after command finishes typing
        preset.output.forEach((line, index) => {
          setTimeout(() => {
            setDisplayedLines((prev) => [...prev, line]);
          }, (index + 1) * 120);
        });
      }
    };

    typeCommand();
  };

  useEffect(() => {
    runCommand(COMMAND_PRESETS[0]);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleCopyCommand = async () => {
    try {
      await navigator.clipboard.writeText(activePreset.command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-8 rounded-2xl bg-[#09090b] border border-border/80 shadow-2xl overflow-hidden text-left font-mono text-xs md:text-sm">
      {/* Terminal Title Bar */}
      <div className="px-4 py-3 bg-[#121215] border-b border-border/50 flex items-center justify-between gap-4 select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]" />
          <span className="ml-2 text-[11px] text-text-muted hidden sm:inline-block">
            atharv@macbook-pro: ~/portfolio (zsh)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] bg-accent/10 border border-accent/30 text-accent font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            LIVE CLI
          </span>
          <button
            onClick={handleCopyCommand}
            title="Copy command"
            className="p-1 rounded text-text-muted hover:text-accent hover:bg-surface transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-accent" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Preset Command Buttons */}
      <div className="px-3 py-2 bg-[#0d0d10] border-b border-border/40 flex items-center gap-2 overflow-x-auto hide-scrollbar">
        {COMMAND_PRESETS.map((preset) => {
          const isActive = activePreset.id === preset.id;
          return (
            <button
              key={preset.id}
              onClick={() => runCommand(preset)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 shrink-0 ${
                isActive
                  ? 'bg-accent text-bg font-bold shadow-md shadow-accent/20'
                  : 'bg-surface/50 text-text-muted border border-border/40 hover:text-text hover:bg-surface'
              }`}
            >
              <Play className="w-3 h-3" />
              {preset.label}
            </button>
          );
        })}
      </div>

      {/* Terminal Output Window */}
      <div className="p-4 md:p-5 space-y-3 min-h-[180px] max-h-[260px] overflow-y-auto hide-scrollbar bg-[#09090b]">
        <div className="flex items-center gap-2 text-text font-semibold">
          <span className="text-accent">➜</span>
          <span className="text-cyan-400">~/portfolio</span>
          <span className="text-text-muted">$</span>
          <span className="text-text font-mono">{displayedText}</span>
          {isTyping && <span className="w-2 h-4 bg-accent animate-pulse inline-block align-middle ml-0.5" />}
        </div>

        {displayedLines.length > 0 && (
          <div className="space-y-1.5 pt-1 text-text-muted">
            {displayedLines.map((line, idx) => {
              const isSuccess = line.startsWith('✓') || line.includes('200 OK') || line.includes('healthy');
              const isInfo = line.startsWith('▲') || line.startsWith('Environment');
              return (
                <div
                  key={idx}
                  className={`leading-relaxed text-xs md:text-sm transition-opacity duration-200 ${
                    isSuccess ? 'text-emerald-400 font-medium' : isInfo ? 'text-cyan-400' : 'text-zinc-400'
                  }`}
                >
                  {line}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
