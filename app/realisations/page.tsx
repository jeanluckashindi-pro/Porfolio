import Header from "../components/Header";

export default function Realisations() {
  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen bg-card-1">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <h1 className="text-4xl font-bold text-white mb-4">Réalisations</h1>
          <p className="text-white/60">Projets aboutis</p>
        </div>
      </main>
    </>
  );
}
