!function e(t,n,i){function r(a,c){if(!n[a]){if(!t[a]){var s="function"==typeof require&&require;if(!c&&s)return s(a,!0);if(o)return o(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var d=n[a]={exports:{}};t[a][0].call(d.exports,function(e){var n=t[a][1][e];return r(n?n:e)},d,d.exports,e,t,n,i)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<i.length;a++)r(i[a]);return r}({1:[function(e,t,n){"use strict";var i=$(".sidebar").first();$(document).ready(function(){$(".slick-container").slick({dots:!1,autoplay:!0,lazyLoad:"progressive"});var e=jQuery.ias({container:"#Products",item:".Product",pagination:".pagination",next:".pagination .active.item + a"});e.extension(new IASSpinnerExtension({src:"/img/infinity.gif",html:'<div style="position: fixed; left: 50%; margin-left: -50px; bottom: 0"><img src="{src}"/></div>'})),$(".dropdown").dropdown({on:"hover"}),$(".message .close").on("click",function(){$(this).closest(".message").transition("fade")}),$("#Header").visibility({once:!1,onBottomPassed:function(){$("#MobileMenu").show()},onBottomPassedReverse:function(){$("#MobileMenu").hide()}}),i.sidebar("attach events",".toggle.button"),$(".toggle.button").removeClass("disabled"),$(".ProductDetails__meta").stick_in_parent().on("sticky_kit:bottom",function(e){e.target.style.bottom="3px"});var t=document.querySelector(".PriceSlider__container");if(t){var n=new URI,r=10;n.hasQuery("max_price")&&(r=n.query(!0).max_price),noUiSlider.create(t,{start:[r],step:5,range:{min:[0],"95%":[180],max:[2e3]}});var o=document.querySelector(".PriceSlider__current");t.noUiSlider.on("update",function(e,t){o.innerHTML=e[t]+"€"}),t.noUiSlider.on("change",function(e){n.setQuery("max_price",parseInt(e)),window.location.href=n.href()})}$(".new_window").click(function(e){e.preventDefault(),$.popupWindow($(this).attr("href"))})})},{}]},{},[1]);