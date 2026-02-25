import Header from "../components/Header";
import { BookOpen, Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";

export default function PublicationsPage() {
  const publications = [
    {
      title: "Architecture Microservices en Production : Retour d'Expérience",
      excerpt: "Guide complet sur la conception, le déploiement et la maintenance de systèmes microservices à grande échelle. Couvre les patterns d'architecture, la gestion des données distribuées, l'observabilité, et les stratégies de déploiement.",
      date: "15 Janvier 2026",
      readTime: "12 min",
      category: "Architecture",
      tags: ["Microservices", "Spring Boot", "Docker", "Kubernetes"],
      featured: true
    },
    {
      title: "Digitalisation des Services Publics en Afrique",
      excerpt: "Analyse des défis et opportunités du numérique gouvernemental dans le contexte africain. Études de cas sur des projets réels de transformation digitale.",
      date: "10 Décembre 2025",
      readTime: "10 min",
      category: "Transformation Digitale",
      tags: ["E-Government", "Afrique", "Innovation"]
    },
    {
      title: "Optimisation des Performances Backend",
      excerpt: "Techniques avancées pour améliorer les temps de réponse et la scalabilité des APIs REST. Caching, indexation, et optimisation de requêtes.",
      date: "22 Novembre 2025",
      readTime: "8 min",
      category: "Performance",
      tags: ["Backend", "Optimisation", "APIs"]
    },
    {
      title: "Sécurité des Applications Web Modernes",
      excerpt: "Best practices pour sécuriser vos applications contre les vulnérabilités courantes. OWASP Top 10, authentification, et protection des données.",
      date: "05 Octobre 2025",
      readTime: "15 min",
      category: "Sécurité",
      tags: ["Security", "OWASP", "Best Practices"]
    },
    {
      title: "React Server Components : Guide Pratique",
      excerpt: "Comprendre et implémenter les Server Components dans vos applications Next.js. Avantages, cas d'usage et patterns recommandés.",
      date: "18 Septembre 2025",
      readTime: "9 min",
      category: "Frontend",
      tags: ["React", "Next.js", "Server Components"]
    },
    {
      title: "CI/CD avec GitHub Actions",
      excerpt: "Automatiser vos déploiements et tests avec des workflows GitHub Actions efficaces. Configuration, optimisation et bonnes pratiques.",
      date: "30 Août 2025",
      readTime: "11 min",
      category: "DevOps",
      tags: ["CI/CD", "GitHub Actions", "Automation"]
    },
    {
      title: "Design Patterns en Java Spring",
      excerpt: "Les patterns essentiels pour structurer vos applications Spring Boot professionnelles. Singleton, Factory, Strategy et plus encore.",
      date: "12 Juillet 2025",
      readTime: "13 min",
      category: "Design Patterns",
      tags: ["Java", "Spring Boot", "Patterns"]
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen bg-card-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-card-2 to-card-1 py-16 sm:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(138,180,248,0.1),transparent_50%)]"></div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-card-2 border border-primary/40 rounded-[5px] mb-6">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-semibold">Blog technique</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Publications & Articles</h1>
              <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
                Partage de connaissances techniques et analyses sur le développement logiciel et la transformation numérique
              </p>
            </div>
          </div>
        </section>

        {/* Publications */}
        <section className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Featured Article */}
            {publications.filter(p => p.featured).map((article, index) => (
              <div key={index} className="mb-12">
                <div className="bg-gradient-to-br from-card-2 to-card-1 border border-white/10 rounded-xl overflow-hidden hover:border-primary/30 transition-all">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 sm:p-12">
                    <div className="lg:col-span-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-card-2 border border-primary/40 rounded-[5px] mb-4">
                        <Tag className="w-3 h-3 text-primary" />
                        <span className="text-xs text-primary font-semibold">Article Vedette</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 hover:text-primary transition-colors cursor-pointer">
                        {article.title}
                      </h2>
                      <p className="text-white/70 leading-relaxed mb-6 text-base sm:text-lg">
                        {article.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {article.tags.map((tag, i) => (
                          <span key={i} className="px-3 py-1 bg-white/5 text-white/60 text-xs rounded-[5px]">{tag}</span>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-white/50">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{article.date}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime} de lecture</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-full h-48 lg:h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
                        <BookOpen className="w-20 h-20 text-primary/40" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {publications.filter(p => !p.featured).map((article, index) => (
                <div key={index} className="group bg-card-2 border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all hover:-translate-y-1 cursor-pointer">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="inline-flex items-center gap-2 px-2 py-1 bg-card-2 border border-primary/40 rounded-[5px] mb-3">
                    <span className="text-xs text-primary font-semibold">{article.category}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-sm text-white/60 mb-4 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-white/5 text-white/50 text-xs rounded-[5px]">{tag}</span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-xs pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-white/40">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1 text-primary group-hover:gap-2 transition-all">
                      <span>Lire</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Newsletter CTA */}
            <div className="mt-16 bg-gradient-to-br from-primary/10 to-card-2 border border-primary/30 rounded-xl p-8 sm:p-12 text-center">
              <div className="max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Restez informé</h3>
                <p className="text-white/70 mb-8 leading-relaxed">
                  Recevez mes derniers articles et analyses techniques directement dans votre boîte mail. 
                  Pas de spam, juste du contenu de qualité.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                  <button className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-all whitespace-nowrap">
                    S'abonner
                  </button>
                </div>
                <p className="text-xs text-white/50 mt-4">
                  En vous abonnant, vous acceptez de recevoir nos emails. Vous pouvez vous désabonner à tout moment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
