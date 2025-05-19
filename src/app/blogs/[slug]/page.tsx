import { getAllPostSlugs, getPostData } from '@/utils/posts'
import Markdown from '@/components/Markdown'

type Post = {
  slug: string
  content: string
  title: string
  date?: string
  [key: string]: string | undefined
}

export const revalidate = 3600

export async function generateStaticParams() {
  const paths = getAllPostSlugs()
  return paths.map((path) => ({
    slug: path.params.slug,
  }))
}

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Blog({ params, searchParams }: Props) {
  const [resolvedParams] = await Promise.all([params, searchParams])
  const post = getPostData(resolvedParams.slug) as Post

  return (
  <>
        <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="w-[1200px] h-[400px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute w-[500px] h-[160px] bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-transparent blur-3xl -rotate-12 translate-x-20" />
          <div className="absolute w-[400px] h-[140px] bg-gradient-to-bl from-indigo-500/12 via-blue-500/8 to-transparent blur-3xl rotate-6 -translate-x-40 translate-y-10" />
        </div>
      </div>
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
        {post.date && <time className="text-sm text-gray-400">{post.date}</time>}
      </div>
      <Markdown content={post.content} />
    </div>
  </>

  )
}
