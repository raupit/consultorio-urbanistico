import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";
import { blogCategories } from "@/lib/blog-data";

const BASE_URL = "https://consultorio-urbanistico.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date("2026-05-25"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date("2026-05-25"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Blog categories
  const categoryPages: MetadataRoute.Sitemap = blogCategories.map((cat) => ({
    url: `${BASE_URL}/blog/categoria/${cat.slug}`,
    lastModified: new Date("2026-05-25"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Municipality pages for local SEO
  const municipalities = [
    "manresa", "sant-fruitos-de-bages", "artes", "santpedor", "sallent",
    "navarcles", "callus", "balsareny", "suria", "cardona",
    "navas", "sant-joan-de-vilatorrada", "castellbell-i-el-vilar",
    "castellgali", "sant-vivenc-de-castellet", "el-pont-de-vilomara",
    "marganell", "monistrol-de-montserrat", "rajadell",
    "sant-salvador-de-guardiola", "sant-mateu-de-bages", "fonollosa",
    "avinyo", "calders", "santa-maria-dolo", "castellfollit-del-boix",
    "gaia", "mura", "talamanca"
  ];

  const municipalityPages: MetadataRoute.Sitemap = municipalities.map((muni) => ({
    url: `${BASE_URL}/municipio/${muni}`,
    lastModified: new Date("2026-05-25"),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages, ...categoryPages, ...municipalityPages];
}
