!function e(n,t,r){function i(a,c){if(!t[a]){if(!n[a]){var u="function"==typeof require&&require;if(!c&&u)return u(a,!0);if(o)return o(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var f=t[a]={exports:{}};n[a][0].call(f.exports,function(e){var t=n[a][1][e];return i(t?t:e)},f,f.exports,e,n,t,r)}return t[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,n,t){"use strict";$(document).ready(function(){$(".slick-container").slick({dots:!1,autoplay:!0,lazyLoad:"progressive"});var e=jQuery.ias({container:"#Products",item:".Product",pagination:".pagination",next:".pagination .active.item + a"});e.extension(new IASSpinnerExtension({src:"/img/infinity.gif",html:'<div style="position: fixed; left: 50%; margin-left: -50px; bottom: 0"><img src="{src}"/></div>'})),$(".dropdown").dropdown({on:"hover"}),$(".message .close").on("click",function(){$(this).closest(".message").transition("fade")}),$(".ProductDetails__meta").stick_in_parent().on("sticky_kit:bottom",function(e){e.target.style.bottom="3px"});var n=document.querySelector(".PriceSlider__container");if(n){var t=new URI,r=10;t.hasQuery("max_price")&&(r=t.query(!0).max_price),noUiSlider.create(n,{start:[r],step:5,range:{min:[0],"95%":[180],max:[2e3]}});var i=document.querySelector(".PriceSlider__current");n.noUiSlider.on("update",function(e,n){i.innerHTML=e[n]+"€"}),n.noUiSlider.on("change",function(e){t.setQuery("max_price",parseInt(e)),window.location.href=t.href()})}$(".new_window").click(function(e){e.preventDefault(),$.popupWindow($(this).attr("href"))})})},{}]},{},[1]);