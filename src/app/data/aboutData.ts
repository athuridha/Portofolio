// app/data/aboutData.ts

import { PenTool, Film, Camera, Terminal, Code } from 'lucide-react'

export const aboutData = {
  name: "Amara Thuridha",
  role: "Information Systems Student & IT Developer",
  description: "Tarumanagara University Information Systems student (2022) with expertise as an IT developer in Linux environment and experience in server management. Skilled in finding efficient technical solutions and has 3 years of passion in graphic design, combining aesthetics and functionality in each solution.",
  image: "/images/amar.png",
  contact: {
    phone: "+6285213971757",
    email: "amarathuridhaa@gmail.com",
    linkedin: "www.linkedin.com/in/amara-thuridha-3baa3122b",
    github: "https://github.com/athuridha",
    location: "Karawang, Jawa Barat, Indonesia"
  },
  education: [
    {
      institution: "Universitas Tarumanagara",
      degree: "Bachelor of Information Systems",
      period: "Aug 2022 - Present",
      details: "GPA: 3.43/4.00"
    },
    {
      institution: "SMK Al-Wafa Ciwidey",
      degree: "Senior High School, Multimedia",
      period: "Jun 2019 - Apr 2022",
      details: "Getting Final Grade A in Subjects: Multimedia Skill Potential"
    }
  ],
  workExperience: [
    {
      position: "Anggota Visual Design Creative",
      company: "Tarumanagara Fair 2023",
      location: "West Jakarta",
      period: "Mar 2024 - Jun 2024",
      responsibilities: [
        "Video Trailer Creation: Develop and produce an informative and engaging event trailer video to attract participants and build enthusiasm before the event.",
        "Event Video Documentation: Taking and processing video documentation during the event to capture key moments that will be used as official documentation.",
        "Ice Breaking Asset Creation: Designing creative and interactive graphic assets for ice breaking purposes, helping to create a fun and dynamic atmosphere for event participants."
      ]
    },
    {
      position: "Wakil Koordinator Publikasi dan Dokumentasi",
      company: "UKM OH 2023",
      location: "West Jakarta",
      period: "Sep 2023",
      responsibilities: [
        "Team Task Sharing: Coordinate and divide tasks to each team member effectively, ensuring that each individual understands his/her roles and responsibilities to achieve optimal results.",
        "Team Mentoring and Support: Responsible for assisting and supporting team members when experiencing difficulties in tasks, as well as providing guidance and solutions so that work can be completed to the expected standard."
      ]
    },
    {
      position: "Staff Media Kreatif",
      company: "BEM Universitas Tarumanagara",
      location: "Jakarta, Indonesia",
      period: "Sep 2023 - Nov 2023",
      responsibilities: [
        
      ]
    }
  ],
  skills: [
    { name: 'Adobe Photoshop', level: 90, icon: PenTool },
    { name: 'Adobe After Effects', level: 85, icon: Film },
    { name: 'Adobe Premiere Pro', level: 80, icon: Camera },
    { name: 'Python', level: 75, icon: Terminal },
    { name: 'Front-End Development', level: 85, icon: Code },
  ]
}