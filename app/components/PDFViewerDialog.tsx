'use client';

import { useEffect, useState } from 'react';
import { Dialog } from 'primereact/dialog';

interface PDFViewerDialogProps {
  visible: boolean;
  onHide: () => void;
}

export default function PDFViewerDialog({ visible, onHide }: PDFViewerDialogProps) {
  const [mounted, setMounted] = useState(false);
  const [PDFViewer, setPDFViewer] = useState<any>(null);
  const [CVDocument, setCVDocument] = useState<any>(null);

  useEffect(() => {
    setMounted(true);
    
    // Import dynamique après le montage
    if (visible) {
      Promise.all([
        import('@react-pdf/renderer'),
        import('./CVDocument')
      ]).then(([pdfModule, cvModule]) => {
        setPDFViewer(() => pdfModule.PDFViewer);
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
        {mounted && PDFViewer && CVDocument ? (
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
