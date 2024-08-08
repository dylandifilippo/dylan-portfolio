'use client'

import { navItems } from '@/data'

import Hero from '@/components/Hero'
import Grid from '@/components/Grid'
import { FloatingNav } from '@/components/ui/FloatingNavbar'
import RecentProjects from '@/components/RecentProjects'
import Testimonials from '@/components/Testimonials'
import Experience from '@/components/Experience'
import Approach from '@/components/Approach'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <main className='relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5'>
      <div className='max-w-7xl w-full'>
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Testimonials />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  )
}

export default Home
