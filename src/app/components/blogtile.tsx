import Link from 'next/link'

const BlogTile = (params : {
    Title : string,
    Description : string,
    Date : string,
    link: string
}) => {
    return(
        <div className="container p-1">
            <div className="flex flex-col space-y-1">
                <Link href={params.link}>
                <h2>
                    {params.Title}
                </h2>
                </Link>
                <p>{`${params.Description}`}<Link href={params.link}>... [Read More]</Link></p>
                <p>{params.Date}</p>
            </div>
            <div className="border-t border-gray-300 my-4"></div>
        </div>
    )
}
export default BlogTile;