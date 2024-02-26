import {inter} from '../ui/fonts'
import Link from 'next/link'


const GetData =  async () => {
    const res = await fetch("http://localhost:3000/api",{next:{revalidate:3600}})
    const Data1 = res.json()
    return Data1
}
const  BlogNav = async (params:{data:{id:number,title:string,description:string,date:Date,markdown:string}}) => {
    // const data2 = await GetData()
    // let data1  = data2.filter((blog:any) => blog.id.toString() === data.id)
    // let data = data1[0];
    // console.log(data)
    const data = params.data
    console.log(data)
    const blogdate = new Date(data.date);

                
                const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            
                
                const formattedDate = `${months[blogdate.getMonth()]} ${blogdate.getDate()}, ${blogdate.getFullYear()}`;
    
    return (
        <nav className="p-1 py-2 mt-auto ">
        <div className="container mx-auto sm:px-[8%] md:px-[12%] lg:px-[18%] xl:px-[28%] ">
          <div className="flex flex-col space-y-3">
            
            

            <div className="basis-2/3 text-black font-bold ">
              <a href={`/blogs/${data.id}`}><h1 className={`${inter.className} font-extrabold text-4xl`}>{data.title}</h1></a>
            </div>
            
            <p className='text-gray-300'>{formattedDate}</p>
            </div>
          
        </div>
      </nav>    
        )
}
export default BlogNav;