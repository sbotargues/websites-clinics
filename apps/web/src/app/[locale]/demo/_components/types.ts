export interface DemoTheme {
  name: string;
  // Header / brand
  headerBg: string;
  brandColor: string;
  navText: string;
  navHover: string;
  // Buttons
  btnPrimary: string;
  btnPrimaryHover: string;
  btnSecondary: string;
  // Sections
  accentBg: string; // e.g. bg-teal-50
  accentText: string; // e.g. text-teal-700
  accentBorder: string;
  // Cards
  iconBg: string;
  // CTA / contact section
  ctaBg: string;
  ctaText: string;
  // Avatar/team
  avatarBg: string;
  avatarText: string;
  // Gradient
  gradientFrom: string;
  gradientTo: string;
}

export interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  image?: string;
}

export interface Service {
  icon: string;
  title: string;
  desc: string;
}

export interface DemoContent {
  clinicName: string;
  location: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCta: string;
  heroCtaSecondary: string;
  heroImage?: string;
  stats?: { value: string; label: string }[];
  servicesTitle: string;
  servicesSubtitle?: string;
  services: Service[];
  teamTitle: string;
  team: TeamMember[];
  contactTitle: string;
  contactSubtitle: string;
  // Extra sections (optional, for more complete demos)
  testimonials?: { text: string; name: string; rating: string; image?: string }[];
  testimonialsTitle?: string;
  galleryTitle?: string;
  galleryItems?: { label: string; image: string }[];
  blogTitle?: string;
  blogPosts?: { title: string; date: string; cat: string }[];
}
