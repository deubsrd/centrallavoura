import { motion } from "framer-motion";
import { Monitor, Coffee, Refrigerator, Headphones, ScanFace, LifeBuoy, DollarSign } from "lucide-react";
import OperationCard from "@/components/OperationCard";
import SupportCard from "@/components/SupportCard";
import logoLavoura from "@/assets/logo-lavoura.png";

const operationSystems = [
  {
    title: "Totem de Pagamento",
    description: "Gerencie pagamentos e ciclos das máquinas.",
    href: "https://maxlav.maxpan.com.br/system",
    icon: <Monitor className="h-6 w-6" />,
  },
  {
    title: "Máquina de Café",
    description: "Controle e monitoramento do café.",
    href: "https://app.macpay.com.br/login",
    icon: <Coffee className="h-6 w-6" />,
  },
  {
    title: "Geladeira Inteligente / Face Id",
    description: "Controle de consumo, operação da geladeira ou controle de entrada e saída da loja.",
    href: "https://touchpay.market/#/dashboard",
    icon: <Refrigerator className="h-6 w-6" />,
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
    description: "Máquinas, dosadoras e demais dúvidas",
    links: [
      { label: "Contato 1", href: "https://wa.me/5592991176452" },
      { label: "Contato 2", href: "https://wa.me/554791401427" },
    ],
    icon: <LifeBuoy className="h-6 w-6" />,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <motion.img
            src={logoLavoura}
            alt="Lavoura"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto h-16 md:h-20 object-contain"
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-display text-4xl font-bold text-primary-foreground md:text-6xl"
          >
            Central do Franqueado
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-primary-foreground/80 font-body md:text-xl"
          >
            Tudo que você precisa, em um só lugar.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-2 text-sm text-primary-foreground/60 font-body max-w-lg mx-auto"
          >
            Acesse rapidamente os sistemas que fazem sua unidade funcionar todos os dias.
          </motion.p>
        </div>
      </section>

      {/* Sistemas da Operação */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-2xl font-semibold text-foreground md:text-3xl"
          >
            Sistemas da Operação
          </motion.h2>
          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-5">
            {operationSystems.map((system, i) => (
              <OperationCard key={system.title} {...system} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Suporte */}
      <section className="bg-muted/50 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-2xl font-semibold text-foreground md:text-3xl"
          >
            Suporte
          </motion.h2>
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
          Lavoura © 2026
        </p>
      </footer>
    </div>
  );
};

export default Index;
