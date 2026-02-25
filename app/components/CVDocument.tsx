'use client';

import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

// Styles pour le PDF
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    fontFamily: 'Helvetica',
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: 120,
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
  content: {
    paddingHorizontal: 50,
    paddingTop: 30,
    paddingBottom: 50,
  },
  contentLastPage: {
    paddingHorizontal: 50,
    paddingTop: 30,
    paddingBottom: 120,
  },
  
  // Header Section
  headerSection: {
    marginBottom: 25,
    borderBottom: '3 solid #8ab4f8',
    paddingBottom: 15,
  },
  name: {
    fontSize: 32,
    fontWeight: 700,
    color: '#1a1a1a',
    marginBottom: 8,
    fontFamily: 'Helvetica-Bold',
  },
  title: {
    fontSize: 16,
    color: '#8ab4f8',
    marginBottom: 12,
    fontWeight: 600,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    marginTop: 8,
  },
  contactItem: {
    fontSize: 10,
    color: '#555555',
  },
  
  // Section Titles
  sectionTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: '#1a1a1a',
    marginTop: 20,
    marginBottom: 12,
    paddingBottom: 6,
    borderBottom: '2 solid #8ab4f8',
    fontFamily: 'Helvetica-Bold',
  },
  
  // Profile
  profileText: {
    fontSize: 11,
    color: '#333333',
    lineHeight: 1.6,
    textAlign: 'justify',
  },
  
  // Experience
  experienceItem: {
    marginBottom: 18,
  },
  companyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  companyName: {
    fontSize: 13,
    fontWeight: 700,
    color: '#1a1a1a',
    fontFamily: 'Helvetica-Bold',
  },
  period: {
    fontSize: 9,
    color: '#666666',
    fontStyle: 'italic',
  },
  jobTitle: {
    fontSize: 11,
    color: '#8ab4f8',
    marginBottom: 6,
    fontWeight: 600,
  },
  description: {
    fontSize: 10,
    color: '#444444',
    lineHeight: 1.5,
    marginBottom: 8,
  },
  
  // Project Box
  projectBox: {
    backgroundColor: '#f8f9fa',
    padding: 10,
    marginTop: 6,
    marginBottom: 8,
    borderRadius: 4,
    borderLeft: '4 solid #8ab4f8',
  },
  projectTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: '#1a1a1a',
    marginBottom: 6,
  },
  bulletPoint: {
    fontSize: 9,
    color: '#555555',
    marginBottom: 3,
    lineHeight: 1.4,
    paddingLeft: 12,
  },
  
  // Skills
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
  },
  skillCategory: {
    width: '48%',
    marginBottom: 12,
  },
  skillCategoryTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: '#1a1a1a',
    marginBottom: 6,
    fontFamily: 'Helvetica-Bold',
  },
  skillItem: {
    fontSize: 9,
    color: '#555555',
    marginBottom: 3,
    paddingLeft: 10,
  },
  
  // Education
  educationItem: {
    marginBottom: 15,
  },
  degreeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  degreeName: {
    fontSize: 12,
    fontWeight: 700,
    color: '#1a1a1a',
    fontFamily: 'Helvetica-Bold',
  },
  university: {
    fontSize: 10,
    color: '#8ab4f8',
    marginBottom: 4,
  },
  educationDescription: {
    fontSize: 9,
    color: '#555555',
    lineHeight: 1.4,
  },
  
  // Languages
  languageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  languageName: {
    fontSize: 10,
    color: '#333333',
  },
  languageLevel: {
    fontSize: 9,
    color: '#8ab4f8',
    fontWeight: 600,
  },
  
  // Two columns layout
  twoColumns: {
    flexDirection: 'row',
    gap: 20,
  },
  column: {
    flex: 1,
  },
  
  // Certifications
  certItem: {
    marginBottom: 10,
  },
  certName: {
    fontSize: 10,
    fontWeight: 600,
    color: '#1a1a1a',
    marginBottom: 2,
  },
  certOrg: {
    fontSize: 9,
    color: '#666666',
  },
  
  // Achievements
  achievementItem: {
    fontSize: 9,
    color: '#555555',
    marginBottom: 4,
    paddingLeft: 12,
    lineHeight: 1.4,
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
      {/* Page 1 - Avec Header uniquement */}
      <Page size="A4" style={styles.page}>
        {/* Header Image - Uniquement sur la première page */}
        <Image src={headerImageSrc} style={styles.headerImage} />
        
        <View style={styles.content}>
          {/* Header Info */}
          <View style={styles.headerSection}>
            <Text style={styles.name}>Jean-Luc Kashindi Nestor</Text>
            <Text style={styles.title}>Ingénieur Fullstack Senior</Text>
            <View style={styles.contactRow}>
              <Text style={styles.contactItem}>📧 Jeanluckashindi812@gmail.com</Text>
              <Text style={styles.contactItem}>📱 +257 64 39 72 62</Text>
              <Text style={styles.contactItem}>📍 Gihosha, Bujumbura, Burundi</Text>
              <Text style={styles.contactItem}>💼 3+ ans d'expérience</Text>
            </View>
          </View>

          {/* Profil Professionnel */}
          <View>
            <Text style={styles.sectionTitle}>PROFIL PROFESSIONNEL</Text>
            <Text style={styles.profileText}>
              Ingénieur Fullstack Senior avec 3+ ans d'expérience dans la conception et le déploiement 
              de solutions numériques à fort impact. Spécialisé dans l'architecture microservices et 
              le développement de systèmes utilisés à l'échelle nationale par des institutions 
              gouvernementales et organisations internationales. Expert en Spring Boot, React, Node.js 
              avec une forte capacité à livrer des projets complexes dans des délais serrés.
            </Text>
          </View>

          {/* Expérience Professionnelle */}
          <View>
            <Text style={styles.sectionTitle}>EXPÉRIENCE PROFESSIONNELLE</Text>
            
            {/* Mediabox */}
            <View style={styles.experienceItem}>
              <View style={styles.companyRow}>
                <Text style={styles.companyName}>Mediabox Burundi</Text>
                <Text style={styles.period}>2022 - Présent</Text>
              </View>
              <Text style={styles.jobTitle}>Ingénieur Fullstack Senior</Text>
              <Text style={styles.description}>
                Leader dans le développement de solutions numériques, revendeur officiel Starlink au Burundi.
              </Text>
              
              <View style={styles.projectBox}>
                <Text style={styles.projectTitle}>🌍 Projet ODECA - Système National de Gestion du Café</Text>
                <Text style={styles.bulletPoint}>
                  • Cartographie géospatiale complète des producteurs de café sur le territoire national
                </Text>
                <Text style={styles.bulletPoint}>
                  • Création de profils individuels détaillés pour chaque caféiculteur
                </Text>
                <Text style={styles.bulletPoint}>
                  • Numérisation complète de la chaîne de valeur de la filière caféière
                </Text>
                <Text style={styles.bulletPoint}>
                  • Technologies: Spring Boot, Angular, React, PostgreSQL
                </Text>
              </View>

              <View style={styles.projectBox}>
                <Text style={styles.projectTitle}>🛰️ Projet ISP - Gestion des Kits Starlink</Text>
                <Text style={styles.bulletPoint}>
                  • Intégration complète des API officielles Starlink pour gestion automatisée
                </Text>
                <Text style={styles.bulletPoint}>
                  • Dashboard temps réel: métriques réseau, performance, facturation automatique
                </Text>
                <Text style={styles.bulletPoint}>
                  • Architecture microservices scalable garantissant haute disponibilité
                </Text>
                <Text style={styles.bulletPoint}>
                  • Technologies: Spring Boot, React, Node.js, Redis, Docker
                </Text>
              </View>
              
              <Text style={styles.description}>
                Référence: Martin, Team Leader - +257 62 14 92 00
              </Text>
            </View>

            {/* UNICEF */}
            <View style={styles.experienceItem}>
              <View style={styles.companyRow}>
                <Text style={styles.companyName}>UNICEF Burundi</Text>
                <Text style={styles.period}>CDD 6 mois</Text>
              </View>
              <Text style={styles.jobTitle}>Ingénieur IT</Text>
              <Text style={styles.bulletPoint}>
                • Conception et développement de solutions conformes aux standards internationaux ONU
              </Text>
              <Text style={styles.bulletPoint}>
                • Collaboration avec équipes internationales sur outils à impact humanitaire
              </Text>
              <Text style={styles.bulletPoint}>
                • Gestion et maintenance de systèmes d'information critiques pour programmes sociaux
              </Text>
            </View>

            {/* HOGI */}
            <View style={styles.experienceItem}>
              <View style={styles.companyRow}>
                <Text style={styles.companyName}>HOGI</Text>
                <Text style={styles.period}>CDD</Text>
              </View>
              <Text style={styles.jobTitle}>Ingénieur Backend</Text>
              <Text style={styles.bulletPoint}>
                • Développement de modules backend robustes et performants
              </Text>
              <Text style={styles.bulletPoint}>
                • Optimisation des performances et amélioration de la stabilité des systèmes
              </Text>
              <Text style={styles.bulletPoint}>
                • Technologies: Spring Boot, Node.js, Django REST Framework
              </Text>
            </View>
          </View>
        </View>
      </Page>

      {/* Page 2 - Avec Footer uniquement */}
      <Page size="A4" style={styles.page}>
        <View style={styles.contentLastPage}>
          {/* Suite Expérience */}
          <View>
            <Text style={styles.sectionTitle}>EXPÉRIENCE PROFESSIONNELLE (SUITE)</Text>
            
            {/* AFRISURGE */}
            <View style={styles.experienceItem}>
              <View style={styles.companyRow}>
                <Text style={styles.companyName}>AFRISURGE</Text>
                <Text style={styles.period}>CDD Remote</Text>
              </View>
              <Text style={styles.jobTitle}>Ingénieur Logiciel (Remote)</Text>
              <Text style={styles.description}>République Démocratique du Congo</Text>
              <Text style={styles.bulletPoint}>
                • Développement de fonctionnalités backend complexes en environnement distribué
              </Text>
              <Text style={styles.bulletPoint}>
                • Coordination technique à distance avec équipe internationale multidisciplinaire
              </Text>
            </View>
          </View>

          {/* Projet Personnel */}
          <View>
            <Text style={styles.sectionTitle}>PROJET PERSONNEL</Text>
            <View style={styles.experienceItem}>
              <View style={styles.companyRow}>
                <Text style={styles.companyName}>Ufaranga</Text>
                <Text style={styles.period}>En développement</Text>
              </View>
              <Text style={styles.jobTitle}>Fondateur & Ingénieur Principal</Text>
              <Text style={styles.description}>
                Système de paiement sans contact pour le transport urbain. Solution fintech innovante 
                développée en dehors des heures de travail, visant à moderniser les transports publics.
              </Text>
              <Text style={styles.bulletPoint}>
                • Architecture microservices complète avec services multi-langages
              </Text>
              <Text style={styles.bulletPoint}>
                • Backend: Spring Boot (Java), Node.js (TypeScript), Django REST (Python)
              </Text>
              <Text style={styles.bulletPoint}>
                • Gestion complète: authentification, transactions, notifications, API Gateway
              </Text>
            </View>
          </View>

          {/* Compétences Techniques */}
          <View>
            <Text style={styles.sectionTitle}>COMPÉTENCES TECHNIQUES</Text>
            <View style={styles.twoColumns}>
              <View style={styles.column}>
                <View style={styles.skillCategory}>
                  <Text style={styles.skillCategoryTitle}>Backend</Text>
                  <Text style={styles.skillItem}>• Spring Boot (Java)</Text>
                  <Text style={styles.skillItem}>• Node.js / Express</Text>
                  <Text style={styles.skillItem}>• Django REST (Python)</Text>
                  <Text style={styles.skillItem}>• Microservices Architecture</Text>
                  <Text style={styles.skillItem}>• REST APIs / GraphQL</Text>
                </View>
                
                <View style={styles.skillCategory}>
                  <Text style={styles.skillCategoryTitle}>Bases de Données</Text>
                  <Text style={styles.skillItem}>• PostgreSQL</Text>
                  <Text style={styles.skillItem}>• MySQL</Text>
                  <Text style={styles.skillItem}>• MongoDB</Text>
                  <Text style={styles.skillItem}>• Redis</Text>
                </View>
              </View>
              
              <View style={styles.column}>
                <View style={styles.skillCategory}>
                  <Text style={styles.skillCategoryTitle}>Frontend</Text>
                  <Text style={styles.skillItem}>• React / Next.js</Text>
                  <Text style={styles.skillItem}>• Angular</Text>
                  <Text style={styles.skillItem}>• TypeScript</Text>
                  <Text style={styles.skillItem}>• Tailwind CSS</Text>
                  <Text style={styles.skillItem}>• Redux / State Management</Text>
                </View>
                
                <View style={styles.skillCategory}>
                  <Text style={styles.skillCategoryTitle}>DevOps & Cloud</Text>
                  <Text style={styles.skillItem}>• Docker / Kubernetes</Text>
                  <Text style={styles.skillItem}>• CI/CD / GitHub Actions</Text>
                  <Text style={styles.skillItem}>• Linux / Nginx</Text>
                  <Text style={styles.skillItem}>• AWS / Google Cloud</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Formation */}
          <View>
            <Text style={styles.sectionTitle}>FORMATION</Text>
            <View style={styles.educationItem}>
              <View style={styles.degreeRow}>
                <Text style={styles.degreeName}>Master en Génie Logiciel</Text>
                <Text style={styles.period}>2019 - 2021</Text>
              </View>
              <Text style={styles.university}>Université du Burundi, Bujumbura</Text>
              <Text style={styles.educationDescription}>
                Spécialisation en architecture logicielle, systèmes distribués et développement 
                d'applications d'entreprise. Mention Très Bien.
              </Text>
            </View>

            <View style={styles.educationItem}>
              <View style={styles.degreeRow}>
                <Text style={styles.degreeName}>Licence en Informatique</Text>
                <Text style={styles.period}>2016 - 2019</Text>
              </View>
              <Text style={styles.university}>Université du Burundi, Bujumbura</Text>
              <Text style={styles.educationDescription}>
                Formation fondamentale en informatique: programmation, algorithmes, structures de 
                données et développement web. Mention Grande Distinction.
              </Text>
            </View>
          </View>

          {/* Certifications & Langues */}
          <View style={styles.twoColumns}>
            <View style={styles.column}>
              <Text style={styles.sectionTitle}>CERTIFICATIONS</Text>
              <View style={styles.certItem}>
                <Text style={styles.certName}>AWS Certified Solutions Architect</Text>
                <Text style={styles.certOrg}>Amazon Web Services - 2023</Text>
              </View>
              <View style={styles.certItem}>
                <Text style={styles.certName}>Google Cloud Professional</Text>
                <Text style={styles.certOrg}>Google Cloud - 2024</Text>
              </View>
              <View style={styles.certItem}>
                <Text style={styles.certName}>Certified Kubernetes Administrator</Text>
                <Text style={styles.certOrg}>CNCF - 2024</Text>
              </View>
            </View>
            
            <View style={styles.column}>
              <Text style={styles.sectionTitle}>LANGUES</Text>
              <View style={styles.languageRow}>
                <Text style={styles.languageName}>Français</Text>
                <Text style={styles.languageLevel}>Courant</Text>
              </View>
              <View style={styles.languageRow}>
                <Text style={styles.languageName}>Anglais</Text>
                <Text style={styles.languageLevel}>Professionnel</Text>
              </View>
              <View style={styles.languageRow}>
                <Text style={styles.languageName}>Kirundi</Text>
                <Text style={styles.languageLevel}>Natif</Text>
              </View>
              <View style={styles.languageRow}>
                <Text style={styles.languageName}>Swahili</Text>
                <Text style={styles.languageLevel}>Intermédiaire</Text>
              </View>
            </View>
          </View>

          {/* Réalisations */}
          <View>
            <Text style={styles.sectionTitle}>RÉALISATIONS CLÉS</Text>
            <Text style={styles.achievementItem}>
              🏆 Prix de l'Innovation Numérique 2023 - Ministère des Technologies du Burundi
            </Text>
            <Text style={styles.achievementItem}>
              🥈 2ème place Hackathon Fintech Africa 2023 - African Development Bank
            </Text>
            <Text style={styles.achievementItem}>
              ✅ 15+ projets livrés avec succès pour clients gouvernementaux et privés
            </Text>
            <Text style={styles.achievementItem}>
              👨‍🏫 Mentor pour 10+ développeurs juniors dans la communauté tech burundaise
            </Text>
          </View>
        </View>

        {/* Footer Image - Uniquement sur la dernière page */}
        <Image src={footerImageSrc} style={styles.footerImage} />
      </Page>
    </Document>
  );
}
