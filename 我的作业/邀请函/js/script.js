var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }
});
var str="本人代表盛邦升华诚挚邀请各位朋友来我公司参观考察。我们将以东道主的身份请大家到“家里”坐坐，无论是已经建立合作关系的客户还是尚未合作的朋友，我都邀请您的光临。希望您看看我们的环境、深入的了解一下我们。我公司这方面的接待经验不够丰富，与各位相熟的商务代表又不多，所以在接待过程中对于一些老朋友由于大家相熟的原因可能就会照顾不周，如果我有照顾不周的地方就恕我怠慢了，希望这次能增进我们的友谊和往来，让我们有着更广阔的发展空间。";
var len=str.length;
var i=1;
function showword(){
    document.getElementById("text").innerHTML=str.substr(0,i);
    i++;
    if(i>len){
        clearInterval("done");
    }
}
var done=setInterval("showword()",100);



var str="秦皇岛盛邦升华大学生实训学习基地成立于2004年，拥有较长的办学时间以及教学实力，学校以市场需求为导向；以促进就业为目标。致力于培养及专业能力于市场需求为一身的优秀人才。我们的课程特色更注重于专业技术的学习，所以对于现在学生普遍存在的厌学情绪有很好的改善。并且入学签订保薪就业协议，对于目前毕业生面向市场就业难的问题做出了有力改善。";
var len=str.length;
var i=1;
function spanword(){
    document.getElementById("span").innerHTML=str.substr(0,i);
    i++;
    if(i>len){
        clearInterval("done");
    }
}
var done=setInterval("spanword()",100);
