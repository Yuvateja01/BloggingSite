import {verify} from "hono/jwt"
import {Context} from "hono"

async function authMiddleware(c:Context,next:any){
    const authHeader = c.req.header('authorization')
    if(!authHeader){
        c.status(401)
        return c.json({"message":"Missing Auth Token"})
    }
    const token:string = authHeader?.split(" ")[1]
    const res:string = await verify(token,c.env.SECRET_KEY)
    console.log(res)
    if (res){
        c.set("userId",res)
        // console.log(c.get('userId'))
        await next()
    }
    else{
        c.status(401)
        return c.json({"message":"Token Expired or Invalid"})
    }

}
export {authMiddleware};