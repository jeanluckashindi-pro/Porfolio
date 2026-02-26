'use client';

import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

// Styles pour le CV selon le format fourni
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    fontFamily: 'Helvetica',
    position: 'relative',
    padding: 40,
  },
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: 140,
    objectFit: 'cover',
  },
  footerImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: 100,
    objectFit: 'cover',
  },
  
  // Content avec marge pour header/footer
  content: {
    marginTop: 80,
    marginBottom: 60,
  },
  contentPage2: {
    marginTop: 10,
    marginBottom: 60,
  },
  
  // Header principal
  nameSection: {
    marginBottom: 15,
    textAlign: 'center',
    borderBottom: '2 solid #8ab4f8',
    paddingBottom: 10,
  },
  name: {
    fontSize: 24,
    fontFamily: 'Helvetica-Bold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    color: '#8ab4f8',
    fontFamily: 'Helvetica-Bold',
    marginBottom: 8,
  },
  
  // Contact
  contactSection: {
    marginBottom: 15,
    textAlign: 'left',
    marginTop:'30'
  },
  contactLine: {
    fontSize: 8,
    color: '#555555',
    marginBottom: 2,
    lineHeight: 1.3,
  },
  
  // Sections
  section: {
    marginBottom: 14,
  },
 sectionTitle: {
  fontSize: 11,
  fontFamily: 'Helvetica-Bold',
  color: '#000000',
  padding: '5 0',
  marginBottom: 12,
  textTransform: 'uppercase',
  alignSelf: 'flex-start',
  borderBottom: '1 solid #00000010',
},
  
  // Texte de profil
  profileText: {
    fontSize: 9,
    color: '#333333',
    lineHeight: 1.4,
    textAlign: 'justify',
    marginBottom: 6,
  },
  
  // Expérience
  experienceItem: {
    marginBottom: 12,
    paddingBottom: 10
  },
  companyHeader: {
    fontSize: 11,
    color: '#1a1a1a',
    marginBottom: 10,
  },
  jobDetails: {
    fontSize: 9,
    color: '#666666',
    marginBottom: 6,
  },
  
  // Sous-sections d'expérience
  subSection: {
    marginBottom: 8,
  },
  subSectionTitle: {
    fontSize: 10,
    color: '#1a1a1a',
    marginBottom: 10,
  },
  subSectionSubtitle: {
    fontSize: 8,
    fontStyle: 'italic',
    marginBottom: 5,
  },
  
  // Texte descriptif
  description: {
    fontSize: 8,
    color: '#444444',
    lineHeight: 1.4,
    marginBottom: 4,
    textAlign: 'justify',
  },
  
  // Listes à puces
  bulletPoint: {
    fontSize: 8,
    color: '#555555',
    marginBottom: 2,
    lineHeight: 1.3,
    paddingLeft: 8,
  },
  
  // Stack technique
  techStack: {
    fontSize: 7,
    margin: 2 ,
  },
  
  // Référence
  reference: {
    fontSize: 8,
    color: '#666666',
    fontStyle: 'italic',
    marginTop: 4,
  },
  
  // Compétences
  skillCategory: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: '#1a1a1a',
    marginBottom: 2,
  },
  skillList: {
    fontSize: 8,
    color: '#555555',
    lineHeight: 1.3,
    marginBottom: 6,
  },
  
  // Formation et langues
  simpleItem: {
    fontSize: 9,
    color: '#333333',
    marginBottom: 4,
    lineHeight: 1.3,
  },
  
  // Conclusion
  conclusionText: {
    fontSize: 9,
    color: '#333333',
    lineHeight: 1.4,
    textAlign: 'justify',
    fontStyle: 'italic',
  },
});

export function CVDocument() {
  // Utiliser des chemins absolus pour les images depuis le dossier public
  const headerImageSrc = typeof window !== 'undefined' 
    ? `${window.location.origin}/header.png`
    : '/header.png';
  
  const footerImageSrc = typeof window !== 'undefined'
    ? `${window.location.origin}/footer.png`
    : '/footer.png';

  return (
    <Document>
      {/* Page 1 - Avec Header */}
      <Page size="A4" style={styles.page}>
        {/* Header Image */}
        <Image src={headerImageSrc} style={styles.headerImage} />
        
        <View style={styles.content}>
          
          
          {/* Contact */}
          <View style={styles.contactSection}>
            <Text style={styles.contactLine}>Gihosha, Bujumbura, Burundi</Text>
            <Text style={styles.contactLine}>Tel : +257 64 39 72 62 · +27 62 04 67 25</Text>
            <Text style={styles.contactLine}>Email : Jeanluckashindi812@gmail.com</Text>
            <Text style={styles.contactLine}>Email Pro : jean.luc@mediabox.bi</Text>
            <Text style={styles.contactLine}>Porfolio: jeanluc-kashindi-digital-profile.vercel.app</Text>
            <Text style={styles.contactLine}>Github: github.com/jeanluckashindi-pro</Text>
          </View>
          
          {/* Profil */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>PROFIL</Text>
            <Text style={styles.profileText}>
              Ingénieur Fullstack Senior de 25 ans, diplômé en Génie Logiciel, avec 3 ans d'expérience continue sur des projets numériques à fort impact national. Je conçois et déploie des systèmes complexes pour des institutions gouvernementales burundaises et des organisations internationales de premier rang comme l'UNICEF.
            </Text>
            <Text style={styles.profileText}>
              Ce qui me distingue : je ne choisis pas mes technologies par habitude. Je raisonne par cas d'usage. Spring Boot quand la robustesse transactionnelle est critique. Node.js quand la performance I/O et la réactivité priment. Django REST Framework quand la rapidité de développement et la puissance data sont nécessaires. Cette précision architecturale, je l'applique aussi bien dans mes missions professionnelles que dans Ufaranga — le système de paiement de transport urbain sans contact que je développe en ce moment.
            </Text>
          </View>
          
          {/* Expérience Professionnelle */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>EXPÉRIENCE PROFESSIONNELLE</Text>
            
            {/* Mediabox */}
            <View style={styles.experienceItem}>
              <Text style={styles.companyHeader}>MEDIABOX BURUNDI</Text>
              <Text style={styles.jobDetails}>Bujumbura, Burundi · 2022 – Présent · 3 ans</Text>
              
              <View style={styles.subSection}>
                <Text style={styles.subSectionTitle}>Qui est Mediabox Burundi ?</Text>
                <Text style={styles.description}>
                  Mediabox Burundi est l'entreprise technologique de référence dans l'écosystème numérique burundais. Elle opère sur trois axes stratégiques majeurs : le développement logiciel sur mesure pour des clients publics et privés à fort enjeu, les services numériques à valeur ajoutée, et la connectivité haut débit via la revente légale et officielle des kits Starlink au Burundi.
                </Text>
              </View>
              
              <View style={styles.subSection}>
                <Text style={styles.subSectionTitle}>Mon rôle et mes responsabilités :</Text>
                <Text style={styles.description}>
                  En tant qu'ingénieur fullstack senior, je ne suis pas un simple exécutant. Je suis impliqué en amont sur les décisions d'architecture, je rédige les Dossiers d'Architecture Technique (DAT), je définis les choix technologiques et j'accompagne les membres juniors de l'équipe.
                </Text>
              </View>
              
              <View style={styles.subSection}>
                <Text style={styles.subSectionTitle}>Projet ODECA — Plateforme nationale de numérisation de la filière café</Text>
                <Text style={styles.subSectionSubtitle}>Commande directe du gouvernement burundais</Text>
                <Text style={styles.bulletPoint}>
                  1. Modélisation et numérisation du parcours complet des caféiculteurs
                </Text>
                <Text style={styles.bulletPoint}>
                  2. Développement d'un module de cartographie géospatiale pour localiser les producteurs
                </Text>
                <Text style={styles.bulletPoint}>
                  3. Création de profils individuels par caféiculteur avec remontée automatique de données
                </Text>
                <Text style={styles.bulletPoint}>
                  4. Mise en place d'outils de contrôle, d'audit et de reporting pour les superviseurs d'État
                </Text>
                <Text style={styles.techStack}>Stack : Spring Boot · Angular · React · Bases de données relationnelles</Text>
              </View>
              
              <View style={styles.subSection}>
                <Text style={styles.subSectionTitle}>Projet ISP Starlink — Système de gestion et de revente de la connectivité</Text>
                <Text style={styles.bulletPoint}>
                  1. Intégration complète des API officielles Starlink dans le système d'information
                </Text>
                <Text style={styles.bulletPoint}>
                  2. Développement d'un tableau de bord temps réel : métriques, performance, facturation
                </Text>
                <Text style={styles.bulletPoint}>
                  3. Architecture microservices pour garantir la scalabilité et la haute disponibilité
                </Text>
                <Text style={styles.techStack}>Stack : Spring Boot · React · Node.js · API Starlink</Text>
              </View>
              
              <Text style={styles.reference}>Référence : Martin, Team Leader — +257 62 14 92 00</Text>
            </View>
            
            {/* UNICEF */}
            <View style={styles.experienceItem}>
              <Text style={styles.companyHeader}>UNICEF BURUNDI · Ingénieur IT</Text>
              <Text style={styles.jobDetails}>Bujumbura · CDD 6 mois</Text>
              <Text style={styles.description}>
                Mission au sein de l'une des plus grandes organisations humanitaires mondiales. Environnement multilingue, multiculturel, soumis aux standards rigoureux des Nations Unies.
              </Text>
              <Text style={styles.bulletPoint}>
                1. Conception, développement et support de solutions numériques aux standards onusiens
              </Text>
              <Text style={styles.bulletPoint}>
                2. Collaboration avec des équipes internationales sur des outils à impact humanitaire direct
              </Text>
              <Text style={styles.bulletPoint}>
                3. Gestion de systèmes d'information dans un contexte opérationnel à haute criticité
              </Text>
            </View>
          </View>
        </View>
      </Page>
      
      {/* Page 2 - Avec Footer */}
      <Page size="A4" style={styles.page}>
        <View style={styles.contentPage2}>
          {/* Suite Expérience */}
          <View style={styles.section}>
            
            {/* HOGI */}
            <View style={styles.experienceItem}>
              <Text style={styles.companyHeader}>HOGI · Ingénieur Backend</Text>
              <Text style={styles.jobDetails}>Bujumbura · CDD</Text>
              <Text style={styles.bulletPoint}>
                1. Développement de modules backend pour les solutions numériques de HOGI
              </Text>
              <Text style={styles.bulletPoint}>
                2. Amélioration des performances et de la stabilité des systèmes existants
              </Text>
              <Text style={styles.techStack}>Stack : Spring Boot · Node.js · Django REST Framework</Text>
            </View>
            
            {/* AFRISURGE */}
            <View style={styles.experienceItem}>
              <Text style={styles.companyHeader}>AFRISURGE · Ingénieur Logiciel Remote</Text>
              <Text style={styles.jobDetails}>RDC · Remote · CDD</Text>
              <Text style={styles.bulletPoint}>
                1. Contribution full remote à un projet logiciel d'envergure régionale
              </Text>
              <Text style={styles.bulletPoint}>
                2. Développement de fonctionnalités backend dans un environnement distribué et autonome
              </Text>
            </View>
          </View>
          
          {/* Projet Personnel Ufaranga */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projet Personnel Ufaranga</Text>
            <Text style={styles.subSectionTitle}>Système de Paiement de Transport Urbain Sans Contact · En cours de développement</Text>
            
            <Text style={styles.description}>
              Ufaranga est un système de paiement sans contact dédié au transport urbain que je conçois et développe seul, de zéro, avec une architecture microservices de niveau production. Le projet répond à un besoin réel et massif : permettre aux usagers des transports en commun burundais et africains de payer leurs trajets de manière rapide, sécurisée et sans espèces.
            </Text>
            
            <View style={styles.subSection}>
              <Text style={styles.subSectionTitle}>Architecture et choix stratégiques des technologies :</Text>
              <Text style={styles.bulletPoint}>
                1. Node.js / Express — API Gateway & Orchestration temps réel
              </Text>
              <Text style={styles.bulletPoint}>
                2. Spring Boot (Java) — Service de transactions & logique métier critique
              </Text>
              <Text style={styles.bulletPoint}>
                3. Django REST Framework (Python) — Service de données, analytics & administration
              </Text>
              <Text style={styles.bulletPoint}>
                4. Service Notifications (Node.js + WebSocket) — confirmation de paiement en temps réel
              </Text>
              <Text style={styles.bulletPoint}>
                5. Frontend mobile (React Native) — interface passager sans contact cross-platform
              </Text>
            </View>
          </View>
          
          {/* Compétences Techniques */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>COMPÉTENCES TECHNIQUES</Text>
            
            <Text style={styles.skillCategory}>Frontend</Text>
            <Text style={styles.skillList}>React.js · Next.js · Angular · React Native · Flutter · TypeScript · HTML5 · CSS3</Text>
            
            <Text style={styles.skillCategory}>Backend</Text>
            <Text style={styles.skillList}>Spring Boot (Java) · Node.js / Express.js · Django REST Framework (Python)</Text>
            
            <Text style={styles.skillCategory}>Architecture</Text>
            <Text style={styles.skillList}>Microservices · API RESTful · API Gateway · Event-Driven Architecture · UML · BPMN · DAT</Text>
            
            <Text style={styles.skillCategory}>DevOps & Outils</Text>
            <Text style={styles.skillList}>Docker · Git / GitHub · Maven · CI/CD · Pipelines de déploiement continu</Text>
            
            <Text style={styles.skillCategory}>Bases de données</Text>
            <Text style={styles.skillList}>PostgreSQL · MySQL · MongoDB · Redis</Text>
            
            <Text style={styles.skillCategory}>Méthodes</Text>
            <Text style={styles.skillList}>Agile / Scrum · TDD · Clean Architecture · Principes SOLID</Text>
          </View>
          
          {/* Formation */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>FORMATION</Text>
            <Text style={styles.simpleItem}>Baccalauréat en Génie Logiciel — Bujumbura International University (BIU), Burundi</Text>
          </View>
          
          {/* Langues */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>LANGUES</Text>
            <Text style={styles.simpleItem}>Français — Courant · Anglais — Courant · Swahili — Courant · Kirundi — Langue maternelle</Text>
          </View>
          
          {/* Ce qui me distingue */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>CE QUI ME DISTINGUE VRAIMENT</Text>
            <Text style={styles.conclusionText}>
              Trois ans chez Mediabox m'ont appris à livrer sous contrainte réelle, face à des clients exigeants — gouvernement burundais, Nations Unies — avec des millions d'usagers finaux en jeu. Ufaranga m'apprend quelque chose de différent et de complémentaire : penser en fondateur, concevoir un produit de zéro, arbitrer seul entre performance, maintenabilité et impact. Je ne cherche pas un poste pour "faire du code". Je cherche un terrain pour construire des choses qui changent quelque chose.
            </Text>
            <Text style={styles.conclusionText}>
              Démonstration live de mes projets disponible à tout moment sur demande.
            </Text>
          </View>
        </View>
        
        {/* Footer Image */}
        <Image src={footerImageSrc} style={styles.footerImage} />
      </Page>
    </Document>
  );
}