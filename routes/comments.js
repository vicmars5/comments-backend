const Router = require('@koa/router')

const router = new Router()

router.get('/comments', (ctx) => {
  ctx.body = {
    comments: ['hello', 'world']
  }
})

module.exports = router
