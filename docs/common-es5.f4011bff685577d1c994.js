!function(){function e(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function i(e,i){for(var t=0;t<i.length;t++){var n=i[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{DYcV:function(i,n,r){"use strict";r.d(n,"a",(function(){return f}));var o,a,u=r("Vz0A"),s=r("6GTT"),c=r("IheW"),p=r("AytR"),l=r("8Y7J"),v=((a=function(){function i(t,n){e(this,i),this._http=t,this._globalService=n,this.apiKey="",this.apiKey=this._globalService.getApiKey()}return t(i,[{key:"popularSeries",value:function(){var e=(new c.e).append("api_key",this.apiKey).append("language","es");return this._http.get(p.a.url+"/tv/popular",{params:e})}}]),i}()).\u0275fac=function(e){return new(e||a)(l.Zb(c.b),l.Zb(s.a))},a.\u0275prov=l.Mb({token:a,factory:a.\u0275fac,providedIn:"root"}),a),f=((o=function(){function i(t,n,r){e(this,i),this._moviesService=t,this._globalService=n,this._seriesService=r,this.apiKey="",this.apiKey=this._globalService.getApiKey()}return t(i,[{key:"getPopularMovies",value:function(){return this._moviesService.getPopular()}},{key:"popularSeries",value:function(){return this._seriesService.popularSeries()}},{key:"searchMovies",value:function(e){return this._moviesService.searchMovies(e)}}]),i}()).\u0275fac=function(e){return new(e||o)(l.Zb(u.a),l.Zb(s.a),l.Zb(v))},o.\u0275prov=l.Mb({token:o,factory:o.\u0275fac,providedIn:"root"}),o)}}])}();