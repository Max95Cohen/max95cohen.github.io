"use strict";var c=document,e=Object,u=Math,i=JSON,s=XMLHttpRequest;function f(){}var r="I",a="U",n="body",o="Enter",t="addEventListener",l="assign",d="beforeunload",p='input[type="checkbox"]',v="checked",k="className",b="click",h="execCommand",m="floor",y="text",g="type",w="LABEL",_="getElementById",C="getElementsByName",x="hasOwnProperty",L="indexOf",O="innerText",E="INPUT",N="join",A="key",B="keydown",S="length",j="onreadystatechange",q="open",I="parentNode",M="parse",T="preventDefault",D="push",H="querySelector",P="querySelectorAll",R="radio",U="random",G="readyState",F="replace",J="response",V="returnValue",X="select",z="send",K="setRequestHeader",Q="setSelectionRange",W="status",Y="tagName",Z="target",$="textContent",ee="toLowerCase",ne="trim",te="value",re={t:"DOMContentLoaded",o:"application/x-www-form-urlencoded",i:"change",u:"Content-Type",l:"copy",p:"en",v:"get",k:p+":"+v,h:".json",m:"kk",g:"post"};f._={C:{L:3,O:3,N:3,A:[2,3,4,10]},B:function(){return e[l]({},f._.C,{L:11,O:11,N:11})},S:function(){return e[l]({},f._.C,{N:1,A:[10]})}},f.j=function(){f.q(),window[t](d,function(e){e[T](),e[V]=""}),c[t](B,function(e){if(e[A]===o)return f.I();if("c"!==e[A])switch(e[A]){case"n":case"p":case"t":e[T]();var n=c[C](R),t=f._.C;if("p"===e[A]){if(n[0][v])break;n[0][v]=!0}if("t"===e[A]){if(n[1][v])break;n[1][v]=!0,t=f._.B()}if("n"===e[A]){if(n[2][v])break;n[2][v]=!0,t=f._.S()}return f.M(t),f.I()}else{e[T]();var r=c[_]("O");r&&(r[X](),r[Q](0,1e3),c[h](re.l))}})},f.I=function(){var e=f.T()+f.D(),e=f.H(e);f.P=e[N](""),f.R()},f.R=function(){var e=c[_]("L"),n=c[_]("O");e&&n&&(e[te]=(e=f.P)[ee](),n[te]=e,f.U(e))},f.T=function(){var e=c[P]("#G "+re.k),n="";if(e&&e[S])for(var t=0;t<e[S];t++)n+=e[t][I][$];return n},f.H=function(e){for(var n=e[S],t=[],r=0;r<n;r++)t[D](e[r]);for(var a=0;a<n;a++){var o=u[m](u[U]()*n),c=u[m](u[U]()*n);o===c&&(0<o?o--:0===c&&c++);var i=t[o];t[o]=t[c],t[c]=i}return t},f.D=function(){var e=c[_]("A"),n=c[_]("b"),t=c[_]("C"),r=c[_]("d"),a=c[_]("E"),o=c[_]("f");return e&&n&&(f.G=e,f.F=n,e[H](re.k)?(e=this.H(e[O][ne]()))[S]=n[te]:e=[],f.J(n)),t&&r&&(f.V=t,f.X=r,t[H](re.k)?(t=this.H(t[O][ne]()))[S]=r[te]:t=[],f.J(r)),a&&o&&(f.K=a,f.W=o,a[H](re.k)?(a=this.H(a[O][ne]()))[S]=o[te]:a=[],f.J(o)),e[N]("")+t[N]("")+a[N]("")},f.q=function(){var e=c[n];e&&e[t](b,function(e){var n=e[Z],t=n[I];switch(console.log(n,n.type),n[Y]){case r:case a:if(t!==w)break;case w:case E:if(n[g]===y)break;f.I();break;default:e[T]()}});e=c[H]("button");e&&(e[t](b,f.I),e.click());e=c[H]("#H");e&&e[t](b,function(e){e=e[Z];if(e[Y]===E){var n=f._.C;switch(+e[te]){case 2:n=f._.B();break;case 3:n=f._.S()}f.M(n),f.I()}return!1});e=c[H]("#P");e&&e[t](b,function(e){e[T]();var n=e[Z].hash;(n=n[F]("#",""))!==re.p&&n!==re.m||(f.Y[n]?f.Z(n):f.$(re.v,n+re.h,null,function(e){f.Y[n]=e,f.Z(n)}))})},f.Z=function(e){for(var n,t,r=c[P]('[class^="l"]'),a=r[S],o=0;o<a;o++)r[x](o)&&(t=(t=(n=r[o])[k])[F](/^l/,""),f.Y[f.ee][t]=n[O],n[O]=f.Y[e][t]);f.ee=e},f.M=function(e){e.L&&f.F&&(f.F[te]=e.L),e.O&&f.X&&(f.X[te]=e.O),e.N&&f.W&&(f.W[te]=e.N);var n=c[P]("#G "+p),t=n[S];if(e.A)for(var r=0;r<t;r++)n[r][v]=0<=e.A[L](r)},f.J=function(e){e[t](re.i,f.I)},f.U=function(e){var n=c[_]("I");n&&(n[O]=e[S])},f.$=function(e,n,t,r){var a,o=[];for(a in t)t[x](a)&&o[D](a+"="+t[a]);t=o,e[ee]()===re.v&&(n+="?"+t,t=null),(s=new s)[q](e,n,!0),e[ee]()===re.g&&s[K](re.u,re.o),s[z](t),s[j]=function(){4===s[G]&&200===s[W]&&r&&r(i[M](s[J]))}},f.P="",f.Y={kk:[]},f.ee=re.m,c[t](re.t,f.j);