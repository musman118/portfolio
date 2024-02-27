import Image from 'next/image'
import Link from 'next/link'
import {roboto} from '@/app/ui/fonts'
export default function Home() {
  
  return (
    
   <div className=" container mx-auto my-auto pt-[3rem] sm:px-[8%] md:px-[12%] lg:px-[18%] xl:px-[28%] ">
    <div className={`flex  flex-col place-items-center px-[5%] sm:px-0  text-md font-normal ${roboto.className} `}>
      
      <p className='py-2  '>Hey, My name is Muhammad Usman Ahmad and I am a student who enjoys creating beautiful and functional websites.</p>
      <p className='py-2 '>This Portfolio+Blog was built using nextjs as a way to learn it.It Renders any Markdown provided.</p>
      <p className='py-2 text-left w-full'>Mostly I will blog about every new thing I learn</p>
    
    </div>
    <div className="border-t border-gray-300 my-4 "></div>
    <div className="flex flex-row space-x-3 justify-center">
        <Link href='https://github.com/usmanthelion'>Github</Link>
        <Link href='https://codeforces.com/profile/Smile118-'>Codeforces</Link>
        <Link href='/'>Linkedin</Link>
    </div>


      
   </div>
  )

}



