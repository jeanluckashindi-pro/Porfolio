'use client';

import { useEffect, useState } from 'react';
import { Download } from 'lucide-react';

export default function PDFDownloadButton() {
  const [mounted, setMounted] = useState(false);
  const [PDFDownloadLink, setPDFDownloadLink] = useState<any>(null);
  const [CVDocument, setCVDocument] = useState<any>(null);

  useEffect(() => {
    setMounted(true);
    
    // Import dynamique après le montage
    Promise.all([
      import('@react-pdf/renderer'),
      import('./CVDocument')
    ]).then(([pdfModule, cvModule]) => {
      setPDFDownloadLink(() => pdfModule.PDFDownloadLink);
      setCVDocument(() => cvModule.CVDocument);
    });
  }, []);

  if (!mounted || !PDFDownloadLink || !CVDocument) {
    return (
      <button
        disabled
        className="inline-flex items-center justify-center gap-2 bg-card-2 text-white/50 px-8 py-4 rounded-lg font-semibold border border-white/20 cursor-not-allowed"
      >
        <Download className="w-5 h-5" />
        Préparation...
      </button>
    );
  }

  return (
    <PDFDownloadLink
      document={<CVDocument />}
      fileName="CV_Jean-Luc_Kashindi_Nestor.pdf"
      className="inline-flex items-center justify-center gap-2 bg-card-2 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/5 transition-all"
    >
      {({ loading }: { loading: boolean }) => (
        <>
          <Download className="w-5 h-5" />
          {loading ? 'Génération...' : 'Télécharger PDF'}
        </>
      )}
    </PDFDownloadLink>
  );
}
