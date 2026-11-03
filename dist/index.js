"use strict";var j=function(v,u){return function(){try{return u||v((u={exports:{}}).exports,u),u.exports}catch(c){throw (u=0, c)}};};var l=j(function(T,g){
var d=require('@stdlib/strided-base-reinterpret-complex64/dist'),B=require('@stdlib/complex-float32-real/dist'),C=require('@stdlib/complex-float32-imag/dist'),D=require('@stdlib/blas-base-ccopy/dist').ndarray,f=5;function F(v,u,c,o,x,n,m,_){var a,i,t,s,r,e,p,w,y,q;if(v<=0)return n;if(t=B(u),s=C(u),t===0&&s===0)return D(v,c,o,x,n,m,_);if(a=d(c,0),i=d(n,0),r=x*2,e=_*2,p=o*2,w=m*2,o===1&&m===1){if(y=v%f,y>0)for(q=0;q<y;q++)i[e]=a[r]-t,i[e+1]=a[r+1]-s,r+=p,e+=w;if(v<f)return n;for(q=y;q<v;q+=f)i[e]=a[r]-t,i[e+1]=a[r+1]-s,i[e+2]=a[r+2]-t,i[e+3]=a[r+3]-s,i[e+4]=a[r+4]-t,i[e+5]=a[r+5]-s,i[e+6]=a[r+6]-t,i[e+7]=a[r+7]-s,i[e+8]=a[r+8]-t,i[e+9]=a[r+9]-s,r+=f*2,e+=f*2;return n}for(q=0;q<v;q++)i[e]=a[r]-t,i[e+1]=a[r+1]-s,r+=p,e+=w;return n}g.exports=F
});var O=j(function(U,M){
var E=require('@stdlib/strided-base-stride2offset/dist'),G=l();function H(v,u,c,o,x,n){return G(v,u,c,o,E(v,o),x,n,E(v,n))}M.exports=H
});var z=j(function(V,k){
var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=O(),J=l();I(b,"ndarray",J);k.exports=b
});var K=require("path").join,L=require('@stdlib/utils-try-require/dist'),P=require('@stdlib/assert-is-error/dist'),Q=z(),R,A=L(K(__dirname,"./native.js"));P(A)?R=Q:R=A;module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
