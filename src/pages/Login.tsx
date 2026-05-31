import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Eye, EyeOff, AlertCircle } from "lucide-react";
import logoLavoura from "@/assets/logo-lavoura.png";

const FRANCHISE_PASSWORD = "lavoura2026";

interface LoginProps {
  onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === FRANCHISE_PASSWORD) {
      sessionStorage.setItem("lavoura_auth", "true");
      onLogin();
    } else {
      setError(true);
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-4">
      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-sm"
      >
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src={logoLavoura} alt="Lavoura" className="h-12 object-contain" />
          </div>

          <div className="text-center mb-8">
            <h1 className="font-display text-3xl text-foreground tracking-wide">CENTRAL DO FRANQUEADO</h1>
            <p className="mt-1 text-sm font-body text-muted-foreground">
              Digite a senha da sua unidade para continuar
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Lock className="h-4 w-4" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(false); }}
                placeholder="Senha da unidade"
                className={`w-full pl-10 pr-10 py-3 rounded-lg border font-body text-sm bg-background transition-colors outline-none focus:ring-2 focus:ring-primary/30 ${
                  error ? "border-red-400 focus:ring-red-200" : "border-border focus:border-primary"
                }`}
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-red-500 text-sm font-body"
              >
                <AlertCircle className="h-4 w-4 shrink-0" />
                Senha incorreta. Tente novamente.
              </motion.div>
            )}

            <motion.button
              type="submit"
              animate={shaking ? { x: [-6, 6, -6, 6, -4, 4, 0] } : {}}
              transition={{ duration: 0.4 }}
              className="w-full bg-primary text-primary-foreground font-display text-lg tracking-widest py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              ENTRAR
            </motion.button>
          </form>

          <p className="mt-6 text-center text-xs text-muted-foreground font-body">
            Não sabe a senha? Entre em contato com a franqueadora.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
