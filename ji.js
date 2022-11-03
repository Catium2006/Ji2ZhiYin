
// ==UserScript==
// @name         鸡2只因
// @namespace    https://www.catium.top/
// @version      0.1
// @description  小黑子别黑我家哥哥
// @author       Catium2006
// @match        https://*/*
// @icon         https://img2.baidu.com/it/u=4261569551,3188087925&fm=253&fmt=auto&app=138&f=JPEG?w=130&h=130
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    
    function addScript() {
        let script = document.createElement('script');
        script.src = "https://fastly.jsdelivr.net/npm/cnchar/cnchar.min.js";
        document.body.appendChild(script);
    }
    function ji(str) {
        if (!str) {
            return '';
        }
        // console.log(str);
        let ret = '';
        for (let idx = 0; idx < str.length; idx++) {
            let c = str[idx];
            if (c.spell() == 'Ji') {
                console.log('发现小鸡子: ' + c);
                c = '只因'
            }
            ret += c;
        }
        return ret;
    }
    function replaceAll() {
        document.body.innerHTML = ji(document.body.innerHTML);
    }

    addScript();

    setTimeout(replaceAll, 500);

})();

