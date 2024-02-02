//# GLOBAL MIDDLEWARES
import { Express, json } from 'express'
import { rateLimit } from 'express-rate-limit'

// ====================================

// import { APP_HOST } from '@/config/constants'
// const corsOptions = {
//   origin: APP_HOST,
// }

const limit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

/**
 * @class Middlewares
 * @desc A class that contains global middlewares
 */
class Middlewares {
  static use(App: Express): void {
    App.use(json())
    // App.use(cors(corsOptions))
    App.use(limit)
  }
}

// --------------------------
export default Middlewares
