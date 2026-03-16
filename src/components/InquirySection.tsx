import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";

const aumOptions = [
  "Under $1M",
  "$1M – $10M",
  "$10M – $50M",
  "$50M – $100M",
  "$100M – $500M",
  "$500M+",
];

const businessTypes = [
  "Broker-Dealer",
  "Registered Investment Advisor (RIA)",
  "Hedge Fund",
  "Family Office",
  "Proprietary Trading Firm",
  "Institutional Investor",
  "High Net Worth Individual",
  "Other",
];

const InquirySection = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [brokerDealer, setBrokerDealer] = useState("");
  const [aum, setAum] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [details, setDetails] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const templateParams = {
      to_email: "general@techspeedclearing.com",
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      broker_dealer: brokerDealer,
      aum,
      business_types: selectedTypes.length > 0 ? selectedTypes.join(", ") : "Not specified",
      details: details || "None provided",
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly at general@techspeedclearing.com.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="inquiry" className="py-20 bg-secondary/30">
      <div className="container max-w-2xl">
        <h2 className="text-3xl font-bold text-foreground mb-2 text-center">Get in Touch</h2>
        <p className="text-muted-foreground text-sm text-center mb-10">
          Reach out to learn how TechSpeed Clearing can support your business.
        </p>

        {submitted ? (
          <div className="text-center py-16">
            <p className="text-xl font-semibold text-foreground mb-2">Thank you for reaching out!</p>
            <p className="text-muted-foreground text-sm">Our team will be in touch with you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* First / Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="firstName">First Name <span className="text-destructive">*</span></Label>
                <Input
                  id="firstName"
                  placeholder="Jane"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="lastName">Last Name <span className="text-destructive">*</span></Label>
                <Input
                  id="lastName"
                  placeholder="Smith"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <Label htmlFor="email">Email <span className="text-destructive">*</span></Label>
              <Input
                id="email"
                type="email"
                placeholder="jane@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <Label htmlFor="phone">Phone <span className="text-destructive">*</span></Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {/* Broker-Dealer Name */}
            <div className="space-y-1.5">
              <Label htmlFor="brokerDealer">Broker-Dealer Name <span className="text-destructive">*</span></Label>
              <Input
                id="brokerDealer"
                placeholder="Your firm name"
                required
                value={brokerDealer}
                onChange={(e) => setBrokerDealer(e.target.value)}
              />
            </div>

            {/* Assets Under Management */}
            <div className="space-y-1.5">
              <Label>Assets Under Management <span className="text-destructive">*</span></Label>
              <Select required onValueChange={setAum}>
                <SelectTrigger>
                  <SelectValue placeholder="Select AUM range" />
                </SelectTrigger>
                <SelectContent>
                  {aumOptions.map((opt) => (
                    <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Type of Business */}
            <div className="space-y-1.5">
              <Label>Type of Business</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className="w-full flex items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm text-left hover:bg-accent transition-colors"
                  >
                    <span className={selectedTypes.length === 0 ? "text-muted-foreground" : "text-foreground"}>
                      {selectedTypes.length === 0 ? "Select all that apply" : selectedTypes.join(", ")}
                    </span>
                    <ChevronDown size={14} className="text-muted-foreground shrink-0 ml-2" />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-72 p-3" align="start">
                  <div className="space-y-2">
                    {businessTypes.map((type) => (
                      <div key={type} className="flex items-center gap-2">
                        <Checkbox
                          id={type}
                          checked={selectedTypes.includes(type)}
                          onCheckedChange={() => toggleType(type)}
                        />
                        <label htmlFor={type} className="text-sm cursor-pointer select-none">
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            {/* Additional Details */}
            <div className="space-y-1.5">
              <Label htmlFor="details">
                Additional Details <span className="text-muted-foreground text-xs">(optional)</span>
              </Label>
              <Textarea
                id="details"
                placeholder="Tell us more about your needs..."
                rows={4}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />
            </div>

            {/* Terms disclaimer */}
            <div className="flex items-start gap-3 pt-1">
              <Checkbox
                id="terms"
                checked={agreed}
                onCheckedChange={(v) => setAgreed(!!v)}
              />
              <label htmlFor="terms" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                By submitting this form, I agree to the{" "}
                <span className="underline">Terms and Conditions</span> and consent to receive
                automated communications from TechSpeed Clearing regarding my inquiry. I understand
                I may opt out at any time.
              </label>
            </div>

            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}

            <Button type="submit" className="w-full" disabled={!agreed || loading}>
              {loading ? "Sending..." : "Submit"}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};

export default InquirySection;
