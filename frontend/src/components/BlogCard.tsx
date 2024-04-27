import { Link } from "react-router-dom";

interface BlogCardProps{
    id:number;
    authorName:string;
    title:string;
    content:string;
    publishedDate:string;
}


export const BlogCard = ({id,authorName,title,content,publishedDate}:BlogCardProps) =>{
    return <Link to={`/blog/${id}`}><div className="flex flex-col justify-content w-screen cursor-pointer">
        <div className = "flex justify-center w-screen">
            <div>
                <div className = "flex">
                    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full ">
                        <span className="font-medium text-gray-600 dark:text-black-300">JL</span>
                    </div>
                    <div className="text-base font-bold pr-1 pl-1 text-left mt-1 ml-1">
                        {authorName} .
                    </div>
                    <div className = "text-base font-light pr-1  mt-1 ml-1">
                        {publishedDate}
                    </div>
                </div>
                <div className = "max-w-2xl text-xl font-extrabold text-left">
                    {title}
                </div>
                <div className = "max-w-2xl text-lg font-bold text-left text-slate-400">
                    {content}
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            </div>
        </div>
       
        </div>
        </Link>
}