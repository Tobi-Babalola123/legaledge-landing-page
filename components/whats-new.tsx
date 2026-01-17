import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function WhatsNew() {
  const articles = [
    {
      title: "Understanding Your Rights in Personal Injury Cases",
      description: "A comprehensive guide to navigating personal injury claims and maximizing your compensation.",
      gradient: "from-[#1a2744] to-[#2d3d5c]",
      image: "/professional-law-office-interior-with-legal-books.jpg",
    },
    {
      title: "2025 Business Law Updates Every CEO Should Know",
      description: "Key regulatory changes affecting corporate governance and compliance this year.",
      gradient: "from-gray-100 to-gray-50",
      image: "/modern-corporate-boardroom-meeting-business-profes.jpg",
    },
    {
      title: "How LegalEdge Secured a $12M Settlement for Smith Industries",
      description: "A landmark case in commercial litigation and corporate defense.",
      gradient: "from-[#8B7355] to-[#C9A961]",
      image: "/courthouse-exterior-with-columns-justice-building.jpg",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12">Legal Insights & News</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="border-0 shadow-md hover:shadow-xl transition-shadow overflow-hidden group cursor-pointer"
            >
              <div className={`h-48 bg-gradient-to-br ${article.gradient} relative overflow-hidden`}>
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2 line-clamp-2">{article.title}</h3>
                {article.description && (
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{article.description}</p>
                )}
                <button className="flex items-center gap-2 text-sm font-semibold text-[#1a2744] group-hover:gap-3 transition-all">
                  Read article <ArrowRight className="w-4 h-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
