/*!
 * ionic.bundle.js is a concatenation of:
 * ionic.js, angular.js, angular-animate.js,
 * angular-sanitize.js, angular-ui-router.js,
 * and ionic-angular.js
 */

/*!
 * Copyright 2015 Drifty Co.
 * http://drifty.com/
 *
 * Ionic, v1.2.4-nightly-1917
 * A powerful HTML5 mobile app framework.
 * http://ionicframework.com/
 *
 * By @maxlynch, @benjsperry, @adamdbradley <3
 *
 * Licensed under the MIT license. Please see LICENSE for more information.
 *
 */

!function(){function e(e,t,n){t!==!1?X.addEventListener(e,J[e],n):X.removeEventListener(e,J[e])}function t(e){var t=w(e.target),i=T(t);if(ionic.tap.requiresNativeClick(i)||$)return!1;var r=ionic.tap.pointerCoord(e);n("click",i,r.x,r.y),h(i)}function n(e,t,n,i){var r=document.createEvent("MouseEvents");r.initMouseEvent(e,!0,!0,window,1,0,0,n,i,!1,!1,!1,!1,0,null),r.isIonicTap=!0,t.dispatchEvent(r)}function i(e){return"submit"==e.target.type&&0===e.detail?null:ionic.scroll.isScrolling&&ionic.tap.containsOrIsTextInput(e.target)||!e.isIonicTap&&!ionic.tap.requiresNativeClick(e.target)?(e.stopPropagation(),ionic.tap.isLabelWithTextInput(e.target)||e.preventDefault(),!1):void 0}function r(t){return t.isIonicTap||p(t)?null:B?(t.stopPropagation(),ionic.Platform.isEdge()||ionic.tap.isTextInput(t.target)&&K===t.target||b(t.target.tagName)||ionic.tap.isVideo(t.target)||t.preventDefault(),!1):($=!1,q=ionic.tap.pointerCoord(t),e("mousemove"),void ionic.activator.start(t))}function a(n){return B?(n.stopPropagation(),n.preventDefault(),!1):p(n)||b(n.target.tagName)?!1:(_(n)||t(n),e("mousemove",!1),ionic.activator.end(),void($=!1))}function o(t){return _(t)?(e("mousemove",!1),ionic.activator.end(),$=!0,!1):void 0}function s(t){if(!p(t)&&($=!1,u(),q=ionic.tap.pointerCoord(t),e(j),ionic.activator.start(t),ionic.Platform.isIOS()&&ionic.tap.isLabelWithTextInput(t.target))){var n=T(w(t.target));n!==F&&t.preventDefault()}}function l(e){p(e)||(u(),_(e)||(t(e),b(e.target.tagName)&&e.preventDefault()),K=e.target,d())}function c(t){return _(t)?($=!0,e(j,!1),ionic.activator.end(),!1):void 0}function d(){e(j,!1),ionic.activator.end(),$=!1}function u(){B=!0,clearTimeout(W),W=setTimeout(function(){B=!1},600)}function p(e){return e.isTapHandled?!0:(e.isTapHandled=!0,ionic.tap.isElementTapDisabled(e.target)?!0:ionic.scroll.isScrolling&&ionic.tap.containsOrIsTextInput(e.target)?(e.preventDefault(),!0):void 0)}function h(e){U=null;var t=!1;"SELECT"==e.tagName?(n("mousedown",e,0,0),e.focus&&e.focus(),t=!0):v()===e?t=!0:/^(input|textarea|ion-label)$/i.test(e.tagName)||e.isContentEditable?(t=!0,e.focus&&e.focus(),e.value=e.value,B&&(U=e)):f(),t&&(v(e),ionic.trigger("ionic.focusin",{target:e},!0))}function f(){var e=v();e&&(/^(input|textarea|select)$/i.test(e.tagName)||e.isContentEditable)&&e.blur(),v(null)}function m(e){B&&ionic.tap.isTextInput(v())&&ionic.tap.isTextInput(U)&&U!==e.target&&(U.focus(),U=null),ionic.scroll.isScrolling=!1}function g(){v(null)}function v(e){return arguments.length&&(F=e),F||document.activeElement}function _(e){if(!e||1!==e.target.nodeType||!q||0===q.x&&0===q.y)return!1;var t=ionic.tap.pointerCoord(e),n=!(!e.target.classList||!e.target.classList.contains||"function"!=typeof e.target.classList.contains),i=n&&e.target.classList.contains("button")?Q:Z;return Math.abs(q.x-t.x)>i||Math.abs(q.y-t.y)>i}function w(e,t){for(var n=e,i=0;6>i&&n;i++){if("LABEL"===n.tagName)return n;n=n.parentElement}return t!==!1?e:void 0}function T(e){if(e&&"LABEL"===e.tagName){if(e.control)return e.control;if(e.querySelector){var t=e.querySelector("input,textarea,select");if(t)return t}}return e}function b(e){return/^(select|option)$/i.test(e)}function S(){ionic.keyboard.isInitialized||(V()?(window.addEventListener("native.keyboardshow",pe),window.addEventListener("native.keyboardhide",x)):document.body.addEventListener("focusout",x),document.body.addEventListener("ionic.focusin",ue),document.body.addEventListener("focusin",ue),window.navigator.msPointerEnabled?document.removeEventListener("MSPointerDown",S):document.removeEventListener("touchstart",S),ionic.keyboard.isInitialized=!0)}function y(e){clearTimeout(re),(!ionic.keyboard.isOpen||ionic.keyboard.isClosing)&&(ionic.keyboard.isOpening=!0,ionic.keyboard.isClosing=!1),ionic.keyboard.height=e.keyboardHeight,le?C(O,!0):C(I,!0)}function E(e){return clearTimeout(re),e.target&&!e.target.readOnly&&ionic.tap.isKeyboardElement(e.target)&&(ne=ionic.DomUtil.getParentWithClass(e.target,de))?(ee=e.target,ne.classList.contains("overflow-scroll")||(document.body.scrollTop=0,ne.scrollTop=0,ionic.requestAnimationFrame(function(){document.body.scrollTop=0,ne.scrollTop=0}),window.navigator.msPointerEnabled?document.addEventListener("MSPointerMove",L,!1):document.addEventListener("touchmove",L,!1)),(!ionic.keyboard.isOpen||ionic.keyboard.isClosing)&&(ionic.keyboard.isOpening=!0,ionic.keyboard.isClosing=!1),document.addEventListener("keydown",M,!1),void(ionic.keyboard.isOpen||V()?ionic.keyboard.isOpen&&I():C(I,!0))):(ee&&(te=ee),void(ee=null))}function x(){clearTimeout(re),(ionic.keyboard.isOpen||ionic.keyboard.isOpening)&&(ionic.keyboard.isClosing=!0,ionic.keyboard.isOpening=!1),re=setTimeout(function(){ionic.requestAnimationFrame(function(){le?C(function(){O(),P()},!1):C(P,!1)})},50)}function D(){ionic.keyboard.isLandscape=!ionic.keyboard.isLandscape,ionic.Platform.isIOS()&&O(),ionic.Platform.isAndroid()&&(ionic.keyboard.isOpen&&V()?le=!0:C(O,!1))}function M(e){ionic.scroll.isScrolling&&L(e)}function L(e){"TEXTAREA"!==e.target.tagName&&e.preventDefault()}function C(e,t){clearInterval(ie);var n,i=0,r=G(),a=r;return n=ionic.Platform.isAndroid()&&ionic.Platform.version()<4.4?30:ionic.Platform.isAndroid()?10:1,ie=setInterval(function(){a=G(),(!(++i<n)||(N(a)||z(a))&&ionic.keyboard.height)&&(V()||(ionic.keyboard.height=Math.abs(r-window.innerHeight)),ionic.keyboard.isOpen=t,clearInterval(ie),e())},50),n}function P(){clearTimeout(re),ionic.keyboard.isOpen=!1,ionic.keyboard.isClosing=!1,(ee||te)&&ionic.trigger("resetScrollView",{target:ee||te},!0),ionic.requestAnimationFrame(function(){document.body.classList.remove(ce)}),window.navigator.msPointerEnabled?document.removeEventListener("MSPointerMove",L):document.removeEventListener("touchmove",L),document.removeEventListener("keydown",M),ionic.Platform.isAndroid()&&(V()&&cordova.plugins.Keyboard.close(),ee&&ee.blur()),ee=null,te=null}function I(){ionic.keyboard.isOpen=!0,ionic.keyboard.isOpening=!1;var e={keyboardHeight:k(),viewportHeight:ae};if(ee){e.target=ee;var t=ee.getBoundingClientRect();e.elementTop=Math.round(t.top),e.elementBottom=Math.round(t.bottom),e.windowHeight=e.viewportHeight-e.keyboardHeight,e.isElementUnderKeyboard=e.elementBottom>e.windowHeight,ionic.trigger("scrollChildIntoView",e,!0)}return setTimeout(function(){document.body.classList.add(ce)},400),e}function k(){if(ionic.keyboard.height)return ionic.keyboard.height;if(ionic.Platform.isAndroid()){if(ionic.Platform.isFullScreen)return 275;var e=window.innerHeight;return ae>e?ae-e:0}return ionic.Platform.isIOS()?ionic.keyboard.isLandscape?206:ionic.Platform.isWebView()?260:216:275}function N(e){return!!(!ionic.keyboard.isLandscape&&oe&&Math.abs(oe-e)<2)}function z(e){return!!(ionic.keyboard.isLandscape&&se&&Math.abs(se-e)<2)}function O(){le=!1,ae=G(),ionic.keyboard.isLandscape&&!se?se=ae:ionic.keyboard.isLandscape||oe||(oe=ae),ee&&ionic.trigger("resetScrollView",{target:ee},!0),ionic.keyboard.isOpen&&ionic.tap.isTextInput(ee)&&I()}function A(){var e=G();e/window.innerWidth<1&&(ionic.keyboard.isLandscape=!0),ae=e,ionic.keyboard.isLandscape&&!se?se=ae:ionic.keyboard.isLandscape||oe||(oe=ae)}function G(){var e=window.innerHeight;return ionic.Platform.isAndroid()&&ionic.Platform.isFullScreen||!ionic.keyboard.isOpen&&!ionic.keyboard.isOpening||ionic.keyboard.isClosing?e:e+k()}function V(){return!!(window.cordova&&cordova.plugins&&cordova.plugins.Keyboard)}function R(){var e;for(e=0;e<document.head.children.length;e++)if("viewport"==document.head.children[e].name){he=document.head.children[e];break}if(he){var t,n=he.content.toLowerCase().replace(/\s+/g,"").split(",");for(e=0;e<n.length;e++)n[e]&&(t=n[e].split("="),fe[t[0]]=t.length>1?t[1]:"_");H()}}function H(){var e=fe.width,t=fe.height,n=ionic.Platform,i=n.version(),r="device-width",a="device-height",o=ionic.viewport.orientation();delete fe.height,fe.width=r,n.isIPad()?i>7?delete fe.width:n.isWebView()?90==o?fe.height="0":7==i&&(fe.height=a):7>i&&(fe.height="0"):n.isIOS()&&(n.isWebView()?i>7?delete fe.width:7>i?t&&(fe.height="0"):7==i&&(fe.height=a):7>i&&t&&(fe.height="0")),(e!==fe.width||t!==fe.height)&&Y()}function Y(){var e,t=[];for(e in fe)fe[e]&&t.push(e+("_"==fe[e]?"":"="+fe[e]));he.content=t.join(", ")}window.ionic=window.ionic||{},window.ionic.views={},window.ionic.version="1.2.4-nightly-1917",function(e){e.DelegateService=function(e){function t(){return!0}if(e.indexOf("$getByHandle")>-1)throw new Error("Method '$getByHandle' is implicitly added to each delegate service. Do not list it as a method.");return["$log",function(n){function i(e,t){this._instances=e,this.handle=t}function r(){this._instances=[]}function a(e){return function(){var t,i=this.handle,r=arguments,a=0;return this._instances.forEach(function(n){if((!i||i==n.$$delegateHandle)&&n.$$filterFn(n)){a++;var o=n[e].apply(n,r);1===a&&(t=o)}}),!a&&i?n.warn('Delegate for handle "'+i+'" could not find a corresponding element with delegate-handle="'+i+'"! '+e+"() was not called!\nPossible cause: If you are calling "+e+'() immediately, and your element with delegate-handle="'+i+'" is a child of your controller, then your element may not be compiled yet. Put a $timeout around your call to '+e+"() and try again."):t}}return e.forEach(function(e){i.prototype[e]=a(e)}),r.prototype=i.prototype,r.prototype._registerInstance=function(e,n,i){var r=this._instances;return e.$$delegateHandle=n,e.$$filterFn=i||t,r.push(e),function(){var t=r.indexOf(e);-1!==t&&r.splice(t,1)}},r.prototype.$getByHandle=function(e){return new i(this._instances,e)},new r}]}}(window.ionic),function(e,t,n){function i(){a=!0;for(var e=0;e<r.length;e++)n.requestAnimationFrame(r[e]);r=[],t.removeEventListener("DOMContentLoaded",i)}var r=[],a="complete"===t.readyState||"interactive"===t.readyState;a||t.addEventListener("DOMContentLoaded",i),e._rAF=function(){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||function(t){e.setTimeout(t,16)}}();var o=e.cancelAnimationFrame||e.webkitCancelAnimationFrame||e.mozCancelAnimationFrame||e.webkitCancelRequestAnimationFrame;n.DomUtil={requestAnimationFrame:function(t){return e._rAF(t)},cancelAnimationFrame:function(e){o(e)},animationFrameThrottle:function(e){var t,i,r;return function(){t=arguments,r=this,i||(i=!0,n.requestAnimationFrame(function(){e.apply(r,t),i=!1}))}},contains:function(e,t){for(var n=t;n;){if(n===e)return!0;n=n.parentNode}},getPositionInParent:function(e){return{left:e.offsetLeft,top:e.offsetTop}},getOffsetTop:function(e){var t=0;if(e.offsetParent){do t+=e.offsetTop,e=e.offsetParent;while(e);return t}},ready:function(e){a?n.requestAnimationFrame(e):r.push(e)},getTextBounds:function(n){if(t.createRange){var i=t.createRange();if(i.selectNodeContents(n),i.getBoundingClientRect){var r=i.getBoundingClientRect();if(r){var a=e.scrollX,o=e.scrollY;return{top:r.top+o,left:r.left+a,right:r.left+a+r.width,bottom:r.top+o+r.height,width:r.width,height:r.height}}}}return null},getChildIndex:function(e,t){if(t)for(var n,i=e.parentNode.children,r=0,a=0,o=i.length;o>r;r++)if(n=i[r],n.nodeName&&n.nodeName.toLowerCase()==t){if(n==e)return a;a++}return Array.prototype.slice.call(e.parentNode.children).indexOf(e)},swapNodes:function(e,t){t.parentNode.insertBefore(e,t)},elementIsDescendant:function(e,t,n){var i=e;do{if(i===t)return!0;i=i.parentNode}while(i&&i!==n);return!1},getParentWithClass:function(e,t,n){for(n=n||10;e.parentNode&&n--;){if(e.parentNode.classList&&e.parentNode.classList.contains(t))return e.parentNode;e=e.parentNode}return null},getParentOrSelfWithClass:function(e,t,n){for(n=n||10;e&&n--;){if(e.classList&&e.classList.contains(t))return e;e=e.parentNode}return null},rectContains:function(e,t,n,i,r,a){return n>e||e>r?!1:i>t||t>a?!1:!0},blurAll:function(){return t.activeElement&&t.activeElement!=t.body?(t.activeElement.blur(),t.activeElement):null},cachedAttr:function(e,t,n){if(e=e&&e.length&&e[0]||e,e&&e.setAttribute){var i="$attr-"+t;return arguments.length>2?e[i]!==n&&(e.setAttribute(t,n),e[i]=n):"undefined"==typeof e[i]&&(e[i]=e.getAttribute(t)),e[i]}},cachedStyles:function(e,t){if(e=e&&e.length&&e[0]||e,e&&e.style)for(var n in t)e["$style-"+n]!==t[n]&&(e.style[n]=e["$style-"+n]=t[n])}},n.requestAnimationFrame=n.DomUtil.requestAnimationFrame,n.cancelAnimationFrame=n.DomUtil.cancelAnimationFrame,n.animationFrameThrottle=n.DomUtil.animationFrameThrottle}(window,document,ionic),function(e){e.CustomEvent=function(){if("function"==typeof window.CustomEvent)return CustomEvent;var e=function(e,t){var n;t=t||{bubbles:!1,cancelable:!1,detail:void 0};try{n=document.createEvent("CustomEvent"),n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail)}catch(i){n=document.createEvent("Event");for(var r in t)n[r]=t[r];n.initEvent(e,t.bubbles,t.cancelable)}return n};return e.prototype=window.Event.prototype,e}(),e.EventController={VIRTUALIZED_EVENTS:["tap","swipe","swiperight","swipeleft","drag","hold","release"],trigger:function(t,n,i,r){var a=new e.CustomEvent(t,{detail:n,bubbles:!!i,cancelable:!!r});n&&n.target&&n.target.dispatchEvent&&n.target.dispatchEvent(a)||window.dispatchEvent(a)},on:function(t,n,i){for(var r=i||window,a=0,o=this.VIRTUALIZED_EVENTS.length;o>a;a++)if(t==this.VIRTUALIZED_EVENTS[a]){var s=new e.Gesture(i);return s.on(t,n),s}r.addEventListener(t,n)},off:function(e,t,n){n.removeEventListener(e,t)},onGesture:function(t,n,i,r){var a=new e.Gesture(i,r);return a.on(t,n),a},offGesture:function(e,t,n){e&&e.off(t,n)},handlePopState:function(){}},e.on=function(){e.EventController.on.apply(e.EventController,arguments)},e.off=function(){e.EventController.off.apply(e.EventController,arguments)},e.trigger=e.EventController.trigger,e.onGesture=function(){return e.EventController.onGesture.apply(e.EventController.onGesture,arguments)},e.offGesture=function(){return e.EventController.offGesture.apply(e.EventController.offGesture,arguments)}}(window.ionic),function(e){function t(){if(!e.Gestures.READY){e.Gestures.event.determineEventTypes();for(var t in e.Gestures.gestures)e.Gestures.gestures.hasOwnProperty(t)&&e.Gestures.detection.register(e.Gestures.gestures[t]);e.Gestures.event.onTouch(e.Gestures.DOCUMENT,e.Gestures.EVENT_MOVE,e.Gestures.detection.detect),e.Gestures.event.onTouch(e.Gestures.DOCUMENT,e.Gestures.EVENT_END,e.Gestures.detection.detect),e.Gestures.READY=!0}}e.Gesture=function(t,n){return new e.Gestures.Instance(t,n||{})},e.Gestures={},e.Gestures.defaults={stop_browser_behavior:"disable-user-behavior"},e.Gestures.HAS_POINTEREVENTS=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,e.Gestures.HAS_TOUCHEVENTS="ontouchstart"in window,e.Gestures.MOBILE_REGEX=/mobile|tablet|ip(ad|hone|od)|android|silk/i,e.Gestures.NO_MOUSEEVENTS=e.Gestures.HAS_TOUCHEVENTS&&window.navigator.userAgent.match(e.Gestures.MOBILE_REGEX),e.Gestures.EVENT_TYPES={},e.Gestures.DIRECTION_DOWN="down",e.Gestures.DIRECTION_LEFT="left",e.Gestures.DIRECTION_UP="up",e.Gestures.DIRECTION_RIGHT="right",e.Gestures.POINTER_MOUSE="mouse",e.Gestures.POINTER_TOUCH="touch",e.Gestures.POINTER_PEN="pen",e.Gestures.EVENT_START="start",e.Gestures.EVENT_MOVE="move",e.Gestures.EVENT_END="end",e.Gestures.DOCUMENT=window.document,e.Gestures.plugins={},e.Gestures.READY=!1,e.Gestures.Instance=function(n,i){var r=this;return null===n?this:(t(),this.element=n,this.enabled=!0,this.options=e.Gestures.utils.extend(e.Gestures.utils.extend({},e.Gestures.defaults),i||{}),this.options.stop_browser_behavior&&e.Gestures.utils.stopDefaultBrowserBehavior(this.element,this.options.stop_browser_behavior),e.Gestures.event.onTouch(n,e.Gestures.EVENT_START,function(t){r.enabled&&e.Gestures.detection.startDetect(r,t)}),this)},e.Gestures.Instance.prototype={on:function(e,t){for(var n=e.split(" "),i=0;i<n.length;i++)this.element.addEventListener(n[i],t,!1);return this},off:function(e,t){for(var n=e.split(" "),i=0;i<n.length;i++)this.element.removeEventListener(n[i],t,!1);return this},trigger:function(t,n){var i=e.Gestures.DOCUMENT.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=n;var r=this.element;return e.Gestures.utils.hasParent(n.target,r)&&(r=n.target),r.dispatchEvent(i),this},enable:function(e){return this.enabled=e,this}};var n=null,i=!1,r=!1;e.Gestures.event={bindDom:function(e,t,n){for(var i=t.split(" "),r=0;r<i.length;r++)e.addEventListener(i[r],n,!1)},onTouch:function(t,a,o){var s=this;this.bindDom(t,e.Gestures.EVENT_TYPES[a],function(l){var c=l.type.toLowerCase();if(!c.match(/mouse/)||!r){c.match(/touch/)||c.match(/pointerdown/)||c.match(/mouse/)&&1===l.which?i=!0:c.match(/mouse/)&&1!==l.which&&(i=!1),c.match(/touch|pointer/)&&(r=!0);var d=0;i&&(e.Gestures.HAS_POINTEREVENTS&&a!=e.Gestures.EVENT_END?d=e.Gestures.PointerEvent.updatePointer(a,l):c.match(/touch/)?d=l.touches.length:r||(d=c.match(/up/)?0:1),d>0&&a==e.Gestures.EVENT_END?a=e.Gestures.EVENT_MOVE:d||(a=e.Gestures.EVENT_END),(d||null===n)&&(n=l),o.call(e.Gestures.detection,s.collectEventData(t,a,s.getTouchList(n,a),l)),e.Gestures.HAS_POINTEREVENTS&&a==e.Gestures.EVENT_END&&(d=e.Gestures.PointerEvent.updatePointer(a,l))),d||(n=null,i=!1,r=!1,e.Gestures.PointerEvent.reset())}})},determineEventTypes:function(){var t;t=e.Gestures.HAS_POINTEREVENTS?e.Gestures.PointerEvent.getEvents():e.Gestures.NO_MOUSEEVENTS?["touchstart","touchmove","touchend touchcancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"],e.Gestures.EVENT_TYPES[e.Gestures.EVENT_START]=t[0],e.Gestures.EVENT_TYPES[e.Gestures.EVENT_MOVE]=t[1],e.Gestures.EVENT_TYPES[e.Gestures.EVENT_END]=t[2]},getTouchList:function(t){return e.Gestures.HAS_POINTEREVENTS?e.Gestures.PointerEvent.getTouchList():t.touches?t.touches:(t.identifier=1,[t])},collectEventData:function(t,n,i,r){var a=e.Gestures.POINTER_TOUCH;return(r.type.match(/mouse/)||e.Gestures.PointerEvent.matchType(e.Gestures.POINTER_MOUSE,r))&&(a=e.Gestures.POINTER_MOUSE),{center:e.Gestures.utils.getCenter(i),timeStamp:(new Date).getTime(),target:r.target,touches:i,eventType:n,pointerType:a,srcEvent:r,preventDefault:function(){this.srcEvent.preventManipulation&&this.srcEvent.preventManipulation(),this.srcEvent.preventDefault},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return e.Gestures.detection.stopDetect()}}}},e.Gestures.PointerEvent={pointers:{},getTouchList:function(){var e=this,t=[];return Object.keys(e.pointers).sort().forEach(function(n){t.push(e.pointers[n])}),t},updatePointer:function(t,n){return t==e.Gestures.EVENT_END?this.pointers={}:(n.identifier=n.pointerId,this.pointers[n.pointerId]=n),Object.keys(this.pointers).length},matchType:function(t,n){if(!n.pointerType)return!1;var i={};return i[e.Gestures.POINTER_MOUSE]=n.pointerType==n.MSPOINTER_TYPE_MOUSE||n.pointerType==e.Gestures.POINTER_MOUSE,i[e.Gestures.POINTER_TOUCH]=n.pointerType==n.MSPOINTER_TYPE_TOUCH||n.pointerType==e.Gestures.POINTER_TOUCH,i[e.Gestures.POINTER_PEN]=n.pointerType==n.MSPOINTER_TYPE_PEN||n.pointerType==e.Gestures.POINTER_PEN,i[t]},getEvents:function(){return["pointerdown MSPointerDown","pointermove MSPointerMove","pointerup pointercancel MSPointerUp MSPointerCancel"]},reset:function(){this.pointers={}}},e.Gestures.utils={extend:function(e,t,n){for(var i in t)void 0!==e[i]&&n||(e[i]=t[i]);return e},hasParent:function(e,t){for(;e;){if(e==t)return!0;e=e.parentNode}return!1},getCenter:function(e){for(var t=[],n=[],i=0,r=e.length;r>i;i++)t.push(e[i].pageX),n.push(e[i].pageY);return{pageX:(Math.min.apply(Math,t)+Math.max.apply(Math,t))/2,pageY:(Math.min.apply(Math,n)+Math.max.apply(Math,n))/2}},getVelocity:function(e,t,n){return{x:Math.abs(t/e)||0,y:Math.abs(n/e)||0}},getAngle:function(e,t){var n=t.pageY-e.pageY,i=t.pageX-e.pageX;return 180*Math.atan2(n,i)/Math.PI},getDirection:function(t,n){var i=Math.abs(t.pageX-n.pageX),r=Math.abs(t.pageY-n.pageY);return i>=r?t.pageX-n.pageX>0?e.Gestures.DIRECTION_LEFT:e.Gestures.DIRECTION_RIGHT:t.pageY-n.pageY>0?e.Gestures.DIRECTION_UP:e.Gestures.DIRECTION_DOWN},getDistance:function(e,t){var n=t.pageX-e.pageX,i=t.pageY-e.pageY;return Math.sqrt(n*n+i*i)},getScale:function(e,t){return e.length>=2&&t.length>=2?this.getDistance(t[0],t[1])/this.getDistance(e[0],e[1]):1},getRotation:function(e,t){return e.length>=2&&t.length>=2?this.getAngle(t[1],t[0])-this.getAngle(e[1],e[0]):0},isVertical:function(t){return t==e.Gestures.DIRECTION_UP||t==e.Gestures.DIRECTION_DOWN},stopDefaultBrowserBehavior:function(e,t){e&&e.classList&&(e.classList.add(t),e.onselectstart=function(){return!1})}},e.Gestures.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(t,n){this.current||(this.stopped=!1,this.current={inst:t,startEvent:e.Gestures.utils.extend({},n),lastEvent:!1,name:""},this.detect(n))},detect:function(t){if(!this.current||this.stopped)return null;t=this.extendEventData(t);for(var n=this.current.inst.options,i=0,r=this.gestures.length;r>i;i++){var a=this.gestures[i];if(!this.stopped&&n[a.name]!==!1&&a.handler.call(a,t,this.current.inst)===!1){this.stopDetect();break}}return this.current&&(this.current.lastEvent=t),t.eventType==e.Gestures.EVENT_END&&!t.touches.length-1&&this.stopDetect(),t},stopDetect:function(){this.previous=e.Gestures.utils.extend({},this.current),this.current=null,this.stopped=!0},extendEventData:function(t){var n=this.current.startEvent;if(n&&(t.touches.length!=n.touches.length||t.touches===n.touches)){n.touches=[];for(var i=0,r=t.touches.length;r>i;i++)n.touches.push(e.Gestures.utils.extend({},t.touches[i]))}var a=t.timeStamp-n.timeStamp,o=t.center.pageX-n.center.pageX,s=t.center.pageY-n.center.pageY,l=e.Gestures.utils.getVelocity(a,o,s);return e.Gestures.utils.extend(t,{deltaTime:a,deltaX:o,deltaY:s,velocityX:l.x,velocityY:l.y,distance:e.Gestures.utils.getDistance(n.center,t.center),angle:e.Gestures.utils.getAngle(n.center,t.center),direction:e.Gestures.utils.getDirection(n.center,t.center),scale:e.Gestures.utils.getScale(n.touches,t.touches),rotation:e.Gestures.utils.getRotation(n.touches,t.touches),startEvent:n}),t},register:function(t){var n=t.defaults||{};return void 0===n[t.name]&&(n[t.name]=!0),e.Gestures.utils.extend(e.Gestures.defaults,n,!0),t.index=t.index||1e3,this.gestures.push(t),this.gestures.sort(function(e,t){return e.index<t.index?-1:e.index>t.index?1:0}),this.gestures}},e.Gestures.gestures=e.Gestures.gestures||{},e.Gestures.gestures.Hold={name:"hold",index:10,defaults:{hold_timeout:500,hold_threshold:9},timer:null,handler:function(t,n){switch(t.eventType){case e.Gestures.EVENT_START:clearTimeout(this.timer),e.Gestures.detection.current.name=this.name,this.timer=setTimeout(function(){"hold"==e.Gestures.detection.current.name&&(e.tap.cancelClick(),n.trigger("hold",t))},n.options.hold_timeout);break;case e.Gestures.EVENT_MOVE:t.distance>n.options.hold_threshold&&clearTimeout(this.timer);break;case e.Gestures.EVENT_END:clearTimeout(this.timer)}}},e.Gestures.gestures.Tap={name:"tap",index:100,defaults:{tap_max_touchtime:250,tap_max_distance:10,tap_always:!0,doubletap_distance:20,doubletap_interval:300},handler:function(t,n){if(t.eventType==e.Gestures.EVENT_END&&"touchcancel"!=t.srcEvent.type){var i=e.Gestures.detection.previous,r=!1;if(t.deltaTime>n.options.tap_max_touchtime||t.distance>n.options.tap_max_distance)return;i&&"tap"==i.name&&t.timeStamp-i.lastEvent.timeStamp<n.options.doubletap_interval&&t.distance<n.options.doubletap_distance&&(n.trigger("doubletap",t),r=!0),(!r||n.options.tap_always)&&(e.Gestures.detection.current.name="tap",n.trigger("tap",t))}}},e.Gestures.gestures.Swipe={name:"swipe",index:40,defaults:{swipe_max_touches:1,swipe_velocity:.4},handler:function(t,n){if(t.eventType==e.Gestures.EVENT_END){if(n.options.swipe_max_touches>0&&t.touches.length>n.options.swipe_max_touches)return;(t.velocityX>n.options.swipe_velocity||t.velocityY>n.options.swipe_velocity)&&(n.trigger(this.name,t),n.trigger(this.name+t.direction,t))}}},e.Gestures.gestures.Drag={name:"drag",index:50,defaults:{drag_min_distance:10,correct_for_drag_min_distance:!0,drag_max_touches:1,drag_block_horizontal:!0,drag_block_vertical:!0,drag_lock_to_axis:!1,drag_lock_min_distance:25,prevent_default_directions:[]},triggered:!1,handler:function(t,n){if("touchstart"==t.srcEvent.type||"touchend"==t.srcEvent.type?this.preventedFirstMove=!1:this.preventedFirstMove||"touchmove"!=t.srcEvent.type||(n.options.prevent_default_directions.length>0&&-1!=n.options.prevent_default_directions.indexOf(t.direction)&&t.srcEvent.preventDefault(),this.preventedFirstMove=!0),e.Gestures.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),void(this.triggered=!1);if(!(n.options.drag_max_touches>0&&t.touches.length>n.options.drag_max_touches))switch(t.eventType){case e.Gestures.EVENT_START:this.triggered=!1;break;case e.Gestures.EVENT_MOVE:if(t.distance<n.options.drag_min_distance&&e.Gestures.detection.current.name!=this.name)return;if(e.Gestures.detection.current.name!=this.name&&(e.Gestures.detection.current.name=this.name,n.options.correct_for_drag_min_distance)){var i=Math.abs(n.options.drag_min_distance/t.distance);e.Gestures.detection.current.startEvent.center.pageX+=t.deltaX*i,e.Gestures.detection.current.startEvent.center.pageY+=t.deltaY*i,t=e.Gestures.detection.extendEventData(t)}(e.Gestures.detection.current.lastEvent.drag_locked_to_axis||n.options.drag_lock_to_axis&&n.options.drag_lock_min_distance<=t.distance)&&(t.drag_locked_to_axis=!0);var r=e.Gestures.detection.current.lastEvent.direction;t.drag_locked_to_axis&&r!==t.direction&&(e.Gestures.utils.isVertical(r)?t.direction=t.deltaY<0?e.Gestures.DIRECTION_UP:e.Gestures.DIRECTION_DOWN:t.direction=t.deltaX<0?e.Gestures.DIRECTION_LEFT:e.Gestures.DIRECTION_RIGHT),this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),n.trigger(this.name+t.direction,t),(n.options.drag_block_vertical&&e.Gestures.utils.isVertical(t.direction)||n.options.drag_block_horizontal&&!e.Gestures.utils.isVertical(t.direction))&&t.preventDefault();break;case e.Gestures.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},e.Gestures.gestures.Transform={name:"transform",index:45,defaults:{transform_min_scale:.01,transform_min_rotation:1,transform_always_block:!1},triggered:!1,handler:function(t,n){if(e.Gestures.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),void(this.triggered=!1);if(!(t.touches.length<2))switch(n.options.transform_always_block&&t.preventDefault(),t.eventType){case e.Gestures.EVENT_START:this.triggered=!1;break;case e.Gestures.EVENT_MOVE:var i=Math.abs(1-t.scale),r=Math.abs(t.rotation);if(i<n.options.transform_min_scale&&r<n.options.transform_min_rotation)return;e.Gestures.detection.current.name=this.name,this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),r>n.options.transform_min_rotation&&n.trigger("rotate",t),i>n.options.transform_min_scale&&(n.trigger("pinch",t),n.trigger("pinch"+(t.scale<1?"in":"out"),t));break;case e.Gestures.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},e.Gestures.gestures.Touch={name:"touch",index:-(1/0),defaults:{prevent_default:!1,prevent_mouseevents:!1},handler:function(t,n){return n.options.prevent_mouseevents&&t.pointerType==e.Gestures.POINTER_MOUSE?void t.stopDetect():(n.options.prevent_default&&t.preventDefault(),void(t.eventType==e.Gestures.EVENT_START&&n.trigger(this.name,t)))}},e.Gestures.gestures.Release={name:"release",index:1/0,handler:function(t,n){t.eventType==e.Gestures.EVENT_END&&n.trigger(this.name,t)}}}(window.ionic),function(e,t,n){function i(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)"),n=t.exec(location.search);return null===n?"":decodeURIComponent(n[1].replace(/\+/g," "))}function r(){setTimeout(function(){!f.isReady&&f.isWebView()},_)}function a(){f.isWebView()?t.addEventListener("deviceready",o,!1):o(),s&&e.removeEventListener("load",a,!1)}function o(){f.isReady=!0,f.detect();for(var e=0;e<v.length;e++)v[e]();v=[],n.trigger("platformready",{target:t}),h(function(){t.body.classList.add("platform-ready")})}var s,l="ios",c="android",d="windowsphone",u="edge",p="crosswalk",h=n.requestAnimationFrame,f=n.Platform={navigator:e.navigator,isReady:!1,isFullScreen:!1,platforms:null,grade:null,ua:navigator.userAgent,ready:function(e){f.isReady?e():v.push(e)},detect:function(){f._checkPlatforms(),h(function(){for(var e=0;e<f.platforms.length;e++)t.body.classList.add("platform-"+f.platforms[e])})},setGrade:function(e){var n=f.grade;f.grade=e,h(function(){n&&t.body.classList.remove("grade-"+n),t.body.classList.add("grade-"+e)})},device:function(){return e.device||{}},_checkPlatforms:function(){f.platforms=[];var t="a";f.isWebView()?(f.platforms.push("webview"),e.cordova||e.PhoneGap||e.phonegap?f.platforms.push("cordova"):e.forge&&f.platforms.push("trigger")):f.platforms.push("browser"),f.isIPad()&&f.platforms.push("ipad");var n=f.platform();if(n){f.platforms.push(n);var i=f.version();if(i){var r=i.toString();r.indexOf(".")>0?r=r.replace(".","_"):r+="_0",f.platforms.push(n+r.split("_")[0]),f.platforms.push(n+r),f.isAndroid()&&4.4>i?t=4>i?"c":"b":f.isWindowsPhone()&&(t="b")}}f.setGrade(t)},isWebView:function(){return!!(e.cordova||e.PhoneGap||e.phonegap||e.forge)},isIPad:function(){return/iPad/i.test(f.navigator.platform)?!0:/iPad/i.test(f.ua)},isIOS:function(){return f.is(l)},isAndroid:function(){return f.is(c)},isWindowsPhone:function(){return f.is(d)},isEdge:function(){return f.is(u)},isCrosswalk:function(){return f.is(p)},platform:function(){return null===m&&f.setPlatform(f.device().platform),m},setPlatform:function(e){m="undefined"!=typeof e&&null!==e&&e.length?e.toLowerCase():i("ionicplatform")?i("ionicplatform"):f.ua.indexOf("Edge")>-1?u:f.ua.indexOf("Windows Phone")>-1?d:f.ua.indexOf("Android")>0?c:/iPhone|iPad|iPod/.test(f.ua)?l:f.navigator.platform&&navigator.platform.toLowerCase().split(" ")[0]||""},version:function(){return null===g&&f.setVersion(f.device().version),g},setVersion:function(e){if("undefined"!=typeof e&&null!==e&&(e=e.split("."),e=parseFloat(e[0]+"."+(e.length>1?e[1]:0)),!isNaN(e)))return void(g=e);g=0;var t=f.platform(),n={android:/Android (\d+).(\d+)?/,ios:/OS (\d+)_(\d+)?/,windowsphone:/Windows Phone (\d+).(\d+)?/};n[t]&&(e=f.ua.match(n[t]),e&&e.length>2&&(g=parseFloat(e[1]+"."+e[2])))},is:function(e){if(e=e.toLowerCase(),f.platforms)for(var t=0;t<f.platforms.length;t++)if(f.platforms[t]===e)return!0;var n=f.platform();return n?n===e.toLowerCase():f.ua.toLowerCase().indexOf(e)>=0},exitApp:function(){f.ready(function(){navigator.app&&navigator.app.exitApp&&navigator.app.exitApp()})},showStatusBar:function(n){f._showStatusBar=n,f.ready(function(){h(function(){f._showStatusBar?(e.StatusBar&&e.StatusBar.show(),t.body.classList.remove("status-bar-hide")):(e.StatusBar&&e.StatusBar.hide(),t.body.classList.add("status-bar-hide"))})})},fullScreen:function(e,i){f.isFullScreen=e!==!1,n.DomUtil.ready(function(){h(function(){f.isFullScreen?t.body.classList.add("fullscreen"):t.body.classList.remove("fullscreen")}),f.showStatusBar(i===!0)})}},m=null,g=null,v=[],_=2e3;r(),"complete"===t.readyState?a():(s=!0,e.addEventListener("load",a,!1))}(window,document,ionic),function(e,t){"use strict";t.CSS={},t.CSS.TRANSITION=[],t.CSS.TRANSFORM=[],t.EVENTS={},function(){var n,i=["webkitTransform","transform","-webkit-transform","webkit-transform","-moz-transform","moz-transform","MozTransform","mozTransform","msTransform"];for(n=0;n<i.length;n++)if(void 0!==e.documentElement.style[i[n]]){t.CSS.TRANSFORM=i[n];break}for(i=["webkitTransition","mozTransition","msTransition","transition"],n=0;n<i.length;n++)if(void 0!==e.documentElement.style[i[n]]){t.CSS.TRANSITION=i[n];break}t.CSS.TRANSITION=t.CSS.TRANSITION||"transition";var r=t.CSS.TRANSITION.indexOf("webkit")>-1;t.CSS.TRANSITION_DURATION=(r?"-webkit-":"")+"transition-duration",t.CSS.TRANSITIONEND=(r?"webkitTransitionEnd ":"")+"transitionend"}(),function(){var e="touchstart",n="touchmove",i="touchend",r="touchcancel";window.navigator.pointerEnabled?(e="pointerdown",
n="pointermove",i="pointerup",r="pointercancel"):window.navigator.msPointerEnabled&&(e="MSPointerDown",n="MSPointerMove",i="MSPointerUp",r="MSPointerCancel"),t.EVENTS.touchstart=e,t.EVENTS.touchmove=n,t.EVENTS.touchend=i,t.EVENTS.touchcancel=r}(),"classList"in e.documentElement||!Object.defineProperty||"undefined"==typeof HTMLElement||Object.defineProperty(HTMLElement.prototype,"classList",{get:function(){function e(e){return function(){var n,i=t.className.split(/\s+/);for(n=0;n<arguments.length;n++)e(i,i.indexOf(arguments[n]),arguments[n]);t.className=i.join(" ")}}var t=this;return{add:e(function(e,t,n){~t||e.push(n)}),remove:e(function(e,t){~t&&e.splice(t,1)}),toggle:e(function(e,t,n){~t?e.splice(t,1):e.push(n)}),contains:function(e){return!!~t.className.split(/\s+/).indexOf(e)},item:function(e){return t.className.split(/\s+/)[e]||null}}}})}(document,ionic);var X,F,B,W,$,q,U,K,j="touchmove",Z=12,Q=50,J={click:i,mousedown:r,mouseup:a,mousemove:o,touchstart:s,touchend:l,touchcancel:d,touchmove:c,pointerdown:s,pointerup:l,pointercancel:d,pointermove:c,MSPointerDown:s,MSPointerUp:l,MSPointerCancel:d,MSPointerMove:c,focusin:m,focusout:g};ionic.tap={register:function(t){return X=t,e("click",!0,!0),e("mouseup"),e("mousedown"),window.navigator.pointerEnabled?(e("pointerdown"),e("pointerup"),e("pointercancel"),j="pointermove"):window.navigator.msPointerEnabled?(e("MSPointerDown"),e("MSPointerUp"),e("MSPointerCancel"),j="MSPointerMove"):(e("touchstart"),e("touchend"),e("touchcancel")),e("focusin"),e("focusout"),function(){for(var t in J)e(t,!1);X=null,F=null,B=!1,$=!1,q=null}},ignoreScrollStart:function(e){return e.defaultPrevented||/^(file|range)$/i.test(e.target.type)||"true"==(e.target.dataset?e.target.dataset.preventScroll:e.target.getAttribute("data-prevent-scroll"))||!!/^(object|embed)$/i.test(e.target.tagName)||ionic.tap.isElementTapDisabled(e.target)},isTextInput:function(e){return!!e&&("TEXTAREA"==e.tagName||"true"===e.contentEditable||"INPUT"==e.tagName&&!/^(radio|checkbox|range|file|submit|reset|color|image|button)$/i.test(e.type))},isDateInput:function(e){return!!e&&"INPUT"==e.tagName&&/^(date|time|datetime-local|month|week)$/i.test(e.type)},isVideo:function(e){return!!e&&"VIDEO"==e.tagName},isKeyboardElement:function(e){return!ionic.Platform.isIOS()||ionic.Platform.isIPad()?ionic.tap.isTextInput(e)&&!ionic.tap.isDateInput(e):ionic.tap.isTextInput(e)||!!e&&"SELECT"==e.tagName},isLabelWithTextInput:function(e){var t=w(e,!1);return!!t&&ionic.tap.isTextInput(T(t))},containsOrIsTextInput:function(e){return ionic.tap.isTextInput(e)||ionic.tap.isLabelWithTextInput(e)},cloneFocusedInput:function(e){ionic.tap.hasCheckedClone||(ionic.tap.hasCheckedClone=!0,ionic.requestAnimationFrame(function(){var t=e.querySelector(":focus");if(ionic.tap.isTextInput(t)&&!ionic.tap.isDateInput(t)){var n=t.cloneNode(!0);n.value=t.value,n.classList.add("cloned-text-input"),n.readOnly=!0,t.isContentEditable&&(n.contentEditable=t.contentEditable,n.innerHTML=t.innerHTML),t.parentElement.insertBefore(n,t),t.classList.add("previous-input-focus"),n.scrollTop=t.scrollTop}}))},hasCheckedClone:!1,removeClonedInputs:function(e){ionic.tap.hasCheckedClone=!1,ionic.requestAnimationFrame(function(){var t,n=e.querySelectorAll(".cloned-text-input"),i=e.querySelectorAll(".previous-input-focus");for(t=0;t<n.length;t++)n[t].parentElement.removeChild(n[t]);for(t=0;t<i.length;t++)i[t].classList.remove("previous-input-focus"),i[t].style.top="",ionic.keyboard.isOpen&&!ionic.keyboard.isClosing&&i[t].focus()})},requiresNativeClick:function(e){return ionic.Platform.isWindowsPhone()&&("A"==e.tagName||"BUTTON"==e.tagName||e.hasAttribute("ng-click")||"INPUT"==e.tagName&&("button"==e.type||"submit"==e.type))?!0:!e||e.disabled||/^(file|range)$/i.test(e.type)||/^(object|video)$/i.test(e.tagName)||ionic.tap.isLabelContainingFileInput(e)?!0:ionic.tap.isElementTapDisabled(e)},isLabelContainingFileInput:function(e){var t=w(e);if("LABEL"!==t.tagName)return!1;var n=t.querySelector("input[type=file]");return n&&n.disabled===!1?!0:!1},isElementTapDisabled:function(e){if(e&&1===e.nodeType)for(var t=e;t;){if("true"==(t.dataset?t.dataset.tapDisabled:t.getAttribute&&t.getAttribute("data-tap-disabled")))return!0;t=t.parentElement}return!1},setTolerance:function(e,t){Z=e,Q=t},cancelClick:function(){$=!0},pointerCoord:function(e){var t={x:0,y:0};if(e){var n=e.touches&&e.touches.length?e.touches:[e],i=e.changedTouches&&e.changedTouches[0]||n[0];i&&(t.x=i.clientX||i.pageX||0,t.y=i.clientY||i.pageY||0)}return t}},ionic.DomUtil.ready(function(){var e="undefined"!=typeof angular?angular:null;(!e||e&&!e.scenario)&&ionic.tap.register(document)}),function(e,t){"use strict";function n(){a={},t.requestAnimationFrame(r)}function i(){for(var e in a)a[e]&&(a[e].classList.add(l),o[e]=a[e]);a={}}function r(){if(t.transition&&t.transition.isActive)return void setTimeout(r,400);for(var e in o)o[e]&&(o[e].classList.remove(l),delete o[e])}var a={},o={},s=0,l="activated";t.activator={start:function(e){var n=t.tap.pointerCoord(e).x;n>0&&30>n||t.requestAnimationFrame(function(){if(!(t.scroll&&t.scroll.isScrolling||t.tap.requiresNativeClick(e.target))){for(var n,r=e.target,o=0;6>o&&(r&&1===r.nodeType);o++){if(n&&r.classList&&r.classList.contains("item")){n=r;break}if("A"==r.tagName||"BUTTON"==r.tagName||r.hasAttribute("ng-click")){n=r;break}if(r.classList.contains("button")){n=r;break}if("ION-CONTENT"==r.tagName||r.classList&&r.classList.contains("pane")||"BODY"==r.tagName)break;r=r.parentElement}n&&(a[s]=n,t.requestAnimationFrame(i),s=s>29?0:s+1)}})},end:function(){setTimeout(n,200)}}}(document,ionic),function(e){var t=0;e.Utils={arrayMove:function(e,t,n){if(n>=e.length)for(var i=n-e.length;i--+1;)e.push(void 0);return e.splice(n,0,e.splice(t,1)[0]),e},proxy:function(e,t){var n=Array.prototype.slice.call(arguments,2);return function(){return e.apply(t,n.concat(Array.prototype.slice.call(arguments)))}},debounce:function(e,t,n){var i,r,a,o,s;return function(){a=this,r=arguments,o=new Date;var l=function(){var c=new Date-o;t>c?i=setTimeout(l,t-c):(i=null,n||(s=e.apply(a,r)))},c=n&&!i;return i||(i=setTimeout(l,t)),c&&(s=e.apply(a,r)),s}},throttle:function(e,t,n){var i,r,a,o=null,s=0;n||(n={});var l=function(){s=n.leading===!1?0:Date.now(),o=null,a=e.apply(i,r)};return function(){var c=Date.now();s||n.leading!==!1||(s=c);var d=t-(c-s);return i=this,r=arguments,0>=d?(clearTimeout(o),o=null,s=c,a=e.apply(i,r)):o||n.trailing===!1||(o=setTimeout(l,d)),a}},inherit:function(t,n){var i,r=this;i=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return r.apply(this,arguments)},e.extend(i,r,n);var a=function(){this.constructor=i};return a.prototype=r.prototype,i.prototype=new a,t&&e.extend(i.prototype,t),i.__super__=r.prototype,i},extend:function(e){for(var t=Array.prototype.slice.call(arguments,1),n=0;n<t.length;n++){var i=t[n];if(i)for(var r in i)e[r]=i[r]}return e},nextUid:function(){return"ion"+t++},disconnectScope:function(e){if(e&&e.$root!==e){var t=e.$parent;e.$$disconnected=!0,e.$broadcast("$ionic.disconnectScope",e),t.$$childHead===e&&(t.$$childHead=e.$$nextSibling),t.$$childTail===e&&(t.$$childTail=e.$$prevSibling),e.$$prevSibling&&(e.$$prevSibling.$$nextSibling=e.$$nextSibling),e.$$nextSibling&&(e.$$nextSibling.$$prevSibling=e.$$prevSibling),e.$$nextSibling=e.$$prevSibling=null}},reconnectScope:function(e){if(e&&e.$root!==e&&e.$$disconnected){var t=e.$parent;e.$$disconnected=!1,e.$broadcast("$ionic.reconnectScope",e),e.$$prevSibling=t.$$childTail,t.$$childHead?(t.$$childTail.$$nextSibling=e,t.$$childTail=e):t.$$childHead=t.$$childTail=e}},isScopeDisconnected:function(e){for(var t=e;t;){if(t.$$disconnected)return!0;t=t.$parent}return!1}},e.inherit=e.Utils.inherit,e.extend=e.Utils.extend,e.throttle=e.Utils.throttle,e.proxy=e.Utils.proxy,e.debounce=e.Utils.debounce}(window.ionic);var ee,te,ne,ie,re,ae=0,oe=0,se=0,le=!1,ce="keyboard-open",de="scroll-content",ue=ionic.debounce(E,200,!0),pe=ionic.debounce(y,100,!0);ionic.keyboard={isOpen:!1,isClosing:!1,isOpening:!1,height:0,isLandscape:!1,isInitialized:!1,hide:function(){V()&&cordova.plugins.Keyboard.close(),ee&&ee.blur()},show:function(){V()&&cordova.plugins.Keyboard.show()},disable:function(){V()?(window.removeEventListener("native.keyboardshow",pe),window.removeEventListener("native.keyboardhide",x)):document.body.removeEventListener("focusout",x),document.body.removeEventListener("ionic.focusin",ue),document.body.removeEventListener("focusin",ue),window.removeEventListener("orientationchange",D),window.navigator.msPointerEnabled?document.removeEventListener("MSPointerDown",S):document.removeEventListener("touchstart",S),ionic.keyboard.isInitialized=!1},enable:function(){S()}},ae=G(),ionic.Platform.ready(function(){A(),window.addEventListener("orientationchange",D),setTimeout(A,999),window.navigator.msPointerEnabled?document.addEventListener("MSPointerDown",S,!1):document.addEventListener("touchstart",S,!1)});var he,fe={};ionic.viewport={orientation:function(){return window.innerWidth>window.innerHeight?90:0}},ionic.Platform.ready(function(){R(),window.addEventListener("orientationchange",function(){setTimeout(H,1e3)},!1)}),function(e){"use strict";e.views.View=function(){this.initialize.apply(this,arguments)},e.views.View.inherit=e.inherit,e.extend(e.views.View.prototype,{initialize:function(){}})}(window.ionic);var me={effect:{}};!function(e){var t=Date.now||function(){return+new Date},n=60,i=1e3,r={},a=1;me.effect.Animate={requestAnimationFrame:function(){var t=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame,n=!!t;if(t&&!/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(t.toString())&&(n=!1),n)return function(e,n){t(e,n)};var i=60,r={},a=0,o=1,s=null,l=+new Date;return function(e){var t=o++;return r[t]=e,a++,null===s&&(s=setInterval(function(){var e=+new Date,t=r;r={},a=0;for(var n in t)t.hasOwnProperty(n)&&(t[n](e),l=e);e-l>2500&&(clearInterval(s),s=null)},1e3/i)),t}}(),stop:function(e){var t=null!=r[e];return t&&(r[e]=null),t},isRunning:function(e){return null!=r[e]},start:function(e,o,s,l,c,d){var u=t(),p=u,h=0,f=0,m=a++;if(d||(d=document.body),m%20===0){var g={};for(var v in r)g[v]=!0;r=g}var _=function(a){var g=a!==!0,v=t();if(!r[m]||o&&!o(m))return r[m]=null,void(s&&s(n-f/((v-u)/i),m,!1));if(g)for(var w=Math.round((v-p)/(i/n))-1,T=0;T<Math.min(w,4);T++)_(!0),f++;l&&(h=(v-u)/l,h>1&&(h=1));var b=c?c(h):h;e(b,v,g)!==!1&&1!==h||!g?g&&(p=v,me.effect.Animate.requestAnimationFrame(_,d)):(r[m]=null,s&&s(n-f/((v-u)/i),m,1===h||null==l))};return r[m]=!0,me.effect.Animate.requestAnimationFrame(_,d),m}}}(window),function(e){var t=function(){},n=function(e){return Math.pow(e-1,3)+1},i=function(e){return(e/=.5)<1?.5*Math.pow(e,3):.5*(Math.pow(e-2,3)+2)};e.views.Scroll=e.views.View.inherit({initialize:function(n){var i=this;i.__container=n.el,i.__content=n.el.firstElementChild,setTimeout(function(){i.__container&&i.__content&&(i.__container.scrollTop=0,i.__content.scrollTop=0)}),i.options={scrollingX:!1,scrollbarX:!0,scrollingY:!0,scrollbarY:!0,startX:0,startY:0,wheelDampen:6,minScrollbarSizeX:5,minScrollbarSizeY:5,scrollbarsFade:!0,scrollbarFadeDelay:300,scrollbarResizeFadeDelay:1e3,animating:!0,animationDuration:250,decelVelocityThreshold:4,decelVelocityThresholdPaging:4,bouncing:!0,locking:!0,paging:!1,snapping:!1,zooming:!1,minZoom:.5,maxZoom:3,speedMultiplier:1,deceleration:.97,preventDefault:!1,scrollingComplete:t,penetrationDeceleration:.03,penetrationAcceleration:.08,scrollEventInterval:10,freeze:!1,getContentWidth:function(){return Math.max(i.__content.scrollWidth,i.__content.offsetWidth)},getContentHeight:function(){return Math.max(i.__content.scrollHeight,i.__content.offsetHeight+2*i.__content.offsetTop)}};for(var r in n)i.options[r]=n[r];i.hintResize=e.debounce(function(){i.resize()},1e3,!0),i.onScroll=function(){e.scroll.isScrolling?(clearTimeout(i.scrollTimer),i.scrollTimer=setTimeout(i.setScrollStop,80)):setTimeout(i.setScrollStart,50)},i.freeze=function(e){return arguments.length&&(i.options.freeze=e),i.options.freeze},i.freezeShut=i.freeze,i.setScrollStart=function(){e.scroll.isScrolling=Math.abs(e.scroll.lastTop-i.__scrollTop)>1,clearTimeout(i.scrollTimer),i.scrollTimer=setTimeout(i.setScrollStop,80)},i.setScrollStop=function(){e.scroll.isScrolling=!1,e.scroll.lastTop=i.__scrollTop},i.triggerScrollEvent=e.throttle(function(){i.onScroll(),e.trigger("scroll",{scrollTop:i.__scrollTop,scrollLeft:i.__scrollLeft,target:i.__container})},i.options.scrollEventInterval),i.triggerScrollEndEvent=function(){e.trigger("scrollend",{scrollTop:i.__scrollTop,scrollLeft:i.__scrollLeft,target:i.__container})},i.__scrollLeft=i.options.startX,i.__scrollTop=i.options.startY,i.__callback=i.getRenderFn(),i.__initEventHandlers(),i.__createScrollbars()},run:function(){this.resize(),this.__fadeScrollbars("out",this.options.scrollbarResizeFadeDelay)},__isSingleTouch:!1,__isTracking:!1,__didDecelerationComplete:!1,__isGesturing:!1,__isDragging:!1,__isDecelerating:!1,__isAnimating:!1,__clientLeft:0,__clientTop:0,__clientWidth:0,__clientHeight:0,__contentWidth:0,__contentHeight:0,__snapWidth:100,__snapHeight:100,__refreshHeight:null,__refreshActive:!1,__refreshActivate:null,__refreshDeactivate:null,__refreshStart:null,__zoomLevel:1,__scrollLeft:0,__scrollTop:0,__maxScrollLeft:0,__maxScrollTop:0,__scheduledLeft:0,__scheduledTop:0,__scheduledZoom:0,__lastTouchLeft:null,__lastTouchTop:null,__lastTouchMove:null,__positions:null,__minDecelerationScrollLeft:null,__minDecelerationScrollTop:null,__maxDecelerationScrollLeft:null,__maxDecelerationScrollTop:null,__decelerationVelocityX:null,__decelerationVelocityY:null,__transformProperty:null,__perspectiveProperty:null,__indicatorX:null,__indicatorY:null,__scrollbarFadeTimeout:null,__didWaitForSize:null,__sizerTimeout:null,__initEventHandlers:function(){function t(e){return e.touches&&e.touches.length?e.touches:[{pageX:e.pageX,pageY:e.pageY}]}var n,i=this,r=i.__container;if(i.scrollChildIntoView=function(t){var a=r.getBoundingClientRect().bottom;n=r.offsetHeight;var o=i.isShrunkForKeyboard,s=r.parentNode.classList.contains("modal"),l=s&&window.innerWidth>=680;if(!o){if(e.Platform.isIOS()||e.Platform.isFullScreen||l){var c=t.detail.viewportHeight-a,d=Math.max(0,t.detail.keyboardHeight-c);e.requestAnimationFrame(function(){n-=d,r.style.height=n+"px",r.style.overflow="visible",i.resize()})}i.isShrunkForKeyboard=!0}t.detail.isElementUnderKeyboard&&e.requestAnimationFrame(function(){r.scrollTop=0,i.isShrunkForKeyboard&&!o&&(a=r.getBoundingClientRect().bottom);var s=.5*n,l=(t.detail.elementBottom+t.detail.elementTop)/2,c=l-a,d=c+s;d>0&&(e.Platform.isIOS()&&e.tap.cloneFocusedInput(r,i),i.scrollBy(0,d,!0),i.onScroll())}),t.stopPropagation()},i.resetScrollView=function(){i.isShrunkForKeyboard&&(i.isShrunkForKeyboard=!1,r.style.height="",r.style.overflow=""),i.resize()},r.addEventListener("scrollChildIntoView",i.scrollChildIntoView),document.addEventListener("resetScrollView",i.resetScrollView),i.touchStart=function(n){if(i.startCoordinates=e.tap.pointerCoord(n),!e.tap.ignoreScrollStart(n)){if(i.__isDown=!0,e.tap.containsOrIsTextInput(n.target)||"SELECT"===n.target.tagName)return void(i.__hasStarted=!1);i.__isSelectable=!0,i.__enableScrollY=!0,i.__hasStarted=!0,i.doTouchStart(t(n),n.timeStamp),n.preventDefault()}},i.touchMove=function(n){if(!(i.options.freeze||!i.__isDown||!i.__isDown&&n.defaultPrevented||"TEXTAREA"===n.target.tagName&&n.target.parentElement.querySelector(":focus"))){if(!i.__hasStarted&&(e.tap.containsOrIsTextInput(n.target)||"SELECT"===n.target.tagName))return i.__hasStarted=!0,i.doTouchStart(t(n),n.timeStamp),void n.preventDefault();if(i.startCoordinates){var a=e.tap.pointerCoord(n);i.__isSelectable&&e.tap.isTextInput(n.target)&&Math.abs(i.startCoordinates.x-a.x)>20&&(i.__enableScrollY=!1,i.__isSelectable=!0),i.__enableScrollY&&Math.abs(i.startCoordinates.y-a.y)>10&&(i.__isSelectable=!1,e.tap.cloneFocusedInput(r,i))}i.doTouchMove(t(n),n.timeStamp,n.scale),i.__isDown=!0}},i.touchMoveBubble=function(e){i.__isDown&&i.options.preventDefault&&e.preventDefault()},i.touchEnd=function(t){i.__isDown&&(i.doTouchEnd(t,t.timeStamp),i.__isDown=!1,i.__hasStarted=!1,i.__isSelectable=!0,i.__enableScrollY=!0,i.__isDragging||i.__isDecelerating||i.__isAnimating||e.tap.removeClonedInputs(r,i))},i.mouseWheel=e.animationFrameThrottle(function(t){var n=e.DomUtil.getParentOrSelfWithClass(t.target,"ionic-scroll");i.options.freeze||n!==i.__container||(i.hintResize(),i.scrollBy((t.wheelDeltaX||t.deltaX||0)/i.options.wheelDampen,(-t.wheelDeltaY||t.deltaY||0)/i.options.wheelDampen),i.__fadeScrollbars("in"),clearTimeout(i.__wheelHideBarTimeout),i.__wheelHideBarTimeout=setTimeout(function(){i.__fadeScrollbars("out")},100))}),"ontouchstart"in window)r.addEventListener("touchstart",i.touchStart,!1),i.options.preventDefault&&r.addEventListener("touchmove",i.touchMoveBubble,!1),document.addEventListener("touchmove",i.touchMove,!1),document.addEventListener("touchend",i.touchEnd,!1),document.addEventListener("touchcancel",i.touchEnd,!1),document.addEventListener("wheel",i.mouseWheel,!1);else if(window.navigator.pointerEnabled)r.addEventListener("pointerdown",i.touchStart,!1),i.options.preventDefault&&r.addEventListener("pointermove",i.touchMoveBubble,!1),document.addEventListener("pointermove",i.touchMove,!1),document.addEventListener("pointerup",i.touchEnd,!1),document.addEventListener("pointercancel",i.touchEnd,!1),document.addEventListener("wheel",i.mouseWheel,!1);else if(window.navigator.msPointerEnabled)r.addEventListener("MSPointerDown",i.touchStart,!1),i.options.preventDefault&&r.addEventListener("MSPointerMove",i.touchMoveBubble,!1),document.addEventListener("MSPointerMove",i.touchMove,!1),document.addEventListener("MSPointerUp",i.touchEnd,!1),document.addEventListener("MSPointerCancel",i.touchEnd,!1),document.addEventListener("wheel",i.mouseWheel,!1);else{var a=!1;i.mouseDown=function(n){e.tap.ignoreScrollStart(n)||"SELECT"===n.target.tagName||(i.doTouchStart(t(n),n.timeStamp),e.tap.isTextInput(n.target)||n.preventDefault(),a=!0)},i.mouseMove=function(e){i.options.freeze||!a||!a&&e.defaultPrevented||(i.doTouchMove(t(e),e.timeStamp),a=!0)},i.mouseMoveBubble=function(e){a&&i.options.preventDefault&&e.preventDefault()},i.mouseUp=function(e){a&&(i.doTouchEnd(e,e.timeStamp),a=!1)},r.addEventListener("mousedown",i.mouseDown,!1),i.options.preventDefault&&r.addEventListener("mousemove",i.mouseMoveBubble,!1),document.addEventListener("mousemove",i.mouseMove,!1),document.addEventListener("mouseup",i.mouseUp,!1),document.addEventListener("mousewheel",i.mouseWheel,!1),document.addEventListener("wheel",i.mouseWheel,!1)}},__cleanup:function(){var n=this,i=n.__container;i.removeEventListener("touchstart",n.touchStart),i.removeEventListener("touchmove",n.touchMoveBubble),document.removeEventListener("touchmove",n.touchMove),document.removeEventListener("touchend",n.touchEnd),document.removeEventListener("touchcancel",n.touchEnd),i.removeEventListener("pointerdown",n.touchStart),i.removeEventListener("pointermove",n.touchMoveBubble),document.removeEventListener("pointermove",n.touchMove),document.removeEventListener("pointerup",n.touchEnd),document.removeEventListener("pointercancel",n.touchEnd),i.removeEventListener("MSPointerDown",n.touchStart),i.removeEventListener("MSPointerMove",n.touchMoveBubble),document.removeEventListener("MSPointerMove",n.touchMove),document.removeEventListener("MSPointerUp",n.touchEnd),document.removeEventListener("MSPointerCancel",n.touchEnd),i.removeEventListener("mousedown",n.mouseDown),i.removeEventListener("mousemove",n.mouseMoveBubble),document.removeEventListener("mousemove",n.mouseMove),document.removeEventListener("mouseup",n.mouseUp),document.removeEventListener("mousewheel",n.mouseWheel),document.removeEventListener("wheel",n.mouseWheel),i.removeEventListener("scrollChildIntoView",n.scrollChildIntoView),document.removeEventListener("resetScrollView",n.resetScrollView),e.tap.removeClonedInputs(i,n),delete n.__container,delete n.__content,delete n.__indicatorX,delete n.__indicatorY,delete n.options.el,n.__callback=n.scrollChildIntoView=n.resetScrollView=t,n.mouseMove=n.mouseDown=n.mouseUp=n.mouseWheel=n.touchStart=n.touchMove=n.touchEnd=n.touchCancel=t,n.resize=n.scrollTo=n.zoomTo=n.__scrollingComplete=t,i=null},__createScrollbar:function(e){var t=document.createElement("div"),n=document.createElement("div");return n.className="scroll-bar-indicator scroll-bar-fade-out","h"==e?t.className="scroll-bar scroll-bar-h":t.className="scroll-bar scroll-bar-v",t.appendChild(n),t},__createScrollbars:function(){var e,t,n=this;n.options.scrollingX&&(e={el:n.__createScrollbar("h"),sizeRatio:1},e.indicator=e.el.children[0],n.options.scrollbarX&&n.__container.appendChild(e.el),n.__indicatorX=e),n.options.scrollingY&&(t={el:n.__createScrollbar("v"),sizeRatio:1},t.indicator=t.el.children[0],n.options.scrollbarY&&n.__container.appendChild(t.el),n.__indicatorY=t)},__resizeScrollbars:function(){var t=this;if(t.__indicatorX){var n=Math.max(Math.round(t.__clientWidth*t.__clientWidth/t.__contentWidth),20);n>t.__contentWidth&&(n=0),n!==t.__indicatorX.size&&e.requestAnimationFrame(function(){t.__indicatorX.indicator.style.width=n+"px"}),t.__indicatorX.size=n,t.__indicatorX.minScale=t.options.minScrollbarSizeX/n,t.__indicatorX.maxPos=t.__clientWidth-n,t.__indicatorX.sizeRatio=t.__maxScrollLeft?t.__indicatorX.maxPos/t.__maxScrollLeft:1}if(t.__indicatorY){var i=Math.max(Math.round(t.__clientHeight*t.__clientHeight/t.__contentHeight),20);i>t.__contentHeight&&(i=0),i!==t.__indicatorY.size&&e.requestAnimationFrame(function(){t.__indicatorY&&(t.__indicatorY.indicator.style.height=i+"px")}),t.__indicatorY.size=i,t.__indicatorY.minScale=t.options.minScrollbarSizeY/i,t.__indicatorY.maxPos=t.__clientHeight-i,t.__indicatorY.sizeRatio=t.__maxScrollTop?t.__indicatorY.maxPos/t.__maxScrollTop:1}},__repositionScrollbars:function(){var e,t,n,i,r,a,o=this,s=0,l=0;if(o.__indicatorX){o.__indicatorY&&(s=10),r=Math.round(o.__indicatorX.sizeRatio*o.__scrollLeft)||0,n=o.__scrollLeft-(o.__maxScrollLeft-s),o.__scrollLeft<0?(t=Math.max(o.__indicatorX.minScale,(o.__indicatorX.size-Math.abs(o.__scrollLeft))/o.__indicatorX.size),r=0,o.__indicatorX.indicator.style[o.__transformOriginProperty]="left center"):n>0?(t=Math.max(o.__indicatorX.minScale,(o.__indicatorX.size-n)/o.__indicatorX.size),r=o.__indicatorX.maxPos-s,o.__indicatorX.indicator.style[o.__transformOriginProperty]="right center"):(r=Math.min(o.__maxScrollLeft,Math.max(0,r)),t=1);var c="translate3d("+r+"px, 0, 0) scaleX("+t+")";o.__indicatorX.transformProp!==c&&(o.__indicatorX.indicator.style[o.__transformProperty]=c,o.__indicatorX.transformProp=c)}if(o.__indicatorY){a=Math.round(o.__indicatorY.sizeRatio*o.__scrollTop)||0,o.__indicatorX&&(l=10),i=o.__scrollTop-(o.__maxScrollTop-l),o.__scrollTop<0?(e=Math.max(o.__indicatorY.minScale,(o.__indicatorY.size-Math.abs(o.__scrollTop))/o.__indicatorY.size),a=0,"center top"!==o.__indicatorY.originProp&&(o.__indicatorY.indicator.style[o.__transformOriginProperty]="center top",o.__indicatorY.originProp="center top")):i>0?(e=Math.max(o.__indicatorY.minScale,(o.__indicatorY.size-i)/o.__indicatorY.size),a=o.__indicatorY.maxPos-l,"center bottom"!==o.__indicatorY.originProp&&(o.__indicatorY.indicator.style[o.__transformOriginProperty]="center bottom",o.__indicatorY.originProp="center bottom")):(a=Math.min(o.__maxScrollTop,Math.max(0,a)),e=1);var d="translate3d(0,"+a+"px, 0) scaleY("+e+")";o.__indicatorY.transformProp!==d&&(o.__indicatorY.indicator.style[o.__transformProperty]=d,o.__indicatorY.transformProp=d)}},__fadeScrollbars:function(e,t){var n=this;if(n.options.scrollbarsFade){var i="scroll-bar-fade-out";n.options.scrollbarsFade===!0&&(clearTimeout(n.__scrollbarFadeTimeout),"in"==e?(n.__indicatorX&&n.__indicatorX.indicator.classList.remove(i),n.__indicatorY&&n.__indicatorY.indicator.classList.remove(i)):n.__scrollbarFadeTimeout=setTimeout(function(){n.__indicatorX&&n.__indicatorX.indicator.classList.add(i),n.__indicatorY&&n.__indicatorY.indicator.classList.add(i)},t||n.options.scrollbarFadeDelay))}},__scrollingComplete:function(){this.options.scrollingComplete(),e.tap.removeClonedInputs(this.__container,this),this.__fadeScrollbars("out")},resize:function(e){var t=this;t.__container&&t.options&&t.setDimensions(t.__container.clientWidth,t.__container.clientHeight,t.options.getContentWidth(),t.options.getContentHeight(),e)},getRenderFn:function(){var e,t=this,n=t.__content,i=document.documentElement.style;"MozAppearance"in i?e="gecko":"WebkitAppearance"in i?e="webkit":"string"==typeof navigator.cpuClass&&(e="trident");var r,a={trident:"ms",gecko:"Moz",webkit:"Webkit",presto:"O"}[e],o=document.createElement("div"),s=a+"Perspective",l=a+"Transform",c=a+"TransformOrigin";return t.__perspectiveProperty=l,t.__transformProperty=l,t.__transformOriginProperty=c,o.style[s]!==r?function(e,i,r,a){var o="translate3d("+-e+"px,"+-i+"px,0) scale("+r+")";o!==t.contentTransform&&(n.style[l]=o,t.contentTransform=o),t.__repositionScrollbars(),a||t.triggerScrollEvent()}:o.style[l]!==r?function(e,i,r,a){n.style[l]="translate("+-e+"px,"+-i+"px) scale("+r+")",t.__repositionScrollbars(),a||t.triggerScrollEvent()}:function(e,i,r,a){n.style.marginLeft=e?-e/r+"px":"",n.style.marginTop=i?-i/r+"px":"",n.style.zoom=r||"",t.__repositionScrollbars(),a||t.triggerScrollEvent()}},setDimensions:function(e,t,n,i,r){var a=this;(e||t||n||i)&&(e===+e&&(a.__clientWidth=e),t===+t&&(a.__clientHeight=t),n===+n&&(a.__contentWidth=n),i===+i&&(a.__contentHeight=i),a.__computeScrollMax(),a.__resizeScrollbars(),r||a.scrollTo(a.__scrollLeft,a.__scrollTop,!0,null,!0))},setPosition:function(e,t){this.__clientLeft=e||0,this.__clientTop=t||0},setSnapSize:function(e,t){this.__snapWidth=e,this.__snapHeight=t},activatePullToRefresh:function(t,n){var i=this;i.__refreshHeight=t,i.__refreshActivate=function(){e.requestAnimationFrame(n.activate)},i.__refreshDeactivate=function(){e.requestAnimationFrame(n.deactivate)},i.__refreshStart=function(){e.requestAnimationFrame(n.start)},i.__refreshShow=function(){e.requestAnimationFrame(n.show)},i.__refreshHide=function(){e.requestAnimationFrame(n.hide)},i.__refreshTail=function(){e.requestAnimationFrame(n.tail)},i.__refreshTailTime=100,i.__minSpinTime=600},triggerPullToRefresh:function(){this.__publish(this.__scrollLeft,-this.__refreshHeight,this.__zoomLevel,!0);var e=new Date;this.refreshStartTime=e.getTime(),this.__refreshStart&&this.__refreshStart()},finishPullToRefresh:function(){var e=this,t=new Date,n=0;e.refreshStartTime+e.__minSpinTime>t.getTime()&&(n=e.refreshStartTime+e.__minSpinTime-t.getTime()),setTimeout(function(){e.__refreshTail&&e.__refreshTail(),setTimeout(function(){e.__refreshActive=!1,e.__refreshDeactivate&&e.__refreshDeactivate(),e.__refreshHide&&e.__refreshHide(),e.scrollTo(e.__scrollLeft,e.__scrollTop,!0)},e.__refreshTailTime)},n)},getValues:function(){return{left:this.__scrollLeft,top:this.__scrollTop,zoom:this.__zoomLevel}},getScrollMax:function(){return{left:this.__maxScrollLeft,top:this.__maxScrollTop}},zoomTo:function(e,t,n,i){var r=this;if(!r.options.zooming)throw new Error("Zooming is not enabled!");r.__isDecelerating&&(me.effect.Animate.stop(r.__isDecelerating),r.__isDecelerating=!1);var a=r.__zoomLevel;null==n&&(n=r.__clientWidth/2),null==i&&(i=r.__clientHeight/2),e=Math.max(Math.min(e,r.options.maxZoom),r.options.minZoom),r.__computeScrollMax(e);var o=(n+r.__scrollLeft)*e/a-n,s=(i+r.__scrollTop)*e/a-i;o>r.__maxScrollLeft?o=r.__maxScrollLeft:0>o&&(o=0),s>r.__maxScrollTop?s=r.__maxScrollTop:0>s&&(s=0),r.__publish(o,s,e,t)},zoomBy:function(e,t,n,i){this.zoomTo(this.__zoomLevel*e,t,n,i)},scrollTo:function(e,t,n,i,r){var a=this;if(a.__isDecelerating&&(me.effect.Animate.stop(a.__isDecelerating),a.__isDecelerating=!1),null!=i&&i!==a.__zoomLevel){if(!a.options.zooming)throw new Error("Zooming is not enabled!");e*=i,t*=i,a.__computeScrollMax(i)}else i=a.__zoomLevel;a.options.scrollingX?a.options.paging?e=Math.round(e/a.__clientWidth)*a.__clientWidth:a.options.snapping&&(e=Math.round(e/a.__snapWidth)*a.__snapWidth):e=a.__scrollLeft,a.options.scrollingY?a.options.paging?t=Math.round(t/a.__clientHeight)*a.__clientHeight:a.options.snapping&&(t=Math.round(t/a.__snapHeight)*a.__snapHeight):t=a.__scrollTop,e=Math.max(Math.min(a.__maxScrollLeft,e),0),t=Math.max(Math.min(a.__maxScrollTop,t),0),e===a.__scrollLeft&&t===a.__scrollTop&&(n=!1),a.__publish(e,t,i,n,r)},scrollBy:function(e,t,n){var i=this,r=i.__isAnimating?i.__scheduledLeft:i.__scrollLeft,a=i.__isAnimating?i.__scheduledTop:i.__scrollTop;i.scrollTo(r+(e||0),a+(t||0),n)},doMouseZoom:function(e,t,n,i){var r=e>0?.97:1.03;return this.zoomTo(this.__zoomLevel*r,!1,n-this.__clientLeft,i-this.__clientTop)},doTouchStart:function(e,t){var n=this;n.__decStopped=!(!n.__isDecelerating&&!n.__isAnimating),n.hintResize(),t instanceof Date&&(t=t.valueOf()),"number"!=typeof t&&(t=Date.now()),n.__interruptedAnimation=!0,n.__isDecelerating&&(me.effect.Animate.stop(n.__isDecelerating),n.__isDecelerating=!1,n.__interruptedAnimation=!0),n.__isAnimating&&(me.effect.Animate.stop(n.__isAnimating),n.__isAnimating=!1,n.__interruptedAnimation=!0);var i,r,a=1===e.length;a?(i=e[0].pageX,r=e[0].pageY):(i=Math.abs(e[0].pageX+e[1].pageX)/2,r=Math.abs(e[0].pageY+e[1].pageY)/2),n.__initialTouchLeft=i,n.__initialTouchTop=r,n.__initialTouches=e,n.__zoomLevelStart=n.__zoomLevel,n.__lastTouchLeft=i,n.__lastTouchTop=r,n.__lastTouchMove=t,n.__lastScale=1,n.__enableScrollX=!a&&n.options.scrollingX,n.__enableScrollY=!a&&n.options.scrollingY,n.__isTracking=!0,n.__didDecelerationComplete=!1,n.__isDragging=!a,n.__isSingleTouch=a,n.__positions=[]},doTouchMove:function(e,t,n){t instanceof Date&&(t=t.valueOf()),"number"!=typeof t&&(t=Date.now());var i=this;if(i.__isTracking){var r,a;2===e.length?(r=Math.abs(e[0].pageX+e[1].pageX)/2,a=Math.abs(e[0].pageY+e[1].pageY)/2,!n&&i.options.zooming&&(n=i.__getScale(i.__initialTouches,e))):(r=e[0].pageX,a=e[0].pageY);var o=i.__positions;if(i.__isDragging){i.__decStopped=!1;var s=r-i.__lastTouchLeft,l=a-i.__lastTouchTop,c=i.__scrollLeft,d=i.__scrollTop,u=i.__zoomLevel;if(null!=n&&i.options.zooming){var p=u;if(u=u/i.__lastScale*n,u=Math.max(Math.min(u,i.options.maxZoom),i.options.minZoom),p!==u){var h=r-i.__clientLeft,f=a-i.__clientTop;c=(h+c)*u/p-h,d=(f+d)*u/p-f,i.__computeScrollMax(u)}}if(i.__enableScrollX){c-=s*i.options.speedMultiplier;var m=i.__maxScrollLeft;(c>m||0>c)&&(i.options.bouncing?c+=s/2*i.options.speedMultiplier:c=c>m?m:0)}if(i.__enableScrollY){d-=l*i.options.speedMultiplier;var g=i.__maxScrollTop;d>g||0>d?i.options.bouncing||i.__refreshHeight&&0>d?(d+=l/2*i.options.speedMultiplier,i.__enableScrollX||null==i.__refreshHeight||(0>d?(i.__refreshHidden=!1,i.__refreshShow()):(i.__refreshHide(),i.__refreshHidden=!0),!i.__refreshActive&&d<=-i.__refreshHeight?(i.__refreshActive=!0,i.__refreshActivate&&i.__refreshActivate()):i.__refreshActive&&d>-i.__refreshHeight&&(i.__refreshActive=!1,i.__refreshDeactivate&&i.__refreshDeactivate()))):d=d>g?g:0:i.__refreshHeight&&!i.__refreshHidden&&(i.__refreshHide(),i.__refreshHidden=!0)}o.length>60&&o.splice(0,30),o.push(c,d,t),i.__publish(c,d,u)}else{var v=i.options.locking?3:0,_=5,w=Math.abs(r-i.__initialTouchLeft),T=Math.abs(a-i.__initialTouchTop);i.__enableScrollX=i.options.scrollingX&&w>=v,i.__enableScrollY=i.options.scrollingY&&T>=v,o.push(i.__scrollLeft,i.__scrollTop,t),i.__isDragging=(i.__enableScrollX||i.__enableScrollY)&&(w>=_||T>=_),i.__isDragging&&(i.__interruptedAnimation=!1,i.__fadeScrollbars("in"))}i.__lastTouchLeft=r,i.__lastTouchTop=a,i.__lastTouchMove=t,i.__lastScale=n}},doTouchEnd:function(t,n){n instanceof Date&&(n=n.valueOf()),"number"!=typeof n&&(n=Date.now());var i=this;if(i.__isTracking){if(i.__isTracking=!1,i.__isDragging)if(i.__isDragging=!1,i.__isSingleTouch&&i.options.animating&&n-i.__lastTouchMove<=100){for(var r=i.__positions,a=r.length-1,o=a,s=a;s>0&&r[s]>i.__lastTouchMove-100;s-=3)o=s;
if(o!==a){var l=r[a]-r[o],c=i.__scrollLeft-r[o-2],d=i.__scrollTop-r[o-1];i.__decelerationVelocityX=c/l*(1e3/60),i.__decelerationVelocityY=d/l*(1e3/60);var u=i.options.paging||i.options.snapping?i.options.decelVelocityThresholdPaging:i.options.decelVelocityThreshold;(Math.abs(i.__decelerationVelocityX)>u||Math.abs(i.__decelerationVelocityY)>u)&&(i.__refreshActive||i.__startDeceleration(n))}else i.__scrollingComplete()}else n-i.__lastTouchMove>100&&i.__scrollingComplete();else i.__decStopped&&(t.isTapHandled=!0,i.__decStopped=!1);if(!i.__isDecelerating)if(i.__refreshActive&&i.__refreshStart){i.__publish(i.__scrollLeft,-i.__refreshHeight,i.__zoomLevel,!0);var p=new Date;i.refreshStartTime=p.getTime(),i.__refreshStart&&i.__refreshStart(),e.Platform.isAndroid()||i.__startDeceleration()}else(i.__interruptedAnimation||i.__isDragging)&&i.__scrollingComplete(),i.scrollTo(i.__scrollLeft,i.__scrollTop,!0,i.__zoomLevel),i.__refreshActive&&(i.__refreshActive=!1,i.__refreshDeactivate&&i.__refreshDeactivate());i.__positions.length=0}},__publish:function(e,t,r,a,o){var s=this,l=s.__isAnimating;if(l&&(me.effect.Animate.stop(l),s.__isAnimating=!1),a&&s.options.animating){s.__scheduledLeft=e,s.__scheduledTop=t,s.__scheduledZoom=r;var c=s.__scrollLeft,d=s.__scrollTop,u=s.__zoomLevel,p=e-c,h=t-d,f=r-u,m=function(e,t,n){n&&(s.__scrollLeft=c+p*e,s.__scrollTop=d+h*e,s.__zoomLevel=u+f*e,s.__callback&&s.__callback(s.__scrollLeft,s.__scrollTop,s.__zoomLevel,o))},g=function(e){return s.__isAnimating===e},v=function(e,t,n){t===s.__isAnimating&&(s.__isAnimating=!1),(s.__didDecelerationComplete||n)&&s.__scrollingComplete(),s.options.zooming&&s.__computeScrollMax()};s.__isAnimating=me.effect.Animate.start(m,g,v,s.options.animationDuration,l?n:i)}else s.__scheduledLeft=s.__scrollLeft=e,s.__scheduledTop=s.__scrollTop=t,s.__scheduledZoom=s.__zoomLevel=r,s.__callback&&s.__callback(e,t,r,o),s.options.zooming&&s.__computeScrollMax()},__computeScrollMax:function(e){var t=this;null==e&&(e=t.__zoomLevel),t.__maxScrollLeft=Math.max(t.__contentWidth*e-t.__clientWidth,0),t.__maxScrollTop=Math.max(t.__contentHeight*e-t.__clientHeight,0),t.__didWaitForSize||t.__maxScrollLeft||t.__maxScrollTop||(t.__didWaitForSize=!0,t.__waitForSize())},__waitForSize:function(){var e=this;clearTimeout(e.__sizerTimeout);var t=function(){e.resize(!0)};t(),e.__sizerTimeout=setTimeout(t,500)},__startDeceleration:function(){var e=this;if(e.options.paging){var t=Math.max(Math.min(e.__scrollLeft,e.__maxScrollLeft),0),n=Math.max(Math.min(e.__scrollTop,e.__maxScrollTop),0),i=e.__clientWidth,r=e.__clientHeight;e.__minDecelerationScrollLeft=Math.floor(t/i)*i,e.__minDecelerationScrollTop=Math.floor(n/r)*r,e.__maxDecelerationScrollLeft=Math.ceil(t/i)*i,e.__maxDecelerationScrollTop=Math.ceil(n/r)*r}else e.__minDecelerationScrollLeft=0,e.__minDecelerationScrollTop=0,e.__maxDecelerationScrollLeft=e.__maxScrollLeft,e.__maxDecelerationScrollTop=e.__maxScrollTop,e.__refreshActive&&(e.__minDecelerationScrollTop=-1*e.__refreshHeight);var a=function(t,n,i){e.__stepThroughDeceleration(i)};e.__minVelocityToKeepDecelerating=e.options.snapping?4:.1;var o=function(){var t=Math.abs(e.__decelerationVelocityX)>=e.__minVelocityToKeepDecelerating||Math.abs(e.__decelerationVelocityY)>=e.__minVelocityToKeepDecelerating;return t||(e.__didDecelerationComplete=!0,e.options.bouncing&&!e.__refreshActive&&e.scrollTo(Math.min(Math.max(e.__scrollLeft,0),e.__maxScrollLeft),Math.min(Math.max(e.__scrollTop,0),e.__maxScrollTop),e.__refreshActive)),t},s=function(){e.__isDecelerating=!1,e.__didDecelerationComplete&&e.__scrollingComplete(),e.options.paging&&e.scrollTo(e.__scrollLeft,e.__scrollTop,e.options.snapping)};e.__isDecelerating=me.effect.Animate.start(a,o,s)},__stepThroughDeceleration:function(e){var t=this,n=t.__scrollLeft+t.__decelerationVelocityX,i=t.__scrollTop+t.__decelerationVelocityY;if(!t.options.bouncing){var r=Math.max(Math.min(t.__maxDecelerationScrollLeft,n),t.__minDecelerationScrollLeft);r!==n&&(n=r,t.__decelerationVelocityX=0);var a=Math.max(Math.min(t.__maxDecelerationScrollTop,i),t.__minDecelerationScrollTop);a!==i&&(i=a,t.__decelerationVelocityY=0)}if(e?t.__publish(n,i,t.__zoomLevel):(t.__scrollLeft=n,t.__scrollTop=i),!t.options.paging){var o=t.options.deceleration;t.__decelerationVelocityX*=o,t.__decelerationVelocityY*=o}if(t.options.bouncing){var s=0,l=0,c=t.options.penetrationDeceleration,d=t.options.penetrationAcceleration;if(n<t.__minDecelerationScrollLeft?s=t.__minDecelerationScrollLeft-n:n>t.__maxDecelerationScrollLeft&&(s=t.__maxDecelerationScrollLeft-n),i<t.__minDecelerationScrollTop?l=t.__minDecelerationScrollTop-i:i>t.__maxDecelerationScrollTop&&(l=t.__maxDecelerationScrollTop-i),0!==s){var u=s*t.__decelerationVelocityX<=t.__minDecelerationScrollLeft;u&&(t.__decelerationVelocityX+=s*c);var p=Math.abs(t.__decelerationVelocityX)<=t.__minVelocityToKeepDecelerating;(!u||p)&&(t.__decelerationVelocityX=s*d)}if(0!==l){var h=l*t.__decelerationVelocityY<=t.__minDecelerationScrollTop;h&&(t.__decelerationVelocityY+=l*c);var f=Math.abs(t.__decelerationVelocityY)<=t.__minVelocityToKeepDecelerating;(!h||f)&&(t.__decelerationVelocityY=l*d)}}},__getDistance:function(e,t){var n=t.pageX-e.pageX,i=t.pageY-e.pageY;return Math.sqrt(n*n+i*i)},__getScale:function(e,t){return e.length>=2&&t.length>=2?this.__getDistance(t[0],t[1])/this.__getDistance(e[0],e[1]):1}}),e.scroll={isScrolling:!1,lastTop:0}}(ionic),function(e){var t=function(){},n=function(e){};e.views.ScrollNative=e.views.View.inherit({initialize:function(t){var n=this;n.__container=n.el=t.el,n.__content=t.el.firstElementChild,n.__frozen=!1,n.isNative=!0,n.__scrollTop=n.el.scrollTop,n.__scrollLeft=n.el.scrollLeft,n.__clientHeight=n.__content.clientHeight,n.__clientWidth=n.__content.clientWidth,n.__maxScrollTop=Math.max(n.__contentHeight-n.__clientHeight,0),n.__maxScrollLeft=Math.max(n.__contentWidth-n.__clientWidth,0),(t.startY>=0||t.startX>=0)&&e.requestAnimationFrame(function(){n.el.scrollTop=t.startY||0,n.el.scrollLeft=t.startX||0,n.__scrollTop=n.el.scrollTop,n.__scrollLeft=n.el.scrollLeft}),n.options={freeze:!1,getContentWidth:function(){return Math.max(n.__content.scrollWidth,n.__content.offsetWidth)},getContentHeight:function(){return Math.max(n.__content.scrollHeight,n.__content.offsetHeight+2*n.__content.offsetTop)}};for(var i in t)n.options[i]=t[i];n.onScroll=function(){e.scroll.isScrolling||(e.scroll.isScrolling=!0),clearTimeout(n.scrollTimer),n.scrollTimer=setTimeout(function(){e.scroll.isScrolling=!1},80)},n.freeze=function(e){n.__frozen=e},n.freezeShut=function(e){n.__frozenShut=e},n.__initEventHandlers()},__callback:function(){n("__callback")},zoomTo:function(){n("zoomTo")},zoomBy:function(){n("zoomBy")},activatePullToRefresh:function(){n("activatePullToRefresh")},resize:function(e){var t=this;t.__container&&t.options&&t.setDimensions(t.__container.clientWidth,t.__container.clientHeight,t.options.getContentWidth(),t.options.getContentHeight(),e)},run:function(){this.resize()},getValues:function(){var e=this;return e.update(),{left:e.__scrollLeft,top:e.__scrollTop,zoom:1}},update:function(){var e=this;e.__scrollLeft=e.el.scrollLeft,e.__scrollTop=e.el.scrollTop},setDimensions:function(e,t,n,i){var r=this;(e||t||n||i)&&(e===+e&&(r.__clientWidth=e),t===+t&&(r.__clientHeight=t),n===+n&&(r.__contentWidth=n),i===+i&&(r.__contentHeight=i),r.__computeScrollMax())},getScrollMax:function(){return{left:this.__maxScrollLeft,top:this.__maxScrollTop}},scrollBy:function(e,t,n){var i=this;i.update();var r=i.__isAnimating?i.__scheduledLeft:i.__scrollLeft,a=i.__isAnimating?i.__scheduledTop:i.__scrollTop;i.scrollTo(r+(e||0),a+(t||0),n)},scrollTo:function(t,n,i){function r(t,n){function i(e){return--e*e*e+1}function r(){var p=Date.now(),h=Math.min(1,(p-l)/c),f=i(h);d!=t&&(a.el.scrollTop=parseInt(f*(t-d)+d,10)),u!=n&&(a.el.scrollLeft=parseInt(f*(n-u)+u,10)),1>h?e.requestAnimationFrame(r):(e.tap.removeClonedInputs(a.__container,a),a.el.style.overflowX=o,a.el.style.overflowY=s,a.resize())}var l=Date.now(),c=250,d=a.el.scrollTop,u=a.el.scrollLeft;return d===t&&u===n?(a.el.style.overflowX=o,a.el.style.overflowY=s,void a.resize()):void e.requestAnimationFrame(r)}var a=this;if(!i)return a.el.scrollTop=n,a.el.scrollLeft=t,void a.resize();var o=a.el.style.overflowX,s=a.el.style.overflowY;clearTimeout(a.__scrollToCleanupTimeout),a.__scrollToCleanupTimeout=setTimeout(function(){a.el.style.overflowX=o,a.el.style.overflowY=s},500),a.el.style.overflowY="hidden",a.el.style.overflowX="hidden",r(n,t)},__waitForSize:function(){var e=this;clearTimeout(e.__sizerTimeout);var t=function(){e.resize(!0)};t(),e.__sizerTimeout=setTimeout(t,500)},__computeScrollMax:function(){var e=this;e.__maxScrollLeft=Math.max(e.__contentWidth-e.__clientWidth,0),e.__maxScrollTop=Math.max(e.__contentHeight-e.__clientHeight,0),e.__didWaitForSize||e.__maxScrollLeft||e.__maxScrollTop||(e.__didWaitForSize=!0,e.__waitForSize())},__initEventHandlers:function(){var t,n,i=this,r=i.__container;i.scrollChildIntoView=function(a){var o=r.getBoundingClientRect();i.__originalContainerHeight||(i.__originalContainerHeight=o.height),t=i.__originalContainerHeight;var s=i.isShrunkForKeyboard,l=r.parentNode.classList.contains("modal"),c=r.parentNode.classList.contains("popover"),d=l&&window.innerWidth>=680,u=n&&n!==a.detail.keyboardHeight;(!s||u)&&(!c&&(e.Platform.isIOS()||e.Platform.isFullScreen||d)&&e.requestAnimationFrame(function(){t=Math.max(0,Math.min(i.__originalContainerHeight,i.__originalContainerHeight-(a.detail.keyboardHeight-43))),r.style.height=t+"px",r.classList.add("keyboard-up"),i.resize()}),i.isShrunkForKeyboard=!0),n=a.detail.keyboardHeight,a.detail.isElementUnderKeyboard&&e.requestAnimationFrame(function(){var t=e.DomUtil.getOffsetTop(a.detail.target);setTimeout(function(){e.Platform.isIOS()&&e.tap.cloneFocusedInput(r,i),i.scrollTo(0,t-(o.top+100),!0),i.onScroll()},32)}),a.stopPropagation()},i.resetScrollView=function(){i.isShrunkForKeyboard&&(i.isShrunkForKeyboard=!1,r.style.height="",i.__originalContainerHeight=r.getBoundingClientRect().height,e.Platform.isIOS()&&e.requestAnimationFrame(function(){r.classList.remove("keyboard-up")})),i.resize()},i.handleTouchMove=function(e){return i.__frozenShut?(e.preventDefault(),e.stopPropagation(),!1):void 0},r.addEventListener("scroll",i.onScroll),r.addEventListener("scrollChildIntoView",i.scrollChildIntoView),r.addEventListener(e.EVENTS.touchstart,i.handleTouchMove),r.addEventListener(e.EVENTS.touchmove,i.handleTouchMove),document.addEventListener("resetScrollView",i.resetScrollView)},__cleanup:function(){var n=this,i=n.__container;i.removeEventListener("resetScrollView",n.resetScrollView),i.removeEventListener("scroll",n.onScroll),i.removeEventListener("scrollChildIntoView",n.scrollChildIntoView),i.removeEventListener("resetScrollView",n.resetScrollView),i.removeEventListener(e.EVENTS.touchstart,n.handleTouchMove),i.removeEventListener(e.EVENTS.touchmove,n.handleTouchMove),e.tap.removeClonedInputs(i,n),delete n.__container,delete n.__content,delete n.__indicatorX,delete n.__indicatorY,delete n.options.el,n.resize=n.scrollTo=n.onScroll=n.resetScrollView=t,n.scrollChildIntoView=t,i=null}})}(ionic),function(e){"use strict";var t="item",n="item-content",i="item-sliding",r="item-options",a="item-placeholder",o="item-reordering",s="item-reorder",l=function(){};l.prototype={start:function(){},drag:function(){},end:function(){},isSameItem:function(){return!1}};var c=function(e){this.dragThresholdX=e.dragThresholdX||10,this.el=e.el,this.item=e.item,this.canSwipe=e.canSwipe};c.prototype=new l,c.prototype.start=function(a){var o,s,l,c;this.canSwipe()&&(o=a.target.classList.contains(n)?a.target:a.target.classList.contains(t)?a.target.querySelector("."+n):e.DomUtil.getParentWithClass(a.target,n),o&&(o.classList.remove(i),l=parseFloat(o.style[e.CSS.TRANSFORM].replace("translate3d(","").split(",")[0])||0,s=o.parentNode.querySelector("."+r),s&&(s.classList.remove("invisible"),c=s.offsetWidth,this._currentDrag={buttons:s,buttonsWidth:c,content:o,startOffsetX:l})))},c.prototype.isSameItem=function(e){return e._lastDrag&&this._currentDrag?this._currentDrag.content==e._lastDrag.content:!1},c.prototype.clean=function(t){function n(){i.buttons&&i.buttons.classList.add("invisible")}var i=this._lastDrag;i&&i.content&&(i.content.style[e.CSS.TRANSITION]="",i.content.style[e.CSS.TRANSFORM]="",t?(i.content.style[e.CSS.TRANSITION]="none",n(),e.requestAnimationFrame(function(){i.content.style[e.CSS.TRANSITION]=""})):e.requestAnimationFrame(function(){setTimeout(n,250)}))},c.prototype.drag=e.animationFrameThrottle(function(t){var n;if(this._currentDrag&&(!this._isDragging&&(Math.abs(t.gesture.deltaX)>this.dragThresholdX||Math.abs(this._currentDrag.startOffsetX)>0)&&(this._isDragging=!0),this._isDragging)){n=this._currentDrag.buttonsWidth;var i=Math.min(0,this._currentDrag.startOffsetX+t.gesture.deltaX);-n>i&&(i=Math.min(-n,-n+.4*(t.gesture.deltaX+n))),this._currentDrag.content.$$ionicOptionsOpen=0!==i,this._currentDrag.content.style[e.CSS.TRANSFORM]="translate3d("+i+"px, 0, 0)",this._currentDrag.content.style[e.CSS.TRANSITION]="none"}}),c.prototype.end=function(t,n){var i=this;if(!i._currentDrag)return void(n&&n());var r=-i._currentDrag.buttonsWidth;t.gesture.deltaX>-(i._currentDrag.buttonsWidth/2)&&("left"==t.gesture.direction&&Math.abs(t.gesture.velocityX)<.3?r=0:"right"==t.gesture.direction&&(r=0)),e.requestAnimationFrame(function(){if(0===r){i._currentDrag.content.style[e.CSS.TRANSFORM]="";var t=i._currentDrag.buttons;setTimeout(function(){t&&t.classList.add("invisible")},250)}else i._currentDrag.content.style[e.CSS.TRANSFORM]="translate3d("+r+"px,0,0)";i._currentDrag.content.style[e.CSS.TRANSITION]="",i._lastDrag||(i._lastDrag={}),e.extend(i._lastDrag,i._currentDrag),i._currentDrag&&(i._currentDrag.buttons=null,i._currentDrag.content=null),i._currentDrag=null,n&&n()})};var d=function(e){var t=this;if(t.dragThresholdY=e.dragThresholdY||0,t.onReorder=e.onReorder,t.listEl=e.listEl,t.el=t.item=e.el,t.scrollEl=e.scrollEl,t.scrollView=e.scrollView,t.listElTrueTop=0,t.listEl.offsetParent){var n=t.listEl;do t.listElTrueTop+=n.offsetTop,n=n.offsetParent;while(n)}};d.prototype=new l,d.prototype._moveElement=function(t){var n=t.gesture.center.pageY+this.scrollView.getValues().top-this._currentDrag.elementHeight/2-this.listElTrueTop;this.el.style[e.CSS.TRANSFORM]="translate3d(0, "+n+"px, 0)"},d.prototype.deregister=function(){this.listEl=this.el=this.scrollEl=this.scrollView=null},d.prototype.start=function(t){var n=e.DomUtil.getChildIndex(this.el,this.el.nodeName.toLowerCase()),i=this.el.scrollHeight,r=this.el.cloneNode(!0);r.classList.add(a),this.el.parentNode.insertBefore(r,this.el),this.el.classList.add(o),this._currentDrag={elementHeight:i,startIndex:n,placeholder:r,scrollHeight:scroll,list:r.parentNode},this._moveElement(t)},d.prototype.drag=e.animationFrameThrottle(function(t){var n=this;if(this._currentDrag){var i=0,r=t.gesture.center.pageY,a=this.listElTrueTop;if(this.scrollView){var o=this.scrollView.__container;i=this.scrollView.getValues().top;var s=o.offsetTop,l=s-r+this._currentDrag.elementHeight/2,c=r+this._currentDrag.elementHeight/2-s-o.offsetHeight;t.gesture.deltaY<0&&l>0&&i>0&&(this.scrollView.scrollBy(null,-l),e.requestAnimationFrame(function(){n.drag(t)})),t.gesture.deltaY>0&&c>0&&i<this.scrollView.getScrollMax().top&&(this.scrollView.scrollBy(null,c),e.requestAnimationFrame(function(){n.drag(t)}))}!this._isDragging&&Math.abs(t.gesture.deltaY)>this.dragThresholdY&&(this._isDragging=!0),this._isDragging&&(this._moveElement(t),this._currentDrag.currentY=i+r-a)}}),d.prototype._getReorderIndex=function(){for(var e,t=this,n=Array.prototype.slice.call(t._currentDrag.placeholder.parentNode.children).filter(function(e){return e.nodeName===t.el.nodeName&&e!==t.el}),i=t._currentDrag.currentY,r=0,a=n.length;a>r;r++)if(e=n[r],r===a-1){if(i>e.offsetTop)return r}else if(0===r){if(i<e.offsetTop+e.offsetHeight)return r}else if(i>e.offsetTop-e.offsetHeight/2&&i<e.offsetTop+e.offsetHeight)return r;return t._currentDrag.startIndex},d.prototype.end=function(t,n){if(!this._currentDrag)return void(n&&n());var i=this._currentDrag.placeholder,r=this._getReorderIndex();this.el.classList.remove(o),this.el.style[e.CSS.TRANSFORM]="",i.parentNode.insertBefore(this.el,i),i.parentNode.removeChild(i),this.onReorder&&this.onReorder(this.el,this._currentDrag.startIndex,r),this._currentDrag={placeholder:null,content:null},this._currentDrag=null,n&&n()},e.views.ListView=e.views.View.inherit({initialize:function(t){var n=this;t=e.extend({onReorder:function(){},virtualRemoveThreshold:-200,virtualAddThreshold:200,canSwipe:function(){return!0}},t),e.extend(n,t),!n.itemHeight&&n.listEl&&(n.itemHeight=n.listEl.children[0]&&parseInt(n.listEl.children[0].style.height,10)),n.onRefresh=t.onRefresh||function(){},n.onRefreshOpening=t.onRefreshOpening||function(){},n.onRefreshHolding=t.onRefreshHolding||function(){};var i={};e.DomUtil.getParentOrSelfWithClass(n.el,"overflow-scroll")&&(i.prevent_default_directions=["left","right"]),window.ionic.onGesture("release",function(e){n._handleEndDrag(e)},n.el,i),window.ionic.onGesture("drag",function(e){n._handleDrag(e)},n.el,i),n._initDrag()},deregister:function(){this.el=this.listEl=this.scrollEl=this.scrollView=null,this.isScrollFreeze&&self.scrollView.freeze(!1)},stopRefreshing:function(){var e=this.el.querySelector(".list-refresher");e.style.height="0"},didScroll:function(e){var t=this;if(t.isVirtual){var n=t.itemHeight,i=e.target.scrollHeight,r=t.el.parentNode.offsetHeight,a=Math.max(0,e.scrollTop+t.virtualRemoveThreshold),o=Math.min(i,Math.abs(e.scrollTop)+r+t.virtualAddThreshold),s=parseInt(Math.abs(a/n),10),l=parseInt(Math.abs(o/n),10);t._virtualItemsToRemove=Array.prototype.slice.call(t.listEl.children,0,s),t.renderViewport&&t.renderViewport(a,o,s,l)}},didStopScrolling:function(){if(this.isVirtual)for(var e=0;e<this._virtualItemsToRemove.length;e++)this.didHideItem&&this.didHideItem(e)},clearDragEffects:function(e){this._lastDragOp&&(this._lastDragOp.clean&&this._lastDragOp.clean(e),this._lastDragOp.deregister&&this._lastDragOp.deregister(),this._lastDragOp=null)},_initDrag:function(){this._lastDragOp&&this._lastDragOp.deregister&&this._lastDragOp.deregister(),this._lastDragOp=this._dragOp,this._dragOp=null},_getItem:function(e){for(;e;){if(e.classList&&e.classList.contains(t))return e;e=e.parentNode}return null},_startDrag:function(t){var n=this;n._isDragging=!1;var i,r=n._lastDragOp;n._didDragUpOrDown&&r instanceof c&&r.clean&&r.clean(),!e.DomUtil.getParentOrSelfWithClass(t.target,s)||"up"!=t.gesture.direction&&"down"!=t.gesture.direction?!n._didDragUpOrDown&&("left"==t.gesture.direction||"right"==t.gesture.direction)&&Math.abs(t.gesture.deltaX)>5&&(i=n._getItem(t.target),i&&i.querySelector(".item-options")&&(n._dragOp=new c({el:n.el,item:i,canSwipe:n.canSwipe}),n._dragOp.start(t),t.preventDefault(),n.isScrollFreeze=n.scrollView.freeze(!0))):(i=n._getItem(t.target),i&&(n._dragOp=new d({listEl:n.el,el:i,scrollEl:n.scrollEl,scrollView:n.scrollView,onReorder:function(e,t,i){n.onReorder&&n.onReorder(e,t,i)}}),n._dragOp.start(t),t.preventDefault())),r&&n._dragOp&&!n._dragOp.isSameItem(r)&&t.defaultPrevented&&r.clean&&r.clean()},_handleEndDrag:function(e){var t=this;t.scrollView&&(t.isScrollFreeze=t.scrollView.freeze(!1)),t._didDragUpOrDown=!1,t._dragOp&&t._dragOp.end(e,function(){t._initDrag()})},_handleDrag:function(e){var t=this;Math.abs(e.gesture.deltaY)>5&&(t._didDragUpOrDown=!0),t.isDragging||t._dragOp||t._startDrag(e),t._dragOp&&(e.gesture.srcEvent.preventDefault(),t._dragOp.drag(e))}})}(ionic),function(e){"use strict";e.views.Modal=e.views.View.inherit({initialize:function(t){t=e.extend({focusFirstInput:!1,unfocusOnHide:!0,focusFirstDelay:600,backdropClickToClose:!0,hardwareBackButtonClose:!0},t),e.extend(this,t),this.el=t.el},show:function(){var e=this;e.focusFirstInput&&window.setTimeout(function(){var t=e.el.querySelector("input, textarea");t&&t.focus&&t.focus()},e.focusFirstDelay)},hide:function(){if(this.unfocusOnHide){var e=this.el.querySelectorAll("input, textarea");window.setTimeout(function(){for(var t=0;t<e.length;t++)e[t].blur&&e[t].blur()})}}})}(ionic),function(e){"use strict";e.views.SideMenu=e.views.View.inherit({initialize:function(e){this.el=e.el,this.isEnabled="undefined"==typeof e.isEnabled?!0:e.isEnabled,this.setWidth(e.width)},getFullWidth:function(){return this.width},setWidth:function(e){this.width=e,this.el.style.width=e+"px"},setIsEnabled:function(e){this.isEnabled=e},bringUp:function(){"0"!==this.el.style.zIndex&&(this.el.style.zIndex="0")},pushDown:function(){"-1"!==this.el.style.zIndex&&(this.el.style.zIndex="-1")}}),e.views.SideMenuContent=e.views.View.inherit({initialize:function(t){e.extend(this,{animationClass:"menu-animated",onDrag:function(){},onEndDrag:function(){}},t),e.onGesture("drag",e.proxy(this._onDrag,this),this.el),e.onGesture("release",e.proxy(this._onEndDrag,this),this.el)},_onDrag:function(e){this.onDrag&&this.onDrag(e)},_onEndDrag:function(e){this.onEndDrag&&this.onEndDrag(e)},disableAnimation:function(){this.el.classList.remove(this.animationClass)},enableAnimation:function(){this.el.classList.add(this.animationClass)},getTranslateX:function(){return parseFloat(this.el.style[e.CSS.TRANSFORM].replace("translate3d(","").split(",")[0])},setTranslateX:e.animationFrameThrottle(function(t){this.el.style[e.CSS.TRANSFORM]="translate3d("+t+"px, 0, 0)"})})}(ionic),function(e){"use strict";e.views.Slider=e.views.View.inherit({initialize:function(e){function t(){if(b.offsetWidth){S=D.children,x=S.length,S.length<2&&(e.continuous=!1),T.transitions&&e.continuous&&S.length<3&&(D.appendChild(S[0].cloneNode(!0)),D.appendChild(D.children[1].cloneNode(!0)),S=D.children),y=new Array(S.length),E=b.offsetWidth||b.getBoundingClientRect().width,D.style.width=S.length*E+"px";for(var t=S.length;t--;){var n=S[t];n.style.width=E+"px",n.setAttribute("data-index",t),T.transitions&&(n.style.left=t*-E+"px",o(t,M>t?-E:t>M?E:0,0))}e.continuous&&T.transitions&&(o(r(M-1),-E,0),o(r(M+1),E,0)),T.transitions||(D.style.left=M*-E+"px"),b.style.visibility="visible",e.slidesChanged&&e.slidesChanged()}}function n(t){e.continuous?a(M-1,t):M&&a(M-1,t)}function i(t){e.continuous?a(M+1,t):M<S.length-1&&a(M+1,t)}function r(e){return(S.length+e%S.length)%S.length}function a(t,n){if(M!=t){if(!S)return void(M=t);if(T.transitions){var i=Math.abs(M-t)/(M-t);if(e.continuous){var a=i;i=-y[r(t)]/E,i!==a&&(t=-i*S.length+t)}for(var s=Math.abs(M-t)-1;s--;)o(r((t>M?t:M)-s-1),E*i,0);t=r(t),o(M,E*i,n||L),o(t,0,n||L),e.continuous&&o(r(t-i),-(E*i),0)}else t=r(t),l(M*-E,t*-E,n||L);M=t,w(e.callback&&e.callback(M,S[M]))}}function o(e,t,n){s(e,t,n),y[e]=t}function s(e,t,n){var i=S[e],r=i&&i.style;r&&(r.webkitTransitionDuration=r.MozTransitionDuration=r.msTransitionDuration=r.OTransitionDuration=r.transitionDuration=n+"ms",r.webkitTransform="translate("+t+"px,0)translateZ(0)",r.msTransform=r.MozTransform=r.OTransform="translateX("+t+"px)")}function l(t,n,i){if(!i)return void(D.style.left=n+"px");var r=+new Date,a=setInterval(function(){var o=+new Date-r;return o>i?(D.style.left=n+"px",I&&c(),e.transitionEnd&&e.transitionEnd.call(event,M,S[M]),void clearInterval(a)):void(D.style.left=(n-t)*(Math.floor(o/i*100)/100)+t+"px")},4)}function c(){C=setTimeout(i,I)}function d(){I=e.auto||0,clearTimeout(C)}var u,p,h,f=this;window.navigator.pointerEnabled?(u="pointerdown",p="pointermove",h="pointerup"):window.navigator.msPointerEnabled?(u="MSPointerDown",p="MSPointerMove",h="MSPointerUp"):(u="touchstart",p="touchmove",h="touchend");var m="mousedown",g="mousemove",v="mouseup",_=function(){},w=function(e){setTimeout(e||_,0)},T={addEventListener:!!window.addEventListener,transitions:function(e){var t=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];for(var n in t)if(void 0!==e.style[t[n]])return!0;return!1}(document.createElement("swipe"))},b=e.el;if(b){var S,y,E,x,D=b.children[0];e=e||{};var M=parseInt(e.startSlide,10)||0,L=e.speed||300;e.continuous=void 0!==e.continuous?e.continuous:!0;var C,P,I=e.auto||0,k={},N={},z={handleEvent:function(n){switch(!n.touches&&n.pageX&&n.pageY&&(n.touches=[{pageX:n.pageX,pageY:n.pageY}]),n.type){case u:this.start(n);break;case m:this.start(n);break;case p:this.touchmove(n);break;case g:this.touchmove(n);break;case h:w(this.end(n));break;case v:w(this.end(n));break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":w(this.transitionEnd(n));break;case"resize":w(t)}e.stopPropagation&&n.stopPropagation()},start:function(e){if(e.touches){var t=e.touches[0];k={x:t.pageX,y:t.pageY,time:+new Date},P=void 0,N={},D.addEventListener(p,this,!1),D.addEventListener(g,this,!1),D.addEventListener(h,this,!1),D.addEventListener(v,this,!1),document.addEventListener(h,this,!1),document.addEventListener(v,this,!1)}},touchmove:function(t){if(!(!t.touches||t.touches.length>1||t.scale&&1!==t.scale||f.slideIsDisabled)){e.disableScroll&&t.preventDefault();var n=t.touches[0];N={x:n.pageX-k.x,y:n.pageY-k.y},"undefined"==typeof P&&(P=!!(P||Math.abs(N.x)<Math.abs(N.y))),P||(t.preventDefault(),d(),e.continuous?(s(r(M-1),N.x+y[r(M-1)],0),s(M,N.x+y[M],0),s(r(M+1),N.x+y[r(M+1)],0)):(e.bouncing?N.x=N.x/(!M&&N.x>0||M==S.length-1&&N.x<0?Math.abs(N.x)/E+1:1):(E*M-N.x<0&&(N.x=Math.min(N.x,E*M)),Math.abs(N.x)>E*(S.length-M-1)&&(N.x=Math.max(-E*(S.length-M-1),N.x))),s(M-1,N.x+y[M-1],0),s(M,N.x+y[M],0),s(M+1,N.x+y[M+1],0)),e.onDrag&&e.onDrag())}},end:function(){var t=+new Date-k.time,n=Number(t)<250&&Math.abs(N.x)>20||Math.abs(N.x)>E/2,i=!M&&N.x>0||M==S.length-1&&N.x<0;e.continuous&&(i=!1);var a=N.x<0;P||(n&&!i?(a?(e.continuous?(o(r(M-1),-E,0),o(r(M+2),E,0)):o(M-1,-E,0),o(M,y[M]-E,L),o(r(M+1),y[r(M+1)]-E,L),M=r(M+1)):(e.continuous?(o(r(M+1),E,0),o(r(M-2),-E,0)):o(M+1,E,0),o(M,y[M]+E,L),o(r(M-1),y[r(M-1)]+E,L),M=r(M-1)),e.callback&&e.callback(M,S[M])):e.continuous?(o(r(M-1),-E,L),o(M,0,L),o(r(M+1),E,L)):(o(M-1,-E,L),o(M,0,L),o(M+1,E,L))),D.removeEventListener(p,z,!1),D.removeEventListener(g,z,!1),D.removeEventListener(h,z,!1),D.removeEventListener(v,z,!1),document.removeEventListener(h,z,!1),document.removeEventListener(v,z,!1),e.onDragEnd&&e.onDragEnd()},transitionEnd:function(t){parseInt(t.target.getAttribute("data-index"),10)==M&&(I&&c(),e.transitionEnd&&e.transitionEnd.call(t,M,S[M]))}};this.update=function(){setTimeout(t)},this.setup=function(){t()},this.loop=function(t){return arguments.length&&(e.continuous=!!t),e.continuous},this.enableSlide=function(e){return arguments.length&&(this.slideIsDisabled=!e),!this.slideIsDisabled},this.slide=this.select=function(e,t){d(),a(e,t)},this.prev=this.previous=function(){d(),n()},this.next=function(){d(),i()},this.stop=function(){d()},this.start=function(){c()},this.autoPlay=function(e){!I||0>I?d():(I=e,c())},this.currentIndex=this.selected=function(){return M},this.slidesCount=this.count=function(){return x},this.kill=function(){d(),D.style.width="",D.style.left="",S&&(S=[]),T.addEventListener?(D.removeEventListener(u,z,!1),D.removeEventListener(m,z,!1),D.removeEventListener("webkitTransitionEnd",z,!1),D.removeEventListener("msTransitionEnd",z,!1),D.removeEventListener("oTransitionEnd",z,!1),D.removeEventListener("otransitionend",z,!1),D.removeEventListener("transitionend",z,!1),window.removeEventListener("resize",z,!1)):window.onresize=null},this.load=function(){t(),I&&c(),T.addEventListener?(D.addEventListener(u,z,!1),D.addEventListener(m,z,!1),T.transitions&&(D.addEventListener("webkitTransitionEnd",z,!1),D.addEventListener("msTransitionEnd",z,!1),D.addEventListener("oTransitionEnd",z,!1),D.addEventListener("otransitionend",z,!1),D.addEventListener("transitionend",z,!1)),window.addEventListener("resize",z,!1)):window.onresize=function(){t()}}}}})}(ionic),function(){"use strict";function e(e){e.fn.swiper=function(t){var i;return e(this).each(function(){var e=new n(this,t);i||(i=e)}),i}}var t,n=function(e,r,a,o){function s(){return"horizontal"===y.params.direction}function l(e){return Math.floor(e)}function c(){y.autoplayTimeoutId=setTimeout(function(){y.params.loop?(y.fixLoop(),y._slideNext()):y.isEnd?r.autoplayStopOnLast?y.stopAutoplay():y._slideTo(0):y._slideNext()},y.params.autoplay)}function d(e,n){var i=t(e.target);if(!i.is(n))if("string"==typeof n)i=i.parents(n);else if(n.nodeType){var r;return i.parents().each(function(e,t){t===n&&(r=n)}),r?n:void 0}return 0===i.length?void 0:i[0]}function u(e,t){t=t||{};var n=window.MutationObserver||window.WebkitMutationObserver,i=new n(function(e){e.forEach(function(e){y.onResize(!0),y.emit("onObserverUpdate",y,e)})});i.observe(e,{attributes:"undefined"==typeof t.attributes?!0:t.attributes,childList:"undefined"==typeof t.childList?!0:t.childList,characterData:"undefined"==typeof t.characterData?!0:t.characterData}),y.observers.push(i)}function p(e){e.originalEvent&&(e=e.originalEvent);var t=e.keyCode||e.charCode;if(!y.params.allowSwipeToNext&&(s()&&39===t||!s()&&40===t))return!1;if(!y.params.allowSwipeToPrev&&(s()&&37===t||!s()&&38===t))return!1;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===t||39===t||38===t||40===t){var n=!1;if(y.container.parents(".swiper-slide").length>0&&0===y.container.parents(".swiper-slide-active").length)return;var i={left:window.pageXOffset,top:window.pageYOffset},r=window.innerWidth,a=window.innerHeight,o=y.container.offset();y.rtl&&(o.left=o.left-y.container[0].scrollLeft);for(var l=[[o.left,o.top],[o.left+y.width,o.top],[o.left,o.top+y.height],[o.left+y.width,o.top+y.height]],c=0;c<l.length;c++){var d=l[c];d[0]>=i.left&&d[0]<=i.left+r&&d[1]>=i.top&&d[1]<=i.top+a&&(n=!0)}if(!n)return}s()?((37===t||39===t)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),(39===t&&!y.rtl||37===t&&y.rtl)&&y.slideNext(),(37===t&&!y.rtl||39===t&&y.rtl)&&y.slidePrev()):((38===t||40===t)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),40===t&&y.slideNext(),38===t&&y.slidePrev())}}function h(e){e.originalEvent&&(e=e.originalEvent);var t=y.mousewheel.event,n=0,i=y.rtl?-1:1;if(e.detail)n=-e.detail;else if("mousewheel"===t)if(y.params.mousewheelForceToAxis)if(s()){if(!(Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)))return;n=e.wheelDeltaX*i}else{if(!(Math.abs(e.wheelDeltaY)>Math.abs(e.wheelDeltaX)))return;n=e.wheelDeltaY}else n=Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)?-e.wheelDeltaX*i:-e.wheelDeltaY;else if("DOMMouseScroll"===t)n=-e.detail;else if("wheel"===t)if(y.params.mousewheelForceToAxis)if(s()){if(!(Math.abs(e.deltaX)>Math.abs(e.deltaY)))return;n=-e.deltaX*i}else{if(!(Math.abs(e.deltaY)>Math.abs(e.deltaX)))return;n=-e.deltaY}else n=Math.abs(e.deltaX)>Math.abs(e.deltaY)?-e.deltaX*i:-e.deltaY;if(0!==n){if(y.params.mousewheelInvert&&(n=-n),y.params.freeMode){var r=y.getWrapperTranslate()+n*y.params.mousewheelSensitivity,a=y.isBeginning,o=y.isEnd;if(r>=y.minTranslate()&&(r=y.minTranslate()),r<=y.maxTranslate()&&(r=y.maxTranslate()),y.setWrapperTransition(0),y.setWrapperTranslate(r),y.updateProgress(),y.updateActiveIndex(),(!a&&y.isBeginning||!o&&y.isEnd)&&y.updateClasses(),y.params.freeModeSticky&&(clearTimeout(y.mousewheel.timeout),y.mousewheel.timeout=setTimeout(function(){y.slideReset()},300)),0===r||r===y.maxTranslate())return}else{if((new window.Date).getTime()-y.mousewheel.lastScrollTime>60)if(0>n)if(y.isEnd&&!y.params.loop||y.animating){if(y.params.mousewheelReleaseOnEdges)return!0}else y.slideNext();else if(y.isBeginning&&!y.params.loop||y.animating){if(y.params.mousewheelReleaseOnEdges)return!0}else y.slidePrev();y.mousewheel.lastScrollTime=(new window.Date).getTime()}return y.params.autoplay&&y.stopAutoplay(),e.preventDefault?e.preventDefault():e.returnValue=!1,!1}}function f(e,n){e=t(e);var i,r,a,o=y.rtl?-1:1;i=e.attr("data-swiper-parallax")||"0",r=e.attr("data-swiper-parallax-x"),
a=e.attr("data-swiper-parallax-y"),r||a?(r=r||"0",a=a||"0"):s()?(r=i,a="0"):(a=i,r="0"),r=r.indexOf("%")>=0?parseInt(r,10)*n*o+"%":r*n*o+"px",a=a.indexOf("%")>=0?parseInt(a,10)*n+"%":a*n+"px",e.transform("translate3d("+r+", "+a+",0px)")}function m(e){return 0!==e.indexOf("on")&&(e=e[0]!==e[0].toUpperCase()?"on"+e[0].toUpperCase()+e.substring(1):"on"+e),e}if(!(this instanceof n))return new n(e,r);var g={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,scrollbar:null,scrollbarHide:!0,scrollbarDraggable:!1,scrollbarSnapOnRelease:!1,keyboardControl:!1,mousewheelControl:!1,mousewheelReleaseOnEdges:!1,mousewheelInvert:!1,mousewheelForceToAxis:!1,mousewheelSensitivity:1,hashnav:!1,breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,pagination:null,paginationElement:"span",paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,controlBy:"slide",allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationHiddenClass:"swiper-pagination-hidden",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",runCallbacksOnInit:!0},v=r&&r.virtualTranslate;r=r||{};var _={};for(var w in r)if("object"!=typeof r[w]||(r[w].nodeType||r[w]===window||r[w]===document||"undefined"!=typeof i&&r[w]instanceof i||"undefined"!=typeof jQuery&&r[w]instanceof jQuery))_[w]=r[w];else{_[w]={};for(var T in r[w])_[w][T]=r[w][T]}for(var b in g)if("undefined"==typeof r[b])r[b]=g[b];else if("object"==typeof r[b])for(var S in g[b])"undefined"==typeof r[b][S]&&(r[b][S]=g[b][S]);var y=this;if(y.params=r,y.originalParams=_,y.classNames=[],"undefined"!=typeof t&&"undefined"!=typeof i&&(t=i),("undefined"!=typeof t||(t="undefined"==typeof i?window.Dom7||window.Zepto||window.jQuery:i))&&(y.$=t,y.currentBreakpoint=void 0,y.getActiveBreakpoint=function(){if(!y.params.breakpoints)return!1;var e,t=!1,n=[];for(e in y.params.breakpoints)y.params.breakpoints.hasOwnProperty(e)&&n.push(e);n.sort(function(e,t){return parseInt(e,10)>parseInt(t,10)});for(var i=0;i<n.length;i++)e=n[i],e>=window.innerWidth&&!t&&(t=e);return t||"max"},y.setBreakpoint=function(){var e=y.getActiveBreakpoint();if(e&&y.currentBreakpoint!==e){var t=e in y.params.breakpoints?y.params.breakpoints[e]:y.originalParams;for(var n in t)y.params[n]=t[n];y.currentBreakpoint=e}},y.params.breakpoints&&y.setBreakpoint(),y.container=t(e),0!==y.container.length)){if(y.container.length>1)return void y.container.each(function(){new n(this,r)});y.container[0].swiper=y,y.container.data("swiper",y),y.classNames.push("swiper-container-"+y.params.direction),y.params.freeMode&&y.classNames.push("swiper-container-free-mode"),y.support.flexbox||(y.classNames.push("swiper-container-no-flexbox"),y.params.slidesPerColumn=1),y.params.autoHeight&&y.classNames.push("swiper-container-autoheight"),(y.params.parallax||y.params.watchSlidesVisibility)&&(y.params.watchSlidesProgress=!0),["cube","coverflow"].indexOf(y.params.effect)>=0&&(y.support.transforms3d?(y.params.watchSlidesProgress=!0,y.classNames.push("swiper-container-3d")):y.params.effect="slide"),"slide"!==y.params.effect&&y.classNames.push("swiper-container-"+y.params.effect),"cube"===y.params.effect&&(y.params.resistanceRatio=0,y.params.slidesPerView=1,y.params.slidesPerColumn=1,y.params.slidesPerGroup=1,y.params.centeredSlides=!1,y.params.spaceBetween=0,y.params.virtualTranslate=!0,y.params.setWrapperSize=!1),"fade"===y.params.effect&&(y.params.slidesPerView=1,y.params.slidesPerColumn=1,y.params.slidesPerGroup=1,y.params.watchSlidesProgress=!0,y.params.spaceBetween=0,"undefined"==typeof v&&(y.params.virtualTranslate=!0)),y.params.grabCursor&&y.support.touch&&(y.params.grabCursor=!1),y.wrapper=y.container.children("."+y.params.wrapperClass),y.params.pagination&&(y.paginationContainer=t(y.params.pagination),y.params.paginationClickable&&y.paginationContainer.addClass("swiper-pagination-clickable")),y.rtl=s()&&("rtl"===y.container[0].dir.toLowerCase()||"rtl"===y.container.css("direction")),y.rtl&&y.classNames.push("swiper-container-rtl"),y.rtl&&(y.wrongRTL="-webkit-box"===y.wrapper.css("display")),y.params.slidesPerColumn>1&&y.classNames.push("swiper-container-multirow"),y.device.android&&y.classNames.push("swiper-container-android"),y.container.addClass(y.classNames.join(" ")),y.translate=0,y.progress=0,y.velocity=0,y.lockSwipeToNext=function(){y.params.allowSwipeToNext=!1},y.lockSwipeToPrev=function(){y.params.allowSwipeToPrev=!1},y.lockSwipes=function(){y.params.allowSwipeToNext=y.params.allowSwipeToPrev=!1},y.unlockSwipeToNext=function(){y.params.allowSwipeToNext=!0},y.unlockSwipeToPrev=function(){y.params.allowSwipeToPrev=!0},y.unlockSwipes=function(){y.params.allowSwipeToNext=y.params.allowSwipeToPrev=!0},y.params.grabCursor&&(y.container[0].style.cursor="move",y.container[0].style.cursor="-webkit-grab",y.container[0].style.cursor="-moz-grab",y.container[0].style.cursor="grab"),y.imagesToLoad=[],y.imagesLoaded=0,y.loadImage=function(e,t,n,i,r){function a(){r&&r()}var o;e.complete&&i?a():t?(o=new window.Image,o.onload=a,o.onerror=a,n&&(o.srcset=n),t&&(o.src=t)):a()},y.preloadImages=function(){function e(){"undefined"!=typeof y&&null!==y&&(void 0!==y.imagesLoaded&&y.imagesLoaded++,y.imagesLoaded===y.imagesToLoad.length&&(y.params.updateOnImagesReady&&y.update(),y.emit("onImagesReady",y)))}y.imagesToLoad=y.container.find("img");for(var t=0;t<y.imagesToLoad.length;t++)y.loadImage(y.imagesToLoad[t],y.imagesToLoad[t].currentSrc||y.imagesToLoad[t].getAttribute("src"),y.imagesToLoad[t].srcset||y.imagesToLoad[t].getAttribute("srcset"),!0,e)},y.autoplayTimeoutId=void 0,y.autoplaying=!1,y.autoplayPaused=!1,y.startAutoplay=function(){return"undefined"!=typeof y.autoplayTimeoutId?!1:y.params.autoplay?y.autoplaying?!1:(y.autoplaying=!0,y.emit("onAutoplayStart",y),void c()):!1},y.stopAutoplay=function(e){y.autoplayTimeoutId&&(y.autoplayTimeoutId&&clearTimeout(y.autoplayTimeoutId),y.autoplaying=!1,y.autoplayTimeoutId=void 0,y.emit("onAutoplayStop",y))},y.pauseAutoplay=function(e){y.autoplayPaused||(y.autoplayTimeoutId&&clearTimeout(y.autoplayTimeoutId),y.autoplayPaused=!0,0===e?(y.autoplayPaused=!1,c()):y.wrapper.transitionEnd(function(){y&&(y.autoplayPaused=!1,y.autoplaying?c():y.stopAutoplay())}))},y.minTranslate=function(){return-y.snapGrid[0]},y.maxTranslate=function(){return-y.snapGrid[y.snapGrid.length-1]},y.updateAutoHeight=function(){var e=y.slides.eq(y.activeIndex)[0].offsetHeight;e&&y.wrapper.css("height",y.slides.eq(y.activeIndex)[0].offsetHeight+"px")},y.updateContainerSize=function(){var e,t;e="undefined"!=typeof y.params.width?y.params.width:y.container[0].clientWidth,t="undefined"!=typeof y.params.height?y.params.height:y.container[0].clientHeight,0===e&&s()||0===t&&!s()||(e=e-parseInt(y.container.css("padding-left"),10)-parseInt(y.container.css("padding-right"),10),t=t-parseInt(y.container.css("padding-top"),10)-parseInt(y.container.css("padding-bottom"),10),y.width=e,y.height=t,y.size=s()?y.width:y.height)},y.updateSlidesSize=function(){y.slides=y.wrapper.children("."+y.params.slideClass),y.snapGrid=[],y.slidesGrid=[],y.slidesSizesGrid=[];var e,t=y.params.spaceBetween,n=-y.params.slidesOffsetBefore,i=0,r=0;"string"==typeof t&&t.indexOf("%")>=0&&(t=parseFloat(t.replace("%",""))/100*y.size),y.virtualSize=-t,y.rtl?y.slides.css({marginLeft:"",marginTop:""}):y.slides.css({marginRight:"",marginBottom:""});var a;y.params.slidesPerColumn>1&&(a=Math.floor(y.slides.length/y.params.slidesPerColumn)===y.slides.length/y.params.slidesPerColumn?y.slides.length:Math.ceil(y.slides.length/y.params.slidesPerColumn)*y.params.slidesPerColumn,"auto"!==y.params.slidesPerView&&"row"===y.params.slidesPerColumnFill&&(a=Math.max(a,y.params.slidesPerView*y.params.slidesPerColumn)));var o,c=y.params.slidesPerColumn,d=a/c,u=d-(y.params.slidesPerColumn*d-y.slides.length);for(e=0;e<y.slides.length;e++){o=0;var p=y.slides.eq(e);if(y.params.slidesPerColumn>1){var h,f,m;"column"===y.params.slidesPerColumnFill?(f=Math.floor(e/c),m=e-f*c,(f>u||f===u&&m===c-1)&&++m>=c&&(m=0,f++),h=f+m*a/c,p.css({"-webkit-box-ordinal-group":h,"-moz-box-ordinal-group":h,"-ms-flex-order":h,"-webkit-order":h,order:h})):(m=Math.floor(e/d),f=e-m*d),p.css({"margin-top":0!==m&&y.params.spaceBetween&&y.params.spaceBetween+"px"}).attr("data-swiper-column",f).attr("data-swiper-row",m)}"none"!==p.css("display")&&("auto"===y.params.slidesPerView?(o=s()?p.outerWidth(!0):p.outerHeight(!0),y.params.roundLengths&&(o=l(o))):(o=(y.size-(y.params.slidesPerView-1)*t)/y.params.slidesPerView,y.params.roundLengths&&(o=l(o)),s()?y.slides[e].style.width=o+"px":y.slides[e].style.height=o+"px"),y.slides[e].swiperSlideSize=o,y.slidesSizesGrid.push(o),y.params.centeredSlides?(n=n+o/2+i/2+t,0===e&&(n=n-y.size/2-t),Math.abs(n)<.001&&(n=0),r%y.params.slidesPerGroup===0&&y.snapGrid.push(n),y.slidesGrid.push(n)):(r%y.params.slidesPerGroup===0&&y.snapGrid.push(n),y.slidesGrid.push(n),n=n+o+t),y.virtualSize+=o+t,i=o,r++)}y.virtualSize=Math.max(y.virtualSize,y.size)+y.params.slidesOffsetAfter;var g;if(y.rtl&&y.wrongRTL&&("slide"===y.params.effect||"coverflow"===y.params.effect)&&y.wrapper.css({width:y.virtualSize+y.params.spaceBetween+"px"}),(!y.support.flexbox||y.params.setWrapperSize)&&(s()?y.wrapper.css({width:y.virtualSize+y.params.spaceBetween+"px"}):y.wrapper.css({height:y.virtualSize+y.params.spaceBetween+"px"})),y.params.slidesPerColumn>1&&(y.virtualSize=(o+y.params.spaceBetween)*a,y.virtualSize=Math.ceil(y.virtualSize/y.params.slidesPerColumn)-y.params.spaceBetween,y.wrapper.css({width:y.virtualSize+y.params.spaceBetween+"px"}),y.params.centeredSlides)){for(g=[],e=0;e<y.snapGrid.length;e++)y.snapGrid[e]<y.virtualSize+y.snapGrid[0]&&g.push(y.snapGrid[e]);y.snapGrid=g}if(!y.params.centeredSlides){for(g=[],e=0;e<y.snapGrid.length;e++)y.snapGrid[e]<=y.virtualSize-y.size&&g.push(y.snapGrid[e]);y.snapGrid=g,Math.floor(y.virtualSize-y.size)>Math.floor(y.snapGrid[y.snapGrid.length-1])&&y.snapGrid.push(y.virtualSize-y.size)}0===y.snapGrid.length&&(y.snapGrid=[0]),0!==y.params.spaceBetween&&(s()?y.rtl?y.slides.css({marginLeft:t+"px"}):y.slides.css({marginRight:t+"px"}):y.slides.css({marginBottom:t+"px"})),y.params.watchSlidesProgress&&y.updateSlidesOffset()},y.updateSlidesOffset=function(){for(var e=0;e<y.slides.length;e++)y.slides[e].swiperSlideOffset=s()?y.slides[e].offsetLeft:y.slides[e].offsetTop},y.updateSlidesProgress=function(e){if("undefined"==typeof e&&(e=y.translate||0),0!==y.slides.length){"undefined"==typeof y.slides[0].swiperSlideOffset&&y.updateSlidesOffset();var t=-e;y.rtl&&(t=e),y.slides.removeClass(y.params.slideVisibleClass);for(var n=0;n<y.slides.length;n++){var i=y.slides[n],r=(t-i.swiperSlideOffset)/(i.swiperSlideSize+y.params.spaceBetween);if(y.params.watchSlidesVisibility){var a=-(t-i.swiperSlideOffset),o=a+y.slidesSizesGrid[n],s=a>=0&&a<y.size||o>0&&o<=y.size||0>=a&&o>=y.size;s&&y.slides.eq(n).addClass(y.params.slideVisibleClass)}i.progress=y.rtl?-r:r}}},y.updateProgress=function(e){"undefined"==typeof e&&(e=y.translate||0);var t=y.maxTranslate()-y.minTranslate(),n=y.isBeginning,i=y.isEnd;0===t?(y.progress=0,y.isBeginning=y.isEnd=!0):(y.progress=(e-y.minTranslate())/t,y.isBeginning=y.progress<=0,y.isEnd=y.progress>=1),y.isBeginning&&!n&&y.emit("onReachBeginning",y),y.isEnd&&!i&&y.emit("onReachEnd",y),y.params.watchSlidesProgress&&y.updateSlidesProgress(e),y.emit("onProgress",y,y.progress)},y.updateActiveIndex=function(){var e,t,n,i=y.rtl?y.translate:-y.translate;for(t=0;t<y.slidesGrid.length;t++)"undefined"!=typeof y.slidesGrid[t+1]?i>=y.slidesGrid[t]&&i<y.slidesGrid[t+1]-(y.slidesGrid[t+1]-y.slidesGrid[t])/2?e=t:i>=y.slidesGrid[t]&&i<y.slidesGrid[t+1]&&(e=t+1):i>=y.slidesGrid[t]&&(e=t);(0>e||"undefined"==typeof e)&&(e=0),n=Math.floor(e/y.params.slidesPerGroup),n>=y.snapGrid.length&&(n=y.snapGrid.length-1),e!==y.activeIndex&&(y.snapIndex=n,y.previousIndex=y.activeIndex,y.activeIndex=e,y.updateClasses())},y.updateClasses=function(){y.slides.removeClass(y.params.slideActiveClass+" "+y.params.slideNextClass+" "+y.params.slidePrevClass);var e=y.slides.eq(y.activeIndex);if(e.addClass(y.params.slideActiveClass),e.next("."+y.params.slideClass).addClass(y.params.slideNextClass),e.prev("."+y.params.slideClass).addClass(y.params.slidePrevClass),y.bullets&&y.bullets.length>0){y.bullets.removeClass(y.params.bulletActiveClass);var n;y.params.loop?(n=Math.ceil(y.activeIndex-y.loopedSlides)/y.params.slidesPerGroup,n>y.slides.length-1-2*y.loopedSlides&&(n-=y.slides.length-2*y.loopedSlides),n>y.bullets.length-1&&(n-=y.bullets.length)):n="undefined"!=typeof y.snapIndex?y.snapIndex:y.activeIndex||0,y.paginationContainer.length>1?y.bullets.each(function(){t(this).index()===n&&t(this).addClass(y.params.bulletActiveClass)}):y.bullets.eq(n).addClass(y.params.bulletActiveClass)}y.params.loop||(y.params.prevButton&&(y.isBeginning?(t(y.params.prevButton).addClass(y.params.buttonDisabledClass),y.params.a11y&&y.a11y&&y.a11y.disable(t(y.params.prevButton))):(t(y.params.prevButton).removeClass(y.params.buttonDisabledClass),y.params.a11y&&y.a11y&&y.a11y.enable(t(y.params.prevButton)))),y.params.nextButton&&(y.isEnd?(t(y.params.nextButton).addClass(y.params.buttonDisabledClass),y.params.a11y&&y.a11y&&y.a11y.disable(t(y.params.nextButton))):(t(y.params.nextButton).removeClass(y.params.buttonDisabledClass),y.params.a11y&&y.a11y&&y.a11y.enable(t(y.params.nextButton)))))},y.updatePagination=function(){if(y.params.pagination&&y.paginationContainer&&y.paginationContainer.length>0){for(var e="",t=y.params.loop?Math.ceil((y.slides.length-2*y.loopedSlides)/y.params.slidesPerGroup):y.snapGrid.length,n=0;t>n;n++)e+=y.params.paginationBulletRender?y.params.paginationBulletRender(n,y.params.bulletClass):"<"+y.params.paginationElement+' class="'+y.params.bulletClass+'"></'+y.params.paginationElement+">";y.paginationContainer.html(e),y.bullets=y.paginationContainer.find("."+y.params.bulletClass),y.params.paginationClickable&&y.params.a11y&&y.a11y&&y.a11y.initPagination()}},y.update=function(e){function t(){i=Math.min(Math.max(y.translate,y.maxTranslate()),y.minTranslate()),y.setWrapperTranslate(i),y.updateActiveIndex(),y.updateClasses()}if(y.updateContainerSize(),y.updateSlidesSize(),y.updateProgress(),y.updatePagination(),y.updateClasses(),y.params.scrollbar&&y.scrollbar&&y.scrollbar.set(),e){var n,i;y.controller&&y.controller.spline&&(y.controller.spline=void 0),y.params.freeMode?(t(),y.params.autoHeight&&y.updateAutoHeight()):(n=("auto"===y.params.slidesPerView||y.params.slidesPerView>1)&&y.isEnd&&!y.params.centeredSlides?y.slideTo(y.slides.length-1,0,!1,!0):y.slideTo(y.activeIndex,0,!1,!0),n||t())}else y.params.autoHeight&&y.updateAutoHeight()},y.onResize=function(e){y.params.breakpoints&&y.setBreakpoint();var t=y.params.allowSwipeToPrev,n=y.params.allowSwipeToNext;if(y.params.allowSwipeToPrev=y.params.allowSwipeToNext=!0,y.updateContainerSize(),y.updateSlidesSize(),("auto"===y.params.slidesPerView||y.params.freeMode||e)&&y.updatePagination(),y.params.scrollbar&&y.scrollbar&&y.scrollbar.set(),y.controller&&y.controller.spline&&(y.controller.spline=void 0),y.params.freeMode){var i=Math.min(Math.max(y.translate,y.maxTranslate()),y.minTranslate());y.setWrapperTranslate(i),y.updateActiveIndex(),y.updateClasses(),y.params.autoHeight&&y.updateAutoHeight()}else y.updateClasses(),("auto"===y.params.slidesPerView||y.params.slidesPerView>1)&&y.isEnd&&!y.params.centeredSlides?y.slideTo(y.slides.length-1,0,!1,!0):y.slideTo(y.activeIndex,0,!1,!0);y.params.allowSwipeToPrev=t,y.params.allowSwipeToNext=n};var E=["mousedown","mousemove","mouseup"];window.navigator.pointerEnabled?E=["pointerdown","pointermove","pointerup"]:window.navigator.msPointerEnabled&&(E=["MSPointerDown","MSPointerMove","MSPointerUp"]),y.touchEvents={start:y.support.touch||!y.params.simulateTouch?"touchstart":E[0],move:y.support.touch||!y.params.simulateTouch?"touchmove":E[1],end:y.support.touch||!y.params.simulateTouch?"touchend":E[2]},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===y.params.touchEventsTarget?y.container:y.wrapper).addClass("swiper-wp8-"+y.params.direction),y.initEvents=function(e){var n=e?"off":"on",i=e?"removeEventListener":"addEventListener",a="container"===y.params.touchEventsTarget?y.container[0]:y.wrapper[0],o=y.support.touch?a:document,s=y.params.nested?!0:!1;y.browser.ie?(a[i](y.touchEvents.start,y.onTouchStart,!1),o[i](y.touchEvents.move,y.onTouchMove,s),o[i](y.touchEvents.end,y.onTouchEnd,!1)):(y.support.touch&&(a[i](y.touchEvents.start,y.onTouchStart,!1),a[i](y.touchEvents.move,y.onTouchMove,s),a[i](y.touchEvents.end,y.onTouchEnd,!1)),!r.simulateTouch||y.device.ios||y.device.android||(a[i]("mousedown",y.onTouchStart,!1),document[i]("mousemove",y.onTouchMove,s),document[i]("mouseup",y.onTouchEnd,!1))),window[i]("resize",y.onResize),y.params.nextButton&&(t(y.params.nextButton)[n]("click",y.onClickNext),y.params.a11y&&y.a11y&&t(y.params.nextButton)[n]("keydown",y.a11y.onEnterKey)),y.params.prevButton&&(t(y.params.prevButton)[n]("click",y.onClickPrev),y.params.a11y&&y.a11y&&t(y.params.prevButton)[n]("keydown",y.a11y.onEnterKey)),y.params.pagination&&y.params.paginationClickable&&(t(y.paginationContainer)[n]("click","."+y.params.bulletClass,y.onClickIndex),y.params.a11y&&y.a11y&&t(y.paginationContainer)[n]("keydown","."+y.params.bulletClass,y.a11y.onEnterKey)),(y.params.preventClicks||y.params.preventClicksPropagation)&&a[i]("click",y.preventClicks,!0)},y.attachEvents=function(e){y.initEvents()},y.detachEvents=function(){y.initEvents(!0)},y.allowClick=!0,y.preventClicks=function(e){y.allowClick||(y.params.preventClicks&&e.preventDefault(),y.params.preventClicksPropagation&&y.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))},y.onClickNext=function(e){e.preventDefault(),(!y.isEnd||y.params.loop)&&y.slideNext()},y.onClickPrev=function(e){e.preventDefault(),(!y.isBeginning||y.params.loop)&&y.slidePrev()},y.onClickIndex=function(e){e.preventDefault();var n=t(this).index()*y.params.slidesPerGroup;y.params.loop&&(n+=y.loopedSlides),y.slideTo(n)},y.updateClickedSlide=function(e){var n=d(e,"."+y.params.slideClass),i=!1;if(n)for(var r=0;r<y.slides.length;r++)y.slides[r]===n&&(i=!0);if(!n||!i)return y.clickedSlide=void 0,void(y.clickedIndex=void 0);if(y.clickedSlide=n,y.clickedIndex=t(n).index(),y.params.slideToClickedSlide&&void 0!==y.clickedIndex&&y.clickedIndex!==y.activeIndex){var a,o=y.clickedIndex;if(y.params.loop){if(y.animating)return;a=t(y.clickedSlide).attr("data-swiper-slide-index"),y.params.centeredSlides?o<y.loopedSlides-y.params.slidesPerView/2||o>y.slides.length-y.loopedSlides+y.params.slidesPerView/2?(y.fixLoop(),o=y.wrapper.children("."+y.params.slideClass+'[data-swiper-slide-index="'+a+'"]:not(.swiper-slide-duplicate)').eq(0).index(),setTimeout(function(){y.slideTo(o)},0)):y.slideTo(o):o>y.slides.length-y.params.slidesPerView?(y.fixLoop(),o=y.wrapper.children("."+y.params.slideClass+'[data-swiper-slide-index="'+a+'"]:not(.swiper-slide-duplicate)').eq(0).index(),setTimeout(function(){y.slideTo(o)},0)):y.slideTo(o)}else y.slideTo(o)}};var x,D,M,L,C,P,I,k,N,z,O="input, select, textarea, button",A=Date.now(),G=[];y.animating=!1,y.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var V,R;if(y.onTouchStart=function(e){if(e.originalEvent&&(e=e.originalEvent),V="touchstart"===e.type,V||!("which"in e)||3!==e.which){if(y.params.noSwiping&&d(e,"."+y.params.noSwipingClass))return void(y.allowClick=!0);if(!y.params.swipeHandler||d(e,y.params.swipeHandler)){var n=y.touches.currentX="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,i=y.touches.currentY="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY;if(!(y.device.ios&&y.params.iOSEdgeSwipeDetection&&n<=y.params.iOSEdgeSwipeThreshold)){if(x=!0,D=!1,M=!0,C=void 0,R=void 0,y.touches.startX=n,y.touches.startY=i,L=Date.now(),y.allowClick=!0,y.updateContainerSize(),y.swipeDirection=void 0,y.params.threshold>0&&(k=!1),"touchstart"!==e.type){var r=!0;t(e.target).is(O)&&(r=!1),document.activeElement&&t(document.activeElement).is(O)&&document.activeElement.blur(),r&&e.preventDefault()}y.emit("onTouchStart",y,e)}}}},y.onTouchMove=function(e){if(e.originalEvent&&(e=e.originalEvent),!(V&&"mousemove"===e.type||e.preventedByNestedSwiper)){if(y.params.onlyExternal)return y.allowClick=!1,void(x&&(y.touches.startX=y.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,y.touches.startY=y.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,L=Date.now()));if(V&&document.activeElement&&e.target===document.activeElement&&t(e.target).is(O))return D=!0,void(y.allowClick=!1);if(M&&y.emit("onTouchMove",y,e),!(e.targetTouches&&e.targetTouches.length>1)){if(y.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,y.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,"undefined"==typeof C){var n=180*Math.atan2(Math.abs(y.touches.currentY-y.touches.startY),Math.abs(y.touches.currentX-y.touches.startX))/Math.PI;C=s()?n>y.params.touchAngle:90-n>y.params.touchAngle}if(C&&y.emit("onTouchMoveOpposite",y,e),"undefined"==typeof R&&y.browser.ieTouch&&(y.touches.currentX!==y.touches.startX||y.touches.currentY!==y.touches.startY)&&(R=!0),x){if(C)return void(x=!1);if(R||!y.browser.ieTouch){y.allowClick=!1,y.emit("onSliderMove",y,e),e.preventDefault(),y.params.touchMoveStopPropagation&&!y.params.nested&&e.stopPropagation(),D||(r.loop&&y.fixLoop(),I=y.getWrapperTranslate(),y.setWrapperTransition(0),y.animating&&y.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),y.params.autoplay&&y.autoplaying&&(y.params.autoplayDisableOnInteraction?y.stopAutoplay():y.pauseAutoplay()),z=!1,y.params.grabCursor&&(y.container[0].style.cursor="move",y.container[0].style.cursor="-webkit-grabbing",y.container[0].style.cursor="-moz-grabbin",y.container[0].style.cursor="grabbing")),D=!0;var i=y.touches.diff=s()?y.touches.currentX-y.touches.startX:y.touches.currentY-y.touches.startY;i*=y.params.touchRatio,y.rtl&&(i=-i),y.swipeDirection=i>0?"prev":"next",P=i+I;var a=!0;if(i>0&&P>y.minTranslate()?(a=!1,y.params.resistance&&(P=y.minTranslate()-1+Math.pow(-y.minTranslate()+I+i,y.params.resistanceRatio))):0>i&&P<y.maxTranslate()&&(a=!1,y.params.resistance&&(P=y.maxTranslate()+1-Math.pow(y.maxTranslate()-I-i,y.params.resistanceRatio))),a&&(e.preventedByNestedSwiper=!0),!y.params.allowSwipeToNext&&"next"===y.swipeDirection&&I>P&&(P=I),!y.params.allowSwipeToPrev&&"prev"===y.swipeDirection&&P>I&&(P=I),y.params.followFinger){if(y.params.threshold>0){if(!(Math.abs(i)>y.params.threshold||k))return void(P=I);if(!k)return k=!0,y.touches.startX=y.touches.currentX,y.touches.startY=y.touches.currentY,P=I,void(y.touches.diff=s()?y.touches.currentX-y.touches.startX:y.touches.currentY-y.touches.startY)}(y.params.freeMode||y.params.watchSlidesProgress)&&y.updateActiveIndex(),y.params.freeMode&&(0===G.length&&G.push({position:y.touches[s()?"startX":"startY"],time:L}),G.push({position:y.touches[s()?"currentX":"currentY"],time:(new window.Date).getTime()})),y.updateProgress(P),y.setWrapperTranslate(P)}}}}}},y.onTouchEnd=function(e){if(e.originalEvent&&(e=e.originalEvent),M&&y.emit("onTouchEnd",y,e),M=!1,x){y.params.grabCursor&&D&&x&&(y.container[0].style.cursor="move",y.container[0].style.cursor="-webkit-grab",y.container[0].style.cursor="-moz-grab",y.container[0].style.cursor="grab");var n=Date.now(),i=n-L;if(y.allowClick&&(y.updateClickedSlide(e),y.emit("onTap",y,e),300>i&&n-A>300&&(N&&clearTimeout(N),N=setTimeout(function(){y&&(y.params.paginationHide&&y.paginationContainer.length>0&&!t(e.target).hasClass(y.params.bulletClass)&&y.paginationContainer.toggleClass(y.params.paginationHiddenClass),y.emit("onClick",y,e))},300)),300>i&&300>n-A&&(N&&clearTimeout(N),y.emit("onDoubleTap",y,e))),A=Date.now(),setTimeout(function(){y&&(y.allowClick=!0)},0),!x||!D||!y.swipeDirection||0===y.touches.diff||P===I)return void(x=D=!1);x=D=!1;var r;if(r=y.params.followFinger?y.rtl?y.translate:-y.translate:-P,y.params.freeMode){if(r<-y.minTranslate())return void y.slideTo(y.activeIndex);if(r>-y.maxTranslate())return void(y.slides.length<y.snapGrid.length?y.slideTo(y.snapGrid.length-1):y.slideTo(y.slides.length-1));if(y.params.freeModeMomentum){if(G.length>1){var a=G.pop(),o=G.pop(),s=a.position-o.position,l=a.time-o.time;y.velocity=s/l,y.velocity=y.velocity/2,Math.abs(y.velocity)<y.params.freeModeMinimumVelocity&&(y.velocity=0),(l>150||(new window.Date).getTime()-a.time>300)&&(y.velocity=0)}else y.velocity=0;G.length=0;var c=1e3*y.params.freeModeMomentumRatio,d=y.velocity*c,u=y.translate+d;y.rtl&&(u=-u);var p,h=!1,f=20*Math.abs(y.velocity)*y.params.freeModeMomentumBounceRatio;if(u<y.maxTranslate())y.params.freeModeMomentumBounce?(u+y.maxTranslate()<-f&&(u=y.maxTranslate()-f),p=y.maxTranslate(),h=!0,z=!0):u=y.maxTranslate();else if(u>y.minTranslate())y.params.freeModeMomentumBounce?(u-y.minTranslate()>f&&(u=y.minTranslate()+f),p=y.minTranslate(),h=!0,z=!0):u=y.minTranslate();else if(y.params.freeModeSticky){var m,g=0;for(g=0;g<y.snapGrid.length;g+=1)if(y.snapGrid[g]>-u){m=g;break}u=Math.abs(y.snapGrid[m]-u)<Math.abs(y.snapGrid[m-1]-u)||"next"===y.swipeDirection?y.snapGrid[m]:y.snapGrid[m-1],y.rtl||(u=-u)}if(0!==y.velocity)c=y.rtl?Math.abs((-u-y.translate)/y.velocity):Math.abs((u-y.translate)/y.velocity);else if(y.params.freeModeSticky)return void y.slideReset();y.params.freeModeMomentumBounce&&h?(y.updateProgress(p),y.setWrapperTransition(c),y.setWrapperTranslate(u),y.onTransitionStart(),y.animating=!0,y.wrapper.transitionEnd(function(){y&&z&&(y.emit("onMomentumBounce",y),y.setWrapperTransition(y.params.speed),y.setWrapperTranslate(p),y.wrapper.transitionEnd(function(){y&&y.onTransitionEnd()}))})):y.velocity?(y.updateProgress(u),y.setWrapperTransition(c),y.setWrapperTranslate(u),y.onTransitionStart(),y.animating||(y.animating=!0,y.wrapper.transitionEnd(function(){y&&y.onTransitionEnd()}))):y.updateProgress(u),y.updateActiveIndex()}return void((!y.params.freeModeMomentum||i>=y.params.longSwipesMs)&&(y.updateProgress(),y.updateActiveIndex()))}var v,_=0,w=y.slidesSizesGrid[0];for(v=0;v<y.slidesGrid.length;v+=y.params.slidesPerGroup)"undefined"!=typeof y.slidesGrid[v+y.params.slidesPerGroup]?r>=y.slidesGrid[v]&&r<y.slidesGrid[v+y.params.slidesPerGroup]&&(_=v,w=y.slidesGrid[v+y.params.slidesPerGroup]-y.slidesGrid[v]):r>=y.slidesGrid[v]&&(_=v,w=y.slidesGrid[y.slidesGrid.length-1]-y.slidesGrid[y.slidesGrid.length-2]);var T=(r-y.slidesGrid[_])/w;if(i>y.params.longSwipesMs){if(!y.params.longSwipes)return void y.slideTo(y.activeIndex);"next"===y.swipeDirection&&(T>=y.params.longSwipesRatio?y.slideTo(_+y.params.slidesPerGroup):y.slideTo(_)),"prev"===y.swipeDirection&&(T>1-y.params.longSwipesRatio?y.slideTo(_+y.params.slidesPerGroup):y.slideTo(_))}else{if(!y.params.shortSwipes)return void y.slideTo(y.activeIndex);"next"===y.swipeDirection&&y.slideTo(_+y.params.slidesPerGroup),"prev"===y.swipeDirection&&y.slideTo(_)}}},y._slideTo=function(e,t){return y.slideTo(e,t,!0,!0)},y.slideTo=function(e,t,n,i){"undefined"==typeof n&&(n=!0),"undefined"==typeof e&&(e=0),0>e&&(e=0),y.snapIndex=Math.floor(e/y.params.slidesPerGroup),y.snapIndex>=y.snapGrid.length&&(y.snapIndex=y.snapGrid.length-1);var r=-y.snapGrid[y.snapIndex];y.params.autoplay&&y.autoplaying&&(i||!y.params.autoplayDisableOnInteraction?y.pauseAutoplay(t):y.stopAutoplay()),y.updateProgress(r);for(var a=0;a<y.slidesGrid.length;a++)-Math.floor(100*r)>=Math.floor(100*y.slidesGrid[a])&&(e=a);return!y.params.allowSwipeToNext&&r<y.translate&&r<y.minTranslate()?!1:!y.params.allowSwipeToPrev&&r>y.translate&&r>y.maxTranslate()&&(y.activeIndex||0)!==e?!1:("undefined"==typeof t&&(t=y.params.speed),y.previousIndex=y.activeIndex||0,y.activeIndex=e,y.rtl&&-r===y.translate||!y.rtl&&r===y.translate?(y.params.autoHeight&&y.updateAutoHeight(),y.updateClasses(),"slide"!==y.params.effect&&y.setWrapperTranslate(r),!1):(y.updateClasses(),y.onTransitionStart(n),0===t?(y.setWrapperTranslate(r),y.setWrapperTransition(0),y.onTransitionEnd(n)):(y.setWrapperTranslate(r),y.setWrapperTransition(t),y.animating||(y.animating=!0,y.wrapper.transitionEnd(function(){y&&y.onTransitionEnd(n)}))),!0))},y.onTransitionStart=function(e){"undefined"==typeof e&&(e=!0),y.params.autoHeight&&y.updateAutoHeight(),y.lazy&&y.lazy.onTransitionStart(),e&&(y.emit("onTransitionStart",y),y.activeIndex!==y.previousIndex&&(y.emit("onSlideChangeStart",y),y.activeIndex>y.previousIndex?y.emit("onSlideNextStart",y):y.emit("onSlidePrevStart",y)))},y.onTransitionEnd=function(e){y.animating=!1,y.setWrapperTransition(0),"undefined"==typeof e&&(e=!0),y.lazy&&y.lazy.onTransitionEnd(),e&&(y.emit("onTransitionEnd",y),y.activeIndex!==y.previousIndex&&(y.emit("onSlideChangeEnd",y),y.activeIndex>y.previousIndex?y.emit("onSlideNextEnd",y):y.emit("onSlidePrevEnd",y))),y.params.hashnav&&y.hashnav&&y.hashnav.setHash()},y.slideNext=function(e,t,n){if(y.params.loop){if(y.animating)return!1;y.fixLoop();y.container[0].clientLeft;return y.slideTo(y.activeIndex+y.params.slidesPerGroup,t,e,n)}return y.slideTo(y.activeIndex+y.params.slidesPerGroup,t,e,n)},y._slideNext=function(e){return y.slideNext(!0,e,!0)},y.slidePrev=function(e,t,n){if(y.params.loop){if(y.animating)return!1;y.fixLoop();y.container[0].clientLeft;return y.slideTo(y.activeIndex-1,t,e,n)}return y.slideTo(y.activeIndex-1,t,e,n)},y._slidePrev=function(e){return y.slidePrev(!0,e,!0)},y.slideReset=function(e,t,n){return y.slideTo(y.activeIndex,t,e)},y.setWrapperTransition=function(e,t){y.wrapper.transition(e),"slide"!==y.params.effect&&y.effects[y.params.effect]&&y.effects[y.params.effect].setTransition(e),y.params.parallax&&y.parallax&&y.parallax.setTransition(e),y.params.scrollbar&&y.scrollbar&&y.scrollbar.setTransition(e),y.params.control&&y.controller&&y.controller.setTransition(e,t),y.emit("onSetTransition",y,e)},y.setWrapperTranslate=function(e,t,n){var i=0,r=0,a=0;s()?i=y.rtl?-e:e:r=e,y.params.roundLengths&&(i=l(i),r=l(r)),y.params.virtualTranslate||(y.support.transforms3d?y.wrapper.transform("translate3d("+i+"px, "+r+"px, "+a+"px)"):y.wrapper.transform("translate("+i+"px, "+r+"px)")),y.translate=s()?i:r;var o,c=y.maxTranslate()-y.minTranslate();o=0===c?0:(e-y.minTranslate())/c,o!==y.progress&&y.updateProgress(e),
t&&y.updateActiveIndex(),"slide"!==y.params.effect&&y.effects[y.params.effect]&&y.effects[y.params.effect].setTranslate(y.translate),y.params.parallax&&y.parallax&&y.parallax.setTranslate(y.translate),y.params.scrollbar&&y.scrollbar&&y.scrollbar.setTranslate(y.translate),y.params.control&&y.controller&&y.controller.setTranslate(y.translate,n),y.emit("onSetTranslate",y,y.translate)},y.getTranslate=function(e,t){var n,i,r,a;return"undefined"==typeof t&&(t="x"),y.params.virtualTranslate?y.rtl?-y.translate:y.translate:(r=window.getComputedStyle(e,null),window.WebKitCSSMatrix?(i=r.transform||r.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),a=new window.WebKitCSSMatrix("none"===i?"":i)):(a=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),n=a.toString().split(",")),"x"===t&&(i=window.WebKitCSSMatrix?a.m41:16===n.length?parseFloat(n[12]):parseFloat(n[4])),"y"===t&&(i=window.WebKitCSSMatrix?a.m42:16===n.length?parseFloat(n[13]):parseFloat(n[5])),y.rtl&&i&&(i=-i),i||0)},y.getWrapperTranslate=function(e){return"undefined"==typeof e&&(e=s()?"x":"y"),y.getTranslate(y.wrapper[0],e)},y.observers=[],y.initObservers=function(){if(y.params.observeParents)for(var e=y.container.parents(),t=0;t<e.length;t++)u(e[t]);u(y.container[0],{childList:!1}),u(y.wrapper[0],{attributes:!1})},y.disconnectObservers=function(){for(var e=0;e<y.observers.length;e++)y.observers[e].disconnect();y.observers=[]},y.createLoop=function(){var e=y.wrapper.children("."+y.params.slideClass+"."+y.params.slideDuplicateClass);angular.element(e).remove();var n=y.wrapper.children("."+y.params.slideClass);"auto"!==y.params.slidesPerView||y.params.loopedSlides||(y.params.loopedSlides=n.length),y.loopedSlides=parseInt(y.params.loopedSlides||y.params.slidesPerView,10),y.loopedSlides=y.loopedSlides+y.params.loopAdditionalSlides,y.loopedSlides>n.length&&(y.loopedSlides=n.length);var i,r,a,s=[],l=[];for(n.each(function(e,i){var r=t(this);e<y.loopedSlides&&l.push(i),e<n.length&&e>=n.length-y.loopedSlides&&s.push(i),r.attr("data-swiper-slide-index",e)}),i=0;i<l.length;i++)a=angular.element(l[i]).clone().addClass(y.params.slideDuplicateClass),a.removeAttr("ng-transclude"),a.removeAttr("ng-repeat"),r=angular.element(l[i]).scope(),a=o(a)(r),angular.element(y.wrapper).append(a);for(i=s.length-1;i>=0;i--)a=angular.element(s[i]).clone().addClass(y.params.slideDuplicateClass),a.removeAttr("ng-transclude"),a.removeAttr("ng-repeat"),r=angular.element(s[i]).scope(),a=o(a)(r),angular.element(y.wrapper).prepend(a)},y.destroyLoop=function(){y.wrapper.children("."+y.params.slideClass+"."+y.params.slideDuplicateClass).remove(),y.slides.removeAttr("data-swiper-slide-index")},y.fixLoop=function(){var e;y.activeIndex<y.loopedSlides?(e=y.slides.length-3*y.loopedSlides+y.activeIndex,e+=y.loopedSlides,y.slideTo(e,0,!1,!0)):("auto"===y.params.slidesPerView&&y.activeIndex>=2*y.loopedSlides||y.activeIndex>y.slides.length-2*y.params.slidesPerView)&&(e=-y.slides.length+y.activeIndex+y.loopedSlides,e+=y.loopedSlides,y.slideTo(e,0,!1,!0))},y.appendSlide=function(e){if(y.params.loop&&y.destroyLoop(),"object"==typeof e&&e.length)for(var t=0;t<e.length;t++)e[t]&&y.wrapper.append(e[t]);else y.wrapper.append(e);y.params.loop&&y.createLoop(),y.params.observer&&y.support.observer||y.update(!0)},y.prependSlide=function(e){y.params.loop&&y.destroyLoop();var t=y.activeIndex+1;if("object"==typeof e&&e.length){for(var n=0;n<e.length;n++)e[n]&&y.wrapper.prepend(e[n]);t=y.activeIndex+e.length}else y.wrapper.prepend(e);y.params.loop&&y.createLoop(),y.params.observer&&y.support.observer||y.update(!0),y.slideTo(t,0,!1)},y.removeSlide=function(e){y.params.loop&&(y.destroyLoop(),y.slides=y.wrapper.children("."+y.params.slideClass));var t,n=y.activeIndex;if("object"==typeof e&&e.length){for(var i=0;i<e.length;i++)t=e[i],y.slides[t]&&y.slides.eq(t).remove(),n>t&&n--;n=Math.max(n,0)}else t=e,y.slides[t]&&y.slides.eq(t).remove(),n>t&&n--,n=Math.max(n,0);y.params.loop&&y.createLoop(),y.params.observer&&y.support.observer||y.update(!0),y.params.loop?y.slideTo(n+y.loopedSlides,0,!1):y.slideTo(n,0,!1)},y.removeAllSlides=function(){for(var e=[],t=0;t<y.slides.length;t++)e.push(t);y.removeSlide(e)},y.effects={fade:{setTranslate:function(){for(var e=0;e<y.slides.length;e++){var t=y.slides.eq(e),n=t[0].swiperSlideOffset,i=-n;y.params.virtualTranslate||(i-=y.translate);var r=0;s()||(r=i,i=0);var a=y.params.fade.crossFade?Math.max(1-Math.abs(t[0].progress),0):1+Math.min(Math.max(t[0].progress,-1),0);t.css({opacity:a}).transform("translate3d("+i+"px, "+r+"px, 0px)")}},setTransition:function(e){if(y.slides.transition(e),y.params.virtualTranslate&&0!==e){var t=!1;y.slides.transitionEnd(function(){if(!t&&y){t=!0,y.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],n=0;n<e.length;n++)y.wrapper.trigger(e[n])}})}}},cube:{setTranslate:function(){var e,n=0;y.params.cube.shadow&&(s()?(e=y.wrapper.find(".swiper-cube-shadow"),0===e.length&&(e=t('<div class="swiper-cube-shadow"></div>'),y.wrapper.append(e)),e.css({height:y.width+"px"})):(e=y.container.find(".swiper-cube-shadow"),0===e.length&&(e=t('<div class="swiper-cube-shadow"></div>'),y.container.append(e))));for(var i=0;i<y.slides.length;i++){var r=y.slides.eq(i),a=90*i,o=Math.floor(a/360);y.rtl&&(a=-a,o=Math.floor(-a/360));var l=Math.max(Math.min(r[0].progress,1),-1),c=0,d=0,u=0;i%4===0?(c=4*-o*y.size,u=0):(i-1)%4===0?(c=0,u=4*-o*y.size):(i-2)%4===0?(c=y.size+4*o*y.size,u=y.size):(i-3)%4===0&&(c=-y.size,u=3*y.size+4*y.size*o),y.rtl&&(c=-c),s()||(d=c,c=0);var p="rotateX("+(s()?0:-a)+"deg) rotateY("+(s()?a:0)+"deg) translate3d("+c+"px, "+d+"px, "+u+"px)";if(1>=l&&l>-1&&(n=90*i+90*l,y.rtl&&(n=90*-i-90*l)),r.transform(p),y.params.cube.slideShadows){var h=s()?r.find(".swiper-slide-shadow-left"):r.find(".swiper-slide-shadow-top"),f=s()?r.find(".swiper-slide-shadow-right"):r.find(".swiper-slide-shadow-bottom");0===h.length&&(h=t('<div class="swiper-slide-shadow-'+(s()?"left":"top")+'"></div>'),r.append(h)),0===f.length&&(f=t('<div class="swiper-slide-shadow-'+(s()?"right":"bottom")+'"></div>'),r.append(f));r[0].progress;h.length&&(h[0].style.opacity=-r[0].progress),f.length&&(f[0].style.opacity=r[0].progress)}}if(y.wrapper.css({"-webkit-transform-origin":"50% 50% -"+y.size/2+"px","-moz-transform-origin":"50% 50% -"+y.size/2+"px","-ms-transform-origin":"50% 50% -"+y.size/2+"px","transform-origin":"50% 50% -"+y.size/2+"px"}),y.params.cube.shadow)if(s())e.transform("translate3d(0px, "+(y.width/2+y.params.cube.shadowOffset)+"px, "+-y.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+y.params.cube.shadowScale+")");else{var m=Math.abs(n)-90*Math.floor(Math.abs(n)/90),g=1.5-(Math.sin(2*m*Math.PI/360)/2+Math.cos(2*m*Math.PI/360)/2),v=y.params.cube.shadowScale,_=y.params.cube.shadowScale/g,w=y.params.cube.shadowOffset;e.transform("scale3d("+v+", 1, "+_+") translate3d(0px, "+(y.height/2+w)+"px, "+-y.height/2/_+"px) rotateX(-90deg)")}var T=y.isSafari||y.isUiWebView?-y.size/2:0;y.wrapper.transform("translate3d(0px,0,"+T+"px) rotateX("+(s()?0:n)+"deg) rotateY("+(s()?-n:0)+"deg)")},setTransition:function(e){y.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),y.params.cube.shadow&&!s()&&y.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){for(var e=y.translate,n=s()?-e+y.width/2:-e+y.height/2,i=s()?y.params.coverflow.rotate:-y.params.coverflow.rotate,r=y.params.coverflow.depth,a=0,o=y.slides.length;o>a;a++){var l=y.slides.eq(a),c=y.slidesSizesGrid[a],d=l[0].swiperSlideOffset,u=(n-d-c/2)/c*y.params.coverflow.modifier,p=s()?i*u:0,h=s()?0:i*u,f=-r*Math.abs(u),m=s()?0:y.params.coverflow.stretch*u,g=s()?y.params.coverflow.stretch*u:0;Math.abs(g)<.001&&(g=0),Math.abs(m)<.001&&(m=0),Math.abs(f)<.001&&(f=0),Math.abs(p)<.001&&(p=0),Math.abs(h)<.001&&(h=0);var v="translate3d("+g+"px,"+m+"px,"+f+"px)  rotateX("+h+"deg) rotateY("+p+"deg)";if(l.transform(v),l[0].style.zIndex=-Math.abs(Math.round(u))+1,y.params.coverflow.slideShadows){var _=s()?l.find(".swiper-slide-shadow-left"):l.find(".swiper-slide-shadow-top"),w=s()?l.find(".swiper-slide-shadow-right"):l.find(".swiper-slide-shadow-bottom");0===_.length&&(_=t('<div class="swiper-slide-shadow-'+(s()?"left":"top")+'"></div>'),l.append(_)),0===w.length&&(w=t('<div class="swiper-slide-shadow-'+(s()?"right":"bottom")+'"></div>'),l.append(w)),_.length&&(_[0].style.opacity=u>0?u:0),w.length&&(w[0].style.opacity=-u>0?-u:0)}}if(y.browser.ie){var T=y.wrapper[0].style;T.perspectiveOrigin=n+"px 50%"}},setTransition:function(e){y.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}},y.lazy={initialImageLoaded:!1,loadImageInSlide:function(e,n){if("undefined"!=typeof e&&("undefined"==typeof n&&(n=!0),0!==y.slides.length)){var i=y.slides.eq(e),r=i.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");!i.hasClass("swiper-lazy")||i.hasClass("swiper-lazy-loaded")||i.hasClass("swiper-lazy-loading")||(r=r.add(i[0])),0!==r.length&&r.each(function(){var e=t(this);e.addClass("swiper-lazy-loading");var r=e.attr("data-background"),a=e.attr("data-src"),o=e.attr("data-srcset");y.loadImage(e[0],a||r,o,!1,function(){if(r?(e.css("background-image","url("+r+")"),e.removeAttr("data-background")):(o&&(e.attr("srcset",o),e.removeAttr("data-srcset")),a&&(e.attr("src",a),e.removeAttr("data-src"))),e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"),i.find(".swiper-lazy-preloader, .preloader").remove(),y.params.loop&&n){var t=i.attr("data-swiper-slide-index");if(i.hasClass(y.params.slideDuplicateClass)){var s=y.wrapper.children('[data-swiper-slide-index="'+t+'"]:not(.'+y.params.slideDuplicateClass+")");y.lazy.loadImageInSlide(s.index(),!1)}else{var l=y.wrapper.children("."+y.params.slideDuplicateClass+'[data-swiper-slide-index="'+t+'"]');y.lazy.loadImageInSlide(l.index(),!1)}}y.emit("onLazyImageReady",y,i[0],e[0])}),y.emit("onLazyImageLoad",y,i[0],e[0])})}},load:function(){var e;if(y.params.watchSlidesVisibility)y.wrapper.children("."+y.params.slideVisibleClass).each(function(){y.lazy.loadImageInSlide(t(this).index())});else if(y.params.slidesPerView>1)for(e=y.activeIndex;e<y.activeIndex+y.params.slidesPerView;e++)y.slides[e]&&y.lazy.loadImageInSlide(e);else y.lazy.loadImageInSlide(y.activeIndex);if(y.params.lazyLoadingInPrevNext)if(y.params.slidesPerView>1){for(e=y.activeIndex+y.params.slidesPerView;e<y.activeIndex+y.params.slidesPerView+y.params.slidesPerView;e++)y.slides[e]&&y.lazy.loadImageInSlide(e);for(e=y.activeIndex-y.params.slidesPerView;e<y.activeIndex;e++)y.slides[e]&&y.lazy.loadImageInSlide(e)}else{var n=y.wrapper.children("."+y.params.slideNextClass);n.length>0&&y.lazy.loadImageInSlide(n.index());var i=y.wrapper.children("."+y.params.slidePrevClass);i.length>0&&y.lazy.loadImageInSlide(i.index())}},onTransitionStart:function(){y.params.lazyLoading&&(y.params.lazyLoadingOnTransitionStart||!y.params.lazyLoadingOnTransitionStart&&!y.lazy.initialImageLoaded)&&y.lazy.load()},onTransitionEnd:function(){y.params.lazyLoading&&!y.params.lazyLoadingOnTransitionStart&&y.lazy.load()}},y.scrollbar={isTouched:!1,setDragPosition:function(e){var t=y.scrollbar,n=s()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY,i=n-t.track.offset()[s()?"left":"top"]-t.dragSize/2,r=-y.minTranslate()*t.moveDivider,a=-y.maxTranslate()*t.moveDivider;r>i?i=r:i>a&&(i=a),i=-i/t.moveDivider,y.updateProgress(i),y.setWrapperTranslate(i,!0)},dragStart:function(e){var t=y.scrollbar;t.isTouched=!0,e.preventDefault(),e.stopPropagation(),t.setDragPosition(e),clearTimeout(t.dragTimeout),t.track.transition(0),y.params.scrollbarHide&&t.track.css("opacity",1),y.wrapper.transition(100),t.drag.transition(100),y.emit("onScrollbarDragStart",y)},dragMove:function(e){var t=y.scrollbar;t.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,t.setDragPosition(e),y.wrapper.transition(0),t.track.transition(0),t.drag.transition(0),y.emit("onScrollbarDragMove",y))},dragEnd:function(e){var t=y.scrollbar;t.isTouched&&(t.isTouched=!1,y.params.scrollbarHide&&(clearTimeout(t.dragTimeout),t.dragTimeout=setTimeout(function(){t.track.css("opacity",0),t.track.transition(400)},1e3)),y.emit("onScrollbarDragEnd",y),y.params.scrollbarSnapOnRelease&&y.slideReset())},enableDraggable:function(){var e=y.scrollbar,n=y.support.touch?e.track:document;t(e.track).on(y.touchEvents.start,e.dragStart),t(n).on(y.touchEvents.move,e.dragMove),t(n).on(y.touchEvents.end,e.dragEnd)},disableDraggable:function(){var e=y.scrollbar,n=y.support.touch?e.track:document;t(e.track).off(y.touchEvents.start,e.dragStart),t(n).off(y.touchEvents.move,e.dragMove),t(n).off(y.touchEvents.end,e.dragEnd)},set:function(){if(y.params.scrollbar){var e=y.scrollbar;e.track=t(y.params.scrollbar),e.drag=e.track.find(".swiper-scrollbar-drag"),0===e.drag.length&&(e.drag=t('<div class="swiper-scrollbar-drag"></div>'),e.track.append(e.drag)),e.drag[0].style.width="",e.drag[0].style.height="",e.trackSize=s()?e.track[0].offsetWidth:e.track[0].offsetHeight,e.divider=y.size/y.virtualSize,e.moveDivider=e.divider*(e.trackSize/y.size),e.dragSize=e.trackSize*e.divider,s()?e.drag[0].style.width=e.dragSize+"px":e.drag[0].style.height=e.dragSize+"px",e.divider>=1?e.track[0].style.display="none":e.track[0].style.display="",y.params.scrollbarHide&&(e.track[0].style.opacity=0)}},setTranslate:function(){if(y.params.scrollbar){var e,t=y.scrollbar,n=(y.translate||0,t.dragSize);e=(t.trackSize-t.dragSize)*y.progress,y.rtl&&s()?(e=-e,e>0?(n=t.dragSize-e,e=0):-e+t.dragSize>t.trackSize&&(n=t.trackSize+e)):0>e?(n=t.dragSize+e,e=0):e+t.dragSize>t.trackSize&&(n=t.trackSize-e),s()?(y.support.transforms3d?t.drag.transform("translate3d("+e+"px, 0, 0)"):t.drag.transform("translateX("+e+"px)"),t.drag[0].style.width=n+"px"):(y.support.transforms3d?t.drag.transform("translate3d(0px, "+e+"px, 0)"):t.drag.transform("translateY("+e+"px)"),t.drag[0].style.height=n+"px"),y.params.scrollbarHide&&(clearTimeout(t.timeout),t.track[0].style.opacity=1,t.timeout=setTimeout(function(){t.track[0].style.opacity=0,t.track.transition(400)},1e3))}},setTransition:function(e){y.params.scrollbar&&y.scrollbar.drag.transition(e)}},y.controller={LinearSpline:function(e,t){this.x=e,this.y=t,this.lastIndex=e.length-1;var n,i;this.x.length;this.interpolate=function(e){return e?(i=r(this.x,e),n=i-1,(e-this.x[n])*(this.y[i]-this.y[n])/(this.x[i]-this.x[n])+this.y[n]):0};var r=function(){var e,t,n;return function(i,r){for(t=-1,e=i.length;e-t>1;)i[n=e+t>>1]<=r?t=n:e=n;return e}}()},getInterpolateFunction:function(e){y.controller.spline||(y.controller.spline=y.params.loop?new y.controller.LinearSpline(y.slidesGrid,e.slidesGrid):new y.controller.LinearSpline(y.snapGrid,e.snapGrid))},setTranslate:function(e,t){function i(t){e=t.rtl&&"horizontal"===t.params.direction?-y.translate:y.translate,"slide"===y.params.controlBy&&(y.controller.getInterpolateFunction(t),a=-y.controller.spline.interpolate(-e)),a&&"container"!==y.params.controlBy||(r=(t.maxTranslate()-t.minTranslate())/(y.maxTranslate()-y.minTranslate()),a=(e-y.minTranslate())*r+t.minTranslate()),y.params.controlInverse&&(a=t.maxTranslate()-a),t.updateProgress(a),t.setWrapperTranslate(a,!1,y),t.updateActiveIndex()}var r,a,o=y.params.control;if(y.isArray(o))for(var s=0;s<o.length;s++)o[s]!==t&&o[s]instanceof n&&i(o[s]);else o instanceof n&&t!==o&&i(o)},setTransition:function(e,t){function i(t){t.setWrapperTransition(e,y),0!==e&&(t.onTransitionStart(),t.wrapper.transitionEnd(function(){a&&(t.params.loop&&"slide"===y.params.controlBy&&t.fixLoop(),t.onTransitionEnd())}))}var r,a=y.params.control;if(y.isArray(a))for(r=0;r<a.length;r++)a[r]!==t&&a[r]instanceof n&&i(a[r]);else a instanceof n&&t!==a&&i(a)}},y.hashnav={init:function(){if(y.params.hashnav){y.hashnav.initialized=!0;var e=document.location.hash.replace("#","");if(e)for(var t=0,n=0,i=y.slides.length;i>n;n++){var r=y.slides.eq(n),a=r.attr("data-hash");if(a===e&&!r.hasClass(y.params.slideDuplicateClass)){var o=r.index();y.slideTo(o,t,y.params.runCallbacksOnInit,!0)}}}},setHash:function(){y.hashnav.initialized&&y.params.hashnav&&(document.location.hash=y.slides.eq(y.activeIndex).attr("data-hash")||"")}},y.disableKeyboardControl=function(){y.params.keyboardControl=!1,t(document).off("keydown",p)},y.enableKeyboardControl=function(){y.params.keyboardControl=!0,t(document).on("keydown",p)},y.mousewheel={event:!1,lastScrollTime:(new window.Date).getTime()},y.params.mousewheelControl){try{new window.WheelEvent("wheel"),y.mousewheel.event="wheel"}catch(H){}y.mousewheel.event||void 0===document.onmousewheel||(y.mousewheel.event="mousewheel"),y.mousewheel.event||(y.mousewheel.event="DOMMouseScroll")}y.disableMousewheelControl=function(){return y.mousewheel.event?(y.container.off(y.mousewheel.event,h),!0):!1},y.enableMousewheelControl=function(){return y.mousewheel.event?(y.container.on(y.mousewheel.event,h),!0):!1},y.parallax={setTranslate:function(){y.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){f(this,y.progress)}),y.slides.each(function(){var e=t(this);e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var t=Math.min(Math.max(e[0].progress,-1),1);f(this,t)})})},setTransition:function(e){"undefined"==typeof e&&(e=y.params.speed),y.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var n=t(this),i=parseInt(n.attr("data-swiper-parallax-duration"),10)||e;0===e&&(i=0),n.transition(i)})}},y._plugins=[];for(var Y in y.plugins){var X=y.plugins[Y](y,y.params[Y]);X&&y._plugins.push(X)}return y.callPlugins=function(e){for(var t=0;t<y._plugins.length;t++)e in y._plugins[t]&&y._plugins[t][e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},y.emitterEventListeners={},y.emit=function(e){y.params[e]&&y.params[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);var t;if(y.emitterEventListeners[e])for(t=0;t<y.emitterEventListeners[e].length;t++)y.emitterEventListeners[e][t](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);y.callPlugins&&y.callPlugins(e,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},y.on=function(e,t){return e=m(e),y.emitterEventListeners[e]||(y.emitterEventListeners[e]=[]),y.emitterEventListeners[e].push(t),y},y.off=function(e,t){var n;if(e=m(e),"undefined"==typeof t)return y.emitterEventListeners[e]=[],y;if(y.emitterEventListeners[e]&&0!==y.emitterEventListeners[e].length){for(n=0;n<y.emitterEventListeners[e].length;n++)y.emitterEventListeners[e][n]===t&&y.emitterEventListeners[e].splice(n,1);return y}},y.once=function(e,t){e=m(e);var n=function(){t(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),y.off(e,n)};return y.on(e,n),y},y.a11y={makeFocusable:function(e){return e.attr("tabIndex","0"),e},addRole:function(e,t){return e.attr("role",t),e},addLabel:function(e,t){return e.attr("aria-label",t),e},disable:function(e){return e.attr("aria-disabled",!0),e},enable:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){13===e.keyCode&&(t(e.target).is(y.params.nextButton)?(y.onClickNext(e),y.isEnd?y.a11y.notify(y.params.lastSlideMessage):y.a11y.notify(y.params.nextSlideMessage)):t(e.target).is(y.params.prevButton)&&(y.onClickPrev(e),y.isBeginning?y.a11y.notify(y.params.firstSlideMessage):y.a11y.notify(y.params.prevSlideMessage)),t(e.target).is("."+y.params.bulletClass)&&t(e.target)[0].click())},liveRegion:t('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),notify:function(e){var t=y.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},init:function(){if(y.params.nextButton){var e=t(y.params.nextButton);y.a11y.makeFocusable(e),y.a11y.addRole(e,"button"),y.a11y.addLabel(e,y.params.nextSlideMessage)}if(y.params.prevButton){var n=t(y.params.prevButton);y.a11y.makeFocusable(n),y.a11y.addRole(n,"button"),y.a11y.addLabel(n,y.params.prevSlideMessage)}t(y.container).append(y.a11y.liveRegion)},initPagination:function(){y.params.pagination&&y.params.paginationClickable&&y.bullets&&y.bullets.length&&y.bullets.each(function(){var e=t(this);y.a11y.makeFocusable(e),y.a11y.addRole(e,"button"),y.a11y.addLabel(e,y.params.paginationBulletMessage.replace(/{{index}}/,e.index()+1))})},destroy:function(){y.a11y.liveRegion&&y.a11y.liveRegion.length>0&&y.a11y.liveRegion.remove()}},y.init=function(){y.params.loop&&y.createLoop(),y.updateContainerSize(),y.updateSlidesSize(),y.updatePagination(),y.params.scrollbar&&y.scrollbar&&(y.scrollbar.set(),y.params.scrollbarDraggable&&y.scrollbar.enableDraggable()),"slide"!==y.params.effect&&y.effects[y.params.effect]&&(y.params.loop||y.updateProgress(),y.effects[y.params.effect].setTranslate()),y.params.loop?y.slideTo(y.params.initialSlide+y.loopedSlides,0,y.params.runCallbacksOnInit):(y.slideTo(y.params.initialSlide,0,y.params.runCallbacksOnInit),0===y.params.initialSlide&&(y.parallax&&y.params.parallax&&y.parallax.setTranslate(),y.lazy&&y.params.lazyLoading&&(y.lazy.load(),y.lazy.initialImageLoaded=!0))),y.attachEvents(),y.params.observer&&y.support.observer&&y.initObservers(),y.params.preloadImages&&!y.params.lazyLoading&&y.preloadImages(),y.params.autoplay&&y.startAutoplay(),y.params.keyboardControl&&y.enableKeyboardControl&&y.enableKeyboardControl(),y.params.mousewheelControl&&y.enableMousewheelControl&&y.enableMousewheelControl(),y.params.hashnav&&y.hashnav&&y.hashnav.init(),y.params.a11y&&y.a11y&&y.a11y.init(),y.emit("onInit",y)},y.cleanupStyles=function(){y.container.removeClass(y.classNames.join(" ")).removeAttr("style"),y.wrapper.removeAttr("style"),y.slides&&y.slides.length&&y.slides.removeClass([y.params.slideVisibleClass,y.params.slideActiveClass,y.params.slideNextClass,y.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),y.paginationContainer&&y.paginationContainer.length&&y.paginationContainer.removeClass(y.params.paginationHiddenClass),y.bullets&&y.bullets.length&&y.bullets.removeClass(y.params.bulletActiveClass),y.params.prevButton&&t(y.params.prevButton).removeClass(y.params.buttonDisabledClass),y.params.nextButton&&t(y.params.nextButton).removeClass(y.params.buttonDisabledClass),y.params.scrollbar&&y.scrollbar&&(y.scrollbar.track&&y.scrollbar.track.length&&y.scrollbar.track.removeAttr("style"),y.scrollbar.drag&&y.scrollbar.drag.length&&y.scrollbar.drag.removeAttr("style"))},y.destroy=function(e,t){y.detachEvents(),y.stopAutoplay(),y.params.scrollbar&&y.scrollbar&&y.params.scrollbarDraggable&&y.scrollbar.disableDraggable(),y.params.loop&&y.destroyLoop(),t&&y.cleanupStyles(),y.disconnectObservers(),y.params.keyboardControl&&y.disableKeyboardControl&&y.disableKeyboardControl(),y.params.mousewheelControl&&y.disableMousewheelControl&&y.disableMousewheelControl(),y.params.a11y&&y.a11y&&y.a11y.destroy(),y.emit("onDestroy"),e!==!1&&(y=null)},y.init(),y}};n.prototype={isSafari:function(){var e=navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1},device:function(){var e=navigator.userAgent,t=e.match(/(Android);?[\s\/]+([\d.]+)?/),n=e.match(/(iPad).*OS\s([\d_]+)/),i=e.match(/(iPod)(.*OS\s([\d_]+))?/),r=!n&&e.match(/(iPhone\sOS)\s([\d_]+)/);return{ios:n||r||i,android:t}}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=document.createElement("div").style,t="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),n=0;n<t.length;n++)if(t[n]in e)return!0}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window}()},plugins:{}};for(var i=(function(){var e=function(e){var t=this,n=0;for(n=0;n<e.length;n++)t[n]=e[n];return t.length=e.length,this},t=function(t,n){var i=[],r=0;if(t&&!n&&t instanceof e)return t;if(t)if("string"==typeof t){var a,o,s=t.trim();if(s.indexOf("<")>=0&&s.indexOf(">")>=0){var l="div";for(0===s.indexOf("<li")&&(l="ul"),0===s.indexOf("<tr")&&(l="tbody"),(0===s.indexOf("<td")||0===s.indexOf("<th"))&&(l="tr"),0===s.indexOf("<tbody")&&(l="table"),0===s.indexOf("<option")&&(l="select"),o=document.createElement(l),o.innerHTML=t,r=0;r<o.childNodes.length;r++)i.push(o.childNodes[r])}else for(a=n||"#"!==t[0]||t.match(/[ .<>:~]/)?(n||document).querySelectorAll(t):[document.getElementById(t.split("#")[1])],r=0;r<a.length;r++)a[r]&&i.push(a[r])}else if(t.nodeType||t===window||t===document)i.push(t);else if(t.length>0&&t[0].nodeType)for(r=0;r<t.length;r++)i.push(t[r]);return new e(i)};return e.prototype={addClass:function(e){if("undefined"==typeof e)return this;for(var t=e.split(" "),n=0;n<t.length;n++)for(var i=0;i<this.length;i++)this[i].classList.add(t[n]);return this},removeClass:function(e){for(var t=e.split(" "),n=0;n<t.length;n++)for(var i=0;i<this.length;i++)this[i].classList.remove(t[n]);return this},hasClass:function(e){return this[0]?this[0].classList.contains(e):!1},toggleClass:function(e){for(var t=e.split(" "),n=0;n<t.length;n++)for(var i=0;i<this.length;i++)this[i].classList.toggle(t[n]);return this},attr:function(e,t){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var n=0;n<this.length;n++)if(2===arguments.length)this[n].setAttribute(e,t);else for(var i in e)this[n][i]=e[i],this[n].setAttribute(i,e[i]);return this},removeAttr:function(e){for(var t=0;t<this.length;t++)this[t].removeAttribute(e);return this},data:function(e,t){if("undefined"==typeof t){if(this[0]){var n=this[0].getAttribute("data-"+e);return n?n:this[0].dom7ElementDataStorage&&e in this[0].dom7ElementDataStorage?this[0].dom7ElementDataStorage[e]:void 0}return void 0}for(var i=0;i<this.length;i++){var r=this[i];r.dom7ElementDataStorage||(r.dom7ElementDataStorage={}),r.dom7ElementDataStorage[e]=t}return this},transform:function(e){for(var t=0;t<this.length;t++){var n=this[t].style;n.webkitTransform=n.MsTransform=n.msTransform=n.MozTransform=n.OTransform=n.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var t=0;t<this.length;t++){var n=this[t].style;n.webkitTransitionDuration=n.MsTransitionDuration=n.msTransitionDuration=n.MozTransitionDuration=n.OTransitionDuration=n.transitionDuration=e}return this},on:function(e,n,i,r){function a(e){var r=e.target;if(t(r).is(n))i.call(r,e);else for(var a=t(r).parents(),o=0;o<a.length;o++)t(a[o]).is(n)&&i.call(a[o],e)}var o,s,l=e.split(" ");for(o=0;o<this.length;o++)if("function"==typeof n||n===!1)for("function"==typeof n&&(i=arguments[1],r=arguments[2]||!1),s=0;s<l.length;s++)this[o].addEventListener(l[s],i,r);else for(s=0;s<l.length;s++)this[o].dom7LiveListeners||(this[o].dom7LiveListeners=[]),this[o].dom7LiveListeners.push({listener:i,liveListener:a}),this[o].addEventListener(l[s],a,r);return this},off:function(e,t,n,i){for(var r=e.split(" "),a=0;a<r.length;a++)for(var o=0;o<this.length;o++)if("function"==typeof t||t===!1)"function"==typeof t&&(n=arguments[1],i=arguments[2]||!1),this[o].removeEventListener(r[a],n,i);else if(this[o].dom7LiveListeners)for(var s=0;s<this[o].dom7LiveListeners.length;s++)this[o].dom7LiveListeners[s].listener===n&&this[o].removeEventListener(r[a],this[o].dom7LiveListeners[s].liveListener,i);return this},once:function(e,t,n,i){function r(o){n(o),a.off(e,t,r,i)}var a=this;"function"==typeof t&&(t=!1,n=arguments[1],i=arguments[2]),a.on(e,t,r,i)},trigger:function(e,t){for(var n=0;n<this.length;n++){var i;try{i=new window.CustomEvent(e,{detail:t,bubbles:!0,cancelable:!0})}catch(r){i=document.createEvent("Event"),i.initEvent(e,!0,!0),i.detail=t}this[n].dispatchEvent(i)}return this},transitionEnd:function(e){function t(a){if(a.target===this)for(e.call(this,a),n=0;n<i.length;n++)r.off(i[n],t)}var n,i=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],r=this;if(e)for(n=0;n<i.length;n++)r.on(i[n],t);return this},width:function(){return this[0]===window?window.innerWidth:this.length>0?parseFloat(this.css("width")):null},outerWidth:function(e){return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null},height:function(){return this[0]===window?window.innerHeight:this.length>0?parseFloat(this.css("height")):null},outerHeight:function(e){return this.length>0?e?this[0].offsetHeight+parseFloat(this.css("margin-top"))+parseFloat(this.css("margin-bottom")):this[0].offsetHeight:null},offset:function(){if(this.length>0){var e=this[0],t=e.getBoundingClientRect(),n=document.body,i=e.clientTop||n.clientTop||0,r=e.clientLeft||n.clientLeft||0,a=window.pageYOffset||e.scrollTop,o=window.pageXOffset||e.scrollLeft;return{top:t.top+a-i,left:t.left+o-r}}return null},css:function(e,t){var n;if(1===arguments.length){if("string"!=typeof e){for(n=0;n<this.length;n++)for(var i in e)this[n].style[i]=e[i];return this}if(this[0])return window.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(n=0;n<this.length;n++)this[n].style[e]=t;return this}return this},each:function(e){for(var t=0;t<this.length;t++)e.call(this[t],t,this[t]);return this},html:function(e){if("undefined"==typeof e)return this[0]?this[0].innerHTML:void 0;for(var t=0;t<this.length;t++)this[t].innerHTML=e;return this},is:function(n){if(!this[0])return!1;var i,r;if("string"==typeof n){var a=this[0];if(a===document)return n===document;if(a===window)return n===window;if(a.matches)return a.matches(n);if(a.webkitMatchesSelector)return a.webkitMatchesSelector(n);if(a.mozMatchesSelector)return a.mozMatchesSelector(n);if(a.msMatchesSelector)return a.msMatchesSelector(n);for(i=t(n),r=0;r<i.length;r++)if(i[r]===this[0])return!0;return!1}if(n===document)return this[0]===document;if(n===window)return this[0]===window;if(n.nodeType||n instanceof e){for(i=n.nodeType?[n]:n,r=0;r<i.length;r++)if(i[r]===this[0])return!0;return!1}return!1},index:function(){if(this[0]){for(var e=this[0],t=0;null!==(e=e.previousSibling);)1===e.nodeType&&t++;return t}return void 0},eq:function(t){if("undefined"==typeof t)return this;var n,i=this.length;return t>i-1?new e([]):0>t?(n=i+t,new e(0>n?[]:[this[n]])):new e([this[t]])},append:function(t){var n,i;for(n=0;n<this.length;n++)if("string"==typeof t){var r=document.createElement("div");for(r.innerHTML=t;r.firstChild;)this[n].appendChild(r.firstChild)}else if(t instanceof e)for(i=0;i<t.length;i++)this[n].appendChild(t[i]);else this[n].appendChild(t);return this},prepend:function(t){var n,i;for(n=0;n<this.length;n++)if("string"==typeof t){var r=document.createElement("div");for(r.innerHTML=t,i=r.childNodes.length-1;i>=0;i--)this[n].insertBefore(r.childNodes[i],this[n].childNodes[0])}else if(t instanceof e)for(i=0;i<t.length;i++)this[n].insertBefore(t[i],this[n].childNodes[0]);else this[n].insertBefore(t,this[n].childNodes[0]);
return this},insertBefore:function(e){for(var n=t(e),i=0;i<this.length;i++)if(1===n.length)n[0].parentNode.insertBefore(this[i],n[0]);else if(n.length>1)for(var r=0;r<n.length;r++)n[r].parentNode.insertBefore(this[i].cloneNode(!0),n[r])},insertAfter:function(e){for(var n=t(e),i=0;i<this.length;i++)if(1===n.length)n[0].parentNode.insertBefore(this[i],n[0].nextSibling);else if(n.length>1)for(var r=0;r<n.length;r++)n[r].parentNode.insertBefore(this[i].cloneNode(!0),n[r].nextSibling)},next:function(n){return new e(this.length>0?n?this[0].nextElementSibling&&t(this[0].nextElementSibling).is(n)?[this[0].nextElementSibling]:[]:this[0].nextElementSibling?[this[0].nextElementSibling]:[]:[])},nextAll:function(n){var i=[],r=this[0];if(!r)return new e([]);for(;r.nextElementSibling;){var a=r.nextElementSibling;n?t(a).is(n)&&i.push(a):i.push(a),r=a}return new e(i)},prev:function(n){return new e(this.length>0?n?this[0].previousElementSibling&&t(this[0].previousElementSibling).is(n)?[this[0].previousElementSibling]:[]:this[0].previousElementSibling?[this[0].previousElementSibling]:[]:[])},prevAll:function(n){var i=[],r=this[0];if(!r)return new e([]);for(;r.previousElementSibling;){var a=r.previousElementSibling;n?t(a).is(n)&&i.push(a):i.push(a),r=a}return new e(i)},parent:function(e){for(var n=[],i=0;i<this.length;i++)e?t(this[i].parentNode).is(e)&&n.push(this[i].parentNode):n.push(this[i].parentNode);return t(t.unique(n))},parents:function(e){for(var n=[],i=0;i<this.length;i++)for(var r=this[i].parentNode;r;)e?t(r).is(e)&&n.push(r):n.push(r),r=r.parentNode;return t(t.unique(n))},find:function(t){for(var n=[],i=0;i<this.length;i++)for(var r=this[i].querySelectorAll(t),a=0;a<r.length;a++)n.push(r[a]);return new e(n)},children:function(n){for(var i=[],r=0;r<this.length;r++)for(var a=this[r].childNodes,o=0;o<a.length;o++)n?1===a[o].nodeType&&t(a[o]).is(n)&&i.push(a[o]):1===a[o].nodeType&&i.push(a[o]);return new e(t.unique(i))},remove:function(){for(var e=0;e<this.length;e++)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){var e,n,i=this;for(e=0;e<arguments.length;e++){var r=t(arguments[e]);for(n=0;n<r.length;n++)i[i.length]=r[n],i.length++}return i}},t.fn=e.prototype,t.unique=function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t},t}()),r=["jQuery","Zepto","Dom7"],a=0;a<r.length;a++)window[r[a]]&&e(window[r[a]]);var o;o="undefined"==typeof i?window.Dom7||window.Zepto||window.jQuery:i,o&&("transitionEnd"in o.fn||(o.fn.transitionEnd=function(e){function t(a){if(a.target===this)for(e.call(this,a),n=0;n<i.length;n++)r.off(i[n],t)}var n,i=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],r=this;if(e)for(n=0;n<i.length;n++)r.on(i[n],t);return this}),"transform"in o.fn||(o.fn.transform=function(e){for(var t=0;t<this.length;t++){var n=this[t].style;n.webkitTransform=n.MsTransform=n.msTransform=n.MozTransform=n.OTransform=n.transform=e}return this}),"transition"in o.fn||(o.fn.transition=function(e){"string"!=typeof e&&(e+="ms");for(var t=0;t<this.length;t++){var n=this[t].style;n.webkitTransitionDuration=n.MsTransitionDuration=n.msTransitionDuration=n.MozTransitionDuration=n.OTransitionDuration=n.transitionDuration=e}return this})),ionic.views.Swiper=n}(),function(e){"use strict";e.views.Toggle=e.views.View.inherit({initialize:function(t){var n=this;this.el=t.el,this.checkbox=t.checkbox,this.track=t.track,this.handle=t.handle,this.openPercent=-1,this.onChange=t.onChange||function(){},this.triggerThreshold=t.triggerThreshold||20,this.dragStartHandler=function(e){n.dragStart(e)},this.dragHandler=function(e){n.drag(e)},this.holdHandler=function(e){n.hold(e)},this.releaseHandler=function(e){n.release(e)},this.dragStartGesture=e.onGesture("dragstart",this.dragStartHandler,this.el),this.dragGesture=e.onGesture("drag",this.dragHandler,this.el),this.dragHoldGesture=e.onGesture("hold",this.holdHandler,this.el),this.dragReleaseGesture=e.onGesture("release",this.releaseHandler,this.el)},destroy:function(){e.offGesture(this.dragStartGesture,"dragstart",this.dragStartGesture),e.offGesture(this.dragGesture,"drag",this.dragGesture),e.offGesture(this.dragHoldGesture,"hold",this.holdHandler),e.offGesture(this.dragReleaseGesture,"release",this.releaseHandler)},tap:function(){"disabled"!==this.el.getAttribute("disabled")&&this.val(!this.checkbox.checked)},dragStart:function(e){this.checkbox.disabled||(this._dragInfo={width:this.el.offsetWidth,left:this.el.offsetLeft,right:this.el.offsetLeft+this.el.offsetWidth,triggerX:this.el.offsetWidth/2,initialState:this.checkbox.checked},e.gesture.srcEvent.preventDefault(),this.hold(e))},drag:function(t){var n=this;this._dragInfo&&(t.gesture.srcEvent.preventDefault(),e.requestAnimationFrame(function(){if(n._dragInfo){var e=t.gesture.touches[0].pageX-n._dragInfo.left,i=n._dragInfo.width-n.triggerThreshold;n._dragInfo.initialState?e<n.triggerThreshold?n.setOpenPercent(0):e>n._dragInfo.triggerX&&n.setOpenPercent(100):e<n._dragInfo.triggerX?n.setOpenPercent(0):e>i&&n.setOpenPercent(100)}}))},endDrag:function(){this._dragInfo=null},hold:function(){this.el.classList.add("dragging")},release:function(e){this.el.classList.remove("dragging"),this.endDrag(e)},setOpenPercent:function(t){if(this.openPercent<0||t<this.openPercent-3||t>this.openPercent+3)if(this.openPercent=t,0===t)this.val(!1);else if(100===t)this.val(!0);else{var n=Math.round(t/100*this.track.offsetWidth-this.handle.offsetWidth);n=1>n?0:n,this.handle.style[e.CSS.TRANSFORM]="translate3d("+n+"px,0,0)"}},val:function(t){return(t===!0||t===!1)&&(""!==this.handle.style[e.CSS.TRANSFORM]&&(this.handle.style[e.CSS.TRANSFORM]=""),this.checkbox.checked=t,this.openPercent=t?100:0,this.onChange&&this.onChange()),this.checkbox.checked}})}(ionic)}();
/*!
 * ionic.bundle.js is a concatenation of:
 * ionic.js, angular.js, angular-animate.js,
 * angular-sanitize.js, angular-ui-router.js,
 * and ionic-angular.js
 */

/*
 AngularJS v1.4.3
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(O,U,t){'use strict';function J(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.4.3/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Ea(b){if(null==b||Wa(b))return!1;var a="length"in Object(b)&&b.length;
return b.nodeType===qa&&a?!0:L(b)||G(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function m(b,a,c){var d,e;if(b)if(z(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(G(b)||Ea(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==m)b.forEach(a,c,b);else if(nc(b))for(d in b)a.call(c,b[d],d,b);else if("function"===typeof b.hasOwnProperty)for(d in b)b.hasOwnProperty(d)&&
a.call(c,b[d],d,b);else for(d in b)Xa.call(b,d)&&a.call(c,b[d],d,b);return b}function oc(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function pc(b){return function(a,c){b(c,a)}}function Ud(){return++nb}function qc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function Nb(b,a,c){for(var d=b.$$hashKey,e=0,f=a.length;e<f;++e){var g=a[e];if(H(g)||z(g))for(var h=Object.keys(g),l=0,k=h.length;l<k;l++){var n=h[l],r=g[n];c&&H(r)?aa(r)?b[n]=new Date(r.valueOf()):(H(b[n])||
(b[n]=G(r)?[]:{}),Nb(b[n],[r],!0)):b[n]=r}}qc(b,d);return b}function P(b){return Nb(b,za.call(arguments,1),!1)}function Vd(b){return Nb(b,za.call(arguments,1),!0)}function W(b){return parseInt(b,10)}function Ob(b,a){return P(Object.create(b),a)}function v(){}function Ya(b){return b}function ra(b){return function(){return b}}function rc(b){return z(b.toString)&&b.toString!==Object.prototype.toString}function A(b){return"undefined"===typeof b}function w(b){return"undefined"!==typeof b}function H(b){return null!==
b&&"object"===typeof b}function nc(b){return null!==b&&"object"===typeof b&&!sc(b)}function L(b){return"string"===typeof b}function V(b){return"number"===typeof b}function aa(b){return"[object Date]"===sa.call(b)}function z(b){return"function"===typeof b}function Za(b){return"[object RegExp]"===sa.call(b)}function Wa(b){return b&&b.window===b}function $a(b){return b&&b.$evalAsync&&b.$watch}function ab(b){return"boolean"===typeof b}function tc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}
function Wd(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function ta(b){return M(b.nodeName||b[0]&&b[0].nodeName)}function bb(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return c}function fa(b,a,c,d){if(Wa(b)||$a(b))throw Fa("cpws");if(uc.test(sa.call(a)))throw Fa("cpta");if(a){if(b===a)throw Fa("cpi");c=c||[];d=d||[];H(b)&&(c.push(b),d.push(a));var e;if(G(b))for(e=a.length=0;e<b.length;e++)a.push(fa(b[e],null,c,d));else{var f=a.$$hashKey;G(a)?a.length=0:m(a,function(b,
c){delete a[c]});if(nc(b))for(e in b)a[e]=fa(b[e],null,c,d);else if(b&&"function"===typeof b.hasOwnProperty)for(e in b)b.hasOwnProperty(e)&&(a[e]=fa(b[e],null,c,d));else for(e in b)Xa.call(b,e)&&(a[e]=fa(b[e],null,c,d));qc(a,f)}}else if(a=b,H(b)){if(c&&-1!==(f=c.indexOf(b)))return d[f];if(G(b))return fa(b,[],c,d);if(uc.test(sa.call(b)))a=new b.constructor(b);else if(aa(b))a=new Date(b.getTime());else if(Za(b))a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex;else return e=
Object.create(sc(b)),fa(b,e,c,d);d&&(c.push(b),d.push(a))}return a}function ia(b,a){if(G(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(H(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function ka(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(G(b)){if(!G(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ka(b[d],a[d]))return!1;return!0}}else{if(aa(b))return aa(a)?
ka(b.getTime(),a.getTime()):!1;if(Za(b))return Za(a)?b.toString()==a.toString():!1;if($a(b)||$a(a)||Wa(b)||Wa(a)||G(a)||aa(a)||Za(a))return!1;c=ga();for(d in b)if("$"!==d.charAt(0)&&!z(b[d])){if(!ka(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!(d in c||"$"===d.charAt(0)||a[d]===t||z(a[d])))return!1;return!0}return!1}function cb(b,a,c){return b.concat(za.call(a,c))}function vc(b,a){var c=2<arguments.length?za.call(arguments,2):[];return!z(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?
a.apply(b,cb(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Xd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=t:Wa(a)?c="$WINDOW":a&&U===a?c="$DOCUMENT":$a(a)&&(c="$SCOPE");return c}function db(b,a){if("undefined"===typeof b)return t;V(a)||(a=a?2:null);return JSON.stringify(b,Xd,a)}function wc(b){return L(b)?JSON.parse(b):b}function xc(b,a){var c=Date.parse("Jan 01, 1970 00:00:00 "+b)/6E4;return isNaN(c)?a:c}function Pb(b,
a,c){c=c?-1:1;var d=xc(a,b.getTimezoneOffset());a=b;b=c*(d-b.getTimezoneOffset());a=new Date(a.getTime());a.setMinutes(a.getMinutes()+b);return a}function ua(b){b=y(b).clone();try{b.empty()}catch(a){}var c=y("<div>").append(b).html();try{return b[0].nodeType===Na?M(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+M(b)})}catch(d){return M(c)}}function yc(b){try{return decodeURIComponent(b)}catch(a){}}function zc(b){var a={},c,d;m((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,
"%20").split("="),d=yc(c[0]),w(d)&&(b=w(c[1])?yc(c[1]):!0,Xa.call(a,d)?G(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Qb(b){var a=[];m(b,function(b,d){G(b)?m(b,function(b){a.push(ma(d,!0)+(!0===b?"":"="+ma(b,!0)))}):a.push(ma(d,!0)+(!0===b?"":"="+ma(b,!0)))});return a.length?a.join("&"):""}function ob(b){return ma(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ma(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,
"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Yd(b,a){var c,d,e=Oa.length;for(d=0;d<e;++d)if(c=Oa[d]+a,L(c=b.getAttribute(c)))return c;return null}function Zd(b,a){var c,d,e={};m(Oa,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});m(Oa,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Yd(c,"strict-di"),a(c,d?[d]:[],e))}function Ac(b,a,c){H(c)||
(c={});c=P({strictDi:!1},c);var d=function(){b=y(b);if(b.injector()){var d=b[0]===U?"document":ua(b);throw Fa("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=eb(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return d},e=
/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;O&&e.test(O.name)&&(c.debugInfoEnabled=!0,O.name=O.name.replace(e,""));if(O&&!f.test(O.name))return d();O.name=O.name.replace(f,"");ca.resumeBootstrap=function(b){m(b,function(b){a.push(b)});return d()};z(ca.resumeDeferredBootstrap)&&ca.resumeDeferredBootstrap()}function $d(){O.name="NG_ENABLE_DEBUG_INFO!"+O.name;O.location.reload()}function ae(b){b=ca.element(b).injector();if(!b)throw Fa("test");return b.get("$$testability")}function Bc(b,a){a=a||
"_";return b.replace(be,function(b,d){return(d?a:"")+b.toLowerCase()})}function ce(){var b;if(!Cc){var a=pb();la=O.jQuery;w(a)&&(la=null===a?t:O[a]);la&&la.fn.on?(y=la,P(la.fn,{scope:Pa.scope,isolateScope:Pa.isolateScope,controller:Pa.controller,injector:Pa.injector,inheritedData:Pa.inheritedData}),b=la.cleanData,la.cleanData=function(a){var d;if(Rb)Rb=!1;else for(var e=0,f;null!=(f=a[e]);e++)(d=la._data(f,"events"))&&d.$destroy&&la(f).triggerHandler("$destroy");b(a)}):y=Q;ca.element=y;Cc=!0}}function Sb(b,
a,c){if(!b)throw Fa("areq",a||"?",c||"required");return b}function Qa(b,a,c){c&&G(b)&&(b=b[b.length-1]);Sb(z(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ra(b,a){if("hasOwnProperty"===b)throw Fa("badname",a);}function Dc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&z(b)?vc(e,b):b}function qb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==
b);return y(c)}function ga(){return Object.create(null)}function de(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=J("$injector"),d=J("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||J;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(b,c,e,f){f||(f=d);return function(){f[e||"push"]([b,c,arguments]);return C}}function b(a,c){return function(b,e){e&&z(e)&&
(e.$$moduleName=f);d.push([a,c,arguments]);return C}}if(!g)throw c("nomod",f);var d=[],e=[],s=[],x=a("$injector","invoke","push",e),C={_invokeQueue:d,_configBlocks:e,_runBlocks:s,requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider",
"register"),directive:b("$compileProvider","directive"),config:x,run:function(a){s.push(a);return this}};h&&x(h);return C})}})}function ee(b){P(b,{bootstrap:Ac,copy:fa,extend:P,merge:Vd,equals:ka,element:y,forEach:m,injector:eb,noop:v,bind:vc,toJson:db,fromJson:wc,identity:Ya,isUndefined:A,isDefined:w,isString:L,isFunction:z,isObject:H,isNumber:V,isElement:tc,isArray:G,version:fe,isDate:aa,lowercase:M,uppercase:rb,callbacks:{counter:0},getTestability:ae,$$minErr:J,$$csp:fb,reloadWithDebugInfo:$d});
gb=de(O);try{gb("ngLocale")}catch(a){gb("ngLocale",[]).provider("$locale",ge)}gb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:he});a.provider("$compile",Ec).directive({a:ie,input:Fc,textarea:Fc,form:je,script:ke,select:le,style:me,option:ne,ngBind:oe,ngBindHtml:pe,ngBindTemplate:qe,ngClass:re,ngClassEven:se,ngClassOdd:te,ngCloak:ue,ngController:ve,ngForm:we,ngHide:xe,ngIf:ye,ngInclude:ze,ngInit:Ae,ngNonBindable:Be,ngPluralize:Ce,ngRepeat:De,ngShow:Ee,ngStyle:Fe,ngSwitch:Ge,
ngSwitchWhen:He,ngSwitchDefault:Ie,ngOptions:Je,ngTransclude:Ke,ngModel:Le,ngList:Me,ngChange:Ne,pattern:Gc,ngPattern:Gc,required:Hc,ngRequired:Hc,minlength:Ic,ngMinlength:Ic,maxlength:Jc,ngMaxlength:Jc,ngValue:Oe,ngModelOptions:Pe}).directive({ngInclude:Qe}).directive(sb).directive(Kc);a.provider({$anchorScroll:Re,$animate:Se,$$animateQueue:Te,$$AnimateRunner:Ue,$browser:Ve,$cacheFactory:We,$controller:Xe,$document:Ye,$exceptionHandler:Ze,$filter:Lc,$interpolate:$e,$interval:af,$http:bf,$httpParamSerializer:cf,
$httpParamSerializerJQLike:df,$httpBackend:ef,$location:ff,$log:gf,$parse:hf,$rootScope:jf,$q:kf,$$q:lf,$sce:mf,$sceDelegate:nf,$sniffer:of,$templateCache:pf,$templateRequest:qf,$$testability:rf,$timeout:sf,$window:tf,$$rAF:uf,$$jqLite:vf,$$HashMap:wf,$$cookieReader:xf})}])}function hb(b){return b.replace(yf,function(a,b,d,e){return e?d.toUpperCase():d}).replace(zf,"Moz$1")}function Mc(b){b=b.nodeType;return b===qa||!b||9===b}function Nc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Tb.test(b)){c=
c||e.appendChild(a.createElement("div"));d=(Af.exec(b)||["",""])[1].toLowerCase();d=na[d]||na._default;c.innerHTML=d[1]+b.replace(Bf,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=cb(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";m(f,function(a){e.appendChild(a)});return e}function Q(b){if(b instanceof Q)return b;var a;L(b)&&(b=R(b),a=!0);if(!(this instanceof Q)){if(a&&"<"!=b.charAt(0))throw Ub("nosel");return new Q(b)}if(a){a=U;
var c;b=(c=Cf.exec(b))?[a.createElement(c[1])]:(c=Nc(b,a))?c.childNodes:[]}Oc(this,b)}function Vb(b){return b.cloneNode(!0)}function tb(b,a){a||ub(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)ub(c[d])}function Pc(b,a,c,d){if(w(d))throw Ub("offargs");var e=(d=vb(b))&&d.events,f=d&&d.handle;if(f)if(a)m(a.split(" "),function(a){if(w(c)){var d=e[a];bb(d||[],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,
f,!1),delete e[a]}function ub(b,a){var c=b.ng339,d=c&&ib[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Pc(b)),delete ib[c],b.ng339=t))}function vb(b,a){var c=b.ng339,c=c&&ib[c];a&&!c&&(b.ng339=c=++Df,c=ib[c]={events:{},data:{},handle:t});return c}function Wb(b,a,c){if(Mc(b)){var d=w(c),e=!d&&a&&!H(a),f=!a;b=(b=vb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];P(b,a)}}}function wb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+
" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function xb(b,a){a&&b.setAttribute&&m(a.split(" "),function(a){b.setAttribute("class",R((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+R(a)+" "," ")))})}function yb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");m(a.split(" "),function(a){a=R(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",R(c))}}function Oc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=
a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Qc(b,a){return zb(b,"$"+(a||"ngController")+"Controller")}function zb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=G(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=y.data(b,a[d]))!==t)return c;b=b.parentNode||11===b.nodeType&&b.host}}function Rc(b){for(tb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function Xb(b,a){a||tb(b);var c=b.parentNode;c&&c.removeChild(b)}function Ef(b,
a){a=a||O;if("complete"===a.document.readyState)a.setTimeout(b);else y(a).on("load",b)}function Sc(b,a){var c=Ab[a.toLowerCase()];return c&&Tc[ta(b)]&&c}function Ff(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Uc[a]}function Gf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],g=f?f.length:0;if(g){if(A(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=
!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<g&&(f=ia(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||f[l].call(b,c)}};c.elem=b;return c}function vf(){this.$get=function(){return P(Q,{hasClass:function(b,a){b.attr&&(b=b[0]);return wb(b,a)},addClass:function(b,a){b.attr&&(b=b[0]);return yb(b,a)},removeClass:function(b,a){b.attr&&(b=b[0]);return xb(b,a)}})}}function Ga(b,a){var c=b&&b.$$hashKey;
if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Ud)():c+":"+b}function Sa(b,a){if(a){var c=0;this.nextUid=function(){return++c}}m(b,this.put,this)}function Hf(b){return(b=b.toString().replace(Vc,"").match(Wc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function eb(b,a){function c(a){return function(b,c){if(H(b))m(b,pc(a));else return a(b,c)}}function d(a,b){Ra(a,"service");if(z(b)||G(b))b=s.instantiate(b);
if(!b.$get)throw Ha("pget",a);return r[a+"Provider"]=b}function e(a,b){return function(){var c=C.invoke(b,this);if(A(c))throw Ha("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){var b=[],c;m(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=s.get(e[0]);f[e[1]].apply(f,e[2])}}if(!n.get(a)){n.put(a,!0);try{L(a)?(c=gb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):z(a)?b.push(s.invoke(a)):G(a)?
b.push(s.invoke(a)):Qa(a,"module")}catch(e){throw G(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ha("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===l)throw Ha("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),b[a]=l,b[a]=c(a,e)}catch(f){throw b[a]===l&&delete b[a],f;}finally{k.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var h=[],k=eb.$$annotate(b,
a,g),l,s,n;s=0;for(l=k.length;s<l;s++){n=k[s];if("string"!==typeof n)throw Ha("itkn",n);h.push(f&&f.hasOwnProperty(n)?f[n]:d(n,g))}G(b)&&(b=b[l]);return b.apply(c,h)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((G(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return H(a)||z(a)?a:d},get:d,annotate:eb.$$annotate,has:function(a){return r.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var l={},k=[],n=new Sa([],!0),r={$provide:{provider:c(d),factory:c(f),service:c(function(a,
b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return f(a,ra(b),!1)}),constant:c(function(a,b){Ra(a,"constant");r[a]=b;x[a]=b}),decorator:function(a,b){var c=s.get(a+"Provider"),d=c.$get;c.$get=function(){var a=C.invoke(d,c);return C.invoke(b,null,{$delegate:a})}}}},s=r.$injector=h(r,function(a,b){ca.isString(b)&&k.push(b);throw Ha("unpr",k.join(" <- "));}),x={},C=x.$injector=h(x,function(a,b){var c=s.get(a+"Provider",b);return C.invoke(c.$get,c,t,a)});m(g(b),
function(a){a&&C.invoke(a)});return C}function Re(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ta(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;z(c)?c=c():tc(c)?(c=c[0],c="fixed"!==a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):V(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,
0)}function g(a){a=L(a)?a:c.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||Ef(function(){d.$evalAsync(g)})});return g}]}function jb(b,a){if(!b&&!a)return"";if(!b)return a;if(!a)return b;G(b)&&(b=b.join(" "));G(a)&&(a=a.join(" "));return b+" "+a}function If(b){L(b)&&(b=b.split(" "));var a=ga();m(b,function(b){b.length&&(a[b]=!0)});return a}function Ia(b){return H(b)?
b:{}}function Jf(b,a,c,d){function e(a){try{a.apply(null,za.call(arguments,1))}finally{if(C--,0===C)for(;F.length;)try{F.pop()()}catch(b){c.error(b)}}}function f(){g();h()}function g(){a:{try{u=n.state;break a}catch(a){}u=void 0}u=A(u)?null:u;ka(u,D)&&(u=D);D=u}function h(){if(K!==l.url()||p!==u)K=l.url(),p=u,m(B,function(a){a(l.url(),u)})}var l=this,k=b.location,n=b.history,r=b.setTimeout,s=b.clearTimeout,x={};l.isMock=!1;var C=0,F=[];l.$$completeOutstandingRequest=e;l.$$incOutstandingRequestCount=
function(){C++};l.notifyWhenNoOutstandingRequests=function(a){0===C?a():F.push(a)};var u,p,K=k.href,q=a.find("base"),I=null;g();p=u;l.url=function(a,c,e){A(e)&&(e=null);k!==b.location&&(k=b.location);n!==b.history&&(n=b.history);if(a){var f=p===e;if(K===a&&(!d.history||f))return l;var h=K&&Ja(K)===Ja(a);K=a;p=e;if(!d.history||h&&f){if(!h||I)I=a;c?k.replace(a):h?(c=k,e=a.indexOf("#"),a=-1===e?"":a.substr(e),c.hash=a):k.href=a}else n[c?"replaceState":"pushState"](e,"",a),g(),p=u;return l}return I||
k.href.replace(/%27/g,"'")};l.state=function(){return u};var B=[],N=!1,D=null;l.onUrlChange=function(a){if(!N){if(d.history)y(b).on("popstate",f);y(b).on("hashchange",f);N=!0}B.push(a);return a};l.$$applicationDestroyed=function(){y(b).off("hashchange popstate",f)};l.$$checkUrlChange=h;l.baseHref=function(){var a=q.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};l.defer=function(a,b){var c;C++;c=r(function(){delete x[c];e(a)},b||0);x[c]=!0;return c};l.defer.cancel=function(a){return x[a]?
(delete x[a],s(a),e(v),!0):!1}}function Ve(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new Jf(b,d,a,c)}]}function We(){this.$get=function(){function b(b,d){function e(a){a!=r&&(s?s==a&&(s=a.n):s=a,f(a.n,a.p),f(a,r),r=a,r.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw J("$cacheFactory")("iid",b);var g=0,h=P({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,n={},r=null,s=null;return a[b]={put:function(a,b){if(!A(b)){if(k<Number.MAX_VALUE){var c=
n[a]||(n[a]={key:a});e(c)}a in l||g++;l[a]=b;g>k&&this.remove(s.key);return b}},get:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;b==r&&(r=b.p);b==s&&(s=b.n);f(b.n,b.p);delete n[a]}delete l[a];g--},removeAll:function(){l={};g=0;n={};r=s=null},destroy:function(){n=h=l=null;delete a[b]},info:function(){return P({},h,{size:g})}}}var a={};b.info=function(){var b={};m(a,function(a,e){b[e]=a.info()});return b};
b.get=function(b){return a[b]};return b}}function pf(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function Ec(b,a){function c(a,b,c){var d=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,e={};m(a,function(a,f){var g=a.match(d);if(!g)throw ea("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f}});return e}function d(a){var b=a.charAt(0);if(!b||b!==M(b))throw ea("baddir",a);if(a!==a.trim())throw ea("baddir",
a);}var e={},f=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,g=/(([\w\-]+)(?:\:([^;]+))?;?)/,h=Wd("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,k=/^(on[a-z]+|formaction)$/;this.directive=function s(a,f){Ra(a,"directive");L(a)?(d(a),Sb(f,"directiveFactory"),e.hasOwnProperty(a)||(e[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,d){var f=[];m(e[a],function(e,g){try{var h=b.invoke(e);z(h)?h={compile:ra(h)}:!h.compile&&h.link&&(h.compile=ra(h.link));h.priority=h.priority||
0;h.index=g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";var k=h,l=h,s=h.name,n={isolateScope:null,bindToController:null};H(l.scope)&&(!0===l.bindToController?(n.bindToController=c(l.scope,s,!0),n.isolateScope={}):n.isolateScope=c(l.scope,s,!1));H(l.bindToController)&&(n.bindToController=c(l.bindToController,s,!0));if(H(n.bindToController)){var C=l.controller,$=l.controllerAs;if(!C)throw ea("noctrl",s);var ha;a:if($&&L($))ha=$;else{if(L(C)){var m=Xc.exec(C);
if(m){ha=m[3];break a}}ha=void 0}if(!ha)throw ea("noident",s);}var q=k.$$bindings=n;H(q.isolateScope)&&(h.$$isolateBindings=q.isolateScope);h.$$moduleName=e.$$moduleName;f.push(h)}catch(t){d(t)}});return f}])),e[a].push(f)):m(a,pc(s));return this};this.aHrefSanitizationWhitelist=function(b){return w(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return w(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};
var n=!0;this.debugInfoEnabled=function(a){return w(a)?(n=a,this):n};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,d,u,p,K,q,I,B,N){function D(a,b){try{a.addClass(b)}catch(c){}}function Z(a,b,c,d,e){a instanceof y||(a=y(a));m(a,function(b,c){b.nodeType==Na&&b.nodeValue.match(/\S+/)&&(a[c]=y(b).wrap("<span></span>").parent()[0])});var f=S(a,b,a,c,d,e);Z.$$addScopeClass(a);
var g=null;return function(b,c,d){Sb(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==ta(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?y(Yb(g,y("<div>").append(a).html())):c?Pa.clone.call(a):a;if(h)for(var k in h)d.data("$"+k+"Controller",h[k].instance);Z.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function S(a,b,c,d,e,f){function g(a,
c,d,e){var f,k,l,s,n,B,C;if(p)for(C=Array(c.length),s=0;s<h.length;s+=3)f=h[s],C[f]=c[f];else C=c;s=0;for(n=h.length;s<n;)if(k=C[h[s++]],c=h[s++],f=h[s++],c){if(c.scope){if(l=a.$new(),Z.$$addScopeInfo(y(k),l),B=c.$$destroyBindings)c.$$destroyBindings=null,l.$on("$destroyed",B)}else l=a;B=c.transcludeOnThisElement?$(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?$(a,b):null;c(f,l,k,d,B,c)}else f&&f(a,k.childNodes,t,e)}for(var h=[],k,l,s,n,p,B=0;B<a.length;B++){k=new aa;l=ha(a[B],[],k,0===B?
d:t,e);(f=l.length?E(l,a[B],k,b,c,null,[],[],f):null)&&f.scope&&Z.$$addScopeClass(k.$$element);k=f&&f.terminal||!(s=a[B].childNodes)||!s.length?null:S(s,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(B,f,k),n=!0,p=p||f;f=null}return n?g:null}function $(a,b,c){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function ha(a,b,c,d,e){var h=c.$attr,k;switch(a.nodeType){case qa:w(b,
wa(ta(a)),"E",d,e);for(var l,s,n,p=a.attributes,B=0,C=p&&p.length;B<C;B++){var x=!1,S=!1;l=p[B];k=l.name;s=R(l.value);l=wa(k);if(n=ia.test(l))k=k.replace(Zc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});var F=l.replace(/(Start|End)$/,"");A(F)&&l===F+"Start"&&(x=k,S=k.substr(0,k.length-5)+"end",k=k.substr(0,k.length-6));l=wa(k.toLowerCase());h[l]=k;if(n||!c.hasOwnProperty(l))c[l]=s,Sc(a,l)&&(c[l]=!0);V(a,b,s,l,n);w(b,l,"A",d,e,x,S)}a=a.className;H(a)&&(a=a.animVal);if(L(a)&&
""!==a)for(;k=g.exec(a);)l=wa(k[2]),w(b,l,"C",d,e)&&(c[l]=R(k[3])),a=a.substr(k.index+k[0].length);break;case Na:if(11===Ua)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Na;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);xa(b,a.nodeValue);break;case 8:try{if(k=f.exec(a.nodeValue))l=wa(k[1]),w(b,l,"M",d,e)&&(c[l]=R(k[2]))}catch($){}}b.sort(Aa);return b}function va(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ea("uterdir",b,c);
a.nodeType==qa&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return y(d)}function Yc(a,b,c){return function(d,e,f,g,h){e=va(e[0],b,c);return a(d,e,f,g,h)}}function E(a,b,d,e,f,g,h,k,s){function n(a,b,c,d){if(a){c&&(a=Yc(a,c,d));a.require=E.require;a.directiveName=w;if(u===E||E.$$isolateScope)a=X(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=Yc(b,c,d));b.require=E.require;b.directiveName=w;if(u===E||E.$$isolateScope)b=X(b,{isolateScope:!0});k.push(b)}}
function B(a,b,c,d){var e;if(L(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;e||(d="$"+b+"Controller",e=g?c.inheritedData(d):c.data(d));if(!e&&!f)throw ea("ctreq",b,a);}else if(G(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=B(a,b[g],c,d);return e||null}function x(a,b,c,d,e,f){var g=ga(),h;for(h in d){var k=d[h],l={$scope:k===u||k.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},s=k.controller;"@"==s&&(s=b[k.name]);l=p(s,
l,!0,k.controllerAs);g[k.name]=l;q||a.data("$"+k.name+"Controller",l.instance)}return g}function S(a,c,e,f,g,l){function s(a,b,c){var d;$a(a)||(c=b,b=a,a=t);q&&(d=m);c||(c=q?ja.parent():ja);return g(a,b,d,c,va)}var n,p,C,F,m,ha,ja;b===e?(f=d,ja=d.$$element):(ja=y(e),f=new aa(ja,d));u&&(F=c.$new(!0));g&&(ha=s,ha.$$boundTransclude=g);N&&(m=x(ja,f,ha,N,F,c));u&&(Z.$$addScopeInfo(ja,F,!0,!(D&&(D===u||D===u.$$originalDirective))),Z.$$addScopeClass(ja,!0),F.$$isolateBindings=u.$$isolateBindings,W(c,f,F,
F.$$isolateBindings,u,F));if(m){var K=u||$,I;K&&m[K.name]&&(p=K.$$bindings.bindToController,(C=m[K.name])&&C.identifier&&p&&(I=C,l.$$destroyBindings=W(c,f,C.instance,p,K)));for(n in m){C=m[n];var E=C();E!==C.instance&&(C.instance=E,ja.data("$"+n+"Controller",E),C===I&&(l.$$destroyBindings(),l.$$destroyBindings=W(c,f,E,p,K)))}}n=0;for(l=h.length;n<l;n++)p=h[n],Y(p,p.isolateScope?F:c,ja,f,p.require&&B(p.directiveName,p.require,ja,m),ha);var va=c;u&&(u.template||null===u.templateUrl)&&(va=F);a&&a(va,
e.childNodes,t,g);for(n=k.length-1;0<=n;n--)p=k[n],Y(p,p.isolateScope?F:c,ja,f,p.require&&B(p.directiveName,p.require,ja,m),ha)}s=s||{};for(var F=-Number.MAX_VALUE,$=s.newScopeDirective,N=s.controllerDirectives,u=s.newIsolateScopeDirective,D=s.templateDirective,m=s.nonTlbTranscludeDirective,K=!1,I=!1,q=s.hasElementTranscludeDirective,ba=d.$$element=y(b),E,w,v,A=e,Aa,xa=0,Ta=a.length;xa<Ta;xa++){E=a[xa];var M=E.$$start,P=E.$$end;M&&(ba=va(b,M,P));v=t;if(F>E.priority)break;if(v=E.scope)E.templateUrl||
(H(v)?(O("new/isolated scope",u||$,E,ba),u=E):O("new/isolated scope",u,E,ba)),$=$||E;w=E.name;!E.templateUrl&&E.controller&&(v=E.controller,N=N||ga(),O("'"+w+"' controller",N[w],E,ba),N[w]=E);if(v=E.transclude)K=!0,E.$$tlb||(O("transclusion",m,E,ba),m=E),"element"==v?(q=!0,F=E.priority,v=ba,ba=d.$$element=y(U.createComment(" "+w+": "+d[w]+" ")),b=ba[0],T(f,za.call(v,0),b),A=Z(v,e,F,g&&g.name,{nonTlbTranscludeDirective:m})):(v=y(Vb(b)).contents(),ba.empty(),A=Z(v,e));if(E.template)if(I=!0,O("template",
D,E,ba),D=E,v=z(E.template)?E.template(ba,d):E.template,v=fa(v),E.replace){g=E;v=Tb.test(v)?$c(Yb(E.templateNamespace,R(v))):[];b=v[0];if(1!=v.length||b.nodeType!==qa)throw ea("tplrt",w,"");T(f,ba,b);Ta={$attr:{}};v=ha(b,[],Ta);var Q=a.splice(xa+1,a.length-(xa+1));u&&ad(v);a=a.concat(v).concat(Q);J(d,Ta);Ta=a.length}else ba.html(v);if(E.templateUrl)I=!0,O("template",D,E,ba),D=E,E.replace&&(g=E),S=Lf(a.splice(xa,a.length-xa),ba,d,f,K&&A,h,k,{controllerDirectives:N,newScopeDirective:$!==E&&$,newIsolateScopeDirective:u,
templateDirective:D,nonTlbTranscludeDirective:m}),Ta=a.length;else if(E.compile)try{Aa=E.compile(ba,d,A),z(Aa)?n(null,Aa,M,P):Aa&&n(Aa.pre,Aa.post,M,P)}catch(Kf){c(Kf,ua(ba))}E.terminal&&(S.terminal=!0,F=Math.max(F,E.priority))}S.scope=$&&!0===$.scope;S.transcludeOnThisElement=K;S.templateOnThisElement=I;S.transclude=A;s.hasElementTranscludeDirective=q;return S}function ad(a){for(var b=0,c=a.length;b<c;b++)a[b]=Ob(a[b],{$$isolateScope:!0})}function w(b,d,f,g,h,k,l){if(d===h)return null;h=null;if(e.hasOwnProperty(d)){var n;
d=a.get(d+"Directive");for(var p=0,B=d.length;p<B;p++)try{n=d[p],(g===t||g>n.priority)&&-1!=n.restrict.indexOf(f)&&(k&&(n=Ob(n,{$$start:k,$$end:l})),b.push(n),h=n)}catch(x){c(x)}}return h}function A(b){if(e.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=c[d],b.multiElement)return!0;return!1}function J(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;m(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});m(b,function(b,f){"class"==
f?(D(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Lf(a,b,c,e,f,g,h,k){var l=[],s,n,p=b[0],B=a.shift(),C=Ob(B,{templateUrl:null,transclude:null,replace:null,$$originalDirective:B}),x=z(B.templateUrl)?B.templateUrl(b,c):B.templateUrl,N=B.templateNamespace;b.empty();d(x).then(function(d){var F,u;d=fa(d);if(B.replace){d=Tb.test(d)?$c(Yb(N,R(d))):
[];F=d[0];if(1!=d.length||F.nodeType!==qa)throw ea("tplrt",B.name,x);d={$attr:{}};T(e,b,F);var K=ha(F,[],d);H(B.scope)&&ad(K);a=K.concat(a);J(c,d)}else F=p,b.html(d);a.unshift(C);s=E(a,F,c,f,b,B,g,h,k);m(e,function(a,c){a==F&&(e[c]=b[0])});for(n=S(b[0].childNodes,f);l.length;){d=l.shift();u=l.shift();var I=l.shift(),va=l.shift(),K=b[0];if(!d.$$destroyed){if(u!==p){var Z=u.className;k.hasElementTranscludeDirective&&B.replace||(K=Vb(F));T(I,y(u),K);D(y(K),Z)}u=s.transcludeOnThisElement?$(d,s.transclude,
va):va;s(n,d,K,e,u,s)}}l=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(s.transcludeOnThisElement&&(a=$(b,s.transclude,e)),s(n,b,c,d,a,s)))}}function Aa(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function O(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ea("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,ua(d));}function xa(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=
a.parent();var b=!!a.length;b&&Z.$$addBindingClass(a);return function(a,c){var e=c.parent();b||Z.$$addBindingClass(e);Z.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Yb(a,b){a=M(a||"html");switch(a){case "svg":case "math":var c=U.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function Q(a,b){if("srcdoc"==b)return I.HTML;var c=ta(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||
"ngSrc"==b))return I.RESOURCE_URL}function V(a,c,d,e,f){var g=Q(a,e);f=h[e]||f;var l=b(d,!0,g,f);if(l){if("multiple"===e&&"select"===ta(a))throw ea("selmulti",ua(a));c.push({priority:100,compile:function(){return{pre:function(a,c,h){c=h.$$observers||(h.$$observers={});if(k.test(e))throw ea("nodomevents");var s=h[e];s!==d&&(l=s&&b(s,!0,g,f),d=s);l&&(h[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(h.$$observers&&h.$$observers[e].$$scope||a).$watch(l,function(a,b){"class"===e&&a!=b?h.$updateClass(a,b):h.$set(e,
a)}))}}}})}}function T(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=U.createDocumentFragment();a.appendChild(d);y.hasData(d)&&(y(c).data(y(d).data()),la?(Rb=!0,la.cleanData([d])):delete y.cache[d[y.expando]]);d=1;for(e=b.length;d<e;d++)f=b[d],y(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function X(a,
b){return P(function(){return a.apply(null,arguments)},a,b)}function Y(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ua(d))}}function W(a,c,d,e,f,g){var h;m(e,function(e,g){var k=e.attrName,l=e.optional,s=e.mode,n,p,B,C;Xa.call(c,k)||(c[k]=t);switch(s){case "@":c[k]||l||(d[g]=t);c.$observe(k,function(a){d[g]=a});c.$$observers[k].$$scope=a;c[k]&&(d[g]=b(c[k])(a));break;case "=":if(l&&!c[k])break;p=u(c[k]);C=p.literal?ka:function(a,b){return a===b||a!==a&&b!==b};B=p.assign||function(){n=d[g]=p(a);throw ea("nonassign",
c[k],f.name);};n=d[g]=p(a);l=function(b){C(b,d[g])||(C(b,n)?B(a,b=d[g]):d[g]=b);return n=b};l.$stateful=!0;l=e.collection?a.$watchCollection(c[k],l):a.$watch(u(c[k],l),null,p.literal);h=h||[];h.push(l);break;case "&":p=u(c[k]);if(p===v&&l)break;d[g]=function(b){return p(a,b)}}});e=h?function(){for(var a=0,b=h.length;a<b;++a)h[a]()}:v;return g&&e!==v?(g.$on("$destroy",e),v):e}var aa=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=
a};aa.prototype={$normalize:wa,$addClass:function(a){a&&0<a.length&&B.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&B.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=bd(a,b);c&&c.length&&B.addClass(this.$$element,c);(c=bd(b,a))&&c.length&&B.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Sc(f,a),h=Ff(f,a),f=a;g?(this.$$element.prop(a,b),e=g):h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Bc(a,
"-"));g=ta(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=N(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",h=R(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(h)?k:/(,)/,h=h.split(k),k=Math.floor(h.length/2),l=0;l<k;l++)var s=2*l,g=g+N(R(h[s]),!0),g=g+(" "+R(h[s+1]));h=R(h[2*l]).split(/\s/);g+=N(R(h[0]),!0);2===h.length&&(g+=" "+R(h[1]));this[a]=b=g}!1!==d&&(null===b||b===t?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&m(a[f],
function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=ga()),e=d[a]||(d[a]=[]);e.push(b);K.$evalAsync(function(){!e.$$inter&&c.hasOwnProperty(a)&&b(c[a])});return function(){bb(e,b)}}};var ca=b.startSymbol(),da=b.endSymbol(),fa="{{"==ca||"}}"==da?Ya:function(a){return a.replace(/\{\{/g,ca).replace(/}}/g,da)},ia=/^ngAttr[A-Z]/;Z.$$addBindingInfo=n?function(a,b){var c=a.data("$binding")||[];G(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:v;Z.$$addBindingClass=
n?function(a){D(a,"ng-binding")}:v;Z.$$addScopeInfo=n?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:v;Z.$$addScopeClass=n?function(a,b){D(a,b?"ng-isolate-scope":"ng-scope")}:v;return Z}]}function wa(b){return hb(b.replace(Zc,""))}function bd(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function $c(b){b=y(b);var a=b.length;if(1>=a)return b;for(;a--;)8===
b[a].nodeType&&Mf.call(b,a,1);return b}function Xe(){var b={},a=!1;this.register=function(a,d){Ra(a,"controller");H(a)?P(b,a):b[a]=d};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(c,d){function e(a,b,c,d){if(!a||!H(a.$scope))throw J("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,l){var k,n,r;h=!0===h;l&&L(l)&&(r=l);if(L(f)){l=f.match(Xc);if(!l)throw Nf("ctrlfmt",f);n=l[1];r=r||l[3];f=b.hasOwnProperty(n)?b[n]:Dc(g.$scope,n,!0)||(a?Dc(d,n,!0):t);Qa(f,
n,!0)}if(h)return h=(G(f)?f[f.length-1]:f).prototype,k=Object.create(h||null),r&&e(g,r,k,n||f.name),P(function(){var a=c.invoke(f,k,g,n);a!==k&&(H(a)||z(a))&&(k=a,r&&e(g,r,k,n||f.name));return k},{instance:k,identifier:r});k=c.instantiate(f,g,n);r&&e(g,r,k,n||f.name);return k}}]}function Ye(){this.$get=["$window",function(b){return y(b.document)}]}function Ze(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Zb(b){return H(b)?aa(b)?b.toISOString():db(b):b}
function cf(){this.$get=function(){return function(b){if(!b)return"";var a=[];oc(b,function(b,d){null===b||A(b)||(G(b)?m(b,function(b,c){a.push(ma(d)+"="+ma(Zb(b)))}):a.push(ma(d)+"="+ma(Zb(b))))});return a.join("&")}}}function df(){this.$get=function(){return function(b){function a(b,e,f){null===b||A(b)||(G(b)?m(b,function(b){a(b,e+"[]")}):H(b)&&!aa(b)?oc(b,function(b,c){a(b,e+(f?"":"[")+c+(f?"":"]"))}):c.push(ma(e)+"="+ma(Zb(b))))}if(!b)return"";var c=[];a(b,"",!0);return c.join("&")}}}function $b(b,
a){if(L(b)){var c=b.replace(Of,"").trim();if(c){var d=a("Content-Type");(d=d&&0===d.indexOf(cd))||(d=(d=c.match(Pf))&&Qf[d[0]].test(c));d&&(b=wc(c))}}return b}function dd(b){var a=ga(),c;L(b)?m(b.split("\n"),function(b){c=b.indexOf(":");var e=M(R(b.substr(0,c)));b=R(b.substr(c+1));e&&(a[e]=a[e]?a[e]+", "+b:b)}):H(b)&&m(b,function(b,c){var f=M(c),g=R(b);f&&(a[f]=a[f]?a[f]+", "+g:g)});return a}function ed(b){var a;return function(c){a||(a=dd(b));return c?(c=a[M(c)],void 0===c&&(c=null),c):a}}function fd(b,
a,c,d){if(z(d))return d(b,a,c);m(d,function(d){b=d(b,a,c)});return b}function bf(){var b=this.defaults={transformResponse:[$b],transformRequest:[function(a){return H(a)&&"[object File]"!==sa.call(a)&&"[object Blob]"!==sa.call(a)&&"[object FormData]"!==sa.call(a)?db(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ia(ac),put:ia(ac),patch:ia(ac)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},a=!1;this.useApplyAsync=function(b){return w(b)?
(a=!!b,this):a};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(d,e,f,g,h,l){function k(a){function c(a){var b=P({},a);b.data=a.data?fd(a.data,a.headers,a.status,e.transformResponse):a.data;a=a.status;return 200<=a&&300>a?b:h.reject(b)}function d(a,b){var c,e={};m(a,function(a,d){z(a)?(c=a(b),null!=c&&(e[d]=c)):e[d]=a});return e}if(!ca.isObject(a))throw J("$http")("badreq",a);var e=P({method:"get",transformRequest:b.transformRequest,
transformResponse:b.transformResponse,paramSerializer:b.paramSerializer},a);e.headers=function(a){var c=b.headers,e=P({},a.headers),f,g,h,c=P({},c.common,c[M(a.method)]);a:for(f in c){g=M(f);for(h in e)if(M(h)===g)continue a;e[f]=c[f]}return d(e,ia(a))}(a);e.method=rb(e.method);e.paramSerializer=L(e.paramSerializer)?l.get(e.paramSerializer):e.paramSerializer;var f=[function(a){var d=a.headers,e=fd(a.data,ed(d),t,a.transformRequest);A(e)&&m(d,function(a,b){"content-type"===M(b)&&delete d[b]});A(a.withCredentials)&&
!A(b.withCredentials)&&(a.withCredentials=b.withCredentials);return n(a,e).then(c,c)},t],g=h.when(e);for(m(x,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var k=f.shift(),g=g.then(a,k)}g.success=function(a){Qa(a,"fn");g.then(function(b){a(b.data,b.status,b.headers,e)});return g};g.error=function(a){Qa(a,"fn");g.then(null,function(b){a(b.data,b.status,b.headers,e)});return g};return g}
function n(c,f){function l(b,c,d,e){function f(){n(c,b,d,e)}N&&(200<=b&&300>b?N.put(S,[b,c,dd(d),e]):N.remove(S));a?g.$applyAsync(f):(f(),g.$$phase||g.$apply())}function n(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?I.resolve:I.reject)({data:a,status:b,headers:ed(d),config:c,statusText:e})}function x(a){n(a.data,a.status,ia(a.headers()),a.statusText)}function m(){var a=k.pendingRequests.indexOf(c);-1!==a&&k.pendingRequests.splice(a,1)}var I=h.defer(),B=I.promise,N,D,q=c.headers,S=r(c.url,c.paramSerializer(c.params));
k.pendingRequests.push(c);B.then(m,m);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(N=H(c.cache)?c.cache:H(b.cache)?b.cache:s);N&&(D=N.get(S),w(D)?D&&z(D.then)?D.then(x,x):G(D)?n(D[1],D[0],ia(D[2]),D[3]):n(D,200,{},"OK"):N.put(S,B));A(D)&&((D=gd(c.url)?e()[c.xsrfCookieName||b.xsrfCookieName]:t)&&(q[c.xsrfHeaderName||b.xsrfHeaderName]=D),d(c.method,S,f,l,q,c.timeout,c.withCredentials,c.responseType));return B}function r(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);
return a}var s=f("$http");b.paramSerializer=L(b.paramSerializer)?l.get(b.paramSerializer):b.paramSerializer;var x=[];m(c,function(a){x.unshift(L(a)?l.get(a):l.invoke(a))});k.pendingRequests=[];(function(a){m(arguments,function(a){k[a]=function(b,c){return k(P({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){m(arguments,function(a){k[a]=function(b,c,d){return k(P({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");k.defaults=b;return k}]}function Rf(){return new O.XMLHttpRequest}
function ef(){this.$get=["$browser","$window","$document",function(b,a,c){return Sf(b,Rf,b.defer,a.angular.callbacks,c[0])}]}function Sf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),n=null;f.type="text/javascript";f.src=a;f.async=!0;n=function(a){f.removeEventListener("load",n,!1);f.removeEventListener("error",n,!1);e.body.removeChild(f);f=null;var g=-1,x="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),x=a.type,g="error"===a.type?404:200);c&&c(g,x)};f.addEventListener("load",
n,!1);f.addEventListener("error",n,!1);e.body.appendChild(f);return n}return function(e,h,l,k,n,r,s,x){function C(){p&&p();K&&K.abort()}function F(a,d,e,f,g){I!==t&&c.cancel(I);p=K=null;a(d,e,f,g);b.$$completeOutstandingRequest(v)}b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==M(e)){var u="_"+(d.counter++).toString(36);d[u]=function(a){d[u].data=a;d[u].called=!0};var p=f(h.replace("JSON_CALLBACK","angular.callbacks."+u),u,function(a,b){F(k,a,d[u].data,"",b);d[u]=v})}else{var K=a();K.open(e,
h,!0);m(n,function(a,b){w(a)&&K.setRequestHeader(b,a)});K.onload=function(){var a=K.statusText||"",b="response"in K?K.response:K.responseText,c=1223===K.status?204:K.status;0===c&&(c=b?200:"file"==Ba(h).protocol?404:0);F(k,c,b,K.getAllResponseHeaders(),a)};e=function(){F(k,-1,null,null,"")};K.onerror=e;K.onabort=e;s&&(K.withCredentials=!0);if(x)try{K.responseType=x}catch(q){if("json"!==x)throw q;}K.send(l)}if(0<r)var I=c(C,r);else r&&z(r.then)&&r.then(C)}}function $e(){var b="{{",a="}}";this.startSymbol=
function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(n,b).replace(r,a)}function h(f,h,n,r){function u(a){try{var b=a;a=n?e.getTrusted(n,b):e.valueOf(b);var c;if(r&&!w(a))c=a;else if(null==a)c="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=db(a)}c=a}return c}catch(g){d(Ka.interr(f,g))}}r=!!r;for(var p,m,q=0,I=
[],B=[],N=f.length,D=[],t=[];q<N;)if(-1!=(p=f.indexOf(b,q))&&-1!=(m=f.indexOf(a,p+l)))q!==p&&D.push(g(f.substring(q,p))),q=f.substring(p+l,m),I.push(q),B.push(c(q,u)),q=m+k,t.push(D.length),D.push("");else{q!==N&&D.push(g(f.substring(q)));break}n&&1<D.length&&Ka.throwNoconcat(f);if(!h||I.length){var S=function(a){for(var b=0,c=I.length;b<c;b++){if(r&&A(a[b]))return;D[t[b]]=a[b]}return D.join("")};return P(function(a){var b=0,c=I.length,e=Array(c);try{for(;b<c;b++)e[b]=B[b](a);return S(e)}catch(g){d(Ka.interr(f,
g))}},{exp:f,expressions:I,$$watchDelegate:function(a,b){var c;return a.$watchGroup(B,function(d,e){var f=S(d);z(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=b.length,k=a.length,n=new RegExp(b.replace(/./g,f),"g"),r=new RegExp(a.replace(/./g,f),"g");h.startSymbol=function(){return b};h.endSymbol=function(){return a};return h}]}function af(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,l,k){var n=4<arguments.length,r=n?za.call(arguments,4):[],s=a.setInterval,x=a.clearInterval,
C=0,F=w(k)&&!k,u=(F?d:c).defer(),p=u.promise;l=w(l)?l:0;p.then(null,null,n?function(){e.apply(null,r)}:e);p.$$intervalId=s(function(){u.notify(C++);0<l&&C>=l&&(u.resolve(C),x(p.$$intervalId),delete f[p.$$intervalId]);F||b.$apply()},h);f[p.$$intervalId]=u;return p}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):!1};return e}]}function ge(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",
GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a",ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"]},pluralCat:function(b){return 1===b?"one":"other"}}}}function bc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=ob(b[a]);return b.join("/")}function hd(b,a){var c=Ba(b);a.$$protocol=c.protocol;
a.$$host=c.hostname;a.$$port=W(c.port)||Tf[c.protocol]||null}function id(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=Ba(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname);a.$$search=zc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function ya(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ja(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Bb(b){return b.replace(/(#.+)|#$/,
"$1")}function cc(b){return b.substr(0,Ja(b).lastIndexOf("/")+1)}function dc(b,a){this.$$html5=!0;a=a||"";var c=cc(b);hd(b,this);this.$$parse=function(a){var b=ya(c,a);if(!L(b))throw Cb("ipthprfx",a,c);id(b,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Qb(this.$$search),b=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=bc(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),
!0;var f,g;(f=ya(b,d))!==t?(g=f,g=(f=ya(a,f))!==t?c+(ya("/",f)||f):b+g):(f=ya(c,d))!==t?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function ec(b,a){var c=cc(b);hd(b,this);this.$$parse=function(d){var e=ya(b,d)||ya(c,d),f;A(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",A(e)&&(b=d,this.replace())):(f=ya(a,e),A(f)&&(f=e));id(f,this);d=this.$$path;var e=b,g=/^\/[A-Z]:(\/.*)/;0===f.indexOf(e)&&(f=f.replace(e,""));g.exec(f)||(d=(f=g.exec(d))?f[1]:d);this.$$path=d;this.$$compose()};this.$$compose=
function(){var c=Qb(this.$$search),e=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=bc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ja(b)==Ja(a)?(this.$$parse(a),!0):!1}}function jd(b,a){this.$$html5=!0;ec.apply(this,arguments);var c=cc(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Ja(d)?f=d:(g=ya(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=
Qb(this.$$search),e=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=bc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function Db(b){return function(){return this[b]}}function kd(b,a){return function(c){if(A(c))return this[b];this[b]=a(c);this.$$compose();return this}}function ff(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return w(a)?(b=a,this):b};this.html5Mode=function(b){return ab(b)?(a.enabled=b,this):H(b)?(ab(b.enabled)&&(a.enabled=b.enabled),
ab(b.requireBase)&&(a.requireBase=b.requireBase),ab(b.rewriteLinks)&&(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,d,e,f,g){function h(a,b,c){var e=k.url(),f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function l(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,n;n=d.baseHref();var r=d.url(),s;if(a.enabled){if(!n&&a.requireBase)throw Cb("nobase");s=r.substring(0,
r.indexOf("/",r.indexOf("//")+2))+(n||"/");n=e.history?dc:jd}else s=Ja(r),n=ec;k=new n(s,"#"+b);k.$$parseLinkUrl(r,r);k.$$state=d.state();var x=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&!b.shiftKey&&2!=b.which&&2!=b.button){for(var e=y(b.target);"a"!==ta(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),l=e.attr("href")||e.attr("xlink:href");H(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=Ba(h.animVal).href);x.test(h)||
!h||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(h,l)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});Bb(k.absUrl())!=Bb(r)&&d.url(k.absUrl(),!0);var C=!0;d.onUrlChange(function(a,b){c.$evalAsync(function(){var d=k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,h(d,!1,e)):(C=!1,l(d,e)))});c.$$phase||c.$digest()});c.$watch(function(){var a=
Bb(d.url()),b=Bb(k.absUrl()),f=d.state(),g=k.$$replace,n=a!==b||k.$$html5&&e.history&&f!==k.$$state;if(C||n)C=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===b&&(d?(k.$$parse(a),k.$$state=f):(n&&h(b,g,f===k.$$state?null:k.$$state),l(a,f)))});k.$$replace=!1});return k}]}function gf(){var b=!0,a=this;this.debugEnabled=function(a){return w(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&
(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||v;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=[];m(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}
function Ca(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw da("isecfld",a);return b}function oa(b,a){if(b){if(b.constructor===b)throw da("isecfn",a);if(b.window===b)throw da("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw da("isecdom",a);if(b===Object)throw da("isecobj",a);}return b}function ld(b,a){if(b){if(b.constructor===b)throw da("isecfn",a);if(b===Uf||b===Vf||b===Wf)throw da("isecff",a);
}}function Xf(b,a){return"undefined"!==typeof b?b:a}function md(b,a){return"undefined"===typeof b?a:"undefined"===typeof a?b:b+a}function T(b,a){var c,d;switch(b.type){case q.Program:c=!0;m(b.body,function(b){T(b.expression,a);c=c&&b.expression.constant});b.constant=c;break;case q.Literal:b.constant=!0;b.toWatch=[];break;case q.UnaryExpression:T(b.argument,a);b.constant=b.argument.constant;b.toWatch=b.argument.toWatch;break;case q.BinaryExpression:T(b.left,a);T(b.right,a);b.constant=b.left.constant&&
b.right.constant;b.toWatch=b.left.toWatch.concat(b.right.toWatch);break;case q.LogicalExpression:T(b.left,a);T(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=b.constant?[]:[b];break;case q.ConditionalExpression:T(b.test,a);T(b.alternate,a);T(b.consequent,a);b.constant=b.test.constant&&b.alternate.constant&&b.consequent.constant;b.toWatch=b.constant?[]:[b];break;case q.Identifier:b.constant=!1;b.toWatch=[b];break;case q.MemberExpression:T(b.object,a);b.computed&&T(b.property,a);
b.constant=b.object.constant&&(!b.computed||b.property.constant);b.toWatch=[b];break;case q.CallExpression:c=b.filter?!a(b.callee.name).$stateful:!1;d=[];m(b.arguments,function(b){T(b,a);c=c&&b.constant;b.constant||d.push.apply(d,b.toWatch)});b.constant=c;b.toWatch=b.filter&&!a(b.callee.name).$stateful?d:[b];break;case q.AssignmentExpression:T(b.left,a);T(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=[b];break;case q.ArrayExpression:c=!0;d=[];m(b.elements,function(b){T(b,a);c=
c&&b.constant;b.constant||d.push.apply(d,b.toWatch)});b.constant=c;b.toWatch=d;break;case q.ObjectExpression:c=!0;d=[];m(b.properties,function(b){T(b.value,a);c=c&&b.value.constant;b.value.constant||d.push.apply(d,b.value.toWatch)});b.constant=c;b.toWatch=d;break;case q.ThisExpression:b.constant=!1,b.toWatch=[]}}function nd(b){if(1==b.length){b=b[0].expression;var a=b.toWatch;return 1!==a.length?a:a[0]!==b?a:t}}function od(b){return b.type===q.Identifier||b.type===q.MemberExpression}function pd(b){if(1===
b.body.length&&od(b.body[0].expression))return{type:q.AssignmentExpression,left:b.body[0].expression,right:{type:q.NGValueParameter},operator:"="}}function qd(b){return 0===b.body.length||1===b.body.length&&(b.body[0].expression.type===q.Literal||b.body[0].expression.type===q.ArrayExpression||b.body[0].expression.type===q.ObjectExpression)}function rd(b,a){this.astBuilder=b;this.$filter=a}function sd(b,a){this.astBuilder=b;this.$filter=a}function Eb(b,a,c,d){oa(b,d);a=a.split(".");for(var e,f=0;1<
a.length;f++){e=Ca(a.shift(),d);var g=oa(b[e],d);g||(g={},b[e]=g);b=g}e=Ca(a.shift(),d);oa(b[e],d);return b[e]=c}function Fb(b){return"constructor"==b}function fc(b){return z(b.valueOf)?b.valueOf():Yf.call(b)}function hf(){var b=ga(),a=ga();this.$get=["$filter","$sniffer",function(c,d){function e(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=fc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function f(a,b,c,d,f){var g=d.inputs,h;if(1===g.length){var k=e,g=g[0];return a.$watch(function(a){var b=
g(a);e(b,k)||(h=d(a,t,t,[b]),k=b&&fc(b));return h},b,c,f)}for(var l=[],n=[],r=0,m=g.length;r<m;r++)l[r]=e,n[r]=null;return a.$watch(function(a){for(var b=!1,c=0,f=g.length;c<f;c++){var k=g[c](a);if(b||(b=!e(k,l[c])))n[c]=k,l[c]=k&&fc(k)}b&&(h=d(a,t,t,n));return h},b,c,f)}function g(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;z(b)&&b.apply(this,arguments);w(a)&&d.$$postDigest(function(){w(f)&&e()})},c)}function h(a,b,c,d){function e(a){var b=!0;m(a,function(a){w(a)||
(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;z(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function l(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){z(b)&&b.apply(this,arguments);e()},c)}function k(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==h&&c!==g?function(c,d,e,f){e=a(c,d,e,f);return b(e,c,d)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return w(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==
f?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=f,c.inputs=a.inputs?a.inputs:[a]);return c}var n={csp:d.csp,expensiveChecks:!1},r={csp:d.csp,expensiveChecks:!0};return function(d,e,C){var m,u,p;switch(typeof d){case "string":p=d=d.trim();var q=C?a:b;m=q[p];m||(":"===d.charAt(0)&&":"===d.charAt(1)&&(u=!0,d=d.substring(2)),C=C?r:n,m=new gc(C),m=(new hc(m,c,C)).parse(d),m.constant?m.$$watchDelegate=l:u?m.$$watchDelegate=m.literal?h:g:m.inputs&&(m.$$watchDelegate=f),q[p]=m);return k(m,
e);case "function":return k(d,e);default:return v}}}]}function kf(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return td(function(a){b.$evalAsync(a)},a)}]}function lf(){this.$get=["$browser","$exceptionHandler",function(b,a){return td(function(a){b.defer(a)},a)}]}function td(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&
c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=t;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{z(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=J("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||
[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(H(b)||z(b))d=b&&b.then;z(d)?(this.promise.$$state.status=
-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(z(b)?
b(c):c)}catch(h){a(h)}}})}};var l=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{z(c)&&(d=c())}catch(e){return l(e,!1)}return d&&z(d.then)?d.then(function(){return l(a,b)},function(a){return l(a,!1)}):l(a,b)},n=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},r=function x(a){if(!z(a))throw h("norslvr",a);if(!(this instanceof x))return new x(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};
r.defer=function(){return new g};r.reject=function(a){var b=new g;b.reject(a);return b.promise};r.when=n;r.resolve=n;r.all=function(a){var b=new g,c=0,d=G(a)?[]:{};m(a,function(a,e){c++;n(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return r}function uf(){this.$get=["$window","$timeout",function(b,a){function c(){for(var a=0;a<n.length;a++){var b=n[a];b&&(n[a]=null,b())}k=n.length=0}function d(a){var b=
n.length;k++;n.push(a);0===b&&(l=h(c));return function(){0<=b&&(b=n[b]=null,0===--k&&l&&(l(),l=null,n.length=0))}}var e=b.requestAnimationFrame||b.webkitRequestAnimationFrame,f=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,g=!!e,h=g?function(a){var b=e(a);return function(){f(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};d.supported=g;var l,k=0,n=[];return d}]}function jf(){function b(a){function b(){this.$$watchers=this.$$nextSibling=
this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++nb;this.$$ChildScope=null}b.prototype=a;return b}var a=10,c=J("$rootScope"),d=null,e=null;this.digestTtl=function(b){arguments.length&&(a=b);return a};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(f,g,h,l){function k(a){a.currentScope.$$destroyed=!0}function n(){this.$id=++nb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=
this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function r(a){if(p.$$phase)throw c("inprog",p.$$phase);p.$$phase=a}function s(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function x(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function q(){}function F(){for(;I.length;)try{I.shift()()}catch(a){g(a)}e=null}function u(){null===e&&(e=
l.defer(function(){p.$apply(F)}))}n.prototype={constructor:n,$new:function(a,c){var d;c=c||this;a?(d=new n,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=b(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(a||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,c,e){var f=h(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,c,f,a);var g=this,k=g.$$watchers,l=
{fn:b,last:q,get:f,exp:e||a,eq:!!c};d=null;z(b)||(l.fn=v);k||(k=g.$$watchers=[]);k.unshift(l);s(this,1);return function(){0<=bb(k,l)&&s(g,-1);d=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});m(a,function(a,b){var k=g.$watch(a,function(a,
f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!A(e)){if(H(e))if(Ea(e))for(f!==r&&(f=r,m=f.length=0,l++),a=e.length,m!==a&&(l++,f.length=m=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==s&&(f=s={},m=0,l++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(m++,f[b]=g,l++));if(m>a)for(b in l++,f)e.hasOwnProperty(b)||
(m--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,g,k=1<b.length,l=0,n=h(a,c),r=[],s={},p=!0,m=0;return this.$watch(n,function(){p?(p=!1,b(e,e,d)):b(e,g,d);if(k)if(H(e))if(Ea(e)){g=Array(e.length);for(var a=0;a<e.length;a++)g[a]=e[a]}else for(a in g={},e)Xa.call(e,a)&&(g[a]=e[a]);else g=e})},$digest:function(){var b,f,h,k,n,s,m=a,x,u=[],E,I;r("$digest");l.$$checkUrlChange();this===p&&null!==e&&(l.defer.cancel(e),F());d=null;do{s=!1;for(x=this;t.length;){try{I=t.shift(),
I.scope.$eval(I.expression,I.locals)}catch(v){g(v)}d=null}a:do{if(k=x.$$watchers)for(n=k.length;n--;)try{if(b=k[n])if((f=b.get(x))!==(h=b.last)&&!(b.eq?ka(f,h):"number"===typeof f&&"number"===typeof h&&isNaN(f)&&isNaN(h)))s=!0,d=b,b.last=b.eq?fa(f,null):f,b.fn(f,h===q?f:h,x),5>m&&(E=4-m,u[E]||(u[E]=[]),u[E].push({msg:z(b.exp)?"fn: "+(b.exp.name||b.exp.toString()):b.exp,newVal:f,oldVal:h}));else if(b===d){s=!1;break a}}catch(A){g(A)}if(!(k=x.$$watchersCount&&x.$$childHead||x!==this&&x.$$nextSibling))for(;x!==
this&&!(k=x.$$nextSibling);)x=x.$parent}while(x=k);if((s||t.length)&&!m--)throw p.$$phase=null,c("infdig",a,u);}while(s||t.length);for(p.$$phase=null;w.length;)try{w.shift()()}catch(y){g(y)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===p&&l.$$applicationDestroyed();s(this,-this.$$watchersCount);for(var b in this.$$listenerCount)x(this,this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==
this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=v;this.$on=this.$watch=this.$watchGroup=function(){return v};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}},$eval:function(a,b){return h(a)(this,b)},
$evalAsync:function(a,b){p.$$phase||t.length||l.defer(function(){t.length&&p.$digest()});t.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){w.push(a)},$apply:function(a){try{return r("$apply"),this.$eval(a)}catch(b){g(b)}finally{p.$$phase=null;try{p.$digest()}catch(c){throw g(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&I.push(b);u()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||
(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,x(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,f=!1,h={name:a,targetScope:e,stopPropagation:function(){f=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=cb([h],arguments,1),l,n;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(n=d.length;l<n;l++)if(d[l])try{d[l].apply(null,k)}catch(r){g(r)}else d.splice(l,1),l--,n--;if(f)return h.currentScope=
null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var f=cb([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,f)}catch(l){g(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=
c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var p=new n,t=p.$$asyncQueue=[],w=p.$$postDigestQueue=[],I=p.$$applyAsyncQueue=[];return p}]}function he(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return w(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return w(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;f=Ba(c).href;return""===f||f.match(e)?c:"unsafe:"+
f}}}function Zf(b){if("self"===b)return b;if(L(b)){if(-1<b.indexOf("***"))throw Da("iwcard",b);b=ud(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(Za(b))return new RegExp("^"+b.source+"$");throw Da("imatcher");}function vd(b){var a=[];w(b)&&m(b,function(b){a.push(Zf(b))});return a}function nf(){this.SCE_CONTEXTS=pa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=vd(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&
(a=vd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?gd(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Da("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[pa.HTML]=e(g);h[pa.CSS]=e(g);h[pa.URL]=
e(g);h[pa.JS]=e(g);h[pa.RESOURCE_URL]=e(h[pa.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Da("icontext",a,b);if(null===b||b===t||""===b)return b;if("string"!==typeof b)throw Da("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===t||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(c===pa.RESOURCE_URL){var g=Ba(e.toString()),r,s,m=!1;r=0;for(s=b.length;r<s;r++)if(d(b[r],g)){m=!0;break}if(m)for(r=
0,s=a.length;r<s;r++)if(d(a[r],g)){m=!1;break}if(m)return e;throw Da("insecurl",e.toString());}if(c===pa.HTML)return f(e);throw Da("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function mf(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&8>Ua)throw Da("iequirks");var d=ia(pa);d.isEnabled=function(){return b};d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=
d.getTrusted=function(a,b){return b},d.valueOf=Ya);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;m(pa,function(a,b){var c=M(b);d[hb("parse_as_"+c)]=function(b){return e(a,b)};d[hb("get_trusted_"+c)]=function(b){return f(a,b)};d[hb("trust_as_"+c)]=function(b){return g(a,b)}});return d}]}function of(){this.$get=["$window","$document",function(b,a){var c={},d=W((/android (\d+)/.exec(M((b.navigator||
{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body&&f.body.style,k=!1,n=!1;if(l){for(var r in l)if(k=h.exec(r)){g=k[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in l&&"webkit");k=!!("transition"in l||g+"Transition"in l);n=!!("animation"in l||g+"Animation"in l);!d||k&&n||(k=L(l.webkitTransition),n=L(l.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===
a&&11>=Ua)return!1;if(A(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:fb(),vendorPrefix:g,transitions:k,animations:n,android:d}}]}function qf(){this.$get=["$templateCache","$http","$q","$sce",function(b,a,c,d){function e(f,g){e.totalPendingRequests++;L(f)&&b.get(f)||(f=d.getTrustedResourceUrl(f));var h=a.defaults&&a.defaults.transformResponse;G(h)?h=h.filter(function(a){return a!==$b}):h===$b&&(h=null);return a.get(f,{cache:b,transformResponse:h})["finally"](function(){e.totalPendingRequests--}).then(function(a){b.put(f,
a.data);return a.data},function(a){if(!g)throw ea("tpload",f,a.status,a.statusText);return c.reject(a)})}e.totalPendingRequests=0;return e}]}function rf(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];m(a,function(a){var d=ca.element(a).data("$binding");d&&m(d,function(d){c?(new RegExp("(^|\\s)"+ud(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,
b,c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var l=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(l.length)return l}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function sf(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,l,k){z(f)||(k=l,l=f,f=v);var n=za.call(arguments,3),r=w(k)&&!k,s=(r?d:c).defer(),
m=s.promise,q;q=a.defer(function(){try{s.resolve(f.apply(null,n))}catch(a){s.reject(a),e(a)}finally{delete g[m.$$timeoutId]}r||b.$apply()},l);m.$$timeoutId=q;g[q]=s;return m}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Ba(b){Ua&&(X.setAttribute("href",b),b=X.href);X.setAttribute("href",b);return{href:X.href,protocol:X.protocol?X.protocol.replace(/:$/,""):"",host:X.host,
search:X.search?X.search.replace(/^\?/,""):"",hash:X.hash?X.hash.replace(/^#/,""):"",hostname:X.hostname,port:X.port,pathname:"/"===X.pathname.charAt(0)?X.pathname:"/"+X.pathname}}function gd(b){b=L(b)?Ba(b):b;return b.protocol===wd.protocol&&b.host===wd.host}function tf(){this.$get=ra(O)}function xd(b){function a(a){try{return decodeURIComponent(a)}catch(b){return a}}var c=b[0]||{},d={},e="";return function(){var b,g,h,l,k;b=c.cookie||"";if(b!==e)for(e=b,b=e.split("; "),d={},h=0;h<b.length;h++)g=
b[h],l=g.indexOf("="),0<l&&(k=a(g.substring(0,l)),d[k]===t&&(d[k]=a(g.substring(l+1))));return d}}function xf(){this.$get=xd}function Lc(b){function a(c,d){if(H(c)){var e={};m(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",yd);a("date",zd);a("filter",$f);a("json",ag);a("limitTo",bg);a("lowercase",cg);a("number",Ad);a("orderBy",Bd);a("uppercase",dg)}function $f(){return function(b,
a,c){if(!Ea(b)){if(null==b)return b;throw J("filter")("notarray",b);}var d;switch(ic(a)){case "function":break;case "boolean":case "null":case "number":case "string":d=!0;case "object":a=eg(a,c,d);break;default:return b}return Array.prototype.filter.call(b,a)}}function eg(b,a,c){var d=H(b)&&"$"in b;!0===a?a=ka:z(a)||(a=function(a,b){if(A(a))return!1;if(null===a||null===b)return a===b;if(H(b)||H(a)&&!rc(a))return!1;a=M(""+a);b=M(""+b);return-1!==a.indexOf(b)});return function(e){return d&&!H(e)?La(e,
b.$,a,!1):La(e,b,a,c)}}function La(b,a,c,d,e){var f=ic(b),g=ic(a);if("string"===g&&"!"===a.charAt(0))return!La(b,a.substring(1),c,d);if(G(b))return b.some(function(b){return La(b,a,c,d)});switch(f){case "object":var h;if(d){for(h in b)if("$"!==h.charAt(0)&&La(b[h],a,c,!0))return!0;return e?!1:La(b,a,c,!1)}if("object"===g){for(h in a)if(e=a[h],!z(e)&&!A(e)&&(f="$"===h,!La(f?b:b[h],e,c,f,f)))return!1;return!0}return c(b,a);case "function":return!1;default:return c(b,a)}}function ic(b){return null===
b?"null":typeof b}function yd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){A(d)&&(d=a.CURRENCY_SYM);A(e)&&(e=a.PATTERNS[1].maxFrac);return null==b?b:Cd(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function Ad(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:Cd(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Cd(b,a,c,d,e){if(H(b))return"";var f=0>b;b=Math.abs(b);var g=Infinity===b;if(!g&&!isFinite(b))return"";var h=b+"",l="",k=!1,n=[];g&&(l="\u221e");
if(!g&&-1!==h.indexOf("e")){var r=h.match(/([\d\.]+)e(-?)(\d+)/);r&&"-"==r[2]&&r[3]>e+1?b=0:(l=h,k=!0)}if(g||k)0<e&&1>b&&(l=b.toFixed(e),b=parseFloat(l));else{g=(h.split(Dd)[1]||"").length;A(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var g=(""+b).split(Dd),h=g[0],g=g[1]||"",r=0,s=a.lgSize,m=a.gSize;if(h.length>=s+m)for(r=h.length-s,k=0;k<r;k++)0===(r-k)%m&&0!==k&&(l+=c),l+=h.charAt(k);for(k=r;k<h.length;k++)0===(h.length-k)%s&&0!==k&&
(l+=c),l+=h.charAt(k);for(;g.length<e;)g+="0";e&&"0"!==e&&(l+=d+g.substr(0,e))}0===b&&(f=!1);n.push(f?a.negPre:a.posPre,l,f?a.negSuf:a.posSuf);return n.join("")}function Gb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function Y(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Gb(e,a,d)}}function Hb(b,a){return function(c,d){var e=c["get"+b](),f=rb(a?"SHORT"+b:b);return d[f][e]}}function Ed(b){var a=
(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function Fd(b){return function(a){var c=Ed(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Gb(a,b)}}function jc(b,a){return 0>=b.getFullYear()?a.ERAS[0]:a.ERAS[1]}function zd(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=W(b[9]+b[10]),g=W(b[9]+b[11]));h.call(a,W(b[1]),
W(b[2])-1,W(b[3]));f=W(b[4]||0)-f;g=W(b[5]||0)-g;h=W(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",h=[],l,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;L(c)&&(c=fg.test(c)?W(c):a(c));V(c)&&(c=new Date(c));if(!aa(c)||!isFinite(c.getTime()))return c;for(;e;)(k=gg.exec(e))?(h=cb(h,k,1),e=h.pop()):(h.push(e),e=null);var n=c.getTimezoneOffset();
f&&(n=xc(f,c.getTimezoneOffset()),c=Pb(c,f,!0));m(h,function(a){l=hg[a];g+=l?l(c,b.DATETIME_FORMATS,n):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function ag(){return function(b,a){A(a)&&(a=2);return db(b,a)}}function bg(){return function(b,a,c){a=Infinity===Math.abs(Number(a))?Number(a):W(a);if(isNaN(a))return b;V(b)&&(b=b.toString());if(!G(b)&&!L(b))return b;c=!c||isNaN(c)?0:W(c);c=0>c&&c>=-b.length?b.length+c:c;return 0<=a?b.slice(c,c+a):0===c?b.slice(a,b.length):b.slice(Math.max(0,
c+a),c)}}function Bd(b){function a(a,c){c=c?-1:1;return a.map(function(a){var d=1,h=Ya;if(z(a))h=a;else if(L(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))d="-"==a.charAt(0)?-1:1,a=a.substring(1);if(""!==a&&(h=b(a),h.constant))var l=h(),h=function(a){return a[l]}}return{get:h,descending:d*c}})}function c(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}return function(b,e,f){if(!Ea(b))return b;G(e)||(e=[e]);0===e.length&&(e=["+"]);var g=a(e,f);b=Array.prototype.map.call(b,
function(a,b){return{value:a,predicateValues:g.map(function(d){var e=d.get(a);d=typeof e;if(null===e)d="string",e="null";else if("string"===d)e=e.toLowerCase();else if("object"===d)a:{if("function"===typeof e.valueOf&&(e=e.valueOf(),c(e)))break a;if(rc(e)&&(e=e.toString(),c(e)))break a;e=b}return{value:e,type:d}})}});b.sort(function(a,b){for(var c=0,d=0,e=g.length;d<e;++d){var c=a.predicateValues[d],f=b.predicateValues[d],m=0;c.type===f.type?c.value!==f.value&&(m=c.value<f.value?-1:1):m=c.type<f.type?
-1:1;if(c=m*g[d].descending)break}return c});return b=b.map(function(a){return a.value})}}function Ma(b){z(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ra(b)}function Gd(b,a,c,d,e){var f=this,g=[],h=f.$$parentForm=b.parent().controller("form")||Ib;f.$error={};f.$$success={};f.$pending=t;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){m(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=
function(){m(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ra(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];m(f.$pending,function(b,c){f.$setValidity(c,null,a)});m(f.$error,function(b,c){f.$setValidity(c,null,a)});m(f.$$success,function(b,c){f.$setValidity(c,null,a)});bb(g,a)};Hd({ctrl:this,$element:b,set:function(a,b,
c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(bb(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,Va);d.addClass(b,Jb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.setClass(b,Va,Jb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;m(g,function(a){a.$setPristine()})};f.$setUntouched=function(){m(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,
"ng-submitted");f.$submitted=!0;h.$setSubmitted()}}function kc(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function kb(b,a,c,d,e,f){var g=M(a[0].type);if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;l()})}var l=function(b){k&&(f.defer.cancel(k),k=null);if(!h){var e=a.val();b=b&&b.type;"password"===g||c.ngTrim&&"false"===c.ngTrim||(e=R(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,b)}};
if(e.hasEvent("input"))a.on("input",l);else{var k,n=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||n(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",n)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}function Kb(b,a){return function(c,d){var e,f;if(aa(c))return c;if(L(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));
if(ig.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},m(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function lb(b,a,c,d){return function(e,f,g,h,l,k,n){function r(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function s(a){return w(a)?
aa(a)?a:c(a):t}Id(e,f,g,h);kb(e,f,g,h,l,k);var m=h&&h.$options&&h.$options.timezone,q;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,q),m&&(b=Pb(b,m)),b):t});h.$formatters.push(function(a){if(a&&!aa(a))throw Lb("datefmt",a);if(r(a))return(q=a)&&m&&(q=Pb(q,m,!0)),n("date")(a,d,m);q=null;return""});if(w(g.min)||g.ngMin){var F;h.$validators.min=function(a){return!r(a)||A(F)||c(a)>=F};g.$observe("min",function(a){F=s(a);h.$validate()})}if(w(g.max)||g.ngMax){var u;
h.$validators.max=function(a){return!r(a)||A(u)||c(a)<=u};g.$observe("max",function(a){u=s(a);h.$validate()})}}}function Id(b,a,c,d){(d.$$hasNativeValidators=H(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?t:b})}function Jd(b,a,c,d,e){if(w(d)){b=b(d);if(!b.constant)throw J("ngModel")("constexpr",c,d);return b(a)}return e}function lc(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=
a[d],n=0;n<b.length;n++)if(e==b[n])continue a;c.push(e)}return c}function e(a){var b=[];return G(a)?(m(a,function(a){b=b.concat(e(a))}),b):L(a)?a.split(" "):H(a)?(m(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,g,h){function l(a,b){var c=g.data("$classCounts")||ga(),d=[];m(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%2===a){var k=e(b||[]);if(!n){var m=
l(k,1);h.$addClass(m)}else if(!ka(b,n)){var q=e(n),m=d(k,q),k=d(q,k),m=l(m,1),k=l(k,-1);m&&m.length&&c.addClass(g,m);k&&k.length&&c.removeClass(g,k)}}n=ia(b)}var n;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=l(k,1),h.$addClass(g)):(g=l(k,-1),h.$removeClass(g))}})}}}]}function Hd(b){function a(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}
function c(b,c){b=b?"-"+Bc(b,"-"):"";a(mb+b,!0===c);a(Kd+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,l=b.parentForm,k=b.$animate;f[Kd]=!(f[mb]=e.hasClass(mb));d.$setValidity=function(b,e,f){e===t?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&h(d.$pending,b,f),Ld(d.$pending)&&(d.$pending=t));ab(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(Md,!0),d.$valid=d.$invalid=t,c("",null)):(a(Md,
!1),d.$valid=Ld(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?t:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);l.$setValidity(b,e,d)}}function Ld(b){if(b)for(var a in b)if(b.hasOwnProperty(a))return!1;return!0}var jg=/^\/(.+)\/([a-z]*)$/,M=function(b){return L(b)?b.toLowerCase():b},Xa=Object.prototype.hasOwnProperty,rb=function(b){return L(b)?b.toUpperCase():b},Ua,y,la,za=[].slice,Mf=[].splice,kg=[].push,sa=Object.prototype.toString,sc=Object.getPrototypeOf,Fa=J("ng"),ca=
O.angular||(O.angular={}),gb,nb=0;Ua=U.documentMode;v.$inject=[];Ya.$inject=[];var G=Array.isArray,uc=/^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/,R=function(b){return L(b)?b.trim():b},ud=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},fb=function(){if(w(fb.isActive_))return fb.isActive_;var b=!(!U.querySelector("[ng-csp]")&&!U.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return fb.isActive_=
b},pb=function(){if(w(pb.name_))return pb.name_;var b,a,c=Oa.length,d,e;for(a=0;a<c;++a)if(d=Oa[a],b=U.querySelector("["+d.replace(":","\\:")+"jq]")){e=b.getAttribute(d+"jq");break}return pb.name_=e},Oa=["ng-","data-ng-","ng:","x-ng-"],be=/[A-Z]/g,Cc=!1,Rb,qa=1,Na=3,fe={full:"1.4.3",major:1,minor:4,dot:3,codeName:"foam-acceleration"};Q.expando="ng339";var ib=Q.cache={},Df=1;Q._data=function(b){return this.cache[b[this.expando]]||{}};var yf=/([\:\-\_]+(.))/g,zf=/^moz([A-Z])/,lg={mouseleave:"mouseout",
mouseenter:"mouseover"},Ub=J("jqLite"),Cf=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Tb=/<|&#?\w+;/,Af=/<([\w:]+)/,Bf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,na={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};na.optgroup=na.option;na.tbody=na.tfoot=na.colgroup=na.caption=na.thead;
na.th=na.td;var Pa=Q.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===U.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),Q(O).on("load",a))},toString:function(){var b=[];m(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?y(this[b]):y(this[this.length+b])},length:0,push:kg,sort:[].sort,splice:[].splice},Ab={};m("multiple selected checked disabled readOnly required open".split(" "),function(b){Ab[M(b)]=b});var Tc={};m("input select option textarea button form details".split(" "),
function(b){Tc[b]=!0});var Uc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};m({data:Wb,removeData:ub,hasData:function(b){for(var a in ib[b.ng339])return!0;return!1}},function(b,a){Q[a]=b});m({data:Wb,inheritedData:zb,scope:function(b){return y.data(b,"$scope")||zb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return y.data(b,"$isolateScope")||y.data(b,"$isolateScopeNoTemplate")},controller:Qc,injector:function(b){return zb(b,
"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:wb,css:function(b,a,c){a=hb(a);if(w(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=b.nodeType;if(d!==Na&&2!==d&&8!==d)if(d=M(a),Ab[d])if(w(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||v).specified?d:t;else if(w(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?t:b},prop:function(b,a,c){if(w(c))b[a]=c;else return b[a]},
text:function(){function b(a,b){if(A(b)){var d=a.nodeType;return d===qa||d===Na?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(A(a)){if(b.multiple&&"select"===ta(b)){var c=[];m(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(A(a))return b.innerHTML;tb(b,!0);b.innerHTML=a},empty:Rc},function(b,a){Q.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Rc&&(2==b.length&&b!==wb&&b!==Qc?
a:d)===t){if(H(a)){for(e=0;e<g;e++)if(b===Wb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===t?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});m({removeData:ub,on:function a(c,d,e,f){if(w(f))throw Ub("onargs");if(Mc(c)){var g=vb(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=Gf(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],l=g.length;l--;){d=g[l];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===
d?a(c,lg[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),k=f[d]);k.push(e)}}},off:Pc,one:function(a,c,d){a=y(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;tb(a);m(new Q(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];m(a.childNodes,function(a){a.nodeType===qa&&c.push(a)});return c},contents:function(a){return a.contentDocument||
a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===qa||11===d){c=new Q(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===qa){var d=a.firstChild;m(new Q(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=y(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Xb,detach:function(a){Xb(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new Q(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,
d.nextSibling);d=h}},addClass:yb,removeClass:xb,toggleClass:function(a,c,d){c&&m(c.split(" "),function(c){var f=d;A(f)&&(f=!wb(a,c));(f?yb:xb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Vb,triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=vb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===
this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:v,type:g,target:a},c.type&&(e=P(e,c)),c=ia(h),f=d?[e].concat(d):[e],m(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){Q.prototype[c]=function(c,e,f){for(var g,h=0,l=this.length;h<l;h++)A(g)?(g=a(this[h],c,e,f),w(g)&&(g=y(g))):Oc(g,a(this[h],c,e,f));return w(g)?g:this};Q.prototype.bind=
Q.prototype.on;Q.prototype.unbind=Q.prototype.off});Sa.prototype={put:function(a,c){this[Ga(a,this.nextUid)]=c},get:function(a){return this[Ga(a,this.nextUid)]},remove:function(a){var c=this[a=Ga(a,this.nextUid)];delete this[a];return c}};var wf=[function(){this.$get=[function(){return Sa}]}],Wc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,mg=/,/,ng=/^\s*(_?)(\S+?)\1\s*$/,Vc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ha=J("$injector");eb.$$annotate=function(a,c,d){var e;if("function"===typeof a){if(!(e=a.$inject)){e=
[];if(a.length){if(c)throw L(d)&&d||(d=a.name||Hf(a)),Ha("strictdi",d);c=a.toString().replace(Vc,"");c=c.match(Wc);m(c[1].split(mg),function(a){a.replace(ng,function(a,c,d){e.push(d)})})}a.$inject=e}}else G(a)?(c=a.length-1,Qa(a[c],"fn"),e=a.slice(0,c)):Qa(a,"fn",!0);return e};var Nd=J("$animate"),Ue=function(){this.$get=["$q","$$rAF",function(a,c){function d(){}d.all=v;d.chain=v;d.prototype={end:v,cancel:v,resume:v,pause:v,complete:v,then:function(d,f){return a(function(a){c(function(){a()})}).then(d,
f)}};return d}]},Te=function(){var a=new Sa,c=[];this.$get=["$$AnimateRunner","$rootScope",function(d,e){function f(d,f,l){var k=a.get(d);k||(a.put(d,k={}),c.push(d));f&&m(f.split(" "),function(a){a&&(k[a]=!0)});l&&m(l.split(" "),function(a){a&&(k[a]=!1)});1<c.length||e.$$postDigest(function(){m(c,function(c){var d=a.get(c);if(d){var e=If(c.attr("class")),f="",g="";m(d,function(a,c){a!==!!e[c]&&(a?f+=(f.length?" ":"")+c:g+=(g.length?" ":"")+c)});m(c,function(a){f&&yb(a,f);g&&xb(a,g)});a.remove(c)}});
c.length=0})}return{enabled:v,on:v,off:v,pin:v,push:function(a,c,e,k){k&&k();e=e||{};e.from&&a.css(e.from);e.to&&a.css(e.to);(e.addClass||e.removeClass)&&f(a,e.addClass,e.removeClass);return new d}}}]},Se=["$provide",function(a){var c=this;this.$$registeredAnimations=Object.create(null);this.register=function(d,e){if(d&&"."!==d.charAt(0))throw Nd("notcsel",d);var f=d+"-animation";c.$$registeredAnimations[d.substr(1)]=f;a.factory(f,e)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=
a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Nd("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function c(a,d,e){if(e){var l;a:{for(l=0;l<e.length;l++){var k=e[l];if(1===k.nodeType){l=k;break a}}l=void 0}!l||l.parentNode||l.previousElementSibling||(e=null)}e?e.after(a):d.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(f,g,h,l){g=
g&&y(g);h=h&&y(h);g=g||h.parent();c(f,g,h);return a.push(f,"enter",Ia(l))},move:function(f,g,h,l){g=g&&y(g);h=h&&y(h);g=g||h.parent();c(f,g,h);return a.push(f,"move",Ia(l))},leave:function(c,e){return a.push(c,"leave",Ia(e),function(){c.remove()})},addClass:function(c,e,h){h=Ia(h);h.addClass=jb(h.addclass,e);return a.push(c,"addClass",h)},removeClass:function(c,e,h){h=Ia(h);h.removeClass=jb(h.removeClass,e);return a.push(c,"removeClass",h)},setClass:function(c,e,h,l){l=Ia(l);l.addClass=jb(l.addClass,
e);l.removeClass=jb(l.removeClass,h);return a.push(c,"setClass",l)},animate:function(c,e,h,l,k){k=Ia(k);k.from=k.from?P(k.from,e):e;k.to=k.to?P(k.to,h):h;k.tempClasses=jb(k.tempClasses,l||"ng-inline-animate");return a.push(c,"animate",k)}}}]}],ea=J("$compile");Ec.$inject=["$provide","$$sanitizeUriProvider"];var Zc=/^((?:x|data)[\:\-_])/i,Nf=J("$controller"),Xc=/^(\S+)(\s+as\s+(\w+))?$/,cd="application/json",ac={"Content-Type":cd+";charset=utf-8"},Pf=/^\[|^\{(?!\{)/,Qf={"[":/]$/,"{":/}$/},Of=/^\)\]\}',?\n/,
Ka=ca.$interpolateMinErr=J("$interpolate");Ka.throwNoconcat=function(a){throw Ka("noconcat",a);};Ka.interr=function(a,c){return Ka("interr",a,c.toString())};var og=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Tf={http:80,https:443,ftp:21},Cb=J("$location"),pg={$$html5:!1,$$replace:!1,absUrl:Db("$$absUrl"),url:function(a){if(A(a))return this.$$url;var c=og.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Db("$$protocol"),
host:Db("$$host"),port:Db("$$port"),path:kd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(L(a)||V(a))a=a.toString(),this.$$search=zc(a);else if(H(a))a=fa(a,{}),m(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Cb("isrcharg");break;default:A(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:kd("$$hash",function(a){return null!==
a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};m([jd,ec,dc],function(a){a.prototype=Object.create(pg);a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==dc||!this.$$html5)throw Cb("nostate");this.$$state=A(c)?null:c;return this}});var da=J("$parse"),Uf=Function.prototype.call,Vf=Function.prototype.apply,Wf=Function.prototype.bind,Mb=ga();m("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Mb[a]=!0});var qg={n:"\n",f:"\f",r:"\r",
t:"\t",v:"\v","'":"'",'"':'"'},gc=function(a){this.options=a};gc.prototype={constructor:gc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;
else{var c=a+this.peek(),d=c+this.peek(2),e=Mb[c],f=Mb[d];Mb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||
"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=w(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw da("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=M(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();
if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,
text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=qg[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,
value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var q=function(a,c){this.lexer=a;this.options=c};q.Program="Program";q.ExpressionStatement="ExpressionStatement";q.AssignmentExpression="AssignmentExpression";q.ConditionalExpression="ConditionalExpression";q.LogicalExpression="LogicalExpression";q.BinaryExpression="BinaryExpression";q.UnaryExpression="UnaryExpression";q.CallExpression="CallExpression";q.MemberExpression="MemberExpression";q.Identifier="Identifier";q.Literal=
"Literal";q.ArrayExpression="ArrayExpression";q.Property="Property";q.ObjectExpression="ObjectExpression";q.ThisExpression="ThisExpression";q.NGValueParameter="NGValueParameter";q.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:q.Program,
body:a}},expressionStatement:function(){return{type:q.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();this.expect("=")&&(a={type:q.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),c,d;return this.expect("?")&&(c=this.expression(),this.consume(":"))?
(d=this.expression(),{type:q.ConditionalExpression,test:a,alternate:c,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:q.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:q.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=","===","!==");)a={type:q.BinaryExpression,
operator:c.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a={type:q.BinaryExpression,operator:c.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a={type:q.BinaryExpression,operator:c.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a={type:q.BinaryExpression,operator:c.text,
left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:q.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.constants.hasOwnProperty(this.peek().text)?a=fa(this.constants[this.consume().text]):this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():
this.throwError("not a primary expression",this.peek());for(var c;c=this.expect("(","[",".");)"("===c.text?(a={type:q.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===c.text?(a={type:q.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===c.text?a={type:q.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var c={type:q.CallExpression,callee:this.identifier(),
arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return c},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.expression());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:q.Identifier,name:a.text}},constant:function(){return{type:q.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;
a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:q.ArrayExpression,elements:a}},object:function(){var a=[],c;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;c={type:q.Property,kind:"init"};this.peek().constant?c.key=this.constant():this.peek().identifier?c.key=this.identifier():this.throwError("invalid key",this.peek());this.consume(":");c.value=this.expression();a.push(c)}while(this.expect(","))}this.consume("}");return{type:q.ObjectExpression,properties:a}},
throwError:function(a,c){throw da("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},consume:function(a){if(0===this.tokens.length)throw da("ueoe",this.text);var c=this.expect(a);c||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return c},peekToken:function(){if(0===this.tokens.length)throw da("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];
var g=a.text;if(g===c||g===d||g===e||g===f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},constants:{"true":{type:q.Literal,value:!0},"false":{type:q.Literal,value:!1},"null":{type:q.Literal,value:null},undefined:{type:q.Literal,value:t},"this":{type:q.ThisExpression}}};rd.prototype={compile:function(a,c){var d=this,e=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:c,fn:{vars:[],body:[],own:{}},assign:{vars:[],
body:[],own:{}},inputs:[]};T(e,d.$filter);var f="",g;this.stage="assign";if(g=pd(e))this.state.computing="assign",f=this.nextId(),this.recurse(g,f),f="fn.assign="+this.generateFunction("assign","s,v,l");g=nd(e.body);d.stage="inputs";m(g,function(a,c){var e="fn"+c;d.state[e]={vars:[],body:[],own:{}};d.state.computing=e;var f=d.nextId();d.recurse(a,f);d.return_(f);d.state.inputs.push(e);a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(e);f='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+
"var fn="+this.generateFunction("fn","s,l,a,i")+f+this.watchFns()+"return fn;";f=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","ifDefined","plus","text",f))(this.$filter,Ca,oa,ld,Xf,md,a);this.state=this.stage=t;f.literal=qd(e);f.constant=e.constant;return f},USE:"use",STRICT:"strict",watchFns:function(){var a=[],c=this.state.inputs,d=this;m(c,function(c){a.push("var "+c+"="+d.generateFunction(c,"s"))});c.length&&a.push("fn.inputs=["+c.join(",")+"];");return a.join("")},
generateFunction:function(a,c){return"function("+c+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],c=this;m(this.state.filters,function(d,e){a.push(d+"=$filter("+c.escape(e)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,c,d,e,f,g){var h,l,k=this,n,r;e=e||v;if(!g&&w(a.watchId))c=c||this.nextId(),this.if_("i",
this.lazyAssign(c,this.computedMember("i",a.watchId)),this.lazyRecurse(a,c,d,e,f,!0));else switch(a.type){case q.Program:m(a.body,function(c,d){k.recurse(c.expression,t,t,function(a){l=a});d!==a.body.length-1?k.current().body.push(l,";"):k.return_(l)});break;case q.Literal:r=this.escape(a.value);this.assign(c,r);e(r);break;case q.UnaryExpression:this.recurse(a.argument,t,t,function(a){l=a});r=a.operator+"("+this.ifDefined(l,0)+")";this.assign(c,r);e(r);break;case q.BinaryExpression:this.recurse(a.left,
t,t,function(a){h=a});this.recurse(a.right,t,t,function(a){l=a});r="+"===a.operator?this.plus(h,l):"-"===a.operator?this.ifDefined(h,0)+a.operator+this.ifDefined(l,0):"("+h+")"+a.operator+"("+l+")";this.assign(c,r);e(r);break;case q.LogicalExpression:c=c||this.nextId();k.recurse(a.left,c);k.if_("&&"===a.operator?c:k.not(c),k.lazyRecurse(a.right,c));e(c);break;case q.ConditionalExpression:c=c||this.nextId();k.recurse(a.test,c);k.if_(c,k.lazyRecurse(a.alternate,c),k.lazyRecurse(a.consequent,c));e(c);
break;case q.Identifier:c=c||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Ca(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){f&&1!==f&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(c,k.nonComputedMember("s",a.name))})},c&&k.lazyAssign(c,k.nonComputedMember("l",
a.name)));(k.state.expensiveChecks||Fb(a.name))&&k.addEnsureSafeObject(c);e(c);break;case q.MemberExpression:h=d&&(d.context=this.nextId())||this.nextId();c=c||this.nextId();k.recurse(a.object,h,t,function(){k.if_(k.notNull(h),function(){if(a.computed)l=k.nextId(),k.recurse(a.property,l),k.addEnsureSafeMemberName(l),f&&1!==f&&k.if_(k.not(k.computedMember(h,l)),k.lazyAssign(k.computedMember(h,l),"{}")),r=k.ensureSafeObject(k.computedMember(h,l)),k.assign(c,r),d&&(d.computed=!0,d.name=l);else{Ca(a.property.name);
f&&1!==f&&k.if_(k.not(k.nonComputedMember(h,a.property.name)),k.lazyAssign(k.nonComputedMember(h,a.property.name),"{}"));r=k.nonComputedMember(h,a.property.name);if(k.state.expensiveChecks||Fb(a.property.name))r=k.ensureSafeObject(r);k.assign(c,r);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(c,"undefined")});e(c)},!!f);break;case q.CallExpression:c=c||this.nextId();a.filter?(l=k.filter(a.callee.name),n=[],m(a.arguments,function(a){var c=k.nextId();k.recurse(a,c);n.push(c)}),r=l+
"("+n.join(",")+")",k.assign(c,r),e(c)):(l=k.nextId(),h={},n=[],k.recurse(a.callee,l,h,function(){k.if_(k.notNull(l),function(){k.addEnsureSafeFunction(l);m(a.arguments,function(a){k.recurse(a,k.nextId(),t,function(a){n.push(k.ensureSafeObject(a))})});h.name?(k.state.expensiveChecks||k.addEnsureSafeObject(h.context),r=k.member(h.context,h.name,h.computed)+"("+n.join(",")+")"):r=l+"("+n.join(",")+")";r=k.ensureSafeObject(r);k.assign(c,r)},function(){k.assign(c,"undefined")});e(c)}));break;case q.AssignmentExpression:l=
this.nextId();h={};if(!od(a.left))throw da("lval");this.recurse(a.left,t,h,function(){k.if_(k.notNull(h.context),function(){k.recurse(a.right,l);k.addEnsureSafeObject(k.member(h.context,h.name,h.computed));r=k.member(h.context,h.name,h.computed)+a.operator+l;k.assign(c,r);e(c||r)})},1);break;case q.ArrayExpression:n=[];m(a.elements,function(a){k.recurse(a,k.nextId(),t,function(a){n.push(a)})});r="["+n.join(",")+"]";this.assign(c,r);e(r);break;case q.ObjectExpression:n=[];m(a.properties,function(a){k.recurse(a.value,
k.nextId(),t,function(c){n.push(k.escape(a.key.type===q.Identifier?a.key.name:""+a.key.value)+":"+c)})});r="{"+n.join(",")+"}";this.assign(c,r);e(r);break;case q.ThisExpression:this.assign(c,"s");e("s");break;case q.NGValueParameter:this.assign(c,"v"),e("v")}},getHasOwnProperty:function(a,c){var d=a+"."+c,e=this.current().own;e.hasOwnProperty(d)||(e[d]=this.nextId(!1,a+"&&("+this.escape(c)+" in "+a+")"));return e[d]},assign:function(a,c){if(a)return this.current().body.push(a,"=",c,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||
(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,c){return"ifDefined("+a+","+this.escape(c)+")"},plus:function(a,c){return"plus("+a+","+c+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,c,d){if(!0===a)c();else{var e=this.current().body;e.push("if(",a,"){");c();e.push("}");d&&(e.push("else{"),d(),e.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,c){return a+
"."+c},computedMember:function(a,c){return a+"["+c+"]"},member:function(a,c,d){return d?this.computedMember(a,c):this.nonComputedMember(a,c)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+
a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},lazyRecurse:function(a,c,d,e,f,g){var h=this;return function(){h.recurse(a,c,d,e,f,g)}},lazyAssign:function(a,c){var d=this;return function(){d.assign(a,c)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(L(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(V(a))return a.toString();if(!0===a)return"true";
if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw da("esc");},nextId:function(a,c){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(c?"="+c:""));return d},current:function(){return this.state[this.state.computing]}};sd.prototype={compile:function(a,c){var d=this,e=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=c;T(e,d.$filter);var f,g;if(f=pd(e))g=this.recurse(f);f=nd(e.body);var h;f&&(h=[],m(f,function(a,c){var e=d.recurse(a);
a.input=e;h.push(e);a.watchId=c}));var l=[];m(e.body,function(a){l.push(d.recurse(a.expression))});f=0===e.body.length?function(){}:1===e.body.length?l[0]:function(a,c){var d;m(l,function(e){d=e(a,c)});return d};g&&(f.assign=function(a,c,d){return g(a,d,c)});h&&(f.inputs=h);f.literal=qd(e);f.constant=e.constant;return f},recurse:function(a,c,d){var e,f,g=this,h;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case q.Literal:return this.value(a.value,c);case q.UnaryExpression:return f=
this.recurse(a.argument),this["unary"+a.operator](f,c);case q.BinaryExpression:return e=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](e,f,c);case q.LogicalExpression:return e=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](e,f,c);case q.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),c);case q.Identifier:return Ca(a.name,g.expression),g.identifier(a.name,g.expensiveChecks||Fb(a.name),
c,d,g.expression);case q.MemberExpression:return e=this.recurse(a.object,!1,!!d),a.computed||(Ca(a.property.name,g.expression),f=a.property.name),a.computed&&(f=this.recurse(a.property)),a.computed?this.computedMember(e,f,c,d,g.expression):this.nonComputedMember(e,f,g.expensiveChecks,c,d,g.expression);case q.CallExpression:return h=[],m(a.arguments,function(a){h.push(g.recurse(a))}),a.filter&&(f=this.$filter(a.callee.name)),a.filter||(f=this.recurse(a.callee,!0)),a.filter?function(a,d,e,g){for(var m=
[],q=0;q<h.length;++q)m.push(h[q](a,d,e,g));a=f.apply(t,m,g);return c?{context:t,name:t,value:a}:a}:function(a,d,e,r){var m=f(a,d,e,r),q;if(null!=m.value){oa(m.context,g.expression);ld(m.value,g.expression);q=[];for(var t=0;t<h.length;++t)q.push(oa(h[t](a,d,e,r),g.expression));q=oa(m.value.apply(m.context,q),g.expression)}return c?{value:q}:q};case q.AssignmentExpression:return e=this.recurse(a.left,!0,1),f=this.recurse(a.right),function(a,d,h,r){var m=e(a,d,h,r);a=f(a,d,h,r);oa(m.value,g.expression);
m.context[m.name]=a;return c?{value:a}:a};case q.ArrayExpression:return h=[],m(a.elements,function(a){h.push(g.recurse(a))}),function(a,d,e,f){for(var g=[],m=0;m<h.length;++m)g.push(h[m](a,d,e,f));return c?{value:g}:g};case q.ObjectExpression:return h=[],m(a.properties,function(a){h.push({key:a.key.type===q.Identifier?a.key.name:""+a.key.value,value:g.recurse(a.value)})}),function(a,d,e,f){for(var g={},m=0;m<h.length;++m)g[h[m].key]=h[m].value(a,d,e,f);return c?{value:g}:g};case q.ThisExpression:return function(a){return c?
{value:a}:a};case q.NGValueParameter:return function(a,d,e,f){return c?{value:e}:e}}},"unary+":function(a,c){return function(d,e,f,g){d=a(d,e,f,g);d=w(d)?+d:0;return c?{value:d}:d}},"unary-":function(a,c){return function(d,e,f,g){d=a(d,e,f,g);d=w(d)?-d:0;return c?{value:d}:d}},"unary!":function(a,c){return function(d,e,f,g){d=!a(d,e,f,g);return c?{value:d}:d}},"binary+":function(a,c,d){return function(e,f,g,h){var l=a(e,f,g,h);e=c(e,f,g,h);l=md(l,e);return d?{value:l}:l}},"binary-":function(a,c,d){return function(e,
f,g,h){var l=a(e,f,g,h);e=c(e,f,g,h);l=(w(l)?l:0)-(w(e)?e:0);return d?{value:l}:l}},"binary*":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)*c(e,f,g,h);return d?{value:e}:e}},"binary/":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)/c(e,f,g,h);return d?{value:e}:e}},"binary%":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)%c(e,f,g,h);return d?{value:e}:e}},"binary===":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)===c(e,f,g,h);return d?{value:e}:e}},"binary!==":function(a,
c,d){return function(e,f,g,h){e=a(e,f,g,h)!==c(e,f,g,h);return d?{value:e}:e}},"binary==":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)==c(e,f,g,h);return d?{value:e}:e}},"binary!=":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)!=c(e,f,g,h);return d?{value:e}:e}},"binary<":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)<c(e,f,g,h);return d?{value:e}:e}},"binary>":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)>c(e,f,g,h);return d?{value:e}:e}},"binary<=":function(a,c,d){return function(e,
f,g,h){e=a(e,f,g,h)<=c(e,f,g,h);return d?{value:e}:e}},"binary>=":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)>=c(e,f,g,h);return d?{value:e}:e}},"binary&&":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)&&c(e,f,g,h);return d?{value:e}:e}},"binary||":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)||c(e,f,g,h);return d?{value:e}:e}},"ternary?:":function(a,c,d,e){return function(f,g,h,l){f=a(f,g,h,l)?c(f,g,h,l):d(f,g,h,l);return e?{value:f}:f}},value:function(a,c){return function(){return c?
{context:t,name:t,value:a}:a}},identifier:function(a,c,d,e,f){return function(g,h,l,k){g=h&&a in h?h:g;e&&1!==e&&g&&!g[a]&&(g[a]={});h=g?g[a]:t;c&&oa(h,f);return d?{context:g,name:a,value:h}:h}},computedMember:function(a,c,d,e,f){return function(g,h,l,k){var n=a(g,h,l,k),m,s;null!=n&&(m=c(g,h,l,k),Ca(m,f),e&&1!==e&&n&&!n[m]&&(n[m]={}),s=n[m],oa(s,f));return d?{context:n,name:m,value:s}:s}},nonComputedMember:function(a,c,d,e,f,g){return function(h,l,k,n){h=a(h,l,k,n);f&&1!==f&&h&&!h[c]&&(h[c]={});
l=null!=h?h[c]:t;(d||Fb(c))&&oa(l,g);return e?{context:h,name:c,value:l}:l}},inputs:function(a,c){return function(d,e,f,g){return g?g[c]:a(d,e,f)}}};var hc=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d;this.ast=new q(this.lexer);this.astCompiler=d.csp?new sd(this.ast,c):new rd(this.ast,c)};hc.prototype={constructor:hc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};ga();ga();var Yf=Object.prototype.valueOf,Da=J("$sce"),pa={HTML:"html",CSS:"css",URL:"url",
RESOURCE_URL:"resourceUrl",JS:"js"},ea=J("$compile"),X=U.createElement("a"),wd=Ba(O.location.href);xd.$inject=["$document"];Lc.$inject=["$provide"];yd.$inject=["$locale"];Ad.$inject=["$locale"];var Dd=".",hg={yyyy:Y("FullYear",4),yy:Y("FullYear",2,0,!0),y:Y("FullYear",1),MMMM:Hb("Month"),MMM:Hb("Month",!0),MM:Y("Month",2,1),M:Y("Month",1,1),dd:Y("Date",2),d:Y("Date",1),HH:Y("Hours",2),H:Y("Hours",1),hh:Y("Hours",2,-12),h:Y("Hours",1,-12),mm:Y("Minutes",2),m:Y("Minutes",1),ss:Y("Seconds",2),s:Y("Seconds",
1),sss:Y("Milliseconds",3),EEEE:Hb("Day"),EEE:Hb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a,c,d){a=-1*d;return a=(0<=a?"+":"")+(Gb(Math[0<a?"floor":"ceil"](a/60),2)+Gb(Math.abs(a%60),2))},ww:Fd(2),w:Fd(1),G:jc,GG:jc,GGG:jc,GGGG:function(a,c){return 0>=a.getFullYear()?c.ERANAMES[0]:c.ERANAMES[1]}},gg=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,fg=/^\-?\d+$/;zd.$inject=["$locale"];var cg=ra(M),dg=ra(rb);Bd.$inject=
["$parse"];var ie=ra({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref)return function(a,c){if("a"===c[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===sa.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}}),sb={};m(Ab,function(a,c){function d(a,d,f){a.$watch(f[e],function(a){f.$set(c,!!a)})}if("multiple"!=a){var e=wa("ng-"+c),f=d;"checked"===a&&(f=function(a,c,f){f.ngModel!==f[e]&&d(a,c,f)});sb[e]=function(){return{restrict:"A",
priority:100,link:f}}}});m(Uc,function(a,c){sb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(jg))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});m(["src","srcset","href"],function(a){var c=wa("ng-"+a);sb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===sa.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",
g=null);f.$observe(c,function(c){c?(f.$set(h,c),Ua&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Ib={$addControl:v,$$renameControl:function(a,c){a.$name=c},$removeControl:v,$setValidity:v,$setDirty:v,$setPristine:v,$setSubmitted:v};Gd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Od=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:Gd,compile:function(d,e){d.addClass(Va).addClass(mb);var f=e.name?"name":a&&e.ngForm?"ngForm":
!1;return{pre:function(a,d,e,k){if(!("action"in e)){var n=function(c){a.$apply(function(){k.$commitViewValue();k.$setSubmitted()});c.preventDefault()};d[0].addEventListener("submit",n,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",n,!1)},0,!1)})}var m=k.$$parentForm;f&&(Eb(a,k.$name,k,k.$name),e.$observe(f,function(c){k.$name!==c&&(Eb(a,k.$name,t,k.$name),m.$$renameControl(k,c),Eb(a,k.$name,k,k.$name))}));d.on("$destroy",function(){m.$removeControl(k);f&&Eb(a,e[f],t,
k.$name);P(k,Ib)})}}}}}]},je=Od(),we=Od(!0),ig=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,rg=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,sg=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,tg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Pd=/^(\d{4})-(\d{2})-(\d{2})$/,Qd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,mc=/^(\d{4})-W(\d\d)$/,Rd=/^(\d{4})-(\d\d)$/,
Sd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Td={text:function(a,c,d,e,f,g){kb(a,c,d,e,f,g);kc(e)},date:lb("date",Pd,Kb(Pd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":lb("datetimelocal",Qd,Kb(Qd,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:lb("time",Sd,Kb(Sd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:lb("week",mc,function(a,c){if(aa(a))return a;if(L(a)){mc.lastIndex=0;var d=mc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,l=0,k=Ed(e),f=7*(f-1);c&&(d=c.getHours(),g=
c.getMinutes(),h=c.getSeconds(),l=c.getMilliseconds());return new Date(e,0,k.getDate()+f,d,g,h,l)}}return NaN},"yyyy-Www"),month:lb("month",Rd,Kb(Rd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){Id(a,c,d,e);kb(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:tg.test(a)?parseFloat(a):t});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!V(a))throw Lb("numfmt",a);a=a.toString()}return a});if(w(d.min)||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||
A(h)||a>=h};d.$observe("min",function(a){w(a)&&!V(a)&&(a=parseFloat(a,10));h=V(a)&&!isNaN(a)?a:t;e.$validate()})}if(w(d.max)||d.ngMax){var l;e.$validators.max=function(a){return e.$isEmpty(a)||A(l)||a<=l};d.$observe("max",function(a){w(a)&&!V(a)&&(a=parseFloat(a,10));l=V(a)&&!isNaN(a)?a:t;e.$validate()})}},url:function(a,c,d,e,f,g){kb(a,c,d,e,f,g);kc(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||rg.test(d)}},email:function(a,c,d,e,f,g){kb(a,c,d,e,f,g);kc(e);
e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||sg.test(d)}},radio:function(a,c,d,e){A(d.name)&&c.attr("name",++nb);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,l){var k=Jd(l,a,"ngTrueValue",d.ngTrueValue,!0),n=Jd(l,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&
a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return ka(a,k)});e.$parsers.push(function(a){return a?k:n})},hidden:v,button:v,submit:v,reset:v,file:v},Fc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,l){l[0]&&(Td[M(h.type)]||Td.text)(f,g,h,l[0],c,a,d,e)}}}}],ug=/^(true|false|\d+)$/,Oe=function(){return{restrict:"A",priority:100,compile:function(a,
c){return ug.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},oe=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===t?"":a})}}}}],qe=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));
c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=a===t?"":a})}}}}],pe=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],Ne=ra({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),
re=lc("",!0),te=lc("Odd",0),se=lc("Even",1),ue=Ma({compile:function(a,c){c.$set("ngCloak",t);a.removeClass("ng-cloak")}}),ve=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Kc={},vg={blur:!0,focus:!0};m("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=wa("ng-"+a);Kc[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=
d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};vg[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var ye=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,l,k;c.$watch(e.ngIf,function(c){c?l||g(function(c,f){l=f;c[c.length++]=U.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=
qb(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],ze=["$templateRequest","$anchorScroll","$animate",function(a,c,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ca.noop,compile:function(e,f){var g=f.ngInclude||f.src,h=f.onload||"",l=f.autoscroll;return function(e,f,m,s,q){var t=0,F,u,p,v=function(){u&&(u.remove(),u=null);F&&(F.$destroy(),F=null);p&&(d.leave(p).then(function(){u=null}),u=p,p=null)};e.$watch(g,function(g){var m=function(){!w(l)||l&&!e.$eval(l)||
c()},r=++t;g?(a(g,!0).then(function(a){if(r===t){var c=e.$new();s.template=a;a=q(c,function(a){v();d.enter(a,null,f).then(m)});F=c;p=a;F.$emit("$includeContentLoaded",g);e.$eval(h)}},function(){r===t&&(v(),e.$emit("$includeContentError",g))}),e.$emit("$includeContentRequested",g)):(v(),s.template=null)})}}}}],Qe=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Nc(f.template,U).childNodes)(c,function(a){d.append(a)},
{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],Ae=Ma({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),Me=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?R(f):f;e.$parsers.push(function(a){if(!A(a)){var c=[];a&&m(a.split(h),function(a){a&&c.push(g?R(a):a)});return c}});e.$formatters.push(function(a){return G(a)?a.join(f):t});e.$isEmpty=function(a){return!a||
!a.length}}}},mb="ng-valid",Kd="ng-invalid",Va="ng-pristine",Jb="ng-dirty",Md="ng-pending",Lb=new J("ngModel"),wg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,l,k,n){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=t;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=
!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=t;this.$name=n(d.name||"",!1)(a);var r=f(d.ngModel),s=r.assign,q=r,C=s,F=null,u,p=this;this.$$setOptions=function(a){if((p.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");q=function(a){var d=r(a);z(d)&&(d=c(a));return d};C=function(a,c){z(r(a))?g(a,{$$$p:p.$modelValue}):s(a,p.$modelValue)}}else if(!r.assign)throw Lb("nonassign",d.ngModel,ua(e));};this.$render=v;this.$isEmpty=function(a){return A(a)||
""===a||null===a||a!==a};var K=e.inheritedData("$formController")||Ib,y=0;Hd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},parentForm:K,$animate:g});this.$setPristine=function(){p.$dirty=!1;p.$pristine=!0;g.removeClass(e,Jb);g.addClass(e,Va)};this.$setDirty=function(){p.$dirty=!0;p.$pristine=!1;g.removeClass(e,Va);g.addClass(e,Jb);K.$setDirty()};this.$setUntouched=function(){p.$touched=!1;p.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=
function(){p.$touched=!0;p.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(F);p.$viewValue=p.$$lastCommittedViewValue;p.$render()};this.$validate=function(){if(!V(p.$modelValue)||!isNaN(p.$modelValue)){var a=p.$$rawModelValue,c=p.$valid,d=p.$modelValue,e=p.$options&&p.$options.allowInvalid;p.$$runValidators(a,p.$$lastCommittedViewValue,function(f){e||c===f||(p.$modelValue=f?a:t,p.$modelValue!==d&&p.$$writeModelToScope())})}};this.$$runValidators=
function(a,c,d){function e(){var d=!0;m(p.$validators,function(e,f){var h=e(a,c);d=d&&h;g(f,h)});return d?!0:(m(p.$asyncValidators,function(a,c){g(c,null)}),!1)}function f(){var d=[],e=!0;m(p.$asyncValidators,function(f,h){var k=f(a,c);if(!k||!z(k.then))throw Lb("$asyncValidators",k);g(h,t);d.push(k.then(function(){g(h,!0)},function(a){e=!1;g(h,!1)}))});d.length?k.all(d).then(function(){h(e)},v):h(!0)}function g(a,c){l===y&&p.$setValidity(a,c)}function h(a){l===y&&d(a)}y++;var l=y;(function(){var a=
p.$$parserName||"parse";if(u===t)g(a,null);else return u||(m(p.$validators,function(a,c){g(c,null)}),m(p.$asyncValidators,function(a,c){g(c,null)})),g(a,u),u;return!0})()?e()?f():h(!1):h(!1)};this.$commitViewValue=function(){var a=p.$viewValue;h.cancel(F);if(p.$$lastCommittedViewValue!==a||""===a&&p.$$hasNativeValidators)p.$$lastCommittedViewValue=a,p.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var c=p.$$lastCommittedViewValue;if(u=A(c)?t:!0)for(var d=
0;d<p.$parsers.length;d++)if(c=p.$parsers[d](c),A(c)){u=!1;break}V(p.$modelValue)&&isNaN(p.$modelValue)&&(p.$modelValue=q(a));var e=p.$modelValue,f=p.$options&&p.$options.allowInvalid;p.$$rawModelValue=c;f&&(p.$modelValue=c,p.$modelValue!==e&&p.$$writeModelToScope());p.$$runValidators(c,p.$$lastCommittedViewValue,function(a){f||(p.$modelValue=a?c:t,p.$modelValue!==e&&p.$$writeModelToScope())})};this.$$writeModelToScope=function(){C(a,p.$modelValue);m(p.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};
this.$setViewValue=function(a,c){p.$viewValue=a;p.$options&&!p.$options.updateOnDefault||p.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(c){var d=0,e=p.$options;e&&w(e.debounce)&&(e=e.debounce,V(e)?d=e:V(e[c])?d=e[c]:V(e["default"])&&(d=e["default"]));h.cancel(F);d?F=h(function(){p.$commitViewValue()},d):l.$$phase?p.$commitViewValue():a.$apply(function(){p.$commitViewValue()})};a.$watch(function(){var c=q(a);if(c!==p.$modelValue&&(p.$modelValue===p.$modelValue||c===c)){p.$modelValue=
p.$$rawModelValue=c;u=t;for(var d=p.$formatters,e=d.length,f=c;e--;)f=d[e](f);p.$viewValue!==f&&(p.$viewValue=p.$$lastCommittedViewValue=f,p.$render(),p.$$runValidators(c,f,v))}return c})}],Le=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:wg,priority:1,compile:function(c){c.addClass(Va).addClass("ng-untouched").addClass(mb);return{pre:function(a,c,f,g){var h=g[0],l=g[1]||Ib;h.$$setOptions(g[2]&&g[2].$options);l.$addControl(h);f.$observe("name",
function(a){h.$name!==a&&l.$$renameControl(h,a)});a.$on("$destroy",function(){l.$removeControl(h)})},post:function(c,e,f,g){var h=g[0];if(h.$options&&h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],xg=/(\s+|^)default(\s+|$)/,Pe=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=fa(a.$eval(c.ngModelOptions));
this.$options.updateOn!==t?(this.$options.updateOnDefault=!1,this.$options.updateOn=R(this.$options.updateOn.replace(xg,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Be=Ma({terminal:!0,priority:1E3}),yg=J("ngOptions"),zg=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
Je=["$compile","$parse",function(a,c){function d(a,d,e){function f(a,c,d,e,g){this.selectValue=a;this.viewValue=c;this.label=d;this.group=e;this.disabled=g}function n(a){var c;if(!q&&Ea(a))c=a;else{c=[];for(var d in a)a.hasOwnProperty(d)&&"$"!==d.charAt(0)&&c.push(d)}return c}var m=a.match(zg);if(!m)throw yg("iexp",a,ua(d));var s=m[5]||m[7],q=m[6];a=/ as /.test(m[0])&&m[1];var t=m[9];d=c(m[2]?m[1]:s);var v=a&&c(a)||d,u=t&&c(t),p=t?function(a,c){return u(e,c)}:function(a){return Ga(a)},w=function(a,
c){return p(a,z(a,c))},y=c(m[2]||m[1]),A=c(m[3]||""),B=c(m[4]||""),N=c(m[8]),D={},z=q?function(a,c){D[q]=c;D[s]=a;return D}:function(a){D[s]=a;return D};return{trackBy:t,getTrackByValue:w,getWatchables:c(N,function(a){var c=[];a=a||[];for(var d=n(a),f=d.length,g=0;g<f;g++){var h=a===d?g:d[g],k=z(a[h],h),h=p(a[h],k);c.push(h);if(m[2]||m[1])h=y(e,k),c.push(h);m[4]&&(k=B(e,k),c.push(k))}return c}),getOptions:function(){for(var a=[],c={},d=N(e)||[],g=n(d),h=g.length,m=0;m<h;m++){var r=d===g?m:g[m],s=
z(d[r],r),q=v(e,s),r=p(q,s),u=y(e,s),x=A(e,s),s=B(e,s),q=new f(r,q,u,x,s);a.push(q);c[r]=q}return{items:a,selectValueMap:c,getOptionFromViewValue:function(a){return c[w(a)]},getViewValueFromOption:function(a){return t?ca.copy(a.viewValue):a.viewValue}}}}}var e=U.createElement("option"),f=U.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","?ngModel"],link:function(c,h,l,k){function n(a,c){a.element=c;c.disabled=a.disabled;a.value!==c.value&&(c.value=a.selectValue);a.label!==
c.label&&(c.label=a.label,c.textContent=a.label)}function r(a,c,d,e){c&&M(c.nodeName)===d?d=c:(d=e.cloneNode(!1),c?a.insertBefore(d,c):a.appendChild(d));return d}function s(a){for(var c;a;)c=a.nextSibling,Xb(a),a=c}function q(a){var c=p&&p[0],d=N&&N[0];if(c||d)for(;a&&(a===c||a===d);)a=a.nextSibling;return a}function t(){var a=D&&u.readValue();D=z.getOptions();var c={},d=h[0].firstChild;B&&h.prepend(p);d=q(d);D.items.forEach(function(a){var g,k;a.group?(g=c[a.group],g||(g=r(h[0],d,"optgroup",f),d=
g.nextSibling,g.label=a.group,g=c[a.group]={groupElement:g,currentOptionElement:g.firstChild}),k=r(g.groupElement,g.currentOptionElement,"option",e),n(a,k),g.currentOptionElement=k.nextSibling):(k=r(h[0],d,"option",e),n(a,k),d=k.nextSibling)});Object.keys(c).forEach(function(a){s(c[a].currentOptionElement)});s(d);v.$render();if(!v.$isEmpty(a)){var g=u.readValue();(z.trackBy?ka(a,g):a===g)||(v.$setViewValue(g),v.$render())}}var v=k[1];if(v){var u=k[0];k=l.multiple;for(var p,w=0,A=h.children(),I=A.length;w<
I;w++)if(""===A[w].value){p=A.eq(w);break}var B=!!p,N=y(e.cloneNode(!1));N.val("?");var D,z=d(l.ngOptions,h,c);k?(v.$isEmpty=function(a){return!a||0===a.length},u.writeValue=function(a){D.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){(a=D.getOptionFromViewValue(a))&&!a.disabled&&(a.element.selected=!0)})},u.readValue=function(){var a=h.val()||[],c=[];m(a,function(a){a=D.selectValueMap[a];a.disabled||c.push(D.getViewValueFromOption(a))});return c},z.trackBy&&c.$watchCollection(function(){if(G(v.$viewValue))return v.$viewValue.map(function(a){return z.getTrackByValue(a)})},
function(){v.$render()})):(u.writeValue=function(a){var c=D.getOptionFromViewValue(a);c&&!c.disabled?h[0].value!==c.selectValue&&(N.remove(),B||p.remove(),h[0].value=c.selectValue,c.element.selected=!0,c.element.setAttribute("selected","selected")):null===a||B?(N.remove(),B||h.prepend(p),h.val(""),p.prop("selected",!0),p.attr("selected",!0)):(B||p.remove(),h.prepend(N),h.val("?"),N.prop("selected",!0),N.attr("selected",!0))},u.readValue=function(){var a=D.selectValueMap[h.val()];return a&&!a.disabled?
(B||p.remove(),N.remove(),D.getViewValueFromOption(a)):null},z.trackBy&&c.$watch(function(){return z.getTrackByValue(v.$viewValue)},function(){v.$render()}));B?(p.remove(),a(p)(c),p.removeClass("ng-scope")):p=y(e.cloneNode(!1));t();c.$watchCollection(z.getWatchables,t)}}}}],Ce=["$locale","$interpolate","$log",function(a,c,d){var e=/{}/g,f=/^when(Minus)?(.+)$/;return{link:function(g,h,l){function k(a){h.text(a||"")}var n=l.count,r=l.$attr.when&&h.attr(l.$attr.when),s=l.offset||0,q=g.$eval(r)||{},t=
{},w=c.startSymbol(),u=c.endSymbol(),p=w+n+"-"+s+u,y=ca.noop,z;m(l,function(a,c){var d=f.exec(c);d&&(d=(d[1]?"-":"")+M(d[2]),q[d]=h.attr(l.$attr[c]))});m(q,function(a,d){t[d]=c(a.replace(e,p))});g.$watch(n,function(c){var e=parseFloat(c),f=isNaN(e);f||e in q||(e=a.pluralCat(e-s));e===z||f&&V(z)&&isNaN(z)||(y(),f=t[e],A(f)?(null!=c&&d.debug("ngPluralize: no rule defined for '"+e+"' in "+r),y=v,k()):y=g.$watch(f,k),z=e)})}}}],De=["$parse","$animate",function(a,c){var d=J("ngRepeat"),e=function(a,c,
d,e,k,m,r){a[d]=e;k&&(a[k]=m);a.$index=c;a.$first=0===c;a.$last=c===r-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,l=U.createComment(" end ngRepeat: "+h+" "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!k)throw d("iexp",h);var n=k[1],r=k[2],s=k[3],q=k[4],k=n.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
if(!k)throw d("iidexp",n);var v=k[3]||k[1],w=k[2];if(s&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(s)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(s)))throw d("badident",s);var u,p,z,A,I={$id:Ga};q?u=a(q):(z=function(a,c){return Ga(c)},A=function(a){return a});return function(a,f,g,k,n){u&&(p=function(c,d,e){w&&(I[w]=c);I[v]=d;I.$index=e;return u(a,I)});var q=ga();a.$watchCollection(r,function(g){var k,r,u=f[0],x,D=ga(),I,H,L,G,M,J,O;s&&(a[s]=g);if(Ea(g))M=
g,r=p||z;else for(O in r=p||A,M=[],g)g.hasOwnProperty(O)&&"$"!==O.charAt(0)&&M.push(O);I=M.length;O=Array(I);for(k=0;k<I;k++)if(H=g===M?k:M[k],L=g[H],G=r(H,L,k),q[G])J=q[G],delete q[G],D[G]=J,O[k]=J;else{if(D[G])throw m(O,function(a){a&&a.scope&&(q[a.id]=a)}),d("dupes",h,G,L);O[k]={id:G,scope:t,clone:t};D[G]=!0}for(x in q){J=q[x];G=qb(J.clone);c.leave(G);if(G[0].parentNode)for(k=0,r=G.length;k<r;k++)G[k].$$NG_REMOVED=!0;J.scope.$destroy()}for(k=0;k<I;k++)if(H=g===M?k:M[k],L=g[H],J=O[k],J.scope){x=
u;do x=x.nextSibling;while(x&&x.$$NG_REMOVED);J.clone[0]!=x&&c.move(qb(J.clone),null,y(u));u=J.clone[J.clone.length-1];e(J.scope,k,v,L,w,H,I)}else n(function(a,d){J.scope=d;var f=l.cloneNode(!1);a[a.length++]=f;c.enter(a,null,y(u));u=f;J.clone=a;D[J.id]=J;e(J.scope,k,v,L,w,H,I)});q=D})}}}}],Ee=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],xe=["$animate",
function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Fe=Ma(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&m(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Ge=["$animate",function(a){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],l=[],k=[],n=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||
e.on,function(c){var d,e;d=0;for(e=l.length;d<e;++d)a.cancel(l[d]);d=l.length=0;for(e=k.length;d<e;++d){var q=qb(h[d].clone);k[d].$destroy();(l[d]=a.leave(q)).then(n(l,d))}h.length=0;k.length=0;(g=f.cases["!"+c]||f.cases["?"])&&m(g,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=U.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],He=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,
f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),Ie=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Ke=Ma({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw J("ngTransclude")("orphan",ua(c));f(function(a){c.empty();c.append(a)})}}),ke=["$templateCache",function(a){return{restrict:"E",terminal:!0,
compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Ag={$setViewValue:v,$render:v},Bg=["$element","$scope","$attrs",function(a,c,d){var e=this,f=new Sa;e.ngModelCtrl=Ag;e.unknownOption=y(U.createElement("option"));e.renderUnknownOption=function(c){c="? "+Ga(c)+" ?";e.unknownOption.val(c);a.prepend(e.unknownOption);a.val(c)};c.$on("$destroy",function(){e.renderUnknownOption=v});e.removeUnknownOption=function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.readValue=
function(){e.removeUnknownOption();return a.val()};e.writeValue=function(c){e.hasOption(c)?(e.removeUnknownOption(),a.val(c),""===c&&e.emptyOption.prop("selected",!0)):null==c&&e.emptyOption?(e.removeUnknownOption(),a.val("")):e.renderUnknownOption(c)};e.addOption=function(a,c){Ra(a,'"option value"');""===a&&(e.emptyOption=c);var d=f.get(a)||0;f.put(a,d+1)};e.removeOption=function(a){var c=f.get(a);c&&(1===c?(f.remove(a),""===a&&(e.emptyOption=t)):f.put(a,c-1))};e.hasOption=function(a){return!!f.get(a)}}],
le=function(){return{restrict:"E",require:["select","?ngModel"],controller:Bg,link:function(a,c,d,e){var f=e[1];if(f){var g=e[0];g.ngModelCtrl=f;f.$render=function(){g.writeValue(f.$viewValue)};c.on("change",function(){a.$apply(function(){f.$setViewValue(g.readValue())})});if(d.multiple){g.readValue=function(){var a=[];m(c.find("option"),function(c){c.selected&&a.push(c.value)});return a};g.writeValue=function(a){var d=new Sa(a);m(c.find("option"),function(a){a.selected=w(d.get(a.value))})};var h,
l=NaN;a.$watch(function(){l!==f.$viewValue||ka(h,f.$viewValue)||(h=ia(f.$viewValue),f.$render());l=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}}}},ne=["$interpolate",function(a){function c(a){a[0].hasAttribute("selected")&&(a[0].selected=!0)}return{restrict:"E",priority:100,compile:function(d,e){if(A(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),m=k.data("$selectController")||k.parent().data("$selectController");m&&m.ngModelCtrl&&
(f?a.$watch(f,function(a,f){e.$set("value",a);f!==a&&m.removeOption(f);m.addOption(a,d);m.ngModelCtrl.$render();c(d)}):(m.addOption(e.value,d),m.ngModelCtrl.$render(),c(d)),d.on("$destroy",function(){m.removeOption(e.value);m.ngModelCtrl.$render()}))}}}}],me=ra({restrict:"E",terminal:!1}),Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},
Gc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){L(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw J("ngPattern")("noregexp",g,a,ua(c));f=a||t;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||A(f)||f.test(a)}}}}},Jc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=W(a);f=isNaN(a)?-1:a;e.$validate()});
e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(c)||c.length<=f}}}}},Ic=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=W(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(c)||c.length>=f}}}}};O.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(ce(),ee(ca),y(U).ready(function(){Zd(U,Ac)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/*!
 * ionic.bundle.js is a concatenation of:
 * ionic.js, angular.js, angular-animate.js,
 * angular-sanitize.js, angular-ui-router.js,
 * and ionic-angular.js
 */

/*
 AngularJS v1.4.3
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(F,t,W){'use strict';function ua(a,b,c){if(!a)throw ngMinErr("areq",b||"?",c||"required");return a}function va(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;X(a)&&(a=a.join(" "));X(b)&&(b=b.join(" "));return a+" "+b}function Ea(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function ba(a,b,c){var d="";a=X(a)?a:a&&U(a)&&a.length?a.split(/\s+/):[];u(a,function(a,s){a&&0<a.length&&(d+=0<s?" ":"",d+=c?b+a:a+b)});return d}function Fa(a){if(a instanceof G)switch(a.length){case 0:return[];
case 1:if(1===a[0].nodeType)return a;break;default:return G(ka(a))}if(1===a.nodeType)return G(a)}function ka(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1==c.nodeType)return c}}function Ga(a,b,c){u(b,function(b){a.addClass(b,c)})}function Ha(a,b,c){u(b,function(b){a.removeClass(b,c)})}function ha(a){return function(b,c){c.addClass&&(Ga(a,b,c.addClass),c.addClass=null);c.removeClass&&(Ha(a,b,c.removeClass),c.removeClass=null)}}function ia(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
H;a.domOperation=function(){a.$$domOperationFired=!0;b();b=H};a.$$prepared=!0}return a}function ca(a,b){wa(a,b);xa(a,b)}function wa(a,b){b.from&&(a.css(b.from),b.from=null)}function xa(a,b){b.to&&(a.css(b.to),b.to=null)}function R(a,b,c){var d=(b.addClass||"")+" "+(c.addClass||""),e=(b.removeClass||"")+" "+(c.removeClass||"");a=Ia(a.attr("class"),d,e);ya(b,c);b.addClass=a.addClass?a.addClass:null;b.removeClass=a.removeClass?a.removeClass:null;return b}function Ia(a,b,c){function d(a){U(a)&&(a=a.split(" "));
var b={};u(a,function(a){a.length&&(b[a]=!0)});return b}var e={};a=d(a);b=d(b);u(b,function(a,b){e[b]=1});c=d(c);u(c,function(a,b){e[b]=1===e[b]?null:-1});var s={addClass:"",removeClass:""};u(e,function(b,c){var d,e;1===b?(d="addClass",e=!a[c]):-1===b&&(d="removeClass",e=a[c]);e&&(s[d].length&&(s[d]+=" "),s[d]+=c)});return s}function z(a){return a instanceof t.element?a[0]:a}function za(a,b,c){var d=Object.create(null),e=a.getComputedStyle(b)||{};u(c,function(a,b){var c=e[a];if(c){var k=c.charAt(0);
if("-"===k||"+"===k||0<=k)c=Ja(c);0===c&&(c=null);d[b]=c}});return d}function Ja(a){var b=0;a=a.split(/\s*,\s*/);u(a,function(a){"s"==a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function la(a){return 0===a||null!=a}function Aa(a,b){var c=O,d=a+"s";b?c+="Duration":d+=" linear all";return[c,d]}function ja(a,b){var c=b?"-"+b+"s":"";da(a,[ea,c]);return[ea,c]}function ma(a,b){var c=b?"paused":"",d=V+"PlayState";da(a,[d,c]);return[d,c]}function da(a,
b){a.style[b[0]]=b[1]}function Ba(){var a=Object.create(null);return{flush:function(){a=Object.create(null)},count:function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}var H=t.noop,ya=t.extend,G=t.element,u=t.forEach,X=t.isArray,U=t.isString,na=t.isObject,Ka=t.isUndefined,La=t.isDefined,Ca=t.isFunction,oa=t.isElement,O,pa,V,qa;F.ontransitionend===W&&F.onwebkittransitionend!==W?(O="WebkitTransition",pa="webkitTransitionEnd transitionend"):
(O="transition",pa="transitionend");F.onanimationend===W&&F.onwebkitanimationend!==W?(V="WebkitAnimation",qa="webkitAnimationEnd animationend"):(V="animation",qa="animationend");var ra=V+"Delay",sa=V+"Duration",ea=O+"Delay";F=O+"Duration";var Ma={transitionDuration:F,transitionDelay:ea,transitionProperty:O+"Property",animationDuration:sa,animationDelay:ra,animationIterationCount:V+"IterationCount"},Na={transitionDuration:F,transitionDelay:ea,animationDuration:sa,animationDelay:ra};t.module("ngAnimate",
[]).directive("ngAnimateChildren",[function(){return function(a,b,c){a=c.ngAnimateChildren;t.isString(a)&&0===a.length?b.data("$$ngAnimateChildren",!0):c.$observe("ngAnimateChildren",function(a){b.data("$$ngAnimateChildren","on"===a||"true"===a)})}}]).factory("$$rAFMutex",["$$rAF",function(a){return function(){var b=!1;a(function(){b=!0});return function(c){b?c():a(c)}}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d.push([].concat(a));c()}function c(){if(d.length){for(var b=[],n=
0;n<d.length;n++){var h=d[n];h.shift()();h.length&&b.push(h)}d=b;e||a(function(){e||c()})}}var d=[],e;b.waitUntilQuiet=function(b){e&&e();e=a(function(){e=null;b();c()})};return b}]).factory("$$AnimateRunner",["$q","$$rAFMutex",function(a,b){function c(a){this.setHost(a);this._doneCallbacks=[];this._runInAnimationFrame=b();this._state=0}c.chain=function(a,b){function c(){if(n===a.length)b(!0);else a[n](function(a){!1===a?b(!1):(n++,c())})}var n=0;c()};c.all=function(a,b){function c(s){h=h&&s;++n===
a.length&&b(h)}var n=0,h=!0;u(a,function(a){a.done(c)})};c.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:H,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&
this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._runInAnimationFrame(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(u(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return c}]).provider("$$animateQueue",["$animateProvider",
function(a){function b(a,b,c,h){return d[a].some(function(a){return a(b,c,h)})}function c(a,b){a=a||{};var c=0<(a.addClass||"").length,d=0<(a.removeClass||"").length;return b?c&&d:c||d}var d=this.rules={skip:[],cancel:[],join:[]};d.join.push(function(a,b,d){return!b.structural&&c(b.options)});d.skip.push(function(a,b,d){return!b.structural&&!c(b.options)});d.skip.push(function(a,b,c){return"leave"==c.event&&b.structural});d.skip.push(function(a,b,c){return c.structural&&!b.structural});d.cancel.push(function(a,
b,c){return c.structural&&b.structural});d.cancel.push(function(a,b,c){return 2===c.state&&b.structural});d.cancel.push(function(a,b,c){a=b.options;c=c.options;return a.addClass&&a.addClass===c.removeClass||a.removeClass&&a.removeClass===c.addClass});this.$get=["$$rAF","$rootScope","$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite",function(d,s,n,h,k,D,A,Z,I){function w(a,b){var c=z(a),f=[],m=l[b];m&&u(m,function(a){a.node.contains(c)&&f.push(a.callback)});
return f}function B(a,b,c,f){d(function(){u(w(b,a),function(a){a(b,c,f)})})}function r(a,S,p){function d(b,c,f,p){B(c,a,f,p);b.progress(c,f,p)}function g(b){Da(a,p);ca(a,p);p.domOperation();l.complete(!b)}var P,E;if(a=Fa(a))P=z(a),E=a.parent();p=ia(p);var l=new A;if(!P)return g(),l;X(p.addClass)&&(p.addClass=p.addClass.join(" "));X(p.removeClass)&&(p.removeClass=p.removeClass.join(" "));p.from&&!na(p.from)&&(p.from=null);p.to&&!na(p.to)&&(p.to=null);var e=[P.className,p.addClass,p.removeClass].join(" ");
if(!v(e))return g(),l;var M=0<=["enter","move","leave"].indexOf(S),h=!x||L.get(P),e=!h&&m.get(P)||{},k=!!e.state;h||k&&1==e.state||(h=!ta(a,E,S));if(h)return g(),l;M&&K(a);h={structural:M,element:a,event:S,close:g,options:p,runner:l};if(k){if(b("skip",a,h,e)){if(2===e.state)return g(),l;R(a,e.options,p);return e.runner}if(b("cancel",a,h,e))2===e.state?e.runner.end():e.structural?e.close():R(a,h.options,e.options);else if(b("join",a,h,e))if(2===e.state)R(a,p,{});else return S=h.event=e.event,p=R(a,
e.options,h.options),l}else R(a,p,{});(k=h.structural)||(k="animate"===h.event&&0<Object.keys(h.options.to||{}).length||c(h.options));if(!k)return g(),C(a),l;M&&f(E);var r=(e.counter||0)+1;h.counter=r;ga(a,1,h);s.$$postDigest(function(){var b=m.get(P),v=!b,b=b||{},e=a.parent()||[],E=0<e.length&&("animate"===b.event||b.structural||c(b.options));if(v||b.counter!==r||!E){v&&(Da(a,p),ca(a,p));if(v||M&&b.event!==S)p.domOperation(),l.end();E||C(a)}else S=!b.structural&&c(b.options,!0)?"setClass":b.event,
b.structural&&f(e),ga(a,2),b=D(a,S,b.options),b.done(function(b){g(!b);(b=m.get(P))&&b.counter===r&&C(z(a));d(l,S,"close",{})}),l.setHost(b),d(l,S,"start",{})});return l}function K(a){a=z(a).querySelectorAll("[data-ng-animate]");u(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate")),c=m.get(a);switch(b){case 2:c.runner.end();case 1:c&&m.remove(a)}})}function C(a){a=z(a);a.removeAttribute("data-ng-animate");m.remove(a)}function E(a,b){return z(a)===z(b)}function f(a){a=z(a);do{if(!a||1!==
a.nodeType)break;var b=m.get(a);if(b){var f=a;!b.structural&&c(b.options)&&(2===b.state&&b.runner.end(),C(f))}a=a.parentNode}while(1)}function ta(a,b,c){var f=c=!1,d=!1,v;for((a=a.data("$ngAnimatePin"))&&(b=a);b&&b.length;){f||(f=E(b,n));a=b[0];if(1!==a.nodeType)break;var e=m.get(a)||{};d||(d=e.structural||L.get(a));if(Ka(v)||!0===v)a=b.data("$$ngAnimateChildren"),La(a)&&(v=a);if(d&&!1===v)break;f||(f=E(b,n),f||(a=b.data("$ngAnimatePin"))&&(b=a));c||(c=E(b,g));b=b.parent()}return(!d||v)&&f&&c}function ga(a,
b,c){c=c||{};c.state=b;a=z(a);a.setAttribute("data-ng-animate",b);c=(b=m.get(a))?ya(b,c):c;m.put(a,c)}var m=new k,L=new k,x=null,M=s.$watch(function(){return 0===Z.totalPendingRequests},function(a){a&&(M(),s.$$postDigest(function(){s.$$postDigest(function(){null===x&&(x=!0)})}))}),g=G(h[0].body),l={},P=a.classNameFilter(),v=P?function(a){return P.test(a)}:function(){return!0},Da=ha(I);return{on:function(a,b,c){b=ka(b);l[a]=l[a]||[];l[a].push({node:b,callback:c})},off:function(a,b,c){function f(a,
b,c){var d=ka(b);return a.filter(function(a){return!(a.node===d&&(!c||a.callback===c))})}var d=l[a];d&&(l[a]=1===arguments.length?null:f(d,b,c))},pin:function(a,b){ua(oa(a),"element","not an element");ua(oa(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,f){c=c||{};c.domOperation=f;return r(a,b,c)},enabled:function(a,b){var c=arguments.length;if(0===c)b=!!x;else if(oa(a)){var f=z(a),d=L.get(f);1===c?b=!d:(b=!!b)?d&&L.remove(f):L.put(f,!0)}else b=x=!!a;return b}}}]}]).provider("$$animation",
["$animateProvider",function(a){function b(a){return a.data("$$animationRunner")}var c=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$rAFScheduler",function(a,e,s,n,h){var k=[],D=ha(a),A=0,Z=0,I=[];return function(w,B,r){function K(a){a=a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");var b=[];u(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&b.push(a)});return b}function C(a){var b=[],c={};u(a,function(a,f){var d=z(a.element),
m=0<=["enter","move"].indexOf(a.event),d=a.structural?K(d):[];if(d.length){var g=m?"to":"from";u(d,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][g]={animationID:f,element:G(a)}})}else b.push(a)});var f={},d={};u(c,function(c,m){var g=c.from,e=c.to;if(g&&e){var l=a[g.animationID],h=a[e.animationID],x=g.animationID.toString();if(!d[x]){var B=d[x]={structural:!0,beforeStart:function(){l.beforeStart();h.beforeStart()},close:function(){l.close();h.close()},classes:E(l.classes,h.classes),
from:l,to:h,anchors:[]};B.classes.length?b.push(B):(b.push(l),b.push(h))}d[x].anchors.push({out:g.element,"in":e.element})}else g=g?g.animationID:e.animationID,e=g.toString(),f[e]||(f[e]=!0,b.push(a[g]))});return b}function E(a,b){a=a.split(" ");b=b.split(" ");for(var c=[],f=0;f<a.length;f++){var d=a[f];if("ng-"!==d.substring(0,3))for(var g=0;g<b.length;g++)if(d===b[g]){c.push(d);break}}return c.join(" ")}function f(a){for(var b=c.length-1;0<=b;b--){var f=c[b];if(s.has(f)&&(f=s.get(f)(a)))return f}}
function ta(a,c){a.from&&a.to?(b(a.from.element).setHost(c),b(a.to.element).setHost(c)):b(a.element).setHost(c)}function ga(){var a=b(w);!a||"leave"===B&&r.$$domOperationFired||a.end()}function m(b){w.off("$destroy",ga);w.removeData("$$animationRunner");D(w,r);ca(w,r);r.domOperation();g&&a.removeClass(w,g);w.removeClass("ng-animate");x.complete(!b)}r=ia(r);var L=0<=["enter","move","leave"].indexOf(B),x=new n({end:function(){m()},cancel:function(){m(!0)}});if(!c.length)return m(),x;w.data("$$animationRunner",
x);var M=va(w.attr("class"),va(r.addClass,r.removeClass)),g=r.tempClasses;g&&(M+=" "+g,r.tempClasses=null);var l;L||(l=A,A+=1);k.push({element:w,classes:M,event:B,classBasedIndex:l,structural:L,options:r,beforeStart:function(){w.addClass("ng-animate");g&&a.addClass(w,g)},close:m});w.on("$destroy",ga);if(1<k.length)return x;e.$$postDigest(function(){Z=A;A=0;I.length=0;var a=[];u(k,function(c){b(c.element)&&a.push(c)});k.length=0;u(C(a),function(a){function c(){a.beforeStart();var d,g=a.close,e=a.anchors?
a.from.element||a.to.element:a.element;b(e)&&z(e).parentNode&&(e=f(a))&&(d=e.start);d?(d=d(),d.done(function(a){g(!a)}),ta(a,d)):g()}a.structural?c():(I.push({node:z(a.element),fn:c}),a.classBasedIndex===Z-1&&(I=I.sort(function(a,b){return b.node.contains(a.node)}).map(function(a){return a.fn}),h(I)))})});return x}}]}]).provider("$animateCss",["$animateProvider",function(a){var b=Ba(),c=Ba();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$document","$sniffer","$$rAFScheduler",function(a,
e,s,n,h,k,D){function A(a,b){var c=a.parentNode;return(c.$$ngAnimateParentKey||(c.$$ngAnimateParentKey=++r))+"-"+a.getAttribute("class")+"-"+b}function Z(h,f,B,k){var m;0<b.count(B)&&(m=c.get(B),m||(f=ba(f,"-stagger"),e.addClass(h,f),m=za(a,h,k),m.animationDuration=Math.max(m.animationDuration,0),m.transitionDuration=Math.max(m.transitionDuration,0),e.removeClass(h,f),c.put(B,m)));return m||{}}function I(a){C.push(a);D.waitUntilQuiet(function(){b.flush();c.flush();for(var a=K.offsetWidth+1,d=0;d<
C.length;d++)C[d](a);C.length=0})}function w(c,f,e){f=b.get(e);f||(f=za(a,c,Ma),"infinite"===f.animationIterationCount&&(f.animationIterationCount=1));b.put(e,f);c=f;e=c.animationDelay;f=c.transitionDelay;c.maxDelay=e&&f?Math.max(e,f):e||f;c.maxDuration=Math.max(c.animationDuration*c.animationIterationCount,c.transitionDuration);return c}var B=ha(e),r=0,K=z(h).body,C=[];return function(a,c){function d(){m()}function h(){m(!0)}function m(b){if(!(K||C&&D)){K=!0;D=!1;e.removeClass(a,Y);e.removeClass(a,
W);ma(g,!1);ja(g,!1);u(l,function(a){g.style[a[0]]=""});B(a,c);ca(a,c);if(c.onDone)c.onDone();p&&p.complete(!b)}}function L(a){q.blockTransition&&ja(g,a);q.blockKeyframeAnimation&&ma(g,!!a)}function x(){p=new s({end:d,cancel:h});m();return{$$willAnimate:!1,start:function(){return p},end:d}}function M(){function b(){if(!K){L(!1);u(l,function(a){g.style[a[0]]=a[1]});B(a,c);e.addClass(a,W);if(q.recalculateTimingStyles){fa=g.className+" "+Y;$=A(g,fa);y=w(g,fa,$);Q=y.maxDelay;H=Math.max(Q,0);J=y.maxDuration;
if(0===J){m();return}q.hasTransitions=0<y.transitionDuration;q.hasAnimations=0<y.animationDuration}if(q.applyTransitionDelay||q.applyAnimationDelay){Q="boolean"!==typeof c.delay&&la(c.delay)?parseFloat(c.delay):Q;H=Math.max(Q,0);var k;q.applyTransitionDelay&&(y.transitionDelay=Q,k=[ea,Q+"s"],l.push(k),g.style[k[0]]=k[1]);q.applyAnimationDelay&&(y.animationDelay=Q,k=[ra,Q+"s"],l.push(k),g.style[k[0]]=k[1])}F=1E3*H;G=1E3*J;if(c.easing){var r=c.easing;q.hasTransitions&&(k=O+"TimingFunction",l.push([k,
r]),g.style[k]=r);q.hasAnimations&&(k=V+"TimingFunction",l.push([k,r]),g.style[k]=r)}y.transitionDuration&&p.push(pa);y.animationDuration&&p.push(qa);x=Date.now();a.on(p.join(" "),h);n(d,F+1.5*G);xa(a,c)}}function d(){m()}function h(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-x,0)>=F&&b>=J&&(C=!0,m())}if(!K)if(g.parentNode){var x,p=[],k=function(a){if(C)D&&a&&(D=!1,m());else if(D=!a,y.animationDuration)if(a=
ma(g,D),D)l.push(a);else{var b=l,c=b.indexOf(a);0<=a&&b.splice(c,1)}},r=0<U&&(y.transitionDuration&&0===T.transitionDuration||y.animationDuration&&0===T.animationDuration)&&Math.max(T.animationDelay,T.transitionDelay);r?n(b,Math.floor(r*U*1E3),!1):b();t.resume=function(){k(!0)};t.pause=function(){k(!1)}}else m()}var g=z(a);if(!g||!g.parentNode)return x();c=ia(c);var l=[],r=a.attr("class"),v=Ea(c),K,D,C,p,t,H,F,J,G;if(0===c.duration||!k.animations&&!k.transitions)return x();var aa=c.event&&X(c.event)?
c.event.join(" "):c.event,R="",N="";aa&&c.structural?R=ba(aa,"ng-",!0):aa&&(R=aa);c.addClass&&(N+=ba(c.addClass,"-add"));c.removeClass&&(N.length&&(N+=" "),N+=ba(c.removeClass,"-remove"));c.applyClassesEarly&&N.length&&(B(a,c),N="");var Y=[R,N].join(" ").trim(),fa=r+" "+Y,W=ba(Y,"-active"),r=v.to&&0<Object.keys(v.to).length;if(!(0<(c.keyframeStyle||"").length||r||Y))return x();var $,T;0<c.stagger?(v=parseFloat(c.stagger),T={transitionDelay:v,animationDelay:v,transitionDuration:0,animationDuration:0}):
($=A(g,fa),T=Z(g,Y,$,Na));e.addClass(a,Y);c.transitionStyle&&(v=[O,c.transitionStyle],da(g,v),l.push(v));0<=c.duration&&(v=0<g.style[O].length,v=Aa(c.duration,v),da(g,v),l.push(v));c.keyframeStyle&&(v=[V,c.keyframeStyle],da(g,v),l.push(v));var U=T?0<=c.staggerIndex?c.staggerIndex:b.count($):0;(aa=0===U)&&ja(g,9999);var y=w(g,fa,$),Q=y.maxDelay;H=Math.max(Q,0);J=y.maxDuration;var q={};q.hasTransitions=0<y.transitionDuration;q.hasAnimations=0<y.animationDuration;q.hasTransitionAll=q.hasTransitions&&
"all"==y.transitionProperty;q.applyTransitionDuration=r&&(q.hasTransitions&&!q.hasTransitionAll||q.hasAnimations&&!q.hasTransitions);q.applyAnimationDuration=c.duration&&q.hasAnimations;q.applyTransitionDelay=la(c.delay)&&(q.applyTransitionDuration||q.hasTransitions);q.applyAnimationDelay=la(c.delay)&&q.hasAnimations;q.recalculateTimingStyles=0<N.length;if(q.applyTransitionDuration||q.applyAnimationDuration)J=c.duration?parseFloat(c.duration):J,q.applyTransitionDuration&&(q.hasTransitions=!0,y.transitionDuration=
J,v=0<g.style[O+"Property"].length,l.push(Aa(J,v))),q.applyAnimationDuration&&(q.hasAnimations=!0,y.animationDuration=J,l.push([sa,J+"s"]));if(0===J&&!q.recalculateTimingStyles)return x();null==c.duration&&0<y.transitionDuration&&(q.recalculateTimingStyles=q.recalculateTimingStyles||aa);F=1E3*H;G=1E3*J;c.skipBlocking||(q.blockTransition=0<y.transitionDuration,q.blockKeyframeAnimation=0<y.animationDuration&&0<T.animationDelay&&0===T.animationDuration);wa(a,c);q.blockTransition||ja(g,!1);L(J);return{$$willAnimate:!0,
end:d,start:function(){if(!K)return t={end:d,cancel:h,resume:null,pause:null},p=new s(t),I(M),p}}}}]}]).provider("$$animateCssDriver",["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$document","$sniffer",function(a,c,d,e,s,n){function h(a){return a.replace(/\bng-\S+\b/g,"")}function k(a,b){U(a)&&(a=a.split(" "));U(b)&&(b=b.split(" "));return a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}function D(c,
e,A){function D(a){var b={},c=z(a).getBoundingClientRect();u(["width","height","top","left"],function(a){var d=c[a];switch(a){case "top":d+=I.scrollTop;break;case "left":d+=I.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function s(){var c=h(A.attr("class")||""),d=k(c,t),c=k(t,c),d=a(n,{to:D(A),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?d:null}function f(){n.remove();e.removeClass("ng-animate-shim");A.removeClass("ng-animate-shim")}var n=G(z(e).cloneNode(!0)),
t=h(n.attr("class")||"");e.addClass("ng-animate-shim");A.addClass("ng-animate-shim");n.addClass("ng-anchor");w.append(n);var m;c=function(){var c=a(n,{addClass:"ng-anchor-out",delay:!0,from:D(e)});return c.$$willAnimate?c:null}();if(!c&&(m=s(),!m))return f();var L=c||m;return{start:function(){function a(){c&&c.end()}var b,c=L.start();c.done(function(){c=null;if(!m&&(m=s()))return c=m.start(),c.done(function(){c=null;f();b.complete()}),c;f();b.complete()});return b=new d({end:a,cancel:a})}}}function A(a,
b,c,e){var h=t(a),f=t(b),k=[];u(e,function(a){(a=D(c,a.out,a["in"]))&&k.push(a)});if(h||f||0!==k.length)return{start:function(){function a(){u(b,function(a){a.end()})}var b=[];h&&b.push(h.start());f&&b.push(f.start());u(k,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function t(c){var d=c.element,e=c.options||{};c.structural?(e.structural=e.applyClassesEarly=!0,e.event=c.event,"leave"===e.event&&(e.onDone=e.domOperation)):e.event=null;
c=a(d,e);return c.$$willAnimate?c:null}if(!n.animations&&!n.transitions)return H;var I=z(s).body;c=z(e);var w=G(I.parentNode===c?I:c);return function(a){return a.from&&a.to?A(a.from,a.to,a.classes,a.anchors):t(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=["$injector","$$AnimateRunner","$$rAFMutex","$$jqLite",function(b,c,d,e){function s(c){c=X(c)?c:c.split(" ");for(var d=[],e={},A=0;A<c.length;A++){var n=c[A],s=a.$$registeredAnimations[n];s&&!e[n]&&(d.push(b.get(s)),e[n]=
!0)}return d}var n=ha(e);return function(a,b,d,e){function t(){e.domOperation();n(a,e)}function z(a,b,d,e,g){switch(d){case "animate":b=[b,e.from,e.to,g];break;case "setClass":b=[b,r,K,g];break;case "addClass":b=[b,r,g];break;case "removeClass":b=[b,K,g];break;default:b=[b,g]}b.push(e);if(a=a.apply(a,b))if(Ca(a.start)&&(a=a.start()),a instanceof c)a.done(g);else if(Ca(a))return a;return H}function w(a,b,d,e,g){var f=[];u(e,function(e){var h=e[g];h&&f.push(function(){var e,g,f=!1,l=function(a){f||
(f=!0,(g||H)(a),e.complete(!a))};e=new c({end:function(){l()},cancel:function(){l(!0)}});g=z(h,a,b,d,function(a){l(!1===a)});return e})});return f}function B(a,b,d,e,g){var f=w(a,b,d,e,g);if(0===f.length){var h,k;"beforeSetClass"===g?(h=w(a,"removeClass",d,e,"beforeRemoveClass"),k=w(a,"addClass",d,e,"beforeAddClass")):"setClass"===g&&(h=w(a,"removeClass",d,e,"removeClass"),k=w(a,"addClass",d,e,"addClass"));h&&(f=f.concat(h));k&&(f=f.concat(k))}if(0!==f.length)return function(a){var b=[];f.length&&
u(f,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){u(b,function(b){a?b.cancel():b.end()})}}}3===arguments.length&&na(d)&&(e=d,d=null);e=ia(e);d||(d=a.attr("class")||"",e.addClass&&(d+=" "+e.addClass),e.removeClass&&(d+=" "+e.removeClass));var r=e.addClass,K=e.removeClass,C=s(d),E,f;if(C.length){var F,G;"leave"==b?(G="leave",F="afterLeave"):(G="before"+b.charAt(0).toUpperCase()+b.substr(1),F=b);"enter"!==b&&"move"!==b&&(E=B(a,b,e,C,G));f=B(a,b,e,C,F)}if(E||f)return{start:function(){function b(c){n=
!0;t();ca(a,e);g.complete(c)}var d,k=[];E&&k.push(function(a){d=E(a)});k.length?k.push(function(a){t();a(!0)}):t();f&&k.push(function(a){d=f(a)});var n=!1,g=new c({end:function(){n||((d||H)(void 0),b(void 0))},cancel:function(){n||((d||H)(!0),b(!0))}});c.chain(k,b);return g}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,c.event,c.classes,c.options)}
return function(a){if(a.from&&a.to){var b=d(a.from),n=d(a.to);if(b||n)return{start:function(){function a(){return function(){u(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());n&&d.push(n.start());c.all(d,function(a){e.complete(a)});var e=new c({end:a(),cancel:a()});return e}}}else return d(a)}}]}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

/*!
 * ionic.bundle.js is a concatenation of:
 * ionic.js, angular.js, angular-animate.js,
 * angular-sanitize.js, angular-ui-router.js,
 * and ionic-angular.js
 */

/*
 AngularJS v1.4.3
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,h,p){'use strict';function E(a){var f=[];r(f,h.noop).chars(a);return f.join("")}function g(a,f){var d={},c=a.split(","),b;for(b=0;b<c.length;b++)d[f?h.lowercase(c[b]):c[b]]=!0;return d}function F(a,f){function d(a,b,d,l){b=h.lowercase(b);if(s[b])for(;e.last()&&t[e.last()];)c("",e.last());u[b]&&e.last()==b&&c("",b);(l=v[b]||!!l)||e.push(b);var m={};d.replace(G,function(b,a,f,c,d){m[a]=q(f||c||d||"")});f.start&&f.start(b,m,l)}function c(b,a){var c=0,d;if(a=h.lowercase(a))for(c=e.length-
1;0<=c&&e[c]!=a;c--);if(0<=c){for(d=e.length-1;d>=c;d--)f.end&&f.end(e[d]);e.length=c}}"string"!==typeof a&&(a=null===a||"undefined"===typeof a?"":""+a);var b,k,e=[],m=a,l;for(e.last=function(){return e[e.length-1]};a;){l="";k=!0;if(e.last()&&w[e.last()])a=a.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*"+e.last()+"[^>]*>","i"),function(a,b){b=b.replace(H,"$1").replace(I,"$1");f.chars&&f.chars(q(b));return""}),c("",e.last());else{if(0===a.indexOf("\x3c!--"))b=a.indexOf("--",4),0<=b&&a.lastIndexOf("--\x3e",
b)===b&&(f.comment&&f.comment(a.substring(4,b)),a=a.substring(b+3),k=!1);else if(x.test(a)){if(b=a.match(x))a=a.replace(b[0],""),k=!1}else if(J.test(a)){if(b=a.match(y))a=a.substring(b[0].length),b[0].replace(y,c),k=!1}else K.test(a)&&((b=a.match(z))?(b[4]&&(a=a.substring(b[0].length),b[0].replace(z,d)),k=!1):(l+="<",a=a.substring(1)));k&&(b=a.indexOf("<"),l+=0>b?a:a.substring(0,b),a=0>b?"":a.substring(b),f.chars&&f.chars(q(l)))}if(a==m)throw L("badparse",a);m=a}c()}function q(a){if(!a)return"";A.innerHTML=
a.replace(/</g,"&lt;");return A.textContent}function B(a){return a.replace(/&/g,"&amp;").replace(M,function(a){var d=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(d-55296)+(a-56320)+65536)+";"}).replace(N,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function r(a,f){var d=!1,c=h.bind(a,a.push);return{start:function(a,k,e){a=h.lowercase(a);!d&&w[a]&&(d=a);d||!0!==C[a]||(c("<"),c(a),h.forEach(k,function(d,e){var k=h.lowercase(e),g="img"===a&&"src"===k||
"background"===k;!0!==O[k]||!0===D[k]&&!f(d,g)||(c(" "),c(e),c('="'),c(B(d)),c('"'))}),c(e?"/>":">"))},end:function(a){a=h.lowercase(a);d||!0!==C[a]||(c("</"),c(a),c(">"));a==d&&(d=!1)},chars:function(a){d||c(B(a))}}}var L=h.$$minErr("$sanitize"),z=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,y=/^<\/\s*([\w:-]+)[^>]*>/,G=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,K=/^</,J=/^<\//,H=/\x3c!--(.*?)--\x3e/g,x=/<!DOCTYPE([^>]*?)>/i,
I=/<!\[CDATA\[(.*?)]]\x3e/g,M=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,N=/([^\#-~| |!])/g,v=g("area,br,col,hr,img,wbr");n=g("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");p=g("rp,rt");var u=h.extend({},p,n),s=h.extend({},n,g("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),t=h.extend({},p,g("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var"));
n=g("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan,use");var w=g("script,style"),C=h.extend({},v,s,t,u,n),D=g("background,cite,href,longdesc,src,usemap,xlink:href");n=g("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width");
p=g("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
!0);var O=h.extend({},D,p,n),A=document.createElement("pre");h.module("ngSanitize",[]).provider("$sanitize",function(){this.$get=["$$sanitizeUri",function(a){return function(f){var d=[];F(f,r(d,function(c,b){return!/^unsafe/.test(a(c,b))}));return d.join("")}}]});h.module("ngSanitize").filter("linky",["$sanitize",function(a){var f=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,d=/^mailto:/i;return function(c,b){function k(a){a&&g.push(E(a))}function e(a,
c){g.push("<a ");h.isDefined(b)&&g.push('target="',b,'" ');g.push('href="',a.replace(/"/g,"&quot;"),'">');k(c);g.push("</a>")}if(!c)return c;for(var m,l=c,g=[],n,p;m=l.match(f);)n=m[0],m[2]||m[4]||(n=(m[3]?"http://":"mailto:")+n),p=m.index,k(l.substr(0,p)),e(n,m[0].replace(d,"")),l=l.substring(p+m[0].length);k(l);return a(g.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

/*!
 * ionic.bundle.js is a concatenation of:
 * ionic.js, angular.js, angular-animate.js,
 * angular-sanitize.js, angular-ui-router.js,
 * and ionic-angular.js
 */

/**
 * State-based routing for AngularJS
 * @version v0.2.13
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return M(new(M(function(){},{prototype:a})),b)}function e(a){return L(arguments,function(b){b!==a&&L(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a){if(Object.keys)return Object.keys(a);var c=[];return b.forEach(a,function(a,b){c.push(b)}),c}function h(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=0>d?Math.ceil(d):Math.floor(d),0>d&&(d+=c);c>d;d++)if(d in a&&a[d]===b)return d;return-1}function i(a,b,c,d){var e,i=f(c,d),j={},k=[];for(var l in i)if(i[l].params&&(e=g(i[l].params),e.length))for(var m in e)h(k,e[m])>=0||(k.push(e[m]),j[e[m]]=a[e[m]]);return M({},j,b)}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return L(a,function(a){c[a]=b[a]}),c}function l(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var d in a)-1==h(c,d)&&(b[d]=a[d]);return b}function m(a,b){var c=K(a),d=c?[]:{};return L(a,function(a,e){b(a,e)&&(d[c?d.length:e]=a)}),d}function n(a,b){var c=K(a)?[]:{};return L(a,function(a,d){c[d]=b(a,d)}),c}function o(a,b){var d=1,f=2,i={},j=[],k=i,m=M(a.when(i),{$$promises:i,$$values:i});this.study=function(i){function n(a,c){if(s[c]!==f){if(r.push(c),s[c]===d)throw r.splice(0,h(r,c)),new Error("Cyclic dependency: "+r.join(" -> "));if(s[c]=d,I(a))q.push(c,[function(){return b.get(a)}],j);else{var e=b.annotate(a);L(e,function(a){a!==c&&i.hasOwnProperty(a)&&n(i[a],a)}),q.push(c,a,e)}r.pop(),s[c]=f}}function o(a){return J(a)&&a.then&&a.$$promises}if(!J(i))throw new Error("'invocables' must be an object");var p=g(i||{}),q=[],r=[],s={};return L(i,n),i=r=s=null,function(d,f,g){function h(){--u||(v||e(t,f.$$values),r.$$values=t,r.$$promises=r.$$promises||!0,delete r.$$inheritedValues,n.resolve(t))}function i(a){r.$$failure=a,n.reject(a)}function j(c,e,f){function j(a){l.reject(a),i(a)}function k(){if(!G(r.$$failure))try{l.resolve(b.invoke(e,g,t)),l.promise.then(function(a){t[c]=a,h()},j)}catch(a){j(a)}}var l=a.defer(),m=0;L(f,function(a){s.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,s[a].then(function(b){t[a]=b,--m||k()},j))}),m||k(),s[c]=l.promise}if(o(d)&&g===c&&(g=f,f=d,d=null),d){if(!J(d))throw new Error("'locals' must be an object")}else d=k;if(f){if(!o(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=m;var n=a.defer(),r=n.promise,s=r.$$promises={},t=M({},d),u=1+q.length/3,v=!1;if(G(f.$$failure))return i(f.$$failure),r;f.$$inheritedValues&&e(t,l(f.$$inheritedValues,p)),M(s,f.$$promises),f.$$values?(v=e(t,l(f.$$values,p)),r.$$inheritedValues=l(f.$$values,p),h()):(f.$$inheritedValues&&(r.$$inheritedValues=l(f.$$inheritedValues,p)),f.then(h,i));for(var w=0,x=q.length;x>w;w+=3)d.hasOwnProperty(q[w])?h():j(q[w],q[w+1],q[w+2]);return r}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function p(a,b,c){this.fromConfig=function(a,b,c){return G(a.template)?this.fromString(a.template,b):G(a.templateUrl)?this.fromUrl(a.templateUrl,b):G(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return H(a)?a(b):a},this.fromUrl=function(c,d){return H(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b,headers:{Accept:"text/html"}}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function q(a,b,e){function f(b,c,d,e){if(q.push(b),o[b])return o[b];if(!/^\w+(-+\w+)*(?:\[\])?$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(p[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");return p[b]=new O.Param(b,c,d,e),p[b]}function g(a,b,c){var d=["",""],e=a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!b)return e;switch(c){case!1:d=["(",")"];break;case!0:d=["?(",")?"];break;default:d=["("+c+"|",")?"]}return e+d[0]+b+d[1]}function h(c,e){var f,g,h,i,j;return f=c[2]||c[3],j=b.params[f],h=a.substring(m,c.index),g=e?c[4]:c[4]||("*"==c[1]?".*":null),i=O.type(g||"string")||d(O.type("string"),{pattern:new RegExp(g)}),{id:f,regexp:g,segment:h,type:i,cfg:j}}b=M({params:{}},J(b)?b:{});var i,j=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,k=/([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,l="^",m=0,n=this.segments=[],o=e?e.params:{},p=this.params=e?e.params.$$new():new O.ParamSet,q=[];this.source=a;for(var r,s,t;(i=j.exec(a))&&(r=h(i,!1),!(r.segment.indexOf("?")>=0));)s=f(r.id,r.type,r.cfg,"path"),l+=g(r.segment,s.type.pattern.source,s.squash),n.push(r.segment),m=j.lastIndex;t=a.substring(m);var u=t.indexOf("?");if(u>=0){var v=this.sourceSearch=t.substring(u);if(t=t.substring(0,u),this.sourcePath=a.substring(0,m+u),v.length>0)for(m=0;i=k.exec(v);)r=h(i,!0),s=f(r.id,r.type,r.cfg,"search"),m=j.lastIndex}else this.sourcePath=a,this.sourceSearch="";l+=g(t)+(b.strict===!1?"/?":"")+"$",n.push(t),this.regexp=new RegExp(l,b.caseInsensitive?"i":c),this.prefix=n[0],this.$$paramNames=q}function r(a){M(this,a)}function s(){function a(a){return null!=a?a.toString().replace(/\//g,"%2F"):a}function e(a){return null!=a?a.toString().replace(/%2F/g,"/"):a}function f(a){return this.pattern.test(a)}function i(){return{strict:t,caseInsensitive:p}}function j(a){return H(a)||K(a)&&H(a[a.length-1])}function k(){for(;x.length;){var a=x.shift();if(a.pattern)throw new Error("You cannot override a type's .pattern at runtime.");b.extend(v[a.name],o.invoke(a.def))}}function l(a){M(this,a||{})}O=this;var o,p=!1,t=!0,u=!1,v={},w=!0,x=[],y={string:{encode:a,decode:e,is:f,pattern:/[^/]*/},"int":{encode:a,decode:function(a){return parseInt(a,10)},is:function(a){return G(a)&&this.decode(a.toString())===a},pattern:/\d+/},bool:{encode:function(a){return a?1:0},decode:function(a){return 0!==parseInt(a,10)},is:function(a){return a===!0||a===!1},pattern:/0|1/},date:{encode:function(a){return this.is(a)?[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-"):c},decode:function(a){if(this.is(a))return a;var b=this.capture.exec(a);return b?new Date(b[1],b[2]-1,b[3]):c},is:function(a){return a instanceof Date&&!isNaN(a.valueOf())},equals:function(a,b){return this.is(a)&&this.is(b)&&a.toISOString()===b.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:b.toJson,decode:b.fromJson,is:b.isObject,equals:b.equals,pattern:/[^/]*/},any:{encode:b.identity,decode:b.identity,is:b.identity,equals:b.equals,pattern:/.*/}};s.$$getDefaultValue=function(a){if(!j(a.value))return a.value;if(!o)throw new Error("Injectable functions cannot be called at configuration time");return o.invoke(a.value)},this.caseInsensitive=function(a){return G(a)&&(p=a),p},this.strictMode=function(a){return G(a)&&(t=a),t},this.defaultSquashPolicy=function(a){if(!G(a))return u;if(a!==!0&&a!==!1&&!I(a))throw new Error("Invalid squash policy: "+a+". Valid policies: false, true, arbitrary-string");return u=a,a},this.compile=function(a,b){return new q(a,M(i(),b))},this.isMatcher=function(a){if(!J(a))return!1;var b=!0;return L(q.prototype,function(c,d){H(c)&&(b=b&&G(a[d])&&H(a[d]))}),b},this.type=function(a,b,c){if(!G(b))return v[a];if(v.hasOwnProperty(a))throw new Error("A type named '"+a+"' has already been defined.");return v[a]=new r(M({name:a},b)),c&&(x.push({name:a,def:c}),w||k()),this},L(y,function(a,b){v[b]=new r(M({name:b},a))}),v=d(v,{}),this.$get=["$injector",function(a){return o=a,w=!1,k(),L(y,function(a,b){v[b]||(v[b]=new r(a))}),this}],this.Param=function(a,b,d,e){function f(a){var b=J(a)?g(a):[],c=-1===h(b,"value")&&-1===h(b,"type")&&-1===h(b,"squash")&&-1===h(b,"array");return c&&(a={value:a}),a.$$fn=j(a.value)?a.value:function(){return a.value},a}function i(b,c,d){if(b.type&&c)throw new Error("Param '"+a+"' has two type configurations.");return c?c:b.type?b.type instanceof r?b.type:new r(b.type):"config"===d?v.any:v.string}function k(){var b={array:"search"===e?"auto":!1},c=a.match(/\[\]$/)?{array:!0}:{};return M(b,c,d).array}function l(a,b){var c=a.squash;if(!b||c===!1)return!1;if(!G(c)||null==c)return u;if(c===!0||I(c))return c;throw new Error("Invalid squash policy: '"+c+"'. Valid policies: false, true, or arbitrary string")}function p(a,b,d,e){var f,g,i=[{from:"",to:d||b?c:""},{from:null,to:d||b?c:""}];return f=K(a.replace)?a.replace:[],I(e)&&f.push({from:e,to:c}),g=n(f,function(a){return a.from}),m(i,function(a){return-1===h(g,a.from)}).concat(f)}function q(){if(!o)throw new Error("Injectable functions cannot be called at configuration time");return o.invoke(d.$$fn)}function s(a){function b(a){return function(b){return b.from===a}}function c(a){var c=n(m(w.replace,b(a)),function(a){return a.to});return c.length?c[0]:a}return a=c(a),G(a)?w.type.decode(a):q()}function t(){return"{Param:"+a+" "+b+" squash: '"+z+"' optional: "+y+"}"}var w=this;d=f(d),b=i(d,b,e);var x=k();b=x?b.$asArray(x,"search"===e):b,"string"!==b.name||x||"path"!==e||d.value!==c||(d.value="");var y=d.value!==c,z=l(d,y),A=p(d,x,y,z);M(this,{id:a,type:b,location:e,array:x,squash:z,replace:A,isOptional:y,value:s,dynamic:c,config:d,toString:t})},l.prototype={$$new:function(){return d(this,M(new l,{$$parent:this}))},$$keys:function(){for(var a=[],b=[],c=this,d=g(l.prototype);c;)b.push(c),c=c.$$parent;return b.reverse(),L(b,function(b){L(g(b),function(b){-1===h(a,b)&&-1===h(d,b)&&a.push(b)})}),a},$$values:function(a){var b={},c=this;return L(c.$$keys(),function(d){b[d]=c[d].value(a&&a[d])}),b},$$equals:function(a,b){var c=!0,d=this;return L(d.$$keys(),function(e){var f=a&&a[e],g=b&&b[e];d[e].type.equals(f,g)||(c=!1)}),c},$$validates:function(a){var b,c,d,e=!0,f=this;return L(this.$$keys(),function(g){d=f[g],c=a[g],b=!c&&d.isOptional,e=e&&(b||!!d.type.is(c))}),e},$$parent:c},this.ParamSet=l}function t(a,d){function e(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function f(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function g(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return G(d)?d:!0}function h(d,e,f,g){function h(a,b,c){return"/"===p?a:b?p.slice(0,-1)+a:c?p.slice(1)+a:a}function m(a){function b(a){var b=a(f,d);return b?(I(b)&&d.replace().url(b),!0):!1}if(!a||!a.defaultPrevented){var e=o&&d.url()===o;if(o=c,e)return!0;var g,h=j.length;for(g=0;h>g;g++)if(b(j[g]))return;k&&b(k)}}function n(){return i=i||e.$on("$locationChangeSuccess",m)}var o,p=g.baseHref(),q=d.url();return l||n(),{sync:function(){m()},listen:function(){return n()},update:function(a){return a?void(q=d.url()):void(d.url()!==q&&(d.url(q),d.replace()))},push:function(a,b,e){d.url(a.format(b||{})),o=e&&e.$$avoidResync?d.url():c,e&&e.replace&&d.replace()},href:function(c,e,f){if(!c.validates(e))return null;var g=a.html5Mode();b.isObject(g)&&(g=g.enabled);var i=c.format(e);if(f=f||{},g||null===i||(i="#"+a.hashPrefix()+i),i=h(i,g,f.absolute),!f.absolute||!i)return i;var j=!g&&i?"/":"",k=d.port();return k=80===k||443===k?"":":"+k,[d.protocol(),"://",d.host(),k,j,i].join("")}}}var i,j=[],k=null,l=!1;this.rule=function(a){if(!H(a))throw new Error("'rule' must be a function");return j.push(a),this},this.otherwise=function(a){if(I(a)){var b=a;a=function(){return b}}else if(!H(a))throw new Error("'rule' must be a function");return k=a,this},this.when=function(a,b){var c,h=I(b);if(I(a)&&(a=d.compile(a)),!h&&!H(b)&&!K(b))throw new Error("invalid 'handler' in when()");var i={matcher:function(a,b){return h&&(c=d.compile(b),b=["$match",function(a){return c.format(a)}]),M(function(c,d){return g(c,b,a.exec(d.path(),d.search()))},{prefix:I(a.prefix)?a.prefix:""})},regex:function(a,b){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(c=b,b=["$match",function(a){return f(c,a)}]),M(function(c,d){return g(c,b,a.exec(d.path()))},{prefix:e(a)})}},j={matcher:d.isMatcher(a),regex:a instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](a,b));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(a){a===c&&(a=!0),l=a},this.$get=h,h.$inject=["$location","$rootScope","$injector","$browser"]}function u(a,e){function f(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function l(a,b){if(!a)return c;var d=I(a),e=d?a:a.name,g=f(e);if(g){if(!b)throw new Error("No reference point given for path '"+e+"'");b=l(b);for(var h=e.split("."),i=0,j=h.length,k=b;j>i;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var m=y[e];return!m||!d&&(d||m!==a&&m.self!==a)?c:m}function m(a,b){z[a]||(z[a]=[]),z[a].push(b)}function o(a){for(var b=z[a]||[];b.length;)p(b.shift())}function p(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!I(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(y.hasOwnProperty(c))throw new Error("State '"+c+"'' is already defined");var e=-1!==c.indexOf(".")?c.substring(0,c.lastIndexOf(".")):I(b.parent)?b.parent:J(b.parent)&&I(b.parent.name)?b.parent.name:"";if(e&&!y[e])return m(e,b.self);for(var f in B)H(B[f])&&(b[f]=B[f](b,B.$delegates[f]));return y[c]=b,!b[A]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){x.$current.navigable==b&&j(a,c)||x.transitionTo(b,a,{inherit:!0,location:!1})}]),o(c),b}function q(a){return a.indexOf("*")>-1}function r(a){var b=a.split("."),c=x.$current.name.split(".");if("**"===b[0]&&(c=c.slice(h(c,b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(h(c,b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length!=c.length)return!1;for(var d=0,e=b.length;e>d;d++)"*"===b[d]&&(c[d]="*");return c.join("")===b.join("")}function s(a,b){return I(a)&&!G(b)?B[a]:H(b)&&I(a)?(B[a]&&!B.$delegates[a]&&(B.$delegates[a]=B[a]),B[a]=b,this):this}function t(a,b){return J(a)?b=a:b.name=a,p(b),this}function u(a,e,f,h,m,o,p){function s(b,c,d,f){var g=a.$broadcast("$stateNotFound",b,c,d);if(g.defaultPrevented)return p.update(),B;if(!g.retry)return null;if(f.$retry)return p.update(),C;var h=x.transition=e.when(g.retry);return h.then(function(){return h!==x.transition?u:(b.options.$retry=!0,x.transitionTo(b.to,b.toParams,b.options))},function(){return B}),p.update(),h}function t(a,c,d,g,i,j){var l=d?c:k(a.params.$$keys(),c),n={$stateParams:l};i.resolve=m.resolve(a.resolve,n,i.resolve,a);var o=[i.resolve.then(function(a){i.globals=a})];return g&&o.push(g),L(a.views,function(c,d){var e=c.resolve&&c.resolve!==a.resolve?c.resolve:{};e.$template=[function(){return f.load(d,{view:c,locals:n,params:l,notify:j.notify})||""}],o.push(m.resolve(e,n,i.resolve,a).then(function(f){if(H(c.controllerProvider)||K(c.controllerProvider)){var g=b.extend({},e,n);f.$$controller=h.invoke(c.controllerProvider,null,g)}else f.$$controller=c.controller;f.$$state=a,f.$$controllerAs=c.controllerAs,i[d]=f}))}),e.all(o).then(function(){return i})}var u=e.reject(new Error("transition superseded")),z=e.reject(new Error("transition prevented")),B=e.reject(new Error("transition aborted")),C=e.reject(new Error("transition failed"));return w.locals={resolve:null,globals:{$stateParams:{}}},x={params:{},current:w.self,$current:w,transition:null},x.reload=function(){return x.transitionTo(x.current,o,{reload:!0,inherit:!1,notify:!0})},x.go=function(a,b,c){return x.transitionTo(a,b,M({inherit:!0,relative:x.$current},c))},x.transitionTo=function(b,c,f){c=c||{},f=M({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,j=x.$current,m=x.params,n=j.path,q=l(b,f.relative);if(!G(q)){var r={to:b,toParams:c,options:f},y=s(r,j.self,m,f);if(y)return y;if(b=r.to,c=r.toParams,f=r.options,q=l(b,f.relative),!G(q)){if(!f.relative)throw new Error("No such state '"+b+"'");throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'")}}if(q[A])throw new Error("Cannot transition to abstract state '"+b+"'");if(f.inherit&&(c=i(o,c||{},x.$current,q)),!q.params.$$validates(c))return C;c=q.params.$$values(c),b=q;var B=b.path,D=0,E=B[D],F=w.locals,H=[];if(!f.reload)for(;E&&E===n[D]&&E.ownParams.$$equals(c,m);)F=H[D]=E.locals,D++,E=B[D];if(v(b,j,F,f))return b.self.reloadOnSearch!==!1&&p.update(),x.transition=null,e.when(x.current);if(c=k(b.params.$$keys(),c||{}),f.notify&&a.$broadcast("$stateChangeStart",b.self,c,j.self,m).defaultPrevented)return p.update(),z;for(var I=e.when(F),J=D;J<B.length;J++,E=B[J])F=H[J]=d(F),I=t(E,c,E===b,I,F,f);var K=x.transition=I.then(function(){var d,e,g;if(x.transition!==K)return u;for(d=n.length-1;d>=D;d--)g=n[d],g.self.onExit&&h.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=D;d<B.length;d++)e=B[d],e.locals=H[d],e.self.onEnter&&h.invoke(e.self.onEnter,e.self,e.locals.globals);return x.transition!==K?u:(x.$current=b,x.current=b.self,x.params=c,N(x.params,o),x.transition=null,f.location&&b.navigable&&p.push(b.navigable.url,b.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===f.location}),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,j.self,m),p.update(!0),x.current)},function(d){return x.transition!==K?u:(x.transition=null,g=a.$broadcast("$stateChangeError",b.self,c,j.self,m,d),g.defaultPrevented||p.update(),e.reject(d))});return K},x.is=function(a,b,d){d=M({relative:x.$current},d||{});var e=l(a,d.relative);return G(e)?x.$current!==e?!1:b?j(e.params.$$values(b),o):!0:c},x.includes=function(a,b,d){if(d=M({relative:x.$current},d||{}),I(a)&&q(a)){if(!r(a))return!1;a=x.$current.name}var e=l(a,d.relative);return G(e)?G(x.$current.includes[e.name])?b?j(e.params.$$values(b),o,g(b)):!0:!1:c},x.href=function(a,b,d){d=M({lossy:!0,inherit:!0,absolute:!1,relative:x.$current},d||{});var e=l(a,d.relative);if(!G(e))return null;d.inherit&&(b=i(o,b||{},x.$current,e));var f=e&&d.lossy?e.navigable:e;return f&&f.url!==c&&null!==f.url?p.href(f.url,k(e.params.$$keys(),b||{}),{absolute:d.absolute}):null},x.get=function(a,b){if(0===arguments.length)return n(g(y),function(a){return y[a].self});var c=l(a,b||x.$current);return c&&c.self?c.self:null},x}function v(a,b,c,d){return a!==b||(c!==b.locals||d.reload)&&a.self.reloadOnSearch!==!1?void 0:!0}var w,x,y={},z={},A="abstract",B={parent:function(a){if(G(a.parent)&&a.parent)return l(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?l(b[1]):w},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=M({},a.parent.data,a.data)),a.data},url:function(a){var b=a.url,c={params:a.params||{}};if(I(b))return"^"==b.charAt(0)?e.compile(b.substring(1),c):(a.parent.navigable||w).url.concat(b,c);if(!b||e.isMatcher(b))return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},ownParams:function(a){var b=a.url&&a.url.params||new O.ParamSet;return L(a.params||{},function(a,c){b[c]||(b[c]=new O.Param(c,null,a,"config"))}),b},params:function(a){return a.parent&&a.parent.params?M(a.parent.params.$$new(),a.ownParams):new O.ParamSet},views:function(a){var b={};return L(G(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),b[d]=c}),b},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?M({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};w=p({name:"",url:"^",views:null,"abstract":!0}),w.navigable=null,this.decorator=s,this.state=t,this.$get=u,u.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function v(){function a(a,b){return{load:function(c,d){var e,f={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return d=M(f,d),d.view&&(e=b.fromConfig(d.view,d.params,d.locals)),e&&d.notify&&a.$broadcast("$viewContentLoading",d),e}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function w(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){c(function(){a[0].scrollIntoView()},0,!1)}}]}function x(a,c,d,e){function f(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(b){return null}}}function g(a,b){var c=function(){return{enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}}};if(j)return{enter:function(a,b,c){var d=j.enter(a,null,b,c);d&&d.then&&d.then(c)},leave:function(a,b){var c=j.leave(a,b);c&&c.then&&c.then(b)}};if(i){var d=i&&i(b,a);return{enter:function(a,b,c){d.enter(a,null,b),c()},leave:function(a,b){d.leave(a),b()}}}return c()}var h=f(),i=h("$animator"),j=h("$animate"),k={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,f,h){return function(c,f,i){function j(){l&&(l.remove(),l=null),n&&(n.$destroy(),n=null),m&&(r.leave(m,function(){l=null}),l=m,m=null)}function k(g){var k,l=z(c,i,f,e),s=l&&a.$current&&a.$current.locals[l];if(g||s!==o){k=c.$new(),o=a.$current.locals[l];var t=h(k,function(a){r.enter(a,f,function(){n&&n.$emit("$viewContentAnimationEnded"),(b.isDefined(q)&&!q||c.$eval(q))&&d(a)}),j()});m=t,n=k,n.$emit("$viewContentLoaded"),n.$eval(p)}}var l,m,n,o,p=i.onload||"",q=i.autoscroll,r=g(i,c);c.$on("$stateChangeSuccess",function(){k(!1)}),c.$on("$viewContentLoading",function(){k(!1)}),k(!0)}}};return k}function y(a,b,c,d){return{restrict:"ECA",priority:-400,compile:function(e){var f=e.html();return function(e,g,h){var i=c.$current,j=z(e,h,g,d),k=i&&i.locals[j];if(k){g.data("$uiView",{name:j,state:k.$$state}),g.html(k.$template?k.$template:f);var l=a(g.contents());if(k.$$controller){k.$scope=e;var m=b(k.$$controller,k);k.$$controllerAs&&(e[k.$$controllerAs]=m),g.data("$ngControllerController",m),g.children().data("$ngControllerController",m)}l(e)}}}}}function z(a,b,c,d){var e=d(b.uiView||b.name||"")(a),f=c.inheritedData("$uiView");return e.indexOf("@")>=0?e:e+"@"+(f?f.state.name:"")}function A(a,b){var c,d=a.match(/^\s*({[^}]*})\s*$/);if(d&&(a=b+"("+d[1]+")"),c=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!c||4!==c.length)throw new Error("Invalid state ref '"+a+"'");return{state:c[1],paramExpr:c[3]||null}}function B(a){var b=a.parent().inheritedData("$uiView");return b&&b.state&&b.state.name?b.state:void 0}function C(a,c){var d=["location","inherit","reload"];return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(e,f,g,h){var i=A(g.uiSref,a.current.name),j=null,k=B(f)||a.$current,l=null,m="A"===f.prop("tagName"),n="FORM"===f[0].nodeName,o=n?"action":"href",p=!0,q={relative:k,inherit:!0},r=e.$eval(g.uiSrefOpts)||{};b.forEach(d,function(a){a in r&&(q[a]=r[a])});var s=function(c){if(c&&(j=b.copy(c)),p){l=a.href(i.state,j,q);var d=h[1]||h[0];return d&&d.$$setStateInfo(i.state,j),null===l?(p=!1,!1):void g.$set(o,l)}};i.paramExpr&&(e.$watch(i.paramExpr,function(a){a!==j&&s(a)},!0),j=b.copy(e.$eval(i.paramExpr))),s(),n||f.bind("click",function(b){var d=b.which||b.button;if(!(d>1||b.ctrlKey||b.metaKey||b.shiftKey||f.attr("target"))){var e=c(function(){a.go(i.state,j,q)});b.preventDefault();var g=m&&!l?1:0;b.preventDefault=function(){g--<=0&&c.cancel(e)}}})}}}function D(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs",function(b,d,e){function f(){g()?d.addClass(j):d.removeClass(j)}function g(){return"undefined"!=typeof e.uiSrefActiveEq?h&&a.is(h.name,i):h&&a.includes(h.name,i)}var h,i,j;j=c(e.uiSrefActiveEq||e.uiSrefActive||"",!1)(b),this.$$setStateInfo=function(b,c){h=a.get(b,B(d)),i=c,f()},b.$on("$stateChangeSuccess",f)}]}}function E(a){var b=function(b){return a.is(b)};return b.$stateful=!0,b}function F(a){var b=function(b){return a.includes(b)};return b.$stateful=!0,b}var G=b.isDefined,H=b.isFunction,I=b.isString,J=b.isObject,K=b.isArray,L=b.forEach,M=b.extend,N=b.copy;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),o.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",o),p.$inject=["$http","$templateCache","$injector"],b.module("ui.router.util").service("$templateFactory",p);var O;q.prototype.concat=function(a,b){var c={caseInsensitive:O.caseInsensitive(),strict:O.strictMode(),squash:O.defaultSquashPolicy()};return new q(this.sourcePath+a+this.sourceSearch,M(c,b),this)},q.prototype.toString=function(){return this.source},q.prototype.exec=function(a,b){function c(a){function b(a){return a.split("").reverse().join("")}function c(a){return a.replace(/\\-/,"-")}var d=b(a).split(/-(?!\\)/),e=n(d,b);return n(e,c).reverse()}var d=this.regexp.exec(a);if(!d)return null;b=b||{};var e,f,g,h=this.parameters(),i=h.length,j=this.segments.length-1,k={};if(j!==d.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");for(e=0;j>e;e++){g=h[e];var l=this.params[g],m=d[e+1];for(f=0;f<l.replace;f++)l.replace[f].from===m&&(m=l.replace[f].to);m&&l.array===!0&&(m=c(m)),k[g]=l.value(m)}for(;i>e;e++)g=h[e],k[g]=this.params[g].value(b[g]);return k},q.prototype.parameters=function(a){return G(a)?this.params[a]||null:this.$$paramNames},q.prototype.validates=function(a){return this.params.$$validates(a)},q.prototype.format=function(a){function b(a){return encodeURIComponent(a).replace(/-/g,function(a){return"%5C%"+a.charCodeAt(0).toString(16).toUpperCase()})}a=a||{};var c=this.segments,d=this.parameters(),e=this.params;if(!this.validates(a))return null;var f,g=!1,h=c.length-1,i=d.length,j=c[0];for(f=0;i>f;f++){var k=h>f,l=d[f],m=e[l],o=m.value(a[l]),p=m.isOptional&&m.type.equals(m.value(),o),q=p?m.squash:!1,r=m.type.encode(o);if(k){var s=c[f+1];if(q===!1)null!=r&&(j+=K(r)?n(r,b).join("-"):encodeURIComponent(r)),j+=s;else if(q===!0){var t=j.match(/\/$/)?/\/?(.*)/:/(.*)/;j+=s.match(t)[1]}else I(q)&&(j+=q+s)}else{if(null==r||p&&q!==!1)continue;K(r)||(r=[r]),r=n(r,encodeURIComponent).join("&"+l+"="),j+=(g?"&":"?")+(l+"="+r),g=!0}}return j},r.prototype.is=function(){return!0},r.prototype.encode=function(a){return a},r.prototype.decode=function(a){return a},r.prototype.equals=function(a,b){return a==b},r.prototype.$subPattern=function(){var a=this.pattern.toString();return a.substr(1,a.length-2)},r.prototype.pattern=/.*/,r.prototype.toString=function(){return"{Type:"+this.name+"}"},r.prototype.$asArray=function(a,b){function d(a,b){function d(a,b){return function(){return a[b].apply(a,arguments)}}function e(a){return K(a)?a:G(a)?[a]:[]}function f(a){switch(a.length){case 0:return c;case 1:return"auto"===b?a[0]:a;default:return a}}function g(a){return!a}function h(a,b){return function(c){c=e(c);var d=n(c,a);return b===!0?0===m(d,g).length:f(d)}}function i(a){return function(b,c){var d=e(b),f=e(c);if(d.length!==f.length)return!1;for(var g=0;g<d.length;g++)if(!a(d[g],f[g]))return!1;return!0}}this.encode=h(d(a,"encode")),this.decode=h(d(a,"decode")),this.is=h(d(a,"is"),!0),this.equals=i(d(a,"equals")),this.pattern=a.pattern,this.$arrayMode=b}if(!a)return this;if("auto"===a&&!b)throw new Error("'auto' array mode is for query parameters only");return new d(this,a)},b.module("ui.router.util").provider("$urlMatcherFactory",s),b.module("ui.router.util").run(["$urlMatcherFactory",function(){}]),t.$inject=["$locationProvider","$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",t),u.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],b.module("ui.router.state").value("$stateParams",{}).provider("$state",u),v.$inject=[],b.module("ui.router.state").provider("$view",v),b.module("ui.router.state").provider("$uiViewScroll",w),x.$inject=["$state","$injector","$uiViewScroll","$interpolate"],y.$inject=["$compile","$controller","$state","$interpolate"],b.module("ui.router.state").directive("uiView",x),b.module("ui.router.state").directive("uiView",y),C.$inject=["$state","$timeout"],D.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",C).directive("uiSrefActive",D).directive("uiSrefActiveEq",D),E.$inject=["$state"],F.$inject=["$state"],b.module("ui.router.state").filter("isState",E).filter("includedByState",F)}(window,window.angular);
/*!
 * ionic.bundle.js is a concatenation of:
 * ionic.js, angular.js, angular-animate.js,
 * angular-sanitize.js, angular-ui-router.js,
 * and ionic-angular.js
 */

/*!
 * Copyright 2015 Drifty Co.
 * http://drifty.com/
 *
 * Ionic, v1.2.4-nightly-1917
 * A powerful HTML5 mobile app framework.
 * http://ionicframework.com/
 *
 * By @maxlynch, @benjsperry, @adamdbradley <3
 *
 * Licensed under the MIT license. Please see LICENSE for more information.
 *
 */

!function(){function e(e,t,n,i,o,r){function a(i,a,c,s,u){function d(){N.resizeRequiresRefresh(w.__clientWidth,w.__clientHeight)&&g()}function f(){var e;return e={dataLength:0,width:0,height:0,resizeRequiresRefresh:function(t,n){var i=e.dataLength&&t&&n&&(t!==e.width||n!==e.height);return e.width=t,e.height=n,!!i},dataChangeRequiresRefresh:function(t){var n=t.length>0||t.length<e.dataLength;return e.dataLength=t.length,!!n}}}function h(){return T||(T=new e({afterItemsNode:M[0],containerNode:S,heightData:A,widthData:E,forceRefreshImages:!(!l(c.forceRefreshImages)||"false"===c.forceRefreshImages),keyExpression:B,renderBuffer:D,scope:i,scrollView:s.scrollView,transclude:u}))}function p(){var e=angular.element(w.__content.querySelector(".collection-repeat-after-container"));if(!e.length){var t=!1,n=[].filter.call(w.__content.childNodes,function(e){return ionic.DomUtil.contains(e,S)?(t=!0,!1):t});e=angular.element('<span class="collection-repeat-after-container">'),w.options.scrollingX&&e.addClass("horizontal"),e.append(n),w.__content.appendChild(e[0])}return e}function v(){L?m(L,A):A.computed=!0,R?m(R,E):E.computed=!0}function g(){var e=P.length>0;if(e&&(A.computed||E.computed)&&$(),e&&A.computed){if(A.value=V.height,!A.value)throw new Error('collection-repeat tried to compute the height of repeated elements "'+k+'", but was unable to. Please provide the "item-height" attribute. http://ionicframework.com/docs/api/directive/collectionRepeat/')}else!A.dynamic&&A.getValue&&(A.value=A.getValue());if(e&&E.computed){if(E.value=V.width,!E.value)throw new Error('collection-repeat tried to compute the width of repeated elements "'+k+'", but was unable to. Please provide the "item-width" attribute. http://ionicframework.com/docs/api/directive/collectionRepeat/')}else!E.dynamic&&E.getValue&&(E.value=E.getValue());h().refreshLayout()}function m(e,n){if(e){var i;try{i=t(e)}catch(o){e.trim().match(/\d+(px|%)$/)&&(e='"'+e+'"'),i=t(e)}var r=e.replace(/(\'|\"|px|%)/g,"").trim(),a=r.length&&!/([a-zA-Z]|\$|:|\?)/.test(r);if(n.attrValue=e,a)if(e.indexOf("%")>-1){var c=parseFloat(i())/100;n.getValue=n===A?function(){return Math.floor(c*w.__clientHeight)}:function(){return Math.floor(c*w.__clientWidth)}}else n.value=parseInt(i());else n.dynamic=!0,n.getValue=n===A?function(e,t){var n=i(e,t);return n.charAt&&"%"===n.charAt(n.length-1)?Math.floor(parseFloat(n)/100*w.__clientHeight):parseInt(n)}:function(e,t){var n=i(e,t);return n.charAt&&"%"===n.charAt(n.length-1)?Math.floor(parseFloat(n)/100*w.__clientWidth):parseInt(n)}}}function $(){O||u(H=i.$new(),function(e){e[0].removeAttribute("collection-repeat"),O=e[0]}),H[B]=(x(i)||[])[0],o.$$phase||H.$digest(),S.appendChild(O);var e=n.getComputedStyle(O);V.width=parseInt(e.width),V.height=parseInt(e.height),S.removeChild(O)}var w=s.scrollView,b=a[0],S=angular.element('<div class="collection-repeat-container">')[0];if(b.parentNode.replaceChild(S,b),w.options.scrollingX&&w.options.scrollingY)throw new Error("collection-repeat expected a parent x or y scrollView, not an xy scrollView.");var k=c.collectionRepeat,C=k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!C)throw new Error("collection-repeat expected expression in form of '_item_ in _collection_[ track by _id_]' but got '"+c.collectionRepeat+"'.");var T,B=C[1],I=C[2],x=t(I),A={},E={},V={},P=[],_=c.itemRenderBuffer||c.collectionBufferSize,D=angular.isDefined(_)?parseInt(_):y,L=c.itemHeight||c.collectionItemHeight,R=c.itemWidth||c.collectionItemWidth,M=p(),N=f();v(),s.$element.on("scroll-resize",g),angular.element(n).on("resize",d);var z=o.$on("$ionicExposeAside",ionic.animationFrameThrottle(function(){s.scrollView.resize(),d()}));r(g,0,!1),i.$watchCollection(x,function(e){if(P=e||(e=[]),!angular.isArray(e))throw new Error("collection-repeat expected an array for '"+I+"', but got a "+typeof value);i.$$postDigest(function(){h().setData(P),N.dataChangeRequiresRefresh(P)&&g()})}),i.$on("$destroy",function(){angular.element(n).off("resize",d),z(),s.$element&&s.$element.off("scroll-resize",g),O&&O.parentNode&&O.parentNode.removeChild(O),H&&H.$destroy(),H=O=null,T&&T.destroy(),T=null});var O,H}return{restrict:"A",priority:1e3,transclude:"element",$$tlb:!0,require:"^^$ionicScroll",link:a}}function t(e,t,n){var i={primaryPos:0,secondaryPos:0,primarySize:0,secondarySize:0,rowPrimarySize:0};return function(o){function r(){return a(!0)}function a(t){if(!a.destroyed){var n,o,r,l,u,d=ee.getScrollValue(),f=d+ee.scrollPrimarySize;ee.updateRenderRange(d,f),F=Math.max(0,F-T),W=Math.min(A.length-1,W+T);for(n in Z)(F>n||n>W)&&(r=Z[n],delete Z[n],G.push(r),r.isShown=!1);for(n=F;W>=n;n++)n>=A.length||Z[n]&&!t||(r=Z[n]||(Z[n]=G.length?G.pop():j.length?j.shift():new s),K.push(r),r.isShown=!0,u=r.scope,u.$index=n,u[C]=A[n],u.$first=0===n,u.$last=n===A.length-1,u.$middle=!(u.$first||u.$last),u.$odd=!(u.$even=0===(1&n)),u.$$disconnected&&ionic.Utils.reconnectScope(r.scope),l=ee.getDimensions(n),(r.secondaryPos!==l.secondaryPos||r.primaryPos!==l.primaryPos)&&(r.node.style[ionic.CSS.TRANSFORM]=O.replace(N,r.primaryPos=l.primaryPos).replace(z,r.secondaryPos=l.secondaryPos)),(r.secondarySize!==l.secondarySize||r.primarySize!==l.primarySize)&&(r.node.style.cssText=r.node.style.cssText.replace(b,H.replace(N,(r.primarySize=l.primarySize)+1).replace(z,r.secondarySize=l.secondarySize))));for(W===A.length-1&&(l=ee.getDimensions(A.length-1)||i,m.style[ionic.CSS.TRANSFORM]=O.replace(N,l.primaryPos+l.primarySize).replace(z,0));G.length;)r=G.pop(),r.scope.$broadcast("$collectionRepeatLeave"),ionic.Utils.disconnectScope(r.scope),j.push(r),r.node.style[ionic.CSS.TRANSFORM]="translate3d(-9999px,-9999px,0)",r.primaryPos=r.secondaryPos=null;if(y)for(n=0,o=K.length;o>n&&(r=K[n]);n++)if(r.images)for(var h,p=0,v=r.images.length;v>p&&(h=r.images[p]);p++){var g=h.src;h.src=w,h.src=g}if(t)for(var $=e.$$phase;K.length;)r=K.pop(),$||r.scope.$digest();else c()}}function c(){var t;c.running||(c.running=!0,n(function(){for(var n=e.$$phase;K.length;)t=K.pop(),t.isShown&&(n||t.scope.$digest());c.running=!1}))}function s(){var e=this;this.scope=B.$new(),this.id="item"+J++,x(this.scope,function(t){e.element=t,e.element.data("$$collectionRepeatItem",e),e.node=t[0],e.node.style[ionic.CSS.TRANSFORM]="translate3d(-9999px,-9999px,0)",e.node.style.cssText+=" height: 0px; width: 0px;",ionic.Utils.disconnectScope(e.scope),$.appendChild(e.node),e.images=t[0].getElementsByTagName("img")})}function l(){this.getItemPrimarySize=P,this.getItemSecondarySize=D,this.getScrollValue=function(){return Math.max(0,Math.min(I.__scrollTop-q,I.__maxScrollTop-q-U))},this.refreshDirection=function(){this.scrollPrimarySize=I.__clientHeight,this.scrollSecondarySize=I.__clientWidth,this.estimatedPrimarySize=v,this.estimatedSecondarySize=g,this.estimatedItemsAcross=R&&Math.floor(I.__clientWidth/g)||1}}function u(){this.getItemPrimarySize=D,this.getItemSecondarySize=P,this.getScrollValue=function(){return Math.max(0,Math.min(I.__scrollLeft-q,I.__maxScrollLeft-q-U))},this.refreshDirection=function(){this.scrollPrimarySize=I.__clientWidth,this.scrollSecondarySize=I.__clientHeight,this.estimatedPrimarySize=g,this.estimatedSecondarySize=v,this.estimatedItemsAcross=R&&Math.floor(I.__clientHeight/v)||1}}function d(){this.getEstimatedSecondaryPos=function(e){return e%this.estimatedItemsAcross*this.estimatedSecondarySize},this.getEstimatedPrimaryPos=function(e){return Math.floor(e/this.estimatedItemsAcross)*this.estimatedPrimarySize},this.getEstimatedIndex=function(e){return Math.floor(e/this.estimatedPrimarySize)*this.estimatedItemsAcross}}function f(){this.getEstimatedSecondaryPos=function(){return 0},this.getEstimatedPrimaryPos=function(e){return e*this.estimatedPrimarySize},this.getEstimatedIndex=function(e){return Math.floor(e/this.estimatedPrimarySize)}}function h(){this.getContentSize=function(){return this.getEstimatedPrimaryPos(A.length-1)+this.estimatedPrimarySize+q+U};var e={};this.getDimensions=function(t){return e.primaryPos=this.getEstimatedPrimaryPos(t),e.secondaryPos=this.getEstimatedSecondaryPos(t),e.primarySize=this.estimatedPrimarySize,e.secondarySize=this.estimatedSecondarySize,e},this.updateRenderRange=function(e,t){F=Math.max(0,this.getEstimatedIndex(e)),W=Math.min(A.length-1,this.getEstimatedIndex(t)+this.estimatedItemsAcross-1),Y=Math.max(0,this.getEstimatedPrimaryPos(F)),X=this.getEstimatedPrimaryPos(W)+this.estimatedPrimarySize}}function p(){function e(e){var t,r,a;for(t=Math.max(0,n);e>=t&&(a=c[t]);t++)r=c[t-1]||i,a.primarySize=o.getItemPrimarySize(t,A[t]),a.secondarySize=o.scrollSecondarySize,a.primaryPos=r.primaryPos+r.primarySize,a.secondaryPos=0}function t(e){var t,r,a;for(t=Math.max(n,0);e>=t&&(a=c[t]);t++)r=c[t-1]||i,a.secondarySize=Math.min(o.getItemSecondarySize(t,A[t]),o.scrollSecondarySize),a.secondaryPos=r.secondaryPos+r.secondarySize,0===t||a.secondaryPos+a.secondarySize>o.scrollSecondarySize?(a.secondaryPos=0,a.primarySize=o.getItemPrimarySize(t,A[t]),a.primaryPos=r.primaryPos+r.rowPrimarySize,a.rowStartIndex=t,a.rowPrimarySize=a.primarySize):(a.primarySize=o.getItemPrimarySize(t,A[t]),a.primaryPos=r.primaryPos,a.rowStartIndex=r.rowStartIndex,c[a.rowStartIndex].rowPrimarySize=a.rowPrimarySize=Math.max(c[a.rowStartIndex].rowPrimarySize,a.primarySize),a.rowPrimarySize=Math.max(a.primarySize,a.rowPrimarySize))}var n,o=this,r=ionic.debounce(Q,25,!0),a=R?t:e,c=[];this.getContentSize=function(){var e=c[n]||i;return(e.primaryPos+e.primarySize||0)+this.getEstimatedPrimaryPos(A.length-n-1)+q+U},this.onDestroy=function(){c.length=0},this.onRefreshData=function(){var e,t;for(e=c.length,t=A.length;t>e;e++)c.push({});n=-1},this.onRefreshLayout=function(){n=-1},this.getDimensions=function(e){return e=Math.min(e,A.length-1),e>n&&(e>.9*A.length?(a(A.length-1),n=A.length-1,Q()):(a(e),n=e,r())),c[e]};var s=-1,l=-1;this.updateRenderRange=function(e,t){var n,i,o;if(this.getDimensions(2*this.getEstimatedIndex(t)),-1===s||0===e)n=0;else if(e>=l)for(n=s,i=A.length;i>n&&!((o=this.getDimensions(n))&&o.primaryPos+o.rowPrimarySize>=e);n++);else for(n=s;n>=0;n--)if((o=this.getDimensions(n))&&o.primaryPos<=e){n=R?o.rowStartIndex:n;break}F=Math.min(Math.max(0,n),A.length-1),Y=-1!==F?this.getDimensions(F).primaryPos:-1;var r;for(n=F+1,i=A.length;i>n;n++)if((o=this.getDimensions(n))&&o.primaryPos+o.rowPrimarySize>t){if(R)for(r=o;i-1>n&&(o=this.getDimensions(n+1)).primaryPos===r.primaryPos;)n++;break}W=Math.min(n,A.length-1),X=-1!==W?(o=this.getDimensions(W)).primaryPos+(o.rowPrimarySize||o.primarySize):-1,l=e,s=F}}var v,g,m=o.afterItemsNode,$=o.containerNode,y=o.forceRefreshImages,S=o.heightData,k=o.widthData,C=o.keyExpression,T=o.renderBuffer,B=o.scope,I=o.scrollView,x=o.transclude,A=[],E={},V=S.getValue||function(){return S.value},P=function(e,t){return E[C]=t,E.$index=e,V(B,E)},_=k.getValue||function(){return k.value},D=function(e,t){return E[C]=t,E.$index=e,_(B,E)},L=!!I.options.scrollingY,R=L?k.dynamic||k.value!==I.__clientWidth:S.dynamic||S.value!==I.__clientHeight,M=!S.dynamic&&!k.dynamic,N="PRIMARY",z="SECONDARY",O=L?"translate3d(SECONDARYpx,PRIMARYpx,0)":"translate3d(PRIMARYpx,SECONDARYpx,0)",H=L?"height: PRIMARYpx; width: SECONDARYpx;":"height: SECONDARYpx; width: PRIMARYpx;",q=0,U=0,F=-1,W=-1,X=-1,Y=-1,j=[],G=[],K=[],Z={},J=0,Q=L?function(){I.setDimensions(null,null,null,ee.getContentSize(),!0)}:function(){I.setDimensions(null,null,ee.getContentSize(),null,!0)},ee=L?new l:new u;(R?d:f).call(ee),(M?h:p).call(ee);var te=L?"getContentHeight":"getContentWidth",ne=I.options[te];I.options[te]=angular.bind(ee,ee.getContentSize),I.__$callback=I.__callback,I.__callback=function(e,t,n,i){var o=ee.getScrollValue();(-1===F||o+ee.scrollPrimarySize>X||Y>o)&&a(),I.__$callback(e,t,n,i)};var ie=!1,oe=!1;this.refreshLayout=function(){A.length?(v=P(0,A[0]),g=D(0,A[0])):(v=100,g=100);var e=getComputedStyle(m)||{},n=m.firstElementChild&&getComputedStyle(m.firstElementChild)||{},i=m.lastElementChild&&getComputedStyle(m.lastElementChild)||{};U=(parseInt(e[L?"height":"width"])||0)+(n&&parseInt(n[L?"marginTop":"marginLeft"])||0)+(i&&parseInt(i[L?"marginBottom":"marginRight"])||0),q=0;var o=$;do q+=o[L?"offsetTop":"offsetLeft"];while(ionic.DomUtil.contains(I.__content,o=o.offsetParent));var a=$.previousElementSibling,c=a?t.getComputedStyle(a):{},l=parseInt(c[L?"marginBottom":"marginRight"]||0);if($.style[ionic.CSS.TRANSFORM]=O.replace(N,-l).replace(z,0),q-=l,I.__clientHeight&&I.__clientWidth||(I.__clientWidth=I.__container.clientWidth,I.__clientHeight=I.__container.clientHeight),(ee.onRefreshLayout||angular.noop)(),ee.refreshDirection(),Q(),!ie)for(var u=Math.max(20,3*T),d=0;u>d;d++)j.push(new s);ie=!0,ie&&oe&&((I.__scrollLeft>I.__maxScrollLeft||I.__scrollTop>I.__maxScrollTop)&&I.resize(),r(!0))},this.setData=function(e){A=e,(ee.onRefreshData||angular.noop)(),oe=!0},this.destroy=function(){a.destroyed=!0,j.forEach(function(e){e.scope.$destroy(),e.scope=e.element=e.node=e.images=null}),j.length=K.length=G.length=0,Z={},I.options[te]=ne,I.__callback=I.__$callback,I.resize(),(ee.onDestroy||angular.noop)()}}}function n(e){return["$ionicGesture","$parse",function(t,n){var i=e.substr(2).toLowerCase();return function(o,r,a){var c=n(a[e]),s=function(e){o.$apply(function(){c(o,{$event:e})})},l=t.on(i,s,r);o.$on("$destroy",function(){t.off(l,i,s)})}}]}function i(e){return["$document","$timeout",function(t,n){return{restrict:"E",controller:"$ionicHeaderBar",compile:function(i){function o(t,n,i,o){e?(t.$watch(function(){return n[0].className},function(e){var n=-1===e.indexOf("ng-hide"),i=-1!==e.indexOf("bar-subheader");t.$hasHeader=n&&!i,t.$hasSubheader=n&&i,t.$emit("$ionicSubheader",t.$hasSubheader)}),t.$on("$destroy",function(){delete t.$hasHeader,delete t.$hasSubheader}),o.align(),t.$on("$ionicHeader.align",function(){ionic.requestAnimationFrame(function(){o.align()})})):(t.$watch(function(){return n[0].className},function(e){var n=-1===e.indexOf("ng-hide"),i=-1!==e.indexOf("bar-subfooter");t.$hasFooter=n&&!i,t.$hasSubfooter=n&&i}),t.$on("$destroy",function(){delete t.$hasFooter,delete t.$hasSubfooter}),t.$watch("$hasTabs",function(e){n.toggleClass("has-tabs",!!e)}),o.align(),t.$on("$ionicFooter.align",function(){ionic.requestAnimationFrame(function(){o.align()})}))}return i.addClass(e?"bar bar-header":"bar bar-footer"),n(function(){e&&t[0].getElementsByClassName("tabs-top").length&&i.addClass("has-tabs-top")}),{pre:o}}}}]}function o(e){return e.clientHeight}function r(e){e.stopPropagation()}var a=angular.module("ionic",["ngAnimate","ngSanitize","ui.router","ngIOS9UIWebViewPatch"]),c=angular.extend,s=angular.forEach,l=angular.isDefined,u=angular.isNumber,d=angular.isString,f=angular.element,h=angular.noop;a.factory("$ionicActionSheet",["$rootScope","$compile","$animate","$timeout","$ionicTemplateLoader","$ionicPlatform","$ionicBody","IONIC_BACK_PRIORITY",function(e,t,n,i,o,r,a,s){function l(o){function l(e){e&&/icon/.test(e)&&(u.$actionSheetHasIcon=!0)}var u=e.$new(!0);c(u,{cancel:h,destructiveButtonClicked:h,buttonClicked:h,$deregisterBackButton:h,buttons:[],cancelOnStateChange:!0},o||{});for(var d=0;d<u.buttons.length;d++)l(u.buttons[d].text);l(u.cancelText),l(u.destructiveText);var p=u.element=t('<ion-action-sheet ng-class="cssClass" buttons="buttons"></ion-action-sheet>')(u),v=f(p[0].querySelector(".action-sheet-wrapper")),g=u.cancelOnStateChange?e.$on("$stateChangeSuccess",function(){u.cancel()}):h;return u.removeSheet=function(e){u.removed||(u.removed=!0,v.removeClass("action-sheet-up"),i(function(){a.removeClass("action-sheet-open")},400),u.$deregisterBackButton(),g(),n.removeClass(p,"active").then(function(){u.$destroy(),p.remove(),u.cancel.$scope=v=null,(e||h)(o.buttons)}))},u.showSheet=function(e){u.removed||(a.append(p).addClass("action-sheet-open"),n.addClass(p,"active").then(function(){u.removed||(e||h)()}),i(function(){u.removed||v.addClass("action-sheet-up")},20,!1))},u.$deregisterBackButton=r.registerBackButtonAction(function(){i(u.cancel)},s.actionSheet),u.cancel=function(){u.removeSheet(o.cancel)},u.buttonClicked=function(e){o.buttonClicked(e,o.buttons[e])===!0&&u.removeSheet()},u.destructiveButtonClicked=function(){o.destructiveButtonClicked()===!0&&u.removeSheet()},u.showSheet(),u.cancel.$scope=u,u.cancel}return{show:l}}]),f.prototype.addClass=function(e){var t,n,i,o,r,a;if(e&&"ng-scope"!=e&&"ng-isolate-scope"!=e)for(t=0;t<this.length;t++)if(o=this[t],o.setAttribute)if(e.indexOf(" ")<0&&o.classList.add)o.classList.add(e);else{for(a=(" "+(o.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),r=e.split(" "),n=0;n<r.length;n++)i=r[n].trim(),-1===a.indexOf(" "+i+" ")&&(a+=i+" ");o.setAttribute("class",a.trim())}return this},f.prototype.removeClass=function(e){var t,n,i,o,r;if(e)for(t=0;t<this.length;t++)if(r=this[t],r.getAttribute)if(e.indexOf(" ")<0&&r.classList.remove)r.classList.remove(e);else for(i=e.split(" "),n=0;n<i.length;n++)o=i[n],r.setAttribute("class",(" "+(r.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+o.trim()+" "," ").trim());return this},a.factory("$ionicBackdrop",["$document","$timeout","$$rAF","$rootScope",function(e,t,n,i){function o(){s++,1===s&&(c.addClass("visible"),i.$broadcast("backdrop.shown"),n(function(){s>=1&&c.addClass("active")}))}function r(){1===s&&(c.removeClass("active"),i.$broadcast("backdrop.hidden"),t(function(){0===s&&c.removeClass("visible")},400,!1)),s=Math.max(0,s-1)}function a(){return c}var c=f('<div class="backdrop">'),s=0;return e[0].body.appendChild(c[0]),{retain:o,release:r,getElement:a,_element:c}}]),a.factory("$ionicBind",["$parse","$interpolate",function(e,t){var n=/^\s*([@=&])(\??)\s*(\w*)\s*$/;return function(i,o,r){s(r||{},function(r,a){var c,s,l=r.match(n)||[],u=l[3]||a,d=l[1];switch(d){case"@":if(!o[u])return;o.$observe(u,function(e){i[a]=e}),o[u]&&(i[a]=t(o[u])(i));break;case"=":if(!o[u])return;s=i.$watch(o[u],function(e){i[a]=e}),i.$on("$destroy",s);break;case"&":if(o[u]&&o[u].match(RegExp(a+"(.*?)")))throw new Error('& expression binding "'+a+'" looks like it will recursively call "'+o[u]+'" and cause a stack overflow! Please choose a different scopeName.');c=e(o[u]),i[a]=function(e){return c(i,e)}}})}}]),a.factory("$ionicBody",["$document",function(e){return{addClass:function(){for(var t=0;t<arguments.length;t++)e[0].body.classList.add(arguments[t]);return this},removeClass:function(){for(var t=0;t<arguments.length;t++)e[0].body.classList.remove(arguments[t]);return this},enableClass:function(e){var t=Array.prototype.slice.call(arguments).slice(1);return e?this.addClass.apply(this,t):this.removeClass.apply(this,t),this},append:function(t){return e[0].body.appendChild(t.length?t[0]:t),this},get:function(){return e[0].body}}}]),a.factory("$ionicClickBlock",["$document","$ionicBody","$timeout",function(e,t,n){function i(e){e.preventDefault(),e.stopPropagation()}function o(){s&&(a?a.classList.remove(l):(a=e[0].createElement("div"),a.className="click-block",t.append(a),a.addEventListener("touchstart",i),a.addEventListener("mousedown",i)),s=!1)}function r(){a&&a.classList.add(l)}var a,c,s,l="click-block-hide";return{show:function(e){s=!0,n.cancel(c),c=n(this.hide,e||310,!1),o()},hide:function(){s=!1,n.cancel(c),r()}}}]),a.factory("$ionicGesture",[function(){return{on:function(e,t,n,i){return window.ionic.onGesture(e,t,n[0],i)},off:function(e,t,n){return window.ionic.offGesture(e,t,n)}}}]),a.factory("$ionicHistory",["$rootScope","$state","$location","$window","$timeout","$ionicViewSwitcher","$ionicNavViewDelegate",function(e,t,n,i,o,r,a){function s(e){return e?R.views[e]:null}function u(e){return e?s(e.backViewId):null}function d(e){return e?s(e.forwardViewId):null}function f(e){return e?R.histories[e]:null}function h(e){var t=p(e);return R.histories[t.historyId]||(R.histories[t.historyId]={historyId:t.historyId,parentHistoryId:p(t.scope.$parent).historyId,stack:[],cursor:-1}),f(t.historyId)}function p(t){for(var n=t;n;){if(n.hasOwnProperty("$historyId"))return{historyId:n.$historyId,scope:n};n=n.$parent}return{historyId:"root",scope:e}}function v(e){R.currentView=s(e),R.backView=u(R.currentView),R.forwardView=d(R.currentView)}function g(){var e;if(t&&t.current&&t.current.name){if(e=t.current.name,t.params)for(var n in t.params)t.params.hasOwnProperty(n)&&t.params[n]&&(e+="_"+n+"="+t.params[n]);return e}return ionic.Utils.nextUid()}function m(){var e;if(t&&t.params)for(var n in t.params)t.params.hasOwnProperty(n)&&(e=e||{},e[n]=t.params[n]);return e}function $(e){return e&&e.length&&/ion-side-menus|ion-tabs/i.test(e[0].tagName)}function w(e,t){return t&&t.$$state&&t.$$state.self.canSwipeBack===!1?!1:e&&"false"===e.attr("can-swipe-back")?!1:!0}var b,y,S,k,C,T="initialView",B="newView",I="moveBack",x="moveForward",A="back",E="forward",V="enter",P="exit",_="swap",D="none",L=0,R={histories:{root:{historyId:"root",parentHistoryId:null,stack:[],cursor:-1}},views:{},backView:null,forwardView:null,currentView:null},M=function(){};return M.prototype.initialize=function(e){if(e){for(var t in e)this[t]=e[t];return this}return null},M.prototype.go=function(){if(this.stateName)return t.go(this.stateName,this.stateParams);if(this.url&&this.url!==n.url()){if(R.backView===this)return i.history.go(-1);if(R.forwardView===this)return i.history.go(1);n.url(this.url)}return null},M.prototype.destroy=function(){this.scope&&(this.scope.$destroy&&this.scope.$destroy(),this.scope=null)},{register:function(e,t){var i,a,c,l=g(),d=h(e),$=R.currentView,M=R.backView,N=R.forwardView,z=null,O=null,H=D,q=d.historyId,U=n.url();if(b!==l&&(b=l,L++),C)z=C.viewId,O=C.action,H=C.direction,C=null;else if(M&&M.stateId===l)z=M.viewId,q=M.historyId,O=I,M.historyId===$.historyId?H=A:$&&(H=P,i=f(M.historyId),i&&i.parentHistoryId===$.historyId?H=V:(i=f($.historyId),i&&i.parentHistoryId===d.parentHistoryId&&(H=_)));else if(N&&N.stateId===l)z=N.viewId,q=N.historyId,O=x,N.historyId===$.historyId?H=E:$&&(H=P,$.historyId===d.parentHistoryId?H=V:(i=f($.historyId),i&&i.parentHistoryId===d.parentHistoryId&&(H=_))),i=p(e),N.historyId&&i.scope&&(i.scope.$historyId=N.historyId,q=N.historyId);else if($&&$.historyId!==q&&d.cursor>-1&&d.stack.length>0&&d.cursor<d.stack.length&&d.stack[d.cursor].stateId===l){var F=d.stack[d.cursor];z=F.viewId,q=F.historyId,O=I,H=_,i=f($.historyId),i&&i.parentHistoryId===q?H=P:(i=f(q),i&&i.parentHistoryId===$.historyId&&(H=V)),i=s(F.backViewId),i&&F.historyId!==i.historyId&&(d.stack[d.cursor].backViewId=$.viewId)}else{if(c=r.createViewEle(t),this.isAbstractEle(c,t))return{action:"abstractView",direction:D,ele:c};if(z=ionic.Utils.nextUid(),$){if($.forwardViewId=z,O=B,N&&$.stateId!==N.stateId&&$.historyId===N.historyId&&(i=f(N.historyId))){for(a=i.stack.length-1;a>=N.index;a--){var W=i.stack[a];W&&W.destroy&&W.destroy(),i.stack.splice(a)}q=N.historyId}d.historyId===$.historyId?H=E:$.historyId!==d.historyId&&(H=V,i=f($.historyId),i&&i.parentHistoryId===d.parentHistoryId?H=_:(i=f(i.parentHistoryId),i&&i.historyId===d.historyId&&(H=P)))}else O=T;2>L&&(H=D),R.views[z]=this.createView({viewId:z,index:d.stack.length,historyId:d.historyId,backViewId:$&&$.viewId?$.viewId:null,forwardViewId:null,stateId:l,stateName:this.currentStateName(),stateParams:m(),url:U,canSwipeBack:w(c,t)}),d.stack.push(R.views[z])}if(S&&S(),o.cancel(k),y){if(y.disableAnimate&&(H=D),y.disableBack&&(R.views[z].backViewId=null),y.historyRoot){for(a=0;a<d.stack.length;a++)d.stack[a].viewId===z?(d.stack[a].index=0,d.stack[a].backViewId=d.stack[a].forwardViewId=null):delete R.views[d.stack[a].viewId];d.stack=[R.views[z]]}y=null}if(v(z),R.backView&&q==R.backView.historyId&&l==R.backView.stateId&&U==R.backView.url)for(a=0;a<d.stack.length;a++)if(d.stack[a].viewId==z){O="dupNav",H=D,a>0&&(d.stack[a-1].forwardViewId=null),R.forwardView=null,R.currentView.index=R.backView.index,R.currentView.backViewId=R.backView.backViewId,R.backView=u(R.backView),d.stack.splice(a,1);break}return d.cursor=R.currentView.index,{viewId:z,action:O,direction:H,historyId:q,enableBack:this.enabledBack(R.currentView),isHistoryRoot:0===R.currentView.index,ele:c}},registerHistory:function(e){e.$historyId=ionic.Utils.nextUid()},createView:function(e){var t=new M;return t.initialize(e)},getViewById:s,viewHistory:function(){return R},currentView:function(e){return arguments.length&&(R.currentView=e),R.currentView},currentHistoryId:function(){return R.currentView?R.currentView.historyId:null},currentTitle:function(e){return R.currentView?(arguments.length&&(R.currentView.title=e),R.currentView.title):void 0},backView:function(e){return arguments.length&&(R.backView=e),R.backView},backTitle:function(e){var t=e&&s(e.backViewId)||R.backView;return t&&t.title},forwardView:function(e){return arguments.length&&(R.forwardView=e),R.forwardView},currentStateName:function(){return t&&t.current?t.current.name:null},isCurrentStateNavView:function(e){return!!(t&&t.current&&t.current.views&&t.current.views[e])},goToHistoryRoot:function(e){if(e){var t=f(e);if(t&&t.stack.length){if(R.currentView&&R.currentView.viewId===t.stack[0].viewId)return;C={viewId:t.stack[0].viewId,action:I,direction:A},t.stack[0].go()}}},goBack:function(e){if(l(e)&&-1!==e){if(e>-1)return;var t=R.histories[this.currentHistoryId()],n=t.cursor+e+1;1>n&&(n=1),t.cursor=n,v(t.stack[n].viewId);for(var i=n-1,r=[],a=s(t.stack[i].forwardViewId);a&&(r.push(a.stateId||a.viewId),i++,!(i>=t.stack.length));)a=s(t.stack[i].forwardViewId);var c=this;r.length&&o(function(){c.clearCache(r)},600)}R.backView&&R.backView.go()},enabledBack:function(e){var t=u(e);return!(!t||t.historyId!==e.historyId)},clearHistory:function(){var e=R.histories,t=R.currentView;if(e)for(var n in e)e[n].stack&&(e[n].stack=[],e[n].cursor=-1),t&&t.historyId===n?(t.backViewId=t.forwardViewId=null,e[n].stack.push(t)):e[n].destroy&&e[n].destroy();for(var i in R.views)i!==t.viewId&&delete R.views[i];t&&v(t.viewId)},clearCache:function(e){return o(function(){a._instances.forEach(function(t){t.clearCache(e)})})},nextViewOptions:function(t){return S&&S(),arguments.length&&(o.cancel(k),null===t?y=t:(y=y||{},c(y,t),y.expire&&(S=e.$on("$stateChangeSuccess",function(){k=o(function(){y=null},y.expire)})))),y},isAbstractEle:function(e,t){return t&&t.$$state&&t.$$state.self["abstract"]?!0:!(!e||!$(e)&&!$(e.children()))},isActiveScope:function(e){if(!e)return!1;for(var t,n=e,i=this.currentHistoryId();n;){if(n.$$disconnected)return!1;if(!t&&n.hasOwnProperty("$historyId")&&(t=!0),i){if(n.hasOwnProperty("$historyId")&&i==n.$historyId)return!0;if(n.hasOwnProperty("$activeHistoryId")&&i==n.$activeHistoryId){if(n.hasOwnProperty("$historyId"))return!0;if(!t)return!0}}t&&n.hasOwnProperty("$activeHistoryId")&&(t=!1),n=n.$parent}return i?"root"==i:!0}}}]).run(["$rootScope","$state","$location","$document","$ionicPlatform","$ionicHistory","IONIC_BACK_PRIORITY",function(e,t,n,i,o,r,a){function c(e){var t=r.backView();return t?t.go():ionic.Platform.exitApp(),e.preventDefault(),!1}e.$on("$ionicView.beforeEnter",function(){ionic.keyboard&&ionic.keyboard.hide&&ionic.keyboard.hide()}),e.$on("$ionicHistory.change",function(e,i){if(!i)return null;var o=r.viewHistory(),a=i.historyId?o.histories[i.historyId]:null;if(a&&a.cursor>-1&&a.cursor<a.stack.length){var c=a.stack[a.cursor];return c.go(i)}!i.url&&i.uiSref&&(i.url=t.href(i.uiSref)),i.url&&(0===i.url.indexOf("#")&&(i.url=i.url.replace("#","")),i.url!==n.url()&&n.url(i.url))}),e.$ionicGoBack=function(e){r.goBack(e)},e.$on("$ionicView.afterEnter",function(e,t){t&&t.title&&(i[0].title=t.title)}),o.registerBackButtonAction(c,a.view)}]),a.provider("$ionicConfig",function(){function e(e,i){a.platform[e]=i,o.platform[e]={},t(a,a.platform[e]),n(a.platform[e],o.platform[e],"")}function t(e,n){for(var i in e)i!=r&&e.hasOwnProperty(i)&&(angular.isObject(e[i])?(l(n[i])||(n[i]={}),t(e[i],n[i])):l(n[i])||(n[i]=null))}function n(e,t,o){s(e,function(c,s){angular.isObject(e[s])?(t[s]={},n(e[s],t[s],o+"."+s)):t[s]=function(n){if(arguments.length)return e[s]=n,t;if(e[s]==r){var c=i(a.platform,ionic.Platform.platform()+o+"."+s);return c||c===!1?c:i(a.platform,"default"+o+"."+s)}return e[s]}})}function i(e,t){t=t.split(".");for(var n=0;n<t.length;n++){if(!e||!l(e[t[n]]))return null;e=e[t[n]]}return e}var o=this;o.platform={};var r="platform",a={views:{maxCache:r,forwardCache:r,transition:r,swipeBackEnabled:r,swipeBackHitWidth:r},navBar:{alignTitle:r,positionPrimaryButtons:r,positionSecondaryButtons:r,transition:r},backButton:{icon:r,text:r,previousTitleText:r},form:{checkbox:r,toggle:r},scrolling:{jsScrolling:r},spinner:{icon:r},tabs:{style:r,position:r},templates:{maxPrefetch:r},platform:{}};n(a,o,""),e("default",{views:{maxCache:10,forwardCache:!1,transition:"ios",swipeBackEnabled:!0,swipeBackHitWidth:45},navBar:{alignTitle:"center",positionPrimaryButtons:"left",positionSecondaryButtons:"right",transition:"view"},backButton:{icon:"ion-ios-arrow-back",text:"Back",previousTitleText:!0},form:{checkbox:"circle",toggle:"large"},scrolling:{jsScrolling:!0},spinner:{icon:"ios"},tabs:{style:"standard",position:"bottom"},templates:{maxPrefetch:30}}),e("ios",{}),e("android",{views:{transition:"android",swipeBackEnabled:!1},navBar:{alignTitle:"left",positionPrimaryButtons:"right",positionSecondaryButtons:"right"},backButton:{icon:"ion-android-arrow-back",text:!1,previousTitleText:!1},form:{checkbox:"square",toggle:"small"},spinner:{icon:"android"},tabs:{style:"striped",position:"top"},scrolling:{jsScrolling:!1}}),e("windowsphone",{spinner:{icon:"android"}}),o.transitions={views:{},navBar:{}},o.transitions.views.ios=function(e,t,n,i){function o(e,t,n,i){var o={};o[ionic.CSS.TRANSITION_DURATION]=r.shouldAnimate?"":0,o.opacity=t,i>-1&&(o.boxShadow="0 0 10px rgba(0,0,0,"+(r.shouldAnimate?.45*i:.3)+")"),o[ionic.CSS.TRANSFORM]="translate3d("+n+"%,0,0)",ionic.DomUtil.cachedStyles(e,o)}var r={run:function(i){"forward"==n?(o(e,1,99*(1-i),1-i),o(t,1-.1*i,-33*i,-1)):"back"==n?(o(e,1-.1*(1-i),-33*(1-i),-1),o(t,1,100*i,1-i)):(o(e,1,0,-1),o(t,0,0,-1))},shouldAnimate:i&&("forward"==n||"back"==n)};return r},o.transitions.navBar.ios=function(e,t,n,i){function o(e,t,n,i){var o={};o[ionic.CSS.TRANSITION_DURATION]=c.shouldAnimate?"":"0ms",o.opacity=1===t?"":t,e.setCss("buttons-left",o),e.setCss("buttons-right",o),e.setCss("back-button",o),o[ionic.CSS.TRANSFORM]="translate3d("+i+"px,0,0)",e.setCss("back-text",o),o[ionic.CSS.TRANSFORM]="translate3d("+n+"px,0,0)",e.setCss("title",o)}function r(e,t,n){if(e&&t){var i=(e.titleTextX()+e.titleWidth())*(1-n),r=t&&(t.titleTextX()-e.backButtonTextLeft())*(1-n)||0;o(e,n,i,r)}}function a(e,t,n){if(e&&t){var i=(-(e.titleTextX()-t.backButtonTextLeft())-e.titleLeftRight())*n;o(e,1-n,i,0)}}var c={run:function(n){var i=e.controller(),o=t&&t.controller();"back"==c.direction?(a(i,o,1-n),r(o,i,1-n)):(r(i,o,n),a(o,i,n))},direction:n,shouldAnimate:i&&("forward"==n||"back"==n)};return c},o.transitions.views.android=function(e,t,n,i){function o(e,t){var n={};n[ionic.CSS.TRANSITION_DURATION]=r.shouldAnimate?"":0,n[ionic.CSS.TRANSFORM]="translate3d("+t+"%,0,0)",ionic.DomUtil.cachedStyles(e,n)}i=i&&("forward"==n||"back"==n);var r={run:function(i){"forward"==n?(o(e,99*(1-i)),o(t,-100*i)):"back"==n?(o(e,-100*(1-i)),o(t,100*i)):(o(e,0),o(t,0))},shouldAnimate:i};return r},o.transitions.navBar.android=function(e,t,n,i){function o(e,t){if(e){var n={};n.opacity=1===t?"":t,e.setCss("buttons-left",n),e.setCss("buttons-right",n),e.setCss("back-button",n),e.setCss("back-text",n),e.setCss("title",n)}}return{run:function(n){o(e.controller(),n),o(t&&t.controller(),1-n)},shouldAnimate:i&&("forward"==n||"back"==n)}},o.transitions.views.none=function(e,t){return{run:function(n){o.transitions.views.android(e,t,!1,!1).run(n)},shouldAnimate:!1}},o.transitions.navBar.none=function(e,t){return{run:function(n){o.transitions.navBar.ios(e,t,!1,!1).run(n),o.transitions.navBar.android(e,t,!1,!1).run(n)},shouldAnimate:!1}},o.setPlatformConfig=e,o.$get=function(){return o}}).config(["$compileProvider",function(e){e.aHrefSanitizationWhitelist(/^\s*(https?|sms|tel|geo|ftp|mailto|file|ghttps?|ms-appx-web|ms-appx|x-wmapp0):/),e.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|content|blob|ms-appx|ms-appx-web|x-wmapp0):|data:image\//);
}]);var p='<div class="loading-container"><div class="loading"></div></div>',v="$ionicLoading instance.hide() has been deprecated. Use $ionicLoading.hide().",g="$ionicLoading instance.show() has been deprecated. Use $ionicLoading.show().",m="$ionicLoading instance.setContent() has been deprecated. Use $ionicLoading.show({ template: 'my content' }).";a.constant("$ionicLoadingConfig",{template:"<ion-spinner></ion-spinner>"}).factory("$ionicLoading",["$ionicLoadingConfig","$ionicBody","$ionicTemplateLoader","$ionicBackdrop","$timeout","$q","$log","$compile","$ionicPlatform","$rootScope","IONIC_BACK_PRIORITY",function(e,t,n,i,o,r,a,s,l,u,d){function f(){return b||(b=n.compile({template:p,appendTo:t.get()}).then(function(e){return e.show=function(a){var c=a.templateUrl?n.load(a.templateUrl):r.when(a.template||a.content||"");e.scope=a.scope||e.scope,e.isShown||(e.hasBackdrop=!a.noBackdrop&&a.showBackdrop!==!1,e.hasBackdrop&&(i.retain(),i.getElement().addClass("backdrop-loading"))),a.duration&&(o.cancel(e.durationTimeout),e.durationTimeout=o(angular.bind(e,e.hide),+a.duration)),y(),y=l.registerBackButtonAction(h,d.loading),c.then(function(n){if(n){var i=e.element.children();i.html(n),s(i.contents())(e.scope)}e.isShown&&(e.element.addClass("visible"),ionic.requestAnimationFrame(function(){e.isShown&&(e.element.addClass("active"),t.addClass("loading-active"))}))}),e.isShown=!0},e.hide=function(){y(),e.isShown&&(e.hasBackdrop&&(i.release(),i.getElement().removeClass("backdrop-loading")),e.element.removeClass("active"),t.removeClass("loading-active"),e.element.removeClass("visible"),ionic.requestAnimationFrame(function(){!e.isShown&&e.element.removeClass("visible")})),o.cancel(e.durationTimeout),e.isShown=!1;var n=e.element.children();n.html("")},e})),b}function $(t){t=c({},e||{},t||{});var n=t.delay||t.showDelay||0;return S(),k(),t.hideOnStateChange&&(S=u.$on("$stateChangeSuccess",w),k=u.$on("$stateChangeError",w)),o.cancel(C),C=o(h,n),C.then(f).then(function(e){return e.show(t)}),{hide:function(){return a.error(v),w.apply(this,arguments)},show:function(){return a.error(g),$.apply(this,arguments)},setContent:function(e){return a.error(m),f().then(function(t){t.show({template:e})})}}}function w(){S(),k(),o.cancel(C),f().then(function(e){e.hide()})}var b,y=h,S=h,k=h,C=r.when();return{show:$,hide:w,_getLoader:f}}]),a.factory("$ionicModal",["$rootScope","$ionicBody","$compile","$timeout","$ionicPlatform","$ionicTemplateLoader","$$q","$log","$ionicClickBlock","$window","IONIC_BACK_PRIORITY",function(e,t,n,i,o,r,a,s,l,u,d){var p=ionic.views.Modal.inherit({initialize:function(e){ionic.views.Modal.prototype.initialize.call(this,e),this.animation=e.animation||"slide-in-up"},show:function(e){var n=this;if(n.scope.$$destroyed)return s.error("Cannot call "+n.viewType+".show() after remove(). Please create a new "+n.viewType+" instance."),a.when();l.show(600),m.add(n);var r=f(n.modalEl);n.el.classList.remove("hide"),i(function(){n._isShown&&t.addClass(n.viewType+"-open")},400,!1),n.el.parentElement||(r.addClass(n.animation),t.append(n.el));var c=r.data("$$ionicScrollController");return c&&c.resize(),e&&n.positionView&&(n.positionView(e,r),n._onWindowResize=function(){n._isShown&&n.positionView(e,r)},ionic.on("resize",n._onWindowResize,window)),r.addClass("ng-enter active").removeClass("ng-leave ng-leave-active"),n._isShown=!0,n._deregisterBackButton=o.registerBackButtonAction(n.hardwareBackButtonClose?angular.bind(n,n.hide):h,d.modal),ionic.views.Modal.prototype.show.call(n),i(function(){n._isShown&&(r.addClass("ng-enter-active"),ionic.trigger("resize"),n.scope.$parent&&n.scope.$parent.$broadcast(n.viewType+".shown",n),n.el.classList.add("active"),n.scope.$broadcast("$ionicHeader.align"),n.scope.$broadcast("$ionicFooter.align"))},20),i(function(){n._isShown&&(n.$el.on("touchmove",function(e){var t=ionic.DomUtil.getParentOrSelfWithClass(e.target,"scroll");t||e.preventDefault()}),n.$el.on("click",function(e){n.backdropClickToClose&&e.target===n.el&&m.isHighest(n)&&n.hide()}))},400)},hide:function(){var e=this,n=f(e.modalEl);return l.show(600),m.remove(e),e.el.classList.remove("active"),n.addClass("ng-leave"),i(function(){e._isShown||n.addClass("ng-leave-active").removeClass("ng-enter ng-enter-active active")},20,!1),e.$el.off("click"),e._isShown=!1,e.scope.$parent&&e.scope.$parent.$broadcast(e.viewType+".hidden",e),e._deregisterBackButton&&e._deregisterBackButton(),ionic.views.Modal.prototype.hide.call(e),e.positionView&&ionic.off("resize",e._onWindowResize,window),i(function(){t.removeClass(e.viewType+"-open"),e.el.classList.add("hide")},e.hideDelay||320)},remove:function(){var e=this;return e.scope.$parent&&e.scope.$parent.$broadcast(e.viewType+".removed",e),e.hide().then(function(){e.scope.$destroy(),e.$el.remove()})},isShown:function(){return!!this._isShown}}),v=function(t,i){var o=i.scope&&i.scope.$new()||e.$new(!0);i.viewType=i.viewType||"modal",c(o,{$hasHeader:!1,$hasSubheader:!1,$hasFooter:!1,$hasSubfooter:!1,$hasTabs:!1,$hasTabsTop:!1});var r=n("<ion-"+i.viewType+">"+t+"</ion-"+i.viewType+">")(o);i.$el=r,i.el=r[0],i.modalEl=i.el.querySelector("."+i.viewType);var a=new p(i);return a.scope=o,i.scope||(o[i.viewType]=a),a},g=[],m={add:function(e){g.push(e)},remove:function(e){var t=g.indexOf(e);t>-1&&t<g.length&&g.splice(t,1)},isHighest:function(e){var t=g.indexOf(e);return t>-1&&t===g.length-1}};return{fromTemplate:function(e,t){var n=v(e,t||{});return n},fromTemplateUrl:function(e,t,n){var i;return angular.isFunction(t)&&(i=t,t=n),r.load(e).then(function(e){var n=v(e,t||{});return i&&i(n),n})},stack:m}}]),a.service("$ionicNavBarDelegate",ionic.DelegateService(["align","showBackButton","showBar","title","changeTitle","setTitle","getTitle","back","getPreviousTitle"])),a.service("$ionicNavViewDelegate",ionic.DelegateService(["clearCache"])),a.constant("IONIC_BACK_PRIORITY",{view:100,sideMenu:150,modal:200,actionSheet:300,popup:400,loading:500}).provider("$ionicPlatform",function(){return{$get:["$q","$ionicScrollDelegate",function(e,t){var n={onHardwareBackButton:function(e){ionic.Platform.ready(function(){document.addEventListener("backbutton",e,!1)})},offHardwareBackButton:function(e){ionic.Platform.ready(function(){document.removeEventListener("backbutton",e)})},$backButtonActions:{},registerBackButtonAction:function(e,t,i){n._hasBackButtonHandler||(n.$backButtonActions={},n.onHardwareBackButton(n.hardwareBackButtonClick),n._hasBackButtonHandler=!0);var o={id:i?i:ionic.Utils.nextUid(),priority:t?t:0,fn:e};return n.$backButtonActions[o.id]=o,function(){delete n.$backButtonActions[o.id]}},hardwareBackButtonClick:function(e){var t,i;for(i in n.$backButtonActions)(!t||n.$backButtonActions[i].priority>=t.priority)&&(t=n.$backButtonActions[i]);return t?(t.fn(e),t):void 0},is:function(e){return ionic.Platform.is(e)},on:function(e,t){return ionic.Platform.ready(function(){document.addEventListener(e,t,!1)}),function(){ionic.Platform.ready(function(){document.removeEventListener(e,t)})}},ready:function(t){var n=e.defer();return ionic.Platform.ready(function(){n.resolve(),t&&t()}),n.promise}};return window.addEventListener("statusTap",function(){t.scrollTop(!0)}),n}]}}),a.factory("$ionicPopover",["$ionicModal","$ionicPosition","$document","$window",function(e,t,n,i){function o(e,n){var o=f(e.target||e),a=t.offset(o),c=n.prop("offsetWidth"),s=n.prop("offsetHeight"),l=i.innerWidth,u=i.innerHeight,d={left:a.left+a.width/2-c/2},h=f(n[0].querySelector(".popover-arrow"));d.left<r?d.left=r:d.left+c+r>l&&(d.left=l-c-r),a.top+a.height+s>u&&a.top-s>0?(d.top=a.top-s,n.addClass("popover-bottom")):(d.top=a.top+a.height,n.removeClass("popover-bottom")),h.css({left:a.left+a.width/2-h.prop("offsetWidth")/2-d.left+"px"}),n.css({top:d.top+"px",left:d.left+"px",marginLeft:"0",opacity:"1"})}var r=6,a={viewType:"popover",hideDelay:1,animation:"none",positionView:o};return{fromTemplate:function(t,n){return e.fromTemplate(t,ionic.Utils.extend({},a,n))},fromTemplateUrl:function(t,n){return e.fromTemplateUrl(t,ionic.Utils.extend({},a,n))}}}]);var $='<div class="popup-container" ng-class="cssClass"><div class="popup"><div class="popup-head"><h3 class="popup-title" ng-bind-html="title"></h3><h5 class="popup-sub-title" ng-bind-html="subTitle" ng-if="subTitle"></h5></div><div class="popup-body"></div><div class="popup-buttons" ng-show="buttons.length"><button ng-repeat="button in buttons" ng-click="$buttonTapped(button, $event)" class="button" ng-class="button.type || \'button-default\'" ng-bind-html="button.text"></button></div></div></div>';a.factory("$ionicPopup",["$ionicTemplateLoader","$ionicBackdrop","$q","$timeout","$rootScope","$ionicBody","$compile","$ionicPlatform","$ionicModal","IONIC_BACK_PRIORITY",function(e,t,n,i,o,r,a,s,l,u){function d(t){t=c({scope:null,title:"",buttons:[]},t||{});var s={};return s.scope=(t.scope||o).$new(),s.element=f($),s.responseDeferred=n.defer(),r.get().appendChild(s.element[0]),a(s.element)(s.scope),c(s.scope,{title:t.title,buttons:t.buttons,subTitle:t.subTitle,cssClass:t.cssClass,$buttonTapped:function(e,t){var n=(e.onTap||h).apply(s,[t]);t=t.originalEvent||t,t.defaultPrevented||s.responseDeferred.resolve(n)}}),n.when(t.templateUrl?e.load(t.templateUrl):t.template||t.content||"").then(function(e){var t=f(s.element[0].querySelector(".popup-body"));e?(t.html(e),a(t.contents())(s.scope)):t.remove()}),s.show=function(){s.isShown||s.removed||(l.stack.add(s),s.isShown=!0,ionic.requestAnimationFrame(function(){s.isShown&&(s.element.removeClass("popup-hidden"),s.element.addClass("popup-showing active"),g(s.element))}))},s.hide=function(e){return e=e||h,s.isShown?(l.stack.remove(s),s.isShown=!1,s.element.removeClass("active"),s.element.addClass("popup-hidden"),void i(e,250,!1)):e()},s.remove=function(){s.removed||(s.hide(function(){s.element.remove(),s.scope.$destroy()}),s.removed=!0)},s}function p(){var e=S[S.length-1];e&&e.responseDeferred.resolve()}function v(e){function n(){S.push(o),i(o.show,a,!1),o.responseDeferred.promise.then(function(e){var n=S.indexOf(o);return-1!==n&&S.splice(n,1),o.remove(),S.length>0?S[S.length-1].show():(t.release(),i(function(){S.length||r.removeClass("popup-open")},400,!1),(k._backButtonActionDone||h)()),e})}var o=k._createPopup(e),a=0;return S.length>0?(a=y.stackPushDelay,i(S[S.length-1].hide,a,!1)):(r.addClass("popup-open"),t.retain(),k._backButtonActionDone=s.registerBackButtonAction(p,u.popup)),o.responseDeferred.promise.close=function(e){o.removed||o.responseDeferred.resolve(e)},o.responseDeferred.notify({close:o.responseDeferred.close}),n(),o.responseDeferred.promise}function g(e){var t=e[0].querySelector("[autofocus]");t&&t.focus()}function m(e){return v(c({buttons:[{text:e.okText||"OK",type:e.okType||"button-positive",onTap:function(){return!0}}]},e||{}))}function w(e){return v(c({buttons:[{text:e.cancelText||"Cancel",type:e.cancelType||"button-default",onTap:function(){return!1}},{text:e.okText||"OK",type:e.okType||"button-positive",onTap:function(){return!0}}]},e||{}))}function b(e){var t=o.$new(!0);t.data={},t.data.fieldtype=e.inputType?e.inputType:"text",t.data.response=e.defaultText?e.defaultText:"",t.data.placeholder=e.inputPlaceholder?e.inputPlaceholder:"",t.data.maxlength=e.maxLength?parseInt(e.maxLength):"";var n="";return e.template&&/<[a-z][\s\S]*>/i.test(e.template)===!1&&(n="<span>"+e.template+"</span>",delete e.template),v(c({template:n+'<input ng-model="data.response" type="{{ data.fieldtype }}"maxlength="{{ data.maxlength }}"placeholder="{{ data.placeholder }}">',scope:t,buttons:[{text:e.cancelText||"Cancel",type:e.cancelType||"button-default",onTap:function(){}},{text:e.okText||"OK",type:e.okType||"button-positive",onTap:function(){return t.data.response||""}}]},e||{}))}var y={stackPushDelay:75},S=[],k={show:v,alert:m,confirm:w,prompt:b,_createPopup:d,_popupStack:S};return k}]),a.factory("$ionicPosition",["$document","$window",function(e,t){function n(e,n){return e.currentStyle?e.currentStyle[n]:t.getComputedStyle?t.getComputedStyle(e)[n]:e.style[n]}function i(e){return"static"===(n(e,"position")||"static")}var o=function(t){for(var n=e[0],o=t.offsetParent||n;o&&o!==n&&i(o);)o=o.offsetParent;return o||n};return{position:function(t){var n=this.offset(t),i={top:0,left:0},r=o(t[0]);r!=e[0]&&(i=this.offset(f(r)),i.top+=r.clientTop-r.scrollTop,i.left+=r.clientLeft-r.scrollLeft);var a=t[0].getBoundingClientRect();return{width:a.width||t.prop("offsetWidth"),height:a.height||t.prop("offsetHeight"),top:n.top-i.top,left:n.left-i.left}},offset:function(n){var i=n[0].getBoundingClientRect();return{width:i.width||n.prop("offsetWidth"),height:i.height||n.prop("offsetHeight"),top:i.top+(t.pageYOffset||e[0].documentElement.scrollTop),left:i.left+(t.pageXOffset||e[0].documentElement.scrollLeft)}}}}]),a.service("$ionicScrollDelegate",ionic.DelegateService(["resize","scrollTop","scrollBottom","scrollTo","scrollBy","zoomTo","zoomBy","getScrollPosition","anchorScroll","freezeScroll","freezeAllScrolls","getScrollView"])),a.service("$ionicSideMenuDelegate",ionic.DelegateService(["toggleLeft","toggleRight","getOpenRatio","isOpen","isOpenLeft","isOpenRight","canDragContent","edgeDragThreshold"])),a.service("$ionicSlideBoxDelegate",ionic.DelegateService(["update","slide","select","enableSlide","previous","next","stop","autoPlay","start","currentIndex","selected","slidesCount","count","loop"])),a.service("$ionicTabsDelegate",ionic.DelegateService(["select","selectedIndex","showBar"])),function(){var e=[];a.factory("$ionicTemplateCache",["$http","$templateCache","$timeout",function(t,n,i){function o(e){return"undefined"==typeof e?r():(d(e)&&(e=[e]),s(e,function(e){c.push(e)}),void(a&&r()))}function r(){var e;if(o._runCount++,a=!0,0!==c.length){for(var s=0;4>s&&(e=c.pop());)d(e)&&t.get(e,{cache:n}),s++;c.length&&i(r,1e3)}}var a,c=e;return o._runCount=0,o}]).config(["$stateProvider","$ionicConfigProvider",function(t,n){var i=t.state;t.state=function(o,r){if("object"==typeof r){var a=r.prefetchTemplate!==!1&&e.length<n.templates.maxPrefetch();if(a&&d(r.templateUrl)&&e.push(r.templateUrl),angular.isObject(r.views))for(var c in r.views)a=r.views[c].prefetchTemplate!==!1&&e.length<n.templates.maxPrefetch(),a&&d(r.views[c].templateUrl)&&e.push(r.views[c].templateUrl)}return i.call(t,o,r)}}]).run(["$ionicTemplateCache",function(e){e()}])}(),a.factory("$ionicTemplateLoader",["$compile","$controller","$http","$q","$rootScope","$templateCache",function(e,t,n,i,o,r){function a(e){return n.get(e,{cache:r}).then(function(e){return e.data&&e.data.trim()})}function s(n){n=c({template:"",templateUrl:"",scope:null,controller:null,locals:{},appendTo:null},n||{});var r=n.templateUrl?this.load(n.templateUrl):i.when(n.template);return r.then(function(i){var r,a=n.scope||o.$new(),s=f("<div>").html(i).contents();return n.controller&&(r=t(n.controller,c(n.locals,{$scope:a})),s.children().data("$ngControllerController",r)),n.appendTo&&f(n.appendTo).append(s),e(s)(a),{element:s,scope:a}})}return{load:a,compile:s}}]),a.factory("$ionicViewService",["$ionicHistory","$log",function(e,t){function n(e,n){t.warn("$ionicViewService"+e+" is deprecated, please use $ionicHistory"+n+" instead: http://ionicframework.com/docs/nightly/api/service/$ionicHistory/")}n("","");var i={getCurrentView:"currentView",getBackView:"backView",getForwardView:"forwardView",getCurrentStateName:"currentStateName",nextViewOptions:"nextViewOptions",clearHistory:"clearHistory"};return s(i,function(t,o){i[o]=function(){return n("."+o,"."+t),e[t].apply(this,arguments)}}),i}]),a.factory("$ionicViewSwitcher",["$timeout","$document","$q","$ionicClickBlock","$ionicConfig","$ionicNavBarDelegate",function(e,t,n,i,o,r){function a(e,t){return u(e)["abstract"]?u(e).name:t?t.stateId||t.viewId:ionic.Utils.nextUid()}function u(e){return e&&e.$$state&&e.$$state.self||{}}function d(e,t,n,i){var r=u(e),a=g||V(t,"view-transition")||r.viewTransition||o.views.transition()||"ios",s=o.navBar.transition();return n=m||V(t,"view-direction")||r.viewDirection||n||"none",c(h(i),{transition:a,navBarTransition:"view"===s?a:s,direction:n,shouldAnimate:"none"!==a&&"none"!==n})}function h(e){return e=e||{},{viewId:e.viewId,historyId:e.historyId,stateId:e.stateId,stateName:e.stateName,stateParams:e.stateParams}}function p(e,t){return arguments.length>1?void V(e,T,t):V(e,T)}function v(e){if(e&&e.length){var t=e.scope();t&&(t.$emit("$ionicView.unloaded",e.data(C)),t.$destroy()),e.remove()}}var g,m,$="webkitTransitionEnd transitionend",w="$noCache",b="$destroyEle",y="$eleId",S="$accessed",k="$fallbackTimer",C="$viewData",T="nav-view",B="active",I="cached",x="stage",A=0;ionic.transition=ionic.transition||{},ionic.transition.isActive=!1;var E,V=ionic.DomUtil.cachedAttr,P=[],_=1100,D={create:function(t,s,f,T,E,L){var R,M,N,z=++A,O={init:function(e,t){D.isTransitioning(!0),O.loadViewElements(e),O.render(e,function(){t&&t()})},loadViewElements:function(e){var n,i,o,r=t.getViewElements(),c=a(s,f),u=t.activeEleId();for(n=0,i=r.length;i>n&&(o=r.eq(n),o.data(y)===c?o.data(w)?(o.data(y,c+ionic.Utils.nextUid()),o.data(b,!0)):R=o:l(u)&&o.data(y)===u&&(M=o),!R||!M);n++);N=!!R,N||(R=e.ele||D.createViewEle(s),R.data(y,c)),L&&t.activeEleId(c),e.ele=null},render:function(e,n){if(N)ionic.Utils.reconnectScope(R.scope());else{p(R,x);var i=d(s,R,e.direction,f),r=o.transitions.views[i.transition]||o.transitions.views.none;r(R,null,i.direction,!0).run(0),R.data(C,{viewId:i.viewId,historyId:i.historyId,stateName:i.stateName,stateParams:i.stateParams}),(u(s).cache===!1||"false"===u(s).cache||"false"==R.attr("cache-view")||0===o.views.maxCache())&&R.data(w,!0);var a=t.appendViewElement(R,s);delete i.direction,delete i.transition,a.$emit("$ionicView.loaded",i)}R.data(S,Date.now()),n&&n()},transition:function(a,l,u){function v(){p(R,F.shouldAnimate?"entering":B),p(M,F.shouldAnimate?"leaving":I),F.run(1),r._instances.forEach(function(e){e.triggerTransitionStart(z)}),F.shouldAnimate||b()}function w(e){e.target===this&&b()}function b(){b.x||(b.x=!0,R.off($,w),e.cancel(R.data(k)),M&&e.cancel(M.data(k)),C&&C.resolve(t),z===A&&(n.all(P).then(D.transitionEnd),O.emit("after",H,q),O.cleanup(H)),r._instances.forEach(function(e){e.triggerTransitionEnd()}),g=m=f=T=R=M=null)}function y(e){e.target===this&&S()}function S(){p(R,I),p(M,B),R.off($,y),e.cancel(R.data(k)),D.transitionEnd([t])}var C,H=d(s,R,a,f),q=c(c({},H),h(T));H.transitionId=q.transitionId=z,H.fromCache=!!N,H.enableBack=!!l,H.renderStart=E,H.renderEnd=L,V(R.parent(),"nav-view-transition",H.transition),V(R.parent(),"nav-view-direction",H.direction),e.cancel(R.data(k));var U=o.transitions.views[H.transition]||o.transitions.views.none,F=U(R,M,H.direction,H.shouldAnimate&&u&&L);if(F.shouldAnimate&&(R.on($,w),R.data(k,e(b,_)),i.show(_)),E&&(O.emit("before",H,q),p(R,x),F.run(0)),L&&(C=n.defer(),P.push(C.promise)),E&&L)e(function(){ionic.requestAnimationFrame(v)});else{if(!L)return p(R,"entering"),p(M,"leaving"),{run:F.run,cancel:function(t){t?(R.on($,y),R.data(k,e(S,_)),i.show(_)):S(),F.shouldAnimate=t,F.run(0),F=null}};L&&v()}},emit:function(e,t,n){var i=R.scope(),o=M&&M.scope();"after"==e&&(i&&i.$emit("$ionicView.enter",t),o?o.$emit("$ionicView.leave",n):i&&n&&n.viewId&&i.$emit("$ionicNavView.leave",n)),i&&i.$emit("$ionicView."+e+"Enter",t),o?o.$emit("$ionicView."+e+"Leave",n):i&&n&&n.viewId&&i.$emit("$ionicNavView."+e+"Leave",n)},cleanup:function(e){M&&"back"==e.direction&&!o.views.forwardCache()&&v(M);var n,i,r,a=t.getViewElements(),c=a.length,s=c-1>o.views.maxCache(),l=Date.now();for(n=0;c>n;n++)i=a.eq(n),s&&i.data(S)<l?(l=i.data(S),r=a.eq(n)):i.data(b)&&p(i)!=B&&v(i);v(r),R.data(w)&&R.data(b,!0)},enteringEle:function(){return R},leavingEle:function(){return M}};return O},transitionEnd:function(e){s(e,function(e){e.transitionEnd()}),D.isTransitioning(!1),i.hide(),P=[]},nextTransition:function(e){g=e},nextDirection:function(e){m=e},isTransitioning:function(t){return arguments.length&&(ionic.transition.isActive=!!t,e.cancel(E),t&&(E=e(function(){D.isTransitioning(!1)},999))),ionic.transition.isActive},createViewEle:function(e){var n=t[0].createElement("div");return e&&e.$template&&(n.innerHTML=e.$template,1===n.children.length)?(n.children[0].classList.add("pane"),f(n.children[0])):(n.className="pane",f(n))},viewEleIsActive:function(e,t){p(e,t?B:I)},getTransitionData:d,navViewAttr:p,destroyViewEle:v};return D}]),angular.module("ngIOS9UIWebViewPatch",["ng"]).config(["$provide",function(e){"use strict";e.decorator("$browser",["$delegate","$window",function(e,t){function n(e){return/(iPhone|iPad|iPod).* OS 9_\d/.test(e)&&!/Version\/9\./.test(e)}function i(e){function t(){n=null}var n=null,i=e.url;return e.url=function(){return arguments.length?(n=arguments[0],i.apply(e,arguments)):n||i.apply(e,arguments)},window.addEventListener("popstate",t,!1),window.addEventListener("hashchange",t,!1),e}return n(t.navigator.userAgent)?i(e):e}])}]),a.config(["$provide",function(e){e.decorator("$compile",["$delegate",function(e){return e.$$addScopeInfo=function(e,t,n,i){var o=n?i?"$isolateScopeNoTemplate":"$isolateScope":"$scope";e.data(o,t)},e}])}]),a.config(["$provide",function(e){function t(e,t){return e.__hash=e.hash,e.hash=function(n){return l(n)&&n.length>0&&t(function(){var e=document.querySelector(".scroll-content");e&&(e.scrollTop=0)},0,!1),e.__hash(n)},e}e.decorator("$location",["$delegate","$timeout",t])}]),a.controller("$ionicHeaderBar",["$scope","$element","$attrs","$q","$ionicConfig","$ionicHistory",function(e,t,n,i,o,r){function a(e){return C[e]||(C[e]=t[0].querySelector("."+e)),C[e]}var c="title",s="back-text",l="back-button",u="default-title",d="previous-title",f="hide",h=this,p="",v="",g=0,m=0,$="",w=!1,b=!0,y=!0,S=!1,k=0;h.beforeEnter=function(t){e.$broadcast("$ionicView.beforeEnter",t)},h.title=function(e){return arguments.length&&e!==p&&(a(c).innerHTML=e,p=e,k=0),p},h.enableBack=function(e,t){return arguments.length&&(w=e,t||h.updateBackButton()),w},h.showBack=function(e,t){return arguments.length&&(b=e,t||h.updateBackButton()),b},h.showNavBack=function(e){y=e,h.updateBackButton()},h.updateBackButton=function(){var e;(b&&y&&w)!==S&&(S=b&&y&&w,e=a(l),e&&e.classList[S?"remove":"add"](f)),w&&(e=e||a(l),e&&(h.backButtonIcon!==o.backButton.icon()&&(e=a(l+" .icon"),e&&(h.backButtonIcon=o.backButton.icon(),e.className="icon "+h.backButtonIcon)),h.backButtonText!==o.backButton.text()&&(e=a(l+" .back-text"),e&&(e.textContent=h.backButtonText=o.backButton.text()))))},h.titleTextWidth=function(){if(!k){var e=ionic.DomUtil.getTextBounds(a(c));k=Math.min(e&&e.width||30)}return k},h.titleWidth=function(){var e=h.titleTextWidth(),t=a(c).offsetWidth;return e>t&&(e=t+(g-m-5)),e},h.titleTextX=function(){return t[0].offsetWidth/2-h.titleWidth()/2},h.titleLeftRight=function(){return g-m},h.backButtonTextLeft=function(){for(var e=0,t=a(s);t;)e+=t.offsetLeft,t=t.parentElement;return e},h.resetBackButton=function(e){if(o.backButton.previousTitleText()){var t=a(d);if(t){t.classList.remove(f);var n=e&&r.getViewById(e.viewId),i=r.backTitle(n);i!==v&&(v=t.innerHTML=i)}var c=a(u);c&&c.classList.remove(f)}},h.align=function(e){var i=a(c);e=e||n.alignTitle||o.navBar.alignTitle();var r=h.calcWidths(e,!1);if(b&&v&&o.backButton.previousTitleText()){var s=h.calcWidths(e,!0),l=t[0].offsetWidth-s.titleLeft-s.titleRight;h.titleTextWidth()<=l&&(r=s)}return h.updatePositions(i,r.titleLeft,r.titleRight,r.buttonsLeft,r.buttonsRight,r.css,r.showPrevTitle)},h.calcWidths=function(e,n){var i,o,r,h,p,v,g,m,$,w=a(c),y=a(l),S=t[0].childNodes,k=0,C=0,T=0,B=0,I="",x=0;for(i=0;i<S.length;i++){if(p=S[i],g=0,1==p.nodeType){if(p===w){$=!0;continue}if(p.classList.contains(f))continue;if(b&&p===y){for(o=0;o<p.childNodes.length;o++)if(h=p.childNodes[o],1==h.nodeType)if(h.classList.contains(s))for(r=0;r<h.children.length;r++)if(v=h.children[r],n){if(v.classList.contains(u))continue;x+=v.offsetWidth}else{if(v.classList.contains(d))continue;x+=v.offsetWidth}else x+=h.offsetWidth;else 3==h.nodeType&&h.nodeValue.trim()&&(m=ionic.DomUtil.getTextBounds(h),x+=m&&m.width||0);g=x||p.offsetWidth}else g=p.offsetWidth}else 3==p.nodeType&&p.nodeValue.trim()&&(m=ionic.DomUtil.getTextBounds(p),g=m&&m.width||0);$?C+=g:k+=g}if("left"==e)I="title-left",k&&(T=k+15),C&&(B=C+15);else if("right"==e)I="title-right",k&&(T=k+15),C&&(B=C+15);else{var A=Math.max(k,C)+10;A>10&&(T=B=A)}return{backButtonWidth:x,buttonsLeft:k,buttonsRight:C,titleLeft:T,titleRight:B,showPrevTitle:n,css:I}},h.updatePositions=function(e,n,r,c,s,l,p){var v=i.defer();if(e&&(n!==g&&(e.style.left=n?n+"px":"",g=n),r!==m&&(e.style.right=r?r+"px":"",m=r),l!==$&&(l&&e.classList.add(l),$&&e.classList.remove($),$=l)),o.backButton.previousTitleText()){var w=a(d),b=a(u);w&&w.classList[p?"remove":"add"](f),b&&b.classList[p?"add":"remove"](f)}return ionic.requestAnimationFrame(function(){if(e&&e.offsetWidth+10<e.scrollWidth){var n=s+5,i=t[0].offsetWidth-g-h.titleTextWidth()-20;r=n>i?n:i,r!==m&&(e.style.right=r+"px",m=r)}v.resolve()}),v.promise},h.setCss=function(e,t){ionic.DomUtil.cachedStyles(a(e),t)};var C={};e.$on("$destroy",function(){for(var e in C)C[e]=null})}]),a.controller("$ionInfiniteScroll",["$scope","$attrs","$element","$timeout",function(e,t,n,i){function o(){ionic.requestAnimationFrame(function(){n[0].classList.add("active")}),s.isLoading=!0,e.$parent&&e.$parent.$apply(t.onInfinite||"")}function r(){ionic.requestAnimationFrame(function(){n[0].classList.remove("active")}),i(function(){s.jsScrolling&&s.scrollView.resize(),(s.jsScrolling&&s.scrollView.__container&&s.scrollView.__container.offsetHeight>0||!s.jsScrolling)&&s.checkBounds()},30,!1),s.isLoading=!1}function a(){if(!s.isLoading){var e={};if(s.jsScrolling){e=s.getJSMaxScroll();var t=s.scrollView.getValues();(-1!==e.left&&t.left>=e.left||-1!==e.top&&t.top>=e.top)&&o()}else e=s.getNativeMaxScroll(),(-1!==e.left&&s.scrollEl.scrollLeft>=e.left-s.scrollEl.clientWidth||-1!==e.top&&s.scrollEl.scrollTop>=e.top-s.scrollEl.clientHeight)&&o()}}function c(e){var n=(t.distance||"2.5%").trim(),i=-1!==n.indexOf("%");return i?e*(1-parseFloat(n)/100):e-parseFloat(n)}var s=this;s.isLoading=!1,e.icon=function(){return l(t.icon)?t.icon:"ion-load-d"},e.spinner=function(){return l(t.spinner)?t.spinner:""},e.$on("scroll.infiniteScrollComplete",function(){r()}),e.$on("$destroy",function(){s.scrollCtrl&&s.scrollCtrl.$element&&s.scrollCtrl.$element.off("scroll",s.checkBounds),s.scrollEl&&s.scrollEl.removeEventListener&&s.scrollEl.removeEventListener("scroll",s.checkBounds)}),s.checkBounds=ionic.Utils.throttle(a,300),s.getJSMaxScroll=function(){var e=s.scrollView.getScrollMax();return{left:s.scrollView.options.scrollingX?c(e.left):-1,top:s.scrollView.options.scrollingY?c(e.top):-1}},s.getNativeMaxScroll=function(){var e={left:s.scrollEl.scrollWidth,top:s.scrollEl.scrollHeight},t=window.getComputedStyle(s.scrollEl)||{};return{left:!e.left||"scroll"!==t.overflowX&&"auto"!==t.overflowX&&"scroll"!==s.scrollEl.style["overflow-x"]?-1:c(e.left),top:!e.top||"scroll"!==t.overflowY&&"auto"!==t.overflowY&&"scroll"!==s.scrollEl.style["overflow-y"]?-1:c(e.top)}},s.__finishInfiniteScroll=r}]),a.service("$ionicListDelegate",ionic.DelegateService(["showReorder","showDelete","canSwipeItems","closeOptionButtons"])).controller("$ionicList",["$scope","$attrs","$ionicListDelegate","$ionicHistory",function(e,t,n,i){var o=this,r=!0,a=!1,c=!1,s=n._registerInstance(o,t.delegateHandle,function(){return i.isActiveScope(e)});e.$on("$destroy",s),o.showReorder=function(e){return arguments.length&&(a=!!e),a},o.showDelete=function(e){return arguments.length&&(c=!!e),c},o.canSwipeItems=function(e){return arguments.length&&(r=!!e),r},o.closeOptionButtons=function(){o.listView&&o.listView.clearDragEffects()}}]),a.controller("$ionicNavBar",["$scope","$element","$attrs","$compile","$timeout","$ionicNavBarDelegate","$ionicConfig","$ionicHistory",function(e,t,n,i,o,r,a,c){function u(e,t){var n=console.warn||console.log;n&&n.call(console,"navBarController."+e+" is deprecated, please use "+t+" instead")}function d(e){return x[e]?f(x[e]):void 0}function h(){for(var e=0;e<I.length;e++)if(I[e].isActive)return I[e]}function p(){for(var e=0;e<I.length;e++)if(!I[e].isActive)return I[e]}function v(e,t){e&&ionic.DomUtil.cachedAttr(e.containerEle(),"nav-bar",t)}function g(e){ionic.DomUtil.cachedAttr(t,"nav-swipe",e)}var m,$,w,b="hide",y="$ionNavBarController",S="primaryButtons",k="secondaryButtons",C="backButton",T="primaryButtons secondaryButtons leftButtons rightButtons title".split(" "),B=this,I=[],x={},A=!0;t.parent().data(y,B);var E=n.delegateHandle||"navBar"+ionic.Utils.nextUid(),V=r._registerInstance(B,E);B.init=function(){t.addClass("nav-bar-container"),ionic.DomUtil.cachedAttr(t,"nav-bar-transition",a.views.transition()),B.createHeaderBar(!1),B.createHeaderBar(!0),e.$emit("ionNavBar.init",E)},B.createHeaderBar=function(o){function r(e,t){e&&("title"===t?g.append(e):"rightButtons"==t||t==k&&"left"!=a.navBar.positionSecondaryButtons()||t==S&&"right"==a.navBar.positionPrimaryButtons()?(v||(v=f('<div class="buttons buttons-right">'),h.append(v)),t==k?v.append(e):v.prepend(e)):(p||(p=f('<div class="buttons buttons-left">'),m[C]?m[C].after(p):h.prepend(p)),t==k?p.append(e):p.prepend(e)))}var c=f('<div class="nav-bar-block">');ionic.DomUtil.cachedAttr(c,"nav-bar",o?"active":"cached");var u=n.alignTitle||a.navBar.alignTitle(),h=f("<ion-header-bar>").addClass(n["class"]).attr("align-title",u);l(n.noTapScroll)&&h.attr("no-tap-scroll",n.noTapScroll);var p,v,g=f('<div class="title title-'+u+'">'),m={},$={};m[C]=d(C),m[C]&&h.append(m[C]),h.append(g),s(T,function(e){m[e]=d(e),r(m[e],e)});for(var w=0;w<h[0].children.length;w++)h[0].children[w].classList.add("header-item");c.append(h),t.append(i(c)(e.$new()));var y=h.data("$ionHeaderBarController");y.backButtonIcon=a.backButton.icon(),y.backButtonText=a.backButton.text();var B={isActive:o,title:function(e){y.title(e)},setItem:function(e,t){B.removeItem(t),e?("title"===t&&B.title(""),r(e,t),m[t]&&m[t].addClass(b),$[t]=e):m[t]&&m[t].removeClass(b)},removeItem:function(e){$[e]&&($[e].scope().$destroy(),$[e].remove(),$[e]=null)},containerEle:function(){return c},headerBarEle:function(){return h},afterLeave:function(){s(T,function(e){B.removeItem(e)}),y.resetBackButton()},controller:function(){return y},destroy:function(){s(T,function(e){B.removeItem(e)}),c.scope().$destroy();for(var e in m)m[e]&&(m[e].removeData(),m[e]=null);p&&p.removeData(),v&&v.removeData(),g.removeData(),h.removeData(),c.remove(),c=h=g=p=v=null}};return I.push(B),B},B.navElement=function(e,t){return l(t)&&(x[e]=t),x[e]},B.update=function(e){var t=!e.hasHeaderBar&&e.showNavBar;e.transition=a.views.transition(),t||(e.direction="none"),B.enable(t);var n=B.isInitialized?p():h(),i=B.isInitialized?h():null,o=n.controller();o.enableBack(e.enableBack,!0),o.showBack(e.showBack,!0),o.updateBackButton(),B.title(e.title,n),B.showBar(t),e.navBarItems&&s(T,function(t){n.setItem(e.navBarItems[t],t)}),B.transition(n,i,e),B.isInitialized=!0,g("")},B.transition=function(n,i,r){function c(){for(var e=0;e<I.length;e++)I[e].isActive=!1;n.isActive=!0,v(n,"active"),v(i,"cached"),B.activeTransition=d=$=null}var s=n.controller(),l=a.transitions.navBar[r.navBarTransition]||a.transitions.navBar.none,u=r.transitionId;s.beforeEnter(r);var d=l(n,i,r.direction,r.shouldAnimate&&B.isInitialized);ionic.DomUtil.cachedAttr(t,"nav-bar-transition",r.navBarTransition),ionic.DomUtil.cachedAttr(t,"nav-bar-direction",r.direction),d.shouldAnimate&&r.renderEnd?v(n,"stage"):(v(n,"entering"),v(i,"leaving")),s.resetBackButton(r),d.run(0),B.activeTransition={run:function(e){d.shouldAnimate=!1,d.direction="back",d.run(e)},cancel:function(t,o,r){g(o),v(i,"active"),v(n,"cached"),d.shouldAnimate=t,d.run(0),B.activeTransition=d=null;var a;r.showBar!==B.showBar()&&B.showBar(r.showBar),r.showBackButton!==B.showBackButton()&&B.showBackButton(r.showBackButton),a&&e.$apply()},complete:function(e,t){g(t),d.shouldAnimate=e,d.run(1),$=c}},o(s.align,16),(m=function(){w===u&&(v(n,"entering"),v(i,"leaving"),d.run(1),$=function(){w!=u&&d.shouldAnimate||c();
},m=null)})()},B.triggerTransitionStart=function(e){w=e,m&&m()},B.triggerTransitionEnd=function(){$&&$()},B.showBar=function(t){return arguments.length&&(B.visibleBar(t),e.$parent.$hasHeader=!!t),!!e.$parent.$hasHeader},B.visibleBar=function(e){e&&!A?(t.removeClass(b),B.align()):!e&&A&&t.addClass(b),A=e},B.enable=function(e){B.visibleBar(e);for(var t=0;t<r._instances.length;t++)r._instances[t]!==B&&r._instances[t].visibleBar(!1)},B.showBackButton=function(t){if(arguments.length){for(var n=0;n<I.length;n++)I[n].controller().showNavBack(!!t);e.$isBackButtonShown=!!t}return e.$isBackButtonShown},B.showActiveBackButton=function(e){var t=h();return t?arguments.length?t.controller().showBack(e):t.controller().showBack():void 0},B.title=function(t,n){return l(t)&&(t=t||"",n=n||h(),n&&n.title(t),e.$title=t,c.currentTitle(t)),e.$title},B.align=function(e,t){t=t||h(),t&&t.controller().align(e)},B.hasTabsTop=function(e){t[e?"addClass":"removeClass"]("nav-bar-tabs-top")},B.hasBarSubheader=function(e){t[e?"addClass":"removeClass"]("nav-bar-has-subheader")},B.changeTitle=function(e){u("changeTitle(val)","title(val)"),B.title(e)},B.setTitle=function(e){u("setTitle(val)","title(val)"),B.title(e)},B.getTitle=function(){return u("getTitle()","title()"),B.title()},B.back=function(){u("back()","$ionicHistory.goBack()"),c.goBack()},B.getPreviousTitle=function(){u("getPreviousTitle()","$ionicHistory.backTitle()"),c.goBack()},e.$on("$destroy",function(){e.$parent.$hasHeader=!1,t.parent().removeData(y);for(var n=0;n<I.length;n++)I[n].destroy();t.remove(),t=I=null,V()})}]),a.controller("$ionicNavView",["$scope","$element","$attrs","$compile","$controller","$ionicNavBarDelegate","$ionicNavViewDelegate","$ionicHistory","$ionicViewSwitcher","$ionicConfig","$ionicScrollDelegate",function(e,t,n,i,o,r,a,s,l,u,d){function f(e,n){for(var i,o,r=t.children(),a=0,c=r.length;c>a;a++)if(i=r.eq(a),A(i)==T){o=i.scope(),o&&o.$emit(e.name.replace("Tabs","View"),n);break}}function h(e){ionic.DomUtil.cachedAttr(t,"nav-swipe",e)}function p(e,t){var n=g();n&&n.hasTabsTop(t)}function v(e,t){var n=g();n&&n.hasBarSubheader(t)}function g(){if($)for(var e=0;e<r._instances.length;e++)if(r._instances[e].$$delegateHandle==$)return r._instances[e];return t.inheritedData("$ionNavBarController")}var m,$,w,b,y,S="$eleId",k="$destroyEle",C="$noCache",T="active",B="cached",I=this,x=!1,A=l.navViewAttr;I.scope=e,I.element=t,I.init=function(){var i=n.name||"",o=t.parent().inheritedData("$uiView"),r=o&&o.state?o.state.name:"";i.indexOf("@")<0&&(i=i+"@"+r);var c={name:i,state:null};t.data("$uiView",c);var s=a._registerInstance(I,n.delegateHandle);return e.$on("$destroy",function(){s(),I.isSwipeFreeze&&d.freezeAllScrolls(!1)}),e.$on("$ionicHistory.deselect",I.cacheCleanup),e.$on("$ionicTabs.top",p),e.$on("$ionicSubheader",v),e.$on("$ionicTabs.beforeLeave",f),e.$on("$ionicTabs.afterLeave",f),e.$on("$ionicTabs.leave",f),ionic.Platform.ready(function(){ionic.Platform.isWebView()&&u.views.swipeBackEnabled()&&I.initSwipeBack()}),c},I.register=function(t){var n=c({},s.currentView()),i=s.register(e,t);I.update(i);var o=s.getViewById(i.viewId)||{},r=b!==i.viewId;I.render(i,t,o,n,r,!0)},I.update=function(e){x=!0,m=e.direction;var n=t.parent().inheritedData("$ionNavViewController");n&&(n.isPrimary(!1),("enter"===m||"exit"===m)&&(n.direction(m),"enter"===m&&(m="none")))},I.render=function(e,t,n,i,o,r){var a=l.create(I,t,n,i,o,r);a.init(e,function(){a.transition(I.direction(),e.enableBack,!y),b=y=null})},I.beforeEnter=function(e){if(x){$=e.navBarDelegate;var t=g();t&&t.update(e),h("")}},I.activeEleId=function(e){return arguments.length&&(w=e),w},I.transitionEnd=function(){var e,n,i,o=t.children();for(e=0,n=o.length;n>e;e++)i=o.eq(e),i.data(S)===w?A(i,T):("leaving"===A(i)||A(i)===T||A(i)===B)&&(i.data(k)||i.data(C)?l.destroyViewEle(i):(A(i,B),ionic.Utils.disconnectScope(i.scope())));h(""),I.isSwipeFreeze&&d.freezeAllScrolls(!1)},I.cacheCleanup=function(){for(var e=t.children(),n=0,i=e.length;i>n;n++)e.eq(n).data(k)&&l.destroyViewEle(e.eq(n))},I.clearCache=function(e){var n,i,o,r,a,c,s=t.children();for(o=0,r=s.length;r>o;o++)if(n=s.eq(o),e)for(c=n.data(S),a=0;a<e.length;a++)c===e[a]&&l.destroyViewEle(n);else A(n)==B?l.destroyViewEle(n):A(n)==T&&(i=n.scope(),i&&i.$broadcast("$ionicView.clearCache"))},I.getViewElements=function(){return t.children()},I.appendViewElement=function(n,r){var a=i(n);t.append(n);var c=e.$new();if(r&&r.$$controller){r.$scope=c;var s=o(r.$$controller,r);r.$$controllerAs&&(c[r.$$controllerAs]=s),t.children().data("$ngControllerController",s)}return a(c),c},I.title=function(e){var t=g();t&&t.title(e)},I.enableBackButton=function(e){var t=g();t&&t.enableBackButton(e)},I.showBackButton=function(e){var t=g();return t?arguments.length?t.showActiveBackButton(e):t.showActiveBackButton():!0},I.showBar=function(e){var t=g();return t?arguments.length?t.showBar(e):t.showBar():!0},I.isPrimary=function(e){return arguments.length&&(x=e),x},I.direction=function(e){return arguments.length&&(m=e),m},I.initSwipeBack=function(){function n(e){if(x&&(S=r(e),!(S>C))){p=s.backView();var n=s.currentView();if(p&&p.historyId===n.historyId&&n.canSwipeBack!==!1){w||(w=window.innerWidth),I.isSwipeFreeze=d.freezeAllScrolls(!0);var a={direction:"back"};k=[],T={showBar:I.showBar(),showBackButton:I.showBackButton()};var u=l.create(I,a,p,n,!0,!1);u.loadViewElements(a),u.render(a),c=u.transition("back",s.enabledBack(p),!0),f=g(),m=ionic.onGesture("drag",i,t[0]),$=ionic.onGesture("release",o,t[0])}}}function i(e){if(x&&c){var t=r(e);if(k.push({t:Date.now(),x:t}),t>=w-15)o(e);else{var n=Math.min(Math.max(a(t),0),1);c.run(n),f&&f.activeTransition&&f.activeTransition.run(n)}}}function o(e){if(x&&c&&k&&k.length>1){for(var t=Date.now(),n=r(e),s=k[k.length-1],l=k.length-2;l>=0&&!(t-s.t>200);l--)s=k[l];var u=n>=k[k.length-2].x,v=a(n),g=Math.abs(s.x-n)/(t-s.t);if(b=p.viewId,y=.03>v||v>.97,u&&(v>.5||g>.1)){var S=g>.5||.05>g||n>w-45?"fast":"slow";h(y?"":S),p.go(),f&&f.activeTransition&&f.activeTransition.complete(!y,S)}else h(y?"":"fast"),b=null,c.cancel(!y),f&&f.activeTransition&&f.activeTransition.cancel(!y,"fast",T),y=null}ionic.offGesture(m,"drag",i),ionic.offGesture($,"release",o),w=c=k=null,I.isSwipeFreeze=d.freezeAllScrolls(!1)}function r(e){return ionic.tap.pointerCoord(e.gesture.srcEvent).x}function a(e){return(e-S)/w}var c,f,p,v,m,$,w,S,k,C=u.views.swipeBackHitWidth(),T={};v=ionic.onGesture("dragstart",n,t[0]),e.$on("$destroy",function(){ionic.offGesture(v,"dragstart",n),ionic.offGesture(m,"drag",i),ionic.offGesture($,"release",o),I.element=c=f=null})}}]),a.controller("$ionicRefresher",["$scope","$attrs","$element","$ionicBind","$timeout",function(e,t,n,i,o){function r(e){e.touches=e.touches||[{screenX:e.screenX,screenY:e.screenY}],P=Math.floor(e.touches[0].screenY)}function a(e){e.touches=e.touches||[{screenX:e.screenX,screenY:e.screenY}],P=e.touches[0].screenY}function c(){P=null,(D||T)&&(T?(T=!1,I=0,x>A?($(),p(A,V)):(p(0,V,m),B=!1)):(I=0,B=!1,h(!1)))}function s(e){if(e.touches=e.touches||[{screenX:e.screenX,screenY:e.screenY}],(P||"mousemove"!=e.type)&&D&&!(e.touches.length>1)){if(null===P&&(P=e.touches[0].screenY),_=e.touches[0].screenY-P,ionic.Platform.isAndroid()&&4.4===ionic.Platform.version()&&!ionic.Platform.isCrosswalk()&&0===S.scrollTop&&_>0&&(T=!0,e.preventDefault()),0>=_-I||0!==S.scrollTop)return B&&(B=!1,h(!1)),T&&f(S,_- -1*I),void(0!==x&&d(0));_>0&&0===S.scrollTop&&!B&&(I=_),e.preventDefault(),B||(B=!0,h(!0)),T=!0,d((_-I)/3),!E&&x>A?(E=!0,ionic.requestAnimationFrame(g)):E&&A>x&&(E=!1,ionic.requestAnimationFrame(m))}}function u(e){D=0===e.target.scrollTop||T}function d(e){k.style[ionic.CSS.TRANSFORM]="translateY("+e+"px)",x=e}function f(e,t){e.scrollTop=t;var n=document.createEvent("UIEvents");n.initUIEvent("scroll",!0,!0,window,1),e.dispatchEvent(n)}function h(e){e?ionic.requestAnimationFrame(function(){k.classList.add("overscroll"),w()}):ionic.requestAnimationFrame(function(){k.classList.remove("overscroll"),b(),m()})}function p(e,t,n){function i(e){return--e*e*e+1}function o(){var c=Date.now(),s=Math.min(1,(c-r)/t),l=i(s);d(Math.floor(l*(e-a)+a)),1>s?ionic.requestAnimationFrame(o):(5>e&&e>-5&&(B=!1,h(!1)),n&&n())}var r=Date.now(),a=x;return a===e?void n():void ionic.requestAnimationFrame(o)}function v(){ionic.off(L,a,k),ionic.off(R,s,k),ionic.off(M,c,k),ionic.off("mousedown",r,k),ionic.off("mousemove",s,k),ionic.off("mouseup",c,k),ionic.off("scroll",u,S),S=null,k=null}function g(){n[0].classList.add("active"),e.$onPulling()}function m(){o(function(){n.removeClass("active refreshing refreshing-tail"),E&&(E=!1)},150)}function $(){n[0].classList.add("refreshing");var t=e.$onRefresh();t&&t.then&&t["finally"](function(){e.$broadcast("scroll.refreshComplete")})}function w(){n[0].classList.remove("invisible")}function b(){n[0].classList.add("invisible")}function y(){n[0].classList.add("refreshing-tail")}var S,k,C=this,T=!1,B=!1,I=0,x=0,A=60,E=!1,V=500,P=null,_=null,D=!0;l(t.pullingIcon)||t.$set("pullingIcon","ion-android-arrow-down"),e.showSpinner=!l(t.refreshingIcon)&&"none"!=t.spinner,e.showIcon=l(t.refreshingIcon),i(e,t,{pullingIcon:"@",pullingText:"@",refreshingIcon:"@",refreshingText:"@",spinner:"@",disablePullingRotation:"@",$onRefresh:"&onRefresh",$onPulling:"&onPulling"}),e.$on("scroll.refreshComplete",function(){o(function(){ionic.requestAnimationFrame(y),p(0,V,m),o(function(){B&&(B=!1,h(!1))},V)},V)});var L,R,M;window.navigator.pointerEnabled?(L="pointerdown",R="pointermove",M="pointerup"):window.navigator.msPointerEnabled?(L="MSPointerDown",R="MSPointerMove",M="MSPointerUp"):(L="touchstart",R="touchmove",M="touchend"),C.init=function(){if(S=n.parent().parent()[0],k=n.parent()[0],!(S&&S.classList.contains("ionic-scroll")&&k&&k.classList.contains("scroll")))throw new Error("Refresher must be immediate child of ion-content or ion-scroll");ionic.on(L,a,k),ionic.on(R,s,k),ionic.on(M,c,k),ionic.on("mousedown",r,k),ionic.on("mousemove",s,k),ionic.on("mouseup",c,k),ionic.on("scroll",u,S),e.$on("$destroy",v)},C.getRefresherDomMethods=function(){return{activate:g,deactivate:m,start:$,show:w,hide:b,tail:y}},C.__handleTouchmove=s,C.__getScrollChild=function(){return k},C.__getScrollParent=function(){return S}}]),a.controller("$ionicScroll",["$scope","scrollViewOptions","$timeout","$window","$location","$document","$ionicScrollDelegate","$ionicHistory",function(e,t,n,i,o,r,a,c){var s=this;s.__timeout=n,s._scrollViewOptions=t,s.isNative=function(){return!!t.nativeScrolling};var u,d=s.element=t.el,h=s.$element=f(d);u=s.isNative()?s.scrollView=new ionic.views.ScrollNative(t):s.scrollView=new ionic.views.Scroll(t),(h.parent().length?h.parent():h).data("$$ionicScrollController",s);var p=a._registerInstance(s,t.delegateHandle,function(){return c.isActiveScope(e)});l(t.bouncing)||ionic.Platform.ready(function(){u&&u.options&&(u.options.bouncing=!0,ionic.Platform.isAndroid()&&(u.options.bouncing=!1,u.options.deceleration=.95))});var v=angular.bind(u,u.resize);angular.element(i).on("resize",v);var g=function(t){var n=(t.originalEvent||t).detail||{};e.$onScroll&&e.$onScroll({event:t,scrollTop:n.scrollTop||0,scrollLeft:n.scrollLeft||0})};h.on("scroll",g),e.$on("$destroy",function(){p(),u&&u.__cleanup&&u.__cleanup(),angular.element(i).off("resize",v),h.off("scroll",g),u=s.scrollView=t=s._scrollViewOptions=t.el=s._scrollViewOptions.el=h=s.$element=d=null}),n(function(){u&&u.run&&u.run()}),s.getScrollView=function(){return u},s.getScrollPosition=function(){return u.getValues()},s.resize=function(){return n(v,0,!1).then(function(){h&&h.triggerHandler("scroll-resize")})},s.scrollTop=function(e){s.resize().then(function(){u&&u.scrollTo(0,0,!!e)})},s.scrollBottom=function(e){s.resize().then(function(){if(u){var t=u.getScrollMax();u.scrollTo(t.left,t.top,!!e)}})},s.scrollTo=function(e,t,n){s.resize().then(function(){u&&u.scrollTo(e,t,!!n)})},s.zoomTo=function(e,t,n,i){s.resize().then(function(){u&&u.zoomTo(e,!!t,n,i)})},s.zoomBy=function(e,t,n,i){s.resize().then(function(){u&&u.zoomBy(e,!!t,n,i)})},s.scrollBy=function(e,t,n){s.resize().then(function(){u&&u.scrollBy(e,t,!!n)})},s.anchorScroll=function(e){s.resize().then(function(){if(u){var t=o.hash(),n=t&&r[0].getElementById(t);if(!t||!n)return void u.scrollTo(0,0,!!e);var i=n,a=0,c=0;do null!==i&&(a+=i.offsetLeft),null!==i&&(c+=i.offsetTop),i=i.offsetParent;while(i.attributes!=s.element.attributes&&i.offsetParent);u.scrollTo(a,c,!!e)}})},s.freezeScroll=u.freeze,s.freezeScrollShut=u.freezeShut,s.freezeAllScrolls=function(e){for(var t=0;t<a._instances.length;t++)a._instances[t].freezeScroll(e)},s._setRefresher=function(e,t,n){s.refresher=t;var i=s.refresher.clientHeight||60;u.activatePullToRefresh(i,n)}}]),a.controller("$ionicSideMenus",["$scope","$attrs","$ionicSideMenuDelegate","$ionicPlatform","$ionicBody","$ionicHistory","$ionicScrollDelegate","IONIC_BACK_PRIORITY","$rootScope",function(e,t,n,i,o,r,a,c,s){var l,d,f,p,v,g,m,$=this,w=!0;$.$scope=e,$.initialize=function(e){$.left=e.left,$.right=e.right,$.setContent(e.content),$.dragThresholdX=e.dragThresholdX||10,r.registerHistory($.$scope)},$.setContent=function(e){e&&($.content=e,$.content.onDrag=function(e){$._handleDrag(e)},$.content.endDrag=function(e){$._endDrag(e)})},$.isOpenLeft=function(){return $.getOpenAmount()>0},$.isOpenRight=function(){return $.getOpenAmount()<0},$.toggleLeft=function(e){if(!m&&$.left.isEnabled){var t=$.getOpenAmount();0===arguments.length&&(e=0>=t),$.content.enableAnimation(),e?($.openPercentage(100),s.$emit("$ionicSideMenuOpen","left")):($.openPercentage(0),s.$emit("$ionicSideMenuClose","left"))}},$.toggleRight=function(e){if(!m&&$.right.isEnabled){var t=$.getOpenAmount();0===arguments.length&&(e=t>=0),$.content.enableAnimation(),e?($.openPercentage(-100),s.$emit("$ionicSideMenuOpen","right")):($.openPercentage(0),s.$emit("$ionicSideMenuClose","right"))}},$.toggle=function(e){"right"==e?$.toggleRight():$.toggleLeft()},$.close=function(){$.openPercentage(0),s.$emit("$ionicSideMenuClose","left"),s.$emit("$ionicSideMenuClose","right")},$.getOpenAmount=function(){return $.content&&$.content.getTranslateX()||0},$.getOpenRatio=function(){var e=$.getOpenAmount();return e>=0?e/$.left.width:e/$.right.width},$.isOpen=function(){return 0!==$.getOpenAmount()},$.getOpenPercentage=function(){return 100*$.getOpenRatio()},$.openPercentage=function(e){var t=e/100;$.left&&e>=0?$.openAmount($.left.width*t):$.right&&0>e&&$.openAmount($.right.width*t),o.enableClass(0!==e,"menu-open"),$.content.setCanScroll(0==e)},$.openAmount=function(e){var t=$.left&&$.left.width||0,n=$.right&&$.right.width||0;return($.left&&$.left.isEnabled||!(e>0))&&($.right&&$.right.isEnabled||!(0>e))?d&&e>t?void $.content.setTranslateX(t):l&&-n>e?void $.content.setTranslateX(-n):($.content.setTranslateX(e),void(e>=0?(d=!0,l=!1,e>0&&($.right&&$.right.pushDown&&$.right.pushDown(),$.left&&$.left.bringUp&&$.left.bringUp())):(l=!0,d=!1,$.right&&$.right.bringUp&&$.right.bringUp(),$.left&&$.left.pushDown&&$.left.pushDown()))):void $.content.setTranslateX(0)},$.snapToRest=function(e){$.content.enableAnimation(),f=!1;var t=$.getOpenRatio();if(0===t)return void $.openPercentage(0);var n=.3,i=e.gesture.velocityX,o=e.gesture.direction;t>0&&.5>t&&"right"==o&&n>i?$.openPercentage(0):t>.5&&"left"==o&&n>i?$.openPercentage(100):0>t&&t>-.5&&"left"==o&&n>i?$.openPercentage(0):.5>t&&"right"==o&&n>i?$.openPercentage(-100):"right"==o&&t>=0&&(t>=.5||i>n)?$.openPercentage(100):"left"==o&&0>=t&&(-.5>=t||i>n)?$.openPercentage(-100):$.openPercentage(0)},$.enableMenuWithBackViews=function(e){return arguments.length&&(w=!!e),w},$.isAsideExposed=function(){return!!m},$.exposeAside=function(e){($.left&&$.left.isEnabled||$.right&&$.right.isEnabled)&&($.close(),m=e,$.left&&$.left.isEnabled&&$.right&&$.right.isEnabled?$.content.setMarginLeftAndRight(m?$.left.width:0,m?$.right.width:0):$.left&&$.left.isEnabled?$.content.setMarginLeft(m?$.left.width:0):$.right&&$.right.isEnabled&&$.content.setMarginRight(m?$.right.width:0),$.$scope.$emit("$ionicExposeAside",m))},$.activeAsideResizing=function(e){o.enableClass(e,"aside-resizing")},$._endDrag=function(e){m||(f&&$.snapToRest(e),p=null,v=null,g=null)},$._handleDrag=function(t){!m&&e.dragContent&&(p?v=t.gesture.touches[0].pageX:(p=t.gesture.touches[0].pageX,v=p),!f&&Math.abs(v-p)>$.dragThresholdX&&(p=v,f=!0,$.content.disableAnimation(),g=$.getOpenAmount()),f&&$.openAmount(g+(v-p)))},$.canDragContent=function(t){return arguments.length&&(e.dragContent=!!t),e.dragContent},$.edgeThreshold=25,$.edgeThresholdEnabled=!1,$.edgeDragThreshold=function(e){return arguments.length&&(u(e)&&e>0?($.edgeThreshold=e,$.edgeThresholdEnabled=!0):$.edgeThresholdEnabled=!!e),$.edgeThresholdEnabled},$.isDraggableTarget=function(t){var n=$.edgeThresholdEnabled&&!$.isOpen(),i=t.gesture.startEvent&&t.gesture.startEvent.center&&t.gesture.startEvent.center.pageX,o=!n||i<=$.edgeThreshold||i>=$.content.element.offsetWidth-$.edgeThreshold,a=r.backView(),c=w?!0:!a;if(!c){var s=r.currentView()||{};return o&&a.historyId!==s.historyId}return(e.dragContent||$.isOpen())&&o&&!t.gesture.srcEvent.defaultPrevented&&c&&!t.target.tagName.match(/input|textarea|select|object|embed/i)&&!t.target.isContentEditable&&!(t.target.dataset?t.target.dataset.preventScroll:"true"==t.target.getAttribute("data-prevent-scroll"))},e.sideMenuContentTranslateX=0;var b=h,y=angular.bind($,$.close);e.$watch(function(){return 0!==$.getOpenAmount()},function(e){b(),e&&(b=i.registerBackButtonAction(y,c.sideMenu))});var S=n._registerInstance($,t.delegateHandle,function(){return r.isActiveScope(e)});e.$on("$destroy",function(){S(),b(),$.$scope=null,$.content&&($.content.setCanScroll(!0),$.content.element=null,$.content=null)}),$.initialize({left:{width:275},right:{width:275}})}]),function(e){function t(e,i,o,r){var a,c,s,l=document.createElement(f[e]||e);for(a in i)if(angular.isArray(i[a]))for(c=0;c<i[a].length;c++)if(i[a][c].fn)for(s=0;s<i[a][c].t;s++)t(a,i[a][c].fn(s,r),l,r);else t(a,i[a][c],l,r);else n(l,a,i[a]);o.appendChild(l)}function n(e,t,n){e.setAttribute(f[t]||t,n)}function i(e,t){var n=e.split(";"),i=n.slice(t),o=n.slice(0,n.length-i.length);return n=i.concat(o).reverse(),n.join(";")+";"+n[0]}function o(e,t){return e/=t/2,1>e?.5*e*e*e:(e-=2,.5*(e*e*e+2))}var r="translate(32,32)",c="stroke-opacity",s="round",l="indefinite",u="750ms",d="none",f={a:"animate",an:"attributeName",at:"animateTransform",c:"circle",da:"stroke-dasharray",os:"stroke-dashoffset",f:"fill",lc:"stroke-linecap",rc:"repeatCount",sw:"stroke-width",t:"transform",v:"values"},h={v:"0,32,32;360,32,32",an:"transform",type:"rotate",rc:l,dur:u},p={sw:4,lc:s,line:[{fn:function(e,t){return{y1:"ios"==t?17:12,y2:"ios"==t?29:20,t:r+" rotate("+(30*e+(6>e?180:-180))+")",a:[{fn:function(){return{an:c,dur:u,v:i("0;.1;.15;.25;.35;.45;.55;.65;.7;.85;1",e),rc:l}},t:1}]}},t:12}]},v={android:{c:[{sw:6,da:128,os:82,r:26,cx:32,cy:32,f:d}]},ios:p,"ios-small":p,bubbles:{sw:0,c:[{fn:function(e){return{cx:24*Math.cos(2*Math.PI*e/8),cy:24*Math.sin(2*Math.PI*e/8),t:r,a:[{fn:function(){return{an:"r",dur:u,v:i("1;2;3;4;5;6;7;8",e),rc:l}},t:1}]}},t:8}]},circles:{c:[{fn:function(e){return{r:5,cx:24*Math.cos(2*Math.PI*e/8),cy:24*Math.sin(2*Math.PI*e/8),t:r,sw:0,a:[{fn:function(){return{an:"fill-opacity",dur:u,v:i(".3;.3;.3;.4;.7;.85;.9;1",e),rc:l}},t:1}]}},t:8}]},crescent:{c:[{sw:4,da:128,os:82,r:26,cx:32,cy:32,f:d,at:[h]}]},dots:{c:[{fn:function(e){return{cx:16+16*e,cy:32,sw:0,a:[{fn:function(){return{an:"fill-opacity",dur:u,v:i(".5;.6;.8;1;.8;.6;.5",e),rc:l}},t:1},{fn:function(){return{an:"r",dur:u,v:i("4;5;6;5;4;3;3",e),rc:l}},t:1}]}},t:3}]},lines:{sw:7,lc:s,line:[{fn:function(e){return{x1:10+14*e,x2:10+14*e,a:[{fn:function(){return{an:"y1",dur:u,v:i("16;18;28;18;16",e),rc:l}},t:1},{fn:function(){return{an:"y2",dur:u,v:i("48;44;36;46;48",e),rc:l}},t:1},{fn:function(){return{an:c,dur:u,v:i("1;.8;.5;.4;1",e),rc:l}},t:1}]}},t:4}]},ripple:{f:d,"fill-rule":"evenodd",sw:3,circle:[{fn:function(e){return{cx:32,cy:32,a:[{fn:function(){return{an:"r",begin:-1*e+"s",dur:"2s",v:"0;24",keyTimes:"0;1",keySplines:"0.1,0.2,0.3,1",calcMode:"spline",rc:l}},t:1},{fn:function(){return{an:c,begin:-1*e+"s",dur:"2s",v:".2;1;.2;0",rc:l}},t:1}]}},t:2}]},spiral:{defs:[{linearGradient:[{id:"sGD",gradientUnits:"userSpaceOnUse",x1:55,y1:46,x2:2,y2:46,stop:[{offset:.1,"class":"stop1"},{offset:1,"class":"stop2"}]}]}],g:[{sw:4,lc:s,f:d,path:[{stroke:"url(#sGD)",d:"M4,32 c0,15,12,28,28,28c8,0,16-4,21-9"},{d:"M60,32 C60,16,47.464,4,32,4S4,16,4,32"}],at:[h]}]}},g={android:function(t){function i(){if(!r.stop){var t=o(Date.now()-a,650),d=1,f=0,h=188-58*t,p=182-182*t;c%2&&(d=-1,f=-64,h=128- -58*t,p=182*t);var v=[0,-101,-90,-11,-180,79,-270,-191][c];n(u,"da",Math.max(Math.min(h,188),128)),n(u,"os",Math.max(Math.min(p,182),0)),n(u,"t","scale("+d+",1) translate("+f+",0) rotate("+v+",32,32)"),s+=4.1,s>359&&(s=0),n(l,"t","rotate("+s+",32,32)"),t>=1&&(c++,c>7&&(c=0),a=Date.now()),e.requestAnimationFrame(i)}}var r=this;this.stop=!1;var a,c=0,s=0,l=t.querySelector("g"),u=t.querySelector("circle");return function(){return a=Date.now(),i(),r}}};a.controller("$ionicSpinner",["$element","$attrs","$ionicConfig",function(e,n,i){var o,r;this.init=function(){o=n.icon||i.spinner.icon();var r=document.createElement("div");return t("svg",{viewBox:"0 0 64 64",g:[v[o]]},r,o),e.html(r.innerHTML),this.start(),o},this.start=function(){g[o]&&(r=g[o](e[0])())},this.stop=function(){g[o]&&(r.stop=!0)}}])}(ionic),a.controller("$ionicTab",["$scope","$ionicHistory","$attrs","$location","$state",function(e,t,n,i,o){this.$scope=e,this.hrefMatchesState=function(){return n.href&&0===i.path().indexOf(n.href.replace(/^#/,"").replace(/\/$/,""))},this.srefMatchesState=function(){return n.uiSref&&o.includes(n.uiSref.split("(")[0])},this.navNameMatchesState=function(){return this.navViewName&&t.isCurrentStateNavView(this.navViewName)},this.tabMatchesState=function(){return this.hrefMatchesState()||this.srefMatchesState()||this.navNameMatchesState()}}]),a.controller("$ionicTabs",["$scope","$element","$ionicHistory",function(e,t,n){var i,o=this,r=null,a=null,c=!0;o.tabs=[],o.selectedIndex=function(){return o.tabs.indexOf(r)},o.selectedTab=function(){return r},o.previousSelectedTab=function(){return a},o.add=function(e){n.registerHistory(e),o.tabs.push(e)},o.remove=function(e){var t=o.tabs.indexOf(e);if(-1!==t){if(e.$tabSelected)if(o.deselect(e),1===o.tabs.length);else{var n=t===o.tabs.length-1?t-1:t+1;o.select(o.tabs[n])}o.tabs.splice(t,1)}},o.deselect=function(e){e.$tabSelected&&(a=r,r=i=null,e.$tabSelected=!1,(e.onDeselect||h)(),e.$broadcast&&e.$broadcast("$ionicHistory.deselect"))},o.select=function(t,a){var c;if(u(t)){if(c=t,c>=o.tabs.length)return;t=o.tabs[c]}else c=o.tabs.indexOf(t);1===arguments.length&&(a=!(!t.navViewName&&!t.uiSref)),r&&r.$historyId==t.$historyId?a&&n.goToHistoryRoot(t.$historyId):i!==c&&(s(o.tabs,function(e){o.deselect(e)}),r=t,i=c,o.$scope&&o.$scope.$parent&&(o.$scope.$parent.$activeHistoryId=t.$historyId),t.$tabSelected=!0,(t.onSelect||h)(),a&&e.$emit("$ionicHistory.change",{type:"tab",tabIndex:c,historyId:t.$historyId,navViewName:t.navViewName,hasNavView:!!t.navViewName,title:t.title,url:t.href,uiSref:t.uiSref}))},o.hasActiveScope=function(){for(var e=0;e<o.tabs.length;e++)if(n.isActiveScope(o.tabs[e]))return!0;return!1},o.showBar=function(e){return arguments.length&&(e?t.removeClass("tabs-item-hide"):t.addClass("tabs-item-hide"),c=!!e),c}}]),a.controller("$ionicView",["$scope","$element","$attrs","$compile","$rootScope",function(e,t,n,i,o){function r(){var t=l(n.viewTitle)&&"viewTitle"||l(n.title)&&"title";t&&(a(n[t]),$.push(n.$observe(t,a))),l(n.hideBackButton)&&$.push(e.$watch(n.hideBackButton,function(e){f.showBackButton(!e)})),l(n.hideNavBar)&&$.push(e.$watch(n.hideNavBar,function(e){f.showBar(!e)}))}function a(e){l(e)&&e!==v&&(v=e,f.title(v))}function s(){for(var e=0;e<$.length;e++)$[e]();$=[]}function u(t){return t?i(t)(e.$new()):void 0}function d(t){return!!e.$eval(n[t])}var f,h,p,v,g=this,m={},$=[],w=e.$on("ionNavBar.init",function(e,t){e.stopPropagation(),h=t});g.init=function(){w();var n=t.inheritedData("$ionModalController");f=t.inheritedData("$ionNavViewController"),f&&!n&&(e.$on("$ionicView.beforeEnter",g.beforeEnter),e.$on("$ionicView.afterEnter",r),e.$on("$ionicView.beforeLeave",s))},g.beforeEnter=function(t,i){if(i&&!i.viewNotified){i.viewNotified=!0,o.$$phase||e.$digest(),v=l(n.viewTitle)?n.viewTitle:n.title;var r={};for(var a in m)r[a]=u(m[a]);f.beforeEnter(c(i,{title:v,showBack:!d("hideBackButton"),navBarItems:r,navBarDelegate:h||null,showNavBar:!d("hideNavBar"),hasHeaderBar:!!p})),s()}},g.navElement=function(e,t){m[e]=t}}]),a.directive("ionActionSheet",["$document",function(e){return{restrict:"E",scope:!0,replace:!0,link:function(t,n){var i=function(e){27==e.which&&(t.cancel(),t.$apply())},o=function(e){e.target==n[0]&&(t.cancel(),t.$apply())};t.$on("$destroy",function(){n.remove(),e.unbind("keyup",i)}),e.bind("keyup",i),n.bind("click",o)},template:'<div class="action-sheet-backdrop"><div class="action-sheet-wrapper"><div class="action-sheet" ng-class="{\'action-sheet-has-icons\': $actionSheetHasIcon}"><div class="action-sheet-group action-sheet-options"><div class="action-sheet-title" ng-if="titleText" ng-bind-html="titleText"></div><button class="button action-sheet-option" ng-click="buttonClicked($index)" ng-class="b.className" ng-repeat="b in buttons" ng-bind-html="b.text"></button><button class="button destructive action-sheet-destructive" ng-if="destructiveText" ng-click="destructiveButtonClicked()" ng-bind-html="destructiveText"></button></div><div class="action-sheet-group action-sheet-cancel" ng-if="cancelText"><button class="button" ng-click="cancel()" ng-bind-html="cancelText"></button></div></div></div></div>'}}]),a.directive("ionCheckbox",["$ionicConfig",function(e){return{restrict:"E",replace:!0,require:"?ngModel",transclude:!0,template:'<label class="item item-checkbox"><div class="checkbox checkbox-input-hidden disable-pointer-events"><input type="checkbox"><i class="checkbox-icon"></i></div><div class="item-content disable-pointer-events" ng-transclude></div></label>',compile:function(t,n){var i=t.find("input");s({name:n.name,"ng-value":n.ngValue,"ng-model":n.ngModel,"ng-checked":n.ngChecked,"ng-disabled":n.ngDisabled,"ng-true-value":n.ngTrueValue,"ng-false-value":n.ngFalseValue,"ng-change":n.ngChange,"ng-required":n.ngRequired,required:n.required},function(e,t){l(e)&&i.attr(t,e)});var o=t[0].querySelector(".checkbox");o.classList.add("checkbox-"+e.form.checkbox())}}}]),a.directive("collectionRepeat",e).factory("$ionicCollectionManager",t);var w="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",b=/height:.*?px;\s*width:.*?px/,y=3;e.$inject=["$ionicCollectionManager","$parse","$window","$$rAF","$rootScope","$timeout"],t.$inject=["$rootScope","$window","$$rAF"],a.directive("ionContent",["$timeout","$controller","$ionicBind","$ionicConfig",function(e,t,n,i){return{restrict:"E",require:"^?ionNavView",scope:!0,priority:800,compile:function(e,o){function r(e,i,r){function u(){e.$onScrollComplete({scrollTop:c.scrollView.__scrollTop,scrollLeft:c.scrollView.__scrollLeft})}var d=e.$parent;if(e.$watch(function(){return(d.$hasHeader?" has-header":"")+(d.$hasSubheader?" has-subheader":"")+(d.$hasFooter?" has-footer":"")+(d.$hasSubfooter?" has-subfooter":"")+(d.$hasTabs?" has-tabs":"")+(d.$hasTabsTop?" has-tabs-top":"")},function(e,t){i.removeClass(t),i.addClass(e)}),e.$hasHeader=e.$hasSubheader=e.$hasFooter=e.$hasSubfooter=e.$hasTabs=e.$hasTabsTop=!1,n(e,r,{$onScroll:"&onScroll",$onScrollComplete:"&onScrollComplete",hasBouncing:"@",padding:"@",direction:"@",scrollbarX:"@",scrollbarY:"@",startX:"@",startY:"@",scrollEventInterval:"@"}),e.direction=e.direction||"y",l(r.padding)&&e.$watch(r.padding,function(e){(a||i).toggleClass("padding",!!e)}),"false"===r.scroll);else{var f={};s?(i.addClass("overflow-scroll"),f={el:i[0],delegateHandle:o.delegateHandle,startX:e.$eval(e.startX)||0,startY:e.$eval(e.startY)||0,nativeScrolling:!0}):f={el:i[0],delegateHandle:o.delegateHandle,locking:"true"===(o.locking||"true"),bouncing:e.$eval(e.hasBouncing),startX:e.$eval(e.startX)||0,startY:e.$eval(e.startY)||0,scrollbarX:e.$eval(e.scrollbarX)!==!1,scrollbarY:e.$eval(e.scrollbarY)!==!1,scrollingX:e.direction.indexOf("x")>=0,scrollingY:e.direction.indexOf("y")>=0,scrollEventInterval:parseInt(e.scrollEventInterval,10)||10,scrollingComplete:u},c=t("$ionicScroll",{$scope:e,scrollViewOptions:f}),e.scrollCtrl=c,e.$on("$destroy",function(){f&&(f.scrollingComplete=h,delete f.el),a=null,i=null,o.$$element=null})}}var a,c;e.addClass("scroll-content ionic-scroll"),"false"!=o.scroll?(a=f('<div class="scroll"></div>'),a.append(e.contents()),e.append(a)):e.addClass("scroll-content-false");var s="false"!==o.overflowScroll&&("true"===o.overflowScroll||!i.scrolling.jsScrolling());return s&&(s=!e[0].querySelector("[collection-repeat]")),{pre:r}}}}]),a.directive("exposeAsideWhen",["$window",function(e){return{restrict:"A",require:"^ionSideMenus",link:function(t,n,i,o){function r(){var t="large"==i.exposeAsideWhen?"(min-width:768px)":i.exposeAsideWhen;o.exposeAside(e.matchMedia(t).matches),o.activeAsideResizing(!1)}function a(){o.activeAsideResizing(!0),l()}var c="large"==i.exposeAsideWhen?"(min-width:768px)":i.exposeAsideWhen,s=e.matchMedia(c);s.addListener(function(){a()});var l=ionic.debounce(function(){t.$apply(r)},300,!1);t.$evalAsync(r)}}}]);var S="onHold onTap onDoubleTap onTouch onRelease onDragStart onDrag onDragEnd onDragUp onDragRight onDragDown onDragLeft onSwipe onSwipeUp onSwipeRight onSwipeDown onSwipeLeft".split(" ");S.forEach(function(e){a.directive(e,n(e))}),a.directive("ionHeaderBar",i(!0)).directive("ionFooterBar",i(!1)),a.directive("ionInfiniteScroll",["$timeout",function(e){return{restrict:"E",require:["?^$ionicScroll","ionInfiniteScroll"],template:function(e,t){return t.icon?'<i class="icon {{icon()}} icon-refreshing {{scrollingType}}"></i>':'<ion-spinner icon="{{spinner()}}"></ion-spinner>'},scope:!0,controller:"$ionInfiniteScroll",link:function(t,n,i,o){var r=o[1],a=r.scrollCtrl=o[0],c=r.jsScrolling=!a.isNative();if(c)r.scrollView=a.scrollView,t.scrollingType="js-scrolling",a.$element.on("scroll",r.checkBounds);else{var s=ionic.DomUtil.getParentOrSelfWithClass(n[0].parentNode,"overflow-scroll");if(r.scrollEl=s,!s)throw"Infinite scroll must be used inside a scrollable div";r.scrollEl.addEventListener("scroll",r.checkBounds)}var u=l(i.immediateCheck)?t.$eval(i.immediateCheck):!0;u&&e(function(){r.checkBounds()})}}}]);var k=-1;a.directive("ionInput",[function(){return{restrict:"E",controller:["$scope","$element",function(e,t){this.$scope=e,this.$element=t,this.setInputAriaLabeledBy=function(e){var n=t[0].querySelectorAll("input,textarea");n.length&&n[0].setAttribute("aria-labelledby",e)},this.focus=function(){var e=t[0].querySelectorAll("input,textarea");e.length&&e[0].focus()}}]}}]),a.directive("ionLabel",[function(){return{restrict:"E",require:"?^ionInput",compile:function(){return function(e,t,n,i){var o=t[0];t.addClass("input-label"),t.attr("aria-label",t.text());var r=o.id||"_label-"+ ++k;o.id||t.attr("id",r),i&&(i.setInputAriaLabeledBy(r),t.on("click",function(){i.focus()}))}}}}]),a.directive("inputLabel",[function(){return{restrict:"C",require:"?^ionInput",compile:function(){return function(e,t,n,i){var o=t[0];t.attr("aria-label",t.text());var r=o.id||"_label-"+ ++k;o.id||t.attr("id",r),i&&i.setInputAriaLabeledBy(r)}}}}]),a.directive("ionItem",["$$rAF",function(e){return{restrict:"E",controller:["$scope","$element",function(e,t){this.$scope=e,this.$element=t}],scope:!0,compile:function(t,n){var i=l(n.href)||l(n.ngHref)||l(n.uiSref),o=i||/ion-(delete|option|reorder)-button/i.test(t.html());if(o){var r=f(i?"<a></a>":"<div></div>");r.addClass("item-content"),(l(n.href)||l(n.ngHref))&&(r.attr("ng-href","{{$href()}}"),l(n.target)&&r.attr("target","{{$target()}}")),r.append(t.contents()),t.addClass("item item-complex").append(r);
}else t.addClass("item");return function(t,n,i){t.$href=function(){return i.href||i.ngHref},t.$target=function(){return i.target};var o=n[0].querySelector(".item-content");o&&t.$on("$collectionRepeatLeave",function(){o&&o.$$ionicOptionsOpen&&(o.style[ionic.CSS.TRANSFORM]="",o.style[ionic.CSS.TRANSITION]="none",e(function(){o.style[ionic.CSS.TRANSITION]=""}),o.$$ionicOptionsOpen=!1)})}}}}]);var C='<div class="item-left-edit item-delete enable-pointer-events"></div>';a.directive("ionDeleteButton",function(){function e(e){e.stopPropagation()}return{restrict:"E",require:["^^ionItem","^?ionList"],priority:Number.MAX_VALUE,compile:function(t,n){return n.$set("class",(n["class"]||"")+" button icon button-icon",!0),function(t,n,i,o){function r(){c=c||n.controller("ionList"),c&&c.showDelete()&&s.addClass("visible active")}var a=o[0],c=o[1],s=f(C);s.append(n),a.$element.append(s).addClass("item-left-editable"),n.on("click",e),r(),t.$on("$ionic.reconnectScope",r)}}}}),a.directive("itemFloatingLabel",function(){return{restrict:"C",link:function(e,t){var n=t[0],i=n.querySelector("input, textarea"),o=n.querySelector(".input-label");if(i&&o){var r=function(){i.value?o.classList.add("has-input"):o.classList.remove("has-input")};i.addEventListener("input",r);var a=f(i).controller("ngModel");a&&(a.$render=function(){i.value=a.$viewValue||"",r()}),e.$on("$destroy",function(){i.removeEventListener("input",r)})}}}});var T='<div class="item-options invisible"></div>';a.directive("ionOptionButton",[function(){function e(e){e.stopPropagation()}return{restrict:"E",require:"^ionItem",priority:Number.MAX_VALUE,compile:function(t,n){return n.$set("class",(n["class"]||"")+" button",!0),function(t,n,i,o){o.optionsContainer||(o.optionsContainer=f(T),o.$element.append(o.optionsContainer)),o.optionsContainer.append(n),o.$element.addClass("item-right-editable"),n.on("click",e)}}}}]);var B='<div data-prevent-scroll="true" class="item-right-edit item-reorder enable-pointer-events"></div>';a.directive("ionReorderButton",["$parse",function(e){return{restrict:"E",require:["^ionItem","^?ionList"],priority:Number.MAX_VALUE,compile:function(t,n){return n.$set("class",(n["class"]||"")+" button icon button-icon",!0),t[0].setAttribute("data-prevent-scroll",!0),function(t,n,i,o){var r=o[0],a=o[1],c=e(i.onReorder);t.$onReorder=function(e,n){c(t,{$fromIndex:e,$toIndex:n})},i.ngClick||i.onClick||i.onclick||(n[0].onclick=function(e){return e.stopPropagation(),!1});var s=f(B);s.append(n),r.$element.append(s).addClass("item-right-editable"),a&&a.showReorder()&&s.addClass("visible active")}}}}]),a.directive("keyboardAttach",function(){return function(e,t){function n(e){if(!ionic.Platform.isAndroid()||ionic.Platform.isFullScreen){var n=e.keyboardHeight||e.detail&&e.detail.keyboardHeight;t.css("bottom",n+"px"),r=t.controller("$ionicScroll"),r&&(r.scrollView.__container.style.bottom=n+o(t[0])+"px")}}function i(){(!ionic.Platform.isAndroid()||ionic.Platform.isFullScreen)&&(t.css("bottom",""),r&&(r.scrollView.__container.style.bottom=""))}ionic.on("native.keyboardshow",n,window),ionic.on("native.keyboardhide",i,window),ionic.on("native.showkeyboard",n,window),ionic.on("native.hidekeyboard",i,window);var r;e.$on("$destroy",function(){ionic.off("native.keyboardshow",n,window),ionic.off("native.keyboardhide",i,window),ionic.off("native.showkeyboard",n,window),ionic.off("native.hidekeyboard",i,window)})}}),a.directive("ionList",["$timeout",function(e){return{restrict:"E",require:["ionList","^?$ionicScroll"],controller:"$ionicList",compile:function(t,n){var i=f('<div class="list">').append(t.contents()).addClass(n.type);return t.append(i),function(t,i,o,r){function a(){function o(e,t){t()&&e.addClass("visible")||e.removeClass("active"),ionic.requestAnimationFrame(function(){t()&&e.addClass("active")||e.removeClass("visible")})}var r=c.listView=new ionic.views.ListView({el:i[0],listEl:i.children()[0],scrollEl:s&&s.element,scrollView:s&&s.scrollView,onReorder:function(t,n,i){var o=f(t).scope();o&&o.$onReorder&&e(function(){o.$onReorder(n,i)})},canSwipe:function(){return c.canSwipeItems()}});t.$on("$destroy",function(){r&&(r.deregister&&r.deregister(),r=null)}),l(n.canSwipe)&&t.$watch("!!("+n.canSwipe+")",function(e){c.canSwipeItems(e)}),l(n.showDelete)&&t.$watch("!!("+n.showDelete+")",function(e){c.showDelete(e)}),l(n.showReorder)&&t.$watch("!!("+n.showReorder+")",function(e){c.showReorder(e)}),t.$watch(function(){return c.showDelete()},function(e,t){if(e||t){e&&c.closeOptionButtons(),c.canSwipeItems(!e),i.children().toggleClass("list-left-editing",e),i.toggleClass("disable-pointer-events",e);var n=f(i[0].getElementsByClassName("item-delete"));o(n,c.showDelete)}}),t.$watch(function(){return c.showReorder()},function(e,t){if(e||t){e&&c.closeOptionButtons(),c.canSwipeItems(!e),i.children().toggleClass("list-right-editing",e),i.toggleClass("disable-pointer-events",e);var n=f(i[0].getElementsByClassName("item-reorder"));o(n,c.showReorder)}})}var c=r[0],s=r[1];e(a)}}}}]),a.directive("menuClose",["$ionicHistory","$timeout",function(e,t){return{restrict:"AC",link:function(n,i){i.bind("click",function(){var n=i.inheritedData("$ionSideMenusController");n&&(e.nextViewOptions({historyRoot:!0,disableAnimate:!0,expire:300}),t(function(){e.nextViewOptions({historyRoot:!1,disableAnimate:!1})},300),n.close())})}}}]),a.directive("menuToggle",function(){return{restrict:"AC",link:function(e,t,n){e.$on("$ionicView.beforeEnter",function(e,n){if(n.enableBack){var i=t.inheritedData("$ionSideMenusController");i.enableMenuWithBackViews()||t.addClass("hide")}else t.removeClass("hide")}),t.bind("click",function(){var e=t.inheritedData("$ionSideMenusController");e&&e.toggle(n.menuToggle)})}}}),a.directive("ionModal",[function(){return{restrict:"E",transclude:!0,replace:!0,controller:[function(){}],template:'<div class="modal-backdrop"><div class="modal-backdrop-bg"></div><div class="modal-wrapper" ng-transclude></div></div>'}}]),a.directive("ionModalView",function(){return{restrict:"E",compile:function(e){e.addClass("modal")}}}),a.directive("ionNavBackButton",["$ionicConfig","$document",function(e,t){return{restrict:"E",require:"^ionNavBar",compile:function(n,i){function o(e){return/ion-|icon/.test(e.className)}var r=t[0].createElement("button");for(var a in i.$attr)r.setAttribute(i.$attr[a],i[a]);i.ngClick||r.setAttribute("ng-click","$ionicGoBack()"),r.className="button back-button hide buttons "+(n.attr("class")||""),r.innerHTML=n.html()||"";for(var c,s,l,u,d=o(n[0]),f=0;f<n[0].childNodes.length;f++)c=n[0].childNodes[f],1===c.nodeType?o(c)?d=!0:c.classList.contains("default-title")?l=!0:c.classList.contains("previous-title")&&(u=!0):s||3!==c.nodeType||(s=!!c.nodeValue.trim());var h=e.backButton.icon();if(!d&&h&&"none"!==h&&(r.innerHTML='<i class="icon '+h+'"></i> '+r.innerHTML,r.className+=" button-clear"),!s){var p=t[0].createElement("span");p.className="back-text",!l&&e.backButton.text()&&(p.innerHTML+='<span class="default-title">'+e.backButton.text()+"</span>"),!u&&e.backButton.previousTitleText()&&(p.innerHTML+='<span class="previous-title"></span>'),r.appendChild(p)}return n.attr("class","hide"),n.empty(),{pre:function(e,t,n,i){i.navElement("backButton",r.outerHTML),r=null}}}}}]),a.directive("ionNavBar",function(){return{restrict:"E",controller:"$ionicNavBar",scope:!0,link:function(e,t,n,i){i.init()}}}),a.directive("ionNavButtons",["$document",function(e){return{require:"^ionNavBar",restrict:"E",compile:function(t,n){var i="left";/^primary|secondary|right$/i.test(n.side||"")&&(i=n.side.toLowerCase());var o=e[0].createElement("span");o.className=i+"-buttons",o.innerHTML=t.html();var r=i+"Buttons";return t.attr("class","hide"),t.empty(),{pre:function(e,t,n,i){var a=t.parent().data("$ionViewController");a?a.navElement(r,o.outerHTML):i.navElement(r,o.outerHTML),o=null}}}}}]),a.directive("navDirection",["$ionicViewSwitcher",function(e){return{restrict:"A",priority:1e3,link:function(t,n,i){n.bind("click",function(){e.nextDirection(i.navDirection)})}}}]),a.directive("ionNavTitle",["$document",function(e){return{require:"^ionNavBar",restrict:"E",compile:function(t,n){var i="title",o=e[0].createElement("span");for(var r in n.$attr)o.setAttribute(n.$attr[r],n[r]);return o.classList.add("nav-bar-title"),o.innerHTML=t.html(),t.attr("class","hide"),t.empty(),{pre:function(e,t,n,r){var a=t.parent().data("$ionViewController");a?a.navElement(i,o.outerHTML):r.navElement(i,o.outerHTML),o=null}}}}}]),a.directive("navTransition",["$ionicViewSwitcher",function(e){return{restrict:"A",priority:1e3,link:function(t,n,i){n.bind("click",function(){e.nextTransition(i.navTransition)})}}}]),a.directive("ionNavView",["$state","$ionicConfig",function(e,t){return{restrict:"E",terminal:!0,priority:2e3,transclude:!0,controller:"$ionicNavView",compile:function(n,i,o){return n.addClass("view-container"),ionic.DomUtil.cachedAttr(n,"nav-view-transition",t.views.transition()),function(t,n,i,r){function a(t){var n=e.$current&&e.$current.locals[s.name];n&&(t||n!==c)&&(c=n,s.state=n.$$state,r.register(n))}var c;o(t,function(e){n.append(e)});var s=r.init();t.$on("$stateChangeSuccess",function(){a(!1)}),t.$on("$viewContentLoading",function(){a(!1)}),a(!0)}}}}]),a.config(["$provide",function(e){e.decorator("ngClickDirective",["$delegate",function(e){return e.shift(),e}])}]).factory("$ionicNgClick",["$parse",function(e){return function(t,n,i){var o=angular.isFunction(i)?i:e(i);n.on("click",function(e){t.$apply(function(){o(t,{$event:e})})}),n.onclick=h}}]).directive("ngClick",["$ionicNgClick",function(e){return function(t,n,i){e(t,n,i.ngClick)}}]).directive("ionStopEvent",function(){return{restrict:"A",link:function(e,t,n){t.bind(n.ionStopEvent,r)}}}),a.directive("ionPane",function(){return{restrict:"E",link:function(e,t){t.addClass("pane")}}}),a.directive("ionPopover",[function(){return{restrict:"E",transclude:!0,replace:!0,controller:[function(){}],template:'<div class="popover-backdrop"><div class="popover-wrapper" ng-transclude></div></div>'}}]),a.directive("ionPopoverView",function(){return{restrict:"E",compile:function(e){e.append(f('<div class="popover-arrow">')),e.addClass("popover")}}}),a.directive("ionRadio",function(){return{restrict:"E",replace:!0,require:"?ngModel",transclude:!0,template:'<label class="item item-radio"><input type="radio" name="radio-group"><div class="radio-content"><div class="item-content disable-pointer-events" ng-transclude></div><i class="radio-icon disable-pointer-events icon ion-checkmark"></i></div></label>',compile:function(e,t){if(t.icon){var n=e.find("i");n.removeClass("ion-checkmark").addClass(t.icon)}var i=e.find("input");return s({name:t.name,value:t.value,disabled:t.disabled,"ng-value":t.ngValue,"ng-model":t.ngModel,"ng-disabled":t.ngDisabled,"ng-change":t.ngChange,"ng-required":t.ngRequired,required:t.required},function(e,t){l(e)&&i.attr(t,e)}),function(e,t,n){e.getValue=function(){return e.ngValue||n.value}}}}}),a.directive("ionRefresher",[function(){return{restrict:"E",replace:!0,require:["?^$ionicScroll","ionRefresher"],controller:"$ionicRefresher",template:'<div class="scroll-refresher invisible" collection-repeat-ignore><div class="ionic-refresher-content" ng-class="{\'ionic-refresher-with-text\': pullingText || refreshingText}"><div class="icon-pulling" ng-class="{\'pulling-rotation-disabled\':disablePullingRotation}"><i class="icon {{pullingIcon}}"></i></div><div class="text-pulling" ng-bind-html="pullingText"></div><div class="icon-refreshing"><ion-spinner ng-if="showSpinner" icon="{{spinner}}"></ion-spinner><i ng-if="showIcon" class="icon {{refreshingIcon}}"></i></div><div class="text-refreshing" ng-bind-html="refreshingText"></div></div></div>',link:function(e,t,n,i){var o=i[0],r=i[1];!o||o.isNative()?r.init():(t[0].classList.add("js-scrolling"),o._setRefresher(e,t[0],r.getRefresherDomMethods()),e.$on("scroll.refreshComplete",function(){e.$evalAsync(function(){o.scrollView.finishPullToRefresh()})}))}}}]),a.directive("ionScroll",["$timeout","$controller","$ionicBind","$ionicConfig",function(e,t,n,i){return{restrict:"E",scope:!0,controller:function(){},compile:function(e,o){function r(e,i,o){n(e,o,{direction:"@",paging:"@",$onScroll:"&onScroll",scroll:"@",scrollbarX:"@",scrollbarY:"@",zooming:"@",minZoom:"@",maxZoom:"@"}),e.direction=e.direction||"y",l(o.padding)&&e.$watch(o.padding,function(e){a.toggleClass("padding",!!e)}),e.$eval(e.paging)===!0&&a.addClass("scroll-paging"),e.direction||(e.direction="y");var r=e.$eval(e.paging)===!0;c&&i.addClass("overflow-scroll"),i.addClass("scroll-"+e.direction);var s={el:i[0],delegateHandle:o.delegateHandle,locking:"true"===(o.locking||"true"),bouncing:e.$eval(o.hasBouncing),paging:r,scrollbarX:e.$eval(e.scrollbarX)!==!1,scrollbarY:e.$eval(e.scrollbarY)!==!1,scrollingX:e.direction.indexOf("x")>=0,scrollingY:e.direction.indexOf("y")>=0,zooming:e.$eval(e.zooming)===!0,maxZoom:e.$eval(e.maxZoom)||3,minZoom:e.$eval(e.minZoom)||.5,preventDefault:!0,nativeScrolling:c};r&&(s.speedMultiplier=.8,s.bouncing=!1),t("$ionicScroll",{$scope:e,scrollViewOptions:s})}e.addClass("scroll-view ionic-scroll");var a=f('<div class="scroll"></div>');a.append(e.contents()),e.append(a);var c="false"!==o.overflowScroll&&("true"===o.overflowScroll||!i.scrolling.jsScrolling());return{pre:r}}}}]),a.directive("ionSideMenu",function(){return{restrict:"E",require:"^ionSideMenus",scope:!0,compile:function(e,t){return angular.isUndefined(t.isEnabled)&&t.$set("isEnabled","true"),angular.isUndefined(t.width)&&t.$set("width","275"),e.addClass("menu menu-"+t.side),function(e,n,i,o){e.side=i.side||"left";var r=o[e.side]=new ionic.views.SideMenu({width:t.width,el:n[0],isEnabled:!0});e.$watch(i.width,function(e){var t=+e;t&&t==e&&r.setWidth(+e)}),e.$watch(i.isEnabled,function(e){r.setIsEnabled(!!e)})}}}}),a.directive("ionSideMenuContent",["$timeout","$ionicGesture","$window",function(e,t,n){return{restrict:"EA",require:"^ionSideMenus",scope:!0,compile:function(i,o){function r(r,a,c,s){function u(e){0!==s.getOpenAmount()?(s.close(),e.gesture.srcEvent.preventDefault(),v=null,g=null):v||(v=ionic.tap.pointerCoord(e.gesture.srcEvent))}function d(e){s.isDraggableTarget(e)&&"x"==p(e)&&(s._handleDrag(e),e.gesture.srcEvent.preventDefault())}function f(e){"x"==p(e)&&e.gesture.srcEvent.preventDefault()}function h(e){s._endDrag(e),v=null,g=null}function p(e){if(g)return g;if(e&&e.gesture){if(v){var t=ionic.tap.pointerCoord(e.gesture.srcEvent),n=Math.abs(t.x-v.x),i=Math.abs(t.y-v.y),o=i>n?"y":"x";return Math.max(n,i)>30&&(g=o),o}v=ionic.tap.pointerCoord(e.gesture.srcEvent)}return"y"}var v=null,g=null;l(o.dragContent)?r.$watch(o.dragContent,function(e){s.canDragContent(e)}):s.canDragContent(!0),l(o.edgeDragThreshold)&&r.$watch(o.edgeDragThreshold,function(e){s.edgeDragThreshold(e)});var m={element:i[0],onDrag:function(){},endDrag:function(){},setCanScroll:function(e){var t=a[0].querySelector(".scroll");if(t){var n=angular.element(t.parentElement);if(n){var i=n.scope();i.scrollCtrl&&i.scrollCtrl.freezeScrollShut(!e)}}},getTranslateX:function(){return r.sideMenuContentTranslateX||0},setTranslateX:ionic.animationFrameThrottle(function(t){var n=m.offsetX+t;a[0].style[ionic.CSS.TRANSFORM]="translate3d("+n+"px,0,0)",e(function(){r.sideMenuContentTranslateX=t})}),setMarginLeft:ionic.animationFrameThrottle(function(e){e?(e=parseInt(e,10),a[0].style[ionic.CSS.TRANSFORM]="translate3d("+e+"px,0,0)",a[0].style.width=n.innerWidth-e+"px",m.offsetX=e):(a[0].style[ionic.CSS.TRANSFORM]="translate3d(0,0,0)",a[0].style.width="",m.offsetX=0)}),setMarginRight:ionic.animationFrameThrottle(function(e){e?(e=parseInt(e,10),a[0].style.width=n.innerWidth-e+"px",m.offsetX=e):(a[0].style.width="",m.offsetX=0),a[0].style[ionic.CSS.TRANSFORM]="translate3d(0,0,0)"}),setMarginLeftAndRight:ionic.animationFrameThrottle(function(e,t){e=e&&parseInt(e,10)||0,t=t&&parseInt(t,10)||0;var i=e+t;i>0?(a[0].style[ionic.CSS.TRANSFORM]="translate3d("+e+"px,0,0)",a[0].style.width=n.innerWidth-i+"px",m.offsetX=e):(a[0].style[ionic.CSS.TRANSFORM]="translate3d(0,0,0)",a[0].style.width="",m.offsetX=0)}),enableAnimation:function(){r.animationEnabled=!0,a[0].classList.add("menu-animated")},disableAnimation:function(){r.animationEnabled=!1,a[0].classList.remove("menu-animated")},offsetX:0};s.setContent(m);var $={stop_browser_behavior:!1};$.prevent_default_directions=["left","right"];var w=t.on("tap",u,a,$),b=t.on("dragright",d,a,$),y=t.on("dragleft",d,a,$),S=t.on("dragup",f,a,$),k=t.on("dragdown",f,a,$),C=t.on("release",h,a,$);r.$on("$destroy",function(){m&&(m.element=null,m=null),t.off(y,"dragleft",d),t.off(b,"dragright",d),t.off(S,"dragup",f),t.off(k,"dragdown",f),t.off(C,"release",h),t.off(w,"tap",u)})}return i.addClass("menu-content pane"),{pre:r}}}}]),a.directive("ionSideMenus",["$ionicBody",function(e){return{restrict:"ECA",controller:"$ionicSideMenus",compile:function(t,n){function i(t,n,i,o){o.enableMenuWithBackViews(t.$eval(i.enableMenuWithBackViews)),t.$on("$ionicExposeAside",function(n,i){t.$exposeAside||(t.$exposeAside={}),t.$exposeAside.active=i,e.enableClass(i,"aside-open")}),t.$on("$ionicView.beforeEnter",function(e,n){n.historyId&&(t.$activeHistoryId=n.historyId)}),t.$on("$destroy",function(){e.removeClass("menu-open","aside-open")})}return n.$set("class",(n["class"]||"")+" view"),{pre:i}}}}]),a.directive("ionSlideBox",["$animate","$timeout","$compile","$ionicSlideBoxDelegate","$ionicHistory","$ionicScrollDelegate",function(e,t,n,i,o,r){return{restrict:"E",replace:!0,transclude:!0,scope:{autoPlay:"=",doesContinue:"@",slideInterval:"@",showPager:"@",pagerClick:"&",disableScroll:"@",onSlideChanged:"&",activeSlide:"=?",bounce:"@"},controller:["$scope","$element","$attrs",function(e,n,a){function c(e){e&&!s.isScrollFreeze?r.freezeAllScrolls(e):!e&&s.isScrollFreeze&&r.freezeAllScrolls(!1),s.isScrollFreeze=e}var s=this,u=e.$eval(e.doesContinue)===!0,d=e.$eval(e.bounce)!==!1,f=l(a.autoPlay)?!!e.autoPlay:!1,h=f?e.$eval(e.slideInterval)||4e3:0,p=new ionic.views.Slider({el:n[0],auto:h,continuous:u,startSlide:e.activeSlide,bouncing:d,slidesChanged:function(){e.currentSlide=p.currentIndex(),t(function(){})},callback:function(n){e.currentSlide=n,e.onSlideChanged({index:e.currentSlide,$index:e.currentSlide}),e.$parent.$broadcast("slideBox.slideChanged",n),e.activeSlide=n,t(function(){})},onDrag:function(){c(!0)},onDragEnd:function(){c(!1)}});p.enableSlide(e.$eval(a.disableScroll)!==!0),e.$watch("activeSlide",function(e){l(e)&&p.slide(e)}),e.$on("slideBox.nextSlide",function(){p.next()}),e.$on("slideBox.prevSlide",function(){p.prev()}),e.$on("slideBox.setSlide",function(e,t){p.slide(t)}),this.__slider=p;var v=i._registerInstance(p,a.delegateHandle,function(){return o.isActiveScope(e)});e.$on("$destroy",function(){v(),p.kill()}),this.slidesCount=function(){return p.slidesCount()},this.onPagerClick=function(t){e.pagerClick({index:t})},t(function(){p.load()})}],template:'<div class="slider"><div class="slider-slides" ng-transclude></div></div>',link:function(t,i,o){function r(){if(!a){var e=t.$new();a=f("<ion-pager></ion-pager>"),i.append(a),a=n(a)(e)}return a}e.enabled(!1,i),l(o.showPager)||(t.showPager=!0,r().toggleClass("hide",!1)),o.$observe("showPager",function(e){void 0!==e&&(e=t.$eval(e),r().toggleClass("hide",!e))});var a}}}]).directive("ionSlide",function(){return{restrict:"E",require:"?^ionSlideBox",compile:function(e){e.addClass("slider-slide")}}}).directive("ionPager",function(){return{restrict:"E",replace:!0,require:"^ionSlideBox",template:'<div class="slider-pager"><span class="slider-pager-page" ng-repeat="slide in numSlides() track by $index" ng-class="{active: $index == currentSlide}" ng-click="pagerClick($index)"><i class="icon ion-record"></i></span></div>',link:function(e,t,n,i){var o=function(e){for(var n=t[0].children,i=n.length,o=0;i>o;o++)o==e?n[o].classList.add("active"):n[o].classList.remove("active")};e.pagerClick=function(e){i.onPagerClick(e)},e.numSlides=function(){return new Array(i.slidesCount())},e.$watch("currentSlide",function(e){o(e)})}}}),a.directive("ionSlides",["$animate","$timeout","$compile",function(e,t,n){return{restrict:"E",transclude:!0,scope:{options:"=",slider:"="},template:'<div class="swiper-container"><div class="swiper-wrapper" ng-transclude></div><div ng-hide="!showPager" class="swiper-pagination"></div></div>',controller:["$scope","$element",function(e,i){var o=this;this.update=function(){t(function(){o.__slider&&(o.__slider.update(),o._options.loop&&o.__slider.createLoop(),o.__slider.slides.length>10&&(e.showPager=!1))})},this.rapidUpdate=ionic.debounce(function(){o.update()},50),this.getSlider=function(){return o.__slider};var r=e.options||{},a=angular.extend({pagination:".swiper-pagination",paginationClickable:!0,lazyLoading:!0,preloadImages:!1},r);this._options=a,t(function(){var t=new ionic.views.Swiper(i.children()[0],a,e,n);o.__slider=t,e.slider=o.__slider,e.$on("$destroy",function(){t.destroy()})})}],link:function(e){e.showPager=!0}}}]).directive("ionSlidePage",[function(){return{restrict:"E",require:"?^ionSlides",transclude:!0,replace:!0,template:'<div class="swiper-slide" ng-transclude></div>',link:function(e,t,n,i){i.rapidUpdate()}}}]),a.directive("ionSpinner",function(){return{restrict:"E",controller:"$ionicSpinner",link:function(e,t,n,i){var o=i.init();t.addClass("spinner spinner-"+o),t.on("$destroy",function(){i.stop()})}}}),a.directive("ionTab",["$compile","$ionicConfig","$ionicBind","$ionicViewSwitcher",function(e,t,n,i){function o(e,t){return l(t)?" "+e+'="'+t+'"':""}return{restrict:"E",require:["^ionTabs","ionTab"],controller:"$ionicTab",scope:!0,compile:function(r,a){for(var c="<ion-tab-nav"+o("ng-click",a.ngClick)+o("title",a.title)+o("icon",a.icon)+o("icon-on",a.iconOn)+o("icon-off",a.iconOff)+o("badge",a.badge)+o("badge-style",a.badgeStyle)+o("hidden",a.hidden)+o("disabled",a.disabled)+o("class",a["class"])+"></ion-tab-nav>",s=document.createElement("div"),l=0;l<r[0].children.length;l++)s.appendChild(r[0].children[l].cloneNode(!0));var u=s.childElementCount;r.empty();var d,h;return u&&("ION-NAV-VIEW"===s.children[0].tagName&&(d=s.children[0].getAttribute("name"),s.children[0].classList.add("view-container"),h=!0),1===u&&(s=s.children[0]),h||s.classList.add("pane"),s.classList.add("tab-content")),function(o,r,a,l){function h(){w.tabMatchesState()&&$.select(o,!1)}function p(n){n&&u?(b||(g=o.$new(),m=f(s),i.viewEleIsActive(m,!0),$.$element.append(m),e(m)(g),b=!0),i.viewEleIsActive(m,!0)):b&&m&&(t.views.maxCache()>0?i.viewEleIsActive(m,!1):v())}function v(){g&&g.$destroy(),b&&m&&m.remove(),s.innerHTML="",b=g=m=null}var g,m,$=l[0],w=l[1],b=!1;o.$tabSelected=!1,n(o,a,{onSelect:"&",onDeselect:"&",title:"@",uiSref:"@",href:"@"}),$.add(o),o.$on("$destroy",function(){o.$tabsDestroy||$.remove(o),y.isolateScope().$destroy(),y.remove(),y=s=m=null}),r[0].removeAttribute("title"),d&&(w.navViewName=o.navViewName=d),o.$on("$stateChangeSuccess",h),h();var y=f(c);y.data("$ionTabsController",$),y.data("$ionTabController",w),$.$tabsElement.append(e(y)(o)),o.$watch("$tabSelected",p),o.$on("$ionicView.afterEnter",function(){i.viewEleIsActive(m,o.$tabSelected)}),o.$on("$ionicView.clearCache",function(){o.$tabSelected||v()})}}}}]),a.directive("ionTabNav",[function(){return{restrict:"E",replace:!0,require:["^ionTabs","^ionTab"],template:"<a ng-class=\"{'tab-item-active': isTabActive(), 'has-badge':badge, 'tab-hidden':isHidden()}\" "+' ng-disabled="disabled()" class="tab-item"><span class="badge {{badgeStyle}}" ng-if="badge">{{badge}}</span><i class="icon {{getIconOn()}}" ng-if="getIconOn() && isTabActive()"></i><i class="icon {{getIconOff()}}" ng-if="getIconOff() && !isTabActive()"></i><span class="tab-title" ng-bind-html="title"></span></a>',scope:{title:"@",icon:"@",iconOn:"@",iconOff:"@",badge:"=",hidden:"@",disabled:"&",badgeStyle:"@","class":"@"},link:function(e,t,n,i){var o=i[0],r=i[1];t[0].removeAttribute("title"),e.selectTab=function(e){e.preventDefault(),o.select(r.$scope,!0)},n.ngClick||t.on("click",function(t){e.$apply(function(){e.selectTab(t)})}),e.isHidden=function(){return"true"===n.hidden||n.hidden===!0?!0:!1},e.getIconOn=function(){return e.iconOn||e.icon},e.getIconOff=function(){return e.iconOff||e.icon},e.isTabActive=function(){return o.selectedTab()===r.$scope}}}}]),a.directive("ionTabs",["$ionicTabsDelegate","$ionicConfig",function(e,t){return{restrict:"E",scope:!0,controller:"$ionicTabs",compile:function(n){function i(t,n,i,o){function a(e,t){e.stopPropagation();var n=o.previousSelectedTab();n&&n.$broadcast(e.name.replace("NavView","Tabs"),t)}var c=e._registerInstance(o,i.delegateHandle,o.hasActiveScope);o.$scope=t,o.$element=n,o.$tabsElement=f(n[0].querySelector(".tabs")),t.$watch(function(){return n[0].className},function(e){var n=-1!==e.indexOf("tabs-top"),i=-1!==e.indexOf("tabs-item-hide");t.$hasTabs=!n&&!i,t.$hasTabsTop=n&&!i,t.$emit("$ionicTabs.top",t.$hasTabsTop)}),t.$on("$ionicNavView.beforeLeave",a),t.$on("$ionicNavView.afterLeave",a),t.$on("$ionicNavView.leave",a),t.$on("$destroy",function(){t.$tabsDestroy=!0,c(),o.$tabsElement=o.$element=o.$scope=r=null,delete t.$hasTabs,delete t.$hasTabsTop})}function o(e,t,n,i){i.selectedTab()||i.select(0)}var r=f('<div class="tab-nav tabs">');return r.append(n.contents()),n.append(r).addClass("tabs-"+t.tabs.position()+" tabs-"+t.tabs.style()),{pre:i,post:o}}}}]),a.directive("ionTitle",[function(){return{restrict:"E",compile:function(e){e.addClass("title")}}}]),a.directive("ionToggle",["$timeout","$ionicConfig",function(e,t){return{restrict:"E",replace:!0,require:"?ngModel",transclude:!0,template:'<div class="item item-toggle"><div ng-transclude></div><label class="toggle"><input type="checkbox"><div class="track"><div class="handle"></div></div></label></div>',compile:function(e,n){var i=e.find("input");return s({name:n.name,"ng-value":n.ngValue,"ng-model":n.ngModel,"ng-checked":n.ngChecked,"ng-disabled":n.ngDisabled,"ng-true-value":n.ngTrueValue,"ng-false-value":n.ngFalseValue,"ng-change":n.ngChange,"ng-required":n.ngRequired,required:n.required},function(e,t){l(e)&&i.attr(t,e)}),n.toggleClass&&e[0].getElementsByTagName("label")[0].classList.add(n.toggleClass),e.addClass("toggle-"+t.form.toggle()),function(e,t){var n=t[0].getElementsByTagName("label")[0],i=n.children[0],o=n.children[1],r=o.children[0],a=f(i).controller("ngModel");e.toggle=new ionic.views.Toggle({el:n,track:o,checkbox:i,handle:r,onChange:function(){a&&(a.$setViewValue(i.checked),e.$apply())}}),e.$on("$destroy",function(){e.toggle.destroy()})}}}}]),a.directive("ionView",function(){return{restrict:"EA",priority:1e3,controller:"$ionicView",compile:function(e){return e.addClass("pane"),e[0].removeAttribute("title"),function(e,t,n,i){i.init()}}}})}();
/**
 * @license AngularJS v1.4.8
 * (c) 2010-2015 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {'use strict';

/* jshint ignore:start */
// this code is in the core, but not in angular-messages.js
var isArray = angular.isArray;
var forEach = angular.forEach;
var isString = angular.isString;
var jqLite = angular.element;
/* jshint ignore:end */

/**
 * @ngdoc module
 * @name ngMessages
 * @description
 *
 * The `ngMessages` module provides enhanced support for displaying messages within templates
 * (typically within forms or when rendering message objects that return key/value data).
 * Instead of relying on JavaScript code and/or complex ng-if statements within your form template to
 * show and hide error messages specific to the state of an input field, the `ngMessages` and
 * `ngMessage` directives are designed to handle the complexity, inheritance and priority
 * sequencing based on the order of how the messages are defined in the template.
 *
 * Currently, the ngMessages module only contains the code for the `ngMessages`, `ngMessagesInclude`
 * `ngMessage` and `ngMessageExp` directives.
 *
 * # Usage
 * The `ngMessages` directive listens on a key/value collection which is set on the ngMessages attribute.
 * Since the {@link ngModel ngModel} directive exposes an `$error` object, this error object can be
 * used with `ngMessages` to display control error messages in an easier way than with just regular angular
 * template directives.
 *
 * ```html
 * <form name="myForm">
 *   <label>
 *     Enter text:
 *     <input type="text" ng-model="field" name="myField" required minlength="5" />
 *   </label>
 *   <div ng-messages="myForm.myField.$error" role="alert">
 *     <div ng-message="required">You did not enter a field</div>
 *     <div ng-message="minlength, maxlength">
 *       Your email must be between 5 and 100 characters long
 *     </div>
 *   </div>
 * </form>
 * ```
 *
 * Now whatever key/value entries are present within the provided object (in this case `$error`) then
 * the ngMessages directive will render the inner first ngMessage directive (depending if the key values
 * match the attribute value present on each ngMessage directive). In other words, if your errors
 * object contains the following data:
 *
 * ```javascript
 * <!-- keep in mind that ngModel automatically sets these error flags -->
 * myField.$error = { minlength : true, required : true };
 * ```
 *
 * Then the `required` message will be displayed first. When required is false then the `minlength` message
 * will be displayed right after (since these messages are ordered this way in the template HTML code).
 * The prioritization of each message is determined by what order they're present in the DOM.
 * Therefore, instead of having custom JavaScript code determine the priority of what errors are
 * present before others, the presentation of the errors are handled within the template.
 *
 * By default, ngMessages will only display one error at a time. However, if you wish to display all
 * messages then the `ng-messages-multiple` attribute flag can be used on the element containing the
 * ngMessages directive to make this happen.
 *
 * ```html
 * <!-- attribute-style usage -->
 * <div ng-messages="myForm.myField.$error" ng-messages-multiple>...</div>
 *
 * <!-- element-style usage -->
 * <ng-messages for="myForm.myField.$error" multiple>...</ng-messages>
 * ```
 *
 * ## Reusing and Overriding Messages
 * In addition to prioritization, ngMessages also allows for including messages from a remote or an inline
 * template. This allows for generic collection of messages to be reused across multiple parts of an
 * application.
 *
 * ```html
 * <script type="text/ng-template" id="error-messages">
 *   <div ng-message="required">This field is required</div>
 *   <div ng-message="minlength">This field is too short</div>
 * </script>
 *
 * <div ng-messages="myForm.myField.$error" role="alert">
 *   <div ng-messages-include="error-messages"></div>
 * </div>
 * ```
 *
 * However, including generic messages may not be useful enough to match all input fields, therefore,
 * `ngMessages` provides the ability to override messages defined in the remote template by redefining
 * them within the directive container.
 *
 * ```html
 * <!-- a generic template of error messages known as "my-custom-messages" -->
 * <script type="text/ng-template" id="my-custom-messages">
 *   <div ng-message="required">This field is required</div>
 *   <div ng-message="minlength">This field is too short</div>
 * </script>
 *
 * <form name="myForm">
 *   <label>
 *     Email address
 *     <input type="email"
 *            id="email"
 *            name="myEmail"
 *            ng-model="email"
 *            minlength="5"
 *            required />
 *   </label>
 *   <!-- any ng-message elements that appear BEFORE the ng-messages-include will
 *        override the messages present in the ng-messages-include template -->
 *   <div ng-messages="myForm.myEmail.$error" role="alert">
 *     <!-- this required message has overridden the template message -->
 *     <div ng-message="required">You did not enter your email address</div>
 *
 *     <!-- this is a brand new message and will appear last in the prioritization -->
 *     <div ng-message="email">Your email address is invalid</div>
 *
 *     <!-- and here are the generic error messages -->
 *     <div ng-messages-include="my-custom-messages"></div>
 *   </div>
 * </form>
 * ```
 *
 * In the example HTML code above the message that is set on required will override the corresponding
 * required message defined within the remote template. Therefore, with particular input fields (such
 * email addresses, date fields, autocomplete inputs, etc...), specialized error messages can be applied
 * while more generic messages can be used to handle other, more general input errors.
 *
 * ## Dynamic Messaging
 * ngMessages also supports using expressions to dynamically change key values. Using arrays and
 * repeaters to list messages is also supported. This means that the code below will be able to
 * fully adapt itself and display the appropriate message when any of the expression data changes:
 *
 * ```html
 * <form name="myForm">
 *   <label>
 *     Email address
 *     <input type="email"
 *            name="myEmail"
 *            ng-model="email"
 *            minlength="5"
 *            required />
 *   </label>
 *   <div ng-messages="myForm.myEmail.$error" role="alert">
 *     <div ng-message="required">You did not enter your email address</div>
 *     <div ng-repeat="errorMessage in errorMessages">
 *       <!-- use ng-message-exp for a message whose key is given by an expression -->
 *       <div ng-message-exp="errorMessage.type">{{ errorMessage.text }}</div>
 *     </div>
 *   </div>
 * </form>
 * ```
 *
 * The `errorMessage.type` expression can be a string value or it can be an array so
 * that multiple errors can be associated with a single error message:
 *
 * ```html
 *   <label>
 *     Email address
 *     <input type="email"
 *            ng-model="data.email"
 *            name="myEmail"
 *            ng-minlength="5"
 *            ng-maxlength="100"
 *            required />
 *   </label>
 *   <div ng-messages="myForm.myEmail.$error" role="alert">
 *     <div ng-message-exp="'required'">You did not enter your email address</div>
 *     <div ng-message-exp="['minlength', 'maxlength']">
 *       Your email must be between 5 and 100 characters long
 *     </div>
 *   </div>
 * ```
 *
 * Feel free to use other structural directives such as ng-if and ng-switch to further control
 * what messages are active and when. Be careful, if you place ng-message on the same element
 * as these structural directives, Angular may not be able to determine if a message is active
 * or not. Therefore it is best to place the ng-message on a child element of the structural
 * directive.
 *
 * ```html
 * <div ng-messages="myForm.myEmail.$error" role="alert">
 *   <div ng-if="showRequiredError">
 *     <div ng-message="required">Please enter something</div>
 *   </div>
 * </div>
 * ```
 *
 * ## Animations
 * If the `ngAnimate` module is active within the application then the `ngMessages`, `ngMessage` and
 * `ngMessageExp` directives will trigger animations whenever any messages are added and removed from
 * the DOM by the `ngMessages` directive.
 *
 * Whenever the `ngMessages` directive contains one or more visible messages then the `.ng-active` CSS
 * class will be added to the element. The `.ng-inactive` CSS class will be applied when there are no
 * messages present. Therefore, CSS transitions and keyframes as well as JavaScript animations can
 * hook into the animations whenever these classes are added/removed.
 *
 * Let's say that our HTML code for our messages container looks like so:
 *
 * ```html
 * <div ng-messages="myMessages" class="my-messages" role="alert">
 *   <div ng-message="alert" class="some-message">...</div>
 *   <div ng-message="fail" class="some-message">...</div>
 * </div>
 * ```
 *
 * Then the CSS animation code for the message container looks like so:
 *
 * ```css
 * .my-messages {
 *   transition:1s linear all;
 * }
 * .my-messages.ng-active {
 *   // messages are visible
 * }
 * .my-messages.ng-inactive {
 *   // messages are hidden
 * }
 * ```
 *
 * Whenever an inner message is attached (becomes visible) or removed (becomes hidden) then the enter
 * and leave animation is triggered for each particular element bound to the `ngMessage` directive.
 *
 * Therefore, the CSS code for the inner messages looks like so:
 *
 * ```css
 * .some-message {
 *   transition:1s linear all;
 * }
 *
 * .some-message.ng-enter {}
 * .some-message.ng-enter.ng-enter-active {}
 *
 * .some-message.ng-leave {}
 * .some-message.ng-leave.ng-leave-active {}
 * ```
 *
 * {@link ngAnimate Click here} to learn how to use JavaScript animations or to learn more about ngAnimate.
 */
angular.module('ngMessages', [])

   /**
    * @ngdoc directive
    * @module ngMessages
    * @name ngMessages
    * @restrict AE
    *
    * @description
    * `ngMessages` is a directive that is designed to show and hide messages based on the state
    * of a key/value object that it listens on. The directive itself complements error message
    * reporting with the `ngModel` $error object (which stores a key/value state of validation errors).
    *
    * `ngMessages` manages the state of internal messages within its container element. The internal
    * messages use the `ngMessage` directive and will be inserted/removed from the page depending
    * on if they're present within the key/value object. By default, only one message will be displayed
    * at a time and this depends on the prioritization of the messages within the template. (This can
    * be changed by using the `ng-messages-multiple` or `multiple` attribute on the directive container.)
    *
    * A remote template can also be used to promote message reusability and messages can also be
    * overridden.
    *
    * {@link module:ngMessages Click here} to learn more about `ngMessages` and `ngMessage`.
    *
    * @usage
    * ```html
    * <!-- using attribute directives -->
    * <ANY ng-messages="expression" role="alert">
    *   <ANY ng-message="stringValue">...</ANY>
    *   <ANY ng-message="stringValue1, stringValue2, ...">...</ANY>
    *   <ANY ng-message-exp="expressionValue">...</ANY>
    * </ANY>
    *
    * <!-- or by using element directives -->
    * <ng-messages for="expression" role="alert">
    *   <ng-message when="stringValue">...</ng-message>
    *   <ng-message when="stringValue1, stringValue2, ...">...</ng-message>
    *   <ng-message when-exp="expressionValue">...</ng-message>
    * </ng-messages>
    * ```
    *
    * @param {string} ngMessages an angular expression evaluating to a key/value object
    *                 (this is typically the $error object on an ngModel instance).
    * @param {string=} ngMessagesMultiple|multiple when set, all messages will be displayed with true
    *
    * @example
    * <example name="ngMessages-directive" module="ngMessagesExample"
    *          deps="angular-messages.js"
    *          animations="true" fixBase="true">
    *   <file name="index.html">
    *     <form name="myForm">
    *       <label>
    *         Enter your name:
    *         <input type="text"
    *                name="myName"
    *                ng-model="name"
    *                ng-minlength="5"
    *                ng-maxlength="20"
    *                required />
    *       </label>
    *       <pre>myForm.myName.$error = {{ myForm.myName.$error | json }}</pre>
    *
    *       <div ng-messages="myForm.myName.$error" style="color:maroon" role="alert">
    *         <div ng-message="required">You did not enter a field</div>
    *         <div ng-message="minlength">Your field is too short</div>
    *         <div ng-message="maxlength">Your field is too long</div>
    *       </div>
    *     </form>
    *   </file>
    *   <file name="script.js">
    *     angular.module('ngMessagesExample', ['ngMessages']);
    *   </file>
    * </example>
    */
   .directive('ngMessages', ['$animate', function($animate) {
     var ACTIVE_CLASS = 'ng-active';
     var INACTIVE_CLASS = 'ng-inactive';

     return {
       require: 'ngMessages',
       restrict: 'AE',
       controller: ['$element', '$scope', '$attrs', function($element, $scope, $attrs) {
         var ctrl = this;
         var latestKey = 0;
         var nextAttachId = 0;

         this.getAttachId = function getAttachId() { return nextAttachId++; };

         var messages = this.messages = {};
         var renderLater, cachedCollection;

         this.render = function(collection) {
           collection = collection || {};

           renderLater = false;
           cachedCollection = collection;

           // this is true if the attribute is empty or if the attribute value is truthy
           var multiple = isAttrTruthy($scope, $attrs.ngMessagesMultiple) ||
                          isAttrTruthy($scope, $attrs.multiple);

           var unmatchedMessages = [];
           var matchedKeys = {};
           var messageItem = ctrl.head;
           var messageFound = false;
           var totalMessages = 0;

           // we use != instead of !== to allow for both undefined and null values
           while (messageItem != null) {
             totalMessages++;
             var messageCtrl = messageItem.message;

             var messageUsed = false;
             if (!messageFound) {
               forEach(collection, function(value, key) {
                 if (!messageUsed && truthy(value) && messageCtrl.test(key)) {
                   // this is to prevent the same error name from showing up twice
                   if (matchedKeys[key]) return;
                   matchedKeys[key] = true;

                   messageUsed = true;
                   messageCtrl.attach();
                 }
               });
             }

             if (messageUsed) {
               // unless we want to display multiple messages then we should
               // set a flag here to avoid displaying the next message in the list
               messageFound = !multiple;
             } else {
               unmatchedMessages.push(messageCtrl);
             }

             messageItem = messageItem.next;
           }

           forEach(unmatchedMessages, function(messageCtrl) {
             messageCtrl.detach();
           });

           unmatchedMessages.length !== totalMessages
              ? $animate.setClass($element, ACTIVE_CLASS, INACTIVE_CLASS)
              : $animate.setClass($element, INACTIVE_CLASS, ACTIVE_CLASS);
         };

         $scope.$watchCollection($attrs.ngMessages || $attrs['for'], ctrl.render);

         this.reRender = function() {
           if (!renderLater) {
             renderLater = true;
             $scope.$evalAsync(function() {
               if (renderLater) {
                 cachedCollection && ctrl.render(cachedCollection);
               }
             });
           }
         };

         this.register = function(comment, messageCtrl) {
           var nextKey = latestKey.toString();
           messages[nextKey] = {
             message: messageCtrl
           };
           insertMessageNode($element[0], comment, nextKey);
           comment.$$ngMessageNode = nextKey;
           latestKey++;

           ctrl.reRender();
         };

         this.deregister = function(comment) {
           var key = comment.$$ngMessageNode;
           delete comment.$$ngMessageNode;
           removeMessageNode($element[0], comment, key);
           delete messages[key];
           ctrl.reRender();
         };

         function findPreviousMessage(parent, comment) {
           var prevNode = comment;
           var parentLookup = [];
           while (prevNode && prevNode !== parent) {
             var prevKey = prevNode.$$ngMessageNode;
             if (prevKey && prevKey.length) {
               return messages[prevKey];
             }

             // dive deeper into the DOM and examine its children for any ngMessage
             // comments that may be in an element that appears deeper in the list
             if (prevNode.childNodes.length && parentLookup.indexOf(prevNode) == -1) {
               parentLookup.push(prevNode);
               prevNode = prevNode.childNodes[prevNode.childNodes.length - 1];
             } else {
               prevNode = prevNode.previousSibling || prevNode.parentNode;
             }
           }
         }

         function insertMessageNode(parent, comment, key) {
           var messageNode = messages[key];
           if (!ctrl.head) {
             ctrl.head = messageNode;
           } else {
             var match = findPreviousMessage(parent, comment);
             if (match) {
               messageNode.next = match.next;
               match.next = messageNode;
             } else {
               messageNode.next = ctrl.head;
               ctrl.head = messageNode;
             }
           }
         }

         function removeMessageNode(parent, comment, key) {
           var messageNode = messages[key];

           var match = findPreviousMessage(parent, comment);
           if (match) {
             match.next = messageNode.next;
           } else {
             ctrl.head = messageNode.next;
           }
         }
       }]
     };

     function isAttrTruthy(scope, attr) {
      return (isString(attr) && attr.length === 0) || //empty attribute
             truthy(scope.$eval(attr));
     }

     function truthy(val) {
       return isString(val) ? val.length : !!val;
     }
   }])

   /**
    * @ngdoc directive
    * @name ngMessagesInclude
    * @restrict AE
    * @scope
    *
    * @description
    * `ngMessagesInclude` is a directive with the purpose to import existing ngMessage template
    * code from a remote template and place the downloaded template code into the exact spot
    * that the ngMessagesInclude directive is placed within the ngMessages container. This allows
    * for a series of pre-defined messages to be reused and also allows for the developer to
    * determine what messages are overridden due to the placement of the ngMessagesInclude directive.
    *
    * @usage
    * ```html
    * <!-- using attribute directives -->
    * <ANY ng-messages="expression" role="alert">
    *   <ANY ng-messages-include="remoteTplString">...</ANY>
    * </ANY>
    *
    * <!-- or by using element directives -->
    * <ng-messages for="expression" role="alert">
    *   <ng-messages-include src="expressionValue1">...</ng-messages-include>
    * </ng-messages>
    * ```
    *
    * {@link module:ngMessages Click here} to learn more about `ngMessages` and `ngMessage`.
    *
    * @param {string} ngMessagesInclude|src a string value corresponding to the remote template.
    */
   .directive('ngMessagesInclude',
     ['$templateRequest', '$document', '$compile', function($templateRequest, $document, $compile) {

     return {
       restrict: 'AE',
       require: '^^ngMessages', // we only require this for validation sake
       link: function($scope, element, attrs) {
         var src = attrs.ngMessagesInclude || attrs.src;
         $templateRequest(src).then(function(html) {
           $compile(html)($scope, function(contents) {
             element.after(contents);

             // the anchor is placed for debugging purposes
             var anchor = jqLite($document[0].createComment(' ngMessagesInclude: ' + src + ' '));
             element.after(anchor);

             // we don't want to pollute the DOM anymore by keeping an empty directive element
             element.remove();
           });
         });
       }
     };
   }])

   /**
    * @ngdoc directive
    * @name ngMessage
    * @restrict AE
    * @scope
    *
    * @description
    * `ngMessage` is a directive with the purpose to show and hide a particular message.
    * For `ngMessage` to operate, a parent `ngMessages` directive on a parent DOM element
    * must be situated since it determines which messages are visible based on the state
    * of the provided key/value map that `ngMessages` listens on.
    *
    * More information about using `ngMessage` can be found in the
    * {@link module:ngMessages `ngMessages` module documentation}.
    *
    * @usage
    * ```html
    * <!-- using attribute directives -->
    * <ANY ng-messages="expression" role="alert">
    *   <ANY ng-message="stringValue">...</ANY>
    *   <ANY ng-message="stringValue1, stringValue2, ...">...</ANY>
    * </ANY>
    *
    * <!-- or by using element directives -->
    * <ng-messages for="expression" role="alert">
    *   <ng-message when="stringValue">...</ng-message>
    *   <ng-message when="stringValue1, stringValue2, ...">...</ng-message>
    * </ng-messages>
    * ```
    *
    * @param {expression} ngMessage|when a string value corresponding to the message key.
    */
  .directive('ngMessage', ngMessageDirectiveFactory('AE'))


   /**
    * @ngdoc directive
    * @name ngMessageExp
    * @restrict AE
    * @scope
    *
    * @description
    * `ngMessageExp` is a directive with the purpose to show and hide a particular message.
    * For `ngMessageExp` to operate, a parent `ngMessages` directive on a parent DOM element
    * must be situated since it determines which messages are visible based on the state
    * of the provided key/value map that `ngMessages` listens on.
    *
    * @usage
    * ```html
    * <!-- using attribute directives -->
    * <ANY ng-messages="expression">
    *   <ANY ng-message-exp="expressionValue">...</ANY>
    * </ANY>
    *
    * <!-- or by using element directives -->
    * <ng-messages for="expression">
    *   <ng-message when-exp="expressionValue">...</ng-message>
    * </ng-messages>
    * ```
    *
    * {@link module:ngMessages Click here} to learn more about `ngMessages` and `ngMessage`.
    *
    * @param {expression} ngMessageExp|whenExp an expression value corresponding to the message key.
    */
  .directive('ngMessageExp', ngMessageDirectiveFactory('A'));

function ngMessageDirectiveFactory(restrict) {
  return ['$animate', function($animate) {
    return {
      restrict: 'AE',
      transclude: 'element',
      terminal: true,
      require: '^^ngMessages',
      link: function(scope, element, attrs, ngMessagesCtrl, $transclude) {
        var commentNode = element[0];

        var records;
        var staticExp = attrs.ngMessage || attrs.when;
        var dynamicExp = attrs.ngMessageExp || attrs.whenExp;
        var assignRecords = function(items) {
          records = items
              ? (isArray(items)
                    ? items
                    : items.split(/[\s,]+/))
              : null;
          ngMessagesCtrl.reRender();
        };

        if (dynamicExp) {
          assignRecords(scope.$eval(dynamicExp));
          scope.$watchCollection(dynamicExp, assignRecords);
        } else {
          assignRecords(staticExp);
        }

        var currentElement, messageCtrl;
        ngMessagesCtrl.register(commentNode, messageCtrl = {
          test: function(name) {
            return contains(records, name);
          },
          attach: function() {
            if (!currentElement) {
              $transclude(scope, function(elm) {
                $animate.enter(elm, null, element);
                currentElement = elm;

                // Each time we attach this node to a message we get a new id that we can match
                // when we are destroying the node later.
                var $$attachId = currentElement.$$attachId = ngMessagesCtrl.getAttachId();

                // in the event that the parent element is destroyed
                // by any other structural directive then it's time
                // to deregister the message from the controller
                currentElement.on('$destroy', function() {
                  if (currentElement && currentElement.$$attachId === $$attachId) {
                    ngMessagesCtrl.deregister(commentNode);
                    messageCtrl.detach();
                  }
                });
              });
            }
          },
          detach: function() {
            if (currentElement) {
              var elm = currentElement;
              currentElement = null;
              $animate.leave(elm);
            }
          }
        });
      }
    };
  }];

  function contains(collection, key) {
    if (collection) {
      return isArray(collection)
          ? collection.indexOf(key) >= 0
          : collection.hasOwnProperty(key);
    }
  }
}


})(window, window.angular);

/**
 * @license AngularJS v1.4.8
 * (c) 2010-2015 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {'use strict';

var $resourceMinErr = angular.$$minErr('$resource');

// Helper functions and regex to lookup a dotted path on an object
// stopping at undefined/null.  The path must be composed of ASCII
// identifiers (just like $parse)
var MEMBER_NAME_REGEX = /^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;

function isValidDottedPath(path) {
  return (path != null && path !== '' && path !== 'hasOwnProperty' &&
      MEMBER_NAME_REGEX.test('.' + path));
}

function lookupDottedPath(obj, path) {
  if (!isValidDottedPath(path)) {
    throw $resourceMinErr('badmember', 'Dotted member path "@{0}" is invalid.', path);
  }
  var keys = path.split('.');
  for (var i = 0, ii = keys.length; i < ii && angular.isDefined(obj); i++) {
    var key = keys[i];
    obj = (obj !== null) ? obj[key] : undefined;
  }
  return obj;
}

/**
 * Create a shallow copy of an object and clear other fields from the destination
 */
function shallowClearAndCopy(src, dst) {
  dst = dst || {};

  angular.forEach(dst, function(value, key) {
    delete dst[key];
  });

  for (var key in src) {
    if (src.hasOwnProperty(key) && !(key.charAt(0) === '$' && key.charAt(1) === '$')) {
      dst[key] = src[key];
    }
  }

  return dst;
}

/**
 * @ngdoc module
 * @name ngResource
 * @description
 *
 * # ngResource
 *
 * The `ngResource` module provides interaction support with RESTful services
 * via the $resource service.
 *
 *
 * <div doc-module-components="ngResource"></div>
 *
 * See {@link ngResource.$resource `$resource`} for usage.
 */

/**
 * @ngdoc service
 * @name $resource
 * @requires $http
 *
 * @description
 * A factory which creates a resource object that lets you interact with
 * [RESTful](http://en.wikipedia.org/wiki/Representational_State_Transfer) server-side data sources.
 *
 * The returned resource object has action methods which provide high-level behaviors without
 * the need to interact with the low level {@link ng.$http $http} service.
 *
 * Requires the {@link ngResource `ngResource`} module to be installed.
 *
 * By default, trailing slashes will be stripped from the calculated URLs,
 * which can pose problems with server backends that do not expect that
 * behavior.  This can be disabled by configuring the `$resourceProvider` like
 * this:
 *
 * ```js
     app.config(['$resourceProvider', function($resourceProvider) {
       // Don't strip trailing slashes from calculated URLs
       $resourceProvider.defaults.stripTrailingSlashes = false;
     }]);
 * ```
 *
 * @param {string} url A parameterized URL template with parameters prefixed by `:` as in
 *   `/user/:username`. If you are using a URL with a port number (e.g.
 *   `http://example.com:8080/api`), it will be respected.
 *
 *   If you are using a url with a suffix, just add the suffix, like this:
 *   `$resource('http://example.com/resource.json')` or `$resource('http://example.com/:id.json')`
 *   or even `$resource('http://example.com/resource/:resource_id.:format')`
 *   If the parameter before the suffix is empty, :resource_id in this case, then the `/.` will be
 *   collapsed down to a single `.`.  If you need this sequence to appear and not collapse then you
 *   can escape it with `/\.`.
 *
 * @param {Object=} paramDefaults Default values for `url` parameters. These can be overridden in
 *   `actions` methods. If any of the parameter value is a function, it will be executed every time
 *   when a param value needs to be obtained for a request (unless the param was overridden).
 *
 *   Each key value in the parameter object is first bound to url template if present and then any
 *   excess keys are appended to the url search query after the `?`.
 *
 *   Given a template `/path/:verb` and parameter `{verb:'greet', salutation:'Hello'}` results in
 *   URL `/path/greet?salutation=Hello`.
 *
 *   If the parameter value is prefixed with `@` then the value for that parameter will be extracted
 *   from the corresponding property on the `data` object (provided when calling an action method).  For
 *   example, if the `defaultParam` object is `{someParam: '@someProp'}` then the value of `someParam`
 *   will be `data.someProp`.
 *
 * @param {Object.<Object>=} actions Hash with declaration of custom actions that should extend
 *   the default set of resource actions. The declaration should be created in the format of {@link
 *   ng.$http#usage $http.config}:
 *
 *       {action1: {method:?, params:?, isArray:?, headers:?, ...},
 *        action2: {method:?, params:?, isArray:?, headers:?, ...},
 *        ...}
 *
 *   Where:
 *
 *   - **`action`** – {string} – The name of action. This name becomes the name of the method on
 *     your resource object.
 *   - **`method`** – {string} – Case insensitive HTTP method (e.g. `GET`, `POST`, `PUT`,
 *     `DELETE`, `JSONP`, etc).
 *   - **`params`** – {Object=} – Optional set of pre-bound parameters for this action. If any of
 *     the parameter value is a function, it will be executed every time when a param value needs to
 *     be obtained for a request (unless the param was overridden).
 *   - **`url`** – {string} – action specific `url` override. The url templating is supported just
 *     like for the resource-level urls.
 *   - **`isArray`** – {boolean=} – If true then the returned object for this action is an array,
 *     see `returns` section.
 *   - **`transformRequest`** –
 *     `{function(data, headersGetter)|Array.<function(data, headersGetter)>}` –
 *     transform function or an array of such functions. The transform function takes the http
 *     request body and headers and returns its transformed (typically serialized) version.
 *     By default, transformRequest will contain one function that checks if the request data is
 *     an object and serializes to using `angular.toJson`. To prevent this behavior, set
 *     `transformRequest` to an empty array: `transformRequest: []`
 *   - **`transformResponse`** –
 *     `{function(data, headersGetter)|Array.<function(data, headersGetter)>}` –
 *     transform function or an array of such functions. The transform function takes the http
 *     response body and headers and returns its transformed (typically deserialized) version.
 *     By default, transformResponse will contain one function that checks if the response looks like
 *     a JSON string and deserializes it using `angular.fromJson`. To prevent this behavior, set
 *     `transformResponse` to an empty array: `transformResponse: []`
 *   - **`cache`** – `{boolean|Cache}` – If true, a default $http cache will be used to cache the
 *     GET request, otherwise if a cache instance built with
 *     {@link ng.$cacheFactory $cacheFactory}, this cache will be used for
 *     caching.
 *   - **`timeout`** – `{number|Promise}` – timeout in milliseconds, or {@link ng.$q promise} that
 *     should abort the request when resolved.
 *   - **`withCredentials`** - `{boolean}` - whether to set the `withCredentials` flag on the
 *     XHR object. See
 *     [requests with credentials](https://developer.mozilla.org/en/http_access_control#section_5)
 *     for more information.
 *   - **`responseType`** - `{string}` - see
 *     [requestType](https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest#responseType).
 *   - **`interceptor`** - `{Object=}` - The interceptor object has two optional methods -
 *     `response` and `responseError`. Both `response` and `responseError` interceptors get called
 *     with `http response` object. See {@link ng.$http $http interceptors}.
 *
 * @param {Object} options Hash with custom settings that should extend the
 *   default `$resourceProvider` behavior.  The only supported option is
 *
 *   Where:
 *
 *   - **`stripTrailingSlashes`** – {boolean} – If true then the trailing
 *   slashes from any calculated URL will be stripped. (Defaults to true.)
 *
 * @returns {Object} A resource "class" object with methods for the default set of resource actions
 *   optionally extended with custom `actions`. The default set contains these actions:
 *   ```js
 *   { 'get':    {method:'GET'},
 *     'save':   {method:'POST'},
 *     'query':  {method:'GET', isArray:true},
 *     'remove': {method:'DELETE'},
 *     'delete': {method:'DELETE'} };
 *   ```
 *
 *   Calling these methods invoke an {@link ng.$http} with the specified http method,
 *   destination and parameters. When the data is returned from the server then the object is an
 *   instance of the resource class. The actions `save`, `remove` and `delete` are available on it
 *   as  methods with the `$` prefix. This allows you to easily perform CRUD operations (create,
 *   read, update, delete) on server-side data like this:
 *   ```js
 *   var User = $resource('/user/:userId', {userId:'@id'});
 *   var user = User.get({userId:123}, function() {
 *     user.abc = true;
 *     user.$save();
 *   });
 *   ```
 *
 *   It is important to realize that invoking a $resource object method immediately returns an
 *   empty reference (object or array depending on `isArray`). Once the data is returned from the
 *   server the existing reference is populated with the actual data. This is a useful trick since
 *   usually the resource is assigned to a model which is then rendered by the view. Having an empty
 *   object results in no rendering, once the data arrives from the server then the object is
 *   populated with the data and the view automatically re-renders itself showing the new data. This
 *   means that in most cases one never has to write a callback function for the action methods.
 *
 *   The action methods on the class object or instance object can be invoked with the following
 *   parameters:
 *
 *   - HTTP GET "class" actions: `Resource.action([parameters], [success], [error])`
 *   - non-GET "class" actions: `Resource.action([parameters], postData, [success], [error])`
 *   - non-GET instance actions:  `instance.$action([parameters], [success], [error])`
 *
 *
 *   Success callback is called with (value, responseHeaders) arguments, where the value is
 *   the populated resource instance or collection object. The error callback is called
 *   with (httpResponse) argument.
 *
 *   Class actions return empty instance (with additional properties below).
 *   Instance actions return promise of the action.
 *
 *   The Resource instances and collection have these additional properties:
 *
 *   - `$promise`: the {@link ng.$q promise} of the original server interaction that created this
 *     instance or collection.
 *
 *     On success, the promise is resolved with the same resource instance or collection object,
 *     updated with data from server. This makes it easy to use in
 *     {@link ngRoute.$routeProvider resolve section of $routeProvider.when()} to defer view
 *     rendering until the resource(s) are loaded.
 *
 *     On failure, the promise is resolved with the {@link ng.$http http response} object, without
 *     the `resource` property.
 *
 *     If an interceptor object was provided, the promise will instead be resolved with the value
 *     returned by the interceptor.
 *
 *   - `$resolved`: `true` after first server interaction is completed (either with success or
 *      rejection), `false` before that. Knowing if the Resource has been resolved is useful in
 *      data-binding.
 *
 * @example
 *
 * # Credit card resource
 *
 * ```js
     // Define CreditCard class
     var CreditCard = $resource('/user/:userId/card/:cardId',
      {userId:123, cardId:'@id'}, {
       charge: {method:'POST', params:{charge:true}}
      });

     // We can retrieve a collection from the server
     var cards = CreditCard.query(function() {
       // GET: /user/123/card
       // server returns: [ {id:456, number:'1234', name:'Smith'} ];

       var card = cards[0];
       // each item is an instance of CreditCard
       expect(card instanceof CreditCard).toEqual(true);
       card.name = "J. Smith";
       // non GET methods are mapped onto the instances
       card.$save();
       // POST: /user/123/card/456 {id:456, number:'1234', name:'J. Smith'}
       // server returns: {id:456, number:'1234', name: 'J. Smith'};

       // our custom method is mapped as well.
       card.$charge({amount:9.99});
       // POST: /user/123/card/456?amount=9.99&charge=true {id:456, number:'1234', name:'J. Smith'}
     });

     // we can create an instance as well
     var newCard = new CreditCard({number:'0123'});
     newCard.name = "Mike Smith";
     newCard.$save();
     // POST: /user/123/card {number:'0123', name:'Mike Smith'}
     // server returns: {id:789, number:'0123', name: 'Mike Smith'};
     expect(newCard.id).toEqual(789);
 * ```
 *
 * The object returned from this function execution is a resource "class" which has "static" method
 * for each action in the definition.
 *
 * Calling these methods invoke `$http` on the `url` template with the given `method`, `params` and
 * `headers`.
 * When the data is returned from the server then the object is an instance of the resource type and
 * all of the non-GET methods are available with `$` prefix. This allows you to easily support CRUD
 * operations (create, read, update, delete) on server-side data.

   ```js
     var User = $resource('/user/:userId', {userId:'@id'});
     User.get({userId:123}, function(user) {
       user.abc = true;
       user.$save();
     });
   ```
 *
 * It's worth noting that the success callback for `get`, `query` and other methods gets passed
 * in the response that came from the server as well as $http header getter function, so one
 * could rewrite the above example and get access to http headers as:
 *
   ```js
     var User = $resource('/user/:userId', {userId:'@id'});
     User.get({userId:123}, function(u, getResponseHeaders){
       u.abc = true;
       u.$save(function(u, putResponseHeaders) {
         //u => saved user object
         //putResponseHeaders => $http header getter
       });
     });
   ```
 *
 * You can also access the raw `$http` promise via the `$promise` property on the object returned
 *
   ```
     var User = $resource('/user/:userId', {userId:'@id'});
     User.get({userId:123})
         .$promise.then(function(user) {
           $scope.user = user;
         });
   ```

 * # Creating a custom 'PUT' request
 * In this example we create a custom method on our resource to make a PUT request
 * ```js
 *    var app = angular.module('app', ['ngResource', 'ngRoute']);
 *
 *    // Some APIs expect a PUT request in the format URL/object/ID
 *    // Here we are creating an 'update' method
 *    app.factory('Notes', ['$resource', function($resource) {
 *    return $resource('/notes/:id', null,
 *        {
 *            'update': { method:'PUT' }
 *        });
 *    }]);
 *
 *    // In our controller we get the ID from the URL using ngRoute and $routeParams
 *    // We pass in $routeParams and our Notes factory along with $scope
 *    app.controller('NotesCtrl', ['$scope', '$routeParams', 'Notes',
                                      function($scope, $routeParams, Notes) {
 *    // First get a note object from the factory
 *    var note = Notes.get({ id:$routeParams.id });
 *    $id = note.id;
 *
 *    // Now call update passing in the ID first then the object you are updating
 *    Notes.update({ id:$id }, note);
 *
 *    // This will PUT /notes/ID with the note object in the request payload
 *    }]);
 * ```
 */
angular.module('ngResource', ['ng']).
  provider('$resource', function() {
    var PROTOCOL_AND_DOMAIN_REGEX = /^https?:\/\/[^\/]*/;
    var provider = this;

    this.defaults = {
      // Strip slashes by default
      stripTrailingSlashes: true,

      // Default actions configuration
      actions: {
        'get': {method: 'GET'},
        'save': {method: 'POST'},
        'query': {method: 'GET', isArray: true},
        'remove': {method: 'DELETE'},
        'delete': {method: 'DELETE'}
      }
    };

    this.$get = ['$http', '$q', function($http, $q) {

      var noop = angular.noop,
        forEach = angular.forEach,
        extend = angular.extend,
        copy = angular.copy,
        isFunction = angular.isFunction;

      /**
       * We need our custom method because encodeURIComponent is too aggressive and doesn't follow
       * http://www.ietf.org/rfc/rfc3986.txt with regards to the character set
       * (pchar) allowed in path segments:
       *    segment       = *pchar
       *    pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
       *    pct-encoded   = "%" HEXDIG HEXDIG
       *    unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
       *    sub-delims    = "!" / "$" / "&" / "'" / "(" / ")"
       *                     / "*" / "+" / "," / ";" / "="
       */
      function encodeUriSegment(val) {
        return encodeUriQuery(val, true).
          replace(/%26/gi, '&').
          replace(/%3D/gi, '=').
          replace(/%2B/gi, '+');
      }


      /**
       * This method is intended for encoding *key* or *value* parts of query component. We need a
       * custom method because encodeURIComponent is too aggressive and encodes stuff that doesn't
       * have to be encoded per http://tools.ietf.org/html/rfc3986:
       *    query       = *( pchar / "/" / "?" )
       *    pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
       *    unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
       *    pct-encoded   = "%" HEXDIG HEXDIG
       *    sub-delims    = "!" / "$" / "&" / "'" / "(" / ")"
       *                     / "*" / "+" / "," / ";" / "="
       */
      function encodeUriQuery(val, pctEncodeSpaces) {
        return encodeURIComponent(val).
          replace(/%40/gi, '@').
          replace(/%3A/gi, ':').
          replace(/%24/g, '$').
          replace(/%2C/gi, ',').
          replace(/%20/g, (pctEncodeSpaces ? '%20' : '+'));
      }

      function Route(template, defaults) {
        this.template = template;
        this.defaults = extend({}, provider.defaults, defaults);
        this.urlParams = {};
      }

      Route.prototype = {
        setUrlParams: function(config, params, actionUrl) {
          var self = this,
            url = actionUrl || self.template,
            val,
            encodedVal,
            protocolAndDomain = '';

          var urlParams = self.urlParams = {};
          forEach(url.split(/\W/), function(param) {
            if (param === 'hasOwnProperty') {
              throw $resourceMinErr('badname', "hasOwnProperty is not a valid parameter name.");
            }
            if (!(new RegExp("^\\d+$").test(param)) && param &&
              (new RegExp("(^|[^\\\\]):" + param + "(\\W|$)").test(url))) {
              urlParams[param] = true;
            }
          });
          url = url.replace(/\\:/g, ':');
          url = url.replace(PROTOCOL_AND_DOMAIN_REGEX, function(match) {
            protocolAndDomain = match;
            return '';
          });

          params = params || {};
          forEach(self.urlParams, function(_, urlParam) {
            val = params.hasOwnProperty(urlParam) ? params[urlParam] : self.defaults[urlParam];
            if (angular.isDefined(val) && val !== null) {
              encodedVal = encodeUriSegment(val);
              url = url.replace(new RegExp(":" + urlParam + "(\\W|$)", "g"), function(match, p1) {
                return encodedVal + p1;
              });
            } else {
              url = url.replace(new RegExp("(\/?):" + urlParam + "(\\W|$)", "g"), function(match,
                  leadingSlashes, tail) {
                if (tail.charAt(0) == '/') {
                  return tail;
                } else {
                  return leadingSlashes + tail;
                }
              });
            }
          });

          // strip trailing slashes and set the url (unless this behavior is specifically disabled)
          if (self.defaults.stripTrailingSlashes) {
            url = url.replace(/\/+$/, '') || '/';
          }

          // then replace collapse `/.` if found in the last URL path segment before the query
          // E.g. `http://url.com/id./format?q=x` becomes `http://url.com/id.format?q=x`
          url = url.replace(/\/\.(?=\w+($|\?))/, '.');
          // replace escaped `/\.` with `/.`
          config.url = protocolAndDomain + url.replace(/\/\\\./, '/.');


          // set params - delegate param encoding to $http
          forEach(params, function(value, key) {
            if (!self.urlParams[key]) {
              config.params = config.params || {};
              config.params[key] = value;
            }
          });
        }
      };


      function resourceFactory(url, paramDefaults, actions, options) {
        var route = new Route(url, options);

        actions = extend({}, provider.defaults.actions, actions);

        function extractParams(data, actionParams) {
          var ids = {};
          actionParams = extend({}, paramDefaults, actionParams);
          forEach(actionParams, function(value, key) {
            if (isFunction(value)) { value = value(); }
            ids[key] = value && value.charAt && value.charAt(0) == '@' ?
              lookupDottedPath(data, value.substr(1)) : value;
          });
          return ids;
        }

        function defaultResponseInterceptor(response) {
          return response.resource;
        }

        function Resource(value) {
          shallowClearAndCopy(value || {}, this);
        }

        Resource.prototype.toJSON = function() {
          var data = extend({}, this);
          delete data.$promise;
          delete data.$resolved;
          return data;
        };

        forEach(actions, function(action, name) {
          var hasBody = /^(POST|PUT|PATCH)$/i.test(action.method);

          Resource[name] = function(a1, a2, a3, a4) {
            var params = {}, data, success, error;

            /* jshint -W086 */ /* (purposefully fall through case statements) */
            switch (arguments.length) {
              case 4:
                error = a4;
                success = a3;
              //fallthrough
              case 3:
              case 2:
                if (isFunction(a2)) {
                  if (isFunction(a1)) {
                    success = a1;
                    error = a2;
                    break;
                  }

                  success = a2;
                  error = a3;
                  //fallthrough
                } else {
                  params = a1;
                  data = a2;
                  success = a3;
                  break;
                }
              case 1:
                if (isFunction(a1)) success = a1;
                else if (hasBody) data = a1;
                else params = a1;
                break;
              case 0: break;
              default:
                throw $resourceMinErr('badargs',
                  "Expected up to 4 arguments [params, data, success, error], got {0} arguments",
                  arguments.length);
            }
            /* jshint +W086 */ /* (purposefully fall through case statements) */

            var isInstanceCall = this instanceof Resource;
            var value = isInstanceCall ? data : (action.isArray ? [] : new Resource(data));
            var httpConfig = {};
            var responseInterceptor = action.interceptor && action.interceptor.response ||
              defaultResponseInterceptor;
            var responseErrorInterceptor = action.interceptor && action.interceptor.responseError ||
              undefined;

            forEach(action, function(value, key) {
              switch (key) {
                default:
                  httpConfig[key] = copy(value);
                  break;
                case 'params':
                case 'isArray':
                case 'interceptor':
                  break;
                case 'timeout':
                  httpConfig[key] = value;
                  break;
              }
            });

            if (hasBody) httpConfig.data = data;
            route.setUrlParams(httpConfig,
              extend({}, extractParams(data, action.params || {}), params),
              action.url);

            var promise = $http(httpConfig).then(function(response) {
              var data = response.data,
                promise = value.$promise;

              if (data) {
                // Need to convert action.isArray to boolean in case it is undefined
                // jshint -W018
                if (angular.isArray(data) !== (!!action.isArray)) {
                  throw $resourceMinErr('badcfg',
                      'Error in resource configuration for action `{0}`. Expected response to ' +
                      'contain an {1} but got an {2} (Request: {3} {4})', name, action.isArray ? 'array' : 'object',
                    angular.isArray(data) ? 'array' : 'object', httpConfig.method, httpConfig.url);
                }
                // jshint +W018
                if (action.isArray) {
                  value.length = 0;
                  forEach(data, function(item) {
                    if (typeof item === "object") {
                      value.push(new Resource(item));
                    } else {
                      // Valid JSON values may be string literals, and these should not be converted
                      // into objects. These items will not have access to the Resource prototype
                      // methods, but unfortunately there
                      value.push(item);
                    }
                  });
                } else {
                  shallowClearAndCopy(data, value);
                  value.$promise = promise;
                }
              }

              value.$resolved = true;

              response.resource = value;

              return response;
            }, function(response) {
              value.$resolved = true;

              (error || noop)(response);

              return $q.reject(response);
            });

            promise = promise.then(
              function(response) {
                var value = responseInterceptor(response);
                (success || noop)(value, response.headers);
                return value;
              },
              responseErrorInterceptor);

            if (!isInstanceCall) {
              // we are creating instance / collection
              // - set the initial promise
              // - return the instance / collection
              value.$promise = promise;
              value.$resolved = false;

              return value;
            }

            // instance call
            return promise;
          };


          Resource.prototype['$' + name] = function(params, success, error) {
            if (isFunction(params)) {
              error = success; success = params; params = {};
            }
            var result = Resource[name].call(this, params, this, success, error);
            return result.$promise || result;
          };
        });

        Resource.bind = function(additionalParamDefaults) {
          return resourceFactory(url, extend({}, paramDefaults, additionalParamDefaults), actions);
        };

        return Resource;
      }

      return resourceFactory;
    }];
  });


})(window, window.angular);

//! moment.js
//! version : 2.10.6
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, function () { 'use strict';

    var hookCallback;

    function utils_hooks__hooks () {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback (callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return Object.prototype.toString.call(input) === '[object Array]';
    }

    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function create_utc__createUTC (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty           : false,
            unusedTokens    : [],
            unusedInput     : [],
            overflow        : -2,
            charsLeftOver   : 0,
            nullInput       : false,
            invalidMonth    : null,
            invalidFormat   : false,
            userInvalidated : false,
            iso             : false
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    function valid__isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            m._isValid = !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated;

            if (m._strict) {
                m._isValid = m._isValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }
        }
        return m._isValid;
    }

    function valid__createInvalid (flags) {
        var m = create_utc__createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        }
        else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    var momentProperties = utils_hooks__hooks.momentProperties = [];

    function copyConfig(to, from) {
        var i, prop, val;

        if (typeof from._isAMomentObject !== 'undefined') {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (typeof from._i !== 'undefined') {
            to._i = from._i;
        }
        if (typeof from._f !== 'undefined') {
            to._f = from._f;
        }
        if (typeof from._l !== 'undefined') {
            to._l = from._l;
        }
        if (typeof from._strict !== 'undefined') {
            to._strict = from._strict;
        }
        if (typeof from._tzm !== 'undefined') {
            to._tzm = from._tzm;
        }
        if (typeof from._isUTC !== 'undefined') {
            to._isUTC = from._isUTC;
        }
        if (typeof from._offset !== 'undefined') {
            to._offset = from._offset;
        }
        if (typeof from._pf !== 'undefined') {
            to._pf = getParsingFlags(from);
        }
        if (typeof from._locale !== 'undefined') {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i in momentProperties) {
                prop = momentProperties[i];
                val = from[prop];
                if (typeof val !== 'undefined') {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            utils_hooks__hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment (obj) {
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }

    function absFloor (number) {
        if (number < 0) {
            return Math.ceil(number);
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function Locale() {
    }

    var locales = {};
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return null;
    }

    function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!locales[name] && typeof module !== 'undefined' &&
                module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                require('./locale/' + name);
                // because defineLocale currently also sets the global locale, we
                // want to undo that for lazy loaded locales
                locale_locales__getSetGlobalLocale(oldLocale);
            } catch (e) { }
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function locale_locales__getSetGlobalLocale (key, values) {
        var data;
        if (key) {
            if (typeof values === 'undefined') {
                data = locale_locales__getLocale(key);
            }
            else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale (name, values) {
        if (values !== null) {
            values.abbr = name;
            locales[name] = locales[name] || new Locale();
            locales[name].set(values);

            // backwards compat for now: also set the locale
            locale_locales__getSetGlobalLocale(name);

            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    // returns locale data
    function locale_locales__getLocale (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    var aliases = {};

    function addUnitAlias (unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    function makeGetSet (unit, keepTime) {
        return function (value) {
            if (value != null) {
                get_set__set(this, unit, value);
                utils_hooks__hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get_set__get(this, unit);
            }
        };
    }

    function get_set__get (mom, unit) {
        return mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]();
    }

    function get_set__set (mom, unit, value) {
        return mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
    }

    // MOMENTS

    function getSet (units, value) {
        var unit;
        if (typeof units === 'object') {
            for (unit in units) {
                this.set(unit, units[unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (typeof this[units] === 'function') {
                return this[units](value);
            }
        }
        return this;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken (token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '';
            for (i = 0; i < length; i++) {
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var match1         = /\d/;            //       0 - 9
    var match2         = /\d\d/;          //      00 - 99
    var match3         = /\d{3}/;         //     000 - 999
    var match4         = /\d{4}/;         //    0000 - 9999
    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
    var match1to2      = /\d\d?/;         //       0 - 99
    var match1to3      = /\d{1,3}/;       //       0 - 999
    var match1to4      = /\d{1,4}/;       //       0 - 9999
    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

    var matchUnsigned  = /\d+/;           //       0 - inf
    var matchSigned    = /[+-]?\d+/;      //    -inf - inf

    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

    // any word (or two) characters or numbers including two/three word month in arabic.
    var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;

    var regexes = {};

    function isFunction (sth) {
        // https://github.com/moment/moment/issues/2325
        return typeof sth === 'function' &&
            Object.prototype.toString.call(sth) === '[object Function]';
    }


    function addRegexToken (token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }

    function getParseRegexForToken (token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken (token, callback) {
        var i, func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (typeof callback === 'number') {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken (token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;

    function daysInMonth(year, month) {
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PARSING

    addRegexToken('M',    match1to2);
    addRegexToken('MM',   match1to2, match2);
    addRegexToken('MMM',  matchWord);
    addRegexToken('MMMM', matchWord);

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths (m) {
        return this._months[m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort (m) {
        return this._monthsShort[m.month()];
    }

    function localeMonthsParse (monthName, format, strict) {
        var i, mom, regex;

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = create_utc__createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth (mom, value) {
        var dayOfMonth;

        // TODO: Move this out of here!
        if (typeof value === 'string') {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (typeof value !== 'number') {
                return mom;
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth (value) {
        if (value != null) {
            setMonth(this, value);
            utils_hooks__hooks.updateOffset(this, true);
            return this;
        } else {
            return get_set__get(this, 'Month');
        }
    }

    function getDaysInMonth () {
        return daysInMonth(this.year(), this.month());
    }

    function checkOverflow (m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    function warn(msg) {
        if (utils_hooks__hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (firstTime) {
                warn(msg + '\n' + (new Error()).stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    utils_hooks__hooks.suppressDeprecationWarnings = false;

    var from_string__isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

    var isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d{2}-\d{2}/],
        ['YYYY-MM-DD', /\d{4}-\d{2}-\d{2}/],
        ['GGGG-[W]WW-E', /\d{4}-W\d{2}-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d{2}/],
        ['YYYY-DDD', /\d{4}-\d{3}/]
    ];

    // iso time formats and regexes
    var isoTimes = [
        ['HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
        ['HH:mm', /(T| )\d\d:\d\d/],
        ['HH', /(T| )\d\d/]
    ];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    // date from iso format
    function configFromISO(config) {
        var i, l,
            string = config._i,
            match = from_string__isoRegex.exec(string);

        if (match) {
            getParsingFlags(config).iso = true;
            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(string)) {
                    config._f = isoDates[i][0];
                    break;
                }
            }
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(string)) {
                    // match[6] should be 'T' or space
                    config._f += (match[6] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (string.match(matchOffset)) {
                config._f += 'Z';
            }
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
            utils_hooks__hooks.createFromInputFallback(config);
        }
    }

    utils_hooks__hooks.createFromInputFallback = deprecate(
        'moment construction falls back to js Date. This is ' +
        'discouraged and will be removed in upcoming major ' +
        'release. Please refer to ' +
        'https://github.com/moment/moment/issues/1407 for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    function createDate (y, m, d, h, M, s, ms) {
        //can't just apply() to create a date:
        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var date = new Date(y, m, d, h, M, s, ms);

        //the date constructor doesn't accept years < 1970
        if (y < 1970) {
            date.setFullYear(y);
        }
        return date;
    }

    function createUTCDate (y) {
        var date = new Date(Date.UTC.apply(null, arguments));
        if (y < 1970) {
            date.setUTCFullYear(y);
        }
        return date;
    }

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY',   4],       0, 'year');
    addFormatToken(0, ['YYYYY',  5],       0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PARSING

    addRegexToken('Y',      matchSigned);
    addRegexToken('YY',     match1to2, match2);
    addRegexToken('YYYY',   match1to4, match4);
    addRegexToken('YYYYY',  match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? utils_hooks__hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // HOOKS

    utils_hooks__hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', false);

    function getIsLeapYear () {
        return isLeapYear(this.year());
    }

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PARSING

    addRegexToken('w',  match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W',  match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // firstDayOfWeek       0 = sun, 6 = sat
    //                      the day of the week that starts the week
    //                      (usually sunday or monday)
    // firstDayOfWeekOfYear 0 = sun, 6 = sat
    //                      the first week is the week that contains the first
    //                      of this day of the week
    //                      (eg. ISO weeks use thursday (4))
    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
        var end = firstDayOfWeekOfYear - firstDayOfWeek,
            daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
            adjustedMoment;


        if (daysToDayOfWeek > end) {
            daysToDayOfWeek -= 7;
        }

        if (daysToDayOfWeek < end - 7) {
            daysToDayOfWeek += 7;
        }

        adjustedMoment = local__createLocal(mom).add(daysToDayOfWeek, 'd');
        return {
            week: Math.ceil(adjustedMoment.dayOfYear() / 7),
            year: adjustedMoment.year()
        };
    }

    // LOCALES

    function localeWeek (mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    };

    function localeFirstDayOfWeek () {
        return this._week.dow;
    }

    function localeFirstDayOfYear () {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek (input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek (input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PARSING

    addRegexToken('DDD',  match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
        var week1Jan = 6 + firstDayOfWeek - firstDayOfWeekOfYear, janX = createUTCDate(year, 0, 1 + week1Jan), d = janX.getUTCDay(), dayOfYear;
        if (d < firstDayOfWeek) {
            d += 7;
        }

        weekday = weekday != null ? 1 * weekday : firstDayOfWeek;

        dayOfYear = 1 + week1Jan + 7 * (week - 1) - d + weekday;

        return {
            year: dayOfYear > 0 ? year : year - 1,
            dayOfYear: dayOfYear > 0 ?  dayOfYear : daysInYear(year - 1) + dayOfYear
        };
    }

    // MOMENTS

    function getSetDayOfYear (input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    }

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        var now = new Date();
        if (config._useUTC) {
            return [now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()];
        }
        return [now.getFullYear(), now.getMonth(), now.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray (config) {
        var i, date, input = [], currentDate, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse)) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year);
            week = defaults(w.w, 1);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < dow) {
                    ++week;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from begining of week
                weekday = w.e + dow;
            } else {
                // default to begining of week
                weekday = dow;
            }
        }
        temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow);

        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }

    utils_hooks__hooks.ISO_8601 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === utils_hooks__hooks.ISO_8601) {
            configFromISO(config);
            return;
        }

        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (getParsingFlags(config).bigHour === true &&
                config._a[HOUR] <= 12 &&
                config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }


    function meridiemFixWrap (locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!valid__isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = [i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond];

        configFromArray(config);
    }

    function createFromConfig (config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig (config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || locale_locales__getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return valid__createInvalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        } else if (isDate(input)) {
            config._d = input;
        } else {
            configFromInput(config);
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (input === undefined) {
            config._d = new Date();
        } else if (isDate(input)) {
            config._d = new Date(+input);
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (typeof(input) === 'object') {
            configFromObject(config);
        } else if (typeof(input) === 'number') {
            // from milliseconds
            config._d = new Date(input);
        } else {
            utils_hooks__hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC (input, format, locale, strict, isUTC) {
        var c = {};

        if (typeof(locale) === 'boolean') {
            strict = locale;
            locale = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function local__createLocal (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
         'moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',
         function () {
             var other = local__createLocal.apply(null, arguments);
             return other < this ? this : other;
         }
     );

    var prototypeMax = deprecate(
        'moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',
        function () {
            var other = local__createLocal.apply(null, arguments);
            return other > this ? this : other;
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return local__createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    function Duration (duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 36e5; // 1000 * 60 * 60
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = locale_locales__getLocale();

        this._bubble();
    }

    function isDuration (obj) {
        return obj instanceof Duration;
    }

    function offset (token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z',  matchOffset);
    addRegexToken('ZZ', matchOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(string) {
        var matches = ((string || '').match(matchOffset) || []);
        var chunk   = matches[matches.length - 1] || [];
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? +input : +local__createLocal(input)) - (+res);
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(+res._d + diff);
            utils_hooks__hooks.updateOffset(res, false);
            return res;
        } else {
            return local__createLocal(input).local();
        }
    }

    function getDateOffset (m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    utils_hooks__hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset (input, keepLocalTime) {
        var offset = this._offset || 0,
            localAdjust;
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(input);
            }
            if (Math.abs(input) < 16) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    add_subtract__addSubtract(this, create__createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    utils_hooks__hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone (input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC (keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal (keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset () {
        if (this._tzm) {
            this.utcOffset(this._tzm);
        } else if (typeof this._i === 'string') {
            this.utcOffset(offsetFromString(this._i));
        }
        return this;
    }

    function hasAlignedHourOffset (input) {
        input = input ? local__createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime () {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted () {
        if (typeof this._isDSTShifted !== 'undefined') {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? create_utc__createUTC(c._a) : local__createLocal(c._a);
            this._isDSTShifted = this.isValid() &&
                compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal () {
        return !this._isUTC;
    }

    function isUtcOffset () {
        return this._isUTC;
    }

    function isUtc () {
        return this._isUTC && this._offset === 0;
    }

    var aspNetRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    var create__isoRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;

    function create__createDuration (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms : input._milliseconds,
                d  : input._days,
                M  : input._months
            };
        } else if (typeof input === 'number') {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y  : 0,
                d  : toInt(match[DATE])        * sign,
                h  : toInt(match[HOUR])        * sign,
                m  : toInt(match[MINUTE])      * sign,
                s  : toInt(match[SECOND])      * sign,
                ms : toInt(match[MILLISECOND]) * sign
            };
        } else if (!!(match = create__isoRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y : parseIso(match[2], sign),
                M : parseIso(match[3], sign),
                d : parseIso(match[4], sign),
                h : parseIso(match[5], sign),
                m : parseIso(match[6], sign),
                s : parseIso(match[7], sign),
                w : parseIso(match[8], sign)
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    create__createDuration.fn = Duration.prototype;

    function parseIso (inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {milliseconds: 0, months: 0};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = create__createDuration(val, period);
            add_subtract__addSubtract(this, dur, direction);
            return this;
        };
    }

    function add_subtract__addSubtract (mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = duration._days,
            months = duration._months;
        updateOffset = updateOffset == null ? true : updateOffset;

        if (milliseconds) {
            mom._d.setTime(+mom._d + milliseconds * isAdding);
        }
        if (days) {
            get_set__set(mom, 'Date', get_set__get(mom, 'Date') + days * isAdding);
        }
        if (months) {
            setMonth(mom, get_set__get(mom, 'Month') + months * isAdding);
        }
        if (updateOffset) {
            utils_hooks__hooks.updateOffset(mom, days || months);
        }
    }

    var add_subtract__add      = createAdder(1, 'add');
    var add_subtract__subtract = createAdder(-1, 'subtract');

    function moment_calendar__calendar (time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || local__createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            diff = this.diff(sod, 'days', true),
            format = diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                diff < 1 ? 'sameDay' :
                diff < 2 ? 'nextDay' :
                diff < 7 ? 'nextWeek' : 'sameElse';
        return this.format(formats && formats[format] || this.localeData().calendar(format, this, local__createLocal(now)));
    }

    function clone () {
        return new Moment(this);
    }

    function isAfter (input, units) {
        var inputMs;
        units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
        if (units === 'millisecond') {
            input = isMoment(input) ? input : local__createLocal(input);
            return +this > +input;
        } else {
            inputMs = isMoment(input) ? +input : +local__createLocal(input);
            return inputMs < +this.clone().startOf(units);
        }
    }

    function isBefore (input, units) {
        var inputMs;
        units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
        if (units === 'millisecond') {
            input = isMoment(input) ? input : local__createLocal(input);
            return +this < +input;
        } else {
            inputMs = isMoment(input) ? +input : +local__createLocal(input);
            return +this.clone().endOf(units) < inputMs;
        }
    }

    function isBetween (from, to, units) {
        return this.isAfter(from, units) && this.isBefore(to, units);
    }

    function isSame (input, units) {
        var inputMs;
        units = normalizeUnits(units || 'millisecond');
        if (units === 'millisecond') {
            input = isMoment(input) ? input : local__createLocal(input);
            return +this === +input;
        } else {
            inputMs = +local__createLocal(input);
            return +(this.clone().startOf(units)) <= inputMs && inputMs <= +(this.clone().endOf(units));
        }
    }

    function diff (input, units, asFloat) {
        var that = cloneWithOffset(input, this),
            zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4,
            delta, output;

        units = normalizeUnits(units);

        if (units === 'year' || units === 'month' || units === 'quarter') {
            output = monthDiff(this, that);
            if (units === 'quarter') {
                output = output / 3;
            } else if (units === 'year') {
                output = output / 12;
            }
        } else {
            delta = this - that;
            output = units === 'second' ? delta / 1e3 : // 1000
                units === 'minute' ? delta / 6e4 : // 1000 * 60
                units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
                units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
                units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
                delta;
        }
        return asFloat ? output : absFloor(output);
    }

    function monthDiff (a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        return -(wholeMonthDiff + adjust);
    }

    utils_hooks__hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';

    function toString () {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function moment_format__toISOString () {
        var m = this.clone().utc();
        if (0 < m.year() && m.year() <= 9999) {
            if ('function' === typeof Date.prototype.toISOString) {
                // native implementation is ~50x faster, use it when we can
                return this.toDate().toISOString();
            } else {
                return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            }
        } else {
            return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        }
    }

    function format (inputString) {
        var output = formatMoment(this, inputString || utils_hooks__hooks.defaultFormat);
        return this.localeData().postformat(output);
    }

    function from (time, withoutSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }
        return create__createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
    }

    function fromNow (withoutSuffix) {
        return this.from(local__createLocal(), withoutSuffix);
    }

    function to (time, withoutSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }
        return create__createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
    }

    function toNow (withoutSuffix) {
        return this.to(local__createLocal(), withoutSuffix);
    }

    function locale (key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = locale_locales__getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData () {
        return this._locale;
    }

    function startOf (units) {
        units = normalizeUnits(units);
        // the following switch intentionally omits break keywords
        // to utilize falling through the cases.
        switch (units) {
        case 'year':
            this.month(0);
            /* falls through */
        case 'quarter':
        case 'month':
            this.date(1);
            /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
            this.hours(0);
            /* falls through */
        case 'hour':
            this.minutes(0);
            /* falls through */
        case 'minute':
            this.seconds(0);
            /* falls through */
        case 'second':
            this.milliseconds(0);
        }

        // weeks are a special case
        if (units === 'week') {
            this.weekday(0);
        }
        if (units === 'isoWeek') {
            this.isoWeekday(1);
        }

        // quarters are also special
        if (units === 'quarter') {
            this.month(Math.floor(this.month() / 3) * 3);
        }

        return this;
    }

    function endOf (units) {
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond') {
            return this;
        }
        return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
    }

    function to_type__valueOf () {
        return +this._d - ((this._offset || 0) * 60000);
    }

    function unix () {
        return Math.floor(+this / 1000);
    }

    function toDate () {
        return this._offset ? new Date(+this) : this._d;
    }

    function toArray () {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject () {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }

    function moment_valid__isValid () {
        return valid__isValid(this);
    }

    function parsingFlags () {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt () {
        return getParsingFlags(this).overflow;
    }

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken (token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg',     'weekYear');
    addWeekYearFormatToken('ggggg',    'weekYear');
    addWeekYearFormatToken('GGGG',  'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PARSING

    addRegexToken('G',      matchSigned);
    addRegexToken('g',      matchSigned);
    addRegexToken('GG',     match1to2, match2);
    addRegexToken('gg',     match1to2, match2);
    addRegexToken('GGGG',   match1to4, match4);
    addRegexToken('gggg',   match1to4, match4);
    addRegexToken('GGGGG',  match1to6, match6);
    addRegexToken('ggggg',  match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = utils_hooks__hooks.parseTwoDigitYear(input);
    });

    // HELPERS

    function weeksInYear(year, dow, doy) {
        return weekOfYear(local__createLocal([year, 11, 31 + dow - doy]), dow, doy).week;
    }

    // MOMENTS

    function getSetWeekYear (input) {
        var year = weekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
        return input == null ? year : this.add((input - year), 'y');
    }

    function getSetISOWeekYear (input) {
        var year = weekOfYear(this, 1, 4).year;
        return input == null ? year : this.add((input - year), 'y');
    }

    function getISOWeeksInYear () {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear () {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    addFormatToken('Q', 0, 0, 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter (input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PARSING

    addRegexToken('D',  match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0], 10);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PARSING

    addRegexToken('d',    match1to2);
    addRegexToken('e',    match1to2);
    addRegexToken('E',    match1to2);
    addRegexToken('dd',   matchWord);
    addRegexToken('ddd',  matchWord);
    addRegexToken('dddd', matchWord);

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config) {
        var weekday = config._locale.weekdaysParse(input);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    // LOCALES

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays (m) {
        return this._weekdays[m.day()];
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort (m) {
        return this._weekdaysShort[m.day()];
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin (m) {
        return this._weekdaysMin[m.day()];
    }

    function localeWeekdaysParse (weekdayName) {
        var i, mom, regex;

        this._weekdaysParse = this._weekdaysParse || [];

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            if (!this._weekdaysParse[i]) {
                mom = local__createLocal([2000, 1]).day(i);
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek (input) {
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek (input) {
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek (input) {
        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.
        return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, function () {
        return this.hours() % 12 || 12;
    });

    function meridiem (token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PARSING

    function matchMeridiem (isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a',  matchMeridiem);
    addRegexToken('A',  matchMeridiem);
    addRegexToken('H',  match1to2);
    addRegexToken('h',  match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });

    // LOCALES

    function localeIsPM (input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return ((input + '').toLowerCase().charAt(0) === 'p');
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }


    // MOMENTS

    // Setting the hour should keep the time, because the user explicitly
    // specified which hour he wants. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet('Hours', true);

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PARSING

    addRegexToken('m',  match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PARSING

    addRegexToken('s',  match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });


    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PARSING

    addRegexToken('S',    match1to3, match1);
    addRegexToken('SS',   match1to3, match2);
    addRegexToken('SSS',  match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

    addFormatToken('z',  0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr () {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName () {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var momentPrototype__proto = Moment.prototype;

    momentPrototype__proto.add          = add_subtract__add;
    momentPrototype__proto.calendar     = moment_calendar__calendar;
    momentPrototype__proto.clone        = clone;
    momentPrototype__proto.diff         = diff;
    momentPrototype__proto.endOf        = endOf;
    momentPrototype__proto.format       = format;
    momentPrototype__proto.from         = from;
    momentPrototype__proto.fromNow      = fromNow;
    momentPrototype__proto.to           = to;
    momentPrototype__proto.toNow        = toNow;
    momentPrototype__proto.get          = getSet;
    momentPrototype__proto.invalidAt    = invalidAt;
    momentPrototype__proto.isAfter      = isAfter;
    momentPrototype__proto.isBefore     = isBefore;
    momentPrototype__proto.isBetween    = isBetween;
    momentPrototype__proto.isSame       = isSame;
    momentPrototype__proto.isValid      = moment_valid__isValid;
    momentPrototype__proto.lang         = lang;
    momentPrototype__proto.locale       = locale;
    momentPrototype__proto.localeData   = localeData;
    momentPrototype__proto.max          = prototypeMax;
    momentPrototype__proto.min          = prototypeMin;
    momentPrototype__proto.parsingFlags = parsingFlags;
    momentPrototype__proto.set          = getSet;
    momentPrototype__proto.startOf      = startOf;
    momentPrototype__proto.subtract     = add_subtract__subtract;
    momentPrototype__proto.toArray      = toArray;
    momentPrototype__proto.toObject     = toObject;
    momentPrototype__proto.toDate       = toDate;
    momentPrototype__proto.toISOString  = moment_format__toISOString;
    momentPrototype__proto.toJSON       = moment_format__toISOString;
    momentPrototype__proto.toString     = toString;
    momentPrototype__proto.unix         = unix;
    momentPrototype__proto.valueOf      = to_type__valueOf;

    // Year
    momentPrototype__proto.year       = getSetYear;
    momentPrototype__proto.isLeapYear = getIsLeapYear;

    // Week Year
    momentPrototype__proto.weekYear    = getSetWeekYear;
    momentPrototype__proto.isoWeekYear = getSetISOWeekYear;

    // Quarter
    momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter;

    // Month
    momentPrototype__proto.month       = getSetMonth;
    momentPrototype__proto.daysInMonth = getDaysInMonth;

    // Week
    momentPrototype__proto.week           = momentPrototype__proto.weeks        = getSetWeek;
    momentPrototype__proto.isoWeek        = momentPrototype__proto.isoWeeks     = getSetISOWeek;
    momentPrototype__proto.weeksInYear    = getWeeksInYear;
    momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;

    // Day
    momentPrototype__proto.date       = getSetDayOfMonth;
    momentPrototype__proto.day        = momentPrototype__proto.days             = getSetDayOfWeek;
    momentPrototype__proto.weekday    = getSetLocaleDayOfWeek;
    momentPrototype__proto.isoWeekday = getSetISODayOfWeek;
    momentPrototype__proto.dayOfYear  = getSetDayOfYear;

    // Hour
    momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;

    // Minute
    momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;

    // Second
    momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;

    // Millisecond
    momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond;

    // Offset
    momentPrototype__proto.utcOffset            = getSetOffset;
    momentPrototype__proto.utc                  = setOffsetToUTC;
    momentPrototype__proto.local                = setOffsetToLocal;
    momentPrototype__proto.parseZone            = setOffsetToParsedOffset;
    momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;
    momentPrototype__proto.isDST                = isDaylightSavingTime;
    momentPrototype__proto.isDSTShifted         = isDaylightSavingTimeShifted;
    momentPrototype__proto.isLocal              = isLocal;
    momentPrototype__proto.isUtcOffset          = isUtcOffset;
    momentPrototype__proto.isUtc                = isUtc;
    momentPrototype__proto.isUTC                = isUtc;

    // Timezone
    momentPrototype__proto.zoneAbbr = getZoneAbbr;
    momentPrototype__proto.zoneName = getZoneName;

    // Deprecations
    momentPrototype__proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    momentPrototype__proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    momentPrototype__proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    momentPrototype__proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779', getSetZone);

    var momentPrototype = momentPrototype__proto;

    function moment__createUnix (input) {
        return local__createLocal(input * 1000);
    }

    function moment__createInZone () {
        return local__createLocal.apply(null, arguments).parseZone();
    }

    var defaultCalendar = {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    };

    function locale_calendar__calendar (key, mom, now) {
        var output = this._calendar[key];
        return typeof output === 'function' ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS  : 'h:mm:ss A',
        LT   : 'h:mm A',
        L    : 'MM/DD/YYYY',
        LL   : 'MMMM D, YYYY',
        LLL  : 'MMMM D, YYYY h:mm A',
        LLLL : 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat (key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate () {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultOrdinalParse = /\d{1,2}/;

    function ordinal (number) {
        return this._ordinal.replace('%d', number);
    }

    function preParsePostFormat (string) {
        return string;
    }

    var defaultRelativeTime = {
        future : 'in %s',
        past   : '%s ago',
        s  : 'a few seconds',
        m  : 'a minute',
        mm : '%d minutes',
        h  : 'an hour',
        hh : '%d hours',
        d  : 'a day',
        dd : '%d days',
        M  : 'a month',
        MM : '%d months',
        y  : 'a year',
        yy : '%d years'
    };

    function relative__relativeTime (number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return (typeof output === 'function') ?
            output(number, withoutSuffix, string, isFuture) :
            output.replace(/%d/i, number);
    }

    function pastFuture (diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
    }

    function locale_set__set (config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (typeof prop === 'function') {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _ordinalParseLenient.
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);
    }

    var prototype__proto = Locale.prototype;

    prototype__proto._calendar       = defaultCalendar;
    prototype__proto.calendar        = locale_calendar__calendar;
    prototype__proto._longDateFormat = defaultLongDateFormat;
    prototype__proto.longDateFormat  = longDateFormat;
    prototype__proto._invalidDate    = defaultInvalidDate;
    prototype__proto.invalidDate     = invalidDate;
    prototype__proto._ordinal        = defaultOrdinal;
    prototype__proto.ordinal         = ordinal;
    prototype__proto._ordinalParse   = defaultOrdinalParse;
    prototype__proto.preparse        = preParsePostFormat;
    prototype__proto.postformat      = preParsePostFormat;
    prototype__proto._relativeTime   = defaultRelativeTime;
    prototype__proto.relativeTime    = relative__relativeTime;
    prototype__proto.pastFuture      = pastFuture;
    prototype__proto.set             = locale_set__set;

    // Month
    prototype__proto.months       =        localeMonths;
    prototype__proto._months      = defaultLocaleMonths;
    prototype__proto.monthsShort  =        localeMonthsShort;
    prototype__proto._monthsShort = defaultLocaleMonthsShort;
    prototype__proto.monthsParse  =        localeMonthsParse;

    // Week
    prototype__proto.week = localeWeek;
    prototype__proto._week = defaultLocaleWeek;
    prototype__proto.firstDayOfYear = localeFirstDayOfYear;
    prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;

    // Day of Week
    prototype__proto.weekdays       =        localeWeekdays;
    prototype__proto._weekdays      = defaultLocaleWeekdays;
    prototype__proto.weekdaysMin    =        localeWeekdaysMin;
    prototype__proto._weekdaysMin   = defaultLocaleWeekdaysMin;
    prototype__proto.weekdaysShort  =        localeWeekdaysShort;
    prototype__proto._weekdaysShort = defaultLocaleWeekdaysShort;
    prototype__proto.weekdaysParse  =        localeWeekdaysParse;

    // Hours
    prototype__proto.isPM = localeIsPM;
    prototype__proto._meridiemParse = defaultLocaleMeridiemParse;
    prototype__proto.meridiem = localeMeridiem;

    function lists__get (format, index, field, setter) {
        var locale = locale_locales__getLocale();
        var utc = create_utc__createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function list (format, index, field, count, setter) {
        if (typeof format === 'number') {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return lists__get(format, index, field, setter);
        }

        var i;
        var out = [];
        for (i = 0; i < count; i++) {
            out[i] = lists__get(format, i, field, setter);
        }
        return out;
    }

    function lists__listMonths (format, index) {
        return list(format, index, 'months', 12, 'month');
    }

    function lists__listMonthsShort (format, index) {
        return list(format, index, 'monthsShort', 12, 'month');
    }

    function lists__listWeekdays (format, index) {
        return list(format, index, 'weekdays', 7, 'day');
    }

    function lists__listWeekdaysShort (format, index) {
        return list(format, index, 'weekdaysShort', 7, 'day');
    }

    function lists__listWeekdaysMin (format, index) {
        return list(format, index, 'weekdaysMin', 7, 'day');
    }

    locale_locales__getSetGlobalLocale('en', {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    // Side effect imports
    utils_hooks__hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', locale_locales__getSetGlobalLocale);
    utils_hooks__hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', locale_locales__getLocale);

    var mathAbs = Math.abs;

    function duration_abs__abs () {
        var data           = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days         = mathAbs(this._days);
        this._months       = mathAbs(this._months);

        data.milliseconds  = mathAbs(data.milliseconds);
        data.seconds       = mathAbs(data.seconds);
        data.minutes       = mathAbs(data.minutes);
        data.hours         = mathAbs(data.hours);
        data.months        = mathAbs(data.months);
        data.years         = mathAbs(data.years);

        return this;
    }

    function duration_add_subtract__addSubtract (duration, input, value, direction) {
        var other = create__createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days         += direction * other._days;
        duration._months       += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function duration_add_subtract__add (input, value) {
        return duration_add_subtract__addSubtract(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function duration_add_subtract__subtract (input, value) {
        return duration_add_subtract__addSubtract(this, input, value, -1);
    }

    function absCeil (number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble () {
        var milliseconds = this._milliseconds;
        var days         = this._days;
        var months       = this._months;
        var data         = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds           = absFloor(milliseconds / 1000);
        data.seconds      = seconds % 60;

        minutes           = absFloor(seconds / 60);
        data.minutes      = minutes % 60;

        hours             = absFloor(minutes / 60);
        data.hours        = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days   = days;
        data.months = months;
        data.years  = years;

        return this;
    }

    function daysToMonths (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }

    function monthsToDays (months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }

    function as (units) {
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'year') {
            days   = this._days   + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            return units === 'month' ? months : months / 12;
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week'   : return days / 7     + milliseconds / 6048e5;
                case 'day'    : return days         + milliseconds / 864e5;
                case 'hour'   : return days * 24    + milliseconds / 36e5;
                case 'minute' : return days * 1440  + milliseconds / 6e4;
                case 'second' : return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
                default: throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function duration_as__valueOf () {
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs (alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds      = makeAs('s');
    var asMinutes      = makeAs('m');
    var asHours        = makeAs('h');
    var asDays         = makeAs('d');
    var asWeeks        = makeAs('w');
    var asMonths       = makeAs('M');
    var asYears        = makeAs('y');

    function duration_get__get (units) {
        units = normalizeUnits(units);
        return this[units + 's']();
    }

    function makeGetter(name) {
        return function () {
            return this._data[name];
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds      = makeGetter('seconds');
    var minutes      = makeGetter('minutes');
    var hours        = makeGetter('hours');
    var days         = makeGetter('days');
    var months       = makeGetter('months');
    var years        = makeGetter('years');

    function weeks () {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        s: 45,  // seconds to minute
        m: 45,  // minutes to hour
        h: 22,  // hours to day
        d: 26,  // days to month
        M: 11   // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function duration_humanize__relativeTime (posNegDuration, withoutSuffix, locale) {
        var duration = create__createDuration(posNegDuration).abs();
        var seconds  = round(duration.as('s'));
        var minutes  = round(duration.as('m'));
        var hours    = round(duration.as('h'));
        var days     = round(duration.as('d'));
        var months   = round(duration.as('M'));
        var years    = round(duration.as('y'));

        var a = seconds < thresholds.s && ['s', seconds]  ||
                minutes === 1          && ['m']           ||
                minutes < thresholds.m && ['mm', minutes] ||
                hours   === 1          && ['h']           ||
                hours   < thresholds.h && ['hh', hours]   ||
                days    === 1          && ['d']           ||
                days    < thresholds.d && ['dd', days]    ||
                months  === 1          && ['M']           ||
                months  < thresholds.M && ['MM', months]  ||
                years   === 1          && ['y']           || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set a threshold for relative time strings
    function duration_humanize__getSetRelativeTimeThreshold (threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        return true;
    }

    function humanize (withSuffix) {
        var locale = this.localeData();
        var output = duration_humanize__relativeTime(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var iso_string__abs = Math.abs;

    function iso_string__toISOString() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        var seconds = iso_string__abs(this._milliseconds) / 1000;
        var days         = iso_string__abs(this._days);
        var months       = iso_string__abs(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes           = absFloor(seconds / 60);
        hours             = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years  = absFloor(months / 12);
        months %= 12;


        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds;
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        return (total < 0 ? '-' : '') +
            'P' +
            (Y ? Y + 'Y' : '') +
            (M ? M + 'M' : '') +
            (D ? D + 'D' : '') +
            ((h || m || s) ? 'T' : '') +
            (h ? h + 'H' : '') +
            (m ? m + 'M' : '') +
            (s ? s + 'S' : '');
    }

    var duration_prototype__proto = Duration.prototype;

    duration_prototype__proto.abs            = duration_abs__abs;
    duration_prototype__proto.add            = duration_add_subtract__add;
    duration_prototype__proto.subtract       = duration_add_subtract__subtract;
    duration_prototype__proto.as             = as;
    duration_prototype__proto.asMilliseconds = asMilliseconds;
    duration_prototype__proto.asSeconds      = asSeconds;
    duration_prototype__proto.asMinutes      = asMinutes;
    duration_prototype__proto.asHours        = asHours;
    duration_prototype__proto.asDays         = asDays;
    duration_prototype__proto.asWeeks        = asWeeks;
    duration_prototype__proto.asMonths       = asMonths;
    duration_prototype__proto.asYears        = asYears;
    duration_prototype__proto.valueOf        = duration_as__valueOf;
    duration_prototype__proto._bubble        = bubble;
    duration_prototype__proto.get            = duration_get__get;
    duration_prototype__proto.milliseconds   = milliseconds;
    duration_prototype__proto.seconds        = seconds;
    duration_prototype__proto.minutes        = minutes;
    duration_prototype__proto.hours          = hours;
    duration_prototype__proto.days           = days;
    duration_prototype__proto.weeks          = weeks;
    duration_prototype__proto.months         = months;
    duration_prototype__proto.years          = years;
    duration_prototype__proto.humanize       = humanize;
    duration_prototype__proto.toISOString    = iso_string__toISOString;
    duration_prototype__proto.toString       = iso_string__toISOString;
    duration_prototype__proto.toJSON         = iso_string__toISOString;
    duration_prototype__proto.locale         = locale;
    duration_prototype__proto.localeData     = localeData;

    // Deprecations
    duration_prototype__proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', iso_string__toISOString);
    duration_prototype__proto.lang = lang;

    // Side effect imports

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports


    utils_hooks__hooks.version = '2.10.6';

    setHookCallback(local__createLocal);

    utils_hooks__hooks.fn                    = momentPrototype;
    utils_hooks__hooks.min                   = min;
    utils_hooks__hooks.max                   = max;
    utils_hooks__hooks.utc                   = create_utc__createUTC;
    utils_hooks__hooks.unix                  = moment__createUnix;
    utils_hooks__hooks.months                = lists__listMonths;
    utils_hooks__hooks.isDate                = isDate;
    utils_hooks__hooks.locale                = locale_locales__getSetGlobalLocale;
    utils_hooks__hooks.invalid               = valid__createInvalid;
    utils_hooks__hooks.duration              = create__createDuration;
    utils_hooks__hooks.isMoment              = isMoment;
    utils_hooks__hooks.weekdays              = lists__listWeekdays;
    utils_hooks__hooks.parseZone             = moment__createInZone;
    utils_hooks__hooks.localeData            = locale_locales__getLocale;
    utils_hooks__hooks.isDuration            = isDuration;
    utils_hooks__hooks.monthsShort           = lists__listMonthsShort;
    utils_hooks__hooks.weekdaysMin           = lists__listWeekdaysMin;
    utils_hooks__hooks.defineLocale          = defineLocale;
    utils_hooks__hooks.weekdaysShort         = lists__listWeekdaysShort;
    utils_hooks__hooks.normalizeUnits        = normalizeUnits;
    utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;

    var _moment = utils_hooks__hooks;

    return _moment;

}));
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.io=e()}}(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}({1:[function(_dereq_,module,exports){module.exports=_dereq_("./lib/")},{"./lib/":2}],2:[function(_dereq_,module,exports){var url=_dereq_("./url");var parser=_dereq_("socket.io-parser");var Manager=_dereq_("./manager");var debug=_dereq_("debug")("socket.io-client");module.exports=exports=lookup;var cache=exports.managers={};function lookup(uri,opts){if(typeof uri=="object"){opts=uri;uri=undefined}opts=opts||{};var parsed=url(uri);var source=parsed.source;var id=parsed.id;var io;if(opts.forceNew||opts["force new connection"]||false===opts.multiplex){debug("ignoring socket cache for %s",source);io=Manager(source,opts)}else{if(!cache[id]){debug("new io instance for %s",source);cache[id]=Manager(source,opts)}io=cache[id]}return io.socket(parsed.path)}exports.protocol=parser.protocol;exports.connect=lookup;exports.Manager=_dereq_("./manager");exports.Socket=_dereq_("./socket")},{"./manager":3,"./socket":5,"./url":6,debug:9,"socket.io-parser":40}],3:[function(_dereq_,module,exports){var url=_dereq_("./url");var eio=_dereq_("engine.io-client");var Socket=_dereq_("./socket");var Emitter=_dereq_("component-emitter");var parser=_dereq_("socket.io-parser");var on=_dereq_("./on");var bind=_dereq_("component-bind");var object=_dereq_("object-component");var debug=_dereq_("debug")("socket.io-client:manager");var indexOf=_dereq_("indexof");module.exports=Manager;function Manager(uri,opts){if(!(this instanceof Manager))return new Manager(uri,opts);if(uri&&"object"==typeof uri){opts=uri;uri=undefined}opts=opts||{};opts.path=opts.path||"/socket.io";this.nsps={};this.subs=[];this.opts=opts;this.reconnection(opts.reconnection!==false);this.reconnectionAttempts(opts.reconnectionAttempts||Infinity);this.reconnectionDelay(opts.reconnectionDelay||1e3);this.reconnectionDelayMax(opts.reconnectionDelayMax||5e3);this.timeout(null==opts.timeout?2e4:opts.timeout);this.readyState="closed";this.uri=uri;this.connected=[];this.attempts=0;this.encoding=false;this.packetBuffer=[];this.encoder=new parser.Encoder;this.decoder=new parser.Decoder;this.autoConnect=opts.autoConnect!==false;if(this.autoConnect)this.open()}Manager.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var nsp in this.nsps){this.nsps[nsp].emit.apply(this.nsps[nsp],arguments)}};Emitter(Manager.prototype);Manager.prototype.reconnection=function(v){if(!arguments.length)return this._reconnection;this._reconnection=!!v;return this};Manager.prototype.reconnectionAttempts=function(v){if(!arguments.length)return this._reconnectionAttempts;this._reconnectionAttempts=v;return this};Manager.prototype.reconnectionDelay=function(v){if(!arguments.length)return this._reconnectionDelay;this._reconnectionDelay=v;return this};Manager.prototype.reconnectionDelayMax=function(v){if(!arguments.length)return this._reconnectionDelayMax;this._reconnectionDelayMax=v;return this};Manager.prototype.timeout=function(v){if(!arguments.length)return this._timeout;this._timeout=v;return this};Manager.prototype.maybeReconnectOnOpen=function(){if(!this.openReconnect&&!this.reconnecting&&this._reconnection&&this.attempts===0){this.openReconnect=true;this.reconnect()}};Manager.prototype.open=Manager.prototype.connect=function(fn){debug("readyState %s",this.readyState);if(~this.readyState.indexOf("open"))return this;debug("opening %s",this.uri);this.engine=eio(this.uri,this.opts);var socket=this.engine;var self=this;this.readyState="opening";this.skipReconnect=false;var openSub=on(socket,"open",function(){self.onopen();fn&&fn()});var errorSub=on(socket,"error",function(data){debug("connect_error");self.cleanup();self.readyState="closed";self.emitAll("connect_error",data);if(fn){var err=new Error("Connection error");err.data=data;fn(err)}self.maybeReconnectOnOpen()});if(false!==this._timeout){var timeout=this._timeout;debug("connect attempt will timeout after %d",timeout);var timer=setTimeout(function(){debug("connect attempt timed out after %d",timeout);openSub.destroy();socket.close();socket.emit("error","timeout");self.emitAll("connect_timeout",timeout)},timeout);this.subs.push({destroy:function(){clearTimeout(timer)}})}this.subs.push(openSub);this.subs.push(errorSub);return this};Manager.prototype.onopen=function(){debug("open");this.cleanup();this.readyState="open";this.emit("open");var socket=this.engine;this.subs.push(on(socket,"data",bind(this,"ondata")));this.subs.push(on(this.decoder,"decoded",bind(this,"ondecoded")));this.subs.push(on(socket,"error",bind(this,"onerror")));this.subs.push(on(socket,"close",bind(this,"onclose")))};Manager.prototype.ondata=function(data){this.decoder.add(data)};Manager.prototype.ondecoded=function(packet){this.emit("packet",packet)};Manager.prototype.onerror=function(err){debug("error",err);this.emitAll("error",err)};Manager.prototype.socket=function(nsp){var socket=this.nsps[nsp];if(!socket){socket=new Socket(this,nsp);this.nsps[nsp]=socket;var self=this;socket.on("connect",function(){if(!~indexOf(self.connected,socket)){self.connected.push(socket)}})}return socket};Manager.prototype.destroy=function(socket){var index=indexOf(this.connected,socket);if(~index)this.connected.splice(index,1);if(this.connected.length)return;this.close()};Manager.prototype.packet=function(packet){debug("writing packet %j",packet);var self=this;if(!self.encoding){self.encoding=true;this.encoder.encode(packet,function(encodedPackets){for(var i=0;i<encodedPackets.length;i++){self.engine.write(encodedPackets[i])}self.encoding=false;self.processPacketQueue()})}else{self.packetBuffer.push(packet)}};Manager.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var pack=this.packetBuffer.shift();this.packet(pack)}};Manager.prototype.cleanup=function(){var sub;while(sub=this.subs.shift())sub.destroy();this.packetBuffer=[];this.encoding=false;this.decoder.destroy()};Manager.prototype.close=Manager.prototype.disconnect=function(){this.skipReconnect=true;this.readyState="closed";this.engine&&this.engine.close()};Manager.prototype.onclose=function(reason){debug("close");this.cleanup();this.readyState="closed";this.emit("close",reason);if(this._reconnection&&!this.skipReconnect){this.reconnect()}};Manager.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var self=this;this.attempts++;if(this.attempts>this._reconnectionAttempts){debug("reconnect failed");this.emitAll("reconnect_failed");this.reconnecting=false}else{var delay=this.attempts*this.reconnectionDelay();delay=Math.min(delay,this.reconnectionDelayMax());debug("will wait %dms before reconnect attempt",delay);this.reconnecting=true;var timer=setTimeout(function(){if(self.skipReconnect)return;debug("attempting reconnect");self.emitAll("reconnect_attempt",self.attempts);self.emitAll("reconnecting",self.attempts);if(self.skipReconnect)return;self.open(function(err){if(err){debug("reconnect attempt error");self.reconnecting=false;self.reconnect();self.emitAll("reconnect_error",err.data)}else{debug("reconnect success");self.onreconnect()}})},delay);this.subs.push({destroy:function(){clearTimeout(timer)}})}};Manager.prototype.onreconnect=function(){var attempt=this.attempts;this.attempts=0;this.reconnecting=false;this.emitAll("reconnect",attempt)}},{"./on":4,"./socket":5,"./url":6,"component-bind":7,"component-emitter":8,debug:9,"engine.io-client":10,indexof:36,"object-component":37,"socket.io-parser":40}],4:[function(_dereq_,module,exports){module.exports=on;function on(obj,ev,fn){obj.on(ev,fn);return{destroy:function(){obj.removeListener(ev,fn)}}}},{}],5:[function(_dereq_,module,exports){var parser=_dereq_("socket.io-parser");var Emitter=_dereq_("component-emitter");var toArray=_dereq_("to-array");var on=_dereq_("./on");var bind=_dereq_("component-bind");var debug=_dereq_("debug")("socket.io-client:socket");var hasBin=_dereq_("has-binary");module.exports=exports=Socket;var events={connect:1,connect_error:1,connect_timeout:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1};var emit=Emitter.prototype.emit;function Socket(io,nsp){this.io=io;this.nsp=nsp;this.json=this;this.ids=0;this.acks={};if(this.io.autoConnect)this.open();this.receiveBuffer=[];this.sendBuffer=[];this.connected=false;this.disconnected=true}Emitter(Socket.prototype);Socket.prototype.subEvents=function(){if(this.subs)return;var io=this.io;this.subs=[on(io,"open",bind(this,"onopen")),on(io,"packet",bind(this,"onpacket")),on(io,"close",bind(this,"onclose"))]};Socket.prototype.open=Socket.prototype.connect=function(){if(this.connected)return this;this.subEvents();this.io.open();if("open"==this.io.readyState)this.onopen();return this};Socket.prototype.send=function(){var args=toArray(arguments);args.unshift("message");this.emit.apply(this,args);return this};Socket.prototype.emit=function(ev){if(events.hasOwnProperty(ev)){emit.apply(this,arguments);return this}var args=toArray(arguments);var parserType=parser.EVENT;if(hasBin(args)){parserType=parser.BINARY_EVENT}var packet={type:parserType,data:args};if("function"==typeof args[args.length-1]){debug("emitting packet with ack id %d",this.ids);this.acks[this.ids]=args.pop();packet.id=this.ids++}if(this.connected){this.packet(packet)}else{this.sendBuffer.push(packet)}return this};Socket.prototype.packet=function(packet){packet.nsp=this.nsp;this.io.packet(packet)};Socket.prototype.onopen=function(){debug("transport is open - connecting");if("/"!=this.nsp){this.packet({type:parser.CONNECT})}};Socket.prototype.onclose=function(reason){debug("close (%s)",reason);this.connected=false;this.disconnected=true;this.emit("disconnect",reason)};Socket.prototype.onpacket=function(packet){if(packet.nsp!=this.nsp)return;switch(packet.type){case parser.CONNECT:this.onconnect();break;case parser.EVENT:this.onevent(packet);break;case parser.BINARY_EVENT:this.onevent(packet);break;case parser.ACK:this.onack(packet);break;case parser.BINARY_ACK:this.onack(packet);break;case parser.DISCONNECT:this.ondisconnect();break;case parser.ERROR:this.emit("error",packet.data);break}};Socket.prototype.onevent=function(packet){var args=packet.data||[];debug("emitting event %j",args);if(null!=packet.id){debug("attaching ack callback to event");args.push(this.ack(packet.id))}if(this.connected){emit.apply(this,args)}else{this.receiveBuffer.push(args)}};Socket.prototype.ack=function(id){var self=this;var sent=false;return function(){if(sent)return;sent=true;var args=toArray(arguments);debug("sending ack %j",args);var type=hasBin(args)?parser.BINARY_ACK:parser.ACK;self.packet({type:type,id:id,data:args})}};Socket.prototype.onack=function(packet){debug("calling ack %s with %j",packet.id,packet.data);var fn=this.acks[packet.id];fn.apply(this,packet.data);delete this.acks[packet.id]};Socket.prototype.onconnect=function(){this.connected=true;this.disconnected=false;this.emit("connect");this.emitBuffered()};Socket.prototype.emitBuffered=function(){var i;for(i=0;i<this.receiveBuffer.length;i++){emit.apply(this,this.receiveBuffer[i])}this.receiveBuffer=[];for(i=0;i<this.sendBuffer.length;i++){this.packet(this.sendBuffer[i])}this.sendBuffer=[]};Socket.prototype.ondisconnect=function(){debug("server disconnect (%s)",this.nsp);this.destroy();this.onclose("io server disconnect")};Socket.prototype.destroy=function(){if(this.subs){for(var i=0;i<this.subs.length;i++){this.subs[i].destroy()}this.subs=null}this.io.destroy(this)};Socket.prototype.close=Socket.prototype.disconnect=function(){if(this.connected){debug("performing disconnect (%s)",this.nsp);this.packet({type:parser.DISCONNECT})}this.destroy();if(this.connected){this.onclose("io client disconnect")}return this}},{"./on":4,"component-bind":7,"component-emitter":8,debug:9,"has-binary":32,"socket.io-parser":40,"to-array":44}],6:[function(_dereq_,module,exports){(function(global){var parseuri=_dereq_("parseuri");var debug=_dereq_("debug")("socket.io-client:url");module.exports=url;function url(uri,loc){var obj=uri;var loc=loc||global.location;if(null==uri)uri=loc.protocol+"//"+loc.hostname;if("string"==typeof uri){if("/"==uri.charAt(0)){if("/"==uri.charAt(1)){uri=loc.protocol+uri}else{uri=loc.hostname+uri}}if(!/^(https?|wss?):\/\//.test(uri)){debug("protocol-less url %s",uri);if("undefined"!=typeof loc){uri=loc.protocol+"//"+uri}else{uri="https://"+uri}}debug("parse %s",uri);obj=parseuri(uri)}if(!obj.port){if(/^(http|ws)$/.test(obj.protocol)){obj.port="80"}else if(/^(http|ws)s$/.test(obj.protocol)){obj.port="443"}}obj.path=obj.path||"/";obj.id=obj.protocol+"://"+obj.host+":"+obj.port;obj.href=obj.protocol+"://"+obj.host+(loc&&loc.port==obj.port?"":":"+obj.port);return obj}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{debug:9,parseuri:38}],7:[function(_dereq_,module,exports){var slice=[].slice;module.exports=function(obj,fn){if("string"==typeof fn)fn=obj[fn];if("function"!=typeof fn)throw new Error("bind() requires a function");var args=slice.call(arguments,2);return function(){return fn.apply(obj,args.concat(slice.call(arguments)))}}},{}],8:[function(_dereq_,module,exports){module.exports=Emitter;function Emitter(obj){if(obj)return mixin(obj)}function mixin(obj){for(var key in Emitter.prototype){obj[key]=Emitter.prototype[key]}return obj}Emitter.prototype.on=Emitter.prototype.addEventListener=function(event,fn){this._callbacks=this._callbacks||{};(this._callbacks[event]=this._callbacks[event]||[]).push(fn);return this};Emitter.prototype.once=function(event,fn){var self=this;this._callbacks=this._callbacks||{};function on(){self.off(event,on);fn.apply(this,arguments)}on.fn=fn;this.on(event,on);return this};Emitter.prototype.off=Emitter.prototype.removeListener=Emitter.prototype.removeAllListeners=Emitter.prototype.removeEventListener=function(event,fn){this._callbacks=this._callbacks||{};if(0==arguments.length){this._callbacks={};return this}var callbacks=this._callbacks[event];if(!callbacks)return this;if(1==arguments.length){delete this._callbacks[event];return this}var cb;for(var i=0;i<callbacks.length;i++){cb=callbacks[i];if(cb===fn||cb.fn===fn){callbacks.splice(i,1);break}}return this};Emitter.prototype.emit=function(event){this._callbacks=this._callbacks||{};var args=[].slice.call(arguments,1),callbacks=this._callbacks[event];if(callbacks){callbacks=callbacks.slice(0);for(var i=0,len=callbacks.length;i<len;++i){callbacks[i].apply(this,args)}}return this};Emitter.prototype.listeners=function(event){this._callbacks=this._callbacks||{};return this._callbacks[event]||[]};Emitter.prototype.hasListeners=function(event){return!!this.listeners(event).length}},{}],9:[function(_dereq_,module,exports){module.exports=debug;function debug(name){if(!debug.enabled(name))return function(){};return function(fmt){fmt=coerce(fmt);var curr=new Date;var ms=curr-(debug[name]||curr);debug[name]=curr;fmt=name+" "+fmt+" +"+debug.humanize(ms);window.console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}}debug.names=[];debug.skips=[];debug.enable=function(name){try{localStorage.debug=name}catch(e){}var split=(name||"").split(/[\s,]+/),len=split.length;for(var i=0;i<len;i++){name=split[i].replace("*",".*?");if(name[0]==="-"){debug.skips.push(new RegExp("^"+name.substr(1)+"$"))}else{debug.names.push(new RegExp("^"+name+"$"))}}};debug.disable=function(){debug.enable("")};debug.humanize=function(ms){var sec=1e3,min=60*1e3,hour=60*min;if(ms>=hour)return(ms/hour).toFixed(1)+"h";if(ms>=min)return(ms/min).toFixed(1)+"m";if(ms>=sec)return(ms/sec|0)+"s";return ms+"ms"};debug.enabled=function(name){for(var i=0,len=debug.skips.length;i<len;i++){if(debug.skips[i].test(name)){return false}}for(var i=0,len=debug.names.length;i<len;i++){if(debug.names[i].test(name)){return true}}return false};function coerce(val){if(val instanceof Error)return val.stack||val.message;return val}try{if(window.localStorage)debug.enable(localStorage.debug)}catch(e){}},{}],10:[function(_dereq_,module,exports){module.exports=_dereq_("./lib/")},{"./lib/":11}],11:[function(_dereq_,module,exports){module.exports=_dereq_("./socket");module.exports.parser=_dereq_("engine.io-parser")},{"./socket":12,"engine.io-parser":21}],12:[function(_dereq_,module,exports){(function(global){var transports=_dereq_("./transports");var Emitter=_dereq_("component-emitter");var debug=_dereq_("debug")("engine.io-client:socket");var index=_dereq_("indexof");var parser=_dereq_("engine.io-parser");var parseuri=_dereq_("parseuri");var parsejson=_dereq_("parsejson");var parseqs=_dereq_("parseqs");module.exports=Socket;function noop(){}function Socket(uri,opts){if(!(this instanceof Socket))return new Socket(uri,opts);opts=opts||{};if(uri&&"object"==typeof uri){opts=uri;uri=null}if(uri){uri=parseuri(uri);opts.host=uri.host;opts.secure=uri.protocol=="https"||uri.protocol=="wss";opts.port=uri.port;if(uri.query)opts.query=uri.query}this.secure=null!=opts.secure?opts.secure:global.location&&"https:"==location.protocol;if(opts.host){var pieces=opts.host.split(":");opts.hostname=pieces.shift();if(pieces.length)opts.port=pieces.pop()}this.agent=opts.agent||false;this.hostname=opts.hostname||(global.location?location.hostname:"localhost");this.port=opts.port||(global.location&&location.port?location.port:this.secure?443:80);this.query=opts.query||{};if("string"==typeof this.query)this.query=parseqs.decode(this.query);this.upgrade=false!==opts.upgrade;this.path=(opts.path||"/engine.io").replace(/\/$/,"")+"/";this.forceJSONP=!!opts.forceJSONP;this.jsonp=false!==opts.jsonp;this.forceBase64=!!opts.forceBase64;this.enablesXDR=!!opts.enablesXDR;this.timestampParam=opts.timestampParam||"t";this.timestampRequests=opts.timestampRequests;this.transports=opts.transports||["polling","websocket"];this.readyState="";this.writeBuffer=[];this.callbackBuffer=[];this.policyPort=opts.policyPort||843;this.rememberUpgrade=opts.rememberUpgrade||false;this.open();this.binaryType=null;this.onlyBinaryUpgrades=opts.onlyBinaryUpgrades}Socket.priorWebsocketSuccess=false;Emitter(Socket.prototype);Socket.protocol=parser.protocol;Socket.Socket=Socket;Socket.Transport=_dereq_("./transport");Socket.transports=_dereq_("./transports");Socket.parser=_dereq_("engine.io-parser");Socket.prototype.createTransport=function(name){debug('creating transport "%s"',name);var query=clone(this.query);query.EIO=parser.protocol;query.transport=name;if(this.id)query.sid=this.id;var transport=new transports[name]({agent:this.agent,hostname:this.hostname,port:this.port,secure:this.secure,path:this.path,query:query,forceJSONP:this.forceJSONP,jsonp:this.jsonp,forceBase64:this.forceBase64,enablesXDR:this.enablesXDR,timestampRequests:this.timestampRequests,timestampParam:this.timestampParam,policyPort:this.policyPort,socket:this});return transport};function clone(obj){var o={};for(var i in obj){if(obj.hasOwnProperty(i)){o[i]=obj[i]}}return o}Socket.prototype.open=function(){var transport;if(this.rememberUpgrade&&Socket.priorWebsocketSuccess&&this.transports.indexOf("websocket")!=-1){transport="websocket"}else if(0==this.transports.length){var self=this;setTimeout(function(){self.emit("error","No transports available")},0);return}else{transport=this.transports[0]}this.readyState="opening";var transport;try{transport=this.createTransport(transport)}catch(e){this.transports.shift();this.open();return}transport.open();this.setTransport(transport)};Socket.prototype.setTransport=function(transport){debug("setting transport %s",transport.name);var self=this;if(this.transport){debug("clearing existing transport %s",this.transport.name);this.transport.removeAllListeners()}this.transport=transport;transport.on("drain",function(){self.onDrain()}).on("packet",function(packet){self.onPacket(packet)}).on("error",function(e){self.onError(e)}).on("close",function(){self.onClose("transport close")})};Socket.prototype.probe=function(name){debug('probing transport "%s"',name);var transport=this.createTransport(name,{probe:1}),failed=false,self=this;Socket.priorWebsocketSuccess=false;function onTransportOpen(){if(self.onlyBinaryUpgrades){var upgradeLosesBinary=!this.supportsBinary&&self.transport.supportsBinary;failed=failed||upgradeLosesBinary}if(failed)return;debug('probe transport "%s" opened',name);transport.send([{type:"ping",data:"probe"}]);transport.once("packet",function(msg){if(failed)return;if("pong"==msg.type&&"probe"==msg.data){debug('probe transport "%s" pong',name);self.upgrading=true;self.emit("upgrading",transport);if(!transport)return;Socket.priorWebsocketSuccess="websocket"==transport.name;debug('pausing current transport "%s"',self.transport.name);self.transport.pause(function(){if(failed)return;if("closed"==self.readyState)return;debug("changing transport and sending upgrade packet");cleanup();self.setTransport(transport);transport.send([{type:"upgrade"}]);self.emit("upgrade",transport);transport=null;self.upgrading=false;self.flush()})}else{debug('probe transport "%s" failed',name);var err=new Error("probe error");err.transport=transport.name;self.emit("upgradeError",err)}})}function freezeTransport(){if(failed)return;failed=true;cleanup();transport.close();transport=null}function onerror(err){var error=new Error("probe error: "+err);error.transport=transport.name;freezeTransport();debug('probe transport "%s" failed because of error: %s',name,err);self.emit("upgradeError",error)}function onTransportClose(){onerror("transport closed")}function onclose(){onerror("socket closed")}function onupgrade(to){if(transport&&to.name!=transport.name){debug('"%s" works - aborting "%s"',to.name,transport.name);freezeTransport()}}function cleanup(){transport.removeListener("open",onTransportOpen);transport.removeListener("error",onerror);transport.removeListener("close",onTransportClose);self.removeListener("close",onclose);self.removeListener("upgrading",onupgrade)}transport.once("open",onTransportOpen);transport.once("error",onerror);transport.once("close",onTransportClose);this.once("close",onclose);this.once("upgrading",onupgrade);transport.open()};Socket.prototype.onOpen=function(){debug("socket open");this.readyState="open";Socket.priorWebsocketSuccess="websocket"==this.transport.name;this.emit("open");this.flush();if("open"==this.readyState&&this.upgrade&&this.transport.pause){debug("starting upgrade probes");for(var i=0,l=this.upgrades.length;i<l;i++){this.probe(this.upgrades[i])}}};Socket.prototype.onPacket=function(packet){if("opening"==this.readyState||"open"==this.readyState){debug('socket receive: type "%s", data "%s"',packet.type,packet.data);this.emit("packet",packet);this.emit("heartbeat");switch(packet.type){case"open":this.onHandshake(parsejson(packet.data));break;case"pong":this.setPing();break;case"error":var err=new Error("server error");err.code=packet.data;this.emit("error",err);break;case"message":this.emit("data",packet.data);this.emit("message",packet.data);break}}else{debug('packet received with socket readyState "%s"',this.readyState)}};Socket.prototype.onHandshake=function(data){this.emit("handshake",data);this.id=data.sid;this.transport.query.sid=data.sid;this.upgrades=this.filterUpgrades(data.upgrades);this.pingInterval=data.pingInterval;this.pingTimeout=data.pingTimeout;this.onOpen();if("closed"==this.readyState)return;this.setPing();this.removeListener("heartbeat",this.onHeartbeat);this.on("heartbeat",this.onHeartbeat)};Socket.prototype.onHeartbeat=function(timeout){clearTimeout(this.pingTimeoutTimer);var self=this;self.pingTimeoutTimer=setTimeout(function(){if("closed"==self.readyState)return;self.onClose("ping timeout")},timeout||self.pingInterval+self.pingTimeout)};Socket.prototype.setPing=function(){var self=this;clearTimeout(self.pingIntervalTimer);self.pingIntervalTimer=setTimeout(function(){debug("writing ping packet - expecting pong within %sms",self.pingTimeout);self.ping();self.onHeartbeat(self.pingTimeout)},self.pingInterval)};Socket.prototype.ping=function(){this.sendPacket("ping")};Socket.prototype.onDrain=function(){for(var i=0;i<this.prevBufferLen;i++){if(this.callbackBuffer[i]){this.callbackBuffer[i]()}}this.writeBuffer.splice(0,this.prevBufferLen);this.callbackBuffer.splice(0,this.prevBufferLen);this.prevBufferLen=0;if(this.writeBuffer.length==0){this.emit("drain")}else{this.flush()}};Socket.prototype.flush=function(){if("closed"!=this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){debug("flushing %d packets in socket",this.writeBuffer.length);this.transport.send(this.writeBuffer);this.prevBufferLen=this.writeBuffer.length;this.emit("flush")}};Socket.prototype.write=Socket.prototype.send=function(msg,fn){this.sendPacket("message",msg,fn);return this};Socket.prototype.sendPacket=function(type,data,fn){if("closing"==this.readyState||"closed"==this.readyState){return}var packet={type:type,data:data};this.emit("packetCreate",packet);this.writeBuffer.push(packet);this.callbackBuffer.push(fn);this.flush()};Socket.prototype.close=function(){if("opening"==this.readyState||"open"==this.readyState){this.readyState="closing";var self=this;function close(){self.onClose("forced close");debug("socket closing - telling transport to close");self.transport.close()}function cleanupAndClose(){self.removeListener("upgrade",cleanupAndClose);self.removeListener("upgradeError",cleanupAndClose);close()}function waitForUpgrade(){self.once("upgrade",cleanupAndClose);self.once("upgradeError",cleanupAndClose)}if(this.writeBuffer.length){this.once("drain",function(){if(this.upgrading){waitForUpgrade()}else{close()}})}else if(this.upgrading){waitForUpgrade()}else{close()}}return this};Socket.prototype.onError=function(err){debug("socket error %j",err);Socket.priorWebsocketSuccess=false;this.emit("error",err);this.onClose("transport error",err)};Socket.prototype.onClose=function(reason,desc){if("opening"==this.readyState||"open"==this.readyState||"closing"==this.readyState){debug('socket close with reason: "%s"',reason);var self=this;clearTimeout(this.pingIntervalTimer);clearTimeout(this.pingTimeoutTimer);setTimeout(function(){self.writeBuffer=[];self.callbackBuffer=[];self.prevBufferLen=0},0);this.transport.removeAllListeners("close");this.transport.close();this.transport.removeAllListeners();this.readyState="closed";this.id=null;this.emit("close",reason,desc)}};Socket.prototype.filterUpgrades=function(upgrades){var filteredUpgrades=[];for(var i=0,j=upgrades.length;i<j;i++){if(~index(this.transports,upgrades[i]))filteredUpgrades.push(upgrades[i])}return filteredUpgrades}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"./transport":13,"./transports":14,"component-emitter":8,debug:9,"engine.io-parser":21,indexof:36,parsejson:28,parseqs:29,parseuri:30}],13:[function(_dereq_,module,exports){var parser=_dereq_("engine.io-parser");var Emitter=_dereq_("component-emitter");module.exports=Transport;function Transport(opts){this.path=opts.path;this.hostname=opts.hostname;this.port=opts.port;this.secure=opts.secure;this.query=opts.query;this.timestampParam=opts.timestampParam;this.timestampRequests=opts.timestampRequests;this.readyState="";this.agent=opts.agent||false;this.socket=opts.socket;this.enablesXDR=opts.enablesXDR}Emitter(Transport.prototype);Transport.timestamps=0;Transport.prototype.onError=function(msg,desc){var err=new Error(msg);err.type="TransportError";err.description=desc;this.emit("error",err);return this};Transport.prototype.open=function(){if("closed"==this.readyState||""==this.readyState){this.readyState="opening";this.doOpen()}return this};Transport.prototype.close=function(){if("opening"==this.readyState||"open"==this.readyState){this.doClose();this.onClose()}return this};Transport.prototype.send=function(packets){if("open"==this.readyState){this.write(packets)}else{throw new Error("Transport not open")}};Transport.prototype.onOpen=function(){this.readyState="open";this.writable=true;this.emit("open")};Transport.prototype.onData=function(data){var packet=parser.decodePacket(data,this.socket.binaryType);this.onPacket(packet)};Transport.prototype.onPacket=function(packet){this.emit("packet",packet)};Transport.prototype.onClose=function(){this.readyState="closed";this.emit("close")}},{"component-emitter":8,"engine.io-parser":21}],14:[function(_dereq_,module,exports){(function(global){var XMLHttpRequest=_dereq_("xmlhttprequest");var XHR=_dereq_("./polling-xhr");var JSONP=_dereq_("./polling-jsonp");var websocket=_dereq_("./websocket");exports.polling=polling;exports.websocket=websocket;function polling(opts){var xhr;var xd=false;var xs=false;var jsonp=false!==opts.jsonp;if(global.location){var isSSL="https:"==location.protocol;var port=location.port;if(!port){port=isSSL?443:80}xd=opts.hostname!=location.hostname||port!=opts.port;xs=opts.secure!=isSSL}opts.xdomain=xd;opts.xscheme=xs;xhr=new XMLHttpRequest(opts);if("open"in xhr&&!opts.forceJSONP){return new XHR(opts)}else{if(!jsonp)throw new Error("JSONP disabled");return new JSONP(opts)}}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"./polling-jsonp":15,"./polling-xhr":16,"./websocket":18,xmlhttprequest:19}],15:[function(_dereq_,module,exports){(function(global){var Polling=_dereq_("./polling");var inherit=_dereq_("component-inherit");module.exports=JSONPPolling;var rNewline=/\n/g;var rEscapedNewline=/\\n/g;var callbacks;var index=0;function empty(){}function JSONPPolling(opts){Polling.call(this,opts);this.query=this.query||{};if(!callbacks){if(!global.___eio)global.___eio=[];callbacks=global.___eio}this.index=callbacks.length;var self=this;callbacks.push(function(msg){self.onData(msg)});this.query.j=this.index;if(global.document&&global.addEventListener){global.addEventListener("beforeunload",function(){if(self.script)self.script.onerror=empty})}}inherit(JSONPPolling,Polling);JSONPPolling.prototype.supportsBinary=false;JSONPPolling.prototype.doClose=function(){if(this.script){this.script.parentNode.removeChild(this.script);this.script=null}if(this.form){this.form.parentNode.removeChild(this.form);this.form=null;this.iframe=null}Polling.prototype.doClose.call(this)};JSONPPolling.prototype.doPoll=function(){var self=this;var script=document.createElement("script");if(this.script){this.script.parentNode.removeChild(this.script);this.script=null}script.async=true;script.src=this.uri();script.onerror=function(e){self.onError("jsonp poll error",e)};var insertAt=document.getElementsByTagName("script")[0];insertAt.parentNode.insertBefore(script,insertAt);this.script=script;var isUAgecko="undefined"!=typeof navigator&&/gecko/i.test(navigator.userAgent);if(isUAgecko){setTimeout(function(){var iframe=document.createElement("iframe");document.body.appendChild(iframe);document.body.removeChild(iframe)},100)}};JSONPPolling.prototype.doWrite=function(data,fn){var self=this;if(!this.form){var form=document.createElement("form");var area=document.createElement("textarea");var id=this.iframeId="eio_iframe_"+this.index;var iframe;form.className="socketio";form.style.position="absolute";form.style.top="-1000px";form.style.left="-1000px";form.target=id;form.method="POST";form.setAttribute("accept-charset","utf-8");area.name="d";form.appendChild(area);document.body.appendChild(form);this.form=form;this.area=area}this.form.action=this.uri();function complete(){initIframe();fn()}function initIframe(){if(self.iframe){try{self.form.removeChild(self.iframe)
}catch(e){self.onError("jsonp polling iframe removal error",e)}}try{var html='<iframe src="javascript:0" name="'+self.iframeId+'">';iframe=document.createElement(html)}catch(e){iframe=document.createElement("iframe");iframe.name=self.iframeId;iframe.src="javascript:0"}iframe.id=self.iframeId;self.form.appendChild(iframe);self.iframe=iframe}initIframe();data=data.replace(rEscapedNewline,"\\\n");this.area.value=data.replace(rNewline,"\\n");try{this.form.submit()}catch(e){}if(this.iframe.attachEvent){this.iframe.onreadystatechange=function(){if(self.iframe.readyState=="complete"){complete()}}}else{this.iframe.onload=complete}}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"./polling":17,"component-inherit":20}],16:[function(_dereq_,module,exports){(function(global){var XMLHttpRequest=_dereq_("xmlhttprequest");var Polling=_dereq_("./polling");var Emitter=_dereq_("component-emitter");var inherit=_dereq_("component-inherit");var debug=_dereq_("debug")("engine.io-client:polling-xhr");module.exports=XHR;module.exports.Request=Request;function empty(){}function XHR(opts){Polling.call(this,opts);if(global.location){var isSSL="https:"==location.protocol;var port=location.port;if(!port){port=isSSL?443:80}this.xd=opts.hostname!=global.location.hostname||port!=opts.port;this.xs=opts.secure!=isSSL}}inherit(XHR,Polling);XHR.prototype.supportsBinary=true;XHR.prototype.request=function(opts){opts=opts||{};opts.uri=this.uri();opts.xd=this.xd;opts.xs=this.xs;opts.agent=this.agent||false;opts.supportsBinary=this.supportsBinary;opts.enablesXDR=this.enablesXDR;return new Request(opts)};XHR.prototype.doWrite=function(data,fn){var isBinary=typeof data!=="string"&&data!==undefined;var req=this.request({method:"POST",data:data,isBinary:isBinary});var self=this;req.on("success",fn);req.on("error",function(err){self.onError("xhr post error",err)});this.sendXhr=req};XHR.prototype.doPoll=function(){debug("xhr poll");var req=this.request();var self=this;req.on("data",function(data){self.onData(data)});req.on("error",function(err){self.onError("xhr poll error",err)});this.pollXhr=req};function Request(opts){this.method=opts.method||"GET";this.uri=opts.uri;this.xd=!!opts.xd;this.xs=!!opts.xs;this.async=false!==opts.async;this.data=undefined!=opts.data?opts.data:null;this.agent=opts.agent;this.isBinary=opts.isBinary;this.supportsBinary=opts.supportsBinary;this.enablesXDR=opts.enablesXDR;this.create()}Emitter(Request.prototype);Request.prototype.create=function(){var xhr=this.xhr=new XMLHttpRequest({agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR});var self=this;try{debug("xhr open %s: %s",this.method,this.uri);xhr.open(this.method,this.uri,this.async);if(this.supportsBinary){xhr.responseType="arraybuffer"}if("POST"==this.method){try{if(this.isBinary){xhr.setRequestHeader("Content-type","application/octet-stream")}else{xhr.setRequestHeader("Content-type","text/plain;charset=UTF-8")}}catch(e){}}if("withCredentials"in xhr){xhr.withCredentials=true}if(this.hasXDR()){xhr.onload=function(){self.onLoad()};xhr.onerror=function(){self.onError(xhr.responseText)}}else{xhr.onreadystatechange=function(){if(4!=xhr.readyState)return;if(200==xhr.status||1223==xhr.status){self.onLoad()}else{setTimeout(function(){self.onError(xhr.status)},0)}}}debug("xhr data %s",this.data);xhr.send(this.data)}catch(e){setTimeout(function(){self.onError(e)},0);return}if(global.document){this.index=Request.requestsCount++;Request.requests[this.index]=this}};Request.prototype.onSuccess=function(){this.emit("success");this.cleanup()};Request.prototype.onData=function(data){this.emit("data",data);this.onSuccess()};Request.prototype.onError=function(err){this.emit("error",err);this.cleanup()};Request.prototype.cleanup=function(){if("undefined"==typeof this.xhr||null===this.xhr){return}if(this.hasXDR()){this.xhr.onload=this.xhr.onerror=empty}else{this.xhr.onreadystatechange=empty}try{this.xhr.abort()}catch(e){}if(global.document){delete Request.requests[this.index]}this.xhr=null};Request.prototype.onLoad=function(){var data;try{var contentType;try{contentType=this.xhr.getResponseHeader("Content-Type").split(";")[0]}catch(e){}if(contentType==="application/octet-stream"){data=this.xhr.response}else{if(!this.supportsBinary){data=this.xhr.responseText}else{data="ok"}}}catch(e){this.onError(e)}if(null!=data){this.onData(data)}};Request.prototype.hasXDR=function(){return"undefined"!==typeof global.XDomainRequest&&!this.xs&&this.enablesXDR};Request.prototype.abort=function(){this.cleanup()};if(global.document){Request.requestsCount=0;Request.requests={};if(global.attachEvent){global.attachEvent("onunload",unloadHandler)}else if(global.addEventListener){global.addEventListener("beforeunload",unloadHandler)}}function unloadHandler(){for(var i in Request.requests){if(Request.requests.hasOwnProperty(i)){Request.requests[i].abort()}}}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"./polling":17,"component-emitter":8,"component-inherit":20,debug:9,xmlhttprequest:19}],17:[function(_dereq_,module,exports){var Transport=_dereq_("../transport");var parseqs=_dereq_("parseqs");var parser=_dereq_("engine.io-parser");var inherit=_dereq_("component-inherit");var debug=_dereq_("debug")("engine.io-client:polling");module.exports=Polling;var hasXHR2=function(){var XMLHttpRequest=_dereq_("xmlhttprequest");var xhr=new XMLHttpRequest({xdomain:false});return null!=xhr.responseType}();function Polling(opts){var forceBase64=opts&&opts.forceBase64;if(!hasXHR2||forceBase64){this.supportsBinary=false}Transport.call(this,opts)}inherit(Polling,Transport);Polling.prototype.name="polling";Polling.prototype.doOpen=function(){this.poll()};Polling.prototype.pause=function(onPause){var pending=0;var self=this;this.readyState="pausing";function pause(){debug("paused");self.readyState="paused";onPause()}if(this.polling||!this.writable){var total=0;if(this.polling){debug("we are currently polling - waiting to pause");total++;this.once("pollComplete",function(){debug("pre-pause polling complete");--total||pause()})}if(!this.writable){debug("we are currently writing - waiting to pause");total++;this.once("drain",function(){debug("pre-pause writing complete");--total||pause()})}}else{pause()}};Polling.prototype.poll=function(){debug("polling");this.polling=true;this.doPoll();this.emit("poll")};Polling.prototype.onData=function(data){var self=this;debug("polling got data %s",data);var callback=function(packet,index,total){if("opening"==self.readyState){self.onOpen()}if("close"==packet.type){self.onClose();return false}self.onPacket(packet)};parser.decodePayload(data,this.socket.binaryType,callback);if("closed"!=this.readyState){this.polling=false;this.emit("pollComplete");if("open"==this.readyState){this.poll()}else{debug('ignoring poll - transport state "%s"',this.readyState)}}};Polling.prototype.doClose=function(){var self=this;function close(){debug("writing close packet");self.write([{type:"close"}])}if("open"==this.readyState){debug("transport open - closing");close()}else{debug("transport not open - deferring close");this.once("open",close)}};Polling.prototype.write=function(packets){var self=this;this.writable=false;var callbackfn=function(){self.writable=true;self.emit("drain")};var self=this;parser.encodePayload(packets,this.supportsBinary,function(data){self.doWrite(data,callbackfn)})};Polling.prototype.uri=function(){var query=this.query||{};var schema=this.secure?"https":"http";var port="";if(false!==this.timestampRequests){query[this.timestampParam]=+new Date+"-"+Transport.timestamps++}if(!this.supportsBinary&&!query.sid){query.b64=1}query=parseqs.encode(query);if(this.port&&("https"==schema&&this.port!=443||"http"==schema&&this.port!=80)){port=":"+this.port}if(query.length){query="?"+query}return schema+"://"+this.hostname+port+this.path+query}},{"../transport":13,"component-inherit":20,debug:9,"engine.io-parser":21,parseqs:29,xmlhttprequest:19}],18:[function(_dereq_,module,exports){var Transport=_dereq_("../transport");var parser=_dereq_("engine.io-parser");var parseqs=_dereq_("parseqs");var inherit=_dereq_("component-inherit");var debug=_dereq_("debug")("engine.io-client:websocket");var WebSocket=_dereq_("ws");module.exports=WS;function WS(opts){var forceBase64=opts&&opts.forceBase64;if(forceBase64){this.supportsBinary=false}Transport.call(this,opts)}inherit(WS,Transport);WS.prototype.name="websocket";WS.prototype.supportsBinary=true;WS.prototype.doOpen=function(){if(!this.check()){return}var self=this;var uri=this.uri();var protocols=void 0;var opts={agent:this.agent};this.ws=new WebSocket(uri,protocols,opts);if(this.ws.binaryType===undefined){this.supportsBinary=false}this.ws.binaryType="arraybuffer";this.addEventListeners()};WS.prototype.addEventListeners=function(){var self=this;this.ws.onopen=function(){self.onOpen()};this.ws.onclose=function(){self.onClose()};this.ws.onmessage=function(ev){self.onData(ev.data)};this.ws.onerror=function(e){self.onError("websocket error",e)}};if("undefined"!=typeof navigator&&/iPad|iPhone|iPod/i.test(navigator.userAgent)){WS.prototype.onData=function(data){var self=this;setTimeout(function(){Transport.prototype.onData.call(self,data)},0)}}WS.prototype.write=function(packets){var self=this;this.writable=false;for(var i=0,l=packets.length;i<l;i++){parser.encodePacket(packets[i],this.supportsBinary,function(data){try{self.ws.send(data)}catch(e){debug("websocket closed before onclose event")}})}function ondrain(){self.writable=true;self.emit("drain")}setTimeout(ondrain,0)};WS.prototype.onClose=function(){Transport.prototype.onClose.call(this)};WS.prototype.doClose=function(){if(typeof this.ws!=="undefined"){this.ws.close()}};WS.prototype.uri=function(){var query=this.query||{};var schema=this.secure?"wss":"ws";var port="";if(this.port&&("wss"==schema&&this.port!=443||"ws"==schema&&this.port!=80)){port=":"+this.port}if(this.timestampRequests){query[this.timestampParam]=+new Date}if(!this.supportsBinary){query.b64=1}query=parseqs.encode(query);if(query.length){query="?"+query}return schema+"://"+this.hostname+port+this.path+query};WS.prototype.check=function(){return!!WebSocket&&!("__initialize"in WebSocket&&this.name===WS.prototype.name)}},{"../transport":13,"component-inherit":20,debug:9,"engine.io-parser":21,parseqs:29,ws:31}],19:[function(_dereq_,module,exports){var hasCORS=_dereq_("has-cors");module.exports=function(opts){var xdomain=opts.xdomain;var xscheme=opts.xscheme;var enablesXDR=opts.enablesXDR;try{if("undefined"!=typeof XMLHttpRequest&&(!xdomain||hasCORS)){return new XMLHttpRequest}}catch(e){}try{if("undefined"!=typeof XDomainRequest&&!xscheme&&enablesXDR){return new XDomainRequest}}catch(e){}if(!xdomain){try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}}},{"has-cors":34}],20:[function(_dereq_,module,exports){module.exports=function(a,b){var fn=function(){};fn.prototype=b.prototype;a.prototype=new fn;a.prototype.constructor=a}},{}],21:[function(_dereq_,module,exports){(function(global){var keys=_dereq_("./keys");var sliceBuffer=_dereq_("arraybuffer.slice");var base64encoder=_dereq_("base64-arraybuffer");var after=_dereq_("after");var utf8=_dereq_("utf8");var isAndroid=navigator.userAgent.match(/Android/i);exports.protocol=3;var packets=exports.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6};var packetslist=keys(packets);var err={type:"error",data:"parser error"};var Blob=_dereq_("blob");exports.encodePacket=function(packet,supportsBinary,utf8encode,callback){if("function"==typeof supportsBinary){callback=supportsBinary;supportsBinary=false}if("function"==typeof utf8encode){callback=utf8encode;utf8encode=null}var data=packet.data===undefined?undefined:packet.data.buffer||packet.data;if(global.ArrayBuffer&&data instanceof ArrayBuffer){return encodeArrayBuffer(packet,supportsBinary,callback)}else if(Blob&&data instanceof global.Blob){return encodeBlob(packet,supportsBinary,callback)}var encoded=packets[packet.type];if(undefined!==packet.data){encoded+=utf8encode?utf8.encode(String(packet.data)):String(packet.data)}return callback(""+encoded)};function encodeArrayBuffer(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback)}var data=packet.data;var contentArray=new Uint8Array(data);var resultBuffer=new Uint8Array(1+data.byteLength);resultBuffer[0]=packets[packet.type];for(var i=0;i<contentArray.length;i++){resultBuffer[i+1]=contentArray[i]}return callback(resultBuffer.buffer)}function encodeBlobAsArrayBuffer(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback)}var fr=new FileReader;fr.onload=function(){packet.data=fr.result;exports.encodePacket(packet,supportsBinary,true,callback)};return fr.readAsArrayBuffer(packet.data)}function encodeBlob(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback)}if(isAndroid){return encodeBlobAsArrayBuffer(packet,supportsBinary,callback)}var length=new Uint8Array(1);length[0]=packets[packet.type];var blob=new Blob([length.buffer,packet.data]);return callback(blob)}exports.encodeBase64Packet=function(packet,callback){var message="b"+exports.packets[packet.type];if(Blob&&packet.data instanceof Blob){var fr=new FileReader;fr.onload=function(){var b64=fr.result.split(",")[1];callback(message+b64)};return fr.readAsDataURL(packet.data)}var b64data;try{b64data=String.fromCharCode.apply(null,new Uint8Array(packet.data))}catch(e){var typed=new Uint8Array(packet.data);var basic=new Array(typed.length);for(var i=0;i<typed.length;i++){basic[i]=typed[i]}b64data=String.fromCharCode.apply(null,basic)}message+=global.btoa(b64data);return callback(message)};exports.decodePacket=function(data,binaryType,utf8decode){if(typeof data=="string"||data===undefined){if(data.charAt(0)=="b"){return exports.decodeBase64Packet(data.substr(1),binaryType)}if(utf8decode){try{data=utf8.decode(data)}catch(e){return err}}var type=data.charAt(0);if(Number(type)!=type||!packetslist[type]){return err}if(data.length>1){return{type:packetslist[type],data:data.substring(1)}}else{return{type:packetslist[type]}}}var asArray=new Uint8Array(data);var type=asArray[0];var rest=sliceBuffer(data,1);if(Blob&&binaryType==="blob"){rest=new Blob([rest])}return{type:packetslist[type],data:rest}};exports.decodeBase64Packet=function(msg,binaryType){var type=packetslist[msg.charAt(0)];if(!global.ArrayBuffer){return{type:type,data:{base64:true,data:msg.substr(1)}}}var data=base64encoder.decode(msg.substr(1));if(binaryType==="blob"&&Blob){data=new Blob([data])}return{type:type,data:data}};exports.encodePayload=function(packets,supportsBinary,callback){if(typeof supportsBinary=="function"){callback=supportsBinary;supportsBinary=null}if(supportsBinary){if(Blob&&!isAndroid){return exports.encodePayloadAsBlob(packets,callback)}return exports.encodePayloadAsArrayBuffer(packets,callback)}if(!packets.length){return callback("0:")}function setLengthHeader(message){return message.length+":"+message}function encodeOne(packet,doneCallback){exports.encodePacket(packet,supportsBinary,true,function(message){doneCallback(null,setLengthHeader(message))})}map(packets,encodeOne,function(err,results){return callback(results.join(""))})};function map(ary,each,done){var result=new Array(ary.length);var next=after(ary.length,done);var eachWithIndex=function(i,el,cb){each(el,function(error,msg){result[i]=msg;cb(error,result)})};for(var i=0;i<ary.length;i++){eachWithIndex(i,ary[i],next)}}exports.decodePayload=function(data,binaryType,callback){if(typeof data!="string"){return exports.decodePayloadAsBinary(data,binaryType,callback)}if(typeof binaryType==="function"){callback=binaryType;binaryType=null}var packet;if(data==""){return callback(err,0,1)}var length="",n,msg;for(var i=0,l=data.length;i<l;i++){var chr=data.charAt(i);if(":"!=chr){length+=chr}else{if(""==length||length!=(n=Number(length))){return callback(err,0,1)}msg=data.substr(i+1,n);if(length!=msg.length){return callback(err,0,1)}if(msg.length){packet=exports.decodePacket(msg,binaryType,true);if(err.type==packet.type&&err.data==packet.data){return callback(err,0,1)}var ret=callback(packet,i+n,l);if(false===ret)return}i+=n;length=""}}if(length!=""){return callback(err,0,1)}};exports.encodePayloadAsArrayBuffer=function(packets,callback){if(!packets.length){return callback(new ArrayBuffer(0))}function encodeOne(packet,doneCallback){exports.encodePacket(packet,true,true,function(data){return doneCallback(null,data)})}map(packets,encodeOne,function(err,encodedPackets){var totalLength=encodedPackets.reduce(function(acc,p){var len;if(typeof p==="string"){len=p.length}else{len=p.byteLength}return acc+len.toString().length+len+2},0);var resultArray=new Uint8Array(totalLength);var bufferIndex=0;encodedPackets.forEach(function(p){var isString=typeof p==="string";var ab=p;if(isString){var view=new Uint8Array(p.length);for(var i=0;i<p.length;i++){view[i]=p.charCodeAt(i)}ab=view.buffer}if(isString){resultArray[bufferIndex++]=0}else{resultArray[bufferIndex++]=1}var lenStr=ab.byteLength.toString();for(var i=0;i<lenStr.length;i++){resultArray[bufferIndex++]=parseInt(lenStr[i])}resultArray[bufferIndex++]=255;var view=new Uint8Array(ab);for(var i=0;i<view.length;i++){resultArray[bufferIndex++]=view[i]}});return callback(resultArray.buffer)})};exports.encodePayloadAsBlob=function(packets,callback){function encodeOne(packet,doneCallback){exports.encodePacket(packet,true,true,function(encoded){var binaryIdentifier=new Uint8Array(1);binaryIdentifier[0]=1;if(typeof encoded==="string"){var view=new Uint8Array(encoded.length);for(var i=0;i<encoded.length;i++){view[i]=encoded.charCodeAt(i)}encoded=view.buffer;binaryIdentifier[0]=0}var len=encoded instanceof ArrayBuffer?encoded.byteLength:encoded.size;var lenStr=len.toString();var lengthAry=new Uint8Array(lenStr.length+1);for(var i=0;i<lenStr.length;i++){lengthAry[i]=parseInt(lenStr[i])}lengthAry[lenStr.length]=255;if(Blob){var blob=new Blob([binaryIdentifier.buffer,lengthAry.buffer,encoded]);doneCallback(null,blob)}})}map(packets,encodeOne,function(err,results){return callback(new Blob(results))})};exports.decodePayloadAsBinary=function(data,binaryType,callback){if(typeof binaryType==="function"){callback=binaryType;binaryType=null}var bufferTail=data;var buffers=[];var numberTooLong=false;while(bufferTail.byteLength>0){var tailArray=new Uint8Array(bufferTail);var isString=tailArray[0]===0;var msgLength="";for(var i=1;;i++){if(tailArray[i]==255)break;if(msgLength.length>310){numberTooLong=true;break}msgLength+=tailArray[i]}if(numberTooLong)return callback(err,0,1);bufferTail=sliceBuffer(bufferTail,2+msgLength.length);msgLength=parseInt(msgLength);var msg=sliceBuffer(bufferTail,0,msgLength);if(isString){try{msg=String.fromCharCode.apply(null,new Uint8Array(msg))}catch(e){var typed=new Uint8Array(msg);msg="";for(var i=0;i<typed.length;i++){msg+=String.fromCharCode(typed[i])}}}buffers.push(msg);bufferTail=sliceBuffer(bufferTail,msgLength)}var total=buffers.length;buffers.forEach(function(buffer,i){callback(exports.decodePacket(buffer,binaryType,true),i,total)})}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"./keys":22,after:23,"arraybuffer.slice":24,"base64-arraybuffer":25,blob:26,utf8:27}],22:[function(_dereq_,module,exports){module.exports=Object.keys||function keys(obj){var arr=[];var has=Object.prototype.hasOwnProperty;for(var i in obj){if(has.call(obj,i)){arr.push(i)}}return arr}},{}],23:[function(_dereq_,module,exports){module.exports=after;function after(count,callback,err_cb){var bail=false;err_cb=err_cb||noop;proxy.count=count;return count===0?callback():proxy;function proxy(err,result){if(proxy.count<=0){throw new Error("after called too many times")}--proxy.count;if(err){bail=true;callback(err);callback=err_cb}else if(proxy.count===0&&!bail){callback(null,result)}}}function noop(){}},{}],24:[function(_dereq_,module,exports){module.exports=function(arraybuffer,start,end){var bytes=arraybuffer.byteLength;start=start||0;end=end||bytes;if(arraybuffer.slice){return arraybuffer.slice(start,end)}if(start<0){start+=bytes}if(end<0){end+=bytes}if(end>bytes){end=bytes}if(start>=bytes||start>=end||bytes===0){return new ArrayBuffer(0)}var abv=new Uint8Array(arraybuffer);var result=new Uint8Array(end-start);for(var i=start,ii=0;i<end;i++,ii++){result[ii]=abv[i]}return result.buffer}},{}],25:[function(_dereq_,module,exports){(function(chars){"use strict";exports.encode=function(arraybuffer){var bytes=new Uint8Array(arraybuffer),i,len=bytes.length,base64="";for(i=0;i<len;i+=3){base64+=chars[bytes[i]>>2];base64+=chars[(bytes[i]&3)<<4|bytes[i+1]>>4];base64+=chars[(bytes[i+1]&15)<<2|bytes[i+2]>>6];base64+=chars[bytes[i+2]&63]}if(len%3===2){base64=base64.substring(0,base64.length-1)+"="}else if(len%3===1){base64=base64.substring(0,base64.length-2)+"=="}return base64};exports.decode=function(base64){var bufferLength=base64.length*.75,len=base64.length,i,p=0,encoded1,encoded2,encoded3,encoded4;if(base64[base64.length-1]==="="){bufferLength--;if(base64[base64.length-2]==="="){bufferLength--}}var arraybuffer=new ArrayBuffer(bufferLength),bytes=new Uint8Array(arraybuffer);for(i=0;i<len;i+=4){encoded1=chars.indexOf(base64[i]);encoded2=chars.indexOf(base64[i+1]);encoded3=chars.indexOf(base64[i+2]);encoded4=chars.indexOf(base64[i+3]);bytes[p++]=encoded1<<2|encoded2>>4;bytes[p++]=(encoded2&15)<<4|encoded3>>2;bytes[p++]=(encoded3&3)<<6|encoded4&63}return arraybuffer}})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")},{}],26:[function(_dereq_,module,exports){(function(global){var BlobBuilder=global.BlobBuilder||global.WebKitBlobBuilder||global.MSBlobBuilder||global.MozBlobBuilder;var blobSupported=function(){try{var b=new Blob(["hi"]);return b.size==2}catch(e){return false}}();var blobBuilderSupported=BlobBuilder&&BlobBuilder.prototype.append&&BlobBuilder.prototype.getBlob;function BlobBuilderConstructor(ary,options){options=options||{};var bb=new BlobBuilder;for(var i=0;i<ary.length;i++){bb.append(ary[i])}return options.type?bb.getBlob(options.type):bb.getBlob()}module.exports=function(){if(blobSupported){return global.Blob}else if(blobBuilderSupported){return BlobBuilderConstructor}else{return undefined}}()}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{}],27:[function(_dereq_,module,exports){(function(global){(function(root){var freeExports=typeof exports=="object"&&exports;var freeModule=typeof module=="object"&&module&&module.exports==freeExports&&module;var freeGlobal=typeof global=="object"&&global;if(freeGlobal.global===freeGlobal||freeGlobal.window===freeGlobal){root=freeGlobal}var stringFromCharCode=String.fromCharCode;function ucs2decode(string){var output=[];var counter=0;var length=string.length;var value;var extra;while(counter<length){value=string.charCodeAt(counter++);if(value>=55296&&value<=56319&&counter<length){extra=string.charCodeAt(counter++);if((extra&64512)==56320){output.push(((value&1023)<<10)+(extra&1023)+65536)}else{output.push(value);counter--}}else{output.push(value)}}return output}function ucs2encode(array){var length=array.length;var index=-1;var value;var output="";while(++index<length){value=array[index];if(value>65535){value-=65536;output+=stringFromCharCode(value>>>10&1023|55296);value=56320|value&1023}output+=stringFromCharCode(value)}return output}function createByte(codePoint,shift){return stringFromCharCode(codePoint>>shift&63|128)}function encodeCodePoint(codePoint){if((codePoint&4294967168)==0){return stringFromCharCode(codePoint)}var symbol="";if((codePoint&4294965248)==0){symbol=stringFromCharCode(codePoint>>6&31|192)}else if((codePoint&4294901760)==0){symbol=stringFromCharCode(codePoint>>12&15|224);symbol+=createByte(codePoint,6)}else if((codePoint&4292870144)==0){symbol=stringFromCharCode(codePoint>>18&7|240);symbol+=createByte(codePoint,12);symbol+=createByte(codePoint,6)}symbol+=stringFromCharCode(codePoint&63|128);return symbol}function utf8encode(string){var codePoints=ucs2decode(string);var length=codePoints.length;var index=-1;var codePoint;var byteString="";while(++index<length){codePoint=codePoints[index];byteString+=encodeCodePoint(codePoint)}return byteString}function readContinuationByte(){if(byteIndex>=byteCount){throw Error("Invalid byte index")}var continuationByte=byteArray[byteIndex]&255;byteIndex++;if((continuationByte&192)==128){return continuationByte&63}throw Error("Invalid continuation byte")}function decodeSymbol(){var byte1;var byte2;var byte3;var byte4;var codePoint;if(byteIndex>byteCount){throw Error("Invalid byte index")}if(byteIndex==byteCount){return false}byte1=byteArray[byteIndex]&255;byteIndex++;if((byte1&128)==0){return byte1}if((byte1&224)==192){var byte2=readContinuationByte();codePoint=(byte1&31)<<6|byte2;if(codePoint>=128){return codePoint}else{throw Error("Invalid continuation byte")}}if((byte1&240)==224){byte2=readContinuationByte();byte3=readContinuationByte();codePoint=(byte1&15)<<12|byte2<<6|byte3;if(codePoint>=2048){return codePoint}else{throw Error("Invalid continuation byte")}}if((byte1&248)==240){byte2=readContinuationByte();byte3=readContinuationByte();byte4=readContinuationByte();codePoint=(byte1&15)<<18|byte2<<12|byte3<<6|byte4;if(codePoint>=65536&&codePoint<=1114111){return codePoint}}throw Error("Invalid UTF-8 detected")}var byteArray;var byteCount;var byteIndex;function utf8decode(byteString){byteArray=ucs2decode(byteString);byteCount=byteArray.length;byteIndex=0;var codePoints=[];var tmp;while((tmp=decodeSymbol())!==false){codePoints.push(tmp)}return ucs2encode(codePoints)}var utf8={version:"2.0.0",encode:utf8encode,decode:utf8decode};if(typeof define=="function"&&typeof define.amd=="object"&&define.amd){define(function(){return utf8})}else if(freeExports&&!freeExports.nodeType){if(freeModule){freeModule.exports=utf8}else{var object={};var hasOwnProperty=object.hasOwnProperty;for(var key in utf8){hasOwnProperty.call(utf8,key)&&(freeExports[key]=utf8[key])}}}else{root.utf8=utf8}})(this)}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{}],28:[function(_dereq_,module,exports){(function(global){var rvalidchars=/^[\],:{}\s]*$/;var rvalidescape=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;var rvalidtokens=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;var rvalidbraces=/(?:^|:|,)(?:\s*\[)+/g;var rtrimLeft=/^\s+/;var rtrimRight=/\s+$/;module.exports=function parsejson(data){if("string"!=typeof data||!data){return null}data=data.replace(rtrimLeft,"").replace(rtrimRight,"");if(global.JSON&&JSON.parse){return JSON.parse(data)}if(rvalidchars.test(data.replace(rvalidescape,"@").replace(rvalidtokens,"]").replace(rvalidbraces,""))){return new Function("return "+data)()}}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{}],29:[function(_dereq_,module,exports){exports.encode=function(obj){var str="";for(var i in obj){if(obj.hasOwnProperty(i)){if(str.length)str+="&";str+=encodeURIComponent(i)+"="+encodeURIComponent(obj[i])}}return str};exports.decode=function(qs){var qry={};var pairs=qs.split("&");for(var i=0,l=pairs.length;i<l;i++){var pair=pairs[i].split("=");qry[decodeURIComponent(pair[0])]=decodeURIComponent(pair[1])}return qry}},{}],30:[function(_dereq_,module,exports){var re=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;var parts=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];module.exports=function parseuri(str){var src=str,b=str.indexOf("["),e=str.indexOf("]");if(b!=-1&&e!=-1){str=str.substring(0,b)+str.substring(b,e).replace(/:/g,";")+str.substring(e,str.length)}var m=re.exec(str||""),uri={},i=14;while(i--){uri[parts[i]]=m[i]||""}if(b!=-1&&e!=-1){uri.source=src;uri.host=uri.host.substring(1,uri.host.length-1).replace(/;/g,":");uri.authority=uri.authority.replace("[","").replace("]","").replace(/;/g,":");uri.ipv6uri=true}return uri}},{}],31:[function(_dereq_,module,exports){var global=function(){return this}();var WebSocket=global.WebSocket||global.MozWebSocket;module.exports=WebSocket?ws:null;function ws(uri,protocols,opts){var instance;if(protocols){instance=new WebSocket(uri,protocols)}else{instance=new WebSocket(uri)}return instance}if(WebSocket)ws.prototype=WebSocket.prototype},{}],32:[function(_dereq_,module,exports){(function(global){var isArray=_dereq_("isarray");module.exports=hasBinary;function hasBinary(data){function _hasBinary(obj){if(!obj)return false;if(global.Buffer&&global.Buffer.isBuffer(obj)||global.ArrayBuffer&&obj instanceof ArrayBuffer||global.Blob&&obj instanceof Blob||global.File&&obj instanceof File){return true}if(isArray(obj)){for(var i=0;i<obj.length;i++){if(_hasBinary(obj[i])){return true}}}else if(obj&&"object"==typeof obj){if(obj.toJSON){obj=obj.toJSON()}for(var key in obj){if(obj.hasOwnProperty(key)&&_hasBinary(obj[key])){return true}}}return false}return _hasBinary(data)}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{isarray:33}],33:[function(_dereq_,module,exports){module.exports=Array.isArray||function(arr){return Object.prototype.toString.call(arr)=="[object Array]"}},{}],34:[function(_dereq_,module,exports){var global=_dereq_("global");try{module.exports="XMLHttpRequest"in global&&"withCredentials"in new global.XMLHttpRequest}catch(err){module.exports=false}},{global:35}],35:[function(_dereq_,module,exports){module.exports=function(){return this}()},{}],36:[function(_dereq_,module,exports){var indexOf=[].indexOf;module.exports=function(arr,obj){if(indexOf)return arr.indexOf(obj);for(var i=0;i<arr.length;++i){if(arr[i]===obj)return i}return-1}},{}],37:[function(_dereq_,module,exports){var has=Object.prototype.hasOwnProperty;exports.keys=Object.keys||function(obj){var keys=[];for(var key in obj){if(has.call(obj,key)){keys.push(key)}}return keys};exports.values=function(obj){var vals=[];for(var key in obj){if(has.call(obj,key)){vals.push(obj[key])}}return vals};exports.merge=function(a,b){for(var key in b){if(has.call(b,key)){a[key]=b[key]}}return a};exports.length=function(obj){return exports.keys(obj).length};exports.isEmpty=function(obj){return 0==exports.length(obj)}},{}],38:[function(_dereq_,module,exports){var re=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;var parts=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];module.exports=function parseuri(str){var m=re.exec(str||""),uri={},i=14;while(i--){uri[parts[i]]=m[i]||""}return uri}},{}],39:[function(_dereq_,module,exports){(function(global){var isArray=_dereq_("isarray");var isBuf=_dereq_("./is-buffer");exports.deconstructPacket=function(packet){var buffers=[];var packetData=packet.data;function _deconstructPacket(data){if(!data)return data;if(isBuf(data)){var placeholder={_placeholder:true,num:buffers.length};buffers.push(data);return placeholder}else if(isArray(data)){var newData=new Array(data.length);for(var i=0;i<data.length;i++){newData[i]=_deconstructPacket(data[i])}return newData}else if("object"==typeof data&&!(data instanceof Date)){var newData={};for(var key in data){newData[key]=_deconstructPacket(data[key])}return newData}return data}var pack=packet;pack.data=_deconstructPacket(packetData);pack.attachments=buffers.length;return{packet:pack,buffers:buffers}};exports.reconstructPacket=function(packet,buffers){var curPlaceHolder=0;function _reconstructPacket(data){if(data&&data._placeholder){var buf=buffers[data.num];return buf
}else if(isArray(data)){for(var i=0;i<data.length;i++){data[i]=_reconstructPacket(data[i])}return data}else if(data&&"object"==typeof data){for(var key in data){data[key]=_reconstructPacket(data[key])}return data}return data}packet.data=_reconstructPacket(packet.data);packet.attachments=undefined;return packet};exports.removeBlobs=function(data,callback){function _removeBlobs(obj,curKey,containingObject){if(!obj)return obj;if(global.Blob&&obj instanceof Blob||global.File&&obj instanceof File){pendingBlobs++;var fileReader=new FileReader;fileReader.onload=function(){if(containingObject){containingObject[curKey]=this.result}else{bloblessData=this.result}if(!--pendingBlobs){callback(bloblessData)}};fileReader.readAsArrayBuffer(obj)}else if(isArray(obj)){for(var i=0;i<obj.length;i++){_removeBlobs(obj[i],i,obj)}}else if(obj&&"object"==typeof obj&&!isBuf(obj)){for(var key in obj){_removeBlobs(obj[key],key,obj)}}}var pendingBlobs=0;var bloblessData=data;_removeBlobs(bloblessData);if(!pendingBlobs){callback(bloblessData)}}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"./is-buffer":41,isarray:42}],40:[function(_dereq_,module,exports){var debug=_dereq_("debug")("socket.io-parser");var json=_dereq_("json3");var isArray=_dereq_("isarray");var Emitter=_dereq_("component-emitter");var binary=_dereq_("./binary");var isBuf=_dereq_("./is-buffer");exports.protocol=4;exports.types=["CONNECT","DISCONNECT","EVENT","BINARY_EVENT","ACK","BINARY_ACK","ERROR"];exports.CONNECT=0;exports.DISCONNECT=1;exports.EVENT=2;exports.ACK=3;exports.ERROR=4;exports.BINARY_EVENT=5;exports.BINARY_ACK=6;exports.Encoder=Encoder;exports.Decoder=Decoder;function Encoder(){}Encoder.prototype.encode=function(obj,callback){debug("encoding packet %j",obj);if(exports.BINARY_EVENT==obj.type||exports.BINARY_ACK==obj.type){encodeAsBinary(obj,callback)}else{var encoding=encodeAsString(obj);callback([encoding])}};function encodeAsString(obj){var str="";var nsp=false;str+=obj.type;if(exports.BINARY_EVENT==obj.type||exports.BINARY_ACK==obj.type){str+=obj.attachments;str+="-"}if(obj.nsp&&"/"!=obj.nsp){nsp=true;str+=obj.nsp}if(null!=obj.id){if(nsp){str+=",";nsp=false}str+=obj.id}if(null!=obj.data){if(nsp)str+=",";str+=json.stringify(obj.data)}debug("encoded %j as %s",obj,str);return str}function encodeAsBinary(obj,callback){function writeEncoding(bloblessData){var deconstruction=binary.deconstructPacket(bloblessData);var pack=encodeAsString(deconstruction.packet);var buffers=deconstruction.buffers;buffers.unshift(pack);callback(buffers)}binary.removeBlobs(obj,writeEncoding)}function Decoder(){this.reconstructor=null}Emitter(Decoder.prototype);Decoder.prototype.add=function(obj){var packet;if("string"==typeof obj){packet=decodeString(obj);if(exports.BINARY_EVENT==packet.type||exports.BINARY_ACK==packet.type){this.reconstructor=new BinaryReconstructor(packet);if(this.reconstructor.reconPack.attachments==0){this.emit("decoded",packet)}}else{this.emit("decoded",packet)}}else if(isBuf(obj)||obj.base64){if(!this.reconstructor){throw new Error("got binary data when not reconstructing a packet")}else{packet=this.reconstructor.takeBinaryData(obj);if(packet){this.reconstructor=null;this.emit("decoded",packet)}}}else{throw new Error("Unknown type: "+obj)}};function decodeString(str){var p={};var i=0;p.type=Number(str.charAt(0));if(null==exports.types[p.type])return error();if(exports.BINARY_EVENT==p.type||exports.BINARY_ACK==p.type){p.attachments="";while(str.charAt(++i)!="-"){p.attachments+=str.charAt(i)}p.attachments=Number(p.attachments)}if("/"==str.charAt(i+1)){p.nsp="";while(++i){var c=str.charAt(i);if(","==c)break;p.nsp+=c;if(i+1==str.length)break}}else{p.nsp="/"}var next=str.charAt(i+1);if(""!=next&&Number(next)==next){p.id="";while(++i){var c=str.charAt(i);if(null==c||Number(c)!=c){--i;break}p.id+=str.charAt(i);if(i+1==str.length)break}p.id=Number(p.id)}if(str.charAt(++i)){try{p.data=json.parse(str.substr(i))}catch(e){return error()}}debug("decoded %s as %j",str,p);return p}Decoder.prototype.destroy=function(){if(this.reconstructor){this.reconstructor.finishedReconstruction()}};function BinaryReconstructor(packet){this.reconPack=packet;this.buffers=[]}BinaryReconstructor.prototype.takeBinaryData=function(binData){this.buffers.push(binData);if(this.buffers.length==this.reconPack.attachments){var packet=binary.reconstructPacket(this.reconPack,this.buffers);this.finishedReconstruction();return packet}return null};BinaryReconstructor.prototype.finishedReconstruction=function(){this.reconPack=null;this.buffers=[]};function error(data){return{type:exports.ERROR,data:"parser error"}}},{"./binary":39,"./is-buffer":41,"component-emitter":8,debug:9,isarray:42,json3:43}],41:[function(_dereq_,module,exports){(function(global){module.exports=isBuf;function isBuf(obj){return global.Buffer&&global.Buffer.isBuffer(obj)||global.ArrayBuffer&&obj instanceof ArrayBuffer}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{}],42:[function(_dereq_,module,exports){module.exports=_dereq_(33)},{}],43:[function(_dereq_,module,exports){(function(window){var getClass={}.toString,isProperty,forEach,undef;var isLoader=typeof define==="function"&&define.amd;var nativeJSON=typeof JSON=="object"&&JSON;var JSON3=typeof exports=="object"&&exports&&!exports.nodeType&&exports;if(JSON3&&nativeJSON){JSON3.stringify=nativeJSON.stringify;JSON3.parse=nativeJSON.parse}else{JSON3=window.JSON=nativeJSON||{}}var isExtended=new Date(-0xc782b5b800cec);try{isExtended=isExtended.getUTCFullYear()==-109252&&isExtended.getUTCMonth()===0&&isExtended.getUTCDate()===1&&isExtended.getUTCHours()==10&&isExtended.getUTCMinutes()==37&&isExtended.getUTCSeconds()==6&&isExtended.getUTCMilliseconds()==708}catch(exception){}function has(name){if(has[name]!==undef){return has[name]}var isSupported;if(name=="bug-string-char-index"){isSupported="a"[0]!="a"}else if(name=="json"){isSupported=has("json-stringify")&&has("json-parse")}else{var value,serialized='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';if(name=="json-stringify"){var stringify=JSON3.stringify,stringifySupported=typeof stringify=="function"&&isExtended;if(stringifySupported){(value=function(){return 1}).toJSON=value;try{stringifySupported=stringify(0)==="0"&&stringify(new Number)==="0"&&stringify(new String)=='""'&&stringify(getClass)===undef&&stringify(undef)===undef&&stringify()===undef&&stringify(value)==="1"&&stringify([value])=="[1]"&&stringify([undef])=="[null]"&&stringify(null)=="null"&&stringify([undef,getClass,null])=="[null,null,null]"&&stringify({a:[value,true,false,null,"\x00\b\n\f\r	"]})==serialized&&stringify(null,value)==="1"&&stringify([1,2],null,1)=="[\n 1,\n 2\n]"&&stringify(new Date(-864e13))=='"-271821-04-20T00:00:00.000Z"'&&stringify(new Date(864e13))=='"+275760-09-13T00:00:00.000Z"'&&stringify(new Date(-621987552e5))=='"-000001-01-01T00:00:00.000Z"'&&stringify(new Date(-1))=='"1969-12-31T23:59:59.999Z"'}catch(exception){stringifySupported=false}}isSupported=stringifySupported}if(name=="json-parse"){var parse=JSON3.parse;if(typeof parse=="function"){try{if(parse("0")===0&&!parse(false)){value=parse(serialized);var parseSupported=value["a"].length==5&&value["a"][0]===1;if(parseSupported){try{parseSupported=!parse('"	"')}catch(exception){}if(parseSupported){try{parseSupported=parse("01")!==1}catch(exception){}}if(parseSupported){try{parseSupported=parse("1.")!==1}catch(exception){}}}}}catch(exception){parseSupported=false}}isSupported=parseSupported}}return has[name]=!!isSupported}if(!has("json")){var functionClass="[object Function]";var dateClass="[object Date]";var numberClass="[object Number]";var stringClass="[object String]";var arrayClass="[object Array]";var booleanClass="[object Boolean]";var charIndexBuggy=has("bug-string-char-index");if(!isExtended){var floor=Math.floor;var Months=[0,31,59,90,120,151,181,212,243,273,304,334];var getDay=function(year,month){return Months[month]+365*(year-1970)+floor((year-1969+(month=+(month>1)))/4)-floor((year-1901+month)/100)+floor((year-1601+month)/400)}}if(!(isProperty={}.hasOwnProperty)){isProperty=function(property){var members={},constructor;if((members.__proto__=null,members.__proto__={toString:1},members).toString!=getClass){isProperty=function(property){var original=this.__proto__,result=property in(this.__proto__=null,this);this.__proto__=original;return result}}else{constructor=members.constructor;isProperty=function(property){var parent=(this.constructor||constructor).prototype;return property in this&&!(property in parent&&this[property]===parent[property])}}members=null;return isProperty.call(this,property)}}var PrimitiveTypes={"boolean":1,number:1,string:1,undefined:1};var isHostType=function(object,property){var type=typeof object[property];return type=="object"?!!object[property]:!PrimitiveTypes[type]};forEach=function(object,callback){var size=0,Properties,members,property;(Properties=function(){this.valueOf=0}).prototype.valueOf=0;members=new Properties;for(property in members){if(isProperty.call(members,property)){size++}}Properties=members=null;if(!size){members=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"];forEach=function(object,callback){var isFunction=getClass.call(object)==functionClass,property,length;var hasProperty=!isFunction&&typeof object.constructor!="function"&&isHostType(object,"hasOwnProperty")?object.hasOwnProperty:isProperty;for(property in object){if(!(isFunction&&property=="prototype")&&hasProperty.call(object,property)){callback(property)}}for(length=members.length;property=members[--length];hasProperty.call(object,property)&&callback(property));}}else if(size==2){forEach=function(object,callback){var members={},isFunction=getClass.call(object)==functionClass,property;for(property in object){if(!(isFunction&&property=="prototype")&&!isProperty.call(members,property)&&(members[property]=1)&&isProperty.call(object,property)){callback(property)}}}}else{forEach=function(object,callback){var isFunction=getClass.call(object)==functionClass,property,isConstructor;for(property in object){if(!(isFunction&&property=="prototype")&&isProperty.call(object,property)&&!(isConstructor=property==="constructor")){callback(property)}}if(isConstructor||isProperty.call(object,property="constructor")){callback(property)}}}return forEach(object,callback)};if(!has("json-stringify")){var Escapes={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"};var leadingZeroes="000000";var toPaddedString=function(width,value){return(leadingZeroes+(value||0)).slice(-width)};var unicodePrefix="\\u00";var quote=function(value){var result='"',index=0,length=value.length,isLarge=length>10&&charIndexBuggy,symbols;if(isLarge){symbols=value.split("")}for(;index<length;index++){var charCode=value.charCodeAt(index);switch(charCode){case 8:case 9:case 10:case 12:case 13:case 34:case 92:result+=Escapes[charCode];break;default:if(charCode<32){result+=unicodePrefix+toPaddedString(2,charCode.toString(16));break}result+=isLarge?symbols[index]:charIndexBuggy?value.charAt(index):value[index]}}return result+'"'};var serialize=function(property,object,callback,properties,whitespace,indentation,stack){var value,className,year,month,date,time,hours,minutes,seconds,milliseconds,results,element,index,length,prefix,result;try{value=object[property]}catch(exception){}if(typeof value=="object"&&value){className=getClass.call(value);if(className==dateClass&&!isProperty.call(value,"toJSON")){if(value>-1/0&&value<1/0){if(getDay){date=floor(value/864e5);for(year=floor(date/365.2425)+1970-1;getDay(year+1,0)<=date;year++);for(month=floor((date-getDay(year,0))/30.42);getDay(year,month+1)<=date;month++);date=1+date-getDay(year,month);time=(value%864e5+864e5)%864e5;hours=floor(time/36e5)%24;minutes=floor(time/6e4)%60;seconds=floor(time/1e3)%60;milliseconds=time%1e3}else{year=value.getUTCFullYear();month=value.getUTCMonth();date=value.getUTCDate();hours=value.getUTCHours();minutes=value.getUTCMinutes();seconds=value.getUTCSeconds();milliseconds=value.getUTCMilliseconds()}value=(year<=0||year>=1e4?(year<0?"-":"+")+toPaddedString(6,year<0?-year:year):toPaddedString(4,year))+"-"+toPaddedString(2,month+1)+"-"+toPaddedString(2,date)+"T"+toPaddedString(2,hours)+":"+toPaddedString(2,minutes)+":"+toPaddedString(2,seconds)+"."+toPaddedString(3,milliseconds)+"Z"}else{value=null}}else if(typeof value.toJSON=="function"&&(className!=numberClass&&className!=stringClass&&className!=arrayClass||isProperty.call(value,"toJSON"))){value=value.toJSON(property)}}if(callback){value=callback.call(object,property,value)}if(value===null){return"null"}className=getClass.call(value);if(className==booleanClass){return""+value}else if(className==numberClass){return value>-1/0&&value<1/0?""+value:"null"}else if(className==stringClass){return quote(""+value)}if(typeof value=="object"){for(length=stack.length;length--;){if(stack[length]===value){throw TypeError()}}stack.push(value);results=[];prefix=indentation;indentation+=whitespace;if(className==arrayClass){for(index=0,length=value.length;index<length;index++){element=serialize(index,value,callback,properties,whitespace,indentation,stack);results.push(element===undef?"null":element)}result=results.length?whitespace?"[\n"+indentation+results.join(",\n"+indentation)+"\n"+prefix+"]":"["+results.join(",")+"]":"[]"}else{forEach(properties||value,function(property){var element=serialize(property,value,callback,properties,whitespace,indentation,stack);if(element!==undef){results.push(quote(property)+":"+(whitespace?" ":"")+element)}});result=results.length?whitespace?"{\n"+indentation+results.join(",\n"+indentation)+"\n"+prefix+"}":"{"+results.join(",")+"}":"{}"}stack.pop();return result}};JSON3.stringify=function(source,filter,width){var whitespace,callback,properties,className;if(typeof filter=="function"||typeof filter=="object"&&filter){if((className=getClass.call(filter))==functionClass){callback=filter}else if(className==arrayClass){properties={};for(var index=0,length=filter.length,value;index<length;value=filter[index++],(className=getClass.call(value),className==stringClass||className==numberClass)&&(properties[value]=1));}}if(width){if((className=getClass.call(width))==numberClass){if((width-=width%1)>0){for(whitespace="",width>10&&(width=10);whitespace.length<width;whitespace+=" ");}}else if(className==stringClass){whitespace=width.length<=10?width:width.slice(0,10)}}return serialize("",(value={},value[""]=source,value),callback,properties,whitespace,"",[])}}if(!has("json-parse")){var fromCharCode=String.fromCharCode;var Unescapes={92:"\\",34:'"',47:"/",98:"\b",116:"	",110:"\n",102:"\f",114:"\r"};var Index,Source;var abort=function(){Index=Source=null;throw SyntaxError()};var lex=function(){var source=Source,length=source.length,value,begin,position,isSigned,charCode;while(Index<length){charCode=source.charCodeAt(Index);switch(charCode){case 9:case 10:case 13:case 32:Index++;break;case 123:case 125:case 91:case 93:case 58:case 44:value=charIndexBuggy?source.charAt(Index):source[Index];Index++;return value;case 34:for(value="@",Index++;Index<length;){charCode=source.charCodeAt(Index);if(charCode<32){abort()}else if(charCode==92){charCode=source.charCodeAt(++Index);switch(charCode){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:value+=Unescapes[charCode];Index++;break;case 117:begin=++Index;for(position=Index+4;Index<position;Index++){charCode=source.charCodeAt(Index);if(!(charCode>=48&&charCode<=57||charCode>=97&&charCode<=102||charCode>=65&&charCode<=70)){abort()}}value+=fromCharCode("0x"+source.slice(begin,Index));break;default:abort()}}else{if(charCode==34){break}charCode=source.charCodeAt(Index);begin=Index;while(charCode>=32&&charCode!=92&&charCode!=34){charCode=source.charCodeAt(++Index)}value+=source.slice(begin,Index)}}if(source.charCodeAt(Index)==34){Index++;return value}abort();default:begin=Index;if(charCode==45){isSigned=true;charCode=source.charCodeAt(++Index)}if(charCode>=48&&charCode<=57){if(charCode==48&&(charCode=source.charCodeAt(Index+1),charCode>=48&&charCode<=57)){abort()}isSigned=false;for(;Index<length&&(charCode=source.charCodeAt(Index),charCode>=48&&charCode<=57);Index++);if(source.charCodeAt(Index)==46){position=++Index;for(;position<length&&(charCode=source.charCodeAt(position),charCode>=48&&charCode<=57);position++);if(position==Index){abort()}Index=position}charCode=source.charCodeAt(Index);if(charCode==101||charCode==69){charCode=source.charCodeAt(++Index);if(charCode==43||charCode==45){Index++}for(position=Index;position<length&&(charCode=source.charCodeAt(position),charCode>=48&&charCode<=57);position++);if(position==Index){abort()}Index=position}return+source.slice(begin,Index)}if(isSigned){abort()}if(source.slice(Index,Index+4)=="true"){Index+=4;return true}else if(source.slice(Index,Index+5)=="false"){Index+=5;return false}else if(source.slice(Index,Index+4)=="null"){Index+=4;return null}abort()}}return"$"};var get=function(value){var results,hasMembers;if(value=="$"){abort()}if(typeof value=="string"){if((charIndexBuggy?value.charAt(0):value[0])=="@"){return value.slice(1)}if(value=="["){results=[];for(;;hasMembers||(hasMembers=true)){value=lex();if(value=="]"){break}if(hasMembers){if(value==","){value=lex();if(value=="]"){abort()}}else{abort()}}if(value==","){abort()}results.push(get(value))}return results}else if(value=="{"){results={};for(;;hasMembers||(hasMembers=true)){value=lex();if(value=="}"){break}if(hasMembers){if(value==","){value=lex();if(value=="}"){abort()}}else{abort()}}if(value==","||typeof value!="string"||(charIndexBuggy?value.charAt(0):value[0])!="@"||lex()!=":"){abort()}results[value.slice(1)]=get(lex())}return results}abort()}return value};var update=function(source,property,callback){var element=walk(source,property,callback);if(element===undef){delete source[property]}else{source[property]=element}};var walk=function(source,property,callback){var value=source[property],length;if(typeof value=="object"&&value){if(getClass.call(value)==arrayClass){for(length=value.length;length--;){update(value,length,callback)}}else{forEach(value,function(property){update(value,property,callback)})}}return callback.call(source,property,value)};JSON3.parse=function(source,callback){var result,value;Index=0;Source=""+source;result=get(lex());if(lex()!="$"){abort()}Index=Source=null;return callback&&getClass.call(callback)==functionClass?walk((value={},value[""]=result,value),"",callback):result}}}if(isLoader){define(function(){return JSON3})}})(this)},{}],44:[function(_dereq_,module,exports){module.exports=toArray;function toArray(list,index){var array=[];index=index||0;for(var i=index||0;i<list.length;i++){array[i-index]=list[i]}return array}},{}]},{},[1])(1)});
/**
 * @license
 * Lo-Dash 1.2.0 (Custom Build) lodash.com/license
 * Build: `lodash modern -o ./dist/lodash.js`
 * Underscore.js 1.4.4 underscorejs.org/LICENSE
 */
;(function(n){function t(o){function f(n){if(!n||ue.call(n)!=S)return a;var t=n.valueOf,e=typeof t=="function"&&(e=Zt(t))&&Zt(e);return e?n==e||Zt(n)==e:X(n)}function q(n,t,e){if(!n||!F[typeof n])return n;t=t&&typeof e=="undefined"?t:M.createCallback(t,e);for(var r=-1,u=F[typeof n]?me(n):[],o=u.length;++r<o&&(e=u[r],!(t(n[e],e,n)===a)););return n}function D(n,t,e){var r;if(!n||!F[typeof n])return n;t=t&&typeof e=="undefined"?t:M.createCallback(t,e);for(r in n)if(t(n[r],r,n)===a)break;return n}function z(n,t,e){var r,u=n,a=u;
if(!u)return a;for(var o=arguments,i=0,f=typeof e=="number"?2:o.length;++i<f;)if((u=o[i])&&F[typeof u]){var c=u.length;if(r=-1,rt(u))for(;++r<c;)"undefined"==typeof a[r]&&(a[r]=u[r]);else for(var l=-1,p=F[typeof u]?me(u):[],c=p.length;++l<c;)r=p[l],"undefined"==typeof a[r]&&(a[r]=u[r])}return a}function P(n,t,e){var r,u=n,a=u;if(!u)return a;var o=arguments,i=0,f=typeof e=="number"?2:o.length;if(3<f&&"function"==typeof o[f-2])var c=M.createCallback(o[--f-1],o[f--],2);else 2<f&&"function"==typeof o[f-1]&&(c=o[--f]);
for(;++i<f;)if((u=o[i])&&F[typeof u]){var l=u.length;if(r=-1,rt(u))for(;++r<l;)a[r]=c?c(a[r],u[r]):u[r];else for(var p=-1,s=F[typeof u]?me(u):[],l=s.length;++p<l;)r=s[p],a[r]=c?c(a[r],u[r]):u[r]}return a}function K(n){var t,e=[];if(!n||!F[typeof n])return e;for(t in n)ne.call(n,t)&&e.push(t);return e}function M(n){return n&&typeof n=="object"&&!rt(n)&&ne.call(n,"__wrapped__")?n:new Q(n)}function U(n){var t=n.length,e=t>=s;if(e)for(var r={},u=-1;++u<t;){var a=p+n[u];(r[a]||(r[a]=[])).push(n[u])}return function(t){if(e){var u=p+t;
return r[u]&&-1<xt(r[u],t)}return-1<xt(n,t)}}function V(n){return n.charCodeAt(0)}function G(n,t){var e=n.b,r=t.b;if(n=n.a,t=t.a,n!==t){if(n>t||typeof n=="undefined")return 1;if(n<t||typeof t=="undefined")return-1}return e<r?-1:1}function H(n,t,e,r){function a(){var r=arguments,l=i?this:t;return o||(n=t[f]),e.length&&(r=r.length?(r=ge.call(r),c?r.concat(e):e.concat(r)):e),this instanceof a?(W.prototype=n.prototype,l=new W,W.prototype=u,r=n.apply(l,r),ot(r)?r:l):n.apply(l,r)}var o=at(n),i=!e,f=t;if(i){var c=r;
e=t}else if(!o){if(!r)throw new Vt;t=n}return a}function J(n){return"\\"+R[n]}function L(n){return be[n]}function Q(n){this.__wrapped__=n}function W(){}function X(n){var t=a;if(!n||ue.call(n)!=S)return t;var e=n.constructor;return(at(e)?e instanceof e:he.nodeClass||!isNode(n))?(D(n,function(n,e){t=e}),t===a||ne.call(n,t)):t}function Y(n,t,e){t||(t=0),typeof e=="undefined"&&(e=n?n.length:0);var r=-1;e=e-t||0;for(var u=Rt(0>e?0:e);++r<e;)u[r]=n[t+r];return u}function Z(n){return de[n]}function nt(n,t,r,u,o,i){var f=n;
if(typeof t=="function"&&(u=r,r=t,t=a),typeof r=="function"){if(r=typeof u=="undefined"?r:M.createCallback(r,u,1),f=r(f),typeof f!="undefined")return f;f=n}if(u=ot(f)){var c=ue.call(f);if(!B[c])return f;var l=rt(f)}if(!u||!t)return u?l?Y(f):P({},f):f;switch(u=ye[c],c){case N:case E:return new u(+f);case I:case $:return new u(f);case A:return u(f.source,b.exec(f))}for(o||(o=[]),i||(i=[]),c=o.length;c--;)if(o[c]==n)return i[c];return f=l?u(f.length):{},l&&(ne.call(n,"index")&&(f.index=n.index),ne.call(n,"input")&&(f.input=n.input)),o.push(n),i.push(f),(l?yt:q)(n,function(n,u){f[u]=nt(n,t,r,e,o,i)
}),f}function tt(n){var t=[];return D(n,function(n,e){at(n)&&t.push(e)}),t.sort()}function et(n){for(var t=-1,e=me(n),r=e.length,u={};++t<r;){var a=e[t];u[n[a]]=a}return u}function rt(n){return n instanceof Rt||oe(n)}function ut(n,t,e,o,i,f){var c=e===l;if(typeof e=="function"&&!c){e=M.createCallback(e,o,2);var p=e(n,t);if(typeof p!="undefined")return!!p}if(n===t)return 0!==n||1/n==1/t;var s=typeof n,v=typeof t;if(n===n&&(!n||"function"!=s&&"object"!=s)&&(!t||"function"!=v&&"object"!=v))return a;
if(n==u||t==u)return n===t;if(v=ue.call(n),s=ue.call(t),v==x&&(v=S),s==x&&(s=S),v!=s)return a;switch(v){case N:case E:return+n==+t;case I:return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case A:case $:return n==Ut(t)}if(s=v==O,!s){if(ne.call(n,"__wrapped__")||ne.call(t,"__wrapped__"))return ut(n.__wrapped__||n,t.__wrapped__||t,e,o,i,f);if(v!=S)return a;var v=n.constructor,g=t.constructor;if(v!=g&&(!at(v)||!(v instanceof v&&at(g)&&g instanceof g)))return a}for(i||(i=[]),f||(f=[]),v=i.length;v--;)if(i[v]==n)return f[v]==t;
var y=0,p=r;if(i.push(n),f.push(t),s){if(v=n.length,y=t.length,p=y==n.length,!p&&!c)return p;for(;y--;)if(s=v,g=t[y],c)for(;s--&&!(p=ut(n[s],g,e,o,i,f)););else if(!(p=ut(n[y],g,e,o,i,f)))break;return p}return D(t,function(t,r,u){return ne.call(u,r)?(y++,p=ne.call(n,r)&&ut(n[r],t,e,o,i,f)):void 0}),p&&!c&&D(n,function(n,t,e){return ne.call(e,t)?p=-1<--y:void 0}),p}function at(n){return typeof n=="function"}function ot(n){return n?F[typeof n]:a}function it(n){return typeof n=="number"||ue.call(n)==I}function ft(n){return typeof n=="string"||ue.call(n)==$
}function ct(n,t,e){var r=arguments,u=0,a=2;if(!ot(n))return n;if(e===l)var o=r[3],i=r[4],c=r[5];else i=[],c=[],typeof e!="number"&&(a=r.length),3<a&&"function"==typeof r[a-2]?o=M.createCallback(r[--a-1],r[a--],2):2<a&&"function"==typeof r[a-1]&&(o=r[--a]);for(;++u<a;)(rt(r[u])?yt:q)(r[u],function(t,e){var r,u,a=t,p=n[e];if(t&&((u=rt(t))||f(t))){for(a=i.length;a--;)if(r=i[a]==t){p=c[a];break}if(!r){var s;o&&(a=o(p,t),s=typeof a!="undefined")&&(p=a),s||(p=u?rt(p)?p:[]:f(p)?p:{}),i.push(t),c.push(p),s||(p=ct(p,t,l,o,i,c))
}}else o&&(a=o(p,t),typeof a=="undefined"&&(a=t)),typeof a!="undefined"&&(p=a);n[e]=p});return n}function lt(n){for(var t=-1,e=me(n),r=e.length,u=Rt(r);++t<r;)u[t]=n[e[t]];return u}function pt(n,t,e){var r=-1,u=n?n.length:0,o=a;return e=(0>e?le(0,u+e):e)||0,typeof u=="number"?o=-1<(ft(n)?n.indexOf(t,e):xt(n,t,e)):q(n,function(n){return++r<e?void 0:!(o=n===t)}),o}function st(n,t,e){var u=r;t=M.createCallback(t,e),e=-1;var a=n?n.length:0;if(typeof a=="number")for(;++e<a&&(u=!!t(n[e],e,n)););else q(n,function(n,e,r){return u=!!t(n,e,r)
});return u}function vt(n,t,e){var r=[];t=M.createCallback(t,e),e=-1;var u=n?n.length:0;if(typeof u=="number")for(;++e<u;){var a=n[e];t(a,e,n)&&r.push(a)}else q(n,function(n,e,u){t(n,e,u)&&r.push(n)});return r}function gt(n,t,e){t=M.createCallback(t,e),e=-1;var r=n?n.length:0;if(typeof r!="number"){var u;return q(n,function(n,e,r){return t(n,e,r)?(u=n,a):void 0}),u}for(;++e<r;){var o=n[e];if(t(o,e,n))return o}}function yt(n,t,e){var r=-1,u=n?n.length:0;if(t=t&&typeof e=="undefined"?t:M.createCallback(t,e),typeof u=="number")for(;++r<u&&t(n[r],r,n)!==a;);else q(n,t);
return n}function ht(n,t,e){var r=-1,u=n?n.length:0;if(t=M.createCallback(t,e),typeof u=="number")for(var a=Rt(u);++r<u;)a[r]=t(n[r],r,n);else a=[],q(n,function(n,e,u){a[++r]=t(n,e,u)});return a}function mt(n,t,e){var r=-1/0,u=r;if(!t&&rt(n)){e=-1;for(var a=n.length;++e<a;){var o=n[e];o>u&&(u=o)}}else t=!t&&ft(n)?V:M.createCallback(t,e),yt(n,function(n,e,a){e=t(n,e,a),e>r&&(r=e,u=n)});return u}function bt(n,t){var e=-1,r=n?n.length:0;if(typeof r=="number")for(var u=Rt(r);++e<r;)u[e]=n[e][t];return u||ht(n,t)
}function dt(n,t,e,r){if(!n)return e;var u=3>arguments.length;t=M.createCallback(t,r,4);var o=-1,i=n.length;if(typeof i=="number")for(u&&(e=n[++o]);++o<i;)e=t(e,n[o],o,n);else q(n,function(n,r,o){e=u?(u=a,n):t(e,n,r,o)});return e}function _t(n,t,e,r){var u=n?n.length:0,o=3>arguments.length;if(typeof u!="number")var i=me(n),u=i.length;return t=M.createCallback(t,r,4),yt(n,function(r,f,c){f=i?i[--u]:--u,e=o?(o=a,n[f]):t(e,n[f],f,c)}),e}function kt(n,t,e){var r;t=M.createCallback(t,e),e=-1;var u=n?n.length:0;
if(typeof u=="number")for(;++e<u&&!(r=t(n[e],e,n)););else q(n,function(n,e,u){return!(r=t(n,e,u))});return!!r}function wt(n){for(var t=-1,e=n?n.length:0,r=Xt.apply(Gt,ge.call(arguments,1)),r=U(r),u=[];++t<e;){var a=n[t];r(a)||u.push(a)}return u}function Ct(n,t,e){if(n){var r=0,a=n.length;if(typeof t!="number"&&t!=u){var o=-1;for(t=M.createCallback(t,e);++o<a&&t(n[o],o,n);)r++}else if(r=t,r==u||e)return n[0];return Y(n,0,pe(le(0,r),a))}}function jt(n,t,e,r){var o=-1,i=n?n.length:0,f=[];for(typeof t!="boolean"&&t!=u&&(r=e,e=t,t=a),e!=u&&(e=M.createCallback(e,r));++o<i;)r=n[o],e&&(r=e(r,o,n)),rt(r)?te.apply(f,t?r:jt(r)):f.push(r);
return f}function xt(n,t,e){var r=-1,u=n?n.length:0;if(typeof e=="number")r=(0>e?le(0,u+e):e||0)-1;else if(e)return r=Nt(n,t),n[r]===t?r:-1;for(;++r<u;)if(n[r]===t)return r;return-1}function Ot(n,t,e){if(typeof t!="number"&&t!=u){var r=0,a=-1,o=n?n.length:0;for(t=M.createCallback(t,e);++a<o&&t(n[a],a,n);)r++}else r=t==u||e?1:le(0,t);return Y(n,r)}function Nt(n,t,e,r){var u=0,a=n?n.length:u;for(e=e?M.createCallback(e,r,1):$t,t=e(t);u<a;)r=u+a>>>1,e(n[r])<t?u=r+1:a=r;return u}function Et(n,t,e,r){var o=-1,i=n?n.length:0,f=[],c=f;
typeof t!="boolean"&&t!=u&&(r=e,e=t,t=a);var l=!t&&i>=s;if(l)var v={};for(e!=u&&(c=[],e=M.createCallback(e,r));++o<i;){r=n[o];var g=e?e(r,o,n):r;if(l)var y=p+g,y=v[y]?!(c=v[y]):c=v[y]=[];(t?!o||c[c.length-1]!==g:y||0>xt(c,g))&&((e||l)&&c.push(g),f.push(r))}return f}function It(n,t){for(var e=-1,r=n?n.length:0,u={};++e<r;){var a=n[e];t?u[a]=t[e]:u[a[0]]=a[1]}return u}function St(n,t){return he.fastBind||ae&&2<arguments.length?ae.call.apply(ae,arguments):H(n,t,ge.call(arguments,2))}function At(n){var t=ge.call(arguments,1);
return re(function(){n.apply(e,t)},1)}function $t(n){return n}function Bt(n){yt(tt(n),function(t){var e=M[t]=n[t];M.prototype[t]=function(){var n=this.__wrapped__,t=[n];return te.apply(t,arguments),t=e.apply(M,t),n&&typeof n=="object"&&n==t?this:new Q(t)}})}function Ft(){return this.__wrapped__}o=o?T.defaults(n.Object(),o,T.pick(n,j)):n;var Rt=o.Array,Tt=o.Boolean,qt=o.Date,Dt=o.Function,zt=o.Math,Pt=o.Number,Kt=o.Object,Mt=o.RegExp,Ut=o.String,Vt=o.TypeError,Gt=Rt(),Ht=Kt(),Jt=o._,Lt=Mt("^"+Ut(Ht.valueOf).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/valueOf|for [^\]]+/g,".+?")+"$"),Qt=zt.ceil,Wt=o.clearTimeout,Xt=Gt.concat,Yt=zt.floor,Zt=Lt.test(Zt=Kt.getPrototypeOf)&&Zt,ne=Ht.hasOwnProperty,te=Gt.push,ee=o.setImmediate,re=o.setTimeout,ue=Ht.toString,ae=Lt.test(ae=ue.bind)&&ae,oe=Lt.test(oe=Rt.isArray)&&oe,ie=o.isFinite,fe=o.isNaN,ce=Lt.test(ce=Kt.keys)&&ce,le=zt.max,pe=zt.min,se=o.parseInt,ve=zt.random,ge=Gt.slice,zt=Lt.test(o.attachEvent),zt=ae&&!/\n|true/.test(ae+zt),ye={};
ye[O]=Rt,ye[N]=Tt,ye[E]=qt,ye[S]=Kt,ye[I]=Pt,ye[A]=Mt,ye[$]=Ut;var he=M.support={};he.fastBind=ae&&!zt,M.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:d,variable:"",imports:{_:M}},Q.prototype=M.prototype;var me=ce?function(n){return ot(n)?ce(n):[]}:K,be={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},de=et(be);return zt&&i&&typeof ee=="function"&&(At=St(ee,o)),Tt=8==se("08")?se:function(n,t){return se(ft(n)?n.replace(_,""):n,t||0)},M.after=function(n,t){return 1>n?t():function(){return 1>--n?t.apply(this,arguments):void 0
}},M.assign=P,M.at=function(n){for(var t=-1,e=Xt.apply(Gt,ge.call(arguments,1)),r=e.length,u=Rt(r);++t<r;)u[t]=n[e[t]];return u},M.bind=St,M.bindAll=function(n){for(var t=1<arguments.length?Xt.apply(Gt,ge.call(arguments,1)):tt(n),e=-1,r=t.length;++e<r;){var u=t[e];n[u]=St(n[u],n)}return n},M.bindKey=function(n,t){return H(n,t,ge.call(arguments,2),l)},M.compact=function(n){for(var t=-1,e=n?n.length:0,r=[];++t<e;){var u=n[t];u&&r.push(u)}return r},M.compose=function(){var n=arguments;return function(){for(var t=arguments,e=n.length;e--;)t=[n[e].apply(this,t)];
return t[0]}},M.countBy=function(n,t,e){var r={};return t=M.createCallback(t,e),yt(n,function(n,e,u){e=Ut(t(n,e,u)),ne.call(r,e)?r[e]++:r[e]=1}),r},M.createCallback=function(n,t,e){if(n==u)return $t;var r=typeof n;if("function"!=r){if("object"!=r)return function(t){return t[n]};var o=me(n);return function(t){for(var e=o.length,r=a;e--&&(r=ut(t[o[e]],n[o[e]],l)););return r}}return typeof t!="undefined"?1===e?function(e){return n.call(t,e)}:2===e?function(e,r){return n.call(t,e,r)}:4===e?function(e,r,u,a){return n.call(t,e,r,u,a)
}:function(e,r,u){return n.call(t,e,r,u)}:n},M.debounce=function(n,t,e){function o(){l=u,p&&(f=n.apply(c,i))}var i,f,c,l,p=r;if(e===r)var s=r,p=a;else e&&F[typeof e]&&(s=e.leading,p="trailing"in e?e.trailing:p);return function(){var e=s&&!l;return i=arguments,c=this,Wt(l),l=re(o,t),e&&(f=n.apply(c,i)),f}},M.defaults=z,M.defer=At,M.delay=function(n,t){var r=ge.call(arguments,2);return re(function(){n.apply(e,r)},t)},M.difference=wt,M.filter=vt,M.flatten=jt,M.forEach=yt,M.forIn=D,M.forOwn=q,M.functions=tt,M.groupBy=function(n,t,e){var r={};
return t=M.createCallback(t,e),yt(n,function(n,e,u){e=Ut(t(n,e,u)),(ne.call(r,e)?r[e]:r[e]=[]).push(n)}),r},M.initial=function(n,t,e){if(!n)return[];var r=0,a=n.length;if(typeof t!="number"&&t!=u){var o=a;for(t=M.createCallback(t,e);o--&&t(n[o],o,n);)r++}else r=t==u||e?1:t||r;return Y(n,0,pe(le(0,a-r),a))},M.intersection=function(n){var t=arguments,e=t.length,r={0:{}},u=-1,a=n?n.length:0,o=a>=s,i=[],f=i;n:for(;++u<a;){var c=n[u];if(o)var l=p+c,l=r[0][l]?!(f=r[0][l]):f=r[0][l]=[];if(l||0>xt(f,c)){o&&f.push(c);
for(var v=e;--v;)if(!(r[v]||(r[v]=U(t[v])))(c))continue n;i.push(c)}}return i},M.invert=et,M.invoke=function(n,t){var e=ge.call(arguments,2),r=-1,u=typeof t=="function",a=n?n.length:0,o=Rt(typeof a=="number"?a:0);return yt(n,function(n){o[++r]=(u?t:n[t]).apply(n,e)}),o},M.keys=me,M.map=ht,M.max=mt,M.memoize=function(n,t){var e={};return function(){var r=p+(t?t.apply(this,arguments):arguments[0]);return ne.call(e,r)?e[r]:e[r]=n.apply(this,arguments)}},M.merge=ct,M.min=function(n,t,e){var r=1/0,u=r;
if(!t&&rt(n)){e=-1;for(var a=n.length;++e<a;){var o=n[e];o<u&&(u=o)}}else t=!t&&ft(n)?V:M.createCallback(t,e),yt(n,function(n,e,a){e=t(n,e,a),e<r&&(r=e,u=n)});return u},M.omit=function(n,t,e){var r=typeof t=="function",u={};if(r)t=M.createCallback(t,e);else var a=Xt.apply(Gt,ge.call(arguments,1));return D(n,function(n,e,o){(r?!t(n,e,o):0>xt(a,e))&&(u[e]=n)}),u},M.once=function(n){var t,e;return function(){return t?e:(t=r,e=n.apply(this,arguments),n=u,e)}},M.pairs=function(n){for(var t=-1,e=me(n),r=e.length,u=Rt(r);++t<r;){var a=e[t];
u[t]=[a,n[a]]}return u},M.partial=function(n){return H(n,ge.call(arguments,1))},M.partialRight=function(n){return H(n,ge.call(arguments,1),u,l)},M.pick=function(n,t,e){var r={};if(typeof t!="function")for(var u=-1,a=Xt.apply(Gt,ge.call(arguments,1)),o=ot(n)?a.length:0;++u<o;){var i=a[u];i in n&&(r[i]=n[i])}else t=M.createCallback(t,e),D(n,function(n,e,u){t(n,e,u)&&(r[e]=n)});return r},M.pluck=bt,M.range=function(n,t,e){n=+n||0,e=+e||1,t==u&&(t=n,n=0);var r=-1;t=le(0,Qt((t-n)/e));for(var a=Rt(t);++r<t;)a[r]=n,n+=e;
return a},M.reject=function(n,t,e){return t=M.createCallback(t,e),vt(n,function(n,e,r){return!t(n,e,r)})},M.rest=Ot,M.shuffle=function(n){var t=-1,e=n?n.length:0,r=Rt(typeof e=="number"?e:0);return yt(n,function(n){var e=Yt(ve()*(++t+1));r[t]=r[e],r[e]=n}),r},M.sortBy=function(n,t,e){var r=-1,u=n?n.length:0,a=Rt(typeof u=="number"?u:0);for(t=M.createCallback(t,e),yt(n,function(n,e,u){a[++r]={a:t(n,e,u),b:r,c:n}}),u=a.length,a.sort(G);u--;)a[u]=a[u].c;return a},M.tap=function(n,t){return t(n),n},M.throttle=function(n,t,e){function o(){p=new qt,l=u,v&&(f=n.apply(c,i))
}var i,f,c,l,p=0,s=r,v=r;return e===a?s=a:e&&F[typeof e]&&(s="leading"in e?e.leading:s,v="trailing"in e?e.trailing:v),function(){var e=new qt;!l&&!s&&(p=e);var r=t-(e-p);return i=arguments,c=this,0<r?l||(l=re(o,r)):(Wt(l),l=u,p=e,f=n.apply(c,i)),f}},M.times=function(n,t,e){n=-1<(n=+n)?n:0;var r=-1,u=Rt(n);for(t=M.createCallback(t,e,1);++r<n;)u[r]=t(r);return u},M.toArray=function(n){return n&&typeof n.length=="number"?Y(n):lt(n)},M.union=function(n){return rt(n)||(arguments[0]=n?ge.call(n):Gt),Et(Xt.apply(Gt,arguments))
},M.uniq=Et,M.unzip=function(n){for(var t=-1,e=n?n.length:0,r=e?mt(bt(n,"length")):0,u=Rt(r);++t<e;)for(var a=-1,o=n[t];++a<r;)(u[a]||(u[a]=Rt(e)))[t]=o[a];return u},M.values=lt,M.where=vt,M.without=function(n){return wt(n,ge.call(arguments,1))},M.wrap=function(n,t){return function(){var e=[n];return te.apply(e,arguments),t.apply(this,e)}},M.zip=function(n){for(var t=-1,e=n?mt(bt(arguments,"length")):0,r=Rt(e);++t<e;)r[t]=bt(arguments,t);return r},M.zipObject=It,M.collect=ht,M.drop=Ot,M.each=yt,M.extend=P,M.methods=tt,M.object=It,M.select=vt,M.tail=Ot,M.unique=Et,Bt(M),M.clone=nt,M.cloneDeep=function(n,t,e){return nt(n,r,t,e)
},M.contains=pt,M.escape=function(n){return n==u?"":Ut(n).replace(w,L)},M.every=st,M.find=gt,M.findIndex=function(n,t,e){var r=-1,u=n?n.length:0;for(t=M.createCallback(t,e);++r<u;)if(t(n[r],r,n))return r;return-1},M.findKey=function(n,t,e){var r;return t=M.createCallback(t,e),q(n,function(n,e,u){return t(n,e,u)?(r=e,a):void 0}),r},M.has=function(n,t){return n?ne.call(n,t):a},M.identity=$t,M.indexOf=xt,M.isArguments=function(n){return ue.call(n)==x},M.isArray=rt,M.isBoolean=function(n){return n===r||n===a||ue.call(n)==N
},M.isDate=function(n){return n instanceof qt||ue.call(n)==E},M.isElement=function(n){return n?1===n.nodeType:a},M.isEmpty=function(n){var t=r;if(!n)return t;var e=ue.call(n),u=n.length;return e==O||e==$||e==x||e==S&&typeof u=="number"&&at(n.splice)?!u:(q(n,function(){return t=a}),t)},M.isEqual=ut,M.isFinite=function(n){return ie(n)&&!fe(parseFloat(n))},M.isFunction=at,M.isNaN=function(n){return it(n)&&n!=+n},M.isNull=function(n){return n===u},M.isNumber=it,M.isObject=ot,M.isPlainObject=f,M.isRegExp=function(n){return n instanceof Mt||ue.call(n)==A
},M.isString=ft,M.isUndefined=function(n){return typeof n=="undefined"},M.lastIndexOf=function(n,t,e){var r=n?n.length:0;for(typeof e=="number"&&(r=(0>e?le(0,r+e):pe(e,r-1))+1);r--;)if(n[r]===t)return r;return-1},M.mixin=Bt,M.noConflict=function(){return o._=Jt,this},M.parseInt=Tt,M.random=function(n,t){return n==u&&t==u&&(t=1),n=+n||0,t==u&&(t=n,n=0),n+Yt(ve()*((+t||0)-n+1))},M.reduce=dt,M.reduceRight=_t,M.result=function(n,t){var r=n?n[t]:e;return at(r)?n[t]():r},M.runInContext=t,M.size=function(n){var t=n?n.length:0;
return typeof t=="number"?t:me(n).length},M.some=kt,M.sortedIndex=Nt,M.template=function(n,t,u){var a=M.templateSettings;n||(n=""),u=z({},u,a);var o,i=z({},u.imports,a.imports),a=me(i),i=lt(i),f=0,c=u.interpolate||k,l="__p+='",c=Mt((u.escape||k).source+"|"+c.source+"|"+(c===d?m:k).source+"|"+(u.evaluate||k).source+"|$","g");n.replace(c,function(t,e,u,a,i,c){return u||(u=a),l+=n.slice(f,c).replace(C,J),e&&(l+="'+__e("+e+")+'"),i&&(o=r,l+="';"+i+";__p+='"),u&&(l+="'+((__t=("+u+"))==null?'':__t)+'"),f=c+t.length,t
}),l+="';\n",c=u=u.variable,c||(u="obj",l="with("+u+"){"+l+"}"),l=(o?l.replace(v,""):l).replace(g,"$1").replace(y,"$1;"),l="function("+u+"){"+(c?"":u+"||("+u+"={});")+"var __t,__p='',__e=_.escape"+(o?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}";try{var p=Dt(a,"return "+l).apply(e,i)}catch(s){throw s.source=l,s}return t?p(t):(p.source=l,p)},M.unescape=function(n){return n==u?"":Ut(n).replace(h,Z)},M.uniqueId=function(n){var t=++c;return Ut(n==u?"":n)+t
},M.all=st,M.any=kt,M.detect=gt,M.foldl=dt,M.foldr=_t,M.include=pt,M.inject=dt,q(M,function(n,t){M.prototype[t]||(M.prototype[t]=function(){var t=[this.__wrapped__];return te.apply(t,arguments),n.apply(M,t)})}),M.first=Ct,M.last=function(n,t,e){if(n){var r=0,a=n.length;if(typeof t!="number"&&t!=u){var o=a;for(t=M.createCallback(t,e);o--&&t(n[o],o,n);)r++}else if(r=t,r==u||e)return n[a-1];return Y(n,le(0,a-r))}},M.take=Ct,M.head=Ct,q(M,function(n,t){M.prototype[t]||(M.prototype[t]=function(t,e){var r=n(this.__wrapped__,t,e);
return t==u||e&&typeof t!="function"?r:new Q(r)})}),M.VERSION="1.2.0",M.prototype.toString=function(){return Ut(this.__wrapped__)},M.prototype.value=Ft,M.prototype.valueOf=Ft,yt(["join","pop","shift"],function(n){var t=Gt[n];M.prototype[n]=function(){return t.apply(this.__wrapped__,arguments)}}),yt(["push","reverse","sort","unshift"],function(n){var t=Gt[n];M.prototype[n]=function(){return t.apply(this.__wrapped__,arguments),this}}),yt(["concat","slice","splice"],function(n){var t=Gt[n];M.prototype[n]=function(){return new Q(t.apply(this.__wrapped__,arguments))
}}),M}var e,r=!0,u=null,a=!1,o=typeof exports=="object"&&exports,i=typeof module=="object"&&module&&module.exports==o&&module,f=typeof global=="object"&&global;(f.global===f||f.window===f)&&(n=f);var c=0,l={},p=+new Date+"",s=200,v=/\b__p\+='';/g,g=/\b(__p\+=)''\+/g,y=/(__e\(.*?\)|\b__t\))\+'';/g,h=/&(?:amp|lt|gt|quot|#39);/g,m=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,b=/\w*$/,d=/<%=([\s\S]+?)%>/g,_=/^0+(?=.$)/,k=/($^)/,w=/[&<>"']/g,C=/['\n\r\t\u2028\u2029\\]/g,j="Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setImmediate setTimeout".split(" "),x="[object Arguments]",O="[object Array]",N="[object Boolean]",E="[object Date]",I="[object Number]",S="[object Object]",A="[object RegExp]",$="[object String]",B={"[object Function]":a};
B[x]=B[O]=B[N]=B[E]=B[I]=B[S]=B[A]=B[$]=r;var F={"boolean":a,"function":r,object:r,number:a,string:a,undefined:a},R={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},T=t();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(n._=T,define(function(){return T})):o&&!o.nodeType?i?(i.exports=T)._=T:o._=T:n._=T})(this);
(function() {
    'use strict';

    angular.module('chattapp', ['ionic', 'ngStorage', 'ngResource', 'GoogleLoginService', 'facebookLoginService', 'ngMessages'])

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('login', {
                url: '/login',
                cache: false,
                templateUrl: 'app/login/login.html',
                controller: 'loginController',
                controllerAs: 'login'
            })
            .state('register', {
                url: '/register',
                cache: false,
                templateUrl: 'app/register/register.html',
                controller: 'registerController',
                controllerAs: 'register'
            })
            .state('verification', {
                url: '/verification',
                cache: false,
                templateUrl: 'app/verification/verification.html',
                controller: 'verificationController',
                controllerAs: 'verification'
            })
            .state('forgotPassword', {
                url: '/forgotPassword',
                cache: false,
                templateUrl: 'app/forgotpassword/forgotpassword.html',
                controller: 'forgotPasswordController',
                controllerAs: 'forgotPassword'
            })
            .state('app', {
                url: '/app',
                cache:false,
                abstract: true,
                templateUrl: 'app/menu/menu.html',
                controller: 'menuController',
                controllerAs: 'menu'
              })
            .state('app.contacts', {
                url: '/contacts',
                cache:false,
                views: {
                  'menuContent': {
                    templateUrl: 'app/contacts/contacts.html',
                    controller: 'contactsController',
                    controllerAs: 'contacts'
                  }
                }
              })
            .state('app.resetpassword', {
                url: '/resetpassword',
                cache:false,
                views: {
                  'menuContent': {
                    templateUrl: 'app/resetpassword/resetpassword.html',
                    controller: 'resetPasswordController',
                    controllerAs: 'resetpassword'
                  }
                }
              })
            .state('app.chatpage', {
                url: '/chatpage/:roomId',
                cache:false,
                views: {
                   'menuContent': {
                      templateUrl: 'app/chatpage/chatpage.html',
                      controller: 'chatPageController',
                      controllerAs: 'chatPage'
                    }
                }
            })
            .state('app.setting', {
                url: '/setting',
                cache:false,
                views: {
                   'menuContent': {
                      templateUrl: 'app/setting/setting.html',
                      controller: 'settingController',
                      controllerAs: 'setting'
                    }
                }
            })
            .state('app.profile', {
                url: '/profile',
                cache:false,
                views: {
                   'menuContent': {
                      templateUrl: 'app/profile/profile.html',
                      controller: 'profileController',
                      controllerAs: 'profile'
                    }
                }
            })
            .state('app.chats', {
                url: '/chats',
                cache:false,
                views: {
                   'menuContent': {
                      templateUrl: 'app/chats/chats.html',
                      controller: 'chatsController',
                      controllerAs: 'chats'
                    }
                }
            });
        // if none of the above states are matched, use this as the fallback
        // $urlRouterProvider.otherwise('/login');
    });

})();
(function() {
    'use strict';

    angular.module('chattapp')

    .run(function($ionicPlatform, timeStorage, $state, Configurations, deviceService, pushNotification, lastUsesTimeService, $localStorage, sqliteService) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
        
        if($localStorage.userData){
            $state.go('app.contacts');
        } else{
            $state.go('login');
        }
        console.log('heyey');
        window.socket = io(Configurations.socketApi);
        document.addEventListener("deviceready", function() {
            pushNotification.push();
            sqliteService.createTable();
            lastUsesTimeService.updateTimeWithHttp();
            document.addEventListener("pause", onPause, false);
            document.addEventListener("resume", onResume, false);
            function onPause() {
                lastUsesTimeService.updateTime();
            }
            function onResume() {
                lastUsesTimeService.updateTime();
            }
        });


    });

})();
(function() {
    'use strict';

angular.module('chattapp')

.config(function($ionicConfigProvider) {
    $ionicConfigProvider.backButton.previousTitleText(false).text(' ');
});

})();
(function() {
    'use strict';
    angular.module('chattapp')
        .constant('Configurations', {
            api_url: 'http://144.76.34.244:3033/api',
            senderID: '117380048302',
            icon: 'chatt',
            socketApi: 'http://144.76.34.244:3033'
        });
})();
 (function() {
     'use strict';

     angular.module('chattapp')
         .controller('chatPageController', chatPageController);

     function chatPageController($scope, $state, $timeout, $ionicScrollDelegate, chatPageFactory, $ionicLoading, $ionicHistory, timeStorage, socketService, $stateParams, sqliteService) {
         var self = this;
         var chatWithUserData = timeStorage.get('chatWithUserData');
         $scope.userHeader = {};
         $scope.userHeader.name = chatWithUserData.name;
         $scope.userHeader.image = chatWithUserData.pic;
         $scope.userHeader.lastSeen = chatWithUserData.lastSeen;
         $scope.userHeader.goBack = function() {
             $ionicHistory.goBack();
         }
         $scope.userfooter = {};
         $scope.userfooter.image = '';
         $scope.$on('newRoomMessage', function (event, response) {
            self.displayChatMessages.push({
                 "image": response.data.image,
                 "message": response.data.message,
                 "messageTime": _.now(),
                 "name": response.data.name
             });
            $scope.$evalAsync();
            $ionicScrollDelegate.scrollBottom(false);
         });
         $scope.userfooter.sendMessage = function() {
             socketService.room_message($stateParams.roomId, $scope.userfooter.message);
             sqliteService.messageToBeSend($scope.userfooter.message, 'userName', $stateParams.roomId);
             self.displayChatMessages.push({
                 "image": "",
                 "message": $scope.userfooter.message,
                 "messageTime": _.now(),
                 "name": "User 1"
             });
             $scope.userfooter.message = '';
             $ionicScrollDelegate.scrollBottom(false);
         }
         $scope.userfooter.inputUp = function() {
             $timeout(function() {
                 $ionicScrollDelegate.scrollBottom(true);
             }, 300);
         };
         $scope.userfooter.inputDown = function() {
             $ionicScrollDelegate.resize();
         };
         self.displayChatMessages = [];
         $timeout(function() {
             $ionicScrollDelegate.scrollBottom(false);
         });
     }
 })();
(function() {
   'use strict';
   angular.module('chattapp')
       .factory('chatPageFactory', chatPageFactory);

   function chatPageFactory($resource, Configurations) {
       // return $resource(Configurations.api_url+'/users/:user_Id/chats', {},{});
       return $resource('app/mock/chatpage.json', {},{});
   };
})();
 (function() {
     'use strict';

     angular.module('chattapp')

     .directive('chatPageFooter', function() {
         var directive = {};
         directive.restrict = 'E';
         directive.templateUrl = "app/chatpage/templates/footer.html";
         directive.scope = {
             chatPageFooter: "=footer"
         }
         directive.compile = function(element, attributes) {
             var linkFunction = function($scope, element, attributes) {}
             return linkFunction;
         }
         return directive;
     });
 })();
 (function() {
     'use strict';

     angular.module('chattapp')

     .directive('chatPageHeader', function() {
         var directive = {};
         directive.restrict = 'E';
         directive.templateUrl = "app/chatpage/templates/header.html";
         directive.scope = {
             chatPage: "=header"
         }
         directive.compile = function(element, attributes) {
             var linkFunction = function($scope, element, attributes) {}
             return linkFunction;
         }
         return directive;
     });
 })();
 (function() {
    'use strict';

    angular.module('chattapp')
        .controller('chatsController', chatsController);

    function chatsController(chatsFactory, timeStorage) {
            var self = this;
            var userData = timeStorage.get('userData');
            var query = chatsFactory.query({
                 access_token: userData.data.access_token,
                 timestamp:_.now(),
                 limit: 10,
                 page: 0
             });
             query.$promise.then(function(data) {
                 self.displayChats = data;
             });
    }
})();
(function() {
   'use strict';
   angular.module('chattapp')
       .factory('chatsFactory', chatsFactory);

   function chatsFactory($resource, Configurations) {
       return $resource(Configurations.api_url+'/users/contacts', {},{});
   };
})();
 (function() {
     'use strict';

     angular.module('chattapp')

     .directive('chatsFooter', function() {
         var directive = {};
         directive.restrict = 'E';
         directive.templateUrl = "app/chats/templates/footer.html";
         directive.scope = {
             chatsFooter: "=footer"
         }
         directive.compile = function(element, attributes) {
             var linkFunction = function($scope, element, attributes) {}
             return linkFunction;
         }
         return directive;
     });
 })();
 (function() {
     'use strict';
     angular.module('chattapp')
         .factory('cameraService', cameraService);

     function cameraService($q, $ionicActionSheet) {
         var service = {};
         service.changePic = function() {
                 var q = $q.defer();
                 var hideSheet = $ionicActionSheet.show({
                     buttons: [{
                         text: '<p class="text-center"><i class="ion-images"></i> Gallery</p>'
                     }, {
                         text: '<p class="text-center"><i class="ion-camera"></i> Camera</p>'
                     }],
                     titleText: 'Profile photo',
                     cancelText: 'Cancel',
                     cancel: function() {},
                     buttonClicked: function(index) {
                         service.getPicture(index).then(function(imageData) {
                             q.resolve(imageData);
                         }, function(err) {
                             q.reject(err);
                         })
                         return true;
                     }
                 });
                 return q.promise;
             },
             service.getPicture = function(index) {
                 var q = $q.defer();
                 navigator.camera.getPicture(onSuccess, onFail, {
                     quality: 100,
                     destinationType: Camera.DestinationType.DATA_URL,
                     correctOrientation: true,
                     // allowEdit: true,
                     sourceType: index
                 });
                 function onSuccess(imageData) {
                     q.resolve(imageData);
                 }
                 function onFail(message) {
                     q.reject(message);
                 }
                 return q.promise;
             }
         return service;
     };

 })();
 (function() {
    'use strict';
    angular.module('chattapp')
            .factory('deviceService', deviceService);

    function deviceService() {
        return {
            getuuid: function() {
                if(window.plugins){
                    return device.uuid;
                } else{
                    return -1;
                }
            },
            platform: function() {
                if(window.plugins){
                    return device.platform;
                } else{
                    return 'desktop';
                }
            }
        }
    };

})();
var facebookLoginService = angular.module('facebookLoginService', []);

facebookLoginService.factory('facebookLogin', facebookLogin);
function facebookLogin($http, $q, $state) {
var service = {};
        service.fbLoginSuccess = function() {
            var def = $q.defer();
            facebookConnectPlugin.login(['email','user_friends', 'public_profile'], fbLoginSuccess, service.fbLoginError);
            function fbLoginSuccess(response){
            
                if (!response.authResponse) {
                    fbLoginError("Cannot find the authResponse");
                    return;
                }
                var authResponse = response.authResponse;
                service.getFacebookProfileInfo(authResponse)
                    .then(function(profileInfo) {
                        console.log(profileInfo);
                        profileInfo.accessToken = authResponse.accessToken;
                        def.resolve(profileInfo);
                    }, function(fail) {
                        console.log('profile info fail', fail);
                        def.reject(fail);
                    });
                }
                return def.promise;
            };
            service.fbLoginError = function(error) {
                console.log('fbLoginError', error);
            };
            service.getFacebookProfileInfo = function(authResponse) {
                var info = $q.defer();
                facebookConnectPlugin.api('/me?fields=email,name&access_token=' + authResponse.accessToken, null,
                    function(response) {
                        console.log(response);
                        response.accessToken = authResponse.accessToken;
                        info.resolve(response);
                    },
                    function(response) {
                        console.log(response);
                        info.reject(response);
                    }
                );
                return info.promise;
            };
             service.login = function() {
                var def = $q.defer();
            facebookConnectPlugin.getLoginStatus(function(success) {
                if (success.status === 'connected') {
                    console.log('getLoginStatus', success.status);
                        service.getFacebookProfileInfo(success.authResponse)
                            .then(function(profileInfo) {
                                console.log(profileInfo);
                                def.resolve(profileInfo);
                            }, function(fail) {
                                console.log('profile info fail', fail);
                                def.reject(fail);
                            });
                } else {
                    console.log('getLoginStatus', success.status);
                    def.resolve(success.status);
                }
            });
            return def.promise;
        }
        return service;
    }
var googleLoginService = angular.module('GoogleLoginService', ['ngStorage']);
googleLoginService.factory('timeStorage', ['$localStorage', function($localStorage) {
    var timeStorage = {};
    timeStorage.cleanUp = function() {
        var cur_time = new Date().getTime();
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            if (key.indexOf('_expire') === -1) {
                var new_key = key + "_expire";
                var value = localStorage.getItem(new_key);
                if (value && cur_time > value) {
                    localStorage.removeItem(key);
                    localStorage.removeItem(new_key);
                }
            }
        }
    };
    timeStorage.remove = function(key) {
        //this.cleanUp();
        var time_key = key + '_expire';
        $localStorage[key] = false;
        $localStorage[time_key] = false;
    };
    timeStorage.set = function(key, data, hours) {
        //this.cleanUp();
        $localStorage[key] = data;
        var time_key = key + '_expire';
        var time = new Date().getTime();
        time = time + (hours * 1 * 60 * 60 * 1000);
        $localStorage[time_key] = time;
    };
    timeStorage.get = function(key) {
        //this.cleanUp();
        var time_key = key + "_expire";
        if (!$localStorage[time_key]) {
            return false;
        }
        var expire = $localStorage[time_key] * 1;
        if (new Date().getTime() > expire) {
            $localStorage[key] = null;
            $localStorage[time_key] = null;
            return false;
        }
        return $localStorage[key];
    };
    return timeStorage;
}]);


googleLoginService.factory('googleLogin', [
    '$http', '$q', '$interval', '$log', 'timeStorage',
    function($http, $q, $interval, $log, timeStorage) {
        var service = {};
        service.access_token = false;
        service.redirect_url = 'http://localhost';
        service.client_id = '515946351830-qog4elguhcrvnrimotf3t30devu67l11.apps.googleusercontent.com';
        service.secret = 'CqY1qvOOHAFcSuidWtUyZCQl';
        service.scope = 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/plus.me';
        service.gulp = function(url, name) {
            url = url.substring(url.indexOf('?') + 1, url.length);

            return url.replace('code=', '');
        };
        service.authorize = function(options) {
            var def = $q.defer();
            var self = this;

            var access_token = timeStorage.get('google_access_token');
            if (access_token) {
                $log.info('Direct Access Token :' + access_token);
                service.getUserInfo(access_token, def);
            } else {

                var params = 'client_id=' + encodeURIComponent(options.client_id);
                params += '&redirect_uri=' + encodeURIComponent(options.redirect_uri);
                params += '&response_type=code';
                params += '&scope=' + encodeURIComponent(options.scope);
                var authUrl = 'https://accounts.google.com/o/oauth2/auth?' + params;

                var win = window.open(authUrl, '_blank', 'location=no,toolbar=no,width=800, height=800');
                var context = this;

                if (ionic.Platform.isWebView()) {
                    console.log('using in app browser');
                    win.addEventListener('loadstart', function(data) {
                        console.log('load start');
                        if (data.url.indexOf(context.redirect_url) === 0) {
                            console.log('redirect url found ' + context.redirect_url);
                            console.log('window url found ' + data.url);
                            win.close();
                            var url = data.url;
                            var access_code = context.gulp(url, 'code');
                            if (access_code) {
                                context.validateToken(access_code, def);
                            } else {
                                def.reject({
                                    error: 'Access Code Not Found'
                                });
                            }
                        }

                    });
                } else {
                    console.log('InAppBrowser not found11');
                    var pollTimer = $interval(function() {
                        try {
                            console.log("google window url " + win.document.URL);
                            if (win.document.URL.indexOf(context.redirect_url) === 0) {
                                console.log('redirect url found');
                                win.close();
                                $interval.cancel(pollTimer);
                                pollTimer = false;
                                var url = win.document.URL;
                                $log.debug('Final URL ' + url);
                                var access_code = context.gulp(url, 'code');
                                if (access_code) {
                                    $log.info('Access Code: ' + access_code);
                                    context.validateToken(access_code, def);
                                } else {
                                    def.reject({
                                        error: 'Access Code Not Found'
                                    });
                                }
                            }
                        } catch (e) {}
                    }, 100);
                }
            }
            return def.promise;
        };
        service.validateToken = function(token, def) {
            $log.info('Code: ' + token);
            var http = $http({
                url: 'https://www.googleapis.com/oauth2/v3/token',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                params: {
                    code: token,
                    client_id: this.client_id,
                    client_secret: this.secret,
                    redirect_uri: this.redirect_url,
                    grant_type: 'authorization_code',
                    scope: ''
                }
            });
            var context = this;
            http.then(function(data) {
                $log.debug(data);
                var access_token = data.data.access_token;
                var expires_in = data.data.expires_in;
                expires_in = expires_in * 1 / (60 * 60);
                timeStorage.set('google_access_token', access_token, expires_in);
                if (access_token) {
                    $log.info('Access Token :' + access_token);
                    context.getUserInfo(access_token, def);
                } else {
                    def.reject({
                        error: 'Access Token Not Found'
                    });
                }
            });
        };
        service.getUserInfo = function(access_token, def) {
            var http = $http({
                url: 'https://www.googleapis.com/oauth2/v3/userinfo',
                method: 'GET',
                params: {
                    access_token: access_token
                }
            });
            http.then(function(data) {
                $log.debug(data);
                var user_data = data.data;
                var user = {
                    name: user_data.name,
                    gender: user_data.gender,
                    email: user_data.email,
                    google_id: user_data.sub,
                    picture: user_data.picture,
                    profile: user_data.profile
                };
                def.resolve(user);
            });
        };
        service.getUserFriends = function() {
            var access_token = this.access_token;
            var http = $http({
                url: 'https://www.googleapis.com/plus/v1/people/me/people/visible',
                method: 'GET',
                params: {
                    access_token: access_token
                }
            });
            http.then(function(data) {
                console.log(data);
            });
        };
        service.startLogin = function() {
            var def = $q.defer();
            var promise = this.authorize({
                client_id: this.client_id,
                client_secret: this.secret,
                redirect_uri: this.redirect_url,
                scope: this.scope
            });
            promise.then(function(data) {
                def.resolve(data);
            }, function(data) {
                $log.error(data);
                def.reject(data.error);
            });
            return def.promise;
        };
        return service;
    }
]);
(function() {
    'use strict';
    angular.module('chattapp')
            .config(function($httpProvider) {
                $httpProvider.interceptors.push('myInterceptor');
            });
})();
(function() {
    'use strict';
    angular.module('chattapp')
            .factory('myInterceptor', function($localStorage) {
                var requestInterceptor = {
                    request: function(config) {
                        var currentUser = $localStorage.userData;
                        if (currentUser) {
                            var accessToken = currentUser.data.access_token;
                            var configURL = config.url; 
                            console.log();
                            if(configURL.substring(0, 4) == 'http'){
                                config.url = config.url + '?access_token='+accessToken+'&currentTimestamp='+_.now()+'';
                            }
                        }
                        if(config.method == 'POST'){
                            $localStorage.lastTimeStampFireApi = _.now();
                        }
                        return config;
                    }
                };
                return requestInterceptor;
            });
})();
 (function() {
     'use strict';

     angular.module('chattapp')
         .directive('img', function($timeout) {
             return {
                 restrict: 'E',
                 link: function(scope, element, attr) {
                     if (attr.ngSrc == '') {
                         if (scope.contact) {
                             var name = scope.contact.name;
                             var firstLetter = name.charAt(0).toUpperCase();
                         }
                         if(scope.chat){
                             var name = scope.chat.name;
                             var firstLetter = name.charAt(0).toUpperCase();
                         }
                         if(scope.chatPage){
                            var name = '';
                             if(scope.chatPage.displayChatMessages){
                                console.log(scope.chatPage.displayChatMessages[0].name);
                                name = scope.chatPage.displayChatMessages[0].name;
                                var firstLetter = name.charAt(0).toUpperCase();
                             } else{
                             name = scope.chatPage.name;
                             var firstLetter = name.charAt(0).toUpperCase();
                             }
                         }
                         var colorClass = Math.floor((Math.random() * 10) + 1);
                         element.replaceWith("<button class='no-image circleColor"+colorClass+"'><i class='i-24 white'>" + firstLetter + "</i><div class='md-ripple-container'></div></button>");
                     }
                 }
             }
         });
 })();
angular.module('chattapp')
    .directive('input', function($timeout) {
        return {
            restrict: 'E',
            scope: {
                'returnClose': '=',
                'onReturn': '&',
                'onFocus': '&',
                'onBlur': '&'
            },
            link: function(scope, element, attr) {
                element.bind('focus', function(e) {
                    if (scope.onFocus) {
                        $timeout(function() {
                            scope.onFocus();
                        });
                    }
                });
                element.bind('blur', function(e) {
                    if (scope.onBlur) {
                        $timeout(function() {
                            scope.onBlur();
                        });
                    }
                });
                element.bind('keydown', function(e) {
                    if (e.which == 13) {
                        if (scope.returnClose) element[0].blur();
                        if (scope.onReturn) {
                            $timeout(function() {
                                scope.onReturn();
                            });
                        }
                    }
                });
            }
        }
    });
(function() {
    'use strict';
    angular.module('chattapp')
        .factory('lastUsesTimeFactory', lastUsesTimeFactory);

    function lastUsesTimeFactory($resource, Configurations) {
        // return $resource(Configurations.api_url+'/users/contacts', {},{});
        return $resource('app/mock/contacts.json', {}, {});
    };
})();
 (function() {
     'use strict';
     angular.module('chattapp')
         .factory('lastUsesTimeService', lastUsesTimeService);

     function lastUsesTimeService(lastUsesTimeFactory, timeStorage, $interval, $localStorage) {
         var service = {};
         service.updateTimeWithHttp = function() {
                 $interval(function() {
                     var LastTimeFireApi = $localStorage.lastTimeStampFireApi;
                     if (LastTimeFireApi) {
                         var currentTimestamp = _.now();
                         var diffrence = currentTimestamp - LastTimeFireApi;
                         if (diffrence > 300000) {
                             service.updateTime();
                         }
                     }
                 }, 60000);
             },
             service.updateTime = function() {
                     var userData = timeStorage.get('userData');
                     if (userData) {
                         if (!_.isEmpty(userData.data.access_token)) {
                             service.fireApi(userData.data.access_token);
                         }
                     }
             },
             service.fireApi = function(access_token) {
                 var currentTimestamp = _.now();
                 var query = lastUsesTimeFactory.query({
                     currentTimestamp: currentTimestamp,
                     access_token: access_token
                 });
                 query.$promise.then(function(data) {
                     console.log(data);
                 });
             }
         return service;
     };
 })();
/*! ngstorage 0.3.7 | Copyright (c) 2015 Gias Kay Lee | MIT License */!function(a,b){"use strict";"function"==typeof define&&define.amd?define(["angular"],b):"object"==typeof exports?module.exports=b(require("angular")):b(a.angular)}(this,function(a){"use strict";function b(b){return["$rootScope","$window","$log","$timeout",function(c,d,e,f){function g(a){var b;try{b=d[a]}catch(c){b=!1}if(b&&"localStorage"===a){var e="__"+Math.round(1e7*Math.random());try{localStorage.setItem(e,e),localStorage.removeItem(e)}catch(c){b=!1}}return b}var h,i,j=g(b)||(e.warn("This browser does not support Web Storage!"),{setItem:function(){},getItem:function(){}}),k={$default:function(b){for(var c in b)a.isDefined(k[c])||(k[c]=b[c]);return k},$reset:function(a){for(var b in k)"$"===b[0]||delete k[b]&&j.removeItem("ngStorage-"+b);return k.$default(a)}};try{j=d[b],j.length}catch(l){e.warn("This browser does not support Web Storage!"),j={}}for(var m,n=0,o=j.length;o>n;n++)(m=j.key(n))&&"ngStorage-"===m.slice(0,10)&&(k[m.slice(10)]=a.fromJson(j.getItem(m)));return h=a.copy(k),c.$watch(function(){var b;i||(i=f(function(){if(i=null,!a.equals(k,h)){b=a.copy(h),a.forEach(k,function(c,d){a.isDefined(c)&&"$"!==d[0]&&j.setItem("ngStorage-"+d,a.toJson(c)),delete b[d]});for(var c in b)j.removeItem("ngStorage-"+c);h=a.copy(k)}},100,!1))}),d.addEventListener&&d.addEventListener("storage",function(b){"ngStorage-"===b.key.slice(0,10)&&(b.newValue?k[b.key.slice(10)]=a.fromJson(b.newValue):delete k[b.key.slice(10)],h=a.copy(k),c.$apply())}),k}]}return a.module("ngStorage",[]).factory("$localStorage",b("localStorage")).factory("$sessionStorage",b("sessionStorage"))});

(function () {
    'use strict';
    angular.module('chattapp')
            .factory('pushNotification', pushNotification);
    function pushNotification($http, $q, $log,Configurations, timeStorage) {
        return {
            push: function () {
                console.log('push is calling');
                    var push = PushNotification.init({
                    "android": {
                        "senderID": Configurations.senderID,
                        "icon": Configurations.icon,
                        "iconColor": "grey"
                    },
                    "ios": {
                        "alert": "true",
                        "badge": "true",
                        "sound": "true"
                    },
                    "windows": {}
                });
                push.on('registration', function(data) {
                    console.log(data.registrationId);
                    timeStorage.set('gcmToken',data.registrationId)
                });
                push.on('notification', function(data) {
                    if (undefined != data.additionalData.callback && 'function' == typeof window[data.additionalData.callback]) {
                        windowdata.additionalData.callback;
                    }
                    console.log(data);
                    if (data.additionalData.foreground) {
                        console.log(data);
                    } else {
                        data.message,
                            data.title,
                            data.count,
                            data.sound,
                            data.image,
                            data.additionalData
                    }
                    window.callbackName = function() {
                        console.log("Notification");
                    }
                });
                window.actions_left = function(data) {
                    $state.go('app.chatpage');
                };
                push.on('error', function(e) {
                    console.log("error");
                    console.log(e.message);
                });
            }
        };
    }

})();
 (function() {
     'use strict';
     angular.module('chattapp')
         .factory('socketService', socketService);

     function socketService($rootScope, $q, timeStorage) {
         var service = {};
         var userData = timeStorage.get('userData');
         var accessToken = userData.data.access_token;
         service.new_private_room = function() {
                 var q = $q.defer();
                 socket.on('new_private_room', function(data) {
                     socket.removeAllListeners();
                     q.resolve(data);
                 });
                 return q.promise;
             },
             service.create_private_room = function(chatWithUserId) {
                 var q = $q.defer();
                 socket.emit('create_private_room', accessToken, chatWithUserId, _.now());
                 service.new_private_room().then(function(data) {
                     q.resolve(data);
                 });
                 return q.promise;
             },
             service.room_message = function(roomId, message) {
                console.log('service is calling');
                 socket.emit('room_message', accessToken, roomId, message, _.now());
                 socket.on('new_room_message', function(data) {
                    $rootScope.$broadcast('newRoomMessage', { data: data }); 
                });
             }
         return service;
     };
 })();
 (function() {
     'use strict';
     angular.module('chattapp')
         .factory('sqliteService', sqliteService);

     function sqliteService($ionicPlatform) {
         var service = {};
         service.createTable = function() {
                var dbobj = window.sqlitePlugin.openDatabase({
                     name: "chattappDB"
                 });
                 dbobj.transaction(createSchema, errorInSchema, successInSchema);
                 function createSchema(tx) {
                     tx.executeSql('CREATE TABLE IF NOT EXISTS messageToBeSend(id INTEGER PRIMARY KEY AUTOINCREMENT, message TEXT, userName TEXT, roomId TEXT,  messageTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP)');
                 }
                 function errorInSchema() {
                     console.log("Error to create schema");
                 }
                 function successInSchema() {
                     console.log("Schema creation successful");
                 }
             },
             service.messageToBeSend = function(message, userName, roomId) {
                    var dbobj = window.sqlitePlugin.openDatabase({
                     name: "chattappDB"
                 });
                 dbobj.transaction(populateDB, error, success);
                 function populateDB(tx) {
                     tx.executeSql('INSERT INTO messageToBeSend(message,userName,roomId) VALUES ("' + message + '", "' + userName + '", "' + roomId + '")');
                 }
                 function error(err) {
                     console.log("Error processing SQL: " + err.code);
                 }
                 function success() {
                     console.log("success!");
                 }
             }
         return service;
     };

 })();
 (function() {
    'use strict';
    angular.module('chattapp')
            .factory('tostService', tostService);

    function tostService() {
        return {
            notify: function(message, position) {
              if(window.plugins && window.plugins.toast){
                ///then execute ur code
                window.plugins.toast.showWithOptions(
                    {
                      message: message,
                      duration: "short",
                      position: position
                    }
                  );
                }else{
                // this means on browser simply alert the message
                alert(message);
                }
            }
        }
    };

})();
 (function() {
     'use strict';

     angular.module('chattapp')
         .controller('contactsController', contactsController);

     function contactsController(contactsFactory, $ionicLoading, timeStorage, $localStorage, $state, socketService) {
         delete $localStorage.chatWithUserData;
         var self = this;
         $ionicLoading.show();
         var userData =  timeStorage.get('userData');
         var accessToken = userData.data.access_token;
         var query = contactsFactory.save({
             page: 0,
             limit:10,
             currentTimestamp: _.now()
         });
         query.$promise.then(function(data) {
             $ionicLoading.hide();
             self.displaycontacts = data.data;
         });
         self.chatWithUser = function(chatWithUser){
            timeStorage.set('chatWithUserData', chatWithUser, 1);
            socketService.create_private_room(chatWithUser.id).then(function(data){
                $state.go('app.chatpage', {roomId:data.data.room_id});
            });
         }
     }
 })();
(function() {
   'use strict';
   angular.module('chattapp')
       .factory('contactsFactory', contactsFactory);

   function contactsFactory($resource, Configurations) {
       return $resource(Configurations.api_url+'/users/list_users', {},{});
   };
})();
 (function() {
     'use strict';

     angular.module('chattapp')
         .controller('forgotPasswordController', forgotPasswordController);

     function forgotPasswordController($state, forgotPasswordFactory, tostService, $ionicLoading) {
         console.log('forgotPasswordController');
         var self = this;
         self.data = {
             email: ''
         }
         self.forgotPassword = function() {
             if (_.isEmpty(self.data.email)) {
                 tostService.notify('Email Address Required', 'top');
             } else {
                 $ionicLoading.show();
                 var query = forgotPasswordFactory.save({
                     email: self.data.email
                 });
                 query.$promise.then(function(data) {
                     console.log(data);
                     $ionicLoading.hide();
                     tostService.notify(data.message, 'top');
                     if (data.status == 1) {
                         $state.go('login');
                     }
                 });
             }
         };
     }
 })();
(function() {
    'use strict';
    angular.module('chattapp')
        .factory('forgotPasswordFactory', forgotPasswordFactory);

    function forgotPasswordFactory($resource, Configurations) {
        return $resource(Configurations.api_url + '/users/forgot_password/:email', {}, {});
    };
})();
(function() {
    'use strict';

    angular.module('chattapp')
        .controller('loginController', loginController);

    function loginController($state, loginFactory, timeStorage, $localStorage, tostService, deviceService, $timeout, $ionicHistory, googleLogin, facebookLogin, $ionicPlatform, lastUsesTimeService, $ionicLoading) {
        console.log('login');
        var self = this;
        self.data = {
            email: '',
            password: ''
        }
        var deviceUUID = deviceService.getuuid();
        var devicePlatform = deviceService.platform();
        self.login = function() {
            if (_.isEmpty(self.data.email) || _.isEmpty(self.data.password) || !self.data.email) {
                tostService.notify('Please enter your correct email and password', 'top');
            } else {
                $ionicLoading.show();
                var query = loginFactory.save({
                    action_type: 'manual_login',
                    social_id: '',
                    platform: devicePlatform,
                    token: $localStorage.gcmToken,
                    action: 'login_register',
                    device_id: deviceUUID,
                    email: self.data.email,
                    password: self.data.password,
                    name: '',
                    currentTimestamp: _.now()
                });
                query.$promise.then(function(data) {
                    $ionicLoading.hide();
                    tostService.notify(data.message, 'top');
                    if (data.status == 3) {
                        timeStorage.set('userEmail', self.data.email, 1);
                        $state.go('verification');
                    } else if (data.status == 1) {
                        timeStorage.set('userEmail', self.data.email, 1);
                        timeStorage.set('userData', data, 1);
                        lastUsesTimeService.updateTime();
                        $state.go('app.contacts');
                    }
                });
            }
        };

        self.googleRegister = function() {
            $ionicLoading.show();
            console.log('Attempting Google Login');
            var promise = googleLogin.startLogin();
            promise.then(function(googleData) {
                console.log(googleData);
                timeStorage.set('userEmail', googleData.email, 1);
                var query = loginFactory.save({
                    action_type: 'google',
                    social_id: googleData.google_id,
                    platform: devicePlatform,
                    token: $localStorage.gcmToken,
                    action: 'login_register',
                    device_id: deviceUUID,
                    email: googleData.email,
                    name: googleData.name,
                    currentTimestamp: _.now(),
                    password: ''
                });
                query.$promise.then(function(data) {
                    $ionicLoading.hide();
                    console.log(data);
                    tostService.notify(data.message, 'top');
                    timeStorage.set('userEmail', googleData.email, 1);
                    timeStorage.set('userData', data, 1);
                    lastUsesTimeService.updateTime();
                    $state.go('app.contacts');
                });
            }, function(data) {
                console.log(data);
            });
        };
        self.facebookRegister = function() {
            console.log('Attempting Facebook Login');
            $ionicLoading.show();
            facebookLogin.login().then(function(fbData) {
                console.log(fbData);
                if (fbData.id) {
                    loginWithFBApi(fbData);
                }
                if (fbData == 'unknown') {
                    facebookLogin.fbLoginSuccess().then(function(fbData1) {
                        console.log(fbData1);
                        loginWithFBApi(fbData1);
                    }, function(data) {
                        console.log(data);
                    });
                }
            }, function(data) {
                console.log(data);
            });
        };

        function loginWithFBApi(fbData) {
            timeStorage.set('userEmail', fbData.email, 1);
            var query = loginFactory.save({
                action_type: 'facebook',
                social_id: fbData.id,
                platform: devicePlatform,
                token: $localStorage.gcmToken,
                action: 'login_register',
                device_id: deviceUUID,
                email: fbData.email,
                name: fbData.name,
                currentTimestamp: _.now(),
                password: ''
            });
            query.$promise.then(function(data) {
                $ionicLoading.hide();
                console.log(data);
                tostService.notify(data.message, 'top');
                timeStorage.set('userEmail', fbData.email, 1);
                timeStorage.set('userData', data, 1);
                lastUsesTimeService.updateTime();
                $state.go('app.contacts');
            });
        };
        var count = 0;
        $ionicPlatform.registerBackButtonAction(function() {
            var view = $ionicHistory.currentView();
            console.log(view.stateId);
            if (view.stateId == 'login' && count == 0) {
                tostService.notify('Press Back Button Again To Exit The App!', 'center');
                count++;
                $timeout(function() {
                    count = 0;
                }, 3000);
            } else if (view.stateId == 'login' && count == 1) {
                navigator.app.exitApp();
                count = 0;
            } else {
                $ionicHistory.goBack();
                count = 0;
            }
        }, 100);

    }
})();
(function() {
   'use strict';
   angular.module('chattapp')
       .factory('loginFactory', loginFactory);

   function loginFactory($resource, Configurations) {
       return $resource(Configurations.api_url+'/users/register_login/:action_type/:action/:social_id/:platform/:device_id/:token/:email/:password', {},{});
   };
})();

 (function() {
     'use strict';

     angular.module('chattapp')
         .controller('menuController', menuController);

     function menuController($scope, $ionicPopover, $localStorage, $state) {
         console.log('menuController');
         var self = this;
         $ionicPopover.fromTemplateUrl('templates/popover.html', {
             scope: $scope,
         }).then(function(popover) {
             self.popover = popover;
         });
         self.logout = function(){
            $localStorage.$reset();
            $state.go('login')
         }
     }
 })();
 (function() {
     'use strict';

     angular.module('chattapp')
         .controller('profileController', profileController);

     function profileController(cameraService) {
         var self = this;
         self.displayprofile = [{
             "image": "https://s3.amazonaws.com/uifaces/faces/twitter/homka/128.jpg",
             "status": "I am designing something.",
             "userName": "David M."
         }];
         self.editProfilePic = function() {
             cameraService.changePic().then(function(imageData) {
                 self.displayprofile[0].image = "data:image/jpeg;base64," + imageData;
             }, function(err) {
                 console.log("Picture failure: " + err);
             });
         };
     }
 })();
 (function() {
    'use strict';

    angular.module('chattapp')
        .controller('registerController', registerController);

    function registerController($scope, $state, registerFactory,  $localStorage, tostService, deviceService, timeStorage, $ionicLoading) {
            console.log('Register Controller');
            var self = this;
            this.user={
                name:'',
                email:'',
                password:'',
                };
            var currentTimestamp = _.now();
            var deviceUUID = deviceService.getuuid();
            var devicePlatform = deviceService.platform();
            this.register = function() {
                if(_.isEmpty(this.user.name) || _.isEmpty(this.user.email) || _.isEmpty(this.user.password) ){
                tostService.notify('Please fill all fields', 'top');
            }else{
                $ionicLoading.show();
                timeStorage.set('userEmail',this.user.email,1);
                var query = registerFactory.save({
                    action_type:'manual_register',
                    social_id:'',
                    platform:devicePlatform,
                    token:$localStorage.gcmToken,
                    action:'login_register',
                    device_id:deviceUUID,
                    email: this.user.email,
                    name: this.user.name,
                    password: this.user.password,
                    currentTimestamp:currentTimestamp
                });
                query.$promise.then(function(data) {
                    $ionicLoading.hide();
                    console.log(data);
                    tostService.notify(data.message, 'top');
                    if(data.data.show_verification == '1'){
                        $state.go('verification');
                    }
                });
            }
        };
    }
})();
(function() {
   'use strict';
   angular.module('chattapp')
       .factory('registerFactory', registerFactory);

   function registerFactory($resource, Configurations) {
       return $resource(Configurations.api_url+'/users/register_login/:action_type/:action/:social_id/:platform/:token/:email/:name/:password', {},{});
   };
})();
 (function() {
     'use strict';

     angular.module('chattapp')
         .controller('resetPasswordController', resetPasswordController);

     function resetPasswordController($state, resetPasswordFactory, timeStorage, tostService, $ionicLoading, $localStorage) {
         console.log('resetPasswordController');
         var self = this;
         self.email = timeStorage.get('userEmail');
         self.resetPassword = function() {
             if (self.password !== self.cpassword) {
                 tostService.notify('Your Password and Confirm Password not Match', 'top');
                 self.password = '';
                 self.cpassword = '';
             } else {
                 $ionicLoading.show();
                 var userData =  timeStorage.get('userData');
                 var accessToken = userData.data.access_token;
                 var query = resetPasswordFactory.save({
                     password:self.password,
                     access_token:accessToken
                 });
                 query.$promise.then(function(data) {
                     $ionicLoading.hide();
                     tostService.notify(data.message);
                     if(data.status == 1){
                        $localStorage.$reset();
                        $state.go('login');
                     }
                 });
             }
         };
     }
 })();
(function() {
   'use strict';
   angular.module('chattapp')
       .factory('resetPasswordFactory', resetPasswordFactory);

   function resetPasswordFactory($resource, Configurations) {
       return $resource(Configurations.api_url+'/users/reset_password?', {
       	access_token:'@access_token'
       },{});
   };
})();

 (function() {
    'use strict';

    angular.module('chattapp')
        .controller('settingController', settingController);

    function settingController() {
            console.log('settingController');
    }
})();
(function() {
   'use strict';
   angular.module('chattapp')
       .factory('resendVerificationCodeFactory', resendVerificationCodeFactory);

   function resendVerificationCodeFactory($resource, Configurations) {
       return $resource(Configurations.api_url+'/users/resend_verification_code/:email', {},{});
   };
})();

 (function() {
     'use strict';

     angular.module('chattapp')
         .controller('verificationController', verificationController);

     function verificationController($state, verificationFactory, tostService, timeStorage,resendVerificationCodeFactory, $ionicLoading) {
         var self = this;
         self.data = {
             verificationCode: '',
             email: ''
         }
         if (timeStorage.get('userEmail')) {
             self.data.email = timeStorage.get('userEmail');
         }
         self.verify = function() {
             if (_.isEmpty(self.data.email) || _.isEmpty(self.data.verificationCode)) {
                 tostService.notify('Please all fill the fields.', 'top');
             } else {
                 $ionicLoading.show();
                 var query = verificationFactory.save({
                     email: self.data.email,
                     code: self.data.verificationCode
                 });
                 query.$promise.then(function(data) {
                    $ionicLoading.hide();
                     tostService.notify(data.message, 'top');
                     if (data.status == 1) {
                         $state.go('login');
                     }
                 });
             }
         };
         self.resendVerification = function(){
                $ionicLoading.show();
                var query = resendVerificationCodeFactory.save({
                    email: self.data.email
                });
                query.$promise.then(function(data) {
                    $ionicLoading.hide();
                    console.log(data);
                    tostService.notify(data.message, 'top');
                });
            };
     }
 })();
(function() {
   'use strict';
   angular.module('chattapp')
       .factory('verificationFactory', verificationFactory);

   function verificationFactory($resource, Configurations) {
       return $resource(Configurations.api_url+'/users/do_user_verification/:email/:code', {},{});
   };
})();
