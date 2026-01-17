import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Scale } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="bg-[#0a1220] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Get the legal representation you deserve</h2>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Input
              type="tel"
              placeholder="Enter your phone number"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12"
            />
            <Button className="bg-[#C9A961] text-[#1a2744] hover:bg-[#C9A961]/90 h-12 px-8 font-semibold whitespace-nowrap">
              Request Callback
            </Button>
          </div>

          <p className="text-sm text-white/60 mt-4">
            Or call us directly: <span className="text-white font-semibold">1-800-LEGAL-EDGE</span>
          </p>
        </div>

        <div className="mt-16 pt-16 border-t border-white/10">
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-3">
              <Scale className="w-10 h-10 text-[#C9A961]" />
              <div className="text-5xl font-bold tracking-wider opacity-20">LEGALEDGE</div>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <p className="text-sm text-white/60">Serving clients nationwide since 1995</p>
          </div>
        </div>
      </div>
    </section>
  )
}
