function $(id) {
    return document.getElementById(id);
}

function viewWidth() {
    return window.innerWidth || document.documentElement.clientWidth;
}

function viewHeight() {
    return window.innerHeight || document.documentElement.clientHeight;
}

export {
    $,
    viewWidth,
    viewHeight
};