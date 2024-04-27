import { useParams } from "react-router-dom"
import { useBlogId } from "../hooks"
import { AppBar } from "../components/AppBar"

export const Blog = ()=>{
    const {id} = useParams()
    console.log(id)
    console.log("before use hook")
    const {loading,blog} = useBlogId({id:id || ""})
    console.log("after custom hook")
    if(loading){
        return <div>
            Loading ...
        </div>
    }
    return <div>
        <AppBar></AppBar>
    <div className = "grid grid-cols-2 px-10 w-full">
                <div className="">
                    <div className="text-xl font-bold ">
                        {blog.title}
                    </div>
                    <div>
                        {blog.content}
                    </div>
                </div>
                <div className="grid-cols-4">
                    Author
                </div>
            </div>
        </div>
}