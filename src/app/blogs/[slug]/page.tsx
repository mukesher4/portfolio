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
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
        {post.date && <time className="text-sm text-gray-400">{post.date}</time>}
      </div>
      <Markdown content={post.content} />
    </div>
  )
}
