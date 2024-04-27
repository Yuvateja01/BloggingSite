
import { Context } from "hono"
import { userSignUp,userLogin } from "@yuvateja01/common"

async function signUpValidator(c:Context,next:any){
    const reqBody = await c.req.json()
    const result = userSignUp.safeParse(reqBody)
    if(result.success)
        await next()
    else
        c.status(404)
        return c.json({error:"Incorrect Input Fields"})
}

async function loginValidator(c:Context,next:any){
    const reqBody = await c.req.json()
    const result = userLogin.safeParse(reqBody)
    console.log(result)
    if(result.success)
        await next()
    else
        c.status(404)
        return c.json({error:"Incorrect Input Fields"})
}

export  {signUpValidator,loginValidator};