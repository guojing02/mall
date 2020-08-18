import Vue from 'vue'
import { Button,
         Input,
         Form,
         FormItem,
         Message,
         Drawer,
         Carousel,
         CarouselItem,
} from 'element-ui'

Vue.use(Button)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.prototype.$message = Message
Vue.use(Drawer)
Vue.use(Carousel)
Vue.use(CarouselItem)
