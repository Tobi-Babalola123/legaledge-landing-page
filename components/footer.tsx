export function Footer() {
  const footerSections = [
    {
      title: "Practice Areas",
      links: [
        "Corporate Law",
        "Personal Injury",
        "Family Law",
        "Criminal Defense",
        "Real Estate",
        "Employment Law",
        "Immigration",
        "Bankruptcy",
      ],
    },
    {
      title: "Our Firm",
      links: [
        "About Us",
        "Our Attorneys",
        "Case Results",
        "Client Testimonials",
        "News & Press",
        "Careers",
        "Pro Bono",
      ],
    },
    {
      title: "Resources",
      links: ["Legal Blog", "FAQs", "Legal Guides", "Video Library", "Podcasts", "Newsletters", "Legal Glossary"],
    },
    {
      title: "Client Services",
      links: ["Client Portal", "Pay Online", "Document Upload", "Schedule Meeting", "Request Records"],
    },
    {
      title: "Contact",
      links: ["Main Office", "New York", "Los Angeles", "Chicago", "Miami", "Houston"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Disclaimer", "Attorney Advertising", "Accessibility"],
    },
  ]

  return (
    <footer className="bg-[#0f1a2e] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold mb-4 text-sm">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© 2026 LegalEdge Law Firm. All rights reserved. Attorney Advertising.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
