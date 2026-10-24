// ==UserScript==
// @name         Addic7ed_only_french
// @namespace    https://github.com/flexboy76/userscript
// @match        https://www.addic7ed.com/log.php*
// @grant        none
// @version      1.0.3
// @author       Diabolino
// @description  Affiche uniquement les sous-titres français sur Addic7ed
// @homepageURL  https://github.com/flexboy76/userscript
// @supportURL   https://github.com/flexboy76/userscript/issues
// @downloadURL  https://raw.githubusercontent.com/flexboy76/userscript/main/Addic7ed_only_french.user.js
// @updateURL    https://raw.githubusercontent.com/flexboy76/userscript/main/Addic7ed_only_french.user.js
// @icon        https://pbs.twimg.com/profile_images/3153896688/a6acb6bd0d60a56e4a0ad48f59d68038_400x400.jpeg
// @require     https://files.uklm.xyz/jquery.min.js
// ==/UserScript==


$(document).ready(function(){
    $(".tabel tr").each(function(){
        var $date = $(this).find("td.newsDate");
        if ($date.length && !$date.text().toLowerCase().includes("french")) {
            $(this).remove();
        }
    });
});


