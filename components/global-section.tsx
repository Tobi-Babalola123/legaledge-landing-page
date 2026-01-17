import { Button } from "@/components/ui/button"
import { Award } from "lucide-react"

export function GlobalSection() {
  return (
    <section className="bg-[#F8F6F3] pb-20">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-4 flex-1">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-gray-800" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Recognized excellence across 25+ practice areas</h3>
                <p className="text-gray-600">
                  Our attorneys have been consistently recognized by Super Lawyers, Best Lawyers in America, and
                  Chambers USA for their exceptional legal work and client service.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 lg:min-w-[200px]">
              <Button className="bg-[#C9A961] text-[#1a2744] hover:bg-[#C9A961]/90 font-semibold">
                Schedule Consultation
              </Button>
              <button className="text-sm text-gray-700 hover:underline">View all practice areas</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
