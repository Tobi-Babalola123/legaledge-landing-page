import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Users, Scale, Building2 } from "lucide-react"

export function PowerfulTogether() {
  const features = [
    {
      icon: Briefcase,
      title: "Corporate Law",
      description:
        "Strategic counsel for businesses of all sizes, from startups to Fortune 500 companies. M&A, contracts, and compliance.",
      color: "bg-blue-100",
    },
    {
      icon: Scale,
      title: "Litigation",
      description:
        "Aggressive trial attorneys who fight for your rights. Complex commercial disputes, civil litigation, and appeals.",
      color: "bg-amber-100",
    },
    {
      icon: Users,
      title: "Family Law",
      description:
        "Compassionate representation in divorce, custody, and family matters. Protecting what matters most to you.",
      color: "bg-rose-100",
    },
    {
      icon: Building2,
      title: "Real Estate",
      description:
        "Full-service real estate legal support for commercial and residential transactions, zoning, and development.",
      color: "bg-emerald-100",
    },
  ]

  return (
    <section className="bg-[#F8F6F3] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Experienced counsel.
            <br />
            Proven results.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">
            Our attorneys bring decades of combined experience across all major practice areas. Whether you need
            aggressive litigation or strategic advice, we deliver results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {features.map((feature) => (
            <Card key={feature.title} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center`}>
                  <feature.icon className="w-6 h-6 text-gray-800" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                <Button
                  variant="outline"
                  className="w-full bg-[#C9A961] border-[#C9A961] text-[#1a2744] hover:bg-[#C9A961]/90 font-semibold"
                >
                  Learn More
                </Button>
                <button className="w-full text-sm text-gray-700 hover:underline">View case results</button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
