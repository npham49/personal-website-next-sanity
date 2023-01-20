/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { FaReact,FaNodeJs } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiTypescript,SiNextdotjs } from 'react-icons/si'
import {toHTML} from '@portabletext/to-html'
import { urlFor } from '../lib/client'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

type ExperienceProps = {
  data: any[]
}

const Experience = ({data}:ExperienceProps) => {
  console.log(data)
  return (
    <>
    <div className="flex justify-center px-4 -mt-14">
      <div className="stats stats-horizontical w-full lg:w-auto shadow-lg bg-base-100">
      <div className="stat text-center text-accent-content">
          <div className="stat-title">NextJS</div>
          <div className="stat-value mx-auto text-5xl ">
            <SiNextdotjs />
          </div>
        </div>
        <div className="stat text-center text-accent-content">
          <div className="stat-title">ReactJS</div>
          <div className="stat-value mx-auto text-5xl ">
            <FaReact />
          </div>
        </div>
        <div className="stat text-center text-accent-content">
          <div className="stat-title">TypeScript</div>
          <div className="stat-value mx-auto text-5xl">
            <SiTypescript />
          </div>
        </div>
        <div className="stat text-center text-accent-content">
          <div className="stat-title">MongoDB</div>
          <div className="stat-value mx-auto text-5xl">
            <SiMongodb />
          </div>
        </div>
        <div className="stat text-center text-accent-content">
          <div className="stat-title">ExpressJS</div>
          <div className="stat-value mx-auto text-5xl">
            <SiExpress />
          </div>
        </div>
        <div className="stat text-center text-accent-content">
          <div className="stat-title">NodeJS</div>
          <div className="stat-value mx-auto text-5xl">
            <FaNodeJs />
          </div>
        </div>
      </div>
    </div>
    {/* Timeline Section */}
    <section className="bg-base-300 py-12 text-accent-content -mt-12">
      <div className="container  mx-auto max-w-5xl text-center mt-12">
        <h1 className="text-5xl font-bold text-accent-content">Work Experiences</h1>
        <p className="py-6">Timeline of my past and current experiences as a Developer</p>
      </div>
      {data.map((item:any) =>  (
        <div key={item._id} className="container max-w-5xl px-4 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-secondary">
            <div className='w-1/2 sm:w-full mx-auto'>
              <img
                src={urlFor(item?.image).url()}
                className=" w-full"
                alt="Headshot"
              />
              </div>
              
              <h3 className="text-3xl font-semibold">{item.company}</h3>
              <span className="text-sm font-bold tracking-wider uppercase">
                {item.location}
              </span>
              
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-[-10px] sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 pb-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-secondary">
                <h3 className="text-xl font-semibold tracking-wide">
                  {item.title}
                </h3>
                <time className="text-xs tracking-wide uppercase">
                  {item.from} - {item.to}
                </time>
                <article className='mx-auto prose lg:prose-lg text-accent-content prose-strong:text-accent-content prose-h1:text-accent-content prose-a:text-accent-content' dangerouslySetInnerHTML={{__html:toHTML(item?.description)}}></article>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
      )}
    </section>
    </>
  )
}

export default Experience