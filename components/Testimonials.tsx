/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'

import { companies, testimonials } from '@/data'
import { InfiniteMovingCards } from './ui/InfiniteCards'
import Image from 'next/image'

const Testimonials = () => {
  return (
    <section
      id='testimonials'
      className='py-20'
    >
      <h1 className='heading'>
        Kind words from
        <span className='text-purple'> people I worked with</span>
      </h1>

      <div className='flex flex-col items-center mt-10'>
        <InfiniteMovingCards
          items={testimonials}
          direction='right'
          speed='slow'
        />

        <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-10'>
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className='flex md:max-w-60 max-w-32 gap-2'>
                <Image
                  src={company.img}
                  alt={company.name}
                  className='md:w-24 w-20'
                  height={80}
                  width={80}
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
