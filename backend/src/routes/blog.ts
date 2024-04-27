import { Context,Hono } from "hono";
import {blogCreateOrDeleteValidator,blogUpdateValidatior } from "../validators/blog";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { authMiddleware } from "../middleware/auth";

const blogRouter = new Hono()

blogRouter.get("",async (c:Context)=>{
    try{
        const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const res = await prisma.blog.findMany({where:{}})
    c.status(200)
    return c.json({"posts":res})
    }
    catch(err){
        c.status(500)
        return c.json({"message":"Internal Server Error"})
    }
})

blogRouter.use(authMiddleware)

blogRouter.post("",blogCreateOrDeleteValidator,async(c:Context)=>{
    const reqBody = await c.req.json();
    try{
        const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const res = await prisma.blog.create({data:{
        title:reqBody.title,
        content:reqBody.content,
        userId:c.get("userId")
    }})
    if(res){
    c.status(201)
    return c.json({"message":"Blog Created"})
    }
    else{
        c.status(500)
        return c.json({"message":"Internal Server Error"})
    }
    }
    catch(err){
        c.status(500)
        return c.json({"message":`Internal Server Error ${err}`})
    }
})

blogRouter.get(":id",async(c:Context)=>{
    const id = +c.req.param('id')
    try{
        const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const res = await prisma.blog.findUnique({where:{id:id}})
    if (res){
        c.status(200)
        return c.json({"posts":res})
    }
    else{
        c.status(400)
        return c.json({"message":"Blog with the above Id in Not Found"})
    }
    }
    catch(err){
        c.status(500)
        return c.json({"message":"Internal Server Error"})
    }

})

blogRouter.put(":id",blogUpdateValidatior,async(c:Context)=>{
    const id = +c.req.param('id')
    const reqBody = await c.req.json()
    try{
        const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const res = await prisma.blog.update({where:{id:id,userId:c.get("userId")},data:{
        title:reqBody.title,
        content:reqBody.content

    }})
    if (res){
        c.status(200)
        return c.json({"message":"Updated Blog Successfully"})
    }
    else{
        c.status(400)
        return c.json({"message":"Unable to retreive Blog"})
    }
    }
    catch(err){
        c.status(500)
        return c.json({"message":"Internal Server Error"})
    }

})

blogRouter.delete(":id",async(c:Context)=>{
    const id = +c.req.param('id')
    try{
        const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const res = await prisma.blog.delete({where:{id:id,userId:c.get("userId")}})
    if (res){
        c.status(200)
        return c.json({"posts":res})
    }
    else{
        c.status(400)
        return c.json({"message":"Blog with the above Id in Not Found"})
    }
    }
    catch(err){
        c.status(500)
        return c.json({"message":"Internal Server Error"})
    }
})

export default blogRouter
