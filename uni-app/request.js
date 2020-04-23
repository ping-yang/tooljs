
export default function request (obj) {
  /* obj = {
  *    baseUrl: 默认根地址
  *    url: 请求地址
  *    data: Object / String / ArrayBuffer 请求的参数
  *    header: obj 设置请求的 header， header 中不能设置 Referer。
  *    method: 请求方式
  *    timeout： 请求超时时间限制
  *    interceptResquest: 请求拦截回调
  *    interceptResponse: 响应拦截回调
  * 
  * 
  * 
  *   }
  */ 
  
  if (obj.interceptResquest) {
    obj.interceptResquest()
  }
  return new Promise(function(resolve,rejects) {
  
  })
}