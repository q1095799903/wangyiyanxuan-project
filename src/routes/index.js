import index from '../pages/index/index.vue'
import category from '../pages/category/category.vue'
import worthBuy from '../pages/worthBuy/worthBuy.vue'
import cart from '../pages/cart/cart.vue'
import personal from '../pages/personal/personal.vue'
export default [
  {path:"/index",component:index},
  {path:"/category",component:category},
  {path:"/worthBuy",component:worthBuy},
  {path:"/cart",component:cart},
  {path:"/personal",component:personal},
  {path:"/",redirect:"/index"}
]
