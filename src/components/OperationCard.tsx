import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface OperationCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  index: number;
}

const OperationCard = ({ title, description, href, icon, index }: OperationCardProps) => {
  const isComingSoon = href === "#";

  return (
    <motion.a
      href={isComingSoon ? undefined : href}
      target={isComingSoon ? undefined : "_blank"}
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group block rounded-lg border border-border bg-card p-6 shadow-card transition-all duration-300 ${
        isComingSoon
          ? "opacity-60 cursor-not-allowed"
          : "hover:shadow-card-hover hover:-translate-y-1 cursor-pointer"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        {isComingSoon ? (
          <span className="text-[10px] font-body font-medium tracking-wider text-muted-foreground bg-muted px-2 py-1 rounded-full uppercase">
            Em breve
          </span>
        ) : (
          <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
        )}
      </div>
      <h3 className="mt-4 font-display text-xl tracking-wide text-foreground">{title}</h3>
      <p className="mt-1.5 text-sm font-body text-muted-foreground leading-relaxed">{description}</p>
    </motion.a>
  );
};

export default OperationCard;
