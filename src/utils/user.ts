export const NAME="Mukesh R."
export const LOCATION="Chennai, In"
export const DESCRIPTION="Software engineer passionate about full stack development, exploring new technologies and building scalable infrastructure. Experienced in building end-to-end, secure systems."
export const GH="https://github.com/mukesher4/"
export const X=""
export const EMAIL="mailto:mukeshramasubramanian@gmail.com"
export const DISCORD=""
export const LINKEDIN=""
export const RESUME="https://drive.google.com/file/d/18c8gcqN7okgnxfIFp1XDGR8YoCYKku6r/view?usp=sharing"

export type skillSet = {
  name: string,
  icon: string  
}

export const skills = [
  {
    name: 'Next.js',
    icon: 'nextjs',
  },
  {
    name: 'React',
    icon: 'react',
  },
  {
    name: 'MongoDB',
    icon: 'mongodb',
  },
  {
    name: 'Typescript',
    icon: 'typescript',
  },
  {
    name: 'Python',
    icon: 'python',
  },
  {
    name: 'Docker',
    icon: 'docker',
  },
  {
    name: 'PostgreSQL',
    icon: 'postgresql',
  },
  {
    name: 'Express',
    icon: 'express',
  },
  {
    name: 'TailwindCSS',
    icon: 'tailwindcss',
  },
] as skillSet[]

export const work = [
    {
      title: 'SWE Intern | @infysec',
      duration: 'March - June, 2025',
      description: [
        'Built a <span style="color: #ffffff; font-weight: semibold">full-stack</span>, VM-based CTF learning platform with features like <span style="color: #ffffff; ">dynamic docker container deployment</span> per lab session, user performance tracking',
        'Implemented <span style="color: #ffffff; font-weight: semibold">role-based access control</span>, OAuth login.'
      ],
      stack: ['nextjs', 'postgresql', 'express', 'tailwindcss'],
      // live: 'https://drive.google.com/file/d/1Iv_oS_Zc7enetdwR030Ef6S-HK0R28Bq/view?usp=sharing'
      // video: '/demo.mkv'
    },
]

export const projects = [
    {
      title: 'Pledg',
      duration: '2025',
      description: [
        '<span style="color: #ffffff; font-weight: semibold">Crypto-as-a-collateral</span> INR <span style="color: #ffffff; font-weight: semibold">loan</span> lending <span style="color: #ffffff; font-weight: semibold">p2p platform</span> built on <span style="color: #ffffff; font-weight: semibold">ethereum chain</span>.',
        '<span style="color: #ffffff; font-weight: semibold">Smart contract</span> for locking collateral and transparent transaction history.'
      ],
      stack: ['nextjs', 'tailwindcss', 'express', 'solidity'],
      building: true,
      live: 'https://pledg-landing-page.vercel.app/',
      video: '/pledgg.mp4'
    },
    {
      title: 'Doit',
      duration: '2025',
      description: [
        '<span style="color: #ffffff; font-weight: semibold">Public accountability platform</span> for users to achieve their goals and track progress efficiently.',
      ],
      github: 'https://github.com/mukesher4/doit',
      building: true,
      live: 'https://doit-hazel.vercel.app/',
      video: '/doit.mp4'
    },
    {
      title: 'DropShare',
      duration: '2025',
      description: [
        '<span style="color: #ffffff; font-weight: semibold">End-to-End encrypted</span> simple, <span style="color: #ffffff; font-weight: semibold">no-auth</span> temporary file sharing application',
        'Files are securely stored as blobs in Azure blob storage with auto-expiry.'
      ],
      stack: ['nextjs', 'mongodb', 'express', 'tailwindcss'],
      github: 'https://github.com/mukesher4/drop-share',
      live: 'https://dropshare-ten.vercel.app/',
      video: '/dropShare.mp4'
    },
    {
      title: 'ConIntact',
      duration: '2025',
      description: [
        '<span style="color: #ffffff; font-weight: semibold">Collaborative</span> contact management application built using MERN stack',
        'Users can organize contacts into sharable groups for events or teams.'
      ],
      stack: ['react', 'mongodb', 'express', 'tailwindcss'],
      github: 'https://github.com/mukesher4/conintact-frontend',
      live: 'https://conintact-frontend.vercel.app/',
      // video: '/khatija.mp4'
    }
]

export const education = [
    {
      title: 'Amrita Vishwa Vidyapeetham, Coimbatore',
      duration: '2022 - Present (Expected: 2026)',
      description: [
        'B.Tech in CSE (Cyber Security) — 8.64 CGPA'
      ]
    }
]