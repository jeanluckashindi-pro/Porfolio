'use client';

import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// Styles pour le PDF
const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: '#ffffff',
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 20,
    paddingBottom: 15,
    borderBottom: '2 solid #8ab4f8',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    color: '#8ab4f8',
    marginBottom: 10,
  },
  contactInfo: {
    fontSize: 10,
    color: '#666666',
    marginTop: 5,
  },
  section: {
    marginTop: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 10,
    paddingBottom: 5,
    borderBottom: '1 solid #e0e0e0',
  },
  experienceItem: {
    marginBottom: 15,
  },
  companyName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 3,
  },
  jobTitle: {
    fontSize: 11,
    color: '#8ab4f8',
    marginBottom: 3,
  },
  period: {
    fontSize: 9,
    color: '#666666',
    marginBottom: 5,
  },
  description: {
    fontSize: 10,
    color: '#333333',
    lineHeight: 1.5,
    marginBottom: 5,
  },
  bulletPoint: {
    fontSize: 9,
    color: '#555555',
    marginLeft: 15,
    marginBottom: 3,
    lineHeight: 1.4,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillTag: {
    fontSize: 9,
    color: '#8ab4f8',
    backgroundColor: '#f0f4ff',
    padding: '4 8',
    borderRadius: 3,
    marginRight: 5,
    marginBottom: 5,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    fontSize: 8,
    color: '#999999',
    paddingTop: 10,
    borderTop: '1 solid #e0e0e0',
  },
  projectBox: {
    backgroundColor: '#f8f9fa',
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
    borderLeft: '3 solid #8ab4f8',
  },
  projectTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 3,
  },
  twoColumns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
  column: {
    flex: 1,
  },
});

export function CVDocument() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>Jean-Luc Kashindi Nestor</Text>
          <Text style={styles.title}>Ingénieur Fullstack Senior</Text>
          <Text style={styles.contactInfo}>
            📧 Jeanluckashindi812@gmail.com | 📱 +257 64 39 72 62
          </Text>
          <Text style={styles.contactInfo}>
            📍 Gihosha, Bujumbura, Burundi | 💼 3+ ans d'expérience
          </Text>
        </View>

        {/* Profil */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PROFIL PROFESSIONNEL</Text>
          <Text style={styles.description}>
            Ingénieur Fullstack Senior avec 3+ ans d'expérience dans la conception et le déploiement 
            de solutions numériques à fort impact. Spécialisé dans l'architecture microservices et 
            le développement de systèmes utilisés à l'échelle nationale par des institutions 
            gouvernementales et organisations internationales.
          </Text>
        </View>

        {/* Expérience Professionnelle */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>EXPÉRIENCE PROFESSIONNELLE</Text>
          
          {/* Mediabox */}
          <View style={styles.experienceItem}>
            <Text style={styles.companyName}>Mediabox Burundi</Text>
            <Text style={styles.jobTitle}>Ingénieur Fullstack Senior</Text>
            <Text style={styles.period}>2022 - Présent | Bujumbura, Burundi</Text>
            <Text style={styles.description}>
              Leader dans le développement de solutions numériques, revendeur officiel Starlink au Burundi.
            </Text>
            
            <View style={styles.projectBox}>
              <Text style={styles.projectTitle}>Projet ODECA - Système National Café</Text>
              <Text style={styles.bulletPoint}>
                • Cartographie géospatiale des producteurs sur le territoire national
              </Text>
              <Text style={styles.bulletPoint}>
                • Création de profils individuels pour chaque caféiculteur
              </Text>
              <Text style={styles.bulletPoint}>
                • Numérisation complète de la chaîne de valeur caféière
              </Text>
              <Text style={styles.bulletPoint}>
                • Stack: Spring Boot, Angular, React
              </Text>
            </View>

            <View style={styles.projectBox}>
              <Text style={styles.projectTitle}>Projet ISP - Gestion Kits Starlink</Text>
              <Text style={styles.bulletPoint}>
                • Intégration complète des API officielles Starlink
              </Text>
              <Text style={styles.bulletPoint}>
                • Dashboard temps réel: métriques, performance réseau, facturation
              </Text>
              <Text style={styles.bulletPoint}>
                • Architecture microservices scalable et haute disponibilité
              </Text>
              <Text style={styles.bulletPoint}>
                • Stack: Spring Boot, React, Node.js
              </Text>
            </View>
            
            <Text style={styles.description}>
              Référence: Martin, Team Leader - +257 62 14 92 00
            </Text>
          </View>

          {/* UNICEF */}
          <View style={styles.experienceItem}>
            <Text style={styles.companyName}>UNICEF Burundi</Text>
            <Text style={styles.jobTitle}>Ingénieur IT</Text>
            <Text style={styles.period}>CDD 6 mois | Bujumbura, Burundi</Text>
            <Text style={styles.bulletPoint}>
              • Conception et développement de solutions conformes aux standards ONU
            </Text>
            <Text style={styles.bulletPoint}>
              • Collaboration avec équipes internationales sur outils à impact humanitaire
            </Text>
            <Text style={styles.bulletPoint}>
              • Gestion et maintenance de systèmes d'information critiques
            </Text>
          </View>

          {/* HOGI */}
          <View style={styles.experienceItem}>
            <Text style={styles.companyName}>HOGI</Text>
            <Text style={styles.jobTitle}>Ingénieur Backend</Text>
            <Text style={styles.period}>CDD | Bujumbura, Burundi</Text>
            <Text style={styles.bulletPoint}>
              • Développement de modules backend robustes et performants
            </Text>
            <Text style={styles.bulletPoint}>
              • Amélioration des performances et stabilité des systèmes existants
            </Text>
            <Text style={styles.bulletPoint}>
              • Stack: Spring Boot, Node.js, Django REST Framework
            </Text>
          </View>

          {/* AFRISURGE */}
          <View style={styles.experienceItem}>
            <Text style={styles.companyName}>AFRISURGE</Text>
            <Text style={styles.jobTitle}>Ingénieur Logiciel (Remote)</Text>
            <Text style={styles.period}>CDD Remote | République Démocratique du Congo</Text>
            <Text style={styles.bulletPoint}>
              • Développement de fonctionnalités backend complexes
            </Text>
            <Text style={styles.bulletPoint}>
              • Coordination technique à distance avec équipe internationale
            </Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text>CV généré le {new Date().toLocaleDateString('fr-FR')} | Jean-Luc Kashindi Nestor</Text>
        </View>
      </Page>

      {/* Page 2 */}
      <Page size="A4" style={styles.page}>
        {/* Header Page 2 */}
        <View style={styles.header}>
          <Text style={styles.name}>Jean-Luc Kashindi Nestor</Text>
          <Text style={styles.title}>Ingénieur Fullstack Senior - Page 2</Text>
        </View>

        {/* Projet Personnel */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PROJET PERSONNEL</Text>
          <View style={styles.experienceItem}>
            <Text style={styles.companyName}>Ufaranga</Text>
            <Text style={styles.jobTitle}>Fondateur & Ingénieur Principal</Text>
            <Text style={styles.period}>En cours de développement</Text>
            <Text style={styles.description}>
              Système de paiement sans contact pour le transport urbain. Projet fintech innovant 
              développé en dehors des heures de travail.
            </Text>
            <Text style={styles.bulletPoint}>
              • Architecture microservices complète multi-langages
            </Text>
            <Text style={styles.bulletPoint}>
              • Services: Spring Boot (Java), Node.js, Django REST (Python)
            </Text>
            <Text style={styles.bulletPoint}>
              • Gestion authentification, transactions, notifications, API Gateway
            </Text>
          </View>
        </View>

        {/* Compétences Techniques */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>COMPÉTENCES TECHNIQUES</Text>
          
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 11, fontWeight: 'bold', marginBottom: 5 }}>Backend</Text>
            <View style={styles.skillsContainer}>
              <Text style={styles.skillTag}>Spring Boot</Text>
              <Text style={styles.skillTag}>Node.js</Text>
              <Text style={styles.skillTag}>Django REST</Text>
              <Text style={styles.skillTag}>Express</Text>
              <Text style={styles.skillTag}>Microservices</Text>
              <Text style={styles.skillTag}>REST APIs</Text>
              <Text style={styles.skillTag}>GraphQL</Text>
            </View>
          </View>

          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 11, fontWeight: 'bold', marginBottom: 5 }}>Frontend</Text>
            <View style={styles.skillsContainer}>
              <Text style={styles.skillTag}>React</Text>
              <Text style={styles.skillTag}>Next.js</Text>
              <Text style={styles.skillTag}>Angular</Text>
              <Text style={styles.skillTag}>TypeScript</Text>
              <Text style={styles.skillTag}>Tailwind CSS</Text>
              <Text style={styles.skillTag}>Redux</Text>
            </View>
          </View>

          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 11, fontWeight: 'bold', marginBottom: 5 }}>Bases de Données</Text>
            <View style={styles.skillsContainer}>
              <Text style={styles.skillTag}>PostgreSQL</Text>
              <Text style={styles.skillTag}>MySQL</Text>
              <Text style={styles.skillTag}>MongoDB</Text>
              <Text style={styles.skillTag}>Redis</Text>
            </View>
          </View>

          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 11, fontWeight: 'bold', marginBottom: 5 }}>DevOps & Cloud</Text>
            <View style={styles.skillsContainer}>
              <Text style={styles.skillTag}>Docker</Text>
              <Text style={styles.skillTag}>Kubernetes</Text>
              <Text style={styles.skillTag}>CI/CD</Text>
              <Text style={styles.skillTag}>GitHub Actions</Text>
              <Text style={styles.skillTag}>Linux</Text>
              <Text style={styles.skillTag}>Nginx</Text>
            </View>
          </View>
        </View>

        {/* Formation */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>FORMATION</Text>
          <View style={styles.experienceItem}>
            <Text style={styles.companyName}>Génie Informatique</Text>
            <Text style={styles.period}>2020 - 2022</Text>
            <Text style={styles.description}>
              Formation universitaire en génie logiciel avec participation à des hackathons 
              et développement de projets académiques.
            </Text>
          </View>
        </View>

        {/* Langues */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>LANGUES</Text>
          <View style={styles.twoColumns}>
            <View style={styles.column}>
              <Text style={styles.description}>Français - Courant</Text>
              <Text style={styles.description}>Anglais - Professionnel</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.description}>Kirundi - Natif</Text>
              <Text style={styles.description}>Swahili - Intermédiaire</Text>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text>CV généré le {new Date().toLocaleDateString('fr-FR')} | Jean-Luc Kashindi Nestor</Text>
          <Text style={{ marginTop: 3 }}>Portfolio: https://jeanluckashindi.com</Text>
        </View>
      </Page>
    </Document>
  );
}
