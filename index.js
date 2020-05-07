require('dotenv').config()
const Koa = require('koa')
const Logger = require('koa-logger')
const Bodyparser = require('koa-bodyparser')
const commentsRoutes = require('./routes/comments')

const app = new Koa()

app.use(Logger())
app.use(Bodyparser())


// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
})

app.use(commentsRoutes.routes())
app.use(commentsRoutes.allowedMethods())
app.use(async (ctx) => {
  ctx.body = { foo: 'bar' }
})


const port = 3000
app.listen(port)
console.log('app running in port ', port)
