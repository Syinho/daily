import '../css/main.css';
import change from './change';
change();

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js').then(() => {
            console.log('SW注册成功');
        }).catch(() => {
            console.log('SW注册失败');
        })
    }, false);
}