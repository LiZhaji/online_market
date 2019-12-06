import Axios from "axios";
const baseUrl = "/eshop";

const map = {
  get: "GET",
  post: "POST",
  delete: 'DELETE',
  default: "GET"
};
function fetch(method, partUrl, data) {
  let url = baseUrl + partUrl;
  const methodName = map[method.toLowerCase()] || map.default;
  return Axios({
    method: methodName,
    headers: { "content-type": "application/json" },
    data,
    url
  })
    .then(res => {
      if (res.data.success) {
        return res.data.data;
      } else {
        return Promise.reject(res.data.msg);
      }
    })
}

function handler(res) {
  if (res.success) {
    return res;
  } else {
    return Promise.reject(res);
  }
}
export default fetch;
