'use client'
import Link from 'next/link'
import {inter} from "@/app/ui/fonts"
import { usePathname } from 'next/navigation';
import{clsx} from 'clsx'
import Blog from '@/app/api/models';
import connectDB from '../api/db';
const data = [
  {
    name: "About",
    link: "/"
  },
  {
    name: "Projects",
    link: "/projects"
  },
  {
    name: "Blog",
    link: "/blogs"
  }
]
const navtext = [
  {
    text: "Muhammad Usman Ahmad",
    link: "/"
  },
  {
    text: "Projects",
    link: "/projects"
  },
  {
    text: "Posts",
    link: "/blogs"
  
  }
]
const getData = () => {
 const data = fetch("http://localhost:3000/api").then((res) => {
    return res.json()
  })
  return data
}

const links = ['/','/projects','/blogs']
const Nav =  () =>{
  const path   = usePathname();
  if(links.includes(path)){
    const navdata = navtext.filter((item) => item.link === path)
    return(

      <nav className="p-1 py-2 mt-auto ">
        <div className="container mx-auto sm:px-[8%] md:px-[12%] lg:px-[18%] xl:px-[28%] ">
          <div className="flex flex-col space-y-2 px-[2%]">
            
            

            <div className="basis-2/3 text-black font-bold">
              <a href={navdata[0].link}><h1 className={`${inter.className} font-extrabold text-4xl`}>{navdata[0].text}</h1></a>
            </div>
            <div className="basis-1/3 flex flex-row justify-end ">
              
              {data.map((item) => {
                return(
                  <Link key={item.name} href={item.link} className={clsx(' hover:text-black px-3 py-2 rounded',
                    {
                      ' text-black': path === item.link
                    },
                    {
                      'text-gray-300' : path !== item.link
                    },
                  )}>
                    {item.name}
                  </Link>
                )
              })}
              </div>
            </div>
          
        </div>
      </nav>
    )
   } 
  //else {
  //   const blogid = path[path.length - 1] 
  //   const data = getData().then((res) => {
  //     console.log("inside the nav")
  //     console.log("Compiling the title of the blog")
  //     let data1  = res.filter((blog:any) => blog.id.toString() === blogid)
  //     let data = data1[0];
  //     console.log(data.title)
  //     return (
  //       <div>
  //       <h1>{data.title}</h1>
  //       <p>{data.id}</p>
  //       </div>
  //     );
  //   });
  // }
  
  
    
  };

export default Nav;
// return (
//   <Link key={item.name} href={item.link} className={clsx(`text-gray-300 hover:text-black px-3 py-2 rounded`,
//   {
//     `bg-sky-100 text-blue-600`: path === link.href 
//   },
//   )}>
//     {item.name}
//   </Link>
// );
// })}
    
{/* <Link href="/blogs" className="text-gray-300 hover:text-black px-3 py-2 rounded">Blog</Link>
                <Link href="/projects" className="text-gray-300 hover:text-black px-3 py-2 rounded">Projects</Link>
                <Link href="/" className="text-gray-300 hover:text-black px-3 py-2 rounded">About</Link> */}