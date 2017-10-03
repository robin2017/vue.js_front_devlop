// entry.js
//require("!style-loader!css-loader!./style.css"); // 载入 style.css
require('./style.css'); //因为webpack.config.js中配置了，所以简化加载方式
document.write('It works.');
document.write(require('./module.js'));
