import { Button } from "@/components/ui/button"
import { ChevronDown, Scale } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#1a2744] text-white border-b border-white/10">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-[#C9A961]" />
            <span className="font-bold text-sm tracking-wide">LEGALEDGE</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <button className="flex items-center gap-1 hover:opacity-80">
              Practice Areas <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-1 hover:opacity-80">
              Our Attorneys <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-1 hover:opacity-80">
              About Us <ChevronDown className="w-4 h-4" />
            </button>
            <button className="hover:opacity-80">Case Results</button>
            <button className="flex items-center gap-1 hover:opacity-80">
              Resources <ChevronDown className="w-4 h-4" />
            </button>
            <button className="hover:opacity-80">Contact</button>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 text-sm hover:opacity-80">
            <span className="w-5 h-5 flex items-center justify-center border border-white/30 rounded text-xs">EN</span>
          </button>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
            Client Portal
          </Button>
          <Button size="sm" className="bg-[#C9A961] text-[#1a2744] hover:bg-[#C9A961]/90 font-semibold">
            Free Consultation
          </Button>
        </div>
      </div>
    </header>
  )
}
