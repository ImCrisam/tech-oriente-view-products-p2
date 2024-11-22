(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();function $p(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Bp={exports:{}},Hl={},Hp={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bi=Symbol.for("react.element"),rh=Symbol.for("react.portal"),oh=Symbol.for("react.fragment"),ah=Symbol.for("react.strict_mode"),ih=Symbol.for("react.profiler"),lh=Symbol.for("react.provider"),sh=Symbol.for("react.context"),uh=Symbol.for("react.forward_ref"),ch=Symbol.for("react.suspense"),dh=Symbol.for("react.memo"),fh=Symbol.for("react.lazy"),xd=Symbol.iterator;function ph(e){return e===null||typeof e!="object"?null:(e=xd&&e[xd]||e["@@iterator"],typeof e=="function"?e:null)}var Up={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vp=Object.assign,Kp={};function da(e,t,n){this.props=e,this.context=t,this.refs=Kp,this.updater=n||Up}da.prototype.isReactComponent={};da.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};da.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Wp(){}Wp.prototype=da.prototype;function bc(e,t,n){this.props=e,this.context=t,this.refs=Kp,this.updater=n||Up}var wc=bc.prototype=new Wp;wc.constructor=bc;Vp(wc,da.prototype);wc.isPureReactComponent=!0;var Sd=Array.isArray,qp=Object.prototype.hasOwnProperty,xc={current:null},Gp={key:!0,ref:!0,__self:!0,__source:!0};function Yp(e,t,n){var r,o={},a=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(a=""+t.key),t)qp.call(t,r)&&!Gp.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:bi,type:e,key:a,ref:i,props:o,_owner:xc.current}}function mh(e,t){return{$$typeof:bi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Sc(e){return typeof e=="object"&&e!==null&&e.$$typeof===bi}function gh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ed=/\/+/g;function vs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?gh(""+e.key):t.toString(36)}function Zi(e,t,n,r,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case bi:case rh:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+vs(i,0):r,Sd(o)?(n="",e!=null&&(n=e.replace(Ed,"$&/")+"/"),Zi(o,t,n,"",function(u){return u})):o!=null&&(Sc(o)&&(o=mh(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Ed,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",Sd(e))for(var l=0;l<e.length;l++){a=e[l];var s=r+vs(a,l);i+=Zi(a,t,n,s,o)}else if(s=ph(e),typeof s=="function")for(e=s.call(e),l=0;!(a=e.next()).done;)a=a.value,s=r+vs(a,l++),i+=Zi(a,t,n,s,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Ci(e,t,n){if(e==null)return e;var r=[],o=0;return Zi(e,r,"","",function(a){return t.call(n,a,o++)}),r}function vh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Qt={current:null},Ji={transition:null},hh={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:Ji,ReactCurrentOwner:xc};function Xp(){throw Error("act(...) is not supported in production builds of React.")}Pe.Children={map:Ci,forEach:function(e,t,n){Ci(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ci(e,function(){t++}),t},toArray:function(e){return Ci(e,function(t){return t})||[]},only:function(e){if(!Sc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Pe.Component=da;Pe.Fragment=oh;Pe.Profiler=ih;Pe.PureComponent=bc;Pe.StrictMode=ah;Pe.Suspense=ch;Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hh;Pe.act=Xp;Pe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Vp({},e.props),o=e.key,a=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,i=xc.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)qp.call(t,s)&&!Gp.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:bi,type:e.type,key:o,ref:a,props:r,_owner:i}};Pe.createContext=function(e){return e={$$typeof:sh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:lh,_context:e},e.Consumer=e};Pe.createElement=Yp;Pe.createFactory=function(e){var t=Yp.bind(null,e);return t.type=e,t};Pe.createRef=function(){return{current:null}};Pe.forwardRef=function(e){return{$$typeof:uh,render:e}};Pe.isValidElement=Sc;Pe.lazy=function(e){return{$$typeof:fh,_payload:{_status:-1,_result:e},_init:vh}};Pe.memo=function(e,t){return{$$typeof:dh,type:e,compare:t===void 0?null:t}};Pe.startTransition=function(e){var t=Ji.transition;Ji.transition={};try{e()}finally{Ji.transition=t}};Pe.unstable_act=Xp;Pe.useCallback=function(e,t){return Qt.current.useCallback(e,t)};Pe.useContext=function(e){return Qt.current.useContext(e)};Pe.useDebugValue=function(){};Pe.useDeferredValue=function(e){return Qt.current.useDeferredValue(e)};Pe.useEffect=function(e,t){return Qt.current.useEffect(e,t)};Pe.useId=function(){return Qt.current.useId()};Pe.useImperativeHandle=function(e,t,n){return Qt.current.useImperativeHandle(e,t,n)};Pe.useInsertionEffect=function(e,t){return Qt.current.useInsertionEffect(e,t)};Pe.useLayoutEffect=function(e,t){return Qt.current.useLayoutEffect(e,t)};Pe.useMemo=function(e,t){return Qt.current.useMemo(e,t)};Pe.useReducer=function(e,t,n){return Qt.current.useReducer(e,t,n)};Pe.useRef=function(e){return Qt.current.useRef(e)};Pe.useState=function(e){return Qt.current.useState(e)};Pe.useSyncExternalStore=function(e,t,n){return Qt.current.useSyncExternalStore(e,t,n)};Pe.useTransition=function(){return Qt.current.useTransition()};Pe.version="18.3.1";Hp.exports=Pe;var c=Hp.exports;const xe=$p(c);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yh=c,bh=Symbol.for("react.element"),wh=Symbol.for("react.fragment"),xh=Object.prototype.hasOwnProperty,Sh=yh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Eh={key:!0,ref:!0,__self:!0,__source:!0};function Qp(e,t,n){var r,o={},a=null,i=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)xh.call(t,r)&&!Eh.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:bh,type:e,key:a,ref:i,props:o,_owner:Sh.current}}Hl.Fragment=wh;Hl.jsx=Qp;Hl.jsxs=Qp;Bp.exports=Hl;var Ee=Bp.exports,Zp={exports:{}},bn={},Jp={exports:{}},em={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,B){var D=R.length;R.push(B);e:for(;0<D;){var te=D-1>>>1,X=R[te];if(0<o(X,B))R[te]=B,R[D]=X,D=te;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var B=R[0],D=R.pop();if(D!==B){R[0]=D;e:for(var te=0,X=R.length,ne=X>>>1;te<ne;){var ce=2*(te+1)-1,At=R[ce],tt=ce+1,qe=R[tt];if(0>o(At,D))tt<X&&0>o(qe,At)?(R[te]=qe,R[tt]=D,te=tt):(R[te]=At,R[ce]=D,te=ce);else if(tt<X&&0>o(qe,D))R[te]=qe,R[tt]=D,te=tt;else break e}}return B}function o(R,B){var D=R.sortIndex-B.sortIndex;return D!==0?D:R.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var s=[],u=[],p=1,d=null,f=3,b=!1,x=!1,m=!1,O=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(R){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=R)r(u),B.sortIndex=B.expirationTime,t(s,B);else break;B=n(u)}}function S(R){if(m=!1,v(R),!x)if(n(s)!==null)x=!0,be(C);else{var B=n(u);B!==null&&Oe(S,B.startTime-R)}}function C(R,B){x=!1,m&&(m=!1,h(L),L=-1),b=!0;var D=f;try{for(v(B),d=n(s);d!==null&&(!(d.expirationTime>B)||R&&!P());){var te=d.callback;if(typeof te=="function"){d.callback=null,f=d.priorityLevel;var X=te(d.expirationTime<=B);B=e.unstable_now(),typeof X=="function"?d.callback=X:d===n(s)&&r(s),v(B)}else r(s);d=n(s)}if(d!==null)var ne=!0;else{var ce=n(u);ce!==null&&Oe(S,ce.startTime-B),ne=!1}return ne}finally{d=null,f=D,b=!1}}var N=!1,k=null,L=-1,F=5,I=-1;function P(){return!(e.unstable_now()-I<F)}function le(){if(k!==null){var R=e.unstable_now();I=R;var B=!0;try{B=k(!0,R)}finally{B?G():(N=!1,k=null)}}else N=!1}var G;if(typeof g=="function")G=function(){g(le)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,Z=pe.port2;pe.port1.onmessage=le,G=function(){Z.postMessage(null)}}else G=function(){O(le,0)};function be(R){k=R,N||(N=!0,G())}function Oe(R,B){L=O(function(){R(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){x||b||(x=!0,be(C))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(R){switch(f){case 1:case 2:case 3:var B=3;break;default:B=f}var D=f;f=B;try{return R()}finally{f=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,B){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var D=f;f=R;try{return B()}finally{f=D}},e.unstable_scheduleCallback=function(R,B,D){var te=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?te+D:te):D=te,R){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=D+X,R={id:p++,callback:B,priorityLevel:R,startTime:D,expirationTime:X,sortIndex:-1},D>te?(R.sortIndex=D,t(u,R),n(s)===null&&R===n(u)&&(m?(h(L),L=-1):m=!0,Oe(S,D-te))):(R.sortIndex=X,t(s,R),x||b||(x=!0,be(C))),R},e.unstable_shouldYield=P,e.unstable_wrapCallback=function(R){var B=f;return function(){var D=f;f=B;try{return R.apply(this,arguments)}finally{f=D}}}})(em);Jp.exports=em;var Oh=Jp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ph=c,yn=Oh;function H(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tm=new Set,Ua={};function vo(e,t){ta(e,t),ta(e+"Capture",t)}function ta(e,t){for(Ua[e]=t,e=0;e<t.length;e++)tm.add(t[e])}var wr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qs=Object.prototype.hasOwnProperty,Ch=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Od={},Pd={};function kh(e){return qs.call(Pd,e)?!0:qs.call(Od,e)?!1:Ch.test(e)?Pd[e]=!0:(Od[e]=!0,!1)}function Th(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ih(e,t,n,r){if(t===null||typeof t>"u"||Th(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Zt(e,t,n,r,o,a,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var Lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Lt[e]=new Zt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Lt[t]=new Zt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Lt[e]=new Zt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Lt[e]=new Zt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Lt[e]=new Zt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Lt[e]=new Zt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Lt[e]=new Zt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Lt[e]=new Zt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Lt[e]=new Zt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ec=/[\-:]([a-z])/g;function Oc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ec,Oc);Lt[t]=new Zt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ec,Oc);Lt[t]=new Zt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ec,Oc);Lt[t]=new Zt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Lt[e]=new Zt(e,1,!1,e.toLowerCase(),null,!1,!1)});Lt.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Lt[e]=new Zt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Pc(e,t,n,r){var o=Lt.hasOwnProperty(t)?Lt[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ih(t,n,o,r)&&(n=null),r||o===null?kh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Or=Ph.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ki=Symbol.for("react.element"),Lo=Symbol.for("react.portal"),Ao=Symbol.for("react.fragment"),Cc=Symbol.for("react.strict_mode"),Gs=Symbol.for("react.profiler"),nm=Symbol.for("react.provider"),rm=Symbol.for("react.context"),kc=Symbol.for("react.forward_ref"),Ys=Symbol.for("react.suspense"),Xs=Symbol.for("react.suspense_list"),Tc=Symbol.for("react.memo"),Ir=Symbol.for("react.lazy"),om=Symbol.for("react.offscreen"),Cd=Symbol.iterator;function va(e){return e===null||typeof e!="object"?null:(e=Cd&&e[Cd]||e["@@iterator"],typeof e=="function"?e:null)}var Je=Object.assign,hs;function Pa(e){if(hs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);hs=t&&t[1]||""}return`
`+hs+e}var ys=!1;function bs(e,t){if(!e||ys)return"";ys=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),a=r.stack.split(`
`),i=o.length-1,l=a.length-1;1<=i&&0<=l&&o[i]!==a[l];)l--;for(;1<=i&&0<=l;i--,l--)if(o[i]!==a[l]){if(i!==1||l!==1)do if(i--,l--,0>l||o[i]!==a[l]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=l);break}}}finally{ys=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Pa(e):""}function _h(e){switch(e.tag){case 5:return Pa(e.type);case 16:return Pa("Lazy");case 13:return Pa("Suspense");case 19:return Pa("SuspenseList");case 0:case 2:case 15:return e=bs(e.type,!1),e;case 11:return e=bs(e.type.render,!1),e;case 1:return e=bs(e.type,!0),e;default:return""}}function Qs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ao:return"Fragment";case Lo:return"Portal";case Gs:return"Profiler";case Cc:return"StrictMode";case Ys:return"Suspense";case Xs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case rm:return(e.displayName||"Context")+".Consumer";case nm:return(e._context.displayName||"Context")+".Provider";case kc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Tc:return t=e.displayName||null,t!==null?t:Qs(e.type)||"Memo";case Ir:t=e._payload,e=e._init;try{return Qs(e(t))}catch{}}return null}function Nh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qs(t);case 8:return t===Cc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function am(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Rh(e){var t=am(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,a.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ti(e){e._valueTracker||(e._valueTracker=Rh(e))}function im(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=am(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function fl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zs(e,t){var n=t.checked;return Je({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function kd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Wr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function lm(e,t){t=t.checked,t!=null&&Pc(e,"checked",t,!1)}function Js(e,t){lm(e,t);var n=Wr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?eu(e,t.type,n):t.hasOwnProperty("defaultValue")&&eu(e,t.type,Wr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Td(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function eu(e,t,n){(t!=="number"||fl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ca=Array.isArray;function Yo(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Wr(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function tu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(H(91));return Je({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Id(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(H(92));if(Ca(n)){if(1<n.length)throw Error(H(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Wr(n)}}function sm(e,t){var n=Wr(t.value),r=Wr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function _d(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function um(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?um(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ii,cm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ii=Ii||document.createElement("div"),Ii.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ii.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Va(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ra={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lh=["Webkit","ms","Moz","O"];Object.keys(Ra).forEach(function(e){Lh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ra[t]=Ra[e]})});function dm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ra.hasOwnProperty(e)&&Ra[e]?(""+t).trim():t+"px"}function fm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=dm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Ah=Je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ru(e,t){if(t){if(Ah[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(H(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(H(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(H(61))}if(t.style!=null&&typeof t.style!="object")throw Error(H(62))}}function ou(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var au=null;function Ic(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var iu=null,Xo=null,Qo=null;function Nd(e){if(e=Si(e)){if(typeof iu!="function")throw Error(H(280));var t=e.stateNode;t&&(t=ql(t),iu(e.stateNode,e.type,t))}}function pm(e){Xo?Qo?Qo.push(e):Qo=[e]:Xo=e}function mm(){if(Xo){var e=Xo,t=Qo;if(Qo=Xo=null,Nd(e),t)for(e=0;e<t.length;e++)Nd(t[e])}}function gm(e,t){return e(t)}function vm(){}var ws=!1;function hm(e,t,n){if(ws)return e(t,n);ws=!0;try{return gm(e,t,n)}finally{ws=!1,(Xo!==null||Qo!==null)&&(vm(),mm())}}function Ka(e,t){var n=e.stateNode;if(n===null)return null;var r=ql(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(H(231,t,typeof n));return n}var lu=!1;if(wr)try{var ha={};Object.defineProperty(ha,"passive",{get:function(){lu=!0}}),window.addEventListener("test",ha,ha),window.removeEventListener("test",ha,ha)}catch{lu=!1}function Dh(e,t,n,r,o,a,i,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var La=!1,pl=null,ml=!1,su=null,Mh={onError:function(e){La=!0,pl=e}};function jh(e,t,n,r,o,a,i,l,s){La=!1,pl=null,Dh.apply(Mh,arguments)}function Fh(e,t,n,r,o,a,i,l,s){if(jh.apply(this,arguments),La){if(La){var u=pl;La=!1,pl=null}else throw Error(H(198));ml||(ml=!0,su=u)}}function ho(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ym(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Rd(e){if(ho(e)!==e)throw Error(H(188))}function zh(e){var t=e.alternate;if(!t){if(t=ho(e),t===null)throw Error(H(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return Rd(o),e;if(a===r)return Rd(o),t;a=a.sibling}throw Error(H(188))}if(n.return!==r.return)n=o,r=a;else{for(var i=!1,l=o.child;l;){if(l===n){i=!0,n=o,r=a;break}if(l===r){i=!0,r=o,n=a;break}l=l.sibling}if(!i){for(l=a.child;l;){if(l===n){i=!0,n=a,r=o;break}if(l===r){i=!0,r=a,n=o;break}l=l.sibling}if(!i)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?e:t}function bm(e){return e=zh(e),e!==null?wm(e):null}function wm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=wm(e);if(t!==null)return t;e=e.sibling}return null}var xm=yn.unstable_scheduleCallback,Ld=yn.unstable_cancelCallback,$h=yn.unstable_shouldYield,Bh=yn.unstable_requestPaint,lt=yn.unstable_now,Hh=yn.unstable_getCurrentPriorityLevel,_c=yn.unstable_ImmediatePriority,Sm=yn.unstable_UserBlockingPriority,gl=yn.unstable_NormalPriority,Uh=yn.unstable_LowPriority,Em=yn.unstable_IdlePriority,Ul=null,rr=null;function Vh(e){if(rr&&typeof rr.onCommitFiberRoot=="function")try{rr.onCommitFiberRoot(Ul,e,void 0,(e.current.flags&128)===128)}catch{}}var Wn=Math.clz32?Math.clz32:qh,Kh=Math.log,Wh=Math.LN2;function qh(e){return e>>>=0,e===0?32:31-(Kh(e)/Wh|0)|0}var _i=64,Ni=4194304;function ka(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,i=n&268435455;if(i!==0){var l=i&~o;l!==0?r=ka(l):(a&=i,a!==0&&(r=ka(a)))}else i=n&~o,i!==0?r=ka(i):a!==0&&(r=ka(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Wn(t),o=1<<n,r|=e[n],t&=~o;return r}function Gh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-Wn(a),l=1<<i,s=o[i];s===-1?(!(l&n)||l&r)&&(o[i]=Gh(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}function uu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Om(){var e=_i;return _i<<=1,!(_i&4194240)&&(_i=64),e}function xs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function wi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Wn(t),e[t]=n}function Xh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Wn(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}function Nc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Wn(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var Ae=0;function Pm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Cm,Rc,km,Tm,Im,cu=!1,Ri=[],jr=null,Fr=null,zr=null,Wa=new Map,qa=new Map,Rr=[],Qh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ad(e,t){switch(e){case"focusin":case"focusout":jr=null;break;case"dragenter":case"dragleave":Fr=null;break;case"mouseover":case"mouseout":zr=null;break;case"pointerover":case"pointerout":Wa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qa.delete(t.pointerId)}}function ya(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},t!==null&&(t=Si(t),t!==null&&Rc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Zh(e,t,n,r,o){switch(t){case"focusin":return jr=ya(jr,e,t,n,r,o),!0;case"dragenter":return Fr=ya(Fr,e,t,n,r,o),!0;case"mouseover":return zr=ya(zr,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return Wa.set(a,ya(Wa.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,qa.set(a,ya(qa.get(a)||null,e,t,n,r,o)),!0}return!1}function _m(e){var t=oo(e.target);if(t!==null){var n=ho(t);if(n!==null){if(t=n.tag,t===13){if(t=ym(n),t!==null){e.blockedOn=t,Im(e.priority,function(){km(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function el(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=du(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);au=r,n.target.dispatchEvent(r),au=null}else return t=Si(n),t!==null&&Rc(t),e.blockedOn=n,!1;t.shift()}return!0}function Dd(e,t,n){el(e)&&n.delete(t)}function Jh(){cu=!1,jr!==null&&el(jr)&&(jr=null),Fr!==null&&el(Fr)&&(Fr=null),zr!==null&&el(zr)&&(zr=null),Wa.forEach(Dd),qa.forEach(Dd)}function ba(e,t){e.blockedOn===t&&(e.blockedOn=null,cu||(cu=!0,yn.unstable_scheduleCallback(yn.unstable_NormalPriority,Jh)))}function Ga(e){function t(o){return ba(o,e)}if(0<Ri.length){ba(Ri[0],e);for(var n=1;n<Ri.length;n++){var r=Ri[n];r.blockedOn===e&&(r.blockedOn=null)}}for(jr!==null&&ba(jr,e),Fr!==null&&ba(Fr,e),zr!==null&&ba(zr,e),Wa.forEach(t),qa.forEach(t),n=0;n<Rr.length;n++)r=Rr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Rr.length&&(n=Rr[0],n.blockedOn===null);)_m(n),n.blockedOn===null&&Rr.shift()}var Zo=Or.ReactCurrentBatchConfig,hl=!0;function e0(e,t,n,r){var o=Ae,a=Zo.transition;Zo.transition=null;try{Ae=1,Lc(e,t,n,r)}finally{Ae=o,Zo.transition=a}}function t0(e,t,n,r){var o=Ae,a=Zo.transition;Zo.transition=null;try{Ae=4,Lc(e,t,n,r)}finally{Ae=o,Zo.transition=a}}function Lc(e,t,n,r){if(hl){var o=du(e,t,n,r);if(o===null)Ns(e,t,r,yl,n),Ad(e,r);else if(Zh(o,e,t,n,r))r.stopPropagation();else if(Ad(e,r),t&4&&-1<Qh.indexOf(e)){for(;o!==null;){var a=Si(o);if(a!==null&&Cm(a),a=du(e,t,n,r),a===null&&Ns(e,t,r,yl,n),a===o)break;o=a}o!==null&&r.stopPropagation()}else Ns(e,t,r,null,n)}}var yl=null;function du(e,t,n,r){if(yl=null,e=Ic(r),e=oo(e),e!==null)if(t=ho(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ym(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return yl=e,null}function Nm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hh()){case _c:return 1;case Sm:return 4;case gl:case Uh:return 16;case Em:return 536870912;default:return 16}default:return 16}}var Ar=null,Ac=null,tl=null;function Rm(){if(tl)return tl;var e,t=Ac,n=t.length,r,o="value"in Ar?Ar.value:Ar.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[a-r];r++);return tl=o.slice(e,1<r?1-r:void 0)}function nl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Li(){return!0}function Md(){return!1}function wn(e){function t(n,r,o,a,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Li:Md,this.isPropagationStopped=Md,this}return Je(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Li)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Li)},persist:function(){},isPersistent:Li}),t}var fa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dc=wn(fa),xi=Je({},fa,{view:0,detail:0}),n0=wn(xi),Ss,Es,wa,Vl=Je({},xi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wa&&(wa&&e.type==="mousemove"?(Ss=e.screenX-wa.screenX,Es=e.screenY-wa.screenY):Es=Ss=0,wa=e),Ss)},movementY:function(e){return"movementY"in e?e.movementY:Es}}),jd=wn(Vl),r0=Je({},Vl,{dataTransfer:0}),o0=wn(r0),a0=Je({},xi,{relatedTarget:0}),Os=wn(a0),i0=Je({},fa,{animationName:0,elapsedTime:0,pseudoElement:0}),l0=wn(i0),s0=Je({},fa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),u0=wn(s0),c0=Je({},fa,{data:0}),Fd=wn(c0),d0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},f0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},p0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function m0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=p0[e])?!!t[e]:!1}function Mc(){return m0}var g0=Je({},xi,{key:function(e){if(e.key){var t=d0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=nl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?f0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mc,charCode:function(e){return e.type==="keypress"?nl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?nl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),v0=wn(g0),h0=Je({},Vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zd=wn(h0),y0=Je({},xi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mc}),b0=wn(y0),w0=Je({},fa,{propertyName:0,elapsedTime:0,pseudoElement:0}),x0=wn(w0),S0=Je({},Vl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),E0=wn(S0),O0=[9,13,27,32],jc=wr&&"CompositionEvent"in window,Aa=null;wr&&"documentMode"in document&&(Aa=document.documentMode);var P0=wr&&"TextEvent"in window&&!Aa,Lm=wr&&(!jc||Aa&&8<Aa&&11>=Aa),$d=" ",Bd=!1;function Am(e,t){switch(e){case"keyup":return O0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Do=!1;function C0(e,t){switch(e){case"compositionend":return Dm(t);case"keypress":return t.which!==32?null:(Bd=!0,$d);case"textInput":return e=t.data,e===$d&&Bd?null:e;default:return null}}function k0(e,t){if(Do)return e==="compositionend"||!jc&&Am(e,t)?(e=Rm(),tl=Ac=Ar=null,Do=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lm&&t.locale!=="ko"?null:t.data;default:return null}}var T0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!T0[e.type]:t==="textarea"}function Mm(e,t,n,r){pm(r),t=bl(t,"onChange"),0<t.length&&(n=new Dc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Da=null,Ya=null;function I0(e){qm(e,0)}function Kl(e){var t=Fo(e);if(im(t))return e}function _0(e,t){if(e==="change")return t}var jm=!1;if(wr){var Ps;if(wr){var Cs="oninput"in document;if(!Cs){var Ud=document.createElement("div");Ud.setAttribute("oninput","return;"),Cs=typeof Ud.oninput=="function"}Ps=Cs}else Ps=!1;jm=Ps&&(!document.documentMode||9<document.documentMode)}function Vd(){Da&&(Da.detachEvent("onpropertychange",Fm),Ya=Da=null)}function Fm(e){if(e.propertyName==="value"&&Kl(Ya)){var t=[];Mm(t,Ya,e,Ic(e)),hm(I0,t)}}function N0(e,t,n){e==="focusin"?(Vd(),Da=t,Ya=n,Da.attachEvent("onpropertychange",Fm)):e==="focusout"&&Vd()}function R0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Kl(Ya)}function L0(e,t){if(e==="click")return Kl(t)}function A0(e,t){if(e==="input"||e==="change")return Kl(t)}function D0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Gn=typeof Object.is=="function"?Object.is:D0;function Xa(e,t){if(Gn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!qs.call(t,o)||!Gn(e[o],t[o]))return!1}return!0}function Kd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wd(e,t){var n=Kd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kd(n)}}function zm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $m(){for(var e=window,t=fl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=fl(e.document)}return t}function Fc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function M0(e){var t=$m(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&zm(n.ownerDocument.documentElement,n)){if(r!==null&&Fc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=Wd(n,a);var i=Wd(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var j0=wr&&"documentMode"in document&&11>=document.documentMode,Mo=null,fu=null,Ma=null,pu=!1;function qd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pu||Mo==null||Mo!==fl(r)||(r=Mo,"selectionStart"in r&&Fc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ma&&Xa(Ma,r)||(Ma=r,r=bl(fu,"onSelect"),0<r.length&&(t=new Dc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Mo)))}function Ai(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var jo={animationend:Ai("Animation","AnimationEnd"),animationiteration:Ai("Animation","AnimationIteration"),animationstart:Ai("Animation","AnimationStart"),transitionend:Ai("Transition","TransitionEnd")},ks={},Bm={};wr&&(Bm=document.createElement("div").style,"AnimationEvent"in window||(delete jo.animationend.animation,delete jo.animationiteration.animation,delete jo.animationstart.animation),"TransitionEvent"in window||delete jo.transitionend.transition);function Wl(e){if(ks[e])return ks[e];if(!jo[e])return e;var t=jo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Bm)return ks[e]=t[n];return e}var Hm=Wl("animationend"),Um=Wl("animationiteration"),Vm=Wl("animationstart"),Km=Wl("transitionend"),Wm=new Map,Gd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(e,t){Wm.set(e,t),vo(t,[e])}for(var Ts=0;Ts<Gd.length;Ts++){var Is=Gd[Ts],F0=Is.toLowerCase(),z0=Is[0].toUpperCase()+Is.slice(1);Gr(F0,"on"+z0)}Gr(Hm,"onAnimationEnd");Gr(Um,"onAnimationIteration");Gr(Vm,"onAnimationStart");Gr("dblclick","onDoubleClick");Gr("focusin","onFocus");Gr("focusout","onBlur");Gr(Km,"onTransitionEnd");ta("onMouseEnter",["mouseout","mouseover"]);ta("onMouseLeave",["mouseout","mouseover"]);ta("onPointerEnter",["pointerout","pointerover"]);ta("onPointerLeave",["pointerout","pointerover"]);vo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vo("onBeforeInput",["compositionend","keypress","textInput","paste"]);vo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ta));function Yd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Fh(r,t,void 0,e),e.currentTarget=null}function qm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==a&&o.isPropagationStopped())break e;Yd(o,l,u),a=s}else for(i=0;i<r.length;i++){if(l=r[i],s=l.instance,u=l.currentTarget,l=l.listener,s!==a&&o.isPropagationStopped())break e;Yd(o,l,u),a=s}}}if(ml)throw e=su,ml=!1,su=null,e}function Be(e,t){var n=t[yu];n===void 0&&(n=t[yu]=new Set);var r=e+"__bubble";n.has(r)||(Gm(t,e,2,!1),n.add(r))}function _s(e,t,n){var r=0;t&&(r|=4),Gm(n,e,r,t)}var Di="_reactListening"+Math.random().toString(36).slice(2);function Qa(e){if(!e[Di]){e[Di]=!0,tm.forEach(function(n){n!=="selectionchange"&&($0.has(n)||_s(n,!1,e),_s(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Di]||(t[Di]=!0,_s("selectionchange",!1,t))}}function Gm(e,t,n,r){switch(Nm(t)){case 1:var o=e0;break;case 4:o=t0;break;default:o=Lc}n=o.bind(null,t,n,e),o=void 0,!lu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ns(e,t,n,r,o){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;l!==null;){if(i=oo(l),i===null)return;if(s=i.tag,s===5||s===6){r=a=i;continue e}l=l.parentNode}}r=r.return}hm(function(){var u=a,p=Ic(n),d=[];e:{var f=Wm.get(e);if(f!==void 0){var b=Dc,x=e;switch(e){case"keypress":if(nl(n)===0)break e;case"keydown":case"keyup":b=v0;break;case"focusin":x="focus",b=Os;break;case"focusout":x="blur",b=Os;break;case"beforeblur":case"afterblur":b=Os;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=jd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=o0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=b0;break;case Hm:case Um:case Vm:b=l0;break;case Km:b=x0;break;case"scroll":b=n0;break;case"wheel":b=E0;break;case"copy":case"cut":case"paste":b=u0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=zd}var m=(t&4)!==0,O=!m&&e==="scroll",h=m?f!==null?f+"Capture":null:f;m=[];for(var g=u,v;g!==null;){v=g;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,h!==null&&(S=Ka(g,h),S!=null&&m.push(Za(g,S,v)))),O)break;g=g.return}0<m.length&&(f=new b(f,x,null,n,p),d.push({event:f,listeners:m}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",f&&n!==au&&(x=n.relatedTarget||n.fromElement)&&(oo(x)||x[xr]))break e;if((b||f)&&(f=p.window===p?p:(f=p.ownerDocument)?f.defaultView||f.parentWindow:window,b?(x=n.relatedTarget||n.toElement,b=u,x=x?oo(x):null,x!==null&&(O=ho(x),x!==O||x.tag!==5&&x.tag!==6)&&(x=null)):(b=null,x=u),b!==x)){if(m=jd,S="onMouseLeave",h="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(m=zd,S="onPointerLeave",h="onPointerEnter",g="pointer"),O=b==null?f:Fo(b),v=x==null?f:Fo(x),f=new m(S,g+"leave",b,n,p),f.target=O,f.relatedTarget=v,S=null,oo(p)===u&&(m=new m(h,g+"enter",x,n,p),m.target=v,m.relatedTarget=O,S=m),O=S,b&&x)t:{for(m=b,h=x,g=0,v=m;v;v=So(v))g++;for(v=0,S=h;S;S=So(S))v++;for(;0<g-v;)m=So(m),g--;for(;0<v-g;)h=So(h),v--;for(;g--;){if(m===h||h!==null&&m===h.alternate)break t;m=So(m),h=So(h)}m=null}else m=null;b!==null&&Xd(d,f,b,m,!1),x!==null&&O!==null&&Xd(d,O,x,m,!0)}}e:{if(f=u?Fo(u):window,b=f.nodeName&&f.nodeName.toLowerCase(),b==="select"||b==="input"&&f.type==="file")var C=_0;else if(Hd(f))if(jm)C=A0;else{C=R0;var N=N0}else(b=f.nodeName)&&b.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=L0);if(C&&(C=C(e,u))){Mm(d,C,n,p);break e}N&&N(e,f,u),e==="focusout"&&(N=f._wrapperState)&&N.controlled&&f.type==="number"&&eu(f,"number",f.value)}switch(N=u?Fo(u):window,e){case"focusin":(Hd(N)||N.contentEditable==="true")&&(Mo=N,fu=u,Ma=null);break;case"focusout":Ma=fu=Mo=null;break;case"mousedown":pu=!0;break;case"contextmenu":case"mouseup":case"dragend":pu=!1,qd(d,n,p);break;case"selectionchange":if(j0)break;case"keydown":case"keyup":qd(d,n,p)}var k;if(jc)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Do?Am(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Lm&&n.locale!=="ko"&&(Do||L!=="onCompositionStart"?L==="onCompositionEnd"&&Do&&(k=Rm()):(Ar=p,Ac="value"in Ar?Ar.value:Ar.textContent,Do=!0)),N=bl(u,L),0<N.length&&(L=new Fd(L,e,null,n,p),d.push({event:L,listeners:N}),k?L.data=k:(k=Dm(n),k!==null&&(L.data=k)))),(k=P0?C0(e,n):k0(e,n))&&(u=bl(u,"onBeforeInput"),0<u.length&&(p=new Fd("onBeforeInput","beforeinput",null,n,p),d.push({event:p,listeners:u}),p.data=k))}qm(d,t)})}function Za(e,t,n){return{instance:e,listener:t,currentTarget:n}}function bl(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=Ka(e,n),a!=null&&r.unshift(Za(e,a,o)),a=Ka(e,t),a!=null&&r.push(Za(e,a,o))),e=e.return}return r}function So(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xd(e,t,n,r,o){for(var a=t._reactName,i=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,o?(s=Ka(n,a),s!=null&&i.unshift(Za(n,s,l))):o||(s=Ka(n,a),s!=null&&i.push(Za(n,s,l)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var B0=/\r\n?/g,H0=/\u0000|\uFFFD/g;function Qd(e){return(typeof e=="string"?e:""+e).replace(B0,`
`).replace(H0,"")}function Mi(e,t,n){if(t=Qd(t),Qd(e)!==t&&n)throw Error(H(425))}function wl(){}var mu=null,gu=null;function vu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var hu=typeof setTimeout=="function"?setTimeout:void 0,U0=typeof clearTimeout=="function"?clearTimeout:void 0,Zd=typeof Promise=="function"?Promise:void 0,V0=typeof queueMicrotask=="function"?queueMicrotask:typeof Zd<"u"?function(e){return Zd.resolve(null).then(e).catch(K0)}:hu;function K0(e){setTimeout(function(){throw e})}function Rs(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Ga(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Ga(t)}function $r(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Jd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var pa=Math.random().toString(36).slice(2),nr="__reactFiber$"+pa,Ja="__reactProps$"+pa,xr="__reactContainer$"+pa,yu="__reactEvents$"+pa,W0="__reactListeners$"+pa,q0="__reactHandles$"+pa;function oo(e){var t=e[nr];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xr]||n[nr]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Jd(e);e!==null;){if(n=e[nr])return n;e=Jd(e)}return t}e=n,n=e.parentNode}return null}function Si(e){return e=e[nr]||e[xr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(H(33))}function ql(e){return e[Ja]||null}var bu=[],zo=-1;function Yr(e){return{current:e}}function He(e){0>zo||(e.current=bu[zo],bu[zo]=null,zo--)}function ze(e,t){zo++,bu[zo]=e.current,e.current=t}var qr={},Vt=Yr(qr),un=Yr(!1),uo=qr;function na(e,t){var n=e.type.contextTypes;if(!n)return qr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function cn(e){return e=e.childContextTypes,e!=null}function xl(){He(un),He(Vt)}function ef(e,t,n){if(Vt.current!==qr)throw Error(H(168));ze(Vt,t),ze(un,n)}function Ym(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(H(108,Nh(e)||"Unknown",o));return Je({},n,r)}function Sl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qr,uo=Vt.current,ze(Vt,e),ze(un,un.current),!0}function tf(e,t,n){var r=e.stateNode;if(!r)throw Error(H(169));n?(e=Ym(e,t,uo),r.__reactInternalMemoizedMergedChildContext=e,He(un),He(Vt),ze(Vt,e)):He(un),ze(un,n)}var mr=null,Gl=!1,Ls=!1;function Xm(e){mr===null?mr=[e]:mr.push(e)}function G0(e){Gl=!0,Xm(e)}function Xr(){if(!Ls&&mr!==null){Ls=!0;var e=0,t=Ae;try{var n=mr;for(Ae=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}mr=null,Gl=!1}catch(o){throw mr!==null&&(mr=mr.slice(e+1)),xm(_c,Xr),o}finally{Ae=t,Ls=!1}}return null}var $o=[],Bo=0,El=null,Ol=0,Cn=[],kn=0,co=null,gr=1,vr="";function eo(e,t){$o[Bo++]=Ol,$o[Bo++]=El,El=e,Ol=t}function Qm(e,t,n){Cn[kn++]=gr,Cn[kn++]=vr,Cn[kn++]=co,co=e;var r=gr;e=vr;var o=32-Wn(r)-1;r&=~(1<<o),n+=1;var a=32-Wn(t)+o;if(30<a){var i=o-o%5;a=(r&(1<<i)-1).toString(32),r>>=i,o-=i,gr=1<<32-Wn(t)+o|n<<o|r,vr=a+e}else gr=1<<a|n<<o|r,vr=e}function zc(e){e.return!==null&&(eo(e,1),Qm(e,1,0))}function $c(e){for(;e===El;)El=$o[--Bo],$o[Bo]=null,Ol=$o[--Bo],$o[Bo]=null;for(;e===co;)co=Cn[--kn],Cn[kn]=null,vr=Cn[--kn],Cn[kn]=null,gr=Cn[--kn],Cn[kn]=null}var hn=null,vn=null,Ke=!1,Vn=null;function Zm(e,t){var n=Tn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function nf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,hn=e,vn=$r(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,hn=e,vn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=co!==null?{id:gr,overflow:vr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Tn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,hn=e,vn=null,!0):!1;default:return!1}}function wu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xu(e){if(Ke){var t=vn;if(t){var n=t;if(!nf(e,t)){if(wu(e))throw Error(H(418));t=$r(n.nextSibling);var r=hn;t&&nf(e,t)?Zm(r,n):(e.flags=e.flags&-4097|2,Ke=!1,hn=e)}}else{if(wu(e))throw Error(H(418));e.flags=e.flags&-4097|2,Ke=!1,hn=e}}}function rf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;hn=e}function ji(e){if(e!==hn)return!1;if(!Ke)return rf(e),Ke=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vu(e.type,e.memoizedProps)),t&&(t=vn)){if(wu(e))throw Jm(),Error(H(418));for(;t;)Zm(e,t),t=$r(t.nextSibling)}if(rf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(H(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){vn=$r(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}vn=null}}else vn=hn?$r(e.stateNode.nextSibling):null;return!0}function Jm(){for(var e=vn;e;)e=$r(e.nextSibling)}function ra(){vn=hn=null,Ke=!1}function Bc(e){Vn===null?Vn=[e]:Vn.push(e)}var Y0=Or.ReactCurrentBatchConfig;function xa(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,e));var o=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(i){var l=o.refs;i===null?delete l[a]:l[a]=i},t._stringRef=a,t)}if(typeof e!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,e))}return e}function Fi(e,t){throw e=Object.prototype.toString.call(t),Error(H(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function of(e){var t=e._init;return t(e._payload)}function eg(e){function t(h,g){if(e){var v=h.deletions;v===null?(h.deletions=[g],h.flags|=16):v.push(g)}}function n(h,g){if(!e)return null;for(;g!==null;)t(h,g),g=g.sibling;return null}function r(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function o(h,g){return h=Vr(h,g),h.index=0,h.sibling=null,h}function a(h,g,v){return h.index=v,e?(v=h.alternate,v!==null?(v=v.index,v<g?(h.flags|=2,g):v):(h.flags|=2,g)):(h.flags|=1048576,g)}function i(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,g,v,S){return g===null||g.tag!==6?(g=$s(v,h.mode,S),g.return=h,g):(g=o(g,v),g.return=h,g)}function s(h,g,v,S){var C=v.type;return C===Ao?p(h,g,v.props.children,S,v.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ir&&of(C)===g.type)?(S=o(g,v.props),S.ref=xa(h,g,v),S.return=h,S):(S=ul(v.type,v.key,v.props,null,h.mode,S),S.ref=xa(h,g,v),S.return=h,S)}function u(h,g,v,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Bs(v,h.mode,S),g.return=h,g):(g=o(g,v.children||[]),g.return=h,g)}function p(h,g,v,S,C){return g===null||g.tag!==7?(g=so(v,h.mode,S,C),g.return=h,g):(g=o(g,v),g.return=h,g)}function d(h,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=$s(""+g,h.mode,v),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ki:return v=ul(g.type,g.key,g.props,null,h.mode,v),v.ref=xa(h,null,g),v.return=h,v;case Lo:return g=Bs(g,h.mode,v),g.return=h,g;case Ir:var S=g._init;return d(h,S(g._payload),v)}if(Ca(g)||va(g))return g=so(g,h.mode,v,null),g.return=h,g;Fi(h,g)}return null}function f(h,g,v,S){var C=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:l(h,g,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ki:return v.key===C?s(h,g,v,S):null;case Lo:return v.key===C?u(h,g,v,S):null;case Ir:return C=v._init,f(h,g,C(v._payload),S)}if(Ca(v)||va(v))return C!==null?null:p(h,g,v,S,null);Fi(h,v)}return null}function b(h,g,v,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(v)||null,l(g,h,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ki:return h=h.get(S.key===null?v:S.key)||null,s(g,h,S,C);case Lo:return h=h.get(S.key===null?v:S.key)||null,u(g,h,S,C);case Ir:var N=S._init;return b(h,g,v,N(S._payload),C)}if(Ca(S)||va(S))return h=h.get(v)||null,p(g,h,S,C,null);Fi(g,S)}return null}function x(h,g,v,S){for(var C=null,N=null,k=g,L=g=0,F=null;k!==null&&L<v.length;L++){k.index>L?(F=k,k=null):F=k.sibling;var I=f(h,k,v[L],S);if(I===null){k===null&&(k=F);break}e&&k&&I.alternate===null&&t(h,k),g=a(I,g,L),N===null?C=I:N.sibling=I,N=I,k=F}if(L===v.length)return n(h,k),Ke&&eo(h,L),C;if(k===null){for(;L<v.length;L++)k=d(h,v[L],S),k!==null&&(g=a(k,g,L),N===null?C=k:N.sibling=k,N=k);return Ke&&eo(h,L),C}for(k=r(h,k);L<v.length;L++)F=b(k,h,L,v[L],S),F!==null&&(e&&F.alternate!==null&&k.delete(F.key===null?L:F.key),g=a(F,g,L),N===null?C=F:N.sibling=F,N=F);return e&&k.forEach(function(P){return t(h,P)}),Ke&&eo(h,L),C}function m(h,g,v,S){var C=va(v);if(typeof C!="function")throw Error(H(150));if(v=C.call(v),v==null)throw Error(H(151));for(var N=C=null,k=g,L=g=0,F=null,I=v.next();k!==null&&!I.done;L++,I=v.next()){k.index>L?(F=k,k=null):F=k.sibling;var P=f(h,k,I.value,S);if(P===null){k===null&&(k=F);break}e&&k&&P.alternate===null&&t(h,k),g=a(P,g,L),N===null?C=P:N.sibling=P,N=P,k=F}if(I.done)return n(h,k),Ke&&eo(h,L),C;if(k===null){for(;!I.done;L++,I=v.next())I=d(h,I.value,S),I!==null&&(g=a(I,g,L),N===null?C=I:N.sibling=I,N=I);return Ke&&eo(h,L),C}for(k=r(h,k);!I.done;L++,I=v.next())I=b(k,h,L,I.value,S),I!==null&&(e&&I.alternate!==null&&k.delete(I.key===null?L:I.key),g=a(I,g,L),N===null?C=I:N.sibling=I,N=I);return e&&k.forEach(function(le){return t(h,le)}),Ke&&eo(h,L),C}function O(h,g,v,S){if(typeof v=="object"&&v!==null&&v.type===Ao&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ki:e:{for(var C=v.key,N=g;N!==null;){if(N.key===C){if(C=v.type,C===Ao){if(N.tag===7){n(h,N.sibling),g=o(N,v.props.children),g.return=h,h=g;break e}}else if(N.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ir&&of(C)===N.type){n(h,N.sibling),g=o(N,v.props),g.ref=xa(h,N,v),g.return=h,h=g;break e}n(h,N);break}else t(h,N);N=N.sibling}v.type===Ao?(g=so(v.props.children,h.mode,S,v.key),g.return=h,h=g):(S=ul(v.type,v.key,v.props,null,h.mode,S),S.ref=xa(h,g,v),S.return=h,h=S)}return i(h);case Lo:e:{for(N=v.key;g!==null;){if(g.key===N)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(h,g.sibling),g=o(g,v.children||[]),g.return=h,h=g;break e}else{n(h,g);break}else t(h,g);g=g.sibling}g=Bs(v,h.mode,S),g.return=h,h=g}return i(h);case Ir:return N=v._init,O(h,g,N(v._payload),S)}if(Ca(v))return x(h,g,v,S);if(va(v))return m(h,g,v,S);Fi(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(h,g.sibling),g=o(g,v),g.return=h,h=g):(n(h,g),g=$s(v,h.mode,S),g.return=h,h=g),i(h)):n(h,g)}return O}var oa=eg(!0),tg=eg(!1),Pl=Yr(null),Cl=null,Ho=null,Hc=null;function Uc(){Hc=Ho=Cl=null}function Vc(e){var t=Pl.current;He(Pl),e._currentValue=t}function Su(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Jo(e,t){Cl=e,Hc=Ho=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(sn=!0),e.firstContext=null)}function _n(e){var t=e._currentValue;if(Hc!==e)if(e={context:e,memoizedValue:t,next:null},Ho===null){if(Cl===null)throw Error(H(308));Ho=e,Cl.dependencies={lanes:0,firstContext:e}}else Ho=Ho.next=e;return t}var ao=null;function Kc(e){ao===null?ao=[e]:ao.push(e)}function ng(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Kc(t)):(n.next=o.next,o.next=n),t.interleaved=n,Sr(e,r)}function Sr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var _r=!1;function Wc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function br(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Br(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,_e&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Sr(e,n)}return o=r.interleaved,o===null?(t.next=t,Kc(r)):(t.next=o.next,o.next=t),r.interleaved=t,Sr(e,n)}function rl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Nc(e,n)}}function af(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=i:a=a.next=i,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function kl(e,t,n,r){var o=e.updateQueue;_r=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,i===null?a=u:i.next=u,i=s;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==i&&(l===null?p.firstBaseUpdate=u:l.next=u,p.lastBaseUpdate=s))}if(a!==null){var d=o.baseState;i=0,p=u=s=null,l=a;do{var f=l.lane,b=l.eventTime;if((r&f)===f){p!==null&&(p=p.next={eventTime:b,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,m=l;switch(f=t,b=n,m.tag){case 1:if(x=m.payload,typeof x=="function"){d=x.call(b,d,f);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=m.payload,f=typeof x=="function"?x.call(b,d,f):x,f==null)break e;d=Je({},d,f);break e;case 2:_r=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[l]:f.push(l))}else b={eventTime:b,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(u=p=b,s=d):p=p.next=b,i|=f;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;f=l,l=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(!0);if(p===null&&(s=d),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);po|=i,e.lanes=i,e.memoizedState=d}}function lf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(H(191,o));o.call(r)}}}var Ei={},or=Yr(Ei),ei=Yr(Ei),ti=Yr(Ei);function io(e){if(e===Ei)throw Error(H(174));return e}function qc(e,t){switch(ze(ti,t),ze(ei,e),ze(or,Ei),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:nu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=nu(t,e)}He(or),ze(or,t)}function aa(){He(or),He(ei),He(ti)}function og(e){io(ti.current);var t=io(or.current),n=nu(t,e.type);t!==n&&(ze(ei,e),ze(or,n))}function Gc(e){ei.current===e&&(He(or),He(ei))}var Qe=Yr(0);function Tl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var As=[];function Yc(){for(var e=0;e<As.length;e++)As[e]._workInProgressVersionPrimary=null;As.length=0}var ol=Or.ReactCurrentDispatcher,Ds=Or.ReactCurrentBatchConfig,fo=0,Ze=null,wt=null,kt=null,Il=!1,ja=!1,ni=0,X0=0;function $t(){throw Error(H(321))}function Xc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Gn(e[n],t[n]))return!1;return!0}function Qc(e,t,n,r,o,a){if(fo=a,Ze=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ol.current=e===null||e.memoizedState===null?e1:t1,e=n(r,o),ja){a=0;do{if(ja=!1,ni=0,25<=a)throw Error(H(301));a+=1,kt=wt=null,t.updateQueue=null,ol.current=n1,e=n(r,o)}while(ja)}if(ol.current=_l,t=wt!==null&&wt.next!==null,fo=0,kt=wt=Ze=null,Il=!1,t)throw Error(H(300));return e}function Zc(){var e=ni!==0;return ni=0,e}function tr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?Ze.memoizedState=kt=e:kt=kt.next=e,kt}function Nn(){if(wt===null){var e=Ze.alternate;e=e!==null?e.memoizedState:null}else e=wt.next;var t=kt===null?Ze.memoizedState:kt.next;if(t!==null)kt=t,wt=e;else{if(e===null)throw Error(H(310));wt=e,e={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},kt===null?Ze.memoizedState=kt=e:kt=kt.next=e}return kt}function ri(e,t){return typeof t=="function"?t(e):t}function Ms(e){var t=Nn(),n=t.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=e;var r=wt,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var i=o.next;o.next=a.next,a.next=i}r.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,r=r.baseState;var l=i=null,s=null,u=a;do{var p=u.lane;if((fo&p)===p)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,i=r):s=s.next=d,Ze.lanes|=p,po|=p}u=u.next}while(u!==null&&u!==a);s===null?i=r:s.next=l,Gn(r,t.memoizedState)||(sn=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do a=o.lane,Ze.lanes|=a,po|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function js(e){var t=Nn(),n=t.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do a=e(a,i.action),i=i.next;while(i!==o);Gn(a,t.memoizedState)||(sn=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function ag(){}function ig(e,t){var n=Ze,r=Nn(),o=t(),a=!Gn(r.memoizedState,o);if(a&&(r.memoizedState=o,sn=!0),r=r.queue,Jc(ug.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||kt!==null&&kt.memoizedState.tag&1){if(n.flags|=2048,oi(9,sg.bind(null,n,r,o,t),void 0,null),It===null)throw Error(H(349));fo&30||lg(n,t,o)}return o}function lg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ze.updateQueue,t===null?(t={lastEffect:null,stores:null},Ze.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function sg(e,t,n,r){t.value=n,t.getSnapshot=r,cg(t)&&dg(e)}function ug(e,t,n){return n(function(){cg(t)&&dg(e)})}function cg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Gn(e,n)}catch{return!0}}function dg(e){var t=Sr(e,1);t!==null&&qn(t,e,1,-1)}function sf(e){var t=tr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ri,lastRenderedState:e},t.queue=e,e=e.dispatch=J0.bind(null,Ze,e),[t.memoizedState,e]}function oi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ze.updateQueue,t===null?(t={lastEffect:null,stores:null},Ze.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function fg(){return Nn().memoizedState}function al(e,t,n,r){var o=tr();Ze.flags|=e,o.memoizedState=oi(1|t,n,void 0,r===void 0?null:r)}function Yl(e,t,n,r){var o=Nn();r=r===void 0?null:r;var a=void 0;if(wt!==null){var i=wt.memoizedState;if(a=i.destroy,r!==null&&Xc(r,i.deps)){o.memoizedState=oi(t,n,a,r);return}}Ze.flags|=e,o.memoizedState=oi(1|t,n,a,r)}function uf(e,t){return al(8390656,8,e,t)}function Jc(e,t){return Yl(2048,8,e,t)}function pg(e,t){return Yl(4,2,e,t)}function mg(e,t){return Yl(4,4,e,t)}function gg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vg(e,t,n){return n=n!=null?n.concat([e]):null,Yl(4,4,gg.bind(null,t,e),n)}function ed(){}function hg(e,t){var n=Nn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function yg(e,t){var n=Nn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Xc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function bg(e,t,n){return fo&21?(Gn(n,t)||(n=Om(),Ze.lanes|=n,po|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,sn=!0),e.memoizedState=n)}function Q0(e,t){var n=Ae;Ae=n!==0&&4>n?n:4,e(!0);var r=Ds.transition;Ds.transition={};try{e(!1),t()}finally{Ae=n,Ds.transition=r}}function wg(){return Nn().memoizedState}function Z0(e,t,n){var r=Ur(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},xg(e))Sg(t,n);else if(n=ng(e,t,n,r),n!==null){var o=Yt();qn(n,e,r,o),Eg(n,t,r)}}function J0(e,t,n){var r=Ur(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(xg(e))Sg(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var i=t.lastRenderedState,l=a(i,n);if(o.hasEagerState=!0,o.eagerState=l,Gn(l,i)){var s=t.interleaved;s===null?(o.next=o,Kc(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=ng(e,t,o,r),n!==null&&(o=Yt(),qn(n,e,r,o),Eg(n,t,r))}}function xg(e){var t=e.alternate;return e===Ze||t!==null&&t===Ze}function Sg(e,t){ja=Il=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Eg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Nc(e,n)}}var _l={readContext:_n,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},e1={readContext:_n,useCallback:function(e,t){return tr().memoizedState=[e,t===void 0?null:t],e},useContext:_n,useEffect:uf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,al(4194308,4,gg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return al(4194308,4,e,t)},useInsertionEffect:function(e,t){return al(4,2,e,t)},useMemo:function(e,t){var n=tr();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=tr();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Z0.bind(null,Ze,e),[r.memoizedState,e]},useRef:function(e){var t=tr();return e={current:e},t.memoizedState=e},useState:sf,useDebugValue:ed,useDeferredValue:function(e){return tr().memoizedState=e},useTransition:function(){var e=sf(!1),t=e[0];return e=Q0.bind(null,e[1]),tr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ze,o=tr();if(Ke){if(n===void 0)throw Error(H(407));n=n()}else{if(n=t(),It===null)throw Error(H(349));fo&30||lg(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,uf(ug.bind(null,r,a,e),[e]),r.flags|=2048,oi(9,sg.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=tr(),t=It.identifierPrefix;if(Ke){var n=vr,r=gr;n=(r&~(1<<32-Wn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ni++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=X0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},t1={readContext:_n,useCallback:hg,useContext:_n,useEffect:Jc,useImperativeHandle:vg,useInsertionEffect:pg,useLayoutEffect:mg,useMemo:yg,useReducer:Ms,useRef:fg,useState:function(){return Ms(ri)},useDebugValue:ed,useDeferredValue:function(e){var t=Nn();return bg(t,wt.memoizedState,e)},useTransition:function(){var e=Ms(ri)[0],t=Nn().memoizedState;return[e,t]},useMutableSource:ag,useSyncExternalStore:ig,useId:wg,unstable_isNewReconciler:!1},n1={readContext:_n,useCallback:hg,useContext:_n,useEffect:Jc,useImperativeHandle:vg,useInsertionEffect:pg,useLayoutEffect:mg,useMemo:yg,useReducer:js,useRef:fg,useState:function(){return js(ri)},useDebugValue:ed,useDeferredValue:function(e){var t=Nn();return wt===null?t.memoizedState=e:bg(t,wt.memoizedState,e)},useTransition:function(){var e=js(ri)[0],t=Nn().memoizedState;return[e,t]},useMutableSource:ag,useSyncExternalStore:ig,useId:wg,unstable_isNewReconciler:!1};function Hn(e,t){if(e&&e.defaultProps){t=Je({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Eu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Je({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Xl={isMounted:function(e){return(e=e._reactInternals)?ho(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Yt(),o=Ur(e),a=br(r,o);a.payload=t,n!=null&&(a.callback=n),t=Br(e,a,o),t!==null&&(qn(t,e,o,r),rl(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Yt(),o=Ur(e),a=br(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Br(e,a,o),t!==null&&(qn(t,e,o,r),rl(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Yt(),r=Ur(e),o=br(n,r);o.tag=2,t!=null&&(o.callback=t),t=Br(e,o,r),t!==null&&(qn(t,e,r,n),rl(t,e,r))}};function cf(e,t,n,r,o,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,i):t.prototype&&t.prototype.isPureReactComponent?!Xa(n,r)||!Xa(o,a):!0}function Og(e,t,n){var r=!1,o=qr,a=t.contextType;return typeof a=="object"&&a!==null?a=_n(a):(o=cn(t)?uo:Vt.current,r=t.contextTypes,a=(r=r!=null)?na(e,o):qr),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Xl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function df(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Xl.enqueueReplaceState(t,t.state,null)}function Ou(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Wc(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=_n(a):(a=cn(t)?uo:Vt.current,o.context=na(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Eu(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Xl.enqueueReplaceState(o,o.state,null),kl(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function ia(e,t){try{var n="",r=t;do n+=_h(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function Fs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Pu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var r1=typeof WeakMap=="function"?WeakMap:Map;function Pg(e,t,n){n=br(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Rl||(Rl=!0,Du=r),Pu(e,t)},n}function Cg(e,t,n){n=br(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Pu(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Pu(e,t),typeof r!="function"&&(Hr===null?Hr=new Set([this]):Hr.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function ff(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new r1;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=h1.bind(null,e,t,n),t.then(e,e))}function pf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function mf(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=br(-1,1),t.tag=2,Br(n,t,1))),n.lanes|=1),e)}var o1=Or.ReactCurrentOwner,sn=!1;function Gt(e,t,n,r){t.child=e===null?tg(t,null,n,r):oa(t,e.child,n,r)}function gf(e,t,n,r,o){n=n.render;var a=t.ref;return Jo(t,o),r=Qc(e,t,n,r,a,o),n=Zc(),e!==null&&!sn?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Er(e,t,o)):(Ke&&n&&zc(t),t.flags|=1,Gt(e,t,r,o),t.child)}function vf(e,t,n,r,o){if(e===null){var a=n.type;return typeof a=="function"&&!sd(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,kg(e,t,a,r,o)):(e=ul(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&o)){var i=a.memoizedProps;if(n=n.compare,n=n!==null?n:Xa,n(i,r)&&e.ref===t.ref)return Er(e,t,o)}return t.flags|=1,e=Vr(a,r),e.ref=t.ref,e.return=t,t.child=e}function kg(e,t,n,r,o){if(e!==null){var a=e.memoizedProps;if(Xa(a,r)&&e.ref===t.ref)if(sn=!1,t.pendingProps=r=a,(e.lanes&o)!==0)e.flags&131072&&(sn=!0);else return t.lanes=e.lanes,Er(e,t,o)}return Cu(e,t,n,r,o)}function Tg(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ze(Vo,gn),gn|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ze(Vo,gn),gn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,ze(Vo,gn),gn|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,ze(Vo,gn),gn|=r;return Gt(e,t,o,n),t.child}function Ig(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cu(e,t,n,r,o){var a=cn(n)?uo:Vt.current;return a=na(t,a),Jo(t,o),n=Qc(e,t,n,r,a,o),r=Zc(),e!==null&&!sn?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Er(e,t,o)):(Ke&&r&&zc(t),t.flags|=1,Gt(e,t,n,o),t.child)}function hf(e,t,n,r,o){if(cn(n)){var a=!0;Sl(t)}else a=!1;if(Jo(t,o),t.stateNode===null)il(e,t),Og(t,n,r),Ou(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,l=t.memoizedProps;i.props=l;var s=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=_n(u):(u=cn(n)?uo:Vt.current,u=na(t,u));var p=n.getDerivedStateFromProps,d=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function";d||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==r||s!==u)&&df(t,i,r,u),_r=!1;var f=t.memoizedState;i.state=f,kl(t,r,i,o),s=t.memoizedState,l!==r||f!==s||un.current||_r?(typeof p=="function"&&(Eu(t,n,p,r),s=t.memoizedState),(l=_r||cf(t,n,l,r,f,s,u))?(d||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=u,r=l):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,rg(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Hn(t.type,l),i.props=u,d=t.pendingProps,f=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=_n(s):(s=cn(n)?uo:Vt.current,s=na(t,s));var b=n.getDerivedStateFromProps;(p=typeof b=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==d||f!==s)&&df(t,i,r,s),_r=!1,f=t.memoizedState,i.state=f,kl(t,r,i,o);var x=t.memoizedState;l!==d||f!==x||un.current||_r?(typeof b=="function"&&(Eu(t,n,b,r),x=t.memoizedState),(u=_r||cf(t,n,u,r,f,x,s)||!1)?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,x,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,x,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),i.props=r,i.state=x,i.context=s,r=u):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return ku(e,t,n,r,a,o)}function ku(e,t,n,r,o,a){Ig(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&tf(t,n,!1),Er(e,t,a);r=t.stateNode,o1.current=t;var l=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=oa(t,e.child,null,a),t.child=oa(t,null,l,a)):Gt(e,t,l,a),t.memoizedState=r.state,o&&tf(t,n,!0),t.child}function _g(e){var t=e.stateNode;t.pendingContext?ef(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ef(e,t.context,!1),qc(e,t.containerInfo)}function yf(e,t,n,r,o){return ra(),Bc(o),t.flags|=256,Gt(e,t,n,r),t.child}var Tu={dehydrated:null,treeContext:null,retryLane:0};function Iu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ng(e,t,n){var r=t.pendingProps,o=Qe.current,a=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ze(Qe,o&1),e===null)return xu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,a?(r=t.mode,a=t.child,i={mode:"hidden",children:i},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=i):a=Jl(i,r,0,null),e=so(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Iu(n),t.memoizedState=Tu,e):td(t,i));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return a1(e,t,i,r,l,o,n);if(a){a=r.fallback,i=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Vr(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?a=Vr(l,a):(a=so(a,i,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,i=e.child.memoizedState,i=i===null?Iu(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},a.memoizedState=i,a.childLanes=e.childLanes&~n,t.memoizedState=Tu,r}return a=e.child,e=a.sibling,r=Vr(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function td(e,t){return t=Jl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zi(e,t,n,r){return r!==null&&Bc(r),oa(t,e.child,null,n),e=td(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function a1(e,t,n,r,o,a,i){if(n)return t.flags&256?(t.flags&=-257,r=Fs(Error(H(422))),zi(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=Jl({mode:"visible",children:r.children},o,0,null),a=so(a,o,i,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&oa(t,e.child,null,i),t.child.memoizedState=Iu(i),t.memoizedState=Tu,a);if(!(t.mode&1))return zi(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(H(419)),r=Fs(a,r,void 0),zi(e,t,i,r)}if(l=(i&e.childLanes)!==0,sn||l){if(r=It,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,Sr(e,o),qn(r,e,o,-1))}return ld(),r=Fs(Error(H(421))),zi(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=y1.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,vn=$r(o.nextSibling),hn=t,Ke=!0,Vn=null,e!==null&&(Cn[kn++]=gr,Cn[kn++]=vr,Cn[kn++]=co,gr=e.id,vr=e.overflow,co=t),t=td(t,r.children),t.flags|=4096,t)}function bf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Su(e.return,t,n)}function zs(e,t,n,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function Rg(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(Gt(e,t,r.children,n),r=Qe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bf(e,n,t);else if(e.tag===19)bf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ze(Qe,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Tl(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),zs(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Tl(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}zs(t,!0,n,null,a);break;case"together":zs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function il(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Er(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),po|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(H(153));if(t.child!==null){for(e=t.child,n=Vr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function i1(e,t,n){switch(t.tag){case 3:_g(t),ra();break;case 5:og(t);break;case 1:cn(t.type)&&Sl(t);break;case 4:qc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ze(Pl,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ze(Qe,Qe.current&1),t.flags|=128,null):n&t.child.childLanes?Ng(e,t,n):(ze(Qe,Qe.current&1),e=Er(e,t,n),e!==null?e.sibling:null);ze(Qe,Qe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Rg(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ze(Qe,Qe.current),r)break;return null;case 22:case 23:return t.lanes=0,Tg(e,t,n)}return Er(e,t,n)}var Lg,_u,Ag,Dg;Lg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_u=function(){};Ag=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,io(or.current);var a=null;switch(n){case"input":o=Zs(e,o),r=Zs(e,r),a=[];break;case"select":o=Je({},o,{value:void 0}),r=Je({},r,{value:void 0}),a=[];break;case"textarea":o=tu(e,o),r=tu(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=wl)}ru(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(i in l)l.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ua.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var s=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(i in l)!l.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&l[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(a||(a=[]),a.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(a=a||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ua.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&Be("scroll",e),a||l===s||(a=[])):(a=a||[]).push(u,s))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Dg=function(e,t,n,r){n!==r&&(t.flags|=4)};function Sa(e,t){if(!Ke)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Bt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function l1(e,t,n){var r=t.pendingProps;switch($c(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(t),null;case 1:return cn(t.type)&&xl(),Bt(t),null;case 3:return r=t.stateNode,aa(),He(un),He(Vt),Yc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ji(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Vn!==null&&(Fu(Vn),Vn=null))),_u(e,t),Bt(t),null;case 5:Gc(t);var o=io(ti.current);if(n=t.type,e!==null&&t.stateNode!=null)Ag(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(H(166));return Bt(t),null}if(e=io(or.current),ji(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[nr]=t,r[Ja]=a,e=(t.mode&1)!==0,n){case"dialog":Be("cancel",r),Be("close",r);break;case"iframe":case"object":case"embed":Be("load",r);break;case"video":case"audio":for(o=0;o<Ta.length;o++)Be(Ta[o],r);break;case"source":Be("error",r);break;case"img":case"image":case"link":Be("error",r),Be("load",r);break;case"details":Be("toggle",r);break;case"input":kd(r,a),Be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Be("invalid",r);break;case"textarea":Id(r,a),Be("invalid",r)}ru(n,a),o=null;for(var i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&Mi(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&Mi(r.textContent,l,e),o=["children",""+l]):Ua.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&Be("scroll",r)}switch(n){case"input":Ti(r),Td(r,a,!0);break;case"textarea":Ti(r),_d(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=wl)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=um(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[nr]=t,e[Ja]=r,Lg(e,t,!1,!1),t.stateNode=e;e:{switch(i=ou(n,r),n){case"dialog":Be("cancel",e),Be("close",e),o=r;break;case"iframe":case"object":case"embed":Be("load",e),o=r;break;case"video":case"audio":for(o=0;o<Ta.length;o++)Be(Ta[o],e);o=r;break;case"source":Be("error",e),o=r;break;case"img":case"image":case"link":Be("error",e),Be("load",e),o=r;break;case"details":Be("toggle",e),o=r;break;case"input":kd(e,r),o=Zs(e,r),Be("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Je({},r,{value:void 0}),Be("invalid",e);break;case"textarea":Id(e,r),o=tu(e,r),Be("invalid",e);break;default:o=r}ru(n,o),l=o;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="style"?fm(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&cm(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Va(e,s):typeof s=="number"&&Va(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Ua.hasOwnProperty(a)?s!=null&&a==="onScroll"&&Be("scroll",e):s!=null&&Pc(e,a,s,i))}switch(n){case"input":Ti(e),Td(e,r,!1);break;case"textarea":Ti(e),_d(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wr(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Yo(e,!!r.multiple,a,!1):r.defaultValue!=null&&Yo(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=wl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Bt(t),null;case 6:if(e&&t.stateNode!=null)Dg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(H(166));if(n=io(ti.current),io(or.current),ji(t)){if(r=t.stateNode,n=t.memoizedProps,r[nr]=t,(a=r.nodeValue!==n)&&(e=hn,e!==null))switch(e.tag){case 3:Mi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mi(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nr]=t,t.stateNode=r}return Bt(t),null;case 13:if(He(Qe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ke&&vn!==null&&t.mode&1&&!(t.flags&128))Jm(),ra(),t.flags|=98560,a=!1;else if(a=ji(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(H(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(H(317));a[nr]=t}else ra(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Bt(t),a=!1}else Vn!==null&&(Fu(Vn),Vn=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Qe.current&1?xt===0&&(xt=3):ld())),t.updateQueue!==null&&(t.flags|=4),Bt(t),null);case 4:return aa(),_u(e,t),e===null&&Qa(t.stateNode.containerInfo),Bt(t),null;case 10:return Vc(t.type._context),Bt(t),null;case 17:return cn(t.type)&&xl(),Bt(t),null;case 19:if(He(Qe),a=t.memoizedState,a===null)return Bt(t),null;if(r=(t.flags&128)!==0,i=a.rendering,i===null)if(r)Sa(a,!1);else{if(xt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Tl(e),i!==null){for(t.flags|=128,Sa(a,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,i=a.alternate,i===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,a.type=i.type,e=i.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ze(Qe,Qe.current&1|2),t.child}e=e.sibling}a.tail!==null&&lt()>la&&(t.flags|=128,r=!0,Sa(a,!1),t.lanes=4194304)}else{if(!r)if(e=Tl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Sa(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!Ke)return Bt(t),null}else 2*lt()-a.renderingStartTime>la&&n!==1073741824&&(t.flags|=128,r=!0,Sa(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(n=a.last,n!==null?n.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=lt(),t.sibling=null,n=Qe.current,ze(Qe,r?n&1|2:n&1),t):(Bt(t),null);case 22:case 23:return id(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?gn&1073741824&&(Bt(t),t.subtreeFlags&6&&(t.flags|=8192)):Bt(t),null;case 24:return null;case 25:return null}throw Error(H(156,t.tag))}function s1(e,t){switch($c(t),t.tag){case 1:return cn(t.type)&&xl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return aa(),He(un),He(Vt),Yc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Gc(t),null;case 13:if(He(Qe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(H(340));ra()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return He(Qe),null;case 4:return aa(),null;case 10:return Vc(t.type._context),null;case 22:case 23:return id(),null;case 24:return null;default:return null}}var $i=!1,Ut=!1,u1=typeof WeakSet=="function"?WeakSet:Set,Y=null;function Uo(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){et(e,t,r)}else n.current=null}function Nu(e,t,n){try{n()}catch(r){et(e,t,r)}}var wf=!1;function c1(e,t){if(mu=hl,e=$m(),Fc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var i=0,l=-1,s=-1,u=0,p=0,d=e,f=null;t:for(;;){for(var b;d!==n||o!==0&&d.nodeType!==3||(l=i+o),d!==a||r!==0&&d.nodeType!==3||(s=i+r),d.nodeType===3&&(i+=d.nodeValue.length),(b=d.firstChild)!==null;)f=d,d=b;for(;;){if(d===e)break t;if(f===n&&++u===o&&(l=i),f===a&&++p===r&&(s=i),(b=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=b}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(gu={focusedElem:e,selectionRange:n},hl=!1,Y=t;Y!==null;)if(t=Y,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Y=e;else for(;Y!==null;){t=Y;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var m=x.memoizedProps,O=x.memoizedState,h=t.stateNode,g=h.getSnapshotBeforeUpdate(t.elementType===t.type?m:Hn(t.type,m),O);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(S){et(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,Y=e;break}Y=t.return}return x=wf,wf=!1,x}function Fa(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&Nu(t,n,a)}o=o.next}while(o!==r)}}function Ql(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ru(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Mg(e){var t=e.alternate;t!==null&&(e.alternate=null,Mg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nr],delete t[Ja],delete t[yu],delete t[W0],delete t[q0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function jg(e){return e.tag===5||e.tag===3||e.tag===4}function xf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wl));else if(r!==4&&(e=e.child,e!==null))for(Lu(e,t,n),e=e.sibling;e!==null;)Lu(e,t,n),e=e.sibling}function Au(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Au(e,t,n),e=e.sibling;e!==null;)Au(e,t,n),e=e.sibling}var Nt=null,Un=!1;function kr(e,t,n){for(n=n.child;n!==null;)Fg(e,t,n),n=n.sibling}function Fg(e,t,n){if(rr&&typeof rr.onCommitFiberUnmount=="function")try{rr.onCommitFiberUnmount(Ul,n)}catch{}switch(n.tag){case 5:Ut||Uo(n,t);case 6:var r=Nt,o=Un;Nt=null,kr(e,t,n),Nt=r,Un=o,Nt!==null&&(Un?(e=Nt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(Un?(e=Nt,n=n.stateNode,e.nodeType===8?Rs(e.parentNode,n):e.nodeType===1&&Rs(e,n),Ga(e)):Rs(Nt,n.stateNode));break;case 4:r=Nt,o=Un,Nt=n.stateNode.containerInfo,Un=!0,kr(e,t,n),Nt=r,Un=o;break;case 0:case 11:case 14:case 15:if(!Ut&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,i=a.destroy;a=a.tag,i!==void 0&&(a&2||a&4)&&Nu(n,t,i),o=o.next}while(o!==r)}kr(e,t,n);break;case 1:if(!Ut&&(Uo(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){et(n,t,l)}kr(e,t,n);break;case 21:kr(e,t,n);break;case 22:n.mode&1?(Ut=(r=Ut)||n.memoizedState!==null,kr(e,t,n),Ut=r):kr(e,t,n);break;default:kr(e,t,n)}}function Sf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new u1),t.forEach(function(r){var o=b1.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Fn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 5:Nt=l.stateNode,Un=!1;break e;case 3:Nt=l.stateNode.containerInfo,Un=!0;break e;case 4:Nt=l.stateNode.containerInfo,Un=!0;break e}l=l.return}if(Nt===null)throw Error(H(160));Fg(a,i,o),Nt=null,Un=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){et(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)zg(t,e),t=t.sibling}function zg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Fn(t,e),er(e),r&4){try{Fa(3,e,e.return),Ql(3,e)}catch(m){et(e,e.return,m)}try{Fa(5,e,e.return)}catch(m){et(e,e.return,m)}}break;case 1:Fn(t,e),er(e),r&512&&n!==null&&Uo(n,n.return);break;case 5:if(Fn(t,e),er(e),r&512&&n!==null&&Uo(n,n.return),e.flags&32){var o=e.stateNode;try{Va(o,"")}catch(m){et(e,e.return,m)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,i=n!==null?n.memoizedProps:a,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&lm(o,a),ou(l,i);var u=ou(l,a);for(i=0;i<s.length;i+=2){var p=s[i],d=s[i+1];p==="style"?fm(o,d):p==="dangerouslySetInnerHTML"?cm(o,d):p==="children"?Va(o,d):Pc(o,p,d,u)}switch(l){case"input":Js(o,a);break;case"textarea":sm(o,a);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var b=a.value;b!=null?Yo(o,!!a.multiple,b,!1):f!==!!a.multiple&&(a.defaultValue!=null?Yo(o,!!a.multiple,a.defaultValue,!0):Yo(o,!!a.multiple,a.multiple?[]:"",!1))}o[Ja]=a}catch(m){et(e,e.return,m)}}break;case 6:if(Fn(t,e),er(e),r&4){if(e.stateNode===null)throw Error(H(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(m){et(e,e.return,m)}}break;case 3:if(Fn(t,e),er(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ga(t.containerInfo)}catch(m){et(e,e.return,m)}break;case 4:Fn(t,e),er(e);break;case 13:Fn(t,e),er(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(od=lt())),r&4&&Sf(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(Ut=(u=Ut)||p,Fn(t,e),Ut=u):Fn(t,e),er(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(Y=e,p=e.child;p!==null;){for(d=Y=p;Y!==null;){switch(f=Y,b=f.child,f.tag){case 0:case 11:case 14:case 15:Fa(4,f,f.return);break;case 1:Uo(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(m){et(r,n,m)}}break;case 5:Uo(f,f.return);break;case 22:if(f.memoizedState!==null){Of(d);continue}}b!==null?(b.return=f,Y=b):Of(d)}p=p.sibling}e:for(p=null,d=e;;){if(d.tag===5){if(p===null){p=d;try{o=d.stateNode,u?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=d.stateNode,s=d.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=dm("display",i))}catch(m){et(e,e.return,m)}}}else if(d.tag===6){if(p===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(m){et(e,e.return,m)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;p===d&&(p=null),d=d.return}p===d&&(p=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Fn(t,e),er(e),r&4&&Sf(e);break;case 21:break;default:Fn(t,e),er(e)}}function er(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(jg(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Va(o,""),r.flags&=-33);var a=xf(e);Au(e,a,o);break;case 3:case 4:var i=r.stateNode.containerInfo,l=xf(e);Lu(e,l,i);break;default:throw Error(H(161))}}catch(s){et(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function d1(e,t,n){Y=e,$g(e)}function $g(e,t,n){for(var r=(e.mode&1)!==0;Y!==null;){var o=Y,a=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||$i;if(!i){var l=o.alternate,s=l!==null&&l.memoizedState!==null||Ut;l=$i;var u=Ut;if($i=i,(Ut=s)&&!u)for(Y=o;Y!==null;)i=Y,s=i.child,i.tag===22&&i.memoizedState!==null?Pf(o):s!==null?(s.return=i,Y=s):Pf(o);for(;a!==null;)Y=a,$g(a),a=a.sibling;Y=o,$i=l,Ut=u}Ef(e)}else o.subtreeFlags&8772&&a!==null?(a.return=o,Y=a):Ef(e)}}function Ef(e){for(;Y!==null;){var t=Y;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ut||Ql(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ut)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Hn(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&lf(t,a,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}lf(t,i,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var d=p.dehydrated;d!==null&&Ga(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}Ut||t.flags&512&&Ru(t)}catch(f){et(t,t.return,f)}}if(t===e){Y=null;break}if(n=t.sibling,n!==null){n.return=t.return,Y=n;break}Y=t.return}}function Of(e){for(;Y!==null;){var t=Y;if(t===e){Y=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Y=n;break}Y=t.return}}function Pf(e){for(;Y!==null;){var t=Y;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ql(4,t)}catch(s){et(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){et(t,o,s)}}var a=t.return;try{Ru(t)}catch(s){et(t,a,s)}break;case 5:var i=t.return;try{Ru(t)}catch(s){et(t,i,s)}}}catch(s){et(t,t.return,s)}if(t===e){Y=null;break}var l=t.sibling;if(l!==null){l.return=t.return,Y=l;break}Y=t.return}}var f1=Math.ceil,Nl=Or.ReactCurrentDispatcher,nd=Or.ReactCurrentOwner,In=Or.ReactCurrentBatchConfig,_e=0,It=null,pt=null,Rt=0,gn=0,Vo=Yr(0),xt=0,ai=null,po=0,Zl=0,rd=0,za=null,an=null,od=0,la=1/0,pr=null,Rl=!1,Du=null,Hr=null,Bi=!1,Dr=null,Ll=0,$a=0,Mu=null,ll=-1,sl=0;function Yt(){return _e&6?lt():ll!==-1?ll:ll=lt()}function Ur(e){return e.mode&1?_e&2&&Rt!==0?Rt&-Rt:Y0.transition!==null?(sl===0&&(sl=Om()),sl):(e=Ae,e!==0||(e=window.event,e=e===void 0?16:Nm(e.type)),e):1}function qn(e,t,n,r){if(50<$a)throw $a=0,Mu=null,Error(H(185));wi(e,n,r),(!(_e&2)||e!==It)&&(e===It&&(!(_e&2)&&(Zl|=n),xt===4&&Lr(e,Rt)),dn(e,r),n===1&&_e===0&&!(t.mode&1)&&(la=lt()+500,Gl&&Xr()))}function dn(e,t){var n=e.callbackNode;Yh(e,t);var r=vl(e,e===It?Rt:0);if(r===0)n!==null&&Ld(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ld(n),t===1)e.tag===0?G0(Cf.bind(null,e)):Xm(Cf.bind(null,e)),V0(function(){!(_e&6)&&Xr()}),n=null;else{switch(Pm(r)){case 1:n=_c;break;case 4:n=Sm;break;case 16:n=gl;break;case 536870912:n=Em;break;default:n=gl}n=Gg(n,Bg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Bg(e,t){if(ll=-1,sl=0,_e&6)throw Error(H(327));var n=e.callbackNode;if(ea()&&e.callbackNode!==n)return null;var r=vl(e,e===It?Rt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Al(e,r);else{t=r;var o=_e;_e|=2;var a=Ug();(It!==e||Rt!==t)&&(pr=null,la=lt()+500,lo(e,t));do try{g1();break}catch(l){Hg(e,l)}while(!0);Uc(),Nl.current=a,_e=o,pt!==null?t=0:(It=null,Rt=0,t=xt)}if(t!==0){if(t===2&&(o=uu(e),o!==0&&(r=o,t=ju(e,o))),t===1)throw n=ai,lo(e,0),Lr(e,r),dn(e,lt()),n;if(t===6)Lr(e,r);else{if(o=e.current.alternate,!(r&30)&&!p1(o)&&(t=Al(e,r),t===2&&(a=uu(e),a!==0&&(r=a,t=ju(e,a))),t===1))throw n=ai,lo(e,0),Lr(e,r),dn(e,lt()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(H(345));case 2:to(e,an,pr);break;case 3:if(Lr(e,r),(r&130023424)===r&&(t=od+500-lt(),10<t)){if(vl(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Yt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=hu(to.bind(null,e,an,pr),t);break}to(e,an,pr);break;case 4:if(Lr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Wn(r);a=1<<i,i=t[i],i>o&&(o=i),r&=~a}if(r=o,r=lt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*f1(r/1960))-r,10<r){e.timeoutHandle=hu(to.bind(null,e,an,pr),r);break}to(e,an,pr);break;case 5:to(e,an,pr);break;default:throw Error(H(329))}}}return dn(e,lt()),e.callbackNode===n?Bg.bind(null,e):null}function ju(e,t){var n=za;return e.current.memoizedState.isDehydrated&&(lo(e,t).flags|=256),e=Al(e,t),e!==2&&(t=an,an=n,t!==null&&Fu(t)),e}function Fu(e){an===null?an=e:an.push.apply(an,e)}function p1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!Gn(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Lr(e,t){for(t&=~rd,t&=~Zl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Wn(t),r=1<<n;e[n]=-1,t&=~r}}function Cf(e){if(_e&6)throw Error(H(327));ea();var t=vl(e,0);if(!(t&1))return dn(e,lt()),null;var n=Al(e,t);if(e.tag!==0&&n===2){var r=uu(e);r!==0&&(t=r,n=ju(e,r))}if(n===1)throw n=ai,lo(e,0),Lr(e,t),dn(e,lt()),n;if(n===6)throw Error(H(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,to(e,an,pr),dn(e,lt()),null}function ad(e,t){var n=_e;_e|=1;try{return e(t)}finally{_e=n,_e===0&&(la=lt()+500,Gl&&Xr())}}function mo(e){Dr!==null&&Dr.tag===0&&!(_e&6)&&ea();var t=_e;_e|=1;var n=In.transition,r=Ae;try{if(In.transition=null,Ae=1,e)return e()}finally{Ae=r,In.transition=n,_e=t,!(_e&6)&&Xr()}}function id(){gn=Vo.current,He(Vo)}function lo(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,U0(n)),pt!==null)for(n=pt.return;n!==null;){var r=n;switch($c(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xl();break;case 3:aa(),He(un),He(Vt),Yc();break;case 5:Gc(r);break;case 4:aa();break;case 13:He(Qe);break;case 19:He(Qe);break;case 10:Vc(r.type._context);break;case 22:case 23:id()}n=n.return}if(It=e,pt=e=Vr(e.current,null),Rt=gn=t,xt=0,ai=null,rd=Zl=po=0,an=za=null,ao!==null){for(t=0;t<ao.length;t++)if(n=ao[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,a=n.pending;if(a!==null){var i=a.next;a.next=o,r.next=i}n.pending=r}ao=null}return e}function Hg(e,t){do{var n=pt;try{if(Uc(),ol.current=_l,Il){for(var r=Ze.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Il=!1}if(fo=0,kt=wt=Ze=null,ja=!1,ni=0,nd.current=null,n===null||n.return===null){xt=1,ai=t,pt=null;break}e:{var a=e,i=n.return,l=n,s=t;if(t=Rt,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,p=l,d=p.tag;if(!(p.mode&1)&&(d===0||d===11||d===15)){var f=p.alternate;f?(p.updateQueue=f.updateQueue,p.memoizedState=f.memoizedState,p.lanes=f.lanes):(p.updateQueue=null,p.memoizedState=null)}var b=pf(i);if(b!==null){b.flags&=-257,mf(b,i,l,a,t),b.mode&1&&ff(a,u,t),t=b,s=u;var x=t.updateQueue;if(x===null){var m=new Set;m.add(s),t.updateQueue=m}else x.add(s);break e}else{if(!(t&1)){ff(a,u,t),ld();break e}s=Error(H(426))}}else if(Ke&&l.mode&1){var O=pf(i);if(O!==null){!(O.flags&65536)&&(O.flags|=256),mf(O,i,l,a,t),Bc(ia(s,l));break e}}a=s=ia(s,l),xt!==4&&(xt=2),za===null?za=[a]:za.push(a),a=i;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var h=Pg(a,s,t);af(a,h);break e;case 1:l=s;var g=a.type,v=a.stateNode;if(!(a.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Hr===null||!Hr.has(v)))){a.flags|=65536,t&=-t,a.lanes|=t;var S=Cg(a,l,t);af(a,S);break e}}a=a.return}while(a!==null)}Kg(n)}catch(C){t=C,pt===n&&n!==null&&(pt=n=n.return);continue}break}while(!0)}function Ug(){var e=Nl.current;return Nl.current=_l,e===null?_l:e}function ld(){(xt===0||xt===3||xt===2)&&(xt=4),It===null||!(po&268435455)&&!(Zl&268435455)||Lr(It,Rt)}function Al(e,t){var n=_e;_e|=2;var r=Ug();(It!==e||Rt!==t)&&(pr=null,lo(e,t));do try{m1();break}catch(o){Hg(e,o)}while(!0);if(Uc(),_e=n,Nl.current=r,pt!==null)throw Error(H(261));return It=null,Rt=0,xt}function m1(){for(;pt!==null;)Vg(pt)}function g1(){for(;pt!==null&&!$h();)Vg(pt)}function Vg(e){var t=qg(e.alternate,e,gn);e.memoizedProps=e.pendingProps,t===null?Kg(e):pt=t,nd.current=null}function Kg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=s1(n,t),n!==null){n.flags&=32767,pt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{xt=6,pt=null;return}}else if(n=l1(n,t,gn),n!==null){pt=n;return}if(t=t.sibling,t!==null){pt=t;return}pt=t=e}while(t!==null);xt===0&&(xt=5)}function to(e,t,n){var r=Ae,o=In.transition;try{In.transition=null,Ae=1,v1(e,t,n,r)}finally{In.transition=o,Ae=r}return null}function v1(e,t,n,r){do ea();while(Dr!==null);if(_e&6)throw Error(H(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(H(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Xh(e,a),e===It&&(pt=It=null,Rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Bi||(Bi=!0,Gg(gl,function(){return ea(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=In.transition,In.transition=null;var i=Ae;Ae=1;var l=_e;_e|=4,nd.current=null,c1(e,n),zg(n,e),M0(gu),hl=!!mu,gu=mu=null,e.current=n,d1(n),Bh(),_e=l,Ae=i,In.transition=a}else e.current=n;if(Bi&&(Bi=!1,Dr=e,Ll=o),a=e.pendingLanes,a===0&&(Hr=null),Vh(n.stateNode),dn(e,lt()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Rl)throw Rl=!1,e=Du,Du=null,e;return Ll&1&&e.tag!==0&&ea(),a=e.pendingLanes,a&1?e===Mu?$a++:($a=0,Mu=e):$a=0,Xr(),null}function ea(){if(Dr!==null){var e=Pm(Ll),t=In.transition,n=Ae;try{if(In.transition=null,Ae=16>e?16:e,Dr===null)var r=!1;else{if(e=Dr,Dr=null,Ll=0,_e&6)throw Error(H(331));var o=_e;for(_e|=4,Y=e.current;Y!==null;){var a=Y,i=a.child;if(Y.flags&16){var l=a.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(Y=u;Y!==null;){var p=Y;switch(p.tag){case 0:case 11:case 15:Fa(8,p,a)}var d=p.child;if(d!==null)d.return=p,Y=d;else for(;Y!==null;){p=Y;var f=p.sibling,b=p.return;if(Mg(p),p===u){Y=null;break}if(f!==null){f.return=b,Y=f;break}Y=b}}}var x=a.alternate;if(x!==null){var m=x.child;if(m!==null){x.child=null;do{var O=m.sibling;m.sibling=null,m=O}while(m!==null)}}Y=a}}if(a.subtreeFlags&2064&&i!==null)i.return=a,Y=i;else e:for(;Y!==null;){if(a=Y,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Fa(9,a,a.return)}var h=a.sibling;if(h!==null){h.return=a.return,Y=h;break e}Y=a.return}}var g=e.current;for(Y=g;Y!==null;){i=Y;var v=i.child;if(i.subtreeFlags&2064&&v!==null)v.return=i,Y=v;else e:for(i=g;Y!==null;){if(l=Y,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ql(9,l)}}catch(C){et(l,l.return,C)}if(l===i){Y=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,Y=S;break e}Y=l.return}}if(_e=o,Xr(),rr&&typeof rr.onPostCommitFiberRoot=="function")try{rr.onPostCommitFiberRoot(Ul,e)}catch{}r=!0}return r}finally{Ae=n,In.transition=t}}return!1}function kf(e,t,n){t=ia(n,t),t=Pg(e,t,1),e=Br(e,t,1),t=Yt(),e!==null&&(wi(e,1,t),dn(e,t))}function et(e,t,n){if(e.tag===3)kf(e,e,n);else for(;t!==null;){if(t.tag===3){kf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Hr===null||!Hr.has(r))){e=ia(n,e),e=Cg(t,e,1),t=Br(t,e,1),e=Yt(),t!==null&&(wi(t,1,e),dn(t,e));break}}t=t.return}}function h1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Yt(),e.pingedLanes|=e.suspendedLanes&n,It===e&&(Rt&n)===n&&(xt===4||xt===3&&(Rt&130023424)===Rt&&500>lt()-od?lo(e,0):rd|=n),dn(e,t)}function Wg(e,t){t===0&&(e.mode&1?(t=Ni,Ni<<=1,!(Ni&130023424)&&(Ni=4194304)):t=1);var n=Yt();e=Sr(e,t),e!==null&&(wi(e,t,n),dn(e,n))}function y1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Wg(e,n)}function b1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(t),Wg(e,n)}var qg;qg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||un.current)sn=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return sn=!1,i1(e,t,n);sn=!!(e.flags&131072)}else sn=!1,Ke&&t.flags&1048576&&Qm(t,Ol,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;il(e,t),e=t.pendingProps;var o=na(t,Vt.current);Jo(t,n),o=Qc(null,t,r,e,o,n);var a=Zc();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,cn(r)?(a=!0,Sl(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Wc(t),o.updater=Xl,t.stateNode=o,o._reactInternals=t,Ou(t,r,e,n),t=ku(null,t,r,!0,a,n)):(t.tag=0,Ke&&a&&zc(t),Gt(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(il(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=x1(r),e=Hn(r,e),o){case 0:t=Cu(null,t,r,e,n);break e;case 1:t=hf(null,t,r,e,n);break e;case 11:t=gf(null,t,r,e,n);break e;case 14:t=vf(null,t,r,Hn(r.type,e),n);break e}throw Error(H(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Hn(r,o),Cu(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Hn(r,o),hf(e,t,r,o,n);case 3:e:{if(_g(t),e===null)throw Error(H(387));r=t.pendingProps,a=t.memoizedState,o=a.element,rg(e,t),kl(t,r,null,n);var i=t.memoizedState;if(r=i.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=ia(Error(H(423)),t),t=yf(e,t,r,n,o);break e}else if(r!==o){o=ia(Error(H(424)),t),t=yf(e,t,r,n,o);break e}else for(vn=$r(t.stateNode.containerInfo.firstChild),hn=t,Ke=!0,Vn=null,n=tg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ra(),r===o){t=Er(e,t,n);break e}Gt(e,t,r,n)}t=t.child}return t;case 5:return og(t),e===null&&xu(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,i=o.children,vu(r,o)?i=null:a!==null&&vu(r,a)&&(t.flags|=32),Ig(e,t),Gt(e,t,i,n),t.child;case 6:return e===null&&xu(t),null;case 13:return Ng(e,t,n);case 4:return qc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=oa(t,null,r,n):Gt(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Hn(r,o),gf(e,t,r,o,n);case 7:return Gt(e,t,t.pendingProps,n),t.child;case 8:return Gt(e,t,t.pendingProps.children,n),t.child;case 12:return Gt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,i=o.value,ze(Pl,r._currentValue),r._currentValue=i,a!==null)if(Gn(a.value,i)){if(a.children===o.children&&!un.current){t=Er(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){i=a.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(a.tag===1){s=br(-1,n&-n),s.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s}}a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Su(a.return,n,t),l.lanes|=n;break}s=s.next}}else if(a.tag===10)i=a.type===t.type?null:a.child;else if(a.tag===18){if(i=a.return,i===null)throw Error(H(341));i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Su(i,n,t),i=a.sibling}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}Gt(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Jo(t,n),o=_n(o),r=r(o),t.flags|=1,Gt(e,t,r,n),t.child;case 14:return r=t.type,o=Hn(r,t.pendingProps),o=Hn(r.type,o),vf(e,t,r,o,n);case 15:return kg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Hn(r,o),il(e,t),t.tag=1,cn(r)?(e=!0,Sl(t)):e=!1,Jo(t,n),Og(t,r,o),Ou(t,r,o,n),ku(null,t,r,!0,e,n);case 19:return Rg(e,t,n);case 22:return Tg(e,t,n)}throw Error(H(156,t.tag))};function Gg(e,t){return xm(e,t)}function w1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(e,t,n,r){return new w1(e,t,n,r)}function sd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function x1(e){if(typeof e=="function")return sd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===kc)return 11;if(e===Tc)return 14}return 2}function Vr(e,t){var n=e.alternate;return n===null?(n=Tn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ul(e,t,n,r,o,a){var i=2;if(r=e,typeof e=="function")sd(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Ao:return so(n.children,o,a,t);case Cc:i=8,o|=8;break;case Gs:return e=Tn(12,n,t,o|2),e.elementType=Gs,e.lanes=a,e;case Ys:return e=Tn(13,n,t,o),e.elementType=Ys,e.lanes=a,e;case Xs:return e=Tn(19,n,t,o),e.elementType=Xs,e.lanes=a,e;case om:return Jl(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case nm:i=10;break e;case rm:i=9;break e;case kc:i=11;break e;case Tc:i=14;break e;case Ir:i=16,r=null;break e}throw Error(H(130,e==null?e:typeof e,""))}return t=Tn(i,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function so(e,t,n,r){return e=Tn(7,e,r,t),e.lanes=n,e}function Jl(e,t,n,r){return e=Tn(22,e,r,t),e.elementType=om,e.lanes=n,e.stateNode={isHidden:!1},e}function $s(e,t,n){return e=Tn(6,e,null,t),e.lanes=n,e}function Bs(e,t,n){return t=Tn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function S1(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xs(0),this.expirationTimes=xs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xs(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ud(e,t,n,r,o,a,i,l,s){return e=new S1(e,t,n,l,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Tn(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wc(a),e}function E1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Lo,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Yg(e){if(!e)return qr;e=e._reactInternals;e:{if(ho(e)!==e||e.tag!==1)throw Error(H(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(cn(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(H(171))}if(e.tag===1){var n=e.type;if(cn(n))return Ym(e,n,t)}return t}function Xg(e,t,n,r,o,a,i,l,s){return e=ud(n,r,!0,e,o,a,i,l,s),e.context=Yg(null),n=e.current,r=Yt(),o=Ur(n),a=br(r,o),a.callback=t??null,Br(n,a,o),e.current.lanes=o,wi(e,o,r),dn(e,r),e}function es(e,t,n,r){var o=t.current,a=Yt(),i=Ur(o);return n=Yg(n),t.context===null?t.context=n:t.pendingContext=n,t=br(a,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Br(o,t,i),e!==null&&(qn(e,o,i,a),rl(e,o,i)),i}function Dl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Tf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cd(e,t){Tf(e,t),(e=e.alternate)&&Tf(e,t)}function O1(){return null}var Qg=typeof reportError=="function"?reportError:function(e){console.error(e)};function dd(e){this._internalRoot=e}ts.prototype.render=dd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(H(409));es(e,t,null,null)};ts.prototype.unmount=dd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mo(function(){es(null,e,null,null)}),t[xr]=null}};function ts(e){this._internalRoot=e}ts.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rr.length&&t!==0&&t<Rr[n].priority;n++);Rr.splice(n,0,e),n===0&&_m(e)}};function fd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function If(){}function P1(e,t,n,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var u=Dl(i);a.call(u)}}var i=Xg(t,r,e,0,null,!1,!1,"",If);return e._reactRootContainer=i,e[xr]=i.current,Qa(e.nodeType===8?e.parentNode:e),mo(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=Dl(s);l.call(u)}}var s=ud(e,0,!1,null,null,!1,!1,"",If);return e._reactRootContainer=s,e[xr]=s.current,Qa(e.nodeType===8?e.parentNode:e),mo(function(){es(t,s,n,r)}),s}function rs(e,t,n,r,o){var a=n._reactRootContainer;if(a){var i=a;if(typeof o=="function"){var l=o;o=function(){var s=Dl(i);l.call(s)}}es(t,i,e,o)}else i=P1(n,t,e,o,r);return Dl(i)}Cm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ka(t.pendingLanes);n!==0&&(Nc(t,n|1),dn(t,lt()),!(_e&6)&&(la=lt()+500,Xr()))}break;case 13:mo(function(){var r=Sr(e,1);if(r!==null){var o=Yt();qn(r,e,1,o)}}),cd(e,1)}};Rc=function(e){if(e.tag===13){var t=Sr(e,134217728);if(t!==null){var n=Yt();qn(t,e,134217728,n)}cd(e,134217728)}};km=function(e){if(e.tag===13){var t=Ur(e),n=Sr(e,t);if(n!==null){var r=Yt();qn(n,e,t,r)}cd(e,t)}};Tm=function(){return Ae};Im=function(e,t){var n=Ae;try{return Ae=e,t()}finally{Ae=n}};iu=function(e,t,n){switch(t){case"input":if(Js(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ql(r);if(!o)throw Error(H(90));im(r),Js(r,o)}}}break;case"textarea":sm(e,n);break;case"select":t=n.value,t!=null&&Yo(e,!!n.multiple,t,!1)}};gm=ad;vm=mo;var C1={usingClientEntryPoint:!1,Events:[Si,Fo,ql,pm,mm,ad]},Ea={findFiberByHostInstance:oo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},k1={bundleType:Ea.bundleType,version:Ea.version,rendererPackageName:Ea.rendererPackageName,rendererConfig:Ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Or.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=bm(e),e===null?null:e.stateNode},findFiberByHostInstance:Ea.findFiberByHostInstance||O1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hi.isDisabled&&Hi.supportsFiber)try{Ul=Hi.inject(k1),rr=Hi}catch{}}bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C1;bn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fd(t))throw Error(H(200));return E1(e,t,null,n)};bn.createRoot=function(e,t){if(!fd(e))throw Error(H(299));var n=!1,r="",o=Qg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ud(e,1,!1,null,null,n,!1,r,o),e[xr]=t.current,Qa(e.nodeType===8?e.parentNode:e),new dd(t)};bn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(H(188)):(e=Object.keys(e).join(","),Error(H(268,e)));return e=bm(t),e=e===null?null:e.stateNode,e};bn.flushSync=function(e){return mo(e)};bn.hydrate=function(e,t,n){if(!ns(t))throw Error(H(200));return rs(null,e,t,!0,n)};bn.hydrateRoot=function(e,t,n){if(!fd(e))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,o=!1,a="",i=Qg;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Xg(t,null,e,1,n??null,o,!1,a,i),e[xr]=t.current,Qa(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ts(t)};bn.render=function(e,t,n){if(!ns(t))throw Error(H(200));return rs(null,e,t,!1,n)};bn.unmountComponentAtNode=function(e){if(!ns(e))throw Error(H(40));return e._reactRootContainer?(mo(function(){rs(null,null,e,!1,function(){e._reactRootContainer=null,e[xr]=null})}),!0):!1};bn.unstable_batchedUpdates=ad;bn.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ns(n))throw Error(H(200));if(e==null||e._reactInternals===void 0)throw Error(H(38));return rs(e,t,n,!1,r)};bn.version="18.3.1-next-f1338f8080-20240426";function Zg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zg)}catch(e){console.error(e)}}Zg(),Zp.exports=bn;var Jg=Zp.exports;const Ia=$p(Jg);var ev,_f=Jg;ev=_f.createRoot,_f.hydrateRoot;var T1={};function I1(e){if(Array.isArray(e))return e}function _1(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,a,i,l=[],s=!0,u=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(s=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(p){u=!0,o=p}finally{try{if(!s&&n.return!=null&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}function zu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function tv(e,t){if(e){if(typeof e=="string")return zu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return zu(e,t)}}function N1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cl(e,t){return I1(e)||_1(e,t)||tv(e,t)||N1()}function Tt(e){"@babel/helpers - typeof";return Tt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Tt(e)}function ue(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(t){for(var r=[],o=0;o<t.length;o++){var a=t[o];if(a){var i=Tt(a);if(i==="string"||i==="number")r.push(a);else if(i==="object"){var l=Array.isArray(a)?a:Object.entries(a).map(function(s){var u=cl(s,2),p=u[0],d=u[1];return d?p:null});r=l.length?r.concat(l.filter(function(s){return!!s})):r}}}return r.join(" ").trim()}}function R1(e){if(Array.isArray(e))return zu(e)}function L1(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function A1(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ml(e){return R1(e)||L1(e)||tv(e)||A1()}function pd(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function D1(e,t){if(Tt(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Tt(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function nv(e){var t=D1(e,"string");return Tt(t)==="symbol"?t:String(t)}function M1(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,nv(r.key),r)}}function md(e,t,n){return n&&M1(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function os(e,t,n){return t=nv(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Hs(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=j1(e))||t){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(u){throw u},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,i=!1,l;return{s:function(){n=n.call(e)},n:function(){var u=n.next();return a=u.done,u},e:function(u){i=!0,l=u},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(i)throw l}}}}function j1(e,t){if(e){if(typeof e=="string")return Nf(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Nf(e,t)}}function Nf(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var K=function(){function e(){pd(this,e)}return md(e,null,[{key:"innerWidth",value:function(n){if(n){var r=n.offsetWidth,o=getComputedStyle(n);return r=r+(parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)),r}return 0}},{key:"width",value:function(n){if(n){var r=n.offsetWidth,o=getComputedStyle(n);return r=r-(parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)),r}return 0}},{key:"getBrowserLanguage",value:function(){return navigator.userLanguage||navigator.languages&&navigator.languages.length&&navigator.languages[0]||navigator.language||navigator.browserLanguage||navigator.systemLanguage||"en"}},{key:"getWindowScrollTop",value:function(){var n=document.documentElement;return(window.pageYOffset||n.scrollTop)-(n.clientTop||0)}},{key:"getWindowScrollLeft",value:function(){var n=document.documentElement;return(window.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}},{key:"getOuterWidth",value:function(n,r){if(n){var o=n.getBoundingClientRect().width||n.offsetWidth;if(r){var a=getComputedStyle(n);o=o+(parseFloat(a.marginLeft)+parseFloat(a.marginRight))}return o}return 0}},{key:"getOuterHeight",value:function(n,r){if(n){var o=n.getBoundingClientRect().height||n.offsetHeight;if(r){var a=getComputedStyle(n);o=o+(parseFloat(a.marginTop)+parseFloat(a.marginBottom))}return o}return 0}},{key:"getClientHeight",value:function(n,r){if(n){var o=n.clientHeight;if(r){var a=getComputedStyle(n);o=o+(parseFloat(a.marginTop)+parseFloat(a.marginBottom))}return o}return 0}},{key:"getClientWidth",value:function(n,r){if(n){var o=n.clientWidth;if(r){var a=getComputedStyle(n);o=o+(parseFloat(a.marginLeft)+parseFloat(a.marginRight))}return o}return 0}},{key:"getViewport",value:function(){var n=window,r=document,o=r.documentElement,a=r.getElementsByTagName("body")[0],i=n.innerWidth||o.clientWidth||a.clientWidth,l=n.innerHeight||o.clientHeight||a.clientHeight;return{width:i,height:l}}},{key:"getOffset",value:function(n){if(n){var r=n.getBoundingClientRect();return{top:r.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:r.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}},{key:"index",value:function(n){if(n)for(var r=n.parentNode.childNodes,o=0,a=0;a<r.length;a++){if(r[a]===n)return o;r[a].nodeType===1&&o++}return-1}},{key:"addMultipleClasses",value:function(n,r){if(n&&r)if(n.classList)for(var o=r.split(" "),a=0;a<o.length;a++)n.classList.add(o[a]);else for(var i=r.split(" "),l=0;l<i.length;l++)n.className=n.className+(" "+i[l])}},{key:"removeMultipleClasses",value:function(n,r){if(n&&r)if(n.classList)for(var o=r.split(" "),a=0;a<o.length;a++)n.classList.remove(o[a]);else for(var i=r.split(" "),l=0;l<i.length;l++)n.className=n.className.replace(new RegExp("(^|\\b)"+i[l].split(" ").join("|")+"(\\b|$)","gi")," ")}},{key:"addClass",value:function(n,r){n&&r&&(n.classList?n.classList.add(r):n.className=n.className+(" "+r))}},{key:"removeClass",value:function(n,r){n&&r&&(n.classList?n.classList.remove(r):n.className=n.className.replace(new RegExp("(^|\\b)"+r.split(" ").join("|")+"(\\b|$)","gi")," "))}},{key:"hasClass",value:function(n,r){return n?n.classList?n.classList.contains(r):new RegExp("(^| )"+r+"( |$)","gi").test(n.className):!1}},{key:"addStyles",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};n&&Object.entries(r).forEach(function(o){var a=cl(o,2),i=a[0],l=a[1];return n.style[i]=l})}},{key:"find",value:function(n,r){return n?Array.from(n.querySelectorAll(r)):[]}},{key:"findSingle",value:function(n,r){return n?n.querySelector(r):null}},{key:"setAttributes",value:function(n){var r=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(n){var a=function(l,s){var u,p,d=n!=null&&(u=n.$attrs)!==null&&u!==void 0&&u[l]?[n==null||(p=n.$attrs)===null||p===void 0?void 0:p[l]]:[];return[s].flat().reduce(function(f,b){if(b!=null){var x=Tt(b);if(x==="string"||x==="number")f.push(b);else if(x==="object"){var m=Array.isArray(b)?a(l,b):Object.entries(b).map(function(O){var h=cl(O,2),g=h[0],v=h[1];return l==="style"&&(v||v===0)?"".concat(g.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),":").concat(v):v?g:void 0});f=m.length?f.concat(m.filter(function(O){return!!O})):f}}return f},d)};Object.entries(o).forEach(function(i){var l=cl(i,2),s=l[0],u=l[1];if(u!=null){var p=s.match(/^on(.+)/);p?n.addEventListener(p[1].toLowerCase(),u):s==="p-bind"?r.setAttributes(n,u):(u=s==="class"?Ml(new Set(a("class",u))).join(" ").trim():s==="style"?a("style",u).join(";").trim():u,(n.$attrs=n.$attrs||{})&&(n.$attrs[s]=u),n.setAttribute(s,u))}})}}},{key:"getAttribute",value:function(n,r){if(n){var o=n.getAttribute(r);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}},{key:"isAttributeEquals",value:function(n,r,o){return n?this.getAttribute(n,r)===o:!1}},{key:"isAttributeNotEquals",value:function(n,r,o){return!this.isAttributeEquals(n,r,o)}},{key:"getHeight",value:function(n){if(n){var r=n.offsetHeight,o=getComputedStyle(n);return r=r-(parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth)),r}return 0}},{key:"getWidth",value:function(n){if(n){var r=n.offsetWidth,o=getComputedStyle(n);return r=r-(parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth)),r}return 0}},{key:"alignOverlay",value:function(n,r,o){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0;n&&r&&(o==="self"?this.relativePosition(n,r):(a&&(n.style.minWidth=e.getOuterWidth(r)+"px"),this.absolutePosition(n,r)))}},{key:"absolutePosition",value:function(n,r){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"left";if(n&&r){var a=n.offsetParent?{width:n.offsetWidth,height:n.offsetHeight}:this.getHiddenElementDimensions(n),i=a.height,l=a.width,s=r.offsetHeight,u=r.offsetWidth,p=r.getBoundingClientRect(),d=this.getWindowScrollTop(),f=this.getWindowScrollLeft(),b=this.getViewport(),x,m;p.top+s+i>b.height?(x=p.top+d-i,x<0&&(x=d),n.style.transformOrigin="bottom"):(x=s+p.top+d,n.style.transformOrigin="top");var O=p.left,h=o==="left"?0:l-u;O+u+l>b.width?m=Math.max(0,O+f+u-l):m=O-h+f,n.style.top=x+"px",n.style.left=m+"px"}}},{key:"relativePosition",value:function(n,r){if(n&&r){var o=n.offsetParent?{width:n.offsetWidth,height:n.offsetHeight}:this.getHiddenElementDimensions(n),a=r.offsetHeight,i=r.getBoundingClientRect(),l=this.getViewport(),s,u;i.top+a+o.height>l.height?(s=-1*o.height,i.top+s<0&&(s=-1*i.top),n.style.transformOrigin="bottom"):(s=a,n.style.transformOrigin="top"),o.width>l.width?u=i.left*-1:i.left+o.width>l.width?u=(i.left+o.width-l.width)*-1:u=0,n.style.top=s+"px",n.style.left=u+"px"}}},{key:"flipfitCollision",value:function(n,r){var o=this,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"left top",i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"left bottom",l=arguments.length>4?arguments[4]:void 0;if(n&&r){var s=r.getBoundingClientRect(),u=this.getViewport(),p=a.split(" "),d=i.split(" "),f=function(h,g){return g?+h.substring(h.search(/(\+|-)/g))||0:h.substring(0,h.search(/(\+|-)/g))||h},b={my:{x:f(p[0]),y:f(p[1]||p[0]),offsetX:f(p[0],!0),offsetY:f(p[1]||p[0],!0)},at:{x:f(d[0]),y:f(d[1]||d[0]),offsetX:f(d[0],!0),offsetY:f(d[1]||d[0],!0)}},x={left:function(){var h=b.my.offsetX+b.at.offsetX;return h+s.left+(b.my.x==="left"?0:-1*(b.my.x==="center"?o.getOuterWidth(n)/2:o.getOuterWidth(n)))},top:function(){var h=b.my.offsetY+b.at.offsetY;return h+s.top+(b.my.y==="top"?0:-1*(b.my.y==="center"?o.getOuterHeight(n)/2:o.getOuterHeight(n)))}},m={count:{x:0,y:0},left:function(){var h=x.left(),g=e.getWindowScrollLeft();n.style.left=h+g+"px",this.count.x===2?(n.style.left=g+"px",this.count.x=0):h<0&&(this.count.x++,b.my.x="left",b.at.x="right",b.my.offsetX*=-1,b.at.offsetX*=-1,this.right())},right:function(){var h=x.left()+e.getOuterWidth(r),g=e.getWindowScrollLeft();n.style.left=h+g+"px",this.count.x===2?(n.style.left=u.width-e.getOuterWidth(n)+g+"px",this.count.x=0):h+e.getOuterWidth(n)>u.width&&(this.count.x++,b.my.x="right",b.at.x="left",b.my.offsetX*=-1,b.at.offsetX*=-1,this.left())},top:function(){var h=x.top(),g=e.getWindowScrollTop();n.style.top=h+g+"px",this.count.y===2?(n.style.left=g+"px",this.count.y=0):h<0&&(this.count.y++,b.my.y="top",b.at.y="bottom",b.my.offsetY*=-1,b.at.offsetY*=-1,this.bottom())},bottom:function(){var h=x.top()+e.getOuterHeight(r),g=e.getWindowScrollTop();n.style.top=h+g+"px",this.count.y===2?(n.style.left=u.height-e.getOuterHeight(n)+g+"px",this.count.y=0):h+e.getOuterHeight(r)>u.height&&(this.count.y++,b.my.y="bottom",b.at.y="top",b.my.offsetY*=-1,b.at.offsetY*=-1,this.top())},center:function(h){if(h==="y"){var g=x.top()+e.getOuterHeight(r)/2;n.style.top=g+e.getWindowScrollTop()+"px",g<0?this.bottom():g+e.getOuterHeight(r)>u.height&&this.top()}else{var v=x.left()+e.getOuterWidth(r)/2;n.style.left=v+e.getWindowScrollLeft()+"px",v<0?this.left():v+e.getOuterWidth(n)>u.width&&this.right()}}};m[b.at.x]("x"),m[b.at.y]("y"),this.isFunction(l)&&l(b)}}},{key:"findCollisionPosition",value:function(n){if(n){var r=n==="top"||n==="bottom",o=n==="left"?"right":"left",a=n==="top"?"bottom":"top";return r?{axis:"y",my:"center ".concat(a),at:"center ".concat(n)}:{axis:"x",my:"".concat(o," center"),at:"".concat(n," center")}}}},{key:"getParents",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return n.parentNode===null?r:this.getParents(n.parentNode,r.concat([n.parentNode]))}},{key:"getScrollableParents",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=[];if(n){var a=this.getParents(n),i=/(auto|scroll)/,l=function(v){var S=v?getComputedStyle(v):null;return S&&(i.test(S.getPropertyValue("overflow"))||i.test(S.getPropertyValue("overflow-x"))||i.test(S.getPropertyValue("overflow-y")))},s=function(v){r?o.push(v.nodeName==="BODY"||v.nodeName==="HTML"||v.nodeType===9?window:v):o.push(v)},u=Hs(a),p;try{for(u.s();!(p=u.n()).done;){var d=p.value,f=d.nodeType===1&&d.dataset.scrollselectors;if(f){var b=f.split(","),x=Hs(b),m;try{for(x.s();!(m=x.n()).done;){var O=m.value,h=this.findSingle(d,O);h&&l(h)&&s(h)}}catch(g){x.e(g)}finally{x.f()}}d.nodeType===1&&l(d)&&s(d)}}catch(g){u.e(g)}finally{u.f()}}return o.some(function(g){return g===document.body||g===window})||o.push(window),o}},{key:"getHiddenElementOuterHeight",value:function(n){if(n){n.style.visibility="hidden",n.style.display="block";var r=n.offsetHeight;return n.style.display="none",n.style.visibility="visible",r}return 0}},{key:"getHiddenElementOuterWidth",value:function(n){if(n){n.style.visibility="hidden",n.style.display="block";var r=n.offsetWidth;return n.style.display="none",n.style.visibility="visible",r}return 0}},{key:"getHiddenElementDimensions",value:function(n){var r={};return n&&(n.style.visibility="hidden",n.style.display="block",r.width=n.offsetWidth,r.height=n.offsetHeight,n.style.display="none",n.style.visibility="visible"),r}},{key:"fadeIn",value:function(n,r){if(n){n.style.opacity=0;var o=+new Date,a=0,i=function(){a=+n.style.opacity+(new Date().getTime()-o)/r,n.style.opacity=a,o=+new Date,+a<1&&(window.requestAnimationFrame&&requestAnimationFrame(i)||setTimeout(i,16))};i()}}},{key:"fadeOut",value:function(n,r){if(n)var o=1,a=50,i=a/r,l=setInterval(function(){o=o-i,o<=0&&(o=0,clearInterval(l)),n.style.opacity=o},a)}},{key:"getUserAgent",value:function(){return navigator.userAgent}},{key:"isIOS",value:function(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}},{key:"isAndroid",value:function(){return/(android)/i.test(navigator.userAgent)}},{key:"isChrome",value:function(){return/(chrome)/i.test(navigator.userAgent)}},{key:"isClient",value:function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}},{key:"isTouchDevice",value:function(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}},{key:"isFunction",value:function(n){return!!(n&&n.constructor&&n.call&&n.apply)}},{key:"appendChild",value:function(n,r){if(this.isElement(r))r.appendChild(n);else if(r.el&&r.el.nativeElement)r.el.nativeElement.appendChild(n);else throw new Error("Cannot append "+r+" to "+n)}},{key:"removeChild",value:function(n,r){if(this.isElement(r))r.removeChild(n);else if(r.el&&r.el.nativeElement)r.el.nativeElement.removeChild(n);else throw new Error("Cannot remove "+n+" from "+r)}},{key:"isElement",value:function(n){return(typeof HTMLElement>"u"?"undefined":Tt(HTMLElement))==="object"?n instanceof HTMLElement:n&&Tt(n)==="object"&&n!==null&&n.nodeType===1&&typeof n.nodeName=="string"}},{key:"scrollInView",value:function(n,r){var o=getComputedStyle(n).getPropertyValue("border-top-width"),a=o?parseFloat(o):0,i=getComputedStyle(n).getPropertyValue("padding-top"),l=i?parseFloat(i):0,s=n.getBoundingClientRect(),u=r.getBoundingClientRect(),p=u.top+document.body.scrollTop-(s.top+document.body.scrollTop)-a-l,d=n.scrollTop,f=n.clientHeight,b=this.getOuterHeight(r);p<0?n.scrollTop=d+p:p+b>f&&(n.scrollTop=d+p-f+b)}},{key:"clearSelection",value:function(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}},{key:"calculateScrollbarWidth",value:function(n){if(n){var r=getComputedStyle(n);return n.offsetWidth-n.clientWidth-parseFloat(r.borderLeftWidth)-parseFloat(r.borderRightWidth)}if(this.calculatedScrollbarWidth!=null)return this.calculatedScrollbarWidth;var o=document.createElement("div");o.className="p-scrollbar-measure",document.body.appendChild(o);var a=o.offsetWidth-o.clientWidth;return document.body.removeChild(o),this.calculatedScrollbarWidth=a,a}},{key:"calculateBodyScrollbarWidth",value:function(){return window.innerWidth-document.documentElement.offsetWidth}},{key:"getBrowser",value:function(){if(!this.browser){var n=this.resolveUserAgent();this.browser={},n.browser&&(this.browser[n.browser]=!0,this.browser.version=n.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}},{key:"resolveUserAgent",value:function(){var n=navigator.userAgent.toLowerCase(),r=/(chrome)[ ]([\w.]+)/.exec(n)||/(webkit)[ ]([\w.]+)/.exec(n)||/(opera)(?:.*version|)[ ]([\w.]+)/.exec(n)||/(msie) ([\w.]+)/.exec(n)||n.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n)||[];return{browser:r[1]||"",version:r[2]||"0"}}},{key:"blockBodyScroll",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"p-overflow-hidden",r=!!document.body.style.getPropertyValue("--scrollbar-width");!r&&document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,n)}},{key:"unblockBodyScroll",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"p-overflow-hidden";document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,n)}},{key:"isVisible",value:function(n){return n&&(n.clientHeight!==0||n.getClientRects().length!==0||getComputedStyle(n).display!=="none")}},{key:"isExist",value:function(n){return!!(n!==null&&typeof n<"u"&&n.nodeName&&n.parentNode)}},{key:"getFocusableElements",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=e.find(n,'button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(r,`,
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(r,`,
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(r,`,
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(r,`,
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(r,`,
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(r,`,
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(r)),a=[],i=Hs(o),l;try{for(i.s();!(l=i.n()).done;){var s=l.value;getComputedStyle(s).display!=="none"&&getComputedStyle(s).visibility!=="hidden"&&a.push(s)}}catch(u){i.e(u)}finally{i.f()}return a}},{key:"getFirstFocusableElement",value:function(n,r){var o=e.getFocusableElements(n,r);return o.length>0?o[0]:null}},{key:"getLastFocusableElement",value:function(n,r){var o=e.getFocusableElements(n,r);return o.length>0?o[o.length-1]:null}},{key:"focus",value:function(n,r){var o=r===void 0?!0:!r;n&&document.activeElement!==n&&n.focus({preventScroll:o})}},{key:"focusFirstElement",value:function(n,r){if(n){var o=e.getFirstFocusableElement(n);return o&&e.focus(o,r),o}}},{key:"getCursorOffset",value:function(n,r,o,a){if(n){var i=getComputedStyle(n),l=document.createElement("div");l.style.position="absolute",l.style.top="0px",l.style.left="0px",l.style.visibility="hidden",l.style.pointerEvents="none",l.style.overflow=i.overflow,l.style.width=i.width,l.style.height=i.height,l.style.padding=i.padding,l.style.border=i.border,l.style.overflowWrap=i.overflowWrap,l.style.whiteSpace=i.whiteSpace,l.style.lineHeight=i.lineHeight,l.innerHTML=r.replace(/\r\n|\r|\n/g,"<br />");var s=document.createElement("span");s.textContent=a,l.appendChild(s);var u=document.createTextNode(o);l.appendChild(u),document.body.appendChild(l);var p=s.offsetLeft,d=s.offsetTop,f=s.clientHeight;return document.body.removeChild(l),{left:Math.abs(p-n.scrollLeft),top:Math.abs(d-n.scrollTop)+f}}return{top:"auto",left:"auto"}}},{key:"invokeElementMethod",value:function(n,r,o){n[r].apply(n,o)}},{key:"isClickable",value:function(n){var r=n.nodeName,o=n.parentElement&&n.parentElement.nodeName;return r==="INPUT"||r==="TEXTAREA"||r==="BUTTON"||r==="A"||o==="INPUT"||o==="TEXTAREA"||o==="BUTTON"||o==="A"||this.hasClass(n,"p-button")||this.hasClass(n.parentElement,"p-button")||this.hasClass(n.parentElement,"p-checkbox")||this.hasClass(n.parentElement,"p-radiobutton")}},{key:"applyStyle",value:function(n,r){if(typeof r=="string")n.style.cssText=r;else for(var o in r)n.style[o]=r[o]}},{key:"exportCSV",value:function(n,r){var o=new Blob([n],{type:"application/csv;charset=utf-8;"});if(window.navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(o,r+".csv");else{var a=e.saveAs({name:r+".csv",src:URL.createObjectURL(o)});a||(n="data:text/csv;charset=utf-8,"+n,window.open(encodeURI(n)))}}},{key:"saveAs",value:function(n){if(n){var r=document.createElement("a");if(r.download!==void 0){var o=n.name,a=n.src;return r.setAttribute("href",a),r.setAttribute("download",o),r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r),!0}}return!1}},{key:"createInlineStyle",value:function(n,r){var o=document.createElement("style");return e.addNonce(o,n),r||(r=document.head),r.appendChild(o),o}},{key:"removeInlineStyle",value:function(n){if(this.isExist(n)){try{n.parentNode.removeChild(n)}catch{}n=null}return n}},{key:"addNonce",value:function(n,r){try{r||(r=T1.REACT_APP_CSS_NONCE)}catch{}r&&n.setAttribute("nonce",r)}},{key:"getTargetElement",value:function(n){if(!n)return null;if(n==="document")return document;if(n==="window")return window;if(Tt(n)==="object"&&n.hasOwnProperty("current"))return this.isExist(n.current)?n.current:null;var r=function(i){return!!(i&&i.constructor&&i.call&&i.apply)},o=r(n)?n():n;return o&&o.nodeType===9||this.isExist(o)?o:null}},{key:"getAttributeNames",value:function(n){var r,o,a;for(o=[],a=n.attributes,r=0;r<a.length;++r)o.push(a[r].nodeName);return o.sort(),o}},{key:"isEqualElement",value:function(n,r){var o,a,i,l,s;if(o=e.getAttributeNames(n),a=e.getAttributeNames(r),o.join(",")!==a.join(","))return!1;for(var u=0;u<o.length;++u)if(i=o[u],i==="style")for(var p=n.style,d=r.style,f=/^\d+$/,b=0,x=Object.keys(p);b<x.length;b++){var m=x[b];if(!f.test(m)&&p[m]!==d[m])return!1}else if(n.getAttribute(i)!==r.getAttribute(i))return!1;for(l=n.firstChild,s=r.firstChild;l&&s;l=l.nextSibling,s=s.nextSibling){if(l.nodeType!==s.nodeType)return!1;if(l.nodeType===1){if(!e.isEqualElement(l,s))return!1}else if(l.nodeValue!==s.nodeValue)return!1}return!(l||s)}},{key:"hasCSSAnimation",value:function(n){if(n){var r=getComputedStyle(n),o=parseFloat(r.getPropertyValue("animation-duration")||"0");return o>0}return!1}},{key:"hasCSSTransition",value:function(n){if(n){var r=getComputedStyle(n),o=parseFloat(r.getPropertyValue("transition-duration")||"0");return o>0}return!1}}])}();os(K,"DATA_PROPS",["data-"]);os(K,"ARIA_PROPS",["aria","focus-target"]);function F1(){var e=new Map;return{on:function(n,r){var o=e.get(n);o?o.push(r):o=[r],e.set(n,o)},off:function(n,r){var o=e.get(n);o&&o.splice(o.indexOf(r)>>>0,1)},emit:function(n,r){var o=e.get(n);o&&o.slice().forEach(function(a){return a(r)})}}}function $u(){return $u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$u.apply(this,arguments)}function z1(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=$1(e))||t){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(u){throw u},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,i=!1,l;return{s:function(){n=n.call(e)},n:function(){var u=n.next();return a=u.done,u},e:function(u){i=!0,l=u},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(i)throw l}}}}function $1(e,t){if(e){if(typeof e=="string")return Rf(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Rf(e,t)}}function Rf(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var T=function(){function e(){pd(this,e)}return md(e,null,[{key:"equals",value:function(n,r,o){return o&&n&&Tt(n)==="object"&&r&&Tt(r)==="object"?this.deepEquals(this.resolveFieldData(n,o),this.resolveFieldData(r,o)):this.deepEquals(n,r)}},{key:"deepEquals",value:function(n,r){if(n===r)return!0;if(n&&r&&Tt(n)==="object"&&Tt(r)==="object"){var o=Array.isArray(n),a=Array.isArray(r),i,l,s;if(o&&a){if(l=n.length,l!==r.length)return!1;for(i=l;i--!==0;)if(!this.deepEquals(n[i],r[i]))return!1;return!0}if(o!==a)return!1;var u=n instanceof Date,p=r instanceof Date;if(u!==p)return!1;if(u&&p)return n.getTime()===r.getTime();var d=n instanceof RegExp,f=r instanceof RegExp;if(d!==f)return!1;if(d&&f)return n.toString()===r.toString();var b=Object.keys(n);if(l=b.length,l!==Object.keys(r).length)return!1;for(i=l;i--!==0;)if(!Object.prototype.hasOwnProperty.call(r,b[i]))return!1;for(i=l;i--!==0;)if(s=b[i],!this.deepEquals(n[s],r[s]))return!1;return!0}return n!==n&&r!==r}},{key:"resolveFieldData",value:function(n,r){if(!n||!r)return null;try{var o=n[r];if(this.isNotEmpty(o))return o}catch{}if(Object.keys(n).length){if(this.isFunction(r))return r(n);if(this.isNotEmpty(n[r]))return n[r];if(r.indexOf(".")===-1)return n[r];for(var a=r.split("."),i=n,l=0,s=a.length;l<s;++l){if(i==null)return null;i=i[a[l]]}return i}return null}},{key:"findDiffKeys",value:function(n,r){return!n||!r?{}:Object.keys(n).filter(function(o){return!r.hasOwnProperty(o)}).reduce(function(o,a){return o[a]=n[a],o},{})}},{key:"reduceKeys",value:function(n,r){var o={};return!n||!r||r.length===0||Object.keys(n).filter(function(a){return r.some(function(i){return a.startsWith(i)})}).forEach(function(a){o[a]=n[a],delete n[a]}),o}},{key:"reorderArray",value:function(n,r,o){n&&r!==o&&(o>=n.length&&(o=o%n.length,r=r%n.length),n.splice(o,0,n.splice(r,1)[0]))}},{key:"findIndexInList",value:function(n,r,o){var a=this;return r?o?r.findIndex(function(i){return a.equals(i,n,o)}):r.findIndex(function(i){return i===n}):-1}},{key:"getJSXElement",value:function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];return this.isFunction(n)?n.apply(void 0,o):n}},{key:"getItemValue",value:function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];return this.isFunction(n)?n.apply(void 0,o):n}},{key:"getProp",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n?n[r]:void 0;return a===void 0?o[r]:a}},{key:"getPropCaseInsensitive",value:function(n,r){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=this.toFlatCase(r);for(var i in n)if(n.hasOwnProperty(i)&&this.toFlatCase(i)===a)return n[i];for(var l in o)if(o.hasOwnProperty(l)&&this.toFlatCase(l)===a)return o[l]}},{key:"getMergedProps",value:function(n,r){return Object.assign({},r,n)}},{key:"getDiffProps",value:function(n,r){return this.findDiffKeys(n,r)}},{key:"getPropValue",value:function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];return this.isFunction(n)?n.apply(void 0,o):n}},{key:"getComponentProp",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.isNotEmpty(n)?this.getProp(n.props,r,o):void 0}},{key:"getComponentProps",value:function(n,r){return this.isNotEmpty(n)?this.getMergedProps(n.props,r):void 0}},{key:"getComponentDiffProps",value:function(n,r){return this.isNotEmpty(n)?this.getDiffProps(n.props,r):void 0}},{key:"isValidChild",value:function(n,r,o){if(n){var a,i=this.getComponentProp(n,"__TYPE")||(n.type?n.type.displayName:void 0);!i&&n!==null&&n!==void 0&&(a=n.type)!==null&&a!==void 0&&(a=a._payload)!==null&&a!==void 0&&a.value&&(i=n.type._payload.value.find(function(u){return u===r}));var l=i===r;try{var s}catch{}return l}return!1}},{key:"getRefElement",value:function(n){return n?Tt(n)==="object"&&n.hasOwnProperty("current")?n.current:n:null}},{key:"combinedRefs",value:function(n,r){n&&r&&(typeof r=="function"?r(n.current):r.current=n.current)}},{key:"removeAccents",value:function(n){return n&&n.search(/[\xC0-\xFF]/g)>-1&&(n=n.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),n}},{key:"toFlatCase",value:function(n){return this.isNotEmpty(n)&&this.isString(n)?n.replace(/(-|_)/g,"").toLowerCase():n}},{key:"toCapitalCase",value:function(n){return this.isNotEmpty(n)&&this.isString(n)?n[0].toUpperCase()+n.slice(1):n}},{key:"trim",value:function(n){return this.isNotEmpty(n)&&this.isString(n)?n.trim():n}},{key:"isEmpty",value:function(n){return n==null||n===""||Array.isArray(n)&&n.length===0||!(n instanceof Date)&&Tt(n)==="object"&&Object.keys(n).length===0}},{key:"isNotEmpty",value:function(n){return!this.isEmpty(n)}},{key:"isFunction",value:function(n){return!!(n&&n.constructor&&n.call&&n.apply)}},{key:"isObject",value:function(n){return n!==null&&n instanceof Object&&n.constructor===Object}},{key:"isDate",value:function(n){return n!==null&&n instanceof Date&&n.constructor===Date}},{key:"isArray",value:function(n){return n!==null&&Array.isArray(n)}},{key:"isString",value:function(n){return n!==null&&typeof n=="string"}},{key:"isPrintableCharacter",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return this.isNotEmpty(n)&&n.length===1&&n.match(/\S| /)}},{key:"isLetter",value:function(n){return/^[a-zA-Z\u00C0-\u017F]$/.test(n)}},{key:"isScalar",value:function(n){return n!=null&&(typeof n=="string"||typeof n=="number"||typeof n=="bigint"||typeof n=="boolean")}},{key:"findLast",value:function(n,r){var o;if(this.isNotEmpty(n))try{o=n.findLast(r)}catch{o=Ml(n).reverse().find(r)}return o}},{key:"findLastIndex",value:function(n,r){var o=-1;if(this.isNotEmpty(n))try{o=n.findLastIndex(r)}catch{o=n.lastIndexOf(Ml(n).reverse().find(r))}return o}},{key:"sort",value:function(n,r){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,a=arguments.length>3?arguments[3]:void 0,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1,l=this.compare(n,r,a,o),s=o;return(this.isEmpty(n)||this.isEmpty(r))&&(s=i===1?o:i),s*l}},{key:"compare",value:function(n,r,o){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,i=-1,l=this.isEmpty(n),s=this.isEmpty(r);return l&&s?i=0:l?i=a:s?i=-a:typeof n=="string"&&typeof r=="string"?i=o(n,r):i=n<r?-1:n>r?1:0,i}},{key:"localeComparator",value:function(n){return new Intl.Collator(n,{numeric:!0}).compare}},{key:"findChildrenByKey",value:function(n,r){var o=z1(n),a;try{for(o.s();!(a=o.n()).done;){var i=a.value;if(i.key===r)return i.children||[];if(i.children){var l=this.findChildrenByKey(i.children,r);if(l.length>0)return l}}}catch(s){o.e(s)}finally{o.f()}return[]}},{key:"mutateFieldData",value:function(n,r,o){if(!(Tt(n)!=="object"||typeof r!="string"))for(var a=r.split("."),i=n,l=0,s=a.length;l<s;++l){if(l+1-s===0){i[a[l]]=o;break}i[a[l]]||(i[a[l]]={}),i=i[a[l]]}}}])}();function Lf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function B1(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Lf(Object(n),!0).forEach(function(r){os(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Xt=function(){function e(){pd(this,e)}return md(e,null,[{key:"getJSXIcon",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=null;if(n!==null){var i=Tt(n),l=ue(r.className,i==="string"&&n);if(a=c.createElement("span",$u({},r,{className:l})),i!=="string"){var s=B1({iconProps:r,element:a},o);return T.getJSXElement(n,s)}}return a}}])}();function Af(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Df(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Af(Object(n),!0).forEach(function(r){os(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Af(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function jl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e){var n=function(i){return typeof i=="function"},r=t.classNameMergeFunction,o=n(r);return e.reduce(function(a,i){if(!i)return a;var l=function(){var p=i[s];if(s==="style")a.style=Df(Df({},a.style),i.style);else if(s==="className"){var d="";o?d=r(a.className,i.className):d=[a.className,i.className].join(" ").trim(),a.className=d||void 0}else if(n(p)){var f=a[s];a[s]=f?function(){f.apply(void 0,arguments),p.apply(void 0,arguments)}:p}else a[s]=p};for(var s in i)l();return a},{})}}function H1(){var e=[],t=function(l,s){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:999,p=o(l,s,u),d=p.value+(p.key===l?0:u)+1;return e.push({key:l,value:d}),d},n=function(l){e=e.filter(function(s){return s.value!==l})},r=function(l,s){return o(l,s).value},o=function(l,s){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;return Ml(e).reverse().find(function(p){return s?!0:p.key===l})||{key:l,value:u}},a=function(l){return l&&parseInt(l.style.zIndex,10)||0};return{get:a,set:function(l,s,u,p){s&&(s.style.zIndex=String(t(l,u,p)))},clear:function(l){l&&(n(Mr.get(l)),l.style.zIndex="")},getCurrent:function(l,s){return r(l,s)}}}var Mr=H1(),Ne=Object.freeze({STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter",CUSTOM:"custom"});function Mf(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=U1(e))||t){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(u){throw u},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,i=!1,l;return{s:function(){n=n.call(e)},n:function(){var u=n.next();return a=u.done,u},e:function(u){i=!0,l=u},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(i)throw l}}}}function U1(e,t){if(e){if(typeof e=="string")return jf(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jf(e,t)}}function jf(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Ff={filter:function(t,n,r,o,a){var i=[];if(!t)return i;var l=Mf(t),s;try{for(l.s();!(s=l.n()).done;){var u=s.value;if(typeof u=="string"){if(this.filters[o](u,r,a)){i.push(u);continue}}else{var p=Mf(n),d;try{for(p.s();!(d=p.n()).done;){var f=d.value,b=T.resolveFieldData(u,f);if(this.filters[o](b,r,a)){i.push(u);break}}}catch(x){p.e(x)}finally{p.f()}}}}catch(x){l.e(x)}finally{l.f()}return i},filters:{startsWith:function(t,n,r){if(n==null||n.trim()==="")return!0;if(t==null)return!1;var o=T.removeAccents(n.toString()).toLocaleLowerCase(r),a=T.removeAccents(t.toString()).toLocaleLowerCase(r);return a.slice(0,o.length)===o},contains:function(t,n,r){if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(t==null)return!1;var o=T.removeAccents(n.toString()).toLocaleLowerCase(r),a=T.removeAccents(t.toString()).toLocaleLowerCase(r);return a.indexOf(o)!==-1},notContains:function(t,n,r){if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(t==null)return!1;var o=T.removeAccents(n.toString()).toLocaleLowerCase(r),a=T.removeAccents(t.toString()).toLocaleLowerCase(r);return a.indexOf(o)===-1},endsWith:function(t,n,r){if(n==null||n.trim()==="")return!0;if(t==null)return!1;var o=T.removeAccents(n.toString()).toLocaleLowerCase(r),a=T.removeAccents(t.toString()).toLocaleLowerCase(r);return a.indexOf(o,a.length-o.length)!==-1},equals:function(t,n,r){return n==null||typeof n=="string"&&n.trim()===""?!0:t==null?!1:t.getTime&&n.getTime?t.getTime()===n.getTime():T.removeAccents(t.toString()).toLocaleLowerCase(r)===T.removeAccents(n.toString()).toLocaleLowerCase(r)},notEquals:function(t,n,r){return n==null||typeof n=="string"&&n.trim()===""||t==null?!0:t.getTime&&n.getTime?t.getTime()!==n.getTime():T.removeAccents(t.toString()).toLocaleLowerCase(r)!==T.removeAccents(n.toString()).toLocaleLowerCase(r)},in:function(t,n){if(n==null||n.length===0)return!0;for(var r=0;r<n.length;r++)if(T.equals(t,n[r]))return!0;return!1},notIn:function(t,n){if(n==null||n.length===0)return!0;for(var r=0;r<n.length;r++)if(T.equals(t,n[r]))return!1;return!0},between:function(t,n){return n==null||n[0]==null||n[1]==null?!0:t==null?!1:t.getTime?n[0].getTime()<=t.getTime()&&t.getTime()<=n[1].getTime():n[0]<=t&&t<=n[1]},lt:function(t,n){return n==null?!0:t==null?!1:t.getTime&&n.getTime?t.getTime()<n.getTime():t<n},lte:function(t,n){return n==null?!0:t==null?!1:t.getTime&&n.getTime?t.getTime()<=n.getTime():t<=n},gt:function(t,n){return n==null?!0:t==null?!1:t.getTime&&n.getTime?t.getTime()>n.getTime():t>n},gte:function(t,n){return n==null?!0:t==null?!1:t.getTime&&n.getTime?t.getTime()>=n.getTime():t>=n},dateIs:function(t,n){return n==null?!0:t==null?!1:t.toDateString()===n.toDateString()},dateIsNot:function(t,n){return n==null?!0:t==null?!1:t.toDateString()!==n.toDateString()},dateBefore:function(t,n){return n==null?!0:t==null?!1:t.getTime()<n.getTime()},dateAfter:function(t,n){return n==null?!0:t==null?!1:t.getTime()>n.getTime()}},register:function(t,n){this.filters[t]=n}};function ii(e){"@babel/helpers - typeof";return ii=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ii(e)}function V1(e,t){if(ii(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ii(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function K1(e){var t=V1(e,"string");return ii(t)==="symbol"?t:String(t)}function xn(e,t,n){return t=K1(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function W1(e,t,n){return Object.defineProperty(e,"prototype",{writable:!1}),e}function q1(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var mt=W1(function e(){q1(this,e)});xn(mt,"ripple",!1);xn(mt,"inputStyle","outlined");xn(mt,"locale","en");xn(mt,"appendTo",null);xn(mt,"cssTransition",!0);xn(mt,"autoZIndex",!0);xn(mt,"hideOverlaysOnDocumentScrolling",!1);xn(mt,"nonce",null);xn(mt,"nullSortOrder",1);xn(mt,"zIndex",{modal:1100,overlay:1e3,menu:1e3,tooltip:1100,toast:1200});xn(mt,"pt",void 0);xn(mt,"filterMatchModeOptions",{text:[Ne.STARTS_WITH,Ne.CONTAINS,Ne.NOT_CONTAINS,Ne.ENDS_WITH,Ne.EQUALS,Ne.NOT_EQUALS],numeric:[Ne.EQUALS,Ne.NOT_EQUALS,Ne.LESS_THAN,Ne.LESS_THAN_OR_EQUAL_TO,Ne.GREATER_THAN,Ne.GREATER_THAN_OR_EQUAL_TO],date:[Ne.DATE_IS,Ne.DATE_IS_NOT,Ne.DATE_BEFORE,Ne.DATE_AFTER]});xn(mt,"changeTheme",function(e,t,n,r){var o,a=document.getElementById(n);if(!a)throw Error("Element with id ".concat(n," not found."));var i=a.getAttribute("href").replace(e,t),l=document.createElement("link");l.setAttribute("rel","stylesheet"),l.setAttribute("id",n),l.setAttribute("href",i),l.addEventListener("load",function(){r&&r()}),(o=a.parentNode)===null||o===void 0||o.replaceChild(l,a)});var G1={en:{accept:"Yes",addRule:"Add Rule",am:"AM",apply:"Apply",cancel:"Cancel",choose:"Choose",chooseDate:"Choose Date",chooseMonth:"Choose Month",chooseYear:"Choose Year",clear:"Clear",completed:"Completed",contains:"Contains",custom:"Custom",dateAfter:"Date is after",dateBefore:"Date is before",dateFormat:"mm/dd/yy",dateIs:"Date is",dateIsNot:"Date is not",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],emptyFilterMessage:"No results found",emptyMessage:"No available options",emptySearchMessage:"No results found",emptySelectionMessage:"No selected item",endsWith:"Ends with",equals:"Equals",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],filter:"Filter",firstDayOfWeek:0,gt:"Greater than",gte:"Greater than or equal to",lt:"Less than",lte:"Less than or equal to",matchAll:"Match All",matchAny:"Match Any",medium:"Medium",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],nextDecade:"Next Decade",nextHour:"Next Hour",nextMinute:"Next Minute",nextMonth:"Next Month",nextSecond:"Next Second",nextYear:"Next Year",noFilter:"No Filter",notContains:"Not contains",notEquals:"Not equals",now:"Now",passwordPrompt:"Enter a password",pending:"Pending",pm:"PM",prevDecade:"Previous Decade",prevHour:"Previous Hour",prevMinute:"Previous Minute",prevMonth:"Previous Month",prevSecond:"Previous Second",prevYear:"Previous Year",reject:"No",removeRule:"Remove Rule",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",showMonthAfterYear:!1,startsWith:"Starts with",strong:"Strong",today:"Today",upload:"Upload",weak:"Weak",weekHeader:"Wk",aria:{cancelEdit:"Cancel Edit",close:"Close",collapseRow:"Row Collapsed",editRow:"Edit Row",expandRow:"Row Expanded",falseLabel:"False",filterConstraint:"Filter Constraint",filterOperator:"Filter Operator",firstPageLabel:"First Page",gridView:"Grid View",hideFilterMenu:"Hide Filter Menu",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",lastPageLabel:"Last Page",listView:"List View",moveAllToSource:"Move All to Source",moveAllToTarget:"Move All to Target",moveBottom:"Move Bottom",moveDown:"Move Down",moveToSource:"Move to Source",moveToTarget:"Move to Target",moveTop:"Move Top",moveUp:"Move Up",navigation:"Navigation",next:"Next",nextPageLabel:"Next Page",nullLabel:"Not Selected",pageLabel:"Page {page}",otpLabel:"Please enter one time password character {0}",passwordHide:"Hide Password",passwordShow:"Show Password",previous:"Previous",previousPageLabel:"Previous Page",rotateLeft:"Rotate Left",rotateRight:"Rotate Right",rowsPerPageLabel:"Rows per page",saveEdit:"Save Edit",scrollTop:"Scroll Top",selectAll:"All items selected",selectRow:"Row Selected",showFilterMenu:"Show Filter Menu",slide:"Slide",slideNumber:"{slideNumber}",star:"1 star",stars:"{star} stars",trueLabel:"True",unselectAll:"All items unselected",unselectRow:"Row Unselected",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out"}}};function li(e,t){if(e.includes("__proto__")||e.includes("prototype"))throw new Error("Unsafe key detected");var n=mt.locale;try{return rv(n)[e]}catch{throw new Error("The ".concat(e," option is not found in the current locale('").concat(n,"')."))}}function sa(e,t){if(e.includes("__proto__")||e.includes("prototype"))throw new Error("Unsafe ariaKey detected");var n=mt.locale;try{var r=rv(n).aria[e];if(r)for(var o in t)t.hasOwnProperty(o)&&(r=r.replace("{".concat(o,"}"),t[o]));return r}catch{throw new Error("The ".concat(e," option is not found in the current locale('").concat(n,"')."))}}function rv(e){var t=e||mt.locale;if(t.includes("__proto__")||t.includes("prototype"))throw new Error("Unsafe locale detected");return G1[t]}function Y1(e){if(Array.isArray(e))return e}function X1(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,a,i,l=[],s=!0,u=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(s=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(p){u=!0,o=p}finally{try{if(!s&&n.return!=null&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}function zf(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Q1(e,t){if(e){if(typeof e=="string")return zf(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return zf(e,t)}}function Z1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qt(e,t){return Y1(e)||X1(e,t)||Q1(e,t)||Z1()}var We=xe.createContext(),J1=function(t){var n=t.value||{},r=c.useState(n.ripple||!1),o=qt(r,2),a=o[0],i=o[1],l=c.useState(n.inputStyle||"outlined"),s=qt(l,2),u=s[0],p=s[1],d=c.useState(n.locale||"en"),f=qt(d,2),b=f[0],x=f[1],m=c.useState(n.appendTo||null),O=qt(m,2),h=O[0],g=O[1],v=c.useState(n.styleContainer||null),S=qt(v,2),C=S[0],N=S[1],k=c.useState(n.cssTransition||!0),L=qt(k,2),F=L[0],I=L[1],P=c.useState(n.autoZIndex||!0),le=qt(P,2),G=le[0],pe=le[1],Z=c.useState(n.hideOverlaysOnDocumentScrolling||!1),be=qt(Z,2),Oe=be[0],R=be[1],B=c.useState(n.nonce||null),D=qt(B,2),te=D[0],X=D[1],ne=c.useState(n.nullSortOrder||1),ce=qt(ne,2),At=ce[0],tt=ce[1],qe=c.useState(n.zIndex||{modal:1100,overlay:1e3,menu:1e3,tooltip:1100,toast:1200}),Re=qt(qe,2),me=Re[0],De=Re[1],Ie=c.useState(n.ptOptions||{mergeSections:!0,mergeProps:!0}),de=qt(Ie,2),Me=de[0],nt=de[1],ut=c.useState(n.pt||void 0),en=qt(ut,2),gt=en[0],Sn=en[1],En=c.useState(n.unstyled||!1),rt=qt(En,2),Kt=rt[0],ar=rt[1],ir=c.useState(n.filterMatchModeOptions||{text:[Ne.STARTS_WITH,Ne.CONTAINS,Ne.NOT_CONTAINS,Ne.ENDS_WITH,Ne.EQUALS,Ne.NOT_EQUALS],numeric:[Ne.EQUALS,Ne.NOT_EQUALS,Ne.LESS_THAN,Ne.LESS_THAN_OR_EQUAL_TO,Ne.GREATER_THAN,Ne.GREATER_THAN_OR_EQUAL_TO],date:[Ne.DATE_IS,Ne.DATE_IS_NOT,Ne.DATE_BEFORE,Ne.DATE_AFTER]}),fn=qt(ir,2),tn=fn[0],lr=fn[1],nn=function(Xn,Qn,ot,vt){var Mt,rn=document.getElementById(ot);if(!rn)throw Error("Element with id ".concat(ot," not found."));var Rn=rn.getAttribute("href").replace(Xn,Qn),se=document.createElement("link");se.setAttribute("rel","stylesheet"),se.setAttribute("id",ot),se.setAttribute("href",Rn),se.addEventListener("load",function(){vt&&vt()}),(Mt=rn.parentNode)===null||Mt===void 0||Mt.replaceChild(se,rn)};xe.useEffect(function(){mt.ripple=a},[a]),xe.useEffect(function(){mt.inputStyle=u},[u]),xe.useEffect(function(){mt.locale=b},[b]);var Dt={changeTheme:nn,ripple:a,setRipple:i,inputStyle:u,setInputStyle:p,locale:b,setLocale:x,appendTo:h,setAppendTo:g,styleContainer:C,setStyleContainer:N,cssTransition:F,setCssTransition:I,autoZIndex:G,setAutoZIndex:pe,hideOverlaysOnDocumentScrolling:Oe,setHideOverlaysOnDocumentScrolling:R,nonce:te,setNonce:X,nullSortOrder:At,setNullSortOrder:tt,zIndex:me,setZIndex:De,ptOptions:Me,setPtOptions:nt,pt:gt,setPt:Sn,filterMatchModeOptions:tn,setFilterMatchModeOptions:lr,unstyled:Kt,setUnstyled:ar};return xe.createElement(We.Provider,{value:Dt},t.children)},St=mt;const ey=()=>Ee.jsxs("div",{className:"w-screen h-screen  flex flex-column justify-content-between align-items-center",children:[Ee.jsxs("header",{className:"w-full",children:[Ee.jsx("h1",{children:"Bienvenido a Consultora TechBot"}),Ee.jsx("p",{children:"Tu asistente virtual para encontrar las mejores opciones en MercadoLibre Colombia"})]}),Ee.jsxs("div",{className:"container flex flex-column w-full",children:[Ee.jsxs("div",{className:"intro",children:[Ee.jsx("h2",{children:"¿Qué es TechBot?"}),Ee.jsxs("p",{children:["TechBot es un bot inteligente diseñado para ayudarte a encontrar y sugerir los productos más adecuados a tus necesidades en",Ee.jsx("strong",{children:" MercadoLibre Colombia"}),". Ya sea que busques una laptop, un celular o cualquier otro dispositivo, TechBot te guiará en cada paso."]}),Ee.jsx("p",{children:"Para comenzar, simplemente abre el chat en la esquina inferior izquierda e interactúa con TechBot. ¡Es rápido, fácil y eficiente!"})]}),Ee.jsxs("div",{className:"credits",children:[Ee.jsxs("p",{children:["Este proyecto ha sido desarrollado como parte del programa",Ee.jsx("strong",{children:" Talento Tech Oriente"}),"."]}),Ee.jsxs("p",{children:["Hecho por: ",Ee.jsx("strong",{children:"Cristian Mauricio Arias"})]})]})]}),Ee.jsx("div",{className:"my-5"}),Ee.jsx("footer",{className:"w-full",children:Ee.jsx("p",{children:"© 2024 Consultora TechBot. Todos los derechos reservados."})})]});var $f;(function(e){e.STRING="string",e.NUMBER="number",e.INTEGER="integer",e.BOOLEAN="boolean",e.ARRAY="array",e.OBJECT="object"})($f||($f={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bf;(function(e){e.LANGUAGE_UNSPECIFIED="language_unspecified",e.PYTHON="python"})(Bf||(Bf={}));var Hf;(function(e){e.OUTCOME_UNSPECIFIED="outcome_unspecified",e.OUTCOME_OK="outcome_ok",e.OUTCOME_FAILED="outcome_failed",e.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(Hf||(Hf={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf=["user","model","function","system"];var Vf;(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(Vf||(Vf={}));var Kf;(function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"})(Kf||(Kf={}));var Wf;(function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"})(Wf||(Wf={}));var qf;(function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"})(qf||(qf={}));var Ba;(function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.LANGUAGE="LANGUAGE",e.OTHER="OTHER"})(Ba||(Ba={}));var Gf;(function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"})(Gf||(Gf={}));var Yf;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.AUTO="AUTO",e.ANY="ANY",e.NONE="NONE"})(Yf||(Yf={}));var Xf;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.MODE_DYNAMIC="MODE_DYNAMIC"})(Xf||(Xf={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends Error{constructor(t){super(`[GoogleGenerativeAI Error]: ${t}`)}}class Eo extends ln{constructor(t,n){super(t),this.response=n}}class ov extends ln{constructor(t,n,r,o){super(t),this.status=n,this.statusText=r,this.errorDetails=o}}class Kr extends ln{}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty="https://generativelanguage.googleapis.com",ny="v1beta",ry="0.21.0",oy="genai-js";var go;(function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"})(go||(go={}));class ay{constructor(t,n,r,o,a){this.model=t,this.task=n,this.apiKey=r,this.stream=o,this.requestOptions=a}toString(){var t,n;const r=((t=this.requestOptions)===null||t===void 0?void 0:t.apiVersion)||ny;let a=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||ty}/${r}/${this.model}:${this.task}`;return this.stream&&(a+="?alt=sse"),a}}function iy(e){const t=[];return e!=null&&e.apiClient&&t.push(e.apiClient),t.push(`${oy}/${ry}`),t.join(" ")}async function ly(e){var t;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",iy(e.requestOptions)),n.append("x-goog-api-key",e.apiKey);let r=(t=e.requestOptions)===null||t===void 0?void 0:t.customHeaders;if(r){if(!(r instanceof Headers))try{r=new Headers(r)}catch(o){throw new Kr(`unable to convert customHeaders value ${JSON.stringify(r)} to Headers: ${o.message}`)}for(const[o,a]of r.entries()){if(o==="x-goog-api-key")throw new Kr(`Cannot set reserved header name ${o}`);if(o==="x-goog-api-client")throw new Kr(`Header name ${o} can only be set using the apiClient field`);n.append(o,a)}}return n}async function sy(e,t,n,r,o,a){const i=new ay(e,t,n,r,a);return{url:i.toString(),fetchOptions:Object.assign(Object.assign({},fy(a)),{method:"POST",headers:await ly(i),body:o})}}async function Oi(e,t,n,r,o,a={},i=fetch){const{url:l,fetchOptions:s}=await sy(e,t,n,r,o,a);return uy(l,s,i)}async function uy(e,t,n=fetch){let r;try{r=await n(e,t)}catch(o){cy(o,e)}return r.ok||await dy(r,e),r}function cy(e,t){let n=e;throw e instanceof ov||e instanceof Kr||(n=new ln(`Error fetching from ${t.toString()}: ${e.message}`),n.stack=e.stack),n}async function dy(e,t){let n="",r;try{const o=await e.json();n=o.error.message,o.error.details&&(n+=` ${JSON.stringify(o.error.details)}`,r=o.error.details)}catch{}throw new ov(`Error fetching from ${t.toString()}: [${e.status} ${e.statusText}] ${n}`,e.status,e.statusText,r)}function fy(e){const t={};if((e==null?void 0:e.signal)!==void 0||(e==null?void 0:e.timeout)>=0){const n=new AbortController;(e==null?void 0:e.timeout)>=0&&setTimeout(()=>n.abort(),e.timeout),e!=null&&e.signal&&e.signal.addEventListener("abort",()=>{n.abort()}),t.signal=n.signal}return t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),dl(e.candidates[0]))throw new Eo(`${Nr(e)}`,e);return py(e)}else if(e.promptFeedback)throw new Eo(`Text not available. ${Nr(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),dl(e.candidates[0]))throw new Eo(`${Nr(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),Qf(e)[0]}else if(e.promptFeedback)throw new Eo(`Function call not available. ${Nr(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),dl(e.candidates[0]))throw new Eo(`${Nr(e)}`,e);return Qf(e)}else if(e.promptFeedback)throw new Eo(`Function call not available. ${Nr(e)}`,e)},e}function py(e){var t,n,r,o;const a=[];if(!((n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const i of(o=(r=e.candidates)===null||r===void 0?void 0:r[0].content)===null||o===void 0?void 0:o.parts)i.text&&a.push(i.text),i.executableCode&&a.push("\n```"+i.executableCode.language+`
`+i.executableCode.code+"\n```\n"),i.codeExecutionResult&&a.push("\n```\n"+i.codeExecutionResult.output+"\n```\n");return a.length>0?a.join(""):""}function Qf(e){var t,n,r,o;const a=[];if(!((n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0)&&n.parts)for(const i of(o=(r=e.candidates)===null||r===void 0?void 0:r[0].content)===null||o===void 0?void 0:o.parts)i.functionCall&&a.push(i.functionCall);if(a.length>0)return a}const my=[Ba.RECITATION,Ba.SAFETY,Ba.LANGUAGE];function dl(e){return!!e.finishReason&&my.includes(e.finishReason)}function Nr(e){var t,n,r;let o="";if((!e.candidates||e.candidates.length===0)&&e.promptFeedback)o+="Response was blocked",!((t=e.promptFeedback)===null||t===void 0)&&t.blockReason&&(o+=` due to ${e.promptFeedback.blockReason}`),!((n=e.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(o+=`: ${e.promptFeedback.blockReasonMessage}`);else if(!((r=e.candidates)===null||r===void 0)&&r[0]){const a=e.candidates[0];dl(a)&&(o+=`Candidate was blocked due to ${a.finishReason}`,a.finishMessage&&(o+=`: ${a.finishMessage}`))}return o}function si(e){return this instanceof si?(this.v=e,this):new si(e)}function gy(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),o,a=[];return o={},i("next"),i("throw"),i("return"),o[Symbol.asyncIterator]=function(){return this},o;function i(f){r[f]&&(o[f]=function(b){return new Promise(function(x,m){a.push([f,b,x,m])>1||l(f,b)})})}function l(f,b){try{s(r[f](b))}catch(x){d(a[0][3],x)}}function s(f){f.value instanceof si?Promise.resolve(f.value.v).then(u,p):d(a[0][2],f)}function u(f){l("next",f)}function p(f){l("throw",f)}function d(f,b){f(b),a.shift(),a.length&&l(a[0][0],a[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function vy(e){const t=e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=by(t),[r,o]=n.tee();return{stream:yy(r),response:hy(o)}}async function hy(e){const t=[],n=e.getReader();for(;;){const{done:r,value:o}=await n.read();if(r)return gd(wy(t));t.push(o)}}function yy(e){return gy(this,arguments,function*(){const n=e.getReader();for(;;){const{value:r,done:o}=yield si(n.read());if(o)break;yield yield si(gd(r))}})}function by(e){const t=e.getReader();return new ReadableStream({start(r){let o="";return a();function a(){return t.read().then(({value:i,done:l})=>{if(l){if(o.trim()){r.error(new ln("Failed to parse stream"));return}r.close();return}o+=i;let s=o.match(Zf),u;for(;s;){try{u=JSON.parse(s[1])}catch{r.error(new ln(`Error parsing JSON response: "${s[1]}"`));return}r.enqueue(u),o=o.substring(s[0].length),s=o.match(Zf)}return a()})}}})}function wy(e){const t=e[e.length-1],n={promptFeedback:t==null?void 0:t.promptFeedback};for(const r of e){if(r.candidates)for(const o of r.candidates){const a=o.index;if(n.candidates||(n.candidates=[]),n.candidates[a]||(n.candidates[a]={index:o.index}),n.candidates[a].citationMetadata=o.citationMetadata,n.candidates[a].groundingMetadata=o.groundingMetadata,n.candidates[a].finishReason=o.finishReason,n.candidates[a].finishMessage=o.finishMessage,n.candidates[a].safetyRatings=o.safetyRatings,o.content&&o.content.parts){n.candidates[a].content||(n.candidates[a].content={role:o.content.role||"user",parts:[]});const i={};for(const l of o.content.parts)l.text&&(i.text=l.text),l.functionCall&&(i.functionCall=l.functionCall),l.executableCode&&(i.executableCode=l.executableCode),l.codeExecutionResult&&(i.codeExecutionResult=l.codeExecutionResult),Object.keys(i).length===0&&(i.text=""),n.candidates[a].content.parts.push(i)}}r.usageMetadata&&(n.usageMetadata=r.usageMetadata)}return n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function av(e,t,n,r){const o=await Oi(t,go.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),r);return vy(o)}async function iv(e,t,n,r){const a=await(await Oi(t,go.GENERATE_CONTENT,e,!1,JSON.stringify(n),r)).json();return{response:gd(a)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(e){if(e!=null){if(typeof e=="string")return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function ui(e){let t=[];if(typeof e=="string")t=[{text:e}];else for(const n of e)typeof n=="string"?t.push({text:n}):t.push(n);return xy(t)}function xy(e){const t={role:"user",parts:[]},n={role:"function",parts:[]};let r=!1,o=!1;for(const a of e)"functionResponse"in a?(n.parts.push(a),o=!0):(t.parts.push(a),r=!0);if(r&&o)throw new ln("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!r&&!o)throw new ln("No content is provided for sending chat message.");return r?t:n}function Sy(e,t){var n;let r={model:t==null?void 0:t.model,generationConfig:t==null?void 0:t.generationConfig,safetySettings:t==null?void 0:t.safetySettings,tools:t==null?void 0:t.tools,toolConfig:t==null?void 0:t.toolConfig,systemInstruction:t==null?void 0:t.systemInstruction,cachedContent:(n=t==null?void 0:t.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const o=e.generateContentRequest!=null;if(e.contents){if(o)throw new Kr("CountTokensRequest must have one of contents or generateContentRequest, not both.");r.contents=e.contents}else if(o)r=Object.assign(Object.assign({},r),e.generateContentRequest);else{const a=ui(e);r.contents=[a]}return{generateContentRequest:r}}function Jf(e){let t;return e.contents?t=e:t={contents:[ui(e)]},e.systemInstruction&&(t.systemInstruction=lv(e.systemInstruction)),t}function Ey(e){return typeof e=="string"||Array.isArray(e)?{content:ui(e)}:e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],Oy={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function Py(e){let t=!1;for(const n of e){const{role:r,parts:o}=n;if(!t&&r!=="user")throw new ln(`First content should be with role 'user', got ${r}`);if(!Uf.includes(r))throw new ln(`Each item should include role field. Got ${r} but valid roles are: ${JSON.stringify(Uf)}`);if(!Array.isArray(o))throw new ln("Content should have 'parts' property with an array of Parts");if(o.length===0)throw new ln("Each Content should have at least one part");const a={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const l of o)for(const s of ep)s in l&&(a[s]+=1);const i=Oy[r];for(const l of ep)if(!i.includes(l)&&a[l]>0)throw new ln(`Content with role '${r}' can't contain '${l}' part`);t=!0}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp="SILENT_ERROR";class Cy{constructor(t,n,r,o={}){this.model=n,this.params=r,this._requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=t,r!=null&&r.history&&(Py(r.history),this._history=r.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t,n={}){var r,o,a,i,l,s;await this._sendPromise;const u=ui(t),p={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(a=this.params)===null||a===void 0?void 0:a.tools,toolConfig:(i=this.params)===null||i===void 0?void 0:i.toolConfig,systemInstruction:(l=this.params)===null||l===void 0?void 0:l.systemInstruction,cachedContent:(s=this.params)===null||s===void 0?void 0:s.cachedContent,contents:[...this._history,u]},d=Object.assign(Object.assign({},this._requestOptions),n);let f;return this._sendPromise=this._sendPromise.then(()=>iv(this._apiKey,this.model,p,d)).then(b=>{var x;if(b.response.candidates&&b.response.candidates.length>0){this._history.push(u);const m=Object.assign({parts:[],role:"model"},(x=b.response.candidates)===null||x===void 0?void 0:x[0].content);this._history.push(m)}else{const m=Nr(b.response);m&&console.warn(`sendMessage() was unsuccessful. ${m}. Inspect response object for details.`)}f=b}),await this._sendPromise,f}async sendMessageStream(t,n={}){var r,o,a,i,l,s;await this._sendPromise;const u=ui(t),p={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(a=this.params)===null||a===void 0?void 0:a.tools,toolConfig:(i=this.params)===null||i===void 0?void 0:i.toolConfig,systemInstruction:(l=this.params)===null||l===void 0?void 0:l.systemInstruction,cachedContent:(s=this.params)===null||s===void 0?void 0:s.cachedContent,contents:[...this._history,u]},d=Object.assign(Object.assign({},this._requestOptions),n),f=av(this._apiKey,this.model,p,d);return this._sendPromise=this._sendPromise.then(()=>f).catch(b=>{throw new Error(tp)}).then(b=>b.response).then(b=>{if(b.candidates&&b.candidates.length>0){this._history.push(u);const x=Object.assign({},b.candidates[0].content);x.role||(x.role="model"),this._history.push(x)}else{const x=Nr(b);x&&console.warn(`sendMessageStream() was unsuccessful. ${x}. Inspect response object for details.`)}}).catch(b=>{b.message!==tp&&console.error(b)}),f}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ky(e,t,n,r){return(await Oi(t,go.COUNT_TOKENS,e,!1,JSON.stringify(n),r)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ty(e,t,n,r){return(await Oi(t,go.EMBED_CONTENT,e,!1,JSON.stringify(n),r)).json()}async function Iy(e,t,n,r){const o=n.requests.map(i=>Object.assign(Object.assign({},i),{model:t}));return(await Oi(t,go.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:o}),r)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(t,n,r={}){this.apiKey=t,this._requestOptions=r,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=lv(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(t,n={}){var r;const o=Jf(t),a=Object.assign(Object.assign({},this._requestOptions),n);return iv(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},o),a)}async generateContentStream(t,n={}){var r;const o=Jf(t),a=Object.assign(Object.assign({},this._requestOptions),n);return av(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},o),a)}startChat(t){var n;return new Cy(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},t),this._requestOptions)}async countTokens(t,n={}){const r=Sy(t,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),o=Object.assign(Object.assign({},this._requestOptions),n);return ky(this.apiKey,this.model,r,o)}async embedContent(t,n={}){const r=Ey(t),o=Object.assign(Object.assign({},this._requestOptions),n);return Ty(this.apiKey,this.model,r,o)}async batchEmbedContents(t,n={}){const r=Object.assign(Object.assign({},this._requestOptions),n);return Iy(this.apiKey,this.model,t,r)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(t){this.apiKey=t}getGenerativeModel(t,n){if(!t.model)throw new ln("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new np(this.apiKey,t,n)}getGenerativeModelFromCachedContent(t,n,r){if(!t.name)throw new Kr("Cached content must contain a `name` field.");if(!t.model)throw new Kr("Cached content must contain a `model` field.");const o=["model","systemInstruction"];for(const i of o)if(n!=null&&n[i]&&t[i]&&(n==null?void 0:n[i])!==t[i]){if(i==="model"){const l=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,s=t.model.startsWith("models/")?t.model.replace("models/",""):t.model;if(l===s)continue}throw new Kr(`Different value for "${i}" specified in modelParams (${n[i]}) and cachedContent (${t[i]})`)}const a=Object.assign(Object.assign({},n),{model:t.model,tools:t.tools,toolConfig:t.toolConfig,systemInstruction:t.systemInstruction,cachedContent:t});return new np(this.apiKey,a,r)}}const Ny="gemini-1.5-flash-8b",Ry=()=>{const[e,t]=c.useState({}),[n,r]=c.useState(null),[o,a]=c.useState(!1);return{data:e,error:n,loading:o,generateContent:async l=>{a(!0),r(null);const{type_product:s,use_product:u,type_product_current:p,token:d}=l,f=`Genera una lista de articulos del tipo ${s}, adecuados para ${u}, con un presupuesto de ${p} pesos colombianos. Quiero que devuelvas el resultado en formato JSON con la siguiente estructura:
    {
    PrecioMaximo: "Precio del producto en formato numérico, dentro del presupuesto especificado"
    PrecioMinimo: "Precio del producto en formato numérico, dentro del presupuesto especificado"
    Articulos :[
      {
        "nombreLargo": "Un nombre detallado del producto",
        "nombreCorto": "Un nombre conciso del producto",
        "precio": "Precio del producto en formato numérico, dentro del presupuesto especificado",
        "descripcion": "Descripción basada en el uso previsto",
        "propiedades": {
          "key1": "value1",
          "key2": "value2",
          ...
        }
      },
      {
        "nombreLargo": "Otro nombre de producto",
        "nombreCorto": "Otro nombre conciso",
        "precio": "Otro precio",
        "descripcion": "Descripción basada en el uso previsto",
        "propiedades": {
          "key1": "value1",
          "key2": "value2",
          ...
        }
      }
    ]
  }
incluye 10 Articulos.  Solo, y Solo dame El Json que te pedi, sin incluir mas texto.
`;try{const g=(await(await new _y(d).getGenerativeModel({model:Ny}).generateContent(f)).response).text().replace(/```json|```/g,"").trim();console.log("Cleaned Text:",g);try{const v=await JSON.parse(g);t(v),console.log("Parsed JSON:",v)}catch(v){console.error("Error parsing JSON:",v)}}catch(b){r(b.message||"Something went wrong")}finally{a(!1)}}}};function Ly(e){if(Array.isArray(e))return e}function Ay(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,a,i,l=[],s=!0,u=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(s=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(p){u=!0,o=p}finally{try{if(!s&&n.return!=null&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}function Bu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function sv(e,t){if(e){if(typeof e=="string")return Bu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Bu(e,t)}}function Dy(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ko(e,t){return Ly(e)||Ay(e,t)||sv(e,t)||Dy()}var ci=function(t){var n=c.useRef(null);return c.useEffect(function(){return n.current=t,function(){n.current=null}},[t]),n.current},Qr=function(t){return c.useEffect(function(){return t},[])},Fl=function(t){var n=t.target,r=n===void 0?"document":n,o=t.type,a=t.listener,i=t.options,l=t.when,s=l===void 0?!0:l,u=c.useRef(null),p=c.useRef(null),d=ci(a),f=ci(i),b=function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},v=g.target;T.isNotEmpty(v)&&(x(),(g.when||s)&&(u.current=K.getTargetElement(v))),!p.current&&u.current&&(p.current=function(S){return a&&a(S)},u.current.addEventListener(o,p.current,i))},x=function(){p.current&&(u.current.removeEventListener(o,p.current,i),p.current=null)},m=function(){x(),d=null,f=null},O=c.useCallback(function(){s?u.current=K.getTargetElement(r):(x(),u.current=null)},[r,s]);return c.useEffect(function(){O()},[O]),c.useEffect(function(){var h="".concat(d)!=="".concat(a),g=f!==i,v=p.current;v&&(h||g)?(x(),s&&b()):v||m()},[a,i,s]),Qr(function(){m()}),[b,x]};function My(e){if(Array.isArray(e))return Bu(e)}function jy(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Fy(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rp(e){return My(e)||jy(e)||sv(e)||Fy()}var zy={SIDEBAR:100,SLIDE_MENU:200,DIALOG:300,IMAGE:400,MENU:500,OVERLAY_PANEL:600,PASSWORD:700,CASCADE_SELECT:800,SPLIT_BUTTON:900,SPEED_DIAL:1e3,TOOLTIP:1200},uv={escKeyListeners:new Map,onGlobalKeyDown:function(t){if(t.code==="Escape"){var n=uv.escKeyListeners,r=Math.max.apply(Math,rp(n.keys())),o=n.get(r),a=Math.max.apply(Math,rp(o.keys())),i=o.get(a);i(t)}},refreshGlobalKeyDownListener:function(){var t=K.getTargetElement("document");this.escKeyListeners.size>0?t.addEventListener("keydown",this.onGlobalKeyDown):t.removeEventListener("keydown",this.onGlobalKeyDown)},addListener:function(t,n){var r=this,o=Ko(n,2),a=o[0],i=o[1],l=this.escKeyListeners;l.has(a)||l.set(a,new Map);var s=l.get(a);if(s.has(i))throw new Error("Unexpected: global esc key listener with priority [".concat(a,", ").concat(i,"] already exists."));return s.set(i,t),this.refreshGlobalKeyDownListener(),function(){s.delete(i),s.size===0&&l.delete(a),r.refreshGlobalKeyDownListener()}}},$y=function(t){var n=t.callback,r=t.when,o=t.priority;c.useEffect(function(){if(r)return uv.addListener(n,o)},[n,r,o])},Et=function(){var t=c.useContext(We);return function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return jl(r,t==null?void 0:t.ptOptions)}},yo=function(t){var n=c.useRef(!1);return c.useEffect(function(){if(!n.current)return n.current=!0,t&&t()},[])},cv=function(t){var n=t.target,r=t.listener,o=t.options,a=t.when,i=a===void 0?!0:a,l=c.useContext(We),s=c.useRef(null),u=c.useRef(null),p=c.useRef([]),d=ci(r),f=ci(o),b=function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(T.isNotEmpty(g.target)&&(x(),(g.when||i)&&(s.current=K.getTargetElement(g.target))),!u.current&&s.current){var v=l?l.hideOverlaysOnDocumentScrolling:St.hideOverlaysOnDocumentScrolling,S=p.current=K.getScrollableParents(s.current,v);u.current=function(C){return r&&r(C)},S.forEach(function(C){return C.addEventListener("scroll",u.current,o)})}},x=function(){if(u.current){var g=p.current;g.forEach(function(v){return v.removeEventListener("scroll",u.current,o)}),u.current=null}},m=function(){x(),p.current=null,d=null,f=null},O=c.useCallback(function(){i?s.current=K.getTargetElement(n):(x(),s.current=null)},[n,i]);return c.useEffect(function(){O()},[O]),c.useEffect(function(){var h="".concat(d)!=="".concat(r),g=f!==o,v=u.current;v&&(h||g)?(x(),i&&b()):v||m()},[r,o,i]),Qr(function(){m()}),[b,x]},vd=function(t){var n=t.listener,r=t.when,o=r===void 0?!0:r;return Fl({target:"window",type:"resize",listener:n,when:o})},By=function(t){var n=t.target,r=t.overlay,o=t.listener,a=t.when,i=a===void 0?!0:a,l=t.type,s=l===void 0?"click":l,u=c.useRef(null),p=c.useRef(null),d=Fl({target:"window",type:s,listener:function(Z){o&&o(Z,{type:"outside",valid:Z.which!==3&&P(Z)})}}),f=Ko(d,2),b=f[0],x=f[1],m=vd({target:"window",listener:function(Z){o&&o(Z,{type:"resize",valid:!K.isTouchDevice()})}}),O=Ko(m,2),h=O[0],g=O[1],v=Fl({target:"window",type:"orientationchange",listener:function(Z){o&&o(Z,{type:"orientationchange",valid:!0})}}),S=Ko(v,2),C=S[0],N=S[1],k=cv({target:n,listener:function(Z){o&&o(Z,{type:"scroll",valid:!0})}}),L=Ko(k,2),F=L[0],I=L[1],P=function(Z){return u.current&&!(u.current.isSameNode(Z.target)||u.current.contains(Z.target)||p.current&&p.current.contains(Z.target))},le=function(){b(),h(),C(),F()},G=function(){x(),g(),N(),I()};return c.useEffect(function(){i?(u.current=K.getTargetElement(n),p.current=K.getTargetElement(r)):(G(),u.current=p.current=null)},[n,r,i]),Qr(function(){G()}),[le,G]},Hy=0,Wo=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=c.useState(!1),o=Ko(r,2),a=o[0],i=o[1],l=c.useRef(null),s=c.useContext(We),u=K.isClient()?window.document:void 0,p=n.document,d=p===void 0?u:p,f=n.manual,b=f===void 0?!1:f,x=n.name,m=x===void 0?"style_".concat(++Hy):x,O=n.id,h=O===void 0?void 0:O,g=n.media,v=g===void 0?void 0:g,S=function(F){var I=F.querySelector('style[data-primereact-style-id="'.concat(m,'"]'));if(I)return I;if(h!==void 0){var P=d.getElementById(h);if(P)return P}return d.createElement("style")},C=function(F){a&&t!==F&&(l.current.textContent=F)},N=function(){if(!(!d||a)){var F=(s==null?void 0:s.styleContainer)||d.head;l.current=S(F),l.current.isConnected||(l.current.type="text/css",h&&(l.current.id=h),v&&(l.current.media=v),K.addNonce(l.current,s&&s.nonce||St.nonce),F.appendChild(l.current),m&&l.current.setAttribute("data-primereact-style-id",m)),l.current.textContent=t,i(!0)}},k=function(){!d||!l.current||(K.removeInlineStyle(l.current),i(!1))};return c.useEffect(function(){b||N()},[b]),{id:h,name:m,update:C,unload:k,load:N,isLoaded:a}},st=function(t,n){var r=c.useRef(!1);return c.useEffect(function(){if(!r.current){r.current=!0;return}return t&&t()},n)};function Hu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Uy(e){if(Array.isArray(e))return Hu(e)}function Vy(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ky(e,t){if(e){if(typeof e=="string")return Hu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Hu(e,t)}}function Wy(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function op(e){return Uy(e)||Vy(e)||Ky(e)||Wy()}function di(e){"@babel/helpers - typeof";return di=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},di(e)}function qy(e,t){if(di(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(di(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Gy(e){var t=qy(e,"string");return di(t)==="symbol"?t:String(t)}function Uu(e,t,n){return t=Gy(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ap(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Ct(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ap(Object(n),!0).forEach(function(r){Uu(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ap(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Yy=`
.p-hidden-accessible {
    border: 0;
    padding: 0;
    margin: -1px;
    position: absolute;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    clip-path: inset(50%);
    white-space: nowrap;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: var(--scrollbar-width);
}
`,Xy=`
.p-button {
    margin: 0;
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    vertical-align: bottom;
    text-align: center;
    overflow: hidden;
    position: relative;
}

.p-button-label {
    flex: 1 1 auto;
}

.p-button-icon-right {
    order: 1;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-only {
    justify-content: center;
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
    flex: 0 0 auto;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-group .p-button {
    margin: 0;
}

.p-button-group .p-button:not(:last-child) {
    border-right: 0 none;
}

.p-button-group .p-button:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
}

.p-button-group .p-button:first-of-type {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-button-group .p-button:last-of-type {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-button-group .p-button:focus {
    position: relative;
    z-index: 1;
}
`,Qy=`
.p-inputtext {
    margin: 0;
}

.p-fluid .p-inputtext {
    width: 100%;
}

/* InputGroup */
.p-inputgroup {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup-addon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-inputgroup .p-float-label {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-fluid .p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper,
.p-fluid .p-inputgroup .p-input {
    flex: 1 1 auto;
    width: 1%;
}

/* Floating Label */
.p-float-label {
    display: block;
    position: relative;
}

.p-float-label label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    margin-top: -0.5rem;
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
}

.p-float-label textarea ~ label,
.p-float-label .p-mention ~ label {
    top: 1rem;
}

.p-float-label input:focus ~ label,
.p-float-label input:-webkit-autofill ~ label,
.p-float-label input.p-filled ~ label,
.p-float-label textarea:focus ~ label,
.p-float-label textarea.p-filled ~ label,
.p-float-label .p-inputwrapper-focus ~ label,
.p-float-label .p-inputwrapper-filled ~ label,
.p-float-label .p-tooltip-target-wrapper ~ label {
    top: -0.75rem;
    font-size: 12px;
}

.p-float-label .p-placeholder,
.p-float-label input::placeholder,
.p-float-label .p-inputtext::placeholder {
    opacity: 0;
    transition-property: all;
    transition-timing-function: ease;
}

.p-float-label .p-focus .p-placeholder,
.p-float-label input:focus::placeholder,
.p-float-label .p-inputtext:focus::placeholder {
    opacity: 1;
    transition-property: all;
    transition-timing-function: ease;
}

.p-input-icon-left,
.p-input-icon-right {
    position: relative;
    display: inline-block;
}

.p-input-icon-left > i,
.p-input-icon-right > i,
.p-input-icon-left > svg,
.p-input-icon-right > svg,
.p-input-icon-left > .p-input-prefix,
.p-input-icon-right > .p-input-suffix {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}

.p-fluid .p-input-icon-left,
.p-fluid .p-input-icon-right {
    display: block;
    width: 100%;
}
`,Zy=`
.p-icon {
    display: inline-block;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

svg.p-icon {
    pointer-events: auto;
}

svg.p-icon g,
.p-disabled svg.p-icon {
    pointer-events: none;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Jy=`
@layer primereact {
    .p-component, .p-component * {
        box-sizing: border-box;
    }

    .p-hidden {
        display: none;
    }

    .p-hidden-space {
        visibility: hidden;
    }

    .p-reset {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        text-decoration: none;
        font-size: 100%;
        list-style: none;
    }

    .p-disabled, .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-component-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-unselectable-text {
        user-select: none;
    }

    .p-scrollbar-measure {
        width: 100px;
        height: 100px;
        overflow: scroll;
        position: absolute;
        top: -9999px;
    }

    @-webkit-keyframes p-fadein {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }
    @keyframes p-fadein {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }

    .p-link {
        text-align: left;
        background-color: transparent;
        margin: 0;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-link:disabled {
        cursor: default;
    }

    /* Non react overlay animations */
    .p-connected-overlay {
        opacity: 0;
        transform: scaleY(0.8);
        transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-visible {
        opacity: 1;
        transform: scaleY(1);
    }

    .p-connected-overlay-hidden {
        opacity: 0;
        transform: scaleY(1);
        transition: opacity .1s linear;
    }

    /* React based overlay animations */
    .p-connected-overlay-enter {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-connected-overlay-enter-active {
        opacity: 1;
        transform: scaleY(1);
        transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-enter-done {
        transform: none;
    }

    .p-connected-overlay-exit {
        opacity: 1;
    }

    .p-connected-overlay-exit-active {
        opacity: 0;
        transition: opacity .1s linear;
    }

    /* Toggleable Content */
    .p-toggleable-content-enter {
        max-height: 0;
    }

    .p-toggleable-content-enter-active {
        overflow: hidden;
        max-height: 1000px;
        transition: max-height 1s ease-in-out;
    }

    .p-toggleable-content-enter-done {
        transform: none;
    }

    .p-toggleable-content-exit {
        max-height: 1000px;
    }

    .p-toggleable-content-exit-active {
        overflow: hidden;
        max-height: 0;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
    }

    .p-sr-only {
        border: 0;
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
        word-wrap: normal;
    }

    /* @todo Refactor */
    .p-menu .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    `.concat(Xy,`
    `).concat(Qy,`
    `).concat(Zy,`
}
`),ke={cProps:void 0,cParams:void 0,cName:void 0,defaultProps:{pt:void 0,ptOptions:void 0,unstyled:!1},context:{},globalCSS:void 0,classes:{},styles:"",extend:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.css,r=Ct(Ct({},t.defaultProps),ke.defaultProps),o={},a=function(p){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return ke.context=d,ke.cProps=p,T.getMergedProps(p,r)},i=function(p){return T.getDiffProps(p,r)},l=function(){var p,d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},x=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0;d.hasOwnProperty("pt")&&d.pt!==void 0&&(d=d.pt);var m=f,O=/./g.test(m)&&!!b[m.split(".")[0]],h=O?T.toFlatCase(m.split(".")[1]):T.toFlatCase(m),g=b.hostName&&T.toFlatCase(b.hostName),v=g||b.props&&b.props.__TYPE&&T.toFlatCase(b.props.__TYPE)||"",S=h==="transition",C="data-pc-",N=function(R){return R!=null&&R.props?R.hostName?R.props.__TYPE===R.hostName?R.props:N(R.parent):R.parent:void 0},k=function(R){var B,D;return((B=b.props)===null||B===void 0?void 0:B[R])||((D=N(b))===null||D===void 0?void 0:D[R])};ke.cParams=b,ke.cName=v;var L=k("ptOptions")||ke.context.ptOptions||{},F=L.mergeSections,I=F===void 0?!0:F,P=L.mergeProps,le=P===void 0?!1:P,G=function(){var R=hr.apply(void 0,arguments);return Array.isArray(R)?{className:ue.apply(void 0,op(R))}:T.isString(R)?{className:R}:R!=null&&R.hasOwnProperty("className")&&Array.isArray(R.className)?{className:ue.apply(void 0,op(R.className))}:R},pe=x?O?dv(G,m,b):fv(G,m,b):void 0,Z=O?void 0:is(as(d,v),G,m,b),be=!S&&Ct(Ct({},h==="root"&&Uu({},"".concat(C,"name"),b.props&&b.props.__parentMetadata?T.toFlatCase(b.props.__TYPE):v)),{},Uu({},"".concat(C,"section"),h));return I||!I&&Z?le?jl([pe,Z,Object.keys(be).length?be:{}],{classNameMergeFunction:(p=ke.context.ptOptions)===null||p===void 0?void 0:p.classNameMergeFunction}):Ct(Ct(Ct({},pe),Z),Object.keys(be).length?be:{}):Ct(Ct({},Z),Object.keys(be).length?be:{})},s=function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=p.props,f=p.state,b=function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return l((d||{}).pt,v,Ct(Ct({},p),S))},x=function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return l(v,S,C,!1)},m=function(){return ke.context.unstyled||St.unstyled||d.unstyled},O=function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return m()?void 0:hr(n&&n.classes,v,Ct({props:d,state:f},S))},h=function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(C){var N,k=hr(n&&n.inlineStyles,v,Ct({props:d,state:f},S)),L=hr(o,v,Ct({props:d,state:f},S));return jl([L,k],{classNameMergeFunction:(N=ke.context.ptOptions)===null||N===void 0?void 0:N.classNameMergeFunction})}};return{ptm:b,ptmo:x,sx:h,cx:O,isUnstyled:m}};return Ct(Ct({getProps:a,getOtherProps:i,setMetaData:s},t),{},{defaultProps:r})}},hr=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=String(T.toFlatCase(n)).split("."),a=o.shift(),i=T.isNotEmpty(t)?Object.keys(t).find(function(l){return T.toFlatCase(l)===a}):"";return a?T.isObject(t)?hr(T.getItemValue(t[i],r),o.join("."),r):void 0:T.getItemValue(t,r)},as=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,o=t==null?void 0:t._usept,a=function(l){var s,u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,p=r?r(l):l,d=T.toFlatCase(n);return(s=u?d!==ke.cName?p==null?void 0:p[d]:void 0:p==null?void 0:p[d])!==null&&s!==void 0?s:p};return T.isNotEmpty(o)?{_usept:o,originalValue:a(t.originalValue),value:a(t.value)}:a(t,!0)},is=function(t,n,r,o){var a=function(m){return n(m,r,o)};if(t!=null&&t.hasOwnProperty("_usept")){var i=t._usept||ke.context.ptOptions||{},l=i.mergeSections,s=l===void 0?!0:l,u=i.mergeProps,p=u===void 0?!1:u,d=i.classNameMergeFunction,f=a(t.originalValue),b=a(t.value);return f===void 0&&b===void 0?void 0:T.isString(b)?b:T.isString(f)?f:s||!s&&b?p?jl([f,b],{classNameMergeFunction:d}):Ct(Ct({},f),b):b}return a(t)},eb=function(){return as(ke.context.pt||St.pt,void 0,function(t){return T.getItemValue(t,ke.cParams)})},tb=function(){return as(ke.context.pt||St.pt,void 0,function(t){return hr(t,ke.cName,ke.cParams)||T.getItemValue(t,ke.cParams)})},dv=function(t,n,r){return is(eb(),t,n,r)},fv=function(t,n,r){return is(tb(),t,n,r)},ma=function(t){var n=arguments.length>2?arguments[2]:void 0,r=n.name,o=n.styled,a=o===void 0?!1:o,i=n.hostName,l=i===void 0?"":i,s=dv(hr,"global.css",ke.cParams),u=T.toFlatCase(r),p=Wo(Yy,{name:"base",manual:!0}),d=p.load,f=Wo(Jy,{name:"common",manual:!0}),b=f.load,x=Wo(s,{name:"global",manual:!0}),m=x.load,O=Wo(t,{name:r,manual:!0}),h=O.load,g=function(S){if(!l){var C=is(as((ke.cProps||{}).pt,u),hr,"hooks.".concat(S)),N=fv(hr,"hooks.".concat(S));C==null||C(),N==null||N()}};g("useMountEffect"),yo(function(){d(),m(),b(),a||h()}),st(function(){g("useUpdateEffect")}),Qr(function(){g("useUnmountEffect")})},_t={defaultProps:{__TYPE:"IconBase",className:null,label:null,spin:!1},getProps:function(t){return T.getMergedProps(t,_t.defaultProps)},getOtherProps:function(t){return T.getDiffProps(t,_t.defaultProps)},getPTI:function(t){var n=T.isEmpty(t.label),r=_t.getOtherProps(t),o={className:ue("p-icon",{"p-icon-spin":t.spin},t.className),role:n?void 0:"img","aria-label":n?void 0:t.label,"aria-hidden":n};return T.getMergedProps(r,o)}};function Vu(){return Vu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vu.apply(this,arguments)}var pv=c.memo(c.forwardRef(function(e,t){var n=_t.getPTI(e);return c.createElement("svg",Vu({ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z",fill:"currentColor"}))}));pv.displayName="BarsIcon";function Ku(){return Ku=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ku.apply(this,arguments)}var ls=c.memo(c.forwardRef(function(e,t){var n=_t.getPTI(e);return c.createElement("svg",Ku({ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),c.createElement("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"}))}));ls.displayName="SpinnerIcon";function Wu(){return Wu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wu.apply(this,arguments)}var mv=c.memo(c.forwardRef(function(e,t){var n=_t.getPTI(e);return c.createElement("svg",Wu({ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.90909 6.36364H4.45455C4.96087 6.36364 5.44645 6.1625 5.80448 5.80448C6.1625 5.44645 6.36364 4.96087 6.36364 4.45455V1.90909C6.36364 1.40277 6.1625 0.917184 5.80448 0.55916C5.44645 0.201136 4.96087 0 4.45455 0H1.90909C1.40277 0 0.917184 0.201136 0.55916 0.55916C0.201136 0.917184 0 1.40277 0 1.90909V4.45455C0 4.96087 0.201136 5.44645 0.55916 5.80448C0.917184 6.1625 1.40277 6.36364 1.90909 6.36364ZM1.46154 1.46154C1.58041 1.34268 1.741 1.27492 1.90909 1.27273H4.45455C4.62264 1.27492 4.78322 1.34268 4.90209 1.46154C5.02096 1.58041 5.08871 1.741 5.09091 1.90909V4.45455C5.08871 4.62264 5.02096 4.78322 4.90209 4.90209C4.78322 5.02096 4.62264 5.08871 4.45455 5.09091H1.90909C1.741 5.08871 1.58041 5.02096 1.46154 4.90209C1.34268 4.78322 1.27492 4.62264 1.27273 4.45455V1.90909C1.27492 1.741 1.34268 1.58041 1.46154 1.46154ZM1.90909 14H4.45455C4.96087 14 5.44645 13.7989 5.80448 13.4408C6.1625 13.0828 6.36364 12.5972 6.36364 12.0909V9.54544C6.36364 9.03912 6.1625 8.55354 5.80448 8.19551C5.44645 7.83749 4.96087 7.63635 4.45455 7.63635H1.90909C1.40277 7.63635 0.917184 7.83749 0.55916 8.19551C0.201136 8.55354 0 9.03912 0 9.54544V12.0909C0 12.5972 0.201136 13.0828 0.55916 13.4408C0.917184 13.7989 1.40277 14 1.90909 14ZM1.46154 9.0979C1.58041 8.97903 1.741 8.91128 1.90909 8.90908H4.45455C4.62264 8.91128 4.78322 8.97903 4.90209 9.0979C5.02096 9.21677 5.08871 9.37735 5.09091 9.54544V12.0909C5.08871 12.259 5.02096 12.4196 4.90209 12.5384C4.78322 12.6573 4.62264 12.7251 4.45455 12.7273H1.90909C1.741 12.7251 1.58041 12.6573 1.46154 12.5384C1.34268 12.4196 1.27492 12.259 1.27273 12.0909V9.54544C1.27492 9.37735 1.34268 9.21677 1.46154 9.0979ZM12.0909 6.36364H9.54544C9.03912 6.36364 8.55354 6.1625 8.19551 5.80448C7.83749 5.44645 7.63635 4.96087 7.63635 4.45455V1.90909C7.63635 1.40277 7.83749 0.917184 8.19551 0.55916C8.55354 0.201136 9.03912 0 9.54544 0H12.0909C12.5972 0 13.0828 0.201136 13.4408 0.55916C13.7989 0.917184 14 1.40277 14 1.90909V4.45455C14 4.96087 13.7989 5.44645 13.4408 5.80448C13.0828 6.1625 12.5972 6.36364 12.0909 6.36364ZM9.54544 1.27273C9.37735 1.27492 9.21677 1.34268 9.0979 1.46154C8.97903 1.58041 8.91128 1.741 8.90908 1.90909V4.45455C8.91128 4.62264 8.97903 4.78322 9.0979 4.90209C9.21677 5.02096 9.37735 5.08871 9.54544 5.09091H12.0909C12.259 5.08871 12.4196 5.02096 12.5384 4.90209C12.6573 4.78322 12.7251 4.62264 12.7273 4.45455V1.90909C12.7251 1.741 12.6573 1.58041 12.5384 1.46154C12.4196 1.34268 12.259 1.27492 12.0909 1.27273H9.54544ZM9.54544 14H12.0909C12.5972 14 13.0828 13.7989 13.4408 13.4408C13.7989 13.0828 14 12.5972 14 12.0909V9.54544C14 9.03912 13.7989 8.55354 13.4408 8.19551C13.0828 7.83749 12.5972 7.63635 12.0909 7.63635H9.54544C9.03912 7.63635 8.55354 7.83749 8.19551 8.19551C7.83749 8.55354 7.63635 9.03912 7.63635 9.54544V12.0909C7.63635 12.5972 7.83749 13.0828 8.19551 13.4408C8.55354 13.7989 9.03912 14 9.54544 14ZM9.0979 9.0979C9.21677 8.97903 9.37735 8.91128 9.54544 8.90908H12.0909C12.259 8.91128 12.4196 8.97903 12.5384 9.0979C12.6573 9.21677 12.7251 9.37735 12.7273 9.54544V12.0909C12.7251 12.259 12.6573 12.4196 12.5384 12.5384C12.4196 12.6573 12.259 12.7251 12.0909 12.7273H9.54544C9.37735 12.7251 9.21677 12.6573 9.0979 12.5384C8.97903 12.4196 8.91128 12.259 8.90908 12.0909V9.54544C8.91128 9.37735 8.97903 9.21677 9.0979 9.0979Z",fill:"currentColor"}))}));mv.displayName="ThLargeIcon";function qu(){return qu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qu.apply(this,arguments)}var gv=c.memo(c.forwardRef(function(e,t){var n=_t.getPTI(e);return c.createElement("svg",qu({ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.71602 11.164C5.80782 11.2021 5.9063 11.2215 6.00569 11.221C6.20216 11.2301 6.39427 11.1612 6.54025 11.0294C6.68191 10.8875 6.76148 10.6953 6.76148 10.4948C6.76148 10.2943 6.68191 10.1021 6.54025 9.96024L3.51441 6.9344L6.54025 3.90855C6.624 3.76126 6.65587 3.59011 6.63076 3.42254C6.60564 3.25498 6.525 3.10069 6.40175 2.98442C6.2785 2.86815 6.11978 2.79662 5.95104 2.7813C5.78229 2.76598 5.61329 2.80776 5.47112 2.89994L1.97123 6.39983C1.82957 6.54167 1.75 6.73393 1.75 6.9344C1.75 7.13486 1.82957 7.32712 1.97123 7.46896L5.47112 10.9991C5.54096 11.0698 5.62422 11.1259 5.71602 11.164ZM11.0488 10.9689C11.1775 11.1156 11.3585 11.2061 11.5531 11.221C11.7477 11.2061 11.9288 11.1156 12.0574 10.9689C12.1815 10.8302 12.25 10.6506 12.25 10.4645C12.25 10.2785 12.1815 10.0989 12.0574 9.96024L9.03158 6.93439L12.0574 3.90855C12.1248 3.76739 12.1468 3.60881 12.1204 3.45463C12.0939 3.30045 12.0203 3.15826 11.9097 3.04765C11.7991 2.93703 11.6569 2.86343 11.5027 2.83698C11.3486 2.81053 11.19 2.83252 11.0488 2.89994L7.51865 6.36957C7.37699 6.51141 7.29742 6.70367 7.29742 6.90414C7.29742 7.1046 7.37699 7.29686 7.51865 7.4387L11.0488 10.9689Z",fill:"currentColor"}))}));gv.displayName="AngleDoubleLeftIcon";function Gu(){return Gu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gu.apply(this,arguments)}function fi(e){"@babel/helpers - typeof";return fi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fi(e)}function nb(e,t){if(fi(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(fi(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function rb(e){var t=nb(e,"string");return fi(t)==="symbol"?t:String(t)}function ob(e,t,n){return t=rb(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ab(e){if(Array.isArray(e))return e}function ib(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,a,i,l=[],s=!0,u=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(s=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(p){u=!0,o=p}finally{try{if(!s&&n.return!=null&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}function ip(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function lb(e,t){if(e){if(typeof e=="string")return ip(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ip(e,t)}}function sb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ub(e,t){return ab(e)||ib(e,t)||lb(e,t)||sb()}var cb=`
@layer primereact {
    .p-ripple {
        overflow: hidden;
        position: relative;
    }
    
    .p-ink {
        display: block;
        position: absolute;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 100%;
        transform: scale(0);
    }
    
    .p-ink-active {
        animation: ripple 0.4s linear;
    }
    
    .p-ripple-disabled .p-ink {
        display: none;
    }
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}

`,db={root:"p-ink"},qo=ke.extend({defaultProps:{__TYPE:"Ripple",children:void 0},css:{styles:cb,classes:db},getProps:function(t){return T.getMergedProps(t,qo.defaultProps)},getOtherProps:function(t){return T.getDiffProps(t,qo.defaultProps)}});function lp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function fb(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?lp(Object(n),!0).forEach(function(r){ob(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):lp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Yn=c.memo(c.forwardRef(function(e,t){var n=c.useState(!1),r=ub(n,2),o=r[0],a=r[1],i=c.useRef(null),l=c.useRef(null),s=Et(),u=c.useContext(We),p=qo.getProps(e,u),d=u&&u.ripple||St.ripple,f={props:p};Wo(qo.css.styles,{name:"ripple",manual:!d});var b=qo.setMetaData(fb({},f)),x=b.ptm,m=b.cx,O=function(){return i.current&&i.current.parentElement},h=function(){l.current&&l.current.addEventListener("pointerdown",v)},g=function(){l.current&&l.current.removeEventListener("pointerdown",v)},v=function(F){var I=K.getOffset(l.current),P=F.pageX-I.left+document.body.scrollTop-K.getWidth(i.current)/2,le=F.pageY-I.top+document.body.scrollLeft-K.getHeight(i.current)/2;S(P,le)},S=function(F,I){!i.current||getComputedStyle(i.current,null).display==="none"||(K.removeClass(i.current,"p-ink-active"),N(),i.current.style.top=I+"px",i.current.style.left=F+"px",K.addClass(i.current,"p-ink-active"))},C=function(F){K.removeClass(F.currentTarget,"p-ink-active")},N=function(){if(i.current&&!K.getHeight(i.current)&&!K.getWidth(i.current)){var F=Math.max(K.getOuterWidth(l.current),K.getOuterHeight(l.current));i.current.style.height=F+"px",i.current.style.width=F+"px"}};if(c.useImperativeHandle(t,function(){return{props:p,getInk:function(){return i.current},getTarget:function(){return l.current}}}),yo(function(){a(!0)}),st(function(){o&&i.current&&(l.current=O(),N(),h())},[o]),st(function(){i.current&&!l.current&&(l.current=O(),N(),h())}),Qr(function(){i.current&&(l.current=null,g())}),!d)return null;var k=s({"aria-hidden":!0,className:ue(m("root"))},qo.getOtherProps(p),x("root"));return c.createElement("span",Gu({role:"presentation",ref:i},k,{onAnimationEnd:C}))}));Yn.displayName="Ripple";function Yu(){return Yu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yu.apply(this,arguments)}var vv=c.memo(c.forwardRef(function(e,t){var n=_t.getPTI(e);return c.createElement("svg",Yu({ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),c.createElement("path",{d:"M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z",fill:"currentColor"}))}));vv.displayName="AngleDownIcon";function Xu(){return Xu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xu.apply(this,arguments)}var hv=c.memo(c.forwardRef(function(e,t){var n=_t.getPTI(e);return c.createElement("svg",Xu({ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),c.createElement("path",{d:"M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z",fill:"currentColor"}))}));hv.displayName="AngleUpIcon";function Qu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function pb(e){if(Array.isArray(e))return Qu(e)}function mb(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function gb(e,t){if(e){if(typeof e=="string")return Qu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Qu(e,t)}}function vb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hb(e){return pb(e)||mb(e)||gb(e)||vb()}var Go={DEFAULT_MASKS:{pint:/[\d]/,int:/[\d\-]/,pnum:/[\d\.]/,money:/[\d\.\s,]/,num:/[\d\-\.]/,hex:/[0-9a-f]/i,email:/[a-z0-9_\.\-@]/i,alpha:/[a-z_]/i,alphanum:/[a-z0-9_]/i},getRegex:function(t){return Go.DEFAULT_MASKS[t]?Go.DEFAULT_MASKS[t]:t},onBeforeInput:function(t,n,r){r||!K.isAndroid()||this.validateKey(t,t.data,n)},onKeyPress:function(t,n,r){r||K.isAndroid()||t.ctrlKey||t.altKey||t.metaKey||this.validateKey(t,t.key,n)},onPaste:function(t,n,r){if(!r){var o=this.getRegex(n),a=t.clipboardData.getData("text");hb(a).forEach(function(i){if(!o.test(i))return t.preventDefault(),!1})}},validateKey:function(t,n,r){if(n!=null){var o=n.length<=2;if(o){var a=this.getRegex(r);a.test(n)||t.preventDefault()}}},validate:function(t,n){var r=t.target.value,o=!0,a=this.getRegex(n);return r&&!a.test(r)&&(o=!1),o}};function yb(e){if(Array.isArray(e))return e}function bb(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,a,i,l=[],s=!0,u=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(s=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(p){u=!0,o=p}finally{try{if(!s&&n.return!=null&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}function sp(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function wb(e,t){if(e){if(typeof e=="string")return sp(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return sp(e,t)}}function xb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Sb(e,t){return yb(e)||bb(e,t)||wb(e,t)||xb()}var Zu={defaultProps:{__TYPE:"Portal",element:null,appendTo:null,visible:!1,onMounted:null,onUnmounted:null,children:void 0},getProps:function(t){return T.getMergedProps(t,Zu.defaultProps)},getOtherProps:function(t){return T.getDiffProps(t,Zu.defaultProps)}},hd=c.memo(function(e){var t=Zu.getProps(e),n=c.useContext(We),r=c.useState(t.visible&&K.isClient()),o=Sb(r,2),a=o[0],i=o[1];yo(function(){K.isClient()&&!a&&(i(!0),t.onMounted&&t.onMounted())}),st(function(){t.onMounted&&t.onMounted()},[a]),Qr(function(){t.onUnmounted&&t.onUnmounted()});var l=t.element||t.children;if(l&&a){var s=t.appendTo||n&&n.appendTo||St.appendTo;return T.isFunction(s)&&(s=s()),s||(s=document.body),s==="self"?l:Ia.createPortal(l,s)}return null});hd.displayName="Portal";function zl(){return zl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zl.apply(this,arguments)}function pi(e){"@babel/helpers - typeof";return pi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pi(e)}function Eb(e,t){if(pi(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(pi(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ob(e){var t=Eb(e,"string");return pi(t)==="symbol"?t:String(t)}function yv(e,t,n){return t=Ob(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ju(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Pb(e){if(Array.isArray(e))return Ju(e)}function Cb(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function bv(e,t){if(e){if(typeof e=="string")return Ju(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ju(e,t)}}function kb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Tb(e){return Pb(e)||Cb(e)||bv(e)||kb()}function Ib(e){if(Array.isArray(e))return e}function _b(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,a,i,l=[],s=!0,u=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(s=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(p){u=!0,o=p}finally{try{if(!s&&n.return!=null&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}function Nb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Oo(e,t){return Ib(e)||_b(e,t)||bv(e,t)||Nb()}var Rb={root:function(t){var n=t.positionState,r=t.classNameState;return ue("p-tooltip p-component",yv({},"p-tooltip-".concat(n),!0),r)},arrow:"p-tooltip-arrow",text:"p-tooltip-text"},Lb={arrow:function(t){var n=t.context;return{top:n.bottom?"0":n.right||n.left||!n.right&&!n.left&&!n.top&&!n.bottom?"50%":null,bottom:n.top?"0":null,left:n.right||!n.right&&!n.left&&!n.top&&!n.bottom?"0":n.top||n.bottom?"50%":null,right:n.left?"0":null}}},Ab=`
@layer primereact {
    .p-tooltip {
        position: absolute;
        padding: .25em .5rem;
        /* #3687: Tooltip prevent scrollbar flickering */
        top: -9999px;
        left: -9999px;
    }
    
    .p-tooltip.p-tooltip-right,
    .p-tooltip.p-tooltip-left {
        padding: 0 .25rem;
    }
    
    .p-tooltip.p-tooltip-top,
    .p-tooltip.p-tooltip-bottom {
        padding:.25em 0;
    }
    
    .p-tooltip .p-tooltip-text {
       white-space: pre-line;
       word-break: break-word;
    }
    
    .p-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }
    
    .p-tooltip-right .p-tooltip-arrow {
        top: 50%;
        left: 0;
        margin-top: -.25rem;
        border-width: .25em .25em .25em 0;
    }
    
    .p-tooltip-left .p-tooltip-arrow {
        top: 50%;
        right: 0;
        margin-top: -.25rem;
        border-width: .25em 0 .25em .25rem;
    }
    
    .p-tooltip.p-tooltip-top {
        padding: .25em 0;
    }
    
    .p-tooltip-top .p-tooltip-arrow {
        bottom: 0;
        left: 50%;
        margin-left: -.25rem;
        border-width: .25em .25em 0;
    }
    
    .p-tooltip-bottom .p-tooltip-arrow {
        top: 0;
        left: 50%;
        margin-left: -.25rem;
        border-width: 0 .25em .25rem;
    }

    .p-tooltip-target-wrapper {
        display: inline-flex;
    }
}
`,Ui=ke.extend({defaultProps:{__TYPE:"Tooltip",appendTo:null,at:null,autoHide:!0,autoZIndex:!0,baseZIndex:0,className:null,closeOnEscape:!1,content:null,disabled:!1,event:null,hideDelay:0,hideEvent:"mouseleave",id:null,mouseTrack:!1,mouseTrackLeft:5,mouseTrackTop:5,my:null,onBeforeHide:null,onBeforeShow:null,onHide:null,onShow:null,position:"right",showDelay:0,showEvent:"mouseenter",showOnDisabled:!1,style:null,target:null,updateDelay:0,children:void 0},css:{classes:Rb,styles:Ab,inlineStyles:Lb}});function up(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Db(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?up(Object(n),!0).forEach(function(r){yv(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):up(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var ss=c.memo(c.forwardRef(function(e,t){var n=Et(),r=c.useContext(We),o=Ui.getProps(e,r),a=c.useState(!1),i=Oo(a,2),l=i[0],s=i[1],u=c.useState(o.position||"right"),p=Oo(u,2),d=p[0],f=p[1],b=c.useState(""),x=Oo(b,2),m=x[0],O=x[1],h=c.useState(!1),g=Oo(h,2),v=g[0],S=g[1],C={props:o,state:{visible:l,position:d,className:m},context:{right:d==="right",left:d==="left",top:d==="top",bottom:d==="bottom"}},N=Ui.setMetaData(C),k=N.ptm,L=N.cx,F=N.sx,I=N.isUnstyled;ma(Ui.css.styles,I,{name:"tooltip"}),$y({callback:function(){rt()},when:o.closeOnEscape,priority:[zy.TOOLTIP,0]});var P=c.useRef(null),le=c.useRef(null),G=c.useRef(null),pe=c.useRef(null),Z=c.useRef(!0),be=c.useRef({}),Oe=c.useRef(null),R=vd({listener:function(_){!K.isTouchDevice()&&rt(_)}}),B=Oo(R,2),D=B[0],te=B[1],X=cv({target:G.current,listener:function(_){rt(_)},when:l}),ne=Oo(X,2),ce=ne[0],At=ne[1],tt=function(_){return!(o.content||de(_,"tooltip"))},qe=function(_){return!(o.content||de(_,"tooltip")||o.children)},Re=function(_){return de(_,"mousetrack")||o.mouseTrack},me=function(_){return de(_,"disabled")==="true"||Me(_,"disabled")||o.disabled},De=function(_){return de(_,"showondisabled")||o.showOnDisabled},Ie=function(){return de(G.current,"autohide")||o.autoHide},de=function(_,J){return Me(_,"data-pr-".concat(J))?_.getAttribute("data-pr-".concat(J)):null},Me=function(_,J){return _&&_.hasAttribute(J)},nt=function(_){var J=[de(_,"showevent")||o.showEvent],Se=[de(_,"hideevent")||o.hideEvent];if(Re(_))J=["mousemove"],Se=["mouseleave"];else{var ve=de(_,"event")||o.event;ve==="focus"&&(J=["focus"],Se=["blur"]),ve==="both"&&(J=["focus","mouseenter"],Se=v?["blur"]:["mouseleave","blur"])}return{showEvents:J,hideEvents:Se}},ut=function(_){return de(_,"position")||d},en=function(_){var J=de(_,"mousetracktop")||o.mouseTrackTop,Se=de(_,"mousetrackleft")||o.mouseTrackLeft;return{top:J,left:Se}},gt=function(_,J){if(le.current){var Se=de(_,"tooltip")||o.content;Se?(le.current.innerHTML="",le.current.appendChild(document.createTextNode(Se)),J()):o.children&&J()}},Sn=function(_){gt(G.current,function(){var J=Oe.current,Se=J.pageX,ve=J.pageY;o.autoZIndex&&!Mr.get(P.current)&&Mr.set("tooltip",P.current,r&&r.autoZIndex||St.autoZIndex,o.baseZIndex||r&&r.zIndex.tooltip||St.zIndex.tooltip),P.current.style.left="",P.current.style.top="",Ie()&&(P.current.style.pointerEvents="none");var ge=Re(G.current)||_==="mouse";(ge&&!pe.current||ge)&&(pe.current={width:K.getOuterWidth(P.current),height:K.getOuterHeight(P.current)}),Kt(G.current,{x:Se,y:ve},_)})},En=function(_){_.type&&_.type==="focus"&&S(!0),G.current=_.currentTarget;var J=me(G.current),Se=qe(De(G.current)&&J?G.current.firstChild:G.current);if(!(Se||J))if(Oe.current=_,l)nn("updateDelay",Sn);else{var ve=Dt(o.onBeforeShow,{originalEvent:_,target:G.current});ve&&nn("showDelay",function(){s(!0),Dt(o.onShow,{originalEvent:_,target:G.current})})}},rt=function(_){if(_&&_.type==="blur"&&S(!1),On(),l){var J=Dt(o.onBeforeHide,{originalEvent:_,target:G.current});J&&nn("hideDelay",function(){!Ie()&&Z.current===!1||(Mr.clear(P.current),K.removeClass(P.current,"p-tooltip-active"),s(!1),Dt(o.onHide,{originalEvent:_,target:G.current}))})}},Kt=function(_,J,Se){var ve=0,ge=0,Ge=Se||d;if((Re(_)||Ge=="mouse")&&J){var jt={width:K.getOuterWidth(P.current),height:K.getOuterHeight(P.current)};ve=J.x,ge=J.y;var Ft=en(_),Ln=Ft.top,at=Ft.left;switch(Ge){case"left":ve=ve-(jt.width+at),ge=ge-(jt.height/2-Ln);break;case"right":case"mouse":ve=ve+at,ge=ge-(jt.height/2-Ln);break;case"top":ve=ve-(jt.width/2-at),ge=ge-(jt.height+Ln);break;case"bottom":ve=ve-(jt.width/2-at),ge=ge+Ln;break}ve<=0||pe.current.width>jt.width?(P.current.style.left="0px",P.current.style.right=window.innerWidth-jt.width-ve+"px"):(P.current.style.right="",P.current.style.left=ve+"px"),P.current.style.top=ge+"px",K.addClass(P.current,"p-tooltip-active")}else{var pn=K.findCollisionPosition(Ge),Cr=de(_,"my")||o.my||pn.my,An=de(_,"at")||o.at||pn.at;P.current.style.padding="0px",K.flipfitCollision(P.current,_,Cr,An,function(zt){var Dn=zt.at,Mn=Dn.x,sr=Dn.y,ur=zt.my.x,Zn=o.at?Mn!=="center"&&Mn!==ur?Mn:sr:zt.at["".concat(pn.axis)];P.current.style.padding="",f(Zn),ar(Zn),K.addClass(P.current,"p-tooltip-active")})}},ar=function(_){if(P.current){var J=getComputedStyle(P.current);_==="left"?P.current.style.left=parseFloat(J.left)-parseFloat(J.paddingLeft)*2+"px":_==="top"&&(P.current.style.top=parseFloat(J.top)-parseFloat(J.paddingTop)*2+"px")}},ir=function(){Ie()||(Z.current=!1)},fn=function(_){Ie()||(Z.current=!0,rt(_))},tn=function(_){if(_){var J=nt(_),Se=J.showEvents,ve=J.hideEvents,ge=Xn(_);Se.forEach(function(Ge){return ge==null?void 0:ge.addEventListener(Ge,En)}),ve.forEach(function(Ge){return ge==null?void 0:ge.addEventListener(Ge,rt)})}},lr=function(_){if(_){var J=nt(_),Se=J.showEvents,ve=J.hideEvents,ge=Xn(_);Se.forEach(function(Ge){return ge==null?void 0:ge.removeEventListener(Ge,En)}),ve.forEach(function(Ge){return ge==null?void 0:ge.removeEventListener(Ge,rt)})}},nn=function(_,J){On();var Se=de(G.current,_.toLowerCase())||o[_];Se?be.current["".concat(_)]=setTimeout(function(){return J()},Se):J()},Dt=function(_){if(_){for(var J=arguments.length,Se=new Array(J>1?J-1:0),ve=1;ve<J;ve++)Se[ve-1]=arguments[ve];var ge=_.apply(void 0,Se);return ge===void 0&&(ge=!0),ge}return!0},On=function(){Object.values(be.current).forEach(function(_){return clearTimeout(_)})},Xn=function(_){if(_){if(De(_)){if(!_.hasWrapper){var J=document.createElement("div"),Se=_.nodeName==="INPUT";return Se?K.addMultipleClasses(J,"p-tooltip-target-wrapper p-inputwrapper"):K.addClass(J,"p-tooltip-target-wrapper"),_.parentNode.insertBefore(J,_),J.appendChild(_),_.hasWrapper=!0,J}return _.parentElement}else if(_.hasWrapper){var ve;(ve=_.parentElement).replaceWith.apply(ve,Tb(_.parentElement.childNodes)),delete _.hasWrapper}return _}return null},Qn=function(_){vt(_),ot(_)},ot=function(_){Mt(_||o.target,tn)},vt=function(_){Mt(_||o.target,lr)},Mt=function(_,J){if(_=T.getRefElement(_),_)if(K.isElement(_))J(_);else{var Se=function(ge){var Ge=K.find(document,ge);Ge.forEach(function(jt){J(jt)})};_ instanceof Array?_.forEach(function(ve){Se(ve)}):Se(_)}};yo(function(){l&&G.current&&me(G.current)&&rt()}),st(function(){return ot(),function(){vt()}},[En,rt,o.target]),st(function(){if(l){var se=ut(G.current),_=de(G.current,"classname");f(se),O(_),Sn(se),D(),ce()}else f(o.position||"right"),O(""),G.current=null,pe.current=null,Z.current=!0;return function(){te(),At()}},[l]),st(function(){var se=ut(G.current);l&&se!=="mouse"&&nn("updateDelay",function(){gt(G.current,function(){Kt(G.current)})})},[o.content]),Qr(function(){rt(),Mr.clear(P.current)}),c.useImperativeHandle(t,function(){return{props:o,updateTargetEvents:Qn,loadTargetEvents:ot,unloadTargetEvents:vt,show:En,hide:rt,getElement:function(){return P.current},getTarget:function(){return G.current}}});var rn=function(){var _=tt(G.current),J=n({id:o.id,className:ue(o.className,L("root",{positionState:d,classNameState:m})),style:o.style,role:"tooltip","aria-hidden":l,onMouseEnter:function(Ge){return ir()},onMouseLeave:function(Ge){return fn(Ge)}},Ui.getOtherProps(o),k("root")),Se=n({className:L("arrow"),style:F("arrow",Db({},C))},k("arrow")),ve=n({className:L("text")},k("text"));return c.createElement("div",zl({ref:P},J),c.createElement("div",Se),c.createElement("div",zl({ref:le},ve),_&&o.children))};if(l){var Rn=rn();return c.createElement(hd,{element:Rn,appendTo:o.appendTo,visible:!0})}return null}));ss.displayName="Tooltip";function $l(){return $l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$l.apply(this,arguments)}function mi(e){"@babel/helpers - typeof";return mi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mi(e)}function Mb(e,t){if(mi(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(mi(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function jb(e){var t=Mb(e,"string");return mi(t)==="symbol"?t:String(t)}function Fb(e,t,n){return t=jb(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var zb={root:function(t){var n=t.props,r=t.isFilled,o=t.context;return ue("p-inputtext p-component",{"p-disabled":n.disabled,"p-filled":r,"p-invalid":n.invalid,"p-variant-filled":n.variant?n.variant==="filled":o&&o.inputStyle==="filled"})}},Vi=ke.extend({defaultProps:{__TYPE:"InputText",__parentMetadata:null,children:void 0,className:null,invalid:!1,variant:null,keyfilter:null,onBeforeInput:null,onInput:null,onKeyDown:null,onPaste:null,tooltip:null,tooltipOptions:null,validateOnly:!1,iconPosition:null},css:{classes:zb}});function cp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function dp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?cp(Object(n),!0).forEach(function(r){Fb(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var wv=c.memo(c.forwardRef(function(e,t){var n=Et(),r=c.useContext(We),o=Vi.getProps(e,r),a=Vi.setMetaData(dp(dp({props:o},o.__parentMetadata),{},{context:{disabled:o.disabled,iconPosition:o.iconPosition}})),i=a.ptm,l=a.cx,s=a.isUnstyled;ma(Vi.css.styles,s,{name:"inputtext",styled:!0});var u=c.useRef(t),p=function(g){o.onKeyDown&&o.onKeyDown(g),o.keyfilter&&Go.onKeyPress(g,o.keyfilter,o.validateOnly)},d=function(g){o.onBeforeInput&&o.onBeforeInput(g),o.keyfilter&&Go.onBeforeInput(g,o.keyfilter,o.validateOnly)},f=function(g){var v=g.target,S=!0;o.keyfilter&&o.validateOnly&&(S=Go.validate(g,o.keyfilter)),o.onInput&&o.onInput(g,S),T.isNotEmpty(v.value)?K.addClass(v,"p-filled"):K.removeClass(v,"p-filled")},b=function(g){o.onPaste&&o.onPaste(g),o.keyfilter&&Go.onPaste(g,o.keyfilter,o.validateOnly)};c.useEffect(function(){T.combinedRefs(u,t)},[u,t]);var x=c.useMemo(function(){return T.isNotEmpty(o.value)||T.isNotEmpty(o.defaultValue)},[o.value,o.defaultValue]),m=T.isNotEmpty(o.tooltip),O=n({className:ue(o.className,l("root",{context:r,isFilled:x})),onBeforeInput:d,onInput:f,onKeyDown:p,onPaste:b},Vi.getOtherProps(o),i("root"));return c.createElement(c.Fragment,null,c.createElement("input",$l({ref:u},O)),m&&c.createElement(ss,$l({target:u,content:o.tooltip,pt:i("tooltip")},o.tooltipOptions)))}));wv.displayName="InputText";function Ha(){return Ha=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ha.apply(this,arguments)}function ec(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function $b(e){if(Array.isArray(e))return ec(e)}function Bb(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function xv(e,t){if(e){if(typeof e=="string")return ec(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ec(e,t)}}function Hb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ub(e){return $b(e)||Bb(e)||xv(e)||Hb()}function gi(e){"@babel/helpers - typeof";return gi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gi(e)}function Vb(e,t){if(gi(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(gi(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Kb(e){var t=Vb(e,"string");return gi(t)==="symbol"?t:String(t)}function Wb(e,t,n){return t=Kb(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qb(e){if(Array.isArray(e))return e}function Gb(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,a,i,l=[],s=!0,u=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(s=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(p){u=!0,o=p}finally{try{if(!s&&n.return!=null&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}function Yb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xb(e,t){return qb(e)||Gb(e,t)||xv(e,t)||Yb()}var Qb={root:function(t){var n=t.props,r=t.focusedState,o=t.stacked,a=t.horizontal,i=t.vertical;return ue("p-inputnumber p-component p-inputwrapper",{"p-inputwrapper-filled":n.value!=null&&n.value.toString().length>0,"p-inputwrapper-focus":r,"p-inputnumber-buttons-stacked":o,"p-inputnumber-buttons-horizontal":a,"p-inputnumber-buttons-vertical":i,"p-invalid":n.invalid})},input:function(t){var n=t.props,r=t.context;return ue("p-inputnumber-input",{"p-variant-filled":n.variant?n.variant==="filled":r&&r.inputStyle==="filled"})},buttonGroup:"p-inputnumber-button-group",incrementButton:function(t){var n=t.props;return ue("p-inputnumber-button p-inputnumber-button-up p-button p-button-icon-only p-component",{"p-disabled":n.disabled})},incrementIcon:"p-button-icon",decrementButton:function(t){var n=t.props;return ue("p-inputnumber-button p-inputnumber-button-down p-button p-button-icon-only p-component",{"p-disabled":n.disabled})},decrementIcon:"p-button-icon"},Zb=`
@layer primereact {
    .p-inputnumber {
        display: inline-flex;
    }
    
    .p-inputnumber-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
    }
    
    .p-inputnumber-buttons-stacked .p-button.p-inputnumber-button .p-button-label,
    .p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button .p-button-label {
        display: none;
    }
    
    .p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-up {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        padding: 0;
    }
    
    .p-inputnumber-buttons-stacked .p-inputnumber-input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    
    .p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-down {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-left-radius: 0;
        padding: 0;
    }
    
    .p-inputnumber-buttons-stacked .p-inputnumber-button-group {
        display: flex;
        flex-direction: column;
    }
    
    .p-inputnumber-buttons-stacked .p-inputnumber-button-group .p-button.p-inputnumber-button {
        flex: 1 1 auto;
    }
    
    .p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-up {
        order: 3;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    
    .p-inputnumber-buttons-horizontal .p-inputnumber-input {
        order: 2;
        border-radius: 0;
    }
    
    .p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-down {
        order: 1;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    
    .p-inputnumber-buttons-vertical {
        flex-direction: column;
    }
    
    .p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-up {
        order: 1;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        width: 100%;
    }
    
    .p-inputnumber-buttons-vertical .p-inputnumber-input {
        order: 2;
        border-radius: 0;
        text-align: center;
    }
    
    .p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-down {
        order: 3;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        width: 100%;
    }
    
    .p-inputnumber-input {
        flex: 1 1 auto;
    }
    
    .p-fluid .p-inputnumber {
        width: 100%;
    }
    
    .p-fluid .p-inputnumber .p-inputnumber-input {
        width: 1%;
    }
    
    .p-fluid .p-inputnumber-buttons-vertical .p-inputnumber-input {
        width: 100%;
    }
}
`,Ki=ke.extend({defaultProps:{__TYPE:"InputNumber",__parentMetadata:null,allowEmpty:!0,ariaLabelledBy:null,autoFocus:!1,buttonLayout:"stacked",className:null,currency:void 0,currencyDisplay:void 0,decrementButtonClassName:null,decrementButtonIcon:null,disabled:!1,format:!0,id:null,incrementButtonClassName:null,incrementButtonIcon:null,inputClassName:null,inputId:null,inputMode:null,inputRef:null,inputStyle:null,invalid:!1,variant:null,locale:void 0,localeMatcher:void 0,max:null,maxFractionDigits:void 0,maxLength:null,min:null,minFractionDigits:void 0,mode:"decimal",name:null,onBlur:null,onChange:null,onFocus:null,onKeyDown:null,onKeyUp:null,onValueChange:null,pattern:null,placeholder:null,prefix:null,readOnly:!1,required:!1,roundingMode:void 0,showButtons:!1,size:null,step:1,style:null,suffix:null,tabIndex:null,tooltip:null,tooltipOptions:null,type:"text",useGrouping:!0,value:null,children:void 0},css:{classes:Qb,styles:Zb}});function fp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Po(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?fp(Object(n),!0).forEach(function(r){Wb(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Sv=c.memo(c.forwardRef(function(e,t){var n=Et(),r=c.useContext(We),o=Ki.getProps(e,r),a=c.useState(!1),i=Xb(a,2),l=i[0],s=i[1],u=Po(Po({props:o},o.__parentMetadata),{},{state:{focused:l}}),p=Ki.setMetaData(u),d=p.ptm,f=p.cx,b=p.isUnstyled;ma(Ki.css.styles,b,{name:"inputnumber"});var x=c.useRef(null),m=c.useRef(null),O=c.useRef(null),h=c.useRef(null),g=c.useRef(null),v=c.useRef(null),S=c.useRef(null),C=c.useRef(null),N=c.useRef(null),k=c.useRef(null),L=c.useRef(null),F=c.useRef(null),I=c.useRef(null),P=c.useRef(null),le=c.useRef(null),G=c.useRef(null),pe=c.useRef(null),Z=c.useRef(null),be=c.useRef(!1),Oe=o.locale||r&&r.locale||St.locale,R=o.showButtons&&o.buttonLayout==="stacked",B=o.showButtons&&o.buttonLayout==="horizontal",D=o.showButtons&&o.buttonLayout==="vertical",te=o.inputMode||(o.mode==="decimal"&&!o.minFractionDigits?"numeric":"decimal"),X=function(){var w,E;return{localeMatcher:o.localeMatcher,style:o.mode,currency:o.currency,currencyDisplay:o.currencyDisplay,useGrouping:o.useGrouping,minimumFractionDigits:(w=o.minFractionDigits)!==null&&w!==void 0?w:void 0,maximumFractionDigits:(E=o.maxFractionDigits)!==null&&E!==void 0?E:void 0,roundingMode:o.roundingMode}},ne=function(){g.current=new Intl.NumberFormat(Oe,X());var w=Ub(new Intl.NumberFormat(Oe,{useGrouping:!1}).format(9876543210)).reverse(),E=new Map(w.map(function(z,j){return[z,j]}));k.current=new RegExp("[".concat(w.join(""),"]"),"g"),L.current=qe(),F.current=Re(),I.current=me(),P.current=tt(),le.current=At(),G.current=Ie(),pe.current=De(),Z.current=function(z){return E.get(z)}},ce=function(w){return w.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},At=function(){return new Intl.NumberFormat(Oe,{useGrouping:!1}).format(1.1).trim().replace(k.current,"")},tt=function(){var w=new Intl.NumberFormat(Oe,Po(Po({},X()),{},{useGrouping:!1}));return new RegExp("[".concat(w.format(1.1).replace(I.current,"").trim().replace(k.current,""),"]"),"g")},qe=function(){var w=new Intl.NumberFormat(Oe,{useGrouping:!0});return v.current=w.format(1e6).trim().replace(k.current,"").charAt(0),new RegExp("[".concat(v.current,"]"),"g")},Re=function(){var w=new Intl.NumberFormat(Oe,{useGrouping:!1});return new RegExp("[".concat(w.format(-1).trim().replace(k.current,""),"]"),"g")},me=function(){if(o.currency){var w=new Intl.NumberFormat(Oe,{style:"currency",currency:o.currency,currencyDisplay:o.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0,roundingMode:o.roundingMode});return new RegExp("[".concat(w.format(1).replace(/\s/g,"").replace(k.current,"").replace(L.current,""),"]"),"g")}return new RegExp("[]","g")},De=function(){if(o.prefix)S.current=o.prefix;else{var w=new Intl.NumberFormat(Oe,{style:o.mode,currency:o.currency,currencyDisplay:o.currencyDisplay});S.current=w.format(1).split("1")[0]}return new RegExp("".concat(ce(S.current||"")),"g")},Ie=function(){if(o.suffix)C.current=o.suffix;else{var w=new Intl.NumberFormat(Oe,{style:o.mode,currency:o.currency,currencyDisplay:o.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0,roundingMode:o.roundingMode});C.current=w.format(1).split("1")[1]}return new RegExp("".concat(ce(C.current||"")),"g")},de=function(w){if(w!=null){if(w==="-")return w;if(o.format){var E=new Intl.NumberFormat(Oe,X()),z=E.format(w);return o.prefix&&(z=o.prefix+z),o.suffix&&(z=z+o.suffix),z}return w.toString()}return""},Me=function(w){var E=w.replace(G.current,"").replace(pe.current,"").trim().replace(/\s/g,"").replace(I.current,"").replace(L.current,"").replace(F.current,"-").replace(P.current,".").replace(k.current,Z.current);if(E){if(E==="-")return E;var z=+E;return isNaN(z)?null:z}return null},nt=function(w,E,z){var j=E||500;Pn(),O.current=setTimeout(function(){nt(w,40,z)},j),ut(w,z)},ut=function(w,E){if(m.current){var z=o.step*E,j=Me(m.current.value)||0,$=zt(j+z);if(o.maxLength&&o.maxLength<de($).length)return;Cr(w,j,$),!K.isTouchDevice()&&Mn($,null,"spin"),ct(w,$)}},en=function(w){!o.disabled&&!o.readOnly&&(K.isTouchDevice()||K.focus(m.current,o.autoFocus),nt(w,null,1),w.preventDefault())},gt=function(){!o.disabled&&!o.readOnly&&Pn()},Sn=function(){!o.disabled&&!o.readOnly&&Pn()},En=function(){!o.disabled&&!o.readOnly&&Pn()},rt=function(w){!o.disabled&&!o.readOnly&&(w.keyCode===32||w.keyCode===13)&&nt(w,null,1)},Kt=function(w){!o.disabled&&!o.readOnly&&(K.isTouchDevice()||K.focus(m.current,o.autoFocus),nt(w,null,-1),w.preventDefault())},ar=function(){!o.disabled&&!o.readOnly&&Pn()},ir=function(){!o.disabled&&!o.readOnly&&Pn()},fn=function(){!o.disabled&&!o.readOnly&&Pn()},tn=function(w){!o.disabled&&!o.readOnly&&(w.keyCode===32||w.keyCode===13)&&nt(w,null,-1)},lr=function(w){if(!(o.disabled||o.readOnly)&&(N.current&&(w.target.value=h.current,N.current=!1),!K.isAndroid())){var E=w.nativeEvent.inputType,z=w.nativeEvent.data;E==="insertText"&&/\D/.test(z)&&(w.target.value=h.current)}},nn=function(w){if(!(!K.isAndroid()||o.disabled||o.readOnly)&&!(o.onKeyUp&&(o.onKeyUp(w),w.defaultPrevented))){var E=w.which||w.keyCode;E!==13&&w.preventDefault();var z=String.fromCharCode(E),j=vt(z),$=Qn(z);48<=E&&E<=57||$||j?_(w,z,{isDecimalSign:j,isMinusSign:$}):at(w,w.target.value,null,"delete-single")}},Dt=function(w){if(!(o.disabled||o.readOnly)){if(w.altKey||w.ctrlKey||w.metaKey){w.key.toLowerCase()==="x"&&(w.ctrlKey||w.metaKey)?N.current=!1:N.current=!0;return}if(!(o.onKeyDown&&(o.onKeyDown(w),w.defaultPrevented))&&(h.current=w.target.value,!K.isAndroid())){var E=w.target.selectionStart,z=w.target.selectionEnd,j=w.target.value,$=null;switch(w.code){case"ArrowUp":ut(w,1),w.preventDefault();break;case"ArrowDown":ut(w,-1),w.preventDefault();break;case"ArrowLeft":Ft(j.charAt(E-1))||w.preventDefault();break;case"ArrowRight":Ft(j.charAt(E))||w.preventDefault();break;case"Tab":case"Enter":case"NumpadEnter":$=zt(Me(j)),m.current.value=de($),m.current.setAttribute("aria-valuenow",$),ct(w,$);break;case"Backspace":if(w.preventDefault(),E===z){var ye=j.charAt(E-1);if(Ft(ye)){var we=Rn(j),dt=we.decimalCharIndex,ft=we.decimalCharIndexWithoutPrefix,je=Zr(j);if(L.current.test(ye))L.current.lastIndex=0,$=j.slice(0,E-2)+j.slice(E-1);else if(P.current.test(ye))P.current.lastIndex=0,je?m.current.setSelectionRange(E-1,E-1):$=j.slice(0,E-1)+j.slice(E);else if(dt>0&&E>dt){var Xe=Mt()&&(o.minFractionDigits||0)<je?"":"0";$=j.slice(0,E-1)+Xe+j.slice(E)}else ft===1?($=j.slice(0,E-1)+"0"+j.slice(E),$=Me($)>0?$:""):$=j.slice(0,E-1)+j.slice(E)}else if(I.current.test(ye)){var fe=se(j),Ue=fe.minusCharIndex,$e=fe.currencyCharIndex;Ue===$e-1&&($=j.slice(0,Ue)+j.slice(E))}at(w,$,null,"delete-single")}else $=ve(j,E,z),at(w,$,null,"delete-range");break;case"Delete":if(w.preventDefault(),E===z){var on=j.charAt(E),yt=Rn(j),bt=yt.decimalCharIndex,jn=yt.decimalCharIndexWithoutPrefix;if(Ft(on)){var Jr=Zr(j);if(L.current.test(on))L.current.lastIndex=0,$=j.slice(0,E)+j.slice(E+2);else if(P.current.test(on))P.current.lastIndex=0,Jr?m.current.setSelectionRange(E+1,E+1):$=j.slice(0,E)+j.slice(E+1);else if(bt>0&&E>bt){var cr=Mt()&&(o.minFractionDigits||0)<Jr?"":"0";$=j.slice(0,E)+cr+j.slice(E+1)}else jn===1?($=j.slice(0,E)+"0"+j.slice(E+1),$=Me($)>0?$:""):$=j.slice(0,E)+j.slice(E+1)}at(w,$,null,"delete-back-single")}else $=ve(j,E,z),at(w,$,null,"delete-range");break;case"End":w.preventDefault(),T.isEmpty(o.max)||ct(w,o.max);break;case"Home":w.preventDefault(),T.isEmpty(o.min)||ct(w,o.min);break;default:w.preventDefault();var Jn=w.key;if(Jn){var wo=vt(Jn),V=Qn(Jn);(Number(Jn)>=0&&Number(Jn)<=9||V||wo)&&_(w,Jn,{isDecimalSign:wo,isMinusSign:V})}break}}}},On=function(w){if(w.preventDefault(),!(o.disabled||o.readOnly)){var E=(w.clipboardData||window.clipboardData).getData("Text");if(E){var z=Me(E);z!=null&&_(w,z.toString())}}},Xn=function(){return T.isEmpty(o.min)||o.min<0},Qn=function(w){return F.current.test(w)||w==="-"?(F.current.lastIndex=0,!0):!1},ot=function(w){return rn(w)?w.toString().replace(/\.(?=[^.]*$)/,le.current):w},vt=function(w){return P.current.test(w)||rn(w)?(P.current.lastIndex=0,!0):!1},Mt=function(){return o.mode==="decimal"},rn=function(w){var E=new Intl.NumberFormat(Oe,X()),z=Me(E.format(w));return z===null?!1:z%1!==0},Rn=function(w){var E=w.search(P.current);P.current.lastIndex=0;var z=w.replace(pe.current,"").trim().replace(/\s/g,"").replace(I.current,""),j=z.search(P.current);return P.current.lastIndex=0,{decimalCharIndex:E,decimalCharIndexWithoutPrefix:j}},se=function(w){var E=w.search(P.current);P.current.lastIndex=0;var z=w.search(F.current);F.current.lastIndex=0;var j=w.search(G.current);G.current.lastIndex=0;var $=w.search(I.current);return $===0&&S.current&&S.current.length>1&&($=S.current.trim().length),I.current.lastIndex=0,{decimalCharIndex:E,minusCharIndex:z,suffixCharIndex:j,currencyCharIndex:$}},_=function(w,E){var z=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{isDecimalSign:!1,isMinusSign:!1},j=E.search(F.current);if(F.current.lastIndex=0,!(!Xn()&&j!==-1)){var $=m.current.selectionStart,ye=m.current.selectionEnd,we=m.current.value.trim(),dt=se(we),ft=dt.decimalCharIndex,je=dt.minusCharIndex,Xe=dt.suffixCharIndex,fe=dt.currencyCharIndex,Ue=g.current.resolvedOptions().maximumFractionDigits,$e;if(z.isMinusSign){var on=je===-1;($===0||$===fe+1)&&($e=we,(on||ye!==0)&&($e=Se(we,E,0,ye)),at(w,$e,E,"insert"))}else if(z.isDecimalSign)ft>0&&$===ft?at(w,we,E,"insert"):(ft>$&&ft<ye||ft===-1&&(Ue||o.maxFractionDigits))&&($e=Se(we,E,$,ye),at(w,$e,E,"insert"));else{var yt=$!==ye?"range-insert":"insert";if(ft>0&&$>ft){if($+E.length-(ft+1)<=Ue){var bt=fe>=$?fe-1:Xe>=$?Xe:we.length;$e=we.slice(0,$)+E+we.slice($+E.length,bt)+we.slice(bt),at(w,$e,E,yt)}}else $e=Se(we,E,$,ye),at(w,$e,E,yt)}}},J=function(w){return w&&w.replace(G.current,"").trim().replace(/\s/g,"").replace(I.current,"")},Se=function(w,E,z,j){var $=vt(E)?E:E.split(P.current);if($.length===2){var ye=w.slice(z,j).search(P.current);return P.current.lastIndex=0,ye>0?w.slice(0,z)+de(E)+J(w).slice(j):w||de(E)}else{if(vt(E)&&w.length===0)return de("0.");if(j-z===w.length)return de(E);if(z===0){var we=T.isLetter(w[j])?j-1:j;return E+w.slice(we)}else if(j===w.length)return w.slice(0,z)+E}var dt=w.slice(z,j),ft=/\s$/.test(dt)?" ":"";return w.slice(0,z)+E+ft+w.slice(j)},ve=function(w,E,z){var j;return z-E===w.length?j="":E===0?j=w.slice(z):z===w.length?j=w.slice(0,E):j=w.slice(0,E)+w.slice(z),j},ge=function(){var w=m.current.selectionStart,E=m.current.value,z=E.length,j=null,$=(S.current||"").length;E=E.replace(pe.current,""),w=w-$;var ye=E.charAt(w);if(Ft(ye))return w+$;for(var we=w-1;we>=0;)if(ye=E.charAt(we),Ft(ye)){j=we+$;break}else we--;if(j!==null)m.current.setSelectionRange(j+1,j+1);else{for(we=w;we<z;)if(ye=E.charAt(we),Ft(ye)){j=we+$;break}else we++;j!==null&&m.current.setSelectionRange(j,j)}return j||0},Ge=function(){be.current=!0},jt=function(){ge()},Ft=function(w){return w.length===1&&(k.current.test(w)||P.current.test(w)||L.current.test(w)||F.current.test(w))?(Ln(),!0):!1},Ln=function(){k.current.lastIndex=0,P.current.lastIndex=0,L.current.lastIndex=0,F.current.lastIndex=0},at=function(w,E,z,j){var $=m.current.value,ye=null;E!=null&&(ye=pn(Me(E)),Mn(ye,z,j,E),Cr(w,$,ye))},pn=function(w){return!w&&!o.allowEmpty?o.min||0:w},Cr=function(w,E,z){o.onChange&&An(E,z)&&o.onChange({originalEvent:w,value:z})},An=function(w,E){if(E===null&&w!==null)return!0;if(E!=null){var z=typeof w=="string"?Me(w):w;return E!==z}return!1},zt=function(w){return w==="-"?null:Dn(w)},Dn=function(w){return T.isEmpty(w)?null:o.min!==null&&w<o.min?o.min:o.max!==null&&w>o.max?o.max:w},Mn=function(w,E,z,j){E=E||"";var $=m.current,ye=$.value,we=de(w),dt=ye.length;if(we!==j&&(we=Zn(we,j)),dt===0){$.value=we,$.setSelectionRange(0,0);var ft=ge(),je=ft+E.length+(vt(E)?1:0);$.setSelectionRange(je,je)}else{var Xe=$.selectionStart,fe=$.selectionEnd;if(o.maxLength&&o.maxLength<we.length)return;$.value=we;var Ue=we.length;if(z==="range-insert"){var $e=Me((ye||"").slice(0,Xe)),on=$e!==null?$e.toString():"",yt=on.split("").join("(".concat(v.current,")?")),bt=new RegExp(yt,"g");bt.test(we);var jn=E.split("").join("(".concat(v.current,")?")),Jr=new RegExp(jn,"g");Jr.test(we.slice(bt.lastIndex)),fe=bt.lastIndex+Jr.lastIndex,$.setSelectionRange(fe,fe)}else if(Ue===dt)if(z==="insert"||z==="delete-back-single"){var cr=fe;E==="0"?cr=fe+1:cr=cr+Number(vt(w)||vt(E)),$.setSelectionRange(cr,cr)}else z==="delete-single"?$.setSelectionRange(fe-1,fe-1):(z==="delete-range"||z==="spin")&&$.setSelectionRange(fe,fe);else if(z==="delete-back-single"){var Jn=ye.charAt(fe-1),wo=ye.charAt(fe),V=dt-Ue,y=L.current.test(wo);y&&V===1?fe=fe+1:!y&&Ft(Jn)&&(fe=fe+(-1*V+1)),L.current.lastIndex=0,$.setSelectionRange(fe,fe)}else if(ye==="-"&&z==="insert"){$.setSelectionRange(0,0);var M=ge(),oe=M+E.length+1;$.setSelectionRange(oe,oe)}else fe=fe+(Ue-dt),$.setSelectionRange(fe,fe)}$.setAttribute("aria-valuenow",w)},sr=function(w){w=pn(w);var E=m.current,z=E.value,j=ur(w);z!==j&&(E.value=j,E.setAttribute("aria-valuenow",w))},ur=function(w){return de(pn(w))},Zn=function(w,E){if(w&&E){var z=E.search(P.current);P.current.lastIndex=0;var j=ot(w).split(P.current)[0].replace(G.current,"").trim();return z!==-1?j+E.slice(z):w}return w},Zr=function(w){if(w){var E=w.split(P.current);if(E.length===2)return J(E[1]).length}return 0},ct=function(w,E){o.onValueChange&&o.onValueChange({originalEvent:w,value:E,stopPropagation:function(){w==null||w.stopPropagation()},preventDefault:function(){w==null||w.preventDefault()},target:{name:o.name,id:o.id,value:E}})},Wt=function(w){if(s(!0),o.onFocus&&o.onFocus(w),(o.suffix||o.currency||o.prefix)&&m.current&&!be.current){var E=m.current.value,z=(S.current||"").length,j=(C.current||"").length,$=E.length===0?0:E.length-j;m.current.setSelectionRange(z,$)}},ga=function(w){if(s(!1),be.current=!1,m.current){var E=m.current.value;if(An(E,o.value)){var z=zt(Me(E));sr(z),ct(w,z)}}o.onBlur&&o.onBlur(w)},Pn=function(){O.current&&clearInterval(O.current)},bo=function(){var w=Dn(o.value);sr(o.format?w:ot(w));var E=zt(o.value);o.value!==null&&o.value!==E&&ct(null,E)},he=function(){return g.current};c.useImperativeHandle(t,function(){return{props:o,focus:function(){return K.focus(m.current)},getFormatter:he,getElement:function(){return x.current},getInput:function(){return m.current}}}),c.useEffect(function(){T.combinedRefs(m,o.inputRef)},[m,o.inputRef]),yo(function(){ne();var U=zt(o.value);o.value!==null&&o.value!==U&&ct(null,U)}),st(function(){ne(),bo()},[Oe,o.locale,o.localeMatcher,o.mode,o.currency,o.currencyDisplay,o.useGrouping,o.minFractionDigits,o.maxFractionDigits,o.suffix,o.prefix]),st(function(){bo()},[o.value]),st(function(){o.disabled&&Pn()},[o.disabled]);var A=function(){var w=ue(o.inputClassName,f("input",{context:r})),E=ur(o.value);return c.createElement(wv,Ha({ref:m,id:o.inputId,style:o.inputStyle,role:"spinbutton",className:w,defaultValue:E,type:o.type,size:o.size,tabIndex:o.tabIndex,inputMode:te,maxLength:o.maxLength,disabled:o.disabled,required:o.required,pattern:o.pattern,placeholder:o.placeholder,readOnly:o.readOnly,name:o.name,autoFocus:o.autoFocus,onKeyDown:Dt,onKeyPress:nn,onInput:lr,onClick:jt,onPointerDown:Ge,onBlur:ga,onFocus:Wt,onPaste:On,min:o.min,max:o.max,"aria-valuemin":o.min,"aria-valuemax":o.max,"aria-valuenow":o.value},Te,ie,{pt:d("input"),unstyled:o.unstyled,__parentMetadata:{parent:u}}))},W=function(){var w=n({className:f("incrementIcon")},d("incrementIcon")),E=o.incrementButtonIcon||c.createElement(hv,w),z=Xt.getJSXIcon(E,Po({},w),{props:o}),j=n({type:"button",className:ue(o.incrementButtonClassName,f("incrementButton")),onPointerLeave:Sn,onPointerDown:function(ye){return en(ye)},onPointerUp:gt,onKeyDown:function(ye){return rt(ye)},onKeyUp:En,disabled:o.disabled,tabIndex:-1,"aria-hidden":!0},d("incrementButton"));return c.createElement("button",j,z,c.createElement(Yn,null))},q=function(){var w=n({className:f("decrementIcon")},d("decrementIcon")),E=o.decrementButtonIcon||c.createElement(vv,w),z=Xt.getJSXIcon(E,Po({},w),{props:o}),j=n({type:"button",className:ue(o.decrementButtonClassName,f("decrementButton")),onPointerLeave:ir,onPointerDown:function(ye){return Kt(ye)},onPointerUp:ar,onKeyDown:function(ye){return tn(ye)},onKeyUp:fn,disabled:o.disabled,tabIndex:-1,"aria-hidden":!0},d("decrementButton"));return c.createElement("button",j,z,c.createElement(Yn,null))},ee=function(){var w=o.showButtons&&W(),E=o.showButtons&&q(),z=n({className:f("buttonGroup")},d("buttonGroup"));return R?c.createElement("span",z,w,E):c.createElement(c.Fragment,null,w,E)},re=T.isNotEmpty(o.tooltip),Q=Ki.getOtherProps(o),ie=T.reduceKeys(Q,K.DATA_PROPS),Te=T.reduceKeys(Q,K.ARIA_PROPS),Ce=A(),Ye=ee(),ht=n({id:o.id,className:ue(o.className,f("root",{focusedState:l,stacked:R,horizontal:B,vertical:D})),style:o.style},Q,d("root"));return c.createElement(c.Fragment,null,c.createElement("span",Ha({ref:x},ht),Ce,Ye),re&&c.createElement(ss,Ha({target:x,content:o.tooltip,pt:d("tooltip")},o.tooltipOptions)))}));Sv.displayName="InputNumber";function tc(){return tc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},tc.apply(this,arguments)}var Ev=c.memo(c.forwardRef(function(e,t){var n=_t.getPTI(e);return c.createElement("svg",tc({ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.68757 11.1451C7.7791 11.1831 7.8773 11.2024 7.9764 11.2019C8.07769 11.1985 8.17721 11.1745 8.26886 11.1312C8.36052 11.088 8.44238 11.0265 8.50943 10.9505L12.0294 7.49085C12.1707 7.34942 12.25 7.15771 12.25 6.95782C12.25 6.75794 12.1707 6.56622 12.0294 6.42479L8.50943 2.90479C8.37014 2.82159 8.20774 2.78551 8.04633 2.80192C7.88491 2.81833 7.73309 2.88635 7.6134 2.99588C7.4937 3.10541 7.41252 3.25061 7.38189 3.40994C7.35126 3.56927 7.37282 3.73423 7.44337 3.88033L10.4605 6.89748L7.44337 9.91463C7.30212 10.0561 7.22278 10.2478 7.22278 10.4477C7.22278 10.6475 7.30212 10.8393 7.44337 10.9807C7.51301 11.0512 7.59603 11.1071 7.68757 11.1451ZM1.94207 10.9505C2.07037 11.0968 2.25089 11.1871 2.44493 11.2019C2.63898 11.1871 2.81949 11.0968 2.94779 10.9505L6.46779 7.49085C6.60905 7.34942 6.68839 7.15771 6.68839 6.95782C6.68839 6.75793 6.60905 6.56622 6.46779 6.42479L2.94779 2.90479C2.80704 2.83757 2.6489 2.81563 2.49517 2.84201C2.34143 2.86839 2.19965 2.94178 2.08936 3.05207C1.97906 3.16237 1.90567 3.30415 1.8793 3.45788C1.85292 3.61162 1.87485 3.76975 1.94207 3.9105L4.95922 6.92765L1.94207 9.9448C1.81838 10.0831 1.75 10.2621 1.75 10.4477C1.75 10.6332 1.81838 10.8122 1.94207 10.9505Z",fill:"currentColor"}))}));Ev.displayName="AngleDoubleRightIcon";function nc(){return nc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nc.apply(this,arguments)}var Ov=c.memo(c.forwardRef(function(e,t){var n=_t.getPTI(e);return c.createElement("svg",nc({ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),c.createElement("path",{d:"M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z",fill:"currentColor"}))}));Ov.displayName="AngleRightIcon";function rc(){return rc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rc.apply(this,arguments)}var Pv=c.memo(c.forwardRef(function(e,t){var n=_t.getPTI(e);return c.createElement("svg",rc({ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),c.createElement("path",{d:"M8.75 11.185C8.65146 11.1854 8.55381 11.1662 8.4628 11.1284C8.37179 11.0906 8.28924 11.0351 8.22 10.965L4.72 7.46496C4.57955 7.32433 4.50066 7.13371 4.50066 6.93496C4.50066 6.73621 4.57955 6.54558 4.72 6.40496L8.22 2.93496C8.36095 2.84357 8.52851 2.80215 8.69582 2.81733C8.86312 2.83252 9.02048 2.90344 9.14268 3.01872C9.26487 3.134 9.34483 3.28696 9.36973 3.4531C9.39463 3.61924 9.36303 3.78892 9.28 3.93496L6.28 6.93496L9.28 9.93496C9.42045 10.0756 9.49934 10.2662 9.49934 10.465C9.49934 10.6637 9.42045 10.8543 9.28 10.995C9.13526 11.1257 8.9448 11.1939 8.75 11.185Z",fill:"currentColor"}))}));Pv.displayName="AngleLeftIcon";function oc(){return oc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oc.apply(this,arguments)}var Cv=c.memo(c.forwardRef(function(e,t){var n=_t.getPTI(e);return c.createElement("svg",oc({ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),c.createElement("path",{d:"M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",fill:"currentColor"}))}));Cv.displayName="ChevronDownIcon";function ac(){return ac=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ac.apply(this,arguments)}var kv=c.memo(c.forwardRef(function(e,t){var n=_t.getPTI(e);return c.createElement("svg",ac({ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),c.createElement("path",{d:"M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z",fill:"currentColor"}))}));kv.displayName="ChevronUpIcon";function ic(){return ic=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ic.apply(this,arguments)}var yd=c.memo(c.forwardRef(function(e,t){var n=_t.getPTI(e);return c.createElement("svg",ic({ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),c.createElement("path",{d:"M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",fill:"currentColor"}))}));yd.displayName="TimesIcon";var Jb=F1();function lc(){return lc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lc.apply(null,arguments)}function Tv(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}function sc(e,t){return sc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},sc(e,t)}function Iv(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,sc(e,t)}function e2(e,t){return e.classList?!!t&&e.classList.contains(t):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")!==-1}function t2(e,t){e.classList?e.classList.add(t):e2(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function pp(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function n2(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=pp(e.className,t):e.setAttribute("class",pp(e.className&&e.className.baseVal||"",t))}const mp={disabled:!1},_v=xe.createContext(null);var Nv=function(t){return t.scrollTop},_a="unmounted",no="exited",ro="entering",Ro="entered",uc="exiting",Pr=function(e){Iv(t,e);function t(r,o){var a;a=e.call(this,r,o)||this;var i=o,l=i&&!i.isMounting?r.enter:r.appear,s;return a.appearStatus=null,r.in?l?(s=no,a.appearStatus=ro):s=Ro:r.unmountOnExit||r.mountOnEnter?s=_a:s=no,a.state={status:s},a.nextCallback=null,a}t.getDerivedStateFromProps=function(o,a){var i=o.in;return i&&a.status===_a?{status:no}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(o){var a=null;if(o!==this.props){var i=this.state.status;this.props.in?i!==ro&&i!==Ro&&(a=ro):(i===ro||i===Ro)&&(a=uc)}this.updateStatus(!1,a)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var o=this.props.timeout,a,i,l;return a=i=l=o,o!=null&&typeof o!="number"&&(a=o.exit,i=o.enter,l=o.appear!==void 0?o.appear:i),{exit:a,enter:i,appear:l}},n.updateStatus=function(o,a){if(o===void 0&&(o=!1),a!==null)if(this.cancelNextCallback(),a===ro){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:Ia.findDOMNode(this);i&&Nv(i)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===no&&this.setState({status:_a})},n.performEnter=function(o){var a=this,i=this.props.enter,l=this.context?this.context.isMounting:o,s=this.props.nodeRef?[l]:[Ia.findDOMNode(this),l],u=s[0],p=s[1],d=this.getTimeouts(),f=l?d.appear:d.enter;if(!o&&!i||mp.disabled){this.safeSetState({status:Ro},function(){a.props.onEntered(u)});return}this.props.onEnter(u,p),this.safeSetState({status:ro},function(){a.props.onEntering(u,p),a.onTransitionEnd(f,function(){a.safeSetState({status:Ro},function(){a.props.onEntered(u,p)})})})},n.performExit=function(){var o=this,a=this.props.exit,i=this.getTimeouts(),l=this.props.nodeRef?void 0:Ia.findDOMNode(this);if(!a||mp.disabled){this.safeSetState({status:no},function(){o.props.onExited(l)});return}this.props.onExit(l),this.safeSetState({status:uc},function(){o.props.onExiting(l),o.onTransitionEnd(i.exit,function(){o.safeSetState({status:no},function(){o.props.onExited(l)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(o,a){a=this.setNextCallback(a),this.setState(o,a)},n.setNextCallback=function(o){var a=this,i=!0;return this.nextCallback=function(l){i&&(i=!1,a.nextCallback=null,o(l))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},n.onTransitionEnd=function(o,a){this.setNextCallback(a);var i=this.props.nodeRef?this.props.nodeRef.current:Ia.findDOMNode(this),l=o==null&&!this.props.addEndListener;if(!i||l){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var s=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],u=s[0],p=s[1];this.props.addEndListener(u,p)}o!=null&&setTimeout(this.nextCallback,o)},n.render=function(){var o=this.state.status;if(o===_a)return null;var a=this.props,i=a.children;a.in,a.mountOnEnter,a.unmountOnExit,a.appear,a.enter,a.exit,a.timeout,a.addEndListener,a.onEnter,a.onEntering,a.onEntered,a.onExit,a.onExiting,a.onExited,a.nodeRef;var l=Tv(a,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return xe.createElement(_v.Provider,{value:null},typeof i=="function"?i(o,l):xe.cloneElement(xe.Children.only(i),l))},t}(xe.Component);Pr.contextType=_v;Pr.propTypes={};function Co(){}Pr.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Co,onEntering:Co,onEntered:Co,onExit:Co,onExiting:Co,onExited:Co};Pr.UNMOUNTED=_a;Pr.EXITED=no;Pr.ENTERING=ro;Pr.ENTERED=Ro;Pr.EXITING=uc;var r2=function(t,n){return t&&n&&n.split(" ").forEach(function(r){return t2(t,r)})},Us=function(t,n){return t&&n&&n.split(" ").forEach(function(r){return n2(t,r)})},bd=function(e){Iv(t,e);function t(){for(var r,o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return r=e.call.apply(e,[this].concat(a))||this,r.appliedClasses={appear:{},enter:{},exit:{}},r.onEnter=function(l,s){var u=r.resolveArguments(l,s),p=u[0],d=u[1];r.removeClasses(p,"exit"),r.addClass(p,d?"appear":"enter","base"),r.props.onEnter&&r.props.onEnter(l,s)},r.onEntering=function(l,s){var u=r.resolveArguments(l,s),p=u[0],d=u[1],f=d?"appear":"enter";r.addClass(p,f,"active"),r.props.onEntering&&r.props.onEntering(l,s)},r.onEntered=function(l,s){var u=r.resolveArguments(l,s),p=u[0],d=u[1],f=d?"appear":"enter";r.removeClasses(p,f),r.addClass(p,f,"done"),r.props.onEntered&&r.props.onEntered(l,s)},r.onExit=function(l){var s=r.resolveArguments(l),u=s[0];r.removeClasses(u,"appear"),r.removeClasses(u,"enter"),r.addClass(u,"exit","base"),r.props.onExit&&r.props.onExit(l)},r.onExiting=function(l){var s=r.resolveArguments(l),u=s[0];r.addClass(u,"exit","active"),r.props.onExiting&&r.props.onExiting(l)},r.onExited=function(l){var s=r.resolveArguments(l),u=s[0];r.removeClasses(u,"exit"),r.addClass(u,"exit","done"),r.props.onExited&&r.props.onExited(l)},r.resolveArguments=function(l,s){return r.props.nodeRef?[r.props.nodeRef.current,l]:[l,s]},r.getClassNames=function(l){var s=r.props.classNames,u=typeof s=="string",p=u&&s?s+"-":"",d=u?""+p+l:s[l],f=u?d+"-active":s[l+"Active"],b=u?d+"-done":s[l+"Done"];return{baseClassName:d,activeClassName:f,doneClassName:b}},r}var n=t.prototype;return n.addClass=function(o,a,i){var l=this.getClassNames(a)[i+"ClassName"],s=this.getClassNames("enter"),u=s.doneClassName;a==="appear"&&i==="done"&&u&&(l+=" "+u),i==="active"&&o&&Nv(o),l&&(this.appliedClasses[a][i]=l,r2(o,l))},n.removeClasses=function(o,a){var i=this.appliedClasses[a],l=i.base,s=i.active,u=i.done;this.appliedClasses[a]={},l&&Us(o,l),s&&Us(o,s),u&&Us(o,u)},n.render=function(){var o=this.props;o.classNames;var a=Tv(o,["classNames"]);return xe.createElement(Pr,lc({},a,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(xe.Component);bd.defaultProps={classNames:""};bd.propTypes={};function vi(e){"@babel/helpers - typeof";return vi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vi(e)}function o2(e,t){if(vi(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(vi(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function a2(e){var t=o2(e,"string");return vi(t)==="symbol"?t:String(t)}function i2(e,t,n){return t=a2(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var cc={defaultProps:{__TYPE:"CSSTransition",children:void 0},getProps:function(t){return T.getMergedProps(t,cc.defaultProps)},getOtherProps:function(t){return T.getDiffProps(t,cc.defaultProps)}};function gp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Vs(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gp(Object(n),!0).forEach(function(r){i2(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Rv=c.forwardRef(function(e,t){var n=cc.getProps(e),r=c.useContext(We),o=n.disabled||n.options&&n.options.disabled||r&&!r.cssTransition||!St.cssTransition,a=function(m,O){n.onEnter&&n.onEnter(m,O),n.options&&n.options.onEnter&&n.options.onEnter(m,O)},i=function(m,O){n.onEntering&&n.onEntering(m,O),n.options&&n.options.onEntering&&n.options.onEntering(m,O)},l=function(m,O){n.onEntered&&n.onEntered(m,O),n.options&&n.options.onEntered&&n.options.onEntered(m,O)},s=function(m){n.onExit&&n.onExit(m),n.options&&n.options.onExit&&n.options.onExit(m)},u=function(m){n.onExiting&&n.onExiting(m),n.options&&n.options.onExiting&&n.options.onExiting(m)},p=function(m){n.onExited&&n.onExited(m),n.options&&n.options.onExited&&n.options.onExited(m)};if(st(function(){if(o){var x=T.getRefElement(n.nodeRef);n.in?(a(x,!0),i(x,!0),l(x,!0)):(s(x),u(x),p(x))}},[n.in]),o)return n.in?n.children:null;var d={nodeRef:n.nodeRef,in:n.in,appear:n.appear,onEnter:a,onEntering:i,onEntered:l,onExit:s,onExiting:u,onExited:p},f={classNames:n.classNames,timeout:n.timeout,unmountOnExit:n.unmountOnExit},b=Vs(Vs(Vs({},f),n.options||{}),d);return c.createElement(bd,b,n.children)});Rv.displayName="CSSTransition";function dc(){return dc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},dc.apply(this,arguments)}var Lv=c.memo(c.forwardRef(function(e,t){var n=_t.getPTI(e);return c.createElement("svg",dc({ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z",fill:"currentColor"}))}));Lv.displayName="SearchIcon";function fc(){return fc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fc.apply(this,arguments)}function hi(e){"@babel/helpers - typeof";return hi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hi(e)}function l2(e,t){if(hi(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(hi(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function s2(e){var t=l2(e,"string");return hi(t)==="symbol"?t:String(t)}function Av(e,t,n){return t=s2(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u2(e){if(Array.isArray(e))return e}function c2(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,a,i,l=[],s=!0,u=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(p){u=!0,o=p}finally{try{if(!s&&n.return!=null&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}function vp(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d2(e,t){if(e){if(typeof e=="string")return vp(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return vp(e,t)}}function f2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dr(e,t){return u2(e)||c2(e,t)||d2(e,t)||f2()}var p2=`
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    /*contain: content;*/
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-virtualscroller-loader.p-component-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-loading-icon {
    font-size: 2rem;
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

/* Inline */
.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}
`,Wi=ke.extend({defaultProps:{__TYPE:"VirtualScroller",__parentMetadata:null,id:null,style:null,className:null,tabIndex:0,items:null,itemSize:0,scrollHeight:null,scrollWidth:null,orientation:"vertical",step:0,numToleratedItems:null,delay:0,resizeDelay:10,appendOnly:!1,inline:!1,lazy:!1,disabled:!1,loaderDisabled:!1,loadingIcon:null,columns:null,loading:void 0,autoSize:!1,showSpacer:!0,showLoader:!1,loadingTemplate:null,loaderIconTemplate:null,itemTemplate:null,contentTemplate:null,onScroll:null,onScrollIndexChange:null,onLazyLoad:null,children:void 0},css:{styles:p2}});function hp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function ko(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?hp(Object(n),!0).forEach(function(r){Av(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):hp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Dv=c.memo(c.forwardRef(function(e,t){var n=Et(),r=c.useContext(We),o=Wi.getProps(e,r),a=ci(e)||{},i=o.orientation==="vertical",l=o.orientation==="horizontal",s=o.orientation==="both",u=c.useState(s?{rows:0,cols:0}:0),p=dr(u,2),d=p[0],f=p[1],b=c.useState(s?{rows:0,cols:0}:0),x=dr(b,2),m=x[0],O=x[1],h=c.useState(0),g=dr(h,2),v=g[0],S=g[1],C=c.useState(s?{rows:0,cols:0}:0),N=dr(C,2),k=N[0],L=N[1],F=c.useState(o.numToleratedItems),I=dr(F,2),P=I[0],le=I[1],G=c.useState(o.loading||!1),pe=dr(G,2),Z=pe[0],be=pe[1],Oe=c.useState([]),R=dr(Oe,2),B=R[0],D=R[1],te=Wi.setMetaData({props:o,state:{first:d,last:m,page:v,numItemsInViewport:k,numToleratedItems:P,loading:Z,loaderArr:B}}),X=te.ptm;Wo(Wi.css.styles,{name:"virtualscroller"});var ne=c.useRef(null),ce=c.useRef(null),At=c.useRef(null),tt=c.useRef(null),qe=c.useRef(s?{top:0,left:0}:0),Re=c.useRef(null),me=c.useRef(null),De=c.useRef({}),Ie=c.useRef({}),de=c.useRef(null),Me=c.useRef(null),nt=c.useRef(null),ut=c.useRef(null),en=c.useRef(!1),gt=c.useRef(null),Sn=vd({listener:function(A){return Ft()},when:!o.disabled}),En=dr(Sn,1),rt=En[0],Kt=Fl({target:"window",type:"orientationchange",listener:function(A){return Ft()},when:!o.disabled}),ar=dr(Kt,1),ir=ar[0],fn=function(){return ne},tn=function(A){return Math.floor((A+P*4)/(o.step||1))},lr=function(A){ce.current=A||ce.current||K.findSingle(ne.current,".p-virtualscroller-content")},nn=function(A){return o.step?v!==tn(A):!0},Dt=function(A){qe.current=s?{top:0,left:0}:0,ne.current&&ne.current.scrollTo(A)},On=function(A){var W=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"auto",q=Mt(),ee=q.numToleratedItems,re=_(),Q=function(){var U=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,w=arguments.length>1?arguments[1]:void 0;return U<=w?0:U},ie=function(U,w,E){return U*w+E},Te=function(){var U=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Dt({left:U,top:w,behavior:W})},Ce=s?{rows:0,cols:0}:0,Ye=!1;s?(Ce={rows:Q(A[0],ee[0]),cols:Q(A[1],ee[1])},Te(ie(Ce.cols,o.itemSize[1],re.left),ie(Ce.rows,o.itemSize[0],re.top)),Ye=d.rows!==Ce.rows||d.cols!==Ce.cols):(Ce=Q(A,ee),l?Te(ie(Ce,o.itemSize,re.left),0):Te(0,ie(Ce,o.itemSize,re.top)),Ye=d!==Ce),en.current=Ye,f(Ce)},Xn=function(A,W){var q=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"auto";if(W){var ee=vt(),re=ee.first,Q=ee.viewport,ie=function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Dt({left:w,top:E,behavior:q})},Te=W==="to-start",Ce=W==="to-end";if(Te){if(s)Q.first.rows-re.rows>A[0]?ie(Q.first.cols*o.itemSize[1],(Q.first.rows-1)*o.itemSize[0]):Q.first.cols-re.cols>A[1]&&ie((Q.first.cols-1)*o.itemSize[1],Q.first.rows*o.itemSize[0]);else if(Q.first-re>A){var Ye=(Q.first-1)*o.itemSize;l?ie(Ye,0):ie(0,Ye)}}else if(Ce){if(s)Q.last.rows-re.rows<=A[0]+1?ie(Q.first.cols*o.itemSize[1],(Q.first.rows+1)*o.itemSize[0]):Q.last.cols-re.cols<=A[1]+1&&ie((Q.first.cols+1)*o.itemSize[1],Q.first.rows*o.itemSize[0]);else if(Q.last-re<=A+1){var ht=(Q.first+1)*o.itemSize;l?ie(ht,0):ie(0,ht)}}}else On(A,q)},Qn=function(){return Z?o.loaderDisabled?B:[]:pn()},ot=function(){return o.columns&&s||l?Z&&o.loaderDisabled?s?B[0]:B:o.columns.slice(s?d.cols:d,s?m.cols:m):o.columns},vt=function(){var A=function(Ce,Ye){return Math.floor(Ce/(Ye||Ce))},W=d,q=0;if(ne.current){var ee=ne.current,re=ee.scrollTop,Q=ee.scrollLeft;if(s)W={rows:A(re,o.itemSize[0]),cols:A(Q,o.itemSize[1])},q={rows:W.rows+k.rows,cols:W.cols+k.cols};else{var ie=l?Q:re;W=A(ie,o.itemSize),q=W+k}}return{first:d,last:m,viewport:{first:W,last:q}}},Mt=function(){var A=_(),W=ne.current?ne.current.offsetWidth-A.left:0,q=ne.current?ne.current.offsetHeight-A.top:0,ee=function(Ce,Ye){return Math.ceil(Ce/(Ye||Ce))},re=function(Ce){return Math.ceil(Ce/2)},Q=s?{rows:ee(q,o.itemSize[0]),cols:ee(W,o.itemSize[1])}:ee(l?W:q,o.itemSize),ie=P||(s?[re(Q.rows),re(Q.cols)]:re(Q));return{numItemsInViewport:Q,numToleratedItems:ie}},rn=function(){var A=Mt(),W=A.numItemsInViewport,q=A.numToleratedItems,ee=function(ie,Te,Ce){var Ye=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return se(ie+Te+(ie<Ce?2:3)*Ce,Ye)},re=s?{rows:ee(d.rows,W.rows,q[0]),cols:ee(d.cols,W.cols,q[1],!0)}:ee(d,W,q);L(W),le(q),O(re),o.showLoader&&D(s?Array.from({length:W.rows}).map(function(){return Array.from({length:W.cols})}):Array.from({length:W})),o.lazy&&Promise.resolve().then(function(){gt.current={first:o.step?s?{rows:0,cols:d.cols}:0:d,last:Math.min(o.step?o.step:re,(o.items||[]).length)},o.onLazyLoad&&o.onLazyLoad(gt.current)})},Rn=function(A){o.autoSize&&!A&&Promise.resolve().then(function(){if(ce.current){ce.current.style.minHeight=ce.current.style.minWidth="auto",ce.current.style.position="relative",ne.current.style.contain="none";var W=[K.getWidth(ne.current),K.getHeight(ne.current)],q=W[0],ee=W[1];(s||l)&&(ne.current.style.width=(q<de.current?q:o.scrollWidth||de.current)+"px"),(s||i)&&(ne.current.style.height=(ee<Me.current?ee:o.scrollHeight||Me.current)+"px"),ce.current.style.minHeight=ce.current.style.minWidth="",ce.current.style.position="",ne.current.style.contain=""}})},se=function(){var A,W=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,q=arguments.length>1?arguments[1]:void 0;return o.items?Math.min(q?((A=o.columns||o.items[0])===null||A===void 0?void 0:A.length)||0:(o.items||[]).length,W):0},_=function(){if(ce.current){var A=getComputedStyle(ce.current),W=parseFloat(A.paddingLeft)+Math.max(parseFloat(A.left)||0,0),q=parseFloat(A.paddingRight)+Math.max(parseFloat(A.right)||0,0),ee=parseFloat(A.paddingTop)+Math.max(parseFloat(A.top)||0,0),re=parseFloat(A.paddingBottom)+Math.max(parseFloat(A.bottom)||0,0);return{left:W,right:q,top:ee,bottom:re,x:W+q,y:ee+re}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}},J=function(){if(ne.current){var A=ne.current.parentElement,W=o.scrollWidth||"".concat(ne.current.offsetWidth||A.offsetWidth,"px"),q=o.scrollHeight||"".concat(ne.current.offsetHeight||A.offsetHeight,"px"),ee=function(Q,ie){return ne.current.style[Q]=ie};s||l?(ee("height",q),ee("width",W)):ee("height",q)}},Se=function(){var A=o.items;if(A){var W=_(),q=function(re,Q,ie){var Te=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return Ie.current=ko(ko({},Ie.current),Av({},"".concat(re),(Q||[]).length*ie+Te+"px"))};s?(q("height",A,o.itemSize[0],W.y),q("width",o.columns||A[1],o.itemSize[1],W.x)):l?q("width",o.columns||A,o.itemSize,W.x):q("height",A,o.itemSize,W.y)}},ve=function(A){if(ce.current&&!o.appendOnly){var W=A?A.first:d,q=function(ie,Te){return ie*Te},ee=function(){var ie=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,Te=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;tt.current&&(tt.current.style.top="-".concat(Te,"px")),De.current=ko(ko({},De.current),{transform:"translate3d(".concat(ie,"px, ").concat(Te,"px, 0)")})};if(s)ee(q(W.cols,o.itemSize[1]),q(W.rows,o.itemSize[0]));else{var re=q(W,o.itemSize);l?ee(re,0):ee(0,re)}}},ge=function(A){var W=A.target,q=_(),ee=function(fe,Ue){return fe?fe>Ue?fe-Ue:fe:0},re=function(fe,Ue){return Math.floor(fe/(Ue||fe))},Q=function(fe,Ue,$e,on,yt,bt){return fe<=yt?yt:bt?$e-on-yt:Ue+yt-1},ie=function(fe,Ue,$e,on,yt,bt,jn){return fe<=bt?0:Math.max(0,jn?fe<Ue?$e:fe-bt:fe>Ue?$e:fe-2*bt)},Te=function(fe,Ue,$e,on,yt,bt){var jn=Ue+on+2*yt;return fe>=yt&&(jn=jn+(yt+1)),se(jn,bt)},Ce=ee(W.scrollTop,q.top),Ye=ee(W.scrollLeft,q.left),ht=s?{rows:0,cols:0}:0,U=m,w=!1,E=qe.current;if(s){var z=qe.current.top<=Ce,j=qe.current.left<=Ye;if(!o.appendOnly||o.appendOnly&&(z||j)){var $={rows:re(Ce,o.itemSize[0]),cols:re(Ye,o.itemSize[1])},ye={rows:Q($.rows,d.rows,m.rows,k.rows,P[0],z),cols:Q($.cols,d.cols,m.cols,k.cols,P[1],j)};ht={rows:ie($.rows,ye.rows,d.rows,m.rows,k.rows,P[0],z),cols:ie($.cols,ye.cols,d.cols,m.cols,k.cols,P[1],j)},U={rows:Te($.rows,ht.rows,m.rows,k.rows,P[0]),cols:Te($.cols,ht.cols,m.cols,k.cols,P[1],!0)},w=ht.rows!==d.rows||U.rows!==m.rows||ht.cols!==d.cols||U.cols!==m.cols||en.current,E={top:Ce,left:Ye}}}else{var we=l?Ye:Ce,dt=qe.current<=we;if(!o.appendOnly||o.appendOnly&&dt){var ft=re(we,o.itemSize),je=Q(ft,d,m,k,P,dt);ht=ie(ft,je,d,m,k,P,dt),U=Te(ft,ht,m,k,P),w=ht!==d||U!==m||en.current,E=we}}return{first:ht,last:U,isRangeChanged:w,scrollPos:E}},Ge=function(A){var W=ge(A),q=W.first,ee=W.last,re=W.isRangeChanged,Q=W.scrollPos;if(re){var ie={first:q,last:ee};if(ve(ie),f(q),O(ee),qe.current=Q,o.onScrollIndexChange&&o.onScrollIndexChange(ie),o.lazy&&nn(q)){var Te={first:o.step?Math.min(tn(q)*o.step,(o.items||[]).length-o.step):q,last:Math.min(o.step?(tn(q)+1)*o.step:ee,(o.items||[]).length)},Ce=!gt.current||gt.current.first!==Te.first||gt.current.last!==Te.last;Ce&&o.onLazyLoad&&o.onLazyLoad(Te),gt.current=Te}}},jt=function(A){if(o.onScroll&&o.onScroll(A),o.delay){if(Re.current&&clearTimeout(Re.current),nn(d)){if(!Z&&o.showLoader){var W=ge(A),q=W.isRangeChanged,ee=q||(o.step?nn(d):!1);ee&&be(!0)}Re.current=setTimeout(function(){Ge(A),Z&&o.showLoader&&(!o.lazy||o.loading===void 0)&&(be(!1),S(tn(d)))},o.delay)}}else Ge(A)},Ft=function(){me.current&&clearTimeout(me.current),me.current=setTimeout(function(){if(ne.current){var A=[K.getWidth(ne.current),K.getHeight(ne.current)],W=A[0],q=A[1],ee=W!==de.current,re=q!==Me.current,Q=s?ee||re:l?ee:i?re:!1;Q&&(le(o.numToleratedItems),de.current=W,Me.current=q,nt.current=K.getWidth(ce.current),ut.current=K.getHeight(ce.current))}},o.resizeDelay)},Ln=function(A){var W=(o.items||[]).length,q=s?d.rows+A:d+A;return{index:q,count:W,first:q===0,last:q===W-1,even:q%2===0,odd:q%2!==0,props:o}},at=function(A,W){var q=B.length||0;return ko({index:A,count:q,first:A===0,last:A===q-1,even:A%2===0,odd:A%2!==0,props:o},W)},pn=function(){var A=o.items;return A&&!Z?s?A.slice(o.appendOnly?0:d.rows,m.rows).map(function(W){return o.columns?W:W.slice(o.appendOnly?0:d.cols,m.cols)}):l&&o.columns?A:A.slice(o.appendOnly?0:d,m):[]},Cr=function(){ne.current&&K.isVisible(ne.current)&&(lr(ce.current),An(),rt(),ir(),de.current=K.getWidth(ne.current),Me.current=K.getHeight(ne.current),nt.current=K.getWidth(ce.current),ut.current=K.getHeight(ce.current))},An=function(){o.disabled||(J(),rn(),Se())};yo(function(){Cr()}),st(function(){An()},[o.itemSize,o.scrollHeight,o.scrollWidth]),st(function(){o.numToleratedItems!==P&&le(o.numToleratedItems)},[o.numToleratedItems]),st(function(){o.numToleratedItems===P&&An()},[P]),st(function(){var he=a.items!==void 0&&a.items!==null,A=o.items!==void 0&&o.items!==null,W=he?a.items.length:0,q=A?o.items.length:0,ee=W!==q;if(s&&!ee){var re=he&&a.items.length>0?a.items[0].length:0,Q=A&&o.items.length>0?o.items[0].length:0;ee=re!==Q}(!he||ee)&&An();var ie=Z;o.lazy&&a.loading!==o.loading&&o.loading!==Z&&(be(o.loading),ie=o.loading),Rn(ie)}),st(function(){qe.current=s?{top:0,left:0}:0},[o.orientation]),c.useImperativeHandle(t,function(){return{props:o,getElementRef:fn,scrollTo:Dt,scrollToIndex:On,scrollInView:Xn,getRenderedRange:vt}});var zt=function(A){var W=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},q=at(A,W),ee=T.getJSXElement(o.loadingTemplate,q);return c.createElement(c.Fragment,{key:A},ee)},Dn=function(){var A="p-virtualscroller-loading-icon",W=n({className:A},X("loadingIcon")),q=o.loadingIcon||c.createElement(ls,fc({},W,{spin:!0})),ee=Xt.getJSXIcon(q,ko({},W),{props:o});if(!o.loaderDisabled&&o.showLoader&&Z){var re=ue("p-virtualscroller-loader",{"p-component-overlay":!o.loadingTemplate}),Q=ee;if(o.loadingTemplate)Q=B.map(function(Ce,Ye){return zt(Ye,s&&{numCols:k.cols})});else if(o.loaderIconTemplate){var ie={iconClassName:A,element:Q,props:o};Q=T.getJSXElement(o.loaderIconTemplate,ie)}var Te=n({className:re},X("loader"));return c.createElement("div",Te,Q)}return null},Mn=function(){if(o.showSpacer){var A=n({ref:At,style:Ie.current,className:"p-virtualscroller-spacer"},X("spacer"));return c.createElement("div",A)}return null},sr=function(A,W){var q=Ln(W),ee=T.getJSXElement(o.itemTemplate,A,q);return c.createElement(c.Fragment,{key:q.index},ee)},ur=function(){var A=pn();return A.map(sr)},Zn=function(){var A=ur(),W=ue("p-virtualscroller-content",{"p-virtualscroller-loading":Z}),q=n({ref:ce,style:De.current,className:W},X("content")),ee=c.createElement("div",q,A);if(o.contentTemplate){var re={style:De.current,className:W,spacerStyle:Ie.current,contentRef:function(ie){return ce.current=T.getRefElement(ie)},spacerRef:function(ie){return At.current=T.getRefElement(ie)},stickyRef:function(ie){return tt.current=T.getRefElement(ie)},items:pn(),getItemOptions:function(ie){return Ln(ie)},children:A,element:ee,props:o,loading:Z,getLoaderOptions:function(ie,Te){return at(ie,Te)},loadingTemplate:o.loadingTemplate,itemSize:o.itemSize,rows:Qn(),columns:ot(),vertical:i,horizontal:l,both:s};return T.getJSXElement(o.contentTemplate,re)}return ee};if(o.disabled){var Zr=T.getJSXElement(o.contentTemplate,{items:o.items,rows:o.items,columns:o.columns});return c.createElement(c.Fragment,null,o.children,Zr)}var ct=ue("p-virtualscroller",{"p-virtualscroller-inline":o.inline,"p-virtualscroller-both p-both-scroll":s,"p-virtualscroller-horizontal p-horizontal-scroll":l},o.className),Wt=Dn(),ga=Zn(),Pn=Mn(),bo=n({ref:ne,className:ct,tabIndex:o.tabIndex,style:o.style,onScroll:function(A){return jt(A)}},Wi.getOtherProps(o),X("root"));return c.createElement("div",bo,ga,Pn,Wt)}));Dv.displayName="VirtualScroller";function pc(){return pc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pc.apply(this,arguments)}var Mv=c.memo(c.forwardRef(function(e,t){var n=_t.getPTI(e);return c.createElement("svg",pc({ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),c.createElement("path",{d:"M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z",fill:"currentColor"}))}));Mv.displayName="CheckIcon";function yr(){return yr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yr.apply(this,arguments)}function ua(e){"@babel/helpers - typeof";return ua=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ua(e)}function m2(e,t){if(ua(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ua(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function g2(e){var t=m2(e,"string");return ua(t)==="symbol"?t:String(t)}function us(e,t,n){return t=g2(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v2(e){if(Array.isArray(e))return e}function h2(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,a,i,l=[],s=!0,u=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(s=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(p){u=!0,o=p}finally{try{if(!s&&n.return!=null&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}function yp(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y2(e,t){if(e){if(typeof e=="string")return yp(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return yp(e,t)}}function b2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Oa(e,t){return v2(e)||h2(e,t)||y2(e,t)||b2()}function bp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function w2(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bp(Object(n),!0).forEach(function(r){us(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var x2={root:function(t){var n=t.props,r=t.focusedState,o=t.overlayVisibleState,a=t.context;return ue("p-dropdown p-component p-inputwrapper",{"p-disabled":n.disabled,"p-invalid":n.invalid,"p-focus":r,"p-variant-filled":n.variant?n.variant==="filled":a&&a.inputStyle==="filled","p-dropdown-clearable":n.showClear&&!n.disabled,"p-inputwrapper-filled":T.isNotEmpty(n.value),"p-inputwrapper-focus":r||o})},input:function(t){var n=t.props,r=t.label;return n.editable?"p-dropdown-label p-inputtext":ue("p-dropdown-label p-inputtext",{"p-placeholder":r===null&&n.placeholder,"p-dropdown-label-empty":r===null&&!n.placeholder})},trigger:"p-dropdown-trigger",emptyMessage:"p-dropdown-empty-message",itemGroup:function(t){var n=t.optionGroupLabel;return ue("p-dropdown-item-group",{"p-dropdown-item-empty":!n||n.length===0})},itemGroupLabel:"p-dropdown-item-group-label",dropdownIcon:"p-dropdown-trigger-icon p-clickable",loadingIcon:"p-dropdown-trigger-icon p-clickable",clearIcon:"p-dropdown-clear-icon p-clickable",filterIcon:"p-dropdown-filter-icon",filterClearIcon:"p-dropdown-filter-clear-icon",filterContainer:function(t){var n=t.clearIcon;return ue("p-dropdown-filter-container",{"p-dropdown-clearable-filter":!!n})},filterInput:function(t){var n=t.props,r=t.context;return ue("p-dropdown-filter p-inputtext p-component",{"p-variant-filled":n.variant?n.variant==="filled":r&&r.inputStyle==="filled"})},list:function(t){var n=t.virtualScrollerOptions;return"p-dropdown-items"},panel:function(t){var n=t.context;return ue("p-dropdown-panel p-component",{"p-input-filled":n&&n.inputStyle==="filled"||St.inputStyle==="filled","p-ripple-disabled":n&&n.ripple===!1||St.ripple===!1})},item:function(t){var n=t.selected,r=t.disabled,o=t.label,a=t.index,i=t.focusedOptionIndex,l=t.highlightOnSelect;return ue("p-dropdown-item",{"p-highlight":n&&l,"p-disabled":r,"p-focus":a===i,"p-dropdown-item-empty":!o||o.length===0})},itemLabel:"p-dropdown-item-label",checkIcon:"p-dropdown-check-icon",blankIcon:"p-dropdown-blank-icon",wrapper:"p-dropdown-items-wrapper",header:"p-dropdown-header",footer:"p-dropdown-footer",transition:"p-connected-overlay"},S2=`
@layer primereact {
    .p-dropdown {
        display: inline-flex;
        cursor: pointer;
        position: relative;
        user-select: none;
    }
    
    .p-dropdown-trigger {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }
    
    .p-dropdown-label {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        flex: 1 1 auto;
        width: 1%;
        text-overflow: ellipsis;
        cursor: pointer;
    }
    
    .p-dropdown-label-empty {
        overflow: hidden;
        visibility: hidden;
    }
    
    input.p-dropdown-label  {
        cursor: default;
    }
    
    .p-dropdown .p-dropdown-panel {
        min-width: 100%;
    }
    
    .p-dropdown-panel {
        position: absolute;
        top: 0;
        left: 0;
    }
    
    .p-dropdown-items-wrapper {
        overflow: auto;
    }
    
    .p-dropdown-item {
        cursor: pointer;
        font-weight: normal;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
    }
    
    .p-dropdown-items {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
    
    .p-dropdown-filter {
        width: 100%;
    }
    
    .p-dropdown-filter-container {
        position: relative;
    }
    
    .p-dropdown-clear-icon,
    .p-dropdown-filter-icon,
    .p-dropdown-filter-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -.5rem;
        right: 2rem;
    }
    
    .p-fluid .p-dropdown {
        display: flex;
    }
    
    .p-fluid .p-dropdown .p-dropdown-label {
        width: 1%;
    }
}
`,E2={wrapper:function(t){var n=t.props;return{maxHeight:n.scrollHeight||"auto"}},panel:function(t){var n=t.props;return w2({},n.panelStyle)}},qi=ke.extend({defaultProps:{__TYPE:"Dropdown",__parentMetadata:null,appendTo:null,ariaLabel:null,ariaLabelledBy:null,autoFocus:!1,children:void 0,className:null,clearIcon:null,dataKey:null,disabled:!1,dropdownIcon:null,collapseIcon:null,editable:!1,emptyFilterMessage:null,highlightOnSelect:!0,checkmark:!1,emptyMessage:null,filter:!1,filterBy:null,filterClearIcon:null,filterIcon:null,filterInputAutoFocus:!1,filterLocale:void 0,filterMatchMode:"contains",filterPlaceholder:null,filterTemplate:null,focusInputRef:null,id:null,inputId:null,inputRef:null,invalid:!1,variant:null,itemTemplate:null,loading:!1,loadingIcon:null,maxLength:null,name:null,onBlur:null,onChange:null,onContextMenu:null,onFilter:null,onFocus:null,onHide:null,onMouseDown:null,onShow:null,optionDisabled:null,optionGroupChildren:"items",selectOnFocus:!1,focusOnHover:!0,autoOptionFocus:!1,optionGroupLabel:null,optionGroupTemplate:null,optionLabel:null,optionValue:null,options:null,panelClassName:null,panelFooterTemplate:null,panelStyle:null,placeholder:null,required:!1,resetFilterOnHide:!1,scrollHeight:"200px",showClear:!1,showFilterClear:!1,showOnFocus:!1,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,transitionOptions:null,value:null,valueTemplate:null,virtualScrollerOptions:null},css:{classes:x2,styles:S2,inlineStyles:E2}}),jv=c.memo(c.forwardRef(function(e,t){var n=_t.getPTI(e);return c.createElement("svg",yr({ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n),c.createElement("rect",{width:"1",height:"1",fill:"currentColor",fillOpacity:"0"}))}));jv.displayName="BlankIcon";var Fv=c.memo(function(e){var t=Et(),n=e.ptm,r=e.cx,o=e.selected,a=e.disabled,i=e.option,l=e.label,s=e.index,u=e.focusedOptionIndex,p=e.ariaSetSize,d=e.checkmark,f=e.highlightOnSelect,b=e.onInputKeyDown,x=function(C){return n(C,{context:{selected:o,disabled:a,focused:s===u}})},m=function(C,N){e.onClick&&e.onClick({originalEvent:C,option:i})},O=e.template?T.getJSXElement(e.template,e.option):e.label,h=t({id:"dropdownItem_".concat(s),role:"option",key:e.label,className:ue(i.className,r("item",{selected:o,disabled:a,label:l,index:s,focusedOptionIndex:u,highlightOnSelect:f})),style:e.style,tabIndex:0,onClick:function(C){return m(C)},onKeyDown:function(C){return b(C)},onMouseMove:function(C){return e==null?void 0:e.onMouseMove(C,s)},"aria-setsize":p,"aria-posinset":s+1,"aria-label":l,"aria-selected":o,"data-p-highlight":o,"data-p-focused":u===s,"data-p-disabled":a},x("item")),g=t({className:r("itemLabel")},x("itemLabel")),v=function(){if(o){var C=t({className:r("checkIcon")},x("checkIcon"));return c.createElement(Mv,C)}var N=t({className:r("blankIcon")},x("blankIcon"));return c.createElement(jv,N)};return c.createElement("li",h,d&&v(),c.createElement("span",g,O),c.createElement(Yn,null))});Fv.displayName="DropdownItem";function wp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function zn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?wp(Object(n),!0).forEach(function(r){us(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var zv=c.memo(c.forwardRef(function(e,t){var n=Et(),r=e.ptm,o=e.cx,a=e.sx,i=c.useContext(We),l=c.useRef(null),s=!(e.visibleOptions&&e.visibleOptions.length)&&e.hasFilter,u=e.visibleOptions?e.visibleOptions.length:0,p={filter:function(I){return x(I)},reset:function(){return e.resetFilter()}},d=function(I,P){return r(I,zn({hostName:e.hostName},P))},f=function(){e.onEnter(function(){if(e.virtualScrollerRef.current){var I=e.getSelectedOptionIndex();I!==-1&&setTimeout(function(){return e.virtualScrollerRef.current.scrollToIndex(I)},0)}})},b=function(){e.onEntered(function(){e.filter&&e.filterInputAutoFocus&&K.focus(l.current,!1)})},x=function(I){e.onFilterInputChange&&e.onFilterInputChange(I)},m=function(){if(e.panelFooterTemplate){var I=T.getJSXElement(e.panelFooterTemplate,e,e.onOverlayHide),P=n({className:o("footer")},d("footer"));return c.createElement("div",P,I)}return null},O=function(I,P){if(e.focusOnHover){var le;e==null||(le=e.changeFocusedOptionIndex)===null||le===void 0||le.call(e,I,P)}},h=function(I,P){var le=T.getJSXElement(I,e)||li(P?"emptyFilterMessage":"emptyMessage"),G=n({className:o("emptyMessage")},d("emptyMessage"));return c.createElement("li",G,le)},g=function(I,P){var le=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},G={height:le.props?le.props.itemSize:void 0};if(G=zn(zn({},G),I.style),I.group&&e.optionGroupLabel){var pe=e.optionGroupLabel,Z=e.optionGroupTemplate?T.getJSXElement(e.optionGroupTemplate,I,P):e.getOptionGroupLabel(I),be=P+"_"+e.getOptionGroupRenderKey(I),Oe=n({className:o("itemGroup",{optionGroupLabel:pe}),style:G,"data-p-highlight":e.selected},d("itemGroup")),R=n({className:o("itemGroupLabel")},d("itemGroupLabel"));return c.createElement("li",yr({key:be},Oe),c.createElement("span",R,Z))}var B=e.getOptionRenderKey(I)+"_"+P,D=e.getOptionLabel(I),te=e.isOptionDisabled(I);return c.createElement(Fv,{key:B,label:D,index:P,focusedOptionIndex:e.focusedOptionIndex,option:I,ariaSetSize:u,onInputKeyDown:e.onInputKeyDown,style:G,template:e.itemTemplate,selected:e.isSelected(I),highlightOnSelect:e.highlightOnSelect,disabled:te,onClick:e.onOptionClick,onMouseMove:O,ptm:r,cx:o,checkmark:e.checkmark})},v=function(){return T.isNotEmpty(e.visibleOptions)?e.visibleOptions.map(g):e.hasFilter?h(e.emptyFilterMessage,!0):h(e.emptyMessage)},S=function(){if(e.showFilterClear&&e.filterValue){var I=li("clear"),P=n({className:o("filterClearIcon"),"aria-label":I,onClick:function(){return e.onFilterClearIconClick(function(){return K.focus(l.current)})}},d("filterClearIcon")),le=e.filterClearIcon||c.createElement(yd,P),G=Xt.getJSXIcon(le,zn({},P),{props:e});return G}return null},C=function(){if(e.filter){var I=S(),P=n({className:o("filterIcon")},d("filterIcon")),le=e.filterIcon||c.createElement(Lv,P),G=Xt.getJSXIcon(le,zn({},P),{props:e}),pe=n({className:o("filterContainer",{clearIcon:I})},d("filterContainer")),Z=n({ref:l,type:"text",autoComplete:"off",className:o("filterInput",{context:i}),placeholder:e.filterPlaceholder,onKeyDown:e.onFilterInputKeyDown,onChange:function(D){return x(D)},value:e.filterValue},d("filterInput")),be=c.createElement("div",pe,c.createElement("input",Z),I,G);if(e.filterTemplate){var Oe={className:ue("p-dropdown-filter-container",{"p-dropdown-clearable-filter":!!I}),element:be,filterOptions:p,filterInputKeyDown:e.onFilterInputKeyDown,filterInputChange:x,filterIconClassName:"p-dropdown-filter-icon",clearIcon:I,props:e};be=T.getJSXElement(e.filterTemplate,Oe)}var R=n({className:o("header")},d("header"));return c.createElement("div",R,be)}return null},N=function(){if(e.virtualScrollerOptions){var I=zn(zn({},e.virtualScrollerOptions),{style:zn(zn({},e.virtualScrollerOptions.style),{height:e.scrollHeight}),className:ue("p-dropdown-items-wrapper",e.virtualScrollerOptions.className),items:e.visibleOptions,autoSize:!0,onLazyLoad:function(Z){return e.virtualScrollerOptions.onLazyLoad(zn(zn({},Z),{filter:e.filterValue}))},itemTemplate:function(Z,be){return Z&&g(Z,be.index,be)},contentTemplate:function(Z){var be=e.hasFilter?e.emptyFilterMessage:e.emptyMessage,Oe=s?h(be):Z.children,R=n({ref:Z.contentRef,style:Z.style,className:ue(Z.className,o("list",{virtualScrollerProps:e.virtualScrollerOptions})),role:"listbox"},d("list"));return c.createElement("ul",R,Oe)}});return c.createElement(Dv,yr({ref:e.virtualScrollerRef},I,{pt:r("virtualScroller")}))}var P=v(),le=n({className:o("wrapper"),style:a("wrapper")},d("wrapper")),G=n({className:o("list"),role:"listbox"},d("list"));return c.createElement("div",le,c.createElement("ul",G,P))},k=function(){var I=C(),P=N(),le=m(),G=n({className:ue(e.panelClassName,o("panel",{context:i})),style:a("panel"),onClick:e.onClick},d("panel")),pe=n({classNames:o("transition"),in:e.in,timeout:{enter:120,exit:100},options:e.transitionOptions,unmountOnExit:!0,onEnter:f,onEntered:b,onExit:e.onExit,onExited:e.onExited},d("transition"));return c.createElement(Rv,yr({nodeRef:t},pe),c.createElement("div",yr({ref:t},G),e.firstFocusableElement,I,P,le,e.lastFocusableElement))},L=k();return c.createElement(hd,{element:L,appendTo:e.appendTo})}));zv.displayName="DropdownPanel";function O2(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=P2(e))||t){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(u){throw u},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,i=!1,l;return{s:function(){n=n.call(e)},n:function(){var u=n.next();return a=u.done,u},e:function(u){i=!0,l=u},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(i)throw l}}}}function P2(e,t){if(e){if(typeof e=="string")return xp(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xp(e,t)}}function xp(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Sp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function $n(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Sp(Object(n),!0).forEach(function(r){us(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Sp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var $v=c.memo(c.forwardRef(function(e,t){var n=Et(),r=c.useContext(We),o=qi.getProps(e,r),a=c.useState(""),i=Oa(a,2),l=i[0],s=i[1],u=c.useState(!1),p=Oa(u,2),d=p[0],f=p[1],b=c.useState(-1),x=Oa(b,2),m=x[0],O=x[1],h=c.useState(!1),g=Oa(h,2),v=g[0],S=g[1],C=c.useRef(!1),N=c.useRef(null),k=c.useRef(null),L=c.useRef(null),F=c.useRef(null),I=c.useRef(o.inputRef),P=c.useRef(o.focusInputRef),le=c.useRef(null),G=c.useRef(null),pe=c.useRef(null),Z=o.virtualScrollerOptions&&o.virtualScrollerOptions.lazy,be=T.isNotEmpty(l),Oe=o.appendTo||r&&r.appendTo||St.appendTo,R=qi.setMetaData($n($n({props:o},o.__parentMetadata),{},{state:{filter:l,focused:d,overlayVisible:v}})),B=R.ptm,D=R.cx,te=R.sx,X=R.isUnstyled;ma(qi.css.styles,X,{name:"dropdown"});var ne=By({target:N,overlay:k,listener:function(y,M){var oe=M.type,Fe=M.valid;Fe&&(oe==="outside"?!Ie(y)&&Wt():Wt())},when:v}),ce=Oa(ne,2),At=ce[0],tt=ce[1],qe=function(y){return(y||[]).reduce(function(M,oe,Fe){M.push($n($n({},oe),{},{group:!0,index:Fe}));var it=U(oe);return it&&it.forEach(function(xo){return M.push(xo)}),M},[])},Re=function(){var y=o.optionGroupLabel?qe(o.options):o.options;if(be&&!Z){var M=l.trim().toLocaleLowerCase(o.filterLocale),oe=o.filterBy?o.filterBy.split(","):[o.optionLabel||"label"];if(o.optionGroupLabel){var Fe=[],it=O2(o.options),xo;try{for(it.s();!(xo=it.n()).done;){var wd=xo.value,gs=Ff.filter(U(wd),oe,M,o.filterMatchMode,o.filterLocale);gs&&gs.length&&Fe.push($n($n({},wd),us({},"".concat(o.optionGroupChildren),gs)))}}catch(nh){it.e(nh)}finally{it.f()}return qe(Fe)}return Ff.filter(y,oe,M,o.filterMatchMode,o.filterLocale)}return y},me=function(y){var M=y.relatedTarget===P.current?K.getFirstFocusableElement(k.current,':not([data-p-hidden-focusable="true"])'):P.current;K.focus(M)},De=function(y){var M=y.relatedTarget===P.current?K.getLastFocusableElement(k.current,':not([data-p-hidden-focusable="true"])'):P.current;K.focus(M)},Ie=function(y){return K.isAttributeEquals(y.target,"data-pc-section","clearicon")||K.isAttributeEquals(y.target.parentElement||y.target,"data-pc-section","filterclearicon")},de=function(y){o.disabled||o.loading||(y.stopPropagation(),o.onClick&&o.onClick(y),!y.defaultPrevented&&(Ie(y)||y.target.tagName==="INPUT"||((!k.current||!(k.current&&k.current.contains(y.target)))&&(K.focus(P.current),v?Wt():ct()),C.current=!0)))},Me=function(y){o.showOnFocus&&!v&&ct(),f(!0),o.onFocus&&o.onFocus(y)},nt=function(y){f(!1),o.onBlur&&setTimeout(function(){var M=I.current?I.current.value:void 0;o.onBlur({originalEvent:y.originalEvent,value:M,stopPropagation:function(){y.originalEvent.stopPropagation()},preventDefault:function(){y.originalEvent.preventDefault()},target:{name:o.name,id:o.id,value:M}})},200)},ut=function(y,M){var oe=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,Fe=Q(M);Mn({originalEvent:y,option:Fe}),oe&&Wt()},en=function(y){Jb.emit("overlay-click",{originalEvent:y,target:N.current})},gt=function(y){if(o.disabled){y.preventDefault();return}var M=y.metaKey||y.ctrlKey,oe=K.isAndroid()?y.key:y.code;switch(oe){case"ArrowDown":Mt(y);break;case"ArrowUp":rn(y);break;case"ArrowLeft":case"ArrowRight":Rn(y,o.editable);break;case"Home":se(y);break;case"End":_(y);break;case"PageDown":Se(y);break;case"PageUp":J(y);break;case"Space":ve(y,o.editable);break;case"NumpadEnter":case"Enter":ge(y);break;case"Escape":Ge(y);break;case"Tab":jt(y);break;case"Backspace":Ft(y,o.editable);break;case"ShiftLeft":case"ShiftRight":break;default:!M&&T.isPrintableCharacter(y.key)&&(!v&&!o.editable&&ct(),!o.editable&&lr(y,y.key));break}C.current=!1},Sn=function(y){switch(y.code){case"ArrowDown":Mt(y);break;case"ArrowUp":rn(y);break;case"ArrowLeft":case"ArrowRight":Rn(y,!0);break;case"Escape":case"Enter":case"NumpadEnter":ge(y),y.preventDefault();break}},En=function(){return K.getFocusableElements(k.current,':not([data-p-hidden-focusable="true"])').length>0},rt=function(y){var M;return Kt(y)&&((M=re(y))===null||M===void 0?void 0:M.toLocaleLowerCase(o.filterLocale).startsWith(pe.current.toLocaleLowerCase(o.filterLocale)))},Kt=function(y){return T.isNotEmpty(y)&&!(Ce(y)||Te(y))},ar=function(){return T.isNotEmpty(o.value)},ir=function(y){return Kt(y)&&Zr(y)},fn=function(){return ar?je.findIndex(function(y){return ir(y)}):-1},tn=function(){var y=fn();return y<0?Dt():y},lr=function(y,M){pe.current=(pe.current||"")+M;var oe=-1,Fe=!1;return T.isNotEmpty(pe.current)&&(m!==-1?(oe=je.slice(m).findIndex(function(it){return rt(it)}),oe=oe===-1?je.slice(0,m).findIndex(function(it){return rt(it)}):oe+m):oe=je.findIndex(function(it){return rt(it)}),oe!==-1&&(Fe=!0),oe===-1&&m===-1&&(oe=tn()),oe!==-1&&ot(y,oe)),G.current&&clearTimeout(G.current),G.current=setTimeout(function(){pe.current="",G.current=null},500),Fe},nn=function(){var y=fn();return y<0?On():y},Dt=function(){return je.findIndex(function(y){return Kt(y)})},On=function(){return T.findLastIndex(je,function(y){return Kt(y)})},Xn=function(y){var M=y<je.length-1?je.slice(y+1).findIndex(function(oe){return Kt(oe)}):-1;return M>-1?M+y+1:y},Qn=function(y){var M=y>0?T.findLastIndex(je.slice(0,y),function(oe){return Kt(oe)}):-1;return M>-1?M:y},ot=function(y,M){m!==M&&(O(M),vt(M),o.selectOnFocus&&ut(y,je[M],!1))},vt=function(y){var M=K.findSingle(k.current,'li[id="dropdownItem_'.concat(y,'"]'));M&&M.focus()},Mt=function(y){if(!v)ct(),o.editable&&ot(y,fn());else{var M=m!==-1?Xn(m):C.current?Dt():tn();ot(y,M)}y.preventDefault()},rn=function(y){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(y.altKey&&!M)m!==-1&&ut(y,je[m]),state.overlayVisible&&Wt(),y.preventDefault();else{var oe=m!==-1?Qn(m):C.current?On():nn();ot(y,oe),!v&&ct(),y.preventDefault()}},Rn=function(y){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;M&&O(-1)},se=function(y){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;M?(y.currentTarget.setSelectionRange(0,0),O(-1)):(ot(y,Dt()),!v&&ct()),y.preventDefault()},_=function(y){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(M){var oe=y.currentTarget,Fe=oe.value.length;oe.setSelectionRange(Fe,Fe),O(-1)}else ot(y,On()),!v&&ct();y.preventDefault()},J=function(y){y.preventDefault()},Se=function(y){y.preventDefault()},ve=function(y){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;!M&&ge(y)},ge=function(y){v?(m!==-1&&ut(y,je[m]),Wt()):(O(-1),Mt(y)),y.preventDefault()},Ge=function(y){v&&Wt(),y.preventDefault()},jt=function(y){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;M||(v&&!En()?(K.focus(L.current),y.preventDefault()):(m!==-1&&ut(y,je[m]),v&&Wt()))},Ft=function(y){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;y&&M&&!v&&ct()},Ln=function(y){!v&&ct();var M=null;y.target.value&&je&&(M=je.findIndex(function(oe){return re(oe).toLocaleLowerCase().startsWith(y.target.value.toLocaleLowerCase())})),O(M),o.onChange&&o.onChange({originalEvent:y.originalEvent,value:y.target.value,stopPropagation:function(){y.originalEvent.stopPropagation()},preventDefault:function(){y.originalEvent.preventDefault()},target:{name:o.name,id:o.id,value:y.target.value}})},at=function(y){f(!0),Wt(),o.onFocus&&o.onFocus(y)},pn=function(y){var M=y.option;M.disabled||(Mn(y),K.focus(P.current)),Wt()},Cr=function(y){var M=y.target.value;s(M),o.onFilter&&o.onFilter({originalEvent:y,filter:M})},An=function(y){zt(y)},zt=function(y){s(""),o.onFilter&&o.onFilter({filter:""}),y&&y()},Dn=function(y){o.onChange&&o.onChange({originalEvent:y,value:void 0,stopPropagation:function(){y==null||y.stopPropagation()},preventDefault:function(){y==null||y.preventDefault()},target:{name:o.name,id:o.id,value:void 0}}),o.filter&&zt(),ee()},Mn=function(y){if(Xe!==y.option){ee(y.option),O(-1);var M=Q(y.option),oe=Zn(y.option,je);o.onChange&&o.onChange({originalEvent:y.originalEvent,value:M,stopPropagation:function(){y.originalEvent.stopPropagation()},preventDefault:function(){y.originalEvent.preventDefault()},target:{name:o.name,id:o.id,value:M}}),ot(y.originalEvent,oe)}},sr=function(y){if(y=y||je,o.value!=null&&y)if(o.optionGroupLabel)for(var M=0;M<y.length;M++){var oe=Zn(o.value,U(y[M]));if(oe!==-1)return{group:M,option:oe}}else return Zn(o.value,y);return-1},ur=function(){return o.optionValue?null:o.dataKey},Zn=function(y,M){var oe=ur();return M.findIndex(function(Fe){return T.equals(y,Q(Fe),oe)})},Zr=function(y){return T.equals(o.value,Q(y),ur())},ct=function(){O(m!==-1?m:o.autoOptionFocus?tn():o.editable?-1:fn()),S(!0)},Wt=function(){S(!1),C.current=!1},ga=function(){o.editable&&!v&&C.current===!1&&K.focus(I.current)},Pn=function(y){Mr.set("overlay",k.current,r&&r.autoZIndex||St.autoZIndex,r&&r.zIndex.overlay||St.zIndex.overlay),K.addStyles(k.current,{position:"absolute",top:"0",left:"0"}),W(),y&&y()},bo=function(y){y&&y(),At(),o.onShow&&o.onShow()},he=function(){tt()},A=function(){o.filter&&o.resetFilterOnHide&&zt(),Mr.clear(k.current),o.onHide&&o.onHide()},W=function(){K.alignOverlay(k.current,I.current.parentElement,o.appendTo||r&&r.appendTo||St.appendTo)},q=function(){var y=K.findSingle(k.current,'li[data-p-focused="true"]');if(y&&y.scrollIntoView)y.scrollIntoView({block:"nearest",inline:"nearest"});else{var M=K.findSingle(k.current,'li[data-p-highlight="true"]');M&&M.scrollIntoView&&M.scrollIntoView({block:"nearest",inline:"nearest"})}},ee=function(y){I.current&&(I.current.value=y?re(y):o.value||"",P.current&&(P.current.value=I.current.value))},re=function(y){if(T.isScalar(y))return"".concat(y);var M=o.optionLabel?T.resolveFieldData(y,o.optionLabel):y.label;return"".concat(M)},Q=function(y){if(o.useOptionAsValue)return y;var M=o.optionValue?T.resolveFieldData(y,o.optionValue):y?y.value:T.resolveFieldData(y,"value");return o.optionValue||T.isNotEmpty(M)?M:y},ie=function(y){return o.dataKey?T.resolveFieldData(y,o.dataKey):re(y)},Te=function(y){return o.optionGroupLabel&&y.group},Ce=function(y){return o.optionDisabled?T.isFunction(o.optionDisabled)?o.optionDisabled(y):T.resolveFieldData(y,o.optionDisabled):y&&y.disabled!==void 0?y.disabled:!1},Ye=function(y){return T.resolveFieldData(y,o.optionGroupLabel)},ht=function(y){return T.resolveFieldData(y,o.optionGroupLabel)},U=function(y){return T.resolveFieldData(y,o.optionGroupChildren)},w=function(){if(o.editable&&I.current){var y=Xe?re(Xe):null,M=y||o.value||"";I.current.value=M,P.current&&(P.current.value=M)}},E=function(){var y=sr(o.options);return y!==-1?o.optionGroupLabel?U(o.options[y.group])[y.option]:o.options[y]:null};c.useImperativeHandle(t,function(){return{props:o,show:ct,hide:Wt,clear:Dn,focus:function(){return K.focus(P.current)},getElement:function(){return N.current},getOverlay:function(){return k.current},getInput:function(){return I.current},getFocusInput:function(){return P.current},getVirtualScroller:function(){return le.current}}}),c.useEffect(function(){T.combinedRefs(I,o.inputRef),T.combinedRefs(P,o.focusInputRef)},[I,o.inputRef,P,o.focusInputRef]),yo(function(){o.autoFocus&&K.focus(P.current,o.autoFocus),W()}),st(function(){v&&(o.value||m>=0)&&q()},[v,o.value,m]),st(function(){v&&l&&o.filter&&W()},[v,l,o.filter]),st(function(){le.current&&le.current.scrollInView(0)},[l]),st(function(){l&&(!o.options||o.options.length===0)&&s(""),w(),I.current&&(I.current.selectedIndex=1)}),Qr(function(){Mr.clear(k.current)});var z=function(){var y={value:"",label:o.placeholder};if(Xe){var M=Q(Xe);y={value:ua(M)==="object"?o.options.findIndex(function(xo){return xo===M}):M,label:re(Xe)}}var oe=n({className:"p-hidden-accessible p-dropdown-hidden-select"},B("hiddenSelectedMessage")),Fe=n({ref:I,required:o.required,defaultValue:y.value,name:o.name,tabIndex:-1,"aria-hidden":"true"},B("select")),it=n({value:y.value},B("option"));return c.createElement("div",oe,c.createElement("select",Fe,c.createElement("option",it,y.label)))},j=function(){var y=T.isNotEmpty(Xe)?re(Xe):null;o.editable&&(y=y||o.value||"");var M=n({className:"p-hidden-accessible"},B("hiddenSelectedMessage")),oe=n($n({ref:P,id:o.inputId,defaultValue:y,type:"text",readOnly:!0,"aria-haspopup":"listbox",onFocus:Me,onBlur:nt,onKeyDown:gt,disabled:o.disabled,tabIndex:o.disabled?-1:o.tabIndex||0},$e),B("input"));return c.createElement("div",M,c.createElement("input",oe))},$=function(){var y=T.isNotEmpty(Xe)?re(Xe):null;if(o.editable){var M=y||o.value||"",oe=n($n({ref:I,type:"text",defaultValue:M,className:D("input",{label:y}),disabled:o.disabled,placeholder:o.placeholder,maxLength:o.maxLength,onInput:Ln,onFocus:at,onKeyDown:gt,onBlur:nt,tabIndex:o.disabled?-1:o.tabIndex||0,"aria-haspopup":"listbox"},$e),B("input"));return c.createElement("input",oe)}var Fe=o.valueTemplate?T.getJSXElement(o.valueTemplate,Xe,o):y||o.placeholder||o.emptyMessage||c.createElement(c.Fragment,null," "),it=n({ref:I,className:D("input",{label:y}),tabIndex:"-1"},B("input"));return c.createElement("span",it,Fe)},ye=function(y){(y.key==="Enter"||y.code==="Space")&&(Dn(y),y.preventDefault())},we=function(){if(o.value!=null&&o.showClear&&!o.disabled&&!T.isEmpty(o.options)){var y=n({className:D("clearIcon"),onPointerUp:Dn,tabIndex:o.tabIndex||"0",onKeyDown:ye,"aria-label":li("clear")},B("clearIcon")),M=o.clearIcon||c.createElement(yd,y);return Xt.getJSXIcon(M,$n({},y),{props:o})}return null},dt=function(){var y=n({className:D("loadingIcon"),"data-pr-overlay-visible":v},B("loadingIcon")),M=o.loadingIcon||c.createElement(ls,{spin:!0}),oe=Xt.getJSXIcon(M,$n({},y),{props:o}),Fe=o.placeholder||o.ariaLabel,it=n({className:D("trigger"),role:"button","aria-haspopup":"listbox","aria-expanded":v,"aria-label":Fe},B("trigger"));return c.createElement("div",it,oe)},ft=function(){var y=n({className:D("dropdownIcon"),"data-pr-overlay-visible":v},B("dropdownIcon")),M=v?o.collapseIcon||c.createElement(kv,y):o.dropdownIcon||c.createElement(Cv,y),oe=Xt.getJSXIcon(M,$n({},y),{props:o}),Fe=o.placeholder||o.ariaLabel,it=n({className:D("trigger"),role:"button","aria-haspopup":"listbox","aria-expanded":v,"aria-label":Fe},B("trigger"));return c.createElement("div",it,oe)},je=Re(),Xe=E(),fe=T.isNotEmpty(o.tooltip),Ue=qi.getOtherProps(o),$e=T.reduceKeys(Ue,K.ARIA_PROPS),on=z(),yt=j(),bt=$(),jn=o.loading?dt():ft(),Jr=we(),cr=n({id:o.id,ref:N,className:ue(o.className,D("root",{context:r,focusedState:d,overlayVisibleState:v})),style:o.style,onClick:function(y){return de(y)},onMouseDown:o.onMouseDown,onContextMenu:o.onContextMenu,onFocus:ga,"data-p-disabled":o.disabled,"data-p-focus":d,"aria-activedescendant":d?"dropdownItem_".concat(m):void 0},Ue,B("root")),Jn=n({ref:L,role:"presentation","aria-hidden":"true",className:"p-hidden-accessible p-hidden-focusable",tabIndex:"0",onFocus:me,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0},B("hiddenFirstFocusableEl")),wo=n({ref:F,role:"presentation","aria-hidden":"true",className:"p-hidden-accessible p-hidden-focusable",tabIndex:"0",onFocus:De,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0},B("hiddenLastFocusableEl"));return c.createElement(c.Fragment,null,c.createElement("div",cr,yt,on,bt,Jr,jn,c.createElement(zv,yr({hostName:"Dropdown",ref:k,visibleOptions:je,virtualScrollerRef:le},o,{appendTo:Oe,cx:D,filterValue:l,focusedOptionIndex:m,getOptionGroupChildren:U,getOptionGroupLabel:ht,getOptionGroupRenderKey:Ye,getOptionLabel:re,getOptionRenderKey:ie,getSelectedOptionIndex:sr,hasFilter:be,in:v,isOptionDisabled:Ce,isSelected:Zr,onClick:en,onEnter:Pn,onEntered:bo,onExit:he,onExited:A,onFilterClearIconClick:An,onFilterInputChange:Cr,onFilterInputKeyDown:Sn,onOptionClick:pn,onInputKeyDown:gt,ptm:B,resetFilter:zt,changeFocusedOptionIndex:ot,firstFocusableElement:c.createElement("span",Jn),lastFocusableElement:c.createElement("span",wo),sx:te}))),fe&&c.createElement(ss,yr({target:N,content:o.tooltip,pt:B("tooltip")},o.tooltipOptions)))}));$v.displayName="Dropdown";function C2(e){if(Array.isArray(e))return e}function k2(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,a,i,l=[],s=!0,u=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(s=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(p){u=!0,o=p}finally{try{if(!s&&n.return!=null&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}function Ep(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function T2(e,t){if(e){if(typeof e=="string")return Ep(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ep(e,t)}}function I2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _2(e,t){return C2(e)||k2(e,t)||T2(e,t)||I2()}function ca(e){"@babel/helpers - typeof";return ca=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ca(e)}function N2(e,t){if(ca(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ca(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function R2(e){var t=N2(e,"string");return ca(t)==="symbol"?t:String(t)}function Ot(e,t,n){return t=R2(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L2={root:"p-paginator p-component",left:"p-paginator-left-content",end:"p-paginator-right-content",firstPageIcon:"p-paginator-icon",firstPageButton:function(t){var n=t.disabled;return ue("p-paginator-first p-paginator-element p-link",{"p-disabled":n})},prevPageIcon:"p-paginator-icon",prevPageButton:function(t){var n=t.disabled;return ue("p-paginator-prev p-paginator-element p-link",{"p-disabled":n})},nextPageIcon:"p-paginator-icon",nextPageButton:function(t){var n=t.disabled;return ue("p-paginator-next p-paginator-element p-link",{"p-disabled":n})},lastPageIcon:"p-paginator-icon",lastPageButton:function(t){var n=t.disabled;return ue("p-paginator-last p-paginator-element p-link",{"p-disabled":n})},pageButton:function(t){var n=t.pageLink,r=t.startPageInView,o=t.endPageInView,a=t.page;return ue("p-paginator-page p-paginator-element p-link",{"p-paginator-page-start":n===r,"p-paginator-page-end":n===o,"p-highlight":n-1===a})},pages:"p-paginator-pages"},A2=`
@layer primereact {
    .p-paginator {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    
    .p-paginator-left-content {
        margin-right: auto;
    }
    
    .p-paginator-right-content {
        margin-left: auto;
    }
    
    .p-paginator-page,
    .p-paginator-next,
    .p-paginator-last,
    .p-paginator-first,
    .p-paginator-prev,
    .p-paginator-current {
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
        user-select: none;
        overflow: hidden;
        position: relative;
    }
    
    .p-paginator-element:focus {
        z-index: 1;
        position: relative;
    }
}
`,Gi=ke.extend({defaultProps:{__TYPE:"Paginator",__parentMetadata:null,totalRecords:0,rows:0,first:0,pageLinkSize:5,rowsPerPageOptions:null,alwaysShow:!0,style:null,className:null,template:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",onPageChange:null,leftContent:null,rightContent:null,dropdownAppendTo:null,currentPageReportTemplate:"({currentPage} of {totalPages})",children:void 0},css:{classes:L2,styles:A2}}),D2=ke.extend({defaultProps:{__TYPE:"CurrentPageReport",pageCount:null,page:null,first:null,rows:null,totalRecords:null,reportTemplate:"({currentPage} of {totalPages})",template:null,children:void 0}}),M2=ke.extend({defaultProps:{__TYPE:"FirstPageLink",disabled:!1,onClick:null,template:null,firstPageLinkIcon:null,children:void 0}}),j2=ke.extend({defaultProps:{__TYPE:"JumpToPageInput",page:null,rows:null,pageCount:null,disabled:!1,template:null,onChange:null,children:void 0,metaData:null,ptm:null}}),F2=ke.extend({defaultProps:{__TYPE:"LastPageLink",disabled:!1,onClick:null,template:null,lastPageLinkIcon:null,children:void 0}}),z2=ke.extend({defaultProps:{__TYPE:"NextPageLink",disabled:!1,onClick:null,template:null,nextPageLinkIcon:null,children:void 0}}),$2=ke.extend({defaultProps:{__TYPE:"PageLinks",value:null,page:null,rows:null,pageCount:null,links:null,template:null,children:void 0}}),B2=ke.extend({defaultProps:{__TYPE:"PrevPageLink",disabled:!1,onClick:null,template:null,prevPageLinkIcon:null,children:void 0}}),H2=ke.extend({defaultProps:{__TYPE:"RowsPerPageDropdown",options:null,value:null,page:null,pageCount:null,totalRecords:0,appendTo:null,onChange:null,template:null,disabled:!1,children:void 0}});function Op(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Pp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Op(Object(n),!0).forEach(function(r){Ot(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Op(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Bv=c.memo(function(e){var t=Et(),n=c.useContext(We),r=D2.getProps(e,n),o={currentPage:r.page+1,totalPages:r.totalPages,first:Math.min(r.first+1,r.totalRecords),last:Math.min(r.first+r.rows,r.totalRecords),rows:r.rows,totalRecords:r.totalRecords},a=r.reportTemplate.replace("{currentPage}",o.currentPage).replace("{totalPages}",o.totalPages).replace("{first}",o.first).replace("{last}",o.last).replace("{rows}",o.rows).replace("{totalRecords}",o.totalRecords),i=t({"aria-live":"polite",className:"p-paginator-current"},r.ptm("current",{hostName:r.hostName})),l=c.createElement("span",i,a);if(r.template){var s=Pp(Pp({},o),{ariaLive:"polite",className:"p-paginator-current",element:l,props:r});return T.getJSXElement(r.template,s)}return l});Bv.displayName="CurrentPageReport";function Cp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function U2(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Cp(Object(n),!0).forEach(function(r){Ot(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Cp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Hv=c.memo(function(e){var t=Et(),n=c.useContext(We),r=M2.getProps(e,n),o=r.ptm,a=r.cx,i=function(O){return o(O,{hostName:r.hostName,context:{disabled:r.disabled}})},l=ue("p-paginator-first p-paginator-element p-link",{"p-disabled":r.disabled}),s="p-paginator-icon",u=t({className:a("firstPageIcon")},i("firstPageIcon")),p=r.firstPageLinkIcon||c.createElement(gv,u),d=Xt.getJSXIcon(p,U2({},u),{props:r}),f=t({type:"button",className:a("firstPageButton",{disabled:r.disabled}),onClick:r.onClick,disabled:r.disabled,"aria-label":sa("firstPageLabel")},i("firstPageButton")),b=c.createElement("button",f,d,c.createElement(Yn,null));if(r.template){var x={onClick:r.onClick,className:l,iconClassName:s,disabled:r.disabled,element:b,props:r};return T.getJSXElement(r.template,x)}return b});Hv.displayName="FirstPageLink";function V2(e,t,n){return Object.defineProperty(e,"prototype",{writable:!1}),e}function K2(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Ht=Object.freeze({STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter",CUSTOM:"custom"}),Jt=V2(function e(){K2(this,e)});Ot(Jt,"ripple",!1);Ot(Jt,"inputStyle","outlined");Ot(Jt,"locale","en");Ot(Jt,"appendTo",null);Ot(Jt,"cssTransition",!0);Ot(Jt,"autoZIndex",!0);Ot(Jt,"hideOverlaysOnDocumentScrolling",!1);Ot(Jt,"nonce",null);Ot(Jt,"nullSortOrder",1);Ot(Jt,"zIndex",{modal:1100,overlay:1e3,menu:1e3,tooltip:1100,toast:1200});Ot(Jt,"pt",void 0);Ot(Jt,"filterMatchModeOptions",{text:[Ht.STARTS_WITH,Ht.CONTAINS,Ht.NOT_CONTAINS,Ht.ENDS_WITH,Ht.EQUALS,Ht.NOT_EQUALS],numeric:[Ht.EQUALS,Ht.NOT_EQUALS,Ht.LESS_THAN,Ht.LESS_THAN_OR_EQUAL_TO,Ht.GREATER_THAN,Ht.GREATER_THAN_OR_EQUAL_TO],date:[Ht.DATE_IS,Ht.DATE_IS_NOT,Ht.DATE_BEFORE,Ht.DATE_AFTER]});Ot(Jt,"changeTheme",function(e,t,n,r){var o,a=document.getElementById(n);if(!a)throw Error("Element with id ".concat(n," not found."));var i=a.getAttribute("href").replace(e,t),l=document.createElement("link");l.setAttribute("rel","stylesheet"),l.setAttribute("id",n),l.setAttribute("href",i),l.addEventListener("load",function(){r&&r()}),(o=a.parentNode)===null||o===void 0||o.replaceChild(l,a)});var W2={en:{accept:"Yes",addRule:"Add Rule",am:"AM",apply:"Apply",cancel:"Cancel",choose:"Choose",chooseDate:"Choose Date",chooseMonth:"Choose Month",chooseYear:"Choose Year",clear:"Clear",completed:"Completed",contains:"Contains",custom:"Custom",dateAfter:"Date is after",dateBefore:"Date is before",dateFormat:"mm/dd/yy",dateIs:"Date is",dateIsNot:"Date is not",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],emptyFilterMessage:"No results found",emptyMessage:"No available options",emptySearchMessage:"No results found",emptySelectionMessage:"No selected item",endsWith:"Ends with",equals:"Equals",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],filter:"Filter",firstDayOfWeek:0,gt:"Greater than",gte:"Greater than or equal to",lt:"Less than",lte:"Less than or equal to",matchAll:"Match All",matchAny:"Match Any",medium:"Medium",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],nextDecade:"Next Decade",nextHour:"Next Hour",nextMinute:"Next Minute",nextMonth:"Next Month",nextSecond:"Next Second",nextYear:"Next Year",noFilter:"No Filter",notContains:"Not contains",notEquals:"Not equals",now:"Now",passwordPrompt:"Enter a password",pending:"Pending",pm:"PM",prevDecade:"Previous Decade",prevHour:"Previous Hour",prevMinute:"Previous Minute",prevMonth:"Previous Month",prevSecond:"Previous Second",prevYear:"Previous Year",reject:"No",removeRule:"Remove Rule",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",showMonthAfterYear:!1,startsWith:"Starts with",strong:"Strong",today:"Today",upload:"Upload",weak:"Weak",weekHeader:"Wk",aria:{cancelEdit:"Cancel Edit",close:"Close",collapseRow:"Row Collapsed",editRow:"Edit Row",expandRow:"Row Expanded",falseLabel:"False",filterConstraint:"Filter Constraint",filterOperator:"Filter Operator",firstPageLabel:"First Page",gridView:"Grid View",hideFilterMenu:"Hide Filter Menu",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",lastPageLabel:"Last Page",listView:"List View",moveAllToSource:"Move All to Source",moveAllToTarget:"Move All to Target",moveBottom:"Move Bottom",moveDown:"Move Down",moveToSource:"Move to Source",moveToTarget:"Move to Target",moveTop:"Move Top",moveUp:"Move Up",navigation:"Navigation",next:"Next",nextPageLabel:"Next Page",nullLabel:"Not Selected",pageLabel:"Page {page}",otpLabel:"Please enter one time password character {0}",passwordHide:"Hide Password",passwordShow:"Show Password",previous:"Previous",previousPageLabel:"Previous Page",rotateLeft:"Rotate Left",rotateRight:"Rotate Right",rowsPerPageLabel:"Rows per page",saveEdit:"Save Edit",scrollTop:"Scroll Top",selectAll:"All items selected",selectRow:"Row Selected",showFilterMenu:"Show Filter Menu",slide:"Slide",slideNumber:"{slideNumber}",star:"1 star",stars:"{star} stars",trueLabel:"True",unselectAll:"All items unselected",unselectRow:"Row Unselected",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out"}}};function Uv(e,t){if(e.includes("__proto__")||e.includes("prototype"))throw new Error("Unsafe ariaKey detected");var n=Jt.locale;try{var r=q2(n).aria[e];if(r)for(var o in t)t.hasOwnProperty(o)&&(r=r.replace("{".concat(o,"}"),t[o]));return r}catch{throw new Error("The ".concat(e," option is not found in the current locale('").concat(n,"')."))}}function q2(e){var t=e||Jt.locale;if(t.includes("__proto__")||t.includes("prototype"))throw new Error("Unsafe locale detected");return W2[t]}var Vv=c.memo(function(e){Et();var t=c.useContext(We),n=j2.getProps(e,t),r=Uv("jumpToPageInputLabel"),o=function(u){n.onChange&&n.onChange(n.rows*(u.value-1),n.rows)},a=n.totalPages>0?n.page+1:0,i=c.createElement(Sv,{value:a,onChange:o,className:"p-paginator-page-input",disabled:n.disabled,pt:n.ptm("JTPInput"),unstyled:n.unstyled,__parentMetadata:{parent:n.metaData},"aria-label":r});if(n.template){var l={value:a,onChange:o,disabled:n.disabled,className:"p-paginator-page-input","aria-label":r,element:i,props:n};return T.getJSXElement(n.template,l)}return i});Vv.displayName="JumpToPageInput";function kp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function G2(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?kp(Object(n),!0).forEach(function(r){Ot(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Kv=c.memo(function(e){var t=Et(),n=c.useContext(We),r=F2.getProps(e,n),o=r.ptm,a=r.cx,i=function(O){return o(O,{hostName:r.hostName,context:{disabled:r.disabled}})},l=ue("p-paginator-last p-paginator-element p-link",{"p-disabled":r.disabled}),s="p-paginator-icon",u=t({className:a("lastPageIcon")},i("lastPageIcon")),p=r.lastPageLinkIcon||c.createElement(Ev,u),d=Xt.getJSXIcon(p,G2({},u),{props:r}),f=t({type:"button",className:a("lastPageButton",{disabled:r.disabled}),onClick:r.onClick,disabled:r.disabled,"aria-label":sa("lastPageLabel")},i("lastPageButton")),b=c.createElement("button",f,d,c.createElement(Yn,null));if(r.template){var x={onClick:r.onClick,className:l,iconClassName:s,disabled:r.disabled,element:b,props:r};return T.getJSXElement(r.template,x)}return b});Kv.displayName="LastPageLink";function Tp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Y2(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Tp(Object(n),!0).forEach(function(r){Ot(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Wv=c.memo(function(e){var t=Et(),n=c.useContext(We),r=z2.getProps(e,n),o=r.ptm,a=r.cx,i=function(O){return o(O,{hostName:r.hostName,context:{disabled:r.disabled}})},l=ue("p-paginator-next p-paginator-element p-link",{"p-disabled":r.disabled}),s="p-paginator-icon",u=t({className:a("nextPageIcon")},i("nextPageIcon")),p=r.nextPageLinkIcon||c.createElement(Ov,u),d=Xt.getJSXIcon(p,Y2({},u),{props:r}),f=t({type:"button",className:a("nextPageButton",{disabled:r.disabled}),onClick:r.onClick,disabled:r.disabled,"aria-label":sa("nextPageLabel")},i("nextPageButton")),b=c.createElement("button",f,d,c.createElement(Yn,null));if(r.template){var x={onClick:r.onClick,className:l,iconClassName:s,disabled:r.disabled,element:b,nextPageLinkIcon:d,props:r};return T.getJSXElement(r.template,x)}return b});Wv.displayName="NextPageLink";var qv=c.memo(function(e){var t=Et(),n=c.useContext(We),r=$2.getProps(e,n),o=r.ptm,a=r.cx,i=function(b,x){return o(x,{hostName:r.hostName,context:{active:b-1===r.page}})},l=function(b,x){r.onClick&&r.onClick({originalEvent:b,value:x}),b.preventDefault()},s;if(r.value){var u=r.value[0],p=r.value[r.value.length-1];s=r.value.map(function(f){var b=ue("p-paginator-page p-paginator-element p-link",{"p-paginator-page-start":f===u,"p-paginator-page-end":f===p,"p-highlight":f-1===r.page}),x=t({type:"button",onClick:function(g){return l(g,f)},className:a("pageButton",{pageLink:f,startPageInView:u,endPageInView:p,page:r.page}),disabled:r.disabled,"aria-label":sa("pageLabel",{page:f}),"aria-current":f-1===r.page?"true":void 0},i(f,"pageButton")),m=c.createElement("button",x,f,c.createElement(Yn,null));if(r.template){var O={onClick:function(g){return l(g,f)},className:b,view:{startPage:u-1,endPage:p-1},page:f-1,currentPage:r.page,totalPages:r.totalPages,ariaLabel:sa("pageLabel",{page:f}),ariaCurrent:f-1===r.page?"true":void 0,element:m,props:r};m=T.getJSXElement(r.template,O)}return c.createElement(c.Fragment,{key:f},m)})}var d=t({className:a("pages")},o("pages",{hostName:r.hostName}));return c.createElement("span",d,s)});qv.displayName="PageLinks";function Ip(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function X2(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ip(Object(n),!0).forEach(function(r){Ot(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ip(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Gv=c.memo(function(e){var t=Et(),n=c.useContext(We),r=B2.getProps(e,n),o=r.ptm,a=r.cx,i=function(O){return o(O,{hostName:r.hostName,context:{disabled:r.disabled}})},l=ue("p-paginator-prev p-paginator-element p-link",{"p-disabled":r.disabled}),s="p-paginator-icon",u=t({className:a("prevPageIcon")},i("prevPageIcon")),p=r.prevPageLinkIcon||c.createElement(Pv,u),d=Xt.getJSXIcon(p,X2({},u),{props:r}),f=t({type:"button",className:a("prevPageButton",{disabled:r.disabled}),onClick:r.onClick,disabled:r.disabled,"aria-label":sa("previousPageLabel")},i("prevPageButton")),b=c.createElement("button",f,d,c.createElement(Yn,null));if(r.template){var x={onClick:r.onClick,className:l,iconClassName:s,disabled:r.disabled,element:b,props:r};return T.getJSXElement(r.template,x)}return b});Gv.displayName="PrevPageLink";var Yv=c.memo(function(e){Et();var t=c.useContext(We),n=H2.getProps(e,t),r=n.options&&n.options.length>0,o=r?n.options.map(function(u){return{label:String(u),value:u}}):[],a=li("choose"),i=Uv("jumpToPageDropdownLabel"),l=r?c.createElement(c.Fragment,null,c.createElement($v,{value:n.value,options:o,onChange:n.onChange,appendTo:n.appendTo,disabled:n.disabled,placeholder:a,"aria-label":i,pt:n.ptm("RPPDropdown"),unstyled:n.unstyled,__parentMetadata:{parent:n.metaData}})):null;if(n.template){var s={value:n.value,options:o,onChange:n.onChange,appendTo:n.appendTo,currentPage:n.page,totalPages:n.pageCount,totalRecords:n.totalRecords,disabled:n.disabled,ariaLabel:i,element:l,props:n};return T.getJSXElement(n.template,s)}return l});Yv.displayName="RowsPerPageDropdown";function _p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Q2(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_p(Object(n),!0).forEach(function(r){Ot(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_p(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Xv=c.memo(c.forwardRef(function(e,t){var n=Et(),r=c.useContext(We),o=Gi.getProps(e,r),a=Q2({props:o},o.__parentMetadata),i=Gi.setMetaData(a),l=i.ptm,s=i.cx,u=i.isUnstyled;ma(Gi.css.styles,u,{name:"paginator"});var p=c.useRef(null),d=Math.floor(o.first/o.rows),f=Math.ceil(o.totalRecords/o.rows),b=d===0,x=d===f-1,m=f===0,O=function(){var D=f,te=Math.min(o.pageLinkSize,D),X=Math.max(0,Math.ceil(d-te/2)),ne=Math.min(D-1,X+te-1),ce=o.pageLinkSize-(ne-X+1);return X=Math.max(0,X-ce),[X,ne]},h=function(){for(var D=[],te=O(),X=te[0],ne=te[1],ce=X;ce<=ne;ce++)D.push(ce+1);return D},g=function(D,te){var X=f,ne=Math.floor(D/te);if(ne>=0&&ne<X){var ce={first:D,rows:te,page:ne,totalPages:X};o.onPageChange&&o.onPageChange(ce)}},v=function(D){g(0,o.rows),D.preventDefault()},S=function(D){g(o.first-o.rows,o.rows),D.preventDefault()},C=function(D){g((D.value-1)*o.rows,o.rows)},N=function(D){g(o.first+o.rows,o.rows),D.preventDefault()},k=function(D){g((f-1)*o.rows,o.rows),D.preventDefault()},L=function(D){var te=D.value;g(0,te)};c.useImperativeHandle(t,function(){return{props:o,getElement:function(){return p.current}}}),st(function(){d>0&&o.first>=o.totalRecords&&g((f-1)*o.rows,o.rows)},[o.totalRecords]);var F=function(D,te){var X;switch(D){case"FirstPageLink":X=c.createElement(Hv,{hostName:"Paginator",key:D,page:d,totalPages:f,totalRecords:o.totalRecords,rows:o.rows,onClick:v,disabled:b||m,template:te,firstPageLinkIcon:o.firstPageLinkIcon,ptm:l,cx:s});break;case"PrevPageLink":X=c.createElement(Gv,{hostName:"Paginator",key:D,page:d,totalPages:f,totalRecords:o.totalRecords,rows:o.rows,onClick:S,disabled:b||m,template:te,prevPageLinkIcon:o.prevPageLinkIcon,ptm:l,cx:s});break;case"NextPageLink":X=c.createElement(Wv,{hostName:"Paginator",key:D,page:d,totalPages:f,totalRecords:o.totalRecords,rows:o.rows,onClick:N,disabled:x||m,template:te,nextPageLinkIcon:o.nextPageLinkIcon,ptm:l,cx:s});break;case"LastPageLink":X=c.createElement(Kv,{hostName:"Paginator",key:D,page:d,totalPages:f,totalRecords:o.totalRecords,rows:o.rows,onClick:k,disabled:x||m,template:te,lastPageLinkIcon:o.lastPageLinkIcon,ptm:l,cx:s});break;case"PageLinks":X=c.createElement(qv,{hostName:"Paginator",key:D,page:d,totalPages:f,totalRecords:o.totalRecords,rows:o.rows,value:h(),onClick:C,template:te,ptm:l,cx:s});break;case"RowsPerPageDropdown":X=c.createElement(Yv,{hostName:"Paginator",key:D,value:o.rows,page:d,totalPages:f,totalRecords:o.totalRecords,options:o.rowsPerPageOptions,onChange:L,appendTo:o.dropdownAppendTo,template:te,disabled:m,unstyled:o.unstyled,ptm:l,cx:s,metaData:a});break;case"CurrentPageReport":X=c.createElement(Bv,{hostName:"Paginator",reportTemplate:o.currentPageReportTemplate,key:D,page:d,totalPages:f,totalRecords:o.totalRecords,rows:o.rows,first:o.first,template:te,ptm:l});break;case"JumpToPageInput":X=c.createElement(Vv,{hostName:"Paginator",key:D,rows:o.rows,page:d,totalPages:f,onChange:g,disabled:m,template:te,ptm:l,unstyled:o.unstyled,metaData:a});break;default:X=null;break}return X},I=function(){var D=o.template;return D?ca(D)==="object"?D.layout?D.layout.split(" ").map(function(te){var X=te.trim();return F(X,D[X])}):Object.entries(D).map(function(te){var X=_2(te,2),ne=X[0],ce=X[1];return F(ne,ce)}):D.split(" ").map(function(te){return F(te.trim())}):null};if(!o.alwaysShow&&f<=1)return null;var P=T.getJSXElement(o.leftContent,o),le=T.getJSXElement(o.rightContent,o),G=I(),pe=n({className:s("left")},l("left")),Z=P&&c.createElement("div",pe,P),be=n({className:s("end")},l("end")),Oe=le&&c.createElement("div",be,le),R=n({ref:p,className:ue(o.className,s("root")),style:o.style},Gi.getOtherProps(o),l("root"));return c.createElement("div",R,Z,G,Oe)}));Xv.displayName="Paginator";function mc(){return mc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mc.apply(this,arguments)}function gc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Z2(e){if(Array.isArray(e))return gc(e)}function J2(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Qv(e,t){if(e){if(typeof e=="string")return gc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return gc(e,t)}}function ew(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tw(e){return Z2(e)||J2(e)||Qv(e)||ew()}function nw(e){if(Array.isArray(e))return e}function rw(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,a,i,l=[],s=!0,u=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(s=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(p){u=!0,o=p}finally{try{if(!s&&n.return!=null&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}function ow(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Np(e,t){return nw(e)||rw(e,t)||Qv(e,t)||ow()}function yi(e){"@babel/helpers - typeof";return yi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yi(e)}function aw(e,t){if(yi(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(yi(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function iw(e){var t=aw(e,"string");return yi(t)==="symbol"?t:String(t)}function vc(e,t,n){return t=iw(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var lw={loadingIcon:"p-dataview-loading-icon",loadingOverlay:"p-dataview-loading-overlay p-component-overlay",emptyMessage:"p-dataview-emptymessage",header:"p-dataview-header",footer:"p-dataview-footer",content:"p-dataview-content",grid:function(t){var n=t.props;return ue("p-grid grid",{"p-nogutter grid-nogutter":!n.gutter})},root:function(t){var n=t.props;return ue("p-dataview p-component",vc(vc({},"p-dataview-".concat(n.layout),!!n.layout),"p-dataview-loading",n.loading))}},sw=`
@layer primereact {
    .p-dataview-loading {
        position: relative;
        min-height: 4rem;
    }

    .p-dataview .p-dataview-loading-overlay {
        position: absolute;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
`,Yi=ke.extend({defaultProps:{__TYPE:"DataView",id:null,header:null,footer:null,value:null,layout:"list",dataKey:null,rows:null,first:0,totalRecords:null,paginator:!1,paginatorPosition:"bottom",alwaysShowPaginator:!0,paginatorClassName:null,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",paginatorLeft:null,paginatorRight:null,paginatorDropdownAppendTo:null,pageLinkSize:5,rowsPerPageOptions:null,currentPageReportTemplate:"({currentPage} of {totalPages})",emptyMessage:null,sortField:null,sortOrder:null,style:null,className:null,lazy:!1,loading:!1,loadingIcon:null,gutter:!1,itemTemplate:null,listTemplate:null,onPage:null,children:void 0},css:{classes:lw,styles:sw}}),Ks=ke.extend({defaultProps:{__TYPE:"DataViewLayoutOptions",id:null,style:null,className:null,layout:null,listIcon:null,gridIcon:null,onChange:null,children:void 0},css:{classes:{root:"p-dataview p-component p-dataview-layout-options p-selectbutton p-button-group",listButton:function(t){var n=t.props;return ue("p-button p-button-icon-only",{"p-highlight":n.layout==="list"})},gridButton:function(t){var n=t.props;return ue("p-button p-button-icon-only",{"p-highlight":n.layout==="grid"})}}}});function uw(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=cw(e))||t){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(u){throw u},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,i=!1,l;return{s:function(){n=n.call(e)},n:function(){var u=n.next();return a=u.done,u},e:function(u){i=!0,l=u},f:function(){try{!a&&n.return!=null&&n.return()}finally{if(i)throw l}}}}function cw(e,t){if(e){if(typeof e=="string")return Rp(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Rp(e,t)}}function Rp(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Lp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function hc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Lp(Object(n),!0).forEach(function(r){vc(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var dw=c.memo(function(e){var t=Et(),n=c.useContext(We),r=Ks.getProps(e,n),o=Ks.setMetaData({props:r}),a=o.ptm,i=o.cx,l=function(O,h){r.onChange({originalEvent:O,value:h}),O.preventDefault()},s=t(a("list")),u=t(a("grid")),p=Xt.getJSXIcon(r.listIcon||c.createElement(pv,s),hc({},s),{props:r}),d=Xt.getJSXIcon(r.gridIcon||c.createElement(mv,u),hc({},u),{props:r}),f=t({id:r.id,style:r.style,className:ue(r.className,i("root"))},Ks.getOtherProps(r),a("root")),b=t({type:"button",className:i("listButton"),onClick:function(O){return l(O,"list")}},a("listButton")),x=t({type:"button",className:i("gridButton"),onClick:function(O){return l(O,"grid")}},a("gridButton"));return c.createElement("div",f,c.createElement("button",b,p,c.createElement(Yn,null)),c.createElement("button",x,d,c.createElement(Yn,null)))}),Zv=c.memo(function(e){return e.template(e.item,e.layout)}),Jv=c.memo(c.forwardRef(function(e,t){var n=Et(),r=c.useContext(We),o=Yi.getProps(e,r),a=c.useState(o.first),i=Np(a,2),l=i[0],s=i[1],u=c.useState(o.rows),p=Np(u,2),d=p[0],f=p[1],b={props:o,state:{first:l,rows:d}},x=Yi.setMetaData(b),m=x.ptm,O=x.cx,h=x.isUnstyled;ma(Yi.css.styles,h,{name:"dataview"});var g=c.useRef(null),v=o.onPage?o.first:l,S=o.onPage?o.rows:d,C=function(me){return o.dataKey?T.resolveFieldData(me,o.dataKey):null},N=function(){return o.totalRecords?o.totalRecords:o.value?o.value.length:0},k=function(me){var De=ue("p-paginator-"+me,o.paginatorClassName),Ie=N();return c.createElement(Xv,{first:v,rows:S,pageLinkSize:o.pageLinkSize,className:De,onPageChange:L,template:o.paginatorTemplate,totalRecords:Ie,rowsPerPageOptions:o.rowsPerPageOptions,currentPageReportTemplate:o.currentPageReportTemplate,leftContent:o.paginatorLeft,rightContent:o.paginatorRight,alwaysShow:o.alwaysShowPaginator,dropdownAppendTo:o.paginatorDropdownAppendTo,ptm:m("paginator"),unstyled:o.unstyled,__parentMetadata:{parent:b}})},L=function(me){o.onPage?o.onPage(me):(s(me.first),f(me.rows))},F=function(me){if(o.paginator){var De=o.lazy?0:v,Ie=N(),de=Math.min(S+De,Ie);return me.slice(De,de)||[]}return me},I=function(){if(o.value){var me=new Map,De=T.localeComparator(r&&r.locale||St.locale),Ie=tw(o.value),de=uw(Ie),Me;try{for(de.s();!(Me=de.n()).done;){var nt=Me.value;me.set(nt,T.resolveFieldData(nt,o.sortField))}}catch(ut){de.e(ut)}finally{de.f()}return Ie.sort(function(ut,en){var gt=me.get(ut),Sn=me.get(en);return T.sort(gt,Sn,o.sortOrder,De,r&&r.nullSortOrder||St.nullSortOrder)}),Ie}return null},P=function(){if(o.loading){var me=n({className:O("loadingIcon")},m("loadingIcon")),De=o.loadingIcon||c.createElement(ls,mc({},me,{spin:!0})),Ie=Xt.getJSXIcon(De,hc({},me),{props:o}),de=n({className:O("loadingOverlay")},m("loadingOverlay"));return c.createElement("div",de,Ie)}return null},le=function(){return o.paginator&&(o.paginatorPosition!=="bottom"||o.paginatorPosition==="both")?k("top"):null},G=function(){return o.paginator&&(o.paginatorPosition!=="top"||o.paginatorPosition==="both")?k("bottom"):null},pe=function(){if(!o.loading){var me=o.emptyMessage||li("emptyMessage"),De=n({className:O("emptyMessage")},m("emptyMessage"));return c.createElement("div",De,me)}return null},Z=function(){if(o.header){var me=n({className:O("header")},m("header"));return c.createElement("div",me,o.header)}return null},be=function(){if(o.footer){var me=n({className:O("footer")},m("footer"));return c.createElement("div",me,o.footer)}return null},Oe=function(me){if(T.isNotEmpty(me)){var De=F(me);return De.map(function(Ie,de){return c.createElement(Zv,{key:C(Ie)||de,template:o.itemTemplate,layout:o.layout,item:Ie})})}return pe()},R=function(me){var De=n({className:O("content")},m("content")),Ie=null;if(o.listTemplate){var de=F(me);Ie=T.getJSXElement(o.listTemplate,de,o.layout)}else{var Me=Oe(me),nt=n({className:O("grid")},m("grid"));Ie=c.createElement("div",nt,Me)}return c.createElement("div",De,Ie)},B=function(){var me=o.value;return T.isNotEmpty(me)&&o.sortField&&(me=I()),me};c.useImperativeHandle(t,function(){return{props:o,getElement:function(){return g.current}}});var D=B(),te=P(),X=le(),ne=G(),ce=Z(),At=be(),tt=R(D),qe=n({id:o.id,ref:g,style:o.style,className:ue(o.className,O("root"))},Yi.getOtherProps(o),m("root"));return c.createElement("div",qe,te,ce,X,tt,ne,At)}));dw.displayName="DataViewLayoutOptions";Zv.displayName="DataViewItem";Jv.displayName="DataView";function Pt(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}Pt(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var Le=function(){return Le=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Le.apply(this,arguments)};function Bl(e){return Bl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bl(e)}var fw=/^\s+/,pw=/\s+$/;function ae(e,t){if(t=t||{},(e=e||"")instanceof ae)return e;if(!(this instanceof ae))return new ae(e,t);var n=function(r){var o={r:0,g:0,b:0},a=1,i=null,l=null,s=null,u=!1,p=!1;typeof r=="string"&&(r=function(x){x=x.replace(fw,"").replace(pw,"").toLowerCase();var m,O=!1;if(yc[x])x=yc[x],O=!0;else if(x=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(m=Bn.rgb.exec(x))?{r:m[1],g:m[2],b:m[3]}:(m=Bn.rgba.exec(x))?{r:m[1],g:m[2],b:m[3],a:m[4]}:(m=Bn.hsl.exec(x))?{h:m[1],s:m[2],l:m[3]}:(m=Bn.hsla.exec(x))?{h:m[1],s:m[2],l:m[3],a:m[4]}:(m=Bn.hsv.exec(x))?{h:m[1],s:m[2],v:m[3]}:(m=Bn.hsva.exec(x))?{h:m[1],s:m[2],v:m[3],a:m[4]}:(m=Bn.hex8.exec(x))?{r:mn(m[1]),g:mn(m[2]),b:mn(m[3]),a:zp(m[4]),format:O?"name":"hex8"}:(m=Bn.hex6.exec(x))?{r:mn(m[1]),g:mn(m[2]),b:mn(m[3]),format:O?"name":"hex"}:(m=Bn.hex4.exec(x))?{r:mn(m[1]+""+m[1]),g:mn(m[2]+""+m[2]),b:mn(m[3]+""+m[3]),a:zp(m[4]+""+m[4]),format:O?"name":"hex8"}:(m=Bn.hex3.exec(x))?{r:mn(m[1]+""+m[1]),g:mn(m[2]+""+m[2]),b:mn(m[3]+""+m[3]),format:O?"name":"hex"}:!1}(r)),Bl(r)=="object"&&(fr(r.r)&&fr(r.g)&&fr(r.b)?(d=r.r,f=r.g,b=r.b,o={r:255*Ve(d,255),g:255*Ve(f,255),b:255*Ve(b,255)},u=!0,p=String(r.r).substr(-1)==="%"?"prgb":"rgb"):fr(r.h)&&fr(r.s)&&fr(r.v)?(i=Na(r.s),l=Na(r.v),o=function(x,m,O){x=6*Ve(x,360),m=Ve(m,100),O=Ve(O,100);var h=Math.floor(x),g=x-h,v=O*(1-m),S=O*(1-g*m),C=O*(1-(1-g)*m),N=h%6,k=[O,S,v,v,C,O][N],L=[C,O,O,S,v,v][N],F=[v,v,C,O,O,S][N];return{r:255*k,g:255*L,b:255*F}}(r.h,i,l),u=!0,p="hsv"):fr(r.h)&&fr(r.s)&&fr(r.l)&&(i=Na(r.s),s=Na(r.l),o=function(x,m,O){var h,g,v;function S(k,L,F){return F<0&&(F+=1),F>1&&(F-=1),F<1/6?k+6*(L-k)*F:F<.5?L:F<2/3?k+(L-k)*(2/3-F)*6:k}if(x=Ve(x,360),m=Ve(m,100),O=Ve(O,100),m===0)h=g=v=O;else{var C=O<.5?O*(1+m):O+m-O*m,N=2*O-C;h=S(N,C,x+1/3),g=S(N,C,x),v=S(N,C,x-1/3)}return{r:255*h,g:255*g,b:255*v}}(r.h,i,s),u=!0,p="hsl"),r.hasOwnProperty("a")&&(a=r.a));var d,f,b;return a=eh(a),{ok:u,format:r.format||p,r:Math.min(255,Math.max(o.r,0)),g:Math.min(255,Math.max(o.g,0)),b:Math.min(255,Math.max(o.b,0)),a}}(e);this._originalInput=e,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||n.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=n.ok}function Ap(e,t,n){e=Ve(e,255),t=Ve(t,255),n=Ve(n,255);var r,o,a=Math.max(e,t,n),i=Math.min(e,t,n),l=(a+i)/2;if(a==i)r=o=0;else{var s=a-i;switch(o=l>.5?s/(2-a-i):s/(a+i),a){case e:r=(t-n)/s+(t<n?6:0);break;case t:r=(n-e)/s+2;break;case n:r=(e-t)/s+4}r/=6}return{h:r,s:o,l}}function Dp(e,t,n){e=Ve(e,255),t=Ve(t,255),n=Ve(n,255);var r,o,a=Math.max(e,t,n),i=Math.min(e,t,n),l=a,s=a-i;if(o=a===0?0:s/a,a==i)r=0;else{switch(a){case e:r=(t-n)/s+(t<n?6:0);break;case t:r=(n-e)/s+2;break;case n:r=(e-t)/s+4}r/=6}return{h:r,s:o,v:l}}function Mp(e,t,n,r){var o=[Kn(Math.round(e).toString(16)),Kn(Math.round(t).toString(16)),Kn(Math.round(n).toString(16))];return r&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function jp(e,t,n,r){return[Kn(th(r)),Kn(Math.round(e).toString(16)),Kn(Math.round(t).toString(16)),Kn(Math.round(n).toString(16))].join("")}function mw(e,t){t=t===0?0:t||10;var n=ae(e).toHsl();return n.s-=t/100,n.s=cs(n.s),ae(n)}function gw(e,t){t=t===0?0:t||10;var n=ae(e).toHsl();return n.s+=t/100,n.s=cs(n.s),ae(n)}function vw(e){return ae(e).desaturate(100)}function hw(e,t){t=t===0?0:t||10;var n=ae(e).toHsl();return n.l+=t/100,n.l=cs(n.l),ae(n)}function yw(e,t){t=t===0?0:t||10;var n=ae(e).toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(-t/100*255))),n.g=Math.max(0,Math.min(255,n.g-Math.round(-t/100*255))),n.b=Math.max(0,Math.min(255,n.b-Math.round(-t/100*255))),ae(n)}function bw(e,t){t=t===0?0:t||10;var n=ae(e).toHsl();return n.l-=t/100,n.l=cs(n.l),ae(n)}function ww(e,t){var n=ae(e).toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,ae(n)}function xw(e){var t=ae(e).toHsl();return t.h=(t.h+180)%360,ae(t)}function Fp(e,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var n=ae(e).toHsl(),r=[ae(e)],o=360/t,a=1;a<t;a++)r.push(ae({h:(n.h+a*o)%360,s:n.s,l:n.l}));return r}function Sw(e){var t=ae(e).toHsl(),n=t.h;return[ae(e),ae({h:(n+72)%360,s:t.s,l:t.l}),ae({h:(n+216)%360,s:t.s,l:t.l})]}function Ew(e,t,n){t=t||6,n=n||30;var r=ae(e).toHsl(),o=360/n,a=[ae(e)];for(r.h=(r.h-(o*t>>1)+720)%360;--t;)r.h=(r.h+o)%360,a.push(ae(r));return a}function Ow(e,t){t=t||6;for(var n=ae(e).toHsv(),r=n.h,o=n.s,a=n.v,i=[],l=1/t;t--;)i.push(ae({h:r,s:o,v:a})),a=(a+l)%1;return i}ae.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,n,r=this.toRgb();return e=r.r/255,t=r.g/255,n=r.b/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))},setAlpha:function(e){return this._a=eh(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=Dp(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=Dp(this._r,this._g,this._b),t=Math.round(360*e.h),n=Math.round(100*e.s),r=Math.round(100*e.v);return this._a==1?"hsv("+t+", "+n+"%, "+r+"%)":"hsva("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=Ap(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=Ap(this._r,this._g,this._b),t=Math.round(360*e.h),n=Math.round(100*e.s),r=Math.round(100*e.l);return this._a==1?"hsl("+t+", "+n+"%, "+r+"%)":"hsla("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return Mp(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(t,n,r,o,a){var i=[Kn(Math.round(t).toString(16)),Kn(Math.round(n).toString(16)),Kn(Math.round(r).toString(16)),Kn(th(o))];return a&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Ve(this._r,255))+"%",g:Math.round(100*Ve(this._g,255))+"%",b:Math.round(100*Ve(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Ve(this._r,255))+"%, "+Math.round(100*Ve(this._g,255))+"%, "+Math.round(100*Ve(this._b,255))+"%)":"rgba("+Math.round(100*Ve(this._r,255))+"%, "+Math.round(100*Ve(this._g,255))+"%, "+Math.round(100*Ve(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(Pw[Mp(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+jp(this._r,this._g,this._b,this._a),n=t,r=this._gradientType?"GradientType = 1, ":"";if(e){var o=ae(e);n="#"+jp(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+t+",endColorstr="+n+")"},toString:function(e){var t=!!e;e=e||this._format;var n=!1,r=this._a<1&&this._a>=0;return t||!r||e!=="hex"&&e!=="hex6"&&e!=="hex3"&&e!=="hex4"&&e!=="hex8"&&e!=="name"?(e==="rgb"&&(n=this.toRgbString()),e==="prgb"&&(n=this.toPercentageRgbString()),e!=="hex"&&e!=="hex6"||(n=this.toHexString()),e==="hex3"&&(n=this.toHexString(!0)),e==="hex4"&&(n=this.toHex8String(!0)),e==="hex8"&&(n=this.toHex8String()),e==="name"&&(n=this.toName()),e==="hsl"&&(n=this.toHslString()),e==="hsv"&&(n=this.toHsvString()),n||this.toHexString()):e==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return ae(this.toString())},_applyModification:function(e,t){var n=e.apply(null,[this].concat([].slice.call(t)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(hw,arguments)},brighten:function(){return this._applyModification(yw,arguments)},darken:function(){return this._applyModification(bw,arguments)},desaturate:function(){return this._applyModification(mw,arguments)},saturate:function(){return this._applyModification(gw,arguments)},greyscale:function(){return this._applyModification(vw,arguments)},spin:function(){return this._applyModification(ww,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(Ew,arguments)},complement:function(){return this._applyCombination(xw,arguments)},monochromatic:function(){return this._applyCombination(Ow,arguments)},splitcomplement:function(){return this._applyCombination(Sw,arguments)},triad:function(){return this._applyCombination(Fp,[3])},tetrad:function(){return this._applyCombination(Fp,[4])}},ae.fromRatio=function(e,t){if(Bl(e)=="object"){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=r==="a"?e[r]:Na(e[r]));e=n}return ae(e,t)},ae.equals=function(e,t){return!(!e||!t)&&ae(e).toRgbString()==ae(t).toRgbString()},ae.random=function(){return ae.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},ae.mix=function(e,t,n){n=n===0?0:n||50;var r=ae(e).toRgb(),o=ae(t).toRgb(),a=n/100;return ae({r:(o.r-r.r)*a+r.r,g:(o.g-r.g)*a+r.g,b:(o.b-r.b)*a+r.b,a:(o.a-r.a)*a+r.a})},ae.readability=function(e,t){var n=ae(e),r=ae(t);return(Math.max(n.getLuminance(),r.getLuminance())+.05)/(Math.min(n.getLuminance(),r.getLuminance())+.05)},ae.isReadable=function(e,t,n){var r,o,a=ae.readability(e,t);switch(o=!1,(r=function(i){var l,s;return l=((i=i||{level:"AA",size:"small"}).level||"AA").toUpperCase(),s=(i.size||"small").toLowerCase(),l!=="AA"&&l!=="AAA"&&(l="AA"),s!=="small"&&s!=="large"&&(s="small"),{level:l,size:s}}(n)).level+r.size){case"AAsmall":case"AAAlarge":o=a>=4.5;break;case"AAlarge":o=a>=3;break;case"AAAsmall":o=a>=7}return o},ae.mostReadable=function(e,t,n){var r,o,a,i,l=null,s=0;o=(n=n||{}).includeFallbackColors,a=n.level,i=n.size;for(var u=0;u<t.length;u++)(r=ae.readability(e,t[u]))>s&&(s=r,l=ae(t[u]));return ae.isReadable(e,l,{level:a,size:i})||!o?l:(n.includeFallbackColors=!1,ae.mostReadable(e,["#fff","#000"],n))};var yc=ae.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Pw=ae.hexNames=function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}(yc);function eh(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Ve(e,t){(function(r){return typeof r=="string"&&r.indexOf(".")!=-1&&parseFloat(r)===1})(e)&&(e="100%");var n=function(r){return typeof r=="string"&&r.indexOf("%")!=-1}(e);return e=Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(e*t,10)/100),Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function cs(e){return Math.min(1,Math.max(0,e))}function mn(e){return parseInt(e,16)}function Kn(e){return e.length==1?"0"+e:""+e}function Na(e){return e<=1&&(e=100*e+"%"),e}function th(e){return Math.round(255*parseFloat(e)).toString(16)}function zp(e){return mn(e)/255}var Tr,Xi,Qi,Bn=(Xi="[\\s|\\(]+("+(Tr="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Tr+")[,|\\s]+("+Tr+")\\s*\\)?",Qi="[\\s|\\(]+("+Tr+")[,|\\s]+("+Tr+")[,|\\s]+("+Tr+")[,|\\s]+("+Tr+")\\s*\\)?",{CSS_UNIT:new RegExp(Tr),rgb:new RegExp("rgb"+Xi),rgba:new RegExp("rgba"+Qi),hsl:new RegExp("hsl"+Xi),hsla:new RegExp("hsla"+Qi),hsv:new RegExp("hsv"+Xi),hsva:new RegExp("hsva"+Qi),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function fr(e){return!!Bn.CSS_UNIT.exec(e)}var ds=function(e,t){var n=(typeof e=="string"?parseInt(e):e)||0;if(n>=-5&&n<=5){var r=n,o=parseFloat(t),a=o+r*(o/5)*-1;return(a==0||a<=Number.EPSILON)&&(a=.1),{animationPeriod:a+"s"}}return{animationPeriod:t}},fs=function(e,t){var n=e||{},r="";switch(t){case"small":r="12px";break;case"medium":r="16px";break;case"large":r="20px";break;default:r=void 0}var o={};if(n.fontSize){var a=n.fontSize;o=function(i,l){var s={};for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&l.indexOf(u)<0&&(s[u]=i[u]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function"){var p=0;for(u=Object.getOwnPropertySymbols(i);p<u.length;p++)l.indexOf(u[p])<0&&Object.prototype.propertyIsEnumerable.call(i,u[p])&&(s[u[p]]=i[u[p]])}return s}(n,["fontSize"]),r=a}return{fontSize:r,styles:o}},Cw={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},ps=function(e){var t=e.className,n=e.text,r=e.textColor,o=e.staticText,a=e.style;return n?xe.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(t||"").trim(),style:Le(Le(Le({},o&&Cw),r&&{color:r,mixBlendMode:"unset"}),a&&a)},typeof n=="string"&&n.length?n:"loading"):null},Pi="rgb(50, 205, 50)";function ms(e,t){t===void 0&&(t=0);var n=[];return function r(o,a){return a===void 0&&(a=0),n.push.apply(n,o),n.length<a&&r(n,a),n.slice(0,a)}(e,t)}Pt(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6de;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6ex, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6g6;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6h4;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6e7, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6ex {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes u1qz6e7 {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes u1qz6de {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes u1qz6fj {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes u1qz6g6 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes u1qz6h4 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);ae(Pi).toRgb();Array.from({length:4},function(e,t){return"--atom-phase".concat(t+1,"-rgb")});Pt(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite u1qz6k3;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: u1qz6j2 var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6j2 {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6k3 {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--commet-phase".concat(t+1,"-color")});Pt(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: u1qz6pz calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite u1qz6r6, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6sy;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6pz {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6r6 {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes u1qz6sy {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--OP-annulus-phase".concat(t+1,"-color")});function Ws(e){return e&&e.Math===Math&&e}Pt(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite u1qz6qy, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6s0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6qy {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes u1qz6s0 {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);Ws(typeof window=="object"&&window)||Ws(typeof self=="object"&&self)||Ws(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(e,t){return"--OP-dotted-phase".concat(t+1,"-color")});Pt(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite u1qz6sz, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6t3;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6sz {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes u1qz6t3 {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--OP-spokes-phase".concat(t+1,"-color")});Pt(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite u1qz6t5, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite u1qz6uw;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6t5 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6uw {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},function(e,t){return"--OP-annulus-dual-sectors-phase".concat(t+1,"-color")});Pt(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6tq, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6v8;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6tq {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6v8 {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return["--OP-annulus-track-phase".concat(t+1,"-color"),"--OP-annulus-sector-phase".concat(t+1,"-color")]});Pt(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6cv, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6e3;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: u1qz6cr var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6cv {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes u1qz6cr {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes u1qz6e3 {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--four-square-phase".concat(t+1,"-color")});Pt(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: u1qz6bl, u1qz6c9;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6bl {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes u1qz6c9 {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--mosaic-phase".concat(t+1,"-color")});Pt(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6mm, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6og;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6mm {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes u1qz6og {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--riple-phase".concat(t+1,"-color")});Pt(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6uj, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6vi;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6uj {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes u1qz6vi {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);var To=Array.from({length:4},function(e,t){return"--TD-pulsate-phase".concat(t+1,"-color")}),kw=function(e){var t,n=fs(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,a=e==null?void 0:e.easing,i=ds(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,l=function(s){var u={};if(s instanceof Array){for(var p=ms(s,To.length),d=0;d<p.length&&!(d>=4);d++)u[To[d]]=p[d];return u}try{if(typeof s!="string")throw new Error("Color String expected");for(var f=0;f<To.length;f++)u[To[f]]=s}catch(b){for(b instanceof Error?console.warn("[".concat(b.message,']: Received "').concat(typeof s,'" instead with value, ').concat(JSON.stringify(s))):console.warn("".concat(JSON.stringify(s),' received in <ThreeDot variant="pulsate" /> indicator cannot be processed. Using default instead!')),f=0;f<To.length;f++)u[To[f]]=Pi}return u}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"");return xe.createElement("span",{className:"rli-d-i-b pulsate-rli-bounding-box",style:Le(Le(Le(Le(Le({},o&&{fontSize:o}),i&&{"--rli-animation-duration":i}),a&&{"--rli-animation-function":a}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},xe.createElement("span",{className:"rli-d-i-b pulsate-indicator"},xe.createElement("span",{className:"rli-d-i-b pulsate-dot"}),xe.createElement("span",{className:"rli-d-i-b pulsate-dot"}),xe.createElement("span",{className:"rli-d-i-b pulsate-dot"})),xe.createElement(ps,{staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}))};Pt(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite u1qz6w1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite u1qz6x5;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6w1 {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes u1qz6x5 {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);var Io=Array.from({length:4},function(e,t){return"--TD-brick-stack-phase".concat(t+1,"-color")}),Tw=function(e){var t,n=fs(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,a=e==null?void 0:e.easing,i=ds(e==null?void 0:e.speedPlus,"1s").animationPeriod,l=function(s){var u={};if(s instanceof Array){for(var p=ms(s,Io.length),d=0;d<p.length&&!(d>=4);d++)u[Io[d]]=p[d];return u}try{if(typeof s!="string")throw new Error("Color String expected");for(var f=0;f<Io.length;f++)u[Io[f]]=s}catch(b){for(b instanceof Error?console.warn("[".concat(b.message,']: Received "').concat(typeof s,'" instead with value, ').concat(JSON.stringify(s))):console.warn("".concat(JSON.stringify(s),' received in <ThreeDot variant="brick-stack" /> indicator cannot be processed. Using default instead!')),f=0;f<Io.length;f++)u[Io[f]]=Pi}return u}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"");return xe.createElement("span",{className:"rli-d-i-b brick-stack-rli-bounding-box",style:Le(Le(Le(Le(Le({},o&&{fontSize:o}),i&&{"--rli-animation-duration":i}),a&&{"--rli-animation-function":a}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},xe.createElement("span",{className:"rli-d-i-b brick-stack-indicator"},xe.createElement("span",{className:"rli-d-i-b brick-stack"})),xe.createElement(ps,{staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}))};Pt(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite u1qz6wd, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite u1qz6xx;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6wd {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes u1qz6xx {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);var _o=Array.from({length:4},function(e,t){return"--TD-bob-phase".concat(t+1,"-color")}),Iw=function(e){var t,n=fs(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,a=e==null?void 0:e.easing,i=ds(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,l=function(s){var u={};if(s instanceof Array){for(var p=ms(s,_o.length),d=0;d<p.length&&!(d>=4);d++)u[_o[d]]=p[d];return u}try{if(typeof s!="string")throw new Error("Color String expected");for(var f=0;f<_o.length;f++)u[_o[f]]=s}catch(b){for(b instanceof Error?console.warn("[".concat(b.message,']: Received "').concat(typeof s,'" instead with value, ').concat(JSON.stringify(s))):console.warn("".concat(JSON.stringify(s),' received in <ThreeDot variant="bob" /> indicator cannot be processed. Using default instead!')),f=0;f<_o.length;f++)u[_o[f]]=Pi}return u}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"");return xe.createElement("span",{className:"rli-d-i-b bob-rli-bounding-box",style:Le(Le(Le(Le(Le({},o&&{fontSize:o}),i&&{"--rli-animation-duration":i}),a&&{"--rli-animation-function":a}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},xe.createElement("span",{className:"bob-indicator"},xe.createElement("span",{className:"bobbing"})),xe.createElement(ps,{staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}))};Pt(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6yl, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite u1qz6zs;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6z4;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes u1qz6yl {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes u1qz6z4 {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes u1qz6zs {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);var No=Array.from({length:4},function(e,t){return"--TD-bounce-phase".concat(t+1,"-color")}),_w=function(e){var t,n=fs(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,a=e==null?void 0:e.easing,i=ds(e==null?void 0:e.speedPlus,"0.5s").animationPeriod,l=function(s){var u={};if(s instanceof Array){for(var p=ms(s,No.length),d=0;d<p.length&&!(d>=4);d++)u[No[d]]=p[d];return u}try{if(typeof s!="string")throw new Error("Color String expected");for(var f=0;f<No.length;f++)u[No[f]]=s}catch{for(f=0;f<No.length;f++)u[No[f]]=Pi}return u}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"");return xe.createElement("span",{className:"rli-d-i-b bounce-rli-bounding-box",style:Le(Le(Le(Le(Le({},o&&{fontSize:o}),i&&{"--rli-animation-duration":i}),a&&{"--rli-animation-function":a}),l),r)},xe.createElement("span",{className:"wrapper"},xe.createElement("span",{className:"group"},xe.createElement("span",{className:"rli-d-i-b dot"}),xe.createElement("span",{className:"rli-d-i-b dot"}),xe.createElement("span",{className:"rli-d-i-b dot"})),xe.createElement("span",{className:"group"},xe.createElement("span",{className:"rli-d-i-b shadow"}),xe.createElement("span",{className:"rli-d-i-b shadow"}),xe.createElement("span",{className:"rli-d-i-b shadow"}))),xe.createElement(ps,{staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor,style:{marginTop:"2px"}}))},Nw=function(e){var t=Object(e).variant,n=t===void 0?"pulsate":t;return n==="pulsate"?xe.createElement(kw,Le({},e)):n==="brick-stack"?xe.createElement(Tw,Le({},e)):n==="bob"?xe.createElement(Iw,Le({},e)):n==="bounce"?xe.createElement(_w,Le({},e)):null};Pt(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: u1qz6i2, u1qz6js;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6i2 {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes u1qz6js {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--shape-phase".concat(t+1,"-color")});Pt(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: u1qz6nk var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, u1qz6op calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, u1qz6pg calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes u1qz6nk {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes u1qz6op {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes u1qz6pg {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--trophySpin-phase".concat(t+1,"-color")});Pt(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite u1qz6km, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite u1qz6lk;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes u1qz6km {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes u1qz6lk {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--slab-phase".concat(t+1,"-color")});Pt(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite u1qz6lr, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite u1qz6m8;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes u1qz6lr {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes u1qz6m8 {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--life-line-phase".concat(t+1,"-color")});function Rw(){const[e,t]=c.useState({}),{data:n,error:r,loading:o,generateContent:a}=Ry();c.useEffect(()=>{const u=new URLSearchParams(window.location.search),p={};u.forEach((d,f)=>{p[f]=d}),console.log(p),t(p)},[]),c.useEffect(()=>{e&&Object.keys(e).length&&a(e)},[e]),c.useEffect(()=>{console.log(n)},[n]);function i(u){const p=new URL(`https://listado.mercadolibre.com.co/${u.replace(" ","-")}_PriceRange_${n.PrecioMinimo}-${n.PrecioMaximo}`);window.open(p,"_blank")}const l=(u,p)=>Ee.jsx("div",{className:"col-12 hover:bg-blue-200 cursor-pointer",onClick:()=>i(u.nombreLargo),children:Ee.jsx("div",{className:ue("flex flex-column xl:flex-row xl:align-items-start p-4 gap-4",{"border-top-1 surface-border":p!==0}),children:Ee.jsx("div",{className:"flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4",children:Ee.jsxs("div",{className:"flex flex-column align-items-center sm:align-items-start gap-3",children:[Ee.jsx("div",{className:"text-2xl font-bold text-900",children:u.nombreLargo}),Ee.jsx("div",{className:"text-sm text-700",children:u.descripcion}),Ee.jsxs("div",{className:"",children:[Ee.jsx("h4",{className:"text-xl font-bold p-0 m-0",children:"Propiedades:"}),Ee.jsx("ul",{className:"list-none m-0 p-0",children:Object.entries(u.propiedades).map(([d,f])=>Ee.jsxs("li",{className:"flex align-items-center gap-2",children:[Ee.jsxs("span",{className:"font-semibold capitalize",children:[d,":"]}),Ee.jsx("span",{children:f})]},d))})]})]})})})},u.nombreLargo),s=u=>{if(!u||u.length===0)return null;const p=u.map((d,f)=>l(d,f));return Ee.jsx("div",{className:"grid grid-nogutter",children:p})};return Object.keys(e).length?o?Ee.jsx("div",{className:"flex justify-content-center align-items-center h-screen w-screen",children:Ee.jsx(Nw,{variant:"bounce",color:"#0078d7",size:"large",text:"Pensando",textColor:""})}):n?Ee.jsx("div",{className:"mb-7 ml-8 mt-3 mr-3",children:Ee.jsx(Jv,{value:n.Articulos,listTemplate:s})}):Ee.jsx("div",{className:"App",children:r&&Ee.jsxs("p",{style:{color:"red"},children:["Error: ",r]})}):Ee.jsx(ey,{})}ev(document.getElementById("root")).render(Ee.jsx(c.StrictMode,{children:Ee.jsx(J1,{children:Ee.jsx(Rw,{})})}));
