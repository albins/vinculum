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
return cljs.core.swap_BANG_.call(null,vinculum.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"list","list",765357683),cljs.core.map.call(null,(function (p1__27797_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(p1__27797_SHARP_)),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__27797_SHARP_));
}),response));
});
ajax.core.GET.call(null,"http://localhost:3000/weight",new cljs.core.Keyword(null,"handler","handler",-195596612),vinculum.core.handler,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"edn","edn",1317840885));
vinculum.core.main = (function main(){
return om.core.root.call(null,(function (data,owner){
if(typeof vinculum.core.t27801 !== 'undefined'){
} else {

/**
* @constructor
*/
vinculum.core.t27801 = (function (owner,data,main,meta27802){
this.owner = owner;
this.data = data;
this.main = main;
this.meta27802 = meta27802;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
vinculum.core.t27801.prototype.om$core$IRender$ = true;

vinculum.core.t27801.prototype.om$core$IRender$render$arity$1 = (function (this__27189__auto__){
var self__ = this;
var this__27189__auto____$1 = this;
return cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,((function (this__27189__auto____$1){
return (function (text){
return React.DOM.li(null,text);
});})(this__27189__auto____$1))
,new cljs.core.Keyword(null,"list","list",765357683).cljs$core$IFn$_invoke$arity$1(self__.data)));
});

vinculum.core.t27801.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27803){
var self__ = this;
var _27803__$1 = this;
return self__.meta27802;
});

vinculum.core.t27801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27803,meta27802__$1){
var self__ = this;
var _27803__$1 = this;
return (new vinculum.core.t27801(self__.owner,self__.data,self__.main,meta27802__$1));
});

vinculum.core.t27801.cljs$lang$type = true;

vinculum.core.t27801.cljs$lang$ctorStr = "vinculum.core/t27801";

vinculum.core.t27801.cljs$lang$ctorPrWriter = (function (this__21320__auto__,writer__21321__auto__,opt__21322__auto__){
return cljs.core._write.call(null,writer__21321__auto__,"vinculum.core/t27801");
});

vinculum.core.__GT_t27801 = (function __GT_t27801(owner__$1,data__$1,main__$1,meta27802){
return (new vinculum.core.t27801(owner__$1,data__$1,main__$1,meta27802));
});

}

return (new vinculum.core.t27801(owner,data,main,null));
}),vinculum.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
});
