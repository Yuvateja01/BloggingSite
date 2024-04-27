
import {Context} from "hono"
import {blog} from "@yuvateja01/common"


async function blogCreateOrDeleteValidator(c:Context,next:any){
    const reqBody = await c.req.json()
    const res = blog.safeParse(reqBody)
    if(res.success)
        await next()
    else{
        c.status(404)
        return c.json({error:"Incorrect Input Fields"})
    }
}

async function blogUpdateValidatior(c:Context,next:any){
    const reqBody = await c.req.json()
    const res = blog.safeParse(reqBody)
    if(res.success)
        await next()
    else{
        c.status(404)
        return c.json({error:"Incorrect Input Fields"})
    }
}

export {blogCreateOrDeleteValidator,blogUpdateValidatior}