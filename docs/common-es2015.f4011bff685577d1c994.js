(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{DYcV:function(e,r,t){"use strict";t.d(r,"a",(function(){return c}));var i=t("Vz0A"),s=t("6GTT"),a=t("IheW"),o=t("AytR"),p=t("8Y7J");let n=(()=>{class e{constructor(e,r){this._http=e,this._globalService=r,this.apiKey="",this.apiKey=this._globalService.getApiKey()}popularSeries(){let e=(new a.e).append("api_key",this.apiKey).append("language","es");return this._http.get(o.a.url+"/tv/popular",{params:e})}}return e.\u0275fac=function(r){return new(r||e)(p.Zb(a.b),p.Zb(s.a))},e.\u0275prov=p.Mb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),c=(()=>{class e{constructor(e,r,t){this._moviesService=e,this._globalService=r,this._seriesService=t,this.apiKey="",this.apiKey=this._globalService.getApiKey()}getPopularMovies(e="1"){return this._moviesService.getPopular()}popularSeries(){return this._seriesService.popularSeries()}searchMovies(e){return this._moviesService.searchMovies(e)}}return e.\u0275fac=function(r){return new(r||e)(p.Zb(i.a),p.Zb(s.a),p.Zb(n))},e.\u0275prov=p.Mb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);