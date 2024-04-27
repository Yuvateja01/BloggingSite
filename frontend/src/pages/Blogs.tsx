import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"


export const AllBlogs = () =>{
    const {blogs,loading} = useBlogs()
    if(loading){
        return <div>
            
<div role="status" class="max-w-sm animate-pulse">
    <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
    <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
    <span className="sr-only">Loading...</span>
</div>


        </div>
    }
    return <div>
        <AppBar></AppBar>
        {blogs.map((blog)=>
            <BlogCard id={blog.id} authorName = "John Lagne" title = {blog.title} content={blog.content} publishedDate="23 Dec,2023" ></BlogCard>
        )}

       
    </div>
}