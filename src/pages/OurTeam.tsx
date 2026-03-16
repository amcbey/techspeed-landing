import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { User } from "lucide-react";

const team = [
  {
    name: "Robert McBey",
    title: "Chief Executive Officer (CEO)",
    bio: "Robert McBey is the Chief Executive Officer at TechSpeed Clearing. Mr. McBey has over 30 years of experience in the securities industry in various roles including Chief Compliance Officer, Director of Internal Audit, Chief Operations Officer and CEO of Penson Financial Service's Canadian and United Kingdom subsidiaries. Mr. McBey, a former allied member of the New York Stock Exchange, currently holds Series 4, 7, 8, 14, 24, 27, 63 and 65 licenses. Mr. McBey earned a Finance degree from York University.",
  },
  {
    name: "Peter Stack",
    title: "Director of Securities Lending",
    bio: "Peter Stack is the Director of Securities Lending at TechSpeed Clearing. Mr. Stack has 25 years of experience in the securities industry and holds Series 7, 63 and 24 licenses. Mr. Stack earned a Bachelor of Science degree from St. John's University. Mr. Stack started his securities lending career at the Bank of New York. Mr. Stack moved to trade structured products through securities lending platforms at Maple Securities, Velocity Clearing, and Wilson-Davis & Co.",
  },
  {
    name: "George Martin",
    title: "Chief Compliance Officer (CCO)",
    bio: "George Martin is the Chief Compliance Officer and AML Compliance Officer at TechSpeed Clearing. Mr. Martin has over 25 years' experience in the securities industry, holds the Series 4, 7, 14, 24, 63 and 79 licenses, and is a former Regulator at the Chicago Board Options Exchange. Mr. Martin earned his B.S. from Northern Illinois University, and his MBA from the University of Wisconsin. In his free time, Mr. Martin is an avid reader and enjoys international travel.",
  },
  {
    name: "Alisa Webb",
    title: "Chief Financial Officer (CFO)",
    bio: "Alisa Webb is the Chief Financial Officer at TechSpeed Clearing. Ms. Webb has four years of experience in the securities industry and holds a Series 27 license. Ms. Webb is a former auditor of publicly traded companies. She has a Bachelor and Master of Accounting from the University of Utah. Ms. Webb holds an active CPA license from the State of Utah.",
  },
  {
    name: "Louis Helsen",
    title: "Clearing Services & Investment Banking",
  },
  {
    name: "Alex McBey",
    title: "Head of Operational Strategy",
  },
  {
    name: "Andrew McBey",
    title: "Corporate Finance Analyst",
  },
];

const OurTeam = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 bg-background">
          <div className="container max-w-4xl">
            <h1 className="text-4xl font-bold text-foreground mb-4">Our Team</h1>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Meet the experienced professionals behind TechSpeed Clearing.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="flex flex-col items-center text-center p-6 rounded-lg border border-border hover:shadow-md transition-shadow"
                >
                  {/* Placeholder avatar */}
                  <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mb-4">
                    <User className="w-10 h-10 text-muted-foreground" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{member.title}</p>
                  {"bio" in member && member.bio && (
                    <p className="text-xs text-muted-foreground leading-relaxed text-left">{member.bio}</p>
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

export default OurTeam;
