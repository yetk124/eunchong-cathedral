/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */(function(x,yt){typeof exports=="object"&&typeof module<"u"?yt(exports):typeof define=="function"&&define.amd?define(["exports"],yt):yt((x=typeof globalThis<"u"?globalThis:x||self).THREE={})})(this,function(x){"use strict";const yt="147",Sn="srgb",wn="srgb-linear",bs="300 es";class Xt{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let n=0,s=i.length;n<s;n++)i[n].call(this,e);e.target=null}}}const ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qa=1234567;const yi=Math.PI/180,Tn=180/Math.PI;function bt(){const r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(ht[255&r]+ht[r>>8&255]+ht[r>>16&255]+ht[r>>24&255]+"-"+ht[255&e]+ht[e>>8&255]+"-"+ht[e>>16&15|64]+ht[e>>24&255]+"-"+ht[63&t|128]+ht[t>>8&255]+"-"+ht[t>>16&255]+ht[t>>24&255]+ht[255&i]+ht[i>>8&255]+ht[i>>16&255]+ht[i>>24&255]).toLowerCase()}function Ze(r,e,t){return Math.max(e,Math.min(t,r))}function Ss(r,e){return(r%e+e)%e}function En(r,e,t){return(1-t)*r+t*e}function ws(r){return(r&r-1)==0&&r!==0}function Xa(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function pr(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Yt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ue(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var zh=Object.freeze({__proto__:null,DEG2RAD:yi,RAD2DEG:Tn,generateUUID:bt,clamp:Ze,euclideanModulo:Ss,mapLinear:function(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)},inverseLerp:function(r,e,t){return r!==e?(t-r)/(e-r):0},lerp:En,damp:function(r,e,t,i){return En(r,e,1-Math.exp(-t*i))},pingpong:function(r,e=1){return e-Math.abs(Ss(r,2*e)-e)},smoothstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*(3-2*r)},smootherstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*r*(r*(6*r-15)+10)},randInt:function(r,e){return r+Math.floor(Math.random()*(e-r+1))},randFloat:function(r,e){return r+Math.random()*(e-r)},randFloatSpread:function(r){return r*(.5-Math.random())},seededRandom:function(r){r!==void 0&&(qa=r);let e=qa+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(r){return r*yi},radToDeg:function(r){return r*Tn},isPowerOfTwo:ws,ceilPowerOfTwo:Xa,floorPowerOfTwo:pr,setQuaternionFromProperEuler:function(r,e,t,i,n){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),h=s((e+i)/2),c=a((e+i)/2),u=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),f=a((i-e)/2);switch(n){case"XYX":r.set(o*c,l*u,l*d,o*h);break;case"YZY":r.set(l*d,o*c,l*u,o*h);break;case"ZXZ":r.set(l*u,l*d,o*c,o*h);break;case"XZX":r.set(o*c,l*f,l*p,o*h);break;case"YXY":r.set(l*p,o*c,l*f,o*h);break;case"ZYZ":r.set(l*f,l*p,o*c,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}},normalize:Ue,denormalize:Yt});class J{constructor(e=0,t=0){J.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,n,s,a,o,l,h){const c=this.elements;return c[0]=e,c[1]=n,c[2]=o,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],h=i[1],c=i[4],u=i[7],d=i[2],p=i[5],f=i[8],m=n[0],g=n[3],_=n[6],v=n[1],y=n[4],M=n[7],b=n[2],T=n[5],P=n[8];return s[0]=a*m+o*v+l*b,s[3]=a*g+o*y+l*T,s[6]=a*_+o*M+l*P,s[1]=h*m+c*v+u*b,s[4]=h*g+c*y+u*T,s[7]=h*_+c*M+u*P,s[2]=d*m+p*v+f*b,s[5]=d*g+p*y+f*T,s[8]=d*_+p*M+f*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8];return t*a*c-t*o*h-i*s*c+i*o*l+n*s*h-n*a*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],u=c*a-o*h,d=o*l-c*s,p=h*s-a*l,f=t*u+i*d+n*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/f;return e[0]=u*m,e[1]=(n*h-c*i)*m,e[2]=(o*i-n*a)*m,e[3]=d*m,e[4]=(c*t-n*l)*m,e[5]=(n*s-o*t)*m,e[6]=p*m,e[7]=(i*l-h*t)*m,e[8]=(a*t-i*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){const l=Math.cos(s),h=Math.sin(s);return this.set(i*l,i*h,-i*(l*a+h*o)+a+e,-n*h,n*l,-n*(-h*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ts.makeScale(e,t)),this}rotate(e){return this.premultiply(Ts.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ts.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ts=new pt;function Ya(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const Oh={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function qi(r,e){return new Oh[r](e)}function An(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Mi(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function mr(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}const Es={[Sn]:{[wn]:Mi},[wn]:{[Sn]:mr}},ct={legacyMode:!0,get workingColorSpace(){return wn},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(Es[e]&&Es[e][t]!==void 0){const i=Es[e][t];return r.r=i(r.r),r.g=i(r.g),r.b=i(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},Za={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},et={r:0,g:0,b:0},Nt={h:0,s:0,l:0},fr={h:0,s:0,l:0};function As(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}function gr(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class ue{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t="srgb"){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=ct.workingColorSpace){if(e=Ss(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=As(a,s,e+1/3),this.g=As(a,s,e),this.b=As(a,s,e-1/3)}return ct.toWorkingColorSpace(this,n),this}setStyle(e,t="srgb"){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,ct.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,ct.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,h=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,h,c,t)}}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,ct.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,ct.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t="srgb"){const i=Za[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e="srgb"){return ct.fromWorkingColorSpace(gr(this,et),e),Ze(255*et.r,0,255)<<16^Ze(255*et.g,0,255)<<8^Ze(255*et.b,0,255)<<0}getHexString(e="srgb"){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(gr(this,et),t);const i=et.r,n=et.g,s=et.b,a=Math.max(i,n,s),o=Math.min(i,n,s);let l,h;const c=(o+a)/2;if(o===a)l=0,h=0;else{const u=a-o;switch(h=c<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4}l/=6}return e.h=l,e.s=h,e.l=c,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(gr(this,et),t),e.r=et.r,e.g=et.g,e.b=et.b,e}getStyle(e="srgb"){return ct.fromWorkingColorSpace(gr(this,et),e),e!==Sn?`color(${e} ${et.r} ${et.g} ${et.b})`:`rgb(${255*et.r|0},${255*et.g|0},${255*et.b|0})`}offsetHSL(e,t,i){return this.getHSL(Nt),Nt.h+=e,Nt.s+=t,Nt.l+=i,this.setHSL(Nt.h,Nt.s,Nt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Nt),e.getHSL(fr);const i=En(Nt.h,fr.h,t),n=En(Nt.s,fr.s,t),s=En(Nt.l,fr.l,t);return this.setHSL(i,n,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}let Xi;ue.NAMES=Za;class Cs{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xi===void 0&&(Xi=An("canvas")),Xi.width=e.width,Xi.height=e.height;const i=Xi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Xi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=An("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=255*Mi(s[a]/255);return i.putImageData(n,0,0),t}if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*Mi(t[i]/255)):t[i]=Mi(t[i]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class bi{constructor(e=null){this.isSource=!0,this.uuid=bt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(Rs(n[a].image)):s.push(Rs(n[a]))}else s=Rs(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function Rs(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Cs.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uh=0;class Je extends Xt{constructor(e=Je.DEFAULT_IMAGE,t=Je.DEFAULT_MAPPING,i=1001,n=1001,s=1006,a=1008,o=1023,l=1009,h=Je.DEFAULT_ANISOTROPY,c=3e3){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=bt(),this.name="",this.source=new bi(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Je.DEFAULT_IMAGE=null,Je.DEFAULT_MAPPING=300,Je.DEFAULT_ANISOTROPY=1;class ze{constructor(e=0,t=0,i=0,n=1){ze.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const l=e.elements,h=l[0],c=l[4],u=l[8],d=l[1],p=l[5],f=l[9],m=l[2],g=l[6],_=l[10];if(Math.abs(c-d)<.01&&Math.abs(u-m)<.01&&Math.abs(f-g)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+m)<.1&&Math.abs(f+g)<.1&&Math.abs(h+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(h+1)/2,M=(p+1)/2,b=(_+1)/2,T=(c+d)/4,P=(u+m)/4,L=(f+g)/4;return y>M&&y>b?y<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(y),n=T/i,s=P/i):M>b?M<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(M),i=T/n,s=L/n):b<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(b),i=P/s,n=L/s),this.set(i,n,s,t),this}let v=Math.sqrt((g-f)*(g-f)+(u-m)*(u-m)+(d-c)*(d-c));return Math.abs(v)<.001&&(v=1),this.x=(g-f)/v,this.y=(u-m)/v,this.z=(d-c)/v,this.w=Math.acos((h+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rt extends Xt{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ze(0,0,e,t),this.scissorTest=!1,this.viewport=new ze(0,0,e,t);const n={width:e,height:t,depth:1};this.texture=new Je(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0&&i.generateMipmaps,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:1006,this.depthBuffer=i.depthBuffer===void 0||i.depthBuffer,this.stencilBuffer=i.stencilBuffer!==void 0&&i.stencilBuffer,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){this.width===e&&this.height===t&&this.depth===i||(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new bi(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends Je{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vr extends Je{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _t{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let l=i[n+0],h=i[n+1],c=i[n+2],u=i[n+3];const d=s[a+0],p=s[a+1],f=s[a+2],m=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=h,e[t+2]=c,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=f,void(e[t+3]=m);if(u!==m||l!==d||h!==p||c!==f){let g=1-o;const _=l*d+h*p+c*f+u*m,v=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){const b=Math.sqrt(y),T=Math.atan2(b,_*v);g=Math.sin(g*T)/b,o=Math.sin(o*T)/b}const M=o*v;if(l=l*g+d*M,h=h*g+p*M,c=c*g+f*M,u=u*g+m*M,g===1-o){const b=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=b,h*=b,c*=b,u*=b}}e[t]=l,e[t+1]=h,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,a){const o=i[n],l=i[n+1],h=i[n+2],c=i[n+3],u=s[a],d=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+c*u+l*p-h*d,e[t+1]=l*f+c*d+h*u-o*p,e[t+2]=h*f+c*p+o*d-l*u,e[t+3]=c*f-o*u-l*d-h*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,h=o(i/2),c=o(n/2),u=o(s/2),d=l(i/2),p=l(n/2),f=l(s/2);switch(a){case"XYZ":this._x=d*c*u+h*p*f,this._y=h*p*u-d*c*f,this._z=h*c*f+d*p*u,this._w=h*c*u-d*p*f;break;case"YXZ":this._x=d*c*u+h*p*f,this._y=h*p*u-d*c*f,this._z=h*c*f-d*p*u,this._w=h*c*u+d*p*f;break;case"ZXY":this._x=d*c*u-h*p*f,this._y=h*p*u+d*c*f,this._z=h*c*f+d*p*u,this._w=h*c*u-d*p*f;break;case"ZYX":this._x=d*c*u-h*p*f,this._y=h*p*u+d*c*f,this._z=h*c*f-d*p*u,this._w=h*c*u+d*p*f;break;case"YZX":this._x=d*c*u+h*p*f,this._y=h*p*u+d*c*f,this._z=h*c*f-d*p*u,this._w=h*c*u-d*p*f;break;case"XZY":this._x=d*c*u-h*p*f,this._y=h*p*u-d*c*f,this._z=h*c*f+d*p*u,this._w=h*c*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],l=t[9],h=t[2],c=t[6],u=t[10],d=i+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-h)*p,this._z=(a-n)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(c-l)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(s+h)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(s-h)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(a-n)/p,this._x=(s+h)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,l=t._y,h=t._z,c=t._w;return this._x=i*c+a*o+n*h-s*l,this._y=n*c+a*l+s*o-i*h,this._z=s*c+a*h+i*l-n*o,this._w=a*c-i*o-n*l-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+n*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*n+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(l),c=Math.atan2(h,o),u=Math.sin((1-t)*c)/h,d=Math.sin(t*c)/h;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(s),i*Math.cos(s),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(e=0,t=0,i=0){E.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ja.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ja.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,l=e.w,h=l*t+a*n-o*i,c=l*i+o*t-s*n,u=l*n+s*i-a*t,d=-s*t-a*i-o*n;return this.x=h*l+d*-s+c*-o-u*-a,this.y=c*l+d*-a+u*-s-h*-o,this.z=u*l+d*-o+h*-a-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ls.copy(this).projectOnVector(e),this.sub(Ls)}reflect(e){return this.sub(Ls.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ls=new E,Ja=new _t;class Si{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,n=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,h=e.length;l<h;l+=3){const c=e[l],u=e[l+1],d=e[l+2];c<t&&(t=c),u<i&&(i=u),d<n&&(n=d),c>s&&(s=c),u>a&&(a=u),d>o&&(o=d)}return this.min.set(t,i,n),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,i=1/0,n=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,h=e.count;l<h;l++){const c=e.getX(l),u=e.getY(l),d=e.getZ(l);c<t&&(t=c),u<i&&(i=u),d<n&&(n=d),c>s&&(s=c),u>a&&(a=u),d>o&&(o=d)}return this.min.set(t,i,n),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)wi.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(wi)}else i.boundingBox===null&&i.computeBoundingBox(),Ps.copy(i.boundingBox),Ps.applyMatrix4(e.matrixWorld),this.union(Ps);const n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rn),xr.subVectors(this.max,Rn),Yi.subVectors(e.a,Rn),Zi.subVectors(e.b,Rn),Ji.subVectors(e.c,Rn),ai.subVectors(Zi,Yi),oi.subVectors(Ji,Zi),Ti.subVectors(Yi,Ji);let t=[0,-ai.z,ai.y,0,-oi.z,oi.y,0,-Ti.z,Ti.y,ai.z,0,-ai.x,oi.z,0,-oi.x,Ti.z,0,-Ti.x,-ai.y,ai.x,0,-oi.y,oi.x,0,-Ti.y,Ti.x,0];return!!Ds(t,Yi,Zi,Ji,xr)&&(t=[1,0,0,0,1,0,0,0,1],!!Ds(t,Yi,Zi,Ji,xr)&&(_r.crossVectors(ai,oi),t=[_r.x,_r.y,_r.z],Ds(t,Yi,Zi,Ji,xr)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return wi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=.5*this.getSize(wi).length(),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Zt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zt)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zt=[new E,new E,new E,new E,new E,new E,new E,new E],wi=new E,Ps=new Si,Yi=new E,Zi=new E,Ji=new E,ai=new E,oi=new E,Ti=new E,Rn=new E,xr=new E,_r=new E,Ei=new E;function Ds(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Ei.fromArray(r,s);const o=n.x*Math.abs(Ei.x)+n.y*Math.abs(Ei.y)+n.z*Math.abs(Ei.z),l=e.dot(Ei),h=t.dot(Ei),c=i.dot(Ei);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}const Bh=new Si,Ln=new E,Is=new E;class Ai{constructor(e=new E,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Bh.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ln.subVectors(e,this.center);const t=Ln.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=.5*(i-this.radius);this.center.addScaledVector(Ln,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Is.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ln.copy(e.center).add(Is)),this.expandByPoint(Ln.copy(e.center).sub(Is))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jt=new E,Ns=new E,yr=new E,li=new E,zs=new E,Mr=new E,Os=new E;class Pn{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jt.copy(this.direction).multiplyScalar(t).add(this.origin),Jt.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Ns.copy(e).add(t).multiplyScalar(.5),yr.copy(t).sub(e).normalize(),li.copy(this.origin).sub(Ns);const s=.5*e.distanceTo(t),a=-this.direction.dot(yr),o=li.dot(this.direction),l=-li.dot(yr),h=li.lengthSq(),c=Math.abs(1-a*a);let u,d,p,f;if(c>0)if(u=a*l-o,d=a*o-l,f=s*c,u>=0)if(d>=-f)if(d<=f){const m=1/c;u*=m,d*=m,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+h}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+h;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+h;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+h):d<=f?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+h):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+h);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+h;return i&&i.copy(this.direction).multiplyScalar(u).add(this.origin),n&&n.copy(yr).multiplyScalar(d).add(Ns),p}intersectSphere(e,t){Jt.subVectors(e.center,this.origin);const i=Jt.dot(this.direction),n=Jt.dot(Jt)-i*i,s=e.radius*e.radius;if(n>s)return null;const a=Math.sqrt(s-n),o=i-a,l=i+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,l;const h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(i=(e.min.x-d.x)*h,n=(e.max.x-d.x)*h):(i=(e.max.x-d.x)*h,n=(e.min.x-d.x)*h),c>=0?(s=(e.min.y-d.y)*c,a=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,a=(e.min.y-d.y)*c),i>a||s>n?null:((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>n?null:((o>i||i!=i)&&(i=o),(l<n||n!=n)&&(n=l),n<0?null:this.at(i>=0?i:n,t)))}intersectsBox(e){return this.intersectBox(e,Jt)!==null}intersectTriangle(e,t,i,n,s){zs.subVectors(t,e),Mr.subVectors(i,e),Os.crossVectors(zs,Mr);let a,o=this.direction.dot(Os);if(o>0){if(n)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}li.subVectors(this.origin,e);const l=a*this.direction.dot(Mr.crossVectors(li,Mr));if(l<0)return null;const h=a*this.direction.dot(zs.cross(li));if(h<0||l+h>o)return null;const c=-a*li.dot(Os);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class be{constructor(){be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,n,s,a,o,l,h,c,u,d,p,f,m,g){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=n,_[1]=s,_[5]=a,_[9]=o,_[13]=l,_[2]=h,_[6]=c,_[10]=u,_[14]=d,_[3]=p,_[7]=f,_[11]=m,_[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new be().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/Ki.setFromMatrixColumn(e,0).length(),s=1/Ki.setFromMatrixColumn(e,1).length(),a=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),h=Math.sin(n),c=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*c,p=a*u,f=o*c,m=o*u;t[0]=l*c,t[4]=-l*u,t[8]=h,t[1]=p+f*h,t[5]=d-m*h,t[9]=-o*l,t[2]=m-d*h,t[6]=f+p*h,t[10]=a*l}else if(e.order==="YXZ"){const d=l*c,p=l*u,f=h*c,m=h*u;t[0]=d+m*o,t[4]=f*o-p,t[8]=a*h,t[1]=a*u,t[5]=a*c,t[9]=-o,t[2]=p*o-f,t[6]=m+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*c,p=l*u,f=h*c,m=h*u;t[0]=d-m*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*c,t[9]=m-d*o,t[2]=-a*h,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*c,p=a*u,f=o*c,m=o*u;t[0]=l*c,t[4]=f*h-p,t[8]=d*h+m,t[1]=l*u,t[5]=m*h+d,t[9]=p*h-f,t[2]=-h,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*h,f=o*l,m=o*h;t[0]=l*c,t[4]=m-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*c,t[9]=-o*c,t[2]=-h*c,t[6]=p*u+f,t[10]=d-m*u}else if(e.order==="XZY"){const d=a*l,p=a*h,f=o*l,m=o*h;t[0]=l*c,t[4]=-u,t[8]=h*c,t[1]=d*u+m,t[5]=a*c,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*c,t[10]=m*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fh,e,kh)}lookAt(e,t,i){const n=this.elements;return St.subVectors(e,t),St.lengthSq()===0&&(St.z=1),St.normalize(),hi.crossVectors(i,St),hi.lengthSq()===0&&(Math.abs(i.z)===1?St.x+=1e-4:St.z+=1e-4,St.normalize(),hi.crossVectors(i,St)),hi.normalize(),br.crossVectors(St,hi),n[0]=hi.x,n[4]=br.x,n[8]=St.x,n[1]=hi.y,n[5]=br.y,n[9]=St.y,n[2]=hi.z,n[6]=br.z,n[10]=St.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],h=i[12],c=i[1],u=i[5],d=i[9],p=i[13],f=i[2],m=i[6],g=i[10],_=i[14],v=i[3],y=i[7],M=i[11],b=i[15],T=n[0],P=n[4],L=n[8],B=n[12],U=n[1],D=n[5],Y=n[9],K=n[13],X=n[2],ie=n[6],te=n[10],se=n[14],ae=n[3],H=n[7],k=n[11],Q=n[15];return s[0]=a*T+o*U+l*X+h*ae,s[4]=a*P+o*D+l*ie+h*H,s[8]=a*L+o*Y+l*te+h*k,s[12]=a*B+o*K+l*se+h*Q,s[1]=c*T+u*U+d*X+p*ae,s[5]=c*P+u*D+d*ie+p*H,s[9]=c*L+u*Y+d*te+p*k,s[13]=c*B+u*K+d*se+p*Q,s[2]=f*T+m*U+g*X+_*ae,s[6]=f*P+m*D+g*ie+_*H,s[10]=f*L+m*Y+g*te+_*k,s[14]=f*B+m*K+g*se+_*Q,s[3]=v*T+y*U+M*X+b*ae,s[7]=v*P+y*D+M*ie+b*H,s[11]=v*L+y*Y+M*te+b*k,s[15]=v*B+y*K+M*se+b*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],l=e[9],h=e[13],c=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*l*u-n*h*u-s*o*d+i*h*d+n*o*p-i*l*p)+e[7]*(+t*l*p-t*h*d+s*a*d-n*a*p+n*h*c-s*l*c)+e[11]*(+t*h*u-t*o*p-s*a*u+i*a*p+s*o*c-i*h*c)+e[15]*(-n*o*c-t*l*u+t*o*d+n*a*u-i*a*d+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],u=e[9],d=e[10],p=e[11],f=e[12],m=e[13],g=e[14],_=e[15],v=u*g*h-m*d*h+m*l*p-o*g*p-u*l*_+o*d*_,y=f*d*h-c*g*h-f*l*p+a*g*p+c*l*_-a*d*_,M=c*m*h-f*u*h+f*o*p-a*m*p-c*o*_+a*u*_,b=f*u*l-c*m*l-f*o*d+a*m*d+c*o*g-a*u*g,T=t*v+i*y+n*M+s*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/T;return e[0]=v*P,e[1]=(m*d*s-u*g*s-m*n*p+i*g*p+u*n*_-i*d*_)*P,e[2]=(o*g*s-m*l*s+m*n*h-i*g*h-o*n*_+i*l*_)*P,e[3]=(u*l*s-o*d*s-u*n*h+i*d*h+o*n*p-i*l*p)*P,e[4]=y*P,e[5]=(c*g*s-f*d*s+f*n*p-t*g*p-c*n*_+t*d*_)*P,e[6]=(f*l*s-a*g*s-f*n*h+t*g*h+a*n*_-t*l*_)*P,e[7]=(a*d*s-c*l*s+c*n*h-t*d*h-a*n*p+t*l*p)*P,e[8]=M*P,e[9]=(f*u*s-c*m*s-f*i*p+t*m*p+c*i*_-t*u*_)*P,e[10]=(a*m*s-f*o*s+f*i*h-t*m*h-a*i*_+t*o*_)*P,e[11]=(c*o*s-a*u*s-c*i*h+t*u*h+a*i*p-t*o*p)*P,e[12]=b*P,e[13]=(c*m*n-f*u*n+f*i*d-t*m*d-c*i*g+t*u*g)*P,e[14]=(f*o*n-a*m*n-f*i*l+t*m*l+a*i*g-t*o*g)*P,e[15]=(a*u*n-c*o*n+c*i*l-t*u*l-a*i*d+t*o*d)*P,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,h=s*a,c=s*o;return this.set(h*a+i,h*o-n*l,h*l+n*o,0,h*o+n*l,c*o+i,c*l-n*a,0,h*l-n*o,c*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,h=s+s,c=a+a,u=o+o,d=s*h,p=s*c,f=s*u,m=a*c,g=a*u,_=o*u,v=l*h,y=l*c,M=l*u,b=i.x,T=i.y,P=i.z;return n[0]=(1-(m+_))*b,n[1]=(p+M)*b,n[2]=(f-y)*b,n[3]=0,n[4]=(p-M)*T,n[5]=(1-(d+_))*T,n[6]=(g+v)*T,n[7]=0,n[8]=(f+y)*P,n[9]=(g-v)*P,n[10]=(1-(d+m))*P,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=Ki.set(n[0],n[1],n[2]).length();const a=Ki.set(n[4],n[5],n[6]).length(),o=Ki.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],zt.copy(this);const l=1/s,h=1/a,c=1/o;return zt.elements[0]*=l,zt.elements[1]*=l,zt.elements[2]*=l,zt.elements[4]*=h,zt.elements[5]*=h,zt.elements[6]*=h,zt.elements[8]*=c,zt.elements[9]*=c,zt.elements[10]*=c,t.setFromRotationMatrix(zt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,n,s,a){const o=this.elements,l=2*s/(t-e),h=2*s/(i-n),c=(t+e)/(t-e),u=(i+n)/(i-n),d=-(a+s)/(a-s),p=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=c,o[12]=0,o[1]=0,o[5]=h,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,n,s,a){const o=this.elements,l=1/(t-e),h=1/(i-n),c=1/(a-s),u=(t+e)*l,d=(i+n)*h,p=(a+s)*c;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*h,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*c,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ki=new E,zt=new be,Fh=new E(0,0,0),kh=new E(1,1,1),hi=new E,br=new E,St=new E,Ka=new be,Qa=new _t;class Qi{constructor(e=0,t=0,i=0,n=Qi.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],a=n[4],o=n[8],l=n[1],h=n[5],c=n[9],u=n[2],d=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ka.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ka,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qa.setFromEuler(this),this.setFromQuaternion(Qa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Qi.DefaultOrder="XYZ",Qi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Sr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}}let Hh=0;const $a=new E,$i=new _t,Kt=new be,wr=new E,Dn=new E,Gh=new E,Vh=new _t,eo=new E(1,0,0),to=new E(0,1,0),io=new E(0,0,1),Wh={type:"added"},no={type:"removed"};class Ne extends Xt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=bt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DefaultUp.clone();const e=new E,t=new Qi,i=new _t,n=new E(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new be},normalMatrix:{value:new pt}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=Ne.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ne.DefaultMatrixWorldAutoUpdate,this.layers=new Sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(eo,e)}rotateY(e){return this.rotateOnAxis(to,e)}rotateZ(e){return this.rotateOnAxis(io,e)}translateOnAxis(e,t){return $a.copy(e).applyQuaternion(this.quaternion),this.position.add($a.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(eo,e)}translateY(e){return this.translateOnAxis(to,e)}translateZ(e){return this.translateOnAxis(io,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Kt.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?wr.copy(e):wr.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Dn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kt.lookAt(Dn,wr,this.up):Kt.lookAt(wr,Dn,this.up),this.quaternion.setFromRotationMatrix(Kt),n&&(Kt.extractRotation(n.matrixWorld),$i.setFromRotationMatrix(Kt),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Wh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(no)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(no)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Kt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dn,e,Gh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dn,Vh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++){const s=t[i];s.matrixWorldAutoUpdate!==!0&&e!==!0||s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let s=0,a=n.length;s<a;s++){const o=n[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const u=l[h];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),h=a(e.textures),c=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),f.length>0&&(i.nodes=f)}return i.object=n,i;function a(o){const l=[];for(const h in o){const c=o[h];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}Ne.DefaultUp=new E(0,1,0),Ne.DefaultMatrixAutoUpdate=!0,Ne.DefaultMatrixWorldAutoUpdate=!0;const Ot=new E,Qt=new E,Us=new E,$t=new E,en=new E,tn=new E,ro=new E,Bs=new E,Fs=new E,ks=new E;class Lt{constructor(e=new E,t=new E,i=new E){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Ot.subVectors(e,t),n.cross(Ot);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Ot.subVectors(n,t),Qt.subVectors(i,t),Us.subVectors(e,t);const a=Ot.dot(Ot),o=Ot.dot(Qt),l=Ot.dot(Us),h=Qt.dot(Qt),c=Qt.dot(Us),u=a*h-o*o;if(u===0)return s.set(-2,-1,-1);const d=1/u,p=(h*l-o*c)*d,f=(a*c-o*l)*d;return s.set(1-p-f,f,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,$t),$t.x>=0&&$t.y>=0&&$t.x+$t.y<=1}static getUV(e,t,i,n,s,a,o,l){return this.getBarycoord(e,t,i,n,$t),l.set(0,0),l.addScaledVector(s,$t.x),l.addScaledVector(a,$t.y),l.addScaledVector(o,$t.z),l}static isFrontFacing(e,t,i,n){return Ot.subVectors(i,t),Qt.subVectors(e,t),Ot.cross(Qt).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ot.subVectors(this.c,this.b),Qt.subVectors(this.a,this.b),.5*Ot.cross(Qt).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Lt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Lt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,s){return Lt.getUV(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return Lt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Lt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let a,o;en.subVectors(n,i),tn.subVectors(s,i),Bs.subVectors(e,i);const l=en.dot(Bs),h=tn.dot(Bs);if(l<=0&&h<=0)return t.copy(i);Fs.subVectors(e,n);const c=en.dot(Fs),u=tn.dot(Fs);if(c>=0&&u<=c)return t.copy(n);const d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(en,a);ks.subVectors(e,s);const p=en.dot(ks),f=tn.dot(ks);if(f>=0&&p<=f)return t.copy(s);const m=p*h-l*f;if(m<=0&&h>=0&&f<=0)return o=h/(h-f),t.copy(i).addScaledVector(tn,o);const g=c*f-p*u;if(g<=0&&u-c>=0&&p-f>=0)return ro.subVectors(s,n),o=(u-c)/(u-c+(p-f)),t.copy(n).addScaledVector(ro,o);const _=1/(g+m+d);return a=m*_,o=d*_,t.copy(i).addScaledVector(en,a).addScaledVector(tn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let jh=0;class ut extends Xt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=bt(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const n=this[t];n!==void 0?n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i:console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.")}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};function n(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t){const s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ci extends ut{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qe=new E,Tr=new J;class Be{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Tr.fromBufferAttribute(this,t),Tr.applyMatrix3(e),this.setXY(t,Tr.x,Tr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Qe.fromBufferAttribute(this,t),Qe.applyMatrix3(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Qe.fromBufferAttribute(this,t),Qe.applyMatrix4(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Qe.fromBufferAttribute(this,t),Qe.applyNormalMatrix(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Qe.fromBufferAttribute(this,t),Qe.transformDirection(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ue(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ue(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ue(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ue(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ue(t,this.array),i=Ue(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Ue(t,this.array),i=Ue(i,this.array),n=Ue(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=Ue(t,this.array),i=Ue(i,this.array),n=Ue(n,this.array),s=Ue(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),this.updateRange.offset===0&&this.updateRange.count===-1||(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Hs extends Be{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Gs extends Be{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class me extends Be{constructor(e,t,i){super(new Float32Array(e),t,i)}}let qh=0;const Pt=new be,Vs=new Ne,nn=new E,wt=new Si,In=new Si,nt=new E;class Ee extends Xt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=bt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ya(e)?Gs:Hs)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new pt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pt.makeRotationFromQuaternion(e),this.applyMatrix4(Pt),this}rotateX(e){return Pt.makeRotationX(e),this.applyMatrix4(Pt),this}rotateY(e){return Pt.makeRotationY(e),this.applyMatrix4(Pt),this}rotateZ(e){return Pt.makeRotationZ(e),this.applyMatrix4(Pt),this}translate(e,t,i){return Pt.makeTranslation(e,t,i),this.applyMatrix4(Pt),this}scale(e,t,i){return Pt.makeScale(e,t,i),this.applyMatrix4(Pt),this}lookAt(e){return Vs.lookAt(e),Vs.updateMatrix(),this.applyMatrix4(Vs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nn).negate(),this.translate(nn.x,nn.y,nn.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new me(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];wt.setFromBufferAttribute(s),this.morphTargetsRelative?(nt.addVectors(this.boundingBox.min,wt.min),this.boundingBox.expandByPoint(nt),nt.addVectors(this.boundingBox.max,wt.max),this.boundingBox.expandByPoint(nt)):(this.boundingBox.expandByPoint(wt.min),this.boundingBox.expandByPoint(wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new E,1/0);if(e){const i=this.boundingSphere.center;if(wt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];In.setFromBufferAttribute(o),this.morphTargetsRelative?(nt.addVectors(wt.min,In.min),wt.expandByPoint(nt),nt.addVectors(wt.max,In.max),wt.expandByPoint(nt)):(wt.expandByPoint(In.min),wt.expandByPoint(In.max))}wt.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)nt.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(nt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)nt.fromBufferAttribute(o,h),l&&(nn.fromBufferAttribute(e,h),nt.add(nn)),n=Math.max(n,i.distanceToSquared(nt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");const i=e.array,n=t.position.array,s=t.normal.array,a=t.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Be(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,h=[],c=[];for(let U=0;U<o;U++)h[U]=new E,c[U]=new E;const u=new E,d=new E,p=new E,f=new J,m=new J,g=new J,_=new E,v=new E;function y(U,D,Y){u.fromArray(n,3*U),d.fromArray(n,3*D),p.fromArray(n,3*Y),f.fromArray(a,2*U),m.fromArray(a,2*D),g.fromArray(a,2*Y),d.sub(u),p.sub(u),m.sub(f),g.sub(f);const K=1/(m.x*g.y-g.x*m.y);isFinite(K)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(p,-m.y).multiplyScalar(K),v.copy(p).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(K),h[U].add(_),h[D].add(_),h[Y].add(_),c[U].add(v),c[D].add(v),c[Y].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let U=0,D=M.length;U<D;++U){const Y=M[U],K=Y.start;for(let X=K,ie=K+Y.count;X<ie;X+=3)y(i[X+0],i[X+1],i[X+2])}const b=new E,T=new E,P=new E,L=new E;function B(U){P.fromArray(s,3*U),L.copy(P);const D=h[U];b.copy(D),b.sub(P.multiplyScalar(P.dot(D))).normalize(),T.crossVectors(L,D);const Y=T.dot(c[U])<0?-1:1;l[4*U]=b.x,l[4*U+1]=b.y,l[4*U+2]=b.z,l[4*U+3]=Y}for(let U=0,D=M.length;U<D;++U){const Y=M[U],K=Y.start;for(let X=K,ie=K+Y.count;X<ie;X+=3)B(i[X+0]),B(i[X+1]),B(i[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Be(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const n=new E,s=new E,a=new E,o=new E,l=new E,h=new E,c=new E,u=new E;if(e)for(let d=0,p=e.count;d<p;d+=3){const f=e.getX(d+0),m=e.getX(d+1),g=e.getX(d+2);n.fromBufferAttribute(t,f),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,g),c.subVectors(a,s),u.subVectors(n,s),c.cross(u),o.fromBufferAttribute(i,f),l.fromBufferAttribute(i,m),h.fromBufferAttribute(i,g),o.add(c),l.add(c),h.add(c),i.setXYZ(f,o.x,o.y,o.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(g,h.x,h.y,h.z)}else for(let d=0,p=t.count;d<p;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),c.subVectors(a,s),u.subVectors(n,s),c.cross(u),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)nt.fromBufferAttribute(e,t),nt.normalize(),e.setXYZ(t,nt.x,nt.y,nt.z)}toNonIndexed(){function e(o,l){const h=o.array,c=o.itemSize,u=o.normalized,d=new h.constructor(l.length*c);let p=0,f=0;for(let m=0,g=l.length;m<g;m++){p=o.isInterleavedBufferAttribute?l[m]*o.data.stride+o.offset:l[m]*c;for(let _=0;_<c;_++)d[f++]=h[p++]}return new Be(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ee,i=this.index.array,n=this.attributes;for(const o in n){const l=e(n[o],i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const l=[],h=s[o];for(let c=0,u=h.length;c<u;c++){const d=e(h[c],i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const h=i[l];e.data.attributes[l]=h.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){const p=h[u];c.push(p.toJSON(e.data))}c.length>0&&(n[l]=c,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const h in n){const c=n[h];this.setAttribute(h,c.clone(t))}const s=e.morphAttributes;for(const h in s){const c=[],u=s[h];for(let d=0,p=u.length;d<p;d++)c.push(u[d].clone(t));this.morphAttributes[h]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,c=a.length;h<c;h++){const u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const so=new be,rn=new Pn,Ws=new Ai,ui=new E,di=new E,pi=new E,js=new E,qs=new E,Xs=new E,Er=new E,Ar=new E,Cr=new E,Rr=new J,Lr=new J,Pr=new J,Ys=new E,Dr=new E;class at extends Ne{constructor(e=new Ee,t=new ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){const a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;if(n===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Ws.copy(i.boundingSphere),Ws.applyMatrix4(s),e.ray.intersectsSphere(Ws)===!1)||(so.copy(s).invert(),rn.copy(e.ray).applyMatrix4(so),i.boundingBox!==null&&rn.intersectsBox(i.boundingBox)===!1))return;let a;const o=i.index,l=i.attributes.position,h=i.morphAttributes.position,c=i.morphTargetsRelative,u=i.attributes.uv,d=i.attributes.uv2,p=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(n))for(let m=0,g=p.length;m<g;m++){const _=p[m],v=n[_.materialIndex];for(let y=Math.max(_.start,f.start),M=Math.min(o.count,Math.min(_.start+_.count,f.start+f.count));y<M;y+=3){const b=o.getX(y),T=o.getX(y+1),P=o.getX(y+2);a=Ir(this,v,e,rn,l,h,c,u,d,b,T,P),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else for(let m=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);m<g;m+=3){const _=o.getX(m),v=o.getX(m+1),y=o.getX(m+2);a=Ir(this,n,e,rn,l,h,c,u,d,_,v,y),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}else if(l!==void 0)if(Array.isArray(n))for(let m=0,g=p.length;m<g;m++){const _=p[m],v=n[_.materialIndex];for(let y=Math.max(_.start,f.start),M=Math.min(l.count,Math.min(_.start+_.count,f.start+f.count));y<M;y+=3)a=Ir(this,v,e,rn,l,h,c,u,d,y,y+1,y+2),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=_.materialIndex,t.push(a))}else for(let m=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);m<g;m+=3)a=Ir(this,n,e,rn,l,h,c,u,d,m,m+1,m+2),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}function Ir(r,e,t,i,n,s,a,o,l,h,c,u){ui.fromBufferAttribute(n,h),di.fromBufferAttribute(n,c),pi.fromBufferAttribute(n,u);const d=r.morphTargetInfluences;if(s&&d){Er.set(0,0,0),Ar.set(0,0,0),Cr.set(0,0,0);for(let f=0,m=s.length;f<m;f++){const g=d[f],_=s[f];g!==0&&(js.fromBufferAttribute(_,h),qs.fromBufferAttribute(_,c),Xs.fromBufferAttribute(_,u),a?(Er.addScaledVector(js,g),Ar.addScaledVector(qs,g),Cr.addScaledVector(Xs,g)):(Er.addScaledVector(js.sub(ui),g),Ar.addScaledVector(qs.sub(di),g),Cr.addScaledVector(Xs.sub(pi),g)))}ui.add(Er),di.add(Ar),pi.add(Cr)}r.isSkinnedMesh&&(r.boneTransform(h,ui),r.boneTransform(c,di),r.boneTransform(u,pi));const p=function(f,m,g,_,v,y,M,b){let T;if(T=m.side===1?_.intersectTriangle(M,y,v,!0,b):_.intersectTriangle(v,y,M,m.side!==2,b),T===null)return null;Dr.copy(b),Dr.applyMatrix4(f.matrixWorld);const P=g.ray.origin.distanceTo(Dr);return P<g.near||P>g.far?null:{distance:P,point:Dr.clone(),object:f}}(r,e,t,i,ui,di,pi,Ys);if(p){o&&(Rr.fromBufferAttribute(o,h),Lr.fromBufferAttribute(o,c),Pr.fromBufferAttribute(o,u),p.uv=Lt.getUV(Ys,ui,di,pi,Rr,Lr,Pr,new J)),l&&(Rr.fromBufferAttribute(l,h),Lr.fromBufferAttribute(l,c),Pr.fromBufferAttribute(l,u),p.uv2=Lt.getUV(Ys,ui,di,pi,Rr,Lr,Pr,new J));const f={a:h,b:c,c:u,normal:new E,materialIndex:0};Lt.getNormal(ui,di,pi,f.normal),p.face=f}return p}class mi extends Ee{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};const o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);const l=[],h=[],c=[],u=[];let d=0,p=0;function f(m,g,_,v,y,M,b,T,P,L,B){const U=M/P,D=b/L,Y=M/2,K=b/2,X=T/2,ie=P+1,te=L+1;let se=0,ae=0;const H=new E;for(let k=0;k<te;k++){const Q=k*D-K;for(let ne=0;ne<ie;ne++){const le=ne*U-Y;H[m]=le*v,H[g]=Q*y,H[_]=X,h.push(H.x,H.y,H.z),H[m]=0,H[g]=0,H[_]=T>0?1:-1,c.push(H.x,H.y,H.z),u.push(ne/P),u.push(1-k/L),se+=1}}for(let k=0;k<L;k++)for(let Q=0;Q<P;Q++){const ne=d+Q+ie*k,le=d+Q+ie*(k+1),pe=d+(Q+1)+ie*(k+1),Re=d+(Q+1)+ie*k;l.push(ne,le,Re),l.push(le,pe,Re),ae+=6}o.addGroup(p,ae,B),p+=ae,d+=se}f("z","y","x",-1,-1,i,t,e,a,s,0),f("z","y","x",1,-1,i,t,-e,a,s,1),f("x","z","y",1,1,e,i,t,n,a,2),f("x","z","y",1,-1,e,i,-t,n,a,3),f("x","y","z",1,-1,e,t,i,n,s,4),f("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new me(h,3)),this.setAttribute("normal",new me(c,3)),this.setAttribute("uv",new me(u,2))}static fromJSON(e){return new mi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function sn(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function mt(r){const e={};for(let t=0;t<r.length;t++){const i=sn(r[t]);for(const n in i)e[n]=i[n]}return e}function ao(r){return r.getRenderTarget()===null&&r.outputEncoding===3001?Sn:wn}const oo={clone:sn,merge:mt};class Vt extends ut{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sn(e.uniforms),this.uniformsGroups=function(t){const i=[];for(let n=0;n<t.length;n++)i.push(t[n].clone());return i}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Nr extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ot extends Nr{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=2*Tn*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(.5*yi*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Tn*Math.atan(Math.tan(.5*yi*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(.5*yi*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,h=a.fullHeight;s+=a.offsetX*n/l,t-=a.offsetY*i/h,n*=a.width/l,i*=a.height/h}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const an=-90;class lo extends Ne{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const n=new ot(an,1,e,t);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(1,0,0),this.add(n);const s=new ot(an,1,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new ot(an,1,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new ot(an,1,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new ot(an,1,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const h=new ot(an,1,e,t);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(0,0,-1),this.add(h)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[n,s,a,o,l,h]=this.children,c=e.getRenderTarget(),u=e.toneMapping,d=e.xr.enabled;e.toneMapping=0,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,n),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,h),e.setRenderTarget(c),e.toneMapping=u,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class Nn extends Je{constructor(e,t,i,n,s,a,o,l,h,c){super(e=e!==void 0?e:[],t=t!==void 0?t:301,i,n,s,a,o,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ho extends Rt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Nn(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new mi(5,5,5),s=new Vt({name:"CubemapFromEquirect",uniforms:sn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;const a=new at(n,s),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new lo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}}const Zs=new E,Xh=new E,Yh=new pt;class fi{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Zs.subVectors(i,t).cross(Xh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Zs),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Yh.getNormalMatrix(e),n=this.coplanarPoint(Zs).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const on=new Ai,zr=new E;class Or{constructor(e=new fi,t=new fi,i=new fi,n=new fi,s=new fi,a=new fi){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,n=i[0],s=i[1],a=i[2],o=i[3],l=i[4],h=i[5],c=i[6],u=i[7],d=i[8],p=i[9],f=i[10],m=i[11],g=i[12],_=i[13],v=i[14],y=i[15];return t[0].setComponents(o-n,u-l,m-d,y-g).normalize(),t[1].setComponents(o+n,u+l,m+d,y+g).normalize(),t[2].setComponents(o+s,u+h,m+p,y+_).normalize(),t[3].setComponents(o-s,u-h,m-p,y-_).normalize(),t[4].setComponents(o-a,u-c,m-f,y-v).normalize(),t[5].setComponents(o+a,u+c,m+f,y+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),on.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(on)}intersectsSprite(e){return on.center.set(0,0,0),on.radius=.7071067811865476,on.applyMatrix4(e.matrixWorld),this.intersectsSphere(on)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(zr.x=n.normal.x>0?e.max.x:e.min.x,zr.y=n.normal.y>0?e.max.y:e.min.y,zr.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(zr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function co(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Zh(r,e){const t=e.isWebGL2,i=new WeakMap;return{get:function(n){return n.isInterleavedBufferAttribute&&(n=n.data),i.get(n)},remove:function(n){n.isInterleavedBufferAttribute&&(n=n.data);const s=i.get(n);s&&(r.deleteBuffer(s.buffer),i.delete(n))},update:function(n,s){if(n.isGLBufferAttribute){const o=i.get(n);return void((!o||o.version<n.version)&&i.set(n,{buffer:n.buffer,type:n.type,bytesPerElement:n.elementSize,version:n.version}))}n.isInterleavedBufferAttribute&&(n=n.data);const a=i.get(n);a===void 0?i.set(n,function(o,l){const h=o.array,c=o.usage,u=r.createBuffer();let d;if(r.bindBuffer(l,u),r.bufferData(l,h,c),o.onUploadCallback(),h instanceof Float32Array)d=5126;else if(h instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");d=5131}else d=5123;else if(h instanceof Int16Array)d=5122;else if(h instanceof Uint32Array)d=5125;else if(h instanceof Int32Array)d=5124;else if(h instanceof Int8Array)d=5120;else if(h instanceof Uint8Array)d=5121;else{if(!(h instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);d=5121}return{buffer:u,type:d,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version}}(n,s)):a.version<n.version&&(function(o,l,h){const c=l.array,u=l.updateRange;r.bindBuffer(h,o),u.count===-1?r.bufferSubData(h,0,c):(t?r.bufferSubData(h,u.offset*c.BYTES_PER_ELEMENT,c,u.offset,u.count):r.bufferSubData(h,u.offset*c.BYTES_PER_ELEMENT,c.subarray(u.offset,u.offset+u.count)),u.count=-1),l.onUploadCallback()}(a.buffer,n,s),a.version=n.version)}}}class ln extends Ee{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),h=o+1,c=l+1,u=e/o,d=t/l,p=[],f=[],m=[],g=[];for(let _=0;_<c;_++){const v=_*d-a;for(let y=0;y<h;y++){const M=y*u-s;f.push(M,-v,0),m.push(0,0,1),g.push(y/o),g.push(1-_/l)}}for(let _=0;_<l;_++)for(let v=0;v<o;v++){const y=v+h*_,M=v+h*(_+1),b=v+1+h*(_+1),T=v+1+h*_;p.push(y,M,T),p.push(M,b,T)}this.setIndex(p),this.setAttribute("position",new me(f,3)),this.setAttribute("normal",new me(m,3)),this.setAttribute("uv",new me(g,2))}static fromJSON(e){return new ln(e.width,e.height,e.widthSegments,e.heightSegments)}}const we={alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,begin_vertex:"vec3 transformed = vec3( position );",beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,	0.0556434,
		-1.5371385,	1.8760108, -0.2040259,
		-0.4985314,	0.0415560,	1.0572252
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
		float R21 = R12;
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,encodings_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",encodings_pars_fragment:`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
			vec3(		0, 1,		0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,lights_fragment_begin:`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,normal_fragment_maps:`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,output_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
		vec3(	1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,	1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,	1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,uv_pars_fragment:`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,uv_pars_vertex:`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,uv_vertex:`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,uv2_pars_fragment:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,uv2_pars_vertex:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,uv2_vertex:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,depth_vert:`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,distanceRGBA_frag:`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,meshmatcap_frag:`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,meshphong_frag:`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`},re={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new pt},uv2Transform:{value:new pt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new pt}}},Ut={basic:{uniforms:mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:we.meshbasic_vert,fragmentShader:we.meshbasic_frag},lambert:{uniforms:mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ue(0)}}]),vertexShader:we.meshlambert_vert,fragmentShader:we.meshlambert_frag},phong:{uniforms:mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30}}]),vertexShader:we.meshphong_vert,fragmentShader:we.meshphong_frag},standard:{uniforms:mt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag},toon:{uniforms:mt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new ue(0)}}]),vertexShader:we.meshtoon_vert,fragmentShader:we.meshtoon_frag},matcap:{uniforms:mt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:we.meshmatcap_vert,fragmentShader:we.meshmatcap_frag},points:{uniforms:mt([re.points,re.fog]),vertexShader:we.points_vert,fragmentShader:we.points_frag},dashed:{uniforms:mt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:we.linedashed_vert,fragmentShader:we.linedashed_frag},depth:{uniforms:mt([re.common,re.displacementmap]),vertexShader:we.depth_vert,fragmentShader:we.depth_frag},normal:{uniforms:mt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:we.meshnormal_vert,fragmentShader:we.meshnormal_frag},sprite:{uniforms:mt([re.sprite,re.fog]),vertexShader:we.sprite_vert,fragmentShader:we.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:we.background_vert,fragmentShader:we.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:we.backgroundCube_vert,fragmentShader:we.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:we.cube_vert,fragmentShader:we.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:we.equirect_vert,fragmentShader:we.equirect_frag},distanceRGBA:{uniforms:mt([re.common,re.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:we.distanceRGBA_vert,fragmentShader:we.distanceRGBA_frag},shadow:{uniforms:mt([re.lights,re.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:we.shadow_vert,fragmentShader:we.shadow_frag}};Ut.physical={uniforms:mt([Ut.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new J(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag};const Ur={r:0,b:0,g:0};function Jh(r,e,t,i,n,s,a){const o=new ue(0);let l,h,c=s===!0?0:1,u=null,d=0,p=null;function f(m,g){m.getRGB(Ur,ao(r)),i.buffers.color.setClear(Ur.r,Ur.g,Ur.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(m,g=1){o.set(m),c=g,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,f(o,c)},render:function(m,g){let _=!1,v=g.isScene===!0?g.background:null;v&&v.isTexture&&(v=(g.backgroundBlurriness>0?t:e).get(v));const y=r.xr,M=y.getSession&&y.getSession();M&&M.environmentBlendMode==="additive"&&(v=null),v===null?f(o,c):v&&v.isColor&&(f(v,1),_=!0),(r.autoClear||_)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===306)?(h===void 0&&(h=new at(new mi(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:sn(Ut.backgroundCube.uniforms),vertexShader:Ut.backgroundCube.vertexShader,fragmentShader:Ut.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u===v&&d===v.version&&p===r.toneMapping||(h.material.needsUpdate=!0,u=v,d=v.version,p=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new at(new ln(2,2),new Vt({name:"BackgroundMaterial",uniforms:sn(Ut.background.uniforms),vertexShader:Ut.background.vertexShader,fragmentShader:Ut.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),u===v&&d===v.version&&p===r.toneMapping||(l.material.needsUpdate=!0,u=v,d=v.version,p=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}}}function Kh(r,e,t,i){const n=r.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let h=l,c=!1;function u(b){return i.isWebGL2?r.bindVertexArray(b):s.bindVertexArrayOES(b)}function d(b){return i.isWebGL2?r.deleteVertexArray(b):s.deleteVertexArrayOES(b)}function p(b){const T=[],P=[],L=[];for(let B=0;B<n;B++)T[B]=0,P[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:P,attributeDivisors:L,object:b,attributes:{},index:null}}function f(){const b=h.newAttributes;for(let T=0,P=b.length;T<P;T++)b[T]=0}function m(b){g(b,0)}function g(b,T){const P=h.newAttributes,L=h.enabledAttributes,B=h.attributeDivisors;P[b]=1,L[b]===0&&(r.enableVertexAttribArray(b),L[b]=1),B[b]!==T&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](b,T),B[b]=T)}function _(){const b=h.newAttributes,T=h.enabledAttributes;for(let P=0,L=T.length;P<L;P++)T[P]!==b[P]&&(r.disableVertexAttribArray(P),T[P]=0)}function v(b,T,P,L,B,U){i.isWebGL2!==!0||P!==5124&&P!==5125?r.vertexAttribPointer(b,T,P,L,B,U):r.vertexAttribIPointer(b,T,P,B,U)}function y(){M(),c=!0,h!==l&&(h=l,u(h.object))}function M(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(b,T,P,L,B){let U=!1;if(a){const D=function(Y,K,X){const ie=X.wireframe===!0;let te=o[Y.id];te===void 0&&(te={},o[Y.id]=te);let se=te[K.id];se===void 0&&(se={},te[K.id]=se);let ae=se[ie];return ae===void 0&&(ae=p(i.isWebGL2?r.createVertexArray():s.createVertexArrayOES()),se[ie]=ae),ae}(L,P,T);h!==D&&(h=D,u(h.object)),U=function(Y,K,X,ie){const te=h.attributes,se=K.attributes;let ae=0;const H=X.getAttributes();for(const k in H)if(H[k].location>=0){const Q=te[k];let ne=se[k];if(ne===void 0&&(k==="instanceMatrix"&&Y.instanceMatrix&&(ne=Y.instanceMatrix),k==="instanceColor"&&Y.instanceColor&&(ne=Y.instanceColor)),Q===void 0||Q.attribute!==ne||ne&&Q.data!==ne.data)return!0;ae++}return h.attributesNum!==ae||h.index!==ie}(b,L,P,B),U&&function(Y,K,X,ie){const te={},se=K.attributes;let ae=0;const H=X.getAttributes();for(const k in H)if(H[k].location>=0){let Q=se[k];Q===void 0&&(k==="instanceMatrix"&&Y.instanceMatrix&&(Q=Y.instanceMatrix),k==="instanceColor"&&Y.instanceColor&&(Q=Y.instanceColor));const ne={};ne.attribute=Q,Q&&Q.data&&(ne.data=Q.data),te[k]=ne,ae++}h.attributes=te,h.attributesNum=ae,h.index=ie}(b,L,P,B)}else{const D=T.wireframe===!0;h.geometry===L.id&&h.program===P.id&&h.wireframe===D||(h.geometry=L.id,h.program=P.id,h.wireframe=D,U=!0)}B!==null&&t.update(B,34963),(U||c)&&(c=!1,function(D,Y,K,X){if(i.isWebGL2===!1&&(D.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;f();const ie=X.attributes,te=K.getAttributes(),se=Y.defaultAttributeValues;for(const ae in te){const H=te[ae];if(H.location>=0){let k=ie[ae];if(k===void 0&&(ae==="instanceMatrix"&&D.instanceMatrix&&(k=D.instanceMatrix),ae==="instanceColor"&&D.instanceColor&&(k=D.instanceColor)),k!==void 0){const Q=k.normalized,ne=k.itemSize,le=t.get(k);if(le===void 0)continue;const pe=le.buffer,Re=le.type,A=le.bytesPerElement;if(k.isInterleavedBufferAttribute){const w=k.data,F=w.stride,z=k.offset;if(w.isInstancedInterleavedBuffer){for(let R=0;R<H.locationSize;R++)g(H.location+R,w.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=w.meshPerAttribute*w.count)}else for(let R=0;R<H.locationSize;R++)m(H.location+R);r.bindBuffer(34962,pe);for(let R=0;R<H.locationSize;R++)v(H.location+R,ne/H.locationSize,Re,Q,F*A,(z+ne/H.locationSize*R)*A)}else{if(k.isInstancedBufferAttribute){for(let w=0;w<H.locationSize;w++)g(H.location+w,k.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let w=0;w<H.locationSize;w++)m(H.location+w);r.bindBuffer(34962,pe);for(let w=0;w<H.locationSize;w++)v(H.location+w,ne/H.locationSize,Re,Q,ne*A,ne/H.locationSize*w*A)}}else if(se!==void 0){const Q=se[ae];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(H.location,Q);break;case 3:r.vertexAttrib3fv(H.location,Q);break;case 4:r.vertexAttrib4fv(H.location,Q);break;default:r.vertexAttrib1fv(H.location,Q)}}}}_()}(b,T,P,L),B!==null&&r.bindBuffer(34963,t.get(B).buffer))},reset:y,resetDefaultState:M,dispose:function(){y();for(const b in o){const T=o[b];for(const P in T){const L=T[P];for(const B in L)d(L[B].object),delete L[B];delete T[P]}delete o[b]}},releaseStatesOfGeometry:function(b){if(o[b.id]===void 0)return;const T=o[b.id];for(const P in T){const L=T[P];for(const B in L)d(L[B].object),delete L[B];delete T[P]}delete o[b.id]},releaseStatesOfProgram:function(b){for(const T in o){const P=o[T];if(P[b.id]===void 0)continue;const L=P[b.id];for(const B in L)d(L[B].object),delete L[B];delete P[b.id]}},initAttributes:f,enableAttribute:m,disableUnusedAttributes:_}}function Qh(r,e,t,i){const n=i.isWebGL2;let s;this.setMode=function(a){s=a},this.render=function(a,o){r.drawArrays(s,a,o),t.update(o,s,1)},this.renderInstances=function(a,o,l){if(l===0)return;let h,c;if(n)h=r,c="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),c="drawArraysInstancedANGLE",h===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");h[c](s,a,o,l),t.update(o,s,l)}}function $h(r,e,t){let i;function n(M){if(M==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";M="mediump"}return M==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const o=n(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const l=s||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,c=r.getParameter(34930),u=r.getParameter(35660),d=r.getParameter(3379),p=r.getParameter(34076),f=r.getParameter(34921),m=r.getParameter(36347),g=r.getParameter(36348),_=r.getParameter(36349),v=u>0,y=s||e.has("OES_texture_float");return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:n,precision:a,logarithmicDepthBuffer:h,maxTextures:c,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:v&&y,maxSamples:s?r.getParameter(36183):0}}function ec(r){const e=this;let t=null,i=0,n=!1,s=!1;const a=new fi,o=new pt,l={value:null,needsUpdate:!1};function h(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(u,d,p,f){const m=u!==null?u.length:0;let g=null;if(m!==0){if(g=l.value,f!==!0||g===null){const _=p+4*m,v=d.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<_)&&(g=new Float32Array(_));for(let y=0,M=p;y!==m;++y,M+=4)a.copy(u[y]).applyMatrix4(v,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,p){const f=u.length!==0||d||i!==0||n;return n=d,t=c(u,p,0),i=u.length,f},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,h()},this.setState=function(u,d,p){const f=u.clippingPlanes,m=u.clipIntersection,g=u.clipShadows,_=r.get(u);if(!n||f===null||f.length===0||s&&!g)s?c(null):h();else{const v=s?0:i,y=4*v;let M=_.clippingState||null;l.value=M,M=c(f,d,y,p);for(let b=0;b!==y;++b)M[b]=t[b];_.clippingState=M,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}}}function tc(r){let e=new WeakMap;function t(n,s){return s===303?n.mapping=301:s===304&&(n.mapping=302),n}function i(n){const s=n.target;s.removeEventListener("dispose",i);const a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture&&n.isRenderTargetTexture===!1){const s=n.mapping;if(s===303||s===304){if(e.has(n))return t(e.get(n).texture,n.mapping);{const a=n.image;if(a&&a.height>0){const o=new ho(a.height/2);return o.fromEquirectangularTexture(r,n),e.set(n,o),n.addEventListener("dispose",i),t(o.texture,n.mapping)}return null}}}return n},dispose:function(){e=new WeakMap}}}class Br extends Nr{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const uo=[.125,.215,.35,.446,.526,.582],zn=20,Js=new Br,po=new ue;let Ks=null;const Ci=(1+Math.sqrt(5))/2,hn=1/Ci,mo=[new E(1,1,1),new E(-1,1,1),new E(1,1,-1),new E(-1,1,-1),new E(0,Ci,hn),new E(0,Ci,-hn),new E(hn,0,Ci),new E(-hn,0,Ci),new E(Ci,hn,0),new E(-Ci,hn,0)];class Qs{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){Ks=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=go(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ks),e.scissorTest=!1,Fr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ks=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,encoding:3e3,depthBuffer:!1},n=fo(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fo(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(a){const o=[],l=[],h=[];let c=a;const u=a-4+1+uo.length;for(let d=0;d<u;d++){const p=Math.pow(2,c);l.push(p);let f=1/p;d>a-4?f=uo[d-a+4-1]:d===0&&(f=0),h.push(f);const m=1/(p-2),g=-m,_=1+m,v=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,M=6,b=3,T=2,P=1,L=new Float32Array(b*M*y),B=new Float32Array(T*M*y),U=new Float32Array(P*M*y);for(let Y=0;Y<y;Y++){const K=Y%3*2/3-1,X=Y>2?0:-1,ie=[K,X,0,K+2/3,X,0,K+2/3,X+1,0,K,X,0,K+2/3,X+1,0,K,X+1,0];L.set(ie,b*M*Y),B.set(v,T*M*Y);const te=[Y,Y,Y,Y,Y,Y];U.set(te,P*M*Y)}const D=new Ee;D.setAttribute("position",new Be(L,b)),D.setAttribute("uv",new Be(B,T)),D.setAttribute("faceIndex",new Be(U,P)),o.push(D),c>4&&c--}return{lodPlanes:o,sizeLods:l,sigmas:h}}(s)),this._blurMaterial=function(a,o,l){const h=new Float32Array(zn),c=new E(0,1,0);return new Vt({name:"SphericalGaussianBlur",defines:{n:zn,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:h},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c}},vertexShader:$s(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}(s,e,t)}return n}_compileMaterial(e){const t=new at(this._lodPlanes[0],e);this._renderer.compile(t,Js)}_sceneToCubeUV(e,t,i,n){const s=new ot(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,c=l.toneMapping;l.getClearColor(po),l.toneMapping=0,l.autoClear=!1;const u=new ci({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),d=new at(new mi,u);let p=!1;const f=e.background;f?f.isColor&&(u.color.copy(f),e.background=null,p=!0):(u.color.copy(po),p=!0);for(let m=0;m<6;m++){const g=m%3;g===0?(s.up.set(0,a[m],0),s.lookAt(o[m],0,0)):g===1?(s.up.set(0,0,a[m]),s.lookAt(0,o[m],0)):(s.up.set(0,a[m],0),s.lookAt(0,0,o[m]));const _=this._cubeSize;Fr(n,g*_,m>2?_:0,_,_),l.setRenderTarget(n),p&&l.render(d,s),l.render(e,s)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=c,l.autoClear=h,e.background=f}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===301||e.mapping===302;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=vo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=go());const s=n?this._cubemapMaterial:this._equirectMaterial,a=new at(this._lodPlanes[0],s);s.uniforms.envMap.value=e;const o=this._cubeSize;Fr(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,Js)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=mo[(n-1)%mo.length];this._blur(e,n-1,n,s,a)}t.autoClear=i}_blur(e,t,i,n,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){const l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=new at(this._lodPlanes[n],h),u=h.uniforms,d=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/p,m=isFinite(s)?1+Math.floor(3*f):zn;m>zn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);const g=[];let _=0;for(let M=0;M<zn;++M){const b=M/f,T=Math.exp(-b*b/2);g.push(T),M===0?_+=T:M<m&&(_+=2*T)}for(let M=0;M<g.length;M++)g[M]=g[M]/_;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=g,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:v}=this;u.dTheta.value=p,u.mipInt.value=v-i;const y=this._sizeLods[n];Fr(t,3*y*(n>v-4?n-v+4:0),4*(this._cubeSize-y),3*y,2*y),l.setRenderTarget(t),l.render(c,Js)}}function fo(r,e,t){const i=new Rt(r,e,t);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fr(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function go(){return new Vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$s(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function vo(){return new Vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$s(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function $s(){return`

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
	`}function ic(r){let e=new WeakMap,t=null;function i(n){const s=n.target;s.removeEventListener("dispose",i);const a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture){const s=n.mapping,a=s===303||s===304,o=s===301||s===302;if(a||o){if(n.isRenderTargetTexture&&n.needsPMREMUpdate===!0){n.needsPMREMUpdate=!1;let l=e.get(n);return t===null&&(t=new Qs(r)),l=a?t.fromEquirectangular(n,l):t.fromCubemap(n,l),e.set(n,l),l.texture}if(e.has(n))return e.get(n).texture;{const l=n.image;if(a&&l&&l.height>0||o&&l&&function(h){let c=0;const u=6;for(let d=0;d<u;d++)h[d]!==void 0&&c++;return c===u}(l)){t===null&&(t=new Qs(r));const h=a?t.fromEquirectangular(n):t.fromCubemap(n);return e.set(n,h),n.addEventListener("dispose",i),h.texture}return null}}}return n},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function nc(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function rc(r,e,t,i){const n={},s=new WeakMap;function a(l){const h=l.target;h.index!==null&&e.remove(h.index);for(const u in h.attributes)e.remove(h.attributes[u]);h.removeEventListener("dispose",a),delete n[h.id];const c=s.get(h);c&&(e.remove(c),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(l){const h=[],c=l.index,u=l.attributes.position;let d=0;if(c!==null){const m=c.array;d=c.version;for(let g=0,_=m.length;g<_;g+=3){const v=m[g+0],y=m[g+1],M=m[g+2];h.push(v,y,y,M,M,v)}}else{const m=u.array;d=u.version;for(let g=0,_=m.length/3-1;g<_;g+=3){const v=g+0,y=g+1,M=g+2;h.push(v,y,y,M,M,v)}}const p=new(Ya(h)?Gs:Hs)(h,1);p.version=d;const f=s.get(l);f&&e.remove(f),s.set(l,p)}return{get:function(l,h){return n[h.id]===!0||(h.addEventListener("dispose",a),n[h.id]=!0,t.memory.geometries++),h},update:function(l){const h=l.attributes;for(const u in h)e.update(h[u],34962);const c=l.morphAttributes;for(const u in c){const d=c[u];for(let p=0,f=d.length;p<f;p++)e.update(d[p],34962)}},getWireframeAttribute:function(l){const h=s.get(l);if(h){const c=l.index;c!==null&&h.version<c.version&&o(l)}else o(l);return s.get(l)}}}function sc(r,e,t,i){const n=i.isWebGL2;let s,a,o;this.setMode=function(l){s=l},this.setIndex=function(l){a=l.type,o=l.bytesPerElement},this.render=function(l,h){r.drawElements(s,h,a,l*o),t.update(h,s,1)},this.renderInstances=function(l,h,c){if(c===0)return;let u,d;if(n)u=r,d="drawElementsInstanced";else if(u=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",u===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");u[d](s,h,a,l*o,c),t.update(h,s,c)}}function ac(r){const e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,n){switch(e.calls++,i){case 4:e.triangles+=n*(t/3);break;case 1:e.lines+=n*(t/2);break;case 3:e.lines+=n*(t-1);break;case 2:e.lines+=n*t;break;case 0:e.points+=n*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function oc(r,e){return r[0]-e[0]}function lc(r,e){return Math.abs(e[1])-Math.abs(r[1])}function hc(r,e,t){const i={},n=new Float32Array(8),s=new WeakMap,a=new ze,o=[];for(let l=0;l<8;l++)o[l]=[l,0];return{update:function(l,h,c,u){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,f=p!==void 0?p.length:0;let m=s.get(h);if(m===void 0||m.count!==f){let X=function(){Y.dispose(),s.delete(h),h.removeEventListener("dispose",X)};m!==void 0&&m.texture.dispose();const v=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let L=0;v===!0&&(L=1),y===!0&&(L=2),M===!0&&(L=3);let B=h.attributes.position.count*L,U=1;B>e.maxTextureSize&&(U=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const D=new Float32Array(B*U*4*f),Y=new Cn(D,B,U,f);Y.type=1015,Y.needsUpdate=!0;const K=4*L;for(let ie=0;ie<f;ie++){const te=b[ie],se=T[ie],ae=P[ie],H=B*U*4*ie;for(let k=0;k<te.count;k++){const Q=k*K;v===!0&&(a.fromBufferAttribute(te,k),D[H+Q+0]=a.x,D[H+Q+1]=a.y,D[H+Q+2]=a.z,D[H+Q+3]=0),y===!0&&(a.fromBufferAttribute(se,k),D[H+Q+4]=a.x,D[H+Q+5]=a.y,D[H+Q+6]=a.z,D[H+Q+7]=0),M===!0&&(a.fromBufferAttribute(ae,k),D[H+Q+8]=a.x,D[H+Q+9]=a.y,D[H+Q+10]=a.z,D[H+Q+11]=ae.itemSize===4?a.w:1)}}m={count:f,texture:Y,size:new J(B,U)},s.set(h,m),h.addEventListener("dispose",X)}let g=0;for(let v=0;v<d.length;v++)g+=d[v];const _=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(r,"morphTargetBaseInfluence",_),u.getUniforms().setValue(r,"morphTargetInfluences",d),u.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const p=d===void 0?0:d.length;let f=i[h.id];if(f===void 0||f.length!==p){f=[];for(let y=0;y<p;y++)f[y]=[y,0];i[h.id]=f}for(let y=0;y<p;y++){const M=f[y];M[0]=y,M[1]=d[y]}f.sort(lc);for(let y=0;y<8;y++)y<p&&f[y][1]?(o[y][0]=f[y][0],o[y][1]=f[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(oc);const m=h.morphAttributes.position,g=h.morphAttributes.normal;let _=0;for(let y=0;y<8;y++){const M=o[y],b=M[0],T=M[1];b!==Number.MAX_SAFE_INTEGER&&T?(m&&h.getAttribute("morphTarget"+y)!==m[b]&&h.setAttribute("morphTarget"+y,m[b]),g&&h.getAttribute("morphNormal"+y)!==g[b]&&h.setAttribute("morphNormal"+y,g[b]),n[y]=T,_+=T):(m&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),g&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),n[y]=0)}const v=h.morphTargetsRelative?1:1-_;u.getUniforms().setValue(r,"morphTargetBaseInfluence",v),u.getUniforms().setValue(r,"morphTargetInfluences",n)}}}}function cc(r,e,t,i){let n=new WeakMap;function s(a){const o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){const o=i.render.frame,l=a.geometry,h=e.get(a,l);return n.get(h)!==o&&(e.update(h),n.set(h,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),t.update(a.instanceMatrix,34962),a.instanceColor!==null&&t.update(a.instanceColor,34962)),h},dispose:function(){n=new WeakMap}}}const xo=new Je,_o=new Cn,yo=new vr,Mo=new Nn,bo=[],So=[],wo=new Float32Array(16),To=new Float32Array(9),Eo=new Float32Array(4);function cn(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let s=bo[n];if(s===void 0&&(s=new Float32Array(n),bo[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function tt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function it(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function kr(r,e){let t=So[e];t===void 0&&(t=new Int32Array(e),So[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function uc(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function dc(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;r.uniform2fv(this.addr,e),it(t,e)}}function pc(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tt(t,e))return;r.uniform3fv(this.addr,e),it(t,e)}}function mc(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;r.uniform4fv(this.addr,e),it(t,e)}}function fc(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(tt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),it(t,e)}else{if(tt(t,i))return;Eo.set(i),r.uniformMatrix2fv(this.addr,!1,Eo),it(t,i)}}function gc(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(tt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),it(t,e)}else{if(tt(t,i))return;To.set(i),r.uniformMatrix3fv(this.addr,!1,To),it(t,i)}}function vc(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(tt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),it(t,e)}else{if(tt(t,i))return;wo.set(i),r.uniformMatrix4fv(this.addr,!1,wo),it(t,i)}}function xc(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function _c(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;r.uniform2iv(this.addr,e),it(t,e)}}function yc(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tt(t,e))return;r.uniform3iv(this.addr,e),it(t,e)}}function Mc(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;r.uniform4iv(this.addr,e),it(t,e)}}function bc(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Sc(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;r.uniform2uiv(this.addr,e),it(t,e)}}function wc(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tt(t,e))return;r.uniform3uiv(this.addr,e),it(t,e)}}function Tc(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;r.uniform4uiv(this.addr,e),it(t,e)}}function Ec(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2D(e||xo,n)}function Ac(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||yo,n)}function Cc(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Mo,n)}function Rc(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||_o,n)}function Lc(r,e){r.uniform1fv(this.addr,e)}function Pc(r,e){const t=cn(e,this.size,2);r.uniform2fv(this.addr,t)}function Dc(r,e){const t=cn(e,this.size,3);r.uniform3fv(this.addr,t)}function Ic(r,e){const t=cn(e,this.size,4);r.uniform4fv(this.addr,t)}function Nc(r,e){const t=cn(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function zc(r,e){const t=cn(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Oc(r,e){const t=cn(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Uc(r,e){r.uniform1iv(this.addr,e)}function Bc(r,e){r.uniform2iv(this.addr,e)}function Fc(r,e){r.uniform3iv(this.addr,e)}function kc(r,e){r.uniform4iv(this.addr,e)}function Hc(r,e){r.uniform1uiv(this.addr,e)}function Gc(r,e){r.uniform2uiv(this.addr,e)}function Vc(r,e){r.uniform3uiv(this.addr,e)}function Wc(r,e){r.uniform4uiv(this.addr,e)}function jc(r,e,t){const i=this.cache,n=e.length,s=kr(t,n);tt(i,s)||(r.uniform1iv(this.addr,s),it(i,s));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||xo,s[a])}function qc(r,e,t){const i=this.cache,n=e.length,s=kr(t,n);tt(i,s)||(r.uniform1iv(this.addr,s),it(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||yo,s[a])}function Xc(r,e,t){const i=this.cache,n=e.length,s=kr(t,n);tt(i,s)||(r.uniform1iv(this.addr,s),it(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||Mo,s[a])}function Yc(r,e,t){const i=this.cache,n=e.length,s=kr(t,n);tt(i,s)||(r.uniform1iv(this.addr,s),it(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||_o,s[a])}class Zc{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=function(n){switch(n){case 5126:return uc;case 35664:return dc;case 35665:return pc;case 35666:return mc;case 35674:return fc;case 35675:return gc;case 35676:return vc;case 5124:case 35670:return xc;case 35667:case 35671:return _c;case 35668:case 35672:return yc;case 35669:case 35673:return Mc;case 5125:return bc;case 36294:return Sc;case 36295:return wc;case 36296:return Tc;case 35678:case 36198:case 36298:case 36306:case 35682:return Ec;case 35679:case 36299:case 36307:return Ac;case 35680:case 36300:case 36308:case 36293:return Cc;case 36289:case 36303:case 36311:case 36292:return Rc}}(t.type)}}class Jc{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=function(n){switch(n){case 5126:return Lc;case 35664:return Pc;case 35665:return Dc;case 35666:return Ic;case 35674:return Nc;case 35675:return zc;case 35676:return Oc;case 5124:case 35670:return Uc;case 35667:case 35671:return Bc;case 35668:case 35672:return Fc;case 35669:case 35673:return kc;case 5125:return Hc;case 36294:return Gc;case 36295:return Vc;case 36296:return Wc;case 35678:case 36198:case 36298:case 36306:case 35682:return jc;case 35679:case 36299:case 36307:return qc;case 35680:case 36300:case 36308:case 36293:return Xc;case 36289:case 36303:case 36311:case 36292:return Yc}}(t.type)}}class Kc{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let s=0,a=n.length;s!==a;++s){const o=n[s];o.setValue(e,t[o.id],i)}}}const ea=/(\w+)(\])?(\[|\.)?/g;function Ao(r,e){r.seq.push(e),r.map[e.id]=e}function Qc(r,e,t){const i=r.name,n=i.length;for(ea.lastIndex=0;;){const s=ea.exec(i),a=ea.lastIndex;let o=s[1];const l=s[2]==="]",h=s[3];if(l&&(o|=0),h===void 0||h==="["&&a+2===n){Ao(t,h===void 0?new Zc(o,r,e):new Jc(o,r,e));break}{let c=t.map[o];c===void 0&&(c=new Kc(o),Ao(t,c)),t=c}}}class Hr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let n=0;n<i;++n){const s=e.getActiveUniform(t,n);Qc(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,i,n){const s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,s=e.length;n!==s;++n){const a=e[n];a.id in t&&i.push(a)}return i}}function Co(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}let $c=0;function Ro(r,e,t){const i=r.getShaderParameter(e,35713),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+function(o,l){const h=o.split(`
`),c=[],u=Math.max(l-6,0),d=Math.min(l+6,h.length);for(let p=u;p<d;p++){const f=p+1;c.push(`${f===l?">":" "} ${f}: ${h[p]}`)}return c.join(`
`)}(r.getShaderSource(e),a)}return n}function eu(r,e){const t=function(i){switch(i){case 3e3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function tu(r,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="OptimizedCineon";break;case 4:t="ACESFilmic";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function On(r){return r!==""}function Lo(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Po(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iu=/^[ \t]*#include +<([\w\d./]+)>/gm;function ta(r){return r.replace(iu,nu)}function nu(r,e){const t=we[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ta(t)}const ru=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Do(r){return r.replace(ru,su)}function su(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Io(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function au(r,e,t,i){const n=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=function(L){let B="SHADOWMAP_TYPE_BASIC";return L.shadowMapType===1?B="SHADOWMAP_TYPE_PCF":L.shadowMapType===2?B="SHADOWMAP_TYPE_PCF_SOFT":L.shadowMapType===3&&(B="SHADOWMAP_TYPE_VSM"),B}(t),h=function(L){let B="ENVMAP_TYPE_CUBE";if(L.envMap)switch(L.envMapMode){case 301:case 302:B="ENVMAP_TYPE_CUBE";break;case 306:B="ENVMAP_TYPE_CUBE_UV"}return B}(t),c=function(L){let B="ENVMAP_MODE_REFLECTION";return L.envMap&&L.envMapMode===302&&(B="ENVMAP_MODE_REFRACTION"),B}(t),u=function(L){let B="ENVMAP_BLENDING_NONE";if(L.envMap)switch(L.combine){case 0:B="ENVMAP_BLENDING_MULTIPLY";break;case 1:B="ENVMAP_BLENDING_MIX";break;case 2:B="ENVMAP_BLENDING_ADD"}return B}(t),d=function(L){const B=L.envMapCubeUVHeight;if(B===null)return null;const U=Math.log2(B)-2,D=1/B;return{texelWidth:1/(3*Math.max(Math.pow(2,U),112)),texelHeight:D,maxMip:U}}(t),p=t.isWebGL2?"":function(L){return[L.extensionDerivatives||L.envMapCubeUVHeight||L.bumpMap||L.tangentSpaceNormalMap||L.clearcoatNormalMap||L.flatShading||L.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(L.extensionFragDepth||L.logarithmicDepthBuffer)&&L.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",L.extensionDrawBuffers&&L.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(L.extensionShaderTextureLOD||L.envMap||L.transmission)&&L.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(On).join(`
`)}(t),f=function(L){const B=[];for(const U in L){const D=L[U];D!==!1&&B.push("#define "+U+" "+D)}return B.join(`
`)}(s),m=n.createProgram();let g,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=[f].filter(On).join(`
`),g.length>0&&(g+=`
`),_=[p,f].filter(On).join(`
`),_.length>0&&(_+=`
`)):(g=[Io(t),"#define SHADER_NAME "+t.shaderName,f,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(On).join(`
`),_=[p,Io(t),"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?we.tonemapping_pars_fragment:"",t.toneMapping!==0?tu("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",we.encodings_pars_fragment,eu("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(On).join(`
`)),a=ta(a),a=Lo(a,t),a=Po(a,t),o=ta(o),o=Lo(o,t),o=Po(o,t),a=Do(a),o=Do(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,_=["#define varying in",t.glslVersion===bs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=v+_+o,M=Co(n,35633,v+g+a),b=Co(n,35632,y);if(n.attachShader(m,M),n.attachShader(m,b),t.index0AttributeName!==void 0?n.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m),r.debug.checkShaderErrors){const L=n.getProgramInfoLog(m).trim(),B=n.getShaderInfoLog(M).trim(),U=n.getShaderInfoLog(b).trim();let D=!0,Y=!0;if(n.getProgramParameter(m,35714)===!1){D=!1;const K=Ro(n,M,"vertex"),X=Ro(n,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,35715)+`

Program Info Log: `+L+`
`+K+`
`+X)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):B!==""&&U!==""||(Y=!1);Y&&(this.diagnostics={runnable:D,programLog:L,vertexShader:{log:B,prefix:g},fragmentShader:{log:U,prefix:_}})}let T,P;return n.deleteShader(M),n.deleteShader(b),this.getUniforms=function(){return T===void 0&&(T=new Hr(n,m)),T},this.getAttributes=function(){return P===void 0&&(P=function(L,B){const U={},D=L.getProgramParameter(B,35721);for(let Y=0;Y<D;Y++){const K=L.getActiveAttrib(B,Y),X=K.name;let ie=1;K.type===35674&&(ie=2),K.type===35675&&(ie=3),K.type===35676&&(ie=4),U[X]={type:K.type,location:L.getAttribLocation(B,X),locationSize:ie}}return U}(n,m)),P},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=$c++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=b,this}let ou=0;class lu{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new hu(e),t.set(e,i)),i}}class hu{constructor(e){this.id=ou++,this.code=e,this.usedTimes=0}}function cu(r,e,t,i,n,s,a){const o=new Sr,l=new lu,h=[],c=n.isWebGL2,u=n.logarithmicDepthBuffer,d=n.vertexTextures;let p=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};return{getParameters:function(m,g,_,v,y){const M=v.fog,b=y.geometry,T=m.isMeshStandardMaterial?v.environment:null,P=(m.isMeshStandardMaterial?t:e).get(m.envMap||T),L=P&&P.mapping===306?P.image.height:null,B=f[m.type];m.precision!==null&&(p=n.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));const U=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,D=U!==void 0?U.length:0;let Y,K,X,ie,te=0;if(b.morphAttributes.position!==void 0&&(te=1),b.morphAttributes.normal!==void 0&&(te=2),b.morphAttributes.color!==void 0&&(te=3),B){const Q=Ut[B];Y=Q.vertexShader,K=Q.fragmentShader}else Y=m.vertexShader,K=m.fragmentShader,l.update(m),X=l.getVertexShaderID(m),ie=l.getFragmentShaderID(m);const se=r.getRenderTarget(),ae=m.alphaTest>0,H=m.clearcoat>0,k=m.iridescence>0;return{isWebGL2:c,shaderID:B,shaderName:m.type,vertexShader:Y,fragmentShader:K,defines:m.defines,customVertexShaderID:X,customFragmentShaderID:ie,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,instancing:y.isInstancedMesh===!0,instancingColor:y.isInstancedMesh===!0&&y.instanceColor!==null,supportsVertexTextures:d,outputEncoding:se===null?r.outputEncoding:se.isXRRenderTarget===!0?se.texture.encoding:3e3,map:!!m.map,matcap:!!m.matcap,envMap:!!P,envMapMode:P&&P.mapping,envMapCubeUVHeight:L,lightMap:!!m.lightMap,aoMap:!!m.aoMap,emissiveMap:!!m.emissiveMap,bumpMap:!!m.bumpMap,normalMap:!!m.normalMap,objectSpaceNormalMap:m.normalMapType===1,tangentSpaceNormalMap:m.normalMapType===0,decodeVideoTexture:!!m.map&&m.map.isVideoTexture===!0&&m.map.encoding===3001,clearcoat:H,clearcoatMap:H&&!!m.clearcoatMap,clearcoatRoughnessMap:H&&!!m.clearcoatRoughnessMap,clearcoatNormalMap:H&&!!m.clearcoatNormalMap,iridescence:k,iridescenceMap:k&&!!m.iridescenceMap,iridescenceThicknessMap:k&&!!m.iridescenceThicknessMap,displacementMap:!!m.displacementMap,roughnessMap:!!m.roughnessMap,metalnessMap:!!m.metalnessMap,specularMap:!!m.specularMap,specularIntensityMap:!!m.specularIntensityMap,specularColorMap:!!m.specularColorMap,opaque:m.transparent===!1&&m.blending===1,alphaMap:!!m.alphaMap,alphaTest:ae,gradientMap:!!m.gradientMap,sheen:m.sheen>0,sheenColorMap:!!m.sheenColorMap,sheenRoughnessMap:!!m.sheenRoughnessMap,transmission:m.transmission>0,transmissionMap:!!m.transmissionMap,thicknessMap:!!m.thicknessMap,combine:m.combine,vertexTangents:!!m.normalMap&&!!b.attributes.tangent,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,vertexUvs:!!(m.map||m.bumpMap||m.normalMap||m.specularMap||m.alphaMap||m.emissiveMap||m.roughnessMap||m.metalnessMap||m.clearcoatMap||m.clearcoatRoughnessMap||m.clearcoatNormalMap||m.iridescenceMap||m.iridescenceThicknessMap||m.displacementMap||m.transmissionMap||m.thicknessMap||m.specularIntensityMap||m.specularColorMap||m.sheenColorMap||m.sheenRoughnessMap),uvsVertexOnly:!(m.map||m.bumpMap||m.normalMap||m.specularMap||m.alphaMap||m.emissiveMap||m.roughnessMap||m.metalnessMap||m.clearcoatNormalMap||m.iridescenceMap||m.iridescenceThicknessMap||m.transmission>0||m.transmissionMap||m.thicknessMap||m.specularIntensityMap||m.specularColorMap||m.sheen>0||m.sheenColorMap||m.sheenRoughnessMap||!m.displacementMap),fog:!!M,useFog:m.fog===!0,fogExp2:M&&M.isFogExp2,flatShading:!!m.flatShading,sizeAttenuation:m.sizeAttenuation,logarithmicDepthBuffer:u,skinning:y.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:te,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&_.length>0,shadowMapType:r.shadowMap.type,toneMapping:m.toneMapped?r.toneMapping:0,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===1,useDepthPacking:!!m.depthPacking,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionDerivatives:m.extensions&&m.extensions.derivatives,extensionFragDepth:m.extensions&&m.extensions.fragDepth,extensionDrawBuffers:m.extensions&&m.extensions.drawBuffers,extensionShaderTextureLOD:m.extensions&&m.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:m.customProgramCacheKey()}},getProgramCacheKey:function(m){const g=[];if(m.shaderID?g.push(m.shaderID):(g.push(m.customVertexShaderID),g.push(m.customFragmentShaderID)),m.defines!==void 0)for(const _ in m.defines)g.push(_),g.push(m.defines[_]);return m.isRawShaderMaterial===!1&&(function(_,v){_.push(v.precision),_.push(v.outputEncoding),_.push(v.envMapMode),_.push(v.envMapCubeUVHeight),_.push(v.combine),_.push(v.vertexUvs),_.push(v.fogExp2),_.push(v.sizeAttenuation),_.push(v.morphTargetsCount),_.push(v.morphAttributeCount),_.push(v.numDirLights),_.push(v.numPointLights),_.push(v.numSpotLights),_.push(v.numSpotLightMaps),_.push(v.numHemiLights),_.push(v.numRectAreaLights),_.push(v.numDirLightShadows),_.push(v.numPointLightShadows),_.push(v.numSpotLightShadows),_.push(v.numSpotLightShadowsWithMaps),_.push(v.shadowMapType),_.push(v.toneMapping),_.push(v.numClippingPlanes),_.push(v.numClipIntersection),_.push(v.depthPacking)}(g,m),function(_,v){o.disableAll(),v.isWebGL2&&o.enable(0),v.supportsVertexTextures&&o.enable(1),v.instancing&&o.enable(2),v.instancingColor&&o.enable(3),v.map&&o.enable(4),v.matcap&&o.enable(5),v.envMap&&o.enable(6),v.lightMap&&o.enable(7),v.aoMap&&o.enable(8),v.emissiveMap&&o.enable(9),v.bumpMap&&o.enable(10),v.normalMap&&o.enable(11),v.objectSpaceNormalMap&&o.enable(12),v.tangentSpaceNormalMap&&o.enable(13),v.clearcoat&&o.enable(14),v.clearcoatMap&&o.enable(15),v.clearcoatRoughnessMap&&o.enable(16),v.clearcoatNormalMap&&o.enable(17),v.iridescence&&o.enable(18),v.iridescenceMap&&o.enable(19),v.iridescenceThicknessMap&&o.enable(20),v.displacementMap&&o.enable(21),v.specularMap&&o.enable(22),v.roughnessMap&&o.enable(23),v.metalnessMap&&o.enable(24),v.gradientMap&&o.enable(25),v.alphaMap&&o.enable(26),v.alphaTest&&o.enable(27),v.vertexColors&&o.enable(28),v.vertexAlphas&&o.enable(29),v.vertexUvs&&o.enable(30),v.vertexTangents&&o.enable(31),v.uvsVertexOnly&&o.enable(32),_.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.skinning&&o.enable(4),v.morphTargets&&o.enable(5),v.morphNormals&&o.enable(6),v.morphColors&&o.enable(7),v.premultipliedAlpha&&o.enable(8),v.shadowMapEnabled&&o.enable(9),v.physicallyCorrectLights&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.specularIntensityMap&&o.enable(15),v.specularColorMap&&o.enable(16),v.transmission&&o.enable(17),v.transmissionMap&&o.enable(18),v.thicknessMap&&o.enable(19),v.sheen&&o.enable(20),v.sheenColorMap&&o.enable(21),v.sheenRoughnessMap&&o.enable(22),v.decodeVideoTexture&&o.enable(23),v.opaque&&o.enable(24),_.push(o.mask)}(g,m),g.push(r.outputEncoding)),g.push(m.customProgramCacheKey),g.join()},getUniforms:function(m){const g=f[m.type];let _;if(g){const v=Ut[g];_=oo.clone(v.uniforms)}else _=m.uniforms;return _},acquireProgram:function(m,g){let _;for(let v=0,y=h.length;v<y;v++){const M=h[v];if(M.cacheKey===g){_=M,++_.usedTimes;break}}return _===void 0&&(_=new au(r,g,m,s),h.push(_)),_},releaseProgram:function(m){if(--m.usedTimes==0){const g=h.indexOf(m);h[g]=h[h.length-1],h.pop(),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:h,dispose:function(){l.dispose()}}}function uu(){let r=new WeakMap;return{get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,i){r.get(e)[t]=i},dispose:function(){r=new WeakMap}}}function du(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function No(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function zo(){const r=[];let e=0;const t=[],i=[],n=[];function s(a,o,l,h,c,u){let d=r[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:h,renderOrder:a.renderOrder,z:c,group:u},r[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=h,d.renderOrder=a.renderOrder,d.z=c,d.group=u),e++,d}return{opaque:t,transmissive:i,transparent:n,init:function(){e=0,t.length=0,i.length=0,n.length=0},push:function(a,o,l,h,c,u){const d=s(a,o,l,h,c,u);l.transmission>0?i.push(d):l.transparent===!0?n.push(d):t.push(d)},unshift:function(a,o,l,h,c,u){const d=s(a,o,l,h,c,u);l.transmission>0?i.unshift(d):l.transparent===!0?n.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=r.length;a<o;a++){const l=r[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||du),i.length>1&&i.sort(o||No),n.length>1&&n.sort(o||No)}}}function pu(){let r=new WeakMap;return{get:function(e,t){const i=r.get(e);let n;return i===void 0?(n=new zo,r.set(e,[n])):t>=i.length?(n=new zo,i.push(n)):n=i[t],n},dispose:function(){r=new WeakMap}}}function mu(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new ue};break;case"SpotLight":t={position:new E,direction:new E,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":t={color:new ue,position:new E,halfWidth:new E,halfHeight:new E}}return r[e.id]=t,t}}}let fu=0;function gu(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function vu(r,e){const t=new mu,i=function(){const l={};return{get:function(h){if(l[h.id]!==void 0)return l[h.id];let c;switch(h.type){case"DirectionalLight":case"SpotLight":c={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":c={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3}}return l[h.id]=c,c}}}(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let l=0;l<9;l++)n.probe.push(new E);const s=new E,a=new be,o=new be;return{setup:function(l,h){let c=0,u=0,d=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let p=0,f=0,m=0,g=0,_=0,v=0,y=0,M=0,b=0,T=0;l.sort(gu);const P=h!==!0?Math.PI:1;for(let B=0,U=l.length;B<U;B++){const D=l[B],Y=D.color,K=D.intensity,X=D.distance,ie=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)c+=Y.r*K*P,u+=Y.g*K*P,d+=Y.b*K*P;else if(D.isLightProbe)for(let te=0;te<9;te++)n.probe[te].addScaledVector(D.sh.coefficients[te],K);else if(D.isDirectionalLight){const te=t.get(D);if(te.color.copy(D.color).multiplyScalar(D.intensity*P),D.castShadow){const se=D.shadow,ae=i.get(D);ae.shadowBias=se.bias,ae.shadowNormalBias=se.normalBias,ae.shadowRadius=se.radius,ae.shadowMapSize=se.mapSize,n.directionalShadow[p]=ae,n.directionalShadowMap[p]=ie,n.directionalShadowMatrix[p]=D.shadow.matrix,v++}n.directional[p]=te,p++}else if(D.isSpotLight){const te=t.get(D);te.position.setFromMatrixPosition(D.matrixWorld),te.color.copy(Y).multiplyScalar(K*P),te.distance=X,te.coneCos=Math.cos(D.angle),te.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),te.decay=D.decay,n.spot[m]=te;const se=D.shadow;if(D.map&&(n.spotLightMap[b]=D.map,b++,se.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[m]=se.matrix,D.castShadow){const ae=i.get(D);ae.shadowBias=se.bias,ae.shadowNormalBias=se.normalBias,ae.shadowRadius=se.radius,ae.shadowMapSize=se.mapSize,n.spotShadow[m]=ae,n.spotShadowMap[m]=ie,M++}m++}else if(D.isRectAreaLight){const te=t.get(D);te.color.copy(Y).multiplyScalar(K),te.halfWidth.set(.5*D.width,0,0),te.halfHeight.set(0,.5*D.height,0),n.rectArea[g]=te,g++}else if(D.isPointLight){const te=t.get(D);if(te.color.copy(D.color).multiplyScalar(D.intensity*P),te.distance=D.distance,te.decay=D.decay,D.castShadow){const se=D.shadow,ae=i.get(D);ae.shadowBias=se.bias,ae.shadowNormalBias=se.normalBias,ae.shadowRadius=se.radius,ae.shadowMapSize=se.mapSize,ae.shadowCameraNear=se.camera.near,ae.shadowCameraFar=se.camera.far,n.pointShadow[f]=ae,n.pointShadowMap[f]=ie,n.pointShadowMatrix[f]=D.shadow.matrix,y++}n.point[f]=te,f++}else if(D.isHemisphereLight){const te=t.get(D);te.skyColor.copy(D.color).multiplyScalar(K*P),te.groundColor.copy(D.groundColor).multiplyScalar(K*P),n.hemi[_]=te,_++}}g>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=c,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;L.directionalLength===p&&L.pointLength===f&&L.spotLength===m&&L.rectAreaLength===g&&L.hemiLength===_&&L.numDirectionalShadows===v&&L.numPointShadows===y&&L.numSpotShadows===M&&L.numSpotMaps===b||(n.directional.length=p,n.spot.length=m,n.rectArea.length=g,n.point.length=f,n.hemi.length=_,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+b-T,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=T,L.directionalLength=p,L.pointLength=f,L.spotLength=m,L.rectAreaLength=g,L.hemiLength=_,L.numDirectionalShadows=v,L.numPointShadows=y,L.numSpotShadows=M,L.numSpotMaps=b,n.version=fu++)},setupView:function(l,h){let c=0,u=0,d=0,p=0,f=0;const m=h.matrixWorldInverse;for(let g=0,_=l.length;g<_;g++){const v=l[g];if(v.isDirectionalLight){const y=n.directional[c];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),c++}else if(v.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(v.isRectAreaLight){const y=n.rectArea[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),o.identity(),a.copy(v.matrixWorld),a.premultiply(m),o.extractRotation(a),y.halfWidth.set(.5*v.width,0,0),y.halfHeight.set(0,.5*v.height,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){const y=n.point[u];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),u++}else if(v.isHemisphereLight){const y=n.hemi[f];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),f++}}},state:n}}function Oo(r,e){const t=new vu(r,e),i=[],n=[];return{init:function(){i.length=0,n.length=0},state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:function(s){t.setup(i,s)},setupLightsView:function(s){t.setupView(i,s)},pushLight:function(s){i.push(s)},pushShadow:function(s){n.push(s)}}}function xu(r,e){let t=new WeakMap;return{get:function(i,n=0){const s=t.get(i);let a;return s===void 0?(a=new Oo(r,e),t.set(i,[a])):n>=s.length?(a=new Oo(r,e),s.push(a)):a=s[n],a},dispose:function(){t=new WeakMap}}}class ia extends ut{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class na extends ut{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new E,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function _u(r,e,t){let i=new Or;const n=new J,s=new J,a=new ze,o=new ia({depthPacking:3201}),l=new na,h={},c=t.maxTextureSize,u={0:1,1:0,2:2},d=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const f=new Ee;f.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new at(f,d),g=this;function _(M,b){const T=e.update(m);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Rt(n.x,n.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(b,null,T,d,m,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(b,null,T,p,m,null)}function v(M,b,T,P,L,B){let U=null;const D=T.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(U=D!==void 0?D:T.isPointLight===!0?l:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const Y=U.uuid,K=b.uuid;let X=h[Y];X===void 0&&(X={},h[Y]=X);let ie=X[K];ie===void 0&&(ie=U.clone(),X[K]=ie),U=ie}return U.visible=b.visible,U.wireframe=b.wireframe,U.side=B===3?b.shadowSide!==null?b.shadowSide:b.side:b.shadowSide!==null?b.shadowSide:u[b.side],U.alphaMap=b.alphaMap,U.alphaTest=b.alphaTest,U.map=b.map,U.clipShadows=b.clipShadows,U.clippingPlanes=b.clippingPlanes,U.clipIntersection=b.clipIntersection,U.displacementMap=b.displacementMap,U.displacementScale=b.displacementScale,U.displacementBias=b.displacementBias,U.wireframeLinewidth=b.wireframeLinewidth,U.linewidth=b.linewidth,T.isPointLight===!0&&U.isMeshDistanceMaterial===!0&&(U.referencePosition.setFromMatrixPosition(T.matrixWorld),U.nearDistance=P,U.farDistance=L),U}function y(M,b,T,P,L){if(M.visible===!1)return;if(M.layers.test(b.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&L===3)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,M.matrixWorld);const U=e.update(M),D=M.material;if(Array.isArray(D)){const Y=U.groups;for(let K=0,X=Y.length;K<X;K++){const ie=Y[K],te=D[ie.materialIndex];if(te&&te.visible){const se=v(M,te,P,T.near,T.far,L);r.renderBufferDirect(T,null,U,se,M,ie)}}}else if(D.visible){const Y=v(M,D,P,T.near,T.far,L);r.renderBufferDirect(T,null,U,Y,M,null)}}const B=M.children;for(let U=0,D=B.length;U<D;U++)y(B[U],b,T,P,L)}this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1,this.render=function(M,b,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;const P=r.getRenderTarget(),L=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),U=r.state;U.setBlending(0),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);for(let D=0,Y=M.length;D<Y;D++){const K=M[D],X=K.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;n.copy(X.mapSize);const ie=X.getFrameExtents();if(n.multiply(ie),s.copy(X.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(s.x=Math.floor(c/ie.x),n.x=s.x*ie.x,X.mapSize.x=s.x),n.y>c&&(s.y=Math.floor(c/ie.y),n.y=s.y*ie.y,X.mapSize.y=s.y)),X.map===null){const se=this.type!==3?{minFilter:1003,magFilter:1003}:{};X.map=new Rt(n.x,n.y,se),X.map.texture.name=K.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();const te=X.getViewportCount();for(let se=0;se<te;se++){const ae=X.getViewport(se);a.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),U.viewport(a),X.updateMatrices(K,se),i=X.getFrustum(),y(b,T,X.camera,K,this.type)}X.isPointLightShadow!==!0&&this.type===3&&_(X,T),X.needsUpdate=!1}g.needsUpdate=!1,r.setRenderTarget(P,L,B)}}function yu(r,e,t){const i=t.isWebGL2,n=new function(){let S=!1;const N=new ze;let I=null;const W=new ze(0,0,0,0);return{setMask:function(V){I===V||S||(r.colorMask(V,V,V,V),I=V)},setLocked:function(V){S=V},setClear:function(V,j,he,fe,ve){ve===!0&&(V*=fe,j*=fe,he*=fe),N.set(V,j,he,fe),W.equals(N)===!1&&(r.clearColor(V,j,he,fe),W.copy(N))},reset:function(){S=!1,I=null,W.set(-1,0,0,0)}}},s=new function(){let S=!1,N=null,I=null,W=null;return{setTest:function(V){V?pe(2929):Re(2929)},setMask:function(V){N===V||S||(r.depthMask(V),N=V)},setFunc:function(V){if(I!==V){switch(V){case 0:r.depthFunc(512);break;case 1:r.depthFunc(519);break;case 2:r.depthFunc(513);break;case 3:default:r.depthFunc(515);break;case 4:r.depthFunc(514);break;case 5:r.depthFunc(518);break;case 6:r.depthFunc(516);break;case 7:r.depthFunc(517)}I=V}},setLocked:function(V){S=V},setClear:function(V){W!==V&&(r.clearDepth(V),W=V)},reset:function(){S=!1,N=null,I=null,W=null}}},a=new function(){let S=!1,N=null,I=null,W=null,V=null,j=null,he=null,fe=null,ve=null;return{setTest:function(ce){S||(ce?pe(2960):Re(2960))},setMask:function(ce){N===ce||S||(r.stencilMask(ce),N=ce)},setFunc:function(ce,Me,Se){I===ce&&W===Me&&V===Se||(r.stencilFunc(ce,Me,Se),I=ce,W=Me,V=Se)},setOp:function(ce,Me,Se){j===ce&&he===Me&&fe===Se||(r.stencilOp(ce,Me,Se),j=ce,he=Me,fe=Se)},setLocked:function(ce){S=ce},setClear:function(ce){ve!==ce&&(r.clearStencil(ce),ve=ce)},reset:function(){S=!1,N=null,I=null,W=null,V=null,j=null,he=null,fe=null,ve=null}}},o=new WeakMap,l=new WeakMap;let h={},c={},u=new WeakMap,d=[],p=null,f=!1,m=null,g=null,_=null,v=null,y=null,M=null,b=null,T=!1,P=null,L=null,B=null,U=null,D=null;const Y=r.getParameter(35661);let K=!1,X=0;const ie=r.getParameter(7938);ie.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(ie)[1]),K=X>=1):ie.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),K=X>=2);let te=null,se={};const ae=r.getParameter(3088),H=r.getParameter(2978),k=new ze().fromArray(ae),Q=new ze().fromArray(H);function ne(S,N,I){const W=new Uint8Array(4),V=r.createTexture();r.bindTexture(S,V),r.texParameteri(S,10241,9728),r.texParameteri(S,10240,9728);for(let j=0;j<I;j++)r.texImage2D(N+j,0,6408,1,1,0,6408,5121,W);return V}const le={};function pe(S){h[S]!==!0&&(r.enable(S),h[S]=!0)}function Re(S){h[S]!==!1&&(r.disable(S),h[S]=!1)}le[3553]=ne(3553,3553,1),le[34067]=ne(34067,34069,6),n.setClear(0,0,0,1),s.setClear(1),a.setClear(0),pe(2929),s.setFunc(3),z(!1),R(1),pe(2884),F(0);const A={100:32774,101:32778,102:32779};if(i)A[103]=32775,A[104]=32776;else{const S=e.get("EXT_blend_minmax");S!==null&&(A[103]=S.MIN_EXT,A[104]=S.MAX_EXT)}const w={200:0,201:1,202:768,204:770,210:776,208:774,206:772,203:769,205:771,209:775,207:773};function F(S,N,I,W,V,j,he,fe){if(S!==0){if(f===!1&&(pe(3042),f=!0),S===5)V=V||N,j=j||I,he=he||W,N===g&&V===y||(r.blendEquationSeparate(A[N],A[V]),g=N,y=V),I===_&&W===v&&j===M&&he===b||(r.blendFuncSeparate(w[I],w[W],w[j],w[he]),_=I,v=W,M=j,b=he),m=S,T=!1;else if(S!==m||fe!==T){if(g===100&&y===100||(r.blendEquation(32774),g=100,y=100),fe)switch(S){case 1:r.blendFuncSeparate(1,771,1,771);break;case 2:r.blendFunc(1,1);break;case 3:r.blendFuncSeparate(0,769,0,1);break;case 4:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}else switch(S){case 1:r.blendFuncSeparate(770,771,1,771);break;case 2:r.blendFunc(770,1);break;case 3:r.blendFuncSeparate(0,769,0,1);break;case 4:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}_=null,v=null,M=null,b=null,m=S,T=fe}}else f===!0&&(Re(3042),f=!1)}function z(S){P!==S&&(S?r.frontFace(2304):r.frontFace(2305),P=S)}function R(S){S!==0?(pe(2884),S!==L&&(S===1?r.cullFace(1029):S===2?r.cullFace(1028):r.cullFace(1032))):Re(2884),L=S}function O(S,N,I){S?(pe(32823),U===N&&D===I||(r.polygonOffset(N,I),U=N,D=I)):Re(32823)}return{buffers:{color:n,depth:s,stencil:a},enable:pe,disable:Re,bindFramebuffer:function(S,N){return c[S]!==N&&(r.bindFramebuffer(S,N),c[S]=N,i&&(S===36009&&(c[36160]=N),S===36160&&(c[36009]=N)),!0)},drawBuffers:function(S,N){let I=d,W=!1;if(S)if(I=u.get(N),I===void 0&&(I=[],u.set(N,I)),S.isWebGLMultipleRenderTargets){const V=S.texture;if(I.length!==V.length||I[0]!==36064){for(let j=0,he=V.length;j<he;j++)I[j]=36064+j;I.length=V.length,W=!0}}else I[0]!==36064&&(I[0]=36064,W=!0);else I[0]!==1029&&(I[0]=1029,W=!0);W&&(t.isWebGL2?r.drawBuffers(I):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(I))},useProgram:function(S){return p!==S&&(r.useProgram(S),p=S,!0)},setBlending:F,setMaterial:function(S,N){S.side===2?Re(2884):pe(2884);let I=S.side===1;N&&(I=!I),z(I),S.blending===1&&S.transparent===!1?F(0):F(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.premultipliedAlpha),s.setFunc(S.depthFunc),s.setTest(S.depthTest),s.setMask(S.depthWrite),n.setMask(S.colorWrite);const W=S.stencilWrite;a.setTest(W),W&&(a.setMask(S.stencilWriteMask),a.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),a.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),O(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?pe(32926):Re(32926)},setFlipSided:z,setCullFace:R,setLineWidth:function(S){S!==B&&(K&&r.lineWidth(S),B=S)},setPolygonOffset:O,setScissorTest:function(S){S?pe(3089):Re(3089)},activeTexture:function(S){S===void 0&&(S=33984+Y-1),te!==S&&(r.activeTexture(S),te=S)},bindTexture:function(S,N,I){I===void 0&&(I=te===null?33984+Y-1:te);let W=se[I];W===void 0&&(W={type:void 0,texture:void 0},se[I]=W),W.type===S&&W.texture===N||(te!==I&&(r.activeTexture(I),te=I),r.bindTexture(S,N||le[S]),W.type=S,W.texture=N)},unbindTexture:function(){const S=se[te];S!==void 0&&S.type!==void 0&&(r.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},updateUBOMapping:function(S,N){let I=l.get(N);I===void 0&&(I=new WeakMap,l.set(N,I));let W=I.get(S);W===void 0&&(W=r.getUniformBlockIndex(N,S.name),I.set(S,W))},uniformBlockBinding:function(S,N){const I=l.get(N).get(S);o.get(S)!==I&&(r.uniformBlockBinding(N,I,S.__bindingPointIndex),o.set(S,I))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},scissor:function(S){k.equals(S)===!1&&(r.scissor(S.x,S.y,S.z,S.w),k.copy(S))},viewport:function(S){Q.equals(S)===!1&&(r.viewport(S.x,S.y,S.z,S.w),Q.copy(S))},reset:function(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),i===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},te=null,se={},c={},u=new WeakMap,d=[],p=null,f=!1,m=null,g=null,_=null,v=null,y=null,M=null,b=null,T=!1,P=null,L=null,B=null,U=null,D=null,k.set(0,0,r.canvas.width,r.canvas.height),Q.set(0,0,r.canvas.width,r.canvas.height),n.reset(),s.reset(),a.reset()}}}function Mu(r,e,t,i,n,s,a){const o=n.isWebGL2,l=n.maxTextures,h=n.maxCubemapSize,c=n.maxTextureSize,u=n.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let m;const g=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,w){return _?new OffscreenCanvas(A,w):An("canvas")}function y(A,w,F,z){let R=1;if((A.width>z||A.height>z)&&(R=z/Math.max(A.width,A.height)),R<1||w===!0){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const O=w?pr:Math.floor,S=O(R*A.width),N=O(R*A.height);m===void 0&&(m=v(S,N));const I=F?v(S,N):m;return I.width=S,I.height=N,I.getContext("2d").drawImage(A,0,0,S,N),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+S+"x"+N+")."),I}return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A}return A}function M(A){return ws(A.width)&&ws(A.height)}function b(A,w){return A.generateMipmaps&&w&&A.minFilter!==1003&&A.minFilter!==1006}function T(A){r.generateMipmap(A)}function P(A,w,F,z,R=!1){if(o===!1)return w;if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let O=w;return w===6403&&(F===5126&&(O=33326),F===5131&&(O=33325),F===5121&&(O=33321)),w===33319&&(F===5126&&(O=33328),F===5131&&(O=33327),F===5121&&(O=33323)),w===6408&&(F===5126&&(O=34836),F===5131&&(O=34842),F===5121&&(O=z===3001&&R===!1?35907:32856),F===32819&&(O=32854),F===32820&&(O=32855)),O!==33325&&O!==33326&&O!==33327&&O!==33328&&O!==34842&&O!==34836||e.get("EXT_color_buffer_float"),O}function L(A,w,F){return b(A,F)===!0||A.isFramebufferTexture&&A.minFilter!==1003&&A.minFilter!==1006?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function B(A){return A===1003||A===1004||A===1005?9728:9729}function U(A){const w=A.target;w.removeEventListener("dispose",U),function(F){const z=i.get(F);if(z.__webglInit===void 0)return;const R=F.source,O=g.get(R);if(O){const S=O[z.__cacheKey];S.usedTimes--,S.usedTimes===0&&Y(F),Object.keys(O).length===0&&g.delete(R)}i.remove(F)}(w),w.isVideoTexture&&f.delete(w)}function D(A){const w=A.target;w.removeEventListener("dispose",D),function(F){const z=F.texture,R=i.get(F),O=i.get(z);if(O.__webglTexture!==void 0&&(r.deleteTexture(O.__webglTexture),a.memory.textures--),F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let S=0;S<6;S++)r.deleteFramebuffer(R.__webglFramebuffer[S]),R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer[S]);else{if(r.deleteFramebuffer(R.__webglFramebuffer),R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&r.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let S=0;S<R.__webglColorRenderbuffer.length;S++)R.__webglColorRenderbuffer[S]&&r.deleteRenderbuffer(R.__webglColorRenderbuffer[S]);R.__webglDepthRenderbuffer&&r.deleteRenderbuffer(R.__webglDepthRenderbuffer)}if(F.isWebGLMultipleRenderTargets)for(let S=0,N=z.length;S<N;S++){const I=i.get(z[S]);I.__webglTexture&&(r.deleteTexture(I.__webglTexture),a.memory.textures--),i.remove(z[S])}i.remove(z),i.remove(F)}(w)}function Y(A){const w=i.get(A);r.deleteTexture(w.__webglTexture);const F=A.source;delete g.get(F)[w.__cacheKey],a.memory.textures--}let K=0;function X(A,w){const F=i.get(A);if(A.isVideoTexture&&function(z){const R=a.render.frame;f.get(z)!==R&&(f.set(z,R),z.update())}(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){const z=A.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(z.complete!==!1)return void H(F,A,w);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(3553,F.__webglTexture,33984+w)}const ie={1e3:10497,1001:33071,1002:33648},te={1003:9728,1004:9984,1005:9986,1006:9729,1007:9985,1008:9987};function se(A,w,F){if(F?(r.texParameteri(A,10242,ie[w.wrapS]),r.texParameteri(A,10243,ie[w.wrapT]),A!==32879&&A!==35866||r.texParameteri(A,32882,ie[w.wrapR]),r.texParameteri(A,10240,te[w.magFilter]),r.texParameteri(A,10241,te[w.minFilter])):(r.texParameteri(A,10242,33071),r.texParameteri(A,10243,33071),A!==32879&&A!==35866||r.texParameteri(A,32882,33071),w.wrapS===1001&&w.wrapT===1001||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(A,10240,B(w.magFilter)),r.texParameteri(A,10241,B(w.minFilter)),w.minFilter!==1003&&w.minFilter!==1006&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");if(w.type===1015&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===1016&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(r.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,n.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function ae(A,w){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",U));const z=w.source;let R=g.get(z);R===void 0&&(R={},g.set(z,R));const O=function(S){const N=[];return N.push(S.wrapS),N.push(S.wrapT),N.push(S.wrapR||0),N.push(S.magFilter),N.push(S.minFilter),N.push(S.anisotropy),N.push(S.internalFormat),N.push(S.format),N.push(S.type),N.push(S.generateMipmaps),N.push(S.premultiplyAlpha),N.push(S.flipY),N.push(S.unpackAlignment),N.push(S.encoding),N.join()}(w);if(O!==A.__cacheKey){R[O]===void 0&&(R[O]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,F=!0),R[O].usedTimes++;const S=R[A.__cacheKey];S!==void 0&&(R[A.__cacheKey].usedTimes--,S.usedTimes===0&&Y(w)),A.__cacheKey=O,A.__webglTexture=R[O].texture}return F}function H(A,w,F){let z=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(z=35866),w.isData3DTexture&&(z=32879);const R=ae(A,w),O=w.source;t.bindTexture(z,A.__webglTexture,33984+F);const S=i.get(O);if(O.version!==S.__version||R===!0){t.activeTexture(33984+F),r.pixelStorei(37440,w.flipY),r.pixelStorei(37441,w.premultiplyAlpha),r.pixelStorei(3317,w.unpackAlignment),r.pixelStorei(37443,0);const N=function(_e){return!o&&(_e.wrapS!==1001||_e.wrapT!==1001||_e.minFilter!==1003&&_e.minFilter!==1006)}(w)&&M(w.image)===!1;let I=y(w.image,N,!1,c);I=Re(w,I);const W=M(I)||o,V=s.convert(w.format,w.encoding);let j,he=s.convert(w.type),fe=P(w.internalFormat,V,he,w.encoding,w.isVideoTexture);se(z,w,W);const ve=w.mipmaps,ce=o&&w.isVideoTexture!==!0,Me=S.__version===void 0||R===!0,Se=L(w,I,W);if(w.isDepthTexture)fe=6402,o?fe=w.type===1015?36012:w.type===1014?33190:w.type===1020?35056:33189:w.type===1015&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===1026&&fe===6402&&w.type!==1012&&w.type!==1014&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=1014,he=s.convert(w.type)),w.format===1027&&fe===6402&&(fe=34041,w.type!==1020&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=1020,he=s.convert(w.type))),Me&&(ce?t.texStorage2D(3553,1,fe,I.width,I.height):t.texImage2D(3553,0,fe,I.width,I.height,0,V,he,null));else if(w.isDataTexture)if(ve.length>0&&W){ce&&Me&&t.texStorage2D(3553,Se,fe,ve[0].width,ve[0].height);for(let _e=0,Ge=ve.length;_e<Ge;_e++)j=ve[_e],ce?t.texSubImage2D(3553,_e,0,0,j.width,j.height,V,he,j.data):t.texImage2D(3553,_e,fe,j.width,j.height,0,V,he,j.data);w.generateMipmaps=!1}else ce?(Me&&t.texStorage2D(3553,Se,fe,I.width,I.height),t.texSubImage2D(3553,0,0,0,I.width,I.height,V,he,I.data)):t.texImage2D(3553,0,fe,I.width,I.height,0,V,he,I.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ce&&Me&&t.texStorage3D(35866,Se,fe,ve[0].width,ve[0].height,I.depth);for(let _e=0,Ge=ve.length;_e<Ge;_e++)j=ve[_e],w.format!==1023?V!==null?ce?t.compressedTexSubImage3D(35866,_e,0,0,0,j.width,j.height,I.depth,V,j.data,0,0):t.compressedTexImage3D(35866,_e,fe,j.width,j.height,I.depth,0,j.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?t.texSubImage3D(35866,_e,0,0,0,j.width,j.height,I.depth,V,he,j.data):t.texImage3D(35866,_e,fe,j.width,j.height,I.depth,0,V,he,j.data)}else{ce&&Me&&t.texStorage2D(3553,Se,fe,ve[0].width,ve[0].height);for(let _e=0,Ge=ve.length;_e<Ge;_e++)j=ve[_e],w.format!==1023?V!==null?ce?t.compressedTexSubImage2D(3553,_e,0,0,j.width,j.height,V,j.data):t.compressedTexImage2D(3553,_e,fe,j.width,j.height,0,j.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?t.texSubImage2D(3553,_e,0,0,j.width,j.height,V,he,j.data):t.texImage2D(3553,_e,fe,j.width,j.height,0,V,he,j.data)}else if(w.isDataArrayTexture)ce?(Me&&t.texStorage3D(35866,Se,fe,I.width,I.height,I.depth),t.texSubImage3D(35866,0,0,0,0,I.width,I.height,I.depth,V,he,I.data)):t.texImage3D(35866,0,fe,I.width,I.height,I.depth,0,V,he,I.data);else if(w.isData3DTexture)ce?(Me&&t.texStorage3D(32879,Se,fe,I.width,I.height,I.depth),t.texSubImage3D(32879,0,0,0,0,I.width,I.height,I.depth,V,he,I.data)):t.texImage3D(32879,0,fe,I.width,I.height,I.depth,0,V,he,I.data);else if(w.isFramebufferTexture){if(Me)if(ce)t.texStorage2D(3553,Se,fe,I.width,I.height);else{let _e=I.width,Ge=I.height;for(let Et=0;Et<Se;Et++)t.texImage2D(3553,Et,fe,_e,Ge,0,V,he,null),_e>>=1,Ge>>=1}}else if(ve.length>0&&W){ce&&Me&&t.texStorage2D(3553,Se,fe,ve[0].width,ve[0].height);for(let _e=0,Ge=ve.length;_e<Ge;_e++)j=ve[_e],ce?t.texSubImage2D(3553,_e,0,0,V,he,j):t.texImage2D(3553,_e,fe,V,he,j);w.generateMipmaps=!1}else ce?(Me&&t.texStorage2D(3553,Se,fe,I.width,I.height),t.texSubImage2D(3553,0,0,0,V,he,I)):t.texImage2D(3553,0,fe,V,he,I);b(w,W)&&T(z),S.__version=O.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function k(A,w,F,z,R){const O=s.convert(F.format,F.encoding),S=s.convert(F.type),N=P(F.internalFormat,O,S,F.encoding);i.get(w).__hasExternalTextures||(R===32879||R===35866?t.texImage3D(R,0,N,w.width,w.height,w.depth,0,O,S,null):t.texImage2D(R,0,N,w.width,w.height,0,O,S,null)),t.bindFramebuffer(36160,A),pe(w)?d.framebufferTexture2DMultisampleEXT(36160,z,R,i.get(F).__webglTexture,0,le(w)):(R===3553||R>=34069&&R<=34074)&&r.framebufferTexture2D(36160,z,R,i.get(F).__webglTexture,0),t.bindFramebuffer(36160,null)}function Q(A,w,F){if(r.bindRenderbuffer(36161,A),w.depthBuffer&&!w.stencilBuffer){let z=33189;if(F||pe(w)){const R=w.depthTexture;R&&R.isDepthTexture&&(R.type===1015?z=36012:R.type===1014&&(z=33190));const O=le(w);pe(w)?d.renderbufferStorageMultisampleEXT(36161,O,z,w.width,w.height):r.renderbufferStorageMultisample(36161,O,z,w.width,w.height)}else r.renderbufferStorage(36161,z,w.width,w.height);r.framebufferRenderbuffer(36160,36096,36161,A)}else if(w.depthBuffer&&w.stencilBuffer){const z=le(w);F&&pe(w)===!1?r.renderbufferStorageMultisample(36161,z,35056,w.width,w.height):pe(w)?d.renderbufferStorageMultisampleEXT(36161,z,35056,w.width,w.height):r.renderbufferStorage(36161,34041,w.width,w.height),r.framebufferRenderbuffer(36160,33306,36161,A)}else{const z=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let R=0;R<z.length;R++){const O=z[R],S=s.convert(O.format,O.encoding),N=s.convert(O.type),I=P(O.internalFormat,S,N,O.encoding),W=le(w);F&&pe(w)===!1?r.renderbufferStorageMultisample(36161,W,I,w.width,w.height):pe(w)?d.renderbufferStorageMultisampleEXT(36161,W,I,w.width,w.height):r.renderbufferStorage(36161,I,w.width,w.height)}}r.bindRenderbuffer(36161,null)}function ne(A){const w=i.get(A),F=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");(function(z,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,z),!R.depthTexture||!R.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");i.get(R.depthTexture).__webglTexture&&R.depthTexture.image.width===R.width&&R.depthTexture.image.height===R.height||(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),X(R.depthTexture,0);const O=i.get(R.depthTexture).__webglTexture,S=le(R);if(R.depthTexture.format===1026)pe(R)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,O,0,S):r.framebufferTexture2D(36160,36096,3553,O,0);else{if(R.depthTexture.format!==1027)throw new Error("Unknown depthTexture format");pe(R)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,O,0,S):r.framebufferTexture2D(36160,33306,3553,O,0)}})(w.__webglFramebuffer,A)}else if(F){w.__webglDepthbuffer=[];for(let z=0;z<6;z++)t.bindFramebuffer(36160,w.__webglFramebuffer[z]),w.__webglDepthbuffer[z]=r.createRenderbuffer(),Q(w.__webglDepthbuffer[z],A,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=r.createRenderbuffer(),Q(w.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function le(A){return Math.min(u,A.samples)}function pe(A){const w=i.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Re(A,w){const F=A.encoding,z=A.format,R=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===1035||F!==3e3&&(F===3001?o===!1?e.has("EXT_sRGB")===!0&&z===1023?(A.format=1035,A.minFilter=1006,A.generateMipmaps=!1):w=Cs.sRGBToLinear(w):z===1023&&R===1009||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",F)),w}this.allocateTextureUnit=function(){const A=K;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),K+=1,A},this.resetTextureUnits=function(){K=0},this.setTexture2D=X,this.setTexture2DArray=function(A,w){const F=i.get(A);A.version>0&&F.__version!==A.version?H(F,A,w):t.bindTexture(35866,F.__webglTexture,33984+w)},this.setTexture3D=function(A,w){const F=i.get(A);A.version>0&&F.__version!==A.version?H(F,A,w):t.bindTexture(32879,F.__webglTexture,33984+w)},this.setTextureCube=function(A,w){const F=i.get(A);A.version>0&&F.__version!==A.version?function(z,R,O){if(R.image.length!==6)return;const S=ae(z,R),N=R.source;t.bindTexture(34067,z.__webglTexture,33984+O);const I=i.get(N);if(N.version!==I.__version||S===!0){t.activeTexture(33984+O),r.pixelStorei(37440,R.flipY),r.pixelStorei(37441,R.premultiplyAlpha),r.pixelStorei(3317,R.unpackAlignment),r.pixelStorei(37443,0);const W=R.isCompressedTexture||R.image[0].isCompressedTexture,V=R.image[0]&&R.image[0].isDataTexture,j=[];for(let xe=0;xe<6;xe++)j[xe]=W||V?V?R.image[xe].image:R.image[xe]:y(R.image[xe],!1,!0,h),j[xe]=Re(R,j[xe]);const he=j[0],fe=M(he)||o,ve=s.convert(R.format,R.encoding),ce=s.convert(R.type),Me=P(R.internalFormat,ve,ce,R.encoding),Se=o&&R.isVideoTexture!==!0,_e=I.__version===void 0||S===!0;let Ge,Et=L(R,he,fe);if(se(34067,R,fe),W){Se&&_e&&t.texStorage2D(34067,Et,Me,he.width,he.height);for(let xe=0;xe<6;xe++){Ge=j[xe].mipmaps;for(let Fe=0;Fe<Ge.length;Fe++){const ke=Ge[Fe];R.format!==1023?ve!==null?Se?t.compressedTexSubImage2D(34069+xe,Fe,0,0,ke.width,ke.height,ve,ke.data):t.compressedTexImage2D(34069+xe,Fe,Me,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Se?t.texSubImage2D(34069+xe,Fe,0,0,ke.width,ke.height,ve,ce,ke.data):t.texImage2D(34069+xe,Fe,Me,ke.width,ke.height,0,ve,ce,ke.data)}}}else{Ge=R.mipmaps,Se&&_e&&(Ge.length>0&&Et++,t.texStorage2D(34067,Et,Me,j[0].width,j[0].height));for(let xe=0;xe<6;xe++)if(V){Se?t.texSubImage2D(34069+xe,0,0,0,j[xe].width,j[xe].height,ve,ce,j[xe].data):t.texImage2D(34069+xe,0,Me,j[xe].width,j[xe].height,0,ve,ce,j[xe].data);for(let Fe=0;Fe<Ge.length;Fe++){const ke=Ge[Fe].image[xe].image;Se?t.texSubImage2D(34069+xe,Fe+1,0,0,ke.width,ke.height,ve,ce,ke.data):t.texImage2D(34069+xe,Fe+1,Me,ke.width,ke.height,0,ve,ce,ke.data)}}else{Se?t.texSubImage2D(34069+xe,0,0,0,ve,ce,j[xe]):t.texImage2D(34069+xe,0,Me,ve,ce,j[xe]);for(let Fe=0;Fe<Ge.length;Fe++){const ke=Ge[Fe];Se?t.texSubImage2D(34069+xe,Fe+1,0,0,ve,ce,ke.image[xe]):t.texImage2D(34069+xe,Fe+1,Me,ve,ce,ke.image[xe])}}}b(R,fe)&&T(34067),I.__version=N.version,R.onUpdate&&R.onUpdate(R)}z.__version=R.version}(F,A,w):t.bindTexture(34067,F.__webglTexture,33984+w)},this.rebindTextures=function(A,w,F){const z=i.get(A);w!==void 0&&k(z.__webglFramebuffer,A,A.texture,36064,3553),F!==void 0&&ne(A)},this.setupRenderTarget=function(A){const w=A.texture,F=i.get(A),z=i.get(w);A.addEventListener("dispose",D),A.isWebGLMultipleRenderTargets!==!0&&(z.__webglTexture===void 0&&(z.__webglTexture=r.createTexture()),z.__version=w.version,a.memory.textures++);const R=A.isWebGLCubeRenderTarget===!0,O=A.isWebGLMultipleRenderTargets===!0,S=M(A)||o;if(R){F.__webglFramebuffer=[];for(let N=0;N<6;N++)F.__webglFramebuffer[N]=r.createFramebuffer()}else{if(F.__webglFramebuffer=r.createFramebuffer(),O)if(n.drawBuffers){const N=A.texture;for(let I=0,W=N.length;I<W;I++){const V=i.get(N[I]);V.__webglTexture===void 0&&(V.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&pe(A)===!1){const N=O?w:[w];F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,F.__webglMultisampledFramebuffer);for(let I=0;I<N.length;I++){const W=N[I];F.__webglColorRenderbuffer[I]=r.createRenderbuffer(),r.bindRenderbuffer(36161,F.__webglColorRenderbuffer[I]);const V=s.convert(W.format,W.encoding),j=s.convert(W.type),he=P(W.internalFormat,V,j,W.encoding,A.isXRRenderTarget===!0),fe=le(A);r.renderbufferStorageMultisample(36161,fe,he,A.width,A.height),r.framebufferRenderbuffer(36160,36064+I,36161,F.__webglColorRenderbuffer[I])}r.bindRenderbuffer(36161,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),Q(F.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(R){t.bindTexture(34067,z.__webglTexture),se(34067,w,S);for(let N=0;N<6;N++)k(F.__webglFramebuffer[N],A,w,36064,34069+N);b(w,S)&&T(34067),t.unbindTexture()}else if(O){const N=A.texture;for(let I=0,W=N.length;I<W;I++){const V=N[I],j=i.get(V);t.bindTexture(3553,j.__webglTexture),se(3553,V,S),k(F.__webglFramebuffer,A,V,36064+I,3553),b(V,S)&&T(3553)}t.unbindTexture()}else{let N=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?N=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(N,z.__webglTexture),se(N,w,S),k(F.__webglFramebuffer,A,w,36064,N),b(w,S)&&T(N),t.unbindTexture()}A.depthBuffer&&ne(A)},this.updateRenderTargetMipmap=function(A){const w=M(A)||o,F=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let z=0,R=F.length;z<R;z++){const O=F[z];if(b(O,w)){const S=A.isWebGLCubeRenderTarget?34067:3553,N=i.get(O).__webglTexture;t.bindTexture(S,N),T(S),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(A){if(o&&A.samples>0&&pe(A)===!1){const w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],F=A.width,z=A.height;let R=16384;const O=[],S=A.stencilBuffer?33306:36096,N=i.get(A),I=A.isWebGLMultipleRenderTargets===!0;if(I)for(let W=0;W<w.length;W++)t.bindFramebuffer(36160,N.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+W,36161,null),t.bindFramebuffer(36160,N.__webglFramebuffer),r.framebufferTexture2D(36009,36064+W,3553,null,0);t.bindFramebuffer(36008,N.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,N.__webglFramebuffer);for(let W=0;W<w.length;W++){O.push(36064+W),A.depthBuffer&&O.push(S);const V=N.__ignoreDepthValues!==void 0&&N.__ignoreDepthValues;if(V===!1&&(A.depthBuffer&&(R|=256),A.stencilBuffer&&(R|=1024)),I&&r.framebufferRenderbuffer(36008,36064,36161,N.__webglColorRenderbuffer[W]),V===!0&&(r.invalidateFramebuffer(36008,[S]),r.invalidateFramebuffer(36009,[S])),I){const j=i.get(w[W]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,j,0)}r.blitFramebuffer(0,0,F,z,0,0,F,z,R,9728),p&&r.invalidateFramebuffer(36008,O)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),I)for(let W=0;W<w.length;W++){t.bindFramebuffer(36160,N.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+W,36161,N.__webglColorRenderbuffer[W]);const V=i.get(w[W]).__webglTexture;t.bindFramebuffer(36160,N.__webglFramebuffer),r.framebufferTexture2D(36009,36064+W,3553,V,0)}t.bindFramebuffer(36009,N.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=k,this.useMultisampledRTT=pe}function Uo(r,e,t){const i=t.isWebGL2;return{convert:function(n,s=null){let a;if(n===1009)return 5121;if(n===1017)return 32819;if(n===1018)return 32820;if(n===1010)return 5120;if(n===1011)return 5122;if(n===1012)return 5123;if(n===1013)return 5124;if(n===1014)return 5125;if(n===1015)return 5126;if(n===1016)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(n===1021)return 6406;if(n===1023)return 6408;if(n===1024)return 6409;if(n===1025)return 6410;if(n===1026)return 6402;if(n===1027)return 34041;if(n===1022)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(n===1035)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(n===1028)return 6403;if(n===1029)return 36244;if(n===1030)return 33319;if(n===1031)return 33320;if(n===1033)return 36249;if(n===33776||n===33777||n===33778||n===33779)if(s===3001){if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(n===33776)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=e.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(n===33776)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(n===35840||n===35841||n===35842||n===35843){if(a=e.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(n===35840)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(n===36196)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===37492||n===37496){if(a=e.get("WEBGL_compressed_texture_etc"),a===null)return null;if(n===37492)return s===3001?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===37496)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(a=e.get("WEBGL_compressed_texture_astc"),a===null)return null;if(n===37808)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(n===36492){if(a=e.get("EXT_texture_compression_bptc"),a===null)return null;if(n===36492)return s===3001?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}return n===1020?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[n]!==void 0?r[n]:null}}}class Bo extends ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class un extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bu={type:"move"};class ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null;const o=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const m of e.hand.values()){const g=t.getJointPose(m,i),_=this._getHandJoint(h,m);g!==null&&(_.matrix.fromArray(g.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=g.radius),_.visible=g!==null}const c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=c.position.distanceTo(u.position),p=.02,f=.005;h.inputState.pinching&&d>p+f?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&d<=p-f&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bu)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new un;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Fo extends Je{constructor(e,t,i,n,s,a,o,l,h,c){if((c=c!==void 0?c:1026)!==1026&&c!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===1026&&(i=1014),i===void 0&&c===1027&&(i=1020),super(null,n,s,a,o,l,c,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:1003,this.minFilter=l!==void 0?l:1003,this.flipY=!1,this.generateMipmaps=!1}}class Su extends Xt{constructor(e,t){super();const i=this;let n=null,s=1,a=null,o="local-floor",l=null,h=null,c=null,u=null,d=null,p=null;const f=t.getContextAttributes();let m=null,g=null;const _=[],v=[],y=new Set,M=new Map,b=new ot;b.layers.enable(1),b.viewport=new ze;const T=new ot;T.layers.enable(2),T.viewport=new ze;const P=[b,T],L=new Bo;L.layers.enable(1),L.layers.enable(2);let B=null,U=null;function D(H){const k=v.indexOf(H.inputSource);if(k===-1)return;const Q=_[k];Q!==void 0&&Q.dispatchEvent({type:H.type,data:H.inputSource})}function Y(){n.removeEventListener("select",D),n.removeEventListener("selectstart",D),n.removeEventListener("selectend",D),n.removeEventListener("squeeze",D),n.removeEventListener("squeezestart",D),n.removeEventListener("squeezeend",D),n.removeEventListener("end",Y),n.removeEventListener("inputsourceschange",K);for(let H=0;H<_.length;H++){const k=v[H];k!==null&&(v[H]=null,_[H].disconnect(k))}B=null,U=null,e.setRenderTarget(m),d=null,u=null,c=null,n=null,g=null,ae.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}function K(H){for(let k=0;k<H.removed.length;k++){const Q=H.removed[k],ne=v.indexOf(Q);ne>=0&&(v[ne]=null,_[ne].disconnect(Q))}for(let k=0;k<H.added.length;k++){const Q=H.added[k];let ne=v.indexOf(Q);if(ne===-1){for(let pe=0;pe<_.length;pe++){if(pe>=v.length){v.push(Q),ne=pe;break}if(v[pe]===null){v[pe]=Q,ne=pe;break}}if(ne===-1)break}const le=_[ne];le&&le.connect(Q)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let k=_[H];return k===void 0&&(k=new ra,_[H]=k),k.getTargetRaySpace()},this.getControllerGrip=function(H){let k=_[H];return k===void 0&&(k=new ra,_[H]=k),k.getGripSpace()},this.getHand=function(H){let k=_[H];return k===void 0&&(k=new ra,_[H]=k),k.getHandSpace()},this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return c},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(H){if(n=H,n!==null){if(m=e.getRenderTarget(),n.addEventListener("select",D),n.addEventListener("selectstart",D),n.addEventListener("selectend",D),n.addEventListener("squeeze",D),n.addEventListener("squeezestart",D),n.addEventListener("squeezeend",D),n.addEventListener("end",Y),n.addEventListener("inputsourceschange",K),f.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:n.renderState.layers!==void 0||f.antialias,alpha:f.alpha,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(n,t,k),n.updateRenderState({baseLayer:d}),g=new Rt(d.framebufferWidth,d.framebufferHeight,{format:1023,type:1009,encoding:e.outputEncoding,stencilBuffer:f.stencil})}else{let k=null,Q=null,ne=null;f.depth&&(ne=f.stencil?35056:33190,k=f.stencil?1027:1026,Q=f.stencil?1020:1014);const le={colorFormat:32856,depthFormat:ne,scaleFactor:s};c=new XRWebGLBinding(n,t),u=c.createProjectionLayer(le),n.updateRenderState({layers:[u]}),g=new Rt(u.textureWidth,u.textureHeight,{format:1023,type:1009,depthTexture:new Fo(u.textureWidth,u.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:f.stencil,encoding:e.outputEncoding,samples:f.antialias?4:0}),e.properties.get(g).__ignoreDepthValues=u.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await n.requestReferenceSpace(o),ae.setContext(n),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};const X=new E,ie=new E;function te(H,k){k===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(k.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(n===null)return;L.near=T.near=b.near=H.near,L.far=T.far=b.far=H.far,B===L.near&&U===L.far||(n.updateRenderState({depthNear:L.near,depthFar:L.far}),B=L.near,U=L.far);const k=H.parent,Q=L.cameras;te(L,k);for(let le=0;le<Q.length;le++)te(Q[le],k);L.matrixWorld.decompose(L.position,L.quaternion,L.scale),H.matrix.copy(L.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale);const ne=H.children;for(let le=0,pe=ne.length;le<pe;le++)ne[le].updateMatrixWorld(!0);Q.length===2?function(le,pe,Re){X.setFromMatrixPosition(pe.matrixWorld),ie.setFromMatrixPosition(Re.matrixWorld);const A=X.distanceTo(ie),w=pe.projectionMatrix.elements,F=Re.projectionMatrix.elements,z=w[14]/(w[10]-1),R=w[14]/(w[10]+1),O=(w[9]+1)/w[5],S=(w[9]-1)/w[5],N=(w[8]-1)/w[0],I=(F[8]+1)/F[0],W=z*N,V=z*I,j=A/(-N+I),he=j*-N;pe.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(he),le.translateZ(j),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert();const fe=z+j,ve=R+j,ce=W-he,Me=V+(A-he),Se=O*R/ve*fe,_e=S*R/ve*fe;le.projectionMatrix.makePerspective(ce,Me,Se,_e,fe,ve)}(L,b,T):L.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return L},this.getFoveation=function(){return u!==null?u.fixedFoveation:d!==null?d.fixedFoveation:void 0},this.setFoveation=function(H){u!==null&&(u.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.getPlanes=function(){return y};let se=null;const ae=new co;ae.setAnimationLoop(function(H,k){if(h=k.getViewerPose(l||a),p=k,h!==null){const Q=h.views;d!==null&&(e.setRenderTargetFramebuffer(g,d.framebuffer),e.setRenderTarget(g));let ne=!1;Q.length!==L.cameras.length&&(L.cameras.length=0,ne=!0);for(let le=0;le<Q.length;le++){const pe=Q[le];let Re=null;if(d!==null)Re=d.getViewport(pe);else{const w=c.getViewSubImage(u,pe);Re=w.viewport,le===0&&(e.setRenderTargetTextures(g,w.colorTexture,u.ignoreDepthValues?void 0:w.depthStencilTexture),e.setRenderTarget(g))}let A=P[le];A===void 0&&(A=new ot,A.layers.enable(le),A.viewport=new ze,P[le]=A),A.matrix.fromArray(pe.transform.matrix),A.projectionMatrix.fromArray(pe.projectionMatrix),A.viewport.set(Re.x,Re.y,Re.width,Re.height),le===0&&L.matrix.copy(A.matrix),ne===!0&&L.cameras.push(A)}}for(let Q=0;Q<_.length;Q++){const ne=v[Q],le=_[Q];ne!==null&&le!==void 0&&le.update(ne,k,l||a)}if(se&&se(H,k),k.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:k.detectedPlanes});let Q=null;for(const ne of y)k.detectedPlanes.has(ne)||(Q===null&&(Q=[]),Q.push(ne));if(Q!==null)for(const ne of Q)y.delete(ne),M.delete(ne),i.dispatchEvent({type:"planeremoved",data:ne});for(const ne of k.detectedPlanes)if(y.has(ne)){const le=M.get(ne);ne.lastChangedTime>le&&(M.set(ne,ne.lastChangedTime),i.dispatchEvent({type:"planechanged",data:ne}))}else y.add(ne),M.set(ne,k.lastChangedTime),i.dispatchEvent({type:"planeadded",data:ne})}p=null}),this.setAnimationLoop=function(H){se=H},this.dispose=function(){}}}function wu(r,e){function t(i,n){i.opacity.value=n.opacity,n.color&&i.diffuse.value.copy(n.color),n.emissive&&i.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity),n.map&&(i.map.value=n.map),n.alphaMap&&(i.alphaMap.value=n.alphaMap),n.bumpMap&&(i.bumpMap.value=n.bumpMap,i.bumpScale.value=n.bumpScale,n.side===1&&(i.bumpScale.value*=-1)),n.displacementMap&&(i.displacementMap.value=n.displacementMap,i.displacementScale.value=n.displacementScale,i.displacementBias.value=n.displacementBias),n.emissiveMap&&(i.emissiveMap.value=n.emissiveMap),n.normalMap&&(i.normalMap.value=n.normalMap,i.normalScale.value.copy(n.normalScale),n.side===1&&i.normalScale.value.negate()),n.specularMap&&(i.specularMap.value=n.specularMap),n.alphaTest>0&&(i.alphaTest.value=n.alphaTest);const s=e.get(n).envMap;if(s&&(i.envMap.value=s,i.flipEnvMap.value=s.isCubeTexture&&s.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=n.reflectivity,i.ior.value=n.ior,i.refractionRatio.value=n.refractionRatio),n.lightMap){i.lightMap.value=n.lightMap;const l=r.physicallyCorrectLights!==!0?Math.PI:1;i.lightMapIntensity.value=n.lightMapIntensity*l}let a,o;n.aoMap&&(i.aoMap.value=n.aoMap,i.aoMapIntensity.value=n.aoMapIntensity),n.map?a=n.map:n.specularMap?a=n.specularMap:n.displacementMap?a=n.displacementMap:n.normalMap?a=n.normalMap:n.bumpMap?a=n.bumpMap:n.roughnessMap?a=n.roughnessMap:n.metalnessMap?a=n.metalnessMap:n.alphaMap?a=n.alphaMap:n.emissiveMap?a=n.emissiveMap:n.clearcoatMap?a=n.clearcoatMap:n.clearcoatNormalMap?a=n.clearcoatNormalMap:n.clearcoatRoughnessMap?a=n.clearcoatRoughnessMap:n.iridescenceMap?a=n.iridescenceMap:n.iridescenceThicknessMap?a=n.iridescenceThicknessMap:n.specularIntensityMap?a=n.specularIntensityMap:n.specularColorMap?a=n.specularColorMap:n.transmissionMap?a=n.transmissionMap:n.thicknessMap?a=n.thicknessMap:n.sheenColorMap?a=n.sheenColorMap:n.sheenRoughnessMap&&(a=n.sheenRoughnessMap),a!==void 0&&(a.isWebGLRenderTarget&&(a=a.texture),a.matrixAutoUpdate===!0&&a.updateMatrix(),i.uvTransform.value.copy(a.matrix)),n.aoMap?o=n.aoMap:n.lightMap&&(o=n.lightMap),o!==void 0&&(o.isWebGLRenderTarget&&(o=o.texture),o.matrixAutoUpdate===!0&&o.updateMatrix(),i.uv2Transform.value.copy(o.matrix))}return{refreshFogUniforms:function(i,n){n.color.getRGB(i.fogColor.value,ao(r)),n.isFog?(i.fogNear.value=n.near,i.fogFar.value=n.far):n.isFogExp2&&(i.fogDensity.value=n.density)},refreshMaterialUniforms:function(i,n,s,a,o){n.isMeshBasicMaterial||n.isMeshLambertMaterial?t(i,n):n.isMeshToonMaterial?(t(i,n),function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)}(i,n)):n.isMeshPhongMaterial?(t(i,n),function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)}(i,n)):n.isMeshStandardMaterial?(t(i,n),function(l,h){l.roughness.value=h.roughness,l.metalness.value=h.metalness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(l.envMapIntensity.value=h.envMapIntensity)}(i,n),n.isMeshPhysicalMaterial&&function(l,h,c){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),l.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===1&&l.clearcoatNormalScale.value.negate())),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=c.texture,l.transmissionSamplerSize.value.set(c.width,c.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap)}(i,n,o)):n.isMeshMatcapMaterial?(t(i,n),function(l,h){h.matcap&&(l.matcap.value=h.matcap)}(i,n)):n.isMeshDepthMaterial?t(i,n):n.isMeshDistanceMaterial?(t(i,n),function(l,h){l.referencePosition.value.copy(h.referencePosition),l.nearDistance.value=h.nearDistance,l.farDistance.value=h.farDistance}(i,n)):n.isMeshNormalMaterial?t(i,n):n.isLineBasicMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity}(i,n),n.isLineDashedMaterial&&function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale}(i,n)):n.isPointsMaterial?function(l,h,c,u){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*c,l.scale.value=.5*u,h.map&&(l.map.value=h.map),h.alphaMap&&(l.alphaMap.value=h.alphaMap),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest);let d;h.map?d=h.map:h.alphaMap&&(d=h.alphaMap),d!==void 0&&(d.matrixAutoUpdate===!0&&d.updateMatrix(),l.uvTransform.value.copy(d.matrix))}(i,n,s,a):n.isSpriteMaterial?function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map),h.alphaMap&&(l.alphaMap.value=h.alphaMap),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest);let c;h.map?c=h.map:h.alphaMap&&(c=h.alphaMap),c!==void 0&&(c.matrixAutoUpdate===!0&&c.updateMatrix(),l.uvTransform.value.copy(c.matrix))}(i,n):n.isShadowMaterial?(i.color.value.copy(n.color),i.opacity.value=n.opacity):n.isShaderMaterial&&(n.uniformsNeedUpdate=!1)}}}function Tu(r,e,t,i){let n={},s={},a=[];const o=t.isWebGL2?r.getParameter(35375):0;function l(u,d,p){const f=u.value;if(p[d]===void 0)return p[d]=typeof f=="number"?f:f.clone(),!0;if(typeof f=="number"){if(p[d]!==f)return p[d]=f,!0}else{const m=p[d];if(m.equals(f)===!1)return m.copy(f),!0}return!1}function h(u){const d=u.value,p={boundary:0,storage:0};return typeof d=="number"?(p.boundary=4,p.storage=4):d.isVector2?(p.boundary=8,p.storage=8):d.isVector3||d.isColor?(p.boundary=16,p.storage=12):d.isVector4?(p.boundary=16,p.storage=16):d.isMatrix3?(p.boundary=48,p.storage=48):d.isMatrix4?(p.boundary=64,p.storage=64):d.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",d),p}function c(u){const d=u.target;d.removeEventListener("dispose",c);const p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(n[d.id]),delete n[d.id],delete s[d.id]}return{bind:function(u,d){const p=d.program;i.uniformBlockBinding(u,p)},update:function(u,d){let p=n[u.id];p===void 0&&(function(g){const _=g.uniforms;let v=0;const y=16;let M=0;for(let b=0,T=_.length;b<T;b++){const P=_[b],L=h(P);if(P.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=v,b>0){M=v%y;const B=y-M;M!==0&&B-L.boundary<0&&(v+=y-M,P.__offset=v)}v+=L.storage}M=v%y,M>0&&(v+=y-M),g.__size=v,g.__cache={}}(u),p=function(g){const _=function(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();g.__bindingPointIndex=_;const v=r.createBuffer(),y=g.__size,M=g.usage;return r.bindBuffer(35345,v),r.bufferData(35345,y,M),r.bindBuffer(35345,null),r.bindBufferBase(35345,_,v),v}(u),n[u.id]=p,u.addEventListener("dispose",c));const f=d.program;i.updateUBOMapping(u,f);const m=e.render.frame;s[u.id]!==m&&(function(g){const _=n[g.id],v=g.uniforms,y=g.__cache;r.bindBuffer(35345,_);for(let M=0,b=v.length;M<b;M++){const T=v[M];if(l(T,M,y)===!0){const P=T.value,L=T.__offset;typeof P=="number"?(T.__data[0]=P,r.bufferSubData(35345,L,T.__data)):(T.value.isMatrix3?(T.__data[0]=T.value.elements[0],T.__data[1]=T.value.elements[1],T.__data[2]=T.value.elements[2],T.__data[3]=T.value.elements[0],T.__data[4]=T.value.elements[3],T.__data[5]=T.value.elements[4],T.__data[6]=T.value.elements[5],T.__data[7]=T.value.elements[0],T.__data[8]=T.value.elements[6],T.__data[9]=T.value.elements[7],T.__data[10]=T.value.elements[8],T.__data[11]=T.value.elements[0]):P.toArray(T.__data),r.bufferSubData(35345,L,T.__data))}}r.bindBuffer(35345,null)}(u),s[u.id]=m)},dispose:function(){for(const u in n)r.deleteBuffer(n[u]);a=[],n={},s={}}}}function ko(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:function(){const C=An("canvas");return C.style.display="block",C}(),t=r.context!==void 0?r.context:null,i=r.depth===void 0||r.depth,n=r.stencil===void 0||r.stencil,s=r.antialias!==void 0&&r.antialias,a=r.premultipliedAlpha===void 0||r.premultipliedAlpha,o=r.preserveDrawingBuffer!==void 0&&r.preserveDrawingBuffer,l=r.powerPreference!==void 0?r.powerPreference:"default",h=r.failIfMajorPerformanceCaveat!==void 0&&r.failIfMajorPerformanceCaveat;let c;c=t!==null?t.getContextAttributes().alpha:r.alpha!==void 0&&r.alpha;let u=null,d=null;const p=[],f=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=3e3,this.physicallyCorrectLights=!1,this.toneMapping=0,this.toneMappingExposure=1;const m=this;let g=!1,_=0,v=0,y=null,M=-1,b=null;const T=new ze,P=new ze;let L=null,B=e.width,U=e.height,D=1,Y=null,K=null;const X=new ze(0,0,B,U),ie=new ze(0,0,B,U);let te=!1;const se=new Or;let ae=!1,H=!1,k=null;const Q=new be,ne=new J,le=new E,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Re(){return y===null?D:1}let A,w,F,z,R,O,S,N,I,W,V,j,he,fe,ve,ce,Me,Se,_e,Ge,Et,xe,Fe,ke,oe=t;function Mh(C,G){for(let Z=0;Z<C.length;Z++){const q=C[Z],$=e.getContext(q,G);if($!==null)return $}return null}try{const C={alpha:!0,depth:i,stencil:n,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r147"),e.addEventListener("webglcontextlost",Sh,!1),e.addEventListener("webglcontextrestored",wh,!1),e.addEventListener("webglcontextcreationerror",Th,!1),oe===null){const G=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&G.shift(),oe=Mh(G,C),oe===null)throw Mh(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}oe.getShaderPrecisionFormat===void 0&&(oe.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}function bh(){A=new nc(oe),w=new $h(oe,A,r),A.init(w),xe=new Uo(oe,A,w),F=new yu(oe,A,w),z=new ac,R=new uu,O=new Mu(oe,A,F,R,w,xe,z),S=new tc(m),N=new ic(m),I=new Zh(oe,w),Fe=new Kh(oe,A,I,w),W=new rc(oe,I,z,Fe),V=new cc(oe,W,I,z),_e=new hc(oe,w,O),ce=new ec(R),j=new cu(m,S,N,A,w,Fe,ce),he=new wu(m,R),fe=new pu,ve=new xu(A,w),Se=new Jh(m,S,N,F,V,c,a),Me=new _u(m,V,w),ke=new Tu(oe,z,w,F),Ge=new Qh(oe,A,z,w),Et=new sc(oe,A,z,w),z.programs=j.programs,m.capabilities=w,m.extensions=A,m.properties=R,m.renderLists=fe,m.shadowMap=Me,m.state=F,m.info=z}bh();const At=new Su(m,oe);function Sh(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),g=!0}function wh(){console.log("THREE.WebGLRenderer: Context Restored."),g=!1;const C=z.autoReset,G=Me.enabled,Z=Me.autoUpdate,q=Me.needsUpdate,$=Me.type;bh(),z.autoReset=C,Me.enabled=G,Me.autoUpdate=Z,Me.needsUpdate=q,Me.type=$}function Th(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Eh(C){const G=C.target;G.removeEventListener("dispose",Eh),function(Z){(function(q){const $=R.get(q).programs;$!==void 0&&($.forEach(function(ge){j.releaseProgram(ge)}),q.isShaderMaterial&&j.releaseShaderCache(q))})(Z),R.remove(Z)}(G)}this.xr=At,this.getContext=function(){return oe},this.getContextAttributes=function(){return oe.getContextAttributes()},this.forceContextLoss=function(){const C=A.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=A.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(C){C!==void 0&&(D=C,this.setSize(B,U,!1))},this.getSize=function(C){return C.set(B,U)},this.setSize=function(C,G,Z){At.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(B=C,U=G,e.width=Math.floor(C*D),e.height=Math.floor(G*D),Z!==!1&&(e.style.width=C+"px",e.style.height=G+"px"),this.setViewport(0,0,C,G))},this.getDrawingBufferSize=function(C){return C.set(B*D,U*D).floor()},this.setDrawingBufferSize=function(C,G,Z){B=C,U=G,D=Z,e.width=Math.floor(C*Z),e.height=Math.floor(G*Z),this.setViewport(0,0,C,G)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(X)},this.setViewport=function(C,G,Z,q){C.isVector4?X.set(C.x,C.y,C.z,C.w):X.set(C,G,Z,q),F.viewport(T.copy(X).multiplyScalar(D).floor())},this.getScissor=function(C){return C.copy(ie)},this.setScissor=function(C,G,Z,q){C.isVector4?ie.set(C.x,C.y,C.z,C.w):ie.set(C,G,Z,q),F.scissor(P.copy(ie).multiplyScalar(D).floor())},this.getScissorTest=function(){return te},this.setScissorTest=function(C){F.setScissorTest(te=C)},this.setOpaqueSort=function(C){Y=C},this.setTransparentSort=function(C){K=C},this.getClearColor=function(C){return C.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(C=!0,G=!0,Z=!0){let q=0;C&&(q|=16384),G&&(q|=256),Z&&(q|=1024),oe.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Sh,!1),e.removeEventListener("webglcontextrestored",wh,!1),e.removeEventListener("webglcontextcreationerror",Th,!1),fe.dispose(),ve.dispose(),R.dispose(),S.dispose(),N.dispose(),V.dispose(),Fe.dispose(),ke.dispose(),j.dispose(),At.dispose(),At.removeEventListener("sessionstart",Ah),At.removeEventListener("sessionend",Ch),k&&(k.dispose(),k=null),Gi.stop()},this.renderBufferDirect=function(C,G,Z,q,$,ge){G===null&&(G=pe);const Ae=$.isMesh&&$.matrixWorld.determinant()<0,Ce=function(lt,Vi,Ht,ye,st){Vi.isScene!==!0&&(Vi=pe),O.resetTextureUnits();const Ga=Vi.fog,od=ye.isMeshStandardMaterial?Vi.environment:null,ld=y===null?m.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:3e3,Ms=(ye.isMeshStandardMaterial?N:S).get(ye.envMap||od),hd=ye.vertexColors===!0&&!!Ht.attributes.color&&Ht.attributes.color.itemSize===4,cd=!!ye.normalMap&&!!Ht.attributes.tangent,ud=!!Ht.morphAttributes.position,dd=!!Ht.morphAttributes.normal,pd=!!Ht.morphAttributes.color,md=ye.toneMapped?m.toneMapping:0,Dh=Ht.morphAttributes.position||Ht.morphAttributes.normal||Ht.morphAttributes.color,fd=Dh!==void 0?Dh.length:0,Oe=R.get(ye),gd=d.state.lights;if(ae===!0&&(H===!0||lt!==b)){const Ct=lt===b&&ye.id===M;ce.setState(ye,lt,Ct)}let ri=!1;ye.version===Oe.__version?Oe.needsLights&&Oe.lightsStateVersion!==gd.state.version||Oe.outputEncoding!==ld||st.isInstancedMesh&&Oe.instancing===!1?ri=!0:st.isInstancedMesh||Oe.instancing!==!0?st.isSkinnedMesh&&Oe.skinning===!1?ri=!0:st.isSkinnedMesh||Oe.skinning!==!0?Oe.envMap!==Ms||ye.fog===!0&&Oe.fog!==Ga?ri=!0:Oe.numClippingPlanes===void 0||Oe.numClippingPlanes===ce.numPlanes&&Oe.numIntersection===ce.numIntersection?(Oe.vertexAlphas!==hd||Oe.vertexTangents!==cd||Oe.morphTargets!==ud||Oe.morphNormals!==dd||Oe.morphColors!==pd||Oe.toneMapping!==md||w.isWebGL2===!0&&Oe.morphTargetsCount!==fd)&&(ri=!0):ri=!0:ri=!0:ri=!0:(ri=!0,Oe.__version=ye.version);let Wi=Oe.currentProgram;ri===!0&&(Wi=_s(ye,Vi,st));let Ih=!1,ur=!1,Va=!1;const xt=Wi.getUniforms(),ji=Oe.uniforms;if(F.useProgram(Wi.program)&&(Ih=!0,ur=!0,Va=!0),ye.id!==M&&(M=ye.id,ur=!0),Ih||b!==lt){if(xt.setValue(oe,"projectionMatrix",lt.projectionMatrix),w.logarithmicDepthBuffer&&xt.setValue(oe,"logDepthBufFC",2/(Math.log(lt.far+1)/Math.LN2)),b!==lt&&(b=lt,ur=!0,Va=!0),ye.isShaderMaterial||ye.isMeshPhongMaterial||ye.isMeshToonMaterial||ye.isMeshStandardMaterial||ye.envMap){const Ct=xt.map.cameraPosition;Ct!==void 0&&Ct.setValue(oe,le.setFromMatrixPosition(lt.matrixWorld))}(ye.isMeshPhongMaterial||ye.isMeshToonMaterial||ye.isMeshLambertMaterial||ye.isMeshBasicMaterial||ye.isMeshStandardMaterial||ye.isShaderMaterial)&&xt.setValue(oe,"isOrthographic",lt.isOrthographicCamera===!0),(ye.isMeshPhongMaterial||ye.isMeshToonMaterial||ye.isMeshLambertMaterial||ye.isMeshBasicMaterial||ye.isMeshStandardMaterial||ye.isShaderMaterial||ye.isShadowMaterial||st.isSkinnedMesh)&&xt.setValue(oe,"viewMatrix",lt.matrixWorldInverse)}if(st.isSkinnedMesh){xt.setOptional(oe,st,"bindMatrix"),xt.setOptional(oe,st,"bindMatrixInverse");const Ct=st.skeleton;Ct&&(w.floatVertexTextures?(Ct.boneTexture===null&&Ct.computeBoneTexture(),xt.setValue(oe,"boneTexture",Ct.boneTexture,O),xt.setValue(oe,"boneTextureSize",Ct.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Wa=Ht.morphAttributes;(Wa.position!==void 0||Wa.normal!==void 0||Wa.color!==void 0&&w.isWebGL2===!0)&&_e.update(st,Ht,ye,Wi),(ur||Oe.receiveShadow!==st.receiveShadow)&&(Oe.receiveShadow=st.receiveShadow,xt.setValue(oe,"receiveShadow",st.receiveShadow)),ye.isMeshGouraudMaterial&&ye.envMap!==null&&(ji.envMap.value=Ms,ji.flipEnvMap.value=Ms.isCubeTexture&&Ms.isRenderTargetTexture===!1?-1:1),ur&&(xt.setValue(oe,"toneMappingExposure",m.toneMappingExposure),Oe.needsLights&&(Gt=Va,(qt=ji).ambientLightColor.needsUpdate=Gt,qt.lightProbe.needsUpdate=Gt,qt.directionalLights.needsUpdate=Gt,qt.directionalLightShadows.needsUpdate=Gt,qt.pointLights.needsUpdate=Gt,qt.pointLightShadows.needsUpdate=Gt,qt.spotLights.needsUpdate=Gt,qt.spotLightShadows.needsUpdate=Gt,qt.rectAreaLights.needsUpdate=Gt,qt.hemisphereLights.needsUpdate=Gt),Ga&&ye.fog===!0&&he.refreshFogUniforms(ji,Ga),he.refreshMaterialUniforms(ji,ye,D,U,k),Hr.upload(oe,Oe.uniformsList,ji,O));var qt,Gt;if(ye.isShaderMaterial&&ye.uniformsNeedUpdate===!0&&(Hr.upload(oe,Oe.uniformsList,ji,O),ye.uniformsNeedUpdate=!1),ye.isSpriteMaterial&&xt.setValue(oe,"center",st.center),xt.setValue(oe,"modelViewMatrix",st.modelViewMatrix),xt.setValue(oe,"normalMatrix",st.normalMatrix),xt.setValue(oe,"modelMatrix",st.matrixWorld),ye.isShaderMaterial||ye.isRawShaderMaterial){const Ct=ye.uniformsGroups;for(let ja=0,vd=Ct.length;ja<vd;ja++)if(w.isWebGL2){const Nh=Ct[ja];ke.update(Nh,Wi),ke.bind(Nh,Wi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Wi}(C,G,Z,q,$);F.setMaterial(q,Ae);let De=Z.index,He=1;q.wireframe===!0&&(De=W.getWireframeAttribute(Z),He=2);const Ie=Z.drawRange,Le=Z.attributes.position;let dt=Ie.start*He,kt=(Ie.start+Ie.count)*He;ge!==null&&(dt=Math.max(dt,ge.start*He),kt=Math.min(kt,(ge.start+ge.count)*He)),De!==null?(dt=Math.max(dt,0),kt=Math.min(kt,De.count)):Le!=null&&(dt=Math.max(dt,0),kt=Math.min(kt,Le.count));const vt=kt-dt;if(vt<0||vt===1/0)return;let ys;Fe.setup($,q,Ce,Z,De);let rt=Ge;if(De!==null&&(ys=I.get(De),rt=Et,rt.setIndex(ys)),$.isMesh)q.wireframe===!0?(F.setLineWidth(q.wireframeLinewidth*Re()),rt.setMode(1)):rt.setMode(4);else if($.isLine){let lt=q.linewidth;lt===void 0&&(lt=1),F.setLineWidth(lt*Re()),$.isLineSegments?rt.setMode(1):$.isLineLoop?rt.setMode(2):rt.setMode(3)}else $.isPoints?rt.setMode(0):$.isSprite&&rt.setMode(4);if($.isInstancedMesh)rt.renderInstances(dt,vt,$.count);else if(Z.isInstancedBufferGeometry){const lt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Vi=Math.min(Z.instanceCount,lt);rt.renderInstances(dt,vt,Vi)}else rt.render(dt,vt)},this.compile=function(C,G){function Z(q,$,ge){q.transparent===!0&&q.side===2?(q.side=1,q.needsUpdate=!0,_s(q,$,ge),q.side=0,q.needsUpdate=!0,_s(q,$,ge),q.side=2):_s(q,$,ge)}d=ve.get(C),d.init(),f.push(d),C.traverseVisible(function(q){q.isLight&&q.layers.test(G.layers)&&(d.pushLight(q),q.castShadow&&d.pushShadow(q))}),d.setupLights(m.physicallyCorrectLights),C.traverse(function(q){const $=q.material;if($)if(Array.isArray($))for(let ge=0;ge<$.length;ge++)Z($[ge],C,q);else Z($,C,q)}),f.pop(),d=null};let Ha=null;function Ah(){Gi.stop()}function Ch(){Gi.start()}const Gi=new co;function Rh(C,G,Z,q){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)Z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLight)d.pushLight(C),C.castShadow&&d.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||se.intersectsSprite(C)){q&&le.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Q);const ge=V.update(C),Ae=C.material;Ae.visible&&u.push(C,ge,Ae,Z,le.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==z.render.frame&&(C.skeleton.update(),C.skeleton.frame=z.render.frame),!C.frustumCulled||se.intersectsObject(C))){q&&le.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Q);const ge=V.update(C),Ae=C.material;if(Array.isArray(Ae)){const Ce=ge.groups;for(let De=0,He=Ce.length;De<He;De++){const Ie=Ce[De],Le=Ae[Ie.materialIndex];Le&&Le.visible&&u.push(C,ge,Le,Z,le.z,Ie)}}else Ae.visible&&u.push(C,ge,Ae,Z,le.z,null)}}const $=C.children;for(let ge=0,Ae=$.length;ge<Ae;ge++)Rh($[ge],G,Z,q)}function Lh(C,G,Z,q){const $=C.opaque,ge=C.transmissive,Ae=C.transparent;d.setupLightsView(Z),ge.length>0&&function(Ce,De,He){const Ie=w.isWebGL2;k===null&&(k=new Rt(1,1,{generateMipmaps:!0,type:A.has("EXT_color_buffer_half_float")?1016:1009,minFilter:1008,samples:Ie&&s===!0?4:0})),m.getDrawingBufferSize(ne),Ie?k.setSize(ne.x,ne.y):k.setSize(pr(ne.x),pr(ne.y));const Le=m.getRenderTarget();m.setRenderTarget(k),m.clear();const dt=m.toneMapping;m.toneMapping=0,xs(Ce,De,He),m.toneMapping=dt,O.updateMultisampleRenderTarget(k),O.updateRenderTargetMipmap(k),m.setRenderTarget(Le)}($,G,Z),q&&F.viewport(T.copy(q)),$.length>0&&xs($,G,Z),ge.length>0&&xs(ge,G,Z),Ae.length>0&&xs(Ae,G,Z),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function xs(C,G,Z){const q=G.isScene===!0?G.overrideMaterial:null;for(let $=0,ge=C.length;$<ge;$++){const Ae=C[$],Ce=Ae.object,De=Ae.geometry,He=q===null?Ae.material:q,Ie=Ae.group;Ce.layers.test(Z.layers)&&ad(Ce,G,Z,De,He,Ie)}}function ad(C,G,Z,q,$,ge){C.onBeforeRender(m,G,Z,q,$,ge),C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(m,G,Z,q,C,ge),$.transparent===!0&&$.side===2?($.side=1,$.needsUpdate=!0,m.renderBufferDirect(Z,G,q,$,C,ge),$.side=0,$.needsUpdate=!0,m.renderBufferDirect(Z,G,q,$,C,ge),$.side=2):m.renderBufferDirect(Z,G,q,$,C,ge),C.onAfterRender(m,G,Z,q,$,ge)}function _s(C,G,Z){G.isScene!==!0&&(G=pe);const q=R.get(C),$=d.state.lights,ge=d.state.shadowsArray,Ae=$.state.version,Ce=j.getParameters(C,$.state,ge,G,Z),De=j.getProgramCacheKey(Ce);let He=q.programs;q.environment=C.isMeshStandardMaterial?G.environment:null,q.fog=G.fog,q.envMap=(C.isMeshStandardMaterial?N:S).get(C.envMap||q.environment),He===void 0&&(C.addEventListener("dispose",Eh),He=new Map,q.programs=He);let Ie=He.get(De);if(Ie!==void 0){if(q.currentProgram===Ie&&q.lightsStateVersion===Ae)return Ph(C,Ce),Ie}else Ce.uniforms=j.getUniforms(C),C.onBuild(Z,Ce,m),C.onBeforeCompile(Ce,m),Ie=j.acquireProgram(Ce,De),He.set(De,Ie),q.uniforms=Ce.uniforms;const Le=q.uniforms;(C.isShaderMaterial||C.isRawShaderMaterial)&&C.clipping!==!0||(Le.clippingPlanes=ce.uniform),Ph(C,Ce),q.needsLights=function(vt){return vt.isMeshLambertMaterial||vt.isMeshToonMaterial||vt.isMeshPhongMaterial||vt.isMeshStandardMaterial||vt.isShadowMaterial||vt.isShaderMaterial&&vt.lights===!0}(C),q.lightsStateVersion=Ae,q.needsLights&&(Le.ambientLightColor.value=$.state.ambient,Le.lightProbe.value=$.state.probe,Le.directionalLights.value=$.state.directional,Le.directionalLightShadows.value=$.state.directionalShadow,Le.spotLights.value=$.state.spot,Le.spotLightShadows.value=$.state.spotShadow,Le.rectAreaLights.value=$.state.rectArea,Le.ltc_1.value=$.state.rectAreaLTC1,Le.ltc_2.value=$.state.rectAreaLTC2,Le.pointLights.value=$.state.point,Le.pointLightShadows.value=$.state.pointShadow,Le.hemisphereLights.value=$.state.hemi,Le.directionalShadowMap.value=$.state.directionalShadowMap,Le.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Le.spotShadowMap.value=$.state.spotShadowMap,Le.spotLightMatrix.value=$.state.spotLightMatrix,Le.spotLightMap.value=$.state.spotLightMap,Le.pointShadowMap.value=$.state.pointShadowMap,Le.pointShadowMatrix.value=$.state.pointShadowMatrix);const dt=Ie.getUniforms(),kt=Hr.seqWithValue(dt.seq,Le);return q.currentProgram=Ie,q.uniformsList=kt,Ie}function Ph(C,G){const Z=R.get(C);Z.outputEncoding=G.outputEncoding,Z.instancing=G.instancing,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}Gi.setAnimationLoop(function(C){Ha&&Ha(C)}),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(C){Ha=C,At.setAnimationLoop(C),C===null?Gi.stop():Gi.start()},At.addEventListener("sessionstart",Ah),At.addEventListener("sessionend",Ch),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(g===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(G),G=At.getCamera()),C.isScene===!0&&C.onBeforeRender(m,C,G,y),d=ve.get(C,f.length),d.init(),f.push(d),Q.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),se.setFromProjectionMatrix(Q),H=this.localClippingEnabled,ae=ce.init(this.clippingPlanes,H,G),u=fe.get(C,p.length),u.init(),p.push(u),Rh(C,G,0,m.sortObjects),u.finish(),m.sortObjects===!0&&u.sort(Y,K),ae===!0&&ce.beginShadows();const Z=d.state.shadowsArray;if(Me.render(Z,C,G),ae===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),Se.render(u,C),d.setupLights(m.physicallyCorrectLights),G.isArrayCamera){const q=G.cameras;for(let $=0,ge=q.length;$<ge;$++){const Ae=q[$];Lh(u,C,Ae,Ae.viewport)}}else Lh(u,C,G);y!==null&&(O.updateMultisampleRenderTarget(y),O.updateRenderTargetMipmap(y)),C.isScene===!0&&C.onAfterRender(m,C,G),Fe.resetDefaultState(),M=-1,b=null,f.pop(),d=f.length>0?f[f.length-1]:null,p.pop(),u=p.length>0?p[p.length-1]:null},this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(C,G,Z){R.get(C.texture).__webglTexture=G,R.get(C.depthTexture).__webglTexture=Z;const q=R.get(C);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=Z===void 0,q.__autoAllocateDepthBuffer||A.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,G){const Z=R.get(C);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(C,G=0,Z=0){y=C,_=G,v=Z;let q=!0,$=null,ge=!1,Ae=!1;if(C){const Ce=R.get(C);Ce.__useDefaultFramebuffer!==void 0?(F.bindFramebuffer(36160,null),q=!1):Ce.__webglFramebuffer===void 0?O.setupRenderTarget(C):Ce.__hasExternalTextures&&O.rebindTextures(C,R.get(C.texture).__webglTexture,R.get(C.depthTexture).__webglTexture);const De=C.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Ae=!0);const He=R.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?($=He[G],ge=!0):$=w.isWebGL2&&C.samples>0&&O.useMultisampledRTT(C)===!1?R.get(C).__webglMultisampledFramebuffer:He,T.copy(C.viewport),P.copy(C.scissor),L=C.scissorTest}else T.copy(X).multiplyScalar(D).floor(),P.copy(ie).multiplyScalar(D).floor(),L=te;if(F.bindFramebuffer(36160,$)&&w.drawBuffers&&q&&F.drawBuffers(C,$),F.viewport(T),F.scissor(P),F.setScissorTest(L),ge){const Ce=R.get(C.texture);oe.framebufferTexture2D(36160,36064,34069+G,Ce.__webglTexture,Z)}else if(Ae){const Ce=R.get(C.texture),De=G||0;oe.framebufferTextureLayer(36160,36064,Ce.__webglTexture,Z||0,De)}M=-1},this.readRenderTargetPixels=function(C,G,Z,q,$,ge,Ae){if(!C||!C.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=R.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ce=Ce[Ae]),Ce){F.bindFramebuffer(36160,Ce);try{const De=C.texture,He=De.format,Ie=De.type;if(He!==1023&&xe.convert(He)!==oe.getParameter(35739))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");const Le=Ie===1016&&(A.has("EXT_color_buffer_half_float")||w.isWebGL2&&A.has("EXT_color_buffer_float"));if(!(Ie===1009||xe.convert(Ie)===oe.getParameter(35738)||Ie===1015&&(w.isWebGL2||A.has("OES_texture_float")||A.has("WEBGL_color_buffer_float"))||Le))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");G>=0&&G<=C.width-q&&Z>=0&&Z<=C.height-$&&oe.readPixels(G,Z,q,$,xe.convert(He),xe.convert(Ie),ge)}finally{const De=y!==null?R.get(y).__webglFramebuffer:null;F.bindFramebuffer(36160,De)}}},this.copyFramebufferToTexture=function(C,G,Z=0){const q=Math.pow(2,-Z),$=Math.floor(G.image.width*q),ge=Math.floor(G.image.height*q);O.setTexture2D(G,0),oe.copyTexSubImage2D(3553,Z,0,0,C.x,C.y,$,ge),F.unbindTexture()},this.copyTextureToTexture=function(C,G,Z,q=0){const $=G.image.width,ge=G.image.height,Ae=xe.convert(Z.format),Ce=xe.convert(Z.type);O.setTexture2D(Z,0),oe.pixelStorei(37440,Z.flipY),oe.pixelStorei(37441,Z.premultiplyAlpha),oe.pixelStorei(3317,Z.unpackAlignment),G.isDataTexture?oe.texSubImage2D(3553,q,C.x,C.y,$,ge,Ae,Ce,G.image.data):G.isCompressedTexture?oe.compressedTexSubImage2D(3553,q,C.x,C.y,G.mipmaps[0].width,G.mipmaps[0].height,Ae,G.mipmaps[0].data):oe.texSubImage2D(3553,q,C.x,C.y,Ae,Ce,G.image),q===0&&Z.generateMipmaps&&oe.generateMipmap(3553),F.unbindTexture()},this.copyTextureToTexture3D=function(C,G,Z,q,$=0){if(m.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");const ge=C.max.x-C.min.x+1,Ae=C.max.y-C.min.y+1,Ce=C.max.z-C.min.z+1,De=xe.convert(q.format),He=xe.convert(q.type);let Ie;if(q.isData3DTexture)O.setTexture3D(q,0),Ie=32879;else{if(!q.isDataArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");O.setTexture2DArray(q,0),Ie=35866}oe.pixelStorei(37440,q.flipY),oe.pixelStorei(37441,q.premultiplyAlpha),oe.pixelStorei(3317,q.unpackAlignment);const Le=oe.getParameter(3314),dt=oe.getParameter(32878),kt=oe.getParameter(3316),vt=oe.getParameter(3315),ys=oe.getParameter(32877),rt=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;oe.pixelStorei(3314,rt.width),oe.pixelStorei(32878,rt.height),oe.pixelStorei(3316,C.min.x),oe.pixelStorei(3315,C.min.y),oe.pixelStorei(32877,C.min.z),Z.isDataTexture||Z.isData3DTexture?oe.texSubImage3D(Ie,$,G.x,G.y,G.z,ge,Ae,Ce,De,He,rt.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),oe.compressedTexSubImage3D(Ie,$,G.x,G.y,G.z,ge,Ae,Ce,De,rt.data)):oe.texSubImage3D(Ie,$,G.x,G.y,G.z,ge,Ae,Ce,De,He,rt),oe.pixelStorei(3314,Le),oe.pixelStorei(32878,dt),oe.pixelStorei(3316,kt),oe.pixelStorei(3315,vt),oe.pixelStorei(32877,ys),$===0&&q.generateMipmaps&&oe.generateMipmap(Ie),F.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?O.setTextureCube(C,0):C.isData3DTexture?O.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?O.setTexture2DArray(C,0):O.setTexture2D(C,0),F.unbindTexture()},this.resetState=function(){_=0,v=0,y=null,F.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Ho extends ko{}Ho.prototype.isWebGL1Renderer=!0;class Gr{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ue(e),this.density=t}clone(){return new Gr(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class Vr{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ue(e),this.near=t,this.far=i}clone(){return new Vr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class Go extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Wr{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=bt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ft=new E;class Ri{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}setX(e,t){return this.normalized&&(t=Ue(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ue(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ue(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ue(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yt(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ue(t,this.array),i=Ue(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ue(t,this.array),i=Ue(i,this.array),n=Ue(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ue(t,this.array),i=Ue(i,this.array),n=Ue(n,this.array),s=Ue(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new Be(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ri(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class sa extends ut{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let dn;const Un=new E,pn=new E,mn=new E,fn=new J,Bn=new J,Vo=new be,jr=new E,Fn=new E,qr=new E,Wo=new J,aa=new J,jo=new J;class qo extends Ne{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",dn===void 0){dn=new Ee;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Wr(t,5);dn.setIndex([0,1,2,0,2,3]),dn.setAttribute("position",new Ri(i,3,0,!1)),dn.setAttribute("uv",new Ri(i,2,3,!1))}this.geometry=dn,this.material=e!==void 0?e:new sa,this.center=new J(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),pn.setFromMatrixScale(this.matrixWorld),Vo.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),mn.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&pn.multiplyScalar(-mn.z);const i=this.material.rotation;let n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));const a=this.center;Xr(jr.set(-.5,-.5,0),mn,a,pn,n,s),Xr(Fn.set(.5,-.5,0),mn,a,pn,n,s),Xr(qr.set(.5,.5,0),mn,a,pn,n,s),Wo.set(0,0),aa.set(1,0),jo.set(1,1);let o=e.ray.intersectTriangle(jr,Fn,qr,!1,Un);if(o===null&&(Xr(Fn.set(-.5,.5,0),mn,a,pn,n,s),aa.set(0,1),o=e.ray.intersectTriangle(jr,qr,Fn,!1,Un),o===null))return;const l=e.ray.origin.distanceTo(Un);l<e.near||l>e.far||t.push({distance:l,point:Un.clone(),uv:Lt.getUV(Un,jr,Fn,qr,Wo,aa,jo,new J),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Xr(r,e,t,i,n,s){fn.subVectors(r,t).addScalar(.5).multiply(i),n!==void 0?(Bn.x=s*fn.x-n*fn.y,Bn.y=n*fn.x+s*fn.y):Bn.copy(fn),r.copy(e),r.x+=Bn.x,r.y+=Bn.y,r.applyMatrix4(Vo)}const Yr=new E,Xo=new E;class Yo extends Ne{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let i=0,n=t.length;i<n;i++){const s=t[i];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,i=0){t=Math.abs(t);const n=this.levels;let s;for(s=0;s<n.length&&!(t<n[s].distance);s++);return n.splice(s,0,{distance:t,hysteresis:i,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let i,n;for(i=1,n=t.length;i<n;i++){let s=t[i].distance;if(t[i].object.visible&&(s-=s*t[i].hysteresis),e<s)break}return t[i-1].object}return null}raycast(e,t){if(this.levels.length>0){Yr.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Yr);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Yr.setFromMatrixPosition(e.matrixWorld),Xo.setFromMatrixPosition(this.matrixWorld);const i=Yr.distanceTo(Xo)/e.zoom;let n,s;for(t[0].object.visible=!0,n=1,s=t.length;n<s;n++){let a=t[n].distance;if(t[n].object.visible&&(a-=a*t[n].hysteresis),!(i>=a))break;t[n-1].object.visible=!1,t[n].object.visible=!0}for(this._currentLevel=n-1;n<s;n++)t[n].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const i=this.levels;for(let n=0,s=i.length;n<s;n++){const a=i[n];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const Zo=new E,Jo=new ze,Ko=new ze,Eu=new E,Qo=new be;class $o extends at{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new be,this.bindMatrixInverse=new be}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ze,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const i=this.skeleton,n=this.geometry;Jo.fromBufferAttribute(n.attributes.skinIndex,e),Ko.fromBufferAttribute(n.attributes.skinWeight,e),Zo.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Ko.getComponent(s);if(a!==0){const o=Jo.getComponent(s);Qo.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Eu.copy(Zo).applyMatrix4(Qo),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class oa extends Ne{constructor(){super(),this.isBone=!0,this.type="Bone"}}class gn extends Je{constructor(e=null,t=1,i=1,n,s,a,o,l,h=1003,c=1003,u,d){super(null,a,o,l,h,c,n,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const el=new be,Au=new be;class Zr{constructor(e=[],t=[]){this.uuid=bt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(16*e.length),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new be;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:Au;el.multiplyMatrices(o,t[s]),el.toArray(i,16*s)}n!==null&&(n.needsUpdate=!0)}clone(){return new Zr(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(4*this.bones.length);e=Xa(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new gn(t,e,e,1023,1015);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){const s=e.bones[i];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new oa),this.bones.push(a),this.boneInverses.push(new be().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let n=0,s=t.length;n<s;n++){const a=t[n];e.bones.push(a.uuid);const o=i[n];e.boneInverses.push(o.toArray())}return e}}class vn extends Be{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const tl=new be,il=new be,Jr=[],Cu=new be,kn=new at;class nl extends at{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vn(new Float32Array(16*i),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1;for(let n=0;n<i;n++)this.setMatrixAt(n,Cu)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}raycast(e,t){const i=this.matrixWorld,n=this.count;if(kn.geometry=this.geometry,kn.material=this.material,kn.material!==void 0)for(let s=0;s<n;s++){this.getMatrixAt(s,tl),il.multiplyMatrices(i,tl),kn.matrixWorld=il,kn.raycast(e,Jr);for(let a=0,o=Jr.length;a<o;a++){const l=Jr[a];l.instanceId=s,l.object=this,t.push(l)}Jr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new vn(new Float32Array(3*this.instanceMatrix.count),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class gt extends ut{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ue(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rl=new E,sl=new E,al=new be,la=new Pn,Kr=new Ai;class gi extends Ne{constructor(e=new Ee,t=new gt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)rl.fromBufferAttribute(t,n-1),sl.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=rl.distanceTo(sl);e.setAttribute("lineDistance",new me(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Kr.copy(i.boundingSphere),Kr.applyMatrix4(n),Kr.radius+=s,e.ray.intersectsSphere(Kr)===!1)return;al.copy(n).invert(),la.copy(e.ray).applyMatrix4(al);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=new E,c=new E,u=new E,d=new E,p=this.isLineSegments?2:1,f=i.index,m=i.attributes.position;if(f!==null)for(let g=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count)-1;g<_;g+=p){const v=f.getX(g),y=f.getX(g+1);if(h.fromBufferAttribute(m,v),c.fromBufferAttribute(m,y),la.distanceSqToSegment(h,c,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(d);M<e.near||M>e.far||t.push({distance:M,point:u.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}else for(let g=Math.max(0,a.start),_=Math.min(m.count,a.start+a.count)-1;g<_;g+=p){if(h.fromBufferAttribute(m,g),c.fromBufferAttribute(m,g+1),la.distanceSqToSegment(h,c,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(d);v<e.near||v>e.far||t.push({distance:v,point:u.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){const a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}}const ol=new E,ll=new E;class Wt extends gi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)ol.fromBufferAttribute(t,n),ll.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+ol.distanceTo(ll);e.setAttribute("lineDistance",new me(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hl extends gi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ha extends ut{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const cl=new be,ca=new Pn,Qr=new Ai,$r=new E;class ul extends Ne{constructor(e=new Ee,t=new ha){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qr.copy(i.boundingSphere),Qr.applyMatrix4(n),Qr.radius+=s,e.ray.intersectsSphere(Qr)===!1)return;cl.copy(n).invert(),ca.copy(e.ray).applyMatrix4(cl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=i.index,c=i.attributes.position;if(h!==null)for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++){const p=h.getX(u);$r.fromBufferAttribute(c,p),dl($r,p,l,n,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++)$r.fromBufferAttribute(c,u),dl($r,u,l,n,e,t,this)}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){const a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}}function dl(r,e,t,i,n,s,a){const o=ca.distanceSqToPoint(r);if(o<t){const l=new E;ca.closestPointToPoint(r,l),l.applyMatrix4(i);const h=n.ray.origin.distanceTo(l);if(h<n.near||h>n.far)return;s.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class ua extends Je{constructor(e,t,i,n,s,a,o,l,h,c,u,d){super(null,a,o,l,h,c,n,s,u,d),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Bt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let n=0;const s=i.length;let a;a=t||e*i[s-1];let o,l=0,h=s-1;for(;l<=h;)if(n=Math.floor(l+(h-l)/2),o=i[n]-a,o<0)l=n+1;else{if(!(o>0)){h=n;break}h=n-1}if(n=h,i[n]===a)return n/(s-1);const c=i[n];return(n+(a-c)/(i[n+1]-c))/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);const a=this.getPoint(n),o=this.getPoint(s),l=t||(a.isVector2?new J:new E);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new E,n=[],s=[],a=[],o=new E,l=new be;for(let p=0;p<=e;p++){const f=p/e;n[p]=this.getTangentAt(f,new E)}s[0]=new E,a[0]=new E;let h=Number.MAX_VALUE;const c=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);c<=h&&(h=c,i.set(1,0,0)),u<=h&&(h=u,i.set(0,1,0)),d<=h&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();const f=Math.acos(Ze(n[p-1].dot(n[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(n[p],s[p])}if(t===!0){let p=Math.acos(Ze(s[0].dot(s[e]),-1,1));p/=e,n[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(n[f],p*f)),a[f].crossVectors(n[f],s[f])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class es extends Bt{constructor(e=0,t=0,i=1,n=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const i=t||new J,n=2*Math.PI;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(s=a?0:n),this.aClockwise!==!0||a||(s===n?s=-n:s-=n);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=h-this.aY;l=d*c-p*u+this.aX,h=d*u+p*c+this.aY}return i.set(l,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class pl extends es{constructor(e,t,i,n,s,a){super(e,t,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function da(){let r=0,e=0,t=0,i=0;function n(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,h){n(a,o,h*(o-s),h*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,h,c,u){let d=(a-s)/h-(o-s)/(h+c)+(o-a)/c,p=(o-a)/c-(l-a)/(c+u)+(l-o)/u;d*=c,p*=c,n(a,o,d,p)},calc:function(s){const a=s*s;return r+e*s+t*a+i*(a*s)}}}const ts=new E,pa=new da,ma=new da,fa=new da;class ml extends Bt{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new E){const i=t,n=this.points,s=n.length,a=(s-(this.closed?0:1))*e;let o,l,h=Math.floor(a),c=a-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/s)+1)*s:c===0&&h===s-1&&(h=s-2,c=1),this.closed||h>0?o=n[(h-1)%s]:(ts.subVectors(n[0],n[1]).add(n[0]),o=ts);const u=n[h%s],d=n[(h+1)%s];if(this.closed||h+2<s?l=n[(h+2)%s]:(ts.subVectors(n[s-1],n[s-2]).add(n[s-1]),l=ts),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let f=Math.pow(o.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(l),p);m<1e-4&&(m=1),f<1e-4&&(f=m),g<1e-4&&(g=m),pa.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,f,m,g),ma.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,f,m,g),fa.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,f,m,g)}else this.curveType==="catmullrom"&&(pa.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),ma.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),fa.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return i.set(pa.calc(c),ma.calc(c),fa.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new E().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function fl(r,e,t,i,n){const s=.5*(i-e),a=.5*(n-t),o=r*r;return(2*t-2*i+s+a)*(r*o)+(-3*t+3*i-2*s-a)*o+s*r+t}function Hn(r,e,t,i){return function(n,s){const a=1-n;return a*a*s}(r,e)+function(n,s){return 2*(1-n)*n*s}(r,t)+function(n,s){return n*n*s}(r,i)}function Gn(r,e,t,i,n){return function(s,a){const o=1-s;return o*o*o*a}(r,e)+function(s,a){const o=1-s;return 3*o*o*s*a}(r,t)+function(s,a){return 3*(1-s)*s*s*a}(r,i)+function(s,a){return s*s*s*a}(r,n)}class ga extends Bt{constructor(e=new J,t=new J,i=new J,n=new J){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new J){const i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Gn(e,n.x,s.x,a.x,o.x),Gn(e,n.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class gl extends Bt{constructor(e=new E,t=new E,i=new E,n=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new E){const i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Gn(e,n.x,s.x,a.x,o.x),Gn(e,n.y,s.y,a.y,o.y),Gn(e,n.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class is extends Bt{constructor(e=new J,t=new J){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new J){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const i=t||new J;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vl extends Bt{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class va extends Bt{constructor(e=new J,t=new J,i=new J){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new J){const i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(Hn(e,n.x,s.x,a.x),Hn(e,n.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xa extends Bt{constructor(e=new E,t=new E,i=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new E){const i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(Hn(e,n.x,s.x,a.x),Hn(e,n.y,s.y,a.y),Hn(e,n.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _a extends Bt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new J){const i=t,n=this.points,s=(n.length-1)*e,a=Math.floor(s),o=s-a,l=n[a===0?a:a-1],h=n[a],c=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(fl(o,l.x,h.x,c.x,u.x),fl(o,l.y,h.y,c.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new J().fromArray(n))}return this}}var ya=Object.freeze({__proto__:null,ArcCurve:pl,CatmullRomCurve3:ml,CubicBezierCurve:ga,CubicBezierCurve3:gl,EllipseCurve:es,LineCurve:is,LineCurve3:vl,QuadraticBezierCurve:va,QuadraticBezierCurve3:xa,SplineCurve:_a});class xl extends Bt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new is(t,e))}getPoint(e,t){const i=e*this.getLength(),n=this.getCurveLengths();let s=0;for(;s<n.length;){if(n[s]>=i){const a=n[s]-i,o=this.curves[s],l=o.getLength(),h=l===0?0:1-a/l;return o.getPointAt(h,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let n=0,s=this.curves;n<s.length;n++){const a=s[n],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let h=0;h<l.length;h++){const c=l[h];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(new ya[n.type]().fromJSON(n))}return this}}class Vn extends xl{constructor(e){super(),this.type="Path",this.currentPoint=new J,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new is(this.currentPoint.clone(),new J(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){const s=new va(this.currentPoint.clone(),new J(e,t),new J(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,s,a){const o=new ga(this.currentPoint.clone(),new J(e,t),new J(i,n),new J(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new _a(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,n,s,a),this}absarc(e,t,i,n,s,a){return this.absellipse(e,t,i,i,n,s,a),this}ellipse(e,t,i,n,s,a,o,l){const h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+h,t+c,i,n,s,a,o,l),this}absellipse(e,t,i,n,s,a,o,l){const h=new es(e,t,i,n,s,a,o,l);if(this.curves.length>0){const u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);const c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class xn extends Ee{constructor(e=[new J(0,-.5),new J(.5,0),new J(0,.5)],t=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=Ze(n,0,2*Math.PI);const s=[],a=[],o=[],l=[],h=[],c=1/t,u=new E,d=new J,p=new E,f=new E,m=new E;let g=0,_=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,_=e[v+1].y-e[v].y,p.x=1*_,p.y=-g,p.z=0*_,m.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(m.x,m.y,m.z);break;default:g=e[v+1].x-e[v].x,_=e[v+1].y-e[v].y,p.x=1*_,p.y=-g,p.z=0*_,f.copy(p),p.x+=m.x,p.y+=m.y,p.z+=m.z,p.normalize(),l.push(p.x,p.y,p.z),m.copy(f)}for(let v=0;v<=t;v++){const y=i+v*c*n,M=Math.sin(y),b=Math.cos(y);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*M,u.y=e[T].y,u.z=e[T].x*b,a.push(u.x,u.y,u.z),d.x=v/t,d.y=T/(e.length-1),o.push(d.x,d.y);const P=l[3*T+0]*M,L=l[3*T+1],B=l[3*T+0]*b;h.push(P,L,B)}}for(let v=0;v<t;v++)for(let y=0;y<e.length-1;y++){const M=y+v*e.length,b=M,T=M+e.length,P=M+e.length+1,L=M+1;s.push(b,T,L),s.push(P,L,T)}this.setIndex(s),this.setAttribute("position",new me(a,3)),this.setAttribute("uv",new me(o,2)),this.setAttribute("normal",new me(h,3))}static fromJSON(e){return new xn(e.points,e.segments,e.phiStart,e.phiLength)}}class Wn extends xn{constructor(e=1,t=1,i=4,n=8){const s=new Vn;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:n}}static fromJSON(e){return new Wn(e.radius,e.length,e.capSegments,e.radialSegments)}}class jn extends Ee{constructor(e=1,t=8,i=0,n=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);const s=[],a=[],o=[],l=[],h=new E,c=new J;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const p=i+u/t*n;h.x=e*Math.cos(p),h.y=e*Math.sin(p),a.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(a[d]/e+1)/2,c.y=(a[d+1]/e+1)/2,l.push(c.x,c.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(o,3)),this.setAttribute("uv",new me(l,2))}static fromJSON(e){return new jn(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Li extends Ee{constructor(e=1,t=1,i=1,n=8,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const h=this;n=Math.floor(n),s=Math.floor(s);const c=[],u=[],d=[],p=[];let f=0;const m=[],g=i/2;let _=0;function v(y){const M=f,b=new J,T=new E;let P=0;const L=y===!0?e:t,B=y===!0?1:-1;for(let D=1;D<=n;D++)u.push(0,g*B,0),d.push(0,B,0),p.push(.5,.5),f++;const U=f;for(let D=0;D<=n;D++){const Y=D/n*l+o,K=Math.cos(Y),X=Math.sin(Y);T.x=L*X,T.y=g*B,T.z=L*K,u.push(T.x,T.y,T.z),d.push(0,B,0),b.x=.5*K+.5,b.y=.5*X*B+.5,p.push(b.x,b.y),f++}for(let D=0;D<n;D++){const Y=M+D,K=U+D;y===!0?c.push(K,K+1,Y):c.push(K+1,K,Y),P+=3}h.addGroup(_,P,y===!0?1:2),_+=P}(function(){const y=new E,M=new E;let b=0;const T=(t-e)/i;for(let P=0;P<=s;P++){const L=[],B=P/s,U=B*(t-e)+e;for(let D=0;D<=n;D++){const Y=D/n,K=Y*l+o,X=Math.sin(K),ie=Math.cos(K);M.x=U*X,M.y=-B*i+g,M.z=U*ie,u.push(M.x,M.y,M.z),y.set(X,T,ie).normalize(),d.push(y.x,y.y,y.z),p.push(Y,1-B),L.push(f++)}m.push(L)}for(let P=0;P<n;P++)for(let L=0;L<s;L++){const B=m[L][P],U=m[L+1][P],D=m[L+1][P+1],Y=m[L][P+1];c.push(B,U,Y),c.push(U,D,Y),b+=6}h.addGroup(_,b,0),_+=b})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(c),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(d,3)),this.setAttribute("uv",new me(p,2))}static fromJSON(e){return new Li(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qn extends Li{constructor(e=1,t=1,i=8,n=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new qn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ei extends Ee{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};const s=[],a=[];function o(d,p,f,m){const g=m+1,_=[];for(let v=0;v<=g;v++){_[v]=[];const y=d.clone().lerp(f,v/g),M=p.clone().lerp(f,v/g),b=g-v;for(let T=0;T<=b;T++)_[v][T]=T===0&&v===g?y:y.clone().lerp(M,T/b)}for(let v=0;v<g;v++)for(let y=0;y<2*(g-v)-1;y++){const M=Math.floor(y/2);y%2==0?(l(_[v][M+1]),l(_[v+1][M]),l(_[v][M])):(l(_[v][M+1]),l(_[v+1][M+1]),l(_[v+1][M]))}}function l(d){s.push(d.x,d.y,d.z)}function h(d,p){const f=3*d;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function c(d,p,f,m){m<0&&d.x===1&&(a[p]=d.x-1),f.x===0&&f.z===0&&(a[p]=m/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){const p=new E,f=new E,m=new E;for(let g=0;g<t.length;g+=3)h(t[g+0],p),h(t[g+1],f),h(t[g+2],m),o(p,f,m,d)})(n),function(d){const p=new E;for(let f=0;f<s.length;f+=3)p.x=s[f+0],p.y=s[f+1],p.z=s[f+2],p.normalize().multiplyScalar(d),s[f+0]=p.x,s[f+1]=p.y,s[f+2]=p.z}(i),function(){const d=new E;for(let f=0;f<s.length;f+=3){d.x=s[f+0],d.y=s[f+1],d.z=s[f+2];const m=u(d)/2/Math.PI+.5,g=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(m,1-g)}var p;(function(){const f=new E,m=new E,g=new E,_=new E,v=new J,y=new J,M=new J;for(let b=0,T=0;b<s.length;b+=9,T+=6){f.set(s[b+0],s[b+1],s[b+2]),m.set(s[b+3],s[b+4],s[b+5]),g.set(s[b+6],s[b+7],s[b+8]),v.set(a[T+0],a[T+1]),y.set(a[T+2],a[T+3]),M.set(a[T+4],a[T+5]),_.copy(f).add(m).add(g).divideScalar(3);const P=u(_);c(v,T+0,f,P),c(y,T+2,m,P),c(M,T+4,g,P)}})(),function(){for(let f=0;f<a.length;f+=6){const m=a[f+0],g=a[f+2],_=a[f+4],v=Math.max(m,g,_),y=Math.min(m,g,_);v>.9&&y<.1&&(m<.2&&(a[f+0]+=1),g<.2&&(a[f+2]+=1),_<.2&&(a[f+4]+=1))}}()}(),this.setAttribute("position",new me(s,3)),this.setAttribute("normal",new me(s.slice(),3)),this.setAttribute("uv",new me(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals()}static fromJSON(e){return new ei(e.vertices,e.indices,e.radius,e.details)}}class Xn extends ei{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,n=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Xn(e.radius,e.detail)}}const ns=new E,rs=new E,Ma=new E,ss=new Lt;class _l extends Ee{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const n=Math.pow(10,4),s=Math.cos(yi*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,h=[0,0,0],c=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<l;f+=3){a?(h[0]=a.getX(f),h[1]=a.getX(f+1),h[2]=a.getX(f+2)):(h[0]=f,h[1]=f+1,h[2]=f+2);const{a:m,b:g,c:_}=ss;if(m.fromBufferAttribute(o,h[0]),g.fromBufferAttribute(o,h[1]),_.fromBufferAttribute(o,h[2]),ss.getNormal(Ma),u[0]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,u[1]=`${Math.round(g.x*n)},${Math.round(g.y*n)},${Math.round(g.z*n)}`,u[2]=`${Math.round(_.x*n)},${Math.round(_.y*n)},${Math.round(_.z*n)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let v=0;v<3;v++){const y=(v+1)%3,M=u[v],b=u[y],T=ss[c[v]],P=ss[c[y]],L=`${M}_${b}`,B=`${b}_${M}`;B in d&&d[B]?(Ma.dot(d[B].normal)<=s&&(p.push(T.x,T.y,T.z),p.push(P.x,P.y,P.z)),d[B]=null):L in d||(d[L]={index0:h[v],index1:h[y],normal:Ma.clone()})}}for(const f in d)if(d[f]){const{index0:m,index1:g}=d[f];ns.fromBufferAttribute(o,m),rs.fromBufferAttribute(o,g),p.push(ns.x,ns.y,ns.z),p.push(rs.x,rs.y,rs.z)}this.setAttribute("position",new me(p,3))}}}class Pi extends Vn{constructor(e){super(e),this.uuid=bt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(new Vn().fromJSON(n))}return this}}const Ru=function(r,e,t=2){const i=e&&e.length,n=i?e[0]*t:r.length;let s=yl(r,0,n,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,h,c,u,d,p;if(i&&(s=function(f,m,g,_){const v=[];let y,M,b,T,P;for(y=0,M=m.length;y<M;y++)b=m[y]*_,T=y<M-1?m[y+1]*_:f.length,P=yl(f,b,T,_,!1),P===P.next&&(P.steiner=!0),v.push(Uu(P));for(v.sort(Nu),y=0;y<v.length;y++)g=zu(v[y],g);return g}(r,e,s,t)),r.length>80*t){o=h=r[0],l=c=r[1];for(let f=t;f<n;f+=t)u=r[f],d=r[f+1],u<o&&(o=u),d<l&&(l=d),u>h&&(h=u),d>c&&(c=d);p=Math.max(h-o,c-l),p=p!==0?32767/p:0}return Yn(s,a,t,o,l,p,0),a};function yl(r,e,t,i,n){let s,a;if(n===function(o,l,h,c){let u=0;for(let d=l,p=h-c;d<h;d+=c)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u}(r,e,t,i)>0)for(s=e;s<t;s+=i)a=Sl(s,r[s],r[s+1],a);else for(s=t-i;s>=e;s-=i)a=Sl(s,r[s],r[s+1],a);return a&&as(a,a.next)&&(Jn(a),a=a.next),a}function Di(r,e){if(!r)return r;e||(e=r);let t,i=r;do if(t=!1,i.steiner||!as(i,i.next)&&qe(i.prev,i,i.next)!==0)i=i.next;else{if(Jn(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function Yn(r,e,t,i,n,s,a){if(!r)return;!a&&s&&function(c,u,d,p){let f=c;do f.z===0&&(f.z=ba(f.x,f.y,u,d,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==c);f.prevZ.nextZ=null,f.prevZ=null,function(m){let g,_,v,y,M,b,T,P,L=1;do{for(_=m,m=null,M=null,b=0;_;){for(b++,v=_,T=0,g=0;g<L&&(T++,v=v.nextZ,v);g++);for(P=L;T>0||P>0&&v;)T!==0&&(P===0||!v||_.z<=v.z)?(y=_,_=_.nextZ,T--):(y=v,v=v.nextZ,P--),M?M.nextZ=y:m=y,y.prevZ=M,M=y;_=v}M.nextZ=null,L*=2}while(b>1)}(f)}(r,i,n,s);let o,l,h=r;for(;r.prev!==r.next;)if(o=r.prev,l=r.next,s?Pu(r,i,n,s):Lu(r))e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),Jn(r),r=l.next,h=l.next;else if((r=l)===h){a?a===1?Yn(r=Du(Di(r),e,t),e,t,i,n,s,2):a===2&&Iu(r,e,t,i,n,s):Yn(Di(r),e,t,i,n,s,1);break}}function Lu(r){const e=r.prev,t=r,i=r.next;if(qe(e,t,i)>=0)return!1;const n=e.x,s=t.x,a=i.x,o=e.y,l=t.y,h=i.y,c=n<s?n<a?n:a:s<a?s:a,u=o<l?o<h?o:h:l<h?l:h,d=n>s?n>a?n:a:s>a?s:a,p=o>l?o>h?o:h:l>h?l:h;let f=i.next;for(;f!==e;){if(f.x>=c&&f.x<=d&&f.y>=u&&f.y<=p&&_n(n,o,s,l,a,h,f.x,f.y)&&qe(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Pu(r,e,t,i){const n=r.prev,s=r,a=r.next;if(qe(n,s,a)>=0)return!1;const o=n.x,l=s.x,h=a.x,c=n.y,u=s.y,d=a.y,p=o<l?o<h?o:h:l<h?l:h,f=c<u?c<d?c:d:u<d?u:d,m=o>l?o>h?o:h:l>h?l:h,g=c>u?c>d?c:d:u>d?u:d,_=ba(p,f,e,t,i),v=ba(m,g,e,t,i);let y=r.prevZ,M=r.nextZ;for(;y&&y.z>=_&&M&&M.z<=v;){if(y.x>=p&&y.x<=m&&y.y>=f&&y.y<=g&&y!==n&&y!==a&&_n(o,c,l,u,h,d,y.x,y.y)&&qe(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=p&&M.x<=m&&M.y>=f&&M.y<=g&&M!==n&&M!==a&&_n(o,c,l,u,h,d,M.x,M.y)&&qe(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=m&&y.y>=f&&y.y<=g&&y!==n&&y!==a&&_n(o,c,l,u,h,d,y.x,y.y)&&qe(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=v;){if(M.x>=p&&M.x<=m&&M.y>=f&&M.y<=g&&M!==n&&M!==a&&_n(o,c,l,u,h,d,M.x,M.y)&&qe(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Du(r,e,t){let i=r;do{const n=i.prev,s=i.next.next;!as(n,s)&&Ml(n,i,i.next,s)&&Zn(n,s)&&Zn(s,n)&&(e.push(n.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),Jn(i),Jn(i.next),i=r=s),i=i.next}while(i!==r);return Di(i)}function Iu(r,e,t,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Bu(a,o)){let l=bl(a,o);return a=Di(a,a.next),l=Di(l,l.next),Yn(a,e,t,i,n,s,0),void Yn(l,e,t,i,n,s,0)}o=o.next}a=a.next}while(a!==r)}function Nu(r,e){return r.x-e.x}function zu(r,e){const t=function(n,s){let a,o=s,l=-1/0;const h=n.x,c=n.y;do{if(c<=o.y&&c>=o.next.y&&o.next.y!==o.y){const g=o.x+(c-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(g<=h&&g>l&&(l=g,a=o.x<o.next.x?o:o.next,g===h))return a}o=o.next}while(o!==s);if(!a)return null;const u=a,d=a.x,p=a.y;let f,m=1/0;o=a;do h>=o.x&&o.x>=d&&h!==o.x&&_n(c<p?h:l,c,d,p,c<p?l:h,c,o.x,o.y)&&(f=Math.abs(c-o.y)/(h-o.x),Zn(o,n)&&(f<m||f===m&&(o.x>a.x||o.x===a.x&&Ou(a,o)))&&(a=o,m=f)),o=o.next;while(o!==u);return a}(r,e);if(!t)return e;const i=bl(t,r);return Di(i,i.next),Di(t,t.next)}function Ou(r,e){return qe(r.prev,r,e.prev)<0&&qe(e.next,r,r.next)<0}function ba(r,e,t,i,n){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*n|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*n|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Uu(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function _n(r,e,t,i,n,s,a,o){return(n-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(n-a)*(i-o)}function Bu(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!function(t,i){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==i.i&&n.next.i!==i.i&&Ml(n,n.next,t,i))return!0;n=n.next}while(n!==t);return!1}(r,e)&&(Zn(r,e)&&Zn(e,r)&&function(t,i){let n=t,s=!1;const a=(t.x+i.x)/2,o=(t.y+i.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&a<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==t);return s}(r,e)&&(qe(r.prev,r,e.prev)||qe(r,e.prev,e))||as(r,e)&&qe(r.prev,r,r.next)>0&&qe(e.prev,e,e.next)>0)}function qe(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function as(r,e){return r.x===e.x&&r.y===e.y}function Ml(r,e,t,i){const n=ls(qe(r,e,t)),s=ls(qe(r,e,i)),a=ls(qe(t,i,r)),o=ls(qe(t,i,e));return n!==s&&a!==o||!(n!==0||!os(r,t,e))||!(s!==0||!os(r,i,e))||!(a!==0||!os(t,r,i))||!(o!==0||!os(t,e,i))}function os(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function ls(r){return r>0?1:r<0?-1:0}function Zn(r,e){return qe(r.prev,r,r.next)<0?qe(r,e,r.next)>=0&&qe(r,r.prev,e)>=0:qe(r,e,r.prev)<0||qe(r,r.next,e)<0}function bl(r,e){const t=new Sa(r.i,r.x,r.y),i=new Sa(e.i,e.x,e.y),n=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=n,n.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Sl(r,e,t,i){const n=new Sa(r,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Jn(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Sa(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}class jt{static area(e){const t=e.length;let i=0;for(let n=t-1,s=0;s<t;n=s++)i+=e[n].x*e[s].y-e[s].x*e[n].y;return .5*i}static isClockWise(e){return jt.area(e)<0}static triangulateShape(e,t){const i=[],n=[],s=[];wl(e),Tl(i,e);let a=e.length;t.forEach(wl);for(let l=0;l<t.length;l++)n.push(a),a+=t[l].length,Tl(i,t[l]);const o=Ru(i,n);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function wl(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Tl(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Kn extends Ee{constructor(e=new Pi([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,n=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){const l=[],h=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Fu;let y,M,b,T,P,L=!1;_&&(y=_.getSpacedPoints(c),L=!0,d=!1,M=_.computeFrenetFrames(c,!1),b=new E,T=new E,P=new E),d||(g=0,p=0,f=0,m=0);const B=o.extractPoints(h);let U=B.shape;const D=B.holes;if(!jt.isClockWise(U)){U=U.reverse();for(let z=0,R=D.length;z<R;z++){const O=D[z];jt.isClockWise(O)&&(D[z]=O.reverse())}}const Y=jt.triangulateShape(U,D),K=U;for(let z=0,R=D.length;z<R;z++){const O=D[z];U=U.concat(O)}function X(z,R,O){return R||console.error("THREE.ExtrudeGeometry: vec does not exist"),R.clone().multiplyScalar(O).add(z)}const ie=U.length,te=Y.length;function se(z,R,O){let S,N,I;const W=z.x-R.x,V=z.y-R.y,j=O.x-z.x,he=O.y-z.y,fe=W*W+V*V,ve=W*he-V*j;if(Math.abs(ve)>Number.EPSILON){const ce=Math.sqrt(fe),Me=Math.sqrt(j*j+he*he),Se=R.x-V/ce,_e=R.y+W/ce,Ge=((O.x-he/Me-Se)*he-(O.y+j/Me-_e)*j)/(W*he-V*j);S=Se+W*Ge-z.x,N=_e+V*Ge-z.y;const Et=S*S+N*N;if(Et<=2)return new J(S,N);I=Math.sqrt(Et/2)}else{let ce=!1;W>Number.EPSILON?j>Number.EPSILON&&(ce=!0):W<-Number.EPSILON?j<-Number.EPSILON&&(ce=!0):Math.sign(V)===Math.sign(he)&&(ce=!0),ce?(S=-V,N=W,I=Math.sqrt(fe)):(S=W,N=V,I=Math.sqrt(fe/2))}return new J(S/I,N/I)}const ae=[];for(let z=0,R=K.length,O=R-1,S=z+1;z<R;z++,O++,S++)O===R&&(O=0),S===R&&(S=0),ae[z]=se(K[z],K[O],K[S]);const H=[];let k,Q=ae.concat();for(let z=0,R=D.length;z<R;z++){const O=D[z];k=[];for(let S=0,N=O.length,I=N-1,W=S+1;S<N;S++,I++,W++)I===N&&(I=0),W===N&&(W=0),k[S]=se(O[S],O[I],O[W]);H.push(k),Q=Q.concat(k)}for(let z=0;z<g;z++){const R=z/g,O=p*Math.cos(R*Math.PI/2),S=f*Math.sin(R*Math.PI/2)+m;for(let N=0,I=K.length;N<I;N++){const W=X(K[N],ae[N],S);pe(W.x,W.y,-O)}for(let N=0,I=D.length;N<I;N++){const W=D[N];k=H[N];for(let V=0,j=W.length;V<j;V++){const he=X(W[V],k[V],S);pe(he.x,he.y,-O)}}}const ne=f+m;for(let z=0;z<ie;z++){const R=d?X(U[z],Q[z],ne):U[z];L?(T.copy(M.normals[0]).multiplyScalar(R.x),b.copy(M.binormals[0]).multiplyScalar(R.y),P.copy(y[0]).add(T).add(b),pe(P.x,P.y,P.z)):pe(R.x,R.y,0)}for(let z=1;z<=c;z++)for(let R=0;R<ie;R++){const O=d?X(U[R],Q[R],ne):U[R];L?(T.copy(M.normals[z]).multiplyScalar(O.x),b.copy(M.binormals[z]).multiplyScalar(O.y),P.copy(y[z]).add(T).add(b),pe(P.x,P.y,P.z)):pe(O.x,O.y,u/c*z)}for(let z=g-1;z>=0;z--){const R=z/g,O=p*Math.cos(R*Math.PI/2),S=f*Math.sin(R*Math.PI/2)+m;for(let N=0,I=K.length;N<I;N++){const W=X(K[N],ae[N],S);pe(W.x,W.y,u+O)}for(let N=0,I=D.length;N<I;N++){const W=D[N];k=H[N];for(let V=0,j=W.length;V<j;V++){const he=X(W[V],k[V],S);L?pe(he.x,he.y+y[c-1].y,y[c-1].x+O):pe(he.x,he.y,u+O)}}}function le(z,R){let O=z.length;for(;--O>=0;){const S=O;let N=O-1;N<0&&(N=z.length-1);for(let I=0,W=c+2*g;I<W;I++){const V=ie*I,j=ie*(I+1);A(R+S+V,R+N+V,R+N+j,R+S+j)}}}function pe(z,R,O){l.push(z),l.push(R),l.push(O)}function Re(z,R,O){w(z),w(R),w(O);const S=n.length/3,N=v.generateTopUV(i,n,S-3,S-2,S-1);F(N[0]),F(N[1]),F(N[2])}function A(z,R,O,S){w(z),w(R),w(S),w(R),w(O),w(S);const N=n.length/3,I=v.generateSideWallUV(i,n,N-6,N-3,N-2,N-1);F(I[0]),F(I[1]),F(I[3]),F(I[1]),F(I[2]),F(I[3])}function w(z){n.push(l[3*z+0]),n.push(l[3*z+1]),n.push(l[3*z+2])}function F(z){s.push(z.x),s.push(z.y)}(function(){const z=n.length/3;if(d){let R=0,O=ie*R;for(let S=0;S<te;S++){const N=Y[S];Re(N[2]+O,N[1]+O,N[0]+O)}R=c+2*g,O=ie*R;for(let S=0;S<te;S++){const N=Y[S];Re(N[0]+O,N[1]+O,N[2]+O)}}else{for(let R=0;R<te;R++){const O=Y[R];Re(O[2],O[1],O[0])}for(let R=0;R<te;R++){const O=Y[R];Re(O[0]+ie*c,O[1]+ie*c,O[2]+ie*c)}}i.addGroup(z,n.length/3-z,0)})(),function(){const z=n.length/3;let R=0;le(K,R),R+=K.length;for(let O=0,S=D.length;O<S;O++){const N=D[O];le(N,R),R+=N.length}i.addGroup(z,n.length/3-z,1)}()}this.setAttribute("position",new me(n,3)),this.setAttribute("uv",new me(s,2)),this.computeVertexNormals()}toJSON(){const e=super.toJSON();return function(t,i,n){if(n.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){const o=t[s];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},i),i.extrudePath!==void 0&&(n.options.extrudePath=i.extrudePath.toJSON()),n}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){const i=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];i.push(o)}const n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new ya[n.type]().fromJSON(n)),new Kn(i,e.options)}}const Fu={generateTopUV:function(r,e,t,i,n){const s=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],h=e[3*n],c=e[3*n+1];return[new J(s,a),new J(o,l),new J(h,c)]},generateSideWallUV:function(r,e,t,i,n,s){const a=e[3*t],o=e[3*t+1],l=e[3*t+2],h=e[3*i],c=e[3*i+1],u=e[3*i+2],d=e[3*n],p=e[3*n+1],f=e[3*n+2],m=e[3*s],g=e[3*s+1],_=e[3*s+2];return Math.abs(o-c)<Math.abs(a-h)?[new J(a,1-l),new J(h,1-u),new J(d,1-f),new J(m,1-_)]:[new J(o,1-l),new J(c,1-u),new J(p,1-f),new J(g,1-_)]}};class Qn extends ei{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Qn(e.radius,e.detail)}}class yn extends ei{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new yn(e.radius,e.detail)}}class $n extends Ee{constructor(e=.5,t=1,i=8,n=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i);const o=[],l=[],h=[],c=[];let u=e;const d=(t-e)/(n=Math.max(1,n)),p=new E,f=new J;for(let m=0;m<=n;m++){for(let g=0;g<=i;g++){const _=s+g/i*a;p.x=u*Math.cos(_),p.y=u*Math.sin(_),l.push(p.x,p.y,p.z),h.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,c.push(f.x,f.y)}u+=d}for(let m=0;m<n;m++){const g=m*(i+1);for(let _=0;_<i;_++){const v=_+g,y=v,M=v+i+1,b=v+i+2,T=v+1;o.push(y,M,T),o.push(M,b,T)}}this.setIndex(o),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(c,2))}static fromJSON(e){return new $n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class er extends Ee{constructor(e=new Pi([new J(0,.5),new J(-.5,-.5),new J(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],n=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)h(e);else for(let c=0;c<e.length;c++)h(e[c]),this.addGroup(o,l,c),o+=l,l=0;function h(c){const u=n.length/3,d=c.extractPoints(t);let p=d.shape;const f=d.holes;jt.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,_=f.length;g<_;g++){const v=f[g];jt.isClockWise(v)===!0&&(f[g]=v.reverse())}const m=jt.triangulateShape(p,f);for(let g=0,_=f.length;g<_;g++){const v=f[g];p=p.concat(v)}for(let g=0,_=p.length;g<_;g++){const v=p[g];n.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let g=0,_=m.length;g<_;g++){const v=m[g],y=v[0]+u,M=v[1]+u,b=v[2]+u;i.push(y,M,b),l+=3}}this.setIndex(i),this.setAttribute("position",new me(n,3)),this.setAttribute("normal",new me(s,3)),this.setAttribute("uv",new me(a,2))}toJSON(){const e=super.toJSON();return function(t,i){if(i.shapes=[],Array.isArray(t))for(let n=0,s=t.length;n<s;n++){const a=t[n];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i}(this.parameters.shapes,e)}static fromJSON(e,t){const i=[];for(let n=0,s=e.shapes.length;n<s;n++){const a=t[e.shapes[n]];i.push(a)}return new er(i,e.curveSegments)}}class Mn extends Ee{constructor(e=1,t=32,i=16,n=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let h=0;const c=[],u=new E,d=new E,p=[],f=[],m=[],g=[];for(let _=0;_<=i;_++){const v=[],y=_/i;let M=0;_==0&&a==0?M=.5/t:_==i&&l==Math.PI&&(M=-.5/t);for(let b=0;b<=t;b++){const T=b/t;u.x=-e*Math.cos(n+T*s)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(n+T*s)*Math.sin(a+y*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),g.push(T+M,1-y),v.push(h++)}c.push(v)}for(let _=0;_<i;_++)for(let v=0;v<t;v++){const y=c[_][v+1],M=c[_][v],b=c[_+1][v],T=c[_+1][v+1];(_!==0||a>0)&&p.push(y,M,T),(_!==i-1||l<Math.PI)&&p.push(M,b,T)}this.setIndex(p),this.setAttribute("position",new me(f,3)),this.setAttribute("normal",new me(m,3)),this.setAttribute("uv",new me(g,2))}static fromJSON(e){return new Mn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class tr extends ei{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new tr(e.radius,e.detail)}}class ir extends Ee{constructor(e=1,t=.4,i=8,n=6,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);const a=[],o=[],l=[],h=[],c=new E,u=new E,d=new E;for(let p=0;p<=i;p++)for(let f=0;f<=n;f++){const m=f/n*s,g=p/i*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(m),u.y=(e+t*Math.cos(g))*Math.sin(m),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),c.x=e*Math.cos(m),c.y=e*Math.sin(m),d.subVectors(u,c).normalize(),l.push(d.x,d.y,d.z),h.push(f/n),h.push(p/i)}for(let p=1;p<=i;p++)for(let f=1;f<=n;f++){const m=(n+1)*p+f-1,g=(n+1)*(p-1)+f-1,_=(n+1)*(p-1)+f,v=(n+1)*p+f;a.push(m,g,v),a.push(g,_,v)}this.setIndex(a),this.setAttribute("position",new me(o,3)),this.setAttribute("normal",new me(l,3)),this.setAttribute("uv",new me(h,2))}static fromJSON(e){return new ir(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class nr extends Ee{constructor(e=1,t=.4,i=64,n=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:s,q:a},i=Math.floor(i),n=Math.floor(n);const o=[],l=[],h=[],c=[],u=new E,d=new E,p=new E,f=new E,m=new E,g=new E,_=new E;for(let y=0;y<=i;++y){const M=y/i*s*Math.PI*2;v(M,s,a,e,p),v(M+.01,s,a,e,f),g.subVectors(f,p),_.addVectors(f,p),m.crossVectors(g,_),_.crossVectors(m,g),m.normalize(),_.normalize();for(let b=0;b<=n;++b){const T=b/n*Math.PI*2,P=-t*Math.cos(T),L=t*Math.sin(T);u.x=p.x+(P*_.x+L*m.x),u.y=p.y+(P*_.y+L*m.y),u.z=p.z+(P*_.z+L*m.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),h.push(d.x,d.y,d.z),c.push(y/i),c.push(b/n)}}for(let y=1;y<=i;y++)for(let M=1;M<=n;M++){const b=(n+1)*(y-1)+(M-1),T=(n+1)*y+(M-1),P=(n+1)*y+M,L=(n+1)*(y-1)+M;o.push(b,T,L),o.push(T,P,L)}function v(y,M,b,T,P){const L=Math.cos(y),B=Math.sin(y),U=b/M*y,D=Math.cos(U);P.x=T*(2+D)*.5*L,P.y=T*(2+D)*B*.5,P.z=T*Math.sin(U)*.5}this.setIndex(o),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(c,2))}static fromJSON(e){return new nr(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class rr extends Ee{constructor(e=new xa(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),t=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new E,l=new E,h=new J;let c=new E;const u=[],d=[],p=[],f=[];function m(g){c=e.getPointAt(g/t,c);const _=a.normals[g],v=a.binormals[g];for(let y=0;y<=n;y++){const M=y/n*Math.PI*2,b=Math.sin(M),T=-Math.cos(M);l.x=T*_.x+b*v.x,l.y=T*_.y+b*v.y,l.z=T*_.z+b*v.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=c.x+i*l.x,o.y=c.y+i*l.y,o.z=c.z+i*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let g=0;g<t;g++)m(g);m(s===!1?t:0),function(){for(let g=0;g<=t;g++)for(let _=0;_<=n;_++)h.x=g/t,h.y=_/n,p.push(h.x,h.y)}(),function(){for(let g=1;g<=t;g++)for(let _=1;_<=n;_++){const v=(n+1)*(g-1)+(_-1),y=(n+1)*g+(_-1),M=(n+1)*g+_,b=(n+1)*(g-1)+_;f.push(v,y,b),f.push(y,M,b)}}()})(),this.setIndex(f),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(d,3)),this.setAttribute("uv",new me(p,2))}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new rr(new ya[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class El extends Ee{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,n=new E,s=new E;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let h=0,c=l.length;h<c;++h){const u=l[h],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let m=0;m<3;m++){const g=o.getX(p+m),_=o.getX(p+(m+1)%3);n.fromBufferAttribute(a,g),s.fromBufferAttribute(a,_),Al(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let h=0;h<3;h++){const c=3*o+h,u=3*o+(h+1)%3;n.fromBufferAttribute(a,c),s.fromBufferAttribute(a,u),Al(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new me(t,3))}}}function Al(r,e,t){const i=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(i)!==!0&&t.has(n)!==!0&&(t.add(i),t.add(n),!0)}var Cl=Object.freeze({__proto__:null,BoxGeometry:mi,CapsuleGeometry:Wn,CircleGeometry:jn,ConeGeometry:qn,CylinderGeometry:Li,DodecahedronGeometry:Xn,EdgesGeometry:_l,ExtrudeGeometry:Kn,IcosahedronGeometry:Qn,LatheGeometry:xn,OctahedronGeometry:yn,PlaneGeometry:ln,PolyhedronGeometry:ei,RingGeometry:$n,ShapeGeometry:er,SphereGeometry:Mn,TetrahedronGeometry:tr,TorusGeometry:ir,TorusKnotGeometry:nr,TubeGeometry:rr,WireframeGeometry:El});class Rl extends ut{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ue(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Ll extends Vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wa extends ut{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pl extends wa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new J(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ue(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Dl extends ut{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ue(16777215),this.specular=new ue(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Il extends ut{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ue(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Nl extends ut{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class zl extends ut{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ol extends ut{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ue(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ul extends gt{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Dt(r,e,t){return Ta(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function Ii(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Ta(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Bl(r){const e=r.length,t=new Array(e);for(let i=0;i!==e;++i)t[i]=i;return t.sort(function(i,n){return r[i]-r[n]}),t}function Ea(r,e,t){const i=r.length,n=new r.constructor(i);for(let s=0,a=0;a!==i;++s){const o=t[s]*e;for(let l=0;l!==e;++l)n[a++]=r[o+l]}return n}function Aa(r,e,t,i){let n=1,s=r[0];for(;s!==void 0&&s[i]===void 0;)s=r[n++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[n++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[n++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),t.push(a)),s=r[n++];while(s!==void 0)}var ku=Object.freeze({__proto__:null,arraySlice:Dt,convertArray:Ii,isTypedArray:Ta,getKeyframeOrder:Bl,sortedArray:Ea,flattenJSON:Aa,subclip:function(r,e,t,i,n=30){const s=r.clone();s.name=e;const a=[];for(let l=0;l<s.tracks.length;++l){const h=s.tracks[l],c=h.getValueSize(),u=[],d=[];for(let p=0;p<h.times.length;++p){const f=h.times[p]*n;if(!(f<t||f>=i)){u.push(h.times[p]);for(let m=0;m<c;++m)d.push(h.values[p*c+m])}}u.length!==0&&(h.times=Ii(u,h.times.constructor),h.values=Ii(d,h.values.constructor),a.push(h))}s.tracks=a;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s},makeClipAdditive:function(r,e=0,t=r,i=30){i<=0&&(i=30);const n=t.tracks.length,s=e/i;for(let a=0;a<n;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const h=r.tracks.find(function(_){return _.name===o.name&&_.ValueTypeName===l});if(h===void 0)continue;let c=0;const u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(c=u/3);let d=0;const p=h.getValueSize();h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=p/3);const f=o.times.length-1;let m;if(s<=o.times[0]){const _=c,v=u-c;m=Dt(o.values,_,v)}else if(s>=o.times[f]){const _=f*u+c,v=_+u-c;m=Dt(o.values,_,v)}else{const _=o.createInterpolant(),v=c,y=u-c;_.evaluate(s),m=Dt(_.resultBuffer,v,y)}l==="quaternion"&&new _t().fromArray(m).normalize().conjugate().toArray(m);const g=h.times.length;for(let _=0;_<g;++_){const v=_*p+d;if(l==="quaternion")_t.multiplyQuaternionsFlat(h.values,v,m,0,h.values,v);else{const y=p-2*d;for(let M=0;M<y;++M)h.values[v+M]-=m[M]}}}return r.blendMode=2501,r}});class sr{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],s=t[i-1];e:{t:{let a;i:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break t}a=t.length;break i}if(e>=s)break e;{const o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break t}a=i,i=0}}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Fl extends sr{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,i){const n=this.parameterPositions;let s=e-2,a=e+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case 2401:s=e,o=2*t-i;break;case 2402:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case 2401:a=e,l=2*i-t;break;case 2402:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}const h=.5*(i-t),c=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(l-i),this._offsetPrev=s*c,this._offsetNext=a*c}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,c=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(i-t)/(n-t),m=f*f,g=m*f,_=-d*g+2*d*m-d*f,v=(1+d)*g+(-1.5-2*d)*m+(-.5+d)*f+1,y=(-1-p)*g+(1.5+p)*m+.5*f,M=p*g-p*m;for(let b=0;b!==o;++b)s[b]=_*a[c+b]+v*a[h+b]+y*a[l+b]+M*a[u+b];return s}}class Ca extends sr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,c=(i-t)/(n-t),u=1-c;for(let d=0;d!==o;++d)s[d]=a[h+d]*u+a[l+d]*c;return s}}class kl extends sr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ft{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ii(t,this.TimeBufferType),this.values=Ii(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ii(e.times,Array),values:Ii(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ca(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case 2300:t=this.InterpolantFactoryMethodDiscrete;break;case 2301:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=Dt(i,s,a),this.values=Dt(this.values,s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&Ta(n))for(let o=0,l=n.length;o!==l;++o){const h=n[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),e=!1;break}}return e}optimize(){const e=Dt(this.times),t=Dt(this.values),i=this.getValueSize(),n=this.getInterpolation()===2302,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const h=e[o];if(h!==e[o+1]&&(o!==1||h!==e[0]))if(n)l=!0;else{const c=o*i,u=c-i,d=c+i;for(let p=0;p!==i;++p){const f=t[c+p];if(f!==t[u+p]||f!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const c=o*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[c+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,h=0;h!==i;++h)t[l+h]=t[o+h];++a}return a!==e.length?(this.times=Dt(e,0,a),this.values=Dt(t,0,a*i)):(this.times=e,this.values=t),this}clone(){const e=Dt(this.times,0),t=Dt(this.values,0),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ft.prototype.TimeBufferType=Float32Array,Ft.prototype.ValueBufferType=Float32Array,Ft.prototype.DefaultInterpolation=2301;class Ni extends Ft{}Ni.prototype.ValueTypeName="bool",Ni.prototype.ValueBufferType=Array,Ni.prototype.DefaultInterpolation=2300,Ni.prototype.InterpolantFactoryMethodLinear=void 0,Ni.prototype.InterpolantFactoryMethodSmooth=void 0;class Ra extends Ft{}Ra.prototype.ValueTypeName="color";class ar extends Ft{}ar.prototype.ValueTypeName="number";class Hl extends sr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t);let h=e*o;for(let c=h+o;h!==c;h+=4)_t.slerpFlat(s,0,a,h-o,a,h,l);return s}}class bn extends Ft{InterpolantFactoryMethodLinear(e){return new Hl(this.times,this.values,this.getValueSize(),e)}}bn.prototype.ValueTypeName="quaternion",bn.prototype.DefaultInterpolation=2301,bn.prototype.InterpolantFactoryMethodSmooth=void 0;class zi extends Ft{}zi.prototype.ValueTypeName="string",zi.prototype.ValueBufferType=Array,zi.prototype.DefaultInterpolation=2300,zi.prototype.InterpolantFactoryMethodLinear=void 0,zi.prototype.InterpolantFactoryMethodSmooth=void 0;class or extends Ft{}or.prototype.ValueTypeName="vector";class lr{constructor(e,t=-1,i,n=2500){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=bt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(Hu(i[a]).scale(n));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=i.length;s!==a;++s)t.push(Ft.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],h=[];l.push((o+s-1)%s,o,(o+1)%s),h.push(0,1,0);const c=Bl(l);l=Ea(l,1,c),h=Ea(h,1,c),n||l[0]!==0||(l.push(s),h.push(h[0])),a.push(new ar(".morphTargetInfluences["+t[o].name+"]",l,h).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const h=e[o],c=h.name.match(s);if(c&&c.length>1){const u=c[1];let d=n[u];d||(n[u]=d=[]),d.push(h)}}const a=[];for(const o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(c,u,d,p,f){if(d.length!==0){const m=[],g=[];Aa(d,m,g,p),m.length!==0&&f.push(new c(u,m,g))}},n=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const h=e.hierarchy||[];for(let c=0;c<h.length;c++){const u=h[c].keys;if(u&&u.length!==0)if(u[0].morphTargets){const d={};let p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let f=0;f<u[p].morphTargets.length;f++)d[u[p].morphTargets[f]]=-1;for(const f in d){const m=[],g=[];for(let _=0;_!==u[p].morphTargets.length;++_){const v=u[p];m.push(v.time),g.push(v.morphTarget===f?1:0)}n.push(new ar(".morphTargetInfluence["+f+"]",m,g))}l=d.length*a}else{const d=".bones["+t[c].name+"]";i(or,d+".position",u,"pos",n),i(bn,d+".quaternion",u,"rot",n),i(or,d+".scale",u,"scl",n)}}return n.length===0?null:new this(s,l,n,o)}resetDuration(){let e=0;for(let t=0,i=this.tracks.length;t!==i;++t){const n=this.tracks[t];e=Math.max(e,n.times[n.times.length-1])}return this.duration=e,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Hu(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ar;case"vector":case"vector2":case"vector3":case"vector4":return or;case"color":return Ra;case"quaternion":return bn;case"bool":case"boolean":return Ni;case"string":return zi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}(r.type);if(r.times===void 0){const t=[],i=[];Aa(r.keys,t,i,"value"),r.times=t,r.values=i}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Oi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class La{constructor(e,t,i){const n=this;let s,a=!1,o=0,l=0;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){l++,a===!1&&n.onStart!==void 0&&n.onStart(c,o,l),a=!0},this.itemEnd=function(c){o++,n.onProgress!==void 0&&n.onProgress(c,o,l),o===l&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(c){n.onError!==void 0&&n.onError(c)},this.resolveURL=function(c){return s?s(c):c},this.setURLModifier=function(c){return s=c,this},this.addHandler=function(c,u){return h.push(c,u),this},this.removeHandler=function(c){const u=h.indexOf(c);return u!==-1&&h.splice(u,2),this},this.getHandler=function(c){for(let u=0,d=h.length;u<d;u+=2){const p=h[u],f=h[u+1];if(p.global&&(p.lastIndex=0),p.test(c))return f}return null}}}const Gl=new La;class Tt{constructor(e){this.manager=e!==void 0?e:Gl,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const ti={};class Gu extends Error{constructor(e,t){super(e),this.response=t}}class ii extends Tt{constructor(e){super(e)}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Oi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ti[e]!==void 0)return void ti[e].push({onLoad:t,onProgress:i,onError:n});ti[e]=[],ti[e].push({onLoad:t,onProgress:i,onError:n});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const c=ti[e],u=h.body.getReader(),d=h.headers.get("Content-Length")||h.headers.get("X-File-Size"),p=d?parseInt(d):0,f=p!==0;let m=0;const g=new ReadableStream({start(_){(function v(){u.read().then(({done:y,value:M})=>{if(y)_.close();else{m+=M.byteLength;const b=new ProgressEvent("progress",{lengthComputable:f,loaded:m,total:p});for(let T=0,P=c.length;T<P;T++){const L=c[T];L.onProgress&&L.onProgress(b)}_.enqueue(M),v()}})})()}});return new Response(g)}throw new Gu(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(c=>new DOMParser().parseFromString(c,o));case"json":return h.json();default:if(o===void 0)return h.text();{const c=/charset="?([^;"\s]*)"?/i.exec(o),u=c&&c[1]?c[1].toLowerCase():void 0,d=new TextDecoder(u);return h.arrayBuffer().then(p=>d.decode(p))}}}).then(h=>{Oi.add(e,h);const c=ti[e];delete ti[e];for(let u=0,d=c.length;u<d;u++){const p=c[u];p.onLoad&&p.onLoad(h)}}).catch(h=>{const c=ti[e];if(c===void 0)throw this.manager.itemError(e),h;delete ti[e];for(let u=0,d=c.length;u<d;u++){const p=c[u];p.onError&&p.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class hr extends Tt{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Oi.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=An("img");function l(){c(),Oi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function h(u){c(),n&&n(u),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class vi extends Ne{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Vl extends vi{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DefaultUp),this.updateMatrix(),this.groundColor=new ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Pa=new be,Wl=new E,jl=new E;class Da{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Or,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Wl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wl),jl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jl),t.updateMatrixWorld(),Pa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Pa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Vu extends Da{constructor(){super(new ot(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=2*Tn*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;i===t.fov&&n===t.aspect&&s===t.far||(t.fov=i,t.aspect=n,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ql extends vi{constructor(e,t,i=0,n=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ne.DefaultUp),this.updateMatrix(),this.target=new Ne,this.distance=i,this.angle=n,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Vu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Xl=new be,cr=new E,Ia=new E;class Wu extends Da{constructor(){super(new ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new J(4,2),this._viewportCount=6,this._viewports=[new ze(2,1,1,1),new ze(0,1,1,1),new ze(3,1,1,1),new ze(1,1,1,1),new ze(3,0,1,1),new ze(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),cr.setFromMatrixPosition(e.matrixWorld),i.position.copy(cr),Ia.copy(i.position),Ia.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ia),i.updateMatrixWorld(),n.makeTranslation(-cr.x,-cr.y,-cr.z),Xl.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xl)}}class Yl extends vi{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Wu}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ju extends Da{constructor(){super(new Br(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zl extends vi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DefaultUp),this.updateMatrix(),this.target=new Ne,this.shadow=new ju}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Jl extends vi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Kl extends vi{constructor(e,t,i=10,n=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=n}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Ql{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new E)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const i=e.x,n=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*n),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*i),t.addScaledVector(a[4],i*n*1.092548),t.addScaledVector(a[5],n*s*1.092548),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],i*s*1.092548),t.addScaledVector(a[8],.546274*(i*i-n*n)),t}getIrradianceAt(e,t){const i=e.x,n=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],1.023328*n),t.addScaledVector(a[2],1.023328*s),t.addScaledVector(a[3],1.023328*i),t.addScaledVector(a[4],.858086*i*n),t.addScaledVector(a[5],.858086*n*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],.858086*i*s),t.addScaledVector(a[8],.429043*(i*i-n*n)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const i=this.coefficients;for(let n=0;n<9;n++)i[n].fromArray(e,t+3*n);return this}toArray(e=[],t=0){const i=this.coefficients;for(let n=0;n<9;n++)i[n].toArray(e,t+3*n);return e}static getBasisAt(e,t){const i=e.x,n=e.y,s=e.z;t[0]=.282095,t[1]=.488603*n,t[2]=.488603*s,t[3]=.488603*i,t[4]=1.092548*i*n,t[5]=1.092548*n*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*i*s,t[8]=.546274*(i*i-n*n)}}class hs extends vi{constructor(e=new Ql,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class cs extends Tt{constructor(e){super(e),this.textures={}}load(e,t,i,n){const s=this,a=new ii(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){n?n(l):console.error(l),s.manager.itemError(e)}},i,n)}parse(e){const t=this.textures;function i(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const n=cs.createMaterialFromType(e.type);if(e.uuid!==void 0&&(n.uuid=e.uuid),e.name!==void 0&&(n.name=e.name),e.color!==void 0&&n.color!==void 0&&n.color.setHex(e.color),e.roughness!==void 0&&(n.roughness=e.roughness),e.metalness!==void 0&&(n.metalness=e.metalness),e.sheen!==void 0&&(n.sheen=e.sheen),e.sheenColor!==void 0&&(n.sheenColor=new ue().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(n.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&n.emissive!==void 0&&n.emissive.setHex(e.emissive),e.specular!==void 0&&n.specular!==void 0&&n.specular.setHex(e.specular),e.specularIntensity!==void 0&&(n.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&n.specularColor!==void 0&&n.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(n.shininess=e.shininess),e.clearcoat!==void 0&&(n.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=e.clearcoatRoughness),e.iridescence!==void 0&&(n.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(n.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(n.transmission=e.transmission),e.thickness!==void 0&&(n.thickness=e.thickness),e.attenuationDistance!==void 0&&(n.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&n.attenuationColor!==void 0&&n.attenuationColor.setHex(e.attenuationColor),e.fog!==void 0&&(n.fog=e.fog),e.flatShading!==void 0&&(n.flatShading=e.flatShading),e.blending!==void 0&&(n.blending=e.blending),e.combine!==void 0&&(n.combine=e.combine),e.side!==void 0&&(n.side=e.side),e.shadowSide!==void 0&&(n.shadowSide=e.shadowSide),e.opacity!==void 0&&(n.opacity=e.opacity),e.transparent!==void 0&&(n.transparent=e.transparent),e.alphaTest!==void 0&&(n.alphaTest=e.alphaTest),e.depthTest!==void 0&&(n.depthTest=e.depthTest),e.depthWrite!==void 0&&(n.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(n.colorWrite=e.colorWrite),e.stencilWrite!==void 0&&(n.stencilWrite=e.stencilWrite),e.stencilWriteMask!==void 0&&(n.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(n.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(n.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(n.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(n.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(n.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(n.stencilZPass=e.stencilZPass),e.wireframe!==void 0&&(n.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(n.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(n.rotation=e.rotation),e.linewidth!==1&&(n.linewidth=e.linewidth),e.dashSize!==void 0&&(n.dashSize=e.dashSize),e.gapSize!==void 0&&(n.gapSize=e.gapSize),e.scale!==void 0&&(n.scale=e.scale),e.polygonOffset!==void 0&&(n.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(n.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(n.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(n.dithering=e.dithering),e.alphaToCoverage!==void 0&&(n.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(n.premultipliedAlpha=e.premultipliedAlpha),e.visible!==void 0&&(n.visible=e.visible),e.toneMapped!==void 0&&(n.toneMapped=e.toneMapped),e.userData!==void 0&&(n.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?n.vertexColors=e.vertexColors>0:n.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const a=e.uniforms[s];switch(n.uniforms[s]={},a.type){case"t":n.uniforms[s].value=i(a.value);break;case"c":n.uniforms[s].value=new ue().setHex(a.value);break;case"v2":n.uniforms[s].value=new J().fromArray(a.value);break;case"v3":n.uniforms[s].value=new E().fromArray(a.value);break;case"v4":n.uniforms[s].value=new ze().fromArray(a.value);break;case"m3":n.uniforms[s].value=new pt().fromArray(a.value);break;case"m4":n.uniforms[s].value=new be().fromArray(a.value);break;default:n.uniforms[s].value=a.value}}if(e.defines!==void 0&&(n.defines=e.defines),e.vertexShader!==void 0&&(n.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(n.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(n.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)n.extensions[s]=e.extensions[s];if(e.size!==void 0&&(n.size=e.size),e.sizeAttenuation!==void 0&&(n.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(n.map=i(e.map)),e.matcap!==void 0&&(n.matcap=i(e.matcap)),e.alphaMap!==void 0&&(n.alphaMap=i(e.alphaMap)),e.bumpMap!==void 0&&(n.bumpMap=i(e.bumpMap)),e.bumpScale!==void 0&&(n.bumpScale=e.bumpScale),e.normalMap!==void 0&&(n.normalMap=i(e.normalMap)),e.normalMapType!==void 0&&(n.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),n.normalScale=new J().fromArray(s)}return e.displacementMap!==void 0&&(n.displacementMap=i(e.displacementMap)),e.displacementScale!==void 0&&(n.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(n.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(n.roughnessMap=i(e.roughnessMap)),e.metalnessMap!==void 0&&(n.metalnessMap=i(e.metalnessMap)),e.emissiveMap!==void 0&&(n.emissiveMap=i(e.emissiveMap)),e.emissiveIntensity!==void 0&&(n.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(n.specularMap=i(e.specularMap)),e.specularIntensityMap!==void 0&&(n.specularIntensityMap=i(e.specularIntensityMap)),e.specularColorMap!==void 0&&(n.specularColorMap=i(e.specularColorMap)),e.envMap!==void 0&&(n.envMap=i(e.envMap)),e.envMapIntensity!==void 0&&(n.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(n.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(n.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(n.lightMap=i(e.lightMap)),e.lightMapIntensity!==void 0&&(n.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(n.aoMap=i(e.aoMap)),e.aoMapIntensity!==void 0&&(n.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(n.gradientMap=i(e.gradientMap)),e.clearcoatMap!==void 0&&(n.clearcoatMap=i(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(n.clearcoatRoughnessMap=i(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(n.clearcoatNormalMap=i(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(n.clearcoatNormalScale=new J().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(n.iridescenceMap=i(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(n.iridescenceThicknessMap=i(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(n.transmissionMap=i(e.transmissionMap)),e.thicknessMap!==void 0&&(n.thicknessMap=i(e.thicknessMap)),e.sheenColorMap!==void 0&&(n.sheenColorMap=i(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(n.sheenRoughnessMap=i(e.sheenRoughnessMap)),n}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){return new{ShadowMaterial:Rl,SpriteMaterial:sa,RawShaderMaterial:Ll,ShaderMaterial:Vt,PointsMaterial:ha,MeshPhysicalMaterial:Pl,MeshStandardMaterial:wa,MeshPhongMaterial:Dl,MeshToonMaterial:Il,MeshNormalMaterial:Nl,MeshLambertMaterial:zl,MeshDepthMaterial:ia,MeshDistanceMaterial:na,MeshBasicMaterial:ci,MeshMatcapMaterial:Ol,LineDashedMaterial:Ul,LineBasicMaterial:gt,Material:ut}[e]}}class Na{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,n=e.length;i<n;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class $l extends Ee{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class eh extends Tt{constructor(e){super(e)}load(e,t,i,n){const s=this,a=new ii(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){n?n(l):console.error(l),s.manager.itemError(e)}},i,n)}parse(e){const t={},i={};function n(u,d){if(t[d]!==void 0)return t[d];const p=u.interleavedBuffers[d],f=function(_,v){if(i[v]!==void 0)return i[v];const y=_.arrayBuffers[v],M=new Uint32Array(y).buffer;return i[v]=M,M}(u,p.buffer),m=qi(p.type,f),g=new Wr(m,p.stride);return g.uuid=p.uuid,t[d]=g,g}const s=e.isInstancedBufferGeometry?new $l:new Ee,a=e.data.index;if(a!==void 0){const u=qi(a.type,a.array);s.setIndex(new Be(u,1))}const o=e.data.attributes;for(const u in o){const d=o[u];let p;if(d.isInterleavedBufferAttribute){const f=n(e.data,d.data);p=new Ri(f,d.itemSize,d.offset,d.normalized)}else{const f=qi(d.type,d.array);p=new(d.isInstancedBufferAttribute?vn:Be)(f,d.itemSize,d.normalized)}d.name!==void 0&&(p.name=d.name),d.usage!==void 0&&p.setUsage(d.usage),d.updateRange!==void 0&&(p.updateRange.offset=d.updateRange.offset,p.updateRange.count=d.updateRange.count),s.setAttribute(u,p)}const l=e.data.morphAttributes;if(l)for(const u in l){const d=l[u],p=[];for(let f=0,m=d.length;f<m;f++){const g=d[f];let _;if(g.isInterleavedBufferAttribute){const v=n(e.data,g.data);_=new Ri(v,g.itemSize,g.offset,g.normalized)}else{const v=qi(g.type,g.array);_=new Be(v,g.itemSize,g.normalized)}g.name!==void 0&&(_.name=g.name),p.push(_)}s.morphAttributes[u]=p}e.data.morphTargetsRelative&&(s.morphTargetsRelative=!0);const h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let u=0,d=h.length;u!==d;++u){const p=h[u];s.addGroup(p.start,p.count,p.materialIndex)}const c=e.data.boundingSphere;if(c!==void 0){const u=new E;c.center!==void 0&&u.fromArray(c.center),s.boundingSphere=new Ai(u,c.radius)}return e.name&&(s.name=e.name),e.userData&&(s.userData=e.userData),s}}const qu={UVMapping:300,CubeReflectionMapping:301,CubeRefractionMapping:302,EquirectangularReflectionMapping:303,EquirectangularRefractionMapping:304,CubeUVReflectionMapping:306},th={RepeatWrapping:1e3,ClampToEdgeWrapping:1001,MirroredRepeatWrapping:1002},ih={NearestFilter:1003,NearestMipmapNearestFilter:1004,NearestMipmapLinearFilter:1005,LinearFilter:1006,LinearMipmapNearestFilter:1007,LinearMipmapLinearFilter:1008};let us;class za{static getContext(){return us===void 0&&(us=new(window.AudioContext||window.webkitAudioContext)),us}static setContext(e){us=e}}const nh=new be,rh=new be,Ui=new be;class sh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ah(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ah();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ah(){return(typeof performance>"u"?Date:performance).now()}const Bi=new E,oh=new _t,Xu=new E,Fi=new E;class lh extends Ne{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0)return void console.warn("THREE.Audio: Audio is already playing.");if(this.hasPlaybackControl===!1)return void console.warn("THREE.Audio: this Audio has no playback control.");this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl!==!1)return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this;console.warn("THREE.Audio: this Audio has no playback control.")}stop(){if(this.hasPlaybackControl!==!1)return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this;console.warn("THREE.Audio: this Audio has no playback control.")}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl!==!1)return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this;console.warn("THREE.Audio: this Audio has no playback control.")}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl!==!1)return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this;console.warn("THREE.Audio: this Audio has no playback control.")}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const ki=new E,hh=new _t,Yu=new E,Hi=new E;class ch{constructor(e,t,i){let n,s,a;switch(this.binding=e,this.valueSize=i,t){case"quaternion":n=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(6*i),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(5*i);break;default:n=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*i)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,n=this.valueSize,s=e*n+n;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==n;++o)i[s+o]=i[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(i,s,0,o,n)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,n=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(i,n,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let l=t,h=t+t;l!==h;++l)if(i[l]!==i[l+t]){o.setValue(i,n);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let s=i,a=n;s!==a;++s)t[s]=t[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=3*this.valueSize;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,s){if(n>=.5)for(let a=0;a!==s;++a)e[t+a]=e[i+a]}_slerp(e,t,i,n){_t.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,s){const a=this._workIndex*s;_t.multiplyQuaternionsFlat(e,a,e,t,e,i),_t.slerpFlat(e,t,e,t,e,a,n)}_lerp(e,t,i,n,s){const a=1-n;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*a+e[i+o]*n}}_lerpAdditive(e,t,i,n,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[i+a]*n}}}const Zu="\\[\\]\\.:\\/",Ju=new RegExp("[\\[\\]\\.:\\/]","g"),Oa="[^\\[\\]\\.:\\/]",Ku="[^"+Zu.replace("\\.","")+"]",Qu=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Oa)+/(WCOD+)?/.source.replace("WCOD",Ku)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oa)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oa)+"$"),$u=["material","materials","bones","map"];class Pe{constructor(e,t,i){this.path=t,this.parsedPath=i||Pe.parseTrackName(t),this.node=Pe.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Pe.Composite(e,t,i):new Pe(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ju,"")}static parseTrackName(e){const t=Qu.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);$u.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let s=t.propertyIndex;if(e||(e=Pe.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===h){h=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(h!==void 0){if(e[h]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[h]}}const a=e[n];if(a===void 0){const h=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+n+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Pe.Composite=class{constructor(r,e,t){const i=t||Pe.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,i)}getValue(r,e){this.bind();const t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(r,e)}setValue(r,e){const t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].setValue(r,e)}bind(){const r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){const r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},Pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Pe.prototype.GetterByBindingType=[Pe.prototype._getValue_direct,Pe.prototype._getValue_array,Pe.prototype._getValue_arrayElement,Pe.prototype._getValue_toArray],Pe.prototype.SetterByBindingTypeAndVersioning=[[Pe.prototype._setValue_direct,Pe.prototype._setValue_direct_setNeedsUpdate,Pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_array,Pe.prototype._setValue_array_setNeedsUpdate,Pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_arrayElement,Pe.prototype._setValue_arrayElement_setNeedsUpdate,Pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_fromArray,Pe.prototype._setValue_fromArray_setNeedsUpdate,Pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ed{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;const s=t.tracks,a=s.length,o=new Array(a),l={endingStart:2400,endingEnd:2400};for(let h=0;h!==a;++h){const c=s[h].createInterpolant(null);o[h]=c,c.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const n=this._clip.duration,s=e._clip.duration,a=s/n,o=n/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const n=this._mixer,s=n.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=n._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,h=o.sampleValues;return l[0]=s,l[1]=s+i,h[0]=e/a,h[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled)return void this._updateWeight(e);const s=this._startTime;if(s!==null){const l=(e-s)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,h=this._propertyBindings;if(this.blendMode===2501)for(let c=0,u=l.length;c!==u;++c)l[c].evaluate(a),h[c].accumulateAdditive(o);else for(let c=0,u=l.length;c!==u;++c)l[c].evaluate(a),h[c].accumulate(n,o)}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;i!==null&&(t*=i.evaluate(e)[0],e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let n=this.time+e,s=this._loopCount;const a=i===2202;if(e===0)return s===-1?n:a&&(1&s)==1?t-n:n;if(i===2200){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else{if(!(n<0)){this.time=n;break e}n=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),n>=t||n<0){const o=Math.floor(n/t);n-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const h=e<0;this._setEndings(h,!h,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=n;if(a&&(1&s)==1)return t-n}return n}_setEndings(e,t,i){const n=this._interpolantSettings;i?(n.endingStart=2401,n.endingEnd=2401):(n.endingStart=e?this.zeroSlopeAtStart?2401:2400:2402,n.endingEnd=t?this.zeroSlopeAtEnd?2401:2400:2402)}_scheduleFading(e,t,i){const n=this._mixer,s=n.time;let a=this._weightInterpolant;a===null&&(a=n._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=i,this}}const td=new Float32Array(1);class Ua{constructor(e){this.value=e}clone(){return new Ua(this.value.clone===void 0?this.value:this.value.clone())}}let id=0;function uh(r,e){return r.distance-e.distance}function Ba(r,e,t,i){if(r.layers.test(e.layers)&&r.raycast(e,t),i===!0){const n=r.children;for(let s=0,a=n.length;s<a;s++)Ba(n[s],e,t,!0)}}const dh=new J,ph=new E,ds=new E,mh=new E,xi=new E,ps=new be,Fa=new be;function fh(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,fh(r.children[t]));return e}const nd=new E,gh=new ue,vh=new ue,xh=new E,ms=new E,_h=new E,fs=new E,Xe=new Nr;function Ke(r,e,t,i,n,s,a){fs.set(n,s,a).unproject(i);const o=e[r];if(o!==void 0){const l=t.getAttribute("position");for(let h=0,c=o.length;h<c;h++)l.setXYZ(o[h],fs.x,fs.y,fs.z)}}const gs=new Si,yh=new E;let vs,ka;const ni=rd();function rd(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){const h=l-127;h<-27?(i[l]=0,i[256|l]=32768,n[l]=24,n[256|l]=24):h<-14?(i[l]=1024>>-h-14,i[256|l]=1024>>-h-14|32768,n[l]=-h-1,n[256|l]=-h-1):h<=15?(i[l]=h+15<<10,i[256|l]=h+15<<10|32768,n[l]=13,n[256|l]=13):h<128?(i[l]=31744,i[256|l]=64512,n[l]=24,n[256|l]=24):(i[l]=31744,i[256|l]=64512,n[l]=13,n[256|l]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,c=0;for(;!(8388608&h);)h<<=1,c-=8388608;h&=-8388609,c+=947912704,s[l]=h|c}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}var sd=Object.freeze({__proto__:null,toHalfFloat:function(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Ze(r,-65504,65504),ni.floatView[0]=r;const e=ni.uint32View[0],t=e>>23&511;return ni.baseTable[t]+((8388607&e)>>ni.shiftTable[t])},fromHalfFloat:function(r){const e=r>>10;return ni.uint32View[0]=ni.mantissaTable[ni.offsetTable[e]+(1023&r)]+ni.exponentTable[e],ni.floatView[0]}});typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yt}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yt),x.ACESFilmicToneMapping=4,x.AddEquation=100,x.AddOperation=2,x.AdditiveAnimationBlendMode=2501,x.AdditiveBlending=2,x.AlphaFormat=1021,x.AlwaysDepth=1,x.AlwaysStencilFunc=519,x.AmbientLight=Jl,x.AmbientLightProbe=class extends hs{constructor(r,e=1){super(void 0,e),this.isAmbientLightProbe=!0;const t=new ue().set(r);this.sh.coefficients[0].set(t.r,t.g,t.b).multiplyScalar(2*Math.sqrt(Math.PI))}},x.AnimationClip=lr,x.AnimationLoader=class extends Tt{constructor(r){super(r)}load(r,e,t,i){const n=this,s=new ii(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(r,function(a){try{e(n.parse(JSON.parse(a)))}catch(o){i?i(o):console.error(o),n.manager.itemError(r)}},t,i)}parse(r){const e=[];for(let t=0;t<r.length;t++){const i=lr.parse(r[t]);e.push(i)}return e}},x.AnimationMixer=class extends Xt{constructor(r){super(),this._root=r,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(r,e){const t=r._localRoot||this._root,i=r._clip.tracks,n=i.length,s=r._propertyBindings,a=r._interpolants,o=t.uuid,l=this._bindingsByRootAndName;let h=l[o];h===void 0&&(h={},l[o]=h);for(let c=0;c!==n;++c){const u=i[c],d=u.name;let p=h[d];if(p!==void 0)++p.referenceCount,s[c]=p;else{if(p=s[c],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,o,d));continue}const f=e&&e._propertyBindings[c].binding.parsedPath;p=new ch(Pe.create(t,d,f),u.ValueTypeName,u.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,o,d),s[c]=p}a[c].resultBuffer=p.buffer}}_activateAction(r){if(!this._isActiveAction(r)){if(r._cacheIndex===null){const t=(r._localRoot||this._root).uuid,i=r._clip.uuid,n=this._actionsByClip[i];this._bindAction(r,n&&n.knownActions[0]),this._addInactiveAction(r,i,t)}const e=r._propertyBindings;for(let t=0,i=e.length;t!==i;++t){const n=e[t];n.useCount++==0&&(this._lendBinding(n),n.saveOriginalState())}this._lendAction(r)}}_deactivateAction(r){if(this._isActiveAction(r)){const e=r._propertyBindings;for(let t=0,i=e.length;t!==i;++t){const n=e[t];--n.useCount==0&&(n.restoreOriginalState(),this._takeBackBinding(n))}this._takeBackAction(r)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const r=this;this.stats={actions:{get total(){return r._actions.length},get inUse(){return r._nActiveActions}},bindings:{get total(){return r._bindings.length},get inUse(){return r._nActiveBindings}},controlInterpolants:{get total(){return r._controlInterpolants.length},get inUse(){return r._nActiveControlInterpolants}}}}_isActiveAction(r){const e=r._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(r,e,t){const i=this._actions,n=this._actionsByClip;let s=n[e];if(s===void 0)s={knownActions:[r],actionByRoot:{}},r._byClipCacheIndex=0,n[e]=s;else{const a=s.knownActions;r._byClipCacheIndex=a.length,a.push(r)}r._cacheIndex=i.length,i.push(r),s.actionByRoot[t]=r}_removeInactiveAction(r){const e=this._actions,t=e[e.length-1],i=r._cacheIndex;t._cacheIndex=i,e[i]=t,e.pop(),r._cacheIndex=null;const n=r._clip.uuid,s=this._actionsByClip,a=s[n],o=a.knownActions,l=o[o.length-1],h=r._byClipCacheIndex;l._byClipCacheIndex=h,o[h]=l,o.pop(),r._byClipCacheIndex=null,delete a.actionByRoot[(r._localRoot||this._root).uuid],o.length===0&&delete s[n],this._removeInactiveBindingsForAction(r)}_removeInactiveBindingsForAction(r){const e=r._propertyBindings;for(let t=0,i=e.length;t!==i;++t){const n=e[t];--n.referenceCount==0&&this._removeInactiveBinding(n)}}_lendAction(r){const e=this._actions,t=r._cacheIndex,i=this._nActiveActions++,n=e[i];r._cacheIndex=i,e[i]=r,n._cacheIndex=t,e[t]=n}_takeBackAction(r){const e=this._actions,t=r._cacheIndex,i=--this._nActiveActions,n=e[i];r._cacheIndex=i,e[i]=r,n._cacheIndex=t,e[t]=n}_addInactiveBinding(r,e,t){const i=this._bindingsByRootAndName,n=this._bindings;let s=i[e];s===void 0&&(s={},i[e]=s),s[t]=r,r._cacheIndex=n.length,n.push(r)}_removeInactiveBinding(r){const e=this._bindings,t=r.binding,i=t.rootNode.uuid,n=t.path,s=this._bindingsByRootAndName,a=s[i],o=e[e.length-1],l=r._cacheIndex;o._cacheIndex=l,e[l]=o,e.pop(),delete a[n],Object.keys(a).length===0&&delete s[i]}_lendBinding(r){const e=this._bindings,t=r._cacheIndex,i=this._nActiveBindings++,n=e[i];r._cacheIndex=i,e[i]=r,n._cacheIndex=t,e[t]=n}_takeBackBinding(r){const e=this._bindings,t=r._cacheIndex,i=--this._nActiveBindings,n=e[i];r._cacheIndex=i,e[i]=r,n._cacheIndex=t,e[t]=n}_lendControlInterpolant(){const r=this._controlInterpolants,e=this._nActiveControlInterpolants++;let t=r[e];return t===void 0&&(t=new Ca(new Float32Array(2),new Float32Array(2),1,td),t.__cacheIndex=e,r[e]=t),t}_takeBackControlInterpolant(r){const e=this._controlInterpolants,t=r.__cacheIndex,i=--this._nActiveControlInterpolants,n=e[i];r.__cacheIndex=i,e[i]=r,n.__cacheIndex=t,e[t]=n}clipAction(r,e,t){const i=e||this._root,n=i.uuid;let s=typeof r=="string"?lr.findByName(i,r):r;const a=s!==null?s.uuid:r,o=this._actionsByClip[a];let l=null;if(t===void 0&&(t=s!==null?s.blendMode:2500),o!==void 0){const c=o.actionByRoot[n];if(c!==void 0&&c.blendMode===t)return c;l=o.knownActions[0],s===null&&(s=l._clip)}if(s===null)return null;const h=new ed(this,s,e,t);return this._bindAction(h,l),this._addInactiveAction(h,a,n),h}existingAction(r,e){const t=e||this._root,i=t.uuid,n=typeof r=="string"?lr.findByName(t,r):r,s=n?n.uuid:r,a=this._actionsByClip[s];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const r=this._actions;for(let e=this._nActiveActions-1;e>=0;--e)r[e].stop();return this}update(r){r*=this.timeScale;const e=this._actions,t=this._nActiveActions,i=this.time+=r,n=Math.sign(r),s=this._accuIndex^=1;for(let l=0;l!==t;++l)e[l]._update(i,r,n,s);const a=this._bindings,o=this._nActiveBindings;for(let l=0;l!==o;++l)a[l].apply(s);return this}setTime(r){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(r)}getRoot(){return this._root}uncacheClip(r){const e=this._actions,t=r.uuid,i=this._actionsByClip,n=i[t];if(n!==void 0){const s=n.knownActions;for(let a=0,o=s.length;a!==o;++a){const l=s[a];this._deactivateAction(l);const h=l._cacheIndex,c=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,c._cacheIndex=h,e[h]=c,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[t]}}uncacheRoot(r){const e=r.uuid,t=this._actionsByClip;for(const n in t){const s=t[n].actionByRoot[e];s!==void 0&&(this._deactivateAction(s),this._removeInactiveAction(s))}const i=this._bindingsByRootAndName[e];if(i!==void 0)for(const n in i){const s=i[n];s.restoreOriginalState(),this._removeInactiveBinding(s)}}uncacheAction(r,e){const t=this.existingAction(r,e);t!==null&&(this._deactivateAction(t),this._removeInactiveAction(t))}},x.AnimationObjectGroup=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=bt(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const r={};this._indicesByUUID=r;for(let t=0,i=arguments.length;t!==i;++t)r[arguments[t].uuid]=t;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){const r=this._objects,e=this._indicesByUUID,t=this._paths,i=this._parsedPaths,n=this._bindings,s=n.length;let a,o=r.length,l=this.nCachedObjects_;for(let h=0,c=arguments.length;h!==c;++h){const u=arguments[h],d=u.uuid;let p=e[d];if(p===void 0){p=o++,e[d]=p,r.push(u);for(let f=0,m=s;f!==m;++f)n[f].push(new Pe(u,t[f],i[f]))}else if(p<l){a=r[p];const f=--l,m=r[f];e[m.uuid]=p,r[p]=m,e[d]=f,r[f]=u;for(let g=0,_=s;g!==_;++g){const v=n[g],y=v[f];let M=v[p];v[p]=y,M===void 0&&(M=new Pe(u,t[g],i[g])),v[f]=M}}else r[p]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){const r=this._objects,e=this._indicesByUUID,t=this._bindings,i=t.length;let n=this.nCachedObjects_;for(let s=0,a=arguments.length;s!==a;++s){const o=arguments[s],l=o.uuid,h=e[l];if(h!==void 0&&h>=n){const c=n++,u=r[c];e[u.uuid]=h,r[h]=u,e[l]=c,r[c]=o;for(let d=0,p=i;d!==p;++d){const f=t[d],m=f[c],g=f[h];f[h]=m,f[c]=g}}}this.nCachedObjects_=n}uncache(){const r=this._objects,e=this._indicesByUUID,t=this._bindings,i=t.length;let n=this.nCachedObjects_,s=r.length;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a].uuid,h=e[l];if(h!==void 0)if(delete e[l],h<n){const c=--n,u=r[c],d=--s,p=r[d];e[u.uuid]=h,r[h]=u,e[p.uuid]=c,r[c]=p,r.pop();for(let f=0,m=i;f!==m;++f){const g=t[f],_=g[c],v=g[d];g[h]=_,g[c]=v,g.pop()}}else{const c=--s,u=r[c];c>0&&(e[u.uuid]=h),r[h]=u,r.pop();for(let d=0,p=i;d!==p;++d){const f=t[d];f[h]=f[c],f.pop()}}}this.nCachedObjects_=n}subscribe_(r,e){const t=this._bindingsIndicesByPath;let i=t[r];const n=this._bindings;if(i!==void 0)return n[i];const s=this._paths,a=this._parsedPaths,o=this._objects,l=o.length,h=this.nCachedObjects_,c=new Array(l);i=n.length,t[r]=i,s.push(r),a.push(e),n.push(c);for(let u=h,d=o.length;u!==d;++u){const p=o[u];c[u]=new Pe(p,r,e)}return c}unsubscribe_(r){const e=this._bindingsIndicesByPath,t=e[r];if(t!==void 0){const i=this._paths,n=this._parsedPaths,s=this._bindings,a=s.length-1,o=s[a];e[r[a]]=t,s[t]=o,s.pop(),n[t]=n[a],n.pop(),i[t]=i[a],i.pop()}}},x.AnimationUtils=ku,x.ArcCurve=pl,x.ArrayCamera=Bo,x.ArrowHelper=class extends Ne{constructor(r=new E(0,0,1),e=new E(0,0,0),t=1,i=16776960,n=.2*t,s=.2*n){super(),this.type="ArrowHelper",vs===void 0&&(vs=new Ee,vs.setAttribute("position",new me([0,0,0,0,1,0],3)),ka=new Li(0,.5,1,5,1),ka.translate(0,-.5,0)),this.position.copy(e),this.line=new gi(vs,new gt({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new at(ka,new ci({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(r),this.setLength(t,n,s)}setDirection(r){if(r.y>.99999)this.quaternion.set(0,0,0,1);else if(r.y<-.99999)this.quaternion.set(1,0,0,0);else{yh.set(r.z,0,-r.x).normalize();const e=Math.acos(r.y);this.quaternion.setFromAxisAngle(yh,e)}}setLength(r,e=.2*r,t=.2*e){this.line.scale.set(1,Math.max(1e-4,r-e),1),this.line.updateMatrix(),this.cone.scale.set(t,e,t),this.cone.position.y=r,this.cone.updateMatrix()}setColor(r){this.line.material.color.set(r),this.cone.material.color.set(r)}copy(r){return super.copy(r,!1),this.line.copy(r.line),this.cone.copy(r.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},x.Audio=lh,x.AudioAnalyser=class{constructor(r,e=2048){this.analyser=r.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),r.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let r=0;const e=this.getFrequencyData();for(let t=0;t<e.length;t++)r+=e[t];return r/e.length}},x.AudioContext=za,x.AudioListener=class extends Ne{constructor(){super(),this.type="AudioListener",this.context=za.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new sh}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(r){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=r,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(r){return this.gain.gain.setTargetAtTime(r,this.context.currentTime,.01),this}updateMatrixWorld(r){super.updateMatrixWorld(r);const e=this.context.listener,t=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Bi,oh,Xu),Fi.set(0,0,-1).applyQuaternion(oh),e.positionX){const i=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Bi.x,i),e.positionY.linearRampToValueAtTime(Bi.y,i),e.positionZ.linearRampToValueAtTime(Bi.z,i),e.forwardX.linearRampToValueAtTime(Fi.x,i),e.forwardY.linearRampToValueAtTime(Fi.y,i),e.forwardZ.linearRampToValueAtTime(Fi.z,i),e.upX.linearRampToValueAtTime(t.x,i),e.upY.linearRampToValueAtTime(t.y,i),e.upZ.linearRampToValueAtTime(t.z,i)}else e.setPosition(Bi.x,Bi.y,Bi.z),e.setOrientation(Fi.x,Fi.y,Fi.z,t.x,t.y,t.z)}},x.AudioLoader=class extends Tt{constructor(r){super(r)}load(r,e,t,i){const n=this,s=new ii(this.manager);s.setResponseType("arraybuffer"),s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(r,function(a){try{const o=a.slice(0);za.getContext().decodeAudioData(o,function(l){e(l)})}catch(o){i?i(o):console.error(o),n.manager.itemError(r)}},t,i)}},x.AxesHelper=class extends Wt{constructor(r=1){const e=[0,0,0,r,0,0,0,0,0,0,r,0,0,0,0,0,0,r],t=new Ee;t.setAttribute("position",new me(e,3)),t.setAttribute("color",new me([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],3)),super(t,new gt({vertexColors:!0,toneMapped:!1})),this.type="AxesHelper"}setColors(r,e,t){const i=new ue,n=this.geometry.attributes.color.array;return i.set(r),i.toArray(n,0),i.toArray(n,3),i.set(e),i.toArray(n,6),i.toArray(n,9),i.set(t),i.toArray(n,12),i.toArray(n,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}},x.BackSide=1,x.BasicDepthPacking=3200,x.BasicShadowMap=0,x.Bone=oa,x.BooleanKeyframeTrack=Ni,x.Box2=class{constructor(r=new J(1/0,1/0),e=new J(-1/0,-1/0)){this.isBox2=!0,this.min=r,this.max=e}set(r,e){return this.min.copy(r),this.max.copy(e),this}setFromPoints(r){this.makeEmpty();for(let e=0,t=r.length;e<t;e++)this.expandByPoint(r[e]);return this}setFromCenterAndSize(r,e){const t=dh.copy(e).multiplyScalar(.5);return this.min.copy(r).sub(t),this.max.copy(r).add(t),this}clone(){return new this.constructor().copy(this)}copy(r){return this.min.copy(r.min),this.max.copy(r.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(r){return this.isEmpty()?r.set(0,0):r.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(r){return this.isEmpty()?r.set(0,0):r.subVectors(this.max,this.min)}expandByPoint(r){return this.min.min(r),this.max.max(r),this}expandByVector(r){return this.min.sub(r),this.max.add(r),this}expandByScalar(r){return this.min.addScalar(-r),this.max.addScalar(r),this}containsPoint(r){return!(r.x<this.min.x||r.x>this.max.x||r.y<this.min.y||r.y>this.max.y)}containsBox(r){return this.min.x<=r.min.x&&r.max.x<=this.max.x&&this.min.y<=r.min.y&&r.max.y<=this.max.y}getParameter(r,e){return e.set((r.x-this.min.x)/(this.max.x-this.min.x),(r.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(r){return!(r.max.x<this.min.x||r.min.x>this.max.x||r.max.y<this.min.y||r.min.y>this.max.y)}clampPoint(r,e){return e.copy(r).clamp(this.min,this.max)}distanceToPoint(r){return dh.copy(r).clamp(this.min,this.max).sub(r).length()}intersect(r){return this.min.max(r.min),this.max.min(r.max),this}union(r){return this.min.min(r.min),this.max.max(r.max),this}translate(r){return this.min.add(r),this.max.add(r),this}equals(r){return r.min.equals(this.min)&&r.max.equals(this.max)}},x.Box3=Si,x.Box3Helper=class extends Wt{constructor(r,e=16776960){const t=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Ee;i.setIndex(new Be(t,1)),i.setAttribute("position",new me([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],3)),super(i,new gt({color:e,toneMapped:!1})),this.box=r,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(r){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(r))}dispose(){this.geometry.dispose(),this.material.dispose()}},x.BoxBufferGeometry=class extends mi{constructor(r,e,t,i,n,s){console.warn("THREE.BoxBufferGeometry has been renamed to THREE.BoxGeometry."),super(r,e,t,i,n,s)}},x.BoxGeometry=mi,x.BoxHelper=class extends Wt{constructor(r,e=16776960){const t=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),n=new Ee;n.setIndex(new Be(t,1)),n.setAttribute("position",new Be(i,3)),super(n,new gt({color:e,toneMapped:!1})),this.object=r,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(r){if(r!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&gs.setFromObject(this.object),gs.isEmpty())return;const e=gs.min,t=gs.max,i=this.geometry.attributes.position,n=i.array;n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=e.x,n[4]=t.y,n[5]=t.z,n[6]=e.x,n[7]=e.y,n[8]=t.z,n[9]=t.x,n[10]=e.y,n[11]=t.z,n[12]=t.x,n[13]=t.y,n[14]=e.z,n[15]=e.x,n[16]=t.y,n[17]=e.z,n[18]=e.x,n[19]=e.y,n[20]=e.z,n[21]=t.x,n[22]=e.y,n[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(r){return this.object=r,this.update(),this}copy(r,e){return super.copy(r,e),this.object=r.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}},x.BufferAttribute=Be,x.BufferGeometry=Ee,x.BufferGeometryLoader=eh,x.ByteType=1010,x.Cache=Oi,x.Camera=Nr,x.CameraHelper=class extends Wt{constructor(r){const e=new Ee,t=new gt({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],n=[],s={};function a(p,f){o(p),o(f)}function o(p){i.push(0,0,0),n.push(0,0,0),s[p]===void 0&&(s[p]=[]),s[p].push(i.length/3-1)}a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4"),e.setAttribute("position",new me(i,3)),e.setAttribute("color",new me(n,3)),super(e,t),this.type="CameraHelper",this.camera=r,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=r.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=s,this.update();const l=new ue(16755200),h=new ue(16711680),c=new ue(43775),u=new ue(16777215),d=new ue(3355443);this.setColors(l,h,c,u,d)}setColors(r,e,t,i,n){const s=this.geometry.getAttribute("color");s.setXYZ(0,r.r,r.g,r.b),s.setXYZ(1,r.r,r.g,r.b),s.setXYZ(2,r.r,r.g,r.b),s.setXYZ(3,r.r,r.g,r.b),s.setXYZ(4,r.r,r.g,r.b),s.setXYZ(5,r.r,r.g,r.b),s.setXYZ(6,r.r,r.g,r.b),s.setXYZ(7,r.r,r.g,r.b),s.setXYZ(8,r.r,r.g,r.b),s.setXYZ(9,r.r,r.g,r.b),s.setXYZ(10,r.r,r.g,r.b),s.setXYZ(11,r.r,r.g,r.b),s.setXYZ(12,r.r,r.g,r.b),s.setXYZ(13,r.r,r.g,r.b),s.setXYZ(14,r.r,r.g,r.b),s.setXYZ(15,r.r,r.g,r.b),s.setXYZ(16,r.r,r.g,r.b),s.setXYZ(17,r.r,r.g,r.b),s.setXYZ(18,r.r,r.g,r.b),s.setXYZ(19,r.r,r.g,r.b),s.setXYZ(20,r.r,r.g,r.b),s.setXYZ(21,r.r,r.g,r.b),s.setXYZ(22,r.r,r.g,r.b),s.setXYZ(23,r.r,r.g,r.b),s.setXYZ(24,e.r,e.g,e.b),s.setXYZ(25,e.r,e.g,e.b),s.setXYZ(26,e.r,e.g,e.b),s.setXYZ(27,e.r,e.g,e.b),s.setXYZ(28,e.r,e.g,e.b),s.setXYZ(29,e.r,e.g,e.b),s.setXYZ(30,e.r,e.g,e.b),s.setXYZ(31,e.r,e.g,e.b),s.setXYZ(32,t.r,t.g,t.b),s.setXYZ(33,t.r,t.g,t.b),s.setXYZ(34,t.r,t.g,t.b),s.setXYZ(35,t.r,t.g,t.b),s.setXYZ(36,t.r,t.g,t.b),s.setXYZ(37,t.r,t.g,t.b),s.setXYZ(38,i.r,i.g,i.b),s.setXYZ(39,i.r,i.g,i.b),s.setXYZ(40,n.r,n.g,n.b),s.setXYZ(41,n.r,n.g,n.b),s.setXYZ(42,n.r,n.g,n.b),s.setXYZ(43,n.r,n.g,n.b),s.setXYZ(44,n.r,n.g,n.b),s.setXYZ(45,n.r,n.g,n.b),s.setXYZ(46,n.r,n.g,n.b),s.setXYZ(47,n.r,n.g,n.b),s.setXYZ(48,n.r,n.g,n.b),s.setXYZ(49,n.r,n.g,n.b),s.needsUpdate=!0}update(){const r=this.geometry,e=this.pointMap;Xe.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Ke("c",e,r,Xe,0,0,-1),Ke("t",e,r,Xe,0,0,1),Ke("n1",e,r,Xe,-1,-1,-1),Ke("n2",e,r,Xe,1,-1,-1),Ke("n3",e,r,Xe,-1,1,-1),Ke("n4",e,r,Xe,1,1,-1),Ke("f1",e,r,Xe,-1,-1,1),Ke("f2",e,r,Xe,1,-1,1),Ke("f3",e,r,Xe,-1,1,1),Ke("f4",e,r,Xe,1,1,1),Ke("u1",e,r,Xe,.7,1.1,-1),Ke("u2",e,r,Xe,-.7,1.1,-1),Ke("u3",e,r,Xe,0,2,-1),Ke("cf1",e,r,Xe,-1,0,1),Ke("cf2",e,r,Xe,1,0,1),Ke("cf3",e,r,Xe,0,-1,1),Ke("cf4",e,r,Xe,0,1,1),Ke("cn1",e,r,Xe,-1,0,-1),Ke("cn2",e,r,Xe,1,0,-1),Ke("cn3",e,r,Xe,0,-1,-1),Ke("cn4",e,r,Xe,0,1,-1),r.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}},x.CanvasTexture=class extends Je{constructor(r,e,t,i,n,s,a,o,l){super(r,e,t,i,n,s,a,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},x.CapsuleBufferGeometry=class extends Wn{constructor(r,e,t,i){console.warn("THREE.CapsuleBufferGeometry has been renamed to THREE.CapsuleGeometry."),super(r,e,t,i)}},x.CapsuleGeometry=Wn,x.CatmullRomCurve3=ml,x.CineonToneMapping=3,x.CircleBufferGeometry=class extends jn{constructor(r,e,t,i){console.warn("THREE.CircleBufferGeometry has been renamed to THREE.CircleGeometry."),super(r,e,t,i)}},x.CircleGeometry=jn,x.ClampToEdgeWrapping=1001,x.Clock=sh,x.Color=ue,x.ColorKeyframeTrack=Ra,x.ColorManagement=ct,x.CompressedArrayTexture=class extends ua{constructor(r,e,t,i,n,s){super(r,e,t,n,s),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=1001}},x.CompressedTexture=ua,x.CompressedTextureLoader=class extends Tt{constructor(r){super(r)}load(r,e,t,i){const n=this,s=[],a=new ua,o=new ii(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(n.withCredentials);let l=0;function h(c){o.load(r[c],function(u){const d=n.parse(u,!0);s[c]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},l+=1,l===6&&(d.mipmapCount===1&&(a.minFilter=1006),a.image=s,a.format=d.format,a.needsUpdate=!0,e&&e(a))},t,i)}if(Array.isArray(r))for(let c=0,u=r.length;c<u;++c)h(c);else o.load(r,function(c){const u=n.parse(c,!0);if(u.isCubemap){const d=u.mipmaps.length/u.mipmapCount;for(let p=0;p<d;p++){s[p]={mipmaps:[]};for(let f=0;f<u.mipmapCount;f++)s[p].mipmaps.push(u.mipmaps[p*u.mipmapCount+f]),s[p].format=u.format,s[p].width=u.width,s[p].height=u.height}a.image=s}else a.image.width=u.width,a.image.height=u.height,a.mipmaps=u.mipmaps;u.mipmapCount===1&&(a.minFilter=1006),a.format=u.format,a.needsUpdate=!0,e&&e(a)},t,i);return a}},x.ConeBufferGeometry=class extends qn{constructor(r,e,t,i,n,s,a){console.warn("THREE.ConeBufferGeometry has been renamed to THREE.ConeGeometry."),super(r,e,t,i,n,s,a)}},x.ConeGeometry=qn,x.CubeCamera=lo,x.CubeReflectionMapping=301,x.CubeRefractionMapping=302,x.CubeTexture=Nn,x.CubeTextureLoader=class extends Tt{constructor(r){super(r)}load(r,e,t,i){const n=new Nn,s=new hr(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let a=0;function o(l){s.load(r[l],function(h){n.images[l]=h,a++,a===6&&(n.needsUpdate=!0,e&&e(n))},void 0,i)}for(let l=0;l<r.length;++l)o(l);return n}},x.CubeUVReflectionMapping=306,x.CubicBezierCurve=ga,x.CubicBezierCurve3=gl,x.CubicInterpolant=Fl,x.CullFaceBack=1,x.CullFaceFront=2,x.CullFaceFrontBack=3,x.CullFaceNone=0,x.Curve=Bt,x.CurvePath=xl,x.CustomBlending=5,x.CustomToneMapping=5,x.CylinderBufferGeometry=class extends Li{constructor(r,e,t,i,n,s,a,o){console.warn("THREE.CylinderBufferGeometry has been renamed to THREE.CylinderGeometry."),super(r,e,t,i,n,s,a,o)}},x.CylinderGeometry=Li,x.Cylindrical=class{constructor(r=1,e=0,t=0){return this.radius=r,this.theta=e,this.y=t,this}set(r,e,t){return this.radius=r,this.theta=e,this.y=t,this}copy(r){return this.radius=r.radius,this.theta=r.theta,this.y=r.y,this}setFromVector3(r){return this.setFromCartesianCoords(r.x,r.y,r.z)}setFromCartesianCoords(r,e,t){return this.radius=Math.sqrt(r*r+t*t),this.theta=Math.atan2(r,t),this.y=e,this}clone(){return new this.constructor().copy(this)}},x.Data3DTexture=vr,x.DataArrayTexture=Cn,x.DataTexture=gn,x.DataTexture2DArray=class extends Cn{constructor(r,e,t,i){console.warn("THREE.DataTexture2DArray has been renamed to DataArrayTexture."),super(r,e,t,i)}},x.DataTexture3D=class extends vr{constructor(r,e,t,i){console.warn("THREE.DataTexture3D has been renamed to Data3DTexture."),super(r,e,t,i)}},x.DataTextureLoader=class extends Tt{constructor(r){super(r)}load(r,e,t,i){const n=this,s=new gn,a=new ii(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(n.withCredentials),a.load(r,function(o){const l=n.parse(o);l&&(l.image!==void 0?s.image=l.image:l.data!==void 0&&(s.image.width=l.width,s.image.height=l.height,s.image.data=l.data),s.wrapS=l.wrapS!==void 0?l.wrapS:1001,s.wrapT=l.wrapT!==void 0?l.wrapT:1001,s.magFilter=l.magFilter!==void 0?l.magFilter:1006,s.minFilter=l.minFilter!==void 0?l.minFilter:1006,s.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.encoding!==void 0&&(s.encoding=l.encoding),l.flipY!==void 0&&(s.flipY=l.flipY),l.format!==void 0&&(s.format=l.format),l.type!==void 0&&(s.type=l.type),l.mipmaps!==void 0&&(s.mipmaps=l.mipmaps,s.minFilter=1008),l.mipmapCount===1&&(s.minFilter=1006),l.generateMipmaps!==void 0&&(s.generateMipmaps=l.generateMipmaps),s.needsUpdate=!0,e&&e(s,l))},t,i),s}},x.DataUtils=sd,x.DecrementStencilOp=7683,x.DecrementWrapStencilOp=34056,x.DefaultLoadingManager=Gl,x.DepthFormat=1026,x.DepthStencilFormat=1027,x.DepthTexture=Fo,x.DirectionalLight=Zl,x.DirectionalLightHelper=class extends Ne{constructor(r,e,t){super(),this.light=r,this.matrix=r.matrixWorld,this.matrixAutoUpdate=!1,this.color=t,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new Ee;i.setAttribute("position",new me([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));const n=new gt({fog:!1,toneMapped:!1});this.lightPlane=new gi(i,n),this.add(this.lightPlane),i=new Ee,i.setAttribute("position",new me([0,0,0,0,0,1],3)),this.targetLine=new gi(i,n),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),xh.setFromMatrixPosition(this.light.matrixWorld),ms.setFromMatrixPosition(this.light.target.matrixWorld),_h.subVectors(ms,xh),this.lightPlane.lookAt(ms),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(ms),this.targetLine.scale.z=_h.length()}},x.DiscreteInterpolant=kl,x.DodecahedronBufferGeometry=class extends Xn{constructor(r,e){console.warn("THREE.DodecahedronBufferGeometry has been renamed to THREE.DodecahedronGeometry."),super(r,e)}},x.DodecahedronGeometry=Xn,x.DoubleSide=2,x.DstAlphaFactor=206,x.DstColorFactor=208,x.DynamicCopyUsage=35050,x.DynamicDrawUsage=35048,x.DynamicReadUsage=35049,x.EdgesGeometry=_l,x.EllipseCurve=es,x.EqualDepth=4,x.EqualStencilFunc=514,x.EquirectangularReflectionMapping=303,x.EquirectangularRefractionMapping=304,x.Euler=Qi,x.EventDispatcher=Xt,x.ExtrudeBufferGeometry=class extends Kn{constructor(r,e){console.warn("THREE.ExtrudeBufferGeometry has been renamed to THREE.ExtrudeGeometry."),super(r,e)}},x.ExtrudeGeometry=Kn,x.FileLoader=ii,x.Float16BufferAttribute=class extends Be{constructor(r,e,t){super(new Uint16Array(r),e,t),this.isFloat16BufferAttribute=!0}},x.Float32BufferAttribute=me,x.Float64BufferAttribute=class extends Be{constructor(r,e,t){super(new Float64Array(r),e,t)}},x.FloatType=1015,x.Fog=Vr,x.FogExp2=Gr,x.FramebufferTexture=class extends Je{constructor(r,e,t){super({width:r,height:e}),this.isFramebufferTexture=!0,this.format=t,this.magFilter=1003,this.minFilter=1003,this.generateMipmaps=!1,this.needsUpdate=!0}},x.FrontSide=0,x.Frustum=Or,x.GLBufferAttribute=class{constructor(r,e,t,i,n){this.isGLBufferAttribute=!0,this.buffer=r,this.type=e,this.itemSize=t,this.elementSize=i,this.count=n,this.version=0}set needsUpdate(r){r===!0&&this.version++}setBuffer(r){return this.buffer=r,this}setType(r,e){return this.type=r,this.elementSize=e,this}setItemSize(r){return this.itemSize=r,this}setCount(r){return this.count=r,this}},x.GLSL1="100",x.GLSL3=bs,x.GreaterDepth=6,x.GreaterEqualDepth=5,x.GreaterEqualStencilFunc=518,x.GreaterStencilFunc=516,x.GridHelper=class extends Wt{constructor(r=10,e=10,t=4473924,i=8947848){t=new ue(t),i=new ue(i);const n=e/2,s=r/e,a=r/2,o=[],l=[];for(let c=0,u=0,d=-a;c<=e;c++,d+=s){o.push(-a,0,d,a,0,d),o.push(d,0,-a,d,0,a);const p=c===n?t:i;p.toArray(l,u),u+=3,p.toArray(l,u),u+=3,p.toArray(l,u),u+=3,p.toArray(l,u),u+=3}const h=new Ee;h.setAttribute("position",new me(o,3)),h.setAttribute("color",new me(l,3)),super(h,new gt({vertexColors:!0,toneMapped:!1})),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},x.Group=un,x.HalfFloatType=1016,x.HemisphereLight=Vl,x.HemisphereLightHelper=class extends Ne{constructor(r,e,t){super(),this.light=r,this.matrix=r.matrixWorld,this.matrixAutoUpdate=!1,this.color=t,this.type="HemisphereLightHelper";const i=new yn(e);i.rotateY(.5*Math.PI),this.material=new ci({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const n=i.getAttribute("position"),s=new Float32Array(3*n.count);i.setAttribute("color",new Be(s,3)),this.add(new at(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const r=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const e=r.geometry.getAttribute("color");gh.copy(this.light.color),vh.copy(this.light.groundColor);for(let t=0,i=e.count;t<i;t++){const n=t<i/2?gh:vh;e.setXYZ(t,n.r,n.g,n.b)}e.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),r.lookAt(nd.setFromMatrixPosition(this.light.matrixWorld).negate())}},x.HemisphereLightProbe=class extends hs{constructor(r,e,t=1){super(void 0,t),this.isHemisphereLightProbe=!0;const i=new ue().set(r),n=new ue().set(e),s=new E(i.r,i.g,i.b),a=new E(n.r,n.g,n.b),o=Math.sqrt(Math.PI),l=o*Math.sqrt(.75);this.sh.coefficients[0].copy(s).add(a).multiplyScalar(o),this.sh.coefficients[1].copy(s).sub(a).multiplyScalar(l)}},x.IcosahedronBufferGeometry=class extends Qn{constructor(r,e){console.warn("THREE.IcosahedronBufferGeometry has been renamed to THREE.IcosahedronGeometry."),super(r,e)}},x.IcosahedronGeometry=Qn,x.ImageBitmapLoader=class extends Tt{constructor(r){super(r),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(r){return this.options=r,this}load(r,e,t,i){r===void 0&&(r=""),this.path!==void 0&&(r=this.path+r),r=this.manager.resolveURL(r);const n=this,s=Oi.get(r);if(s!==void 0)return n.manager.itemStart(r),setTimeout(function(){e&&e(s),n.manager.itemEnd(r)},0),s;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(r,a).then(function(o){return o.blob()}).then(function(o){return createImageBitmap(o,Object.assign(n.options,{colorSpaceConversion:"none"}))}).then(function(o){Oi.add(r,o),e&&e(o),n.manager.itemEnd(r)}).catch(function(o){i&&i(o),n.manager.itemError(r),n.manager.itemEnd(r)}),n.manager.itemStart(r)}},x.ImageLoader=hr,x.ImageUtils=Cs,x.ImmediateRenderObject=function(){console.error("THREE.ImmediateRenderObject has been removed.")},x.IncrementStencilOp=7682,x.IncrementWrapStencilOp=34055,x.InstancedBufferAttribute=vn,x.InstancedBufferGeometry=$l,x.InstancedInterleavedBuffer=class extends Wr{constructor(r,e,t=1){super(r,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=t}copy(r){return super.copy(r),this.meshPerAttribute=r.meshPerAttribute,this}clone(r){const e=super.clone(r);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(r){const e=super.toJSON(r);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}},x.InstancedMesh=nl,x.Int16BufferAttribute=class extends Be{constructor(r,e,t){super(new Int16Array(r),e,t)}},x.Int32BufferAttribute=class extends Be{constructor(r,e,t){super(new Int32Array(r),e,t)}},x.Int8BufferAttribute=class extends Be{constructor(r,e,t){super(new Int8Array(r),e,t)}},x.IntType=1013,x.InterleavedBuffer=Wr,x.InterleavedBufferAttribute=Ri,x.Interpolant=sr,x.InterpolateDiscrete=2300,x.InterpolateLinear=2301,x.InterpolateSmooth=2302,x.InvertStencilOp=5386,x.KeepStencilOp=7680,x.KeyframeTrack=Ft,x.LOD=Yo,x.LatheBufferGeometry=class extends xn{constructor(r,e,t,i){console.warn("THREE.LatheBufferGeometry has been renamed to THREE.LatheGeometry."),super(r,e,t,i)}},x.LatheGeometry=xn,x.Layers=Sr,x.LessDepth=2,x.LessEqualDepth=3,x.LessEqualStencilFunc=515,x.LessStencilFunc=513,x.Light=vi,x.LightProbe=hs,x.Line=gi,x.Line3=class{constructor(r=new E,e=new E){this.start=r,this.end=e}set(r,e){return this.start.copy(r),this.end.copy(e),this}copy(r){return this.start.copy(r.start),this.end.copy(r.end),this}getCenter(r){return r.addVectors(this.start,this.end).multiplyScalar(.5)}delta(r){return r.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(r,e){return this.delta(e).multiplyScalar(r).add(this.start)}closestPointToPointParameter(r,e){ph.subVectors(r,this.start),ds.subVectors(this.end,this.start);const t=ds.dot(ds);let i=ds.dot(ph)/t;return e&&(i=Ze(i,0,1)),i}closestPointToPoint(r,e,t){const i=this.closestPointToPointParameter(r,e);return this.delta(t).multiplyScalar(i).add(this.start)}applyMatrix4(r){return this.start.applyMatrix4(r),this.end.applyMatrix4(r),this}equals(r){return r.start.equals(this.start)&&r.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},x.LineBasicMaterial=gt,x.LineCurve=is,x.LineCurve3=vl,x.LineDashedMaterial=Ul,x.LineLoop=hl,x.LineSegments=Wt,x.LinearEncoding=3e3,x.LinearFilter=1006,x.LinearInterpolant=Ca,x.LinearMipMapLinearFilter=1008,x.LinearMipMapNearestFilter=1007,x.LinearMipmapLinearFilter=1008,x.LinearMipmapNearestFilter=1007,x.LinearSRGBColorSpace=wn,x.LinearToneMapping=1,x.Loader=Tt,x.LoaderUtils=Na,x.LoadingManager=La,x.LoopOnce=2200,x.LoopPingPong=2202,x.LoopRepeat=2201,x.LuminanceAlphaFormat=1025,x.LuminanceFormat=1024,x.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},x.Material=ut,x.MaterialLoader=cs,x.MathUtils=zh,x.Matrix3=pt,x.Matrix4=be,x.MaxEquation=104,x.Mesh=at,x.MeshBasicMaterial=ci,x.MeshDepthMaterial=ia,x.MeshDistanceMaterial=na,x.MeshLambertMaterial=zl,x.MeshMatcapMaterial=Ol,x.MeshNormalMaterial=Nl,x.MeshPhongMaterial=Dl,x.MeshPhysicalMaterial=Pl,x.MeshStandardMaterial=wa,x.MeshToonMaterial=Il,x.MinEquation=103,x.MirroredRepeatWrapping=1002,x.MixOperation=1,x.MultiplyBlending=4,x.MultiplyOperation=0,x.NearestFilter=1003,x.NearestMipMapLinearFilter=1005,x.NearestMipMapNearestFilter=1004,x.NearestMipmapLinearFilter=1005,x.NearestMipmapNearestFilter=1004,x.NeverDepth=0,x.NeverStencilFunc=512,x.NoBlending=0,x.NoColorSpace="",x.NoToneMapping=0,x.NormalAnimationBlendMode=2500,x.NormalBlending=1,x.NotEqualDepth=7,x.NotEqualStencilFunc=517,x.NumberKeyframeTrack=ar,x.Object3D=Ne,x.ObjectLoader=class extends Tt{constructor(r){super(r)}load(r,e,t,i){const n=this,s=this.path===""?Na.extractUrlBase(r):this.path;this.resourcePath=this.resourcePath||s;const a=new ii(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(r,function(o){let l=null;try{l=JSON.parse(o)}catch(c){return i!==void 0&&i(c),void console.error("THREE:ObjectLoader: Can't parse "+r+".",c.message)}const h=l.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry")return i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+r)),void console.error("THREE.ObjectLoader: Can't load "+r);n.parse(l,e)},t,i)}async loadAsync(r,e){const t=this.path===""?Na.extractUrlBase(r):this.path;this.resourcePath=this.resourcePath||t;const i=new ii(this.manager);i.setPath(this.path),i.setRequestHeader(this.requestHeader),i.setWithCredentials(this.withCredentials);const n=await i.loadAsync(r,e),s=JSON.parse(n),a=s.metadata;if(a===void 0||a.type===void 0||a.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+r);return await this.parseAsync(s)}parse(r,e){const t=this.parseAnimations(r.animations),i=this.parseShapes(r.shapes),n=this.parseGeometries(r.geometries,i),s=this.parseImages(r.images,function(){e!==void 0&&e(l)}),a=this.parseTextures(r.textures,s),o=this.parseMaterials(r.materials,a),l=this.parseObject(r.object,n,o,a,t),h=this.parseSkeletons(r.skeletons,l);if(this.bindSkeletons(l,h),e!==void 0){let c=!1;for(const u in s)if(s[u].data instanceof HTMLImageElement){c=!0;break}c===!1&&e(l)}return l}async parseAsync(r){const e=this.parseAnimations(r.animations),t=this.parseShapes(r.shapes),i=this.parseGeometries(r.geometries,t),n=await this.parseImagesAsync(r.images),s=this.parseTextures(r.textures,n),a=this.parseMaterials(r.materials,s),o=this.parseObject(r.object,i,a,s,e),l=this.parseSkeletons(r.skeletons,o);return this.bindSkeletons(o,l),o}parseShapes(r){const e={};if(r!==void 0)for(let t=0,i=r.length;t<i;t++){const n=new Pi().fromJSON(r[t]);e[n.uuid]=n}return e}parseSkeletons(r,e){const t={},i={};if(e.traverse(function(n){n.isBone&&(i[n.uuid]=n)}),r!==void 0)for(let n=0,s=r.length;n<s;n++){const a=new Zr().fromJSON(r[n],i);t[a.uuid]=a}return t}parseGeometries(r,e){const t={};if(r!==void 0){const i=new eh;for(let n=0,s=r.length;n<s;n++){let a;const o=r[n];switch(o.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(o);break;default:o.type in Cl?a=Cl[o.type].fromJSON(o,e):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${o.type}"`)}a.uuid=o.uuid,o.name!==void 0&&(a.name=o.name),a.isBufferGeometry===!0&&o.userData!==void 0&&(a.userData=o.userData),t[o.uuid]=a}}return t}parseMaterials(r,e){const t={},i={};if(r!==void 0){const n=new cs;n.setTextures(e);for(let s=0,a=r.length;s<a;s++){const o=r[s];t[o.uuid]===void 0&&(t[o.uuid]=n.parse(o)),i[o.uuid]=t[o.uuid]}}return i}parseAnimations(r){const e={};if(r!==void 0)for(let t=0;t<r.length;t++){const i=r[t],n=lr.parse(i);e[n.uuid]=n}return e}parseImages(r,e){const t=this,i={};let n;function s(a){if(typeof a=="string"){const o=a;return function(l){return t.manager.itemStart(l),n.load(l,function(){t.manager.itemEnd(l)},void 0,function(){t.manager.itemError(l),t.manager.itemEnd(l)})}(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o)}return a.data?{data:qi(a.type,a.data),width:a.width,height:a.height}:null}if(r!==void 0&&r.length>0){const a=new La(e);n=new hr(a),n.setCrossOrigin(this.crossOrigin);for(let o=0,l=r.length;o<l;o++){const h=r[o],c=h.url;if(Array.isArray(c)){const u=[];for(let d=0,p=c.length;d<p;d++){const f=s(c[d]);f!==null&&(f instanceof HTMLImageElement?u.push(f):u.push(new gn(f.data,f.width,f.height)))}i[h.uuid]=new bi(u)}else{const u=s(h.url);i[h.uuid]=new bi(u)}}}return i}async parseImagesAsync(r){const e=this,t={};let i;async function n(s){if(typeof s=="string"){const a=s,o=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:e.resourcePath+a;return await i.loadAsync(o)}return s.data?{data:qi(s.type,s.data),width:s.width,height:s.height}:null}if(r!==void 0&&r.length>0){i=new hr(this.manager),i.setCrossOrigin(this.crossOrigin);for(let s=0,a=r.length;s<a;s++){const o=r[s],l=o.url;if(Array.isArray(l)){const h=[];for(let c=0,u=l.length;c<u;c++){const d=l[c],p=await n(d);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new gn(p.data,p.width,p.height)))}t[o.uuid]=new bi(h)}else{const h=await n(o.url);t[o.uuid]=new bi(h)}}}return t}parseTextures(r,e){function t(n,s){return typeof n=="number"?n:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",n),s[n])}const i={};if(r!==void 0)for(let n=0,s=r.length;n<s;n++){const a=r[n];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),e[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);const o=e[a.image],l=o.data;let h;Array.isArray(l)?(h=new Nn,l.length===6&&(h.needsUpdate=!0)):(h=l&&l.data?new gn:new Je,l&&(h.needsUpdate=!0)),h.source=o,h.uuid=a.uuid,a.name!==void 0&&(h.name=a.name),a.mapping!==void 0&&(h.mapping=t(a.mapping,qu)),a.offset!==void 0&&h.offset.fromArray(a.offset),a.repeat!==void 0&&h.repeat.fromArray(a.repeat),a.center!==void 0&&h.center.fromArray(a.center),a.rotation!==void 0&&(h.rotation=a.rotation),a.wrap!==void 0&&(h.wrapS=t(a.wrap[0],th),h.wrapT=t(a.wrap[1],th)),a.format!==void 0&&(h.format=a.format),a.type!==void 0&&(h.type=a.type),a.encoding!==void 0&&(h.encoding=a.encoding),a.minFilter!==void 0&&(h.minFilter=t(a.minFilter,ih)),a.magFilter!==void 0&&(h.magFilter=t(a.magFilter,ih)),a.anisotropy!==void 0&&(h.anisotropy=a.anisotropy),a.flipY!==void 0&&(h.flipY=a.flipY),a.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(h.unpackAlignment=a.unpackAlignment),a.userData!==void 0&&(h.userData=a.userData),i[a.uuid]=h}return i}parseObject(r,e,t,i,n){let s,a,o;function l(u){return e[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",u),e[u]}function h(u){if(u!==void 0){if(Array.isArray(u)){const d=[];for(let p=0,f=u.length;p<f;p++){const m=u[p];t[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),d.push(t[m])}return d}return t[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",u),t[u]}}function c(u){return i[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",u),i[u]}switch(r.type){case"Scene":s=new Go,r.background!==void 0&&(Number.isInteger(r.background)?s.background=new ue(r.background):s.background=c(r.background)),r.environment!==void 0&&(s.environment=c(r.environment)),r.fog!==void 0&&(r.fog.type==="Fog"?s.fog=new Vr(r.fog.color,r.fog.near,r.fog.far):r.fog.type==="FogExp2"&&(s.fog=new Gr(r.fog.color,r.fog.density))),r.backgroundBlurriness!==void 0&&(s.backgroundBlurriness=r.backgroundBlurriness);break;case"PerspectiveCamera":s=new ot(r.fov,r.aspect,r.near,r.far),r.focus!==void 0&&(s.focus=r.focus),r.zoom!==void 0&&(s.zoom=r.zoom),r.filmGauge!==void 0&&(s.filmGauge=r.filmGauge),r.filmOffset!==void 0&&(s.filmOffset=r.filmOffset),r.view!==void 0&&(s.view=Object.assign({},r.view));break;case"OrthographicCamera":s=new Br(r.left,r.right,r.top,r.bottom,r.near,r.far),r.zoom!==void 0&&(s.zoom=r.zoom),r.view!==void 0&&(s.view=Object.assign({},r.view));break;case"AmbientLight":s=new Jl(r.color,r.intensity);break;case"DirectionalLight":s=new Zl(r.color,r.intensity);break;case"PointLight":s=new Yl(r.color,r.intensity,r.distance,r.decay);break;case"RectAreaLight":s=new Kl(r.color,r.intensity,r.width,r.height);break;case"SpotLight":s=new ql(r.color,r.intensity,r.distance,r.angle,r.penumbra,r.decay);break;case"HemisphereLight":s=new Vl(r.color,r.groundColor,r.intensity);break;case"LightProbe":s=new hs().fromJSON(r);break;case"SkinnedMesh":a=l(r.geometry),o=h(r.material),s=new $o(a,o),r.bindMode!==void 0&&(s.bindMode=r.bindMode),r.bindMatrix!==void 0&&s.bindMatrix.fromArray(r.bindMatrix),r.skeleton!==void 0&&(s.skeleton=r.skeleton);break;case"Mesh":a=l(r.geometry),o=h(r.material),s=new at(a,o);break;case"InstancedMesh":a=l(r.geometry),o=h(r.material);const u=r.count,d=r.instanceMatrix,p=r.instanceColor;s=new nl(a,o,u),s.instanceMatrix=new vn(new Float32Array(d.array),16),p!==void 0&&(s.instanceColor=new vn(new Float32Array(p.array),p.itemSize));break;case"LOD":s=new Yo;break;case"Line":s=new gi(l(r.geometry),h(r.material));break;case"LineLoop":s=new hl(l(r.geometry),h(r.material));break;case"LineSegments":s=new Wt(l(r.geometry),h(r.material));break;case"PointCloud":case"Points":s=new ul(l(r.geometry),h(r.material));break;case"Sprite":s=new qo(h(r.material));break;case"Group":s=new un;break;case"Bone":s=new oa;break;default:s=new Ne}if(s.uuid=r.uuid,r.name!==void 0&&(s.name=r.name),r.matrix!==void 0?(s.matrix.fromArray(r.matrix),r.matrixAutoUpdate!==void 0&&(s.matrixAutoUpdate=r.matrixAutoUpdate),s.matrixAutoUpdate&&s.matrix.decompose(s.position,s.quaternion,s.scale)):(r.position!==void 0&&s.position.fromArray(r.position),r.rotation!==void 0&&s.rotation.fromArray(r.rotation),r.quaternion!==void 0&&s.quaternion.fromArray(r.quaternion),r.scale!==void 0&&s.scale.fromArray(r.scale)),r.castShadow!==void 0&&(s.castShadow=r.castShadow),r.receiveShadow!==void 0&&(s.receiveShadow=r.receiveShadow),r.shadow&&(r.shadow.bias!==void 0&&(s.shadow.bias=r.shadow.bias),r.shadow.normalBias!==void 0&&(s.shadow.normalBias=r.shadow.normalBias),r.shadow.radius!==void 0&&(s.shadow.radius=r.shadow.radius),r.shadow.mapSize!==void 0&&s.shadow.mapSize.fromArray(r.shadow.mapSize),r.shadow.camera!==void 0&&(s.shadow.camera=this.parseObject(r.shadow.camera))),r.visible!==void 0&&(s.visible=r.visible),r.frustumCulled!==void 0&&(s.frustumCulled=r.frustumCulled),r.renderOrder!==void 0&&(s.renderOrder=r.renderOrder),r.userData!==void 0&&(s.userData=r.userData),r.layers!==void 0&&(s.layers.mask=r.layers),r.children!==void 0){const u=r.children;for(let d=0;d<u.length;d++)s.add(this.parseObject(u[d],e,t,i,n))}if(r.animations!==void 0){const u=r.animations;for(let d=0;d<u.length;d++){const p=u[d];s.animations.push(n[p])}}if(r.type==="LOD"){r.autoUpdate!==void 0&&(s.autoUpdate=r.autoUpdate);const u=r.levels;for(let d=0;d<u.length;d++){const p=u[d],f=s.getObjectByProperty("uuid",p.object);f!==void 0&&s.addLevel(f,p.distance,p.hysteresis)}}return s}bindSkeletons(r,e){Object.keys(e).length!==0&&r.traverse(function(t){if(t.isSkinnedMesh===!0&&t.skeleton!==void 0){const i=e[t.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",t.skeleton):t.bind(i,t.bindMatrix)}})}},x.ObjectSpaceNormalMap=1,x.OctahedronBufferGeometry=class extends yn{constructor(r,e){console.warn("THREE.OctahedronBufferGeometry has been renamed to THREE.OctahedronGeometry."),super(r,e)}},x.OctahedronGeometry=yn,x.OneFactor=201,x.OneMinusDstAlphaFactor=207,x.OneMinusDstColorFactor=209,x.OneMinusSrcAlphaFactor=205,x.OneMinusSrcColorFactor=203,x.OrthographicCamera=Br,x.PCFShadowMap=1,x.PCFSoftShadowMap=2,x.PMREMGenerator=Qs,x.Path=Vn,x.PerspectiveCamera=ot,x.Plane=fi,x.PlaneBufferGeometry=class extends ln{constructor(r,e,t,i){console.warn("THREE.PlaneBufferGeometry has been renamed to THREE.PlaneGeometry."),super(r,e,t,i)}},x.PlaneGeometry=ln,x.PlaneHelper=class extends gi{constructor(r,e=1,t=16776960){const i=t,n=new Ee;n.setAttribute("position",new me([1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],3)),n.computeBoundingSphere(),super(n,new gt({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=r,this.size=e;const s=new Ee;s.setAttribute("position",new me([1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],3)),s.computeBoundingSphere(),this.add(new at(s,new ci({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(r){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(r)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},x.PointLight=Yl,x.PointLightHelper=class extends at{constructor(r,e,t){super(new Mn(e,4,2),new ci({wireframe:!0,fog:!1,toneMapped:!1})),this.light=r,this.color=t,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},x.Points=ul,x.PointsMaterial=ha,x.PolarGridHelper=class extends Wt{constructor(r=10,e=16,t=8,i=64,n=4473924,s=8947848){n=new ue(n),s=new ue(s);const a=[],o=[];if(e>1)for(let h=0;h<e;h++){const c=h/e*(2*Math.PI),u=Math.sin(c)*r,d=Math.cos(c)*r;a.push(0,0,0),a.push(u,0,d);const p=1&h?n:s;o.push(p.r,p.g,p.b),o.push(p.r,p.g,p.b)}for(let h=0;h<t;h++){const c=1&h?n:s,u=r-r/t*h;for(let d=0;d<i;d++){let p=d/i*(2*Math.PI),f=Math.sin(p)*u,m=Math.cos(p)*u;a.push(f,0,m),o.push(c.r,c.g,c.b),p=(d+1)/i*(2*Math.PI),f=Math.sin(p)*u,m=Math.cos(p)*u,a.push(f,0,m),o.push(c.r,c.g,c.b)}}const l=new Ee;l.setAttribute("position",new me(a,3)),l.setAttribute("color",new me(o,3)),super(l,new gt({vertexColors:!0,toneMapped:!1})),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},x.PolyhedronBufferGeometry=class extends ei{constructor(r,e,t,i){console.warn("THREE.PolyhedronBufferGeometry has been renamed to THREE.PolyhedronGeometry."),super(r,e,t,i)}},x.PolyhedronGeometry=ei,x.PositionalAudio=class extends lh{constructor(r){super(r),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(r){return this.panner.refDistance=r,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(r){return this.panner.rolloffFactor=r,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(r){return this.panner.distanceModel=r,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(r){return this.panner.maxDistance=r,this}setDirectionalCone(r,e,t){return this.panner.coneInnerAngle=r,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=t,this}updateMatrixWorld(r){if(super.updateMatrixWorld(r),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(ki,hh,Yu),Hi.set(0,0,1).applyQuaternion(hh);const e=this.panner;if(e.positionX){const t=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(ki.x,t),e.positionY.linearRampToValueAtTime(ki.y,t),e.positionZ.linearRampToValueAtTime(ki.z,t),e.orientationX.linearRampToValueAtTime(Hi.x,t),e.orientationY.linearRampToValueAtTime(Hi.y,t),e.orientationZ.linearRampToValueAtTime(Hi.z,t)}else e.setPosition(ki.x,ki.y,ki.z),e.setOrientation(Hi.x,Hi.y,Hi.z)}},x.PropertyBinding=Pe,x.PropertyMixer=ch,x.QuadraticBezierCurve=va,x.QuadraticBezierCurve3=xa,x.Quaternion=_t,x.QuaternionKeyframeTrack=bn,x.QuaternionLinearInterpolant=Hl,x.REVISION=yt,x.RGBADepthPacking=3201,x.RGBAFormat=1023,x.RGBAIntegerFormat=1033,x.RGBA_ASTC_10x10_Format=37819,x.RGBA_ASTC_10x5_Format=37816,x.RGBA_ASTC_10x6_Format=37817,x.RGBA_ASTC_10x8_Format=37818,x.RGBA_ASTC_12x10_Format=37820,x.RGBA_ASTC_12x12_Format=37821,x.RGBA_ASTC_4x4_Format=37808,x.RGBA_ASTC_5x4_Format=37809,x.RGBA_ASTC_5x5_Format=37810,x.RGBA_ASTC_6x5_Format=37811,x.RGBA_ASTC_6x6_Format=37812,x.RGBA_ASTC_8x5_Format=37813,x.RGBA_ASTC_8x6_Format=37814,x.RGBA_ASTC_8x8_Format=37815,x.RGBA_BPTC_Format=36492,x.RGBA_ETC2_EAC_Format=37496,x.RGBA_PVRTC_2BPPV1_Format=35843,x.RGBA_PVRTC_4BPPV1_Format=35842,x.RGBA_S3TC_DXT1_Format=33777,x.RGBA_S3TC_DXT3_Format=33778,x.RGBA_S3TC_DXT5_Format=33779,x.RGBFormat=1022,x.RGB_ETC1_Format=36196,x.RGB_ETC2_Format=37492,x.RGB_PVRTC_2BPPV1_Format=35841,x.RGB_PVRTC_4BPPV1_Format=35840,x.RGB_S3TC_DXT1_Format=33776,x.RGFormat=1030,x.RGIntegerFormat=1031,x.RawShaderMaterial=Ll,x.Ray=Pn,x.Raycaster=class{constructor(r,e,t=0,i=1/0){this.ray=new Pn(r,e),this.near=t,this.far=i,this.camera=null,this.layers=new Sr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(r,e){this.ray.set(r,e)}setFromCamera(r,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(r.x,r.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(r.x,r.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(r,e=!0,t=[]){return Ba(r,this,t,e),t.sort(uh),t}intersectObjects(r,e=!0,t=[]){for(let i=0,n=r.length;i<n;i++)Ba(r[i],this,t,e);return t.sort(uh),t}},x.RectAreaLight=Kl,x.RedFormat=1028,x.RedIntegerFormat=1029,x.ReinhardToneMapping=2,x.RepeatWrapping=1e3,x.ReplaceStencilOp=7681,x.ReverseSubtractEquation=102,x.RingBufferGeometry=class extends $n{constructor(r,e,t,i,n,s){console.warn("THREE.RingBufferGeometry has been renamed to THREE.RingGeometry."),super(r,e,t,i,n,s)}},x.RingGeometry=$n,x.SRGBColorSpace=Sn,x.Scene=Go,x.ShaderChunk=we,x.ShaderLib=Ut,x.ShaderMaterial=Vt,x.ShadowMaterial=Rl,x.Shape=Pi,x.ShapeBufferGeometry=class extends er{constructor(r,e){console.warn("THREE.ShapeBufferGeometry has been renamed to THREE.ShapeGeometry."),super(r,e)}},x.ShapeGeometry=er,x.ShapePath=class{constructor(){this.type="ShapePath",this.color=new ue,this.subPaths=[],this.currentPath=null}moveTo(r,e){return this.currentPath=new Vn,this.subPaths.push(this.currentPath),this.currentPath.moveTo(r,e),this}lineTo(r,e){return this.currentPath.lineTo(r,e),this}quadraticCurveTo(r,e,t,i){return this.currentPath.quadraticCurveTo(r,e,t,i),this}bezierCurveTo(r,e,t,i,n,s){return this.currentPath.bezierCurveTo(r,e,t,i,n,s),this}splineThru(r){return this.currentPath.splineThru(r),this}toShapes(r){function e(m,g){const _=g.length;let v=!1;for(let y=_-1,M=0;M<_;y=M++){let b=g[y],T=g[M],P=T.x-b.x,L=T.y-b.y;if(Math.abs(L)>Number.EPSILON){if(L<0&&(b=g[M],P=-P,T=g[y],L=-L),m.y<b.y||m.y>T.y)continue;if(m.y===b.y){if(m.x===b.x)return!0}else{const B=L*(m.x-b.x)-P*(m.y-b.y);if(B===0)return!0;if(B<0)continue;v=!v}}else{if(m.y!==b.y)continue;if(T.x<=m.x&&m.x<=b.x||b.x<=m.x&&m.x<=T.x)return!0}}return v}const t=jt.isClockWise,i=this.subPaths;if(i.length===0)return[];let n,s,a;const o=[];if(i.length===1)return s=i[0],a=new Pi,a.curves=s.curves,o.push(a),o;let l=!t(i[0].getPoints());l=r?!l:l;const h=[],c=[];let u,d,p=[],f=0;c[f]=void 0,p[f]=[];for(let m=0,g=i.length;m<g;m++)s=i[m],u=s.getPoints(),n=t(u),n=r?!n:n,n?(!l&&c[f]&&f++,c[f]={s:new Pi,p:u},c[f].s.curves=s.curves,l&&f++,p[f]=[]):p[f].push({h:s,p:u[0]});if(!c[0])return function(m){const g=[];for(let _=0,v=m.length;_<v;_++){const y=m[_],M=new Pi;M.curves=y.curves,g.push(M)}return g}(i);if(c.length>1){let m=!1,g=0;for(let _=0,v=c.length;_<v;_++)h[_]=[];for(let _=0,v=c.length;_<v;_++){const y=p[_];for(let M=0;M<y.length;M++){const b=y[M];let T=!0;for(let P=0;P<c.length;P++)e(b.p,c[P].p)&&(_!==P&&g++,T?(T=!1,h[P].push(b)):m=!0);T&&h[_].push(b)}}g>0&&m===!1&&(p=h)}for(let m=0,g=c.length;m<g;m++){a=c[m].s,o.push(a),d=p[m];for(let _=0,v=d.length;_<v;_++)a.holes.push(d[_].h)}return o}},x.ShapeUtils=jt,x.ShortType=1011,x.Skeleton=Zr,x.SkeletonHelper=class extends Wt{constructor(r){const e=fh(r),t=new Ee,i=[],n=[],s=new ue(0,0,1),a=new ue(0,1,0);for(let o=0;o<e.length;o++){const l=e[o];l.parent&&l.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),n.push(s.r,s.g,s.b),n.push(a.r,a.g,a.b))}t.setAttribute("position",new me(i,3)),t.setAttribute("color",new me(n,3)),super(t,new gt({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0})),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=r,this.bones=e,this.matrix=r.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(r){const e=this.bones,t=this.geometry,i=t.getAttribute("position");Fa.copy(this.root.matrixWorld).invert();for(let n=0,s=0;n<e.length;n++){const a=e[n];a.parent&&a.parent.isBone&&(ps.multiplyMatrices(Fa,a.matrixWorld),xi.setFromMatrixPosition(ps),i.setXYZ(s,xi.x,xi.y,xi.z),ps.multiplyMatrices(Fa,a.parent.matrixWorld),xi.setFromMatrixPosition(ps),i.setXYZ(s+1,xi.x,xi.y,xi.z),s+=2)}t.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(r)}dispose(){this.geometry.dispose(),this.material.dispose()}},x.SkinnedMesh=$o,x.Source=bi,x.Sphere=Ai,x.SphereBufferGeometry=class extends Mn{constructor(r,e,t,i,n,s,a){console.warn("THREE.SphereBufferGeometry has been renamed to THREE.SphereGeometry."),super(r,e,t,i,n,s,a)}},x.SphereGeometry=Mn,x.Spherical=class{constructor(r=1,e=0,t=0){return this.radius=r,this.phi=e,this.theta=t,this}set(r,e,t){return this.radius=r,this.phi=e,this.theta=t,this}copy(r){return this.radius=r.radius,this.phi=r.phi,this.theta=r.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(r){return this.setFromCartesianCoords(r.x,r.y,r.z)}setFromCartesianCoords(r,e,t){return this.radius=Math.sqrt(r*r+e*e+t*t),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(r,t),this.phi=Math.acos(Ze(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},x.SphericalHarmonics3=Ql,x.SplineCurve=_a,x.SpotLight=ql,x.SpotLightHelper=class extends Ne{constructor(r,e){super(),this.light=r,this.matrix=r.matrixWorld,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";const t=new Ee,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let s=0,a=1,o=32;s<o;s++,a++){const l=s/o*Math.PI*2,h=a/o*Math.PI*2;i.push(Math.cos(l),Math.sin(l),1,Math.cos(h),Math.sin(h),1)}t.setAttribute("position",new me(i,3));const n=new gt({fog:!1,toneMapped:!1});this.cone=new Wt(t,n),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1);const r=this.light.distance?this.light.distance:1e3,e=r*Math.tan(this.light.angle);this.cone.scale.set(e,e,r),mh.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(mh),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},x.Sprite=qo,x.SpriteMaterial=sa,x.SrcAlphaFactor=204,x.SrcAlphaSaturateFactor=210,x.SrcColorFactor=202,x.StaticCopyUsage=35046,x.StaticDrawUsage=35044,x.StaticReadUsage=35045,x.StereoCamera=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new ot,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new ot,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(r){const e=this._cache;if(e.focus!==r.focus||e.fov!==r.fov||e.aspect!==r.aspect*this.aspect||e.near!==r.near||e.far!==r.far||e.zoom!==r.zoom||e.eyeSep!==this.eyeSep){e.focus=r.focus,e.fov=r.fov,e.aspect=r.aspect*this.aspect,e.near=r.near,e.far=r.far,e.zoom=r.zoom,e.eyeSep=this.eyeSep,Ui.copy(r.projectionMatrix);const t=e.eyeSep/2,i=t*e.near/e.focus,n=e.near*Math.tan(yi*e.fov*.5)/e.zoom;let s,a;rh.elements[12]=-t,nh.elements[12]=t,s=-n*e.aspect+i,a=n*e.aspect+i,Ui.elements[0]=2*e.near/(a-s),Ui.elements[8]=(a+s)/(a-s),this.cameraL.projectionMatrix.copy(Ui),s=-n*e.aspect-i,a=n*e.aspect-i,Ui.elements[0]=2*e.near/(a-s),Ui.elements[8]=(a+s)/(a-s),this.cameraR.projectionMatrix.copy(Ui)}this.cameraL.matrixWorld.copy(r.matrixWorld).multiply(rh),this.cameraR.matrixWorld.copy(r.matrixWorld).multiply(nh)}},x.StreamCopyUsage=35042,x.StreamDrawUsage=35040,x.StreamReadUsage=35041,x.StringKeyframeTrack=zi,x.SubtractEquation=101,x.SubtractiveBlending=3,x.TOUCH={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},x.TangentSpaceNormalMap=0,x.TetrahedronBufferGeometry=class extends tr{constructor(r,e){console.warn("THREE.TetrahedronBufferGeometry has been renamed to THREE.TetrahedronGeometry."),super(r,e)}},x.TetrahedronGeometry=tr,x.Texture=Je,x.TextureLoader=class extends Tt{constructor(r){super(r)}load(r,e,t,i){const n=new Je,s=new hr(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(r,function(a){n.image=a,n.needsUpdate=!0,e!==void 0&&e(n)},t,i),n}},x.TorusBufferGeometry=class extends ir{constructor(r,e,t,i,n){console.warn("THREE.TorusBufferGeometry has been renamed to THREE.TorusGeometry."),super(r,e,t,i,n)}},x.TorusGeometry=ir,x.TorusKnotBufferGeometry=class extends nr{constructor(r,e,t,i,n,s){console.warn("THREE.TorusKnotBufferGeometry has been renamed to THREE.TorusKnotGeometry."),super(r,e,t,i,n,s)}},x.TorusKnotGeometry=nr,x.Triangle=Lt,x.TriangleFanDrawMode=2,x.TriangleStripDrawMode=1,x.TrianglesDrawMode=0,x.TubeBufferGeometry=class extends rr{constructor(r,e,t,i,n){console.warn("THREE.TubeBufferGeometry has been renamed to THREE.TubeGeometry."),super(r,e,t,i,n)}},x.TubeGeometry=rr,x.UVMapping=300,x.Uint16BufferAttribute=Hs,x.Uint32BufferAttribute=Gs,x.Uint8BufferAttribute=class extends Be{constructor(r,e,t){super(new Uint8Array(r),e,t)}},x.Uint8ClampedBufferAttribute=class extends Be{constructor(r,e,t){super(new Uint8ClampedArray(r),e,t)}},x.Uniform=Ua,x.UniformsGroup=class extends Xt{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:id++}),this.name="",this.usage=35044,this.uniforms=[]}add(r){return this.uniforms.push(r),this}remove(r){const e=this.uniforms.indexOf(r);return e!==-1&&this.uniforms.splice(e,1),this}setName(r){return this.name=r,this}setUsage(r){return this.usage=r,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(r){this.name=r.name,this.usage=r.usage;const e=r.uniforms;this.uniforms.length=0;for(let t=0,i=e.length;t<i;t++)this.uniforms.push(e[t].clone());return this}clone(){return new this.constructor().copy(this)}},x.UniformsLib=re,x.UniformsUtils=oo,x.UnsignedByteType=1009,x.UnsignedInt248Type=1020,x.UnsignedIntType=1014,x.UnsignedShort4444Type=1017,x.UnsignedShort5551Type=1018,x.UnsignedShortType=1012,x.VSMShadowMap=3,x.Vector2=J,x.Vector3=E,x.Vector4=ze,x.VectorKeyframeTrack=or,x.VideoTexture=class extends Je{constructor(r,e,t,i,n,s,a,o,l){super(r,e,t,i,n,s,a,o,l),this.isVideoTexture=!0,this.minFilter=s!==void 0?s:1006,this.magFilter=n!==void 0?n:1006,this.generateMipmaps=!1;const h=this;"requestVideoFrameCallback"in r&&r.requestVideoFrameCallback(function c(){h.needsUpdate=!0,r.requestVideoFrameCallback(c)})}clone(){return new this.constructor(this.image).copy(this)}update(){const r=this.image;!("requestVideoFrameCallback"in r)&&r.readyState>=r.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}},x.WebGL1Renderer=Ho,x.WebGL3DRenderTarget=class extends Rt{constructor(r=1,e=1,t=1){super(r,e),this.isWebGL3DRenderTarget=!0,this.depth=t,this.texture=new vr(null,r,e,t),this.texture.isRenderTargetTexture=!0}},x.WebGLArrayRenderTarget=class extends Rt{constructor(r=1,e=1,t=1){super(r,e),this.isWebGLArrayRenderTarget=!0,this.depth=t,this.texture=new Cn(null,r,e,t),this.texture.isRenderTargetTexture=!0}},x.WebGLCubeRenderTarget=ho,x.WebGLMultipleRenderTargets=class extends Rt{constructor(r=1,e=1,t=1,i={}){super(r,e,i),this.isWebGLMultipleRenderTargets=!0;const n=this.texture;this.texture=[];for(let s=0;s<t;s++)this.texture[s]=n.clone(),this.texture[s].isRenderTargetTexture=!0}setSize(r,e,t=1){if(this.width!==r||this.height!==e||this.depth!==t){this.width=r,this.height=e,this.depth=t;for(let i=0,n=this.texture.length;i<n;i++)this.texture[i].image.width=r,this.texture[i].image.height=e,this.texture[i].image.depth=t;this.dispose()}return this.viewport.set(0,0,r,e),this.scissor.set(0,0,r,e),this}copy(r){this.dispose(),this.width=r.width,this.height=r.height,this.depth=r.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,r.depthTexture!==null&&(this.depthTexture=r.depthTexture.clone()),this.texture.length=0;for(let e=0,t=r.texture.length;e<t;e++)this.texture[e]=r.texture[e].clone(),this.texture[e].isRenderTargetTexture=!0;return this}},x.WebGLMultisampleRenderTarget=class extends Rt{constructor(r,e,t){console.error('THREE.WebGLMultisampleRenderTarget has been removed. Use a normal render target and set the "samples" property to greater 0 to enable multisampling.'),super(r,e,t),this.samples=4}},x.WebGLRenderTarget=Rt,x.WebGLRenderer=ko,x.WebGLUtils=Uo,x.WireframeGeometry=El,x.WrapAroundEnding=2402,x.ZeroCurvatureEnding=2400,x.ZeroFactor=200,x.ZeroSlopeEnding=2401,x.ZeroStencilOp=0,x._SRGBAFormat=1035,x.sRGBEncoding=3001,Object.defineProperty(x,"__esModule",{value:!0})}),function(){const x={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};THREE.CopyShader=x}(),function(){const x={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new THREE.Color(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};THREE.LuminosityHighPassShader=x}(),function(){class x{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const yt=new THREE.OrthographicCamera(-1,1,1,-1,0,1),ee=new THREE.BufferGeometry;ee.setAttribute("position",new THREE.Float32BufferAttribute([-1,3,0,-1,-1,0,3,-1,0],3)),ee.setAttribute("uv",new THREE.Float32BufferAttribute([0,2,0,0,2,0],2));class Ye{constructor(Ve){this._mesh=new THREE.Mesh(ee,Ve)}dispose(){this._mesh.geometry.dispose()}render(Ve){Ve.render(this._mesh,yt)}get material(){return this._mesh.material}set material(Ve){this._mesh.material=Ve}}THREE.FullScreenQuad=Ye,THREE.Pass=x}(),function(){class x{constructor(de,Te){if(this.renderer=de,Te===void 0){const $e=de.getSize(new THREE.Vector2);this._pixelRatio=de.getPixelRatio(),this._width=$e.width,this._height=$e.height,Te=new THREE.WebGLRenderTarget(this._width*this._pixelRatio,this._height*this._pixelRatio),Te.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=Te.width,this._height=Te.height;this.renderTarget1=Te,this.renderTarget2=Te.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],THREE.CopyShader===void 0&&console.error("THREE.EffectComposer relies on THREE.CopyShader"),THREE.ShaderPass===void 0&&console.error("THREE.EffectComposer relies on THREE.ShaderPass"),this.copyPass=new THREE.ShaderPass(THREE.CopyShader),this.clock=new THREE.Clock}swapBuffers(){const de=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=de}addPass(de){this.passes.push(de),de.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(de,Te){this.passes.splice(Te,0,de),de.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(de){const Te=this.passes.indexOf(de);Te!==-1&&this.passes.splice(Te,1)}isLastEnabledPass(de){for(let Te=de+1;Te<this.passes.length;Te++)if(this.passes[Te].enabled)return!1;return!0}render(de){de===void 0&&(de=this.clock.getDelta());const Te=this.renderer.getRenderTarget();let $e=!1;for(let je=0,si=this.passes.length;je<si;je++){const It=this.passes[je];if(It.enabled!==!1){if(It.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(je),It.render(this.renderer,this.writeBuffer,this.readBuffer,de,$e),It.needsSwap){if($e){const Mt=this.renderer.getContext(),_i=this.renderer.state.buffers.stencil;_i.setFunc(Mt.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,de),_i.setFunc(Mt.EQUAL,1,4294967295)}this.swapBuffers()}THREE.MaskPass!==void 0&&(It instanceof THREE.MaskPass?$e=!0:It instanceof THREE.ClearMaskPass&&($e=!1))}}this.renderer.setRenderTarget(Te)}reset(de){if(de===void 0){const Te=this.renderer.getSize(new THREE.Vector2);this._pixelRatio=this.renderer.getPixelRatio(),this._width=Te.width,this._height=Te.height,de=this.renderTarget1.clone(),de.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=de,this.renderTarget2=de.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(de,Te){this._width=de,this._height=Te;const $e=this._width*this._pixelRatio,je=this._height*this._pixelRatio;this.renderTarget1.setSize($e,je),this.renderTarget2.setSize($e,je);for(let si=0;si<this.passes.length;si++)this.passes[si].setSize($e,je)}setPixelRatio(de){this._pixelRatio=de,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class yt{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const ee=new THREE.OrthographicCamera(-1,1,1,-1,0,1),Ye=new THREE.BufferGeometry;Ye.setAttribute("position",new THREE.Float32BufferAttribute([-1,3,0,-1,-1,0,3,-1,0],3)),Ye.setAttribute("uv",new THREE.Float32BufferAttribute([0,2,0,0,2,0],2));class We{constructor(de){this._mesh=new THREE.Mesh(Ye,de)}dispose(){this._mesh.geometry.dispose()}render(de){de.render(this._mesh,ee)}get material(){return this._mesh.material}set material(de){this._mesh.material=de}}THREE.EffectComposer=x,THREE.FullScreenQuad=We,THREE.Pass=yt}(),function(){class x extends THREE.Pass{constructor(ee,Ye,We,Ve,de){super(),this.scene=ee,this.camera=Ye,this.overrideMaterial=We,this.clearColor=Ve,this.clearAlpha=de!==void 0?de:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new THREE.Color}render(ee,Ye,We){const Ve=ee.autoClear;ee.autoClear=!1;let de,Te;this.overrideMaterial!==void 0&&(Te=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(ee.getClearColor(this._oldClearColor),de=ee.getClearAlpha(),ee.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&ee.clearDepth(),ee.setRenderTarget(this.renderToScreen?null:We),this.clear&&ee.clear(ee.autoClearColor,ee.autoClearDepth,ee.autoClearStencil),ee.render(this.scene,this.camera),this.clearColor&&ee.setClearColor(this._oldClearColor,de),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=Te),ee.autoClear=Ve}}THREE.RenderPass=x}(),function(){class x extends THREE.Pass{constructor(ee,Ye){super(),this.textureID=Ye!==void 0?Ye:"tDiffuse",ee instanceof THREE.ShaderMaterial?(this.uniforms=ee.uniforms,this.material=ee):ee&&(this.uniforms=THREE.UniformsUtils.clone(ee.uniforms),this.material=new THREE.ShaderMaterial({defines:Object.assign({},ee.defines),uniforms:this.uniforms,vertexShader:ee.vertexShader,fragmentShader:ee.fragmentShader})),this.fsQuad=new THREE.FullScreenQuad(this.material)}render(ee,Ye,We){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=We.texture),this.fsQuad.material=this.material,this.renderToScreen?(ee.setRenderTarget(null),this.fsQuad.render(ee)):(ee.setRenderTarget(Ye),this.clear&&ee.clear(ee.autoClearColor,ee.autoClearDepth,ee.autoClearStencil),this.fsQuad.render(ee))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}THREE.ShaderPass=x}(),function(){class x extends THREE.Pass{constructor(ee,Ye,We,Ve){super(),this.strength=Ye!==void 0?Ye:1,this.radius=We,this.threshold=Ve,this.resolution=ee!==void 0?new THREE.Vector2(ee.x,ee.y):new THREE.Vector2(256,256),this.clearColor=new THREE.Color(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let de=Math.round(this.resolution.x/2),Te=Math.round(this.resolution.y/2);this.renderTargetBright=new THREE.WebGLRenderTarget(de,Te),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let Mt=0;Mt<this.nMips;Mt++){const _i=new THREE.WebGLRenderTarget(de,Te);_i.texture.name="UnrealBloomPass.h"+Mt,_i.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(_i);const dr=new THREE.WebGLRenderTarget(de,Te);dr.texture.name="UnrealBloomPass.v"+Mt,dr.texture.generateMipmaps=!1,this.renderTargetsVertical.push(dr),de=Math.round(de/2),Te=Math.round(Te/2)}THREE.LuminosityHighPassShader===void 0&&console.error("THREE.UnrealBloomPass relies on THREE.LuminosityHighPassShader");const $e=THREE.LuminosityHighPassShader;this.highPassUniforms=THREE.UniformsUtils.clone($e.uniforms),this.highPassUniforms.luminosityThreshold.value=Ve,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new THREE.ShaderMaterial({uniforms:this.highPassUniforms,vertexShader:$e.vertexShader,fragmentShader:$e.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const je=[3,5,7,9,11];de=Math.round(this.resolution.x/2),Te=Math.round(this.resolution.y/2);for(let Mt=0;Mt<this.nMips;Mt++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(je[Mt])),this.separableBlurMaterials[Mt].uniforms.texSize.value=new THREE.Vector2(de,Te),de=Math.round(de/2),Te=Math.round(Te/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=Ye,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const si=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=si,this.bloomTintColors=[new THREE.Vector3(1,1,1),new THREE.Vector3(1,1,1),new THREE.Vector3(1,1,1),new THREE.Vector3(1,1,1),new THREE.Vector3(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,THREE.CopyShader===void 0&&console.error("THREE.UnrealBloomPass relies on THREE.CopyShader");const It=THREE.CopyShader;this.copyUniforms=THREE.UniformsUtils.clone(It.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new THREE.ShaderMaterial({uniforms:this.copyUniforms,vertexShader:It.vertexShader,fragmentShader:It.fragmentShader,blending:THREE.AdditiveBlending,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new THREE.Color,this.oldClearAlpha=1,this.basic=new THREE.MeshBasicMaterial,this.fsQuad=new THREE.FullScreenQuad(null)}dispose(){for(let ee=0;ee<this.renderTargetsHorizontal.length;ee++)this.renderTargetsHorizontal[ee].dispose();for(let ee=0;ee<this.renderTargetsVertical.length;ee++)this.renderTargetsVertical[ee].dispose();this.renderTargetBright.dispose();for(let ee=0;ee<this.separableBlurMaterials.length;ee++)this.separableBlurMaterials[ee].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(ee,Ye){let We=Math.round(ee/2),Ve=Math.round(Ye/2);this.renderTargetBright.setSize(We,Ve);for(let de=0;de<this.nMips;de++)this.renderTargetsHorizontal[de].setSize(We,Ve),this.renderTargetsVertical[de].setSize(We,Ve),this.separableBlurMaterials[de].uniforms.texSize.value=new THREE.Vector2(We,Ve),We=Math.round(We/2),Ve=Math.round(Ve/2)}render(ee,Ye,We,Ve,de){ee.getClearColor(this._oldClearColor),this.oldClearAlpha=ee.getClearAlpha();const Te=ee.autoClear;ee.autoClear=!1,ee.setClearColor(this.clearColor,0),de&&ee.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=We.texture,ee.setRenderTarget(null),ee.clear(),this.fsQuad.render(ee)),this.highPassUniforms.tDiffuse.value=We.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,ee.setRenderTarget(this.renderTargetBright),ee.clear(),this.fsQuad.render(ee);let $e=this.renderTargetBright;for(let je=0;je<this.nMips;je++)this.fsQuad.material=this.separableBlurMaterials[je],this.separableBlurMaterials[je].uniforms.colorTexture.value=$e.texture,this.separableBlurMaterials[je].uniforms.direction.value=x.BlurDirectionX,ee.setRenderTarget(this.renderTargetsHorizontal[je]),ee.clear(),this.fsQuad.render(ee),this.separableBlurMaterials[je].uniforms.colorTexture.value=this.renderTargetsHorizontal[je].texture,this.separableBlurMaterials[je].uniforms.direction.value=x.BlurDirectionY,ee.setRenderTarget(this.renderTargetsVertical[je]),ee.clear(),this.fsQuad.render(ee),$e=this.renderTargetsVertical[je];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,ee.setRenderTarget(this.renderTargetsHorizontal[0]),ee.clear(),this.fsQuad.render(ee),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,de&&ee.state.buffers.stencil.setTest(!0),this.renderToScreen?(ee.setRenderTarget(null),this.fsQuad.render(ee)):(ee.setRenderTarget(We),this.fsQuad.render(ee)),ee.setClearColor(this._oldClearColor,this.oldClearAlpha),ee.autoClear=Te}getSeperableBlurMaterial(ee){return new THREE.ShaderMaterial({defines:{KERNEL_RADIUS:ee,SIGMA:ee},uniforms:{colorTexture:{value:null},texSize:{value:new THREE.Vector2(.5,.5)},direction:{value:new THREE.Vector2(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(ee){return new THREE.ShaderMaterial({defines:{NUM_MIPS:ee},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}x.BlurDirectionX=new THREE.Vector2(1,0),x.BlurDirectionY=new THREE.Vector2(0,1),THREE.UnrealBloomPass=x}();
