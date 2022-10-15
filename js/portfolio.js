window.addEventListener('load',function(){
    var slideSwiper = document.querySelector('.slide-swiper');
    var swiper_spot = document.querySelector('#swiper_spot');
    var spots = swiper_spot.children;
    var uls = slideSwiper.children;
    var leftbtn = document.querySelector('#leftbtn');
    var rightbtn = document.querySelector('#rightbtn');

    var ulWidth = uls[0].offsetWidth;

    var num = 0;
    var circle = 0;

    // 小圆圈点击
    for(var i = 0;i < spots.length;i++){
        spots[i].setAttribute('index',i);
        spots[i].addEventListener('click',function(){
            //小圆圈的排他思想
            for(var i = 0;i < spots.length;i++){
                spots[i].classList.remove('current');
            }
            this.classList.add('current');
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            if(num == uls.length - 1){
                rightbtn.style.display = 'none';
            }
            if(num > 0 && num < uls.length - 1){
                rightbtn.style.display = 'block';
                leftbtn.style.display = 'block';
            }
            if(num == 0){
                leftbtn.style.display = 'none';
            }
            animate(slideSwiper,-(index) *  ulWidth);
        })
    }

    //右侧按钮
    rightbtn.addEventListener('click',function(){
        num++;
        circle++;
        if(num == 1){
            leftbtn.style.display = 'block';
        }
        if(num == uls.length - 1){
            rightbtn.style.display = 'none';
        }
        animate(slideSwiper,-(num) * ulWidth);
        changeCircle();
    })
    // 左侧按钮
    leftbtn.addEventListener('click',function(){
        num--;
        circle--;
        if(num < uls.length - 1){
            rightbtn.style.display = 'block';
        }
        if(num == 0){
            leftbtn.style.display = 'none';
        }
        animate(slideSwiper,-(num) * ulWidth);
        changeCircle();
    })

    // 圆圈变化
    function changeCircle(){
        for(var i = 0;i < spots.length;i++){
            spots[i].classList.remove('current');
        }
        spots[circle].classList.add('current');
    }

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