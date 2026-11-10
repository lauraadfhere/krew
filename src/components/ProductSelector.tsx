"use client";

import { useState, useMemo } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

type Product = Dictionary["products"]["items"][number];

/* ─── Product card badge ─── */
function CompatBadge() {
  return (
    <span className="absolute left-3 top-3 z-10 rounded-sm bg-[#dbe7f5] px-2.5 py-1 text-[10px] font-semibold text-black">
      KREW Certified
    </span>
  );
}

/* ─── Filter dropdown ─── */
function FilterDropdown({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex-1 min-w-[200px]">
      <label className="mb-2 block text-[13px] font-semibold text-black">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-lg border border-zinc-300 bg-white px-4 py-3 pr-10 text-[14px] text-zinc-700 outline-none transition-colors hover:border-zinc-400 focus:border-[#CC0000] focus:ring-2 focus:ring-[#CC0000]/15"
        >
          <option value="">Select an option</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}

/* ─── Single product card (OMRON style) ─── */
function ProductCard({ product, index }: { product: Product; index: number }) {
  /* placeholder product images — real project would use actual images */
  const placeholders = [
    "https://images.unsplash.com/photo-1559757175-7cb036f0e528?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1530026405186-ed1f139313bb?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=80",
  ];

  return (
    <article className="group relative flex flex-col overflow-hidden bg-white transition-shadow duration-300 hover:shadow-lg">
      {/* Badge */}
      <CompatBadge />

      {/* Image area */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f5f5]">
        <img
          src={placeholders[index % placeholders.length]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#CC0000]">
          {product.category}
        </span>
        <h3 className="mt-2 text-[17px] font-semibold leading-snug tracking-[-0.01em] text-black">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-[13.5px] leading-6 text-zinc-600">
          {product.description}
        </p>
        <a
          href="#contact"
          className="mt-4 inline-flex items-center gap-2 self-start text-[13px] font-semibold text-black transition-colors group-hover:text-[#CC0000]"
        >
          Learn more
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </article>
  );
}

/* ─── Main product selector section ─── */
export default function ProductSelector({ products, labels }: { products: Product[]; labels: { title: string; intro: string; addToQuote: string } }) {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const categories = useMemo(() => [...new Set(products.map((p) => p.category))], [products]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (categoryFilter && p.category !== categoryFilter) return false;
      if (typeFilter && !p.name.toLowerCase().includes(typeFilter.toLowerCase())) return false;
      return true;
    });
  }, [products, categoryFilter, typeFilter]);

  return (
    <section id="products" className="bg-[#f2f2f2] py-16 md:py-20" style={{ fontFamily: "'KREW Inter', 'DIN Pro', Arial, sans-serif" }}>
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        {/* Section title — OMRON style gradient text */}
        <h2 className="text-center text-[30px] font-light tracking-[-0.01em] text-black sm:text-[38px] lg:text-[44px]">
          {labels.title}
        </h2>

        {/* Filter dropdowns row — OMRON style */}
        <div className="mt-10 flex flex-wrap gap-6 border-b border-zinc-300 pb-4">
          <FilterDropdown
            label="Category"
            options={categories}
            value={categoryFilter}
            onChange={setCategoryFilter}
          />
          <FilterDropdown
            label="Equipment type"
            options={products.map((p) => p.name)}
            value={typeFilter}
            onChange={setTypeFilter}
          />
          <FilterDropdown
            label="Certification"
            options={["CE Certified", "FDA Cleared", "ISO 13485"]}
            value=""
            onChange={() => {}}
          />
        </div>

        {/* Product cards grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-10 rounded-lg border border-dashed border-zinc-300 bg-white px-8 py-16 text-center">
            <p className="text-lg font-medium text-zinc-500">No products match your filters.</p>
            <button
              onClick={() => { setCategoryFilter(""); setTypeFilter(""); }}
              className="mt-3 text-[14px] font-semibold text-[#CC0000] underline underline-offset-4 transition-colors hover:text-[#a60000]"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
