import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

const SecuritiesLending = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Banner */}
        <div className="relative overflow-hidden py-24 flex items-center justify-center min-h-[280px]" style={{ background: "#000000" }}>
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "linear-gradient(rgba(41,98,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(41,98,255,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="relative z-10 text-center px-6">
            <motion.p
              className="text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#2962ff" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Financing Solutions
            </motion.p>
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-5"
              style={{ color: "#ffffff", textShadow: "0 0 30px rgba(41,98,255,0.4)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Securities Lending &amp; Financing
            </motion.h1>
            <motion.p
              className="text-white/60 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Full-service lending solutions including easy-to-borrow, hard-to-borrow locates, fully paid lending, and API connectivity.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-8 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { label: "Locate Access", value: "API" },
                { label: "Lending Types", value: "3+" },
                { label: "Collateral", value: "Cash Secured" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold" style={{ color: "#2962ff", textShadow: "0 0 12px rgba(41,98,255,0.8)" }}>{stat.value}</div>
                  <div className="text-xs text-white/50 mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <section className="py-16 bg-background">
          <div className="container max-w-4xl space-y-12">

            {/* Intro */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">What is stock (or securities) lending?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Securities lending plays a crucial role in global financial markets. It helps to increase market liquidity by making more shares available for trading and supports a variety of trading strategies. It also gives investors additional ways to earn a return from the securities they own. The practice has been used by banks, asset management firms, pension plans, other financial institutions and central banks worldwide for decades.
              </p>
            </div>

            {/* Definition */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">Definition and Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                Securities lending is the practice of temporarily loaning stocks, bonds, or other securities from one party (the lender) to another (the borrower) for a fee. It is primarily done by large financial institutions like investment banks, asset management firms, clearing firms, pension plans, and retail brokerage firms.
              </p>
            </div>

            {/* How it works */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">How It Works</h2>
              <ol className="space-y-5">
                {[
                  {
                    n: "1",
                    title: "A borrower identifies a need.",
                    body: "A borrower, such as a hedge fund or broker-dealer, needs to borrow a security for a specific purpose, most commonly for short selling or to cover a failed trade. The borrower puts together a list of securities they need and sends that 'demand list' out to the street (all of their sec lend contacts).",
                  },
                  {
                    n: "2",
                    title: "The lending agent (TechSpeed) finds a match.",
                    body: "The borrower's request is typically handled by a lending agent. The lender will search their stock record and match the request with available securities from their stock record.",
                  },
                  {
                    n: "3",
                    title: "Collateral is provided.",
                    body: "The borrower posts collateral, usually in the form of cash or other securities, to guarantee the loan. This collateral is typically worth more than the borrowed security — often 102% to 105% of its market value — and is 'marked to market' daily to ensure its value is maintained.",
                  },
                  {
                    n: "4",
                    title: "The loan is completed.",
                    body: "The lender transfers the security to the borrower, who can then use it for their purposes.",
                  },
                  {
                    n: "5",
                    title: "A fee is paid.",
                    body: "The borrower pays the lender a fee, which is a key source of revenue for the lender.",
                  },
                  {
                    n: "6",
                    title: "The loan is closed.",
                    body: "When the loan is over, the borrower returns the security to the lender, and the lender returns the collateral to the borrower.",
                  },
                ].map((step) => (
                  <li key={step.n} className="flex gap-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">{step.n}</span>
                    <div>
                      <span className="font-semibold text-foreground">{step.title} </span>
                      <span className="text-muted-foreground leading-relaxed">{step.body}</span>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="text-muted-foreground leading-relaxed mt-5">
                <span className="font-semibold text-foreground">Fully Paid Securities Lending (FPSL)</span> allows investors to earn passive income by lending their fully owned, non-margin stocks to brokers who then loan them to other financial institutions. In return, the investor receives cash collateral and earns interest payments based on the demand for their securities. The lending fee is split between the lender and the investor. The cash collateral is held in a third-party protected bank account that earns interest.
              </p>
            </div>

            {/* Why borrowers borrow */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Why Borrowers Borrow</h2>
              <ul className="space-y-2">
                {[
                  { label: "To short sell:", body: "An investor borrows a security to sell it immediately, hoping to buy it back later at a lower price to return to the lender." },
                  { label: "To facilitate trading:", body: "Brokers may borrow securities to cover failed trades and ensure timely settlement, which keeps markets liquid and efficient." },
                  { label: "To hedge:", body: "Investors borrow securities to protect against other positions in their portfolios." },
                  { label: "For corporate control:", body: "In rare cases, some investors may borrow shares to acquire additional voting power ahead of a corporate vote." },
                ].map((item) => (
                  <li key={item.label} className="flex gap-2 text-muted-foreground leading-relaxed">
                    <span className="text-primary mt-1">·</span>
                    <span><span className="font-semibold text-foreground">{item.label}</span> {item.body}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why lenders lend */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Why Lenders Lend</h2>
              <ul className="space-y-2">
                <li className="flex gap-2 text-muted-foreground leading-relaxed">
                  <span className="text-primary mt-1">·</span>
                  <span><span className="font-semibold text-foreground">To generate extra income:</span> By lending securities that would otherwise be sitting dormant in a portfolio, lenders can earn fees to increase their overall returns.</span>
                </li>
              </ul>
            </div>

            {/* What makes it unique */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">What Makes It Unique</h2>
              <p className="text-muted-foreground leading-relaxed">
                Securities lending offers investors a way to generate passive income from their stocks without having to sell them.
              </p>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Benefits for Lenders</h2>
              <ul className="space-y-2">
                {[
                  { label: "Additional income:", body: "Lenders can earn a fee for lending out stocks." },
                  { label: "Potential price appreciation:", body: "Borrowers have to return the stock at the current price, meaning lenders don't give up any potential gains they have while their shares are on loan." },
                  { label: "Retain ownership:", body: "Lenders retain ownership of their stocks and can sell them at any time. However, they give up voting rights while the securities are on loan. If the lender wishes to vote in an upcoming corporate event, we can simply recall the loan from the borrower for T+1." },
                  { label: "Avoid taxable events:", body: "Lenders don't have to sell their securities to generate income (while those payments may still be subject to tax, stock lending could help avoid a larger taxable event when selling shares from a non-registered account)." },
                ].map((item) => (
                  <li key={item.label} className="flex gap-2 text-muted-foreground leading-relaxed">
                    <span className="text-primary mt-1">·</span>
                    <span><span className="font-semibold text-foreground">{item.label}</span> {item.body}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Risks */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">The Risks and Trade-offs</h2>
              <ul className="space-y-2">
                {[
                  { label: "Borrower default:", body: "There is a risk that the borrower may not return the security. The collateral mitigates this, but in rare events, like the 2008 financial crisis, there is a risk that the collateral's value could drop (Southwest & Lehman Bros)." },
                  { label: "Credit risk:", body: "There's a small risk that the value of the shares borrowed could grow such that the borrower is unable to return the shares. To mitigate this risk and ensure lenders are 100% covered, borrowers are required to provide collateral equal to 102% of the value of the shares." },
                  { label: "Loss of voting rights:", body: "The title and ownership rights temporarily transfer to the borrower, which means the lender forfeits any voting rights associated with the security for the duration of the loan. If the owner of the stock wants to vote, we would issue a recall for T+1." },
                  { label: "Complex tax implications:", body: "Dividends paid on loaned stock are treated differently for tax purposes, as the borrower makes a substitute payment to the lender." },
                ].map((item) => (
                  <li key={item.label} className="flex gap-2 text-muted-foreground leading-relaxed">
                    <span className="text-primary mt-1">·</span>
                    <span><span className="font-semibold text-foreground">{item.label}</span> {item.body}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Example */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Here's an Example of How the Interest Adds Up</h2>
              <div className="rounded-lg border border-border bg-secondary/40 p-6 max-w-md">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-2 text-muted-foreground">ABC Shares on loan</td>
                      <td className="py-2 text-right font-semibold text-foreground">10,000</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 text-muted-foreground">Market price</td>
                      <td className="py-2 text-right font-semibold text-foreground">$10</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 text-muted-foreground">Market value</td>
                      <td className="py-2 text-right font-semibold text-foreground">$100,000</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 text-muted-foreground">Annualized lending interest rate</td>
                      <td className="py-2 text-right font-semibold text-foreground">8.50%</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 text-muted-foreground">Daily accrual ($100,000 × 8.50% ÷ 360)</td>
                      <td className="py-2 text-right font-semibold text-foreground">$23.61</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-muted-foreground font-semibold">Hypothetical monthly income</td>
                      <td className="py-2 text-right font-bold text-primary text-base">$708.30</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>

        <CTABanner
          heading="Explore Our Lending Solutions"
          subtext="Contact our team to discuss how TechSpeed's securities lending and financing services can work for your business."
          buttonLabel="Get in Touch"
        />
      </main>
      <Footer />
    </div>
  );
};

export default SecuritiesLending;
