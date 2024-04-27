import {z} from "zod"

const blog = z.object({
    title:z.string(),
    content:z.string(),
})

const userSignUp = z.object({
    username:z.string(),
    password:z.string().min(8),
    email:z.string()
})

const userLogin = z.object({
    username:z.string(),
    password:z.string()
})

type blogType = z.infer<typeof blog>
type userSignUpType = z.infer<typeof userSignUp>
type userLoginType = z.infer<typeof userLogin>


export  {userSignUp,userSignUpType,userLogin,userLoginType,blog,blogType};
