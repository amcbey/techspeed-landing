import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Disclosures = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 bg-background">
          <div className="container max-w-4xl">
            <h1 className="text-4xl font-bold text-foreground mb-4">Regulatory Disclosures</h1>
            <p className="text-muted-foreground leading-relaxed mb-12">
              TechSpeed Clearing LLC is committed to full transparency with our clients and the public.
              The following disclosures are provided in accordance with applicable regulatory requirements.
            </p>

            <div className="space-y-10">

              {/* Firm Registration */}
              <div className="border-t border-border pt-8">
                <h2 className="text-xl font-bold text-foreground mb-3">Firm Registration</h2>
                <p className="text-muted-foreground leading-relaxed">
                  TechSpeed Clearing LLC is a registered broker-dealer with the U.S. Securities and Exchange
                  Commission (SEC) and a member of the Financial Industry Regulatory Authority (FINRA) and
                  the Securities Investor Protection Corporation (SIPC).
                </p>
              </div>

              {/* BrokerCheck */}
              <div className="border-t border-border pt-8">
                <h2 className="text-xl font-bold text-foreground mb-3">FINRA BrokerCheck</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Investors are encouraged to research the background and experience of financial professionals
                  before hiring them. FINRA BrokerCheck allows you to research the professional background of
                  current and former FINRA-registered broker-dealers and investment advisers.
                </p>
                <a
                  href="https://brokercheck.finra.org/firm/summary/313766"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  Check TechSpeed Clearing LLC on FINRA BrokerCheck →
                </a>
              </div>

              {/* Clearing Arrangement */}
              <div className="border-t border-border pt-8">
                <h2 className="text-xl font-bold text-foreground mb-3">Clearing Arrangement</h2>
                <p className="text-muted-foreground leading-relaxed">
                  TechSpeed Clearing LLC maintains an omnibus clearing relationship with Velocity Clearing.
                  Clearing, settlement, and custody services for client transactions are provided through
                  this arrangement. Client assets are held in accordance with applicable SEC and FINRA rules
                  governing the custody of customer funds and securities.
                </p>
              </div>

              {/* SIPC Coverage */}
              <div className="border-t border-border pt-8">
                <h2 className="text-xl font-bold text-foreground mb-3">SIPC Coverage</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  TechSpeed Clearing LLC is a member of the Securities Investor Protection Corporation (SIPC).
                  SIPC protects customers of SIPC-member broker-dealers if the firm fails financially, covering
                  up to $500,000 per customer (including up to $250,000 for cash claims). SIPC protection does
                  not cover investment losses due to market fluctuation or bad investment decisions.
                </p>
                <a
                  href="https://www.sipc.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  Learn more at www.sipc.org →
                </a>
              </div>

              {/* Investment Risk */}
              <div className="border-t border-border pt-8">
                <h2 className="text-xl font-bold text-foreground mb-3">Investment Risk</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Securities products and services offered through TechSpeed Clearing LLC are not FDIC insured,
                  are not bank deposits or obligations, are not guaranteed by any bank, and may lose value.
                  Investing in securities involves risk, including possible loss of principal.
                </p>
              </div>

              {/* Margin & Options */}
              <div className="border-t border-border pt-8">
                <h2 className="text-xl font-bold text-foreground mb-3">Margin &amp; Options Trading</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Margin trading involves significant risk and is not suitable for all investors. You may lose
                  more than your initial investment. Options trading involves risk and is not appropriate for
                  all investors. Please read the <a href="https://www.theocc.com/getcontentasset/a151a9ae-d784-4a15-bdeb-23a029f50b70/dfc3d011-8f63-43f6-9ed8-4b444333a1d0/riskstoc.pdf" target="_blank" rel="noopener noreferrer" className="italic underline text-primary hover:opacity-80 transition-opacity">Characteristics and Risks of
                  Standardized Options</a> disclosure document before trading options.
                </p>
              </div>

              {/* Privacy */}
              <div className="border-t border-border pt-8">
                <h2 className="text-xl font-bold text-foreground mb-3">Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  TechSpeed Clearing LLC is committed to protecting the privacy of our clients. We collect,
                  use, and safeguard personal information in accordance with applicable privacy laws and
                  regulations, including Regulation S-P. We do not sell personal information to third parties.
                </p>
              </div>

              {/* Contact */}
              <div className="border-t border-border pt-8">
                <h2 className="text-xl font-bold text-foreground mb-3">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions regarding these disclosures, please contact us at{" "}
                  <a href="mailto:Info@techspeedclearing.com" className="text-primary hover:underline">
                    Info@techspeedclearing.com
                  </a>{" "}
                  or call 214-282-9256. Our office is located at 16479 Dallas Parkway, Suite #135, Addison, Texas 75001.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Disclosures;
