import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Star, Phone } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#1a2744] via-[#243352] to-[#2d3d5c] text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-sm">
              <div className="w-3 h-3 bg-[#C9A961] rounded-full" />
              <span className="opacity-90">Award-Winning Legal Representation</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-balance">
              Justice delivered with excellence
            </h1>

            <p className="text-lg text-white/80 max-w-xl text-pretty">
              From complex litigation to business transactions, our experienced attorneys provide strategic counsel and
              aggressive representation to protect your interests.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Input
                type="tel"
                placeholder="Enter your phone number"
                className="bg-white text-black border-0 h-12 text-base"
              />
              <Button className="bg-[#C9A961] text-[#1a2744] hover:bg-[#C9A961]/90 h-12 px-8 font-semibold whitespace-nowrap">
                Request Consultation
              </Button>
            </div>

            <p className="text-sm text-white/60">
              Free case evaluation · <span className="underline cursor-pointer">Call us 24/7</span>
            </p>

            <div className="flex gap-6 pt-8">
              {[
                { company: "Super Lawyers", rating: 5, reviews: "Top 100" },
                { company: "Martindale", rating: 5, reviews: "AV Rated" },
                { company: "Avvo", rating: 5, reviews: "10.0 Superb" },
              ].map((item) => (
                <div key={item.company} className="space-y-1">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" />
                    ))}
                  </div>
                  <p className="text-xs font-semibold">{item.company}</p>
                  <p className="text-xs text-white/60">{item.reviews}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Dashboard Mockup - Updated to show legal practice areas */}
          <div className="relative">
            <div className="bg-[#0f1a2e]/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="space-y-3">
                {[
                  { label: "Corporate Law", value: "500+ Cases" },
                  { label: "Personal Injury", value: "98% Won" },
                  { label: "Family Law", value: "1,200+ Clients" },
                  { label: "Criminal Defense", value: "95% Success" },
                  { label: "Real Estate", value: "800+ Closings" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#C9A961] rounded-full" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <span className="text-[#C9A961] font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Cards - Updated for attorney info */}
            <div className="absolute top-4 -right-4 bg-white text-black rounded-lg p-4 shadow-xl max-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <Image
                  src="/professional-male-attorney-portrait-headshot.jpg"
                  alt="James Mitchell"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div>
                  <p className="text-xs font-semibold">James Mitchell</p>
                  <p className="text-xs text-gray-500">Senior Partner</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 -left-4 bg-white text-black rounded-lg p-3 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[#C9A961] rounded-full flex items-center justify-center">
                  <Phone className="w-3 h-3 text-[#1a2744]" />
                </div>
                <div className="text-xs font-semibold">Available 24/7</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
