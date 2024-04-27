import { useState } from "react"
import { AppBar } from "../components/AppBar"
import {  useNavigate } from "react-router-dom"
import axios from "axios"


export const NewBlog = () =>{
    const navigate = useNavigate()
    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")

     async function sendRequest(){
        try{
        const response = await axios.post(`https://backend.yuvas2001.workers.dev/posts`,{title:title,content:content},{headers:{authorization:"Bearer "+localStorage.getItem("token")}})
        console.log(response)
        navigate("/blogs")
        }
        catch(e){
            console.log("Exception "+e)
        }
    }
    
    return <div>
        <AppBar></AppBar>
        <div className="flex flex-col justify-content">
    <div>
    <label className="block mt-2  ml-3 pl-3 mb-2 text-lg font-bold text-gray-900 dark:text-black text-centre">Title</label>
    <input onChange={(e)=>{
        setTitle(e.target.value)
    }} type="text" className=" ml-3block w-6/12 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 "></input>
    </div>
</div>

<div >
    <label className="block mt-2  ml-3 pl-3 mb-2 text-lg font-bold text-gray-900 dark:text-black text-centre">Content</label>
    <input onChange={(e)=>{
        setContent(e.target.value)
    }}type="text" id="large-input" className="block w-6/12 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 "></input>
</div>
<button onClick= {sendRequest} type="button" className=" mt-3 w-2/12 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Add</button>

    </div>
}