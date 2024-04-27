import { Link } from "react-router-dom"


export const AppBar = () =>{
    return <div className = "flex justify-between">
        <div className="justify-start">
            <div className = "text-base font-bold pl-5 mt-3 justify-start text-center">
                Medium Clone
            </div>
        </div>
        <div className="justify-end">
            <div className="flex mr-3 mt-3">
                <Link to={'/publish'}>
                <button  type="button" className=" mr-3 w-full py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">New Blog</button>
                </Link>
                <div className="pl-4 pr-5 relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full ">
                    <span className="font-medium text-gray-600 dark:text-black-300">JL</span>
                </div>
            </div>
        </div>
    </div>
}