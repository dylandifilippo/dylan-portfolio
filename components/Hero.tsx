import { MdAdsClick } from 'react-icons/md'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './MagicButton'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight
          className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'
          fill='white'
        />
        <Spotlight
          className='h-[80vh] w-[50vw] top-10 left-full'
          fill='purple'
        />
        <Spotlight
          className='left-80 top-28 h-[80vh] w-[50vw]'
          fill='blue'
        />
      </div>

      <div
        className='h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center'
      >
        <div
          className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'
        />
      </div>

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <TextGenerateEffect
            words='Transforming Concepts into Seamless User Experiences'
            className='text-center text-[40px] md:text-5xl lg:text-6xl'
          />

          <TextGenerateEffect
            words="I'm Dylan, a React Developer based in Belgium 🇧🇪"
            className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'
          />

          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{
              type: 'spring',
              duration: 3,
            }}
          >
            <Image
              src='/dylan.png'
              alt='dylan di filippo'
              className='w-32 h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 mb-4 md:mb-0'
              width={600}
              height={630}
            />
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 20,
              // duration: 3,
            }}
          >
            <a href='#about'>
              <MagicButton
                title='Click here to get to know me better'
                icon={<MdAdsClick />}
                position='right'
              />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
