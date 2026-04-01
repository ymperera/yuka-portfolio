import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { posts, getPostBySlug, ContentBlock } from '@/lib/blog'

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} — Yuka Perera`,
    description: post.description,
  }
}

function renderBlock(block: ContentBlock, i: number) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p key={i} className="text-charcoal leading-relaxed text-base md:text-lg mb-6">
          {block.text}
        </p>
      )
    case 'heading':
      return block.level === 2 ? (
        <h2
          key={i}
          className="text-2xl md:text-3xl font-bold text-charcoal font-[family-name:var(--font-playfair)] mt-12 mb-4"
        >
          {block.text}
        </h2>
      ) : (
        <h3
          key={i}
          className="text-xl md:text-2xl font-bold text-charcoal font-[family-name:var(--font-playfair)] mt-10 mb-3"
        >
          {block.text}
        </h3>
      )
    case 'image':
      return (
        <figure key={i} className="my-10">
          <div
            className="relative w-full rounded-2xl overflow-hidden bg-warm-gray"
            style={{ aspectRatio: block.aspectRatio ?? 'auto' }}
          >
            {block.aspectRatio ? (
              <Image
                src={block.src}
                alt={block.alt}
                fill
                className="object-cover"
                style={{ objectPosition: block.objectPosition ?? 'center' }}
              />
            ) : (
              <Image
                src={block.src}
                alt={block.alt}
                width={900}
                height={600}
                className="w-full h-auto object-cover"
                style={{ objectPosition: block.objectPosition ?? 'center' }}
              />
            )}
          </div>
          {block.caption && (
            <figcaption className="text-center text-xs text-gray-mid mt-3 italic">
              {block.caption}
            </figcaption>
          )}
        </figure>
      )
    case 'callout':
      return (
        <blockquote
          key={i}
          className="border-l-4 border-indigo bg-indigo/5 rounded-r-xl px-6 py-5 my-8"
        >
          <p className="text-charcoal font-medium text-base md:text-lg leading-relaxed italic">
            {block.text}
          </p>
        </blockquote>
      )
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

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
              <Link href="/blog" className="relative text-charcoal hover:text-indigo transition-colors duration-200 group text-sm">
                Blog
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo group-hover:w-full transition-all duration-300" />
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
              <Link href="/blog" className="text-sm text-gray-mid hover:text-charcoal transition-colors duration-200">
                ← Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-gray-mid hover:text-indigo transition-colors duration-200 mb-12 group"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform duration-200">←</span>
          Side Quests
        </Link>

        {/* Post header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 text-xs text-gray-mid mb-5">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal font-[family-name:var(--font-playfair)] leading-tight">
            {post.title}
          </h1>
        </header>

        {/* Post body */}
        <article>
          {post.content.map((block, i) => renderBlock(block, i))}
        </article>

        {/* Footer nav */}
        <div className="mt-20 pt-10 border-t border-warm-gray">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-gray-mid hover:text-indigo transition-colors duration-200 group"
          >
            <span className="transform group-hover:-translate-x-1 transition-transform duration-200">←</span>
            Back to Side Quests
          </Link>
        </div>
      </main>
    </div>
  )
}
