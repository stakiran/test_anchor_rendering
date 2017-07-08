// ==UserScript==
// @name        get_all_anchor
// @namespace   get_all_anchor
// @include     https://github.com/stakiran/test_anchor_rendering/blob/master/various_section.md
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js
// @version     1
// @grant       none
// ==/UserScript==

$(function(){
    var tag_a = $('body a');
    tag_a.each(function(i, dom){
        var elm = $(dom);
        if( !elm.hasClass('anchor') ){
            return true; // continue
        }
        var sectionname = elm.parent().text()
        var usercontent = elm.attr('id');
        var href = elm.attr('href');
        var ret = sectionname + " => " + href;
        console.log(ret);
    });
});

