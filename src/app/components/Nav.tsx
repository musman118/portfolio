import Link from 'next/link'

const Nav = (params :{text:string, link : string}) =>{
    return(
        <nav className="p-4 mt-auto ">
        <div className="container mx-auto sm:px-[10%] md:px-[15%] lg:px-[20%] xl:px-[30%] ">
          <div className="flex flex-col ">
            <div className=" basis-2/3 text-black font-bold  ">

                <a href={`/${params.link}`}><h1>{params.text}</h1></a>
            </div>
            <div className="basis-1/3 flex flex-row-reverse ">
                <Link href="/blogs" className="text-gray-300 hover:text-black px-3 py-2 rounded">Blog</Link>
                <Link href="/projects" className="text-gray-300 hover:text-black px-3 py-2 rounded">Projects</Link>
                <Link href="/" className="text-gray-300 hover:text-black px-3 py-2 rounded">About</Link>
            </div>
            
            
            </div>
          
        </div>
      </nav>
    );
  };

export default Nav;
    
