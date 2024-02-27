import Link from 'next/link'

const BlogTile = (params : {
    Title : string,
    Description : string,
    Date : string,
    link: string
}) => {
    return(
        <div className="container p-1">
            <div className="flex flex-col space-y-2 px-[2%] sm:px-[0%]">
                <Link href={params.link}>
                <h2 className='font-bold text-xl'>
                    {params.Title}
                </h2>
                </Link>
                <p>{`${params.Description} `}<Link href={params.link} className="underline text-zinc-500 after:content-['->']">Read More </Link></p>
                <p className='text-gray-600'>{params.Date}</p>
            </div>
            <div className="border-t border-gray-300 my-4"></div>
        </div>
    )
}
export default BlogTile;