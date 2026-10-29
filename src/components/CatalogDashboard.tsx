import { useState } from "react";
import {
  Bell,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  List,
  MoreHorizontal,
  Package,
  Plus,
  Search,
  ShoppingBag,
  Sparkles,
  Users,
} from "lucide-react";

const products = [
  {
    id: "PRD-001",
    name: "Auriculares inalámbricos",
    description: "Sonido nítido y batería de larga duración.",
    price: 79.99,
    stock: 24,
    category: "Tecnología",
    image_url: "/placeholder.svg?height=96&width=96",
    created_at: "12 oct 2026",
  },
  {
    id: "PRD-002",
    name: "Mochila urbana",
    description: "Diseño resistente para todos los días.",
    price: 54.5,
    stock: 8,
    category: "Accesorios",
    image_url: "/placeholder.svg?height=96&width=96",
    created_at: "10 oct 2026",
  },
  {
    id: "PRD-003",
    name: "Lámpara de escritorio",
    description: "Luz cálida con intensidad ajustable.",
    price: 42,
    stock: 0,
    category: "Hogar",
    image_url: "/placeholder.svg?height=96&width=96",
    created_at: "08 oct 2026",
  },
  {
    id: "PRD-004",
    name: "Botella térmica",
    description: "Mantiene tus bebidas frías o calientes.",
    price: 28.9,
    stock: 36,
    category: "Hogar",
    image_url: "/placeholder.svg?height=96&width=96",
    created_at: "06 oct 2026",
  },
  {
    id: "PRD-005",
    name: "Camiseta esencial",
    description: "Algodón suave, corte clásico y cómodo.",
    price: 24.99,
    stock: 15,
    category: "Ropa",
    image_url: "/placeholder.svg?height=96&width=96",
    created_at: "04 oct 2026",
  },
];

const navItems = [
  { label: "Catálogo", icon: Package, active: true },
  { label: "Órdenes", icon: ShoppingBag, count: "12" },
  { label: "Usuarios", icon: Users },
];

export function CatalogDashboard() {
  const [view, setView] = useState<"grid" | "list">("list");

  const categories = ["Todas", "Tecnología", "Accesorios", "Hogar", "Ropa"];

  return (
    <div className="min-h-screen bg-[#090b11] text-zinc-100">
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-white/[0.07] bg-[#0d1018] lg:flex lg:flex-col">
        <div className="flex h-20 items-center gap-3 border-b border-white/[0.07] px-7">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-violet-600 text-lg font-black text-white shadow-lg shadow-fuchsia-500/20">
            M
          </div>
          <div>
            <span className="block text-lg font-bold tracking-tight">
              Mercado
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
              Studio
            </span>
          </div>
        </div>
        <nav className="space-y-1 px-4 py-8" aria-label="Navegación principal">
          <p className="mb-4 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
            Workspace
          </p>
          {navItems.map(({ label, icon: Icon, active, count }) => (
            <button
              key={label}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${active ? "bg-fuchsia-500/10 text-fuchsia-300 ring-1 ring-fuchsia-400/20" : "text-zinc-500 hover:bg-white/[0.04] hover:text-zinc-200"}`}
            >
              <Icon size={18} strokeWidth={1.8} />
              <span>{label}</span>
              {count && (
                <span className="ml-auto rounded-full bg-fuchsia-500/15 px-2 py-0.5 text-xs text-fuchsia-300">
                  {count}
                </span>
              )}
            </button>
          ))}
        </nav>
        <div className="mt-auto border-t border-white/[0.07] p-4">
          <div className="flex items-center gap-3 rounded-xl bg-white/[0.03] p-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-orange-500 text-sm font-bold text-orange-950">
              LS
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">Laura Sánchez</p>
              <p className="truncate text-xs text-zinc-500">Administrador</p>
            </div>
            <ChevronDown size={15} className="ml-auto text-zinc-500" />
          </div>
        </div>
      </aside>

      <main className="lg:ml-64">
        <header className="flex h-20 items-center justify-between border-b border-white/[0.07] bg-[#0d1018]/80 px-5 backdrop-blur-xl sm:px-8">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
              Panel de administración
            </p>
            <h1 className="mt-1 text-xl font-bold tracking-tight">Catálogo</h1>
          </div>
          <button
            aria-label="Ver notificaciones"
            className="relative rounded-xl border border-white/[0.08] p-2.5 text-zinc-400 transition hover:border-fuchsia-400/30 hover:text-white"
          >
            <Bell size={19} />
            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_8px_#e879f9]" />
          </button>
        </header>

        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
          <section className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/20 bg-fuchsia-500/10 px-3 py-1 text-xs font-semibold text-fuchsia-300">
                <Sparkles size={13} /> Vista general
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Tus productos<span className="text-fuchsia-400">.</span>
              </h2>
              <p className="mt-2 text-sm text-zinc-500">
                Administra y descubre el inventario de tu tienda.
              </p>
            </div>
            <button className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-600 px-5 text-sm font-bold text-white shadow-lg shadow-fuchsia-500/20 transition hover:brightness-110">
              <Plus size={17} /> Nuevo producto
            </button>
          </section>

          <section className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              ["Productos de ejemplo", "5", "Catálogo de prueba"],
              ["En inventario", "83", "Unidades de ejemplo"],
              ["Sin stock", "1", "Requiere atención"],
            ].map(([label, value, note], index) => (
              <div
                key={label}
                className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#11151f] p-5 shadow-2xl"
              >
                <div
                  className={`absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl ${index === 2 ? "bg-rose-500/10" : "bg-fuchsia-500/10"}`}
                />
                <p className="relative text-xs font-medium uppercase tracking-wider text-zinc-500">
                  {label}
                </p>
                <div className="relative mt-3 flex items-baseline justify-between gap-3">
                  <p className="text-3xl font-bold tracking-tight">{value}</p>
                  <span
                    className={`text-xs font-semibold ${index === 2 ? "text-rose-400" : "text-emerald-400"}`}
                  >
                    {note}
                  </span>
                </div>
              </div>
            ))}
          </section>

          <section className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#11151f] shadow-2xl">
            <div className="flex flex-col gap-4 border-b border-white/[0.07] p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative max-w-sm flex-1">
                <Search
                  size={17}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-600"
                />
                <input
                  disabled
                  placeholder="Buscar productos..."
                  aria-label="Buscar productos"
                  className="h-11 w-full rounded-xl border border-white/[0.08] bg-[#0b0e15] pl-10 pr-3 text-sm text-zinc-200 outline-none placeholder:text-zinc-600 focus:border-fuchsia-400/50 focus:ring-2 focus:ring-fuchsia-400/10"
                />
              </div>
              <div className="flex items-center gap-2">
                <select
                  defaultValue="Todas"
                  disabled
                  aria-label="Filtrar por categoría"
                  className="h-11 rounded-xl border border-white/[0.08] bg-[#0b0e15] px-3 text-sm text-zinc-400 outline-none focus:border-fuchsia-400/50"
                >
                  {categories.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
                <div className="flex rounded-xl border border-white/[0.08] bg-[#0b0e15] p-1">
                  <button
                    aria-label="Vista de lista"
                    onClick={() => setView("list")}
                    className={`rounded-lg p-2 ${view === "list" ? "bg-white/[0.1] text-fuchsia-300" : "text-zinc-600"}`}
                  >
                    <List size={16} />
                  </button>
                  <button
                    aria-label="Vista de cuadrícula"
                    onClick={() => setView("grid")}
                    className={`rounded-lg p-2 ${view === "grid" ? "bg-white/[0.1] text-fuchsia-300" : "text-zinc-600"}`}
                  >
                    <LayoutGrid size={16} />
                  </button>
                </div>
              </div>
            </div>

            {view === "list" ? (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] text-left">
                  <thead>
                    <tr className="border-b border-white/[0.06] bg-white/[0.02] text-[10px] font-bold uppercase tracking-wider text-zinc-600">
                      <th className="px-5 py-3">Producto</th>
                      <th className="px-4 py-3">Categoría</th>
                      <th className="px-4 py-3">Precio</th>
                      <th className="px-4 py-3">Stock</th>
                      <th className="px-4 py-3">Creado</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr
                        key={product.id}
                        className="border-b border-white/[0.05] last:border-0 hover:bg-white/[0.025]"
                      >
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={product.image_url}
                              alt=""
                              className="h-11 w-11 rounded-xl border border-white/[0.08] bg-[#0b0e15] object-cover"
                            />
                            <div>
                              <p className="text-sm font-semibold">
                                {product.name}
                              </p>
                              <p className="mt-0.5 max-w-xs truncate text-xs text-zinc-500">
                                {product.description}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <span className="rounded-full bg-violet-400/10 px-2.5 py-1 text-xs font-medium text-violet-300">
                            {product.category}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-sm font-semibold">
                          ${product.price.toFixed(2)}
                        </td>
                        <td className="px-4 py-4">
                          <span
                            className={`text-sm font-medium ${product.stock === 0 ? "text-rose-400" : product.stock < 10 ? "text-amber-400" : "text-zinc-400"}`}
                          >
                            {product.stock === 0
                              ? "Sin stock"
                              : `${product.stock} unidades`}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-sm text-zinc-500">
                          {product.created_at}
                        </td>
                        <td className="px-4 py-4">
                          <button
                            aria-label={`Más opciones para ${product.name}`}
                            className="rounded-lg p-1.5 text-zinc-600 hover:bg-white/[0.06] hover:text-white"
                          >
                            <MoreHorizontal size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="grid gap-4 p-4 sm:grid-cols-2 xl:grid-cols-3">
                {products.map((product) => (
                  <article
                    key={product.id}
                    className="group rounded-2xl border border-white/[0.08] bg-[#0d1018] p-4 transition hover:-translate-y-1 hover:border-fuchsia-400/30"
                  >
                    <div className="mb-4 flex h-36 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-white/[0.06] to-white/[0.01]">
                      <img
                        src={product.image_url}
                        alt=""
                        className="h-28 w-28 object-cover opacity-80 transition group-hover:scale-105"
                      />
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="mt-1 text-sm text-zinc-500">
                          {product.description}
                        </p>
                      </div>
                      <span className="text-sm font-bold text-fuchsia-300">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-xs">
                      <span className="rounded-full bg-violet-400/10 px-2.5 py-1 text-violet-300">
                        {product.category}
                      </span>
                      <span
                        className={
                          product.stock === 0
                            ? "text-rose-400"
                            : "text-emerald-400"
                        }
                      >
                        {product.stock === 0
                          ? "Sin stock"
                          : `${product.stock} en stock`}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            )}
            {products.length === 0 && (
              <p className="px-5 py-12 text-center text-sm text-zinc-500">
                No encontramos productos con esa búsqueda.
              </p>
            )}
            <div className="flex items-center justify-between border-t border-white/[0.07] px-5 py-3 text-sm text-zinc-600">
              <span>
                Mostrando {products.length} de {products.length} productos
              </span>
              <div className="flex gap-1">
                <button
                  aria-label="Página anterior"
                  className="rounded-lg border border-white/[0.08] p-1.5 text-zinc-600"
                >
                  <ChevronLeft size={15} />
                </button>
                <button
                  aria-label="Página siguiente"
                  className="rounded-lg border border-white/[0.08] p-1.5 text-zinc-600"
                >
                  <ChevronRight size={15} />
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
