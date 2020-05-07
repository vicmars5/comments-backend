const Router = require('@koa/router')
const Models = require('../db/models')

const router = new Router()

router.get('/comments', async (ctx) => {
  const comments = await Models.Comments.findAll()
  ctx.body = {
    comments,
  }
})

router.post('/comments', (ctx) => {
  console.log(ctx.request.body)
  const { comment } = ctx.request.body
  ctx.body = Models.Comments.create({ comment, votes: 0 })
})

router.put('/comments', (ctx) => {
})

router.del('/comments', (ctx) => {
})

module.exports = router
