(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{itcR:function(t,e,i){"use strict";i.r(e),i.d(e,"MoviesModule",(function(){return Vt}));var n=i("SVse"),a=i("iInd");const s=[{id:"G",name:"Clasificaci\xf3n G",text:"Todas las edades / Todos los publicos"},{id:"PG",name:"Clasificaci\xf3n PG",text:"+10a\xf1os / Algun material puede ser no adecuado para ni\xf1os menores de 10"},{id:"PG-13",name:"Clasificaci\xf3n PG-13",text:"+13 / Algunos materiales puede ser no adecuado para ni\xf1os menores de 13"},{id:"R",name:"Clasificaci\xf3n R",text:"+17 / Menores de 17 a\xf1os requieren acompa\xf1amiento de pares o tutor adulto. "},{id:"NC-17",name:"Clasificaci\xf3n NC-17",text:"+18 Pelicula no es adecuada los menores de 18 a\xf1os."}];var c=i("Vz0A"),o=i("XNiG"),r=i("8Y7J"),l=i("FCIU"),g=i("fqV1");function b(t,e){if(1&t&&(r.Vb(0,"div",3),r.Vb(1,"div",4),r.Vb(2,"h5",5),r.vc(3),r.fc(4,"uppercase"),r.Ub(),r.Ub(),r.Vb(5,"div",6),r.Vb(6,"p",7),r.vc(7),r.Ub(),r.Ub(),r.Vb(8,"div",8),r.Vb(9,"button",9),r.vc(10,"Explorar"),r.Ub(),r.Ub(),r.Ub()),2&t){const t=e.$implicit;r.Fb(3),r.wc(r.gc(4,3,t.name)),r.Fb(4),r.wc(t.text),r.Fb(2),r.kc("routerLink","/peliculas/clasificaciones/",t.id,"/1")}}function p(t,e){1&t&&r.Rb(0,"app-loading")}function d(t,e){if(1&t){const t=r.Wb();r.Tb(0),r.Vb(1,"app-grid-card",11),r.cc("item",(function(e){return r.qc(t),r.ec(2).detailsMovie(e)}))("number_page",(function(e){return r.qc(t),r.ec(2).nextPage(e)})),r.Ub(),r.tc(2,p,1,0,"ng-template",null,12,r.uc),r.Sb()}if(2&t){const t=r.ec().ngIf,e=r.ec();r.Fb(1),r.ic("itemArray",t.results)("showBtnExplore",!1)("total_results",t.total_results)("page",e.id)}}function u(t,e){if(1&t&&(r.Tb(0),r.tc(1,d,4,4,"ng-container",10),r.Sb()),2&t){const t=e.ngIf,i=r.ec();r.Fb(1),r.ic("ngIf",t.results.length>0)("ngIfElse",i.loading)}}let m=(()=>{class t{constructor(t,e,i){this._moviesService=t,this._activatedRouter=e,this._router=i,this.classifications=s,this.unsubscribe$=new o.a,this.id=""}ngOnInit(){this._activatedRouter.params.subscribe(t=>{this.classification=t.opcion,this.id=t.page,this.classification&&this.getClasification("1",this.classification)})}getClasification(t="1",e){this.classificationsMovies$=this._moviesService.getClasification(t,e)}nextPage(t){this.id=t,this._router.navigate(["/peliculas/clasificaciones/",this.classification,t]).then(()=>{this.getClasification(this.id,this.classification)})}detailsMovie(t){this._router.navigate(["peliculas",t.id])}ngOnDestroy(){this.unsubscribe$.next(),this.unsubscribe$.complete()}}return t.\u0275fac=function(e){return new(e||t)(r.Qb(c.a),r.Qb(a.a),r.Qb(a.b))},t.\u0275cmp=r.Kb({type:t,selectors:[["app-classifications"]],decls:8,vars:4,consts:[[1,"cards-container"],["class","card bg-dark",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"card","bg-dark"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[1,"card-text"],[1,"card-footer"],[1,"btn","btn-outline-warning","btn-block",3,"routerLink"],[4,"ngIf","ngIfElse"],["title","Pel\xedculas Clasificaci\xf3n",1,"mx-auto",3,"itemArray","showBtnExplore","total_results","page","item","number_page"],["loading",""]],template:function(t,e){1&t&&(r.Vb(0,"h2"),r.vc(1,"Clasificaciones"),r.Ub(),r.Vb(2,"p"),r.vc(3,"Las siguientes clasificaciones son en basadas en Estados Unidos"),r.Ub(),r.Vb(4,"div",0),r.tc(5,b,11,5,"div",1),r.Ub(),r.tc(6,u,2,2,"ng-container",2),r.fc(7,"async")),2&t&&(r.Fb(5),r.ic("ngForOf",e.classifications),r.Fb(1),r.ic("ngIf",r.gc(7,2,e.classificationsMovies$)))},directives:[n.l,n.m,a.c,l.a,g.a],pipes:[n.b,n.p],styles:[".cards-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex;justify-content:space-between;align-items:center;flex-direction:row}.card[_ngcontent-%COMP%]{max-width:303px;width:303px}"]}),t})();var h=i("xh/P");function f(t,e){if(1&t&&(r.Vb(0,"option",9),r.vc(1),r.Ub()),2&t){const t=e.$implicit,i=r.ec();r.jc("value",t.id),r.ic("selected",i.genre.id===t.id),r.Fb(1),r.xc(" ",t.name," ")}}function v(t,e){if(1&t){const t=r.Wb();r.Vb(0,"app-grid-card",13),r.cc("item",(function(e){return r.qc(t),r.ec(3).detailsMovie(e)}))("number_page",(function(e){return r.qc(t),r.ec(3).nextPage(e)})),r.Ub()}if(2&t){const t=r.ec().ngIf,e=r.ec(2);r.kc("title","Pel\xedculas Genero ",null!==e.genre.name?e.genre.name:"",""),r.ic("itemArray",t.results)("showBtnExplore",!1)("total_results",t.total_results)("page",e.page)}}function _(t,e){if(1&t&&(r.Tb(0),r.tc(1,v,1,5,"app-grid-card",12),r.Sb()),2&t){const t=e.ngIf;r.Fb(1),r.ic("ngIf",t.results.length>0)}}function w(t,e){1&t&&r.Rb(0,"app-loading")}function x(t,e){if(1&t&&(r.Tb(0),r.tc(1,_,2,1,"ng-container",10),r.fc(2,"async"),r.tc(3,w,1,0,"ng-template",null,11,r.uc),r.Sb()),2&t){const t=r.pc(4),e=r.ec();r.Fb(1),r.ic("ngIf",r.gc(2,2,e.movies$))("ngIfElse",t)}}let I=(()=>{class t{constructor(t,e,i){this._moviesService=t,this._router=e,this._activatedRoute=i,this.listGenres=[],this.genreID="",this.disableListGenres=!1,this.genre="",this.page="1",this.show=!1}ngOnInit(){this.listGenres=h.a.Movies,null!=this._activatedRoute.snapshot.params.genre&&(this.genreID=this._activatedRoute.snapshot.params.genre,this.page=null!=this._activatedRoute.snapshot.params.page?this._activatedRoute.snapshot.params.page:"1",this.showMovies(this.genreID,this.page))}detailsMovie(t){this._router.navigate(["peliculas",t.id])}showMovies(t,e="1"){this.genreID=t,this.show=!0,this.page=e,this._router.navigate(["/peliculas/generos",this.genreID,this.page]).then(()=>{this.genre=this.listGenres.find(e=>e.id==Number(t)),this.getMoviesGenres("1",this.genreID)})}nextPage(t){this.page=t,this.genreID=this._activatedRoute.snapshot.params.genre,this._router.navigate(["/peliculas/generos",this.genreID,t]).then(()=>this.getMoviesGenres(t,this.genreID))}getMoviesGenres(t="1",e){this.movies$=this._moviesService.getMoviesGenres(t,e)}}return t.\u0275fac=function(e){return new(e||t)(r.Qb(c.a),r.Qb(a.b),r.Qb(a.a))},t.\u0275cmp=r.Kb({type:t,selectors:[["app-genres"]],decls:10,vars:3,consts:[["action",""],["myForm",""],[3,"disabled"],[1,"form-group"],["name","genres","id","genres",1,"form-control","disabled",3,"change"],["selectGenres",""],["value","","selected",""],[3,"value","selected",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"value","selected"],[4,"ngIf","ngIfElse"],["loading",""],[3,"title","itemArray","showBtnExplore","total_results","page","item","number_page",4,"ngIf"],[3,"title","itemArray","showBtnExplore","total_results","page","item","number_page"]],template:function(t,e){if(1&t){const t=r.Wb();r.Vb(0,"form",0,1),r.Vb(2,"fieldset",2),r.Vb(3,"div",3),r.Vb(4,"select",4,5),r.cc("change",(function(){r.qc(t);const i=r.pc(5);return e.showMovies(i.value)})),r.Vb(6,"option",6),r.vc(7," Seleciona un genero"),r.Ub(),r.tc(8,f,2,3,"option",7),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.tc(9,x,5,4,"ng-container",8)}2&t&&(r.Fb(2),r.ic("disabled",e.disableListGenres),r.Fb(6),r.ic("ngForOf",e.listGenres),r.Fb(1),r.ic("ngIf",e.show))},directives:[n.l,n.m,l.a,g.a],pipes:[n.b],styles:["select[_ngcontent-%COMP%]:disabled{cursor:not-allowed}"]}),t})();function y(t,e){1&t&&r.Rb(0,"app-loading",2)}function F(t,e){if(1&t){const t=r.Wb();r.Tb(0),r.Vb(1,"app-grid-card",4),r.cc("item",(function(e){return r.qc(t),r.ec(2).detailsMovie(e)}))("number_page",(function(e){return r.qc(t),r.ec(2).nextPage(e)})),r.Ub(),r.Sb()}if(2&t){const t=r.ec().ngIf,e=r.ec();r.Fb(1),r.ic("title",e.title)("itemArray",t.results)("showBtnExplore",!1)("total_results",t.results.length===t.total_results?t.total_results:t.results.length)("page",e.id)}}function U(t,e){1&t&&(r.Vb(0,"p"),r.vc(1,"No hay peliculas en estreno este mes"),r.Ub())}function M(t,e){if(1&t&&(r.Tb(0),r.tc(1,F,2,5,"ng-container",1),r.tc(2,U,2,0,"ng-template",null,3,r.uc),r.Sb()),2&t){const t=e.ngIf,i=r.pc(3);r.Fb(1),r.ic("ngIf",t.results.length>0)("ngIfElse",i)}}let V=(()=>{class t{constructor(t,e,i){this._moviesService=t,this._activatedRoute=e,this._router=i,this.total_results=[],this.id="1",this.getId(),this.calendar=this._moviesService.getNextMonth()}ngOnInit(){this.title="Pel\xedculas que se estrenar\xe1n en el mes de "+this.calendar.spanish,this.total_results=[],this.getUpComing()}getId(){this.id=this._activatedRoute.snapshot.params.id}getUpComing(){this.movies$=this._moviesService.getUpcoming()}nextPage(t){this.id=t,this._router.navigate(["/peliculas/proximo-estrenar",t]).then(()=>{this.getUpComing()})}detailsMovie(t){this._router.navigate(["peliculas",t.id])}}return t.\u0275fac=function(e){return new(e||t)(r.Qb(c.a),r.Qb(a.a),r.Qb(a.b))},t.\u0275cmp=r.Kb({type:t,selectors:[["app-get-coming"]],decls:4,vars:4,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"offset-lg-4"],["nodata",""],["url","/peliculas/proximo-estrenar/1",1,"mx-auto",3,"title","itemArray","showBtnExplore","total_results","page","item","number_page"]],template:function(t,e){if(1&t&&(r.tc(0,y,1,0,"ng-template",null,0,r.uc),r.tc(2,M,4,2,"ng-container",1),r.fc(3,"async")),2&t){const t=r.pc(1);r.Fb(2),r.ic("ngIf",r.gc(3,2,e.movies$))("ngIfElse",t)}},directives:[n.m,g.a,l.a],pipes:[n.b],styles:[""]}),t})();var P=i("lJxs"),C=i("IYfF"),O=i("PSD3"),S=i.n(O),R=i("v0/F"),E=i("6GTT"),T=i("ZLA4");const $=["modalCatalogBTN"];function k(t,e){1&t&&(r.Vb(0,"span"),r.vc(1,"Favoritos"),r.Ub())}function A(t,e){1&t&&r.vc(0,"Espere..")}function Q(t,e){if(1&t&&(r.Tb(0),r.Vb(1,"a",40),r.vc(2," Mirar trailer "),r.Ub(),r.Sb()),2&t){const t=r.ec().ngIf;r.Fb(1),r.kc("href","https://www.youtube.com/watch?v=",t.videos.results[0].key,"",r.rc)}}function q(t,e){1&t&&(r.Vb(0,"button",41),r.vc(1," Trailer no encontrado "),r.Ub()),2&t&&r.ic("disabled",!0)}function B(t,e){if(1&t&&(r.Vb(0,"button",42),r.vc(1),r.Ub()),2&t){const t=e.$implicit;r.Fb(1),r.xc(" ",t.name," ")}}function j(t,e){if(1&t&&(r.Vb(0,"div",47),r.Vb(1,"a",48),r.Rb(2,"img",49),r.fc(3,"image"),r.Vb(4,"p",50),r.vc(5),r.Ub(),r.Ub(),r.Ub()),2&t){const t=e.$implicit;r.Fb(1),r.kc("routerLink","/actors/actor/",t.id,""),r.Fb(1),r.jc("src",r.gc(3,4,t.profile_path),r.rc),r.jc("alt",t.name),r.Fb(3),r.wc(t.name)}}function D(t,e){if(1&t&&(r.Vb(0,"div",43),r.Vb(1,"div",25),r.Vb(2,"h3",26),r.vc(3,"Elenco"),r.Ub(),r.Vb(4,"span",27),r.Vb(5,"button",44),r.vc(6,"Explorar"),r.Ub(),r.Ub(),r.Ub(),r.Vb(7,"div",45),r.tc(8,j,6,6,"div",46),r.Ub(),r.Ub()),2&t){const t=e.ngIf;r.Fb(8),r.ic("ngForOf",t.slice(0,7))}}function G(t,e){1&t&&(r.Vb(0,"div",25),r.Vb(1,"h3",26),r.vc(2,"Posters"),r.Ub(),r.Ub())}function N(t,e){if(1&t&&(r.Vb(0,"div",56),r.Vb(1,"a",57),r.fc(2,"image"),r.Rb(3,"img",58),r.fc(4,"image"),r.Ub(),r.Ub()),2&t){const t=e.$implicit;r.Fb(1),r.jc("href",r.gc(2,2,t.file_path),r.rc),r.Fb(2),r.jc("src",r.gc(4,4,t.file_path),r.rc)}}function W(t,e){if(1&t&&(r.Vb(0,"div",56),r.Vb(1,"a",57),r.fc(2,"image"),r.Rb(3,"img",58),r.fc(4,"image"),r.Ub(),r.Ub()),2&t){const t=e.$implicit;r.Fb(1),r.jc("href",r.gc(2,2,t.file_path),r.rc),r.Fb(2),r.jc("src",r.gc(4,4,t.file_path),r.rc)}}function L(t,e){if(1&t&&(r.Vb(0,"div",59),r.tc(1,W,5,6,"div",54),r.Ub()),2&t){const t=r.ec().ngIf;r.Fb(1),r.ic("ngForOf",t.backdrops)}}function K(t,e){if(1&t&&(r.Vb(0,"div",51),r.tc(1,G,3,0,"div",52),r.Vb(2,"div",53),r.tc(3,N,5,6,"div",54),r.Ub(),r.tc(4,L,2,1,"div",55),r.Ub()),2&t){const t=e.ngIf;r.Fb(1),r.ic("ngIf",t.posters.length>0),r.Fb(2),r.ic("ngForOf",t.posters),r.Fb(1),r.ic("ngIf",t.backdrops.length>0)}}function z(t,e){1&t&&r.Rb(0,"app-loading")}function J(t,e){if(1&t){const t=r.Wb();r.Tb(0),r.Vb(1,"app-grid-card",60),r.cc("item",(function(e){return r.qc(t),r.ec(2).detailsMovie(e)})),r.Ub(),r.Sb()}if(2&t){const t=e.ngIf,i=r.ec().ngIf;r.Fb(1),r.kc("url","/peliculas/",i.id,"/recomendaciones/1"),r.ic("itemArray",t.results.slice(0,5))("showPagination",!1)}}function Y(t,e){1&t&&(r.Vb(0,"div",25),r.Vb(1,"h3",26),r.vc(2,"Rese\xf1as"),r.Ub(),r.Vb(3,"span",27),r.Vb(4,"button",44),r.vc(5,"Explorar"),r.Ub(),r.Ub(),r.Ub())}function X(t,e){if(1&t&&(r.Vb(0,"div",63),r.Vb(1,"div",64),r.Vb(2,"div",65),r.Vb(3,"h5",66),r.vc(4),r.fc(5,"uppercase"),r.Ub(),r.Rb(6,"hr"),r.Vb(7,"p",67),r.vc(8),r.Ub(),r.Vb(9,"a",68),r.vc(10,"Ver comentario"),r.Ub(),r.Ub(),r.Ub(),r.Ub()),2&t){const t=e.$implicit;r.Fb(4),r.wc(r.gc(5,3,t.author)),r.Fb(4),r.wc(t.content),r.Fb(1),r.ic("href",t.url,r.rc)}}function Z(t,e){if(1&t&&(r.Tb(0),r.tc(1,Y,6,0,"div",52),r.Vb(2,"div",61),r.tc(3,X,11,5,"div",62),r.Ub(),r.Sb()),2&t){const t=e.ngIf,i=r.ec(2);r.Fb(1),r.ic("ngIf",i.review.length>0),r.Fb(2),r.ic("ngForOf",t.results)}}function H(t,e){if(1&t){const t=r.Wb();r.Tb(0),r.Vb(1,"div",14),r.Vb(2,"section",15),r.Rb(3,"img",16),r.fc(4,"image"),r.Vb(5,"div",17),r.Vb(6,"button",18),r.cc("click",(function(){return r.qc(t),r.ec().addToFavorites()})),r.Vb(7,"span"),r.Rb(8,"i",19),r.Ub(),r.tc(9,k,2,0,"span",0),r.tc(10,A,1,0,"ng-template",null,20,r.uc),r.Ub(),r.tc(12,Q,3,1,"ng-container",21),r.tc(13,q,2,1,"ng-template",null,22,r.uc),r.Vb(15,"button",23),r.vc(16," Catalogo "),r.Ub(),r.Ub(),r.Ub(),r.Vb(17,"section",24),r.Vb(18,"div",25),r.Vb(19,"h2",26),r.vc(20),r.Ub(),r.Vb(21,"span",27),r.Vb(22,"button",28),r.cc("click",(function(){return r.qc(t),r.ec().goBack()})),r.vc(23," Regresar "),r.Ub(),r.Ub(),r.Ub(),r.Vb(24,"div"),r.Vb(25,"p",29),r.vc(26),r.Ub(),r.Ub(),r.Vb(27,"h6",30),r.Vb(28,"span"),r.Rb(29,"i",31),r.vc(30),r.Ub(),r.vc(31," \xa0 "),r.Vb(32,"span"),r.Rb(33,"i",32),r.vc(34),r.Ub(),r.Ub(),r.Vb(35,"div",33),r.tc(36,B,2,1,"button",34),r.Ub(),r.Rb(37,"hr"),r.tc(38,D,9,1,"div",35),r.Ub(),r.Rb(39,"hr"),r.Vb(40,"section",36),r.tc(41,K,5,3,"div",37),r.fc(42,"async"),r.tc(43,z,1,0,"ng-template",null,38,r.uc),r.Ub(),r.Vb(45,"div",39),r.tc(46,J,2,3,"ng-container",21),r.Rb(47,"hr"),r.tc(48,Z,4,2,"ng-container",21),r.Ub(),r.Ub(),r.Sb()}if(2&t){const t=e.ngIf,i=r.pc(11),n=r.pc(44),a=r.ec();r.Fb(3),r.jc("src",r.gc(4,17,t.poster_path),r.rc),r.jc("alt",t.title),r.jc("title",t.title),r.Fb(3),r.ic("disabled",!a.loadingFavorites),r.Fb(3),r.ic("ngIf",a.loadingFavorites)("ngIfElse",i),r.Fb(3),r.ic("ngIf",t.videos.results.length>0),r.Fb(8),r.wc(t.title),r.Fb(6),r.wc(t.overview),r.Fb(4),r.xc(" ",t.vote_average,""),r.Fb(4),r.xc(" ",t.release_date,""),r.Fb(2),r.ic("ngForOf",t.genres),r.Fb(2),r.ic("ngIf",t.credits.cast),r.Fb(3),r.ic("ngIf",r.gc(42,19,a.images$))("ngIfElse",n),r.Fb(5),r.ic("ngIf",t.recommendations),r.Fb(2),r.ic("ngIf",t.review)}}function tt(t,e){1&t&&r.Rb(0,"app-loading")}function et(t,e){if(1&t){const t=r.Wb();r.Vb(0,"ul",71),r.Vb(1,"li",72),r.cc("click",(function(){r.qc(t);const i=e.$implicit,n=r.ec(4);return n.addMovieToCatalog(i.id,n.modalCatalog)})),r.vc(2),r.Vb(3,"b"),r.vc(4),r.Ub(),r.Ub(),r.Ub()}if(2&t){const t=e.$implicit;r.Fb(2),r.xc(" ",t.id,".- "),r.Fb(2),r.wc(t.name)}}function it(t,e){if(1&t&&(r.Tb(0),r.tc(1,et,5,2,"ul",70),r.Sb()),2&t){const t=r.ec(3);r.Fb(1),r.ic("ngForOf",t.listCatalogs)}}function nt(t,e){if(1&t&&(r.Tb(0),r.tc(1,it,2,1,"ng-container",0),r.Sb()),2&t){r.ec();const t=r.pc(3),e=r.ec();r.Fb(1),r.ic("ngIf",e.listCatalogs.length>0)("ngIfElse",t)}}function at(t,e){if(1&t){const t=r.Wb();r.Vb(0,"h3",73),r.vc(1,"A\xfan no cuentas con catalogos"),r.Ub(),r.Vb(2,"a",74),r.cc("click",(function(){return r.qc(t),r.ec(2).createCatalog()})),r.vc(3,"Crear mi primer catalogo"),r.Ub()}}function st(t,e){if(1&t&&(r.Tb(0),r.tc(1,nt,2,2,"ng-container",0),r.tc(2,at,4,0,"ng-template",null,69,r.uc),r.Sb()),2&t){const t=r.pc(3),e=r.ec();r.Fb(1),r.ic("ngIf",e.listCatalogs)("ngIfElse",t)}}function ct(t,e){1&t&&r.Rb(0,"app-loading")}let ot=(()=>{class t{constructor(t,e,i,n,a,s,c,o){this._moviesService=t,this._activatedRouter=e,this._location=i,this._authService=n,this._router=a,this._profileService=s,this._globalService=c,this._render=o,this.movie=[],this.credits=[],this.recomendations=[],this.reviews=[],this.btnWatchTrailer=!1,this.loadingFavorites=!0,this.loadingCatalogs=!0,this.id=this._activatedRouter.snapshot.params.id}ngOnInit(){this.getDetails(this.id),this.getImages(this.id),this._profileService.getAllList().pipe(Object(P.a)(t=>t.lists.data)).subscribe(t=>this.listCatalogs=t)}createCatalog(){this._render.selectRootElement(this.modalCatalogBTN.nativeElement).click(),this._router.navigate(["profile/nuevo-catalogo"])}addToFavorites(){this._authService.isAuth()?this.getDetailsSaveMovie().subscribe(t=>{this.loadingFavorites=!1,this.movieRated={type_id:1,user_id:this._authService.UserData.id,name:t.title,avatar:t.poster_path,item:t.id},this.saveItemRated(this.movieRated)}):S.a.fire({text:"Para realizar esta acci\xf3n debes haber iniciado sesi\xf3n. \xbfDeseas iniciar sesi\xf3n?",showCancelButton:!0,confirmButtonText:"Aceptar",cancelButtonText:"Cancelar",type:"question"}).then(t=>{t.value&&this._router.navigate(["/auth/inicio-sesion"])})}getDetailsSaveMovie(){return this.movie$.pipe(Object(P.a)(t=>{const{id:e,title:i,poster_path:n}=t;return{id:e,title:i,poster_path:n}}))}saveItemRated(t){this._profileService.postRated(t).subscribe(t=>this._globalService.sweetAlert("Correcto",t.message,"success").then(()=>this.loadingFavorites=!0),t=>this._globalService.sweetAlert("Incorrecto",t.message,"error").then(()=>this.loadingFavorites=!0))}addMovieToCatalog(t){this.loadingCatalogs=!1;const e=t;this.getDetailsSaveMovie().subscribe(t=>{this._profileService.postItemToList({item:t.id,name:t.title,avatar:t.poster_path,catalog_id:e,user_id:this._authService.UserData.id}).subscribe(t=>{t.data&&this._globalService.sweetAlert("Correcto",t.message,"success").then(()=>{this._router.navigate([this._router.url]),this.loadingCatalogs=!0,this._render.selectRootElement(this.modalCatalogBTN.nativeElement).click()})},t=>this._globalService.sweetAlert("Incorrecto",t,"error").then(()=>this.loadingCatalogs=!0))})}getDetails(t){this.movie$=null,this.movie$=this._moviesService.getDetails(t)}getImages(t){this.images$=null,this.images$=this._moviesService.getImages(t)}detailsMovie(t){this._router.navigate(["peliculas",t.id]).then(()=>{this.id=t.id,this.getDetails(this.id),this.getImages(this.id)})}goBack(){this._location.back()}ngOnDestroy(){}}return t.\u0275fac=function(e){return new(e||t)(r.Qb(c.a),r.Qb(a.a),r.Qb(n.i),r.Qb(C.a),r.Qb(a.b),r.Qb(R.a),r.Qb(E.a),r.Qb(r.K))},t.\u0275cmp=r.Kb({type:t,selectors:[["app-movie"]],viewQuery:function(t,e){var i;1&t&&r.zc($,!0),2&t&&r.oc(i=r.dc())&&(e.modalCatalogBTN=i.first)},decls:21,vars:6,consts:[[4,"ngIf","ngIfElse"],["loading",""],["id","modalCatalog","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"text-secondary"],["type","button","data-dismiss","modal","aria-label","Close",1,"close"],["modalCatalogBTN",""],["aria-hidden","true"],[1,"modal-body"],["loadingCatalogsElse",""],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary"],[1,"row","mt-4"],[1,"poster-container","col-sm-12","col-md-12","mb-3","col-lg-4"],["width","300","height","500",1,"mb-4","shadow-lg",3,"src","alt","title"],[1,"container-left-btn"],[1,"btn","btn-danger","mr-2",3,"disabled","click"],[1,"fas","fa-heart"],["loadingFavoritesElse",""],[4,"ngIf"],["elseTrailer",""],["data-toggle","modal","data-target","#modalCatalog",1,"btn","btn-outline-primary"],[1,"info-container","col-sm-12","col-md-12","col-lg-8"],[1,"row","mb-4","container-title"],[1,"title","col-sm-12","col-md-10"],[1,"container-title-btn","col-sm-12","col-md-2"],[1,"btn","btn-outline-pink",3,"click"],[1,"movie-overview"],[1,"mb-4","title"],[1,"fas","fa-star"],[1,"fas","fa-calendar-alt"],[1,"container-genres","mb-3"],["class","btn btn-sm btn-dark mr-2",4,"ngFor","ngForOf"],["class","cast",4,"ngIf"],[1,"col-sm-12","col-md-12","mb-5"],["class","images",4,"ngIf","ngIfElse"],["loadingImage",""],[1,"col-sm-12","col-md-12"],["target","_blank",1,"btn","btn-outline-warning",3,"href"],[1,"btn","btn-outline-warning","watch-trailer",3,"disabled"],[1,"btn","btn-sm","btn-dark","mr-2"],[1,"cast"],[1,"btn","btn-outline-warning"],[1,"container-cast"],["class","card-cast",4,"ngFor","ngForOf"],[1,"card-cast"],[1,"credits",3,"routerLink"],["height","120px;",1,"img-fluid","shadow-lg","cast__img",3,"src","alt"],[1,"cast__name"],[1,"images"],["class","row mb-4 container-title",4,"ngIf"],["id","lightgallery",1,"gallery","mb-2"],["class","gallery__container",4,"ngFor","ngForOf"],["class","gallery","id","lightgallery",4,"ngIf"],[1,"gallery__container"],["target","_blank",3,"href"],["alt","",1,"img-fluid",3,"src"],["id","lightgallery",1,"gallery"],["title","Pel\xedculas Similares",3,"itemArray","showPagination","url","item"],[1,"row"],["class","col-sm-6",4,"ngFor","ngForOf"],[1,"col-sm-6"],[1,"card",2,"background-color","transparent !important","border-radius","15px","border","1px solid #fff"],[1,"card-body"],[1,"card-title"],[1,"card-text"],["target","_blank",1,"",2,"color","#fff",3,"href"],["notCatalogs",""],["class","list-group",4,"ngFor","ngForOf"],[1,"list-group"],[1,"btn","btn-outline-primary","mb-3",3,"click"],[2,"color","black"],[1,"btn","btn-sm","btn-primary",3,"click"]],template:function(t,e){if(1&t&&(r.tc(0,H,49,21,"ng-container",0),r.fc(1,"async"),r.tc(2,tt,1,0,"ng-template",null,1,r.uc),r.Vb(4,"div",2),r.Vb(5,"div",3),r.Vb(6,"div",4),r.Vb(7,"div",5),r.Vb(8,"h5",6),r.vc(9," \xbfA qu\xe9 catalogo deseas agregar tu pel\xedcula? "),r.Ub(),r.Vb(10,"button",7,8),r.Vb(12,"span",9),r.vc(13,"\xd7"),r.Ub(),r.Ub(),r.Ub(),r.Vb(14,"div",10),r.tc(15,st,4,2,"ng-container",0),r.tc(16,ct,1,0,"ng-template",null,11,r.uc),r.Ub(),r.Vb(18,"div",12),r.Vb(19,"button",13),r.vc(20," Cerrar "),r.Ub(),r.Ub(),r.Ub(),r.Ub(),r.Ub()),2&t){const t=r.pc(3),i=r.pc(17);r.ic("ngIf",r.gc(1,4,e.movie$))("ngIfElse",t),r.Fb(15),r.ic("ngIf",e.loadingCatalogs)("ngIfElse",i)}},directives:[n.m,n.l,a.e,g.a,l.a],pipes:[n.b,T.a,n.p],styles:["a.credits[_ngcontent-%COMP%]{color:#fff}.cast[_ngcontent-%COMP%]{margin-bottom:100px}.title[_ngcontent-%COMP%]{text-align:center}.container-cast[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-around;align-items:center}.cast__img[_ngcontent-%COMP%]{height:120px;max-height:120px;width:90px;min-width:90px}.movie-overview[_ngcontent-%COMP%]{font-size:15px;line-height:1.5;letter-spacing:.5px}.gallery[_ngcontent-%COMP%]{margin:0 auto;max-width:1200px;display:grid;grid-template-columns:1fr;grid-auto-rows:400px;grid-auto-columns:1fr;grid-auto-flow:dense row;grid-gap:10px;justify-content:center}.gallery__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;opacity:.8}@media screen and (min-width:640px){.title[_ngcontent-%COMP%]{text-align:left}.poster-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.gallery[_ngcontent-%COMP%], .poster-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 auto}.gallery[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(2,500px)}.container-cast[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;flex-direction:row;align-items:center}.container-cast[_ngcontent-%COMP%]   .card-cast[_ngcontent-%COMP%]{margin-right:10px;margin-bottom:3rem}}@media screen and (min-width:1024px){.gallery[_ngcontent-%COMP%]{grid-template-columns:repeat(3,300px);grid-template-rows:repeat(1,300px)}}"]}),t})();function rt(t,e){1&t&&r.Rb(0,"app-loading",2)}function lt(t,e){if(1&t){const t=r.Wb();r.Tb(0),r.Vb(1,"app-grid-card",3),r.cc("item",(function(e){return r.qc(t),r.ec().detailsMovie(e)}))("number_page",(function(e){return r.qc(t),r.ec().nextPage(e)})),r.Ub(),r.Sb()}if(2&t){const t=e.ngIf,i=r.ec();r.Fb(1),r.ic("itemArray",t.results)("showBtnExplore",!1)("total_results",t.total_results)("page",i.id)}}let gt=(()=>{class t{constructor(t,e,i){this._movieService=t,this._activatedRoute=e,this._router=i,this.id="1",this.getId()}ngOnInit(){this.id&&this.getMoviesPopular()}getId(){this.id=this._activatedRoute.snapshot.params.id}getMoviesPopular(){this.movies$=this._movieService.getPopular(this.id)}nextPage(t){this.id=t,this._router.navigate(["/peliculas/popular",t]).then(()=>{this.getMoviesPopular()})}detailsMovie(t){this._router.navigate(["peliculas",t.id])}}return t.\u0275fac=function(e){return new(e||t)(r.Qb(c.a),r.Qb(a.a),r.Qb(a.b))},t.\u0275cmp=r.Kb({type:t,selectors:[["app-movie-popular"]],decls:4,vars:3,consts:[["loading",""],[4,"ngIf"],[1,"offset-lg-4"],["title","Pel\xedculas m\xe1s Populares","url","/peliculas/popular/1",1,"mx-auto",3,"itemArray","showBtnExplore","total_results","page","item","number_page"]],template:function(t,e){1&t&&(r.tc(0,rt,1,0,"ng-template",null,0,r.uc),r.tc(2,lt,2,4,"ng-container",1),r.fc(3,"async")),2&t&&(r.Fb(2),r.ic("ngIf",r.gc(3,1,e.movies$)))},directives:[n.m,g.a,l.a],pipes:[n.b],styles:[""]}),t})();function bt(t,e){1&t&&r.Rb(0,"app-loading",2)}function pt(t,e){if(1&t){const t=r.Wb();r.Tb(0),r.Vb(1,"app-grid-card",3),r.cc("item",(function(e){return r.qc(t),r.ec().detailsMovie(e)}))("number_page",(function(e){return r.qc(t),r.ec().nextPage(e)})),r.Ub(),r.Sb()}if(2&t){const t=e.ngIf,i=r.ec();r.Fb(1),r.ic("itemArray",t.results)("showBtnExplore",!1)("total_results",t.total_results)("page",i.id)}}let dt=(()=>{class t{constructor(t,e,i){this._moviesService=t,this._activatedRoute=e,this._router=i,this.total_results=[],this.id="1",this.getId()}ngOnInit(){this.getMoviesTops()}getId(){this.id=this._activatedRoute.snapshot.params.id}getMoviesTops(){this.movies$=this._moviesService.getTops(this.id)}nextPage(t){this.id=t,this._router.navigate(["/peliculas/top",t]).then(()=>{this.getMoviesTops()})}detailsMovie(t){this._router.navigate(["peliculas",t.id])}}return t.\u0275fac=function(e){return new(e||t)(r.Qb(c.a),r.Qb(a.a),r.Qb(a.b))},t.\u0275cmp=r.Kb({type:t,selectors:[["app-movie-top"]],decls:4,vars:4,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"offset-lg-4"],["title","Pel\xedculas m\xe1s Top","url","/peliculas/top/1",1,"mx-auto",3,"itemArray","showBtnExplore","total_results","page","item","number_page"]],template:function(t,e){if(1&t&&(r.tc(0,bt,1,0,"ng-template",null,0,r.uc),r.tc(2,pt,2,4,"ng-container",1),r.fc(3,"async")),2&t){const t=r.pc(1);r.Fb(2),r.ic("ngIf",r.gc(3,2,e.movies$))("ngIfElse",t)}},directives:[n.m,g.a,l.a],pipes:[n.b],styles:[".page-item[_ngcontent-%COMP%]{color:#000!important}.section-left[_ngcontent-%COMP%]{margin-bottom:2rem}.cast[_ngcontent-%COMP%]{margin-bottom:8rem}.container-cast[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center;width:100%;flex-wrap:wrap;margin-bottom:200px}.card-cast[_ngcontent-%COMP%]{height:800px;transition:all .5s;margin-right:1rem;margin-bottom:7rem;width:150px}.card-cast[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.cast__img[_ngcontent-%COMP%]{height:150px;border-radius:10px;width:125px;margin-bottom:.5rem}.cast__name[_ngcontent-%COMP%]{font-size:14px;text-align:center;word-wrap:break-word;width:125px}@media (max-width:576px){.container-cast[_ngcontent-%COMP%]{flex-wrap:wrap;justify-content:space-around}.container-cast[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-bottom:7rem}}"]}),t})();function ut(t,e){if(1&t){const t=r.Wb();r.Tb(0),r.Vb(1,"app-grid-card",3),r.cc("item",(function(e){return r.qc(t),r.ec().detailsMovie(e)})),r.Ub(),r.Sb()}if(2&t){const t=e.ngIf;r.Fb(1),r.ic("itemArray",t.results)("showPagination",!1)}}function mt(t,e){1&t&&r.Rb(0,"app-loading")}function ht(t,e){if(1&t){const t=r.Wb();r.Tb(0),r.Vb(1,"app-grid-card",4),r.cc("item",(function(e){return r.qc(t),r.ec().detailsMovie(e)})),r.Ub(),r.Sb()}if(2&t){const t=e.ngIf;r.Fb(1),r.ic("itemArray",t.results)("showPagination",!1)}}function ft(t,e){1&t&&r.Rb(0,"app-loading")}function vt(t,e){1&t&&r.Rb(0,"app-loading",2)}function _t(t,e){if(1&t){const t=r.Wb();r.Tb(0),r.Vb(1,"app-grid-card",4),r.cc("item",(function(e){return r.qc(t),r.ec(2).detailsMovie(e)}))("number_page",(function(e){return r.qc(t),r.ec(2).nextPage(e)})),r.Ub(),r.Sb()}if(2&t){const t=r.ec().ngIf,e=r.ec();r.Fb(1),r.ic("itemArray",t.results)("showBtnExplore",!1)("total_results",t.total_results)("page",e.id)}}function wt(t,e){1&t&&(r.Vb(0,"p"),r.vc(1,"No hay peliculas en cartelera"),r.Ub())}function xt(t,e){if(1&t&&(r.Tb(0),r.tc(1,_t,2,4,"ng-container",1),r.tc(2,wt,2,0,"ng-template",null,3,r.uc),r.Sb()),2&t){const t=e.ngIf,i=r.pc(3);r.Fb(1),r.ic("ngIf",t.results.length>0)("ngIfElse",i)}}function It(t,e){1&t&&r.Rb(0,"app-loading",2)}function yt(t,e){if(1&t){const t=r.Wb();r.Tb(0),r.Vb(1,"app-grid-card",3),r.cc("item",(function(e){return r.qc(t),r.ec().detailsMovie(e)}))("number_page",(function(e){return r.qc(t),r.ec().nextPage(e)})),r.Ub(),r.Sb()}if(2&t){const t=e.ngIf,i=r.ec();r.Fb(1),r.ic("itemArray",t.results)("showBtnExplore",!1)("total_results",t.total_results)("page",i.page)}}const Ft=[{path:"",component:(()=>{class t{constructor(t,e){this._moviesService=t,this._router=e,this.unsubscribe$=new o.a}ngOnInit(){this.topMovies(),this.popularMovies()}detailsMovie(t){this._router.navigate(["peliculas",t.id])}popularMovies(){this.moviesPopular$=this._moviesService.getPopular()}topMovies(){this.moviesTop$=this._moviesService.getTops()}ngOnDestroy(){this.unsubscribe$.next(),this.unsubscribe$.complete()}}return t.\u0275fac=function(e){return new(e||t)(r.Qb(c.a),r.Qb(a.b))},t.\u0275cmp=r.Kb({type:t,selectors:[["app-movies"]],decls:9,vars:8,consts:[[4,"ngIf","ngIfElse"],["loadingTopMovies",""],["loadingPopularMovies",""],["title","Pel\xedculas m\xe1s Top","url","/peliculas/top/1",3,"itemArray","showPagination","item"],["title","Las m\xe1s populares","url","/peliculas/popular/1",3,"itemArray","showPagination","item"]],template:function(t,e){if(1&t&&(r.tc(0,ut,2,2,"ng-container",0),r.fc(1,"async"),r.tc(2,mt,1,0,"ng-template",null,1,r.uc),r.Rb(4,"hr"),r.tc(5,ht,2,2,"ng-container",0),r.fc(6,"async"),r.tc(7,ft,1,0,"ng-template",null,2,r.uc)),2&t){const t=r.pc(3),i=r.pc(8);r.ic("ngIf",r.gc(1,4,e.moviesTop$))("ngIfElse",t),r.Fb(5),r.ic("ngIf",r.gc(6,6,e.moviesPopular$))("ngIfElse",i)}},directives:[n.m,l.a,g.a],pipes:[n.b],styles:[".section-left[_ngcontent-%COMP%]{margin-bottom:2rem}.cast[_ngcontent-%COMP%]{margin-bottom:8rem}.container-cast[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center;width:100%;flex-wrap:wrap;margin-bottom:200px}.card-cast[_ngcontent-%COMP%]{height:800px;transition:all .5s;margin-right:1rem;margin-bottom:7rem}.card-cast[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.cast__img[_ngcontent-%COMP%]{height:150px;border-radius:10px;width:125px;margin-bottom:.5rem}.cast__name[_ngcontent-%COMP%]{font-size:14px;text-align:center;word-wrap:break-word;width:125px}@media (max-width:576px){.container-cast[_ngcontent-%COMP%]{flex-wrap:wrap;justify-content:space-around}.container-cast[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-bottom:7rem}}"]}),t})()},{path:"top/:id",component:dt},{path:"popular/:id",component:gt},{path:"ahora-cines/:id",component:(()=>{class t{constructor(t,e,i){this._movieService=t,this._activatedRoute=e,this._router=i,this.id="1",this.getId()}ngOnInit(){this.id&&this.getNowPlaying()}getId(){this.id=this._activatedRoute.snapshot.params.id}getNowPlaying(){this.movies$=this._movieService.getNowPlaying(this.id)}nextPage(t){this.id=t,this._router.navigate(["/peliculas/ahora-cines",t]).then(()=>{this.getNowPlaying()})}detailsMovie(t){this._router.navigate(["peliculas",t.id])}}return t.\u0275fac=function(e){return new(e||t)(r.Qb(c.a),r.Qb(a.a),r.Qb(a.b))},t.\u0275cmp=r.Kb({type:t,selectors:[["app-now-playing"]],decls:4,vars:4,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"offset-lg-4"],["nodata",""],["title","En cartelera en este mes","url","/peliculas/ahora-cines/1",1,"mx-auto",3,"itemArray","showBtnExplore","total_results","page","item","number_page"]],template:function(t,e){if(1&t&&(r.tc(0,vt,1,0,"ng-template",null,0,r.uc),r.tc(2,xt,4,2,"ng-container",1),r.fc(3,"async")),2&t){const t=r.pc(1);r.Fb(2),r.ic("ngIf",r.gc(3,2,e.movies$))("ngIfElse",t)}},directives:[n.m,g.a,l.a],pipes:[n.b],styles:[""]}),t})()},{path:"proximo-estrenar/:id",component:V},{path:"generos",component:I},{path:"generos/:genre/:page",component:I},{path:"clasificaciones",component:m},{path:"clasificaciones/:opcion/:page",component:m},{path:":id/recomendaciones/:page",component:(()=>{class t{constructor(t,e,i){this._moviesService=t,this._router=e,this._activatedRouter=i,this.id="",this.page="1",this.getId()}ngOnInit(){console.log(this.id),this.id&&this.getMoviesRecommendations()}getId(){this.id=this._activatedRouter.snapshot.params.id,this.page=this._activatedRouter.snapshot.params.page}getMoviesRecommendations(){this.movies$=this._moviesService.getRecommendations(this.id)}nextPage(t){this.page=t,this._router.navigate([`peliculas/${this.id}/recomendaciones`,t]).then(()=>{this.getMoviesRecommendations()})}detailsMovie(t){this._router.navigate(["peliculas",t.id])}}return t.\u0275fac=function(e){return new(e||t)(r.Qb(c.a),r.Qb(a.b),r.Qb(a.a))},t.\u0275cmp=r.Kb({type:t,selectors:[["app-recommendations"]],decls:4,vars:3,consts:[["loading",""],[4,"ngIf"],[1,"offset-lg-4"],["title","Pel\xedculas Similares","url","/peliculas/recomendaciones/1",1,"mx-auto",3,"itemArray","showBtnExplore","total_results","page","item","number_page"]],template:function(t,e){1&t&&(r.tc(0,It,1,0,"ng-template",null,0,r.uc),r.tc(2,yt,2,4,"ng-container",1),r.fc(3,"async")),2&t&&(r.Fb(2),r.ic("ngIf",r.gc(3,1,e.movies$)))},directives:[n.m,g.a,l.a],pipes:[n.b],styles:[""]}),t})()},{path:":id",component:ot},{path:"**",pathMatch:"full",redirectTo:""}];let Ut=(()=>{class t{}return t.\u0275mod=r.Ob({type:t}),t.\u0275inj=r.Nb({factory:function(e){return new(e||t)},imports:[[a.f.forChild(Ft)],a.f]}),t})();var Mt=i("xQn8");let Vt=(()=>{class t{}return t.\u0275mod=r.Ob({type:t}),t.\u0275inj=r.Nb({factory:function(e){return new(e||t)},imports:[[Ut,Mt.a,n.c]]}),t})()}}]);