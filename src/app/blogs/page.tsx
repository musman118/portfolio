import BlogTile from "../components/blogtile";

const Page = () => {
    return(
        <div className="container mx-auto my-auto pt-[3rem] sm:px-[10%] md:px-[15%] lg:px-[20%] xl:px-[30%]">
            <div className="flex flex-col place-items-center">
            <BlogTile Title="A beautiful Day" Description="Short Description about a beautiful Data" Date="1/1/2003" link="/blogs/1"/>
            <BlogTile Title="Creating a Watch" Description="Short Descri=ptabfibga aeohgoaebgal aghoahefa" Date="1/1/2003" link="/blogs/2"/>
            </div>
        </div>
    )
}

export default Page;