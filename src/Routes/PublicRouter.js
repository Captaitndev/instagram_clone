import Home from '~/Page/Home'
import profile from '~/Page/Profile'
import { routerPath } from './RouterPath'


const publicRouter = [
    { path: routerPath.home, component: Home },
    { path: routerPath.profile, component: profile }
]




export { publicRouter }