export default {
  baseImgUrl: "http://wuweijie.net:8090/",
  needLogin: localStorage.getItem("needLogin") === 'true',
  nickname: localStorage.getItem("nickname") || '',
  userId:''
};
