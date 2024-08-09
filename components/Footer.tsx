import { FaLinkedin } from 'react-icons/fa6'
import { MdOutlineEmail } from 'react-icons/md'

import { socialMedia } from '@/data'
import MagicButton from './MagicButton'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className='w-full mb-[40px]'
      id='contact'
    >
      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
          Ready to take <span className='text-purple'>your</span> digital presence to the next level?
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>
          Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
        </p>

        <div className='flex flex-col justify-center gap-2 md:gap-0'>
          <a href='mailto:dylan.di.filippo@gmail.com'>
            <MagicButton
              title='Send me an email'
              icon={<MdOutlineEmail />}
              position='right'
            />
          </a>
          <a href='https://www.linkedin.com/in/dylandifilippo/'>
            <MagicButton
              title='Connect with me on LinkedIn'
              icon={<FaLinkedin />}
              position='right'
            />
          </a>
        </div>
      </div>
      <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm md:font-normal font-light'>Copyright © {currentYear} Dylan Di Filippo</p>

        <div className='flex items-center md:gap-3 gap-6'>
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 mt-10 md:mt-0'
            >
              <a
                href={info.link}
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src={info.img}
                  alt='icons'
                  width={20}
                  height={20}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
