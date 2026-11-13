import ScrollReveal from "@/components/ScrollReveal";

export default function Template({ children }: { children: React.ReactNode }) {
  return <ScrollReveal>{children}</ScrollReveal>;
}
