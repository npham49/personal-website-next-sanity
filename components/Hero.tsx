/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { PageData } from '@/interface'
import React from 'react'
import {toHTML} from '@portabletext/to-html'
import { urlFor } from '../lib/client'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type HeroData = {
  title: string,
  content: any[],
  image: SanityImageSource
}

export type HeroProps = {
  data: PageData | undefined
}

const Hero = ({data}:HeroProps) => {
  return (
    <div id="top" className=" from-primary to-secondary text-primary-content -mt-[4rem] grid place-items-center items-end bg-gradient-to-br pt-20 pb-24">
        <div className="hero-content col-start-1 row-start-1 w-full max-w-7xl flex-col justify-between gap-10 lg:flex-row-reverse lg:items-end lg:gap-0 xl:gap-20">
          <div className="hero-content text-center lg:text-left flex-col lg:flex-row-reverse">
            <div className="mockup-window border bg-base-300 w-2/3 lg:w-1/2 bg-opacity-60 max-w-full lg:max-w-lg shadow-2xl">
              <img
                src={urlFor(data?.image).url()}
                className=" w-full"
                alt="Headshot"
              />
            </div>
            {/* @ts-ignore */}
            <div className="w-full lg:w-2/3">
              <article className='mx-auto prose lg:prose-lg text-primary-content prose-strong:text-accent prose-h1:text-primary-content prose-a:text-accent-content' dangerouslySetInnerHTML={{__html:toHTML(data?.content)}}></article>
              <button className="btn btn-accent mr-4">Get Resume</button>
              <button className="btn btn-secondary">Contact Me</button>
              <div className="mockup-code w-[96px] mt-24 mb-[-24px] mx-auto lg:ml-20">
                <pre data-prefix="$">
                  <code>npm i brianpham</code>
                </pre>
                <pre data-prefix=">" className="text-warning">
                  <code>installing...</code>
                </pre>
                <pre data-prefix=">" className="text-success">
                  <code>Done!</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero