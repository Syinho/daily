window.onload = function () {
    let oLoading = $('loading');
    let oHeader = $('header');
    let oMusic = $('music');
    let oAudio = $('audio1');
    let oNav = $('nav');
    let aLiNav = oNav.getElementsByTagName('li');
    let oArrow = $('arrow');
    let oContent = $('content');
    let oMenu = $('menu');
    let aLiMenu = oMenu.getElementsByTagName('li');
    let oList = $('list');
    let aLiList = getByClass(oList, 'liList');
    let aDivList = getByClass(oList, 'divList');
    let oHomeContent = $('homeContent');
    let oHomeContent1 = getByClass(oHomeContent, 'homeContent1')[0];
    let oHomeContent2 = getByClass(oHomeContent, 'homeContent2')[0];
    let oCourseContent = $('courseContent');
    let oCourseContent3 = getByClass(oCourseContent, 'courseContent3')[0];
    let oWorksContent = $('worksContent');
    let oWorksContent2 = getByClass(oWorksContent, 'worksContent2')[0];
    let oAboutContent = $('aboutContent');
    let oAboutContent3 = getByClass(oAboutContent, 'aboutContent3')[0];
    let oPartnerContent = $('partnerContent');
    let oPartnerContent3 = getByClass(oPartnerContent, 'partnerContent3')[0];


    let iContentHeight = 0;
    let prevIdx = 0;
    let nowIdx = 0;
    let resizeTimer = null;

    showLoading();
    bindNav();
    play();
    contentAuto();
    divContentAuto();
    mousewheel();
    homeContent();
    courseContent();
    worksContent();
    aboutContent();
    partnerContent();

    window.onresize = fnResize;


    function showLoading() {
        let oSpan = oLoading.getElementsByTagName('span')[0];
        let aDiv = oLoading.getElementsByTagName('div');
        let arr = ['20190214100918.jpg', 'about2.jpg', 'about4.jpg', 'bg1.jpg', 'bg3.jpg', 'bg5.jpg', 'blizzard.png', 'ea.png', 'greenLine.png', 'home1.jpg', 'home3.jpg', 'home_gruen.png', 'menuIndicator.png', 'musicoff.gif', 'nintendo.png', 'pencel2.png', 'plane1.png', 'plane3.png', 'ps4.png', 'shanda.png', 'steam.png', 'tencent.png', 'ubisoft.png', 'worksimg2.jpg', 'worksimg4.jpg', 'zoomico.png'];
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            let imgObj = new Image();
            imgObj.src = `img/${arr[i]}`;
            imgObj.onload = function () {
                count++;
                oSpan.style.width = count / arr.length * 100 + '%';
            };
            imgObj.onerror = function () {
                count++;
                oSpan.style.width = count / arr.length * 100 + '%';
                console.log(`${arr[i]}图片加载失败`);
            }
        }

        function spanChange() {
            if (oSpan.style.width == '100%') {
                oSpan.style.display = 'none';
                aDiv[0].style.height = aDiv[1].style.height = 0;
            }
        }

        function divChange() {
            oLoading.parentNode.removeChild(oLoading);
            if (cjAnimate[0].inAn) {
                cjAnimate[0].inAn();
            }
            // play();
        }

        oSpan.addEventListener('transitionend', spanChange, false);
        aDiv[0].addEventListener('transitionend', divChange, false);
    }

    function contentAuto() {
        iContentHeight = viewHeight() - oHeader.offsetHeight;
        oContent.style.height = iContentHeight + 'px';
        oList.style.top = -nowIdx * iContentHeight + 'px';
        for (let i = 0; i < aLiList.length; i++) {
            aLiList[i].style.height = iContentHeight + 'px';
        }
    }

    function divContentAuto() {
        let mt = (iContentHeight - 520) / 2;
        for (let i = 0; i < aDivList.length; i++) {
            aDivList[i].style.marginTop = mt + 'px';
        }
    }

    function fnResize() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            contentAuto();
            divContentAuto();
        }, 200);
    }

    function bindNav() {
        let oDiv = aLiNav[0].getElementsByTagName('div')[0];
        oDiv.style.width = '100%';
        aLiMenu[0].className = 'active';
        oList.style.top = 0;
        oArrow.style.left = aLiNav[0].offsetLeft + aLiNav[0].offsetWidth / 2 - oArrow.offsetWidth / 2 + 'px';

        for (let i = 0; i < aLiNav.length; i++) {
            aLiNav[i].index = i;
            aLiNav[i].onmousedown = function () {
                prevIdx = nowIdx;
                nowIdx = this.index;
                toMove(this.index);
            }
        }
        for (let i = 0; i < aLiMenu.length; i++) {
            aLiMenu[i].index = i;
            aLiMenu[i].onclick = function () {
                prevIdx = nowIdx;
                nowIdx = this.index;
                toMove(this.index);
            }
        }
    }

    function toMove(i) {
        for (let i = 0; i < aLiNav.length; i++) {
            aLiNav[i].getElementsByTagName('div')[0].style.width = '';
        }
        aLiNav[i].getElementsByTagName('div')[0].style.width = '100%';
        for (let i = 0; i < aLiMenu.length; i++) {
            aLiMenu[i].className = '';
        }
        aLiMenu[i].className = 'active';
        oArrow.style.left = aLiNav[i].offsetLeft + aLiNav[i].offsetWidth / 2 - oArrow.offsetWidth / 2 + 'px';
        oList.style.top = -nowIdx * iContentHeight + 'px';

        if (cjAnimate[nowIdx].inAn) {
            cjAnimate[nowIdx].inAn();
        }

        if (cjAnimate[prevIdx].outAn) {
            cjAnimate[prevIdx].outAn();
        }
    }

    function mousewheel() {
        let mouseWheelTimer = null;
        let uod = '';

        if (!+'\v1') {
            // IE9以下使用attachEvent
            oContent.attachEvent('onmousewheel', function () {
                clearTimeout(mouseWheelTimer);
                let e = window.event;
                mouseWheelTimer = setTimeout(function () {
                    toChange(e);
                }, 200);
            });
        } else {
            oContent.addEventListener('mousewheel', function (e) {
                clearTimeout(mouseWheelTimer);
                mouseWheelTimer = setTimeout(function () {
                    toChange(e);
                }, 200);
            }, false);
            oContent.addEventListener('DOMMouseScroll', function (e) {
                clearTimeout(mouseWheelTimer);
                mouseWheelTimer = setTimeout(function () {
                    toChange(e);
                }, 200);
            }, false);
        }

        function toChange(e) {
            if (e.wheelDelta) {
                uod = e.wheelDelta > 0 ? 'up' : 'down';
            } else if (e.detail) {
                uod = e.detail < 0 ? 'up' : 'down';
            }

            if (uod == 'up') {
                if (nowIdx == '0') {
                    return;
                } else {
                    prevIdx = nowIdx;
                    nowIdx--;
                    toMove(nowIdx);
                }
            } else if (uod == 'down') {
                if (nowIdx == aLiList.length - 1) {
                    return;
                } else {
                    prevIdx = nowIdx;
                    nowIdx++;
                    toMove(nowIdx);
                }
            }
        }
    }

    function homeContent() {
        let aLi1 = oHomeContent1.getElementsByTagName('li');
        let aLi2 = oHomeContent2.getElementsByTagName('li');
        let curPage = 0;
        let prevPage = 0;

        let data = [{
            text: 'Lorem, ipsum.'
        }, {
            text: 'Lorem, ipsum.'
        }, {
            text: 'Lorem, ipsum.'
        }, {
            text: 'Lorem, ipsum.'
        }];
        create();

        function create() {
            for (let i = 0; i < data.length; i++) {
                let oLi1 = document.createElement('li');
                oLi1.innerHTML = `<h1 class="commonTitle">${data[i].text}</h1>`;
                let oLi2 = document.createElement('li');
                if (i == 0) {
                    oLi1.className = oLi2.className = 'active';
                }
                oHomeContent1.appendChild(oLi1);
                oHomeContent2.appendChild(oLi2);
            }
        }

        for (let i = 0; i < aLi2.length; i++) {
            aLi2[i].index = i;
            aLi2[i].onclick = function () {
                if (this.index > curPage) {
                    aLi1[this.index].className = 'rightShow';
                    aLi1[curPage].className = 'leftHide';
                } else if (this.index < curPage) {
                    aLi1[this.index].className = 'leftShow';
                    aLi1[curPage].className = 'rightHide';
                }
                prevPage = curPage;
                curPage = this.index;
                for (let i = 0; i < aLi2.length; i++) {
                    aLi2[i].className = '';
                }
                aLi2[this.index].className = 'active';
            }
        }

        timer = setInterval(change, 3000);
        oContent.addEventListener('mouseover', function () {
            clearInterval(timer);
        });

        function change() {
            curPage++;
            if (curPage == aLi2.length) {
                curPage = 0;
            }

            for (let i = 0; i < aLi2.length; i++) {
                aLi2[i].className = '';
            }
            aLi2[curPage].className = 'active';
            aLi1[curPage].className = 'rightShow';
            aLi1[prevPage].className = 'leftHide';
            prevPage = curPage;
        }
    }

    function courseContent() {
        const data = [{
            img: './img/tencent.png',
            text: 'welcome to the Empire of Tencent'
        }, {
            img: './img/tencent.png',
            text: 'welcome to the Empire of Tencent'
        }, {
            img: './img/tencent.png',
            text: 'welcome to the Empire of Tencent'
        }, {
            img: './img/tencent.png',
            text: 'welcome to the Empire of Tencent'
        }, {
            img: './img/tencent.png',
            text: 'welcome to the Empire of Tencent'
        }, {
            img: './img/tencent.png',
            text: 'welcome to the Empire of Tencent'
        }, {
            img: './img/tencent.png',
            text: 'welcome to the Empire of Tencent'
        }, {
            img: './img/tencent.png',
            text: 'welcome to the Empire of Tencent'
        }, {
            img: './img/tencent.png',
            text: 'welcome to the Empire of Tencent'
        }, {
            img: './img/tencent.png',
            text: 'welcome to the Empire of Tencent'
        }, {
            img: './img/tencent.png',
            text: 'welcome to the Empire of Tencent'
        }, {
            img: './img/tencent.png',
            text: 'welcome to the Empire of Tencent'
        }];

        create();

        function create() {
            let oUl = document.createElement('ul');
            for (let i = 0; i < data.length; i++) {
                let oLi = document.createElement('li');
                let oF = document.createElement('div');
                oF.className = 'front';
                oF.style.backgroundImage = `url('${data[i].img}')`;
                let oB = document.createElement('div');
                oB.className = 'back';
                oB.innerHTML = `${data[i].text}`;
                oLi.appendChild(oF);
                oLi.appendChild(oB);
                oUl.appendChild(oLi);
            }
            oCourseContent3.appendChild(oUl);
        }
    }

    function worksContent() {
        let aLi = oWorksContent2.getElementsByTagName('li');
        const data = [{
            img: 'img/worksimg1.jpg',
            msg: 'New Journey'
        }, {
            img: 'img/worksimg2.jpg',
            msg: 'New Boss'
        }, {
            img: 'img/worksimg3.jpg',
            msg: 'New Map'
        }, {
            img: 'img/worksimg4.jpg',
            msg: 'New Scenario'
        }];

        create();

        function create() {
            let oUl = document.createElement('ul');
            for (let i = 0; i < data.length; i++) {
                let oLi = document.createElement('li');
                oLi.className = 'worksImgParent';
                oLi.innerHTML = `<img src='${data[i].img}' class="worksImg"><div class="worksImgMask"><p class="commonText">${data[i].msg}</p><div></div></div>`;
                oUl.appendChild(oLi);
            }
            oWorksContent2.appendChild(oUl);
        }
    }

    function aboutContent() {
        let aUl = oAboutContent3.getElementsByTagName('ul');
        let aSpan = oAboutContent3.getElementsByTagName('span');

        for (let i = 0; i < aUl.length; i++) {
            change(aUl[i], aSpan[i]);
        }


        function change(ul, span) {
            let w = ul.offsetWidth / 2;
            let h = ul.offsetHeight / 2;
            let src = ul.dataset.src;
            for (let i = 0; i < 4; i++) {
                let oLi = document.createElement('li');
                oLi.style.width = w + 'px';
                oLi.style.height = h + 'px';
                let oImg = document.createElement('img');
                oImg.src = src;
                oImg.style.left = -(i % 2) * w + 'px';
                oImg.oldleft = -(i % 2) * w;
                oImg.style.top = -Math.floor(i / 2) * h + 'px';
                oImg.oldtop = -Math.floor(i / 2) * h;
                oLi.appendChild(oImg);
                ul.appendChild(oLi);
                // (0,0),(-w,0),(0,-h),(-w,-h)
            }

            const data = [{
                direction: 'top',
                val: h
            }, {
                direction: 'left',
                val: -2 * w
            }, {
                direction: 'left',
                val: w
            }, {
                direction: 'top',
                val: -2 * h
            }];
            let aImg = ul.getElementsByTagName('img');
            for (let i = 0; i < aImg.length; i++) {
                ul.onmouseover = function () {
                    for (let i = 0; i < data.length; i++) {
                        aImg[i].style[data[i].direction] = data[i].val + 'px';
                    }
                    setStyle(span, 'transform', 'scale(1)');
                }

                ul.onmouseout = function () {
                    for (let i = 0; i < data.length; i++) {
                        aImg[i].style[data[i].direction] = aImg[i]['old' + data[i].direction] + 'px';
                    }
                    setStyle(span, 'transform', 'scale(1.5)');
                }
            }
        }
    }

    function partnerContent() {
        let w = 118;
        let h = 300;
        let timer1 = null;
        let timer2 = null;
        let cvs = null;
        let aLi = oPartnerContent3.getElementsByTagName('li');

        create();
        bindList();

        function create() {
            let oUl = document.createElement('ul');
            for (let i = 0; i < 8; i++) {
                let oLi = document.createElement('li');
                oLi.style.backgroundPosition = `-${i*w}px 0`;
                oUl.appendChild(oLi);
            }
            oPartnerContent3.appendChild(oUl);
        }

        function addCvs() {
            if (!cvs) {
                cvs = document.createElement('canvas');
                cvs.className = 'cvs';
                cvs.width = w;
                cvs.height = h;
                oPartnerContent3.appendChild(cvs);
                bindCvs();
            }
        }

        function rmvCvs() {
            if (cvs) {
                clearInterval(timer1);
                clearInterval(timer2);
                oPartnerContent3.removeChild(cvs);
                cvs = null;
            }
        }

        function bindCvs() {
            let ctx = cvs.getContext('2d');
            let setArr = [];

            timer1 = setInterval(function () {
                let x = Math.random() * w;
                let y = h - 10;
                setArr.push({
                    x: x,
                    y: y,
                    startX: x,
                    startY: y,
                    r: Math.random() * 10 + 2,
                    c1: Math.floor(Math.random() * 256),
                    c2: Math.floor(Math.random() * 256),
                    c3: Math.floor(Math.random() * 256),
                    c4: 1,
                    step: Math.random() * 20 + 10,
                    speed: 0
                });
            }, 100);
            timer2 = setInterval(function () {
                ctx.clearRect(0, 0, w, h);
                for (let i = 0; i < setArr.length; i++) {
                    let item = setArr[i];
                    item.speed += 5;
                    item.x = item.startX - item.step * Math.sin(item.speed * Math.PI / 180);
                    item.y = item.startY - item.step * item.speed * Math.PI / 180;
                    if (item.y < 50) {
                        setArr.splice(i, 1);
                    }
                }

                for (let i = 0; i < setArr.length; i++) {
                    let item = setArr[i];
                    ctx.fillStyle = `rgba(${item.c1},${item.c2},${item.c3},${item.c4})`;
                    ctx.beginPath();
                    ctx.moveTo(item.x, item.y);
                    ctx.arc(item.x, item.y, item.r, 0, 2 * Math.PI, false);
                    ctx.closePath();
                    ctx.fill();
                }
            }, 1000 / 60);
        }

        function bindList() {
            for (let i = 0; i < aLi.length; i++) {
                aLi[i].onmouseover = function () {
                    addCvs();
                    cvs.style.left = this.offsetLeft + 'px';
                    Array.prototype.forEach.call(aLi, (item, index, arr) => {
                        item.style.opacity = '0.5';
                    });
                    this.style.opacity = 1;
                }
            }

            oPartnerContent3.onmouseleave = function () {
                rmvCvs();
                Array.prototype.forEach.call(aLi, (item, index, arr) => {
                    item.style.opacity = 1;
                });
            }

        }
    }




    let cjAnimate = [{
        inAn: function () {
            setStyle(oHomeContent1, 'transform', 'translateY(0)');
            setStyle(oHomeContent2, 'transform', 'translateY(0)');
            setStyle(oHomeContent1, 'opacity', '1');
            setStyle(oHomeContent2, 'opacity', '1');
        },
        outAn: function () {
            setStyle(oHomeContent1, 'transform', 'translateY(-200px)');
            setStyle(oHomeContent2, 'transform', 'translateY(200px)');
            setStyle(oHomeContent1, 'opacity', '0');
            setStyle(oHomeContent2, 'opacity', '0');
        }
    }, {
        inAn: function () {
            let oPlane1 = getByClass(oCourseContent, 'plane1')[0];
            let oPlane2 = getByClass(oCourseContent, 'plane2')[0];
            let oPlane3 = getByClass(oCourseContent, 'plane3')[0];
            setStyle(oPlane1, 'transform', 'translate(0,0)');
            setStyle(oPlane2, 'transform', 'translate(0,0)');
            setStyle(oPlane3, 'transform', 'translate(0,0)');
        },
        outAn: function () {
            let oPlane1 = getByClass(oCourseContent, 'plane1')[0];
            let oPlane2 = getByClass(oCourseContent, 'plane2')[0];
            let oPlane3 = getByClass(oCourseContent, 'plane3')[0];
            setStyle(oPlane1, 'transform', 'translate(-200px,-200px)');
            setStyle(oPlane2, 'transform', 'translate(-200px,200px)');
            setStyle(oPlane3, 'transform', 'translate(200px,-200px)');
        }
    }, {
        inAn: function () {
            let oPencel1 = getByClass(oWorksContent, 'pencel1')[0];
            let oPencel2 = getByClass(oWorksContent, 'pencel2')[0];
            let oPencel3 = getByClass(oWorksContent, 'pencel3')[0];
            setStyle(oPencel1, 'transform', 'translate(0,0)');
            setStyle(oPencel2, 'transform', 'translate(0,0)');
            setStyle(oPencel3, 'transform', 'translate(0,0)');
        },
        outAn: function () {
            let oPencel1 = getByClass(oWorksContent, 'pencel1')[0];
            let oPencel2 = getByClass(oWorksContent, 'pencel2')[0];
            let oPencel3 = getByClass(oWorksContent, 'pencel3')[0];
            setStyle(oPencel1, 'transform', 'translate(0,-200px)');
            setStyle(oPencel2, 'transform', 'translate(0,200px)');
            setStyle(oPencel3, 'transform', 'translate(0,200px)');
        }
    }, {
        inAn: function () {
            let oAboutImg1 = getByClass(oAboutContent3, 'aboutImg')[0];
            let oAboutImg2 = getByClass(oAboutContent3, 'aboutImg')[1];
            setStyle(oAboutImg1, 'transform', 'rotateZ(0deg)');
            setStyle(oAboutImg2, 'transform', 'rotateZ(0deg)');
        },
        outAn: function () {
            let oAboutImg1 = getByClass(oAboutContent3, 'aboutImg')[0];
            let oAboutImg2 = getByClass(oAboutContent3, 'aboutImg')[1];
            setStyle(oAboutImg1, 'transform', 'rotateZ(-90deg)');
            setStyle(oAboutImg2, 'transform', 'rotateZ(90deg)');
        }
    }, {
        inAn: function () {
            let oPartnerContent1 = getByClass(oPartnerContent, 'partnerContent1')[0];
            let oPartnerContent2 = getByClass(oPartnerContent, 'partnerContent2')[0];
            setStyle(oPartnerContent1, 'transform', 'translate(0,0)');
            setStyle(oPartnerContent1, 'opacity', 1);
            setStyle(oPartnerContent2, 'transform', 'translate(0,0)');
            setStyle(oPartnerContent2, 'opacity', 1);
        },
        outAn: function () {
            let oPartnerContent1 = getByClass(oPartnerContent, 'partnerContent1')[0];
            let oPartnerContent2 = getByClass(oPartnerContent, 'partnerContent2')[0];
            setStyle(oPartnerContent1, 'transform', 'translate(-150px,0)');
            setStyle(oPartnerContent1, 'opacity', 0);
            setStyle(oPartnerContent2, 'transform', 'translate(150px,0)');
            setStyle(oPartnerContent2, 'opacity', 0);
        }
    }];

    for (let i = 0; i < cjAnimate.length; i++) {
        cjAnimate[i].outAn();
    }

    function play() {
        let onoff = false; // 音乐开关默认关上
        oMusic.onclick = function () {
            if (onoff) {
                oMusic.style.backgroundImage = `url('img/musicoff.gif')`;
                oAudio.pause();
                onoff = !onoff;
            } else {
                oMusic.style.backgroundImage = `url('img/musicon.gif')`;
                oAudio.play();
                onoff = !onoff;
            }
        }
    }

    function $(id) {
        return document.getElementById(id);
    }

    function viewWidth() {
        return window.innerWidth || document.documentElement.clientWidth;
    }

    function viewHeight() {
        return window.innerHeight || document.documentElement.clientHeight;
    }

    function getByClass(oParent, sClass) {
        let aElem = oParent.getElementsByTagName('*');
        let arr = [];
        for (let i = 0; i < aElem.length; i++) {
            if (aElem[i].className == sClass) {
                arr.push(aElem[i]);
            }
        }
        return arr;
    }

    function setStyle(obj, attr, value) {
        obj.style['webkit' + attr.substring(0, 1).toUpperCase() + attr.toString(1)] = value;
        obj.style[attr] = value;
    }
}