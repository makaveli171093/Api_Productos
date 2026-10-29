import { useState } from "react";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShoppingBag,
  Sparkles,
  User,
} from "lucide-react";

type AuthPageProps = {
  onVerCatalogo: () => void;
};

export function AuthPage({ onVerCatalogo }: AuthPageProps) {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen bg-[#08090d] text-zinc-100 lg:grid lg:grid-cols-[1.05fr_0.95fr]">
      <section className="relative hidden overflow-hidden border-r border-white/[0.08] bg-[#0d0f17] p-10 lg:flex lg:flex-col xl:p-16">
        <div className="absolute -left-28 top-24 h-80 w-80 rounded-full bg-fuchsia-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-600/15 blur-[130px]" />
        <div className="relative flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500 to-violet-600 shadow-lg shadow-fuchsia-500/20">
            <ShoppingBag size={21} />
          </div>
          <div>
            <span className="block text-lg font-bold tracking-tight">
              Mercado
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
              Studio
            </span>
          </div>
        </div>
        <div className="relative mt-auto max-w-lg pb-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/20 bg-fuchsia-500/10 px-3 py-1.5 text-xs font-semibold text-fuchsia-300">
            <Sparkles size={13} /> Gestión sin complicaciones
          </div>
          <h1 className="text-5xl font-bold leading-[1.04] tracking-[-0.04em] xl:text-6xl">
            Tu tienda,
            <br />
            <span className="bg-gradient-to-r from-fuchsia-300 to-violet-400 bg-clip-text text-transparent">
              a otro nivel.
            </span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-zinc-500">
            Administra productos, órdenes y usuarios desde un solo espacio
            diseñado para hacer crecer tu negocio.
          </p>
          <div className="mt-10 flex items-center gap-8 text-sm">
            <div>
              <p className="text-2xl font-bold text-white">2.4k+</p>
              <p className="mt-1 text-zinc-600">tiendas activas</p>
            </div>
            <div className="h-9 w-px bg-white/10" />
            <div>
              <p className="text-2xl font-bold text-white">98.7%</p>
              <p className="mt-1 text-zinc-600">satisfacción</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-8">
        <div className="w-full max-w-md">
          <div className="mb-10 flex items-center gap-3 lg:hidden">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-violet-600">
              <ShoppingBag size={19} />
            </div>
            <div>
              <span className="block font-bold">Mercado</span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-500">
                Studio
              </span>
            </div>
          </div>
          <div className="mb-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-400">
              Bienvenido de vuelta
            </p>
            <h2 className="text-3xl font-bold tracking-tight">
              {mode === "login" ? "Entra a tu cuenta" : "Crea tu cuenta"}
            </h2>
            <p className="mt-2 text-sm text-zinc-500">
              {mode === "login"
                ? "Continúa gestionando tu tienda."
                : "Empieza a gestionar tu tienda hoy."}
            </p>
          </div>
          <div className="mb-7 grid grid-cols-2 rounded-xl border border-white/[0.08] bg-white/[0.025] p-1">
            <button
              onClick={() => setMode("login")}
              className={`rounded-lg py-2.5 text-sm font-semibold transition ${mode === "login" ? "bg-white/[0.1] text-white shadow-sm" : "text-zinc-500 hover:text-zinc-300"}`}
            >
              Iniciar sesión
            </button>
            <button
              onClick={() => setMode("register")}
              className={`rounded-lg py-2.5 text-sm font-semibold transition ${mode === "register" ? "bg-white/[0.1] text-white shadow-sm" : "text-zinc-500 hover:text-zinc-300"}`}
            >
              Registrarse
            </button>
          </div>
          <form
            className="space-y-5"
            onSubmit={(event) => event.preventDefault()}
          >
            {mode === "register" && (
              <label className="block">
                <span className="mb-2 block text-xs font-medium text-zinc-400">
                  Nombre completo
                </span>
                <div className="relative">
                  <User
                    size={17}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-600"
                  />
                  <input
                    required
                    type="text"
                    placeholder="Tu nombre"
                    className="h-12 w-full rounded-xl border border-white/[0.09] bg-[#11131b] pl-11 pr-4 text-sm outline-none transition placeholder:text-zinc-600 focus:border-fuchsia-400/60 focus:ring-2 focus:ring-fuchsia-400/10"
                  />
                </div>
              </label>
            )}
            <label className="block">
              <span className="mb-2 block text-xs font-medium text-zinc-400">
                Correo electrónico
              </span>
              <div className="relative">
                <Mail
                  size={17}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-600"
                />
                <input
                  required
                  type="email"
                  placeholder="tu@correo.com"
                  className="h-12 w-full rounded-xl border border-white/[0.09] bg-[#11131b] pl-11 pr-4 text-sm outline-none transition placeholder:text-zinc-600 focus:border-fuchsia-400/60 focus:ring-2 focus:ring-fuchsia-400/10"
                />
              </div>
            </label>
            <label className="block">
              <span className="mb-2 block text-xs font-medium text-zinc-400">
                Contraseña
              </span>
              <div className="relative">
                <LockKeyhole
                  size={17}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-600"
                />
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="h-12 w-full rounded-xl border border-white/[0.09] bg-[#11131b] pl-11 pr-12 text-sm outline-none transition placeholder:text-zinc-600 focus:border-fuchsia-400/60 focus:ring-2 focus:ring-fuchsia-400/10"
                />
                <button
                  type="button"
                  aria-label={
                    showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
                  }
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-zinc-300"
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </label>
            {mode === "login" && (
              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 text-zinc-500">
                  <input type="checkbox" className="accent-fuchsia-500" />{" "}
                  Recordarme
                </label>
                <button
                  type="button"
                  className="font-medium text-fuchsia-400 hover:text-fuchsia-300"
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </div>
            )}
            <button
              type="submit"
              className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-600 text-sm font-bold text-white shadow-lg shadow-fuchsia-500/20 transition hover:brightness-110"
            >
              {mode === "login" ? "Entrar al panel" : "Crear mi cuenta"}
              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </button>
          </form>
          <p className="mt-8 text-center text-xs text-zinc-600">
            Al continuar, aceptas nuestros{" "}
            <button className="text-zinc-400 hover:text-white">
              términos de uso
            </button>{" "}
            y{" "}
            <button className="text-zinc-400 hover:text-white">
              política de privacidad
            </button>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
