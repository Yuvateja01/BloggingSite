import axios from "axios";
import { useState,useEffect } from "react"



interface BlogType {
    content:string;
    title:string;
    id:number;
    userId:number;
}
export const useBlogs = () =>{
    const [loading,setLoading] =useState(true);
    const [blogs,setBlogs] = useState<BlogType[]>([]);

    useEffect( ()=>{
        axios.get("https://backend.yuvas2001.workers.dev/posts",{headers:{authorization:localStorage.getItem("token")}}).then(res=>{
            const {posts} =res.data;
            console.log(posts)
            setLoading(false)
            setBlogs(posts)
        })

    },[])

    return {
        loading,blogs
    }
}

export const useBlogId = ({id}:{id: string})=>{
    const [blog,setBlog] = useState<BlogType>()
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        axios.get(`https://backend.yuvas2001.workers.dev/posts/${id}`,{headers:{authorization:"Bearer "+localStorage.getItem("token")}}).then(res=>{
            const {posts} =res.data;
            console.log("running")
            console.log(posts)
            setBlog(posts)
            setLoading(false)
        })
    },[id])

    return {loading,blog}
}