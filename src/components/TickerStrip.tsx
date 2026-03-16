import { TrendingUp, TrendingDown } from "lucide-react";

const tickers = [
  { symbol: "SPY",  price: "592.14", change: "+1.23%", up: true },
  { symbol: "QQQ",  price: "501.87", change: "+0.94%", up: true },
  { symbol: "AAPL", price: "227.52", change: "+0.61%", up: true },
  { symbol: "MSFT", price: "415.30", change: "-0.38%", up: false },
  { symbol: "TSLA", price: "248.71", change: "+3.12%", up: true },
  { symbol: "GS",   price: "531.44", change: "+1.05%", up: true },
  { symbol: "JPM",  price: "234.18", change: "-0.22%", up: false },
  { symbol: "BRK.B",price: "451.62", change: "+0.47%", up: true },
  { symbol: "IWM",  price: "223.09", change: "-0.71%", up: false },
  { symbol: "XLF",  price: "47.83",  change: "+0.89%", up: true },
  { symbol: "DIA",  price: "441.26", change: "+0.55%", up: true },
  { symbol: "VIX",  price: "14.32",  change: "-2.10%", up: false },
];

// Duplicate for seamless loop
const items = [...tickers, ...tickers];

const TickerStrip = () => {
  return (
    <div className="bg-foreground border-y border-border/20 overflow-hidden py-2.5 select-none">
      <div className="flex gap-0 ticker-track">
        {items.map((t, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-6 shrink-0 border-r border-white/10 last:border-r-0"
          >
            <span className="text-xs font-bold text-white tracking-wide">{t.symbol}</span>
            <span className="text-xs text-white/60">{t.price}</span>
            <span className={`flex items-center gap-0.5 text-xs font-semibold ${t.up ? "text-emerald-400" : "text-red-400"}`}>
              {t.up ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
              {t.change}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        .ticker-track {
          animation: ticker-scroll 28s linear infinite;
          width: max-content;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default TickerStrip;
