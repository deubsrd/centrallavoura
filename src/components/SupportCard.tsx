import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface SupportLink {
  label: string;
  href: string;
}

interface SupportCardProps {
  title: string;
  description: string;
  links: SupportLink[];
  icon: React.ReactNode;
  index: number;
}

const SupportCard = ({ title, description, links, icon, index }: SupportCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-lg border border-border bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
        {icon}
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-1.5 text-sm font-body text-muted-foreground leading-relaxed">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/90"
          >
            {link.label}
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default SupportCard;
