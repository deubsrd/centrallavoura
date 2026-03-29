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
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group block rounded-lg border border-border bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-1.5 text-sm font-body text-muted-foreground leading-relaxed">{description}</p>
    </motion.a>
  );
};

export default OperationCard;
