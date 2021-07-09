import Koa from 'koa';
import Router from '@koa/router';
import next from 'next';

const port: string | number = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server: any = new Koa()
  const router: any = new Router()

  router.get('/a', async (ctx: any) => {
    await app.render(ctx.req, ctx.res, '/a', ctx.query)
    ctx.respond = false
  })

  router.get('/b', async (ctx: any) => {
    await app.render(ctx.req, ctx.res, '/b', ctx.query)
    ctx.respond = false
  })

  router.all('(.*)', async (ctx: any) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.use(async (ctx: any, next: any) => {
    ctx.res.statusCode = 200
    await next()
  })

  server.use(router.routes())
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})
