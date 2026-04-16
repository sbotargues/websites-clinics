import { Header } from "@scope/header";
import { Footer } from "@scope/footer";
import { HeroSection } from "./hero-section";
import { DemosSection } from "./demos-section";
import { FeaturesSection } from "./features-section";
import { FAQSection } from "./faq-section";
import { CTASection } from "./cta-section";
import { FloatingButtons } from "./floating-buttons";

const LOCALES = ["es", "en", "fr", "de", "it", "pt", "ca", "ru", "nl", "ka"] as const;

interface LandingPageProps {
  locale: string;
  t: any;
  heroVisual?: {
    cityLabel: string;
    cityImage: string;
    dentistImage: string;
  };
}

export function LandingPage({ locale, t, heroVisual }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-surface">
      <Header locale={locale} locales={LOCALES} t={t} />
      <main>
        <div className="hero-container">
          <div className="hero-sticky">
            <HeroSection t={t} locale={locale} heroVisual={heroVisual} />
          </div>
          <div className="hero-overlay">
            {/* Demos stays sticky, Features scrolls over it */}
            <div id="demos" />
            <div className="section-parallax">
              <div className="section-parallax-sticky section-parallax-sticky--fluid">
                <DemosSection t={t} />
              </div>
              <div className="section-parallax-overlay">
                {/* Features stays sticky, FAQ scrolls over it */}
                <div id="features" />
                <div className="section-parallax">
                  <div className="section-parallax-sticky">
                    <FeaturesSection t={t} />
                  </div>
                  <div className="section-parallax-overlay">
                    {/* FAQ scrolls normally, then reveals CTA (reverse parallax) */}
                    <div id="faq" />
                    <div className="cta-container">
                      <div className="cta-overlay">
                        <FAQSection t={t} />
                      </div>
                      <div id="contact" />
                      <div className="cta-sticky">
                        <CTASection t={t} locale={locale} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer locale={locale} t={t} />
      <FloatingButtons t={t} />
    </div>
  );
}
