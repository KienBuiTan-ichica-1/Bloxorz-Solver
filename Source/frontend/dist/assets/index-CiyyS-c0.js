(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var Du={exports:{}},Xo={},Nu={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function Y0(){if(qp)return _t;qp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function v(U){return U===null||typeof U!="object"?null:(U=y&&U[y]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function x(U,ie,Ue){this.props=U,this.context=ie,this.refs=M,this.updater=Ue||S}x.prototype.isReactComponent={},x.prototype.setState=function(U,ie){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ie,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=x.prototype;function b(U,ie,Ue){this.props=U,this.context=ie,this.refs=M,this.updater=Ue||S}var P=b.prototype=new _;P.constructor=b,E(P,x.prototype),P.isPureReactComponent=!0;var A=Array.isArray,H=Object.prototype.hasOwnProperty,F={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function B(U,ie,Ue){var Q,fe={},Te=null,Se=null;if(ie!=null)for(Q in ie.ref!==void 0&&(Se=ie.ref),ie.key!==void 0&&(Te=""+ie.key),ie)H.call(ie,Q)&&!I.hasOwnProperty(Q)&&(fe[Q]=ie[Q]);var be=arguments.length-2;if(be===1)fe.children=Ue;else if(1<be){for(var Oe=Array(be),Ke=0;Ke<be;Ke++)Oe[Ke]=arguments[Ke+2];fe.children=Oe}if(U&&U.defaultProps)for(Q in be=U.defaultProps,be)fe[Q]===void 0&&(fe[Q]=be[Q]);return{$$typeof:s,type:U,key:Te,ref:Se,props:fe,_owner:F.current}}function L(U,ie){return{$$typeof:s,type:U.type,key:ie,ref:U.ref,props:U.props,_owner:U._owner}}function C(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function k(U){var ie={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ue){return ie[Ue]})}var oe=/\/+/g;function J(U,ie){return typeof U=="object"&&U!==null&&U.key!=null?k(""+U.key):ie.toString(36)}function pe(U,ie,Ue,Q,fe){var Te=typeof U;(Te==="undefined"||Te==="boolean")&&(U=null);var Se=!1;if(U===null)Se=!0;else switch(Te){case"string":case"number":Se=!0;break;case"object":switch(U.$$typeof){case s:case e:Se=!0}}if(Se)return Se=U,fe=fe(Se),U=Q===""?"."+J(Se,0):Q,A(fe)?(Ue="",U!=null&&(Ue=U.replace(oe,"$&/")+"/"),pe(fe,ie,Ue,"",function(Ke){return Ke})):fe!=null&&(C(fe)&&(fe=L(fe,Ue+(!fe.key||Se&&Se.key===fe.key?"":(""+fe.key).replace(oe,"$&/")+"/")+U)),ie.push(fe)),1;if(Se=0,Q=Q===""?".":Q+":",A(U))for(var be=0;be<U.length;be++){Te=U[be];var Oe=Q+J(Te,be);Se+=pe(Te,ie,Ue,Oe,fe)}else if(Oe=v(U),typeof Oe=="function")for(U=Oe.call(U),be=0;!(Te=U.next()).done;)Te=Te.value,Oe=Q+J(Te,be++),Se+=pe(Te,ie,Ue,Oe,fe);else if(Te==="object")throw ie=String(U),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return Se}function me(U,ie,Ue){if(U==null)return U;var Q=[],fe=0;return pe(U,Q,"","",function(Te){return ie.call(Ue,Te,fe++)}),Q}function ue(U){if(U._status===-1){var ie=U._result;ie=ie(),ie.then(function(Ue){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ue)},function(Ue){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ue)}),U._status===-1&&(U._status=0,U._result=ie)}if(U._status===1)return U._result.default;throw U._result}var ce={current:null},z={transition:null},he={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:z,ReactCurrentOwner:F};function le(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:me,forEach:function(U,ie,Ue){me(U,function(){ie.apply(this,arguments)},Ue)},count:function(U){var ie=0;return me(U,function(){ie++}),ie},toArray:function(U){return me(U,function(ie){return ie})||[]},only:function(U){if(!C(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},_t.Component=x,_t.Fragment=t,_t.Profiler=a,_t.PureComponent=b,_t.StrictMode=r,_t.Suspense=d,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,_t.act=le,_t.cloneElement=function(U,ie,Ue){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Q=E({},U.props),fe=U.key,Te=U.ref,Se=U._owner;if(ie!=null){if(ie.ref!==void 0&&(Te=ie.ref,Se=F.current),ie.key!==void 0&&(fe=""+ie.key),U.type&&U.type.defaultProps)var be=U.type.defaultProps;for(Oe in ie)H.call(ie,Oe)&&!I.hasOwnProperty(Oe)&&(Q[Oe]=ie[Oe]===void 0&&be!==void 0?be[Oe]:ie[Oe])}var Oe=arguments.length-2;if(Oe===1)Q.children=Ue;else if(1<Oe){be=Array(Oe);for(var Ke=0;Ke<Oe;Ke++)be[Ke]=arguments[Ke+2];Q.children=be}return{$$typeof:s,type:U.type,key:fe,ref:Te,props:Q,_owner:Se}},_t.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},_t.createElement=B,_t.createFactory=function(U){var ie=B.bind(null,U);return ie.type=U,ie},_t.createRef=function(){return{current:null}},_t.forwardRef=function(U){return{$$typeof:h,render:U}},_t.isValidElement=C,_t.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:ue}},_t.memo=function(U,ie){return{$$typeof:p,type:U,compare:ie===void 0?null:ie}},_t.startTransition=function(U){var ie=z.transition;z.transition={};try{U()}finally{z.transition=ie}},_t.unstable_act=le,_t.useCallback=function(U,ie){return ce.current.useCallback(U,ie)},_t.useContext=function(U){return ce.current.useContext(U)},_t.useDebugValue=function(){},_t.useDeferredValue=function(U){return ce.current.useDeferredValue(U)},_t.useEffect=function(U,ie){return ce.current.useEffect(U,ie)},_t.useId=function(){return ce.current.useId()},_t.useImperativeHandle=function(U,ie,Ue){return ce.current.useImperativeHandle(U,ie,Ue)},_t.useInsertionEffect=function(U,ie){return ce.current.useInsertionEffect(U,ie)},_t.useLayoutEffect=function(U,ie){return ce.current.useLayoutEffect(U,ie)},_t.useMemo=function(U,ie){return ce.current.useMemo(U,ie)},_t.useReducer=function(U,ie,Ue){return ce.current.useReducer(U,ie,Ue)},_t.useRef=function(U){return ce.current.useRef(U)},_t.useState=function(U){return ce.current.useState(U)},_t.useSyncExternalStore=function(U,ie,Ue){return ce.current.useSyncExternalStore(U,ie,Ue)},_t.useTransition=function(){return ce.current.useTransition()},_t.version="18.3.1",_t}var Kp;function cf(){return Kp||(Kp=1,Nu.exports=Y0()),Nu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function q0(){if(Zp)return Xo;Zp=1;var s=cf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(h,d,p){var g,y={},v=null,S=null;p!==void 0&&(v=""+p),d.key!==void 0&&(v=""+d.key),d.ref!==void 0&&(S=d.ref);for(g in d)r.call(d,g)&&!l.hasOwnProperty(g)&&(y[g]=d[g]);if(h&&h.defaultProps)for(g in d=h.defaultProps,d)y[g]===void 0&&(y[g]=d[g]);return{$$typeof:e,type:h,key:v,ref:S,props:y,_owner:a.current}}return Xo.Fragment=t,Xo.jsx=u,Xo.jsxs=u,Xo}var Qp;function K0(){return Qp||(Qp=1,Du.exports=q0()),Du.exports}var se=K0(),fl={},Iu={exports:{}},In={},Uu={exports:{}},Fu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function Z0(){return Jp||(Jp=1,(function(s){function e(z,he){var le=z.length;z.push(he);e:for(;0<le;){var U=le-1>>>1,ie=z[U];if(0<a(ie,he))z[U]=he,z[le]=ie,le=U;else break e}}function t(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var he=z[0],le=z.pop();if(le!==he){z[0]=le;e:for(var U=0,ie=z.length,Ue=ie>>>1;U<Ue;){var Q=2*(U+1)-1,fe=z[Q],Te=Q+1,Se=z[Te];if(0>a(fe,le))Te<ie&&0>a(Se,fe)?(z[U]=Se,z[Te]=le,U=Te):(z[U]=fe,z[Q]=le,U=Q);else if(Te<ie&&0>a(Se,le))z[U]=Se,z[Te]=le,U=Te;else break e}}return he}function a(z,he){var le=z.sortIndex-he.sortIndex;return le!==0?le:z.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,h=u.now();s.unstable_now=function(){return u.now()-h}}var d=[],p=[],g=1,y=null,v=3,S=!1,E=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(z){for(var he=t(p);he!==null;){if(he.callback===null)r(p);else if(he.startTime<=z)r(p),he.sortIndex=he.expirationTime,e(d,he);else break;he=t(p)}}function A(z){if(M=!1,P(z),!E)if(t(d)!==null)E=!0,ue(H);else{var he=t(p);he!==null&&ce(A,he.startTime-z)}}function H(z,he){E=!1,M&&(M=!1,_(B),B=-1),S=!0;var le=v;try{for(P(he),y=t(d);y!==null&&(!(y.expirationTime>he)||z&&!k());){var U=y.callback;if(typeof U=="function"){y.callback=null,v=y.priorityLevel;var ie=U(y.expirationTime<=he);he=s.unstable_now(),typeof ie=="function"?y.callback=ie:y===t(d)&&r(d),P(he)}else r(d);y=t(d)}if(y!==null)var Ue=!0;else{var Q=t(p);Q!==null&&ce(A,Q.startTime-he),Ue=!1}return Ue}finally{y=null,v=le,S=!1}}var F=!1,I=null,B=-1,L=5,C=-1;function k(){return!(s.unstable_now()-C<L)}function oe(){if(I!==null){var z=s.unstable_now();C=z;var he=!0;try{he=I(!0,z)}finally{he?J():(F=!1,I=null)}}else F=!1}var J;if(typeof b=="function")J=function(){b(oe)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,me=pe.port2;pe.port1.onmessage=oe,J=function(){me.postMessage(null)}}else J=function(){x(oe,0)};function ue(z){I=z,F||(F=!0,J())}function ce(z,he){B=x(function(){z(s.unstable_now())},he)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,ue(H))},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return t(d)},s.unstable_next=function(z){switch(v){case 1:case 2:case 3:var he=3;break;default:he=v}var le=v;v=he;try{return z()}finally{v=le}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(z,he){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var le=v;v=z;try{return he()}finally{v=le}},s.unstable_scheduleCallback=function(z,he,le){var U=s.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?U+le:U):le=U,z){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=le+ie,z={id:g++,callback:he,priorityLevel:z,startTime:le,expirationTime:ie,sortIndex:-1},le>U?(z.sortIndex=le,e(p,z),t(d)===null&&z===t(p)&&(M?(_(B),B=-1):M=!0,ce(A,le-U))):(z.sortIndex=ie,e(d,z),E||S||(E=!0,ue(H))),z},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(z){var he=v;return function(){var le=v;v=he;try{return z.apply(this,arguments)}finally{v=le}}}})(Fu)),Fu}var em;function Q0(){return em||(em=1,Uu.exports=Z0()),Uu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function J0(){if(tm)return In;tm=1;var s=cf(),e=Q0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},y={};function v(n){return d.call(y,n)?!0:d.call(g,n)?!1:p.test(n)?y[n]=!0:(g[n]=!0,!1)}function S(n,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,o,c){if(i===null||typeof i>"u"||S(n,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function M(n,i,o,c,f,m,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=w}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new M(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new M(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new M(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new M(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new M(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new M(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new M(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new M(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new M(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function b(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,b);x[i]=new M(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,b);x[i]=new M(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,b);x[i]=new M(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new M(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new M(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,o,c){var f=x.hasOwnProperty(i)?x[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,f,c)&&(o=null),c||f===null?v(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):f.mustUseProperty?n[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,c=f.attributeNamespace,o===null?n.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,c?n.setAttributeNS(c,i,o):n.setAttribute(i,o))))}var A=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),F=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),k=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),pe=Symbol.for("react.suspense_list"),me=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),z=Symbol.iterator;function he(n){return n===null||typeof n!="object"?null:(n=z&&n[z]||n["@@iterator"],typeof n=="function"?n:null)}var le=Object.assign,U;function ie(n){if(U===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var Ue=!1;function Q(n,i){if(!n||Ue)return"";Ue=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ee){var c=ee}Reflect.construct(n,[],i)}else{try{i.call()}catch(ee){c=ee}n.call(i.prototype)}else{try{throw Error()}catch(ee){c=ee}n()}}catch(ee){if(ee&&c&&typeof ee.stack=="string"){for(var f=ee.stack.split(`
`),m=c.stack.split(`
`),w=f.length-1,N=m.length-1;1<=w&&0<=N&&f[w]!==m[N];)N--;for(;1<=w&&0<=N;w--,N--)if(f[w]!==m[N]){if(w!==1||N!==1)do if(w--,N--,0>N||f[w]!==m[N]){var O=`
`+f[w].replace(" at new "," at ");return n.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",n.displayName)),O}while(1<=w&&0<=N);break}}}finally{Ue=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?ie(n):""}function fe(n){switch(n.tag){case 5:return ie(n.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return n=Q(n.type,!1),n;case 11:return n=Q(n.type.render,!1),n;case 1:return n=Q(n.type,!0),n;default:return""}}function Te(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case I:return"Fragment";case F:return"Portal";case L:return"Profiler";case B:return"StrictMode";case J:return"Suspense";case pe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case oe:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case me:return i=n.displayName||null,i!==null?i:Te(n.type)||"Memo";case ue:i=n._payload,n=n._init;try{return Te(n(i))}catch{}}return null}function Se(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Te(i);case 8:return i===B?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function be(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Oe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ke(n){var i=Oe(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(w){c=""+w,m.call(this,w)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function wt(n){n._valueTracker||(n._valueTracker=Ke(n))}function gt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=Oe(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function xt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function X(n,i){var o=i.checked;return le({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Wt(n,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=be(i.value!=null?i.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ut(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function ot(n,i){ut(n,i);var o=be(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Tt(n,i.type,o):i.hasOwnProperty("defaultValue")&&Tt(n,i.type,be(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Je(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Tt(n,i,o){(i!=="number"||xt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var je=Array.isArray;function D(n,i,o,c){if(n=n.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=i.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&c&&(n[o].defaultSelected=!0)}else{for(o=""+be(o),i=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function T(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Z(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(je(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:be(o)}}function _e(n,i){var o=be(i.value),c=be(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function xe(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function de(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ve(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?de(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Pe,Ne=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,o,c,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Pe=Pe||document.createElement("div"),Pe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Pe.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function lt(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ze=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){ze.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ee[i]=Ee[n]})});function Y(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+i).trim():i+"px"}function re(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,f=Y(o,i[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,f):n[o]=f}}var ve=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qe(n,i){if(i){if(ve[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Be(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var et=null;function G(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Le=null,ae=null,ge=null;function Fe(n){if(n=Po(n)){if(typeof Le!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ca(i),Le(n.stateNode,n.type,i))}}function Ie(n){ae?ge?ge.push(n):ge=[n]:ae=n}function ct(){if(ae){var n=ae,i=ge;if(ge=ae=null,Fe(n),i)for(n=0;n<i.length;n++)Fe(i[n])}}function Ft(n,i){return n(i)}function qt(){}var Mt=!1;function Cn(n,i,o){if(Mt)return n(i,o);Mt=!0;try{return Ft(n,i,o)}finally{Mt=!1,(ae!==null||ge!==null)&&(qt(),ct())}}function xn(n,i){var o=n.stateNode;if(o===null)return null;var c=Ca(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var cs=!1;if(h)try{var Ji={};Object.defineProperty(Ji,"passive",{get:function(){cs=!0}}),window.addEventListener("test",Ji,Ji),window.removeEventListener("test",Ji,Ji)}catch{cs=!1}function Pi(n,i,o,c,f,m,w,N,O){var ee=Array.prototype.slice.call(arguments,3);try{i.apply(o,ee)}catch(Me){this.onError(Me)}}var Li=!1,Ir=null,Ur=!1,er=null,aa={onError:function(n){Li=!0,Ir=n}};function us(n,i,o,c,f,m,w,N,O){Li=!1,Ir=null,Pi.apply(aa,arguments)}function la(n,i,o,c,f,m,w,N,O){if(us.apply(this,arguments),Li){if(Li){var ee=Ir;Li=!1,Ir=null}else throw Error(t(198));Ur||(Ur=!0,er=ee)}}function xi(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function ca(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ua(n){if(xi(n)!==n)throw Error(t(188))}function ec(n){var i=n.alternate;if(!i){if(i=xi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,c=i;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(c=f.return,c!==null){o=c;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return ua(f),n;if(m===c)return ua(f),i;m=m.sibling}throw Error(t(188))}if(o.return!==c.return)o=f,c=m;else{for(var w=!1,N=f.child;N;){if(N===o){w=!0,o=f,c=m;break}if(N===c){w=!0,c=f,o=m;break}N=N.sibling}if(!w){for(N=m.child;N;){if(N===o){w=!0,o=m,c=f;break}if(N===c){w=!0,c=m,o=f;break}N=N.sibling}if(!w)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function R(n){return n=ec(n),n!==null?j(n):null}function j(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=j(n);if(i!==null)return i;n=n.sibling}return null}var te=e.unstable_scheduleCallback,ne=e.unstable_cancelCallback,$=e.unstable_shouldYield,Re=e.unstable_requestPaint,Ae=e.unstable_now,$e=e.unstable_getCurrentPriorityLevel,We=e.unstable_ImmediatePriority,rt=e.unstable_UserBlockingPriority,at=e.unstable_NormalPriority,Ye=e.unstable_LowPriority,yt=e.unstable_IdlePriority,bt=null,vt=null;function un(n){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(bt,n,void 0,(n.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:At,Ze=Math.log,ri=Math.LN2;function At(n){return n>>>=0,n===0?32:31-(Ze(n)/ri|0)|0}var hn=64,si=4194304;function Kt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function yi(n,i){var o=n.pendingLanes;if(o===0)return 0;var c=0,f=n.suspendedLanes,m=n.pingedLanes,w=o&268435455;if(w!==0){var N=w&~f;N!==0?c=Kt(N):(m&=w,m!==0&&(c=Kt(m)))}else w=o&~f,w!==0?c=Kt(w):m!==0&&(c=Kt(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,m=i&-i,f>=m||f===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)o=31-ht(i),f=1<<o,c|=n[o],i&=~f;return c}function It(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xn(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes;0<m;){var w=31-ht(m),N=1<<w,O=f[w];O===-1?((N&o)===0||(N&c)!==0)&&(f[w]=It(N,i)):O<=i&&(n.expiredLanes|=N),m&=~N}}function Di(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function yn(){var n=hn;return hn<<=1,(hn&4194240)===0&&(hn=64),n}function jn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function Rn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ht(i),n[i]=o}function ha(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var f=31-ht(o),m=1<<f;i[f]=0,c[f]=-1,n[f]=-1,o&=~m}}function tc(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-ht(o),f=1<<c;f&i|n[c]&i&&(n[c]|=i),o&=~f}}var Pt=0;function Cf(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Rf,nc,bf,Pf,Lf,ic=!1,fa=[],tr=null,nr=null,ir=null,po=new Map,mo=new Map,rr=[],g_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Df(n,i){switch(n){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":po.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(i.pointerId)}}function go(n,i,o,c,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:m,targetContainers:[f]},i!==null&&(i=Po(i),i!==null&&nc(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function __(n,i,o,c,f){switch(i){case"focusin":return tr=go(tr,n,i,o,c,f),!0;case"dragenter":return nr=go(nr,n,i,o,c,f),!0;case"mouseover":return ir=go(ir,n,i,o,c,f),!0;case"pointerover":var m=f.pointerId;return po.set(m,go(po.get(m)||null,n,i,o,c,f)),!0;case"gotpointercapture":return m=f.pointerId,mo.set(m,go(mo.get(m)||null,n,i,o,c,f)),!0}return!1}function Nf(n){var i=Fr(n.target);if(i!==null){var o=xi(i);if(o!==null){if(i=o.tag,i===13){if(i=ca(o),i!==null){n.blockedOn=i,Lf(n.priority,function(){bf(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function da(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=sc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);et=c,o.target.dispatchEvent(c),et=null}else return i=Po(o),i!==null&&nc(i),n.blockedOn=o,!1;i.shift()}return!0}function If(n,i,o){da(n)&&o.delete(i)}function v_(){ic=!1,tr!==null&&da(tr)&&(tr=null),nr!==null&&da(nr)&&(nr=null),ir!==null&&da(ir)&&(ir=null),po.forEach(If),mo.forEach(If)}function _o(n,i){n.blockedOn===i&&(n.blockedOn=null,ic||(ic=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,v_)))}function vo(n){function i(f){return _o(f,n)}if(0<fa.length){_o(fa[0],n);for(var o=1;o<fa.length;o++){var c=fa[o];c.blockedOn===n&&(c.blockedOn=null)}}for(tr!==null&&_o(tr,n),nr!==null&&_o(nr,n),ir!==null&&_o(ir,n),po.forEach(i),mo.forEach(i),o=0;o<rr.length;o++)c=rr[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<rr.length&&(o=rr[0],o.blockedOn===null);)Nf(o),o.blockedOn===null&&rr.shift()}var hs=A.ReactCurrentBatchConfig,pa=!0;function x_(n,i,o,c){var f=Pt,m=hs.transition;hs.transition=null;try{Pt=1,rc(n,i,o,c)}finally{Pt=f,hs.transition=m}}function y_(n,i,o,c){var f=Pt,m=hs.transition;hs.transition=null;try{Pt=4,rc(n,i,o,c)}finally{Pt=f,hs.transition=m}}function rc(n,i,o,c){if(pa){var f=sc(n,i,o,c);if(f===null)Mc(n,i,c,ma,o),Df(n,c);else if(__(f,n,i,o,c))c.stopPropagation();else if(Df(n,c),i&4&&-1<g_.indexOf(n)){for(;f!==null;){var m=Po(f);if(m!==null&&Rf(m),m=sc(n,i,o,c),m===null&&Mc(n,i,c,ma,o),m===f)break;f=m}f!==null&&c.stopPropagation()}else Mc(n,i,c,null,o)}}var ma=null;function sc(n,i,o,c){if(ma=null,n=G(c),n=Fr(n),n!==null)if(i=xi(n),i===null)n=null;else if(o=i.tag,o===13){if(n=ca(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ma=n,null}function Uf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($e()){case We:return 1;case rt:return 4;case at:case Ye:return 16;case yt:return 536870912;default:return 16}default:return 16}}var sr=null,oc=null,ga=null;function Ff(){if(ga)return ga;var n,i=oc,o=i.length,c,f="value"in sr?sr.value:sr.textContent,m=f.length;for(n=0;n<o&&i[n]===f[n];n++);var w=o-n;for(c=1;c<=w&&i[o-c]===f[m-c];c++);return ga=f.slice(n,1<c?1-c:void 0)}function _a(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function va(){return!0}function Of(){return!1}function On(n){function i(o,c,f,m,w){this._reactName=o,this._targetInst=f,this.type=c,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var N in n)n.hasOwnProperty(N)&&(o=n[N],this[N]=o?o(m):m[N]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?va:Of,this.isPropagationStopped=Of,this}return le(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=va)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=va)},persist:function(){},isPersistent:va}),i}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ac=On(fs),xo=le({},fs,{view:0,detail:0}),S_=On(xo),lc,cc,yo,xa=le({},xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==yo&&(yo&&n.type==="mousemove"?(lc=n.screenX-yo.screenX,cc=n.screenY-yo.screenY):cc=lc=0,yo=n),lc)},movementY:function(n){return"movementY"in n?n.movementY:cc}}),kf=On(xa),M_=le({},xa,{dataTransfer:0}),E_=On(M_),w_=le({},xo,{relatedTarget:0}),uc=On(w_),T_=le({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),A_=On(T_),C_=le({},fs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),R_=On(C_),b_=le({},fs,{data:0}),Bf=On(b_),P_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},D_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function N_(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=D_[n])?!!i[n]:!1}function hc(){return N_}var I_=le({},xo,{key:function(n){if(n.key){var i=P_[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=_a(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?L_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hc,charCode:function(n){return n.type==="keypress"?_a(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?_a(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),U_=On(I_),F_=le({},xa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zf=On(F_),O_=le({},xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hc}),k_=On(O_),B_=le({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),z_=On(B_),V_=le({},xa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),H_=On(V_),G_=[9,13,27,32],fc=h&&"CompositionEvent"in window,So=null;h&&"documentMode"in document&&(So=document.documentMode);var W_=h&&"TextEvent"in window&&!So,Vf=h&&(!fc||So&&8<So&&11>=So),Hf=" ",Gf=!1;function Wf(n,i){switch(n){case"keyup":return G_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ds=!1;function X_(n,i){switch(n){case"compositionend":return Xf(i);case"keypress":return i.which!==32?null:(Gf=!0,Hf);case"textInput":return n=i.data,n===Hf&&Gf?null:n;default:return null}}function j_(n,i){if(ds)return n==="compositionend"||!fc&&Wf(n,i)?(n=Ff(),ga=oc=sr=null,ds=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Vf&&i.locale!=="ko"?null:i.data;default:return null}}var $_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!$_[n.type]:i==="textarea"}function $f(n,i,o,c){Ie(c),i=wa(i,"onChange"),0<i.length&&(o=new ac("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var Mo=null,Eo=null;function Y_(n){hd(n,0)}function ya(n){var i=vs(n);if(gt(i))return n}function q_(n,i){if(n==="change")return i}var Yf=!1;if(h){var dc;if(h){var pc="oninput"in document;if(!pc){var qf=document.createElement("div");qf.setAttribute("oninput","return;"),pc=typeof qf.oninput=="function"}dc=pc}else dc=!1;Yf=dc&&(!document.documentMode||9<document.documentMode)}function Kf(){Mo&&(Mo.detachEvent("onpropertychange",Zf),Eo=Mo=null)}function Zf(n){if(n.propertyName==="value"&&ya(Eo)){var i=[];$f(i,Eo,n,G(n)),Cn(Y_,i)}}function K_(n,i,o){n==="focusin"?(Kf(),Mo=i,Eo=o,Mo.attachEvent("onpropertychange",Zf)):n==="focusout"&&Kf()}function Z_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ya(Eo)}function Q_(n,i){if(n==="click")return ya(i)}function J_(n,i){if(n==="input"||n==="change")return ya(i)}function e0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var oi=typeof Object.is=="function"?Object.is:e0;function wo(n,i){if(oi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var f=o[c];if(!d.call(i,f)||!oi(n[f],i[f]))return!1}return!0}function Qf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Jf(n,i){var o=Qf(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Qf(o)}}function ed(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?ed(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function td(){for(var n=window,i=xt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=xt(n.document)}return i}function mc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function t0(n){var i=td(),o=n.focusedElem,c=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&ed(o.ownerDocument.documentElement,o)){if(c!==null&&mc(o)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=o.textContent.length,m=Math.min(c.start,f);c=c.end===void 0?m:Math.min(c.end,f),!n.extend&&m>c&&(f=c,c=m,m=f),f=Jf(o,m);var w=Jf(o,c);f&&w&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var n0=h&&"documentMode"in document&&11>=document.documentMode,ps=null,gc=null,To=null,_c=!1;function nd(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;_c||ps==null||ps!==xt(c)||(c=ps,"selectionStart"in c&&mc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),To&&wo(To,c)||(To=c,c=wa(gc,"onSelect"),0<c.length&&(i=new ac("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=ps)))}function Sa(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var ms={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},vc={},id={};h&&(id=document.createElement("div").style,"AnimationEvent"in window||(delete ms.animationend.animation,delete ms.animationiteration.animation,delete ms.animationstart.animation),"TransitionEvent"in window||delete ms.transitionend.transition);function Ma(n){if(vc[n])return vc[n];if(!ms[n])return n;var i=ms[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in id)return vc[n]=i[o];return n}var rd=Ma("animationend"),sd=Ma("animationiteration"),od=Ma("animationstart"),ad=Ma("transitionend"),ld=new Map,cd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(n,i){ld.set(n,i),l(i,[n])}for(var xc=0;xc<cd.length;xc++){var yc=cd[xc],i0=yc.toLowerCase(),r0=yc[0].toUpperCase()+yc.slice(1);or(i0,"on"+r0)}or(rd,"onAnimationEnd"),or(sd,"onAnimationIteration"),or(od,"onAnimationStart"),or("dblclick","onDoubleClick"),or("focusin","onFocus"),or("focusout","onBlur"),or(ad,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),s0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ao));function ud(n,i,o){var c=n.type||"unknown-event";n.currentTarget=o,la(c,i,void 0,n),n.currentTarget=null}function hd(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],f=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var w=c.length-1;0<=w;w--){var N=c[w],O=N.instance,ee=N.currentTarget;if(N=N.listener,O!==m&&f.isPropagationStopped())break e;ud(f,N,ee),m=O}else for(w=0;w<c.length;w++){if(N=c[w],O=N.instance,ee=N.currentTarget,N=N.listener,O!==m&&f.isPropagationStopped())break e;ud(f,N,ee),m=O}}}if(Ur)throw n=er,Ur=!1,er=null,n}function Ot(n,i){var o=i[Rc];o===void 0&&(o=i[Rc]=new Set);var c=n+"__bubble";o.has(c)||(fd(i,n,2,!1),o.add(c))}function Sc(n,i,o){var c=0;i&&(c|=4),fd(o,n,c,i)}var Ea="_reactListening"+Math.random().toString(36).slice(2);function Co(n){if(!n[Ea]){n[Ea]=!0,r.forEach(function(o){o!=="selectionchange"&&(s0.has(o)||Sc(o,!1,n),Sc(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ea]||(i[Ea]=!0,Sc("selectionchange",!1,i))}}function fd(n,i,o,c){switch(Uf(i)){case 1:var f=x_;break;case 4:f=y_;break;default:f=rc}o=f.bind(null,i,o,n),f=void 0,!cs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,o,{capture:!0,passive:f}):n.addEventListener(i,o,!0):f!==void 0?n.addEventListener(i,o,{passive:f}):n.addEventListener(i,o,!1)}function Mc(n,i,o,c,f){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var N=c.stateNode.containerInfo;if(N===f||N.nodeType===8&&N.parentNode===f)break;if(w===4)for(w=c.return;w!==null;){var O=w.tag;if((O===3||O===4)&&(O=w.stateNode.containerInfo,O===f||O.nodeType===8&&O.parentNode===f))return;w=w.return}for(;N!==null;){if(w=Fr(N),w===null)return;if(O=w.tag,O===5||O===6){c=m=w;continue e}N=N.parentNode}}c=c.return}Cn(function(){var ee=m,Me=G(o),we=[];e:{var ye=ld.get(n);if(ye!==void 0){var ke=ac,Ge=n;switch(n){case"keypress":if(_a(o)===0)break e;case"keydown":case"keyup":ke=U_;break;case"focusin":Ge="focus",ke=uc;break;case"focusout":Ge="blur",ke=uc;break;case"beforeblur":case"afterblur":ke=uc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=kf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=E_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=k_;break;case rd:case sd:case od:ke=A_;break;case ad:ke=z_;break;case"scroll":ke=S_;break;case"wheel":ke=H_;break;case"copy":case"cut":case"paste":ke=R_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=zf}var Xe=(i&4)!==0,Xt=!Xe&&n==="scroll",q=Xe?ye!==null?ye+"Capture":null:ye;Xe=[];for(var V=ee,K;V!==null;){K=V;var Ce=K.stateNode;if(K.tag===5&&Ce!==null&&(K=Ce,q!==null&&(Ce=xn(V,q),Ce!=null&&Xe.push(Ro(V,Ce,K)))),Xt)break;V=V.return}0<Xe.length&&(ye=new ke(ye,Ge,null,o,Me),we.push({event:ye,listeners:Xe}))}}if((i&7)===0){e:{if(ye=n==="mouseover"||n==="pointerover",ke=n==="mouseout"||n==="pointerout",ye&&o!==et&&(Ge=o.relatedTarget||o.fromElement)&&(Fr(Ge)||Ge[Ni]))break e;if((ke||ye)&&(ye=Me.window===Me?Me:(ye=Me.ownerDocument)?ye.defaultView||ye.parentWindow:window,ke?(Ge=o.relatedTarget||o.toElement,ke=ee,Ge=Ge?Fr(Ge):null,Ge!==null&&(Xt=xi(Ge),Ge!==Xt||Ge.tag!==5&&Ge.tag!==6)&&(Ge=null)):(ke=null,Ge=ee),ke!==Ge)){if(Xe=kf,Ce="onMouseLeave",q="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(Xe=zf,Ce="onPointerLeave",q="onPointerEnter",V="pointer"),Xt=ke==null?ye:vs(ke),K=Ge==null?ye:vs(Ge),ye=new Xe(Ce,V+"leave",ke,o,Me),ye.target=Xt,ye.relatedTarget=K,Ce=null,Fr(Me)===ee&&(Xe=new Xe(q,V+"enter",Ge,o,Me),Xe.target=K,Xe.relatedTarget=Xt,Ce=Xe),Xt=Ce,ke&&Ge)t:{for(Xe=ke,q=Ge,V=0,K=Xe;K;K=gs(K))V++;for(K=0,Ce=q;Ce;Ce=gs(Ce))K++;for(;0<V-K;)Xe=gs(Xe),V--;for(;0<K-V;)q=gs(q),K--;for(;V--;){if(Xe===q||q!==null&&Xe===q.alternate)break t;Xe=gs(Xe),q=gs(q)}Xe=null}else Xe=null;ke!==null&&dd(we,ye,ke,Xe,!1),Ge!==null&&Xt!==null&&dd(we,Xt,Ge,Xe,!0)}}e:{if(ye=ee?vs(ee):window,ke=ye.nodeName&&ye.nodeName.toLowerCase(),ke==="select"||ke==="input"&&ye.type==="file")var qe=q_;else if(jf(ye))if(Yf)qe=J_;else{qe=Z_;var tt=K_}else(ke=ye.nodeName)&&ke.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(qe=Q_);if(qe&&(qe=qe(n,ee))){$f(we,qe,o,Me);break e}tt&&tt(n,ye,ee),n==="focusout"&&(tt=ye._wrapperState)&&tt.controlled&&ye.type==="number"&&Tt(ye,"number",ye.value)}switch(tt=ee?vs(ee):window,n){case"focusin":(jf(tt)||tt.contentEditable==="true")&&(ps=tt,gc=ee,To=null);break;case"focusout":To=gc=ps=null;break;case"mousedown":_c=!0;break;case"contextmenu":case"mouseup":case"dragend":_c=!1,nd(we,o,Me);break;case"selectionchange":if(n0)break;case"keydown":case"keyup":nd(we,o,Me)}var nt;if(fc)e:{switch(n){case"compositionstart":var st="onCompositionStart";break e;case"compositionend":st="onCompositionEnd";break e;case"compositionupdate":st="onCompositionUpdate";break e}st=void 0}else ds?Wf(n,o)&&(st="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(st="onCompositionStart");st&&(Vf&&o.locale!=="ko"&&(ds||st!=="onCompositionStart"?st==="onCompositionEnd"&&ds&&(nt=Ff()):(sr=Me,oc="value"in sr?sr.value:sr.textContent,ds=!0)),tt=wa(ee,st),0<tt.length&&(st=new Bf(st,n,null,o,Me),we.push({event:st,listeners:tt}),nt?st.data=nt:(nt=Xf(o),nt!==null&&(st.data=nt)))),(nt=W_?X_(n,o):j_(n,o))&&(ee=wa(ee,"onBeforeInput"),0<ee.length&&(Me=new Bf("onBeforeInput","beforeinput",null,o,Me),we.push({event:Me,listeners:ee}),Me.data=nt))}hd(we,i)})}function Ro(n,i,o){return{instance:n,listener:i,currentTarget:o}}function wa(n,i){for(var o=i+"Capture",c=[];n!==null;){var f=n,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=xn(n,o),m!=null&&c.unshift(Ro(n,m,f)),m=xn(n,i),m!=null&&c.push(Ro(n,m,f))),n=n.return}return c}function gs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function dd(n,i,o,c,f){for(var m=i._reactName,w=[];o!==null&&o!==c;){var N=o,O=N.alternate,ee=N.stateNode;if(O!==null&&O===c)break;N.tag===5&&ee!==null&&(N=ee,f?(O=xn(o,m),O!=null&&w.unshift(Ro(o,O,N))):f||(O=xn(o,m),O!=null&&w.push(Ro(o,O,N)))),o=o.return}w.length!==0&&n.push({event:i,listeners:w})}var o0=/\r\n?/g,a0=/\u0000|\uFFFD/g;function pd(n){return(typeof n=="string"?n:""+n).replace(o0,`
`).replace(a0,"")}function Ta(n,i,o){if(i=pd(i),pd(n)!==i&&o)throw Error(t(425))}function Aa(){}var Ec=null,wc=null;function Tc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ac=typeof setTimeout=="function"?setTimeout:void 0,l0=typeof clearTimeout=="function"?clearTimeout:void 0,md=typeof Promise=="function"?Promise:void 0,c0=typeof queueMicrotask=="function"?queueMicrotask:typeof md<"u"?function(n){return md.resolve(null).then(n).catch(u0)}:Ac;function u0(n){setTimeout(function(){throw n})}function Cc(n,i){var o=i,c=0;do{var f=o.nextSibling;if(n.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(c===0){n.removeChild(f),vo(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=f}while(o);vo(i)}function ar(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function gd(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var _s=Math.random().toString(36).slice(2),Si="__reactFiber$"+_s,bo="__reactProps$"+_s,Ni="__reactContainer$"+_s,Rc="__reactEvents$"+_s,h0="__reactListeners$"+_s,f0="__reactHandles$"+_s;function Fr(n){var i=n[Si];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Ni]||o[Si]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=gd(n);n!==null;){if(o=n[Si])return o;n=gd(n)}return i}n=o,o=n.parentNode}return null}function Po(n){return n=n[Si]||n[Ni],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function vs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ca(n){return n[bo]||null}var bc=[],xs=-1;function lr(n){return{current:n}}function kt(n){0>xs||(n.current=bc[xs],bc[xs]=null,xs--)}function Ut(n,i){xs++,bc[xs]=n.current,n.current=i}var cr={},fn=lr(cr),bn=lr(!1),Or=cr;function ys(n,i){var o=n.type.contextTypes;if(!o)return cr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in o)f[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Pn(n){return n=n.childContextTypes,n!=null}function Ra(){kt(bn),kt(fn)}function _d(n,i,o){if(fn.current!==cr)throw Error(t(168));Ut(fn,i),Ut(bn,o)}function vd(n,i,o){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,Se(n)||"Unknown",f));return le({},o,c)}function ba(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||cr,Or=fn.current,Ut(fn,n),Ut(bn,bn.current),!0}function xd(n,i,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=vd(n,i,Or),c.__reactInternalMemoizedMergedChildContext=n,kt(bn),kt(fn),Ut(fn,n)):kt(bn),Ut(bn,o)}var Ii=null,Pa=!1,Pc=!1;function yd(n){Ii===null?Ii=[n]:Ii.push(n)}function d0(n){Pa=!0,yd(n)}function ur(){if(!Pc&&Ii!==null){Pc=!0;var n=0,i=Pt;try{var o=Ii;for(Pt=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}Ii=null,Pa=!1}catch(f){throw Ii!==null&&(Ii=Ii.slice(n+1)),te(We,ur),f}finally{Pt=i,Pc=!1}}return null}var Ss=[],Ms=0,La=null,Da=0,$n=[],Yn=0,kr=null,Ui=1,Fi="";function Br(n,i){Ss[Ms++]=Da,Ss[Ms++]=La,La=n,Da=i}function Sd(n,i,o){$n[Yn++]=Ui,$n[Yn++]=Fi,$n[Yn++]=kr,kr=n;var c=Ui;n=Fi;var f=32-ht(c)-1;c&=~(1<<f),o+=1;var m=32-ht(i)+f;if(30<m){var w=f-f%5;m=(c&(1<<w)-1).toString(32),c>>=w,f-=w,Ui=1<<32-ht(i)+f|o<<f|c,Fi=m+n}else Ui=1<<m|o<<f|c,Fi=n}function Lc(n){n.return!==null&&(Br(n,1),Sd(n,1,0))}function Dc(n){for(;n===La;)La=Ss[--Ms],Ss[Ms]=null,Da=Ss[--Ms],Ss[Ms]=null;for(;n===kr;)kr=$n[--Yn],$n[Yn]=null,Fi=$n[--Yn],$n[Yn]=null,Ui=$n[--Yn],$n[Yn]=null}var kn=null,Bn=null,Bt=!1,ai=null;function Md(n,i){var o=Qn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function Ed(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,kn=n,Bn=ar(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,kn=n,Bn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=kr!==null?{id:Ui,overflow:Fi}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Qn(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,kn=n,Bn=null,!0):!1;default:return!1}}function Nc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ic(n){if(Bt){var i=Bn;if(i){var o=i;if(!Ed(n,i)){if(Nc(n))throw Error(t(418));i=ar(o.nextSibling);var c=kn;i&&Ed(n,i)?Md(c,o):(n.flags=n.flags&-4097|2,Bt=!1,kn=n)}}else{if(Nc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Bt=!1,kn=n}}}function wd(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;kn=n}function Na(n){if(n!==kn)return!1;if(!Bt)return wd(n),Bt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Tc(n.type,n.memoizedProps)),i&&(i=Bn)){if(Nc(n))throw Td(),Error(t(418));for(;i;)Md(n,i),i=ar(i.nextSibling)}if(wd(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){Bn=ar(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}Bn=null}}else Bn=kn?ar(n.stateNode.nextSibling):null;return!0}function Td(){for(var n=Bn;n;)n=ar(n.nextSibling)}function Es(){Bn=kn=null,Bt=!1}function Uc(n){ai===null?ai=[n]:ai.push(n)}var p0=A.ReactCurrentBatchConfig;function Lo(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var f=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(w){var N=f.refs;w===null?delete N[m]:N[m]=w},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Ia(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Ad(n){var i=n._init;return i(n._payload)}function Cd(n){function i(q,V){if(n){var K=q.deletions;K===null?(q.deletions=[V],q.flags|=16):K.push(V)}}function o(q,V){if(!n)return null;for(;V!==null;)i(q,V),V=V.sibling;return null}function c(q,V){for(q=new Map;V!==null;)V.key!==null?q.set(V.key,V):q.set(V.index,V),V=V.sibling;return q}function f(q,V){return q=vr(q,V),q.index=0,q.sibling=null,q}function m(q,V,K){return q.index=K,n?(K=q.alternate,K!==null?(K=K.index,K<V?(q.flags|=2,V):K):(q.flags|=2,V)):(q.flags|=1048576,V)}function w(q){return n&&q.alternate===null&&(q.flags|=2),q}function N(q,V,K,Ce){return V===null||V.tag!==6?(V=Au(K,q.mode,Ce),V.return=q,V):(V=f(V,K),V.return=q,V)}function O(q,V,K,Ce){var qe=K.type;return qe===I?Me(q,V,K.props.children,Ce,K.key):V!==null&&(V.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===ue&&Ad(qe)===V.type)?(Ce=f(V,K.props),Ce.ref=Lo(q,V,K),Ce.return=q,Ce):(Ce=rl(K.type,K.key,K.props,null,q.mode,Ce),Ce.ref=Lo(q,V,K),Ce.return=q,Ce)}function ee(q,V,K,Ce){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=Cu(K,q.mode,Ce),V.return=q,V):(V=f(V,K.children||[]),V.return=q,V)}function Me(q,V,K,Ce,qe){return V===null||V.tag!==7?(V=$r(K,q.mode,Ce,qe),V.return=q,V):(V=f(V,K),V.return=q,V)}function we(q,V,K){if(typeof V=="string"&&V!==""||typeof V=="number")return V=Au(""+V,q.mode,K),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case H:return K=rl(V.type,V.key,V.props,null,q.mode,K),K.ref=Lo(q,null,V),K.return=q,K;case F:return V=Cu(V,q.mode,K),V.return=q,V;case ue:var Ce=V._init;return we(q,Ce(V._payload),K)}if(je(V)||he(V))return V=$r(V,q.mode,K,null),V.return=q,V;Ia(q,V)}return null}function ye(q,V,K,Ce){var qe=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return qe!==null?null:N(q,V,""+K,Ce);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case H:return K.key===qe?O(q,V,K,Ce):null;case F:return K.key===qe?ee(q,V,K,Ce):null;case ue:return qe=K._init,ye(q,V,qe(K._payload),Ce)}if(je(K)||he(K))return qe!==null?null:Me(q,V,K,Ce,null);Ia(q,K)}return null}function ke(q,V,K,Ce,qe){if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number")return q=q.get(K)||null,N(V,q,""+Ce,qe);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case H:return q=q.get(Ce.key===null?K:Ce.key)||null,O(V,q,Ce,qe);case F:return q=q.get(Ce.key===null?K:Ce.key)||null,ee(V,q,Ce,qe);case ue:var tt=Ce._init;return ke(q,V,K,tt(Ce._payload),qe)}if(je(Ce)||he(Ce))return q=q.get(K)||null,Me(V,q,Ce,qe,null);Ia(V,Ce)}return null}function Ge(q,V,K,Ce){for(var qe=null,tt=null,nt=V,st=V=0,sn=null;nt!==null&&st<K.length;st++){nt.index>st?(sn=nt,nt=null):sn=nt.sibling;var Ct=ye(q,nt,K[st],Ce);if(Ct===null){nt===null&&(nt=sn);break}n&&nt&&Ct.alternate===null&&i(q,nt),V=m(Ct,V,st),tt===null?qe=Ct:tt.sibling=Ct,tt=Ct,nt=sn}if(st===K.length)return o(q,nt),Bt&&Br(q,st),qe;if(nt===null){for(;st<K.length;st++)nt=we(q,K[st],Ce),nt!==null&&(V=m(nt,V,st),tt===null?qe=nt:tt.sibling=nt,tt=nt);return Bt&&Br(q,st),qe}for(nt=c(q,nt);st<K.length;st++)sn=ke(nt,q,st,K[st],Ce),sn!==null&&(n&&sn.alternate!==null&&nt.delete(sn.key===null?st:sn.key),V=m(sn,V,st),tt===null?qe=sn:tt.sibling=sn,tt=sn);return n&&nt.forEach(function(xr){return i(q,xr)}),Bt&&Br(q,st),qe}function Xe(q,V,K,Ce){var qe=he(K);if(typeof qe!="function")throw Error(t(150));if(K=qe.call(K),K==null)throw Error(t(151));for(var tt=qe=null,nt=V,st=V=0,sn=null,Ct=K.next();nt!==null&&!Ct.done;st++,Ct=K.next()){nt.index>st?(sn=nt,nt=null):sn=nt.sibling;var xr=ye(q,nt,Ct.value,Ce);if(xr===null){nt===null&&(nt=sn);break}n&&nt&&xr.alternate===null&&i(q,nt),V=m(xr,V,st),tt===null?qe=xr:tt.sibling=xr,tt=xr,nt=sn}if(Ct.done)return o(q,nt),Bt&&Br(q,st),qe;if(nt===null){for(;!Ct.done;st++,Ct=K.next())Ct=we(q,Ct.value,Ce),Ct!==null&&(V=m(Ct,V,st),tt===null?qe=Ct:tt.sibling=Ct,tt=Ct);return Bt&&Br(q,st),qe}for(nt=c(q,nt);!Ct.done;st++,Ct=K.next())Ct=ke(nt,q,st,Ct.value,Ce),Ct!==null&&(n&&Ct.alternate!==null&&nt.delete(Ct.key===null?st:Ct.key),V=m(Ct,V,st),tt===null?qe=Ct:tt.sibling=Ct,tt=Ct);return n&&nt.forEach(function($0){return i(q,$0)}),Bt&&Br(q,st),qe}function Xt(q,V,K,Ce){if(typeof K=="object"&&K!==null&&K.type===I&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case H:e:{for(var qe=K.key,tt=V;tt!==null;){if(tt.key===qe){if(qe=K.type,qe===I){if(tt.tag===7){o(q,tt.sibling),V=f(tt,K.props.children),V.return=q,q=V;break e}}else if(tt.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===ue&&Ad(qe)===tt.type){o(q,tt.sibling),V=f(tt,K.props),V.ref=Lo(q,tt,K),V.return=q,q=V;break e}o(q,tt);break}else i(q,tt);tt=tt.sibling}K.type===I?(V=$r(K.props.children,q.mode,Ce,K.key),V.return=q,q=V):(Ce=rl(K.type,K.key,K.props,null,q.mode,Ce),Ce.ref=Lo(q,V,K),Ce.return=q,q=Ce)}return w(q);case F:e:{for(tt=K.key;V!==null;){if(V.key===tt)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){o(q,V.sibling),V=f(V,K.children||[]),V.return=q,q=V;break e}else{o(q,V);break}else i(q,V);V=V.sibling}V=Cu(K,q.mode,Ce),V.return=q,q=V}return w(q);case ue:return tt=K._init,Xt(q,V,tt(K._payload),Ce)}if(je(K))return Ge(q,V,K,Ce);if(he(K))return Xe(q,V,K,Ce);Ia(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,V!==null&&V.tag===6?(o(q,V.sibling),V=f(V,K),V.return=q,q=V):(o(q,V),V=Au(K,q.mode,Ce),V.return=q,q=V),w(q)):o(q,V)}return Xt}var ws=Cd(!0),Rd=Cd(!1),Ua=lr(null),Fa=null,Ts=null,Fc=null;function Oc(){Fc=Ts=Fa=null}function kc(n){var i=Ua.current;kt(Ua),n._currentValue=i}function Bc(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function As(n,i){Fa=n,Fc=Ts=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Ln=!0),n.firstContext=null)}function qn(n){var i=n._currentValue;if(Fc!==n)if(n={context:n,memoizedValue:i,next:null},Ts===null){if(Fa===null)throw Error(t(308));Ts=n,Fa.dependencies={lanes:0,firstContext:n}}else Ts=Ts.next=n;return i}var zr=null;function zc(n){zr===null?zr=[n]:zr.push(n)}function bd(n,i,o,c){var f=i.interleaved;return f===null?(o.next=o,zc(i)):(o.next=f.next,f.next=o),i.interleaved=o,Oi(n,c)}function Oi(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var hr=!1;function Vc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pd(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ki(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function fr(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Et&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Oi(n,o)}return f=c.interleaved,f===null?(i.next=i,zc(c)):(i.next=f.next,f.next=i),c.interleaved=i,Oi(n,o)}function Oa(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,tc(n,o)}}function Ld(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var w={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?f=m=w:m=m.next=w,o=o.next}while(o!==null);m===null?f=m=i:m=m.next=i}else f=m=i;o={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function ka(n,i,o,c){var f=n.updateQueue;hr=!1;var m=f.firstBaseUpdate,w=f.lastBaseUpdate,N=f.shared.pending;if(N!==null){f.shared.pending=null;var O=N,ee=O.next;O.next=null,w===null?m=ee:w.next=ee,w=O;var Me=n.alternate;Me!==null&&(Me=Me.updateQueue,N=Me.lastBaseUpdate,N!==w&&(N===null?Me.firstBaseUpdate=ee:N.next=ee,Me.lastBaseUpdate=O))}if(m!==null){var we=f.baseState;w=0,Me=ee=O=null,N=m;do{var ye=N.lane,ke=N.eventTime;if((c&ye)===ye){Me!==null&&(Me=Me.next={eventTime:ke,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var Ge=n,Xe=N;switch(ye=i,ke=o,Xe.tag){case 1:if(Ge=Xe.payload,typeof Ge=="function"){we=Ge.call(ke,we,ye);break e}we=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=Xe.payload,ye=typeof Ge=="function"?Ge.call(ke,we,ye):Ge,ye==null)break e;we=le({},we,ye);break e;case 2:hr=!0}}N.callback!==null&&N.lane!==0&&(n.flags|=64,ye=f.effects,ye===null?f.effects=[N]:ye.push(N))}else ke={eventTime:ke,lane:ye,tag:N.tag,payload:N.payload,callback:N.callback,next:null},Me===null?(ee=Me=ke,O=we):Me=Me.next=ke,w|=ye;if(N=N.next,N===null){if(N=f.shared.pending,N===null)break;ye=N,N=ye.next,ye.next=null,f.lastBaseUpdate=ye,f.shared.pending=null}}while(!0);if(Me===null&&(O=we),f.baseState=O,f.firstBaseUpdate=ee,f.lastBaseUpdate=Me,i=f.shared.interleaved,i!==null){f=i;do w|=f.lane,f=f.next;while(f!==i)}else m===null&&(f.shared.lanes=0);Gr|=w,n.lanes=w,n.memoizedState=we}}function Dd(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=o,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var Do={},Mi=lr(Do),No=lr(Do),Io=lr(Do);function Vr(n){if(n===Do)throw Error(t(174));return n}function Hc(n,i){switch(Ut(Io,i),Ut(No,n),Ut(Mi,Do),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ve(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ve(i,n)}kt(Mi),Ut(Mi,i)}function Cs(){kt(Mi),kt(No),kt(Io)}function Nd(n){Vr(Io.current);var i=Vr(Mi.current),o=Ve(i,n.type);i!==o&&(Ut(No,n),Ut(Mi,o))}function Gc(n){No.current===n&&(kt(Mi),kt(No))}var Vt=lr(0);function Ba(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Wc=[];function Xc(){for(var n=0;n<Wc.length;n++)Wc[n]._workInProgressVersionPrimary=null;Wc.length=0}var za=A.ReactCurrentDispatcher,jc=A.ReactCurrentBatchConfig,Hr=0,Ht=null,Zt=null,nn=null,Va=!1,Uo=!1,Fo=0,m0=0;function dn(){throw Error(t(321))}function $c(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!oi(n[o],i[o]))return!1;return!0}function Yc(n,i,o,c,f,m){if(Hr=m,Ht=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,za.current=n===null||n.memoizedState===null?x0:y0,n=o(c,f),Uo){m=0;do{if(Uo=!1,Fo=0,25<=m)throw Error(t(301));m+=1,nn=Zt=null,i.updateQueue=null,za.current=S0,n=o(c,f)}while(Uo)}if(za.current=Wa,i=Zt!==null&&Zt.next!==null,Hr=0,nn=Zt=Ht=null,Va=!1,i)throw Error(t(300));return n}function qc(){var n=Fo!==0;return Fo=0,n}function Ei(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?Ht.memoizedState=nn=n:nn=nn.next=n,nn}function Kn(){if(Zt===null){var n=Ht.alternate;n=n!==null?n.memoizedState:null}else n=Zt.next;var i=nn===null?Ht.memoizedState:nn.next;if(i!==null)nn=i,Zt=n;else{if(n===null)throw Error(t(310));Zt=n,n={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},nn===null?Ht.memoizedState=nn=n:nn=nn.next=n}return nn}function Oo(n,i){return typeof i=="function"?i(n):i}function Kc(n){var i=Kn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=Zt,f=c.baseQueue,m=o.pending;if(m!==null){if(f!==null){var w=f.next;f.next=m.next,m.next=w}c.baseQueue=f=m,o.pending=null}if(f!==null){m=f.next,c=c.baseState;var N=w=null,O=null,ee=m;do{var Me=ee.lane;if((Hr&Me)===Me)O!==null&&(O=O.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),c=ee.hasEagerState?ee.eagerState:n(c,ee.action);else{var we={lane:Me,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};O===null?(N=O=we,w=c):O=O.next=we,Ht.lanes|=Me,Gr|=Me}ee=ee.next}while(ee!==null&&ee!==m);O===null?w=c:O.next=N,oi(c,i.memoizedState)||(Ln=!0),i.memoizedState=c,i.baseState=w,i.baseQueue=O,o.lastRenderedState=c}if(n=o.interleaved,n!==null){f=n;do m=f.lane,Ht.lanes|=m,Gr|=m,f=f.next;while(f!==n)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Zc(n){var i=Kn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,f=o.pending,m=i.memoizedState;if(f!==null){o.pending=null;var w=f=f.next;do m=n(m,w.action),w=w.next;while(w!==f);oi(m,i.memoizedState)||(Ln=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,c]}function Id(){}function Ud(n,i){var o=Ht,c=Kn(),f=i(),m=!oi(c.memoizedState,f);if(m&&(c.memoizedState=f,Ln=!0),c=c.queue,Qc(kd.bind(null,o,c,n),[n]),c.getSnapshot!==i||m||nn!==null&&nn.memoizedState.tag&1){if(o.flags|=2048,ko(9,Od.bind(null,o,c,f,i),void 0,null),rn===null)throw Error(t(349));(Hr&30)!==0||Fd(o,i,f)}return f}function Fd(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Od(n,i,o,c){i.value=o,i.getSnapshot=c,Bd(i)&&zd(n)}function kd(n,i,o){return o(function(){Bd(i)&&zd(n)})}function Bd(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!oi(n,o)}catch{return!0}}function zd(n){var i=Oi(n,1);i!==null&&hi(i,n,1,-1)}function Vd(n){var i=Ei();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:n},i.queue=n,n=n.dispatch=v0.bind(null,Ht,n),[i.memoizedState,n]}function ko(n,i,o,c){return n={tag:n,create:i,destroy:o,deps:c,next:null},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n)),n}function Hd(){return Kn().memoizedState}function Ha(n,i,o,c){var f=Ei();Ht.flags|=n,f.memoizedState=ko(1|i,o,void 0,c===void 0?null:c)}function Ga(n,i,o,c){var f=Kn();c=c===void 0?null:c;var m=void 0;if(Zt!==null){var w=Zt.memoizedState;if(m=w.destroy,c!==null&&$c(c,w.deps)){f.memoizedState=ko(i,o,m,c);return}}Ht.flags|=n,f.memoizedState=ko(1|i,o,m,c)}function Gd(n,i){return Ha(8390656,8,n,i)}function Qc(n,i){return Ga(2048,8,n,i)}function Wd(n,i){return Ga(4,2,n,i)}function Xd(n,i){return Ga(4,4,n,i)}function jd(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function $d(n,i,o){return o=o!=null?o.concat([n]):null,Ga(4,4,jd.bind(null,i,n),o)}function Jc(){}function Yd(n,i){var o=Kn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&$c(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function qd(n,i){var o=Kn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&$c(i,c[1])?c[0]:(n=n(),o.memoizedState=[n,i],n)}function Kd(n,i,o){return(Hr&21)===0?(n.baseState&&(n.baseState=!1,Ln=!0),n.memoizedState=o):(oi(o,i)||(o=yn(),Ht.lanes|=o,Gr|=o,n.baseState=!0),i)}function g0(n,i){var o=Pt;Pt=o!==0&&4>o?o:4,n(!0);var c=jc.transition;jc.transition={};try{n(!1),i()}finally{Pt=o,jc.transition=c}}function Zd(){return Kn().memoizedState}function _0(n,i,o){var c=gr(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},Qd(n))Jd(i,o);else if(o=bd(n,i,o,c),o!==null){var f=Mn();hi(o,n,c,f),ep(o,i,c)}}function v0(n,i,o){var c=gr(n),f={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(Qd(n))Jd(i,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var w=i.lastRenderedState,N=m(w,o);if(f.hasEagerState=!0,f.eagerState=N,oi(N,w)){var O=i.interleaved;O===null?(f.next=f,zc(i)):(f.next=O.next,O.next=f),i.interleaved=f;return}}catch{}finally{}o=bd(n,i,f,c),o!==null&&(f=Mn(),hi(o,n,c,f),ep(o,i,c))}}function Qd(n){var i=n.alternate;return n===Ht||i!==null&&i===Ht}function Jd(n,i){Uo=Va=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function ep(n,i,o){if((o&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,tc(n,o)}}var Wa={readContext:qn,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useInsertionEffect:dn,useLayoutEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useMutableSource:dn,useSyncExternalStore:dn,useId:dn,unstable_isNewReconciler:!1},x0={readContext:qn,useCallback:function(n,i){return Ei().memoizedState=[n,i===void 0?null:i],n},useContext:qn,useEffect:Gd,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Ha(4194308,4,jd.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Ha(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ha(4,2,n,i)},useMemo:function(n,i){var o=Ei();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var c=Ei();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=_0.bind(null,Ht,n),[c.memoizedState,n]},useRef:function(n){var i=Ei();return n={current:n},i.memoizedState=n},useState:Vd,useDebugValue:Jc,useDeferredValue:function(n){return Ei().memoizedState=n},useTransition:function(){var n=Vd(!1),i=n[0];return n=g0.bind(null,n[1]),Ei().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var c=Ht,f=Ei();if(Bt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),rn===null)throw Error(t(349));(Hr&30)!==0||Fd(c,i,o)}f.memoizedState=o;var m={value:o,getSnapshot:i};return f.queue=m,Gd(kd.bind(null,c,m,n),[n]),c.flags|=2048,ko(9,Od.bind(null,c,m,o,i),void 0,null),o},useId:function(){var n=Ei(),i=rn.identifierPrefix;if(Bt){var o=Fi,c=Ui;o=(c&~(1<<32-ht(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=Fo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=m0++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},y0={readContext:qn,useCallback:Yd,useContext:qn,useEffect:Qc,useImperativeHandle:$d,useInsertionEffect:Wd,useLayoutEffect:Xd,useMemo:qd,useReducer:Kc,useRef:Hd,useState:function(){return Kc(Oo)},useDebugValue:Jc,useDeferredValue:function(n){var i=Kn();return Kd(i,Zt.memoizedState,n)},useTransition:function(){var n=Kc(Oo)[0],i=Kn().memoizedState;return[n,i]},useMutableSource:Id,useSyncExternalStore:Ud,useId:Zd,unstable_isNewReconciler:!1},S0={readContext:qn,useCallback:Yd,useContext:qn,useEffect:Qc,useImperativeHandle:$d,useInsertionEffect:Wd,useLayoutEffect:Xd,useMemo:qd,useReducer:Zc,useRef:Hd,useState:function(){return Zc(Oo)},useDebugValue:Jc,useDeferredValue:function(n){var i=Kn();return Zt===null?i.memoizedState=n:Kd(i,Zt.memoizedState,n)},useTransition:function(){var n=Zc(Oo)[0],i=Kn().memoizedState;return[n,i]},useMutableSource:Id,useSyncExternalStore:Ud,useId:Zd,unstable_isNewReconciler:!1};function li(n,i){if(n&&n.defaultProps){i=le({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function eu(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:le({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Xa={isMounted:function(n){return(n=n._reactInternals)?xi(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var c=Mn(),f=gr(n),m=ki(c,f);m.payload=i,o!=null&&(m.callback=o),i=fr(n,m,f),i!==null&&(hi(i,n,f,c),Oa(i,n,f))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=Mn(),f=gr(n),m=ki(c,f);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=fr(n,m,f),i!==null&&(hi(i,n,f,c),Oa(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Mn(),c=gr(n),f=ki(o,c);f.tag=2,i!=null&&(f.callback=i),i=fr(n,f,c),i!==null&&(hi(i,n,c,o),Oa(i,n,c))}};function tp(n,i,o,c,f,m,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,w):i.prototype&&i.prototype.isPureReactComponent?!wo(o,c)||!wo(f,m):!0}function np(n,i,o){var c=!1,f=cr,m=i.contextType;return typeof m=="object"&&m!==null?m=qn(m):(f=Pn(i)?Or:fn.current,c=i.contextTypes,m=(c=c!=null)?ys(n,f):cr),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Xa,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=m),i}function ip(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&Xa.enqueueReplaceState(i,i.state,null)}function tu(n,i,o,c){var f=n.stateNode;f.props=o,f.state=n.memoizedState,f.refs={},Vc(n);var m=i.contextType;typeof m=="object"&&m!==null?f.context=qn(m):(m=Pn(i)?Or:fn.current,f.context=ys(n,m)),f.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(eu(n,i,m,o),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Xa.enqueueReplaceState(f,f.state,null),ka(n,o,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Rs(n,i){try{var o="",c=i;do o+=fe(c),c=c.return;while(c);var f=o}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:f,digest:null}}function nu(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function iu(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var M0=typeof WeakMap=="function"?WeakMap:Map;function rp(n,i,o){o=ki(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){Qa||(Qa=!0,vu=c),iu(n,i)},o}function sp(n,i,o){o=ki(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;o.payload=function(){return c(f)},o.callback=function(){iu(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){iu(n,i),typeof c!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),o}function op(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new M0;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(o)||(f.add(o),n=F0.bind(null,n,i,o),i.then(n,n))}function ap(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function lp(n,i,o,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=ki(-1,1),i.tag=2,fr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var E0=A.ReactCurrentOwner,Ln=!1;function Sn(n,i,o,c){i.child=n===null?Rd(i,null,o,c):ws(i,n.child,o,c)}function cp(n,i,o,c,f){o=o.render;var m=i.ref;return As(i,f),c=Yc(n,i,o,c,m,f),o=qc(),n!==null&&!Ln?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Bi(n,i,f)):(Bt&&o&&Lc(i),i.flags|=1,Sn(n,i,c,f),i.child)}function up(n,i,o,c,f){if(n===null){var m=o.type;return typeof m=="function"&&!Tu(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,hp(n,i,m,c,f)):(n=rl(o.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&f)===0){var w=m.memoizedProps;if(o=o.compare,o=o!==null?o:wo,o(w,c)&&n.ref===i.ref)return Bi(n,i,f)}return i.flags|=1,n=vr(m,c),n.ref=i.ref,n.return=i,i.child=n}function hp(n,i,o,c,f){if(n!==null){var m=n.memoizedProps;if(wo(m,c)&&n.ref===i.ref)if(Ln=!1,i.pendingProps=c=m,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Ln=!0);else return i.lanes=n.lanes,Bi(n,i,f)}return ru(n,i,o,c,f)}function fp(n,i,o){var c=i.pendingProps,f=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ut(Ps,zn),zn|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ut(Ps,zn),zn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:o,Ut(Ps,zn),zn|=c}else m!==null?(c=m.baseLanes|o,i.memoizedState=null):c=o,Ut(Ps,zn),zn|=c;return Sn(n,i,f,o),i.child}function dp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function ru(n,i,o,c,f){var m=Pn(o)?Or:fn.current;return m=ys(i,m),As(i,f),o=Yc(n,i,o,c,m,f),c=qc(),n!==null&&!Ln?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Bi(n,i,f)):(Bt&&c&&Lc(i),i.flags|=1,Sn(n,i,o,f),i.child)}function pp(n,i,o,c,f){if(Pn(o)){var m=!0;ba(i)}else m=!1;if(As(i,f),i.stateNode===null)$a(n,i),np(i,o,c),tu(i,o,c,f),c=!0;else if(n===null){var w=i.stateNode,N=i.memoizedProps;w.props=N;var O=w.context,ee=o.contextType;typeof ee=="object"&&ee!==null?ee=qn(ee):(ee=Pn(o)?Or:fn.current,ee=ys(i,ee));var Me=o.getDerivedStateFromProps,we=typeof Me=="function"||typeof w.getSnapshotBeforeUpdate=="function";we||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(N!==c||O!==ee)&&ip(i,w,c,ee),hr=!1;var ye=i.memoizedState;w.state=ye,ka(i,c,w,f),O=i.memoizedState,N!==c||ye!==O||bn.current||hr?(typeof Me=="function"&&(eu(i,o,Me,c),O=i.memoizedState),(N=hr||tp(i,o,N,c,ye,O,ee))?(we||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=O),w.props=c,w.state=O,w.context=ee,c=N):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{w=i.stateNode,Pd(n,i),N=i.memoizedProps,ee=i.type===i.elementType?N:li(i.type,N),w.props=ee,we=i.pendingProps,ye=w.context,O=o.contextType,typeof O=="object"&&O!==null?O=qn(O):(O=Pn(o)?Or:fn.current,O=ys(i,O));var ke=o.getDerivedStateFromProps;(Me=typeof ke=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(N!==we||ye!==O)&&ip(i,w,c,O),hr=!1,ye=i.memoizedState,w.state=ye,ka(i,c,w,f);var Ge=i.memoizedState;N!==we||ye!==Ge||bn.current||hr?(typeof ke=="function"&&(eu(i,o,ke,c),Ge=i.memoizedState),(ee=hr||tp(i,o,ee,c,ye,Ge,O)||!1)?(Me||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,Ge,O),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,Ge,O)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||N===n.memoizedProps&&ye===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&ye===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ge),w.props=c,w.state=Ge,w.context=O,c=ee):(typeof w.componentDidUpdate!="function"||N===n.memoizedProps&&ye===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&ye===n.memoizedState||(i.flags|=1024),c=!1)}return su(n,i,o,c,m,f)}function su(n,i,o,c,f,m){dp(n,i);var w=(i.flags&128)!==0;if(!c&&!w)return f&&xd(i,o,!1),Bi(n,i,m);c=i.stateNode,E0.current=i;var N=w&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&w?(i.child=ws(i,n.child,null,m),i.child=ws(i,null,N,m)):Sn(n,i,N,m),i.memoizedState=c.state,f&&xd(i,o,!0),i.child}function mp(n){var i=n.stateNode;i.pendingContext?_d(n,i.pendingContext,i.pendingContext!==i.context):i.context&&_d(n,i.context,!1),Hc(n,i.containerInfo)}function gp(n,i,o,c,f){return Es(),Uc(f),i.flags|=256,Sn(n,i,o,c),i.child}var ou={dehydrated:null,treeContext:null,retryLane:0};function au(n){return{baseLanes:n,cachePool:null,transitions:null}}function _p(n,i,o){var c=i.pendingProps,f=Vt.current,m=!1,w=(i.flags&128)!==0,N;if((N=w)||(N=n!==null&&n.memoizedState===null?!1:(f&2)!==0),N?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Ut(Vt,f&1),n===null)return Ic(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=c.children,n=c.fallback,m?(c=i.mode,m=i.child,w={mode:"hidden",children:w},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=w):m=sl(w,c,0,null),n=$r(n,c,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=au(o),i.memoizedState=ou,n):lu(i,w));if(f=n.memoizedState,f!==null&&(N=f.dehydrated,N!==null))return w0(n,i,w,c,N,f,o);if(m){m=c.fallback,w=i.mode,f=n.child,N=f.sibling;var O={mode:"hidden",children:c.children};return(w&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=O,i.deletions=null):(c=vr(f,O),c.subtreeFlags=f.subtreeFlags&14680064),N!==null?m=vr(N,m):(m=$r(m,w,o,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,w=n.child.memoizedState,w=w===null?au(o):{baseLanes:w.baseLanes|o,cachePool:null,transitions:w.transitions},m.memoizedState=w,m.childLanes=n.childLanes&~o,i.memoizedState=ou,c}return m=n.child,n=m.sibling,c=vr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=c,i.memoizedState=null,c}function lu(n,i){return i=sl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ja(n,i,o,c){return c!==null&&Uc(c),ws(i,n.child,null,o),n=lu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function w0(n,i,o,c,f,m,w){if(o)return i.flags&256?(i.flags&=-257,c=nu(Error(t(422))),ja(n,i,w,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,f=i.mode,c=sl({mode:"visible",children:c.children},f,0,null),m=$r(m,f,w,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&ws(i,n.child,null,w),i.child.memoizedState=au(w),i.memoizedState=ou,m);if((i.mode&1)===0)return ja(n,i,w,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var N=c.dgst;return c=N,m=Error(t(419)),c=nu(m,c,void 0),ja(n,i,w,c)}if(N=(w&n.childLanes)!==0,Ln||N){if(c=rn,c!==null){switch(w&-w){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|w))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,Oi(n,f),hi(c,n,f,-1))}return wu(),c=nu(Error(t(421))),ja(n,i,w,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=O0.bind(null,n),f._reactRetry=i,null):(n=m.treeContext,Bn=ar(f.nextSibling),kn=i,Bt=!0,ai=null,n!==null&&($n[Yn++]=Ui,$n[Yn++]=Fi,$n[Yn++]=kr,Ui=n.id,Fi=n.overflow,kr=i),i=lu(i,c.children),i.flags|=4096,i)}function vp(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Bc(n.return,i,o)}function cu(n,i,o,c,f){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=o,m.tailMode=f)}function xp(n,i,o){var c=i.pendingProps,f=c.revealOrder,m=c.tail;if(Sn(n,i,c.children,o),c=Vt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&vp(n,o,i);else if(n.tag===19)vp(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ut(Vt,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)n=o.alternate,n!==null&&Ba(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),cu(i,!1,f,o,m);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Ba(n)===null){i.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}cu(i,!0,o,null,m);break;case"together":cu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function $a(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Bi(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Gr|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=vr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=vr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function T0(n,i,o){switch(i.tag){case 3:mp(i),Es();break;case 5:Nd(i);break;case 1:Pn(i.type)&&ba(i);break;case 4:Hc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Ut(Ua,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ut(Vt,Vt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?_p(n,i,o):(Ut(Vt,Vt.current&1),n=Bi(n,i,o),n!==null?n.sibling:null);Ut(Vt,Vt.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(n.flags&128)!==0){if(c)return xp(n,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ut(Vt,Vt.current),c)break;return null;case 22:case 23:return i.lanes=0,fp(n,i,o)}return Bi(n,i,o)}var yp,uu,Sp,Mp;yp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},uu=function(){},Sp=function(n,i,o,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,Vr(Mi.current);var m=null;switch(o){case"input":f=X(n,f),c=X(n,c),m=[];break;case"select":f=le({},f,{value:void 0}),c=le({},c,{value:void 0}),m=[];break;case"textarea":f=T(n,f),c=T(n,c),m=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Aa)}Qe(o,c);var w;o=null;for(ee in f)if(!c.hasOwnProperty(ee)&&f.hasOwnProperty(ee)&&f[ee]!=null)if(ee==="style"){var N=f[ee];for(w in N)N.hasOwnProperty(w)&&(o||(o={}),o[w]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(a.hasOwnProperty(ee)?m||(m=[]):(m=m||[]).push(ee,null));for(ee in c){var O=c[ee];if(N=f!=null?f[ee]:void 0,c.hasOwnProperty(ee)&&O!==N&&(O!=null||N!=null))if(ee==="style")if(N){for(w in N)!N.hasOwnProperty(w)||O&&O.hasOwnProperty(w)||(o||(o={}),o[w]="");for(w in O)O.hasOwnProperty(w)&&N[w]!==O[w]&&(o||(o={}),o[w]=O[w])}else o||(m||(m=[]),m.push(ee,o)),o=O;else ee==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,N=N?N.__html:void 0,O!=null&&N!==O&&(m=m||[]).push(ee,O)):ee==="children"?typeof O!="string"&&typeof O!="number"||(m=m||[]).push(ee,""+O):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(a.hasOwnProperty(ee)?(O!=null&&ee==="onScroll"&&Ot("scroll",n),m||N===O||(m=[])):(m=m||[]).push(ee,O))}o&&(m=m||[]).push("style",o);var ee=m;(i.updateQueue=ee)&&(i.flags|=4)}},Mp=function(n,i,o,c){o!==c&&(i.flags|=4)};function Bo(n,i){if(!Bt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function pn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function A0(n,i,o){var c=i.pendingProps;switch(Dc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pn(i),null;case 1:return Pn(i.type)&&Ra(),pn(i),null;case 3:return c=i.stateNode,Cs(),kt(bn),kt(fn),Xc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Na(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ai!==null&&(Su(ai),ai=null))),uu(n,i),pn(i),null;case 5:Gc(i);var f=Vr(Io.current);if(o=i.type,n!==null&&i.stateNode!=null)Sp(n,i,o,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return pn(i),null}if(n=Vr(Mi.current),Na(i)){c=i.stateNode,o=i.type;var m=i.memoizedProps;switch(c[Si]=i,c[bo]=m,n=(i.mode&1)!==0,o){case"dialog":Ot("cancel",c),Ot("close",c);break;case"iframe":case"object":case"embed":Ot("load",c);break;case"video":case"audio":for(f=0;f<Ao.length;f++)Ot(Ao[f],c);break;case"source":Ot("error",c);break;case"img":case"image":case"link":Ot("error",c),Ot("load",c);break;case"details":Ot("toggle",c);break;case"input":Wt(c,m),Ot("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Ot("invalid",c);break;case"textarea":Z(c,m),Ot("invalid",c)}Qe(o,m),f=null;for(var w in m)if(m.hasOwnProperty(w)){var N=m[w];w==="children"?typeof N=="string"?c.textContent!==N&&(m.suppressHydrationWarning!==!0&&Ta(c.textContent,N,n),f=["children",N]):typeof N=="number"&&c.textContent!==""+N&&(m.suppressHydrationWarning!==!0&&Ta(c.textContent,N,n),f=["children",""+N]):a.hasOwnProperty(w)&&N!=null&&w==="onScroll"&&Ot("scroll",c)}switch(o){case"input":wt(c),Je(c,m,!0);break;case"textarea":wt(c),xe(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Aa)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{w=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=de(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=w.createElement(o,{is:c.is}):(n=w.createElement(o),o==="select"&&(w=n,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):n=w.createElementNS(n,o),n[Si]=i,n[bo]=c,yp(n,i,!1,!1),i.stateNode=n;e:{switch(w=Be(o,c),o){case"dialog":Ot("cancel",n),Ot("close",n),f=c;break;case"iframe":case"object":case"embed":Ot("load",n),f=c;break;case"video":case"audio":for(f=0;f<Ao.length;f++)Ot(Ao[f],n);f=c;break;case"source":Ot("error",n),f=c;break;case"img":case"image":case"link":Ot("error",n),Ot("load",n),f=c;break;case"details":Ot("toggle",n),f=c;break;case"input":Wt(n,c),f=X(n,c),Ot("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=le({},c,{value:void 0}),Ot("invalid",n);break;case"textarea":Z(n,c),f=T(n,c),Ot("invalid",n);break;default:f=c}Qe(o,f),N=f;for(m in N)if(N.hasOwnProperty(m)){var O=N[m];m==="style"?re(n,O):m==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Ne(n,O)):m==="children"?typeof O=="string"?(o!=="textarea"||O!=="")&&lt(n,O):typeof O=="number"&&lt(n,""+O):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?O!=null&&m==="onScroll"&&Ot("scroll",n):O!=null&&P(n,m,O,w))}switch(o){case"input":wt(n),Je(n,c,!1);break;case"textarea":wt(n),xe(n);break;case"option":c.value!=null&&n.setAttribute("value",""+be(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?D(n,!!c.multiple,m,!1):c.defaultValue!=null&&D(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Aa)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return pn(i),null;case 6:if(n&&i.stateNode!=null)Mp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(o=Vr(Io.current),Vr(Mi.current),Na(i)){if(c=i.stateNode,o=i.memoizedProps,c[Si]=i,(m=c.nodeValue!==o)&&(n=kn,n!==null))switch(n.tag){case 3:Ta(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ta(c.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Si]=i,i.stateNode=c}return pn(i),null;case 13:if(kt(Vt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Bt&&Bn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Td(),Es(),i.flags|=98560,m=!1;else if(m=Na(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Si]=i}else Es(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;pn(i),m=!1}else ai!==null&&(Su(ai),ai=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Vt.current&1)!==0?Qt===0&&(Qt=3):wu())),i.updateQueue!==null&&(i.flags|=4),pn(i),null);case 4:return Cs(),uu(n,i),n===null&&Co(i.stateNode.containerInfo),pn(i),null;case 10:return kc(i.type._context),pn(i),null;case 17:return Pn(i.type)&&Ra(),pn(i),null;case 19:if(kt(Vt),m=i.memoizedState,m===null)return pn(i),null;if(c=(i.flags&128)!==0,w=m.rendering,w===null)if(c)Bo(m,!1);else{if(Qt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=Ba(n),w!==null){for(i.flags|=128,Bo(m,!1),c=w.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)m=o,n=c,m.flags&=14680066,w=m.alternate,w===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=w.childLanes,m.lanes=w.lanes,m.child=w.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=w.memoizedProps,m.memoizedState=w.memoizedState,m.updateQueue=w.updateQueue,m.type=w.type,n=w.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Ut(Vt,Vt.current&1|2),i.child}n=n.sibling}m.tail!==null&&Ae()>Ls&&(i.flags|=128,c=!0,Bo(m,!1),i.lanes=4194304)}else{if(!c)if(n=Ba(w),n!==null){if(i.flags|=128,c=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Bo(m,!0),m.tail===null&&m.tailMode==="hidden"&&!w.alternate&&!Bt)return pn(i),null}else 2*Ae()-m.renderingStartTime>Ls&&o!==1073741824&&(i.flags|=128,c=!0,Bo(m,!1),i.lanes=4194304);m.isBackwards?(w.sibling=i.child,i.child=w):(o=m.last,o!==null?o.sibling=w:i.child=w,m.last=w)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Ae(),i.sibling=null,o=Vt.current,Ut(Vt,c?o&1|2:o&1),i):(pn(i),null);case 22:case 23:return Eu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(zn&1073741824)!==0&&(pn(i),i.subtreeFlags&6&&(i.flags|=8192)):pn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function C0(n,i){switch(Dc(i),i.tag){case 1:return Pn(i.type)&&Ra(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Cs(),kt(bn),kt(fn),Xc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Gc(i),null;case 13:if(kt(Vt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Es()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return kt(Vt),null;case 4:return Cs(),null;case 10:return kc(i.type._context),null;case 22:case 23:return Eu(),null;case 24:return null;default:return null}}var Ya=!1,mn=!1,R0=typeof WeakSet=="function"?WeakSet:Set,He=null;function bs(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){Gt(n,i,c)}else o.current=null}function hu(n,i,o){try{o()}catch(c){Gt(n,i,c)}}var Ep=!1;function b0(n,i){if(Ec=pa,n=td(),mc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var w=0,N=-1,O=-1,ee=0,Me=0,we=n,ye=null;t:for(;;){for(var ke;we!==o||f!==0&&we.nodeType!==3||(N=w+f),we!==m||c!==0&&we.nodeType!==3||(O=w+c),we.nodeType===3&&(w+=we.nodeValue.length),(ke=we.firstChild)!==null;)ye=we,we=ke;for(;;){if(we===n)break t;if(ye===o&&++ee===f&&(N=w),ye===m&&++Me===c&&(O=w),(ke=we.nextSibling)!==null)break;we=ye,ye=we.parentNode}we=ke}o=N===-1||O===-1?null:{start:N,end:O}}else o=null}o=o||{start:0,end:0}}else o=null;for(wc={focusedElem:n,selectionRange:o},pa=!1,He=i;He!==null;)if(i=He,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,He=n;else for(;He!==null;){i=He;try{var Ge=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ge!==null){var Xe=Ge.memoizedProps,Xt=Ge.memoizedState,q=i.stateNode,V=q.getSnapshotBeforeUpdate(i.elementType===i.type?Xe:li(i.type,Xe),Xt);q.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ce){Gt(i,i.return,Ce)}if(n=i.sibling,n!==null){n.return=i.return,He=n;break}He=i.return}return Ge=Ep,Ep=!1,Ge}function zo(n,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var m=f.destroy;f.destroy=void 0,m!==void 0&&hu(i,o,m)}f=f.next}while(f!==c)}}function qa(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function fu(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function wp(n){var i=n.alternate;i!==null&&(n.alternate=null,wp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Si],delete i[bo],delete i[Rc],delete i[h0],delete i[f0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Tp(n){return n.tag===5||n.tag===3||n.tag===4}function Ap(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Tp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function du(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Aa));else if(c!==4&&(n=n.child,n!==null))for(du(n,i,o),n=n.sibling;n!==null;)du(n,i,o),n=n.sibling}function pu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(pu(n,i,o),n=n.sibling;n!==null;)pu(n,i,o),n=n.sibling}var ln=null,ci=!1;function dr(n,i,o){for(o=o.child;o!==null;)Cp(n,i,o),o=o.sibling}function Cp(n,i,o){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(bt,o)}catch{}switch(o.tag){case 5:mn||bs(o,i);case 6:var c=ln,f=ci;ln=null,dr(n,i,o),ln=c,ci=f,ln!==null&&(ci?(n=ln,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):ln.removeChild(o.stateNode));break;case 18:ln!==null&&(ci?(n=ln,o=o.stateNode,n.nodeType===8?Cc(n.parentNode,o):n.nodeType===1&&Cc(n,o),vo(n)):Cc(ln,o.stateNode));break;case 4:c=ln,f=ci,ln=o.stateNode.containerInfo,ci=!0,dr(n,i,o),ln=c,ci=f;break;case 0:case 11:case 14:case 15:if(!mn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var m=f,w=m.destroy;m=m.tag,w!==void 0&&((m&2)!==0||(m&4)!==0)&&hu(o,i,w),f=f.next}while(f!==c)}dr(n,i,o);break;case 1:if(!mn&&(bs(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(N){Gt(o,i,N)}dr(n,i,o);break;case 21:dr(n,i,o);break;case 22:o.mode&1?(mn=(c=mn)||o.memoizedState!==null,dr(n,i,o),mn=c):dr(n,i,o);break;default:dr(n,i,o)}}function Rp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new R0),i.forEach(function(c){var f=k0.bind(null,n,c);o.has(c)||(o.add(c),c.then(f,f))})}}function ui(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c];try{var m=n,w=i,N=w;e:for(;N!==null;){switch(N.tag){case 5:ln=N.stateNode,ci=!1;break e;case 3:ln=N.stateNode.containerInfo,ci=!0;break e;case 4:ln=N.stateNode.containerInfo,ci=!0;break e}N=N.return}if(ln===null)throw Error(t(160));Cp(m,w,f),ln=null,ci=!1;var O=f.alternate;O!==null&&(O.return=null),f.return=null}catch(ee){Gt(f,i,ee)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)bp(i,n),i=i.sibling}function bp(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ui(i,n),wi(n),c&4){try{zo(3,n,n.return),qa(3,n)}catch(Xe){Gt(n,n.return,Xe)}try{zo(5,n,n.return)}catch(Xe){Gt(n,n.return,Xe)}}break;case 1:ui(i,n),wi(n),c&512&&o!==null&&bs(o,o.return);break;case 5:if(ui(i,n),wi(n),c&512&&o!==null&&bs(o,o.return),n.flags&32){var f=n.stateNode;try{lt(f,"")}catch(Xe){Gt(n,n.return,Xe)}}if(c&4&&(f=n.stateNode,f!=null)){var m=n.memoizedProps,w=o!==null?o.memoizedProps:m,N=n.type,O=n.updateQueue;if(n.updateQueue=null,O!==null)try{N==="input"&&m.type==="radio"&&m.name!=null&&ut(f,m),Be(N,w);var ee=Be(N,m);for(w=0;w<O.length;w+=2){var Me=O[w],we=O[w+1];Me==="style"?re(f,we):Me==="dangerouslySetInnerHTML"?Ne(f,we):Me==="children"?lt(f,we):P(f,Me,we,ee)}switch(N){case"input":ot(f,m);break;case"textarea":_e(f,m);break;case"select":var ye=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var ke=m.value;ke!=null?D(f,!!m.multiple,ke,!1):ye!==!!m.multiple&&(m.defaultValue!=null?D(f,!!m.multiple,m.defaultValue,!0):D(f,!!m.multiple,m.multiple?[]:"",!1))}f[bo]=m}catch(Xe){Gt(n,n.return,Xe)}}break;case 6:if(ui(i,n),wi(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,m=n.memoizedProps;try{f.nodeValue=m}catch(Xe){Gt(n,n.return,Xe)}}break;case 3:if(ui(i,n),wi(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{vo(i.containerInfo)}catch(Xe){Gt(n,n.return,Xe)}break;case 4:ui(i,n),wi(n);break;case 13:ui(i,n),wi(n),f=n.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(_u=Ae())),c&4&&Rp(n);break;case 22:if(Me=o!==null&&o.memoizedState!==null,n.mode&1?(mn=(ee=mn)||Me,ui(i,n),mn=ee):ui(i,n),wi(n),c&8192){if(ee=n.memoizedState!==null,(n.stateNode.isHidden=ee)&&!Me&&(n.mode&1)!==0)for(He=n,Me=n.child;Me!==null;){for(we=He=Me;He!==null;){switch(ye=He,ke=ye.child,ye.tag){case 0:case 11:case 14:case 15:zo(4,ye,ye.return);break;case 1:bs(ye,ye.return);var Ge=ye.stateNode;if(typeof Ge.componentWillUnmount=="function"){c=ye,o=ye.return;try{i=c,Ge.props=i.memoizedProps,Ge.state=i.memoizedState,Ge.componentWillUnmount()}catch(Xe){Gt(c,o,Xe)}}break;case 5:bs(ye,ye.return);break;case 22:if(ye.memoizedState!==null){Dp(we);continue}}ke!==null?(ke.return=ye,He=ke):Dp(we)}Me=Me.sibling}e:for(Me=null,we=n;;){if(we.tag===5){if(Me===null){Me=we;try{f=we.stateNode,ee?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(N=we.stateNode,O=we.memoizedProps.style,w=O!=null&&O.hasOwnProperty("display")?O.display:null,N.style.display=Y("display",w))}catch(Xe){Gt(n,n.return,Xe)}}}else if(we.tag===6){if(Me===null)try{we.stateNode.nodeValue=ee?"":we.memoizedProps}catch(Xe){Gt(n,n.return,Xe)}}else if((we.tag!==22&&we.tag!==23||we.memoizedState===null||we===n)&&we.child!==null){we.child.return=we,we=we.child;continue}if(we===n)break e;for(;we.sibling===null;){if(we.return===null||we.return===n)break e;Me===we&&(Me=null),we=we.return}Me===we&&(Me=null),we.sibling.return=we.return,we=we.sibling}}break;case 19:ui(i,n),wi(n),c&4&&Rp(n);break;case 21:break;default:ui(i,n),wi(n)}}function wi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(Tp(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(lt(f,""),c.flags&=-33);var m=Ap(n);pu(n,m,f);break;case 3:case 4:var w=c.stateNode.containerInfo,N=Ap(n);du(n,N,w);break;default:throw Error(t(161))}}catch(O){Gt(n,n.return,O)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function P0(n,i,o){He=n,Pp(n)}function Pp(n,i,o){for(var c=(n.mode&1)!==0;He!==null;){var f=He,m=f.child;if(f.tag===22&&c){var w=f.memoizedState!==null||Ya;if(!w){var N=f.alternate,O=N!==null&&N.memoizedState!==null||mn;N=Ya;var ee=mn;if(Ya=w,(mn=O)&&!ee)for(He=f;He!==null;)w=He,O=w.child,w.tag===22&&w.memoizedState!==null?Np(f):O!==null?(O.return=w,He=O):Np(f);for(;m!==null;)He=m,Pp(m),m=m.sibling;He=f,Ya=N,mn=ee}Lp(n)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,He=m):Lp(n)}}function Lp(n){for(;He!==null;){var i=He;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:mn||qa(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!mn)if(o===null)c.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:li(i.type,o.memoizedProps);c.componentDidUpdate(f,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Dd(i,m,c);break;case 3:var w=i.updateQueue;if(w!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Dd(i,w,o)}break;case 5:var N=i.stateNode;if(o===null&&i.flags&4){o=N;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&o.focus();break;case"img":O.src&&(o.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ee=i.alternate;if(ee!==null){var Me=ee.memoizedState;if(Me!==null){var we=Me.dehydrated;we!==null&&vo(we)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}mn||i.flags&512&&fu(i)}catch(ye){Gt(i,i.return,ye)}}if(i===n){He=null;break}if(o=i.sibling,o!==null){o.return=i.return,He=o;break}He=i.return}}function Dp(n){for(;He!==null;){var i=He;if(i===n){He=null;break}var o=i.sibling;if(o!==null){o.return=i.return,He=o;break}He=i.return}}function Np(n){for(;He!==null;){var i=He;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{qa(4,i)}catch(O){Gt(i,o,O)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(O){Gt(i,f,O)}}var m=i.return;try{fu(i)}catch(O){Gt(i,m,O)}break;case 5:var w=i.return;try{fu(i)}catch(O){Gt(i,w,O)}}}catch(O){Gt(i,i.return,O)}if(i===n){He=null;break}var N=i.sibling;if(N!==null){N.return=i.return,He=N;break}He=i.return}}var L0=Math.ceil,Ka=A.ReactCurrentDispatcher,mu=A.ReactCurrentOwner,Zn=A.ReactCurrentBatchConfig,Et=0,rn=null,$t=null,cn=0,zn=0,Ps=lr(0),Qt=0,Vo=null,Gr=0,Za=0,gu=0,Ho=null,Dn=null,_u=0,Ls=1/0,zi=null,Qa=!1,vu=null,pr=null,Ja=!1,mr=null,el=0,Go=0,xu=null,tl=-1,nl=0;function Mn(){return(Et&6)!==0?Ae():tl!==-1?tl:tl=Ae()}function gr(n){return(n.mode&1)===0?1:(Et&2)!==0&&cn!==0?cn&-cn:p0.transition!==null?(nl===0&&(nl=yn()),nl):(n=Pt,n!==0||(n=window.event,n=n===void 0?16:Uf(n.type)),n)}function hi(n,i,o,c){if(50<Go)throw Go=0,xu=null,Error(t(185));Rn(n,o,c),((Et&2)===0||n!==rn)&&(n===rn&&((Et&2)===0&&(Za|=o),Qt===4&&_r(n,cn)),Nn(n,c),o===1&&Et===0&&(i.mode&1)===0&&(Ls=Ae()+500,Pa&&ur()))}function Nn(n,i){var o=n.callbackNode;Xn(n,i);var c=yi(n,n===rn?cn:0);if(c===0)o!==null&&ne(o),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(o!=null&&ne(o),i===1)n.tag===0?d0(Up.bind(null,n)):yd(Up.bind(null,n)),c0(function(){(Et&6)===0&&ur()}),o=null;else{switch(Cf(c)){case 1:o=We;break;case 4:o=rt;break;case 16:o=at;break;case 536870912:o=yt;break;default:o=at}o=Gp(o,Ip.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Ip(n,i){if(tl=-1,nl=0,(Et&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Ds()&&n.callbackNode!==o)return null;var c=yi(n,n===rn?cn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=il(n,c);else{i=c;var f=Et;Et|=2;var m=Op();(rn!==n||cn!==i)&&(zi=null,Ls=Ae()+500,Xr(n,i));do try{I0();break}catch(N){Fp(n,N)}while(!0);Oc(),Ka.current=m,Et=f,$t!==null?i=0:(rn=null,cn=0,i=Qt)}if(i!==0){if(i===2&&(f=Di(n),f!==0&&(c=f,i=yu(n,f))),i===1)throw o=Vo,Xr(n,0),_r(n,c),Nn(n,Ae()),o;if(i===6)_r(n,c);else{if(f=n.current.alternate,(c&30)===0&&!D0(f)&&(i=il(n,c),i===2&&(m=Di(n),m!==0&&(c=m,i=yu(n,m))),i===1))throw o=Vo,Xr(n,0),_r(n,c),Nn(n,Ae()),o;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:jr(n,Dn,zi);break;case 3:if(_r(n,c),(c&130023424)===c&&(i=_u+500-Ae(),10<i)){if(yi(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){Mn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Ac(jr.bind(null,n,Dn,zi),i);break}jr(n,Dn,zi);break;case 4:if(_r(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var w=31-ht(c);m=1<<w,w=i[w],w>f&&(f=w),c&=~m}if(c=f,c=Ae()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*L0(c/1960))-c,10<c){n.timeoutHandle=Ac(jr.bind(null,n,Dn,zi),c);break}jr(n,Dn,zi);break;case 5:jr(n,Dn,zi);break;default:throw Error(t(329))}}}return Nn(n,Ae()),n.callbackNode===o?Ip.bind(null,n):null}function yu(n,i){var o=Ho;return n.current.memoizedState.isDehydrated&&(Xr(n,i).flags|=256),n=il(n,i),n!==2&&(i=Dn,Dn=o,i!==null&&Su(i)),n}function Su(n){Dn===null?Dn=n:Dn.push.apply(Dn,n)}function D0(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var f=o[c],m=f.getSnapshot;f=f.value;try{if(!oi(m(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function _r(n,i){for(i&=~gu,i&=~Za,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-ht(i),c=1<<o;n[o]=-1,i&=~c}}function Up(n){if((Et&6)!==0)throw Error(t(327));Ds();var i=yi(n,0);if((i&1)===0)return Nn(n,Ae()),null;var o=il(n,i);if(n.tag!==0&&o===2){var c=Di(n);c!==0&&(i=c,o=yu(n,c))}if(o===1)throw o=Vo,Xr(n,0),_r(n,i),Nn(n,Ae()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,jr(n,Dn,zi),Nn(n,Ae()),null}function Mu(n,i){var o=Et;Et|=1;try{return n(i)}finally{Et=o,Et===0&&(Ls=Ae()+500,Pa&&ur())}}function Wr(n){mr!==null&&mr.tag===0&&(Et&6)===0&&Ds();var i=Et;Et|=1;var o=Zn.transition,c=Pt;try{if(Zn.transition=null,Pt=1,n)return n()}finally{Pt=c,Zn.transition=o,Et=i,(Et&6)===0&&ur()}}function Eu(){zn=Ps.current,kt(Ps)}function Xr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,l0(o)),$t!==null)for(o=$t.return;o!==null;){var c=o;switch(Dc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ra();break;case 3:Cs(),kt(bn),kt(fn),Xc();break;case 5:Gc(c);break;case 4:Cs();break;case 13:kt(Vt);break;case 19:kt(Vt);break;case 10:kc(c.type._context);break;case 22:case 23:Eu()}o=o.return}if(rn=n,$t=n=vr(n.current,null),cn=zn=i,Qt=0,Vo=null,gu=Za=Gr=0,Dn=Ho=null,zr!==null){for(i=0;i<zr.length;i++)if(o=zr[i],c=o.interleaved,c!==null){o.interleaved=null;var f=c.next,m=o.pending;if(m!==null){var w=m.next;m.next=f,c.next=w}o.pending=c}zr=null}return n}function Fp(n,i){do{var o=$t;try{if(Oc(),za.current=Wa,Va){for(var c=Ht.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Va=!1}if(Hr=0,nn=Zt=Ht=null,Uo=!1,Fo=0,mu.current=null,o===null||o.return===null){Qt=1,Vo=i,$t=null;break}e:{var m=n,w=o.return,N=o,O=i;if(i=cn,N.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var ee=O,Me=N,we=Me.tag;if((Me.mode&1)===0&&(we===0||we===11||we===15)){var ye=Me.alternate;ye?(Me.updateQueue=ye.updateQueue,Me.memoizedState=ye.memoizedState,Me.lanes=ye.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var ke=ap(w);if(ke!==null){ke.flags&=-257,lp(ke,w,N,m,i),ke.mode&1&&op(m,ee,i),i=ke,O=ee;var Ge=i.updateQueue;if(Ge===null){var Xe=new Set;Xe.add(O),i.updateQueue=Xe}else Ge.add(O);break e}else{if((i&1)===0){op(m,ee,i),wu();break e}O=Error(t(426))}}else if(Bt&&N.mode&1){var Xt=ap(w);if(Xt!==null){(Xt.flags&65536)===0&&(Xt.flags|=256),lp(Xt,w,N,m,i),Uc(Rs(O,N));break e}}m=O=Rs(O,N),Qt!==4&&(Qt=2),Ho===null?Ho=[m]:Ho.push(m),m=w;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var q=rp(m,O,i);Ld(m,q);break e;case 1:N=O;var V=m.type,K=m.stateNode;if((m.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(pr===null||!pr.has(K)))){m.flags|=65536,i&=-i,m.lanes|=i;var Ce=sp(m,N,i);Ld(m,Ce);break e}}m=m.return}while(m!==null)}Bp(o)}catch(qe){i=qe,$t===o&&o!==null&&($t=o=o.return);continue}break}while(!0)}function Op(){var n=Ka.current;return Ka.current=Wa,n===null?Wa:n}function wu(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),rn===null||(Gr&268435455)===0&&(Za&268435455)===0||_r(rn,cn)}function il(n,i){var o=Et;Et|=2;var c=Op();(rn!==n||cn!==i)&&(zi=null,Xr(n,i));do try{N0();break}catch(f){Fp(n,f)}while(!0);if(Oc(),Et=o,Ka.current=c,$t!==null)throw Error(t(261));return rn=null,cn=0,Qt}function N0(){for(;$t!==null;)kp($t)}function I0(){for(;$t!==null&&!$();)kp($t)}function kp(n){var i=Hp(n.alternate,n,zn);n.memoizedProps=n.pendingProps,i===null?Bp(n):$t=i,mu.current=null}function Bp(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=A0(o,i,zn),o!==null){$t=o;return}}else{if(o=C0(o,i),o!==null){o.flags&=32767,$t=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Qt=6,$t=null;return}}if(i=i.sibling,i!==null){$t=i;return}$t=i=n}while(i!==null);Qt===0&&(Qt=5)}function jr(n,i,o){var c=Pt,f=Zn.transition;try{Zn.transition=null,Pt=1,U0(n,i,o,c)}finally{Zn.transition=f,Pt=c}return null}function U0(n,i,o,c){do Ds();while(mr!==null);if((Et&6)!==0)throw Error(t(327));o=n.finishedWork;var f=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(ha(n,m),n===rn&&($t=rn=null,cn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ja||(Ja=!0,Gp(at,function(){return Ds(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=Zn.transition,Zn.transition=null;var w=Pt;Pt=1;var N=Et;Et|=4,mu.current=null,b0(n,o),bp(o,n),t0(wc),pa=!!Ec,wc=Ec=null,n.current=o,P0(o),Re(),Et=N,Pt=w,Zn.transition=m}else n.current=o;if(Ja&&(Ja=!1,mr=n,el=f),m=n.pendingLanes,m===0&&(pr=null),un(o.stateNode),Nn(n,Ae()),i!==null)for(c=n.onRecoverableError,o=0;o<i.length;o++)f=i[o],c(f.value,{componentStack:f.stack,digest:f.digest});if(Qa)throw Qa=!1,n=vu,vu=null,n;return(el&1)!==0&&n.tag!==0&&Ds(),m=n.pendingLanes,(m&1)!==0?n===xu?Go++:(Go=0,xu=n):Go=0,ur(),null}function Ds(){if(mr!==null){var n=Cf(el),i=Zn.transition,o=Pt;try{if(Zn.transition=null,Pt=16>n?16:n,mr===null)var c=!1;else{if(n=mr,mr=null,el=0,(Et&6)!==0)throw Error(t(331));var f=Et;for(Et|=4,He=n.current;He!==null;){var m=He,w=m.child;if((He.flags&16)!==0){var N=m.deletions;if(N!==null){for(var O=0;O<N.length;O++){var ee=N[O];for(He=ee;He!==null;){var Me=He;switch(Me.tag){case 0:case 11:case 15:zo(8,Me,m)}var we=Me.child;if(we!==null)we.return=Me,He=we;else for(;He!==null;){Me=He;var ye=Me.sibling,ke=Me.return;if(wp(Me),Me===ee){He=null;break}if(ye!==null){ye.return=ke,He=ye;break}He=ke}}}var Ge=m.alternate;if(Ge!==null){var Xe=Ge.child;if(Xe!==null){Ge.child=null;do{var Xt=Xe.sibling;Xe.sibling=null,Xe=Xt}while(Xe!==null)}}He=m}}if((m.subtreeFlags&2064)!==0&&w!==null)w.return=m,He=w;else e:for(;He!==null;){if(m=He,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:zo(9,m,m.return)}var q=m.sibling;if(q!==null){q.return=m.return,He=q;break e}He=m.return}}var V=n.current;for(He=V;He!==null;){w=He;var K=w.child;if((w.subtreeFlags&2064)!==0&&K!==null)K.return=w,He=K;else e:for(w=V;He!==null;){if(N=He,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:qa(9,N)}}catch(qe){Gt(N,N.return,qe)}if(N===w){He=null;break e}var Ce=N.sibling;if(Ce!==null){Ce.return=N.return,He=Ce;break e}He=N.return}}if(Et=f,ur(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(bt,n)}catch{}c=!0}return c}finally{Pt=o,Zn.transition=i}}return!1}function zp(n,i,o){i=Rs(o,i),i=rp(n,i,1),n=fr(n,i,1),i=Mn(),n!==null&&(Rn(n,1,i),Nn(n,i))}function Gt(n,i,o){if(n.tag===3)zp(n,n,o);else for(;i!==null;){if(i.tag===3){zp(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(pr===null||!pr.has(c))){n=Rs(o,n),n=sp(i,n,1),i=fr(i,n,1),n=Mn(),i!==null&&(Rn(i,1,n),Nn(i,n));break}}i=i.return}}function F0(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),i=Mn(),n.pingedLanes|=n.suspendedLanes&o,rn===n&&(cn&o)===o&&(Qt===4||Qt===3&&(cn&130023424)===cn&&500>Ae()-_u?Xr(n,0):gu|=o),Nn(n,i)}function Vp(n,i){i===0&&((n.mode&1)===0?i=1:(i=si,si<<=1,(si&130023424)===0&&(si=4194304)));var o=Mn();n=Oi(n,i),n!==null&&(Rn(n,i,o),Nn(n,o))}function O0(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Vp(n,o)}function k0(n,i){var o=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Vp(n,o)}var Hp;Hp=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||bn.current)Ln=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Ln=!1,T0(n,i,o);Ln=(n.flags&131072)!==0}else Ln=!1,Bt&&(i.flags&1048576)!==0&&Sd(i,Da,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;$a(n,i),n=i.pendingProps;var f=ys(i,fn.current);As(i,o),f=Yc(null,i,c,n,f,o);var m=qc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Pn(c)?(m=!0,ba(i)):m=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Vc(i),f.updater=Xa,i.stateNode=f,f._reactInternals=i,tu(i,c,n,o),i=su(null,i,c,!0,m,o)):(i.tag=0,Bt&&m&&Lc(i),Sn(null,i,f,o),i=i.child),i;case 16:c=i.elementType;e:{switch($a(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=z0(c),n=li(c,n),f){case 0:i=ru(null,i,c,n,o);break e;case 1:i=pp(null,i,c,n,o);break e;case 11:i=cp(null,i,c,n,o);break e;case 14:i=up(null,i,c,li(c.type,n),o);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:li(c,f),ru(n,i,c,f,o);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:li(c,f),pp(n,i,c,f,o);case 3:e:{if(mp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,f=m.element,Pd(n,i),ka(i,c,null,o);var w=i.memoizedState;if(c=w.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){f=Rs(Error(t(423)),i),i=gp(n,i,c,o,f);break e}else if(c!==f){f=Rs(Error(t(424)),i),i=gp(n,i,c,o,f);break e}else for(Bn=ar(i.stateNode.containerInfo.firstChild),kn=i,Bt=!0,ai=null,o=Rd(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Es(),c===f){i=Bi(n,i,o);break e}Sn(n,i,c,o)}i=i.child}return i;case 5:return Nd(i),n===null&&Ic(i),c=i.type,f=i.pendingProps,m=n!==null?n.memoizedProps:null,w=f.children,Tc(c,f)?w=null:m!==null&&Tc(c,m)&&(i.flags|=32),dp(n,i),Sn(n,i,w,o),i.child;case 6:return n===null&&Ic(i),null;case 13:return _p(n,i,o);case 4:return Hc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=ws(i,null,c,o):Sn(n,i,c,o),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:li(c,f),cp(n,i,c,f,o);case 7:return Sn(n,i,i.pendingProps,o),i.child;case 8:return Sn(n,i,i.pendingProps.children,o),i.child;case 12:return Sn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,m=i.memoizedProps,w=f.value,Ut(Ua,c._currentValue),c._currentValue=w,m!==null)if(oi(m.value,w)){if(m.children===f.children&&!bn.current){i=Bi(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var N=m.dependencies;if(N!==null){w=m.child;for(var O=N.firstContext;O!==null;){if(O.context===c){if(m.tag===1){O=ki(-1,o&-o),O.tag=2;var ee=m.updateQueue;if(ee!==null){ee=ee.shared;var Me=ee.pending;Me===null?O.next=O:(O.next=Me.next,Me.next=O),ee.pending=O}}m.lanes|=o,O=m.alternate,O!==null&&(O.lanes|=o),Bc(m.return,o,i),N.lanes|=o;break}O=O.next}}else if(m.tag===10)w=m.type===i.type?null:m.child;else if(m.tag===18){if(w=m.return,w===null)throw Error(t(341));w.lanes|=o,N=w.alternate,N!==null&&(N.lanes|=o),Bc(w,o,i),w=m.sibling}else w=m.child;if(w!==null)w.return=m;else for(w=m;w!==null;){if(w===i){w=null;break}if(m=w.sibling,m!==null){m.return=w.return,w=m;break}w=w.return}m=w}Sn(n,i,f.children,o),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,As(i,o),f=qn(f),c=c(f),i.flags|=1,Sn(n,i,c,o),i.child;case 14:return c=i.type,f=li(c,i.pendingProps),f=li(c.type,f),up(n,i,c,f,o);case 15:return hp(n,i,i.type,i.pendingProps,o);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:li(c,f),$a(n,i),i.tag=1,Pn(c)?(n=!0,ba(i)):n=!1,As(i,o),np(i,c,f),tu(i,c,f,o),su(null,i,c,!0,n,o);case 19:return xp(n,i,o);case 22:return fp(n,i,o)}throw Error(t(156,i.tag))};function Gp(n,i){return te(n,i)}function B0(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(n,i,o,c){return new B0(n,i,o,c)}function Tu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function z0(n){if(typeof n=="function")return Tu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===oe)return 11;if(n===me)return 14}return 2}function vr(n,i){var o=n.alternate;return o===null?(o=Qn(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function rl(n,i,o,c,f,m){var w=2;if(c=n,typeof n=="function")Tu(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case I:return $r(o.children,f,m,i);case B:w=8,f|=8;break;case L:return n=Qn(12,o,i,f|2),n.elementType=L,n.lanes=m,n;case J:return n=Qn(13,o,i,f),n.elementType=J,n.lanes=m,n;case pe:return n=Qn(19,o,i,f),n.elementType=pe,n.lanes=m,n;case ce:return sl(o,f,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:w=10;break e;case k:w=9;break e;case oe:w=11;break e;case me:w=14;break e;case ue:w=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Qn(w,o,i,f),i.elementType=n,i.type=c,i.lanes=m,i}function $r(n,i,o,c){return n=Qn(7,n,c,i),n.lanes=o,n}function sl(n,i,o,c){return n=Qn(22,n,c,i),n.elementType=ce,n.lanes=o,n.stateNode={isHidden:!1},n}function Au(n,i,o){return n=Qn(6,n,null,i),n.lanes=o,n}function Cu(n,i,o){return i=Qn(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function V0(n,i,o,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jn(0),this.expirationTimes=jn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jn(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Ru(n,i,o,c,f,m,w,N,O){return n=new V0(n,i,o,N,O),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Qn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vc(m),n}function H0(n,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:c==null?null:""+c,children:n,containerInfo:i,implementation:o}}function Wp(n){if(!n)return cr;n=n._reactInternals;e:{if(xi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Pn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Pn(o))return vd(n,o,i)}return i}function Xp(n,i,o,c,f,m,w,N,O){return n=Ru(o,c,!0,n,f,m,w,N,O),n.context=Wp(null),o=n.current,c=Mn(),f=gr(o),m=ki(c,f),m.callback=i??null,fr(o,m,f),n.current.lanes=f,Rn(n,f,c),Nn(n,c),n}function ol(n,i,o,c){var f=i.current,m=Mn(),w=gr(f);return o=Wp(o),i.context===null?i.context=o:i.pendingContext=o,i=ki(m,w),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=fr(f,i,w),n!==null&&(hi(n,f,w,m),Oa(n,f,w)),w}function al(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function jp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function bu(n,i){jp(n,i),(n=n.alternate)&&jp(n,i)}function G0(){return null}var $p=typeof reportError=="function"?reportError:function(n){console.error(n)};function Pu(n){this._internalRoot=n}ll.prototype.render=Pu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ol(n,i,null,null)},ll.prototype.unmount=Pu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Wr(function(){ol(null,n,null,null)}),i[Ni]=null}};function ll(n){this._internalRoot=n}ll.prototype.unstable_scheduleHydration=function(n){if(n){var i=Pf();n={blockedOn:null,target:n,priority:i};for(var o=0;o<rr.length&&i!==0&&i<rr[o].priority;o++);rr.splice(o,0,n),o===0&&Nf(n)}};function Lu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function cl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Yp(){}function W0(n,i,o,c,f){if(f){if(typeof c=="function"){var m=c;c=function(){var ee=al(w);m.call(ee)}}var w=Xp(i,c,n,0,null,!1,!1,"",Yp);return n._reactRootContainer=w,n[Ni]=w.current,Co(n.nodeType===8?n.parentNode:n),Wr(),w}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var N=c;c=function(){var ee=al(O);N.call(ee)}}var O=Ru(n,0,!1,null,null,!1,!1,"",Yp);return n._reactRootContainer=O,n[Ni]=O.current,Co(n.nodeType===8?n.parentNode:n),Wr(function(){ol(i,O,o,c)}),O}function ul(n,i,o,c,f){var m=o._reactRootContainer;if(m){var w=m;if(typeof f=="function"){var N=f;f=function(){var O=al(w);N.call(O)}}ol(i,w,n,f)}else w=W0(o,i,n,f,c);return al(w)}Rf=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=Kt(i.pendingLanes);o!==0&&(tc(i,o|1),Nn(i,Ae()),(Et&6)===0&&(Ls=Ae()+500,ur()))}break;case 13:Wr(function(){var c=Oi(n,1);if(c!==null){var f=Mn();hi(c,n,1,f)}}),bu(n,1)}},nc=function(n){if(n.tag===13){var i=Oi(n,134217728);if(i!==null){var o=Mn();hi(i,n,134217728,o)}bu(n,134217728)}},bf=function(n){if(n.tag===13){var i=gr(n),o=Oi(n,i);if(o!==null){var c=Mn();hi(o,n,i,c)}bu(n,i)}},Pf=function(){return Pt},Lf=function(n,i){var o=Pt;try{return Pt=n,i()}finally{Pt=o}},Le=function(n,i,o){switch(i){case"input":if(ot(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var f=Ca(c);if(!f)throw Error(t(90));gt(c),ot(c,f)}}}break;case"textarea":_e(n,o);break;case"select":i=o.value,i!=null&&D(n,!!o.multiple,i,!1)}},Ft=Mu,qt=Wr;var X0={usingClientEntryPoint:!1,Events:[Po,vs,Ca,Ie,ct,Mu]},Wo={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},j0={bundleType:Wo.bundleType,version:Wo.version,rendererPackageName:Wo.rendererPackageName,rendererConfig:Wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=R(n),n===null?null:n.stateNode},findFiberByHostInstance:Wo.findFiberByHostInstance||G0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hl.isDisabled&&hl.supportsFiber)try{bt=hl.inject(j0),vt=hl}catch{}}return In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X0,In.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lu(i))throw Error(t(200));return H0(n,i,null,o)},In.createRoot=function(n,i){if(!Lu(n))throw Error(t(299));var o=!1,c="",f=$p;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Ru(n,1,!1,null,null,o,!1,c,f),n[Ni]=i.current,Co(n.nodeType===8?n.parentNode:n),new Pu(i)},In.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=R(i),n=n===null?null:n.stateNode,n},In.flushSync=function(n){return Wr(n)},In.hydrate=function(n,i,o){if(!cl(i))throw Error(t(200));return ul(null,n,i,!0,o)},In.hydrateRoot=function(n,i,o){if(!Lu(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,f=!1,m="",w=$p;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(w=o.onRecoverableError)),i=Xp(i,null,n,1,o??null,f,!1,m,w),n[Ni]=i.current,Co(n),c)for(n=0;n<c.length;n++)o=c[n],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new ll(i)},In.render=function(n,i,o){if(!cl(i))throw Error(t(200));return ul(null,n,i,!1,o)},In.unmountComponentAtNode=function(n){if(!cl(n))throw Error(t(40));return n._reactRootContainer?(Wr(function(){ul(null,null,n,!1,function(){n._reactRootContainer=null,n[Ni]=null})}),!0):!1},In.unstable_batchedUpdates=Mu,In.unstable_renderSubtreeIntoContainer=function(n,i,o,c){if(!cl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ul(n,i,o,!1,c)},In.version="18.3.1-next-f1338f8080-20240426",In}var nm;function ev(){if(nm)return Iu.exports;nm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Iu.exports=J0(),Iu.exports}var im;function tv(){if(im)return fl;im=1;var s=ev();return fl.createRoot=s.createRoot,fl.hydrateRoot=s.hydrateRoot,fl}var nv=tv();const iv="L01",rv="Khởi động",sv="simple",ov="Màn cơ bản: chỉ có sàn, ô trống và lỗ đích.",av=["###.......","#S####....","######....",".#######..","...######.","......##G#"],lv={id:iv,name:rv,group:sv,desc:ov,grid:av},cv="L02",uv="Đường uốn lượn",hv="simple",fv="Đường đi dài hơn, nhiều ô trống buộc khối phải đổi tư thế liên tục.",dv=["S###........","####........","..####......","..#########.","......#####.","........###G"],pv={id:cv,name:uv,group:hv,desc:fv,grid:dv},mv="L03",gv="Cầu mỏng",_v="fragile",vv="Hành lang gạch dễ vỡ: chỉ được nằm trên gạch cam, không được đứng.",xv=["###.........","#SFF#FF#FFG#","###........."],yv={id:mv,name:gv,group:_v,desc:vv,grid:xv},Sv="L04",Mv="Chọn đường",Ev="fragile",wv="Đường tắt qua gạch dễ vỡ (ít nước nhưng tốn chi phí) hoặc đường vòng an toàn.",Tv=["............","#SFF#FF#FFG#","############","############"],Av={id:Sv,name:Mv,group:Ev,desc:wv,grid:Tv},Cv="L05",Rv="Công tắc mềm",bv="switch",Pv="Chạm vào công tắc tròn để mở vĩnh viễn cây cầu.",Lv=["######........","#S###oBBB#####","######...##G##"],Dv=[{id:"A",pos:[1,6],open:!1},{id:"A",pos:[1,7],open:!1},{id:"A",pos:[1,8],open:!1}],Nv=[{pos:[1,5],targets:["A"],mode:"open"}],Iv={id:Cv,name:Rv,group:bv,desc:Pv,grid:Lv,bridges:Dv,switches:Nv},Uv="L06",Fv="Công tắc nặng",Ov="switch",kv="Công tắc chữ X chỉ nhận khi khối đứng thẳng; mỗi lần nhận sẽ đảo trạng thái cầu.",Bv=["#######......","#S##x#BBBBG##","#######......"],zv=[{id:"A",pos:[1,6],open:!1},{id:"A",pos:[1,7],open:!1},{id:"A",pos:[1,8],open:!1},{id:"A",pos:[1,9],open:!1}],Vv=[{pos:[1,4],targets:["A"],mode:"toggle"}],Hv={id:Uv,name:Fv,group:Ov,desc:kv,grid:Bv,bridges:zv,switches:Vv},Gv="L07",Wv="Tách đôi",Xv="split",jv="Đứng lên công tắc ngoặc để tách khối làm hai, rồi ghép lại ở chỗ khác.",$v=["########....","#S##p###....","############","#########G##","############"],Yv=[{pos:[1,4],split_to:[[0,6],[4,1]]}],qv={id:Gv,name:Wv,group:Xv,desc:jv,grid:$v,switches:Yv},Kv="L08",Zv="Hai khối, một cây cầu",Qv="combined",Jv="Hành lang gạch vỡ cuối có công tắc: chỉ khối nhỏ mới đi qua được để mở cầu.",ex=["######.......","#S#p##FFFo...","######.......","######BBB####","######...##G#"],tx=[{id:"A",pos:[3,6],open:!1},{id:"A",pos:[3,7],open:!1},{id:"A",pos:[3,8],open:!1}],nx=[{pos:[1,3],split_to:[[0,2],[4,2]]},{pos:[1,9],targets:["A"],mode:"open"}],ix={id:Kv,name:Zv,group:Qv,desc:Jv,grid:ex,bridges:tx,switches:nx},rx="L09",sx="Hai chặng",ox="combined",ax="Công tắc nặng đảo cầu A, công tắc mềm mở cầu B, xen kẽ gạch dễ vỡ.",lx=["S#####BBB####BBB###","#x####BBB##o#BBB##G","###FF#BBB####BBB###"],cx=[{id:"A",pos:[0,6],open:!1},{id:"A",pos:[0,7],open:!1},{id:"A",pos:[0,8],open:!1},{id:"A",pos:[1,6],open:!1},{id:"A",pos:[1,7],open:!1},{id:"A",pos:[1,8],open:!1},{id:"A",pos:[2,6],open:!1},{id:"A",pos:[2,7],open:!1},{id:"A",pos:[2,8],open:!1},{id:"B",pos:[0,13],open:!1},{id:"B",pos:[0,14],open:!1},{id:"B",pos:[0,15],open:!1},{id:"B",pos:[1,13],open:!1},{id:"B",pos:[1,14],open:!1},{id:"B",pos:[1,15],open:!1},{id:"B",pos:[2,13],open:!1},{id:"B",pos:[2,14],open:!1},{id:"B",pos:[2,15],open:!1}],ux=[{pos:[1,1],targets:["A"],mode:"toggle"},{pos:[1,11],targets:["B"],mode:"open"}],hx={id:rx,name:sx,group:ox,desc:ax,grid:lx,bridges:cx,switches:ux},fx="L10",dx="Mê cung nhỏ",px="simple",mx="Nhiều ngõ cụt, cần lên kế hoạch trước khi lăn.",gx=["S#####......","######..####","##..####.###","##..#######.",".#######..##",".###..######","..##..###G##"],_x={id:fx,name:dx,group:px,desc:mx,grid:gx},vx="L11",xx="Hành lang đôi",yx="fragile",Sx="Hành lang gạch vỡ rộng hai ô: chỉ khối nằm dọc mới băng qua được.",Mx=["S####.....####","#####FFFFF####","#####FFFFF##G#"],Ex={id:vx,name:xx,group:yx,desc:Sx,grid:Mx},wx="L12",Tx="Bẫy công tắc",Ax="switch",Cx="Một công tắc mở cầu, công tắc kia đóng cầu lại. Đừng chạm nhầm.",Rx=["#######BBB####","#S#o#o#BBB#G##","#######BBB####"],bx=[{id:"A",pos:[0,7],open:!1},{id:"A",pos:[0,8],open:!1},{id:"A",pos:[0,9],open:!1},{id:"A",pos:[1,7],open:!1},{id:"A",pos:[1,8],open:!1},{id:"A",pos:[1,9],open:!1},{id:"A",pos:[2,7],open:!1},{id:"A",pos:[2,8],open:!1},{id:"A",pos:[2,9],open:!1}],Px=[{pos:[1,3],targets:["A"],mode:"open"},{pos:[1,5],targets:["A"],mode:"close"}],Lx={id:wx,name:Tx,group:Ax,desc:Cx,grid:Rx,bridges:bx,switches:Px},Dx="L13",Nx="Hai bờ",Ix="split",Ux="Tách khối, một nửa sang bờ bên kia bấm công tắc mở cầu, rồi ghép lại.",Fx=["#####..######","#S#p#BB#o####","#####BB###G##","#####..######"],Ox=[{id:"A",pos:[1,5],open:!1},{id:"A",pos:[1,6],open:!1},{id:"A",pos:[2,5],open:!1},{id:"A",pos:[2,6],open:!1}],kx=[{pos:[1,3],split_to:[[0,2],[3,9]]},{pos:[1,8],targets:["A"],mode:"open"}],Bx={id:Dx,name:Nx,group:Ix,desc:Ux,grid:Fx,bridges:Ox,switches:kx},zx="L14",Vx="Bước từng nhịp",Hx="combined",Gx="Đứng đúng ô trên hành lang gạch vỡ để nhấn công tắc nặng và hạ cầu.",Wx=["#####.....####","#SFF#FFxFF#BBG","#####.....####"],Xx=[{id:"B",pos:[1,11],open:!1},{id:"B",pos:[1,12],open:!1}],jx=[{pos:[1,7],targets:["B"],mode:"toggle"}],$x={id:zx,name:Vx,group:Hx,desc:Gx,grid:Wx,bridges:Xx,switches:jx},Yx="L15",qx="Tổng hợp cuối",Kx="combined",Zx="Tách khối, khối nhỏ băng qua gạch vỡ mở cầu A, ghép lại rồi đứng lên công tắc nặng để hạ cầu B.",Qx=["S#####............","######............","##p###FFFo###.....","######BBB####BB###","######BBB##x#BB#G#","######...####..###"],Jx=[{id:"A",pos:[3,6],open:!1},{id:"A",pos:[3,7],open:!1},{id:"A",pos:[3,8],open:!1},{id:"B",pos:[3,13],open:!1},{id:"B",pos:[3,14],open:!1},{id:"A",pos:[4,6],open:!1},{id:"A",pos:[4,7],open:!1},{id:"A",pos:[4,8],open:!1},{id:"B",pos:[4,13],open:!1},{id:"B",pos:[4,14],open:!1}],ey=[{pos:[2,2],split_to:[[5,5],[0,5]]},{pos:[2,9],targets:["A"],mode:"open"},{pos:[4,11],targets:["B"],mode:"toggle"}],ty={id:Yx,name:qx,group:Kx,desc:Zx,grid:Qx,bridges:Jx,switches:ey},ny="L16",iy="Ba nhịp cầu",ry="expert",sy="Ba cây cầu hẹp nối bốn phòng; công tắc nặng ở phòng hai, công tắc mềm ở hai đầu.",oy=["S####...#####...#####...#####","#####...#####...#####...#####","#####...#####...#####...#####","#####...#####...#####...#####","#####BBB##x##BBB#####BBB#####","#####...#####...#####...#####","#####...#####...#####...#####","#o###...#####...#o###...#####","#####...#####...#####...###G#"],ay=[{id:"A",pos:[4,5],open:!1},{id:"A",pos:[4,6],open:!1},{id:"A",pos:[4,7],open:!1},{id:"B",pos:[4,13],open:!1},{id:"B",pos:[4,14],open:!1},{id:"B",pos:[4,15],open:!1},{id:"C",pos:[4,21],open:!1},{id:"C",pos:[4,22],open:!1},{id:"C",pos:[4,23],open:!1}],ly=[{pos:[7,1],targets:["A"],mode:"open"},{pos:[4,10],targets:["B"],mode:"open"},{pos:[7,17],targets:["C"],mode:"open"}],cy={id:ny,name:iy,group:ry,desc:sy,grid:oy,bridges:ay,switches:ly},uy="L17",hy="Vòng tách",fy="expert",dy="Tách khối ở phòng trái, hai khối nhỏ vòng qua bức tường giữa để gặp nhau, rồi băng hai cây cầu.",py=["S################...#####...#####","#################...#####...#####","#################...#####...#####","#################...#####...#####","######..........oBBB##x##BBB#####","#################...#####...#####","#################...#####...#####","#################...#####...#####","###p#############...#####...####G"],my=[{id:"B",pos:[4,17],open:!1},{id:"B",pos:[4,18],open:!1},{id:"B",pos:[4,19],open:!1},{id:"C",pos:[4,25],open:!1},{id:"C",pos:[4,26],open:!1},{id:"C",pos:[4,27],open:!1}],gy=[{pos:[8,3],split_to:[[0,8],[8,8]]},{pos:[4,16],targets:["B"],mode:"open"},{pos:[4,22],targets:["C"],mode:"open"}],_y={id:uy,name:hy,group:fy,desc:dy,grid:py,bridges:my,switches:gy},vy="L18",xy="Bốn nhịp cầu",yy="expert",Sy="Chuỗi năm phòng với bốn cây cầu hẹp; hai công tắc nặng buộc khối phải đứng thẳng đúng chỗ.",My=["S####...#####...#####...#####...#####","#####...#####...#####...#####...#####","#####...#####...#####...#####...#####","#####...#####...#####...#####...#####","#####BBB##x##BBB#####BBB##x##BBB#####","#####...#####...#####...#####...#####","#####...#####...#####...#####...#####","#####...#####...#####...#####...#####","#o###...#####...#o###...#####...####G"],Ey=[{id:"A",pos:[4,5],open:!1},{id:"A",pos:[4,6],open:!1},{id:"A",pos:[4,7],open:!1},{id:"B",pos:[4,13],open:!1},{id:"B",pos:[4,14],open:!1},{id:"B",pos:[4,15],open:!1},{id:"C",pos:[4,21],open:!1},{id:"C",pos:[4,22],open:!1},{id:"C",pos:[4,23],open:!1},{id:"D",pos:[4,29],open:!1},{id:"D",pos:[4,30],open:!1},{id:"D",pos:[4,31],open:!1}],wy=[{pos:[8,1],targets:["A"],mode:"open"},{pos:[4,10],targets:["B"],mode:"open"},{pos:[8,17],targets:["C"],mode:"open"},{pos:[4,26],targets:["D"],mode:"open"}],Ty={id:vy,name:xy,group:yy,desc:Sy,grid:My,bridges:Ey,switches:wy},Ay="L19",Cy="Xoắn ốc",Ry="expert",by="Đường rắn nhiều khúc, một hốc tối chứa công tắc nặng mở cây cầu giữa đường; vài viên gạch dễ vỡ.",Py=["S##########..","#F#########..","#x#.....#####","........#####","#############","###..........","###..........","###########..","BBB########..","###..........","###..........","#############","........#####","........#####","##########G.."],Ly=[{id:"B",pos:[8,0],open:!1},{id:"B",pos:[8,1],open:!1},{id:"B",pos:[8,2],open:!1}],Dy=[{pos:[2,1],targets:["B"],mode:"toggle"}],Ny={id:Ay,name:Cy,group:Ry,desc:by,grid:Py,bridges:Ly,switches:Dy},Iy="L20",Uy="Vòng cung",Fy="expert",Oy="Ba cây cầu xếp thành chữ U; công tắc mềm mở hai nhịp đầu, công tắc nặng mở nhịp cuối.",ky=["S#####.....#####G","######.....######","######.....######","######.....######","####o#.....######",".BBBB......BBBB..","######.....###x##","######.....######","######BBBBB######","######.....######","###o##.....######"],By=[{id:"A",pos:[5,1],open:!1},{id:"A",pos:[5,2],open:!1},{id:"A",pos:[5,3],open:!1},{id:"A",pos:[5,4],open:!1},{id:"B",pos:[8,6],open:!1},{id:"B",pos:[8,7],open:!1},{id:"B",pos:[8,8],open:!1},{id:"B",pos:[8,9],open:!1},{id:"B",pos:[8,10],open:!1},{id:"C",pos:[5,11],open:!1},{id:"C",pos:[5,12],open:!1},{id:"C",pos:[5,13],open:!1},{id:"C",pos:[5,14],open:!1}],zy=[{pos:[4,4],targets:["A"],mode:"open"},{pos:[10,3],targets:["B"],mode:"open"},{pos:[6,14],targets:["C"],mode:"open"}],Vy={id:Iy,name:Uy,group:Fy,desc:Oy,grid:ky,bridges:By,switches:zy},Hy="L21",Gy="Tối hậu",Wy="expert",Xy="Tách khối, ghép lại, rồi vượt ba cây cầu với công tắc mềm và nặng xen kẽ.",jy=["S################...#####...#####...#####","#################...#####...#####...#####","#################...#####...#####...#####","#################...#####...#####...#####","######..........oBBB##x##BBB#####BBB#####","#################...#####...#####...#####","#################...#####...#####...#####","#################...#####...#####...#####","###p#############...#####...#o###...####G"],$y=[{id:"B",pos:[4,17],open:!1},{id:"B",pos:[4,18],open:!1},{id:"B",pos:[4,19],open:!1},{id:"C",pos:[4,25],open:!1},{id:"C",pos:[4,26],open:!1},{id:"C",pos:[4,27],open:!1},{id:"D",pos:[4,33],open:!1},{id:"D",pos:[4,34],open:!1},{id:"D",pos:[4,35],open:!1}],Yy=[{pos:[8,3],split_to:[[0,8],[8,8]]},{pos:[4,16],targets:["B"],mode:"open"},{pos:[4,22],targets:["C"],mode:"open"},{pos:[8,29],targets:["D"],mode:"open"}],qy={id:Hy,name:Gy,group:Wy,desc:Xy,grid:jy,bridges:$y,switches:Yy};var dt=cf();const Ky={U:[-1,0],D:[1,0],L:[0,-1],R:[0,1]},Zy=2,yr=(s,e)=>`${s},${e}`;function Qy(s,e,t,r){return s==="S"?r==="U"?["V",e-2,t]:r==="D"?["V",e+1,t]:r==="L"?["H",e,t-2]:["H",e,t+1]:s==="H"?r==="U"?["H",e-1,t]:r==="D"?["H",e+1,t]:r==="L"?["S",e,t-1]:["S",e,t+2]:r==="U"?["S",e-1,t]:r==="D"?["S",e+2,t]:r==="L"?["V",e,t-1]:["V",e,t+1]}function _h(s,e,t){return s==="S"?[[e,t]]:s==="H"?[[e,t],[e,t+1]]:[[e,t],[e+1,t]]}class rm{constructor(e){this.data=e,this.tiles=[],this.switches=new Map,this.bridgeList=[],this.bridgeBit=new Map,this.start=[0,0],this.goal=[0,0];const t=e.grid;if(!t.length)throw new Error("Man choi khong co luoi");this.rows=t.length,this.cols=Math.max(...t.map(d=>d.length));const r=new Map;let a=0;(e.bridges??[]).forEach((d,p)=>{this.bridgeBit.set(yr(d.pos[0],d.pos[1]),p),r.set(d.id,(r.get(d.id)??0)|1<<p),this.bridgeList.push({id:d.id,r:d.pos[0],c:d.pos[1],bit:p,open:!!d.open}),d.open&&(a|=1<<p)});const l=new Map((e.switches??[]).map(d=>[yr(d.pos[0],d.pos[1]),d]));let u=0,h=0;for(let d=0;d<this.rows;d++){const p=[];for(let g=0;g<this.cols;g++){let y=t[d][g]??".";if(y==="S")this.start=[d,g],u+=1,y="#";else if(y==="G")this.goal=[d,g],h+=1;else if(y==="o"||y==="x"||y==="p"){const v=l.get(yr(d,g));if(!v)throw new Error(`Thieu cau hinh cong tac tai (${d},${g})`);if(v.mode&&!["toggle","open","close"].includes(v.mode))throw new Error(`Kieu cong tac la: ${v.mode}`);let S=0;for(const M of v.targets??[]){if(!r.has(M))throw new Error(`Cau "${M}" chua khai bao tai (${d},${g})`);S|=r.get(M)}const E=v.split_to??[];if(y==="p"){if(E.length!==2)throw new Error(`Cong tac tach (${d},${g}) can dung 2 vi tri split_to`);if(new Set(E.map(M=>yr(M[0],M[1]))).size!==2)throw new Error(`Hai vi tri split_to tai (${d},${g}) phai khac nhau`);for(const[M,x]of E)if(M<0||x<0||M>=this.rows||x>=this.cols)throw new Error(`Vi tri split_to khong hop le tai (${d},${g})`)}this.switches.set(yr(d,g),{type:y==="o"?"soft":y==="x"?"heavy":"split",mask:S,mode:v.mode??"toggle",splitTo:E,targets:v.targets??[]}),y="#"}else if(y==="B"){if(!this.bridgeBit.has(yr(d,g)))throw new Error(`O cau (${d},${g}) chua khai bao`)}else if(!".#F".includes(y))throw new Error(`Ky hieu la '${y}' tai (${d},${g})`);p.push(y)}this.tiles.push(p)}if(u!==1||h!==1)throw new Error("Man choi can co dung mot 'S' va mot 'G'");this.initial={o:"S",r:this.start[0],c:this.start[1],r2:0,c2:0,act:0,mask:a}}cells(e){return e.o==="P"?[[e.r,e.c],[e.r2,e.c2]]:_h(e.o,e.r,e.c)}isWin(e){return e.o==="S"&&e.r===this.goal[0]&&e.c===this.goal[1]}unsupported(e,t,r){for(const[a,l]of e){if(a<0||l<0||a>=this.rows||l>=this.cols)return"void";const u=this.tiles[a][l];if(u===".")return"void";if(u==="B"){if(!(r>>this.bridgeBit.get(yr(a,l))&1))return"void"}else if(u==="F"&&t==="S")return"fragile"}return null}applySwitch(e,t){return e.mode==="toggle"?t^e.mask:e.mode==="open"?t|e.mask:t&~e.mask}fail(e,t,r){return{valid:!1,state:e,cost:0,reason:t,moved:r,triggered:[],split:!1,merged:!1}}step(e,t){if(this.isWin(e))return this.fail(e,"noop",[]);if(t==="X")return e.o!=="P"?this.fail(e,"noop",[]):{valid:!0,state:{...e,act:1-e.act},cost:1,moved:[],triggered:[],split:!1,merged:!1};if(e.o==="P")return this.stepSplit(e,t);const[r,a,l]=Qy(e.o,e.r,e.c,t),u=_h(r,a,l),h={o:r,r:a,c:l,r2:0,c2:0,act:0,mask:e.mask},d=this.unsupported(u,r,e.mask);if(d)return this.fail(h,d,u);const p=1+(u.some(([g,y])=>this.tiles[g][y]==="F")?Zy:0);return this.afterMove(h,u,p,!1)}stepSplit(e,t){const[r,a]=Ky[t],l=e.act===0?[e.r+r,e.c+a]:[e.r2+r,e.c2+a],u=e.act===0?[e.r2,e.c2]:[e.r,e.c],h=e.act===0?{...e,r:l[0],c:l[1]}:{...e,r2:l[0],c2:l[1]};if(l[0]===u[0]&&l[1]===u[1])return this.fail(e,"noop",[]);const d=this.unsupported([l],"P",e.mask);if(d)return this.fail(h,d,[l]);let p,g=!1;return Math.abs(l[0]-u[0])+Math.abs(l[1]-u[1])===1?(g=!0,p=l[0]===u[0]?{o:"H",r:l[0],c:Math.min(l[1],u[1]),r2:0,c2:0,act:0,mask:e.mask}:{o:"V",r:Math.min(l[0],u[0]),c:l[1],r2:0,c2:0,act:0,mask:e.mask}):p=h,this.afterMove(p,[l],1,g)}afterMove(e,t,r,a){let{o:l,r:u,c:h,r2:d,c2:p,act:g,mask:y}=e;const v=[];let S=!1;for(const[x,_]of t){const b=this.switches.get(yr(x,_));if(b&&!((b.type==="heavy"||b.type==="split")&&l!=="S")&&(y=this.applySwitch(b,y),v.push({pos:[x,_],type:b.type}),b.type==="split")){const[P,A]=b.splitTo[0],[H,F]=b.splitTo[1];Math.abs(P-H)+Math.abs(A-F)===1?(P===H?(l="H",u=P,h=Math.min(A,F)):(l="V",u=Math.min(P,H),h=A),d=0,p=0,g=0,S=!1,a=!0):(l="P",u=P,h=A,d=H,p=F,g=0,S=!0)}}const E={o:l,r:u,c:h,r2:d,c2:p,act:g,mask:y},M=this.unsupported(this.cells(E),l,y);return M?this.fail(E,M,t):{valid:!0,state:E,cost:r,moved:t,triggered:v,split:S,merged:a}}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uf="170",Qs={ROTATE:0,DOLLY:1,PAN:2},qs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Jy=0,sm=1,eS=2,wg=1,Tg=2,ji=3,Pr=0,vn=1,Ci=2,qi=0,Js=1,om=2,am=3,lm=4,tS=5,ns=100,nS=101,iS=102,rS=103,sS=104,oS=200,aS=201,lS=202,cS=203,vh=204,xh=205,uS=206,hS=207,fS=208,dS=209,pS=210,mS=211,gS=212,_S=213,vS=214,yh=0,Sh=1,Mh=2,no=3,Eh=4,wh=5,Th=6,Ah=7,Ag=0,xS=1,yS=2,Ki=0,Cg=1,Rg=2,bg=3,Pg=4,SS=5,Lg=6,Dg=7,Ng=300,io=301,ro=302,Ch=303,Rh=304,Kl=306,bh=1e3,ss=1001,Ph=1002,_i=1003,MS=1004,dl=1005,Ri=1006,Ou=1007,os=1008,Qi=1009,Ig=1010,Ug=1011,ia=1012,hf=1013,as=1014,$i=1015,co=1016,ff=1017,df=1018,so=1020,Fg=35902,Og=1021,kg=1022,gi=1023,Bg=1024,zg=1025,eo=1026,oo=1027,Vg=1028,pf=1029,Hg=1030,mf=1031,gf=1033,Vl=33776,Hl=33777,Gl=33778,Wl=33779,Lh=35840,Dh=35841,Nh=35842,Ih=35843,Uh=36196,Fh=37492,Oh=37496,kh=37808,Bh=37809,zh=37810,Vh=37811,Hh=37812,Gh=37813,Wh=37814,Xh=37815,jh=37816,$h=37817,Yh=37818,qh=37819,Kh=37820,Zh=37821,Xl=36492,Qh=36494,Jh=36495,Gg=36283,ef=36284,tf=36285,nf=36286,ES=3200,wS=3201,Wg=0,TS=1,Rr="",Gn="srgb",uo="srgb-linear",Zl="linear",Lt="srgb",Ns=7680,cm=519,AS=512,CS=513,RS=514,Xg=515,bS=516,PS=517,LS=518,DS=519,um=35044,hm="300 es",Yi=2e3,Yl=2001;class ls{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jl=Math.PI/180,rf=180/Math.PI;function ra(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(gn[s&255]+gn[s>>8&255]+gn[s>>16&255]+gn[s>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[r&255]+gn[r>>8&255]+gn[r>>16&255]+gn[r>>24&255]).toLowerCase()}function wn(s,e,t){return Math.max(e,Math.min(t,s))}function NS(s,e){return(s%e+e)%e}function ku(s,e,t){return(1-t)*s+t*e}function jo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const IS={DEG2RAD:jl};class it{constructor(e=0,t=0){it.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(wn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*a+e.x,this.y=l*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(e,t,r,a,l,u,h,d,p){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,h,d,p)}set(e,t,r,a,l,u,h,d,p){const g=this.elements;return g[0]=e,g[1]=a,g[2]=h,g[3]=t,g[4]=l,g[5]=d,g[6]=r,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],h=r[3],d=r[6],p=r[1],g=r[4],y=r[7],v=r[2],S=r[5],E=r[8],M=a[0],x=a[3],_=a[6],b=a[1],P=a[4],A=a[7],H=a[2],F=a[5],I=a[8];return l[0]=u*M+h*b+d*H,l[3]=u*x+h*P+d*F,l[6]=u*_+h*A+d*I,l[1]=p*M+g*b+y*H,l[4]=p*x+g*P+y*F,l[7]=p*_+g*A+y*I,l[2]=v*M+S*b+E*H,l[5]=v*x+S*P+E*F,l[8]=v*_+S*A+E*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],h=e[5],d=e[6],p=e[7],g=e[8];return t*u*g-t*h*p-r*l*g+r*h*d+a*l*p-a*u*d}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],h=e[5],d=e[6],p=e[7],g=e[8],y=g*u-h*p,v=h*d-g*l,S=p*l-u*d,E=t*y+r*v+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=y*M,e[1]=(a*p-g*r)*M,e[2]=(h*r-a*u)*M,e[3]=v*M,e[4]=(g*t-a*d)*M,e[5]=(a*l-h*t)*M,e[6]=S*M,e[7]=(r*d-p*t)*M,e[8]=(u*t-r*l)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,u,h){const d=Math.cos(l),p=Math.sin(l);return this.set(r*d,r*p,-r*(d*u+p*h)+u+e,-a*p,a*d,-a*(-p*u+d*h)+h+t,0,0,1),this}scale(e,t){return this.premultiply(Bu.makeScale(e,t)),this}rotate(e){return this.premultiply(Bu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Bu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bu=new pt;function jg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ql(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function US(){const s=ql("canvas");return s.style.display="block",s}const fm={};function ta(s){s in fm||(fm[s]=!0,console.warn(s))}function FS(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function OS(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function kS(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const St={enabled:!0,workingColorSpace:uo,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Lt&&(s.r=Zi(s.r),s.g=Zi(s.g),s.b=Zi(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Lt&&(s.r=to(s.r),s.g=to(s.g),s.b=to(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Rr?Zl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Zi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function to(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const dm=[.64,.33,.3,.6,.15,.06],pm=[.2126,.7152,.0722],mm=[.3127,.329],gm=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_m=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);St.define({[uo]:{primaries:dm,whitePoint:mm,transfer:Zl,toXYZ:gm,fromXYZ:_m,luminanceCoefficients:pm,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:dm,whitePoint:mm,transfer:Lt,toXYZ:gm,fromXYZ:_m,luminanceCoefficients:pm,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}});let Is;class BS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Is===void 0&&(Is=ql("canvas")),Is.width=e.width,Is.height=e.height;const r=Is.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Is}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ql("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=Zi(l[u]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Zi(t[r]/255)*255):t[r]=Zi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zS=0;class $g{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=ra(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,h=a.length;u<h;u++)a[u].isDataTexture?l.push(zu(a[u].image)):l.push(zu(a[u]))}else l=zu(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function zu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?BS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let VS=0;class Tn extends ls{constructor(e=Tn.DEFAULT_IMAGE,t=Tn.DEFAULT_MAPPING,r=ss,a=ss,l=Ri,u=os,h=gi,d=Qi,p=Tn.DEFAULT_ANISOTROPY,g=Rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=ra(),this.name="",this.source=new $g(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=d,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ng)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bh:e.x=e.x-Math.floor(e.x);break;case ss:e.x=e.x<0?0:1;break;case Ph:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bh:e.y=e.y-Math.floor(e.y);break;case ss:e.y=e.y<0?0:1;break;case Ph:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=Ng;Tn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,r=0,a=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*a+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*a+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*a+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const d=e.elements,p=d[0],g=d[4],y=d[8],v=d[1],S=d[5],E=d[9],M=d[2],x=d[6],_=d[10];if(Math.abs(g-v)<.01&&Math.abs(y-M)<.01&&Math.abs(E-x)<.01){if(Math.abs(g+v)<.1&&Math.abs(y+M)<.1&&Math.abs(E+x)<.1&&Math.abs(p+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(p+1)/2,A=(S+1)/2,H=(_+1)/2,F=(g+v)/4,I=(y+M)/4,B=(E+x)/4;return P>A&&P>H?P<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(P),a=F/r,l=I/r):A>H?A<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(A),r=F/a,l=B/a):H<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(H),r=I/l,a=B/l),this.set(r,a,l,t),this}let b=Math.sqrt((x-E)*(x-E)+(y-M)*(y-M)+(v-g)*(v-g));return Math.abs(b)<.001&&(b=1),this.x=(x-E)/b,this.y=(y-M)/b,this.z=(v-g)/b,this.w=Math.acos((p+S+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class HS extends ls{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const a={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Tn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let h=0;h<u;h++)this.textures[h]=l.clone(),this.textures[h].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $g(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lr extends HS{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Yg extends Tn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=_i,this.minFilter=_i,this.wrapR=ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class GS extends Tn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=_i,this.minFilter=_i,this.wrapR=ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dr{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,u,h){let d=r[a+0],p=r[a+1],g=r[a+2],y=r[a+3];const v=l[u+0],S=l[u+1],E=l[u+2],M=l[u+3];if(h===0){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(h===1){e[t+0]=v,e[t+1]=S,e[t+2]=E,e[t+3]=M;return}if(y!==M||d!==v||p!==S||g!==E){let x=1-h;const _=d*v+p*S+g*E+y*M,b=_>=0?1:-1,P=1-_*_;if(P>Number.EPSILON){const H=Math.sqrt(P),F=Math.atan2(H,_*b);x=Math.sin(x*F)/H,h=Math.sin(h*F)/H}const A=h*b;if(d=d*x+v*A,p=p*x+S*A,g=g*x+E*A,y=y*x+M*A,x===1-h){const H=1/Math.sqrt(d*d+p*p+g*g+y*y);d*=H,p*=H,g*=H,y*=H}}e[t]=d,e[t+1]=p,e[t+2]=g,e[t+3]=y}static multiplyQuaternionsFlat(e,t,r,a,l,u){const h=r[a],d=r[a+1],p=r[a+2],g=r[a+3],y=l[u],v=l[u+1],S=l[u+2],E=l[u+3];return e[t]=h*E+g*y+d*S-p*v,e[t+1]=d*E+g*v+p*y-h*S,e[t+2]=p*E+g*S+h*v-d*y,e[t+3]=g*E-h*y-d*v-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,u=e._order,h=Math.cos,d=Math.sin,p=h(r/2),g=h(a/2),y=h(l/2),v=d(r/2),S=d(a/2),E=d(l/2);switch(u){case"XYZ":this._x=v*g*y+p*S*E,this._y=p*S*y-v*g*E,this._z=p*g*E+v*S*y,this._w=p*g*y-v*S*E;break;case"YXZ":this._x=v*g*y+p*S*E,this._y=p*S*y-v*g*E,this._z=p*g*E-v*S*y,this._w=p*g*y+v*S*E;break;case"ZXY":this._x=v*g*y-p*S*E,this._y=p*S*y+v*g*E,this._z=p*g*E+v*S*y,this._w=p*g*y-v*S*E;break;case"ZYX":this._x=v*g*y-p*S*E,this._y=p*S*y+v*g*E,this._z=p*g*E-v*S*y,this._w=p*g*y+v*S*E;break;case"YZX":this._x=v*g*y+p*S*E,this._y=p*S*y+v*g*E,this._z=p*g*E-v*S*y,this._w=p*g*y-v*S*E;break;case"XZY":this._x=v*g*y-p*S*E,this._y=p*S*y-v*g*E,this._z=p*g*E+v*S*y,this._w=p*g*y+v*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],u=t[1],h=t[5],d=t[9],p=t[2],g=t[6],y=t[10],v=r+h+y;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-d)*S,this._y=(l-p)*S,this._z=(u-a)*S}else if(r>h&&r>y){const S=2*Math.sqrt(1+r-h-y);this._w=(g-d)/S,this._x=.25*S,this._y=(a+u)/S,this._z=(l+p)/S}else if(h>y){const S=2*Math.sqrt(1+h-r-y);this._w=(l-p)/S,this._x=(a+u)/S,this._y=.25*S,this._z=(d+g)/S}else{const S=2*Math.sqrt(1+y-r-h);this._w=(u-a)/S,this._x=(l+p)/S,this._y=(d+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,u=e._w,h=t._x,d=t._y,p=t._z,g=t._w;return this._x=r*g+u*h+a*p-l*d,this._y=a*g+u*d+l*h-r*p,this._z=l*g+u*p+r*d-a*h,this._w=u*g-r*h-a*d-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,u=this._w;let h=u*e._w+r*e._x+a*e._y+l*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=u,this._x=r,this._y=a,this._z=l,this;const d=1-h*h;if(d<=Number.EPSILON){const S=1-t;return this._w=S*u+t*this._w,this._x=S*r+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(d),g=Math.atan2(p,h),y=Math.sin((1-t)*g)/p,v=Math.sin(t*g)/p;return this._w=u*y+this._w*v,this._x=r*y+this._x*v,this._y=a*y+this._y*v,this._z=l*y+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,r=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,u=e.y,h=e.z,d=e.w,p=2*(u*a-h*r),g=2*(h*t-l*a),y=2*(l*r-u*t);return this.x=t+d*p+u*y-h*g,this.y=r+d*g+h*p-l*y,this.z=a+d*y+l*g-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,u=t.x,h=t.y,d=t.z;return this.x=a*d-l*h,this.y=l*u-r*d,this.z=r*h-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Vu.copy(this).projectOnVector(e),this.sub(Vu)}reflect(e){return this.sub(Vu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(wn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vu=new W,vm=new Dr;class sa{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=l.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,fi):fi.fromBufferAttribute(l,u),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),pl.copy(r.boundingBox)),pl.applyMatrix4(e.matrixWorld),this.union(pl)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($o),ml.subVectors(this.max,$o),Us.subVectors(e.a,$o),Fs.subVectors(e.b,$o),Os.subVectors(e.c,$o),Sr.subVectors(Fs,Us),Mr.subVectors(Os,Fs),Yr.subVectors(Us,Os);let t=[0,-Sr.z,Sr.y,0,-Mr.z,Mr.y,0,-Yr.z,Yr.y,Sr.z,0,-Sr.x,Mr.z,0,-Mr.x,Yr.z,0,-Yr.x,-Sr.y,Sr.x,0,-Mr.y,Mr.x,0,-Yr.y,Yr.x,0];return!Hu(t,Us,Fs,Os,ml)||(t=[1,0,0,0,1,0,0,0,1],!Hu(t,Us,Fs,Os,ml))?!1:(gl.crossVectors(Sr,Mr),t=[gl.x,gl.y,gl.z],Hu(t,Us,Fs,Os,ml))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vi=[new W,new W,new W,new W,new W,new W,new W,new W],fi=new W,pl=new sa,Us=new W,Fs=new W,Os=new W,Sr=new W,Mr=new W,Yr=new W,$o=new W,ml=new W,gl=new W,qr=new W;function Hu(s,e,t,r,a){for(let l=0,u=s.length-3;l<=u;l+=3){qr.fromArray(s,l);const h=a.x*Math.abs(qr.x)+a.y*Math.abs(qr.y)+a.z*Math.abs(qr.z),d=e.dot(qr),p=t.dot(qr),g=r.dot(qr);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>h)return!1}return!0}const WS=new sa,Yo=new W,Gu=new W;class Ql{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):WS.setFromPoints(e).getCenter(r);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yo.subVectors(e,this.center);const t=Yo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(Yo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yo.copy(e.center).add(Gu)),this.expandByPoint(Yo.copy(e.center).sub(Gu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hi=new W,Wu=new W,_l=new W,Er=new W,Xu=new W,vl=new W,ju=new W;class _f{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){Wu.copy(e).add(t).multiplyScalar(.5),_l.copy(t).sub(e).normalize(),Er.copy(this.origin).sub(Wu);const l=e.distanceTo(t)*.5,u=-this.direction.dot(_l),h=Er.dot(this.direction),d=-Er.dot(_l),p=Er.lengthSq(),g=Math.abs(1-u*u);let y,v,S,E;if(g>0)if(y=u*d-h,v=u*h-d,E=l*g,y>=0)if(v>=-E)if(v<=E){const M=1/g;y*=M,v*=M,S=y*(y+u*v+2*h)+v*(u*y+v+2*d)+p}else v=l,y=Math.max(0,-(u*v+h)),S=-y*y+v*(v+2*d)+p;else v=-l,y=Math.max(0,-(u*v+h)),S=-y*y+v*(v+2*d)+p;else v<=-E?(y=Math.max(0,-(-u*l+h)),v=y>0?-l:Math.min(Math.max(-l,-d),l),S=-y*y+v*(v+2*d)+p):v<=E?(y=0,v=Math.min(Math.max(-l,-d),l),S=v*(v+2*d)+p):(y=Math.max(0,-(u*l+h)),v=y>0?l:Math.min(Math.max(-l,-d),l),S=-y*y+v*(v+2*d)+p);else v=u>0?-l:l,y=Math.max(0,-(u*v+h)),S=-y*y+v*(v+2*d)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,y),a&&a.copy(Wu).addScaledVector(_l,v),S}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);const r=Hi.dot(this.direction),a=Hi.dot(Hi)-r*r,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),h=r-u,d=r+u;return d<0?null:h<0?this.at(d,t):this.at(h,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,u,h,d;const p=1/this.direction.x,g=1/this.direction.y,y=1/this.direction.z,v=this.origin;return p>=0?(r=(e.min.x-v.x)*p,a=(e.max.x-v.x)*p):(r=(e.max.x-v.x)*p,a=(e.min.x-v.x)*p),g>=0?(l=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(l=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),r>u||l>a||((l>r||isNaN(r))&&(r=l),(u<a||isNaN(a))&&(a=u),y>=0?(h=(e.min.z-v.z)*y,d=(e.max.z-v.z)*y):(h=(e.max.z-v.z)*y,d=(e.min.z-v.z)*y),r>d||h>a)||((h>r||r!==r)&&(r=h),(d<a||a!==a)&&(a=d),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,r,a,l){Xu.subVectors(t,e),vl.subVectors(r,e),ju.crossVectors(Xu,vl);let u=this.direction.dot(ju),h;if(u>0){if(a)return null;h=1}else if(u<0)h=-1,u=-u;else return null;Er.subVectors(this.origin,e);const d=h*this.direction.dot(vl.crossVectors(Er,vl));if(d<0)return null;const p=h*this.direction.dot(Xu.cross(Er));if(p<0||d+p>u)return null;const g=-h*Er.dot(ju);return g<0?null:this.at(g/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,t,r,a,l,u,h,d,p,g,y,v,S,E,M,x){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,h,d,p,g,y,v,S,E,M,x)}set(e,t,r,a,l,u,h,d,p,g,y,v,S,E,M,x){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=a,_[1]=l,_[5]=u,_[9]=h,_[13]=d,_[2]=p,_[6]=g,_[10]=y,_[14]=v,_[3]=S,_[7]=E,_[11]=M,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/ks.setFromMatrixColumn(e,0).length(),l=1/ks.setFromMatrixColumn(e,1).length(),u=1/ks.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,u=Math.cos(r),h=Math.sin(r),d=Math.cos(a),p=Math.sin(a),g=Math.cos(l),y=Math.sin(l);if(e.order==="XYZ"){const v=u*g,S=u*y,E=h*g,M=h*y;t[0]=d*g,t[4]=-d*y,t[8]=p,t[1]=S+E*p,t[5]=v-M*p,t[9]=-h*d,t[2]=M-v*p,t[6]=E+S*p,t[10]=u*d}else if(e.order==="YXZ"){const v=d*g,S=d*y,E=p*g,M=p*y;t[0]=v+M*h,t[4]=E*h-S,t[8]=u*p,t[1]=u*y,t[5]=u*g,t[9]=-h,t[2]=S*h-E,t[6]=M+v*h,t[10]=u*d}else if(e.order==="ZXY"){const v=d*g,S=d*y,E=p*g,M=p*y;t[0]=v-M*h,t[4]=-u*y,t[8]=E+S*h,t[1]=S+E*h,t[5]=u*g,t[9]=M-v*h,t[2]=-u*p,t[6]=h,t[10]=u*d}else if(e.order==="ZYX"){const v=u*g,S=u*y,E=h*g,M=h*y;t[0]=d*g,t[4]=E*p-S,t[8]=v*p+M,t[1]=d*y,t[5]=M*p+v,t[9]=S*p-E,t[2]=-p,t[6]=h*d,t[10]=u*d}else if(e.order==="YZX"){const v=u*d,S=u*p,E=h*d,M=h*p;t[0]=d*g,t[4]=M-v*y,t[8]=E*y+S,t[1]=y,t[5]=u*g,t[9]=-h*g,t[2]=-p*g,t[6]=S*y+E,t[10]=v-M*y}else if(e.order==="XZY"){const v=u*d,S=u*p,E=h*d,M=h*p;t[0]=d*g,t[4]=-y,t[8]=p*g,t[1]=v*y+M,t[5]=u*g,t[9]=S*y-E,t[2]=E*y-S,t[6]=h*g,t[10]=M*y+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(XS,e,jS)}lookAt(e,t,r){const a=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),wr.crossVectors(r,Vn),wr.lengthSq()===0&&(Math.abs(r.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),wr.crossVectors(r,Vn)),wr.normalize(),xl.crossVectors(Vn,wr),a[0]=wr.x,a[4]=xl.x,a[8]=Vn.x,a[1]=wr.y,a[5]=xl.y,a[9]=Vn.y,a[2]=wr.z,a[6]=xl.z,a[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],h=r[4],d=r[8],p=r[12],g=r[1],y=r[5],v=r[9],S=r[13],E=r[2],M=r[6],x=r[10],_=r[14],b=r[3],P=r[7],A=r[11],H=r[15],F=a[0],I=a[4],B=a[8],L=a[12],C=a[1],k=a[5],oe=a[9],J=a[13],pe=a[2],me=a[6],ue=a[10],ce=a[14],z=a[3],he=a[7],le=a[11],U=a[15];return l[0]=u*F+h*C+d*pe+p*z,l[4]=u*I+h*k+d*me+p*he,l[8]=u*B+h*oe+d*ue+p*le,l[12]=u*L+h*J+d*ce+p*U,l[1]=g*F+y*C+v*pe+S*z,l[5]=g*I+y*k+v*me+S*he,l[9]=g*B+y*oe+v*ue+S*le,l[13]=g*L+y*J+v*ce+S*U,l[2]=E*F+M*C+x*pe+_*z,l[6]=E*I+M*k+x*me+_*he,l[10]=E*B+M*oe+x*ue+_*le,l[14]=E*L+M*J+x*ce+_*U,l[3]=b*F+P*C+A*pe+H*z,l[7]=b*I+P*k+A*me+H*he,l[11]=b*B+P*oe+A*ue+H*le,l[15]=b*L+P*J+A*ce+H*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],u=e[1],h=e[5],d=e[9],p=e[13],g=e[2],y=e[6],v=e[10],S=e[14],E=e[3],M=e[7],x=e[11],_=e[15];return E*(+l*d*y-a*p*y-l*h*v+r*p*v+a*h*S-r*d*S)+M*(+t*d*S-t*p*v+l*u*v-a*u*S+a*p*g-l*d*g)+x*(+t*p*y-t*h*S-l*u*y+r*u*S+l*h*g-r*p*g)+_*(-a*h*g-t*d*y+t*h*v+a*u*y-r*u*v+r*d*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],h=e[5],d=e[6],p=e[7],g=e[8],y=e[9],v=e[10],S=e[11],E=e[12],M=e[13],x=e[14],_=e[15],b=y*x*p-M*v*p+M*d*S-h*x*S-y*d*_+h*v*_,P=E*v*p-g*x*p-E*d*S+u*x*S+g*d*_-u*v*_,A=g*M*p-E*y*p+E*h*S-u*M*S-g*h*_+u*y*_,H=E*y*d-g*M*d-E*h*v+u*M*v+g*h*x-u*y*x,F=t*b+r*P+a*A+l*H;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/F;return e[0]=b*I,e[1]=(M*v*l-y*x*l-M*a*S+r*x*S+y*a*_-r*v*_)*I,e[2]=(h*x*l-M*d*l+M*a*p-r*x*p-h*a*_+r*d*_)*I,e[3]=(y*d*l-h*v*l-y*a*p+r*v*p+h*a*S-r*d*S)*I,e[4]=P*I,e[5]=(g*x*l-E*v*l+E*a*S-t*x*S-g*a*_+t*v*_)*I,e[6]=(E*d*l-u*x*l-E*a*p+t*x*p+u*a*_-t*d*_)*I,e[7]=(u*v*l-g*d*l+g*a*p-t*v*p-u*a*S+t*d*S)*I,e[8]=A*I,e[9]=(E*y*l-g*M*l-E*r*S+t*M*S+g*r*_-t*y*_)*I,e[10]=(u*M*l-E*h*l+E*r*p-t*M*p-u*r*_+t*h*_)*I,e[11]=(g*h*l-u*y*l-g*r*p+t*y*p+u*r*S-t*h*S)*I,e[12]=H*I,e[13]=(g*M*a-E*y*a+E*r*v-t*M*v-g*r*x+t*y*x)*I,e[14]=(E*h*a-u*M*a-E*r*d+t*M*d+u*r*x-t*h*x)*I,e[15]=(u*y*a-g*h*a+g*r*d-t*y*d-u*r*v+t*h*v)*I,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,u=e.x,h=e.y,d=e.z,p=l*u,g=l*h;return this.set(p*u+r,p*h-a*d,p*d+a*h,0,p*h+a*d,g*h+r,g*d-a*u,0,p*d-a*h,g*d+a*u,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,u){return this.set(1,r,l,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,u=t._y,h=t._z,d=t._w,p=l+l,g=u+u,y=h+h,v=l*p,S=l*g,E=l*y,M=u*g,x=u*y,_=h*y,b=d*p,P=d*g,A=d*y,H=r.x,F=r.y,I=r.z;return a[0]=(1-(M+_))*H,a[1]=(S+A)*H,a[2]=(E-P)*H,a[3]=0,a[4]=(S-A)*F,a[5]=(1-(v+_))*F,a[6]=(x+b)*F,a[7]=0,a[8]=(E+P)*I,a[9]=(x-b)*I,a[10]=(1-(v+M))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let l=ks.set(a[0],a[1],a[2]).length();const u=ks.set(a[4],a[5],a[6]).length(),h=ks.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],di.copy(this);const p=1/l,g=1/u,y=1/h;return di.elements[0]*=p,di.elements[1]*=p,di.elements[2]*=p,di.elements[4]*=g,di.elements[5]*=g,di.elements[6]*=g,di.elements[8]*=y,di.elements[9]*=y,di.elements[10]*=y,t.setFromRotationMatrix(di),r.x=l,r.y=u,r.z=h,this}makePerspective(e,t,r,a,l,u,h=Yi){const d=this.elements,p=2*l/(t-e),g=2*l/(r-a),y=(t+e)/(t-e),v=(r+a)/(r-a);let S,E;if(h===Yi)S=-(u+l)/(u-l),E=-2*u*l/(u-l);else if(h===Yl)S=-u/(u-l),E=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=p,d[4]=0,d[8]=y,d[12]=0,d[1]=0,d[5]=g,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,r,a,l,u,h=Yi){const d=this.elements,p=1/(t-e),g=1/(r-a),y=1/(u-l),v=(t+e)*p,S=(r+a)*g;let E,M;if(h===Yi)E=(u+l)*y,M=-2*y;else if(h===Yl)E=l*y,M=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*g,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=M,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const ks=new W,di=new zt,XS=new W(0,0,0),jS=new W(1,1,1),wr=new W,xl=new W,Vn=new W,xm=new zt,ym=new Dr;class bi{constructor(e=0,t=0,r=0,a=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],u=a[4],h=a[8],d=a[1],p=a[5],g=a[9],y=a[2],v=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(wn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-wn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-y,l),this._z=0);break;case"ZXY":this._x=Math.asin(wn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-y,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-wn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(wn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-y,l)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-wn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return xm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ym.setFromEuler(this),this.setFromQuaternion(ym,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class qg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $S=0;const Sm=new W,Bs=new Dr,Gi=new zt,yl=new W,qo=new W,YS=new W,qS=new Dr,Mm=new W(1,0,0),Em=new W(0,1,0),wm=new W(0,0,1),Tm={type:"added"},KS={type:"removed"},zs={type:"childadded",child:null},$u={type:"childremoved",child:null};class an extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=ra(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new W,t=new bi,r=new Dr,a=new W(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new zt},normalMatrix:{value:new pt}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(Mm,e)}rotateY(e){return this.rotateOnAxis(Em,e)}rotateZ(e){return this.rotateOnAxis(wm,e)}translateOnAxis(e,t){return Sm.copy(e).applyQuaternion(this.quaternion),this.position.add(Sm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mm,e)}translateY(e){return this.translateOnAxis(Em,e)}translateZ(e){return this.translateOnAxis(wm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?yl.copy(e):yl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(qo,yl,this.up):Gi.lookAt(yl,qo,this.up),this.quaternion.setFromRotationMatrix(Gi),a&&(Gi.extractRotation(a.matrixWorld),Bs.setFromRotationMatrix(Gi),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tm),zs.child=e,this.dispatchEvent(zs),zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(KS),$u.child=e,this.dispatchEvent($u),$u.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tm),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,e,YS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,qS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(h,d){return h[d.uuid]===void 0&&(h[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const d=h.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const y=d[p];l(e.shapes,y)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let d=0,p=this.material.length;d<p;d++)h.push(l(e.materials,this.material[d]));a.material=h}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let h=0;h<this.children.length;h++)a.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let h=0;h<this.animations.length;h++){const d=this.animations[h];a.animations.push(l(e.animations,d))}}if(t){const h=u(e.geometries),d=u(e.materials),p=u(e.textures),g=u(e.images),y=u(e.shapes),v=u(e.skeletons),S=u(e.animations),E=u(e.nodes);h.length>0&&(r.geometries=h),d.length>0&&(r.materials=d),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),y.length>0&&(r.shapes=y),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=a,r;function u(h){const d=[];for(const p in h){const g=h[p];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}an.DEFAULT_UP=new W(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new W,Wi=new W,Yu=new W,Xi=new W,Vs=new W,Hs=new W,Am=new W,qu=new W,Ku=new W,Zu=new W,Qu=new Nt,Ju=new Nt,eh=new Nt;class mi{constructor(e=new W,t=new W,r=new W){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),pi.subVectors(e,t),a.cross(pi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){pi.subVectors(a,t),Wi.subVectors(r,t),Yu.subVectors(e,t);const u=pi.dot(pi),h=pi.dot(Wi),d=pi.dot(Yu),p=Wi.dot(Wi),g=Wi.dot(Yu),y=u*p-h*h;if(y===0)return l.set(0,0,0),null;const v=1/y,S=(p*d-h*g)*v,E=(u*g-h*d)*v;return l.set(1-S-E,E,S)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,t,r,a,l,u,h,d){return this.getBarycoord(e,t,r,a,Xi)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,Xi.x),d.addScaledVector(u,Xi.y),d.addScaledVector(h,Xi.z),d)}static getInterpolatedAttribute(e,t,r,a,l,u){return Qu.setScalar(0),Ju.setScalar(0),eh.setScalar(0),Qu.fromBufferAttribute(e,t),Ju.fromBufferAttribute(e,r),eh.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(Qu,l.x),u.addScaledVector(Ju,l.y),u.addScaledVector(eh,l.z),u}static isFrontFacing(e,t,r,a){return pi.subVectors(r,t),Wi.subVectors(e,t),pi.cross(Wi).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),pi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return mi.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let u,h;Vs.subVectors(a,r),Hs.subVectors(l,r),qu.subVectors(e,r);const d=Vs.dot(qu),p=Hs.dot(qu);if(d<=0&&p<=0)return t.copy(r);Ku.subVectors(e,a);const g=Vs.dot(Ku),y=Hs.dot(Ku);if(g>=0&&y<=g)return t.copy(a);const v=d*y-g*p;if(v<=0&&d>=0&&g<=0)return u=d/(d-g),t.copy(r).addScaledVector(Vs,u);Zu.subVectors(e,l);const S=Vs.dot(Zu),E=Hs.dot(Zu);if(E>=0&&S<=E)return t.copy(l);const M=S*p-d*E;if(M<=0&&p>=0&&E<=0)return h=p/(p-E),t.copy(r).addScaledVector(Hs,h);const x=g*E-S*y;if(x<=0&&y-g>=0&&S-E>=0)return Am.subVectors(l,a),h=(y-g)/(y-g+(S-E)),t.copy(a).addScaledVector(Am,h);const _=1/(x+M+v);return u=M*_,h=v*_,t.copy(r).addScaledVector(Vs,u).addScaledVector(Hs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Kg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tr={h:0,s:0,l:0},Sl={h:0,s:0,l:0};function th(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ft{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,r,a=St.workingColorSpace){return this.r=e,this.g=t,this.b=r,St.toWorkingColorSpace(this,a),this}setHSL(e,t,r,a=St.workingColorSpace){if(e=NS(e,1),t=wn(t,0,1),r=wn(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=th(u,l,e+1/3),this.g=th(u,l,e),this.b=th(u,l,e-1/3)}return St.toWorkingColorSpace(this,a),this}setStyle(e,t=Gn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],h=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gn){const r=Kg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return St.fromWorkingColorSpace(_n.copy(this),e),Math.round(wn(_n.r*255,0,255))*65536+Math.round(wn(_n.g*255,0,255))*256+Math.round(wn(_n.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(_n.copy(this),t);const r=_n.r,a=_n.g,l=_n.b,u=Math.max(r,a,l),h=Math.min(r,a,l);let d,p;const g=(h+u)/2;if(h===u)d=0,p=0;else{const y=u-h;switch(p=g<=.5?y/(u+h):y/(2-u-h),u){case r:d=(a-l)/y+(a<l?6:0);break;case a:d=(l-r)/y+2;break;case l:d=(r-a)/y+4;break}d/=6}return e.h=d,e.s=p,e.l=g,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Gn){St.fromWorkingColorSpace(_n.copy(this),e);const t=_n.r,r=_n.g,a=_n.b;return e!==Gn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(Tr),this.setHSL(Tr.h+e,Tr.s+t,Tr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Tr),e.getHSL(Sl);const r=ku(Tr.h,Sl.h,t),a=ku(Tr.s,Sl.s,t),l=ku(Tr.l,Sl.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new ft;ft.NAMES=Kg;let ZS=0;class ho extends ls{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=ra(),this.name="",this.blending=Js,this.side=Pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vh,this.blendDst=xh,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(r.blending=this.blending),this.side!==Pr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==vh&&(r.blendSrc=this.blendSrc),this.blendDst!==xh&&(r.blendDst=this.blendDst),this.blendEquation!==ns&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==no&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const u=[];for(const h in l){const d=l[h];delete d.metadata,u.push(d)}return u}if(t){const l=a(e.textures),u=a(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class br extends ho{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Ag,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new W,Ml=new it;class ni{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=um,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ml.fromBufferAttribute(this,t),Ml.applyMatrix3(e),this.setXY(t,Ml.x,Ml.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=jo(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Un(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array),a=Un(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array),a=Un(a,this.array),l=Un(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==um&&(e.usage=this.usage),e}}class Zg extends ni{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Qg extends ni{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class An extends ni{constructor(e,t,r){super(new Float32Array(e),t,r)}}let QS=0;const Jn=new zt,nh=new an,Gs=new W,Hn=new sa,Ko=new sa,on=new W;class ii extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=ra(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jg(e)?Qg:Zg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new pt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,r){return Jn.makeTranslation(e,t,r),this.applyMatrix4(Jn),this}scale(e,t,r){return Jn.makeScale(e,t,r),this.applyMatrix4(Jn),this}lookAt(e){return nh.lookAt(e),nh.updateMatrix(),this.applyMatrix4(nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new An(r,3))}else{for(let r=0,a=t.count;r<a;r++){const l=e[r];t.setXYZ(r,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];Hn.setFromBufferAttribute(l),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ql);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const r=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const h=t[l];Ko.setFromBufferAttribute(h),this.morphTargetsRelative?(on.addVectors(Hn.min,Ko.min),Hn.expandByPoint(on),on.addVectors(Hn.max,Ko.max),Hn.expandByPoint(on)):(Hn.expandByPoint(Ko.min),Hn.expandByPoint(Ko.max))}Hn.getCenter(r);let a=0;for(let l=0,u=e.count;l<u;l++)on.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(on));if(t)for(let l=0,u=t.length;l<u;l++){const h=t[l],d=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)on.fromBufferAttribute(h,p),d&&(Gs.fromBufferAttribute(e,p),on.add(Gs)),a=Math.max(a,r.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ni(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),h=[],d=[];for(let B=0;B<r.count;B++)h[B]=new W,d[B]=new W;const p=new W,g=new W,y=new W,v=new it,S=new it,E=new it,M=new W,x=new W;function _(B,L,C){p.fromBufferAttribute(r,B),g.fromBufferAttribute(r,L),y.fromBufferAttribute(r,C),v.fromBufferAttribute(l,B),S.fromBufferAttribute(l,L),E.fromBufferAttribute(l,C),g.sub(p),y.sub(p),S.sub(v),E.sub(v);const k=1/(S.x*E.y-E.x*S.y);isFinite(k)&&(M.copy(g).multiplyScalar(E.y).addScaledVector(y,-S.y).multiplyScalar(k),x.copy(y).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(k),h[B].add(M),h[L].add(M),h[C].add(M),d[B].add(x),d[L].add(x),d[C].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let B=0,L=b.length;B<L;++B){const C=b[B],k=C.start,oe=C.count;for(let J=k,pe=k+oe;J<pe;J+=3)_(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const P=new W,A=new W,H=new W,F=new W;function I(B){H.fromBufferAttribute(a,B),F.copy(H);const L=h[B];P.copy(L),P.sub(H.multiplyScalar(H.dot(L))).normalize(),A.crossVectors(F,L);const k=A.dot(d[B])<0?-1:1;u.setXYZW(B,P.x,P.y,P.z,k)}for(let B=0,L=b.length;B<L;++B){const C=b[B],k=C.start,oe=C.count;for(let J=k,pe=k+oe;J<pe;J+=3)I(e.getX(J+0)),I(e.getX(J+1)),I(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ni(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const a=new W,l=new W,u=new W,h=new W,d=new W,p=new W,g=new W,y=new W;if(e)for(let v=0,S=e.count;v<S;v+=3){const E=e.getX(v+0),M=e.getX(v+1),x=e.getX(v+2);a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,M),u.fromBufferAttribute(t,x),g.subVectors(u,l),y.subVectors(a,l),g.cross(y),h.fromBufferAttribute(r,E),d.fromBufferAttribute(r,M),p.fromBufferAttribute(r,x),h.add(g),d.add(g),p.add(g),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(M,d.x,d.y,d.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let v=0,S=t.count;v<S;v+=3)a.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),g.subVectors(u,l),y.subVectors(a,l),g.cross(y),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(h,d){const p=h.array,g=h.itemSize,y=h.normalized,v=new p.constructor(d.length*g);let S=0,E=0;for(let M=0,x=d.length;M<x;M++){h.isInterleavedBufferAttribute?S=d[M]*h.data.stride+h.offset:S=d[M]*g;for(let _=0;_<g;_++)v[E++]=p[S++]}return new ni(v,g,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ii,r=this.index.array,a=this.attributes;for(const h in a){const d=a[h],p=e(d,r);t.setAttribute(h,p)}const l=this.morphAttributes;for(const h in l){const d=[],p=l[h];for(let g=0,y=p.length;g<y;g++){const v=p[g],S=e(v,r);d.push(S)}t.morphAttributes[h]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,d=u.length;h<d;h++){const p=u[h];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const p=r[d];e.data.attributes[d]=p.toJSON(e.data)}const a={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let y=0,v=p.length;y<v;y++){const S=p[y];g.push(S.toJSON(e.data))}g.length>0&&(a[d]=g,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const a=e.attributes;for(const p in a){const g=a[p];this.setAttribute(p,g.clone(t))}const l=e.morphAttributes;for(const p in l){const g=[],y=l[p];for(let v=0,S=y.length;v<S;v++)g.push(y[v].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,g=u.length;p<g;p++){const y=u[p];this.addGroup(y.start,y.count,y.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cm=new zt,Kr=new _f,El=new Ql,Rm=new W,wl=new W,Tl=new W,Al=new W,ih=new W,Cl=new W,bm=new W,Rl=new W;class Rt extends an{constructor(e=new ii,t=new br){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const h=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const h=this.morphTargetInfluences;if(l&&h){Cl.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const g=h[d],y=l[d];g!==0&&(ih.fromBufferAttribute(y,e),u?Cl.addScaledVector(ih,g):Cl.addScaledVector(ih.sub(t),g))}t.add(Cl)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),El.copy(r.boundingSphere),El.applyMatrix4(l),Kr.copy(e.ray).recast(e.near),!(El.containsPoint(Kr.origin)===!1&&(Kr.intersectSphere(El,Rm)===null||Kr.origin.distanceToSquared(Rm)>(e.far-e.near)**2))&&(Cm.copy(l).invert(),Kr.copy(e.ray).applyMatrix4(Cm),!(r.boundingBox!==null&&Kr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Kr)))}_computeIntersections(e,t,r){let a;const l=this.geometry,u=this.material,h=l.index,d=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,y=l.attributes.normal,v=l.groups,S=l.drawRange;if(h!==null)if(Array.isArray(u))for(let E=0,M=v.length;E<M;E++){const x=v[E],_=u[x.materialIndex],b=Math.max(x.start,S.start),P=Math.min(h.count,Math.min(x.start+x.count,S.start+S.count));for(let A=b,H=P;A<H;A+=3){const F=h.getX(A),I=h.getX(A+1),B=h.getX(A+2);a=bl(this,_,e,r,p,g,y,F,I,B),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),M=Math.min(h.count,S.start+S.count);for(let x=E,_=M;x<_;x+=3){const b=h.getX(x),P=h.getX(x+1),A=h.getX(x+2);a=bl(this,u,e,r,p,g,y,b,P,A),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}else if(d!==void 0)if(Array.isArray(u))for(let E=0,M=v.length;E<M;E++){const x=v[E],_=u[x.materialIndex],b=Math.max(x.start,S.start),P=Math.min(d.count,Math.min(x.start+x.count,S.start+S.count));for(let A=b,H=P;A<H;A+=3){const F=A,I=A+1,B=A+2;a=bl(this,_,e,r,p,g,y,F,I,B),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const E=Math.max(0,S.start),M=Math.min(d.count,S.start+S.count);for(let x=E,_=M;x<_;x+=3){const b=x,P=x+1,A=x+2;a=bl(this,u,e,r,p,g,y,b,P,A),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}}}function JS(s,e,t,r,a,l,u,h){let d;if(e.side===vn?d=r.intersectTriangle(u,l,a,!0,h):d=r.intersectTriangle(a,l,u,e.side===Pr,h),d===null)return null;Rl.copy(h),Rl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Rl);return p<t.near||p>t.far?null:{distance:p,point:Rl.clone(),object:s}}function bl(s,e,t,r,a,l,u,h,d,p){s.getVertexPosition(h,wl),s.getVertexPosition(d,Tl),s.getVertexPosition(p,Al);const g=JS(s,e,t,r,wl,Tl,Al,bm);if(g){const y=new W;mi.getBarycoord(bm,wl,Tl,Al,y),a&&(g.uv=mi.getInterpolatedAttribute(a,h,d,p,y,new it)),l&&(g.uv1=mi.getInterpolatedAttribute(l,h,d,p,y,new it)),u&&(g.normal=mi.getInterpolatedAttribute(u,h,d,p,y,new W),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:d,c:p,normal:new W,materialIndex:0};mi.getNormal(wl,Tl,Al,v.normal),g.face=v,g.barycoord=y}return g}class Nr extends ii{constructor(e=1,t=1,r=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:u};const h=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const d=[],p=[],g=[],y=[];let v=0,S=0;E("z","y","x",-1,-1,r,t,e,u,l,0),E("z","y","x",1,-1,r,t,-e,u,l,1),E("x","z","y",1,1,e,r,t,a,u,2),E("x","z","y",1,-1,e,r,-t,a,u,3),E("x","y","z",1,-1,e,t,r,a,l,4),E("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(d),this.setAttribute("position",new An(p,3)),this.setAttribute("normal",new An(g,3)),this.setAttribute("uv",new An(y,2));function E(M,x,_,b,P,A,H,F,I,B,L){const C=A/I,k=H/B,oe=A/2,J=H/2,pe=F/2,me=I+1,ue=B+1;let ce=0,z=0;const he=new W;for(let le=0;le<ue;le++){const U=le*k-J;for(let ie=0;ie<me;ie++){const Ue=ie*C-oe;he[M]=Ue*b,he[x]=U*P,he[_]=pe,p.push(he.x,he.y,he.z),he[M]=0,he[x]=0,he[_]=F>0?1:-1,g.push(he.x,he.y,he.z),y.push(ie/I),y.push(1-le/B),ce+=1}}for(let le=0;le<B;le++)for(let U=0;U<I;U++){const ie=v+U+me*le,Ue=v+U+me*(le+1),Q=v+(U+1)+me*(le+1),fe=v+(U+1)+me*le;d.push(ie,Ue,fe),d.push(Ue,Q,fe),z+=6}h.addGroup(S,z,L),S+=z,v+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ao(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function En(s){const e={};for(let t=0;t<s.length;t++){const r=ao(s[t]);for(const a in r)e[a]=r[a]}return e}function eM(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Jg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const vf={clone:ao,merge:En};var tM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends ho{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tM,this.fragmentShader=nM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ao(e.uniforms),this.uniformsGroups=eM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class e_ extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ar=new W,Pm=new it,Lm=new it;class Wn extends e_{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rf*2*Math.atan(Math.tan(jl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z),Ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z)}getViewSize(e,t){return this.getViewBounds(e,Pm,Lm),t.subVectors(Lm,Pm)}setViewOffset(e,t,r,a,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jl*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,p=u.fullHeight;l+=u.offsetX*a/d,t-=u.offsetY*r/p,a*=u.width/d,r*=u.height/p}const h=this.filmOffset;h!==0&&(l+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ws=-90,Xs=1;class iM extends an{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Wn(Ws,Xs,e,t);a.layers=this.layers,this.add(a);const l=new Wn(Ws,Xs,e,t);l.layers=this.layers,this.add(l);const u=new Wn(Ws,Xs,e,t);u.layers=this.layers,this.add(u);const h=new Wn(Ws,Xs,e,t);h.layers=this.layers,this.add(h);const d=new Wn(Ws,Xs,e,t);d.layers=this.layers,this.add(d);const p=new Wn(Ws,Xs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,u,h,d]=t;for(const p of t)this.remove(p);if(e===Yi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Yl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,h,d,p,g]=this.children,y=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,l),e.setRenderTarget(r,1,a),e.render(t,u),e.setRenderTarget(r,2,a),e.render(t,h),e.setRenderTarget(r,3,a),e.render(t,d),e.setRenderTarget(r,4,a),e.render(t,p),r.texture.generateMipmaps=M,e.setRenderTarget(r,5,a),e.render(t,g),e.setRenderTarget(y,v,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class t_ extends Tn{constructor(e,t,r,a,l,u,h,d,p,g){e=e!==void 0?e:[],t=t!==void 0?t:io,super(e,t,r,a,l,u,h,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rM extends Lr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new t_(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ri}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Nr(5,5,5),l=new vi({name:"CubemapFromEquirect",uniforms:ao(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:vn,blending:qi});l.uniforms.tEquirect.value=t;const u=new Rt(a,l),h=t.minFilter;return t.minFilter===os&&(t.minFilter=Ri),new iM(1,10,this).update(e,u),t.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,r,a){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,a);e.setRenderTarget(l)}}const rh=new W,sM=new W,oM=new pt;class Cr{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=rh.subVectors(r,t).cross(sM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(rh),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||oM.getNormalMatrix(e),a=this.coplanarPoint(rh).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zr=new Ql,Pl=new W;class xf{constructor(e=new Cr,t=new Cr,r=new Cr,a=new Cr,l=new Cr,u=new Cr){this.planes=[e,t,r,a,l,u]}set(e,t,r,a,l,u){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(r),h[3].copy(a),h[4].copy(l),h[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Yi){const r=this.planes,a=e.elements,l=a[0],u=a[1],h=a[2],d=a[3],p=a[4],g=a[5],y=a[6],v=a[7],S=a[8],E=a[9],M=a[10],x=a[11],_=a[12],b=a[13],P=a[14],A=a[15];if(r[0].setComponents(d-l,v-p,x-S,A-_).normalize(),r[1].setComponents(d+l,v+p,x+S,A+_).normalize(),r[2].setComponents(d+u,v+g,x+E,A+b).normalize(),r[3].setComponents(d-u,v-g,x-E,A-b).normalize(),r[4].setComponents(d-h,v-y,x-M,A-P).normalize(),t===Yi)r[5].setComponents(d+h,v+y,x+M,A+P).normalize();else if(t===Yl)r[5].setComponents(h,y,M,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zr)}intersectsSprite(e){return Zr.center.set(0,0,0),Zr.radius=.7071067811865476,Zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zr)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(Pl.x=a.normal.x>0?e.max.x:e.min.x,Pl.y=a.normal.y>0?e.max.y:e.min.y,Pl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Pl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function n_(){let s=null,e=!1,t=null,r=null;function a(l,u){t(l,u),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function aM(s){const e=new WeakMap;function t(h,d){const p=h.array,g=h.usage,y=p.byteLength,v=s.createBuffer();s.bindBuffer(d,v),s.bufferData(d,p,g),h.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:y}}function r(h,d,p){const g=d.array,y=d.updateRanges;if(s.bindBuffer(p,h),y.length===0)s.bufferSubData(p,0,g);else{y.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<y.length;S++){const E=y[v],M=y[S];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++v,y[v]=M)}y.length=v+1;for(let S=0,E=y.length;S<E;S++){const M=y[S];s.bufferSubData(p,M.start*g.BYTES_PER_ELEMENT,g,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=e.get(h);d&&(s.deleteBuffer(d.buffer),e.delete(h))}function u(h,d){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,t(h,d));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,d),p.version=h.version}}return{get:a,remove:l,update:u}}class lo extends ii{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,u=t/2,h=Math.floor(r),d=Math.floor(a),p=h+1,g=d+1,y=e/h,v=t/d,S=[],E=[],M=[],x=[];for(let _=0;_<g;_++){const b=_*v-u;for(let P=0;P<p;P++){const A=P*y-l;E.push(A,-b,0),M.push(0,0,1),x.push(P/h),x.push(1-_/d)}}for(let _=0;_<d;_++)for(let b=0;b<h;b++){const P=b+p*_,A=b+p*(_+1),H=b+1+p*(_+1),F=b+1+p*_;S.push(P,A,F),S.push(A,H,F)}this.setIndex(S),this.setAttribute("position",new An(E,3)),this.setAttribute("normal",new An(M,3)),this.setAttribute("uv",new An(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lo(e.width,e.height,e.widthSegments,e.heightSegments)}}var lM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,_M=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,SM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,MM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,RM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,PM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,LM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,DM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,NM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,IM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,UM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kM="gl_FragColor = linearToOutputTexel( gl_FragColor );",BM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,VM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,HM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,GM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,XM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$M=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,KM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,eE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,oE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,aE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_E=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,SE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ME=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,AE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,CE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,LE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,IE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,UE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,OE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,VE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,WE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,XE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$E=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,KE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ZE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,JE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,t1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,n1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,i1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,r1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,s1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,o1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const a1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,p1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,m1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,g1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,y1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,M1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,A1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,R1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,b1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,D1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,F1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,B1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,z1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:lM,alphahash_pars_fragment:cM,alphamap_fragment:uM,alphamap_pars_fragment:hM,alphatest_fragment:fM,alphatest_pars_fragment:dM,aomap_fragment:pM,aomap_pars_fragment:mM,batching_pars_vertex:gM,batching_vertex:_M,begin_vertex:vM,beginnormal_vertex:xM,bsdfs:yM,iridescence_fragment:SM,bumpmap_pars_fragment:MM,clipping_planes_fragment:EM,clipping_planes_pars_fragment:wM,clipping_planes_pars_vertex:TM,clipping_planes_vertex:AM,color_fragment:CM,color_pars_fragment:RM,color_pars_vertex:bM,color_vertex:PM,common:LM,cube_uv_reflection_fragment:DM,defaultnormal_vertex:NM,displacementmap_pars_vertex:IM,displacementmap_vertex:UM,emissivemap_fragment:FM,emissivemap_pars_fragment:OM,colorspace_fragment:kM,colorspace_pars_fragment:BM,envmap_fragment:zM,envmap_common_pars_fragment:VM,envmap_pars_fragment:HM,envmap_pars_vertex:GM,envmap_physical_pars_fragment:eE,envmap_vertex:WM,fog_vertex:XM,fog_pars_vertex:jM,fog_fragment:$M,fog_pars_fragment:YM,gradientmap_pars_fragment:qM,lightmap_pars_fragment:KM,lights_lambert_fragment:ZM,lights_lambert_pars_fragment:QM,lights_pars_begin:JM,lights_toon_fragment:tE,lights_toon_pars_fragment:nE,lights_phong_fragment:iE,lights_phong_pars_fragment:rE,lights_physical_fragment:sE,lights_physical_pars_fragment:oE,lights_fragment_begin:aE,lights_fragment_maps:lE,lights_fragment_end:cE,logdepthbuf_fragment:uE,logdepthbuf_pars_fragment:hE,logdepthbuf_pars_vertex:fE,logdepthbuf_vertex:dE,map_fragment:pE,map_pars_fragment:mE,map_particle_fragment:gE,map_particle_pars_fragment:_E,metalnessmap_fragment:vE,metalnessmap_pars_fragment:xE,morphinstance_vertex:yE,morphcolor_vertex:SE,morphnormal_vertex:ME,morphtarget_pars_vertex:EE,morphtarget_vertex:wE,normal_fragment_begin:TE,normal_fragment_maps:AE,normal_pars_fragment:CE,normal_pars_vertex:RE,normal_vertex:bE,normalmap_pars_fragment:PE,clearcoat_normal_fragment_begin:LE,clearcoat_normal_fragment_maps:DE,clearcoat_pars_fragment:NE,iridescence_pars_fragment:IE,opaque_fragment:UE,packing:FE,premultiplied_alpha_fragment:OE,project_vertex:kE,dithering_fragment:BE,dithering_pars_fragment:zE,roughnessmap_fragment:VE,roughnessmap_pars_fragment:HE,shadowmap_pars_fragment:GE,shadowmap_pars_vertex:WE,shadowmap_vertex:XE,shadowmask_pars_fragment:jE,skinbase_vertex:$E,skinning_pars_vertex:YE,skinning_vertex:qE,skinnormal_vertex:KE,specularmap_fragment:ZE,specularmap_pars_fragment:QE,tonemapping_fragment:JE,tonemapping_pars_fragment:e1,transmission_fragment:t1,transmission_pars_fragment:n1,uv_pars_fragment:i1,uv_pars_vertex:r1,uv_vertex:s1,worldpos_vertex:o1,background_vert:a1,background_frag:l1,backgroundCube_vert:c1,backgroundCube_frag:u1,cube_vert:h1,cube_frag:f1,depth_vert:d1,depth_frag:p1,distanceRGBA_vert:m1,distanceRGBA_frag:g1,equirect_vert:_1,equirect_frag:v1,linedashed_vert:x1,linedashed_frag:y1,meshbasic_vert:S1,meshbasic_frag:M1,meshlambert_vert:E1,meshlambert_frag:w1,meshmatcap_vert:T1,meshmatcap_frag:A1,meshnormal_vert:C1,meshnormal_frag:R1,meshphong_vert:b1,meshphong_frag:P1,meshphysical_vert:L1,meshphysical_frag:D1,meshtoon_vert:N1,meshtoon_frag:I1,points_vert:U1,points_frag:F1,shadow_vert:O1,shadow_frag:k1,sprite_vert:B1,sprite_frag:z1},De={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Ai={basic:{uniforms:En([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:En([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ft(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:En([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:En([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:En([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new ft(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:En([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:En([De.points,De.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:En([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:En([De.common,De.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:En([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:En([De.sprite,De.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:En([De.common,De.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:En([De.lights,De.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Ai.physical={uniforms:En([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Ll={r:0,b:0,g:0},Qr=new bi,V1=new zt;function H1(s,e,t,r,a,l,u){const h=new ft(0);let d=l===!0?0:1,p,g,y=null,v=0,S=null;function E(b){let P=b.isScene===!0?b.background:null;return P&&P.isTexture&&(P=(b.backgroundBlurriness>0?t:e).get(P)),P}function M(b){let P=!1;const A=E(b);A===null?_(h,d):A&&A.isColor&&(_(A,1),P=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,u):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(b,P){const A=E(P);A&&(A.isCubeTexture||A.mapping===Kl)?(g===void 0&&(g=new Rt(new Nr(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:ao(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,F,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),Qr.copy(P.backgroundRotation),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),g.material.uniforms.envMap.value=A,g.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(V1.makeRotationFromEuler(Qr)),g.material.toneMapped=St.getTransfer(A.colorSpace)!==Lt,(y!==A||v!==A.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,y=A,v=A.version,S=s.toneMapping),g.layers.enableAll(),b.unshift(g,g.geometry,g.material,0,0,null)):A&&A.isTexture&&(p===void 0&&(p=new Rt(new lo(2,2),new vi({name:"BackgroundMaterial",uniforms:ao(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Pr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=A,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=St.getTransfer(A.colorSpace)!==Lt,A.matrixAutoUpdate===!0&&A.updateMatrix(),p.material.uniforms.uvTransform.value.copy(A.matrix),(y!==A||v!==A.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,y=A,v=A.version,S=s.toneMapping),p.layers.enableAll(),b.unshift(p,p.geometry,p.material,0,0,null))}function _(b,P){b.getRGB(Ll,Jg(s)),r.buffers.color.setClear(Ll.r,Ll.g,Ll.b,P,u)}return{getClearColor:function(){return h},setClearColor:function(b,P=1){h.set(b),d=P,_(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(b){d=b,_(h,d)},render:M,addToRenderList:x}}function G1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=v(null);let l=a,u=!1;function h(C,k,oe,J,pe){let me=!1;const ue=y(J,oe,k);l!==ue&&(l=ue,p(l.object)),me=S(C,J,oe,pe),me&&E(C,J,oe,pe),pe!==null&&e.update(pe,s.ELEMENT_ARRAY_BUFFER),(me||u)&&(u=!1,A(C,k,oe,J),pe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(pe).buffer))}function d(){return s.createVertexArray()}function p(C){return s.bindVertexArray(C)}function g(C){return s.deleteVertexArray(C)}function y(C,k,oe){const J=oe.wireframe===!0;let pe=r[C.id];pe===void 0&&(pe={},r[C.id]=pe);let me=pe[k.id];me===void 0&&(me={},pe[k.id]=me);let ue=me[J];return ue===void 0&&(ue=v(d()),me[J]=ue),ue}function v(C){const k=[],oe=[],J=[];for(let pe=0;pe<t;pe++)k[pe]=0,oe[pe]=0,J[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:oe,attributeDivisors:J,object:C,attributes:{},index:null}}function S(C,k,oe,J){const pe=l.attributes,me=k.attributes;let ue=0;const ce=oe.getAttributes();for(const z in ce)if(ce[z].location>=0){const le=pe[z];let U=me[z];if(U===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(U=C.instanceColor)),le===void 0||le.attribute!==U||U&&le.data!==U.data)return!0;ue++}return l.attributesNum!==ue||l.index!==J}function E(C,k,oe,J){const pe={},me=k.attributes;let ue=0;const ce=oe.getAttributes();for(const z in ce)if(ce[z].location>=0){let le=me[z];le===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(le=C.instanceColor));const U={};U.attribute=le,le&&le.data&&(U.data=le.data),pe[z]=U,ue++}l.attributes=pe,l.attributesNum=ue,l.index=J}function M(){const C=l.newAttributes;for(let k=0,oe=C.length;k<oe;k++)C[k]=0}function x(C){_(C,0)}function _(C,k){const oe=l.newAttributes,J=l.enabledAttributes,pe=l.attributeDivisors;oe[C]=1,J[C]===0&&(s.enableVertexAttribArray(C),J[C]=1),pe[C]!==k&&(s.vertexAttribDivisor(C,k),pe[C]=k)}function b(){const C=l.newAttributes,k=l.enabledAttributes;for(let oe=0,J=k.length;oe<J;oe++)k[oe]!==C[oe]&&(s.disableVertexAttribArray(oe),k[oe]=0)}function P(C,k,oe,J,pe,me,ue){ue===!0?s.vertexAttribIPointer(C,k,oe,pe,me):s.vertexAttribPointer(C,k,oe,J,pe,me)}function A(C,k,oe,J){M();const pe=J.attributes,me=oe.getAttributes(),ue=k.defaultAttributeValues;for(const ce in me){const z=me[ce];if(z.location>=0){let he=pe[ce];if(he===void 0&&(ce==="instanceMatrix"&&C.instanceMatrix&&(he=C.instanceMatrix),ce==="instanceColor"&&C.instanceColor&&(he=C.instanceColor)),he!==void 0){const le=he.normalized,U=he.itemSize,ie=e.get(he);if(ie===void 0)continue;const Ue=ie.buffer,Q=ie.type,fe=ie.bytesPerElement,Te=Q===s.INT||Q===s.UNSIGNED_INT||he.gpuType===hf;if(he.isInterleavedBufferAttribute){const Se=he.data,be=Se.stride,Oe=he.offset;if(Se.isInstancedInterleavedBuffer){for(let Ke=0;Ke<z.locationSize;Ke++)_(z.location+Ke,Se.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ke=0;Ke<z.locationSize;Ke++)x(z.location+Ke);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let Ke=0;Ke<z.locationSize;Ke++)P(z.location+Ke,U/z.locationSize,Q,le,be*fe,(Oe+U/z.locationSize*Ke)*fe,Te)}else{if(he.isInstancedBufferAttribute){for(let Se=0;Se<z.locationSize;Se++)_(z.location+Se,he.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Se=0;Se<z.locationSize;Se++)x(z.location+Se);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let Se=0;Se<z.locationSize;Se++)P(z.location+Se,U/z.locationSize,Q,le,U*fe,U/z.locationSize*Se*fe,Te)}}else if(ue!==void 0){const le=ue[ce];if(le!==void 0)switch(le.length){case 2:s.vertexAttrib2fv(z.location,le);break;case 3:s.vertexAttrib3fv(z.location,le);break;case 4:s.vertexAttrib4fv(z.location,le);break;default:s.vertexAttrib1fv(z.location,le)}}}}b()}function H(){B();for(const C in r){const k=r[C];for(const oe in k){const J=k[oe];for(const pe in J)g(J[pe].object),delete J[pe];delete k[oe]}delete r[C]}}function F(C){if(r[C.id]===void 0)return;const k=r[C.id];for(const oe in k){const J=k[oe];for(const pe in J)g(J[pe].object),delete J[pe];delete k[oe]}delete r[C.id]}function I(C){for(const k in r){const oe=r[k];if(oe[C.id]===void 0)continue;const J=oe[C.id];for(const pe in J)g(J[pe].object),delete J[pe];delete oe[C.id]}}function B(){L(),u=!0,l!==a&&(l=a,p(l.object))}function L(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:h,reset:B,resetDefaultState:L,dispose:H,releaseStatesOfGeometry:F,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:x,disableUnusedAttributes:b}}function W1(s,e,t){let r;function a(p){r=p}function l(p,g){s.drawArrays(r,p,g),t.update(g,r,1)}function u(p,g,y){y!==0&&(s.drawArraysInstanced(r,p,g,y),t.update(g,r,y))}function h(p,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,y);let S=0;for(let E=0;E<y;E++)S+=g[E];t.update(S,r,1)}function d(p,g,y,v){if(y===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)u(p[E],g[E],v[E]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,g,0,v,0,y);let E=0;for(let M=0;M<y;M++)E+=g[M]*v[M];t.update(E,r,1)}}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function X1(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(I){return!(I!==gi&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const B=I===co&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Qi&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==$i&&!B)}function d(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const g=d(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const y=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=E>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:y,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:b,maxVaryings:P,maxFragmentUniforms:A,vertexTextures:H,maxSamples:F}}function j1(s){const e=this;let t=null,r=0,a=!1,l=!1;const u=new Cr,h=new pt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(y,v){const S=y.length!==0||v||r!==0||a;return a=v,r=y.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(y,v){t=g(y,v,0)},this.setState=function(y,v,S){const E=y.clippingPlanes,M=y.clipIntersection,x=y.clipShadows,_=s.get(y);if(!a||E===null||E.length===0||l&&!x)l?g(null):p();else{const b=l?0:r,P=b*4;let A=_.clippingState||null;d.value=A,A=g(E,v,P,S);for(let H=0;H!==P;++H)A[H]=t[H];_.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function p(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(y,v,S,E){const M=y!==null?y.length:0;let x=null;if(M!==0){if(x=d.value,E!==!0||x===null){const _=S+M*4,b=v.matrixWorldInverse;h.getNormalMatrix(b),(x===null||x.length<_)&&(x=new Float32Array(_));for(let P=0,A=S;P!==M;++P,A+=4)u.copy(y[P]).applyMatrix4(b,h),u.normal.toArray(x,A),x[A+3]=u.constant}d.value=x,d.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}function $1(s){let e=new WeakMap;function t(u,h){return h===Ch?u.mapping=io:h===Rh&&(u.mapping=ro),u}function r(u){if(u&&u.isTexture){const h=u.mapping;if(h===Ch||h===Rh)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const p=new rM(d.height);return p.fromEquirectangularTexture(s,u),e.set(u,p),u.addEventListener("dispose",a),t(p.texture,u.mapping)}else return null}}return u}function a(u){const h=u.target;h.removeEventListener("dispose",a);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class yf extends e_{constructor(e=-1,t=1,r=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,u=r+e,h=a+t,d=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,h-=g*this.view.offsetY,d=h-g*this.view.height}this.projectionMatrix.makeOrthographic(l,u,h,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ks=4,Dm=[.125,.215,.35,.446,.526,.582],is=20,sh=new yf,Nm=new ft;let oh=null,ah=0,lh=0,ch=!1;const ts=(1+Math.sqrt(5))/2,js=1/ts,Im=[new W(-ts,js,0),new W(ts,js,0),new W(-js,0,ts),new W(js,0,ts),new W(0,ts,-js),new W(0,ts,js),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class sf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100){oh=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oh,ah,lh),this._renderer.xr.enabled=ch,e.scissorTest=!1,Dl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===io||e.mapping===ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oh=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:co,format:gi,colorSpace:uo,depthBuffer:!1},a=Um(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Um(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Y1(l)),this._blurMaterial=q1(l,e,t)}return a}_compileMaterial(e){const t=new Rt(this._lodPlanes[0],e);this._renderer.compile(t,sh)}_sceneToCubeUV(e,t,r,a){const h=new Wn(90,1,t,r),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,v=g.toneMapping;g.getClearColor(Nm),g.toneMapping=Ki,g.autoClear=!1;const S=new br({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),E=new Rt(new Nr,S);let M=!1;const x=e.background;x?x.isColor&&(S.color.copy(x),e.background=null,M=!0):(S.color.copy(Nm),M=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(h.up.set(0,d[_],0),h.lookAt(p[_],0,0)):b===1?(h.up.set(0,0,d[_]),h.lookAt(0,p[_],0)):(h.up.set(0,d[_],0),h.lookAt(0,0,p[_]));const P=this._cubeSize;Dl(a,b*P,_>2?P:0,P,P),g.setRenderTarget(a),M&&g.render(E,h),g.render(e,h)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=v,g.autoClear=y,e.background=x}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===io||e.mapping===ro;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Om()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fm());const l=a?this._cubemapMaterial:this._equirectMaterial,u=new Rt(this._lodPlanes[0],l),h=l.uniforms;h.envMap.value=e;const d=this._cubeSize;Dl(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(u,sh)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),h=Im[(a-l-1)%Im.length];this._blur(e,l-1,l,u,h)}t.autoClear=r}_blur(e,t,r,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,a,"latitudinal",l),this._halfBlur(u,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,u,h){const d=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,y=new Rt(this._lodPlanes[a],p),v=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*is-1),M=l/E,x=isFinite(l)?1+Math.floor(g*M):is;x>is&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${is}`);const _=[];let b=0;for(let I=0;I<is;++I){const B=I/M,L=Math.exp(-B*B/2);_.push(L),I===0?b+=L:I<x&&(b+=2*L)}for(let I=0;I<_.length;I++)_[I]=_[I]/b;v.envMap.value=e.texture,v.samples.value=x,v.weights.value=_,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:P}=this;v.dTheta.value=E,v.mipInt.value=P-r;const A=this._sizeLods[a],H=3*A*(a>P-Ks?a-P+Ks:0),F=4*(this._cubeSize-A);Dl(t,H,F,3*A,2*A),d.setRenderTarget(t),d.render(y,sh)}}function Y1(s){const e=[],t=[],r=[];let a=s;const l=s-Ks+1+Dm.length;for(let u=0;u<l;u++){const h=Math.pow(2,a);t.push(h);let d=1/h;u>s-Ks?d=Dm[u-s+Ks-1]:u===0&&(d=0),r.push(d);const p=1/(h-2),g=-p,y=1+p,v=[g,g,y,g,y,y,g,g,y,y,g,y],S=6,E=6,M=3,x=2,_=1,b=new Float32Array(M*E*S),P=new Float32Array(x*E*S),A=new Float32Array(_*E*S);for(let F=0;F<S;F++){const I=F%3*2/3-1,B=F>2?0:-1,L=[I,B,0,I+2/3,B,0,I+2/3,B+1,0,I,B,0,I+2/3,B+1,0,I,B+1,0];b.set(L,M*E*F),P.set(v,x*E*F);const C=[F,F,F,F,F,F];A.set(C,_*E*F)}const H=new ii;H.setAttribute("position",new ni(b,M)),H.setAttribute("uv",new ni(P,x)),H.setAttribute("faceIndex",new ni(A,_)),e.push(H),a>Ks&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Um(s,e,t){const r=new Lr(s,e,t);return r.texture.mapping=Kl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Dl(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function q1(s,e,t){const r=new Float32Array(is),a=new W(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Fm(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Om(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Sf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function K1(s){let e=new WeakMap,t=null;function r(h){if(h&&h.isTexture){const d=h.mapping,p=d===Ch||d===Rh,g=d===io||d===ro;if(p||g){let y=e.get(h);const v=y!==void 0?y.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return t===null&&(t=new sf(s)),y=p?t.fromEquirectangular(h,y):t.fromCubemap(h,y),y.texture.pmremVersion=h.pmremVersion,e.set(h,y),y.texture;if(y!==void 0)return y.texture;{const S=h.image;return p&&S&&S.height>0||g&&S&&a(S)?(t===null&&(t=new sf(s)),y=p?t.fromEquirectangular(h):t.fromCubemap(h),y.texture.pmremVersion=h.pmremVersion,e.set(h,y),h.addEventListener("dispose",l),y.texture):null}}}return h}function a(h){let d=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&d++;return d===p}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function Z1(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&ta("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function Q1(s,e,t,r){const a={},l=new WeakMap;function u(y){const v=y.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);for(const E in v.morphAttributes){const M=v.morphAttributes[E];for(let x=0,_=M.length;x<_;x++)e.remove(M[x])}v.removeEventListener("dispose",u),delete a[v.id];const S=l.get(v);S&&(e.remove(S),l.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function h(y,v){return a[v.id]===!0||(v.addEventListener("dispose",u),a[v.id]=!0,t.memory.geometries++),v}function d(y){const v=y.attributes;for(const E in v)e.update(v[E],s.ARRAY_BUFFER);const S=y.morphAttributes;for(const E in S){const M=S[E];for(let x=0,_=M.length;x<_;x++)e.update(M[x],s.ARRAY_BUFFER)}}function p(y){const v=[],S=y.index,E=y.attributes.position;let M=0;if(S!==null){const b=S.array;M=S.version;for(let P=0,A=b.length;P<A;P+=3){const H=b[P+0],F=b[P+1],I=b[P+2];v.push(H,F,F,I,I,H)}}else if(E!==void 0){const b=E.array;M=E.version;for(let P=0,A=b.length/3-1;P<A;P+=3){const H=P+0,F=P+1,I=P+2;v.push(H,F,F,I,I,H)}}else return;const x=new(jg(v)?Qg:Zg)(v,1);x.version=M;const _=l.get(y);_&&e.remove(_),l.set(y,x)}function g(y){const v=l.get(y);if(v){const S=y.index;S!==null&&v.version<S.version&&p(y)}else p(y);return l.get(y)}return{get:h,update:d,getWireframeAttribute:g}}function J1(s,e,t){let r;function a(v){r=v}let l,u;function h(v){l=v.type,u=v.bytesPerElement}function d(v,S){s.drawElements(r,S,l,v*u),t.update(S,r,1)}function p(v,S,E){E!==0&&(s.drawElementsInstanced(r,S,l,v*u,E),t.update(S,r,E))}function g(v,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,v,0,E);let x=0;for(let _=0;_<E;_++)x+=S[_];t.update(x,r,1)}function y(v,S,E,M){if(E===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<v.length;_++)p(v[_]/u,S[_],M[_]);else{x.multiDrawElementsInstancedWEBGL(r,S,0,l,v,0,M,0,E);let _=0;for(let b=0;b<E;b++)_+=S[b]*M[b];t.update(_,r,1)}}this.setMode=a,this.setIndex=h,this.render=d,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=y}function ew(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,h){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=h*(l/3);break;case s.LINES:t.lines+=h*(l/2);break;case s.LINE_STRIP:t.lines+=h*(l-1);break;case s.LINE_LOOP:t.lines+=h*l;break;case s.POINTS:t.points+=h*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function tw(s,e,t){const r=new WeakMap,a=new Nt;function l(u,h,d){const p=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=g!==void 0?g.length:0;let v=r.get(h);if(v===void 0||v.count!==y){let C=function(){B.dispose(),r.delete(h),h.removeEventListener("dispose",C)};var S=C;v!==void 0&&v.texture.dispose();const E=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,x=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let A=0;E===!0&&(A=1),M===!0&&(A=2),x===!0&&(A=3);let H=h.attributes.position.count*A,F=1;H>e.maxTextureSize&&(F=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const I=new Float32Array(H*F*4*y),B=new Yg(I,H,F,y);B.type=$i,B.needsUpdate=!0;const L=A*4;for(let k=0;k<y;k++){const oe=_[k],J=b[k],pe=P[k],me=H*F*4*k;for(let ue=0;ue<oe.count;ue++){const ce=ue*L;E===!0&&(a.fromBufferAttribute(oe,ue),I[me+ce+0]=a.x,I[me+ce+1]=a.y,I[me+ce+2]=a.z,I[me+ce+3]=0),M===!0&&(a.fromBufferAttribute(J,ue),I[me+ce+4]=a.x,I[me+ce+5]=a.y,I[me+ce+6]=a.z,I[me+ce+7]=0),x===!0&&(a.fromBufferAttribute(pe,ue),I[me+ce+8]=a.x,I[me+ce+9]=a.y,I[me+ce+10]=a.z,I[me+ce+11]=pe.itemSize===4?a.w:1)}}v={count:y,texture:B,size:new it(H,F)},r.set(h,v),h.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let E=0;for(let x=0;x<p.length;x++)E+=p[x];const M=h.morphTargetsRelative?1:1-E;d.getUniforms().setValue(s,"morphTargetBaseInfluence",M),d.getUniforms().setValue(s,"morphTargetInfluences",p)}d.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:l}}function nw(s,e,t,r){let a=new WeakMap;function l(d){const p=r.render.frame,g=d.geometry,y=e.get(d,g);if(a.get(y)!==p&&(e.update(y),a.set(y,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",h)===!1&&d.addEventListener("dispose",h),a.get(d)!==p&&(t.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,s.ARRAY_BUFFER),a.set(d,p))),d.isSkinnedMesh){const v=d.skeleton;a.get(v)!==p&&(v.update(),a.set(v,p))}return y}function u(){a=new WeakMap}function h(d){const p=d.target;p.removeEventListener("dispose",h),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:u}}class i_ extends Tn{constructor(e,t,r,a,l,u,h,d,p,g=eo){if(g!==eo&&g!==oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===eo&&(r=as),r===void 0&&g===oo&&(r=so),super(null,a,l,u,h,d,g,r,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=h!==void 0?h:_i,this.minFilter=d!==void 0?d:_i,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const r_=new Tn,km=new i_(1,1),s_=new Yg,o_=new GS,a_=new t_,Bm=[],zm=[],Vm=new Float32Array(16),Hm=new Float32Array(9),Gm=new Float32Array(4);function fo(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=Bm[a];if(l===void 0&&(l=new Float32Array(a),Bm[a]=l),e!==0){r.toArray(l,0);for(let u=1,h=0;u!==e;++u)h+=t,s[u].toArray(l,h)}return l}function en(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function tn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Jl(s,e){let t=zm[e];t===void 0&&(t=new Int32Array(e),zm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function iw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function rw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2fv(this.addr,e),tn(t,e)}}function sw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;s.uniform3fv(this.addr,e),tn(t,e)}}function ow(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4fv(this.addr,e),tn(t,e)}}function aw(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;Gm.set(r),s.uniformMatrix2fv(this.addr,!1,Gm),tn(t,r)}}function lw(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;Hm.set(r),s.uniformMatrix3fv(this.addr,!1,Hm),tn(t,r)}}function cw(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;Vm.set(r),s.uniformMatrix4fv(this.addr,!1,Vm),tn(t,r)}}function uw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function hw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2iv(this.addr,e),tn(t,e)}}function fw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3iv(this.addr,e),tn(t,e)}}function dw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4iv(this.addr,e),tn(t,e)}}function pw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function mw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2uiv(this.addr,e),tn(t,e)}}function gw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3uiv(this.addr,e),tn(t,e)}}function _w(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4uiv(this.addr,e),tn(t,e)}}function vw(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(km.compareFunction=Xg,l=km):l=r_,t.setTexture2D(e||l,a)}function xw(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||o_,a)}function yw(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||a_,a)}function Sw(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||s_,a)}function Mw(s){switch(s){case 5126:return iw;case 35664:return rw;case 35665:return sw;case 35666:return ow;case 35674:return aw;case 35675:return lw;case 35676:return cw;case 5124:case 35670:return uw;case 35667:case 35671:return hw;case 35668:case 35672:return fw;case 35669:case 35673:return dw;case 5125:return pw;case 36294:return mw;case 36295:return gw;case 36296:return _w;case 35678:case 36198:case 36298:case 36306:case 35682:return vw;case 35679:case 36299:case 36307:return xw;case 35680:case 36300:case 36308:case 36293:return yw;case 36289:case 36303:case 36311:case 36292:return Sw}}function Ew(s,e){s.uniform1fv(this.addr,e)}function ww(s,e){const t=fo(e,this.size,2);s.uniform2fv(this.addr,t)}function Tw(s,e){const t=fo(e,this.size,3);s.uniform3fv(this.addr,t)}function Aw(s,e){const t=fo(e,this.size,4);s.uniform4fv(this.addr,t)}function Cw(s,e){const t=fo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Rw(s,e){const t=fo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function bw(s,e){const t=fo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Pw(s,e){s.uniform1iv(this.addr,e)}function Lw(s,e){s.uniform2iv(this.addr,e)}function Dw(s,e){s.uniform3iv(this.addr,e)}function Nw(s,e){s.uniform4iv(this.addr,e)}function Iw(s,e){s.uniform1uiv(this.addr,e)}function Uw(s,e){s.uniform2uiv(this.addr,e)}function Fw(s,e){s.uniform3uiv(this.addr,e)}function Ow(s,e){s.uniform4uiv(this.addr,e)}function kw(s,e,t){const r=this.cache,a=e.length,l=Jl(t,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==a;++u)t.setTexture2D(e[u]||r_,l[u])}function Bw(s,e,t){const r=this.cache,a=e.length,l=Jl(t,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||o_,l[u])}function zw(s,e,t){const r=this.cache,a=e.length,l=Jl(t,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||a_,l[u])}function Vw(s,e,t){const r=this.cache,a=e.length,l=Jl(t,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||s_,l[u])}function Hw(s){switch(s){case 5126:return Ew;case 35664:return ww;case 35665:return Tw;case 35666:return Aw;case 35674:return Cw;case 35675:return Rw;case 35676:return bw;case 5124:case 35670:return Pw;case 35667:case 35671:return Lw;case 35668:case 35672:return Dw;case 35669:case 35673:return Nw;case 5125:return Iw;case 36294:return Uw;case 36295:return Fw;case 36296:return Ow;case 35678:case 36198:case 36298:case 36306:case 35682:return kw;case 35679:case 36299:case 36307:return Bw;case 35680:case 36300:case 36308:case 36293:return zw;case 36289:case 36303:case 36311:case 36292:return Vw}}class Gw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=Mw(t.type)}}class Ww{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hw(t.type)}}class Xw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const h=a[l];h.setValue(e,t[h.id],r)}}}const uh=/(\w+)(\])?(\[|\.)?/g;function Wm(s,e){s.seq.push(e),s.map[e.id]=e}function jw(s,e,t){const r=s.name,a=r.length;for(uh.lastIndex=0;;){const l=uh.exec(r),u=uh.lastIndex;let h=l[1];const d=l[2]==="]",p=l[3];if(d&&(h=h|0),p===void 0||p==="["&&u+2===a){Wm(t,p===void 0?new Gw(h,s,e):new Ww(h,s,e));break}else{let y=t.map[h];y===void 0&&(y=new Xw(h),Wm(t,y)),t=y}}}class $l{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(t,a),u=e.getUniformLocation(t,l.name);jw(l,u,this)}}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,u=t.length;l!==u;++l){const h=t[l],d=r[h.id];d.needsUpdate!==!1&&h.setValue(e,d.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in t&&r.push(u)}return r}}function Xm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const $w=37297;let Yw=0;function qw(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=a;u<l;u++){const h=u+1;r.push(`${h===e?">":" "} ${h}: ${t[u]}`)}return r.join(`
`)}const jm=new pt;function Kw(s){St._getMatrix(jm,St.workingColorSpace,s);const e=`mat3( ${jm.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(s)){case Zl:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function $m(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+qw(s.getShaderSource(e),u)}else return a}function Zw(s,e){const t=Kw(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Qw(s,e){let t;switch(e){case Cg:t="Linear";break;case Rg:t="Reinhard";break;case bg:t="Cineon";break;case Pg:t="ACESFilmic";break;case Lg:t="AgX";break;case Dg:t="Neutral";break;case SS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Nl=new W;function Jw(){St.getLuminanceCoefficients(Nl);const s=Nl.x.toFixed(4),e=Nl.y.toFixed(4),t=Nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(na).join(`
`)}function tT(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function nT(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),u=l.name;let h=1;l.type===s.FLOAT_MAT2&&(h=2),l.type===s.FLOAT_MAT3&&(h=3),l.type===s.FLOAT_MAT4&&(h=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:h}}return t}function na(s){return s!==""}function Ym(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iT=/^[ \t]*#include +<([\w\d./]+)>/gm;function of(s){return s.replace(iT,sT)}const rT=new Map;function sT(s,e){let t=mt[e];if(t===void 0){const r=rT.get(e);if(r!==void 0)t=mt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return of(t)}const oT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Km(s){return s.replace(oT,aT)}function aT(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Zm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lT(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===wg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Tg?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ji&&(e="SHADOWMAP_TYPE_VSM"),e}function cT(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case io:case ro:e="ENVMAP_TYPE_CUBE";break;case Kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uT(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ro:e="ENVMAP_MODE_REFRACTION";break}return e}function hT(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ag:e="ENVMAP_BLENDING_MULTIPLY";break;case xS:e="ENVMAP_BLENDING_MIX";break;case yS:e="ENVMAP_BLENDING_ADD";break}return e}function fT(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function dT(s,e,t,r){const a=s.getContext(),l=t.defines;let u=t.vertexShader,h=t.fragmentShader;const d=lT(t),p=cT(t),g=uT(t),y=hT(t),v=fT(t),S=eT(t),E=tT(l),M=a.createProgram();let x,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(na).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(na).join(`
`),_.length>0&&(_+=`
`)):(x=[Zm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(na).join(`
`),_=[Zm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+y:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ki?"#define TONE_MAPPING":"",t.toneMapping!==Ki?mt.tonemapping_pars_fragment:"",t.toneMapping!==Ki?Qw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,Zw("linearToOutputTexel",t.outputColorSpace),Jw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(na).join(`
`)),u=of(u),u=Ym(u,t),u=qm(u,t),h=of(h),h=Ym(h,t),h=qm(h,t),u=Km(u),h=Km(h),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",t.glslVersion===hm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const P=b+x+u,A=b+_+h,H=Xm(a,a.VERTEX_SHADER,P),F=Xm(a,a.FRAGMENT_SHADER,A);a.attachShader(M,H),a.attachShader(M,F),t.index0AttributeName!==void 0?a.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(M,0,"position"),a.linkProgram(M);function I(k){if(s.debug.checkShaderErrors){const oe=a.getProgramInfoLog(M).trim(),J=a.getShaderInfoLog(H).trim(),pe=a.getShaderInfoLog(F).trim();let me=!0,ue=!0;if(a.getProgramParameter(M,a.LINK_STATUS)===!1)if(me=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,M,H,F);else{const ce=$m(a,H,"vertex"),z=$m(a,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(M,a.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+oe+`
`+ce+`
`+z)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(J===""||pe==="")&&(ue=!1);ue&&(k.diagnostics={runnable:me,programLog:oe,vertexShader:{log:J,prefix:x},fragmentShader:{log:pe,prefix:_}})}a.deleteShader(H),a.deleteShader(F),B=new $l(a,M),L=nT(a,M)}let B;this.getUniforms=function(){return B===void 0&&I(this),B};let L;this.getAttributes=function(){return L===void 0&&I(this),L};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(M,$w)),C},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yw++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=H,this.fragmentShader=F,this}let pT=0;class mT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new gT(e),t.set(e,r)),r}}class gT{constructor(e){this.id=pT++,this.code=e,this.usedTimes=0}}function _T(s,e,t,r,a,l,u){const h=new qg,d=new mT,p=new Set,g=[],y=a.logarithmicDepthBuffer,v=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(L){return p.add(L),L===0?"uv":`uv${L}`}function x(L,C,k,oe,J){const pe=oe.fog,me=J.geometry,ue=L.isMeshStandardMaterial?oe.environment:null,ce=(L.isMeshStandardMaterial?t:e).get(L.envMap||ue),z=ce&&ce.mapping===Kl?ce.image.height:null,he=E[L.type];L.precision!==null&&(S=a.getMaxPrecision(L.precision),S!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",S,"instead."));const le=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,U=le!==void 0?le.length:0;let ie=0;me.morphAttributes.position!==void 0&&(ie=1),me.morphAttributes.normal!==void 0&&(ie=2),me.morphAttributes.color!==void 0&&(ie=3);let Ue,Q,fe,Te;if(he){const Mt=Ai[he];Ue=Mt.vertexShader,Q=Mt.fragmentShader}else Ue=L.vertexShader,Q=L.fragmentShader,d.update(L),fe=d.getVertexShaderID(L),Te=d.getFragmentShaderID(L);const Se=s.getRenderTarget(),be=s.state.buffers.depth.getReversed(),Oe=J.isInstancedMesh===!0,Ke=J.isBatchedMesh===!0,wt=!!L.map,gt=!!L.matcap,xt=!!ce,X=!!L.aoMap,Wt=!!L.lightMap,ut=!!L.bumpMap,ot=!!L.normalMap,Je=!!L.displacementMap,Tt=!!L.emissiveMap,je=!!L.metalnessMap,D=!!L.roughnessMap,T=L.anisotropy>0,Z=L.clearcoat>0,_e=L.dispersion>0,xe=L.iridescence>0,de=L.sheen>0,Ve=L.transmission>0,Pe=T&&!!L.anisotropyMap,Ne=Z&&!!L.clearcoatMap,lt=Z&&!!L.clearcoatNormalMap,Ee=Z&&!!L.clearcoatRoughnessMap,ze=xe&&!!L.iridescenceMap,Y=xe&&!!L.iridescenceThicknessMap,re=de&&!!L.sheenColorMap,ve=de&&!!L.sheenRoughnessMap,Qe=!!L.specularMap,Be=!!L.specularColorMap,et=!!L.specularIntensityMap,G=Ve&&!!L.transmissionMap,Le=Ve&&!!L.thicknessMap,ae=!!L.gradientMap,ge=!!L.alphaMap,Fe=L.alphaTest>0,Ie=!!L.alphaHash,ct=!!L.extensions;let Ft=Ki;L.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(Ft=s.toneMapping);const qt={shaderID:he,shaderType:L.type,shaderName:L.name,vertexShader:Ue,fragmentShader:Q,defines:L.defines,customVertexShaderID:fe,customFragmentShaderID:Te,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:S,batching:Ke,batchingColor:Ke&&J._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&J.instanceColor!==null,instancingMorph:Oe&&J.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Se===null?s.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:uo,alphaToCoverage:!!L.alphaToCoverage,map:wt,matcap:gt,envMap:xt,envMapMode:xt&&ce.mapping,envMapCubeUVHeight:z,aoMap:X,lightMap:Wt,bumpMap:ut,normalMap:ot,displacementMap:v&&Je,emissiveMap:Tt,normalMapObjectSpace:ot&&L.normalMapType===TS,normalMapTangentSpace:ot&&L.normalMapType===Wg,metalnessMap:je,roughnessMap:D,anisotropy:T,anisotropyMap:Pe,clearcoat:Z,clearcoatMap:Ne,clearcoatNormalMap:lt,clearcoatRoughnessMap:Ee,dispersion:_e,iridescence:xe,iridescenceMap:ze,iridescenceThicknessMap:Y,sheen:de,sheenColorMap:re,sheenRoughnessMap:ve,specularMap:Qe,specularColorMap:Be,specularIntensityMap:et,transmission:Ve,transmissionMap:G,thicknessMap:Le,gradientMap:ae,opaque:L.transparent===!1&&L.blending===Js&&L.alphaToCoverage===!1,alphaMap:ge,alphaTest:Fe,alphaHash:Ie,combine:L.combine,mapUv:wt&&M(L.map.channel),aoMapUv:X&&M(L.aoMap.channel),lightMapUv:Wt&&M(L.lightMap.channel),bumpMapUv:ut&&M(L.bumpMap.channel),normalMapUv:ot&&M(L.normalMap.channel),displacementMapUv:Je&&M(L.displacementMap.channel),emissiveMapUv:Tt&&M(L.emissiveMap.channel),metalnessMapUv:je&&M(L.metalnessMap.channel),roughnessMapUv:D&&M(L.roughnessMap.channel),anisotropyMapUv:Pe&&M(L.anisotropyMap.channel),clearcoatMapUv:Ne&&M(L.clearcoatMap.channel),clearcoatNormalMapUv:lt&&M(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&M(L.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&M(L.iridescenceMap.channel),iridescenceThicknessMapUv:Y&&M(L.iridescenceThicknessMap.channel),sheenColorMapUv:re&&M(L.sheenColorMap.channel),sheenRoughnessMapUv:ve&&M(L.sheenRoughnessMap.channel),specularMapUv:Qe&&M(L.specularMap.channel),specularColorMapUv:Be&&M(L.specularColorMap.channel),specularIntensityMapUv:et&&M(L.specularIntensityMap.channel),transmissionMapUv:G&&M(L.transmissionMap.channel),thicknessMapUv:Le&&M(L.thicknessMap.channel),alphaMapUv:ge&&M(L.alphaMap.channel),vertexTangents:!!me.attributes.tangent&&(ot||T),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!me.attributes.uv&&(wt||ge),fog:!!pe,useFog:L.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:y,reverseDepthBuffer:be,skinning:J.isSkinnedMesh===!0,morphTargets:me.morphAttributes.position!==void 0,morphNormals:me.morphAttributes.normal!==void 0,morphColors:me.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ie,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:L.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ft,decodeVideoTexture:wt&&L.map.isVideoTexture===!0&&St.getTransfer(L.map.colorSpace)===Lt,decodeVideoTextureEmissive:Tt&&L.emissiveMap.isVideoTexture===!0&&St.getTransfer(L.emissiveMap.colorSpace)===Lt,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===Ci,flipSided:L.side===vn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:ct&&L.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&L.extensions.multiDraw===!0||Ke)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return qt.vertexUv1s=p.has(1),qt.vertexUv2s=p.has(2),qt.vertexUv3s=p.has(3),p.clear(),qt}function _(L){const C=[];if(L.shaderID?C.push(L.shaderID):(C.push(L.customVertexShaderID),C.push(L.customFragmentShaderID)),L.defines!==void 0)for(const k in L.defines)C.push(k),C.push(L.defines[k]);return L.isRawShaderMaterial===!1&&(b(C,L),P(C,L),C.push(s.outputColorSpace)),C.push(L.customProgramCacheKey),C.join()}function b(L,C){L.push(C.precision),L.push(C.outputColorSpace),L.push(C.envMapMode),L.push(C.envMapCubeUVHeight),L.push(C.mapUv),L.push(C.alphaMapUv),L.push(C.lightMapUv),L.push(C.aoMapUv),L.push(C.bumpMapUv),L.push(C.normalMapUv),L.push(C.displacementMapUv),L.push(C.emissiveMapUv),L.push(C.metalnessMapUv),L.push(C.roughnessMapUv),L.push(C.anisotropyMapUv),L.push(C.clearcoatMapUv),L.push(C.clearcoatNormalMapUv),L.push(C.clearcoatRoughnessMapUv),L.push(C.iridescenceMapUv),L.push(C.iridescenceThicknessMapUv),L.push(C.sheenColorMapUv),L.push(C.sheenRoughnessMapUv),L.push(C.specularMapUv),L.push(C.specularColorMapUv),L.push(C.specularIntensityMapUv),L.push(C.transmissionMapUv),L.push(C.thicknessMapUv),L.push(C.combine),L.push(C.fogExp2),L.push(C.sizeAttenuation),L.push(C.morphTargetsCount),L.push(C.morphAttributeCount),L.push(C.numDirLights),L.push(C.numPointLights),L.push(C.numSpotLights),L.push(C.numSpotLightMaps),L.push(C.numHemiLights),L.push(C.numRectAreaLights),L.push(C.numDirLightShadows),L.push(C.numPointLightShadows),L.push(C.numSpotLightShadows),L.push(C.numSpotLightShadowsWithMaps),L.push(C.numLightProbes),L.push(C.shadowMapType),L.push(C.toneMapping),L.push(C.numClippingPlanes),L.push(C.numClipIntersection),L.push(C.depthPacking)}function P(L,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),L.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reverseDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),L.push(h.mask)}function A(L){const C=E[L.type];let k;if(C){const oe=Ai[C];k=vf.clone(oe.uniforms)}else k=L.uniforms;return k}function H(L,C){let k;for(let oe=0,J=g.length;oe<J;oe++){const pe=g[oe];if(pe.cacheKey===C){k=pe,++k.usedTimes;break}}return k===void 0&&(k=new dT(s,C,L,l),g.push(k)),k}function F(L){if(--L.usedTimes===0){const C=g.indexOf(L);g[C]=g[g.length-1],g.pop(),L.destroy()}}function I(L){d.remove(L)}function B(){d.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:A,acquireProgram:H,releaseProgram:F,releaseShaderCache:I,programs:g,dispose:B}}function vT(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let h=s.get(u);return h===void 0&&(h={},s.set(u,h)),h}function r(u){s.delete(u)}function a(u,h,d){s.get(u)[h]=d}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function xT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Qm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Jm(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function u(y,v,S,E,M,x){let _=s[e];return _===void 0?(_={id:y.id,object:y,geometry:v,material:S,groupOrder:E,renderOrder:y.renderOrder,z:M,group:x},s[e]=_):(_.id=y.id,_.object=y,_.geometry=v,_.material=S,_.groupOrder=E,_.renderOrder=y.renderOrder,_.z=M,_.group=x),e++,_}function h(y,v,S,E,M,x){const _=u(y,v,S,E,M,x);S.transmission>0?r.push(_):S.transparent===!0?a.push(_):t.push(_)}function d(y,v,S,E,M,x){const _=u(y,v,S,E,M,x);S.transmission>0?r.unshift(_):S.transparent===!0?a.unshift(_):t.unshift(_)}function p(y,v){t.length>1&&t.sort(y||xT),r.length>1&&r.sort(v||Qm),a.length>1&&a.sort(v||Qm)}function g(){for(let y=e,v=s.length;y<v;y++){const S=s[y];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:h,unshift:d,finish:g,sort:p}}function yT(){let s=new WeakMap;function e(r,a){const l=s.get(r);let u;return l===void 0?(u=new Jm,s.set(r,[u])):a>=l.length?(u=new Jm,l.push(u)):u=l[a],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function ST(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new ft};break;case"SpotLight":t={position:new W,direction:new W,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":t={color:new ft,position:new W,halfWidth:new W,halfHeight:new W};break}return s[e.id]=t,t}}}function MT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let ET=0;function wT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function TT(s){const e=new ST,t=MT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new W);const a=new W,l=new zt,u=new zt;function h(p){let g=0,y=0,v=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let S=0,E=0,M=0,x=0,_=0,b=0,P=0,A=0,H=0,F=0,I=0;p.sort(wT);for(let L=0,C=p.length;L<C;L++){const k=p[L],oe=k.color,J=k.intensity,pe=k.distance,me=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)g+=oe.r*J,y+=oe.g*J,v+=oe.b*J;else if(k.isLightProbe){for(let ue=0;ue<9;ue++)r.probe[ue].addScaledVector(k.sh.coefficients[ue],J);I++}else if(k.isDirectionalLight){const ue=e.get(k);if(ue.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const ce=k.shadow,z=t.get(k);z.shadowIntensity=ce.intensity,z.shadowBias=ce.bias,z.shadowNormalBias=ce.normalBias,z.shadowRadius=ce.radius,z.shadowMapSize=ce.mapSize,r.directionalShadow[S]=z,r.directionalShadowMap[S]=me,r.directionalShadowMatrix[S]=k.shadow.matrix,b++}r.directional[S]=ue,S++}else if(k.isSpotLight){const ue=e.get(k);ue.position.setFromMatrixPosition(k.matrixWorld),ue.color.copy(oe).multiplyScalar(J),ue.distance=pe,ue.coneCos=Math.cos(k.angle),ue.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ue.decay=k.decay,r.spot[M]=ue;const ce=k.shadow;if(k.map&&(r.spotLightMap[H]=k.map,H++,ce.updateMatrices(k),k.castShadow&&F++),r.spotLightMatrix[M]=ce.matrix,k.castShadow){const z=t.get(k);z.shadowIntensity=ce.intensity,z.shadowBias=ce.bias,z.shadowNormalBias=ce.normalBias,z.shadowRadius=ce.radius,z.shadowMapSize=ce.mapSize,r.spotShadow[M]=z,r.spotShadowMap[M]=me,A++}M++}else if(k.isRectAreaLight){const ue=e.get(k);ue.color.copy(oe).multiplyScalar(J),ue.halfWidth.set(k.width*.5,0,0),ue.halfHeight.set(0,k.height*.5,0),r.rectArea[x]=ue,x++}else if(k.isPointLight){const ue=e.get(k);if(ue.color.copy(k.color).multiplyScalar(k.intensity),ue.distance=k.distance,ue.decay=k.decay,k.castShadow){const ce=k.shadow,z=t.get(k);z.shadowIntensity=ce.intensity,z.shadowBias=ce.bias,z.shadowNormalBias=ce.normalBias,z.shadowRadius=ce.radius,z.shadowMapSize=ce.mapSize,z.shadowCameraNear=ce.camera.near,z.shadowCameraFar=ce.camera.far,r.pointShadow[E]=z,r.pointShadowMap[E]=me,r.pointShadowMatrix[E]=k.shadow.matrix,P++}r.point[E]=ue,E++}else if(k.isHemisphereLight){const ue=e.get(k);ue.skyColor.copy(k.color).multiplyScalar(J),ue.groundColor.copy(k.groundColor).multiplyScalar(J),r.hemi[_]=ue,_++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=y,r.ambient[2]=v;const B=r.hash;(B.directionalLength!==S||B.pointLength!==E||B.spotLength!==M||B.rectAreaLength!==x||B.hemiLength!==_||B.numDirectionalShadows!==b||B.numPointShadows!==P||B.numSpotShadows!==A||B.numSpotMaps!==H||B.numLightProbes!==I)&&(r.directional.length=S,r.spot.length=M,r.rectArea.length=x,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=A+H-F,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=I,B.directionalLength=S,B.pointLength=E,B.spotLength=M,B.rectAreaLength=x,B.hemiLength=_,B.numDirectionalShadows=b,B.numPointShadows=P,B.numSpotShadows=A,B.numSpotMaps=H,B.numLightProbes=I,r.version=ET++)}function d(p,g){let y=0,v=0,S=0,E=0,M=0;const x=g.matrixWorldInverse;for(let _=0,b=p.length;_<b;_++){const P=p[_];if(P.isDirectionalLight){const A=r.directional[y];A.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(x),y++}else if(P.isSpotLight){const A=r.spot[S];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(x),A.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(x),S++}else if(P.isRectAreaLight){const A=r.rectArea[E];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(x),u.identity(),l.copy(P.matrixWorld),l.premultiply(x),u.extractRotation(l),A.halfWidth.set(P.width*.5,0,0),A.halfHeight.set(0,P.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),E++}else if(P.isPointLight){const A=r.point[v];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(x),v++}else if(P.isHemisphereLight){const A=r.hemi[M];A.direction.setFromMatrixPosition(P.matrixWorld),A.direction.transformDirection(x),M++}}}return{setup:h,setupView:d,state:r}}function eg(s){const e=new TT(s),t=[],r=[];function a(g){p.camera=g,t.length=0,r.length=0}function l(g){t.push(g)}function u(g){r.push(g)}function h(){e.setup(t)}function d(g){e.setupView(t,g)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:h,setupLightsView:d,pushLight:l,pushShadow:u}}function AT(s){let e=new WeakMap;function t(a,l=0){const u=e.get(a);let h;return u===void 0?(h=new eg(s),e.set(a,[h])):l>=u.length?(h=new eg(s),u.push(h)):h=u[l],h}function r(){e=new WeakMap}return{get:t,dispose:r}}class CT extends ho{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ES,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class RT extends ho{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function LT(s,e,t){let r=new xf;const a=new it,l=new it,u=new Nt,h=new CT({depthPacking:wS}),d=new RT,p={},g=t.maxTextureSize,y={[Pr]:vn,[vn]:Pr,[Ci]:Ci},v=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:bT,fragmentShader:PT}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new ii;E.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Rt(E,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wg;let _=this.type;this.render=function(F,I,B){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||F.length===0)return;const L=s.getRenderTarget(),C=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),oe=s.state;oe.setBlending(qi),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const J=_!==ji&&this.type===ji,pe=_===ji&&this.type!==ji;for(let me=0,ue=F.length;me<ue;me++){const ce=F[me],z=ce.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const he=z.getFrameExtents();if(a.multiply(he),l.copy(z.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(l.x=Math.floor(g/he.x),a.x=l.x*he.x,z.mapSize.x=l.x),a.y>g&&(l.y=Math.floor(g/he.y),a.y=l.y*he.y,z.mapSize.y=l.y)),z.map===null||J===!0||pe===!0){const U=this.type!==ji?{minFilter:_i,magFilter:_i}:{};z.map!==null&&z.map.dispose(),z.map=new Lr(a.x,a.y,U),z.map.texture.name=ce.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const le=z.getViewportCount();for(let U=0;U<le;U++){const ie=z.getViewport(U);u.set(l.x*ie.x,l.y*ie.y,l.x*ie.z,l.y*ie.w),oe.viewport(u),z.updateMatrices(ce,U),r=z.getFrustum(),A(I,B,z.camera,ce,this.type)}z.isPointLightShadow!==!0&&this.type===ji&&b(z,B),z.needsUpdate=!1}_=this.type,x.needsUpdate=!1,s.setRenderTarget(L,C,k)};function b(F,I){const B=e.update(M);v.defines.VSM_SAMPLES!==F.blurSamples&&(v.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Lr(a.x,a.y)),v.uniforms.shadow_pass.value=F.map.texture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(I,null,B,v,M,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(I,null,B,S,M,null)}function P(F,I,B,L){let C=null;const k=B.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(k!==void 0)C=k;else if(C=B.isPointLight===!0?d:h,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const oe=C.uuid,J=I.uuid;let pe=p[oe];pe===void 0&&(pe={},p[oe]=pe);let me=pe[J];me===void 0&&(me=C.clone(),pe[J]=me,I.addEventListener("dispose",H)),C=me}if(C.visible=I.visible,C.wireframe=I.wireframe,L===ji?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:y[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,B.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const oe=s.properties.get(C);oe.light=B}return C}function A(F,I,B,L,C){if(F.visible===!1)return;if(F.layers.test(I.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===ji)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,F.matrixWorld);const J=e.update(F),pe=F.material;if(Array.isArray(pe)){const me=J.groups;for(let ue=0,ce=me.length;ue<ce;ue++){const z=me[ue],he=pe[z.materialIndex];if(he&&he.visible){const le=P(F,he,L,C);F.onBeforeShadow(s,F,I,B,J,le,z),s.renderBufferDirect(B,null,J,le,F,z),F.onAfterShadow(s,F,I,B,J,le,z)}}}else if(pe.visible){const me=P(F,pe,L,C);F.onBeforeShadow(s,F,I,B,J,me,null),s.renderBufferDirect(B,null,J,me,F,null),F.onAfterShadow(s,F,I,B,J,me,null)}}const oe=F.children;for(let J=0,pe=oe.length;J<pe;J++)A(oe[J],I,B,L,C)}function H(F){F.target.removeEventListener("dispose",H);for(const B in p){const L=p[B],C=F.target.uuid;C in L&&(L[C].dispose(),delete L[C])}}}const DT={[yh]:Sh,[Mh]:Th,[Eh]:Ah,[no]:wh,[Sh]:yh,[Th]:Mh,[Ah]:Eh,[wh]:no};function NT(s,e){function t(){let G=!1;const Le=new Nt;let ae=null;const ge=new Nt(0,0,0,0);return{setMask:function(Fe){ae!==Fe&&!G&&(s.colorMask(Fe,Fe,Fe,Fe),ae=Fe)},setLocked:function(Fe){G=Fe},setClear:function(Fe,Ie,ct,Ft,qt){qt===!0&&(Fe*=Ft,Ie*=Ft,ct*=Ft),Le.set(Fe,Ie,ct,Ft),ge.equals(Le)===!1&&(s.clearColor(Fe,Ie,ct,Ft),ge.copy(Le))},reset:function(){G=!1,ae=null,ge.set(-1,0,0,0)}}}function r(){let G=!1,Le=!1,ae=null,ge=null,Fe=null;return{setReversed:function(Ie){if(Le!==Ie){const ct=e.get("EXT_clip_control");Le?ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.ZERO_TO_ONE_EXT):ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.NEGATIVE_ONE_TO_ONE_EXT);const Ft=Fe;Fe=null,this.setClear(Ft)}Le=Ie},getReversed:function(){return Le},setTest:function(Ie){Ie?Se(s.DEPTH_TEST):be(s.DEPTH_TEST)},setMask:function(Ie){ae!==Ie&&!G&&(s.depthMask(Ie),ae=Ie)},setFunc:function(Ie){if(Le&&(Ie=DT[Ie]),ge!==Ie){switch(Ie){case yh:s.depthFunc(s.NEVER);break;case Sh:s.depthFunc(s.ALWAYS);break;case Mh:s.depthFunc(s.LESS);break;case no:s.depthFunc(s.LEQUAL);break;case Eh:s.depthFunc(s.EQUAL);break;case wh:s.depthFunc(s.GEQUAL);break;case Th:s.depthFunc(s.GREATER);break;case Ah:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ge=Ie}},setLocked:function(Ie){G=Ie},setClear:function(Ie){Fe!==Ie&&(Le&&(Ie=1-Ie),s.clearDepth(Ie),Fe=Ie)},reset:function(){G=!1,ae=null,ge=null,Fe=null,Le=!1}}}function a(){let G=!1,Le=null,ae=null,ge=null,Fe=null,Ie=null,ct=null,Ft=null,qt=null;return{setTest:function(Mt){G||(Mt?Se(s.STENCIL_TEST):be(s.STENCIL_TEST))},setMask:function(Mt){Le!==Mt&&!G&&(s.stencilMask(Mt),Le=Mt)},setFunc:function(Mt,Cn,xn){(ae!==Mt||ge!==Cn||Fe!==xn)&&(s.stencilFunc(Mt,Cn,xn),ae=Mt,ge=Cn,Fe=xn)},setOp:function(Mt,Cn,xn){(Ie!==Mt||ct!==Cn||Ft!==xn)&&(s.stencilOp(Mt,Cn,xn),Ie=Mt,ct=Cn,Ft=xn)},setLocked:function(Mt){G=Mt},setClear:function(Mt){qt!==Mt&&(s.clearStencil(Mt),qt=Mt)},reset:function(){G=!1,Le=null,ae=null,ge=null,Fe=null,Ie=null,ct=null,Ft=null,qt=null}}}const l=new t,u=new r,h=new a,d=new WeakMap,p=new WeakMap;let g={},y={},v=new WeakMap,S=[],E=null,M=!1,x=null,_=null,b=null,P=null,A=null,H=null,F=null,I=new ft(0,0,0),B=0,L=!1,C=null,k=null,oe=null,J=null,pe=null;const me=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ue=!1,ce=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(z)[1]),ue=ce>=1):z.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),ue=ce>=2);let he=null,le={};const U=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),Ue=new Nt().fromArray(U),Q=new Nt().fromArray(ie);function fe(G,Le,ae,ge){const Fe=new Uint8Array(4),Ie=s.createTexture();s.bindTexture(G,Ie),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ct=0;ct<ae;ct++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Le,0,s.RGBA,1,1,ge,0,s.RGBA,s.UNSIGNED_BYTE,Fe):s.texImage2D(Le+ct,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Fe);return Ie}const Te={};Te[s.TEXTURE_2D]=fe(s.TEXTURE_2D,s.TEXTURE_2D,1),Te[s.TEXTURE_CUBE_MAP]=fe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[s.TEXTURE_2D_ARRAY]=fe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Te[s.TEXTURE_3D]=fe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),h.setClear(0),Se(s.DEPTH_TEST),u.setFunc(no),ut(!1),ot(sm),Se(s.CULL_FACE),X(qi);function Se(G){g[G]!==!0&&(s.enable(G),g[G]=!0)}function be(G){g[G]!==!1&&(s.disable(G),g[G]=!1)}function Oe(G,Le){return y[G]!==Le?(s.bindFramebuffer(G,Le),y[G]=Le,G===s.DRAW_FRAMEBUFFER&&(y[s.FRAMEBUFFER]=Le),G===s.FRAMEBUFFER&&(y[s.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ke(G,Le){let ae=S,ge=!1;if(G){ae=v.get(Le),ae===void 0&&(ae=[],v.set(Le,ae));const Fe=G.textures;if(ae.length!==Fe.length||ae[0]!==s.COLOR_ATTACHMENT0){for(let Ie=0,ct=Fe.length;Ie<ct;Ie++)ae[Ie]=s.COLOR_ATTACHMENT0+Ie;ae.length=Fe.length,ge=!0}}else ae[0]!==s.BACK&&(ae[0]=s.BACK,ge=!0);ge&&s.drawBuffers(ae)}function wt(G){return E!==G?(s.useProgram(G),E=G,!0):!1}const gt={[ns]:s.FUNC_ADD,[nS]:s.FUNC_SUBTRACT,[iS]:s.FUNC_REVERSE_SUBTRACT};gt[rS]=s.MIN,gt[sS]=s.MAX;const xt={[oS]:s.ZERO,[aS]:s.ONE,[lS]:s.SRC_COLOR,[vh]:s.SRC_ALPHA,[pS]:s.SRC_ALPHA_SATURATE,[fS]:s.DST_COLOR,[uS]:s.DST_ALPHA,[cS]:s.ONE_MINUS_SRC_COLOR,[xh]:s.ONE_MINUS_SRC_ALPHA,[dS]:s.ONE_MINUS_DST_COLOR,[hS]:s.ONE_MINUS_DST_ALPHA,[mS]:s.CONSTANT_COLOR,[gS]:s.ONE_MINUS_CONSTANT_COLOR,[_S]:s.CONSTANT_ALPHA,[vS]:s.ONE_MINUS_CONSTANT_ALPHA};function X(G,Le,ae,ge,Fe,Ie,ct,Ft,qt,Mt){if(G===qi){M===!0&&(be(s.BLEND),M=!1);return}if(M===!1&&(Se(s.BLEND),M=!0),G!==tS){if(G!==x||Mt!==L){if((_!==ns||A!==ns)&&(s.blendEquation(s.FUNC_ADD),_=ns,A=ns),Mt)switch(G){case Js:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case om:s.blendFunc(s.ONE,s.ONE);break;case am:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case lm:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Js:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case om:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case am:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case lm:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}b=null,P=null,H=null,F=null,I.set(0,0,0),B=0,x=G,L=Mt}return}Fe=Fe||Le,Ie=Ie||ae,ct=ct||ge,(Le!==_||Fe!==A)&&(s.blendEquationSeparate(gt[Le],gt[Fe]),_=Le,A=Fe),(ae!==b||ge!==P||Ie!==H||ct!==F)&&(s.blendFuncSeparate(xt[ae],xt[ge],xt[Ie],xt[ct]),b=ae,P=ge,H=Ie,F=ct),(Ft.equals(I)===!1||qt!==B)&&(s.blendColor(Ft.r,Ft.g,Ft.b,qt),I.copy(Ft),B=qt),x=G,L=!1}function Wt(G,Le){G.side===Ci?be(s.CULL_FACE):Se(s.CULL_FACE);let ae=G.side===vn;Le&&(ae=!ae),ut(ae),G.blending===Js&&G.transparent===!1?X(qi):X(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),l.setMask(G.colorWrite);const ge=G.stencilWrite;h.setTest(ge),ge&&(h.setMask(G.stencilWriteMask),h.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),h.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Tt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Se(s.SAMPLE_ALPHA_TO_COVERAGE):be(s.SAMPLE_ALPHA_TO_COVERAGE)}function ut(G){C!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),C=G)}function ot(G){G!==Jy?(Se(s.CULL_FACE),G!==k&&(G===sm?s.cullFace(s.BACK):G===eS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):be(s.CULL_FACE),k=G}function Je(G){G!==oe&&(ue&&s.lineWidth(G),oe=G)}function Tt(G,Le,ae){G?(Se(s.POLYGON_OFFSET_FILL),(J!==Le||pe!==ae)&&(s.polygonOffset(Le,ae),J=Le,pe=ae)):be(s.POLYGON_OFFSET_FILL)}function je(G){G?Se(s.SCISSOR_TEST):be(s.SCISSOR_TEST)}function D(G){G===void 0&&(G=s.TEXTURE0+me-1),he!==G&&(s.activeTexture(G),he=G)}function T(G,Le,ae){ae===void 0&&(he===null?ae=s.TEXTURE0+me-1:ae=he);let ge=le[ae];ge===void 0&&(ge={type:void 0,texture:void 0},le[ae]=ge),(ge.type!==G||ge.texture!==Le)&&(he!==ae&&(s.activeTexture(ae),he=ae),s.bindTexture(G,Le||Te[G]),ge.type=G,ge.texture=Le)}function Z(){const G=le[he];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function _e(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function de(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ne(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function lt(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ze(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Y(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function re(G){Ue.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Ue.copy(G))}function ve(G){Q.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Q.copy(G))}function Qe(G,Le){let ae=p.get(Le);ae===void 0&&(ae=new WeakMap,p.set(Le,ae));let ge=ae.get(G);ge===void 0&&(ge=s.getUniformBlockIndex(Le,G.name),ae.set(G,ge))}function Be(G,Le){const ge=p.get(Le).get(G);d.get(Le)!==ge&&(s.uniformBlockBinding(Le,ge,G.__bindingPointIndex),d.set(Le,ge))}function et(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},he=null,le={},y={},v=new WeakMap,S=[],E=null,M=!1,x=null,_=null,b=null,P=null,A=null,H=null,F=null,I=new ft(0,0,0),B=0,L=!1,C=null,k=null,oe=null,J=null,pe=null,Ue.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),h.reset()}return{buffers:{color:l,depth:u,stencil:h},enable:Se,disable:be,bindFramebuffer:Oe,drawBuffers:Ke,useProgram:wt,setBlending:X,setMaterial:Wt,setFlipSided:ut,setCullFace:ot,setLineWidth:Je,setPolygonOffset:Tt,setScissorTest:je,activeTexture:D,bindTexture:T,unbindTexture:Z,compressedTexImage2D:_e,compressedTexImage3D:xe,texImage2D:ze,texImage3D:Y,updateUBOMapping:Qe,uniformBlockBinding:Be,texStorage2D:lt,texStorage3D:Ee,texSubImage2D:de,texSubImage3D:Ve,compressedTexSubImage2D:Pe,compressedTexSubImage3D:Ne,scissor:re,viewport:ve,reset:et}}function tg(s,e,t,r){const a=IT(r);switch(t){case Og:return s*e;case Bg:return s*e;case zg:return s*e*2;case Vg:return s*e/a.components*a.byteLength;case pf:return s*e/a.components*a.byteLength;case Hg:return s*e*2/a.components*a.byteLength;case mf:return s*e*2/a.components*a.byteLength;case kg:return s*e*3/a.components*a.byteLength;case gi:return s*e*4/a.components*a.byteLength;case gf:return s*e*4/a.components*a.byteLength;case Vl:case Hl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Gl:case Wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Dh:case Ih:return Math.max(s,16)*Math.max(e,8)/4;case Lh:case Nh:return Math.max(s,8)*Math.max(e,8)/2;case Uh:case Fh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Oh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case kh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case zh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case jh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case $h:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Yh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case qh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Kh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Zh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Xl:case Qh:case Jh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Gg:case ef:return Math.ceil(s/4)*Math.ceil(e/4)*8;case tf:case nf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function IT(s){switch(s){case Qi:case Ig:return{byteLength:1,components:1};case ia:case Ug:case co:return{byteLength:2,components:1};case ff:case df:return{byteLength:2,components:4};case as:case hf:case $i:return{byteLength:4,components:1};case Fg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function UT(s,e,t,r,a,l,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new it,g=new WeakMap;let y;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,T){return S?new OffscreenCanvas(D,T):ql("canvas")}function M(D,T,Z){let _e=1;const xe=je(D);if((xe.width>Z||xe.height>Z)&&(_e=Z/Math.max(xe.width,xe.height)),_e<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const de=Math.floor(_e*xe.width),Ve=Math.floor(_e*xe.height);y===void 0&&(y=E(de,Ve));const Pe=T?E(de,Ve):y;return Pe.width=de,Pe.height=Ve,Pe.getContext("2d").drawImage(D,0,0,de,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+de+"x"+Ve+")."),Pe}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),D;return D}function x(D){return D.generateMipmaps}function _(D){s.generateMipmap(D)}function b(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(D,T,Z,_e,xe=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let de=T;if(T===s.RED&&(Z===s.FLOAT&&(de=s.R32F),Z===s.HALF_FLOAT&&(de=s.R16F),Z===s.UNSIGNED_BYTE&&(de=s.R8)),T===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(de=s.R8UI),Z===s.UNSIGNED_SHORT&&(de=s.R16UI),Z===s.UNSIGNED_INT&&(de=s.R32UI),Z===s.BYTE&&(de=s.R8I),Z===s.SHORT&&(de=s.R16I),Z===s.INT&&(de=s.R32I)),T===s.RG&&(Z===s.FLOAT&&(de=s.RG32F),Z===s.HALF_FLOAT&&(de=s.RG16F),Z===s.UNSIGNED_BYTE&&(de=s.RG8)),T===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(de=s.RG8UI),Z===s.UNSIGNED_SHORT&&(de=s.RG16UI),Z===s.UNSIGNED_INT&&(de=s.RG32UI),Z===s.BYTE&&(de=s.RG8I),Z===s.SHORT&&(de=s.RG16I),Z===s.INT&&(de=s.RG32I)),T===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(de=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(de=s.RGB16UI),Z===s.UNSIGNED_INT&&(de=s.RGB32UI),Z===s.BYTE&&(de=s.RGB8I),Z===s.SHORT&&(de=s.RGB16I),Z===s.INT&&(de=s.RGB32I)),T===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),Z===s.UNSIGNED_INT&&(de=s.RGBA32UI),Z===s.BYTE&&(de=s.RGBA8I),Z===s.SHORT&&(de=s.RGBA16I),Z===s.INT&&(de=s.RGBA32I)),T===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),T===s.RGBA){const Ve=xe?Zl:St.getTransfer(_e);Z===s.FLOAT&&(de=s.RGBA32F),Z===s.HALF_FLOAT&&(de=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(de=Ve===Lt?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function A(D,T){let Z;return D?T===null||T===as||T===so?Z=s.DEPTH24_STENCIL8:T===$i?Z=s.DEPTH32F_STENCIL8:T===ia&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===as||T===so?Z=s.DEPTH_COMPONENT24:T===$i?Z=s.DEPTH_COMPONENT32F:T===ia&&(Z=s.DEPTH_COMPONENT16),Z}function H(D,T){return x(D)===!0||D.isFramebufferTexture&&D.minFilter!==_i&&D.minFilter!==Ri?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function F(D){const T=D.target;T.removeEventListener("dispose",F),B(T),T.isVideoTexture&&g.delete(T)}function I(D){const T=D.target;T.removeEventListener("dispose",I),C(T)}function B(D){const T=r.get(D);if(T.__webglInit===void 0)return;const Z=D.source,_e=v.get(Z);if(_e){const xe=_e[T.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&L(D),Object.keys(_e).length===0&&v.delete(Z)}r.remove(D)}function L(D){const T=r.get(D);s.deleteTexture(T.__webglTexture);const Z=D.source,_e=v.get(Z);delete _e[T.__cacheKey],u.memory.textures--}function C(D){const T=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(T.__webglFramebuffer[_e]))for(let xe=0;xe<T.__webglFramebuffer[_e].length;xe++)s.deleteFramebuffer(T.__webglFramebuffer[_e][xe]);else s.deleteFramebuffer(T.__webglFramebuffer[_e]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[_e])}else{if(Array.isArray(T.__webglFramebuffer))for(let _e=0;_e<T.__webglFramebuffer.length;_e++)s.deleteFramebuffer(T.__webglFramebuffer[_e]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let _e=0;_e<T.__webglColorRenderbuffer.length;_e++)T.__webglColorRenderbuffer[_e]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[_e]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Z=D.textures;for(let _e=0,xe=Z.length;_e<xe;_e++){const de=r.get(Z[_e]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),u.memory.textures--),r.remove(Z[_e])}r.remove(D)}let k=0;function oe(){k=0}function J(){const D=k;return D>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),k+=1,D}function pe(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function me(D,T){const Z=r.get(D);if(D.isVideoTexture&&Je(D),D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){const _e=D.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(Z,D,T);return}}t.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+T)}function ue(D,T){const Z=r.get(D);if(D.version>0&&Z.__version!==D.version){Q(Z,D,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+T)}function ce(D,T){const Z=r.get(D);if(D.version>0&&Z.__version!==D.version){Q(Z,D,T);return}t.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+T)}function z(D,T){const Z=r.get(D);if(D.version>0&&Z.__version!==D.version){fe(Z,D,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+T)}const he={[bh]:s.REPEAT,[ss]:s.CLAMP_TO_EDGE,[Ph]:s.MIRRORED_REPEAT},le={[_i]:s.NEAREST,[MS]:s.NEAREST_MIPMAP_NEAREST,[dl]:s.NEAREST_MIPMAP_LINEAR,[Ri]:s.LINEAR,[Ou]:s.LINEAR_MIPMAP_NEAREST,[os]:s.LINEAR_MIPMAP_LINEAR},U={[AS]:s.NEVER,[DS]:s.ALWAYS,[CS]:s.LESS,[Xg]:s.LEQUAL,[RS]:s.EQUAL,[LS]:s.GEQUAL,[bS]:s.GREATER,[PS]:s.NOTEQUAL};function ie(D,T){if(T.type===$i&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ri||T.magFilter===Ou||T.magFilter===dl||T.magFilter===os||T.minFilter===Ri||T.minFilter===Ou||T.minFilter===dl||T.minFilter===os)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,he[T.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,he[T.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,he[T.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,le[T.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,le[T.minFilter]),T.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,U[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===_i||T.minFilter!==dl&&T.minFilter!==os||T.type===$i&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ue(D,T){let Z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",F));const _e=T.source;let xe=v.get(_e);xe===void 0&&(xe={},v.set(_e,xe));const de=pe(T);if(de!==D.__cacheKey){xe[de]===void 0&&(xe[de]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,Z=!0),xe[de].usedTimes++;const Ve=xe[D.__cacheKey];Ve!==void 0&&(xe[D.__cacheKey].usedTimes--,Ve.usedTimes===0&&L(T)),D.__cacheKey=de,D.__webglTexture=xe[de].texture}return Z}function Q(D,T,Z){let _e=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(_e=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(_e=s.TEXTURE_3D);const xe=Ue(D,T),de=T.source;t.bindTexture(_e,D.__webglTexture,s.TEXTURE0+Z);const Ve=r.get(de);if(de.version!==Ve.__version||xe===!0){t.activeTexture(s.TEXTURE0+Z);const Pe=St.getPrimaries(St.workingColorSpace),Ne=T.colorSpace===Rr?null:St.getPrimaries(T.colorSpace),lt=T.colorSpace===Rr||Pe===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let Ee=M(T.image,!1,a.maxTextureSize);Ee=Tt(T,Ee);const ze=l.convert(T.format,T.colorSpace),Y=l.convert(T.type);let re=P(T.internalFormat,ze,Y,T.colorSpace,T.isVideoTexture);ie(_e,T);let ve;const Qe=T.mipmaps,Be=T.isVideoTexture!==!0,et=Ve.__version===void 0||xe===!0,G=de.dataReady,Le=H(T,Ee);if(T.isDepthTexture)re=A(T.format===oo,T.type),et&&(Be?t.texStorage2D(s.TEXTURE_2D,1,re,Ee.width,Ee.height):t.texImage2D(s.TEXTURE_2D,0,re,Ee.width,Ee.height,0,ze,Y,null));else if(T.isDataTexture)if(Qe.length>0){Be&&et&&t.texStorage2D(s.TEXTURE_2D,Le,re,Qe[0].width,Qe[0].height);for(let ae=0,ge=Qe.length;ae<ge;ae++)ve=Qe[ae],Be?G&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,ve.width,ve.height,ze,Y,ve.data):t.texImage2D(s.TEXTURE_2D,ae,re,ve.width,ve.height,0,ze,Y,ve.data);T.generateMipmaps=!1}else Be?(et&&t.texStorage2D(s.TEXTURE_2D,Le,re,Ee.width,Ee.height),G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee.width,Ee.height,ze,Y,Ee.data)):t.texImage2D(s.TEXTURE_2D,0,re,Ee.width,Ee.height,0,ze,Y,Ee.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Be&&et&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Le,re,Qe[0].width,Qe[0].height,Ee.depth);for(let ae=0,ge=Qe.length;ae<ge;ae++)if(ve=Qe[ae],T.format!==gi)if(ze!==null)if(Be){if(G)if(T.layerUpdates.size>0){const Fe=tg(ve.width,ve.height,T.format,T.type);for(const Ie of T.layerUpdates){const ct=ve.data.subarray(Ie*Fe/ve.data.BYTES_PER_ELEMENT,(Ie+1)*Fe/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,Ie,ve.width,ve.height,1,ze,ct)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,ve.width,ve.height,Ee.depth,ze,ve.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ae,re,ve.width,ve.height,Ee.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?G&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,ve.width,ve.height,Ee.depth,ze,Y,ve.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ae,re,ve.width,ve.height,Ee.depth,0,ze,Y,ve.data)}else{Be&&et&&t.texStorage2D(s.TEXTURE_2D,Le,re,Qe[0].width,Qe[0].height);for(let ae=0,ge=Qe.length;ae<ge;ae++)ve=Qe[ae],T.format!==gi?ze!==null?Be?G&&t.compressedTexSubImage2D(s.TEXTURE_2D,ae,0,0,ve.width,ve.height,ze,ve.data):t.compressedTexImage2D(s.TEXTURE_2D,ae,re,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?G&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,ve.width,ve.height,ze,Y,ve.data):t.texImage2D(s.TEXTURE_2D,ae,re,ve.width,ve.height,0,ze,Y,ve.data)}else if(T.isDataArrayTexture)if(Be){if(et&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Le,re,Ee.width,Ee.height,Ee.depth),G)if(T.layerUpdates.size>0){const ae=tg(Ee.width,Ee.height,T.format,T.type);for(const ge of T.layerUpdates){const Fe=Ee.data.subarray(ge*ae/Ee.data.BYTES_PER_ELEMENT,(ge+1)*ae/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ge,Ee.width,Ee.height,1,ze,Y,Fe)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,ze,Y,Ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,re,Ee.width,Ee.height,Ee.depth,0,ze,Y,Ee.data);else if(T.isData3DTexture)Be?(et&&t.texStorage3D(s.TEXTURE_3D,Le,re,Ee.width,Ee.height,Ee.depth),G&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,ze,Y,Ee.data)):t.texImage3D(s.TEXTURE_3D,0,re,Ee.width,Ee.height,Ee.depth,0,ze,Y,Ee.data);else if(T.isFramebufferTexture){if(et)if(Be)t.texStorage2D(s.TEXTURE_2D,Le,re,Ee.width,Ee.height);else{let ae=Ee.width,ge=Ee.height;for(let Fe=0;Fe<Le;Fe++)t.texImage2D(s.TEXTURE_2D,Fe,re,ae,ge,0,ze,Y,null),ae>>=1,ge>>=1}}else if(Qe.length>0){if(Be&&et){const ae=je(Qe[0]);t.texStorage2D(s.TEXTURE_2D,Le,re,ae.width,ae.height)}for(let ae=0,ge=Qe.length;ae<ge;ae++)ve=Qe[ae],Be?G&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,ze,Y,ve):t.texImage2D(s.TEXTURE_2D,ae,re,ze,Y,ve);T.generateMipmaps=!1}else if(Be){if(et){const ae=je(Ee);t.texStorage2D(s.TEXTURE_2D,Le,re,ae.width,ae.height)}G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ze,Y,Ee)}else t.texImage2D(s.TEXTURE_2D,0,re,ze,Y,Ee);x(T)&&_(_e),Ve.__version=de.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function fe(D,T,Z){if(T.image.length!==6)return;const _e=Ue(D,T),xe=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+Z);const de=r.get(xe);if(xe.version!==de.__version||_e===!0){t.activeTexture(s.TEXTURE0+Z);const Ve=St.getPrimaries(St.workingColorSpace),Pe=T.colorSpace===Rr?null:St.getPrimaries(T.colorSpace),Ne=T.colorSpace===Rr||Ve===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const lt=T.isCompressedTexture||T.image[0].isCompressedTexture,Ee=T.image[0]&&T.image[0].isDataTexture,ze=[];for(let ge=0;ge<6;ge++)!lt&&!Ee?ze[ge]=M(T.image[ge],!0,a.maxCubemapSize):ze[ge]=Ee?T.image[ge].image:T.image[ge],ze[ge]=Tt(T,ze[ge]);const Y=ze[0],re=l.convert(T.format,T.colorSpace),ve=l.convert(T.type),Qe=P(T.internalFormat,re,ve,T.colorSpace),Be=T.isVideoTexture!==!0,et=de.__version===void 0||_e===!0,G=xe.dataReady;let Le=H(T,Y);ie(s.TEXTURE_CUBE_MAP,T);let ae;if(lt){Be&&et&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,Qe,Y.width,Y.height);for(let ge=0;ge<6;ge++){ae=ze[ge].mipmaps;for(let Fe=0;Fe<ae.length;Fe++){const Ie=ae[Fe];T.format!==gi?re!==null?Be?G&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe,0,0,Ie.width,Ie.height,re,Ie.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe,Qe,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe,0,0,Ie.width,Ie.height,re,ve,Ie.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe,Qe,Ie.width,Ie.height,0,re,ve,Ie.data)}}}else{if(ae=T.mipmaps,Be&&et){ae.length>0&&Le++;const ge=je(ze[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,Qe,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Ee){Be?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ze[ge].width,ze[ge].height,re,ve,ze[ge].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Qe,ze[ge].width,ze[ge].height,0,re,ve,ze[ge].data);for(let Fe=0;Fe<ae.length;Fe++){const ct=ae[Fe].image[ge].image;Be?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe+1,0,0,ct.width,ct.height,re,ve,ct.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe+1,Qe,ct.width,ct.height,0,re,ve,ct.data)}}else{Be?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,re,ve,ze[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Qe,re,ve,ze[ge]);for(let Fe=0;Fe<ae.length;Fe++){const Ie=ae[Fe];Be?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe+1,0,0,re,ve,Ie.image[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Fe+1,Qe,re,ve,Ie.image[ge])}}}x(T)&&_(s.TEXTURE_CUBE_MAP),de.__version=xe.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Te(D,T,Z,_e,xe,de){const Ve=l.convert(Z.format,Z.colorSpace),Pe=l.convert(Z.type),Ne=P(Z.internalFormat,Ve,Pe,Z.colorSpace),lt=r.get(T),Ee=r.get(Z);if(Ee.__renderTarget=T,!lt.__hasExternalTextures){const ze=Math.max(1,T.width>>de),Y=Math.max(1,T.height>>de);xe===s.TEXTURE_3D||xe===s.TEXTURE_2D_ARRAY?t.texImage3D(xe,de,Ne,ze,Y,T.depth,0,Ve,Pe,null):t.texImage2D(xe,de,Ne,ze,Y,0,Ve,Pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),ot(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,xe,Ee.__webglTexture,0,ut(T)):(xe===s.TEXTURE_2D||xe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,_e,xe,Ee.__webglTexture,de),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Se(D,T,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,D),T.depthBuffer){const _e=T.depthTexture,xe=_e&&_e.isDepthTexture?_e.type:null,de=A(T.stencilBuffer,xe),Ve=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=ut(T);ot(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pe,de,T.width,T.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,de,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,de,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ve,s.RENDERBUFFER,D)}else{const _e=T.textures;for(let xe=0;xe<_e.length;xe++){const de=_e[xe],Ve=l.convert(de.format,de.colorSpace),Pe=l.convert(de.type),Ne=P(de.internalFormat,Ve,Pe,de.colorSpace),lt=ut(T);Z&&ot(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,Ne,T.width,T.height):ot(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,Ne,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ne,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function be(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _e=r.get(T.depthTexture);_e.__renderTarget=T,(!_e.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),me(T.depthTexture,0);const xe=_e.__webglTexture,de=ut(T);if(T.depthTexture.format===eo)ot(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0);else if(T.depthTexture.format===oo)ot(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function Oe(D){const T=r.get(D),Z=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const _e=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),_e){const xe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,_e.removeEventListener("dispose",xe)};_e.addEventListener("dispose",xe),T.__depthDisposeCallback=xe}T.__boundDepthTexture=_e}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");be(T.__webglFramebuffer,D)}else if(Z){T.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[_e]),T.__webglDepthbuffer[_e]===void 0)T.__webglDepthbuffer[_e]=s.createRenderbuffer(),Se(T.__webglDepthbuffer[_e],D,!1);else{const xe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer[_e];s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,de)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Se(T.__webglDepthbuffer,D,!1);else{const _e=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,xe),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,xe)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ke(D,T,Z){const _e=r.get(D);T!==void 0&&Te(_e.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&Oe(D)}function wt(D){const T=D.texture,Z=r.get(D),_e=r.get(T);D.addEventListener("dispose",I);const xe=D.textures,de=D.isWebGLCubeRenderTarget===!0,Ve=xe.length>1;if(Ve||(_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture()),_e.__version=T.version,u.memory.textures++),de){Z.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer[Pe]=[];for(let Ne=0;Ne<T.mipmaps.length;Ne++)Z.__webglFramebuffer[Pe][Ne]=s.createFramebuffer()}else Z.__webglFramebuffer[Pe]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Pe=0;Pe<T.mipmaps.length;Pe++)Z.__webglFramebuffer[Pe]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Ve)for(let Pe=0,Ne=xe.length;Pe<Ne;Pe++){const lt=r.get(xe[Pe]);lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture(),u.memory.textures++)}if(D.samples>0&&ot(D)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Pe=0;Pe<xe.length;Pe++){const Ne=xe[Pe];Z.__webglColorRenderbuffer[Pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[Pe]);const lt=l.convert(Ne.format,Ne.colorSpace),Ee=l.convert(Ne.type),ze=P(Ne.internalFormat,lt,Ee,Ne.colorSpace,D.isXRRenderTarget===!0),Y=ut(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Y,ze,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,Z.__webglColorRenderbuffer[Pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),Se(Z.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(de){t.bindTexture(s.TEXTURE_CUBE_MAP,_e.__webglTexture),ie(s.TEXTURE_CUBE_MAP,T);for(let Pe=0;Pe<6;Pe++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ne=0;Ne<T.mipmaps.length;Ne++)Te(Z.__webglFramebuffer[Pe][Ne],D,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ne);else Te(Z.__webglFramebuffer[Pe],D,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);x(T)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ve){for(let Pe=0,Ne=xe.length;Pe<Ne;Pe++){const lt=xe[Pe],Ee=r.get(lt);t.bindTexture(s.TEXTURE_2D,Ee.__webglTexture),ie(s.TEXTURE_2D,lt),Te(Z.__webglFramebuffer,D,lt,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,0),x(lt)&&_(s.TEXTURE_2D)}t.unbindTexture()}else{let Pe=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Pe=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Pe,_e.__webglTexture),ie(Pe,T),T.mipmaps&&T.mipmaps.length>0)for(let Ne=0;Ne<T.mipmaps.length;Ne++)Te(Z.__webglFramebuffer[Ne],D,T,s.COLOR_ATTACHMENT0,Pe,Ne);else Te(Z.__webglFramebuffer,D,T,s.COLOR_ATTACHMENT0,Pe,0);x(T)&&_(Pe),t.unbindTexture()}D.depthBuffer&&Oe(D)}function gt(D){const T=D.textures;for(let Z=0,_e=T.length;Z<_e;Z++){const xe=T[Z];if(x(xe)){const de=b(D),Ve=r.get(xe).__webglTexture;t.bindTexture(de,Ve),_(de),t.unbindTexture()}}}const xt=[],X=[];function Wt(D){if(D.samples>0){if(ot(D)===!1){const T=D.textures,Z=D.width,_e=D.height;let xe=s.COLOR_BUFFER_BIT;const de=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ve=r.get(D),Pe=T.length>1;if(Pe)for(let Ne=0;Ne<T.length;Ne++)t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Ne=0;Ne<T.length;Ne++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(xe|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(xe|=s.STENCIL_BUFFER_BIT)),Pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ne]);const lt=r.get(T[Ne]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,lt,0)}s.blitFramebuffer(0,0,Z,_e,0,0,Z,_e,xe,s.NEAREST),d===!0&&(xt.length=0,X.length=0,xt.push(s.COLOR_ATTACHMENT0+Ne),D.depthBuffer&&D.resolveDepthBuffer===!1&&(xt.push(de),X.push(de),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,X)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,xt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Pe)for(let Ne=0;Ne<T.length;Ne++){t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[Ne]);const lt=r.get(T[Ne]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,lt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&d){const T=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function ut(D){return Math.min(a.maxSamples,D.samples)}function ot(D){const T=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Je(D){const T=u.render.frame;g.get(D)!==T&&(g.set(D,T),D.update())}function Tt(D,T){const Z=D.colorSpace,_e=D.format,xe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Z!==uo&&Z!==Rr&&(St.getTransfer(Z)===Lt?(_e!==gi||xe!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),T}function je(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=J,this.resetTextureUnits=oe,this.setTexture2D=me,this.setTexture2DArray=ue,this.setTexture3D=ce,this.setTextureCube=z,this.rebindTextures=Ke,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=ot}function FT(s,e){function t(r,a=Rr){let l;const u=St.getTransfer(a);if(r===Qi)return s.UNSIGNED_BYTE;if(r===ff)return s.UNSIGNED_SHORT_4_4_4_4;if(r===df)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Fg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Ig)return s.BYTE;if(r===Ug)return s.SHORT;if(r===ia)return s.UNSIGNED_SHORT;if(r===hf)return s.INT;if(r===as)return s.UNSIGNED_INT;if(r===$i)return s.FLOAT;if(r===co)return s.HALF_FLOAT;if(r===Og)return s.ALPHA;if(r===kg)return s.RGB;if(r===gi)return s.RGBA;if(r===Bg)return s.LUMINANCE;if(r===zg)return s.LUMINANCE_ALPHA;if(r===eo)return s.DEPTH_COMPONENT;if(r===oo)return s.DEPTH_STENCIL;if(r===Vg)return s.RED;if(r===pf)return s.RED_INTEGER;if(r===Hg)return s.RG;if(r===mf)return s.RG_INTEGER;if(r===gf)return s.RGBA_INTEGER;if(r===Vl||r===Hl||r===Gl||r===Wl)if(u===Lt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Vl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Hl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Gl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Wl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Vl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Hl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Gl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Wl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Lh||r===Dh||r===Nh||r===Ih)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Lh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Dh)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Nh)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ih)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Uh||r===Fh||r===Oh)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Uh||r===Fh)return u===Lt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Oh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===kh||r===Bh||r===zh||r===Vh||r===Hh||r===Gh||r===Wh||r===Xh||r===jh||r===$h||r===Yh||r===qh||r===Kh||r===Zh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===kh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Bh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===zh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Hh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Gh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===jh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===$h)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Yh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===qh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Kh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Zh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Xl||r===Qh||r===Jh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Xl)return u===Lt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Qh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Jh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Gg||r===ef||r===tf||r===nf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Xl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===ef)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===tf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===nf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===so?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}class OT extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Zs extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kT={type:"move"};class hh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,u=null;const h=this._targetRay,d=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const M of e.hand.values()){const x=t.getJointPose(M,r),_=this._getHandJoint(p,M);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const g=p.joints["index-finger-tip"],y=p.joints["thumb-tip"],v=g.position.distanceTo(y.position),S=.02,E=.005;p.inputState.pinching&&v>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));h!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(kT)))}return h!==null&&(h.visible=a!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Zs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const BT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class VT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const a=new Tn,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new vi({vertexShader:BT,fragmentShader:zT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rt(new lo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HT extends ls{constructor(e,t){super();const r=this;let a=null,l=1,u=null,h="local-floor",d=1,p=null,g=null,y=null,v=null,S=null,E=null;const M=new VT,x=t.getContextAttributes();let _=null,b=null;const P=[],A=[],H=new it;let F=null;const I=new Wn;I.viewport=new Nt;const B=new Wn;B.viewport=new Nt;const L=[I,B],C=new OT;let k=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let fe=P[Q];return fe===void 0&&(fe=new hh,P[Q]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Q){let fe=P[Q];return fe===void 0&&(fe=new hh,P[Q]=fe),fe.getGripSpace()},this.getHand=function(Q){let fe=P[Q];return fe===void 0&&(fe=new hh,P[Q]=fe),fe.getHandSpace()};function J(Q){const fe=A.indexOf(Q.inputSource);if(fe===-1)return;const Te=P[fe];Te!==void 0&&(Te.update(Q.inputSource,Q.frame,p||u),Te.dispatchEvent({type:Q.type,data:Q.inputSource}))}function pe(){a.removeEventListener("select",J),a.removeEventListener("selectstart",J),a.removeEventListener("selectend",J),a.removeEventListener("squeeze",J),a.removeEventListener("squeezestart",J),a.removeEventListener("squeezeend",J),a.removeEventListener("end",pe),a.removeEventListener("inputsourceschange",me);for(let Q=0;Q<P.length;Q++){const fe=A[Q];fe!==null&&(A[Q]=null,P[Q].disconnect(fe))}k=null,oe=null,M.reset(),e.setRenderTarget(_),S=null,v=null,y=null,a=null,b=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(H.width,H.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){h=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return y},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",J),a.addEventListener("selectstart",J),a.addEventListener("selectend",J),a.addEventListener("squeeze",J),a.addEventListener("squeezestart",J),a.addEventListener("squeezeend",J),a.addEventListener("end",pe),a.addEventListener("inputsourceschange",me),x.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(H),a.renderState.layers===void 0){const fe={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,fe),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),b=new Lr(S.framebufferWidth,S.framebufferHeight,{format:gi,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let fe=null,Te=null,Se=null;x.depth&&(Se=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=x.stencil?oo:eo,Te=x.stencil?so:as);const be={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:l};y=new XRWebGLBinding(a,t),v=y.createProjectionLayer(be),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),b=new Lr(v.textureWidth,v.textureHeight,{format:gi,type:Qi,depthTexture:new i_(v.textureWidth,v.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(d),p=null,u=await a.requestReferenceSpace(h),Ue.setContext(a),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function me(Q){for(let fe=0;fe<Q.removed.length;fe++){const Te=Q.removed[fe],Se=A.indexOf(Te);Se>=0&&(A[Se]=null,P[Se].disconnect(Te))}for(let fe=0;fe<Q.added.length;fe++){const Te=Q.added[fe];let Se=A.indexOf(Te);if(Se===-1){for(let Oe=0;Oe<P.length;Oe++)if(Oe>=A.length){A.push(Te),Se=Oe;break}else if(A[Oe]===null){A[Oe]=Te,Se=Oe;break}if(Se===-1)break}const be=P[Se];be&&be.connect(Te)}}const ue=new W,ce=new W;function z(Q,fe,Te){ue.setFromMatrixPosition(fe.matrixWorld),ce.setFromMatrixPosition(Te.matrixWorld);const Se=ue.distanceTo(ce),be=fe.projectionMatrix.elements,Oe=Te.projectionMatrix.elements,Ke=be[14]/(be[10]-1),wt=be[14]/(be[10]+1),gt=(be[9]+1)/be[5],xt=(be[9]-1)/be[5],X=(be[8]-1)/be[0],Wt=(Oe[8]+1)/Oe[0],ut=Ke*X,ot=Ke*Wt,Je=Se/(-X+Wt),Tt=Je*-X;if(fe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Tt),Q.translateZ(Je),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),be[10]===-1)Q.projectionMatrix.copy(fe.projectionMatrix),Q.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const je=Ke+Je,D=wt+Je,T=ut-Tt,Z=ot+(Se-Tt),_e=gt*wt/D*je,xe=xt*wt/D*je;Q.projectionMatrix.makePerspective(T,Z,_e,xe,je,D),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function he(Q,fe){fe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(fe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;let fe=Q.near,Te=Q.far;M.texture!==null&&(M.depthNear>0&&(fe=M.depthNear),M.depthFar>0&&(Te=M.depthFar)),C.near=B.near=I.near=fe,C.far=B.far=I.far=Te,(k!==C.near||oe!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),k=C.near,oe=C.far),I.layers.mask=Q.layers.mask|2,B.layers.mask=Q.layers.mask|4,C.layers.mask=I.layers.mask|B.layers.mask;const Se=Q.parent,be=C.cameras;he(C,Se);for(let Oe=0;Oe<be.length;Oe++)he(be[Oe],Se);be.length===2?z(C,I,B):C.projectionMatrix.copy(I.projectionMatrix),le(Q,C,Se)};function le(Q,fe,Te){Te===null?Q.matrix.copy(fe.matrixWorld):(Q.matrix.copy(Te.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(fe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(fe.projectionMatrix),Q.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=rf*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(v===null&&S===null))return d},this.setFoveation=function(Q){d=Q,v!==null&&(v.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(C)};let U=null;function ie(Q,fe){if(g=fe.getViewerPose(p||u),E=fe,g!==null){const Te=g.views;S!==null&&(e.setRenderTargetFramebuffer(b,S.framebuffer),e.setRenderTarget(b));let Se=!1;Te.length!==C.cameras.length&&(C.cameras.length=0,Se=!0);for(let Oe=0;Oe<Te.length;Oe++){const Ke=Te[Oe];let wt=null;if(S!==null)wt=S.getViewport(Ke);else{const xt=y.getViewSubImage(v,Ke);wt=xt.viewport,Oe===0&&(e.setRenderTargetTextures(b,xt.colorTexture,v.ignoreDepthValues?void 0:xt.depthStencilTexture),e.setRenderTarget(b))}let gt=L[Oe];gt===void 0&&(gt=new Wn,gt.layers.enable(Oe),gt.viewport=new Nt,L[Oe]=gt),gt.matrix.fromArray(Ke.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(Ke.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(wt.x,wt.y,wt.width,wt.height),Oe===0&&(C.matrix.copy(gt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Se===!0&&C.cameras.push(gt)}const be=a.enabledFeatures;if(be&&be.includes("depth-sensing")){const Oe=y.getDepthInformation(Te[0]);Oe&&Oe.isValid&&Oe.texture&&M.init(e,Oe,a.renderState)}}for(let Te=0;Te<P.length;Te++){const Se=A[Te],be=P[Te];Se!==null&&be!==void 0&&be.update(Se,fe,p||u)}U&&U(Q,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),E=null}const Ue=new n_;Ue.setAnimationLoop(ie),this.setAnimationLoop=function(Q){U=Q},this.dispose=function(){}}}const Jr=new bi,GT=new zt;function WT(s,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function r(x,_){_.color.getRGB(x.fogColor.value,Jg(s)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function a(x,_,b,P,A){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(x,_):_.isMeshToonMaterial?(l(x,_),y(x,_)):_.isMeshPhongMaterial?(l(x,_),g(x,_)):_.isMeshStandardMaterial?(l(x,_),v(x,_),_.isMeshPhysicalMaterial&&S(x,_,A)):_.isMeshMatcapMaterial?(l(x,_),E(x,_)):_.isMeshDepthMaterial?l(x,_):_.isMeshDistanceMaterial?(l(x,_),M(x,_)):_.isMeshNormalMaterial?l(x,_):_.isLineBasicMaterial?(u(x,_),_.isLineDashedMaterial&&h(x,_)):_.isPointsMaterial?d(x,_,b,P):_.isSpriteMaterial?p(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===vn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===vn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const b=e.get(_),P=b.envMap,A=b.envMapRotation;P&&(x.envMap.value=P,Jr.copy(A),Jr.x*=-1,Jr.y*=-1,Jr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Jr.y*=-1,Jr.z*=-1),x.envMapRotation.value.setFromMatrix4(GT.makeRotationFromEuler(Jr)),x.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}function u(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}function h(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function d(x,_,b,P){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*b,x.scale.value=P*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function p(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function g(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function y(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function v(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function S(x,_,b){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===vn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=b.texture,x.transmissionSamplerSize.value.set(b.width,b.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,_){_.matcap&&(x.matcap.value=_.matcap)}function M(x,_){const b=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(b.matrixWorld),x.nearDistance.value=b.shadow.camera.near,x.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function XT(s,e,t,r){let a={},l={},u=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function d(b,P){const A=P.program;r.uniformBlockBinding(b,A)}function p(b,P){let A=a[b.id];A===void 0&&(E(b),A=g(b),a[b.id]=A,b.addEventListener("dispose",x));const H=P.program;r.updateUBOMapping(b,H);const F=e.render.frame;l[b.id]!==F&&(v(b),l[b.id]=F)}function g(b){const P=y();b.__bindingPointIndex=P;const A=s.createBuffer(),H=b.__size,F=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,H,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,A),A}function y(){for(let b=0;b<h;b++)if(u.indexOf(b)===-1)return u.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(b){const P=a[b.id],A=b.uniforms,H=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let F=0,I=A.length;F<I;F++){const B=Array.isArray(A[F])?A[F]:[A[F]];for(let L=0,C=B.length;L<C;L++){const k=B[L];if(S(k,F,L,H)===!0){const oe=k.__offset,J=Array.isArray(k.value)?k.value:[k.value];let pe=0;for(let me=0;me<J.length;me++){const ue=J[me],ce=M(ue);typeof ue=="number"||typeof ue=="boolean"?(k.__data[0]=ue,s.bufferSubData(s.UNIFORM_BUFFER,oe+pe,k.__data)):ue.isMatrix3?(k.__data[0]=ue.elements[0],k.__data[1]=ue.elements[1],k.__data[2]=ue.elements[2],k.__data[3]=0,k.__data[4]=ue.elements[3],k.__data[5]=ue.elements[4],k.__data[6]=ue.elements[5],k.__data[7]=0,k.__data[8]=ue.elements[6],k.__data[9]=ue.elements[7],k.__data[10]=ue.elements[8],k.__data[11]=0):(ue.toArray(k.__data,pe),pe+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,oe,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(b,P,A,H){const F=b.value,I=P+"_"+A;if(H[I]===void 0)return typeof F=="number"||typeof F=="boolean"?H[I]=F:H[I]=F.clone(),!0;{const B=H[I];if(typeof F=="number"||typeof F=="boolean"){if(B!==F)return H[I]=F,!0}else if(B.equals(F)===!1)return B.copy(F),!0}return!1}function E(b){const P=b.uniforms;let A=0;const H=16;for(let I=0,B=P.length;I<B;I++){const L=Array.isArray(P[I])?P[I]:[P[I]];for(let C=0,k=L.length;C<k;C++){const oe=L[C],J=Array.isArray(oe.value)?oe.value:[oe.value];for(let pe=0,me=J.length;pe<me;pe++){const ue=J[pe],ce=M(ue),z=A%H,he=z%ce.boundary,le=z+he;A+=he,le!==0&&H-le<ce.storage&&(A+=H-le),oe.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=A,A+=ce.storage}}}const F=A%H;return F>0&&(A+=H-F),b.__size=A,b.__cache={},this}function M(b){const P={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(P.boundary=4,P.storage=4):b.isVector2?(P.boundary=8,P.storage=8):b.isVector3||b.isColor?(P.boundary=16,P.storage=12):b.isVector4?(P.boundary=16,P.storage=16):b.isMatrix3?(P.boundary=48,P.storage=48):b.isMatrix4?(P.boundary=64,P.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),P}function x(b){const P=b.target;P.removeEventListener("dispose",x);const A=u.indexOf(P.__bindingPointIndex);u.splice(A,1),s.deleteBuffer(a[P.id]),delete a[P.id],delete l[P.id]}function _(){for(const b in a)s.deleteBuffer(a[b]);u=[],a={},l={}}return{bind:d,update:p,dispose:_}}class jT{constructor(e={}){const{canvas:t=US(),context:r=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:y=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=u;const E=new Uint32Array(4),M=new Int32Array(4);let x=null,_=null;const b=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gn,this.toneMapping=Ki,this.toneMappingExposure=1;const A=this;let H=!1,F=0,I=0,B=null,L=-1,C=null;const k=new Nt,oe=new Nt;let J=null;const pe=new ft(0);let me=0,ue=t.width,ce=t.height,z=1,he=null,le=null;const U=new Nt(0,0,ue,ce),ie=new Nt(0,0,ue,ce);let Ue=!1;const Q=new xf;let fe=!1,Te=!1;const Se=new zt,be=new zt,Oe=new W,Ke=new Nt,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function xt(){return B===null?z:1}let X=r;function Wt(R,j){return t.getContext(R,j)}try{const R={alpha:!0,depth:a,stencil:l,antialias:h,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:y};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${uf}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",Fe,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),X===null){const j="webgl2";if(X=Wt(j,R),X===null)throw Wt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ut,ot,Je,Tt,je,D,T,Z,_e,xe,de,Ve,Pe,Ne,lt,Ee,ze,Y,re,ve,Qe,Be,et,G;function Le(){ut=new Z1(X),ut.init(),Be=new FT(X,ut),ot=new X1(X,ut,e,Be),Je=new NT(X,ut),ot.reverseDepthBuffer&&v&&Je.buffers.depth.setReversed(!0),Tt=new ew(X),je=new vT,D=new UT(X,ut,Je,je,ot,Be,Tt),T=new $1(A),Z=new K1(A),_e=new aM(X),et=new G1(X,_e),xe=new Q1(X,_e,Tt,et),de=new nw(X,xe,_e,Tt),re=new tw(X,ot,D),Ee=new j1(je),Ve=new _T(A,T,Z,ut,ot,et,Ee),Pe=new WT(A,je),Ne=new yT,lt=new AT(ut),Y=new H1(A,T,Z,Je,de,S,d),ze=new LT(A,de,ot),G=new XT(X,Tt,ot,Je),ve=new W1(X,ut,Tt),Qe=new J1(X,ut,Tt),Tt.programs=Ve.programs,A.capabilities=ot,A.extensions=ut,A.properties=je,A.renderLists=Ne,A.shadowMap=ze,A.state=Je,A.info=Tt}Le();const ae=new HT(A,X);this.xr=ae,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const R=ut.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ut.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(R){R!==void 0&&(z=R,this.setSize(ue,ce,!1))},this.getSize=function(R){return R.set(ue,ce)},this.setSize=function(R,j,te=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ue=R,ce=j,t.width=Math.floor(R*z),t.height=Math.floor(j*z),te===!0&&(t.style.width=R+"px",t.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(ue*z,ce*z).floor()},this.setDrawingBufferSize=function(R,j,te){ue=R,ce=j,z=te,t.width=Math.floor(R*te),t.height=Math.floor(j*te),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(k)},this.getViewport=function(R){return R.copy(U)},this.setViewport=function(R,j,te,ne){R.isVector4?U.set(R.x,R.y,R.z,R.w):U.set(R,j,te,ne),Je.viewport(k.copy(U).multiplyScalar(z).round())},this.getScissor=function(R){return R.copy(ie)},this.setScissor=function(R,j,te,ne){R.isVector4?ie.set(R.x,R.y,R.z,R.w):ie.set(R,j,te,ne),Je.scissor(oe.copy(ie).multiplyScalar(z).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(R){Je.setScissorTest(Ue=R)},this.setOpaqueSort=function(R){he=R},this.setTransparentSort=function(R){le=R},this.getClearColor=function(R){return R.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(R=!0,j=!0,te=!0){let ne=0;if(R){let $=!1;if(B!==null){const Re=B.texture.format;$=Re===gf||Re===mf||Re===pf}if($){const Re=B.texture.type,Ae=Re===Qi||Re===as||Re===ia||Re===so||Re===ff||Re===df,$e=Y.getClearColor(),We=Y.getClearAlpha(),rt=$e.r,at=$e.g,Ye=$e.b;Ae?(E[0]=rt,E[1]=at,E[2]=Ye,E[3]=We,X.clearBufferuiv(X.COLOR,0,E)):(M[0]=rt,M[1]=at,M[2]=Ye,M[3]=We,X.clearBufferiv(X.COLOR,0,M))}else ne|=X.COLOR_BUFFER_BIT}j&&(ne|=X.DEPTH_BUFFER_BIT),te&&(ne|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),Ne.dispose(),lt.dispose(),je.dispose(),T.dispose(),Z.dispose(),de.dispose(),et.dispose(),G.dispose(),Ve.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",cs),ae.removeEventListener("sessionend",Ji),Pi.stop()};function ge(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const R=Tt.autoReset,j=ze.enabled,te=ze.autoUpdate,ne=ze.needsUpdate,$=ze.type;Le(),Tt.autoReset=R,ze.enabled=j,ze.autoUpdate=te,ze.needsUpdate=ne,ze.type=$}function Ie(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ct(R){const j=R.target;j.removeEventListener("dispose",ct),Ft(j)}function Ft(R){qt(R),je.remove(R)}function qt(R){const j=je.get(R).programs;j!==void 0&&(j.forEach(function(te){Ve.releaseProgram(te)}),R.isShaderMaterial&&Ve.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,te,ne,$,Re){j===null&&(j=wt);const Ae=$.isMesh&&$.matrixWorld.determinant()<0,$e=ca(R,j,te,ne,$);Je.setMaterial(ne,Ae);let We=te.index,rt=1;if(ne.wireframe===!0){if(We=xe.getWireframeAttribute(te),We===void 0)return;rt=2}const at=te.drawRange,Ye=te.attributes.position;let yt=at.start*rt,bt=(at.start+at.count)*rt;Re!==null&&(yt=Math.max(yt,Re.start*rt),bt=Math.min(bt,(Re.start+Re.count)*rt)),We!==null?(yt=Math.max(yt,0),bt=Math.min(bt,We.count)):Ye!=null&&(yt=Math.max(yt,0),bt=Math.min(bt,Ye.count));const vt=bt-yt;if(vt<0||vt===1/0)return;et.setup($,ne,$e,te,We);let un,ht=ve;if(We!==null&&(un=_e.get(We),ht=Qe,ht.setIndex(un)),$.isMesh)ne.wireframe===!0?(Je.setLineWidth(ne.wireframeLinewidth*xt()),ht.setMode(X.LINES)):ht.setMode(X.TRIANGLES);else if($.isLine){let Ze=ne.linewidth;Ze===void 0&&(Ze=1),Je.setLineWidth(Ze*xt()),$.isLineSegments?ht.setMode(X.LINES):$.isLineLoop?ht.setMode(X.LINE_LOOP):ht.setMode(X.LINE_STRIP)}else $.isPoints?ht.setMode(X.POINTS):$.isSprite&&ht.setMode(X.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)ht.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))ht.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Ze=$._multiDrawStarts,ri=$._multiDrawCounts,At=$._multiDrawCount,hn=We?_e.get(We).bytesPerElement:1,si=je.get(ne).currentProgram.getUniforms();for(let Kt=0;Kt<At;Kt++)si.setValue(X,"_gl_DrawID",Kt),ht.render(Ze[Kt]/hn,ri[Kt])}else if($.isInstancedMesh)ht.renderInstances(yt,vt,$.count);else if(te.isInstancedBufferGeometry){const Ze=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,ri=Math.min(te.instanceCount,Ze);ht.renderInstances(yt,vt,ri)}else ht.render(yt,vt)};function Mt(R,j,te){R.transparent===!0&&R.side===Ci&&R.forceSinglePass===!1?(R.side=vn,R.needsUpdate=!0,us(R,j,te),R.side=Pr,R.needsUpdate=!0,us(R,j,te),R.side=Ci):us(R,j,te)}this.compile=function(R,j,te=null){te===null&&(te=R),_=lt.get(te),_.init(j),P.push(_),te.traverseVisible(function($){$.isLight&&$.layers.test(j.layers)&&(_.pushLight($),$.castShadow&&_.pushShadow($))}),R!==te&&R.traverseVisible(function($){$.isLight&&$.layers.test(j.layers)&&(_.pushLight($),$.castShadow&&_.pushShadow($))}),_.setupLights();const ne=new Set;return R.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Re=$.material;if(Re)if(Array.isArray(Re))for(let Ae=0;Ae<Re.length;Ae++){const $e=Re[Ae];Mt($e,te,$),ne.add($e)}else Mt(Re,te,$),ne.add(Re)}),P.pop(),_=null,ne},this.compileAsync=function(R,j,te=null){const ne=this.compile(R,j,te);return new Promise($=>{function Re(){if(ne.forEach(function(Ae){je.get(Ae).currentProgram.isReady()&&ne.delete(Ae)}),ne.size===0){$(R);return}setTimeout(Re,10)}ut.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Cn=null;function xn(R){Cn&&Cn(R)}function cs(){Pi.stop()}function Ji(){Pi.start()}const Pi=new n_;Pi.setAnimationLoop(xn),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(R){Cn=R,ae.setAnimationLoop(R),R===null?Pi.stop():Pi.start()},ae.addEventListener("sessionstart",cs),ae.addEventListener("sessionend",Ji),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(j),j=ae.getCamera()),R.isScene===!0&&R.onBeforeRender(A,R,j,B),_=lt.get(R,P.length),_.init(j),P.push(_),be.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Q.setFromProjectionMatrix(be),Te=this.localClippingEnabled,fe=Ee.init(this.clippingPlanes,Te),x=Ne.get(R,b.length),x.init(),b.push(x),ae.enabled===!0&&ae.isPresenting===!0){const Re=A.xr.getDepthSensingMesh();Re!==null&&Li(Re,j,-1/0,A.sortObjects)}Li(R,j,0,A.sortObjects),x.finish(),A.sortObjects===!0&&x.sort(he,le),gt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,gt&&Y.addToRenderList(x,R),this.info.render.frame++,fe===!0&&Ee.beginShadows();const te=_.state.shadowsArray;ze.render(te,R,j),fe===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=x.opaque,$=x.transmissive;if(_.setupLights(),j.isArrayCamera){const Re=j.cameras;if($.length>0)for(let Ae=0,$e=Re.length;Ae<$e;Ae++){const We=Re[Ae];Ur(ne,$,R,We)}gt&&Y.render(R);for(let Ae=0,$e=Re.length;Ae<$e;Ae++){const We=Re[Ae];Ir(x,R,We,We.viewport)}}else $.length>0&&Ur(ne,$,R,j),gt&&Y.render(R),Ir(x,R,j);B!==null&&(D.updateMultisampleRenderTarget(B),D.updateRenderTargetMipmap(B)),R.isScene===!0&&R.onAfterRender(A,R,j),et.resetDefaultState(),L=-1,C=null,P.pop(),P.length>0?(_=P[P.length-1],fe===!0&&Ee.setGlobalState(A.clippingPlanes,_.state.camera)):_=null,b.pop(),b.length>0?x=b[b.length-1]:x=null};function Li(R,j,te,ne){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)te=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Q.intersectsSprite(R)){ne&&Ke.setFromMatrixPosition(R.matrixWorld).applyMatrix4(be);const Ae=de.update(R),$e=R.material;$e.visible&&x.push(R,Ae,$e,te,Ke.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Q.intersectsObject(R))){const Ae=de.update(R),$e=R.material;if(ne&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ke.copy(R.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Ke.copy(Ae.boundingSphere.center)),Ke.applyMatrix4(R.matrixWorld).applyMatrix4(be)),Array.isArray($e)){const We=Ae.groups;for(let rt=0,at=We.length;rt<at;rt++){const Ye=We[rt],yt=$e[Ye.materialIndex];yt&&yt.visible&&x.push(R,Ae,yt,te,Ke.z,Ye)}}else $e.visible&&x.push(R,Ae,$e,te,Ke.z,null)}}const Re=R.children;for(let Ae=0,$e=Re.length;Ae<$e;Ae++)Li(Re[Ae],j,te,ne)}function Ir(R,j,te,ne){const $=R.opaque,Re=R.transmissive,Ae=R.transparent;_.setupLightsView(te),fe===!0&&Ee.setGlobalState(A.clippingPlanes,te),ne&&Je.viewport(k.copy(ne)),$.length>0&&er($,j,te),Re.length>0&&er(Re,j,te),Ae.length>0&&er(Ae,j,te),Je.buffers.depth.setTest(!0),Je.buffers.depth.setMask(!0),Je.buffers.color.setMask(!0),Je.setPolygonOffset(!1)}function Ur(R,j,te,ne){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ne.id]===void 0&&(_.state.transmissionRenderTarget[ne.id]=new Lr(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?co:Qi,minFilter:os,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const Re=_.state.transmissionRenderTarget[ne.id],Ae=ne.viewport||k;Re.setSize(Ae.z,Ae.w);const $e=A.getRenderTarget();A.setRenderTarget(Re),A.getClearColor(pe),me=A.getClearAlpha(),me<1&&A.setClearColor(16777215,.5),A.clear(),gt&&Y.render(te);const We=A.toneMapping;A.toneMapping=Ki;const rt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),_.setupLightsView(ne),fe===!0&&Ee.setGlobalState(A.clippingPlanes,ne),er(R,te,ne),D.updateMultisampleRenderTarget(Re),D.updateRenderTargetMipmap(Re),ut.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Ye=0,yt=j.length;Ye<yt;Ye++){const bt=j[Ye],vt=bt.object,un=bt.geometry,ht=bt.material,Ze=bt.group;if(ht.side===Ci&&vt.layers.test(ne.layers)){const ri=ht.side;ht.side=vn,ht.needsUpdate=!0,aa(vt,te,ne,un,ht,Ze),ht.side=ri,ht.needsUpdate=!0,at=!0}}at===!0&&(D.updateMultisampleRenderTarget(Re),D.updateRenderTargetMipmap(Re))}A.setRenderTarget($e),A.setClearColor(pe,me),rt!==void 0&&(ne.viewport=rt),A.toneMapping=We}function er(R,j,te){const ne=j.isScene===!0?j.overrideMaterial:null;for(let $=0,Re=R.length;$<Re;$++){const Ae=R[$],$e=Ae.object,We=Ae.geometry,rt=ne===null?Ae.material:ne,at=Ae.group;$e.layers.test(te.layers)&&aa($e,j,te,We,rt,at)}}function aa(R,j,te,ne,$,Re){R.onBeforeRender(A,j,te,ne,$,Re),R.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(A,j,te,ne,R,Re),$.transparent===!0&&$.side===Ci&&$.forceSinglePass===!1?($.side=vn,$.needsUpdate=!0,A.renderBufferDirect(te,j,ne,$,R,Re),$.side=Pr,$.needsUpdate=!0,A.renderBufferDirect(te,j,ne,$,R,Re),$.side=Ci):A.renderBufferDirect(te,j,ne,$,R,Re),R.onAfterRender(A,j,te,ne,$,Re)}function us(R,j,te){j.isScene!==!0&&(j=wt);const ne=je.get(R),$=_.state.lights,Re=_.state.shadowsArray,Ae=$.state.version,$e=Ve.getParameters(R,$.state,Re,j,te),We=Ve.getProgramCacheKey($e);let rt=ne.programs;ne.environment=R.isMeshStandardMaterial?j.environment:null,ne.fog=j.fog,ne.envMap=(R.isMeshStandardMaterial?Z:T).get(R.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,rt===void 0&&(R.addEventListener("dispose",ct),rt=new Map,ne.programs=rt);let at=rt.get(We);if(at!==void 0){if(ne.currentProgram===at&&ne.lightsStateVersion===Ae)return xi(R,$e),at}else $e.uniforms=Ve.getUniforms(R),R.onBeforeCompile($e,A),at=Ve.acquireProgram($e,We),rt.set(We,at),ne.uniforms=$e.uniforms;const Ye=ne.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ye.clippingPlanes=Ee.uniform),xi(R,$e),ne.needsLights=ec(R),ne.lightsStateVersion=Ae,ne.needsLights&&(Ye.ambientLightColor.value=$.state.ambient,Ye.lightProbe.value=$.state.probe,Ye.directionalLights.value=$.state.directional,Ye.directionalLightShadows.value=$.state.directionalShadow,Ye.spotLights.value=$.state.spot,Ye.spotLightShadows.value=$.state.spotShadow,Ye.rectAreaLights.value=$.state.rectArea,Ye.ltc_1.value=$.state.rectAreaLTC1,Ye.ltc_2.value=$.state.rectAreaLTC2,Ye.pointLights.value=$.state.point,Ye.pointLightShadows.value=$.state.pointShadow,Ye.hemisphereLights.value=$.state.hemi,Ye.directionalShadowMap.value=$.state.directionalShadowMap,Ye.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ye.spotShadowMap.value=$.state.spotShadowMap,Ye.spotLightMatrix.value=$.state.spotLightMatrix,Ye.spotLightMap.value=$.state.spotLightMap,Ye.pointShadowMap.value=$.state.pointShadowMap,Ye.pointShadowMatrix.value=$.state.pointShadowMatrix),ne.currentProgram=at,ne.uniformsList=null,at}function la(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=$l.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function xi(R,j){const te=je.get(R);te.outputColorSpace=j.outputColorSpace,te.batching=j.batching,te.batchingColor=j.batchingColor,te.instancing=j.instancing,te.instancingColor=j.instancingColor,te.instancingMorph=j.instancingMorph,te.skinning=j.skinning,te.morphTargets=j.morphTargets,te.morphNormals=j.morphNormals,te.morphColors=j.morphColors,te.morphTargetsCount=j.morphTargetsCount,te.numClippingPlanes=j.numClippingPlanes,te.numIntersection=j.numClipIntersection,te.vertexAlphas=j.vertexAlphas,te.vertexTangents=j.vertexTangents,te.toneMapping=j.toneMapping}function ca(R,j,te,ne,$){j.isScene!==!0&&(j=wt),D.resetTextureUnits();const Re=j.fog,Ae=ne.isMeshStandardMaterial?j.environment:null,$e=B===null?A.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:uo,We=(ne.isMeshStandardMaterial?Z:T).get(ne.envMap||Ae),rt=ne.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,at=!!te.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ye=!!te.morphAttributes.position,yt=!!te.morphAttributes.normal,bt=!!te.morphAttributes.color;let vt=Ki;ne.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(vt=A.toneMapping);const un=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ht=un!==void 0?un.length:0,Ze=je.get(ne),ri=_.state.lights;if(fe===!0&&(Te===!0||R!==C)){const yn=R===C&&ne.id===L;Ee.setState(ne,R,yn)}let At=!1;ne.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==ri.state.version||Ze.outputColorSpace!==$e||$.isBatchedMesh&&Ze.batching===!1||!$.isBatchedMesh&&Ze.batching===!0||$.isBatchedMesh&&Ze.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Ze.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Ze.instancing===!1||!$.isInstancedMesh&&Ze.instancing===!0||$.isSkinnedMesh&&Ze.skinning===!1||!$.isSkinnedMesh&&Ze.skinning===!0||$.isInstancedMesh&&Ze.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ze.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ze.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ze.instancingMorph===!1&&$.morphTexture!==null||Ze.envMap!==We||ne.fog===!0&&Ze.fog!==Re||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Ee.numPlanes||Ze.numIntersection!==Ee.numIntersection)||Ze.vertexAlphas!==rt||Ze.vertexTangents!==at||Ze.morphTargets!==Ye||Ze.morphNormals!==yt||Ze.morphColors!==bt||Ze.toneMapping!==vt||Ze.morphTargetsCount!==ht)&&(At=!0):(At=!0,Ze.__version=ne.version);let hn=Ze.currentProgram;At===!0&&(hn=us(ne,j,$));let si=!1,Kt=!1,yi=!1;const It=hn.getUniforms(),Xn=Ze.uniforms;if(Je.useProgram(hn.program)&&(si=!0,Kt=!0,yi=!0),ne.id!==L&&(L=ne.id,Kt=!0),si||C!==R){Je.buffers.depth.getReversed()?(Se.copy(R.projectionMatrix),OS(Se),kS(Se),It.setValue(X,"projectionMatrix",Se)):It.setValue(X,"projectionMatrix",R.projectionMatrix),It.setValue(X,"viewMatrix",R.matrixWorldInverse);const jn=It.map.cameraPosition;jn!==void 0&&jn.setValue(X,Oe.setFromMatrixPosition(R.matrixWorld)),ot.logarithmicDepthBuffer&&It.setValue(X,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&It.setValue(X,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,Kt=!0,yi=!0)}if($.isSkinnedMesh){It.setOptional(X,$,"bindMatrix"),It.setOptional(X,$,"bindMatrixInverse");const yn=$.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),It.setValue(X,"boneTexture",yn.boneTexture,D))}$.isBatchedMesh&&(It.setOptional(X,$,"batchingTexture"),It.setValue(X,"batchingTexture",$._matricesTexture,D),It.setOptional(X,$,"batchingIdTexture"),It.setValue(X,"batchingIdTexture",$._indirectTexture,D),It.setOptional(X,$,"batchingColorTexture"),$._colorsTexture!==null&&It.setValue(X,"batchingColorTexture",$._colorsTexture,D));const Di=te.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&re.update($,te,hn),(Kt||Ze.receiveShadow!==$.receiveShadow)&&(Ze.receiveShadow=$.receiveShadow,It.setValue(X,"receiveShadow",$.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Xn.envMap.value=We,Xn.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&j.environment!==null&&(Xn.envMapIntensity.value=j.environmentIntensity),Kt&&(It.setValue(X,"toneMappingExposure",A.toneMappingExposure),Ze.needsLights&&ua(Xn,yi),Re&&ne.fog===!0&&Pe.refreshFogUniforms(Xn,Re),Pe.refreshMaterialUniforms(Xn,ne,z,ce,_.state.transmissionRenderTarget[R.id]),$l.upload(X,la(Ze),Xn,D)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&($l.upload(X,la(Ze),Xn,D),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&It.setValue(X,"center",$.center),It.setValue(X,"modelViewMatrix",$.modelViewMatrix),It.setValue(X,"normalMatrix",$.normalMatrix),It.setValue(X,"modelMatrix",$.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const yn=ne.uniformsGroups;for(let jn=0,Rn=yn.length;jn<Rn;jn++){const ha=yn[jn];G.update(ha,hn),G.bind(ha,hn)}}return hn}function ua(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function ec(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(R,j,te){je.get(R.texture).__webglTexture=j,je.get(R.depthTexture).__webglTexture=te;const ne=je.get(R);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=te===void 0,ne.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,j){const te=je.get(R);te.__webglFramebuffer=j,te.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(R,j=0,te=0){B=R,F=j,I=te;let ne=!0,$=null,Re=!1,Ae=!1;if(R){const We=je.get(R);if(We.__useDefaultFramebuffer!==void 0)Je.bindFramebuffer(X.FRAMEBUFFER,null),ne=!1;else if(We.__webglFramebuffer===void 0)D.setupRenderTarget(R);else if(We.__hasExternalTextures)D.rebindTextures(R,je.get(R.texture).__webglTexture,je.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ye=R.depthTexture;if(We.__boundDepthTexture!==Ye){if(Ye!==null&&je.has(Ye)&&(R.width!==Ye.image.width||R.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(R)}}const rt=R.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Ae=!0);const at=je.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(at[j])?$=at[j][te]:$=at[j],Re=!0):R.samples>0&&D.useMultisampledRTT(R)===!1?$=je.get(R).__webglMultisampledFramebuffer:Array.isArray(at)?$=at[te]:$=at,k.copy(R.viewport),oe.copy(R.scissor),J=R.scissorTest}else k.copy(U).multiplyScalar(z).floor(),oe.copy(ie).multiplyScalar(z).floor(),J=Ue;if(Je.bindFramebuffer(X.FRAMEBUFFER,$)&&ne&&Je.drawBuffers(R,$),Je.viewport(k),Je.scissor(oe),Je.setScissorTest(J),Re){const We=je.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+j,We.__webglTexture,te)}else if(Ae){const We=je.get(R.texture),rt=j||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,We.__webglTexture,te||0,rt)}L=-1},this.readRenderTargetPixels=function(R,j,te,ne,$,Re,Ae){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=je.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&($e=$e[Ae]),$e){Je.bindFramebuffer(X.FRAMEBUFFER,$e);try{const We=R.texture,rt=We.format,at=We.type;if(!ot.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-ne&&te>=0&&te<=R.height-$&&X.readPixels(j,te,ne,$,Be.convert(rt),Be.convert(at),Re)}finally{const We=B!==null?je.get(B).__webglFramebuffer:null;Je.bindFramebuffer(X.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(R,j,te,ne,$,Re,Ae){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=je.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&($e=$e[Ae]),$e){const We=R.texture,rt=We.format,at=We.type;if(!ot.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=R.width-ne&&te>=0&&te<=R.height-$){Je.bindFramebuffer(X.FRAMEBUFFER,$e);const Ye=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Ye),X.bufferData(X.PIXEL_PACK_BUFFER,Re.byteLength,X.STREAM_READ),X.readPixels(j,te,ne,$,Be.convert(rt),Be.convert(at),0);const yt=B!==null?je.get(B).__webglFramebuffer:null;Je.bindFramebuffer(X.FRAMEBUFFER,yt);const bt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await FS(X,bt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Ye),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Re),X.deleteBuffer(Ye),X.deleteSync(bt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,j=null,te=0){R.isTexture!==!0&&(ta("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,R=arguments[1]);const ne=Math.pow(2,-te),$=Math.floor(R.image.width*ne),Re=Math.floor(R.image.height*ne),Ae=j!==null?j.x:0,$e=j!==null?j.y:0;D.setTexture2D(R,0),X.copyTexSubImage2D(X.TEXTURE_2D,te,0,0,Ae,$e,$,Re),Je.unbindTexture()},this.copyTextureToTexture=function(R,j,te=null,ne=null,$=0){R.isTexture!==!0&&(ta("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,R=arguments[1],j=arguments[2],$=arguments[3]||0,te=null);let Re,Ae,$e,We,rt,at,Ye,yt,bt;const vt=R.isCompressedTexture?R.mipmaps[$]:R.image;te!==null?(Re=te.max.x-te.min.x,Ae=te.max.y-te.min.y,$e=te.isBox3?te.max.z-te.min.z:1,We=te.min.x,rt=te.min.y,at=te.isBox3?te.min.z:0):(Re=vt.width,Ae=vt.height,$e=vt.depth||1,We=0,rt=0,at=0),ne!==null?(Ye=ne.x,yt=ne.y,bt=ne.z):(Ye=0,yt=0,bt=0);const un=Be.convert(j.format),ht=Be.convert(j.type);let Ze;j.isData3DTexture?(D.setTexture3D(j,0),Ze=X.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(D.setTexture2DArray(j,0),Ze=X.TEXTURE_2D_ARRAY):(D.setTexture2D(j,0),Ze=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,j.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,j.unpackAlignment);const ri=X.getParameter(X.UNPACK_ROW_LENGTH),At=X.getParameter(X.UNPACK_IMAGE_HEIGHT),hn=X.getParameter(X.UNPACK_SKIP_PIXELS),si=X.getParameter(X.UNPACK_SKIP_ROWS),Kt=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,vt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,vt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,We),X.pixelStorei(X.UNPACK_SKIP_ROWS,rt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,at);const yi=R.isDataArrayTexture||R.isData3DTexture,It=j.isDataArrayTexture||j.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const Xn=je.get(R),Di=je.get(j),yn=je.get(Xn.__renderTarget),jn=je.get(Di.__renderTarget);Je.bindFramebuffer(X.READ_FRAMEBUFFER,yn.__webglFramebuffer),Je.bindFramebuffer(X.DRAW_FRAMEBUFFER,jn.__webglFramebuffer);for(let Rn=0;Rn<$e;Rn++)yi&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,je.get(R).__webglTexture,$,at+Rn),R.isDepthTexture?(It&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,je.get(j).__webglTexture,$,bt+Rn),X.blitFramebuffer(We,rt,Re,Ae,Ye,yt,Re,Ae,X.DEPTH_BUFFER_BIT,X.NEAREST)):It?X.copyTexSubImage3D(Ze,$,Ye,yt,bt+Rn,We,rt,Re,Ae):X.copyTexSubImage2D(Ze,$,Ye,yt,bt+Rn,We,rt,Re,Ae);Je.bindFramebuffer(X.READ_FRAMEBUFFER,null),Je.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else It?R.isDataTexture||R.isData3DTexture?X.texSubImage3D(Ze,$,Ye,yt,bt,Re,Ae,$e,un,ht,vt.data):j.isCompressedArrayTexture?X.compressedTexSubImage3D(Ze,$,Ye,yt,bt,Re,Ae,$e,un,vt.data):X.texSubImage3D(Ze,$,Ye,yt,bt,Re,Ae,$e,un,ht,vt):R.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,$,Ye,yt,Re,Ae,un,ht,vt.data):R.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,$,Ye,yt,vt.width,vt.height,un,vt.data):X.texSubImage2D(X.TEXTURE_2D,$,Ye,yt,Re,Ae,un,ht,vt);X.pixelStorei(X.UNPACK_ROW_LENGTH,ri),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,At),X.pixelStorei(X.UNPACK_SKIP_PIXELS,hn),X.pixelStorei(X.UNPACK_SKIP_ROWS,si),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Kt),$===0&&j.generateMipmaps&&X.generateMipmap(Ze),Je.unbindTexture()},this.copyTextureToTexture3D=function(R,j,te=null,ne=null,$=0){return R.isTexture!==!0&&(ta("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,ne=arguments[1]||null,R=arguments[2],j=arguments[3],$=arguments[4]||0),ta('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,j,te,ne,$)},this.initRenderTarget=function(R){je.get(R).__webglFramebuffer===void 0&&D.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?D.setTextureCube(R,0):R.isData3DTexture?D.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?D.setTexture2DArray(R,0):D.setTexture2D(R,0),Je.unbindTexture()},this.resetState=function(){F=0,I=0,B=null,Je.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}}class l_ extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class c_ extends ho{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ng=new zt,af=new _f,Il=new Ql,Ul=new W;class $T extends an{constructor(e=new ii,t=new c_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Il.copy(r.boundingSphere),Il.applyMatrix4(a),Il.radius+=l,e.ray.intersectsSphere(Il)===!1)return;ng.copy(a).invert(),af.copy(e.ray).applyMatrix4(ng);const h=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=h*h,p=r.index,y=r.attributes.position;if(p!==null){const v=Math.max(0,u.start),S=Math.min(p.count,u.start+u.count);for(let E=v,M=S;E<M;E++){const x=p.getX(E);Ul.fromBufferAttribute(y,x),ig(Ul,x,d,a,e,t,this)}}else{const v=Math.max(0,u.start),S=Math.min(y.count,u.start+u.count);for(let E=v,M=S;E<M;E++)Ul.fromBufferAttribute(y,E),ig(Ul,E,d,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const h=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}}function ig(s,e,t,r,a,l,u){const h=af.distanceSqToPoint(s);if(h<t){const d=new W;af.closestPointToPoint(s,d),d.applyMatrix4(r);const p=a.ray.origin.distanceTo(d);if(p<a.near||p>a.far)return;l.push({distance:p,distanceToRay:Math.sqrt(h),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class YT extends Tn{constructor(e,t,r,a,l,u,h,d,p){super(e,t,r,a,l,u,h,d,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mf extends ii{constructor(e=[],t=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:a};const l=[],u=[];h(a),p(r),g(),this.setAttribute("position",new An(l,3)),this.setAttribute("normal",new An(l.slice(),3)),this.setAttribute("uv",new An(u,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function h(b){const P=new W,A=new W,H=new W;for(let F=0;F<t.length;F+=3)S(t[F+0],P),S(t[F+1],A),S(t[F+2],H),d(P,A,H,b)}function d(b,P,A,H){const F=H+1,I=[];for(let B=0;B<=F;B++){I[B]=[];const L=b.clone().lerp(A,B/F),C=P.clone().lerp(A,B/F),k=F-B;for(let oe=0;oe<=k;oe++)oe===0&&B===F?I[B][oe]=L:I[B][oe]=L.clone().lerp(C,oe/k)}for(let B=0;B<F;B++)for(let L=0;L<2*(F-B)-1;L++){const C=Math.floor(L/2);L%2===0?(v(I[B][C+1]),v(I[B+1][C]),v(I[B][C])):(v(I[B][C+1]),v(I[B+1][C+1]),v(I[B+1][C]))}}function p(b){const P=new W;for(let A=0;A<l.length;A+=3)P.x=l[A+0],P.y=l[A+1],P.z=l[A+2],P.normalize().multiplyScalar(b),l[A+0]=P.x,l[A+1]=P.y,l[A+2]=P.z}function g(){const b=new W;for(let P=0;P<l.length;P+=3){b.x=l[P+0],b.y=l[P+1],b.z=l[P+2];const A=x(b)/2/Math.PI+.5,H=_(b)/Math.PI+.5;u.push(A,1-H)}E(),y()}function y(){for(let b=0;b<u.length;b+=6){const P=u[b+0],A=u[b+2],H=u[b+4],F=Math.max(P,A,H),I=Math.min(P,A,H);F>.9&&I<.1&&(P<.2&&(u[b+0]+=1),A<.2&&(u[b+2]+=1),H<.2&&(u[b+4]+=1))}}function v(b){l.push(b.x,b.y,b.z)}function S(b,P){const A=b*3;P.x=e[A+0],P.y=e[A+1],P.z=e[A+2]}function E(){const b=new W,P=new W,A=new W,H=new W,F=new it,I=new it,B=new it;for(let L=0,C=0;L<l.length;L+=9,C+=6){b.set(l[L+0],l[L+1],l[L+2]),P.set(l[L+3],l[L+4],l[L+5]),A.set(l[L+6],l[L+7],l[L+8]),F.set(u[C+0],u[C+1]),I.set(u[C+2],u[C+3]),B.set(u[C+4],u[C+5]),H.copy(b).add(P).add(A).divideScalar(3);const k=x(H);M(F,C+0,b,k),M(I,C+2,P,k),M(B,C+4,A,k)}}function M(b,P,A,H){H<0&&b.x===1&&(u[P]=b.x-1),A.x===0&&A.z===0&&(u[P]=H/2/Math.PI+.5)}function x(b){return Math.atan2(b.z,-b.x)}function _(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mf(e.vertices,e.indices,e.radius,e.details)}}class Ef extends Mf{constructor(e=1,t=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,a,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ef(e.radius,e.detail)}}class wf extends ii{constructor(e=.5,t=1,r=32,a=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:a,thetaStart:l,thetaLength:u},r=Math.max(3,r),a=Math.max(1,a);const h=[],d=[],p=[],g=[];let y=e;const v=(t-e)/a,S=new W,E=new it;for(let M=0;M<=a;M++){for(let x=0;x<=r;x++){const _=l+x/r*u;S.x=y*Math.cos(_),S.y=y*Math.sin(_),d.push(S.x,S.y,S.z),p.push(0,0,1),E.x=(S.x/t+1)/2,E.y=(S.y/t+1)/2,g.push(E.x,E.y)}y+=v}for(let M=0;M<a;M++){const x=M*(r+1);for(let _=0;_<r;_++){const b=_+x,P=b,A=b+r+1,H=b+r+2,F=b+1;h.push(P,A,F),h.push(A,H,F)}}this.setIndex(h),this.setAttribute("position",new An(d,3)),this.setAttribute("normal",new An(p,3)),this.setAttribute("uv",new An(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class qT extends vi{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class rs extends ho{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wg,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tf extends an{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class KT extends Tf{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ft(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const fh=new zt,rg=new W,sg=new W;class u_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xf,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;rg.setFromMatrixPosition(e.matrixWorld),t.position.copy(rg),sg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sg),t.updateMatrixWorld(),fh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(fh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const og=new zt,Zo=new W,dh=new W;class ZT extends u_{constructor(){super(new Wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new Nt(2,1,1,1),new Nt(0,1,1,1),new Nt(3,1,1,1),new Nt(1,1,1,1),new Nt(3,0,1,1),new Nt(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,a=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),Zo.setFromMatrixPosition(e.matrixWorld),r.position.copy(Zo),dh.copy(r.position),dh.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(dh),r.updateMatrixWorld(),a.makeTranslation(-Zo.x,-Zo.y,-Zo.z),og.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(og)}}class QT extends Tf{constructor(e,t,r=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new ZT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class JT extends u_{constructor(){super(new yf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ag extends Tf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new JT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class eA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=lg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=lg();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function lg(){return performance.now()}class cg{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(wn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class tA extends ls{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uf);const ug={type:"change"},Af={type:"start"},h_={type:"end"},Fl=new _f,hg=new Cr,nA=Math.cos(70*IS.DEG2RAD),Jt=new W,Fn=2*Math.PI,Dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ph=1e-6;class iA extends tA{constructor(e,t=null){super(e,t),this.state=Dt.NONE,this.enabled=!0,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qs.ROTATE,MIDDLE:Qs.DOLLY,RIGHT:Qs.PAN},this.touches={ONE:qs.ROTATE,TWO:qs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new Dr,this._lastTargetPosition=new W,this._quat=new Dr().setFromUnitVectors(e.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new cg,this._sphericalDelta=new cg,this._scale=1,this._panOffset=new W,this._rotateStart=new it,this._rotateEnd=new it,this._rotateDelta=new it,this._panStart=new it,this._panEnd=new it,this._panDelta=new it,this._dollyStart=new it,this._dollyEnd=new it,this._dollyDelta=new it,this._dollyDirection=new W,this._mouse=new it,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=sA.bind(this),this._onPointerDown=rA.bind(this),this._onPointerUp=oA.bind(this),this._onContextMenu=dA.bind(this),this._onMouseWheel=cA.bind(this),this._onKeyDown=uA.bind(this),this._onTouchStart=hA.bind(this),this._onTouchMove=fA.bind(this),this._onMouseDown=aA.bind(this),this._onMouseMove=lA.bind(this),this._interceptControlDown=pA.bind(this),this._interceptControlUp=mA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ug),this.update(),this.state=Dt.NONE}update(e=null){const t=this.object.position;Jt.copy(t).sub(this.target),Jt.applyQuaternion(this._quat),this._spherical.setFromVector3(Jt),this.autoRotate&&this.state===Dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(r)&&isFinite(a)&&(r<-Math.PI?r+=Fn:r>Math.PI&&(r-=Fn),a<-Math.PI?a+=Fn:a>Math.PI&&(a-=Fn),r<=a?this._spherical.theta=Math.max(r,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+a)/2?Math.max(r,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(Jt.setFromSpherical(this._spherical),Jt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Jt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const h=Jt.length();u=this._clampDistance(h*this._scale);const d=h-u;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),l=!!d}else if(this.object.isOrthographicCamera){const h=new W(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=d!==this.object.zoom;const p=new W(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(h),this.object.updateMatrixWorld(),u=Jt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Fl.origin.copy(this.object.position),Fl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Fl.direction))<nA?this.object.lookAt(this.target):(hg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Fl.intersectPlane(hg,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>ph||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ph||this._lastTargetPosition.distanceToSquared(this.target)>ph?(this.dispatchEvent(ug),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Fn/60*this.autoRotateSpeed*e:Fn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Jt.setFromMatrixColumn(t,0),Jt.multiplyScalar(-e),this._panOffset.add(Jt)}_panUp(e,t){this.screenSpacePanning===!0?Jt.setFromMatrixColumn(t,1):(Jt.setFromMatrixColumn(t,0),Jt.crossVectors(this.object.up,Jt)),Jt.multiplyScalar(e),this._panOffset.add(Jt)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;Jt.copy(a).sub(this.target);let l=Jt.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),a=e-r.left,l=t-r.top,u=r.width,h=r.height;this._mouse.x=a/u*2-1,this._mouse.y=-(l/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Fn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Fn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Fn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Fn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(r,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(r,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(r*r+a*a);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),a=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(a,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(r,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(r*r+a*a);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,h=(e.pageY+t.y)*.5;this._updateZoomParameters(u,h)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new it,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function rA(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function sA(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function oA(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(h_),this.state=Dt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function aA(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Qs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Dt.DOLLY;break;case Qs.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Dt.ROTATE}break;case Qs.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Dt.PAN}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent(Af)}function lA(s){switch(this.state){case Dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function cA(s){this.enabled===!1||this.enableZoom===!1||this.state!==Dt.NONE||(s.preventDefault(),this.dispatchEvent(Af),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(h_))}function uA(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function hA(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case qs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Dt.TOUCH_ROTATE;break;case qs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Dt.TOUCH_PAN;break;default:this.state=Dt.NONE}break;case 2:switch(this.touches.TWO){case qs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Dt.TOUCH_DOLLY_PAN;break;case qs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Dt.TOUCH_DOLLY_ROTATE;break;default:this.state=Dt.NONE}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent(Af)}function fA(s){switch(this._trackPointer(s),this.state){case Dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Dt.NONE}}function dA(s){this.enabled!==!1&&s.preventDefault()}function pA(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function mA(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const gA={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class oa{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const _A=new yf(-1,1,1,-1,0,1);class vA extends ii{constructor(){super(),this.setAttribute("position",new An([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new An([0,2,0,0,2,0],2))}}const xA=new vA;class f_{constructor(e){this._mesh=new Rt(xA,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,_A)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class yA extends oa{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof vi?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=vf.clone(e.uniforms),this.material=new vi({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new f_(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class fg extends oa{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){const a=e.getContext(),l=e.state;l.buffers.color.setMask(!1),l.buffers.depth.setMask(!1),l.buffers.color.setLocked(!0),l.buffers.depth.setLocked(!0);let u,h;this.inverse?(u=0,h=1):(u=1,h=0),l.buffers.stencil.setTest(!0),l.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),l.buffers.stencil.setFunc(a.ALWAYS,u,4294967295),l.buffers.stencil.setClear(h),l.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),l.buffers.color.setLocked(!1),l.buffers.depth.setLocked(!1),l.buffers.color.setMask(!0),l.buffers.depth.setMask(!0),l.buffers.stencil.setLocked(!1),l.buffers.stencil.setFunc(a.EQUAL,1,4294967295),l.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),l.buffers.stencil.setLocked(!0)}}class SA extends oa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class MA{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const r=e.getSize(new it);this._width=r.width,this._height=r.height,t=new Lr(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:co}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new yA(gA),this.copyPass.material.blending=qi,this.clock=new eA}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let r=!1;for(let a=0,l=this.passes.length;a<l;a++){const u=this.passes[a];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),u.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),u.needsSwap){if(r){const h=this.renderer.getContext(),d=this.renderer.state.buffers.stencil;d.setFunc(h.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),d.setFunc(h.EQUAL,1,4294967295)}this.swapBuffers()}fg!==void 0&&(u instanceof fg?r=!0:u instanceof SA&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new it);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const r=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(r,a),this.renderTarget2.setSize(r,a);for(let l=0;l<this.passes.length;l++)this.passes[l].setSize(r,a)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class EA extends oa{constructor(e,t,r=null,a=null,l=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=a,this.clearAlpha=l,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ft}render(e,t,r){const a=e.autoClear;e.autoClear=!1;let l,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(l=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(l),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),e.autoClear=a}}const wA={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class TA extends oa{constructor(){super();const e=wA;this.uniforms=vf.clone(e.uniforms),this.material=new qT({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new f_(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,r){this.uniforms.tDiffuse.value=r.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},St.getTransfer(this._outputColorSpace)===Lt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Cg?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Rg?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===bg?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Pg?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Lg?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Dg&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class AA extends l_{constructor(){super();const e=new Nr;e.deleteAttribute("uv");const t=new rs({side:vn}),r=new rs,a=new QT(16777215,900,28,2);a.position.set(.418,16.199,.3),this.add(a);const l=new Rt(e,t);l.position.set(-.757,13.219,.717),l.scale.set(31.713,28.305,28.591),this.add(l);const u=new Rt(e,r);u.position.set(-10.906,2.009,1.846),u.rotation.set(0,-.195,0),u.scale.set(2.328,7.905,4.651),this.add(u);const h=new Rt(e,r);h.position.set(-5.607,-.754,-.758),h.rotation.set(0,.994,0),h.scale.set(1.97,1.534,3.955),this.add(h);const d=new Rt(e,r);d.position.set(6.167,.857,7.803),d.rotation.set(0,.561,0),d.scale.set(3.927,6.285,3.687),this.add(d);const p=new Rt(e,r);p.position.set(-2.017,.018,6.124),p.rotation.set(0,.333,0),p.scale.set(2.002,4.566,2.064),this.add(p);const g=new Rt(e,r);g.position.set(2.291,-.756,-2.621),g.rotation.set(0,-.286,0),g.scale.set(1.546,1.552,1.496),this.add(g);const y=new Rt(e,r);y.position.set(-2.193,-.369,-5.547),y.rotation.set(0,.516,0),y.scale.set(3.875,3.487,2.986),this.add(y);const v=new Rt(e,$s(50));v.position.set(-16.116,14.37,8.208),v.scale.set(.1,2.428,2.739),this.add(v);const S=new Rt(e,$s(50));S.position.set(-16.109,18.021,-8.207),S.scale.set(.1,2.425,2.751),this.add(S);const E=new Rt(e,$s(17));E.position.set(14.904,12.198,-1.832),E.scale.set(.15,4.265,6.331),this.add(E);const M=new Rt(e,$s(43));M.position.set(-.462,8.89,14.52),M.scale.set(4.38,5.441,.088),this.add(M);const x=new Rt(e,$s(20));x.position.set(3.235,11.486,-12.541),x.scale.set(2.5,2,.1),this.add(x);const _=new Rt(e,$s(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function $s(s){const e=new br;return e.color.setScalar(s),e}const Qo=new W;function ei(s,e,t,r,a,l){const u=2*Math.PI*a/4,h=Math.max(l-2*a,0),d=Math.PI/4;Qo.copy(e),Qo[r]=0,Qo.normalize();const p=.5*u/(u+h),g=1-Qo.angleTo(s)/d;return Math.sign(Qo[t])===1?g*p:h/(u+h)+p+p*(1-g)}class Jo extends Nr{constructor(e=1,t=1,r=1,a=2,l=.1){if(a=a*2+1,l=Math.min(e/2,t/2,r/2,l),super(1,1,1,a,a,a),a===1)return;const u=this.toNonIndexed();this.index=null,this.attributes.position=u.attributes.position,this.attributes.normal=u.attributes.normal,this.attributes.uv=u.attributes.uv;const h=new W,d=new W,p=new W(e,t,r).divideScalar(2).subScalar(l),g=this.attributes.position.array,y=this.attributes.normal.array,v=this.attributes.uv.array,S=g.length/6,E=new W,M=.5/a;for(let x=0,_=0;x<g.length;x+=3,_+=2)switch(h.fromArray(g,x),d.copy(h),d.x-=Math.sign(d.x)*M,d.y-=Math.sign(d.y)*M,d.z-=Math.sign(d.z)*M,d.normalize(),g[x+0]=p.x*Math.sign(h.x)+d.x*l,g[x+1]=p.y*Math.sign(h.y)+d.y*l,g[x+2]=p.z*Math.sign(h.z)+d.z*l,y[x+0]=d.x,y[x+1]=d.y,y[x+2]=d.z,Math.floor(x/S)){case 0:E.set(1,0,0),v[_+0]=ei(E,d,"z","y",l,r),v[_+1]=1-ei(E,d,"y","z",l,t);break;case 1:E.set(-1,0,0),v[_+0]=1-ei(E,d,"z","y",l,r),v[_+1]=1-ei(E,d,"y","z",l,t);break;case 2:E.set(0,1,0),v[_+0]=1-ei(E,d,"x","z",l,e),v[_+1]=ei(E,d,"z","x",l,r);break;case 3:E.set(0,-1,0),v[_+0]=1-ei(E,d,"x","z",l,e),v[_+1]=1-ei(E,d,"z","x",l,r);break;case 4:E.set(0,0,1),v[_+0]=1-ei(E,d,"x","y",l,e),v[_+1]=1-ei(E,d,"y","x",l,t);break;case 5:E.set(0,0,-1),v[_+0]=ei(E,d,"x","y",l,e),v[_+1]=1-ei(E,d,"y","x",l,t);break}}}const dg=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,pg=s=>1-Math.pow(1-s,3),mg=s=>s*s,mh=s=>1+2.70158*Math.pow(s-1,3)+1.70158*Math.pow(s-1,2),gg=["#0e9aa7","#e0245e","#5fa84a","#e69a00","#7e57c2"],Ol=15213663,gh=16723822,kl=.97,Ys=.42,Ti=.94;function lf(s,e,t,r=!0){const a=document.createElement("canvas");a.width=s,a.height=e,t(a.getContext("2d"));const l=new YT(a);return r&&(l.colorSpace=Gn),l.anisotropy=8,l}function CA(s,e){return lf(256,256,t=>{t.clearRect(0,0,256,256),t.strokeStyle=e,t.fillStyle=e,t.lineCap="round",t.lineWidth=16,s==="soft"?(t.beginPath(),t.arc(128,128,92,0,Math.PI*2),t.stroke(),t.globalAlpha=.55,t.beginPath(),t.arc(128,128,56,0,Math.PI*2),t.fill()):s==="heavy"?(t.beginPath(),t.arc(128,128,100,0,Math.PI*2),t.stroke(),t.lineWidth=26,t.beginPath(),t.moveTo(84,84),t.lineTo(172,172),t.moveTo(172,84),t.lineTo(84,172),t.stroke()):(t.lineWidth=20,t.beginPath(),t.arc(210,128,96,Math.PI*.72,Math.PI*1.28),t.stroke(),t.beginPath(),t.arc(46,128,96,-Math.PI*.28,Math.PI*.28),t.stroke(),t.beginPath(),t.arc(128,128,22,0,Math.PI*2),t.fill())})}class RA{constructor(e){this.container=e,this.scene=new l_,this.raf=0,this.last=performance.now(),this.time=0,this.tweens=[],this.board=new Zs,this.goalCover=null,this.bridges=[],this.decals=[],this.beam=null,this.disposables=[],this.cur=null,this.shake=0,this.center=new W,this.radius=10,this.disposed=!1,this.shatterParts=[],this.shatterToken=0,this.shattering=!1,this.shatterTimer=null,this.tick=d=>{var g;if(this.disposed)return;const p=Math.min(.05,(d-this.last)/1e3);this.last=d,this.time+=p;for(const y of[...this.tweens]){if(y.t+=p,y.t<0)continue;const v=Math.min(1,y.t/y.dur);y.fn(y.ease(v)),v>=1&&(this.tweens.splice(this.tweens.indexOf(y),1),y.done())}if(!this.shattering){for(const v of this.bridges)v.anim+=(v.target-v.anim)*Math.min(1,p*7),v.mesh.visible=v.anim>.02,v.mesh.scale.y=Math.max(.05,v.anim),v.mesh.position.y=v.baseY-(1-v.anim)*.7,v.mat.opacity=.2+.75*v.anim;const y=1+.05*Math.sin(this.time*3);for(const v of this.decals)v.scale.setScalar(y)}if(this.beam&&(this.beam.material.opacity=.1+.05*Math.sin(this.time*2.2)),this.marker.visible&&((g=this.cur)==null?void 0:g.o)==="P"){const y=this.cubes[this.cur.act];this.marker.position.set(y.position.x,y.position.y+.95+.1*Math.sin(this.time*4),y.position.z),this.marker.rotation.y=this.time*2}this.shake=Math.max(0,this.shake-p*2.5),this.scene.position.set((Math.random()-.5)*this.shake*.25,(Math.random()-.5)*this.shake*.25,0),this.controls.update(),this.composer.render(p),this.raf=requestAnimationFrame(this.tick)};const t=e.clientWidth||800,r=e.clientHeight||600;this.renderer=new jT({antialias:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(t,r),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Tg,this.renderer.toneMapping=Ki,e.appendChild(this.renderer.domElement);const a=new sf(this.renderer);this.scene.environment=a.fromScene(new AA,.04).texture,this.scene.environmentIntensity=.3,this.scene.background=lf(512,512,d=>{const p=d.createRadialGradient(300,210,10,300,210,360);p.addColorStop(0,"#2bb39a"),p.addColorStop(.5,"#1c7a70"),p.addColorStop(1,"#1c2327"),d.fillStyle=p,d.fillRect(0,0,512,512)}),this.camera=new Wn(30,t/r,.1,400),this.controls=new iA(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxPolarAngle=Math.PI*.47,this.controls.minDistance=5,this.controls.maxDistance=70,this.scene.add(new KT(16777215,10467251,.8)),this.sun=new ag(16777215,1.5),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.02,this.scene.add(this.sun,this.sun.target);const l=new ag(12255216,.5);l.position.set(10,6,-14),this.scene.add(l),this.scene.add(this.board);const u=new rs({color:Ol,roughness:.5,metalness:0});this.block=new Rt(new Jo(Ti,2*Ti+.06,Ti,3,.03),u),this.block.castShadow=!0;const h=new Jo(Ti,Ti,Ti,3,.03);this.cubes=[0,1].map(d=>{const p=u.clone();p.color=new ft(d===0?Ol:16098596),p.emissive=p.color.clone(),p.emissiveIntensity=0;const g=new Rt(h,p);return g.castShadow=!0,g.visible=!1,g}),this.marker=new Rt(new Ef(.17),new br({color:new ft(7336959).multiplyScalar(2.2)})),this.marker.visible=!1,this.scene.add(this.block,...this.cubes,this.marker),this.composer=new MA(this.renderer),this.composer.renderTarget1.samples=4,this.composer.renderTarget2.samples=4,this.composer.addPass(new EA(this.scene,this.camera)),this.composer.addPass(new TA),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(e),this.resize(),this.raf=requestAnimationFrame(this.tick)}tween(e,t,r=dg,a=0){return new Promise(l=>this.tweens.push({t:-a,dur:Math.max(e,.001),fn:t,ease:r,done:l}))}resize(){const e=this.container.clientWidth,t=this.container.clientHeight;!e||!t||(this.renderer.setSize(e,t),this.composer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix())}dispose(){this.disposed=!0,this.shatterTimer!==null&&clearTimeout(this.shatterTimer),this.shatterTimer=null,cancelAnimationFrame(this.raf),this.ro.disconnect(),this.controls.dispose(),this.composer.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}loadLevel(e){this.tweens=[],this.shatterToken++,this.shatterTimer!==null&&clearTimeout(this.shatterTimer),this.shatterTimer=null,this.shatterParts=[],this.shattering=!1,this.board.clear(),this.disposables.forEach(M=>M.dispose()),this.disposables=[],this.bridges=[],this.decals=[],this.beam=null,this.goalCover=null;const t=M=>(this.disposables.push(M),M),r=[...new Set(e.bridgeList.map(M=>M.id))],a=M=>new ft(gg[Math.max(0,r.indexOf(M))%gg.length]),l=t(new Jo(kl,Ys,kl,2,.02)),u=[16777215,16777215].map(M=>t(new rs({color:M,metalness:0,roughness:.82}))),h=t(lf(256,256,M=>{M.fillStyle="#fff7f8",M.fillRect(0,0,256,256),M.strokeStyle="rgba(190,45,85,.6)",M.lineWidth=5,M.lineJoin="round";const x=_=>{M.beginPath(),_.forEach(([b,P],A)=>A?M.lineTo(b,P):M.moveTo(b,P)),M.stroke()};x([[20,60],[90,100],[120,150],[190,170],[240,230]]),x([[130,0],[110,70],[150,110],[140,190]]),x([[0,190],[70,170],[100,210]]),M.strokeStyle="rgba(255,120,155,.45)",M.lineWidth=8,M.strokeRect(6,6,244,244)})),d=t(new rs({map:h,metalness:0,roughness:.85})),p=t(new rs({color:gh,emissive:gh,emissiveIntensity:.45,metalness:0,roughness:.55})),g=(M,x)=>(M*73856093^x*19349663)>>>0,y=[],v=(M,x,_,b,P,A)=>{const H=new Rt(M,x);return H.position.set(_,b,P),H.castShadow=!0,H.receiveShadow=!0,this.board.add(H),y.push({m:H,y:b,delay:A}),H};for(let M=0;M<e.rows;M++)for(let x=0;x<e.cols;x++){const _=e.tiles[M][x],b=(M+x)*.035+g(M,x)%100/700,P=-Ys/2;if(_==="#")v(l,u[(M+x)%2],x,P,M,b);else if(_==="F")v(l,d,x,P,M,b);else if(_==="G"){const H=(kl-.9)/2,F=t(new Jo(H,Ys,kl,1,.01)),I=t(new Jo(.9,Ys,H,1,.01)),B=.9/2+H/2;v(F,p,x-B,P,M,b),v(F,p,x+B,P,M,b),v(I,p,x,P,M-B,b),v(I,p,x,P,M+B,b);const L=new Rt(t(new Nr(.9,3,.9)),t(new br({color:0,side:vn})));L.position.set(x,-1.5,M),this.board.add(L),this.goalCover=new Rt(t(new lo(.9,.9)),t(new br({color:new ft(gh).multiplyScalar(1.15)}))),this.goalCover.rotation.x=-Math.PI/2,this.goalCover.position.set(x,-.012,M),this.board.add(this.goalCover)}}for(const M of e.bridgeList){const x=a(M.id),_=t(new rs({color:x.clone().lerp(new ft(16777215),.25),emissive:x,emissiveIntensity:.18,metalness:0,roughness:.6,transparent:!0,opacity:.2+.75*(M.open?1:0)})),b=new Rt(l,_);b.position.set(M.c,-Ys/2,M.r),b.castShadow=!0,b.receiveShadow=!0,this.board.add(b);const P={mesh:b,mat:_,bit:M.bit,anim:M.open?1:0,target:M.open?1:0,baseY:-Ys/2};this.bridges.push(P)}for(const[M,x]of e.switches){const[_,b]=M.split(",").map(Number),P=x.type==="split"?"#2d3436":"#"+a(x.targets[0]??"").getHexString(),A=t(CA(x.type,P)),H=new Rt(t(new lo(.78,.78)),t(new br({map:A,transparent:!0,color:new ft(1,1,1),depthWrite:!1})));H.rotation.x=-Math.PI/2,H.position.set(b,.012,_),this.board.add(H),this.decals.push(H),y.push({m:H,y:.012,delay:(_+b)*.035+g(_,b)%100/700})}for(const M of y)M.m.position.y=M.y-9,this.tween(.8,x=>{M.m.position.y=M.y-9*(1-x)},mh,M.delay);this.center.set((e.cols-1)/2,0,(e.rows-1)/2),this.radius=Math.max(e.rows*1.15,e.cols)+6;const S=Math.max(e.rows,e.cols)*.75+4,E=this.sun.shadow.camera;E.left=-S,E.right=S,E.top=S,E.bottom=-S,E.near=1,E.far=80,E.updateProjectionMatrix(),this.sun.position.set(this.center.x-8,18,this.center.z+9),this.sun.target.position.copy(this.center),this.resetView(!0)}resetView(e=!1){const t=this.radius*1.35,r=-40*Math.PI/180,a=new W(this.center.x+Math.sin(r)*t*.79,t*.62,this.center.z+Math.cos(r)*t*.79);if(e){this.camera.position.copy(a),this.controls.target.copy(this.center);return}const l=this.camera.position.clone(),u=this.controls.target.clone();this.tween(.9,h=>{this.camera.position.lerpVectors(l,a,h),this.controls.target.lerpVectors(u,this.center,h)})}setBlock(e){if(this.cur=e,this.block.scale.set(1,1,1),e.o==="P"){this.block.visible=!1;const r=[[e.r,e.c],[e.r2,e.c2]];this.cubes.forEach((a,l)=>{a.visible=!0,a.scale.setScalar(1),a.rotation.set(0,0,0),a.position.set(r[l][1],Ti/2,r[l][0]),a.material.emissiveIntensity=l===e.act?.45:0}),this.marker.visible=!0;return}this.cubes.forEach(r=>r.visible=!1),this.marker.visible=!1,this.block.visible=!0,this.block.rotation.set(0,0,0);const t=Ti+.03;e.o==="S"?this.block.position.set(e.c,t,e.r):e.o==="H"?(this.block.position.set(e.c+.5,Ti/2,e.r),this.block.rotation.z=Math.PI/2):(this.block.position.set(e.c,Ti/2,e.r+.5),this.block.rotation.x=Math.PI/2)}setBridges(e,t=!1){for(const r of this.bridges)r.target=e>>r.bit&1,t&&(r.anim=r.target)}restoreBoard(){this.shatterToken++,this.shatterTimer!==null&&clearTimeout(this.shatterTimer),this.shatterTimer=null;for(const e of this.shatterParts)e.obj.position.copy(e.p),e.obj.quaternion.copy(e.q),e.obj.scale.copy(e.s),e.obj.visible=!0;this.shatterParts=[],this.shattering=!1,this.goalCover&&(this.goalCover.visible=!0)}async reassembleBoard(){this.shatterTimer=null;const e=this.shatterParts;if(this.disposed||!this.shattering||!e.length)return;const t=++this.shatterToken,r=e.map((a,l)=>{const u=a.obj.position.clone(),h=a.obj.quaternion.clone(),d=a.obj.scale.clone();return this.tween(.58,p=>{t===this.shatterToken&&(a.obj.position.lerpVectors(u,a.p,p),a.obj.quaternion.copy(h).slerp(a.q,p),a.obj.scale.lerpVectors(d,a.s,p))},pg,Math.min(.15,l*.01)).then(()=>{t===this.shatterToken&&(a.obj.position.copy(a.p),a.obj.quaternion.copy(a.q),a.obj.scale.copy(a.s),a.obj.visible=!0)})});await Promise.all(r),t===this.shatterToken&&(this.shatterParts=[],this.shattering=!1,this.goalCover&&(this.goalCover.visible=!0))}shatterBoard(e){if(this.disposed||this.shattering||!this.board.children.length)return;this.shattering=!0,this.shake=Math.max(this.shake,1.2);const t=++this.shatterToken,r=this.board.children.map(l=>({obj:l,p:l.position.clone(),q:l.quaternion.clone(),s:l.scale.clone()}));this.shatterParts=r;for(const l of r){const u=l.p.x-this.center.x,h=l.p.z-this.center.z,d=Math.min(.36,Math.hypot(u,h)*.022)+Math.random()*.09,p=.8+Math.random()*.55,g=u*(.35+Math.random()*.4)+(Math.random()-.5)*1.4,y=h*(.35+Math.random()*.4)+(Math.random()-.5)*1.4,v=5+Math.random()*9,S=new W(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),E=(.8+Math.random()*2.2)*(Math.random()<.5?-1:1),M=new Dr;this.tween(p,x=>{t===this.shatterToken&&(l.obj.position.set(l.p.x+g*x,l.p.y-v*x*x,l.p.z+y*x),M.setFromAxisAngle(S,E*x),l.obj.quaternion.copy(l.q).multiply(M),l.obj.scale.copy(l.s).multiplyScalar(1-.18*x))},mg,d)}const a=e??this.center;this.burst(a.x,.6,a.z),this.burst(this.center.x,.9,this.center.z),this.shatterTimer!==null&&clearTimeout(this.shatterTimer),this.shatterTimer=window.setTimeout(()=>void this.reassembleBoard(),1250)}resetState(e){this.restoreBoard(),this.setBridges(e.mask,!0),this.setBlock(e);const t=this.block.position.y;this.block.position.y=t+9,this.tween(.7,r=>{this.block.position.y=t+9*(1-r)},mh,.5)}rollObject(e,t,r,a){const l=t.map(_=>_[1]),u=t.map(_=>_[0]),h=Math.min(...l)-.5,d=Math.max(...l)+.5,p=Math.min(...u)-.5,g=Math.max(...u)+.5,y=(h+d)/2,v=(p+g)/2;let S=new W,E="z",M=0;r==="R"?(S.set(d,0,v),E="z",M=-Math.PI/2):r==="L"?(S.set(h,0,v),E="z",M=Math.PI/2):r==="D"?(S.set(y,0,g),E="x",M=Math.PI/2):(S.set(y,0,p),E="x",M=-Math.PI/2);const x=new Zs;return x.position.copy(S),this.scene.add(x),x.attach(e),this.tween(a,_=>{x.rotation[E]=M*_},dg).then(()=>{this.scene.attach(e),this.scene.remove(x)})}async fall(e,t){const r=new W(t==="R"?1:t==="L"?-1:0,0,t==="D"?1:t==="U"?-1:0),a=e.position.clone(),l=t==="L"||t==="R"?new W(0,0,t==="R"?-1:1):new W(t==="D"?1:-1,0,0);this.shake=.7;let u=0;await this.tween(.95,h=>{e.position.copy(a).addScaledVector(r,.5*h),e.position.y=a.y-16*h*h,e.rotateOnWorldAxis(l,(h-u)*1.1),u=h},h=>h)}async animateMove(e,t,r,a=230){const l=a/1e3;if(t==="X"){this.setBlock(r.state);return}const u=e.o==="P",h=u?this.cubes[e.act]:this.block,d=u?[e.act===0?[e.r,e.c]:[e.r2,e.c2]]:_h(e.o,e.r,e.c);if(await this.rollObject(h,d,t,l),!r.valid){(r.reason==="void"||r.reason==="fragile")&&this.shatterBoard(h.position.clone()),await this.fall(h,t);return}this.setBlock(r.state),this.setBridges(r.state.mask);for(const[p,g]of r.moved)this.ring(g,p,10475775,.55,.45);for(const p of r.triggered)this.ring(p.pos[1],p.pos[0],p.type==="split"?16777215:16765514,1.6,.7),this.shake=Math.max(this.shake,.25);r.split&&this.spawnCubes(),r.merged&&this.ring(r.state.c,r.state.r,7336959,1.8,.7)}spawnCubes(){this.cubes.forEach((e,t)=>{e.scale.setScalar(.01),this.tween(.55,r=>e.scale.setScalar(Math.max(.01,r)),mh,t*.08),this.ring(e.position.x,e.position.z,t===0?16756848:10474751,1.4,.7)})}async playWin(e){this.ring(e.c,e.r,Ol,2.6,.9),this.goalCover&&(this.goalCover.visible=!1),this.burst(e.c,.5,e.r),this.shake=.6;const t=this.block.position.y;this.block.scale.set(.93,1,.93),await this.tween(.75,r=>{this.block.position.y=t-3.4*r},mg),this.block.visible=!1,this.block.scale.set(1,1,1)}ring(e,t,r,a,l){const u=new br({color:new ft(r).multiplyScalar(1.6),transparent:!0,opacity:.9,side:Ci,depthWrite:!1}),h=new wf(.36,.43,40),d=new Rt(h,u);d.rotation.x=-Math.PI/2,d.position.set(e,.03,t),this.scene.add(d),this.tween(l,p=>{d.scale.setScalar(1+p*a*2),u.opacity=.9*(1-p)},pg).then(()=>{this.scene.remove(d),h.dispose(),u.dispose()})}burst(e,t,r){const l=new Float32Array(660),u=new Float32Array(660),h=[],d=[Ol,16777215,16098596,16743080,2794895].map(S=>new ft(S));for(let S=0;S<220;S++){const E=Math.random()*Math.PI*2,M=1.5+Math.random()*4;h.push(new W(Math.cos(E)*M,4+Math.random()*5,Math.sin(E)*M));const x=d[S%d.length];u.set([x.r,x.g,x.b],S*3)}const p=new ii;p.setAttribute("position",new ni(l,3)),p.setAttribute("color",new ni(u,3));const g=new c_({size:.16,vertexColors:!0,transparent:!0,depthWrite:!1}),y=new $T(p,g);y.frustumCulled=!1,this.scene.add(y);const v=1.8;this.tween(v,S=>{const E=S*v;for(let M=0;M<220;M++)l.set([e+h[M].x*E,t+h[M].y*E-5*E*E,r+h[M].z*E],M*3);p.attributes.position.needsUpdate=!0,g.opacity=1-S*S},S=>S).then(()=>{this.scene.remove(y),p.dispose(),g.dispose()})}}function Bl({title:s,unit:e,groups:t,series:r,value:a}){const y=t.flatMap(b=>r.map(P=>a(b,P.id)??0)),v=Math.max(1e-9,...y),S=Math.pow(10,Math.floor(Math.log10(v))),E=Math.ceil(v/S)*S,M=460/Math.max(1,t.length),x=Math.min(16,(M-6)/r.length),_=b=>b>=1e3?`${(b/1e3).toFixed(b>=1e4?0:1)}k`:b%1?b.toFixed(1):String(b);return se.jsxs("figure",{className:"chart",children:[se.jsxs("figcaption",{children:[s," ",se.jsxs("span",{className:"muted",children:["(",e,")"]})]}),se.jsxs("svg",{viewBox:"0 0 520 230",role:"img","aria-label":s,children:[[0,.5,1].map(b=>{const P=14+186*(1-b);return se.jsxs("g",{children:[se.jsx("line",{x1:52,x2:512,y1:P,y2:P,className:"grid"}),se.jsx("text",{x:46,y:P+4,textAnchor:"end",className:"tick",children:_(E*b)})]},b)}),t.map((b,P)=>{const A=52+P*M+(M-x*r.length)/2;return se.jsxs("g",{children:[r.map((H,F)=>{const I=a(b,H.id)??0,B=186*(I/E);return se.jsx("rect",{x:A+F*x,y:200-B,width:x-2,height:Math.max(B,I>0?1:0),rx:2,fill:H.color,children:se.jsx("title",{children:`${b} - ${H.label}: ${I} ${e}`})},H.id)}),se.jsx("text",{x:52+P*M+M/2,y:220,textAnchor:"middle",className:"tick",children:b})]},b)})]})]})}const ea=[{id:"bfs",label:"BFS"},{id:"dfs",label:"DFS"},{id:"ucs",label:"UCS"},{id:"astar",label:"A*"}],d_="";async function p_(s,e){const t=await fetch(d_+s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw new Error(`${t.status}: ${await t.text()}`);return t.json()}async function _g(){try{return(await fetch(d_+"/api/health")).ok}catch{return!1}}const bA=(s,e)=>p_("/api/solve",{algorithm:e,level:s}),PA=(s,e)=>p_("/api/benchmark",{level_ids:s,algorithms:e}),ti=s=>440*Math.pow(2,(s-69)/12),m_=88,es=240/m_,vg=[[57,60,64],[53,57,60],[48,52,55],[55,59,62]],LA=[0,2,4,7,9],xg="bloxorz-audio";class DA{constructor(){this.ctx=null,this.timer=0,this.nextBar=0,this.bar=0,this.musicOn=!0,this.sfxOn=!0,this.musicVol=.5,this.sfxVol=.8;try{const e=JSON.parse(localStorage.getItem(xg)??"{}");this.musicOn=e.musicOn??!0,this.sfxOn=e.sfxOn??!0,this.musicVol=e.musicVol??.5,this.sfxVol=e.sfxVol??.8}catch{}}save(){try{localStorage.setItem(xg,JSON.stringify({musicOn:this.musicOn,sfxOn:this.sfxOn,musicVol:this.musicVol,sfxVol:this.sfxVol}))}catch{}}unlock(){if(!this.ctx){const e=window.AudioContext??window.webkitAudioContext;if(!e)return;const t=new e;this.ctx=t,this.master=t.createGain(),this.master.gain.value=.9;const r=t.createDynamicsCompressor();this.master.connect(r).connect(t.destination),this.musicBus=t.createGain(),this.sfxBus=t.createGain(),this.musicBus.connect(this.master),this.sfxBus.connect(this.master);const a=t.createDelay(1);a.delayTime.value=60/m_*.75;const l=t.createGain();l.gain.value=.38;const u=t.createBiquadFilter();u.type="lowpass",u.frequency.value=2200,this.musicBus.connect(a),a.connect(u).connect(l).connect(a),u.connect(this.master),this.noiseBuf=t.createBuffer(1,t.sampleRate,t.sampleRate);const h=this.noiseBuf.getChannelData(0);for(let d=0;d<h.length;d++)h[d]=Math.random()*2-1;this.applyVolumes()}this.ctx.resume(),this.musicOn&&this.startMusic()}applyVolumes(){if(!this.ctx)return;const e=this.ctx.currentTime;this.musicBus.gain.setTargetAtTime(this.musicOn?this.musicVol*.8:0,e,.15),this.sfxBus.gain.setTargetAtTime(this.sfxOn?this.sfxVol:0,e,.05)}setMusic(e){this.musicOn=e,this.save(),this.applyVolumes(),this.ctx&&(e?this.startMusic():this.stopMusic())}setSfx(e){this.sfxOn=e,this.save(),this.applyVolumes()}setMusicVol(e){this.musicVol=e,this.save(),this.applyVolumes()}setSfxVol(e){this.sfxVol=e,this.save(),this.applyVolumes()}startMusic(){!this.ctx||this.timer||(this.nextBar=this.ctx.currentTime+.15,this.timer=window.setInterval(()=>this.schedule(),250),this.schedule())}stopMusic(){clearInterval(this.timer),this.timer=0}schedule(){const e=this.ctx;if(e)for(;this.nextBar<e.currentTime+1.5;)this.playBar(this.nextBar,this.bar++),this.nextBar+=es}playBar(e,t){const r=this.ctx,a=vg[t%vg.length],l=r.createBiquadFilter();l.type="lowpass",l.frequency.value=1100;const u=r.createGain();u.gain.setValueAtTime(1e-4,e),u.gain.linearRampToValueAtTime(.05,e+.9),u.gain.setValueAtTime(.05,e+es-.1),u.gain.linearRampToValueAtTime(1e-4,e+es+1.2),l.connect(u).connect(this.musicBus);for(const p of a)for(const[g,y]of[["sine",1],["triangle",1.004]]){const v=r.createOscillator();v.type=g,v.frequency.value=ti(p)*y,v.connect(l),v.start(e),v.stop(e+es+1.3)}for(const p of[0,2])this.tone(ti(a[0]-24),"sine",e+p*(es/4),1.3,.2,this.musicBus);const h=[...a,...a.map(p=>p+12),a[0]+24];let d=0;for(let p=0;p<8;p++)Math.random()<.22||(d=Math.max(0,Math.min(h.length-1,d+Math.floor(Math.random()*5)-2+(p%4===0?1:0))),this.tone(ti(h[d]+12),"triangle",e+p*es/8,.9,.07+Math.random()*.03,this.musicBus));t%4===3&&this.tone(ti(a[2]+24),"sine",e+es*.5,1.6,.05,this.musicBus)}tone(e,t,r,a,l,u,h){const d=this.ctx,p=d.createOscillator(),g=d.createGain();p.type=t,p.frequency.setValueAtTime(e,r),h&&p.frequency.exponentialRampToValueAtTime(h,r+a),g.gain.setValueAtTime(1e-4,r),g.gain.linearRampToValueAtTime(l,r+.012),g.gain.exponentialRampToValueAtTime(8e-4,r+a),p.connect(g).connect(u),p.start(r),p.stop(r+a+.05)}noise(e,t,r,a,l,u){const h=this.ctx,d=h.createBufferSource();d.buffer=this.noiseBuf;const p=h.createBiquadFilter();p.type=l,p.frequency.setValueAtTime(a,e),u&&p.frequency.exponentialRampToValueAtTime(u,e+t);const g=h.createGain();g.gain.setValueAtTime(r,e),g.gain.exponentialRampToValueAtTime(8e-4,e+t),d.connect(p).connect(g).connect(this.sfxBus),d.start(e),d.stop(e+t+.05)}now(){return this.ctx&&this.sfxOn?this.ctx.currentTime:-1}move(e){const t=this.now();if(t<0)return;this.noise(t,.2,.16,650,"bandpass",2400),this.tone(150,"sine",t,.14,.55,this.sfxBus,55),this.tone(92,"triangle",t,.18,.16,this.sfxBus,58),this.noise(t+.02,.06,.18,1400,"lowpass");const r=72+LA[e%5]+Math.floor(e/5)%2*12;this.tone(ti(r),"triangle",t+.02,.28,.2,this.sfxBus)}fragile(){const e=this.now();e<0||(this.noise(e,.22,.35,3200,"bandpass",900),this.tone(95,"square",e,.12,.12,this.sfxBus,60))}swap(){const e=this.now();e<0||(this.tone(880,"sine",e,.07,.25,this.sfxBus),this.tone(1320,"sine",e+.05,.09,.2,this.sfxBus))}switchHit(e){const t=this.now();t<0||(e==="soft"?(this.tone(660,"sine",t,.1,.3,this.sfxBus),this.tone(990,"sine",t+.07,.14,.3,this.sfxBus)):e==="heavy"&&(this.tone(110,"square",t,.22,.25,this.sfxBus,70),this.tone(440,"triangle",t+.02,.3,.2,this.sfxBus),this.noise(t,.12,.2,800,"lowpass")))}split(){const e=this.now();e<0||(this.noise(e,.5,.3,400,"bandpass",4e3),[84,88,91,96].forEach((t,r)=>this.tone(ti(t),"sine",e+.08+r*.06,.35,.16,this.sfxBus)))}merge(){const e=this.now();e<0||(this.tone(ti(79),"sine",e,.45,.28,this.sfxBus),this.tone(ti(86),"sine",e+.06,.5,.24,this.sfxBus))}bridge(e){const t=this.now();t<0||(this.tone(e?80:170,"sawtooth",t,.4,.1,this.sfxBus,e?170:70),this.noise(t,.35,.1,e?300:900,"lowpass",e?900:300))}fall(){const e=this.now();e<0||(this.tone(720,"sine",e,.85,.3,this.sfxBus,70),this.noise(e,.7,.2,2200,"lowpass",200))}shatter(){const e=this.now();e<0||(this.noise(e,.75,.42,3e3,"lowpass",130),this.noise(e+.04,.9,.32,900,"bandpass",160),this.tone(64,"square",e,.5,.2,this.sfxBus,38),[48,43,36].forEach((t,r)=>this.tone(ti(t),"triangle",e+.08+r*.07,.45,.16,this.sfxBus,ti(t-12))))}win(){const e=this.now();e<0||[72,76,79,84,88,91].forEach((t,r)=>{this.tone(ti(t),"triangle",e+r*.09,.7,.22,this.sfxBus),this.tone(ti(t-12),"sine",e+r*.09,.7,.12,this.sfxBus)})}}const jt=new DA,yg=Object.assign({"../../levels/L01.json":lv,"../../levels/L02.json":pv,"../../levels/L03.json":yv,"../../levels/L04.json":Av,"../../levels/L05.json":Iv,"../../levels/L06.json":Hv,"../../levels/L07.json":qv,"../../levels/L08.json":ix,"../../levels/L09.json":hx,"../../levels/L10.json":_x,"../../levels/L11.json":Ex,"../../levels/L12.json":Lx,"../../levels/L13.json":Bx,"../../levels/L14.json":$x,"../../levels/L15.json":ty,"../../levels/L16.json":cy,"../../levels/L17.json":_y,"../../levels/L18.json":Ty,"../../levels/L19.json":Ny,"../../levels/L20.json":Vy,"../../levels/L21.json":qy}),zl=Object.keys(yg).sort().map(s=>yg[s]),Sg={simple:"Cơ bản",fragile:"Gạch dễ vỡ",switch:"Công tắc và cầu",split:"Công tắc tách",combined:"Kết hợp",expert:"Thử thách",custom:"Tự nạp"},NA={U:"↑",D:"↓",L:"←",R:"→",X:"⇄"},IA={ArrowUp:"U",w:"U",W:"U",ArrowDown:"D",s:"D",S:"D",ArrowLeft:"L",a:"L",A:"L",ArrowRight:"R",d:"R",D:"R"," ":"X"},Mg={bfs:"#4fe3ff",dfs:"#c084fc",ucs:"#ffb54a",astar:"#37ffa0"},Eg=s=>new Promise(e=>setTimeout(e,s));function UA(){var ze;const s=dt.useRef(null),e=dt.useRef(null),t=dt.useRef(null),r=dt.useRef(null),a=dt.useRef([]),l=dt.useRef(0),u=dt.useRef(0),h=dt.useRef(!1),d=dt.useRef(!1),p=dt.useRef(!1),g=dt.useRef("playing"),y=dt.useRef(null),v=dt.useRef(0),[S,E]=dt.useState(zl),[M,x]=dt.useState(zl[0]),[_,b]=dt.useState("playing"),[P,A]=dt.useState(0),[H,F]=dt.useState(0),[I,B]=dt.useState(!1),[L,C]=dt.useState({}),[k,oe]=dt.useState(null),[J,pe]=dt.useState(null),[me,ue]=dt.useState(0),[ce,z]=dt.useState(!1),[he,le]=dt.useState(260),[U,ie]=dt.useState(null),[Ue,Q]=dt.useState("solver"),[fe,Te]=dt.useState([]),[Se,be]=dt.useState(!1),[Oe,Ke]=dt.useState(""),[wt,gt]=dt.useState(!0),[xt,X]=dt.useState({music:jt.musicOn,sfx:jt.sfxOn,mv:jt.musicVol,sv:jt.sfxVol}),Wt=Y=>{g.current=Y,b(Y)},ut=dt.useCallback(Y=>{const re=e.current;if(!re||p.current||h.current&&g.current==="playing")return;d.current=!0,v.current+=1,y.current=null,pe(null);const ve=new rm(Y);t.current=ve,r.current=ve.initial,a.current=[],l.current=0,u.current=0,x(Y),A(0),F(0),ue(0),B(!1),Ke(""),C({}),oe(null),Wt("playing"),re.loadLevel(ve),re.resetState(ve.initial)},[]),ot=dt.useCallback(()=>{const Y=t.current,re=e.current;!Y||!re||p.current||h.current&&g.current==="playing"||(y.current=null,r.current=Y.initial,a.current=[],l.current=0,u.current=0,A(0),F(0),ue(0),B(!1),Wt("playing"),re.resetState(Y.initial))},[]);dt.useEffect(()=>{const Y=new RA(s.current);e.current=Y,ut(zl[0]),_g().then(ie);const re=setInterval(()=>void _g().then(ie),8e3);return()=>{clearInterval(re),Y.dispose(),e.current=null}},[ut]);const Je=dt.useCallback(async(Y,re)=>{const ve=t.current,Qe=e.current,Be=r.current;if(!ve||!Qe||!Be)return"noop";const et=ve.step(Be,Y);if(!et.valid&&et.reason==="noop")return"noop";h.current=!0;try{return et.valid?(a.current.push({state:Be,moves:l.current,cost:u.current}),await Qe.animateMove(Be,Y,et,re),Y==="X"?jt.swap():(jt.move(l.current),et.cost>1&&jt.fragile(),et.triggered.forEach(G=>jt.switchHit(G.type)),et.split&&jt.split(),et.merged&&jt.merge(),et.state.mask!==Be.mask&&jt.bridge(et.state.mask>Be.mask||(et.state.mask&~Be.mask)!==0)),r.current=et.state,l.current+=1,u.current+=et.cost,A(l.current),F(u.current),B(et.state.o==="P"),ve.isWin(et.state)?(jt.win(),await Qe.playWin(et.state),Wt("won"),"won"):"ok"):(setTimeout(()=>jt.fall(),re),(et.reason==="void"||et.reason==="fragile")&&setTimeout(()=>jt.shatter(),re+120),await Qe.animateMove(Be,Y,et,re),y.current={state:Be,moves:l.current,cost:u.current},Wt("lost"),"lost")}finally{h.current=!1}},[]),Tt=dt.useCallback(Y=>{h.current||p.current||g.current!=="playing"||Je(Y,230)},[Je]),je=dt.useCallback(()=>{if(h.current||p.current)return;const Y=e.current;if(!Y)return;const re=g.current==="lost"?y.current:null;y.current=null;const ve=re??a.current.pop();ve&&(r.current=ve.state,l.current=ve.moves,u.current=ve.cost,A(ve.moves),F(ve.cost),ue(0),B(ve.state.o==="P"),Wt("playing"),Y.restoreBoard(),Y.setBlock(ve.state),Y.setBridges(ve.state.mask))},[]);dt.useEffect(()=>{const Y=()=>jt.unlock();return window.addEventListener("pointerdown",Y),window.addEventListener("keydown",Y),()=>{window.removeEventListener("pointerdown",Y),window.removeEventListener("keydown",Y)}},[]),dt.useEffect(()=>{const Y=re=>{var Qe;if(((Qe=re.target)==null?void 0:Qe.tagName)==="INPUT")return;if(re.key==="m"||re.key==="M"){const Be=!jt.musicOn;jt.setMusic(Be),X(et=>({...et,music:Be}));return}if(re.key==="r"||re.key==="R"){p.current||ot();return}if(re.key==="z"||re.key==="Z"){je();return}const ve=IA[re.key];ve&&(re.preventDefault(),Tt(ve))};return window.addEventListener("keydown",Y),()=>window.removeEventListener("keydown",Y)},[Tt,ot,je]),dt.useEffect(()=>{if(_!=="lost"||ce)return;const Y=setTimeout(()=>{g.current==="lost"&&ot()},1300);return()=>clearTimeout(Y)},[_,ce,ot]);const D=async Y=>{const re=++v.current;pe(Y),Ke("");try{const ve=await bA(M,Y);if(re!==v.current)return;C(Qe=>({...Qe,[Y]:ve})),oe(Y)}catch(ve){re===v.current&&Ke(`Không gọi được backend: ${ve.message}. Hãy chạy "python main.py" trong thư mục Source.`)}finally{re===v.current&&pe(null)}},T=async Y=>{if(!(h.current||p.current)){ot(),p.current=!0,z(!0),d.current=!1,await Eg(1300);for(let re=0;re<Y.length&&!d.current&&(ue(re+1),await Je(Y[re],he)==="ok");re++)await Eg(70);p.current=!1,z(!1)}},Z=async()=>{be(!0),Ke("");try{const Y=await PA(zl.map(re=>re.id),ea.map(re=>re.id));Te(Y.results)}catch(Y){Ke(`Không chạy được benchmark: ${Y.message}`)}finally{be(!1)}},_e=()=>{const Y="level,algorithm,found,length,cost,expanded,time_ms,memory_kb",re=fe.map(Be=>[Be.level_id,Be.algorithm,Be.found,Be.length,Be.cost,Be.expanded,Be.time_ms,Be.memory_kb].join(",")),ve=URL.createObjectURL(new Blob([[Y,...re].join(`
`)],{type:"text/csv"})),Qe=document.createElement("a");Qe.href=ve,Qe.download="benchmark.csv",Qe.click(),URL.revokeObjectURL(ve)},xe=async Y=>{if(Y)try{const re=JSON.parse(await Y.text());re.id=re.id||`custom-${S.length}`,re.group="custom",re.name=re.name||Y.name,new rm(re),E(ve=>[...ve.filter(Qe=>Qe.id!==re.id),re]),ut(re)}catch(re){Ke(`File màn chơi không hợp lệ: ${re.message}`)}},de=()=>{const Y=S.filter(re=>re.id!==M.id);ut(Y[Math.floor(Math.random()*Y.length)]??M)},Ve=k?L[k]:void 0,Pe=[...new Set(S.map(Y=>Y.group))],Ne=ea.map(Y=>({id:Y.id,label:Y.label,color:Mg[Y.id]})),lt=[...new Set(fe.map(Y=>Y.level_id))],Ee=(Y,re,ve)=>{const Qe=fe.find(Be=>Be.level_id===Y&&Be.algorithm===re);return Qe?ve(Qe):null};return se.jsxs("div",{className:"app",children:[se.jsx("div",{className:"stage",ref:s}),se.jsxs("header",{className:"hud",children:[se.jsxs("div",{className:"brand",children:["Blox",se.jsx("span",{children:"orz"})," 3D"]}),se.jsxs("div",{className:"title",children:[se.jsxs("h1",{children:[M.id," · ",M.name]}),se.jsx("span",{children:Sg[M.group]??M.group})]}),se.jsxs("div",{className:"stats",children:[se.jsxs("div",{className:"stat",children:[se.jsx("small",{children:"Số nước"}),se.jsx("b",{children:P})]}),se.jsxs("div",{className:"stat",children:[se.jsx("small",{children:"Chi phí"}),se.jsx("b",{children:H})]}),se.jsx("div",{className:`badge ${U?"on":"off"}`,children:U===null?"Đang kiểm tra":U?"Backend đã kết nối":"Backend chưa chạy"}),se.jsx("button",{className:"btn hudbtn",onClick:()=>gt(Y=>!Y),children:wt?"Ẩn bảng":"Hiện bảng"})]})]}),wt&&se.jsxs("aside",{className:"panel left","aria-label":"Màn chơi",children:[se.jsx("h2",{children:"Điều khiển"}),se.jsxs("div",{className:"row",children:[se.jsx("button",{className:"btn primary",onClick:de,disabled:ce,children:"New Game"}),se.jsx("button",{className:"btn",onClick:ot,disabled:ce,children:"Restart"}),se.jsx("button",{className:"btn",onClick:je,disabled:ce,children:"Hoàn tác"}),se.jsx("button",{className:"btn",onClick:()=>{var Y;return(Y=e.current)==null?void 0:Y.resetView()},children:"Đặt lại góc nhìn"})]}),Pe.map(Y=>se.jsxs("section",{children:[se.jsx("h2",{children:Sg[Y]??Y}),S.filter(re=>re.group===Y).map(re=>se.jsx("button",{className:`lv ${re.id===M.id?"sel":""}`,onClick:()=>ut(re),disabled:ce,children:se.jsxs("b",{children:[re.id," ",re.name]})},re.id))]},Y)),se.jsx("h2",{children:"Âm thanh"}),se.jsxs("label",{className:"chk",children:[se.jsx("input",{type:"checkbox",checked:xt.music,onChange:Y=>{jt.setMusic(Y.target.checked),X({...xt,music:Y.target.checked})}})," Nhạc nền"]}),se.jsx("input",{type:"range",min:0,max:1,step:.05,value:xt.mv,"aria-label":"Âm lượng nhạc nền",onChange:Y=>{jt.setMusicVol(Number(Y.target.value)),X({...xt,mv:Number(Y.target.value)})}}),se.jsxs("label",{className:"chk",children:[se.jsx("input",{type:"checkbox",checked:xt.sfx,onChange:Y=>{jt.setSfx(Y.target.checked),X({...xt,sfx:Y.target.checked})}})," Hiệu ứng khi di chuyển"]}),se.jsx("input",{type:"range",min:0,max:1,step:.05,value:xt.sv,"aria-label":"Âm lượng hiệu ứng",onChange:Y=>{jt.setSfxVol(Number(Y.target.value)),X({...xt,sv:Number(Y.target.value)})}}),se.jsx("h2",{children:"Nạp màn từ file"}),se.jsx("input",{type:"file",accept:".json",disabled:ce,onChange:Y=>{var ve;const re=(ve=Y.target.files)==null?void 0:ve[0];Y.target.value="",xe(re)}}),M.desc&&se.jsx("p",{className:"desc",children:M.desc}),I&&se.jsx("p",{className:"desc",children:"Đang tách khối: phím cách để đổi khối, ghép lại bằng cách đưa hai khối sát nhau."})]}),wt&&se.jsxs("aside",{className:"panel right","aria-label":"Bộ giải",children:[se.jsxs("div",{className:"tabs",role:"tablist",children:[se.jsx("button",{role:"tab",className:`tab ${Ue==="solver"?"sel":""}`,onClick:()=>Q("solver"),children:"Giải màn này"}),se.jsx("button",{role:"tab",className:`tab ${Ue==="bench"?"sel":""}`,onClick:()=>Q("bench"),children:"Thực nghiệm"})]}),Ue==="solver"&&se.jsxs(se.Fragment,{children:[se.jsx("div",{className:"row",children:ea.map(Y=>se.jsx("button",{className:"btn",disabled:!!J||ce,onClick:()=>void D(Y.id),children:J===Y.id?"Đang giải…":`Solve ${Y.label}`},Y.id))}),Object.keys(L).length>0&&se.jsxs(se.Fragment,{children:[se.jsx("h2",{children:"Kết quả"}),se.jsxs("table",{children:[se.jsx("thead",{children:se.jsxs("tr",{children:[se.jsx("th",{children:"Thuật toán"}),se.jsx("th",{children:"Nước"}),se.jsx("th",{children:"Chi phí"}),se.jsx("th",{children:"Nút mở"}),se.jsx("th",{children:"ms"}),se.jsx("th",{children:"KB"})]})}),se.jsx("tbody",{children:ea.filter(Y=>L[Y.id]).map(Y=>{const re=L[Y.id];return se.jsxs("tr",{className:k===Y.id?"sel":"",onClick:()=>oe(Y.id),style:{cursor:"pointer"},children:[se.jsxs("td",{children:[se.jsx("span",{className:"dot",style:{background:Mg[Y.id]}}),Y.label]}),se.jsx("td",{children:re.found?re.length:"-"}),se.jsx("td",{children:re.found?re.cost:"-"}),se.jsx("td",{children:re.expanded}),se.jsx("td",{children:re.time_ms.toFixed(1)}),se.jsx("td",{children:Math.round(re.memory_kb)})]},Y.id)})})]})]}),Ve&&se.jsxs(se.Fragment,{children:[se.jsxs("h2",{children:["Lời giải ",(ze=ea.find(Y=>Y.id===k))==null?void 0:ze.label]}),Ve.found?se.jsxs(se.Fragment,{children:[se.jsx("div",{className:"moves","aria-label":"Dãy nước đi",children:[...Ve.moves].map((Y,re)=>se.jsx("span",{className:`mv ${re+1===me?"now":re<me?"done":""}`,children:NA[Y]},re))}),se.jsxs("label",{className:"sl",htmlFor:"spd",children:["Tốc độ phát: ",he," ms mỗi nước"]}),se.jsx("input",{id:"spd",type:"range",min:90,max:600,step:10,value:he,onChange:Y=>le(Number(Y.target.value)),style:{direction:"rtl"}}),se.jsx("div",{className:"row",style:{marginTop:12},children:ce?se.jsx("button",{className:"btn",onClick:()=>{d.current=!0},children:"Dừng"}):se.jsx("button",{className:"btn primary",onClick:()=>void T(Ve.moves),children:"Phát lời giải"})})]}):se.jsxs("p",{className:"desc",children:["Không tìm được lời giải (",Ve.reason==="limit"?"vượt giới hạn số nút":"màn không giải được",")."]})]})]}),Ue==="bench"&&se.jsxs(se.Fragment,{children:[se.jsxs("div",{className:"row",children:[se.jsx("button",{className:"btn primary",disabled:Se,onClick:()=>void Z(),children:Se?"Đang chạy…":"Chạy trên mọi màn"}),se.jsx("button",{className:"btn",disabled:!fe.length,onClick:_e,children:"Tải CSV"})]}),fe.length>0&&se.jsxs(se.Fragment,{children:[se.jsx("div",{className:"legend",children:Ne.map(Y=>se.jsxs("span",{children:[se.jsx("span",{className:"dot",style:{background:Y.color}}),Y.label]},Y.id))}),se.jsx(Bl,{title:"Thời gian tìm kiếm",unit:"ms",groups:lt,series:Ne,value:(Y,re)=>Ee(Y,re,ve=>ve.time_ms)}),se.jsx(Bl,{title:"Bộ nhớ đỉnh",unit:"KB",groups:lt,series:Ne,value:(Y,re)=>Ee(Y,re,ve=>ve.memory_kb)}),se.jsx(Bl,{title:"Số nút mở rộng",unit:"nút",groups:lt,series:Ne,value:(Y,re)=>Ee(Y,re,ve=>ve.expanded)}),se.jsx(Bl,{title:"Độ dài lời giải",unit:"nước",groups:lt,series:Ne,value:(Y,re)=>Ee(Y,re,ve=>ve.length)})]})]}),Oe&&se.jsx("p",{className:"err",role:"alert",children:Oe})]}),se.jsxs("footer",{className:"hint",children:[se.jsxs("span",{children:[se.jsx("kbd",{children:"↑"}),se.jsx("kbd",{children:"↓"}),se.jsx("kbd",{children:"←"}),se.jsx("kbd",{children:"→"})," hoặc ",se.jsx("kbd",{children:"WASD"})," lăn khối"]}),se.jsxs("span",{children:[se.jsx("kbd",{children:"Space"})," đổi khối khi tách"]}),se.jsxs("span",{children:[se.jsx("kbd",{children:"Z"})," hoàn tác"]}),se.jsxs("span",{children:[se.jsx("kbd",{children:"R"})," chơi lại"]}),se.jsxs("span",{children:[se.jsx("kbd",{children:"M"})," bật/tắt nhạc"]}),se.jsx("span",{children:"Kéo chuột để xoay, lăn chuột để zoom"})]}),_==="won"&&se.jsx("div",{className:"overlay win",children:se.jsxs("div",{children:[se.jsx("h2",{children:"Hoàn thành"}),se.jsxs("p",{children:[P," nước, chi phí ",H]}),se.jsxs("div",{className:"row",children:[se.jsx("button",{className:"btn",onClick:ot,children:"Chơi lại"}),se.jsx("button",{className:"btn primary",onClick:de,children:"Màn khác"})]})]})}),_==="lost"&&se.jsx("div",{className:"overlay lose",children:se.jsxs("div",{children:[se.jsx("h2",{children:"Rơi rồi"}),se.jsx("p",{children:"Màn chơi sẽ tự bắt đầu lại"})]})})]})}nv.createRoot(document.getElementById("root")).render(se.jsx(UA,{}));
