import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
const connectDB = require("@/app/api/db");
import Blog from "@/app/api/models";
import revalidate from 'next'
import BlogNav from '@/app/components/blognav';
import datafetcher from '@/app/components/datafetcher';
const GetData = async () => {
    const res = await fetch("http://localhost:3000/api",{next:{revalidate:3600}})
    const Data1 = res.json()
    return Data1
}


const Page  = async ({params}:{params:{id:string}}) =>{
    console.log("fetching data from function")
    let data2  = await datafetcher()
    console.log("Data2 is ",data2)
    let data1  = data2.recentBlogs.filter((blog:any) => blog.id.toString() === params.id)
    let data = data1[0];
    console.log("Inside the blog/page")
    // console.log(data)
    // console.log(data)
    
    return(
        <>
        <BlogNav data={data}/>
        <div className="container mx-auto my-auto pt-[3rem] sm:px-[8%] md:px-[13%] lg:px-[18%] xl:px-[28%] overflow-y-auto">
        <Markdown remarkPlugins={[remarkGfm]}>{data.markdown}</Markdown>
        </div>
        </>
    )

}

export default Page;