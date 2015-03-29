// Compiled by ClojureScript 0.0-2511
goog.provide('vinculum.core');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('om.dom');
goog.require('om.core');
if(typeof vinculum.core.app_state !== 'undefined'){
} else {
vinculum.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list","list",765357683),cljs.core.PersistentVector.EMPTY], null));
}
vinculum.core.handler = (function handler(response){
return cljs.core.swap_BANG_.call(null,vinculum.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"list","list",765357683),cljs.core.map.call(null,(function (p1__6947_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(p1__6947_SHARP_)),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__6947_SHARP_));
}),response));
});
ajax.core.GET.call(null,"http://localhost:3000/weight",new cljs.core.Keyword(null,"handler","handler",-195596612),vinculum.core.handler,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"edn","edn",1317840885));
vinculum.core.main = (function main(){
return om.core.root.call(null,(function (data,owner){
if(typeof vinculum.core.t6951 !== 'undefined'){
} else {

/**
* @constructor
*/
vinculum.core.t6951 = (function (owner,data,main,meta6952){
this.owner = owner;
this.data = data;
this.main = main;
this.meta6952 = meta6952;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
vinculum.core.t6951.prototype.om$core$IRender$ = true;

vinculum.core.t6951.prototype.om$core$IRender$render$arity$1 = (function (this__5293__auto__){
var self__ = this;
var this__5293__auto____$1 = this;
return cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,((function (this__5293__auto____$1){
return (function (text){
return React.DOM.li(null,text);
});})(this__5293__auto____$1))
,new cljs.core.Keyword(null,"list","list",765357683).cljs$core$IFn$_invoke$arity$1(self__.data)));
});

vinculum.core.t6951.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6953){
var self__ = this;
var _6953__$1 = this;
return self__.meta6952;
});

vinculum.core.t6951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6953,meta6952__$1){
var self__ = this;
var _6953__$1 = this;
return (new vinculum.core.t6951(self__.owner,self__.data,self__.main,meta6952__$1));
});

vinculum.core.t6951.cljs$lang$type = true;

vinculum.core.t6951.cljs$lang$ctorStr = "vinculum.core/t6951";

vinculum.core.t6951.cljs$lang$ctorPrWriter = (function (this__4233__auto__,writer__4234__auto__,opt__4235__auto__){
return cljs.core._write.call(null,writer__4234__auto__,"vinculum.core/t6951");
});

vinculum.core.__GT_t6951 = (function __GT_t6951(owner__$1,data__$1,main__$1,meta6952){
return (new vinculum.core.t6951(owner__$1,data__$1,main__$1,meta6952));
});

}

return (new vinculum.core.t6951(owner,data,main,null));
}),vinculum.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
});
