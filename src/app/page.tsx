// "use client"
import WorkItem from "@/components/WorkItem";
import { getAllPostSlugs, getPostData } from '@/utils/posts';
import ContactMe from "@/components/ContactMe";
import { work, projects, education, NAME, LOCATION, DESCRIPTION, skills, skillSet } from '@/utils/user';
import ReactMarkdown from 'react-markdown';
import { techIcon } from "@/utils/techIcon";
import Image from "next/image";

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
    <div
    >
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="w-[1200px] h-[400px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute w-[500px] h-[160px] bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-transparent blur-3xl -rotate-12 translate-x-20" />
          <div className="absolute w-[400px] h-[140px] bg-gradient-to-bl from-indigo-500/12 via-blue-500/8 to-transparent blur-3xl rotate-6 -translate-x-40 translate-y-10" />
        </div>
      </div>
      
      <div className="flex flex-col justify-between gap-6">
        <div className="flex gap-2 items-center">
          <div className="rounded-full bg-green-500 w-2 h-2 shadow-[0_0_6px_2px_rgba(34,197,94,0.6)] animate-pulse"></div>
          <div className="text-[10px] text-neutral-500">Available for oppurtunities</div>
        </div>
        <div className="flex gap-6">
          {/* <Image src="/profile.png" alt="Mukesh R" width={150} height={80} /> */}
          <div className="w-1/3 border-2 bg-black border-white/15">
            <Image src="/profile.png" alt="Mukesh R" width={150} height={80} />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span className="font-bold text-5xl">{NAME}</span>
                <span className="text-sm text-neutral-400">{LOCATION}</span>
              </div>
              <div>
              <ContactMe x={false} github={true} email={true} resume={true}/>
              </div>
            </div>
            <div className="text-neutral-400 text-sm">
              <ReactMarkdown>{DESCRIPTION}</ReactMarkdown>
            </div>
          </div>
        </div>
      
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex gap-2 overflow-x-auto scrollbar-hide pb-2" style={{ scrollBehavior: 'smooth' }}>
          <div className="flex gap-2  animate-scroll">
            {skills.map((skill: skillSet) => (
              <div key={skill.name} className="min-w-20 flex relative px-2 text-xs items-center justify-center gap-2 max-w-36 border-2 border-neutral-800/30 rounded-xs p-2 flex-shrink-0">
            {/* <div className='absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-t-white/5 group-hover:border-t-neutral-600 group-hover:border-opacity-30 border-l-white/5 group-hover:border-l-neutral-600'></div>
            <div className='absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-t-white/5 border-r-white/5 group-hover:border-opacity-30 group-hover:border-t-neutral-600 group-hover:border-r-neutral-600'></div>
            <div className='absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-b-white/5 border-l-white/5 group-hover:border-opacity-30 group-hover:border-b-neutral-600 group-hover:border-l-neutral-600'></div>
            <div className='absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-b-white/5 border-r-white/5 group-hover:border-opacity-30 group-hover:border-b-neutral-600 group-hover:border-r-neutral-600'></div> */}
                <div>{techIcon[skill.icon]}</div>
                <div>{skill.name}</div>
              </div>
            ))}
            {skills.map((skill: skillSet) => (
              <div key={`${skill.name}-duplicate`} className="min-w-20 relative flex px-2 text-xs items-center justify-center gap-2 max-w-36 border-2 border-neutral-800/30 rounded-xs p-2 flex-shrink-0">
            {/* <div className='absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-t-white/5 group-hover:border-t-neutral-600 group-hover:border-opacity-30 border-l-white/5 group-hover:border-l-neutral-600'></div>
            <div className='absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-t-white/5 border-r-white/5 group-hover:border-opacity-30 group-hover:border-t-neutral-600 group-hover:border-r-neutral-600'></div>
            <div className='absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-b-white/5 border-l-white/5 group-hover:border-opacity-30 group-hover:border-b-neutral-600 group-hover:border-l-neutral-600'></div>
            <div className='absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-b-white/5 border-r-white/5 group-hover:border-opacity-30 group-hover:border-b-neutral-600 group-hover:border-r-neutral-600'></div> */}
                <div>{techIcon[skill.icon]}</div>
                <div>{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      </div>

      <main>
        <div className="flex flex-col gap-8 mt-4">
          <WorkItem workTitle="work" workObject={work} />

          <WorkItem workTitle="project" workObject={projects} />

          <WorkItem workTitle="blog" workObject={blogs} />

          <WorkItem workTitle="education" workObject={education} />

        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}
