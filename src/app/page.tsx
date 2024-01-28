import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
   <div className=" container mx-auto my-auto pt-[3rem] sm:px-[10%] md:px-[15%] lg:px-[20%] xl:px-[30%] ">
    <div className="flex  flex-col place-items-center   ">
      
      <p className=' p-4'>Hey, I`m a Senior Software Engineer at Company. I enjoy working with Next.js and crafting beautiful front-end experiences.</p>
      <p className='p-4'>This portfolio is built with Next.js and a library called Nextra. It allows you to write Markdown and focus on the content of your portfolio.</p>
      <p className='p-4 text-left w-full'>Deploy Your Own</p>
    
    </div>
    <div className="border-t border-gray-300 my-4"></div>
    <div className="flex flex-row space-x-3">
        <Link href='/blog'>Github</Link>
        <Link href='/blog'>Codeforces</Link>
        <Link href='/blog'>Linkedin</Link>
    </div>


      
   </div>
  )
}
