/**
 * Created by zwwill on 2017/8/29.
 */
import Router from 'vue-router'
import ViewLive from '../assets/views/live.vue'
import ViewRecommand from '../assets/views/recommand.vue'
import ViewDrama from '../assets/views/drama.vue'
import ViewPart from '../assets/views/part.vue'
import ViewOwn from '../assets/views/own.vue'

Vue.use(Router)


export default new Router({
    // mode: 'abstract',
    routes: [
        { path: '/live', component: ViewLive },
        { path: '/recommand', component: ViewRecommand },
        { path: '/drama', component: ViewDrama },
        { path: '/part', component: ViewPart },
        { path: '/own', component: ViewOwn },
        { path: '/', redirect: '/live' }
    ]
})