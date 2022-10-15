window.addEventListener('load',function(){
    // about轮播图区域
    var slideshowSwiper = document.querySelector('.slideshow-swiper');
    var swiperImgs = document.querySelectorAll('.swiper-img');
    var btnleft = document.querySelector('.btnleft');
    var btnright = document.querySelector('.btnright');
    var pageSpan = btnleft.nextElementSibling;
    console.log(pageSpan);
    var imgWidth = swiperImgs[0].offsetWidth;

    var num = 0;
    // 右键滑动轮播图
    btnright.addEventListener('click',function(){
        this.style.display = 'none';
        num++;
        animate(slideshowSwiper,-(num) * imgWidth);
        pageSpan.innerText = '2 of 2'
        btnleft.style.display = 'block';
    })

    // 左键滑动轮播图
    btnleft.addEventListener('click',function(){
        this.style.display = 'none';
        num--;
        animate(slideshowSwiper,-(num) * imgWidth);
        pageSpan.innerText = '1 of 2'
        btnright.style.display = 'block';
    })


    // 缓动动画函数
    function animate(obj,target){
        // 解决点击，动画定时器多次进行导致加速
        clearInterval(obj.timer);
        obj.timer = setInterval(function(){
            //设置步数，可调整动画滑动效果
            var step = (target - obj.offsetLeft) / 8;
            step = step > 0?Math.ceil(step):Math.floor(step);
            //结束位置
            if(obj.offsetLeft == target){
                clearInterval(obj.timer);
            }
            obj.style.left = obj.offsetLeft + step + 'px';
        },30)
    }
})