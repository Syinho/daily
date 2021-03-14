import '../css/main.css';
import '../css/main.less';
import '../../../../font/font_pd3vbz2hvz/iconfont.css';

import change from './change';

if (module.hot) {
  module.hot.accept('./change.js', () => {
    change();
  });
}
