'use client';

import { useEffect, useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Download, Smartphone } from 'lucide-react';

interface PDFViewerDialogProps {
  visible: boolean;
  onHide: () => void;
}

function isMobileDevice() {
  if (typeof window === 'undefined') return false;
  return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
}

export default function PDFViewerDialog({ visible, onHide }: PDFViewerDialogProps) {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [PDFViewer, setPDFViewer] = useState<any>(null);
  const [PDFDownloadLink, setPDFDownloadLink] = useState<any>(null);
  const [CVDocument, setCVDocument] = useState<any>(null);

  useEffect(() => {
    setMounted(true);
    setIsMobile(isMobileDevice());

    if (visible) {
      Promise.all([
        import('@react-pdf/renderer'),
        import('./CVDocument')
      ]).then(([pdfModule, cvModule]) => {
        setPDFViewer(() => pdfModule.PDFViewer);
        setPDFDownloadLink(() => pdfModule.PDFDownloadLink);
        setCVDocument(() => cvModule.CVDocument);
      });
    }
  }, [visible]);

  return (
    <Dialog
      header="Curriculum Vitae - Jean-Luc Kashindi Nestor"
      visible={visible}
      style={{ width: '60vw', maxWidth: '1200px', height: '95vh' }}
      contentStyle={{ height: 'calc(95vh - 60px)', padding: '0' }}
      onHide={onHide}
      maximizable
      modal
      breakpoints={{ '960px': '95vw', '640px': '100vw' }}
      className="cv-dialog"
    >
      <div style={{ width: '100%', height: '100%' }}>
        {mounted && isMobile ? (
          <div className="flex flex-col items-center justify-center h-full gap-6 p-8 text-center">
            <Smartphone className="w-16 h-16 text-primary opacity-60" />
            <div>
              <p className="text-white text-lg font-semibold mb-2">
                Prévisualisation non disponible sur mobile
              </p>
              <p className="text-white/60 text-sm">
                Les navigateurs mobiles ne supportent pas l&apos;affichage PDF intégré. Téléchargez le CV pour le consulter.
              </p>
            </div>
            {mounted && PDFDownloadLink && CVDocument ? (
              <PDFDownloadLink
                document={<CVDocument />}
                fileName="CV_Jean-Luc_Kashindi_Nestor.pdf"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all"
              >
                {({ loading }: { loading: boolean }) => (
                  <>
                    <Download className="w-5 h-5" />
                    {loading ? 'Génération...' : 'Télécharger le CV'}
                  </>
                )}
              </PDFDownloadLink>
            ) : (
              <button
                disabled
                className="inline-flex items-center justify-center gap-2 bg-primary/50 text-white px-8 py-4 rounded-lg font-semibold cursor-not-allowed"
              >
                <Download className="w-5 h-5" />
                Préparation...
              </button>
            )}
          </div>
        ) : mounted && PDFViewer && CVDocument ? (
          <PDFViewer width="100%" height="100%" showToolbar={true}>
            <CVDocument />
          </PDFViewer>
        ) : (
          <div className="flex items-center justify-center h-full text-white">
            Chargement du PDF...
          </div>
        )}
      </div>
    </Dialog>
  );
}
