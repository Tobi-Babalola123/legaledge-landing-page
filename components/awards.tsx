import Image from "next/image"

export function Awards() {
  const awards = [
    { name: "Super Lawyers 2025", badge: "/super-lawyers-badge-gold-award.jpg" },
    { name: "Best Lawyers in America", badge: "/best-lawyers-in-america-badge-award.jpg" },
    { name: "Martindale-Hubbell AV", badge: "/martindale-hubbell-av-preeminent-rating-badge.jpg" },
    { name: "Chambers USA Ranked", badge: "/chambers-usa-leading-law-firm-badge.jpg" },
    { name: "Top 100 Trial Lawyers", badge: "/national-trial-lawyers-top-100-badge.jpg" },
    { name: "Avvo 10.0 Rating", badge: "/avvo-10-superb-rating-badge-lawyers.jpg" },
  ]

  return (
    <section className="py-16 bg-[#F8F6F3]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow w-32 h-32 flex items-center justify-center"
            >
              <Image
                src={award.badge || "/placeholder.svg"}
                alt={award.name}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
