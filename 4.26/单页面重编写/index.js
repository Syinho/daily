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
    let oHomeConetnt1 = getByClass(oHomeContent, 'homeContent1')[0];
    let oHomeContent2 = getByClass(oHomeContent, 'homeContent2')[0];


    let iContentHeight = 0;
    let prevIdx = 0;
    let nowIdx = 0;
    showLoading();
    bindNav();
    play();


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
            play();
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

    function bindNav() {
        let oDiv = aLiNav[0].getElementsByTagName('div')[0];
        oDiv.style.width = '100%';
        aLiMenu[0].className = 'active';
        oList.style.top = 0;
        oArrow.style.left = aLiNav[i].offsetLeft + aLiNav[i].offsetWidth / 2 - oArrow.offsetWidth / 2 + 'px';

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
    }


    function play() {
        let onoff = true;
        oMusic.onclick = function () {
            if (onoff) {
                oMusic.style.backgroundImage = `url('img/musicoff.gif')`;
                oAudio.pause();
                onoff = !onoff;
            } else {
                oMusic.style.backgroundImage = `url('img/musicon.gif)`;
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
            if (aElem.className == sClass) {
                arr.push(aElem[i]);
            }
        }
        return arr;
    }

    function setStyle(obj, attr, value) {
        obj.style['webvkit' + attr.substring(0, 1).toUppercase() + attr.toString(1)] = value;
        obj.style[attr] = value;
    }
}