import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Story | Jaladhi Fashion',
  description:
    "Learn about Jaladhi Fashion's journey and commitment to sustainable, beautiful clothing.",
}

export default function OurStoryPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h1>

        <div className="prose prose-lg mx-auto">
          <p className="text-xl text-gray-600 mb-8 text-center">
            Jaladhi Fashion was born from a passion for creating beautiful, sustainable clothing
            that celebrates both tradition and modernity.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Beginning</h2>
              <p className="text-gray-600 mb-4">
                Founded with a vision to bridge the gap between traditional craftsmanship and
                contemporary fashion, Jaladhi Fashion started as a small boutique with big dreams.
              </p>
              <p className="text-gray-600">
                We believe that fashion should be both beautiful and responsible, which is why we
                work closely with local artisans and use sustainable materials in all our designs.
              </p>
            </div>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Image placeholder</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center md:order-1">
              <span className="text-gray-500">Image placeholder</span>
            </div>
            <div className="md:order-2">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                To create timeless pieces that empower individuals to express their unique style
                while supporting ethical fashion practices and traditional craftsmanship.
              </p>
              <p className="text-gray-600">
                Every piece in our collection tells a story of skilled artisans, sustainable
                practices, and a commitment to quality that lasts.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Join Our Journey</h2>
            <p className="text-gray-600 mb-8">
              We invite you to be part of our story as we continue to create fashion that makes a
              positive impact on both people and the planet.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
