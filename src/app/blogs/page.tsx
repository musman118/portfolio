import BlogTile from "../components/blogtile";
import datafetcher from "../components/datafetcher";

    


const GetData = async () => {
    const res = await fetch("https://musman.xyz/api",{next:{revalidate:3600}})
    const Data1 = res.json()
    return Data1
}
const Page = async () => {
    const Data = await datafetcher()
    console.log("inside the blog/page")
    
    console.log(Data)
    return(
        <div className=" my-auto pt-[3rem] container mx-auto sm:px-[8%] md:px-[12%] lg:px-[18%] xl:px-[28%] ">
            <div className="flex flex-col place-items-center">
            {Data && Data.recentBlogs.map((blog:any) => {
                const date = new Date(blog.date);

                
                const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            
                
                const formattedDate = `${date.getDate()}, ${months[date.getMonth()]}, ${date.getFullYear()}`;
                return <BlogTile key={blog._id} Title={blog.title} Description={blog.description} Date={formattedDate} link={`/blogs/${blog.id}`}/>;
                
            })}
            </div>
        </div>
    )
    
}

export default Page;