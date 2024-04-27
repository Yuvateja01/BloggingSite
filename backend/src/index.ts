import { Hono,Context } from 'hono'
import userRouter from './routes/user'
import { authMiddleware } from './middleware/auth'
import blogRouter from './routes/blog'
import { cors } from 'hono/cors'

const app = new Hono()
app.use('/*',cors())
app.route('/user',userRouter)
app.route("/posts",blogRouter)

app.use(authMiddleware)
app.get('/', (c:Context) => {
  console.log(`in index:${c.get("userId")}`)
  return c.text('Hello Hono!')
})

export default app
