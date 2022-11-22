!function(){function e(e){return e&&e.__esModule?e.default:e}var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var a={};function s(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t,a){t&&s(e.prototype,t);a&&s(e,a);return e};new(function(){function s(a){var i=a.rootSelector,n=a.activeControlClass,o=void 0===n?"active":n,c=a.activePaneClass,r=void 0===c?"active":c,l=a.activeTab,v=void 0===l?1:l;e(t)(this,s),this._refs=this._getRefs(i),this._activeControlClass=o,this._activePaneClass=r,this._activeTabIdx=v-1,this._bindEvents(),this._setActiveTab()}return e(a)(s,[{key:"_getRefs",value:function(e){var t={};return t.controls=document.querySelector("".concat(e," [data-controls]")),t.panes=document.querySelector("".concat(e," [data-panes]")),t}},{key:"_bindEvents",value:function(){this._refs.controls.addEventListener("click",this._onControlsClick.bind(this))}},{key:"_onControlsClick",value:function(e){if(e.preventDefault(),"A"===e.target.nodeName){this._removeActiveTab();var t=e.target;t.classList.add(this._activeControlClass);var a=this._getPaneId(t);this._setActivePane(a)}else console.log("Кликнули не в ссылку")}},{key:"_setActiveTab",value:function(){var e=this._refs.controls.querySelectorAll("a")[this._activeTabIdx];e.classList.add(this._activeControlClass);var t=this._getPaneId(e);this._setActivePane(t)}},{key:"_removeActiveTab",value:function(){var e=this._refs.controls.querySelector(".".concat(this._activeControlClass));if(e){e.classList.remove(this._activeControlClass);var t=this._getPaneId(e);this._removeActivePane(t)}}},{key:"_setActivePane",value:function(e){this._getPaneById(e).classList.add(this._activePaneClass)}},{key:"_removeActivePane",value:function(e){this._getPaneById(e).classList.remove(this._activePaneClass)}},{key:"_getPaneId",value:function(e){return e.getAttribute("href").slice(1)}},{key:"_getPaneById",value:function(e){return this._refs.panes.querySelector("#".concat(e))}}]),s}())({rootSelector:"#tabs-1",activeControlClass:"dots-item--active",activePaneClass:"swiper-slide--active",activeTab:1})}();
//# sourceMappingURL=index.adc5dcb4.js.map
