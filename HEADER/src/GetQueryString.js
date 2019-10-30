/**
 * 获取url中得参数
 * @param name
 * @returns {null}
 */
// export default function (name) {
//     var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
//     var r = window.location.search.substr(1).match(reg);
//     if (r != null) return unescape(r[2]);
//     return null;
// }

const redirect_uri = 'topic_id'

export default function  GetQueryString() {
  const reg = new RegExp('(^|&)' + redirect_uri + '=([^&]*)(&|$)', 'i')
  const r = window.location.search.substr(1).match(reg)
  console.log(r)
  if (r != null) return unescape(r[2])
  return null
}