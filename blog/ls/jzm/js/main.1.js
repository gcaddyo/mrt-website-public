var num = 5; //倒计时的秒数
// var URL = "http://www.baidu.com";
var URL="https://eeew.fun";
window.setTimeout("doUpdate()", 5000);
function doUpdate(){
    if(num != 0){
       // document.getElementById('page_div').innerHTML = '将在'+num+'秒后自动跳转到首页' ;
        num --;
        window.setTimeout("doUpdate()", 5000);
    }else{
        num = 5;
       // window.location = URL;  //5秒后跳转到登录页面
    }
}