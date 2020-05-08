import http from '../http/index'
export default {
 async getIndexRecommendData({commit}){
    const indexData = await http.shop.getIndexRecommend();
    console.log(indexData)
    commit("getIndexRecommendData",indexData)
  }
}