!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.mojs=e():t.mojs=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="build/",e(e.s=7)}([function(t,e,i){var n,s,o,n,s,o;!function(i,a){s=[e],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(e){"use strict";!function(i,a){s=[e],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},i={init:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._o=t,this._declareDefaults(),this._extendDefaults(),this._vars()},_declareDefaults:function(){this._defaults={}},_extendDefaults:function(){this._props=e({},this._defaults,this._o)},_vars:function(){}};t.ClassProto=i})})},function(t,e,i){var n,s,o,n,s,o;!function(i,a){s=[e],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(e){"use strict";!function(i,a){s=[e],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(t){Object.defineProperty(t,"__esModule",{value:!0});var e={duration:350,delay:0,repeat:0,speed:1,isYoyo:!1,easing:"Sin.Out",backwardEasing:null,isReverse:!1,onStart:function(){},onComplete:function(){},onRepeatStart:function(){},onRepeatComplete:function(){},onUpdate:function(){},onPlaybackStart:function(){},onPlaybackPause:function(){},onPlaybackStop:function(){},onPlaybackComplete:function(){},name:null,nameBase:"Tween"};t.tweenDefaults=e})})},function(t,e,i){var n,s,o,n,s,o;!function(i,a){s=[t,e],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(t,e){"use strict";!function(i,a){s=[t,e],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(t,e){function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=function(){function t(){var e=this;return i(this,t),this._loop=function(){if(0===e.tweens.length)return e._stopLoop();e.update(performance.now()),requestAnimationFrame(e._loop)},this._onVisibilityChange=function(){document[e._visibilityHidden]?e._savePlayingTweens():e._restorePlayingTweens()},this._vars(),this._listenVisibilityChange(),this}return n(t,[{key:"_vars",value:function(){this.tweens=[],this._savedTweens=[]}},{key:"_startLoop",value:function(){this._isRunning||(this._isRunning=!0,requestAnimationFrame(this._loop))}},{key:"_stopLoop",value:function(){this.tweens.length=0,this._isRunning=!1}},{key:"removeAll",value:function(){this.tweens.length=0}},{key:"remove",value:function(t){var e="number"==typeof t?t:this.tweens.indexOf(t);e!==-1&&(t=this.tweens[e],t._isRunning=!1,this.tweens.splice(e,1))}},{key:"_listenVisibilityChange",value:function(){void 0!==document.hidden?(this._visibilityHidden="hidden",this._visibilityChange="visibilitychange"):void 0!==document.mozHidden?(this._visibilityHidden="mozHidden",this._visibilityChange="mozvisibilitychange"):void 0!==document.msHidden?(this._visibilityHidden="msHidden",this._visibilityChange="msvisibilitychange"):void 0!==document.webkitHidden&&(this._visibilityHidden="webkitHidden",this._visibilityChange="webkitvisibilitychange"),document.addEventListener(this._visibilityChange,this._onVisibilityChange,!1)}},{key:"_savePlayingTweens",value:function(){this._savedTweens=this.tweens.slice(0);for(var t=0;t<this._savedTweens.length;t++)this._savedTweens[t].pause()}},{key:"_restorePlayingTweens",value:function(){for(var t=0;t<this._savedTweens.length;t++)this._savedTweens[t].resume()}},{key:"update",value:function(t){for(var e=this.tweens.length;e--;){var i=this.tweens[e];i.update(t)===!0&&(this.remove(i),i.onTweenerFinish(),i._prevTime=void 0)}}},{key:"add",value:function(t){t._isRunning||(t._isRunning=!0,this.tweens.push(t),this._startLoop())}},{key:"caffeinate",value:function(){document.removeEventListener(this._visibilityChange,this._onVisibilityChange,!1)}}]),t}();e.default=new s,t.exports=e.default})})},function(t,e,i){var n,s,o,n,s,o;!function(i,a){s=[e],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(e){"use strict";!function(i,a){s=[e],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(t){Object.defineProperty(t,"__esModule",{value:!0});var e={duration:350,delay:0,easing:"Sin.Out",backwardEasing:null,isReverse:!1,onStart:function(){},onComplete:function(){},onUpdate:function(){},onRefresh:function(){},onChimeIn:function(){},onChimeOut:function(){},shiftTime:0,index:0};t.tweenieDefaults=e})})},function(t,e,i){var n,s,o,n,s,o;!function(a,r){s=[e,i(0),i(3)],n=r,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(e){"use strict";!function(a,r){s=[e,i(0),i(3)],n=r,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(t,e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.Tweenie=void 0;var n={_declareDefaults:function(){this._defaults=i.tweenieDefaults},_vars:function(){var t=this._props,e=t.isReverse,i=t.onStart,n=t.onComplete,s=t.onChimeIn,o=t.onChimeOut,a=t.delay,r=t.duration;this._time=a+r,this._prevTime,this._cbs=[i,n,0,1],this._chCbs=[s,o],e===!0&&(this._cbs=[this._cbs[1],this._cbs[0],1-this._cbs[2],1-this._cbs[3]])},setStartTime:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this._props,i=e.delay,n=e.duration;this._start=t+i,this._end=this._start+n,this._isActive=!1},onTweenerFinish:function(){},update:function(t){var e=this._props,i=e.onUpdate,n=e.isReverse,s=e.index,o=t>this._prevTime;if(t>=this._start&&t<=this._end&&void 0!==this._prevTime){var a=void 0,r=(t-this._start)/this._props.duration;i(n===!1?r:1-r),t>this._start&&this._isActive===!1&&1==o&&(this._chCbs[0](o,t,s),this._cbs[0](o,n,s)),t===this._start&&(this._chCbs[0](o,t,s),this._cbs[0](o,n,s),a=o),t<this._end&&this._isActive===!1&&o===!1&&(this._cbs[1](!1,n,s),this._chCbs[1](o,t,s)),t===this._end&&(this._cbs[1](o,n,s),this._chCbs[1](o,t,s),a=!o),this._isActive=void 0===a||a}if(t>this._end&&this._isActive===!0)return i(this._cbs[3]),this._cbs[1](o,n,s),this._chCbs[1](o,t,s),this._isActive=!1,this._prevTime=t,!0;t<this._start&&(this._prevTime>=this._end&&this._props.onRefresh(!0),this._isActive===!0&&(i(this._cbs[2]),this._chCbs[0](o,t,s),this._cbs[0](o,n,s),this._isActive=!1)),this._prevTime=t}};n.__proto__=e.ClassProto;var s=function(t){var e=Object.create(n);return e.init(t),e};t.Tweenie=s})})},function(t,e,i){var n,s,o,n,s,o;!function(a,r){s=[e,i(0),i(1),i(4),i(2)],n=r,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(e){"use strict";!function(a,r){s=[e,i(0),i(1),i(4),i(2)],n=r,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(t,e,i,n,s){function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(t,"__esModule",{value:!0}),t.Tween=void 0;var a=(o(s),{_declareDefaults:function(){this._defaults=i.tweenDefaults},_vars:function(){this._tweenies=[],this._state="stop",this._createTweenies();var t=this._props,e=t.repeat,i=t.isReverse,n=e>0?"U":"",s=i===!0?"Rev":"Fwd",o="_update"+n+s;this.update=this[o]},_createTweenies:function(){for(var t=this,e=this._props,i=e.repeat,s=e.delay,o=e.duration,a=e.onUpdate,r=e.onRefresh,u=e.isReverse,h=0;h<=i;h++)this._tweenies.push((0,n.Tweenie)({index:h,delay:s,duration:o,onUpdate:a,onRefresh:r,onStart:function(e,i,n){t._onStart(e,i,n)},onComplete:function(e,i,n){t._onComplete(e,i,n)},onChimeOut:function(e,i){t._chimeOut(e,i)},onChimeIn:function(e,i){t._chimeIn(e,i)}}));this._active=u?this._tweenies.length-1:0,this._act=this._tweenies[this._active],this._first=this._tweenies[0],this._last=this._tweenies[this._tweenies.length-1]},setStartTime:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:performance.now(),e=this._props,i=e.delay;e.duration,e.repeat;this._start=t+i,this._tweenies[0].setStartTime(this._start-i);for(var n=1;n<this._tweenies.length;n++)this._tweenies[n].setStartTime(this._tweenies[n-1]._end);this._end=this._tweenies[this._tweenies.length-1]._end},_updateFwd:function(t){this._act.update(t)},_updateRev:function(t){this._act.update(this._end+(this._start-t))},_updateUFwd:function(t){return t<this._start||t>this._end?(this._first._prevTime=t,void(this._last._prevTime=t)):(this._first.update(t),this._last.update(t),this._first._isActive===!0?(this._active=0,this._act=this._first,void(this.update=this._updateFwd)):void(this._last._isActive===!0&&(this._active=this._tweenies.length-1,this._act=this._last,this.update=this._updateFwd)))},_updateURev:function(t){return(t=this._end+(this._start-t))<this._start||t>this._end?(this._first._prevTime=t,void(this._last._prevTime=t)):(this._first.update(t),this._last.update(t),this._first._isActive===!0?(this._active=0,this._act=this._first,void(this.update=this._updateRev)):void(this._last._isActive===!0&&(this._active=this._tweenies.length-1,this._act=this._last,this.update=this._updateRev)))},_chimeOut:function(t,e){if(t!==!1){this._active++;var i=this._tweenies[this._active];void 0!==i?(this._act=i,i.update(e)):this._active--}},_chimeIn:function(t,e){if(t!==!0){this._active--;var i=this._tweenies[this._active];void 0!==i?(this._act=i,i.update(e)):this._active++}},_onComplete:function(t,e,i){var n=this._props,s=n.onRepeatComplete,o=n.onComplete;t===!0&&s(t,e,i),i===this._tweenies.length-1&&o(t,e,i),t===!1&&s(t,e,i)},_onStart:function(t,e,i){var n=this._props,s=n.onRepeatStart,o=n.onStart;t===!1&&s(t,e,i),0===i&&o(t,e,i),t===!0&&s(t,e,i)},_setState:function(t){this._prevState=this._state,this._state=t;var e="pause"===this._prevState,i="stop"===this._prevState,n="play"===this._prevState,s="reverse"===this._prevState,o=n||s,a=i||e;"play"!==t&&"reverse"!==t||!a||this._props.onPlaybackStart(t,this._prevState),"pause"===t&&o&&this._props.onPlaybackPause(),"stop"===t&&(o||e)&&this._props.onPlaybackStop()},onTweenerFinish:function(){}});a.__proto__=e.ClassProto;var r=function(t){var e=Object.create(a);return e.init(t),e};t.Tween=r})})},function(t,e,i){var n,s,o,n,s,o;!function(a,r){s=[t,e,i(0),i(4),i(5),i(1),i(3),i(2)],n=r,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(t,e){"use strict";!function(a,r){s=[t,e,i(0),i(4),i(5),i(1),i(3),i(2)],n=r,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(t,e,i,n,s,o,a,r){function u(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var h=(u(r),{revision:"2.2.0",Tweenie:n.Tweenie,Tween:s.Tween,__helpers__:{ClassProto:i.ClassProto,tweenieDefaults:a.tweenieDefaults,tweenDefaults:o.tweenDefaults}});e.default=h,t.exports=e.default})})},function(t,e,i){t.exports=i(6)}])});