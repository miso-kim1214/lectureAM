window.onload = function () {
    let current = 0;
    let isSlide = false;
    let flag = false;
    setInterval(() => {
        flag = true;
        slide(current + 1, 1)
    }, 3000);


    //슬라이드는 5초마다 우측으로 슬라이드
    //자동 슬라이드 중에는 버튼 누를 수 없음
    //슬라이드 그림 7장으로
    //0번에서 왼쪽 버튼 클릭 시 6번, (그 반대도)
    function slide(target, dir) {
        //if(target >= $(".slide-image").length || target < 0 || isSlide) return;
        if (isSlide) {
        // $(".slide-btn").attr("disabled", true);
        
            return;
        }
        if (target < 0){
            target = 6;
        }
        if (target >= $(".slide-image").length){
            target = 0;
        }
        console.log(target, dir);

        isSlide = true;
    

        

        $(".slide-image")
            .eq(target)
            .css({ "left": `${dir * 100}%` })   
            .animate({ "left": 0 }, 800);

        $(".slide-image")
            .eq(current)
            .animate({ "left": `${-100 * dir}%` }, 800, function () {
                isSlide = false;
            });
        flag = false;
        current = target;
        //핀에대한 작업은 여기서 나중에
        $(".pin").removeClass("active");
        $(".pin").eq(target).addClass("active");
    }

    $(".slide-image").css({ "left": "100%" });
    $(".slide-image").eq(current).css("left", 0);

    $(".pin").on("click", function () {
        if(flag){
            return;
        }
        let idx = $(this).index();
        slide(idx, idx - current < 0 ? -1 : 1);

        $(".pin").removeClass("active");
        $(".pin").eq(idx).addClass("active");
    })

    $(".slide-btn").on("click", function () {
        if(flag){
            return;
        }
        let dir = $(this).data("dir") * 1; //숫자로 강제 형변환
        slide(current + dir, dir);
    });

};


















// $(document).ready(function(){

// });

// $(function(){


// });
