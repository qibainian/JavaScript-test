//参数obj指对象，参数target指运动终点，参数speed指速度，参数attr指动画效果如向左向右等，参数callback指回调函数（可传入函数）
function move(obj,target,speed,attr,callback){
    clearInterval(obj.timer);
    var current = parseInt(getStyle(obj,attr));
    if(current > target){   //判断方向
            speed = -speed;
        }
    obj.timer = setInterval(function(){
        var oldValue = parseInt(getStyle(obj,attr));
        var newValue = oldValue +　speed;
        if((newValue>target&&speed>0)||(newValue<target&&speed<0)){
            newValue = target;
        }
        obj.style[attr] = newValue + "px";
        if(newValue==target){
            clearInterval(obj.timer);
            callback && callback();
        }
    },30);
}
function getStyle(obj,name){
    if(window.getComputedStyle){
        return getComputedStyle(obj,null)[name];
    }else{
        return obj.currentStyle[name];
    }
}
