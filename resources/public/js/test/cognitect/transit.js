// Compiled by ClojureScript 0.0-2511
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__7397_7401 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__7398_7402 = null;
var count__7399_7403 = (0);
var i__7400_7404 = (0);
while(true){
if((i__7400_7404 < count__7399_7403)){
var k_7405 = cljs.core._nth.call(null,chunk__7398_7402,i__7400_7404);
var v_7406 = (b[k_7405]);
(a[k_7405] = v_7406);

var G__7407 = seq__7397_7401;
var G__7408 = chunk__7398_7402;
var G__7409 = count__7399_7403;
var G__7410 = (i__7400_7404 + (1));
seq__7397_7401 = G__7407;
chunk__7398_7402 = G__7408;
count__7399_7403 = G__7409;
i__7400_7404 = G__7410;
continue;
} else {
var temp__4126__auto___7411 = cljs.core.seq.call(null,seq__7397_7401);
if(temp__4126__auto___7411){
var seq__7397_7412__$1 = temp__4126__auto___7411;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7397_7412__$1)){
var c__4433__auto___7413 = cljs.core.chunk_first.call(null,seq__7397_7412__$1);
var G__7414 = cljs.core.chunk_rest.call(null,seq__7397_7412__$1);
var G__7415 = c__4433__auto___7413;
var G__7416 = cljs.core.count.call(null,c__4433__auto___7413);
var G__7417 = (0);
seq__7397_7401 = G__7414;
chunk__7398_7402 = G__7415;
count__7399_7403 = G__7416;
i__7400_7404 = G__7417;
continue;
} else {
var k_7418 = cljs.core.first.call(null,seq__7397_7412__$1);
var v_7419 = (b[k_7418]);
(a[k_7418] = v_7419);

var G__7420 = cljs.core.next.call(null,seq__7397_7412__$1);
var G__7421 = null;
var G__7422 = (0);
var G__7423 = (0);
seq__7397_7401 = G__7420;
chunk__7398_7402 = G__7421;
count__7399_7403 = G__7422;
i__7400_7404 = G__7423;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4233__auto__,writer__4234__auto__,opt__4235__auto__){
return cljs.core._write.call(null,writer__4234__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4233__auto__,writer__4234__auto__,opt__4235__auto__){
return cljs.core._write.call(null,writer__4234__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){
return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__7424 = (i + (2));
var G__7425 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__7424;
ret = G__7425;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4233__auto__,writer__4234__auto__,opt__4235__auto__){
return cljs.core._write.call(null,writer__4234__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4233__auto__,writer__4234__auto__,opt__4235__auto__){
return cljs.core._write.call(null,writer__4234__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__7426_7430 = cljs.core.seq.call(null,v);
var chunk__7427_7431 = null;
var count__7428_7432 = (0);
var i__7429_7433 = (0);
while(true){
if((i__7429_7433 < count__7428_7432)){
var x_7434 = cljs.core._nth.call(null,chunk__7427_7431,i__7429_7433);
ret.push(x_7434);

var G__7435 = seq__7426_7430;
var G__7436 = chunk__7427_7431;
var G__7437 = count__7428_7432;
var G__7438 = (i__7429_7433 + (1));
seq__7426_7430 = G__7435;
chunk__7427_7431 = G__7436;
count__7428_7432 = G__7437;
i__7429_7433 = G__7438;
continue;
} else {
var temp__4126__auto___7439 = cljs.core.seq.call(null,seq__7426_7430);
if(temp__4126__auto___7439){
var seq__7426_7440__$1 = temp__4126__auto___7439;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7426_7440__$1)){
var c__4433__auto___7441 = cljs.core.chunk_first.call(null,seq__7426_7440__$1);
var G__7442 = cljs.core.chunk_rest.call(null,seq__7426_7440__$1);
var G__7443 = c__4433__auto___7441;
var G__7444 = cljs.core.count.call(null,c__4433__auto___7441);
var G__7445 = (0);
seq__7426_7430 = G__7442;
chunk__7427_7431 = G__7443;
count__7428_7432 = G__7444;
i__7429_7433 = G__7445;
continue;
} else {
var x_7446 = cljs.core.first.call(null,seq__7426_7440__$1);
ret.push(x_7446);

var G__7447 = cljs.core.next.call(null,seq__7426_7440__$1);
var G__7448 = null;
var G__7449 = (0);
var G__7450 = (0);
seq__7426_7430 = G__7447;
chunk__7427_7431 = G__7448;
count__7428_7432 = G__7449;
i__7429_7433 = G__7450;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4233__auto__,writer__4234__auto__,opt__4235__auto__){
return cljs.core._write.call(null,writer__4234__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4233__auto__,writer__4234__auto__,opt__4235__auto__){
return cljs.core._write.call(null,writer__4234__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__7451_7455 = cljs.core.seq.call(null,v);
var chunk__7452_7456 = null;
var count__7453_7457 = (0);
var i__7454_7458 = (0);
while(true){
if((i__7454_7458 < count__7453_7457)){
var x_7459 = cljs.core._nth.call(null,chunk__7452_7456,i__7454_7458);
ret.push(x_7459);

var G__7460 = seq__7451_7455;
var G__7461 = chunk__7452_7456;
var G__7462 = count__7453_7457;
var G__7463 = (i__7454_7458 + (1));
seq__7451_7455 = G__7460;
chunk__7452_7456 = G__7461;
count__7453_7457 = G__7462;
i__7454_7458 = G__7463;
continue;
} else {
var temp__4126__auto___7464 = cljs.core.seq.call(null,seq__7451_7455);
if(temp__4126__auto___7464){
var seq__7451_7465__$1 = temp__4126__auto___7464;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7451_7465__$1)){
var c__4433__auto___7466 = cljs.core.chunk_first.call(null,seq__7451_7465__$1);
var G__7467 = cljs.core.chunk_rest.call(null,seq__7451_7465__$1);
var G__7468 = c__4433__auto___7466;
var G__7469 = cljs.core.count.call(null,c__4433__auto___7466);
var G__7470 = (0);
seq__7451_7455 = G__7467;
chunk__7452_7456 = G__7468;
count__7453_7457 = G__7469;
i__7454_7458 = G__7470;
continue;
} else {
var x_7471 = cljs.core.first.call(null,seq__7451_7465__$1);
ret.push(x_7471);

var G__7472 = cljs.core.next.call(null,seq__7451_7465__$1);
var G__7473 = null;
var G__7474 = (0);
var G__7475 = (0);
seq__7451_7455 = G__7472;
chunk__7452_7456 = G__7473;
count__7453_7457 = G__7474;
i__7454_7458 = G__7475;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4233__auto__,writer__4234__auto__,opt__4235__auto__){
return cljs.core._write.call(null,writer__4234__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__7476_7480 = cljs.core.seq.call(null,v);
var chunk__7477_7481 = null;
var count__7478_7482 = (0);
var i__7479_7483 = (0);
while(true){
if((i__7479_7483 < count__7478_7482)){
var x_7484 = cljs.core._nth.call(null,chunk__7477_7481,i__7479_7483);
ret.push(x_7484);

var G__7485 = seq__7476_7480;
var G__7486 = chunk__7477_7481;
var G__7487 = count__7478_7482;
var G__7488 = (i__7479_7483 + (1));
seq__7476_7480 = G__7485;
chunk__7477_7481 = G__7486;
count__7478_7482 = G__7487;
i__7479_7483 = G__7488;
continue;
} else {
var temp__4126__auto___7489 = cljs.core.seq.call(null,seq__7476_7480);
if(temp__4126__auto___7489){
var seq__7476_7490__$1 = temp__4126__auto___7489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7476_7490__$1)){
var c__4433__auto___7491 = cljs.core.chunk_first.call(null,seq__7476_7490__$1);
var G__7492 = cljs.core.chunk_rest.call(null,seq__7476_7490__$1);
var G__7493 = c__4433__auto___7491;
var G__7494 = cljs.core.count.call(null,c__4433__auto___7491);
var G__7495 = (0);
seq__7476_7480 = G__7492;
chunk__7477_7481 = G__7493;
count__7478_7482 = G__7494;
i__7479_7483 = G__7495;
continue;
} else {
var x_7496 = cljs.core.first.call(null,seq__7476_7490__$1);
ret.push(x_7496);

var G__7497 = cljs.core.next.call(null,seq__7476_7490__$1);
var G__7498 = null;
var G__7499 = (0);
var G__7500 = (0);
seq__7476_7480 = G__7497;
chunk__7477_7481 = G__7498;
count__7478_7482 = G__7499;
i__7479_7483 = G__7500;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4233__auto__,writer__4234__auto__,opt__4235__auto__){
return cljs.core._write.call(null,writer__4234__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4233__auto__,writer__4234__auto__,opt__4235__auto__){
return cljs.core._write.call(null,writer__4234__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function __GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a map of
* type constructors to handler instances.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){
return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x7510 = cljs.core.clone.call(null,handlers);
x7510.forEach = ((function (x7510,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__7511 = cljs.core.seq.call(null,coll);
var chunk__7512 = null;
var count__7513 = (0);
var i__7514 = (0);
while(true){
if((i__7514 < count__7513)){
var vec__7515 = cljs.core._nth.call(null,chunk__7512,i__7514);
var k = cljs.core.nth.call(null,vec__7515,(0),null);
var v = cljs.core.nth.call(null,vec__7515,(1),null);
f.call(null,v,k);

var G__7517 = seq__7511;
var G__7518 = chunk__7512;
var G__7519 = count__7513;
var G__7520 = (i__7514 + (1));
seq__7511 = G__7517;
chunk__7512 = G__7518;
count__7513 = G__7519;
i__7514 = G__7520;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__7511);
if(temp__4126__auto__){
var seq__7511__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7511__$1)){
var c__4433__auto__ = cljs.core.chunk_first.call(null,seq__7511__$1);
var G__7521 = cljs.core.chunk_rest.call(null,seq__7511__$1);
var G__7522 = c__4433__auto__;
var G__7523 = cljs.core.count.call(null,c__4433__auto__);
var G__7524 = (0);
seq__7511 = G__7521;
chunk__7512 = G__7522;
count__7513 = G__7523;
i__7514 = G__7524;
continue;
} else {
var vec__7516 = cljs.core.first.call(null,seq__7511__$1);
var k = cljs.core.nth.call(null,vec__7516,(0),null);
var v = cljs.core.nth.call(null,vec__7516,(1),null);
f.call(null,v,k);

var G__7525 = cljs.core.next.call(null,seq__7511__$1);
var G__7526 = null;
var G__7527 = (0);
var G__7528 = (0);
seq__7511 = G__7525;
chunk__7512 = G__7526;
count__7513 = G__7527;
i__7514 = G__7528;
continue;
}
} else {
return null;
}
}
break;
}
});})(x7510,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x7510;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__7509 = obj;
G__7509.push(kfn.call(null,k),vfn.call(null,v));

return G__7509;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){
return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){
return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){
return write_handler.call(null,tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){
return write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t7532 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t7532 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta7533){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta7533 = meta7533;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t7532.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t7532.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t7532.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t7532.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t7532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7534){
var self__ = this;
var _7534__$1 = this;
return self__.meta7533;
});

cognitect.transit.t7532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7534,meta7533__$1){
var self__ = this;
var _7534__$1 = this;
return (new cognitect.transit.t7532(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta7533__$1));
});

cognitect.transit.t7532.cljs$lang$type = true;

cognitect.transit.t7532.cljs$lang$ctorStr = "cognitect.transit/t7532";

cognitect.transit.t7532.cljs$lang$ctorPrWriter = (function (this__4233__auto__,writer__4234__auto__,opt__4235__auto__){
return cljs.core._write.call(null,writer__4234__auto__,"cognitect.transit/t7532");
});

cognitect.transit.__GT_t7532 = (function __GT_t7532(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta7533){
return (new cognitect.transit.t7532(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta7533));
});

}

return (new cognitect.transit.t7532(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),79,new cljs.core.Keyword(null,"end-line","end-line",1837326455),264,new cljs.core.Keyword(null,"column","column",2078222095),6,new cljs.core.Keyword(null,"line","line",212345235),259,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/albin/projects/vinculum/resources/public/js/test/cognitect/transit.cljs"], null)));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){
return com.cognitect.transit.types.integer.call(null,s);
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
* Construct a big integer from a string.
*/
cognitect.transit.bigint = (function bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
* Returns true if x is a transit big integer value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});
