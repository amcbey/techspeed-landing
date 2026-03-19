import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CTABannerProps {
  heading?: string;
  subtext?: string;
  buttonLabel?: string;
}

const CTABanner = ({
  heading = "Ready to Get Started?",
  subtext = "Contact our team today to learn how TechSpeed Clearing can support your business.",
  buttonLabel = "Contact Us",
}: CTABannerProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    setTimeout(() => {
      const el = document.querySelector("#inquiry");
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 500);
  };

  return (
    <section className="py-16 overflow-hidden" style={{ background: "#000000" }}>
      <div className="container max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-white mb-4">{heading}</h2>
        <p className="text-white/60 leading-relaxed mb-8">{subtext}</p>
        <Button
          size="lg"
          onClick={handleClick}
          className="bg-primary hover:bg-primary/90 text-white px-10"
        >
          {buttonLabel}
        </Button>
      </div>
    </section>
  );
};

export default CTABanner;
