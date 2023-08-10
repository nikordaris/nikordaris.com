import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorSimple({ content }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github, summary } = content

  return (
    <>
      <div>
        <div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-start">
            <div className="flex flex-col items-center pt-0">
              <Image
                src={avatar}
                alt="avatar"
                width="192px"
                height="192px"
                className="h-48 w-48 rounded-full"
              />
              <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
              <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
              <div className="text-gray-500 dark:text-gray-400">{company}</div>
              <div className="flex space-x-3 pt-6">
                <SocialIcon kind="mail" href={`mailto:${email}`} />
                <SocialIcon kind="github" href={github} />
                <SocialIcon kind="linkedin" href={linkedin} />
                <SocialIcon kind="twitter" href={twitter} />
              </div>
            </div>
          </div>
          <div className="prose max-w-none dark:prose-dark xl:col-span-2">{summary}</div>
        </div>
      </div>
    </>
  )
}
