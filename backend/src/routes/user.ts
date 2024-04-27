import {Hono,Context} from "hono"
import {sign,decode,verify} from "hono/jwt"
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import {signUpValidator,loginValidator} from "../validators/user";
import {env} from "hono/adapter"

const userRouter = new Hono();


userRouter.post('/signup',signUpValidator,async (c:Context)=>{
    try{

    const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const reqBody = await c.req.json();
    const res =await prisma.user.create({
        data:{
        username:reqBody.username,
        email:reqBody.email,
        password:reqBody.password
    }})
    console.log(res)
    if(res){
        const token = await sign(res.id,c.env.SECRET_KEY)

        c.status(201)
        return c.json({"message":"User Created Successfully","token":token})
    }
    else{
        c.status(500)
        return c.json({"message":`Internal Server Error`})
    }
    }
    catch(err){
        c.status(500)
        return c.json({"message":`Internal Server Error ${err}`})
    }
})

userRouter.post('/login',loginValidator,async(c:Context)=>{
    try{

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const reqBody = await c.req.json();
    const res = await prisma.user.findUnique({where:{
        username:reqBody.username,
        password:reqBody.password
    }})
    console.log(res)
    if (res){
        const token = await sign(res.id,c.env.SECRET_KEY)

        c.status(200)
        return c.json({"token":token})
    }
    else{
        c.status(500)
        return c.json({"message":`Internal Server Error`})
    }
}
    catch(err){
        c.status(500)
        return c.json({"message":`Internal Server Error ${err}`})
    }
})

export default userRouter