import { motion } from "framer-motion";
import {
  Monitor,
  Coffee,
  ScanFace,
  Headphones,
  LifeBuoy,
  DollarSign,
  BookOpen,
  PlayCircle,
  LogOut,
} from "lucide-react";
import OperationCard from "@/components/OperationCard";
import SupportCard from "@/components/SupportCard";
import logoLavoura from "@/assets/logo-lavoura.png";

interface IndexProps {
  onLogout: () => void;
}

const operationSystems = [
  {
    title: "Totem de Pagamento",
    description: "Gerencie pagamentos e ciclos das máquinas.",
    href: "https://lavoura.maxpan.com.br/",
    icon: <Monitor className="h-6 w-6" />,
  },
  {
    title: "Máquina de Café",
    description: "Controle e monitoramento do café.",
    href: "https://app.macpay.com.br/login",
    icon: <Coffee className="h-6 w-6" />,
  },
  {
    title: "Geladeira / Face ID",
    description: "Reconhecimento facial, controle de acesso e consumo da geladeira inteligente.",
    href: "https://touchpay.market/#/dashboard",
    icon: <ScanFace className="h-6 w-6" />,
  },
  {
    title: "Gestão Financeira",
    description: "Controle financeiro completo para sua franquia.",
    href: "https://lavourafinancas.lovable.app",
    icon: <DollarSign className="h-6 w-6" />,
  },
];

const supportItems = [
  {
    title: "Suporte Totem",
    description: "Problemas com pagamento ou máquinas",
    links: [{ label: "Abrir WhatsApp", href: "https://wa.me/554896309300" }],
    icon: <Headphones className="h-6 w-6" />,
  },
  {
    title: "Suporte Face ID",
    description: "Problemas com liberação de acesso e reconhecimento facial",
    links: [{ label: "Abrir WhatsApp", href: "https://wa.me/552139006600" }],
    icon: <ScanFace className="h-6 w-6" />,
  },
  {
    title: "Suporte Franquia",
    description: "Máquinas, dosadoras e demais dúvidas operacionais",
    links: [
      { label: "Contato 1", href: "https://wa.me/5592991176452" },
      { label: "Contato 2", href: "https://wa.me/554791401427" },
    ],
    icon: <LifeBuoy className="h-6 w-6" />,
  },
];

const trainingItems = [
  {
    title: "Manual de Operação",
    description: "Passo a passo completo para a operação diária da sua unidade.",
    links: [{ label: "Acessar Manual", href: "#", isWhatsApp: false }],
    icon: <BookOpen className="h-6 w-6" />,
  },
  {
    title: "Vídeos de Treinamento",
    description: "Tutoriais em vídeo sobre abertura, fechamento e manutenção das máquinas.",
    links: [{ label: "Ver Vídeos", href: "#", isWhatsApp: false }],
    icon: <PlayCircle className="h-6 w-6" />,
  },
];

const Index = ({ onLogout }: IndexProps) => {
  return (
    <div className="min-h-screen bg-background">

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur-sm px-6 py-3">
        <div className="mx-auto max-w-5xl flex items-center justify-between">
          <img src={logoLavoura} alt="Lavoura" className="h-8 object-contain" />
          <button
            onClick={onLogout}
            className="inline-flex items-center gap-1.5 text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Sair
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary px-6 py-16 md:py-24">
        {/* Subtle texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative mx-auto max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-body text-sm font-medium tracking-widest text-primary-foreground/50 uppercase"
          >
            Bem-vindo à
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-1 font-display text-5xl text-primary-foreground md:text-7xl tracking-wide leading-none"
          >
            CENTRAL DO FRANQUEADO
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-4 text-base text-primary-foreground/70 font-body max-w-md"
          >
            Sua operação no controle. Sua lavanderia funcionando.
          </motion.p>
        </div>
      </section>

      {/* Sistemas da Operação */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="font-body text-xs font-medium tracking-widest text-muted-foreground uppercase">Acesso rápido</p>
            <h2 className="mt-1 font-display text-3xl text-foreground md:text-4xl tracking-wide">
              SISTEMAS DA OPERAÇÃO
            </h2>
          </motion.div>
          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-5">
            {operationSystems.map((system, i) => (
              <OperationCard key={system.title} {...system} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Treinamentos */}
      <section className="px-6 py-16 md:py-20 bg-muted/30">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="font-body text-xs font-medium tracking-widest text-muted-foreground uppercase">Capacitação</p>
            <h2 className="mt-1 font-display text-3xl text-foreground md:text-4xl tracking-wide">
              TREINAMENTOS
            </h2>
          </motion.div>
          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-5">
            {trainingItems.map((item, i) => (
              <SupportCard key={item.title} {...item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Suporte */}
      <section className="px-6 py-16 md:py-20 bg-muted/50">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="font-body text-xs font-medium tracking-widest text-muted-foreground uppercase">Precisa de ajuda?</p>
            <h2 className="mt-1 font-display text-3xl text-foreground md:text-4xl tracking-wide">
              SUPORTE
            </h2>
          </motion.div>
          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-5">
            {supportItems.map((item, i) => (
              <SupportCard key={item.title} {...item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8">
        <p className="text-center text-sm text-muted-foreground font-body">
          Lavoura © 2026 — Central do Franqueado
        </p>
      </footer>
    </div>
  );
};

export default Index;
