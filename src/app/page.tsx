import WorkItem from "@/components/WorkItem";
import { getAllPostSlugs, getPostData } from '@/utils/posts';
import ContactMe from "@/components/ContactMe";
import { work, projects, education, NAME, LOCATION, DESCRIPTION } from '@/utils/user';

type Post = {
  description: string[];
  slug: string;
  content: string;
  title: string;
  date?: string;
  excerpt?: string;
}

export const revalidate = 3600 

export default async function Home() {
  const slugs = getAllPostSlugs()
  const blogs = slugs.map(({ params }) => {
    const post = getPostData(params.slug, true) as Post
    return {
      title: post.title,
      duration: post.date || '2025',
      link: params.slug,
      description: post.description
    }
  })

  return (
    <>
      <div className="flex flex-col justify-between gap-4">
        <div className="flex gap-2 items-center">
          <div className="rounded-full bg-green-500 w-2 h-2 shadow-[0_0_6px_2px_rgba(34,197,94,0.6)]"></div>
          <div className="text-[10px] text-neutral-500">Available for oppurtunities</div>
        </div>
        <div className="flex justify-between">
          {/* <Image
            src="/profile.png"
            alt="profile picture"
            width={100}
            height={100}
          /> */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span className="font-bold text-5xl">{NAME}</span>
                <span className="text-sm text-neutral-400">{LOCATION}</span>
              </div>
              <div>
              <ContactMe x={true} github={true} email={true} resume={true}/>
              </div>
            </div>
            <div className="text-neutral-400">
              {DESCRIPTION}
            </div>
          </div>
        </div>
      

      </div>

      <main>
        <div className="flex flex-col gap-8">
          <WorkItem workTitle="work" workObject={work} />

          <WorkItem workTitle="project" workObject={projects} />

          <WorkItem workTitle="blogs" workObject={blogs} />

          <WorkItem workTitle="education" workObject={education} />

        </div>
      </main>
      <footer>
        
      </footer>
    </>
  );
}
