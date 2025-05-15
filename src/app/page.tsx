import WorkItem from "@/components/WorkItem";
import { getAllPostSlugs, getPostData } from '@/utils/posts';
import ContactMe from "@/components/ContactMe";
import Image from 'next/image'

type Post = {
  slug: string;
  content: string;
  title: string;
  date?: string;
  excerpt?: string;
}

export const revalidate = 3600 

export default async function Home() {
  const work = [
    {
      title: 'SWE Intern | @infysec',
      duration: 'May, 2025 - Present',
      description: [
        'Built a full-stack application — a VM-based \'Hack The Box\'-type learning platform with role-based access control for admins and users.',
        'Implemented auto-deployment of containerized VMs for each lab session on instance start.'
      ],
      stack: ['nextjs', 'postgresql', 'express', 'tailwindcss']
    },
  ]
  const projects = [
    {
      title: 'DropShare',
      duration: '2025',
      description: [
        'End-to-End encrypted simple, no-auth temporary file sharing application',
        'Encrypted files get stored in Azure Blob Storage'
      ],
      stack: ['nextjs', 'mongodb', 'express', 'tailwindcss'],
      github: 'https://github.com/mukesher4/drop-share',
      live: 'https://dropshare-ten.vercel.app/'
    },
    {
      title: 'ConIntact',
      duration: '2025',
      description: [
        'Collaborative Contact Management Application built using MERN stack'
      ],
      stack: ['react', 'mongodb', 'express', 'tailwindcss'],
      github: 'https://github.com/mukesher4/conintact-frontend',
      live: 'https://conintact-frontend.vercel.app/'
    }
  ]

  const education = [
    {
      title: 'Amrita Vishwa Vidyapeetham, Coimbatore',
      duration: '2022 - Present (Expected: 2026)',
      description: [
        'B.Tech in CSE (CYS)'
      ]
    }
  ]

  const slugs = getAllPostSlugs()
  const blogs = slugs.map(({ params }) => {
    const post = getPostData(params.slug, true) as Post
    return {
      title: post.title,
      duration: post.date || '2025',
      link: params.slug
    }
  })

  return (
    <>
      <div className="flex flex-col justify-between gap-4">
        <div className="flex justify-between">
          {/* <Image
            src="/profile.png"
            alt="profile picture"
            width={100}
            height={100}
          /> */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="font-bold text-lg">{process.env.NAME}</span>
              <span className="text-sm text-neutral-400">{process.env.LOCATION}</span>
            </div>
            <div className="text-neutral-400">
              {process.env.DESCRIPTION}
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
        <ContactMe x={true} github={true} email={true} />
      </footer>
    </>
  );
}
