import viewHeight from './viewHeight';
import viewWidth from './viewWidth';
import change from './change';
import '../css/main1.css';
import '../less/main2.less';
import '../../../../font/font_pd3vbz2hvz/iconfont.css';

change();

function fnresize() {
  // eslint-disable-next-line
    console.log(`viewHeight:${viewHeight()}`);
  // eslint-disable-next-line
    console.log(`viewWidth:${viewWidth()}`);
}
window.onresize = fnresize;
