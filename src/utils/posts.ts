import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'blogs')

export function getAllPostSlugs() {
  return fs.readdirSync(postsDirectory).map((filename) => ({
    params: { slug: filename.replace(/\.md$/, '') },
  }))
}

export function getPostData(slug: string, metadataOnly = false) {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { data, content } = matter(fileContents)

  return {
    slug,
    ...(metadataOnly ? {} : { content }),
    ...data,
  }
}
