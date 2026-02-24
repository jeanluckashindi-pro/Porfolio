import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-card-1 font-sans">
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-between py-16 px-8 sm:items-start">
        <Image
          className="invert"
          src="/next.svg"
          alt="Next.js logo"
          width={120}
          height={24}
          priority
        />
        
        <div className="w-full flex flex-col gap-6 my-12">
          <h1 className="text-4xl font-bold text-on-surface">
            Mode Sombre Google
          </h1>
          
          <p className="text-lg text-on-surface-variant max-w-2xl">
            Les deux couleurs de fond officielles de Google en mode sombre.
          </p>

          {/* Les deux couleurs de fond Google */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-8">
            <div className="bg-card-1 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-on-surface-variant/10">
              <h2 className="text-2xl font-semibold text-primary mb-3">
                Fond Principal
              </h2>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                Couleur de fond principale de Google : <code className="bg-surface px-2 py-1 rounded text-primary">#202124</code>
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                Utilisée pour l'arrière-plan général de la page, comme sur google.com en mode sombre.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                  bg-card-1
                </span>
              </div>
            </div>

            <div className="bg-card-2 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-on-surface-variant/10">
              <h2 className="text-2xl font-semibold text-secondary mb-3">
                Fond Secondaire
              </h2>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                Couleur de surface/carte de Google : <code className="bg-card-1 px-2 py-1 rounded text-secondary">#303134</code>
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                Utilisée pour les cartes, les surfaces élevées et les éléments qui se détachent du fond.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">
                  bg-card-2
                </span>
              </div>
            </div>
          </div>

          {/* Exemple d'utilisation */}
          <div className="bg-card-2 rounded-2xl p-6 mt-4">
            <h3 className="text-xl font-semibold text-on-surface mb-3">
              Comment utiliser
            </h3>
            <div className="space-y-2 text-on-surface-variant">
              <p>• <code className="bg-card-1 px-2 py-1 rounded text-primary">bg-card-1</code> pour le fond principal (#202124)</p>
              <p>• <code className="bg-card-1 px-2 py-1 rounded text-secondary">bg-card-2</code> pour les cartes et surfaces (#303134)</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row w-full">
          <a
            className="flex h-12 items-center justify-center gap-2 rounded-[5px] bg-primary px-6 text-white transition-all hover:shadow-lg hover:scale-105"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className=""
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 items-center justify-center rounded-[5px] bg-card-2 px-6 text-white transition-all hover:bg-surface/80"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
