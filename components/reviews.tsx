import { Star } from "lucide-react"
import { Card } from "@/components/ui/card"

export function Reviews() {
  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Amazing tool! Works perfectly and the interface is so clean and professional. Saved me hours of work.",
      date: "2 days ago",
    },
    {
      name: "Mike Chen",
      rating: 5,
      comment: "The multi-API system is brilliant. Never had any downtime issues. Highly recommend this service.",
      date: "1 week ago",
    },
    {
      name: "Emily Rodriguez",
      rating: 4,
      comment: "Great quality downloads and super fast. The daily limit is reasonable for free usage.",
      date: "2 weeks ago",
    },
    {
      name: "David Kim",
      rating: 5,
      comment: "Best Facebook profile viewer I've used. The dark mode is perfect and it works on mobile too.",
      date: "3 weeks ago",
    },
    {
      name: "Lisa Thompson",
      rating: 5,
      comment: "Simple, fast, and reliable. The step-by-step instructions make it easy for anyone to use.",
      date: "1 month ago",
    },
    {
      name: "Alex Martinez",
      rating: 4,
      comment: "Excellent tool with great privacy features. Love that nothing is stored on their servers.",
      date: "1 month ago",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Users Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied users who trust our Facebook profile viewer tool.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="p-6 space-y-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                    }`}
                    strokeWidth={1}
                  />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed">"{review.comment}"</p>

              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{review.name}</span>
                <span className="text-muted-foreground">{review.date}</span>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-lg font-semibold">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" strokeWidth={1} />
              ))}
            </div>
            <span>4.8 out of 5</span>
            <span className="text-muted-foreground font-normal">from 2,847 reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}
