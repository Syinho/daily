import $ from 'jquery';

function main() {
    /* 
    initX : 初始点击的X轴
    $initDiv: 最初点击的那个div的jquery对象
    $clone1: 初始的那个div的深复制
    curX: 跟随鼠标移动的$clone1应该所在的X轴的位置
    minDis： 与$clone1的最小距离
    minIdx:  与￥clone1距离最近的那个div
*/
    function calcDis($clone, $target) {
        let cloneX = $clone.position().left;
        let cloneY = $clone.position().top;
        let targetX = $target.position().left;
        let targetY = $target.position().top;
        return Math.sqrt(Math.pow(cloneX - targetX, 2) + Math.pow(cloneY - targetY, 2));
    }


    let canMove = true;
    $('#box div').mousedown(function (e) {
        e.preventDefault();
        if (canMove) {
            // 第一阶段 ： 选中
            canMove = false;
            let initX = e.offsetX;
            let initY = e.offsetY;
            let $initDiv = $(this);
            let $clone1 = $(this).clone(true);
            $clone1.addClass('draging').css({
                top: $initDiv.position().top,
                left: $initDiv.position().left
            }).appendTo('#box');
            $initDiv.addClass('moving').html('');


            // 第二阶段 ： 移动

            $(document).mousemove(function (e) {
                let curX = e.pageX - $('#box').offset().left - initX;
                let curY = e.pageY - $('#box').offset().top - initY;
                $clone1.css({
                    left: curX,
                    top: curY
                });
            });

            // 第三阶段 ： 释放
            $clone1.mouseup(function () {
                $(document).off('mousemove');
                let minDis = 1000;
                let minIdx;
                let dis;
                $('#box div').not(':last').each(function (index, value) {
                    dis = calcDis($clone1, $(this));
                    if (dis < minDis) {
                        minDis = dis;
                        minIdx = $(this).index();
                    }
                });

                if (minIdx == $initDiv.index()) {
                    $clone1.stop(false, true).animate($initDiv.position(), 300, function () {
                        $initDiv.removeClass('moving').html($clone1.html());
                        $clone1.remove();
                        canMove = true;
                    });
                } else {
                    let $target = $('#box div').eq(minIdx);
                    let $clone2 = $target.clone(true);
                    $clone2.addClass('draging').css({
                        top: $target.position().top,
                        left: $target.position().left
                    }).appendTo('#box');
                    $target.addClass('moving').html('');

                    $clone1.stop(false, true).animate($target.position(), 300, function () {
                        $target.html($clone1.html()).removeClass('moving');
                        $clone1.remove();
                    });

                    $clone2.stop(false, true).animate($initDiv.position(), 300, function () {
                        $initDiv.html($clone2.html()).removeClass('moving');
                        $clone2.remove();
                        canMove = true;
                    })
                }
            })
        }
    })
}

export default main;