import Link from 'next/link'
import { BlogPost } from '@/lib/blog'

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="bg-cream rounded-2xl p-8 shadow-sm ring-1 ring-warm-gray hover:shadow-lg hover:ring-indigo/30 hover:scale-[1.02] transition-all duration-300">
        <div className="flex items-center gap-3 mb-4 text-xs text-gray-mid">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-3 font-[family-name:var(--font-playfair)] group-hover:text-indigo transition-colors duration-200 leading-snug">
          {post.title}
        </h3>
        <p className="text-gray-mid text-sm md:text-base leading-relaxed mb-6">
          {post.description}
        </p>
        <span className="inline-flex items-center gap-1 text-indigo text-sm font-medium">
          Read more
          <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
        </span>
      </div>
    </Link>
  )
}
