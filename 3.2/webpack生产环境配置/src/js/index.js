import '../css/main1.css';
import '../less/main2.less';
import '../../../../font/font_pd3vbz2hvz/iconfont.css';
import change from './change';

if (module.hot) {
  module.hot.accept('./change.js', () => {
    change();
  });
}

change();
