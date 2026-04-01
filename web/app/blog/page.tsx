import Link from 'next/link'
import { posts } from '@/lib/blog'
import { BlogCard } from '@/components/BlogCard'

export const metadata = {
  title: 'Side Quests — Yuka Perera',
  description: 'Things I build, think about, and get into outside of work.',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-warm-gray">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 py-5">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-xl font-bold text-charcoal hover:text-indigo transition-colors duration-200 font-[family-name:var(--font-playfair)]"
            >
              YP
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/#about" className="relative text-charcoal hover:text-indigo transition-colors duration-200 group text-sm">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/#projects" className="relative text-charcoal hover:text-indigo transition-colors duration-200 group text-sm">
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo group-hover:w-full transition-all duration-300" />
              </Link>
              <Link href="/#experience" className="relative text-charcoal hover:text-indigo transition-colors duration-200 group text-sm">
                Experience
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo group-hover:w-full transition-all duration-300" />
              </Link>
              <Link
                href="/blog"
                className="relative text-indigo font-semibold text-sm"
              >
                Blog
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo" />
              </Link>
              <Link href="/#contact" className="relative text-charcoal hover:text-indigo transition-colors duration-200 group text-sm">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo group-hover:w-full transition-all duration-300" />
              </Link>
              <a
                href="/Perera_Yuka_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-indigo text-white rounded-lg hover:bg-indigo-light transition-all duration-200 text-sm font-medium"
              >
                Resume
              </a>
            </div>
            <div className="md:hidden">
              <Link href="/" className="text-sm text-gray-mid hover:text-charcoal transition-colors duration-200">
                ← Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 lg:px-12 py-24 md:py-32">
        {/* Header */}
        <div className="mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-mid mb-4">YUKA PERERA</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal font-[family-name:var(--font-playfair)] leading-tight mb-6">
            Side Quests
          </h1>
          <p className="text-lg text-gray-mid max-w-2xl leading-relaxed">
            Things I build, think about, and get into outside of work. Just what's actually on my mind.
          </p>
        </div>

        {/* Post list */}
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </main>
    </div>
  )
}
