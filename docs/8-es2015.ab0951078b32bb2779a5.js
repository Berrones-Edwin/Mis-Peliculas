(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"7vJP":function(t,n,e){"use strict";e.r(n),e.d(n,"HomeModule",(function(){return w}));var i=e("SVse"),o=e("iInd"),r=e("DYcV"),c=e("PSD3"),a=e.n(c),s=e("8Y7J"),l=e("FCIU"),p=e("fqV1");function m(t,n){if(1&t){const t=s.Wb();s.Tb(0),s.Vb(1,"app-grid-card",3),s.cc("item",(function(n){return s.qc(t),s.ec().detailsMovie(n)})),s.Ub(),s.Sb()}if(2&t){const t=n.ngIf;s.Fb(1),s.ic("itemArray",t.results.slice(0,15))("showPagination",!1)}}function u(t,n){1&t&&s.Rb(0,"app-loading")}function g(t,n){if(1&t){const t=s.Wb();s.Tb(0),s.Vb(1,"app-grid-card",4),s.cc("item",(function(n){return s.qc(t),s.ec().detailsMovie(n)})),s.Ub(),s.Sb()}if(2&t){const t=n.ngIf;s.Fb(1),s.ic("itemArray",t.results.slice(0,15))("showPagination",!1)("showBtnExplore",!1)}}function f(t,n){1&t&&s.Rb(0,"app-loading")}const d=[{path:"",component:(()=>{class t{constructor(t,n){this._homeService=t,this._router=n}ngOnInit(){this.moviesPopular$=this._homeService.getPopularMovies(),this.seriesPopular$=this._homeService.popularSeries()}detailsMovie(t){this._router.navigate(["peliculas",t.id])}detailsSerie(t){console.log("info"),a.a.fire({title:"Comunicado",text:"Pronto estar\xe1 disponible la secci\xf3n de series",type:"info",confirmButtonText:"Aceptar"})}}return t.\u0275fac=function(n){return new(n||t)(s.Qb(r.a),s.Qb(o.b))},t.\u0275cmp=s.Kb({type:t,selectors:[["app-home"]],decls:9,vars:8,consts:[[4,"ngIf","ngIfElse"],["_loadingMovies",""],["_loadingSeries",""],["title","Pel\xedculas m\xe1s populares","url","/peliculas/popular/1",3,"itemArray","showPagination","item"],["title","Series m\xe1s populares",3,"itemArray","showPagination","showBtnExplore","item"]],template:function(t,n){if(1&t&&(s.tc(0,m,2,2,"ng-container",0),s.fc(1,"async"),s.tc(2,u,1,0,"ng-template",null,1,s.uc),s.Rb(4,"hr"),s.tc(5,g,2,3,"ng-container",0),s.fc(6,"async"),s.tc(7,f,1,0,"ng-template",null,2,s.uc)),2&t){const t=s.pc(3),e=s.pc(8);s.ic("ngIf",s.gc(1,4,n.moviesPopular$))("ngIfElse",t),s.Fb(5),s.ic("ngIf",s.gc(6,6,n.seriesPopular$))("ngIfElse",e)}},directives:[i.m,l.a,p.a],pipes:[i.b],styles:[".section-left[_ngcontent-%COMP%]{margin-bottom:2rem}.cast[_ngcontent-%COMP%]{margin-bottom:8rem}.container-cast[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center;width:100%;flex-wrap:wrap;margin-bottom:200px}.card-cast[_ngcontent-%COMP%]{height:800px;transition:all .5s;margin-right:1rem;margin-bottom:7rem}.card-cast[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.cast__img[_ngcontent-%COMP%]{height:150px;border-radius:10px;width:125px;margin-bottom:.5rem}.cast__name[_ngcontent-%COMP%]{font-size:14px;text-align:center;word-wrap:break-word;width:125px}@media (max-width:576px){.container-cast[_ngcontent-%COMP%]{flex-wrap:wrap;justify-content:space-around}.container-cast[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-bottom:7rem}}"]}),t})()}];let b=(()=>{class t{}return t.\u0275mod=s.Ob({type:t}),t.\u0275inj=s.Nb({factory:function(n){return new(n||t)},imports:[[o.f.forChild(d)],o.f]}),t})();var h=e("xQn8");let w=(()=>{class t{}return t.\u0275mod=s.Ob({type:t}),t.\u0275inj=s.Nb({factory:function(n){return new(n||t)},imports:[[i.c,b,h.a]]}),t})()}}]);