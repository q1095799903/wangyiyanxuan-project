import index from '../pages/index/index.vue'
import category from '../pages/category/category.vue'
import worthBuy from '../pages/worthBuy/worthBuy.vue'
import cart from '../pages/cart/cart.vue'
import personal from '../pages/personal/personal.vue'
export default [
  {path:"/index",component:index,meta:{showFooter:true}},
  {path:"/category",component:category,meta:{showFooter:true}},
  {path:"/worthBuy",component:worthBuy,meta:{showFooter:true}},
  {path:"/cart",component:cart,meta:{showFooter:true}},
  {path:"/personal",component:personal,meta:{showFooter:false}},
  {path:"/",redirect:"/index"}
]
