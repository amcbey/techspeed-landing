import Header from "@/components/Header";
import Footer from "@/components/Footer";

const subsections1 = [
  {
    title: "Easy-To-Borrow Securities",
    body: "For seamless transactions throughout the day, Velocity provides an easy-to-borrow securities list to our clients before the market opening.",
  },
  {
    title: "Locate Required Securities",
    body: "We can help you locate stocks that require locates due to their limited supply, unlisted status, or low liquidity. TechSpeed specializes in locating the most in-demand securities for our clients.",
  },
  {
    title: "API Connectivity For Locates",
    body: "TechSpeed has streamlined the securities locate process by combining multiple trading system search functions into our platform allowing customers to complete transactions quickly. Through API connectivity, users on various trading platforms, grey boxes or black boxes can easily place short trades while comfortably remaining in compliance with industry regulations.",
  },
];

const subsections2 = [
  {
    title: "Securities Lending and Borrowing",
    body: "Techspeed's Securities Lending System, managed by a professional team, allows us to control costs and rates of securities lending and borrowing. We offer clients term loans on certain securities, providing protection from rate and term changes and removing recall risk. We can also re-rate loans for the benefit of our customers.",
  },
  {
    title: "Fully Paid Lending",
    body: "Fully paid for lending for clearing and prime customers offers portfolio rebate opportunities. TechSpeed can lend securities, receive rebates, and share with the client. Loans are secured by cash collateral and held at a separate bank in the customer's name. TechSpeed can offer fully paid lending to our omnibus customers and to fully disclosed customers on a case-by-case basis.",
  },
  {
    title: "Margin Lending",
    body: "Utilize margin lending through Regulation T or portfolio margin to trade on leverage or to access funding for a margin loan.",
    disclaimer: "*Margin borrowing entails significant risk and is only for experienced investors. You may lose more than your initial investment.",
  },
];

const SecuritiesLending = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 bg-background">
          <div className="container max-w-5xl">
            <h1 className="text-4xl font-bold text-foreground mb-6">Lending Services</h1>
            <p className="text-muted-foreground leading-relaxed mb-12">
              TechSpeed Clearing specializes in securities lending services working with diverse
              counterparties to generate meaningful revenue for our clients. Featuring seasoned
              market expertise, an exceptional breadth of securities, and white glove client
              services, we work with multiple partners to &ldquo;locate&rdquo; a supply of
              securities to enable short sales and, for positions being held overnight, provision
              a loan of the actual shares themselves. We also offer fully paid lending, an
              excellent revenue opportunity for clients. Our fully automated locate system is
              accessible through a Web interface or API connection.
            </p>

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {subsections1.map((s) => (
                <div key={s.title}>
                  <h3 className="text-lg font-bold text-foreground mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {subsections2.map((s) => (
                <div key={s.title}>
                  <h3 className="text-lg font-bold text-foreground mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                  {s.disclaimer && (
                    <p className="text-xs text-muted-foreground/70 mt-3 italic">{s.disclaimer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SecuritiesLending;
