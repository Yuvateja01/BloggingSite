import { BrowserRouter,Route,Routes } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Blog } from "./pages/Blog";
import { AllBlogs } from "./pages/Blogs";
import { NewBlog } from "./pages/NewBlog";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/signin" element ={<SignIn></SignIn>}></Route>
      <Route path="/signup" element = {<SignUp></SignUp>}></Route>
      <Route path="/blog/:id" element = {<Blog></Blog>}></Route>
      <Route path = "/blogs" element = {<AllBlogs></AllBlogs>}></Route>
      <Route path="/publish" element ={<NewBlog></NewBlog>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App