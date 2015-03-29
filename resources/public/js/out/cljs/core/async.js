// Compiled by ClojureScript 0.0-2511
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t29187 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29187 = (function (f,fn_handler,meta29188){
this.f = f;
this.fn_handler = fn_handler;
this.meta29188 = meta29188;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29187.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29187.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t29187.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t29187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29189){
var self__ = this;
var _29189__$1 = this;
return self__.meta29188;
});

cljs.core.async.t29187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29189,meta29188__$1){
var self__ = this;
var _29189__$1 = this;
return (new cljs.core.async.t29187(self__.f,self__.fn_handler,meta29188__$1));
});

cljs.core.async.t29187.cljs$lang$type = true;

cljs.core.async.t29187.cljs$lang$ctorStr = "cljs.core.async/t29187";

cljs.core.async.t29187.cljs$lang$ctorPrWriter = (function (this__21320__auto__,writer__21321__auto__,opt__21322__auto__){
return cljs.core._write.call(null,writer__21321__auto__,"cljs.core.async/t29187");
});

cljs.core.async.__GT_t29187 = (function __GT_t29187(f__$1,fn_handler__$1,meta29188){
return (new cljs.core.async.t29187(f__$1,fn_handler__$1,meta29188));
});

}

return (new cljs.core.async.t29187(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),15,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),12,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/albin/projects/vinculum/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__29191 = buff;
if(G__29191){
var bit__21414__auto__ = null;
if(cljs.core.truth_((function (){var or__20733__auto__ = bit__21414__auto__;
if(cljs.core.truth_(or__20733__auto__)){
return or__20733__auto__;
} else {
return G__29191.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__29191.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29191);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29191);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29192 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29192);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29192,ret){
return (function (){
return fn1.call(null,val_29192);
});})(val_29192,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__21620__auto___29193 = n;
var x_29194 = (0);
while(true){
if((x_29194 < n__21620__auto___29193)){
(a[x_29194] = (0));

var G__29195 = (x_29194 + (1));
x_29194 = G__29195;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__29196 = (i + (1));
i = G__29196;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t29200 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29200 = (function (flag,alt_flag,meta29201){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta29201 = meta29201;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29200.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29200.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t29200.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t29200.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29202){
var self__ = this;
var _29202__$1 = this;
return self__.meta29201;
});})(flag))
;

cljs.core.async.t29200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29202,meta29201__$1){
var self__ = this;
var _29202__$1 = this;
return (new cljs.core.async.t29200(self__.flag,self__.alt_flag,meta29201__$1));
});})(flag))
;

cljs.core.async.t29200.cljs$lang$type = true;

cljs.core.async.t29200.cljs$lang$ctorStr = "cljs.core.async/t29200";

cljs.core.async.t29200.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__21320__auto__,writer__21321__auto__,opt__21322__auto__){
return cljs.core._write.call(null,writer__21321__auto__,"cljs.core.async/t29200");
});})(flag))
;

cljs.core.async.__GT_t29200 = ((function (flag){
return (function __GT_t29200(flag__$1,alt_flag__$1,meta29201){
return (new cljs.core.async.t29200(flag__$1,alt_flag__$1,meta29201));
});})(flag))
;

}

return (new cljs.core.async.t29200(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),135,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),130,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/albin/projects/vinculum/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t29206 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29206 = (function (cb,flag,alt_handler,meta29207){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta29207 = meta29207;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29206.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29206.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t29206.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t29206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29208){
var self__ = this;
var _29208__$1 = this;
return self__.meta29207;
});

cljs.core.async.t29206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29208,meta29207__$1){
var self__ = this;
var _29208__$1 = this;
return (new cljs.core.async.t29206(self__.cb,self__.flag,self__.alt_handler,meta29207__$1));
});

cljs.core.async.t29206.cljs$lang$type = true;

cljs.core.async.t29206.cljs$lang$ctorStr = "cljs.core.async/t29206";

cljs.core.async.t29206.cljs$lang$ctorPrWriter = (function (this__21320__auto__,writer__21321__auto__,opt__21322__auto__){
return cljs.core._write.call(null,writer__21321__auto__,"cljs.core.async/t29206");
});

cljs.core.async.__GT_t29206 = (function __GT_t29206(cb__$1,flag__$1,alt_handler__$1,meta29207){
return (new cljs.core.async.t29206(cb__$1,flag__$1,alt_handler__$1,meta29207));
});

}

return (new cljs.core.async.t29206(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),143,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),138,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/albin/projects/vinculum/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29209_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29209_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29210_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29210_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__20733__auto__ = wport;
if(cljs.core.truth_(or__20733__auto__)){
return or__20733__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29211 = (i + (1));
i = G__29211;
continue;
}
} else {
return null;
}
break;
}
})();
var or__20733__auto__ = ret;
if(cljs.core.truth_(or__20733__auto__)){
return or__20733__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__20721__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__20721__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__20721__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__29212){
var map__29214 = p__29212;
var map__29214__$1 = ((cljs.core.seq_QMARK_.call(null,map__29214))?cljs.core.apply.call(null,cljs.core.hash_map,map__29214):map__29214);
var opts = map__29214__$1;
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

};
var alts_BANG_ = function (ports,var_args){
var p__29212 = null;
if (arguments.length > 1) {
  p__29212 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__29212);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__29215){
var ports = cljs.core.first(arglist__29215);
var p__29212 = cljs.core.rest(arglist__29215);
return alts_BANG___delegate(ports,p__29212);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t29223 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29223 = (function (ch,f,map_LT_,meta29224){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta29224 = meta29224;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29223.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29223.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t29223.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29223.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t29226 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29226 = (function (fn1,_,meta29224,map_LT_,f,ch,meta29227){
this.fn1 = fn1;
this._ = _;
this.meta29224 = meta29224;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29227 = meta29227;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29226.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29226.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t29226.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t29226.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29216_SHARP_){
return f1.call(null,(((p1__29216_SHARP_ == null))?null:self__.f.call(null,p1__29216_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t29226.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29228){
var self__ = this;
var _29228__$1 = this;
return self__.meta29227;
});})(___$1))
;

cljs.core.async.t29226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29228,meta29227__$1){
var self__ = this;
var _29228__$1 = this;
return (new cljs.core.async.t29226(self__.fn1,self__._,self__.meta29224,self__.map_LT_,self__.f,self__.ch,meta29227__$1));
});})(___$1))
;

cljs.core.async.t29226.cljs$lang$type = true;

cljs.core.async.t29226.cljs$lang$ctorStr = "cljs.core.async/t29226";

cljs.core.async.t29226.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__21320__auto__,writer__21321__auto__,opt__21322__auto__){
return cljs.core._write.call(null,writer__21321__auto__,"cljs.core.async/t29226");
});})(___$1))
;

cljs.core.async.__GT_t29226 = ((function (___$1){
return (function __GT_t29226(fn1__$1,___$2,meta29224__$1,map_LT___$1,f__$1,ch__$1,meta29227){
return (new cljs.core.async.t29226(fn1__$1,___$2,meta29224__$1,map_LT___$1,f__$1,ch__$1,meta29227));
});})(___$1))
;

}

return (new cljs.core.async.t29226(fn1,___$1,self__.meta29224,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),220,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),214,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/albin/projects/vinculum/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__20721__auto__ = ret;
if(cljs.core.truth_(and__20721__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__20721__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t29223.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29223.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29223.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29223.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29225){
var self__ = this;
var _29225__$1 = this;
return self__.meta29224;
});

cljs.core.async.t29223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29225,meta29224__$1){
var self__ = this;
var _29225__$1 = this;
return (new cljs.core.async.t29223(self__.ch,self__.f,self__.map_LT_,meta29224__$1));
});

cljs.core.async.t29223.cljs$lang$type = true;

cljs.core.async.t29223.cljs$lang$ctorStr = "cljs.core.async/t29223";

cljs.core.async.t29223.cljs$lang$ctorPrWriter = (function (this__21320__auto__,writer__21321__auto__,opt__21322__auto__){
return cljs.core._write.call(null,writer__21321__auto__,"cljs.core.async/t29223");
});

cljs.core.async.__GT_t29223 = (function __GT_t29223(ch__$1,f__$1,map_LT___$1,meta29224){
return (new cljs.core.async.t29223(ch__$1,f__$1,map_LT___$1,meta29224));
});

}

return (new cljs.core.async.t29223(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),226,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),205,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/albin/projects/vinculum/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t29232 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29232 = (function (ch,f,map_GT_,meta29233){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta29233 = meta29233;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29232.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29232.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t29232.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29232.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29232.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29232.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29234){
var self__ = this;
var _29234__$1 = this;
return self__.meta29233;
});

cljs.core.async.t29232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29234,meta29233__$1){
var self__ = this;
var _29234__$1 = this;
return (new cljs.core.async.t29232(self__.ch,self__.f,self__.map_GT_,meta29233__$1));
});

cljs.core.async.t29232.cljs$lang$type = true;

cljs.core.async.t29232.cljs$lang$ctorStr = "cljs.core.async/t29232";

cljs.core.async.t29232.cljs$lang$ctorPrWriter = (function (this__21320__auto__,writer__21321__auto__,opt__21322__auto__){
return cljs.core._write.call(null,writer__21321__auto__,"cljs.core.async/t29232");
});

cljs.core.async.__GT_t29232 = (function __GT_t29232(ch__$1,f__$1,map_GT___$1,meta29233){
return (new cljs.core.async.t29232(ch__$1,f__$1,map_GT___$1,meta29233));
});

}

return (new cljs.core.async.t29232(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),241,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),232,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/albin/projects/vinculum/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t29238 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29238 = (function (ch,p,filter_GT_,meta29239){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta29239 = meta29239;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29238.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29238.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t29238.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29238.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29238.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29238.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29238.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29240){
var self__ = this;
var _29240__$1 = this;
return self__.meta29239;
});

cljs.core.async.t29238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29240,meta29239__$1){
var self__ = this;
var _29240__$1 = this;
return (new cljs.core.async.t29238(self__.ch,self__.p,self__.filter_GT_,meta29239__$1));
});

cljs.core.async.t29238.cljs$lang$type = true;

cljs.core.async.t29238.cljs$lang$ctorStr = "cljs.core.async/t29238";

cljs.core.async.t29238.cljs$lang$ctorPrWriter = (function (this__21320__auto__,writer__21321__auto__,opt__21322__auto__){
return cljs.core._write.call(null,writer__21321__auto__,"cljs.core.async/t29238");
});

cljs.core.async.__GT_t29238 = (function __GT_t29238(ch__$1,p__$1,filter_GT___$1,meta29239){
return (new cljs.core.async.t29238(ch__$1,p__$1,filter_GT___$1,meta29239));
});

}

return (new cljs.core.async.t29238(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),262,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),250,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/albin/projects/vinculum/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23281__auto___29323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23281__auto___29323,out){
return (function (){
var f__23282__auto__ = (function (){var switch__23216__auto__ = ((function (c__23281__auto___29323,out){
return (function (state_29302){
var state_val_29303 = (state_29302[(1)]);
if((state_val_29303 === (7))){
var inst_29298 = (state_29302[(2)]);
var state_29302__$1 = state_29302;
var statearr_29304_29324 = state_29302__$1;
(statearr_29304_29324[(2)] = inst_29298);

(statearr_29304_29324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29303 === (1))){
var state_29302__$1 = state_29302;
var statearr_29305_29325 = state_29302__$1;
(statearr_29305_29325[(2)] = null);

(statearr_29305_29325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29303 === (4))){
var inst_29284 = (state_29302[(7)]);
var inst_29284__$1 = (state_29302[(2)]);
var inst_29285 = (inst_29284__$1 == null);
var state_29302__$1 = (function (){var statearr_29306 = state_29302;
(statearr_29306[(7)] = inst_29284__$1);

return statearr_29306;
})();
if(cljs.core.truth_(inst_29285)){
var statearr_29307_29326 = state_29302__$1;
(statearr_29307_29326[(1)] = (5));

} else {
var statearr_29308_29327 = state_29302__$1;
(statearr_29308_29327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29303 === (6))){
var inst_29284 = (state_29302[(7)]);
var inst_29289 = p.call(null,inst_29284);
var state_29302__$1 = state_29302;
if(cljs.core.truth_(inst_29289)){
var statearr_29309_29328 = state_29302__$1;
(statearr_29309_29328[(1)] = (8));

} else {
var statearr_29310_29329 = state_29302__$1;
(statearr_29310_29329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29303 === (3))){
var inst_29300 = (state_29302[(2)]);
var state_29302__$1 = state_29302;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29302__$1,inst_29300);
} else {
if((state_val_29303 === (2))){
var state_29302__$1 = state_29302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29302__$1,(4),ch);
} else {
if((state_val_29303 === (11))){
var inst_29292 = (state_29302[(2)]);
var state_29302__$1 = state_29302;
var statearr_29311_29330 = state_29302__$1;
(statearr_29311_29330[(2)] = inst_29292);

(statearr_29311_29330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29303 === (9))){
var state_29302__$1 = state_29302;
var statearr_29312_29331 = state_29302__$1;
(statearr_29312_29331[(2)] = null);

(statearr_29312_29331[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29303 === (5))){
var inst_29287 = cljs.core.async.close_BANG_.call(null,out);
var state_29302__$1 = state_29302;
var statearr_29313_29332 = state_29302__$1;
(statearr_29313_29332[(2)] = inst_29287);

(statearr_29313_29332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29303 === (10))){
var inst_29295 = (state_29302[(2)]);
var state_29302__$1 = (function (){var statearr_29314 = state_29302;
(statearr_29314[(8)] = inst_29295);

return statearr_29314;
})();
var statearr_29315_29333 = state_29302__$1;
(statearr_29315_29333[(2)] = null);

(statearr_29315_29333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29303 === (8))){
var inst_29284 = (state_29302[(7)]);
var state_29302__$1 = state_29302;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29302__$1,(11),out,inst_29284);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23281__auto___29323,out))
;
return ((function (switch__23216__auto__,c__23281__auto___29323,out){
return (function() {
var state_machine__23217__auto__ = null;
var state_machine__23217__auto____0 = (function (){
var statearr_29319 = [null,null,null,null,null,null,null,null,null];
(statearr_29319[(0)] = state_machine__23217__auto__);

(statearr_29319[(1)] = (1));

return statearr_29319;
});
var state_machine__23217__auto____1 = (function (state_29302){
while(true){
var ret_value__23218__auto__ = (function (){try{while(true){
var result__23219__auto__ = switch__23216__auto__.call(null,state_29302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23219__auto__;
}
break;
}
}catch (e29320){if((e29320 instanceof Object)){
var ex__23220__auto__ = e29320;
var statearr_29321_29334 = state_29302;
(statearr_29321_29334[(5)] = ex__23220__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29335 = state_29302;
state_29302 = G__29335;
continue;
} else {
return ret_value__23218__auto__;
}
break;
}
});
state_machine__23217__auto__ = function(state_29302){
switch(arguments.length){
case 0:
return state_machine__23217__auto____0.call(this);
case 1:
return state_machine__23217__auto____1.call(this,state_29302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23217__auto____0;
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23217__auto____1;
return state_machine__23217__auto__;
})()
;})(switch__23216__auto__,c__23281__auto___29323,out))
})();
var state__23283__auto__ = (function (){var statearr_29322 = f__23282__auto__.call(null);
(statearr_29322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23281__auto___29323);

return statearr_29322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23283__auto__);
});})(c__23281__auto___29323,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__23281__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23281__auto__){
return (function (){
var f__23282__auto__ = (function (){var switch__23216__auto__ = ((function (c__23281__auto__){
return (function (state_29501){
var state_val_29502 = (state_29501[(1)]);
if((state_val_29502 === (7))){
var inst_29497 = (state_29501[(2)]);
var state_29501__$1 = state_29501;
var statearr_29503_29544 = state_29501__$1;
(statearr_29503_29544[(2)] = inst_29497);

(statearr_29503_29544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (20))){
var inst_29467 = (state_29501[(7)]);
var inst_29478 = (state_29501[(2)]);
var inst_29479 = cljs.core.next.call(null,inst_29467);
var inst_29453 = inst_29479;
var inst_29454 = null;
var inst_29455 = (0);
var inst_29456 = (0);
var state_29501__$1 = (function (){var statearr_29504 = state_29501;
(statearr_29504[(8)] = inst_29454);

(statearr_29504[(9)] = inst_29453);

(statearr_29504[(10)] = inst_29455);

(statearr_29504[(11)] = inst_29478);

(statearr_29504[(12)] = inst_29456);

return statearr_29504;
})();
var statearr_29505_29545 = state_29501__$1;
(statearr_29505_29545[(2)] = null);

(statearr_29505_29545[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (1))){
var state_29501__$1 = state_29501;
var statearr_29506_29546 = state_29501__$1;
(statearr_29506_29546[(2)] = null);

(statearr_29506_29546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (4))){
var inst_29442 = (state_29501[(13)]);
var inst_29442__$1 = (state_29501[(2)]);
var inst_29443 = (inst_29442__$1 == null);
var state_29501__$1 = (function (){var statearr_29507 = state_29501;
(statearr_29507[(13)] = inst_29442__$1);

return statearr_29507;
})();
if(cljs.core.truth_(inst_29443)){
var statearr_29508_29547 = state_29501__$1;
(statearr_29508_29547[(1)] = (5));

} else {
var statearr_29509_29548 = state_29501__$1;
(statearr_29509_29548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (15))){
var state_29501__$1 = state_29501;
var statearr_29513_29549 = state_29501__$1;
(statearr_29513_29549[(2)] = null);

(statearr_29513_29549[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (21))){
var state_29501__$1 = state_29501;
var statearr_29514_29550 = state_29501__$1;
(statearr_29514_29550[(2)] = null);

(statearr_29514_29550[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (13))){
var inst_29454 = (state_29501[(8)]);
var inst_29453 = (state_29501[(9)]);
var inst_29455 = (state_29501[(10)]);
var inst_29456 = (state_29501[(12)]);
var inst_29463 = (state_29501[(2)]);
var inst_29464 = (inst_29456 + (1));
var tmp29510 = inst_29454;
var tmp29511 = inst_29453;
var tmp29512 = inst_29455;
var inst_29453__$1 = tmp29511;
var inst_29454__$1 = tmp29510;
var inst_29455__$1 = tmp29512;
var inst_29456__$1 = inst_29464;
var state_29501__$1 = (function (){var statearr_29515 = state_29501;
(statearr_29515[(8)] = inst_29454__$1);

(statearr_29515[(9)] = inst_29453__$1);

(statearr_29515[(10)] = inst_29455__$1);

(statearr_29515[(14)] = inst_29463);

(statearr_29515[(12)] = inst_29456__$1);

return statearr_29515;
})();
var statearr_29516_29551 = state_29501__$1;
(statearr_29516_29551[(2)] = null);

(statearr_29516_29551[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (22))){
var state_29501__$1 = state_29501;
var statearr_29517_29552 = state_29501__$1;
(statearr_29517_29552[(2)] = null);

(statearr_29517_29552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (6))){
var inst_29442 = (state_29501[(13)]);
var inst_29451 = f.call(null,inst_29442);
var inst_29452 = cljs.core.seq.call(null,inst_29451);
var inst_29453 = inst_29452;
var inst_29454 = null;
var inst_29455 = (0);
var inst_29456 = (0);
var state_29501__$1 = (function (){var statearr_29518 = state_29501;
(statearr_29518[(8)] = inst_29454);

(statearr_29518[(9)] = inst_29453);

(statearr_29518[(10)] = inst_29455);

(statearr_29518[(12)] = inst_29456);

return statearr_29518;
})();
var statearr_29519_29553 = state_29501__$1;
(statearr_29519_29553[(2)] = null);

(statearr_29519_29553[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (17))){
var inst_29467 = (state_29501[(7)]);
var inst_29471 = cljs.core.chunk_first.call(null,inst_29467);
var inst_29472 = cljs.core.chunk_rest.call(null,inst_29467);
var inst_29473 = cljs.core.count.call(null,inst_29471);
var inst_29453 = inst_29472;
var inst_29454 = inst_29471;
var inst_29455 = inst_29473;
var inst_29456 = (0);
var state_29501__$1 = (function (){var statearr_29520 = state_29501;
(statearr_29520[(8)] = inst_29454);

(statearr_29520[(9)] = inst_29453);

(statearr_29520[(10)] = inst_29455);

(statearr_29520[(12)] = inst_29456);

return statearr_29520;
})();
var statearr_29521_29554 = state_29501__$1;
(statearr_29521_29554[(2)] = null);

(statearr_29521_29554[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (3))){
var inst_29499 = (state_29501[(2)]);
var state_29501__$1 = state_29501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29501__$1,inst_29499);
} else {
if((state_val_29502 === (12))){
var inst_29487 = (state_29501[(2)]);
var state_29501__$1 = state_29501;
var statearr_29522_29555 = state_29501__$1;
(statearr_29522_29555[(2)] = inst_29487);

(statearr_29522_29555[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (2))){
var state_29501__$1 = state_29501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29501__$1,(4),in$);
} else {
if((state_val_29502 === (23))){
var inst_29495 = (state_29501[(2)]);
var state_29501__$1 = state_29501;
var statearr_29523_29556 = state_29501__$1;
(statearr_29523_29556[(2)] = inst_29495);

(statearr_29523_29556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (19))){
var inst_29482 = (state_29501[(2)]);
var state_29501__$1 = state_29501;
var statearr_29524_29557 = state_29501__$1;
(statearr_29524_29557[(2)] = inst_29482);

(statearr_29524_29557[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (11))){
var inst_29467 = (state_29501[(7)]);
var inst_29453 = (state_29501[(9)]);
var inst_29467__$1 = cljs.core.seq.call(null,inst_29453);
var state_29501__$1 = (function (){var statearr_29525 = state_29501;
(statearr_29525[(7)] = inst_29467__$1);

return statearr_29525;
})();
if(inst_29467__$1){
var statearr_29526_29558 = state_29501__$1;
(statearr_29526_29558[(1)] = (14));

} else {
var statearr_29527_29559 = state_29501__$1;
(statearr_29527_29559[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (9))){
var inst_29489 = (state_29501[(2)]);
var inst_29490 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29501__$1 = (function (){var statearr_29528 = state_29501;
(statearr_29528[(15)] = inst_29489);

return statearr_29528;
})();
if(cljs.core.truth_(inst_29490)){
var statearr_29529_29560 = state_29501__$1;
(statearr_29529_29560[(1)] = (21));

} else {
var statearr_29530_29561 = state_29501__$1;
(statearr_29530_29561[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (5))){
var inst_29445 = cljs.core.async.close_BANG_.call(null,out);
var state_29501__$1 = state_29501;
var statearr_29531_29562 = state_29501__$1;
(statearr_29531_29562[(2)] = inst_29445);

(statearr_29531_29562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (14))){
var inst_29467 = (state_29501[(7)]);
var inst_29469 = cljs.core.chunked_seq_QMARK_.call(null,inst_29467);
var state_29501__$1 = state_29501;
if(inst_29469){
var statearr_29532_29563 = state_29501__$1;
(statearr_29532_29563[(1)] = (17));

} else {
var statearr_29533_29564 = state_29501__$1;
(statearr_29533_29564[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (16))){
var inst_29485 = (state_29501[(2)]);
var state_29501__$1 = state_29501;
var statearr_29534_29565 = state_29501__$1;
(statearr_29534_29565[(2)] = inst_29485);

(statearr_29534_29565[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29502 === (10))){
var inst_29454 = (state_29501[(8)]);
var inst_29456 = (state_29501[(12)]);
var inst_29461 = cljs.core._nth.call(null,inst_29454,inst_29456);
var state_29501__$1 = state_29501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29501__$1,(13),out,inst_29461);
} else {
if((state_val_29502 === (18))){
var inst_29467 = (state_29501[(7)]);
var inst_29476 = cljs.core.first.call(null,inst_29467);
var state_29501__$1 = state_29501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29501__$1,(20),out,inst_29476);
} else {
if((state_val_29502 === (8))){
var inst_29455 = (state_29501[(10)]);
var inst_29456 = (state_29501[(12)]);
var inst_29458 = (inst_29456 < inst_29455);
var inst_29459 = inst_29458;
var state_29501__$1 = state_29501;
if(cljs.core.truth_(inst_29459)){
var statearr_29535_29566 = state_29501__$1;
(statearr_29535_29566[(1)] = (10));

} else {
var statearr_29536_29567 = state_29501__$1;
(statearr_29536_29567[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23281__auto__))
;
return ((function (switch__23216__auto__,c__23281__auto__){
return (function() {
var state_machine__23217__auto__ = null;
var state_machine__23217__auto____0 = (function (){
var statearr_29540 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29540[(0)] = state_machine__23217__auto__);

(statearr_29540[(1)] = (1));

return statearr_29540;
});
var state_machine__23217__auto____1 = (function (state_29501){
while(true){
var ret_value__23218__auto__ = (function (){try{while(true){
var result__23219__auto__ = switch__23216__auto__.call(null,state_29501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23219__auto__;
}
break;
}
}catch (e29541){if((e29541 instanceof Object)){
var ex__23220__auto__ = e29541;
var statearr_29542_29568 = state_29501;
(statearr_29542_29568[(5)] = ex__23220__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29569 = state_29501;
state_29501 = G__29569;
continue;
} else {
return ret_value__23218__auto__;
}
break;
}
});
state_machine__23217__auto__ = function(state_29501){
switch(arguments.length){
case 0:
return state_machine__23217__auto____0.call(this);
case 1:
return state_machine__23217__auto____1.call(this,state_29501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23217__auto____0;
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23217__auto____1;
return state_machine__23217__auto__;
})()
;})(switch__23216__auto__,c__23281__auto__))
})();
var state__23283__auto__ = (function (){var statearr_29543 = f__23282__auto__.call(null);
(statearr_29543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23281__auto__);

return statearr_29543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23283__auto__);
});})(c__23281__auto__))
);

return c__23281__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__23281__auto___29664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23281__auto___29664){
return (function (){
var f__23282__auto__ = (function (){var switch__23216__auto__ = ((function (c__23281__auto___29664){
return (function (state_29640){
var state_val_29641 = (state_29640[(1)]);
if((state_val_29641 === (7))){
var inst_29636 = (state_29640[(2)]);
var state_29640__$1 = state_29640;
var statearr_29642_29665 = state_29640__$1;
(statearr_29642_29665[(2)] = inst_29636);

(statearr_29642_29665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (1))){
var state_29640__$1 = state_29640;
var statearr_29643_29666 = state_29640__$1;
(statearr_29643_29666[(2)] = null);

(statearr_29643_29666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (4))){
var inst_29619 = (state_29640[(7)]);
var inst_29619__$1 = (state_29640[(2)]);
var inst_29620 = (inst_29619__$1 == null);
var state_29640__$1 = (function (){var statearr_29644 = state_29640;
(statearr_29644[(7)] = inst_29619__$1);

return statearr_29644;
})();
if(cljs.core.truth_(inst_29620)){
var statearr_29645_29667 = state_29640__$1;
(statearr_29645_29667[(1)] = (5));

} else {
var statearr_29646_29668 = state_29640__$1;
(statearr_29646_29668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (13))){
var state_29640__$1 = state_29640;
var statearr_29647_29669 = state_29640__$1;
(statearr_29647_29669[(2)] = null);

(statearr_29647_29669[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (6))){
var inst_29619 = (state_29640[(7)]);
var state_29640__$1 = state_29640;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29640__$1,(11),to,inst_29619);
} else {
if((state_val_29641 === (3))){
var inst_29638 = (state_29640[(2)]);
var state_29640__$1 = state_29640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29640__$1,inst_29638);
} else {
if((state_val_29641 === (12))){
var state_29640__$1 = state_29640;
var statearr_29648_29670 = state_29640__$1;
(statearr_29648_29670[(2)] = null);

(statearr_29648_29670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (2))){
var state_29640__$1 = state_29640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29640__$1,(4),from);
} else {
if((state_val_29641 === (11))){
var inst_29629 = (state_29640[(2)]);
var state_29640__$1 = state_29640;
if(cljs.core.truth_(inst_29629)){
var statearr_29649_29671 = state_29640__$1;
(statearr_29649_29671[(1)] = (12));

} else {
var statearr_29650_29672 = state_29640__$1;
(statearr_29650_29672[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (9))){
var state_29640__$1 = state_29640;
var statearr_29651_29673 = state_29640__$1;
(statearr_29651_29673[(2)] = null);

(statearr_29651_29673[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (5))){
var state_29640__$1 = state_29640;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29652_29674 = state_29640__$1;
(statearr_29652_29674[(1)] = (8));

} else {
var statearr_29653_29675 = state_29640__$1;
(statearr_29653_29675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (14))){
var inst_29634 = (state_29640[(2)]);
var state_29640__$1 = state_29640;
var statearr_29654_29676 = state_29640__$1;
(statearr_29654_29676[(2)] = inst_29634);

(statearr_29654_29676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (10))){
var inst_29626 = (state_29640[(2)]);
var state_29640__$1 = state_29640;
var statearr_29655_29677 = state_29640__$1;
(statearr_29655_29677[(2)] = inst_29626);

(statearr_29655_29677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (8))){
var inst_29623 = cljs.core.async.close_BANG_.call(null,to);
var state_29640__$1 = state_29640;
var statearr_29656_29678 = state_29640__$1;
(statearr_29656_29678[(2)] = inst_29623);

(statearr_29656_29678[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23281__auto___29664))
;
return ((function (switch__23216__auto__,c__23281__auto___29664){
return (function() {
var state_machine__23217__auto__ = null;
var state_machine__23217__auto____0 = (function (){
var statearr_29660 = [null,null,null,null,null,null,null,null];
(statearr_29660[(0)] = state_machine__23217__auto__);

(statearr_29660[(1)] = (1));

return statearr_29660;
});
var state_machine__23217__auto____1 = (function (state_29640){
while(true){
var ret_value__23218__auto__ = (function (){try{while(true){
var result__23219__auto__ = switch__23216__auto__.call(null,state_29640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23219__auto__;
}
break;
}
}catch (e29661){if((e29661 instanceof Object)){
var ex__23220__auto__ = e29661;
var statearr_29662_29679 = state_29640;
(statearr_29662_29679[(5)] = ex__23220__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29680 = state_29640;
state_29640 = G__29680;
continue;
} else {
return ret_value__23218__auto__;
}
break;
}
});
state_machine__23217__auto__ = function(state_29640){
switch(arguments.length){
case 0:
return state_machine__23217__auto____0.call(this);
case 1:
return state_machine__23217__auto____1.call(this,state_29640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23217__auto____0;
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23217__auto____1;
return state_machine__23217__auto__;
})()
;})(switch__23216__auto__,c__23281__auto___29664))
})();
var state__23283__auto__ = (function (){var statearr_29663 = f__23282__auto__.call(null);
(statearr_29663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23281__auto___29664);

return statearr_29663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23283__auto__);
});})(c__23281__auto___29664))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23281__auto___29781 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23281__auto___29781,tc,fc){
return (function (){
var f__23282__auto__ = (function (){var switch__23216__auto__ = ((function (c__23281__auto___29781,tc,fc){
return (function (state_29756){
var state_val_29757 = (state_29756[(1)]);
if((state_val_29757 === (7))){
var inst_29752 = (state_29756[(2)]);
var state_29756__$1 = state_29756;
var statearr_29758_29782 = state_29756__$1;
(statearr_29758_29782[(2)] = inst_29752);

(statearr_29758_29782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29757 === (1))){
var state_29756__$1 = state_29756;
var statearr_29759_29783 = state_29756__$1;
(statearr_29759_29783[(2)] = null);

(statearr_29759_29783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29757 === (4))){
var inst_29733 = (state_29756[(7)]);
var inst_29733__$1 = (state_29756[(2)]);
var inst_29734 = (inst_29733__$1 == null);
var state_29756__$1 = (function (){var statearr_29760 = state_29756;
(statearr_29760[(7)] = inst_29733__$1);

return statearr_29760;
})();
if(cljs.core.truth_(inst_29734)){
var statearr_29761_29784 = state_29756__$1;
(statearr_29761_29784[(1)] = (5));

} else {
var statearr_29762_29785 = state_29756__$1;
(statearr_29762_29785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29757 === (13))){
var state_29756__$1 = state_29756;
var statearr_29763_29786 = state_29756__$1;
(statearr_29763_29786[(2)] = null);

(statearr_29763_29786[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29757 === (6))){
var inst_29733 = (state_29756[(7)]);
var inst_29739 = p.call(null,inst_29733);
var state_29756__$1 = state_29756;
if(cljs.core.truth_(inst_29739)){
var statearr_29764_29787 = state_29756__$1;
(statearr_29764_29787[(1)] = (9));

} else {
var statearr_29765_29788 = state_29756__$1;
(statearr_29765_29788[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29757 === (3))){
var inst_29754 = (state_29756[(2)]);
var state_29756__$1 = state_29756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29756__$1,inst_29754);
} else {
if((state_val_29757 === (12))){
var state_29756__$1 = state_29756;
var statearr_29766_29789 = state_29756__$1;
(statearr_29766_29789[(2)] = null);

(statearr_29766_29789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29757 === (2))){
var state_29756__$1 = state_29756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29756__$1,(4),ch);
} else {
if((state_val_29757 === (11))){
var inst_29733 = (state_29756[(7)]);
var inst_29743 = (state_29756[(2)]);
var state_29756__$1 = state_29756;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29756__$1,(8),inst_29743,inst_29733);
} else {
if((state_val_29757 === (9))){
var state_29756__$1 = state_29756;
var statearr_29767_29790 = state_29756__$1;
(statearr_29767_29790[(2)] = tc);

(statearr_29767_29790[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29757 === (5))){
var inst_29736 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29737 = cljs.core.async.close_BANG_.call(null,fc);
var state_29756__$1 = (function (){var statearr_29768 = state_29756;
(statearr_29768[(8)] = inst_29736);

return statearr_29768;
})();
var statearr_29769_29791 = state_29756__$1;
(statearr_29769_29791[(2)] = inst_29737);

(statearr_29769_29791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29757 === (14))){
var inst_29750 = (state_29756[(2)]);
var state_29756__$1 = state_29756;
var statearr_29770_29792 = state_29756__$1;
(statearr_29770_29792[(2)] = inst_29750);

(statearr_29770_29792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29757 === (10))){
var state_29756__$1 = state_29756;
var statearr_29771_29793 = state_29756__$1;
(statearr_29771_29793[(2)] = fc);

(statearr_29771_29793[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29757 === (8))){
var inst_29745 = (state_29756[(2)]);
var state_29756__$1 = state_29756;
if(cljs.core.truth_(inst_29745)){
var statearr_29772_29794 = state_29756__$1;
(statearr_29772_29794[(1)] = (12));

} else {
var statearr_29773_29795 = state_29756__$1;
(statearr_29773_29795[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23281__auto___29781,tc,fc))
;
return ((function (switch__23216__auto__,c__23281__auto___29781,tc,fc){
return (function() {
var state_machine__23217__auto__ = null;
var state_machine__23217__auto____0 = (function (){
var statearr_29777 = [null,null,null,null,null,null,null,null,null];
(statearr_29777[(0)] = state_machine__23217__auto__);

(statearr_29777[(1)] = (1));

return statearr_29777;
});
var state_machine__23217__auto____1 = (function (state_29756){
while(true){
var ret_value__23218__auto__ = (function (){try{while(true){
var result__23219__auto__ = switch__23216__auto__.call(null,state_29756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23219__auto__;
}
break;
}
}catch (e29778){if((e29778 instanceof Object)){
var ex__23220__auto__ = e29778;
var statearr_29779_29796 = state_29756;
(statearr_29779_29796[(5)] = ex__23220__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29797 = state_29756;
state_29756 = G__29797;
continue;
} else {
return ret_value__23218__auto__;
}
break;
}
});
state_machine__23217__auto__ = function(state_29756){
switch(arguments.length){
case 0:
return state_machine__23217__auto____0.call(this);
case 1:
return state_machine__23217__auto____1.call(this,state_29756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23217__auto____0;
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23217__auto____1;
return state_machine__23217__auto__;
})()
;})(switch__23216__auto__,c__23281__auto___29781,tc,fc))
})();
var state__23283__auto__ = (function (){var statearr_29780 = f__23282__auto__.call(null);
(statearr_29780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23281__auto___29781);

return statearr_29780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23283__auto__);
});})(c__23281__auto___29781,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__23281__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23281__auto__){
return (function (){
var f__23282__auto__ = (function (){var switch__23216__auto__ = ((function (c__23281__auto__){
return (function (state_29844){
var state_val_29845 = (state_29844[(1)]);
if((state_val_29845 === (7))){
var inst_29840 = (state_29844[(2)]);
var state_29844__$1 = state_29844;
var statearr_29846_29862 = state_29844__$1;
(statearr_29846_29862[(2)] = inst_29840);

(statearr_29846_29862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29845 === (6))){
var inst_29833 = (state_29844[(7)]);
var inst_29830 = (state_29844[(8)]);
var inst_29837 = f.call(null,inst_29830,inst_29833);
var inst_29830__$1 = inst_29837;
var state_29844__$1 = (function (){var statearr_29847 = state_29844;
(statearr_29847[(8)] = inst_29830__$1);

return statearr_29847;
})();
var statearr_29848_29863 = state_29844__$1;
(statearr_29848_29863[(2)] = null);

(statearr_29848_29863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29845 === (5))){
var inst_29830 = (state_29844[(8)]);
var state_29844__$1 = state_29844;
var statearr_29849_29864 = state_29844__$1;
(statearr_29849_29864[(2)] = inst_29830);

(statearr_29849_29864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29845 === (4))){
var inst_29833 = (state_29844[(7)]);
var inst_29833__$1 = (state_29844[(2)]);
var inst_29834 = (inst_29833__$1 == null);
var state_29844__$1 = (function (){var statearr_29850 = state_29844;
(statearr_29850[(7)] = inst_29833__$1);

return statearr_29850;
})();
if(cljs.core.truth_(inst_29834)){
var statearr_29851_29865 = state_29844__$1;
(statearr_29851_29865[(1)] = (5));

} else {
var statearr_29852_29866 = state_29844__$1;
(statearr_29852_29866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29845 === (3))){
var inst_29842 = (state_29844[(2)]);
var state_29844__$1 = state_29844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29844__$1,inst_29842);
} else {
if((state_val_29845 === (2))){
var state_29844__$1 = state_29844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29844__$1,(4),ch);
} else {
if((state_val_29845 === (1))){
var inst_29830 = init;
var state_29844__$1 = (function (){var statearr_29853 = state_29844;
(statearr_29853[(8)] = inst_29830);

return statearr_29853;
})();
var statearr_29854_29867 = state_29844__$1;
(statearr_29854_29867[(2)] = null);

(statearr_29854_29867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__23281__auto__))
;
return ((function (switch__23216__auto__,c__23281__auto__){
return (function() {
var state_machine__23217__auto__ = null;
var state_machine__23217__auto____0 = (function (){
var statearr_29858 = [null,null,null,null,null,null,null,null,null];
(statearr_29858[(0)] = state_machine__23217__auto__);

(statearr_29858[(1)] = (1));

return statearr_29858;
});
var state_machine__23217__auto____1 = (function (state_29844){
while(true){
var ret_value__23218__auto__ = (function (){try{while(true){
var result__23219__auto__ = switch__23216__auto__.call(null,state_29844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23219__auto__;
}
break;
}
}catch (e29859){if((e29859 instanceof Object)){
var ex__23220__auto__ = e29859;
var statearr_29860_29868 = state_29844;
(statearr_29860_29868[(5)] = ex__23220__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29869 = state_29844;
state_29844 = G__29869;
continue;
} else {
return ret_value__23218__auto__;
}
break;
}
});
state_machine__23217__auto__ = function(state_29844){
switch(arguments.length){
case 0:
return state_machine__23217__auto____0.call(this);
case 1:
return state_machine__23217__auto____1.call(this,state_29844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23217__auto____0;
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23217__auto____1;
return state_machine__23217__auto__;
})()
;})(switch__23216__auto__,c__23281__auto__))
})();
var state__23283__auto__ = (function (){var statearr_29861 = f__23282__auto__.call(null);
(statearr_29861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23281__auto__);

return statearr_29861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23283__auto__);
});})(c__23281__auto__))
);

return c__23281__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__23281__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23281__auto__){
return (function (){
var f__23282__auto__ = (function (){var switch__23216__auto__ = ((function (c__23281__auto__){
return (function (state_29943){
var state_val_29944 = (state_29943[(1)]);
if((state_val_29944 === (7))){
var inst_29925 = (state_29943[(2)]);
var state_29943__$1 = state_29943;
var statearr_29945_29968 = state_29943__$1;
(statearr_29945_29968[(2)] = inst_29925);

(statearr_29945_29968[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (1))){
var inst_29919 = cljs.core.seq.call(null,coll);
var inst_29920 = inst_29919;
var state_29943__$1 = (function (){var statearr_29946 = state_29943;
(statearr_29946[(7)] = inst_29920);

return statearr_29946;
})();
var statearr_29947_29969 = state_29943__$1;
(statearr_29947_29969[(2)] = null);

(statearr_29947_29969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (4))){
var inst_29920 = (state_29943[(7)]);
var inst_29923 = cljs.core.first.call(null,inst_29920);
var state_29943__$1 = state_29943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29943__$1,(7),ch,inst_29923);
} else {
if((state_val_29944 === (13))){
var inst_29937 = (state_29943[(2)]);
var state_29943__$1 = state_29943;
var statearr_29948_29970 = state_29943__$1;
(statearr_29948_29970[(2)] = inst_29937);

(statearr_29948_29970[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (6))){
var inst_29928 = (state_29943[(2)]);
var state_29943__$1 = state_29943;
if(cljs.core.truth_(inst_29928)){
var statearr_29949_29971 = state_29943__$1;
(statearr_29949_29971[(1)] = (8));

} else {
var statearr_29950_29972 = state_29943__$1;
(statearr_29950_29972[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (3))){
var inst_29941 = (state_29943[(2)]);
var state_29943__$1 = state_29943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29943__$1,inst_29941);
} else {
if((state_val_29944 === (12))){
var state_29943__$1 = state_29943;
var statearr_29951_29973 = state_29943__$1;
(statearr_29951_29973[(2)] = null);

(statearr_29951_29973[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (2))){
var inst_29920 = (state_29943[(7)]);
var state_29943__$1 = state_29943;
if(cljs.core.truth_(inst_29920)){
var statearr_29952_29974 = state_29943__$1;
(statearr_29952_29974[(1)] = (4));

} else {
var statearr_29953_29975 = state_29943__$1;
(statearr_29953_29975[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (11))){
var inst_29934 = cljs.core.async.close_BANG_.call(null,ch);
var state_29943__$1 = state_29943;
var statearr_29954_29976 = state_29943__$1;
(statearr_29954_29976[(2)] = inst_29934);

(statearr_29954_29976[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (9))){
var state_29943__$1 = state_29943;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29955_29977 = state_29943__$1;
(statearr_29955_29977[(1)] = (11));

} else {
var statearr_29956_29978 = state_29943__$1;
(statearr_29956_29978[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (5))){
var inst_29920 = (state_29943[(7)]);
var state_29943__$1 = state_29943;
var statearr_29957_29979 = state_29943__$1;
(statearr_29957_29979[(2)] = inst_29920);

(statearr_29957_29979[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (10))){
var inst_29939 = (state_29943[(2)]);
var state_29943__$1 = state_29943;
var statearr_29958_29980 = state_29943__$1;
(statearr_29958_29980[(2)] = inst_29939);

(statearr_29958_29980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (8))){
var inst_29920 = (state_29943[(7)]);
var inst_29930 = cljs.core.next.call(null,inst_29920);
var inst_29920__$1 = inst_29930;
var state_29943__$1 = (function (){var statearr_29959 = state_29943;
(statearr_29959[(7)] = inst_29920__$1);

return statearr_29959;
})();
var statearr_29960_29981 = state_29943__$1;
(statearr_29960_29981[(2)] = null);

(statearr_29960_29981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23281__auto__))
;
return ((function (switch__23216__auto__,c__23281__auto__){
return (function() {
var state_machine__23217__auto__ = null;
var state_machine__23217__auto____0 = (function (){
var statearr_29964 = [null,null,null,null,null,null,null,null];
(statearr_29964[(0)] = state_machine__23217__auto__);

(statearr_29964[(1)] = (1));

return statearr_29964;
});
var state_machine__23217__auto____1 = (function (state_29943){
while(true){
var ret_value__23218__auto__ = (function (){try{while(true){
var result__23219__auto__ = switch__23216__auto__.call(null,state_29943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23219__auto__;
}
break;
}
}catch (e29965){if((e29965 instanceof Object)){
var ex__23220__auto__ = e29965;
var statearr_29966_29982 = state_29943;
(statearr_29966_29982[(5)] = ex__23220__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29983 = state_29943;
state_29943 = G__29983;
continue;
} else {
return ret_value__23218__auto__;
}
break;
}
});
state_machine__23217__auto__ = function(state_29943){
switch(arguments.length){
case 0:
return state_machine__23217__auto____0.call(this);
case 1:
return state_machine__23217__auto____1.call(this,state_29943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23217__auto____0;
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23217__auto____1;
return state_machine__23217__auto__;
})()
;})(switch__23216__auto__,c__23281__auto__))
})();
var state__23283__auto__ = (function (){var statearr_29967 = f__23282__auto__.call(null);
(statearr_29967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23281__auto__);

return statearr_29967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23283__auto__);
});})(c__23281__auto__))
);

return c__23281__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj29985 = {};
return obj29985;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__20721__auto__ = _;
if(and__20721__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__20721__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__21377__auto__ = (((_ == null))?null:_);
return (function (){var or__20733__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__21377__auto__)]);
if(or__20733__auto__){
return or__20733__auto__;
} else {
var or__20733__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__20733__auto____$1){
return or__20733__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj29987 = {};
return obj29987;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__20721__auto__ = m;
if(and__20721__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__20721__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__21377__auto__ = (((m == null))?null:m);
return (function (){var or__20733__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__21377__auto__)]);
if(or__20733__auto__){
return or__20733__auto__;
} else {
var or__20733__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__20733__auto____$1){
return or__20733__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__20721__auto__ = m;
if(and__20721__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__20721__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__21377__auto__ = (((m == null))?null:m);
return (function (){var or__20733__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__21377__auto__)]);
if(or__20733__auto__){
return or__20733__auto__;
} else {
var or__20733__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__20733__auto____$1){
return or__20733__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__20721__auto__ = m;
if(and__20721__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__20721__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__21377__auto__ = (((m == null))?null:m);
return (function (){var or__20733__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__21377__auto__)]);
if(or__20733__auto__){
return or__20733__auto__;
} else {
var or__20733__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__20733__auto____$1){
return or__20733__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t30209 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30209 = (function (cs,ch,mult,meta30210){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta30210 = meta30210;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30209.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t30209.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t30209.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t30209.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t30209.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30209.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t30209.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30211){
var self__ = this;
var _30211__$1 = this;
return self__.meta30210;
});})(cs))
;

cljs.core.async.t30209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30211,meta30210__$1){
var self__ = this;
var _30211__$1 = this;
return (new cljs.core.async.t30209(self__.cs,self__.ch,self__.mult,meta30210__$1));
});})(cs))
;

cljs.core.async.t30209.cljs$lang$type = true;

cljs.core.async.t30209.cljs$lang$ctorStr = "cljs.core.async/t30209";

cljs.core.async.t30209.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__21320__auto__,writer__21321__auto__,opt__21322__auto__){
return cljs.core._write.call(null,writer__21321__auto__,"cljs.core.async/t30209");
});})(cs))
;

cljs.core.async.__GT_t30209 = ((function (cs){
return (function __GT_t30209(cs__$1,ch__$1,mult__$1,meta30210){
return (new cljs.core.async.t30209(cs__$1,ch__$1,mult__$1,meta30210));
});})(cs))
;

}

return (new cljs.core.async.t30209(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),443,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),436,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/albin/projects/vinculum/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23281__auto___30430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23281__auto___30430,cs,m,dchan,dctr,done){
return (function (){
var f__23282__auto__ = (function (){var switch__23216__auto__ = ((function (c__23281__auto___30430,cs,m,dchan,dctr,done){
return (function (state_30342){
var state_val_30343 = (state_30342[(1)]);
if((state_val_30343 === (7))){
var inst_30338 = (state_30342[(2)]);
var state_30342__$1 = state_30342;
var statearr_30344_30431 = state_30342__$1;
(statearr_30344_30431[(2)] = inst_30338);

(statearr_30344_30431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (20))){
var inst_30243 = (state_30342[(7)]);
var inst_30253 = cljs.core.first.call(null,inst_30243);
var inst_30254 = cljs.core.nth.call(null,inst_30253,(0),null);
var inst_30255 = cljs.core.nth.call(null,inst_30253,(1),null);
var state_30342__$1 = (function (){var statearr_30345 = state_30342;
(statearr_30345[(8)] = inst_30254);

return statearr_30345;
})();
if(cljs.core.truth_(inst_30255)){
var statearr_30346_30432 = state_30342__$1;
(statearr_30346_30432[(1)] = (22));

} else {
var statearr_30347_30433 = state_30342__$1;
(statearr_30347_30433[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (27))){
var inst_30285 = (state_30342[(9)]);
var inst_30214 = (state_30342[(10)]);
var inst_30290 = (state_30342[(11)]);
var inst_30283 = (state_30342[(12)]);
var inst_30290__$1 = cljs.core._nth.call(null,inst_30283,inst_30285);
var inst_30291 = cljs.core.async.put_BANG_.call(null,inst_30290__$1,inst_30214,done);
var state_30342__$1 = (function (){var statearr_30348 = state_30342;
(statearr_30348[(11)] = inst_30290__$1);

return statearr_30348;
})();
if(cljs.core.truth_(inst_30291)){
var statearr_30349_30434 = state_30342__$1;
(statearr_30349_30434[(1)] = (30));

} else {
var statearr_30350_30435 = state_30342__$1;
(statearr_30350_30435[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (1))){
var state_30342__$1 = state_30342;
var statearr_30351_30436 = state_30342__$1;
(statearr_30351_30436[(2)] = null);

(statearr_30351_30436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (24))){
var inst_30243 = (state_30342[(7)]);
var inst_30260 = (state_30342[(2)]);
var inst_30261 = cljs.core.next.call(null,inst_30243);
var inst_30223 = inst_30261;
var inst_30224 = null;
var inst_30225 = (0);
var inst_30226 = (0);
var state_30342__$1 = (function (){var statearr_30352 = state_30342;
(statearr_30352[(13)] = inst_30260);

(statearr_30352[(14)] = inst_30225);

(statearr_30352[(15)] = inst_30223);

(statearr_30352[(16)] = inst_30224);

(statearr_30352[(17)] = inst_30226);

return statearr_30352;
})();
var statearr_30353_30437 = state_30342__$1;
(statearr_30353_30437[(2)] = null);

(statearr_30353_30437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (39))){
var state_30342__$1 = state_30342;
var statearr_30357_30438 = state_30342__$1;
(statearr_30357_30438[(2)] = null);

(statearr_30357_30438[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (4))){
var inst_30214 = (state_30342[(10)]);
var inst_30214__$1 = (state_30342[(2)]);
var inst_30215 = (inst_30214__$1 == null);
var state_30342__$1 = (function (){var statearr_30358 = state_30342;
(statearr_30358[(10)] = inst_30214__$1);

return statearr_30358;
})();
if(cljs.core.truth_(inst_30215)){
var statearr_30359_30439 = state_30342__$1;
(statearr_30359_30439[(1)] = (5));

} else {
var statearr_30360_30440 = state_30342__$1;
(statearr_30360_30440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (15))){
var inst_30225 = (state_30342[(14)]);
var inst_30223 = (state_30342[(15)]);
var inst_30224 = (state_30342[(16)]);
var inst_30226 = (state_30342[(17)]);
var inst_30239 = (state_30342[(2)]);
var inst_30240 = (inst_30226 + (1));
var tmp30354 = inst_30225;
var tmp30355 = inst_30223;
var tmp30356 = inst_30224;
var inst_30223__$1 = tmp30355;
var inst_30224__$1 = tmp30356;
var inst_30225__$1 = tmp30354;
var inst_30226__$1 = inst_30240;
var state_30342__$1 = (function (){var statearr_30361 = state_30342;
(statearr_30361[(18)] = inst_30239);

(statearr_30361[(14)] = inst_30225__$1);

(statearr_30361[(15)] = inst_30223__$1);

(statearr_30361[(16)] = inst_30224__$1);

(statearr_30361[(17)] = inst_30226__$1);

return statearr_30361;
})();
var statearr_30362_30441 = state_30342__$1;
(statearr_30362_30441[(2)] = null);

(statearr_30362_30441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (21))){
var inst_30264 = (state_30342[(2)]);
var state_30342__$1 = state_30342;
var statearr_30366_30442 = state_30342__$1;
(statearr_30366_30442[(2)] = inst_30264);

(statearr_30366_30442[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (31))){
var inst_30290 = (state_30342[(11)]);
var inst_30294 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_30295 = cljs.core.async.untap_STAR_.call(null,m,inst_30290);
var state_30342__$1 = (function (){var statearr_30367 = state_30342;
(statearr_30367[(19)] = inst_30294);

return statearr_30367;
})();
var statearr_30368_30443 = state_30342__$1;
(statearr_30368_30443[(2)] = inst_30295);

(statearr_30368_30443[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (32))){
var inst_30285 = (state_30342[(9)]);
var inst_30282 = (state_30342[(20)]);
var inst_30283 = (state_30342[(12)]);
var inst_30284 = (state_30342[(21)]);
var inst_30297 = (state_30342[(2)]);
var inst_30298 = (inst_30285 + (1));
var tmp30363 = inst_30282;
var tmp30364 = inst_30283;
var tmp30365 = inst_30284;
var inst_30282__$1 = tmp30363;
var inst_30283__$1 = tmp30364;
var inst_30284__$1 = tmp30365;
var inst_30285__$1 = inst_30298;
var state_30342__$1 = (function (){var statearr_30369 = state_30342;
(statearr_30369[(9)] = inst_30285__$1);

(statearr_30369[(22)] = inst_30297);

(statearr_30369[(20)] = inst_30282__$1);

(statearr_30369[(12)] = inst_30283__$1);

(statearr_30369[(21)] = inst_30284__$1);

return statearr_30369;
})();
var statearr_30370_30444 = state_30342__$1;
(statearr_30370_30444[(2)] = null);

(statearr_30370_30444[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (40))){
var inst_30310 = (state_30342[(23)]);
var inst_30314 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_30315 = cljs.core.async.untap_STAR_.call(null,m,inst_30310);
var state_30342__$1 = (function (){var statearr_30371 = state_30342;
(statearr_30371[(24)] = inst_30314);

return statearr_30371;
})();
var statearr_30372_30445 = state_30342__$1;
(statearr_30372_30445[(2)] = inst_30315);

(statearr_30372_30445[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (33))){
var inst_30301 = (state_30342[(25)]);
var inst_30303 = cljs.core.chunked_seq_QMARK_.call(null,inst_30301);
var state_30342__$1 = state_30342;
if(inst_30303){
var statearr_30373_30446 = state_30342__$1;
(statearr_30373_30446[(1)] = (36));

} else {
var statearr_30374_30447 = state_30342__$1;
(statearr_30374_30447[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (13))){
var inst_30233 = (state_30342[(26)]);
var inst_30236 = cljs.core.async.close_BANG_.call(null,inst_30233);
var state_30342__$1 = state_30342;
var statearr_30375_30448 = state_30342__$1;
(statearr_30375_30448[(2)] = inst_30236);

(statearr_30375_30448[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (22))){
var inst_30254 = (state_30342[(8)]);
var inst_30257 = cljs.core.async.close_BANG_.call(null,inst_30254);
var state_30342__$1 = state_30342;
var statearr_30376_30449 = state_30342__$1;
(statearr_30376_30449[(2)] = inst_30257);

(statearr_30376_30449[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (36))){
var inst_30301 = (state_30342[(25)]);
var inst_30305 = cljs.core.chunk_first.call(null,inst_30301);
var inst_30306 = cljs.core.chunk_rest.call(null,inst_30301);
var inst_30307 = cljs.core.count.call(null,inst_30305);
var inst_30282 = inst_30306;
var inst_30283 = inst_30305;
var inst_30284 = inst_30307;
var inst_30285 = (0);
var state_30342__$1 = (function (){var statearr_30377 = state_30342;
(statearr_30377[(9)] = inst_30285);

(statearr_30377[(20)] = inst_30282);

(statearr_30377[(12)] = inst_30283);

(statearr_30377[(21)] = inst_30284);

return statearr_30377;
})();
var statearr_30378_30450 = state_30342__$1;
(statearr_30378_30450[(2)] = null);

(statearr_30378_30450[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (41))){
var inst_30301 = (state_30342[(25)]);
var inst_30317 = (state_30342[(2)]);
var inst_30318 = cljs.core.next.call(null,inst_30301);
var inst_30282 = inst_30318;
var inst_30283 = null;
var inst_30284 = (0);
var inst_30285 = (0);
var state_30342__$1 = (function (){var statearr_30379 = state_30342;
(statearr_30379[(9)] = inst_30285);

(statearr_30379[(27)] = inst_30317);

(statearr_30379[(20)] = inst_30282);

(statearr_30379[(12)] = inst_30283);

(statearr_30379[(21)] = inst_30284);

return statearr_30379;
})();
var statearr_30380_30451 = state_30342__$1;
(statearr_30380_30451[(2)] = null);

(statearr_30380_30451[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (43))){
var state_30342__$1 = state_30342;
var statearr_30381_30452 = state_30342__$1;
(statearr_30381_30452[(2)] = null);

(statearr_30381_30452[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (29))){
var inst_30326 = (state_30342[(2)]);
var state_30342__$1 = state_30342;
var statearr_30382_30453 = state_30342__$1;
(statearr_30382_30453[(2)] = inst_30326);

(statearr_30382_30453[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (44))){
var inst_30335 = (state_30342[(2)]);
var state_30342__$1 = (function (){var statearr_30383 = state_30342;
(statearr_30383[(28)] = inst_30335);

return statearr_30383;
})();
var statearr_30384_30454 = state_30342__$1;
(statearr_30384_30454[(2)] = null);

(statearr_30384_30454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (6))){
var inst_30274 = (state_30342[(29)]);
var inst_30273 = cljs.core.deref.call(null,cs);
var inst_30274__$1 = cljs.core.keys.call(null,inst_30273);
var inst_30275 = cljs.core.count.call(null,inst_30274__$1);
var inst_30276 = cljs.core.reset_BANG_.call(null,dctr,inst_30275);
var inst_30281 = cljs.core.seq.call(null,inst_30274__$1);
var inst_30282 = inst_30281;
var inst_30283 = null;
var inst_30284 = (0);
var inst_30285 = (0);
var state_30342__$1 = (function (){var statearr_30385 = state_30342;
(statearr_30385[(9)] = inst_30285);

(statearr_30385[(30)] = inst_30276);

(statearr_30385[(29)] = inst_30274__$1);

(statearr_30385[(20)] = inst_30282);

(statearr_30385[(12)] = inst_30283);

(statearr_30385[(21)] = inst_30284);

return statearr_30385;
})();
var statearr_30386_30455 = state_30342__$1;
(statearr_30386_30455[(2)] = null);

(statearr_30386_30455[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (28))){
var inst_30301 = (state_30342[(25)]);
var inst_30282 = (state_30342[(20)]);
var inst_30301__$1 = cljs.core.seq.call(null,inst_30282);
var state_30342__$1 = (function (){var statearr_30387 = state_30342;
(statearr_30387[(25)] = inst_30301__$1);

return statearr_30387;
})();
if(inst_30301__$1){
var statearr_30388_30456 = state_30342__$1;
(statearr_30388_30456[(1)] = (33));

} else {
var statearr_30389_30457 = state_30342__$1;
(statearr_30389_30457[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (25))){
var inst_30285 = (state_30342[(9)]);
var inst_30284 = (state_30342[(21)]);
var inst_30287 = (inst_30285 < inst_30284);
var inst_30288 = inst_30287;
var state_30342__$1 = state_30342;
if(cljs.core.truth_(inst_30288)){
var statearr_30390_30458 = state_30342__$1;
(statearr_30390_30458[(1)] = (27));

} else {
var statearr_30391_30459 = state_30342__$1;
(statearr_30391_30459[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (34))){
var state_30342__$1 = state_30342;
var statearr_30392_30460 = state_30342__$1;
(statearr_30392_30460[(2)] = null);

(statearr_30392_30460[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (17))){
var state_30342__$1 = state_30342;
var statearr_30393_30461 = state_30342__$1;
(statearr_30393_30461[(2)] = null);

(statearr_30393_30461[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (3))){
var inst_30340 = (state_30342[(2)]);
var state_30342__$1 = state_30342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30342__$1,inst_30340);
} else {
if((state_val_30343 === (12))){
var inst_30269 = (state_30342[(2)]);
var state_30342__$1 = state_30342;
var statearr_30394_30462 = state_30342__$1;
(statearr_30394_30462[(2)] = inst_30269);

(statearr_30394_30462[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (2))){
var state_30342__$1 = state_30342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30342__$1,(4),ch);
} else {
if((state_val_30343 === (23))){
var state_30342__$1 = state_30342;
var statearr_30395_30463 = state_30342__$1;
(statearr_30395_30463[(2)] = null);

(statearr_30395_30463[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (35))){
var inst_30324 = (state_30342[(2)]);
var state_30342__$1 = state_30342;
var statearr_30396_30464 = state_30342__$1;
(statearr_30396_30464[(2)] = inst_30324);

(statearr_30396_30464[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (19))){
var inst_30243 = (state_30342[(7)]);
var inst_30247 = cljs.core.chunk_first.call(null,inst_30243);
var inst_30248 = cljs.core.chunk_rest.call(null,inst_30243);
var inst_30249 = cljs.core.count.call(null,inst_30247);
var inst_30223 = inst_30248;
var inst_30224 = inst_30247;
var inst_30225 = inst_30249;
var inst_30226 = (0);
var state_30342__$1 = (function (){var statearr_30397 = state_30342;
(statearr_30397[(14)] = inst_30225);

(statearr_30397[(15)] = inst_30223);

(statearr_30397[(16)] = inst_30224);

(statearr_30397[(17)] = inst_30226);

return statearr_30397;
})();
var statearr_30398_30465 = state_30342__$1;
(statearr_30398_30465[(2)] = null);

(statearr_30398_30465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (11))){
var inst_30243 = (state_30342[(7)]);
var inst_30223 = (state_30342[(15)]);
var inst_30243__$1 = cljs.core.seq.call(null,inst_30223);
var state_30342__$1 = (function (){var statearr_30399 = state_30342;
(statearr_30399[(7)] = inst_30243__$1);

return statearr_30399;
})();
if(inst_30243__$1){
var statearr_30400_30466 = state_30342__$1;
(statearr_30400_30466[(1)] = (16));

} else {
var statearr_30401_30467 = state_30342__$1;
(statearr_30401_30467[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (9))){
var inst_30271 = (state_30342[(2)]);
var state_30342__$1 = state_30342;
var statearr_30402_30468 = state_30342__$1;
(statearr_30402_30468[(2)] = inst_30271);

(statearr_30402_30468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (5))){
var inst_30221 = cljs.core.deref.call(null,cs);
var inst_30222 = cljs.core.seq.call(null,inst_30221);
var inst_30223 = inst_30222;
var inst_30224 = null;
var inst_30225 = (0);
var inst_30226 = (0);
var state_30342__$1 = (function (){var statearr_30403 = state_30342;
(statearr_30403[(14)] = inst_30225);

(statearr_30403[(15)] = inst_30223);

(statearr_30403[(16)] = inst_30224);

(statearr_30403[(17)] = inst_30226);

return statearr_30403;
})();
var statearr_30404_30469 = state_30342__$1;
(statearr_30404_30469[(2)] = null);

(statearr_30404_30469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (14))){
var state_30342__$1 = state_30342;
var statearr_30405_30470 = state_30342__$1;
(statearr_30405_30470[(2)] = null);

(statearr_30405_30470[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (45))){
var inst_30332 = (state_30342[(2)]);
var state_30342__$1 = state_30342;
var statearr_30406_30471 = state_30342__$1;
(statearr_30406_30471[(2)] = inst_30332);

(statearr_30406_30471[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (26))){
var inst_30274 = (state_30342[(29)]);
var inst_30328 = (state_30342[(2)]);
var inst_30329 = cljs.core.seq.call(null,inst_30274);
var state_30342__$1 = (function (){var statearr_30407 = state_30342;
(statearr_30407[(31)] = inst_30328);

return statearr_30407;
})();
if(inst_30329){
var statearr_30408_30472 = state_30342__$1;
(statearr_30408_30472[(1)] = (42));

} else {
var statearr_30409_30473 = state_30342__$1;
(statearr_30409_30473[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (16))){
var inst_30243 = (state_30342[(7)]);
var inst_30245 = cljs.core.chunked_seq_QMARK_.call(null,inst_30243);
var state_30342__$1 = state_30342;
if(inst_30245){
var statearr_30410_30474 = state_30342__$1;
(statearr_30410_30474[(1)] = (19));

} else {
var statearr_30411_30475 = state_30342__$1;
(statearr_30411_30475[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (38))){
var inst_30321 = (state_30342[(2)]);
var state_30342__$1 = state_30342;
var statearr_30412_30476 = state_30342__$1;
(statearr_30412_30476[(2)] = inst_30321);

(statearr_30412_30476[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (30))){
var state_30342__$1 = state_30342;
var statearr_30413_30477 = state_30342__$1;
(statearr_30413_30477[(2)] = null);

(statearr_30413_30477[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (10))){
var inst_30224 = (state_30342[(16)]);
var inst_30226 = (state_30342[(17)]);
var inst_30232 = cljs.core._nth.call(null,inst_30224,inst_30226);
var inst_30233 = cljs.core.nth.call(null,inst_30232,(0),null);
var inst_30234 = cljs.core.nth.call(null,inst_30232,(1),null);
var state_30342__$1 = (function (){var statearr_30414 = state_30342;
(statearr_30414[(26)] = inst_30233);

return statearr_30414;
})();
if(cljs.core.truth_(inst_30234)){
var statearr_30415_30478 = state_30342__$1;
(statearr_30415_30478[(1)] = (13));

} else {
var statearr_30416_30479 = state_30342__$1;
(statearr_30416_30479[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (18))){
var inst_30267 = (state_30342[(2)]);
var state_30342__$1 = state_30342;
var statearr_30417_30480 = state_30342__$1;
(statearr_30417_30480[(2)] = inst_30267);

(statearr_30417_30480[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (42))){
var state_30342__$1 = state_30342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30342__$1,(45),dchan);
} else {
if((state_val_30343 === (37))){
var inst_30301 = (state_30342[(25)]);
var inst_30214 = (state_30342[(10)]);
var inst_30310 = (state_30342[(23)]);
var inst_30310__$1 = cljs.core.first.call(null,inst_30301);
var inst_30311 = cljs.core.async.put_BANG_.call(null,inst_30310__$1,inst_30214,done);
var state_30342__$1 = (function (){var statearr_30418 = state_30342;
(statearr_30418[(23)] = inst_30310__$1);

return statearr_30418;
})();
if(cljs.core.truth_(inst_30311)){
var statearr_30419_30481 = state_30342__$1;
(statearr_30419_30481[(1)] = (39));

} else {
var statearr_30420_30482 = state_30342__$1;
(statearr_30420_30482[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30343 === (8))){
var inst_30225 = (state_30342[(14)]);
var inst_30226 = (state_30342[(17)]);
var inst_30228 = (inst_30226 < inst_30225);
var inst_30229 = inst_30228;
var state_30342__$1 = state_30342;
if(cljs.core.truth_(inst_30229)){
var statearr_30421_30483 = state_30342__$1;
(statearr_30421_30483[(1)] = (10));

} else {
var statearr_30422_30484 = state_30342__$1;
(statearr_30422_30484[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23281__auto___30430,cs,m,dchan,dctr,done))
;
return ((function (switch__23216__auto__,c__23281__auto___30430,cs,m,dchan,dctr,done){
return (function() {
var state_machine__23217__auto__ = null;
var state_machine__23217__auto____0 = (function (){
var statearr_30426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30426[(0)] = state_machine__23217__auto__);

(statearr_30426[(1)] = (1));

return statearr_30426;
});
var state_machine__23217__auto____1 = (function (state_30342){
while(true){
var ret_value__23218__auto__ = (function (){try{while(true){
var result__23219__auto__ = switch__23216__auto__.call(null,state_30342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23219__auto__;
}
break;
}
}catch (e30427){if((e30427 instanceof Object)){
var ex__23220__auto__ = e30427;
var statearr_30428_30485 = state_30342;
(statearr_30428_30485[(5)] = ex__23220__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30486 = state_30342;
state_30342 = G__30486;
continue;
} else {
return ret_value__23218__auto__;
}
break;
}
});
state_machine__23217__auto__ = function(state_30342){
switch(arguments.length){
case 0:
return state_machine__23217__auto____0.call(this);
case 1:
return state_machine__23217__auto____1.call(this,state_30342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23217__auto____0;
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23217__auto____1;
return state_machine__23217__auto__;
})()
;})(switch__23216__auto__,c__23281__auto___30430,cs,m,dchan,dctr,done))
})();
var state__23283__auto__ = (function (){var statearr_30429 = f__23282__auto__.call(null);
(statearr_30429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23281__auto___30430);

return statearr_30429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23283__auto__);
});})(c__23281__auto___30430,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj30488 = {};
return obj30488;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__20721__auto__ = m;
if(and__20721__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__20721__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__21377__auto__ = (((m == null))?null:m);
return (function (){var or__20733__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__21377__auto__)]);
if(or__20733__auto__){
return or__20733__auto__;
} else {
var or__20733__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__20733__auto____$1){
return or__20733__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__20721__auto__ = m;
if(and__20721__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__20721__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__21377__auto__ = (((m == null))?null:m);
return (function (){var or__20733__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__21377__auto__)]);
if(or__20733__auto__){
return or__20733__auto__;
} else {
var or__20733__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__20733__auto____$1){
return or__20733__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__20721__auto__ = m;
if(and__20721__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__20721__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__21377__auto__ = (((m == null))?null:m);
return (function (){var or__20733__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__21377__auto__)]);
if(or__20733__auto__){
return or__20733__auto__;
} else {
var or__20733__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__20733__auto____$1){
return or__20733__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__20721__auto__ = m;
if(and__20721__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__20721__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__21377__auto__ = (((m == null))?null:m);
return (function (){var or__20733__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__21377__auto__)]);
if(or__20733__auto__){
return or__20733__auto__;
} else {
var or__20733__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__20733__auto____$1){
return or__20733__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__20721__auto__ = m;
if(and__20721__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__20721__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__21377__auto__ = (((m == null))?null:m);
return (function (){var or__20733__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__21377__auto__)]);
if(or__20733__auto__){
return or__20733__auto__;
} else {
var or__20733__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__20733__auto____$1){
return or__20733__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t30608 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30608 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30609){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30609 = meta30609;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30608.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t30608.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30608.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30608.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30608.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30608.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30608.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30608.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30608.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30610){
var self__ = this;
var _30610__$1 = this;
return self__.meta30609;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30610,meta30609__$1){
var self__ = this;
var _30610__$1 = this;
return (new cljs.core.async.t30608(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30609__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t30608.cljs$lang$type = true;

cljs.core.async.t30608.cljs$lang$ctorStr = "cljs.core.async/t30608";

cljs.core.async.t30608.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__21320__auto__,writer__21321__auto__,opt__21322__auto__){
return cljs.core._write.call(null,writer__21321__auto__,"cljs.core.async/t30608");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t30608 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t30608(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30609){
return (new cljs.core.async.t30608(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30609));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t30608(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),545,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),534,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/albin/projects/vinculum/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__23281__auto___30727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23281__auto___30727,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23282__auto__ = (function (){var switch__23216__auto__ = ((function (c__23281__auto___30727,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30680){
var state_val_30681 = (state_30680[(1)]);
if((state_val_30681 === (7))){
var inst_30624 = (state_30680[(7)]);
var inst_30629 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30624);
var state_30680__$1 = state_30680;
var statearr_30682_30728 = state_30680__$1;
(statearr_30682_30728[(2)] = inst_30629);

(statearr_30682_30728[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30681 === (20))){
var inst_30639 = (state_30680[(8)]);
var state_30680__$1 = state_30680;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30680__$1,(23),out,inst_30639);
} else {
if((state_val_30681 === (1))){
var inst_30614 = (state_30680[(9)]);
var inst_30614__$1 = calc_state.call(null);
var inst_30615 = cljs.core.seq_QMARK_.call(null,inst_30614__$1);
var state_30680__$1 = (function (){var statearr_30683 = state_30680;
(statearr_30683[(9)] = inst_30614__$1);

return statearr_30683;
})();
if(inst_30615){
var statearr_30684_30729 = state_30680__$1;
(statearr_30684_30729[(1)] = (2));

} else {
var statearr_30685_30730 = state_30680__$1;
(statearr_30685_30730[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30681 === (24))){
var inst_30632 = (state_30680[(10)]);
var inst_30624 = inst_30632;
var state_30680__$1 = (function (){var statearr_30686 = state_30680;
(statearr_30686[(7)] = inst_30624);

return statearr_30686;
})();
var statearr_30687_30731 = state_30680__$1;
(statearr_30687_30731[(2)] = null);

(statearr_30687_30731[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30681 === (4))){
var inst_30614 = (state_30680[(9)]);
var inst_30620 = (state_30680[(2)]);
var inst_30621 = cljs.core.get.call(null,inst_30620,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30622 = cljs.core.get.call(null,inst_30620,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30623 = cljs.core.get.call(null,inst_30620,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30624 = inst_30614;
var state_30680__$1 = (function (){var statearr_30688 = state_30680;
(statearr_30688[(11)] = inst_30623);

(statearr_30688[(12)] = inst_30621);

(statearr_30688[(13)] = inst_30622);

(statearr_30688[(7)] = inst_30624);

return statearr_30688;
})();
var statearr_30689_30732 = state_30680__$1;
(statearr_30689_30732[(2)] = null);

(statearr_30689_30732[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30681 === (15))){
var state_30680__$1 = state_30680;
var statearr_30690_30733 = state_30680__$1;
(statearr_30690_30733[(2)] = null);

(statearr_30690_30733[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30681 === (21))){
var inst_30632 = (state_30680[(10)]);
var inst_30624 = inst_30632;
var state_30680__$1 = (function (){var statearr_30691 = state_30680;
(statearr_30691[(7)] = inst_30624);

return statearr_30691;
})();
var statearr_30692_30734 = state_30680__$1;
(statearr_30692_30734[(2)] = null);

(statearr_30692_30734[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30681 === (13))){
var inst_30676 = (state_30680[(2)]);
var state_30680__$1 = state_30680;
var statearr_30693_30735 = state_30680__$1;
(statearr_30693_30735[(2)] = inst_30676);

(statearr_30693_30735[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30681 === (22))){
var inst_30674 = (state_30680[(2)]);
var state_30680__$1 = state_30680;
var statearr_30694_30736 = state_30680__$1;
(statearr_30694_30736[(2)] = inst_30674);

(statearr_30694_30736[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30681 === (6))){
var inst_30678 = (state_30680[(2)]);
var state_30680__$1 = state_30680;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30680__$1,inst_30678);
} else {
if((state_val_30681 === (25))){
var state_30680__$1 = state_30680;
var statearr_30695_30737 = state_30680__$1;
(statearr_30695_30737[(2)] = null);

(statearr_30695_30737[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30681 === (17))){
var inst_30654 = (state_30680[(14)]);
var state_30680__$1 = state_30680;
var statearr_30696_30738 = state_30680__$1;
(statearr_30696_30738[(2)] = inst_30654);

(statearr_30696_30738[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30681 === (3))){
var inst_30614 = (state_30680[(9)]);
var state_30680__$1 = state_30680;
var statearr_30697_30739 = state_30680__$1;
(statearr_30697_30739[(2)] = inst_30614);

(statearr_30697_30739[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30681 === (12))){
var inst_30640 = (state_30680[(15)]);
var inst_30635 = (state_30680[(16)]);
var inst_30654 = (state_30680[(14)]);
var inst_30654__$1 = inst_30635.call(null,inst_30640);
var state_30680__$1 = (function (){var statearr_30698 = state_30680;
(statearr_30698[(14)] = inst_30654__$1);

return statearr_30698;
})();
if(cljs.core.truth_(inst_30654__$1)){
var statearr_30699_30740 = state_30680__$1;
(statearr_30699_30740[(1)] = (17));

} else {
var statearr_30700_30741 = state_30680__$1;
(statearr_30700_30741[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30681 === (2))){
var inst_30614 = (state_30680[(9)]);
var inst_30617 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30614);
var state_30680__$1 = state_30680;
var statearr_30701_30742 = state_30680__$1;
(statearr_30701_30742[(2)] = inst_30617);

(statearr_30701_30742[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30681 === (23))){
var inst_30665 = (state_30680[(2)]);
var state_30680__$1 = state_30680;
if(cljs.core.truth_(inst_30665)){
var statearr_30702_30743 = state_30680__$1;
(statearr_30702_30743[(1)] = (24));

} else {
var statearr_30703_30744 = state_30680__$1;
(statearr_30703_30744[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30681 === (19))){
var inst_30662 = (state_30680[(2)]);
var state_30680__$1 = state_30680;
if(cljs.core.truth_(inst_30662)){
var statearr_30704_30745 = state_30680__$1;
(statearr_30704_30745[(1)] = (20));

} else {
var statearr_30705_30746 = state_30680__$1;
(statearr_30705_30746[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30681 === (11))){
var inst_30639 = (state_30680[(8)]);
var inst_30645 = (inst_30639 == null);
var state_30680__$1 = state_30680;
if(cljs.core.truth_(inst_30645)){
var statearr_30706_30747 = state_30680__$1;
(statearr_30706_30747[(1)] = (14));

} else {
var statearr_30707_30748 = state_30680__$1;
(statearr_30707_30748[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30681 === (9))){
var inst_30632 = (state_30680[(10)]);
var inst_30632__$1 = (state_30680[(2)]);
var inst_30633 = cljs.core.get.call(null,inst_30632__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30634 = cljs.core.get.call(null,inst_30632__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30635 = cljs.core.get.call(null,inst_30632__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_30680__$1 = (function (){var statearr_30708 = state_30680;
(statearr_30708[(10)] = inst_30632__$1);

(statearr_30708[(16)] = inst_30635);

(statearr_30708[(17)] = inst_30634);

return statearr_30708;
})();
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_30680__$1,(10),inst_30633);
} else {
if((state_val_30681 === (5))){
var inst_30624 = (state_30680[(7)]);
var inst_30627 = cljs.core.seq_QMARK_.call(null,inst_30624);
var state_30680__$1 = state_30680;
if(inst_30627){
var statearr_30709_30749 = state_30680__$1;
(statearr_30709_30749[(1)] = (7));

} else {
var statearr_30710_30750 = state_30680__$1;
(statearr_30710_30750[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30681 === (14))){
var inst_30640 = (state_30680[(15)]);
var inst_30647 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30640);
var state_30680__$1 = state_30680;
var statearr_30711_30751 = state_30680__$1;
(statearr_30711_30751[(2)] = inst_30647);

(statearr_30711_30751[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30681 === (26))){
var inst_30670 = (state_30680[(2)]);
var state_30680__$1 = state_30680;
var statearr_30712_30752 = state_30680__$1;
(statearr_30712_30752[(2)] = inst_30670);

(statearr_30712_30752[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30681 === (16))){
var inst_30650 = (state_30680[(2)]);
var inst_30651 = calc_state.call(null);
var inst_30624 = inst_30651;
var state_30680__$1 = (function (){var statearr_30713 = state_30680;
(statearr_30713[(18)] = inst_30650);

(statearr_30713[(7)] = inst_30624);

return statearr_30713;
})();
var statearr_30714_30753 = state_30680__$1;
(statearr_30714_30753[(2)] = null);

(statearr_30714_30753[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30681 === (10))){
var inst_30639 = (state_30680[(8)]);
var inst_30640 = (state_30680[(15)]);
var inst_30638 = (state_30680[(2)]);
var inst_30639__$1 = cljs.core.nth.call(null,inst_30638,(0),null);
var inst_30640__$1 = cljs.core.nth.call(null,inst_30638,(1),null);
var inst_30641 = (inst_30639__$1 == null);
var inst_30642 = cljs.core._EQ_.call(null,inst_30640__$1,change);
var inst_30643 = (inst_30641) || (inst_30642);
var state_30680__$1 = (function (){var statearr_30715 = state_30680;
(statearr_30715[(8)] = inst_30639__$1);

(statearr_30715[(15)] = inst_30640__$1);

return statearr_30715;
})();
if(cljs.core.truth_(inst_30643)){
var statearr_30716_30754 = state_30680__$1;
(statearr_30716_30754[(1)] = (11));

} else {
var statearr_30717_30755 = state_30680__$1;
(statearr_30717_30755[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30681 === (18))){
var inst_30640 = (state_30680[(15)]);
var inst_30635 = (state_30680[(16)]);
var inst_30634 = (state_30680[(17)]);
var inst_30657 = cljs.core.empty_QMARK_.call(null,inst_30635);
var inst_30658 = inst_30634.call(null,inst_30640);
var inst_30659 = cljs.core.not.call(null,inst_30658);
var inst_30660 = (inst_30657) && (inst_30659);
var state_30680__$1 = state_30680;
var statearr_30718_30756 = state_30680__$1;
(statearr_30718_30756[(2)] = inst_30660);

(statearr_30718_30756[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30681 === (8))){
var inst_30624 = (state_30680[(7)]);
var state_30680__$1 = state_30680;
var statearr_30719_30757 = state_30680__$1;
(statearr_30719_30757[(2)] = inst_30624);

(statearr_30719_30757[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23281__auto___30727,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23216__auto__,c__23281__auto___30727,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__23217__auto__ = null;
var state_machine__23217__auto____0 = (function (){
var statearr_30723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30723[(0)] = state_machine__23217__auto__);

(statearr_30723[(1)] = (1));

return statearr_30723;
});
var state_machine__23217__auto____1 = (function (state_30680){
while(true){
var ret_value__23218__auto__ = (function (){try{while(true){
var result__23219__auto__ = switch__23216__auto__.call(null,state_30680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23219__auto__;
}
break;
}
}catch (e30724){if((e30724 instanceof Object)){
var ex__23220__auto__ = e30724;
var statearr_30725_30758 = state_30680;
(statearr_30725_30758[(5)] = ex__23220__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30759 = state_30680;
state_30680 = G__30759;
continue;
} else {
return ret_value__23218__auto__;
}
break;
}
});
state_machine__23217__auto__ = function(state_30680){
switch(arguments.length){
case 0:
return state_machine__23217__auto____0.call(this);
case 1:
return state_machine__23217__auto____1.call(this,state_30680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23217__auto____0;
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23217__auto____1;
return state_machine__23217__auto__;
})()
;})(switch__23216__auto__,c__23281__auto___30727,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23283__auto__ = (function (){var statearr_30726 = f__23282__auto__.call(null);
(statearr_30726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23281__auto___30727);

return statearr_30726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23283__auto__);
});})(c__23281__auto___30727,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj30761 = {};
return obj30761;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__20721__auto__ = p;
if(and__20721__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__20721__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__21377__auto__ = (((p == null))?null:p);
return (function (){var or__20733__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__21377__auto__)]);
if(or__20733__auto__){
return or__20733__auto__;
} else {
var or__20733__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__20733__auto____$1){
return or__20733__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__20721__auto__ = p;
if(and__20721__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__20721__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__21377__auto__ = (((p == null))?null:p);
return (function (){var or__20733__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__21377__auto__)]);
if(or__20733__auto__){
return or__20733__auto__;
} else {
var or__20733__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__20733__auto____$1){
return or__20733__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__20721__auto__ = p;
if(and__20721__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__20721__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__21377__auto__ = (((p == null))?null:p);
return (function (){var or__20733__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__21377__auto__)]);
if(or__20733__auto__){
return or__20733__auto__;
} else {
var or__20733__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__20733__auto____$1){
return or__20733__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__20721__auto__ = p;
if(and__20721__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__20721__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__21377__auto__ = (((p == null))?null:p);
return (function (){var or__20733__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__21377__auto__)]);
if(or__20733__auto__){
return or__20733__auto__;
} else {
var or__20733__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__20733__auto____$1){
return or__20733__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__20733__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__20733__auto__)){
return or__20733__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__20733__auto__,mults){
return (function (p1__30762_SHARP_){
if(cljs.core.truth_(p1__30762_SHARP_.call(null,topic))){
return p1__30762_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30762_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__20733__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t30885 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30885 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta30886){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta30886 = meta30886;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30885.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t30885.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t30885.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t30885.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t30885.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t30885.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t30885.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t30885.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30887){
var self__ = this;
var _30887__$1 = this;
return self__.meta30886;
});})(mults,ensure_mult))
;

cljs.core.async.t30885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30887,meta30886__$1){
var self__ = this;
var _30887__$1 = this;
return (new cljs.core.async.t30885(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta30886__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t30885.cljs$lang$type = true;

cljs.core.async.t30885.cljs$lang$ctorStr = "cljs.core.async/t30885";

cljs.core.async.t30885.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__21320__auto__,writer__21321__auto__,opt__21322__auto__){
return cljs.core._write.call(null,writer__21321__auto__,"cljs.core.async/t30885");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t30885 = ((function (mults,ensure_mult){
return (function __GT_t30885(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta30886){
return (new cljs.core.async.t30885(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta30886));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t30885(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),638,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),626,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/albin/projects/vinculum/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__23281__auto___31007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23281__auto___31007,mults,ensure_mult,p){
return (function (){
var f__23282__auto__ = (function (){var switch__23216__auto__ = ((function (c__23281__auto___31007,mults,ensure_mult,p){
return (function (state_30959){
var state_val_30960 = (state_30959[(1)]);
if((state_val_30960 === (7))){
var inst_30955 = (state_30959[(2)]);
var state_30959__$1 = state_30959;
var statearr_30961_31008 = state_30959__$1;
(statearr_30961_31008[(2)] = inst_30955);

(statearr_30961_31008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (20))){
var state_30959__$1 = state_30959;
var statearr_30962_31009 = state_30959__$1;
(statearr_30962_31009[(2)] = null);

(statearr_30962_31009[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (1))){
var state_30959__$1 = state_30959;
var statearr_30963_31010 = state_30959__$1;
(statearr_30963_31010[(2)] = null);

(statearr_30963_31010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (24))){
var inst_30938 = (state_30959[(7)]);
var inst_30947 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30938);
var state_30959__$1 = state_30959;
var statearr_30964_31011 = state_30959__$1;
(statearr_30964_31011[(2)] = inst_30947);

(statearr_30964_31011[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (4))){
var inst_30890 = (state_30959[(8)]);
var inst_30890__$1 = (state_30959[(2)]);
var inst_30891 = (inst_30890__$1 == null);
var state_30959__$1 = (function (){var statearr_30965 = state_30959;
(statearr_30965[(8)] = inst_30890__$1);

return statearr_30965;
})();
if(cljs.core.truth_(inst_30891)){
var statearr_30966_31012 = state_30959__$1;
(statearr_30966_31012[(1)] = (5));

} else {
var statearr_30967_31013 = state_30959__$1;
(statearr_30967_31013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (15))){
var inst_30932 = (state_30959[(2)]);
var state_30959__$1 = state_30959;
var statearr_30968_31014 = state_30959__$1;
(statearr_30968_31014[(2)] = inst_30932);

(statearr_30968_31014[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (21))){
var inst_30952 = (state_30959[(2)]);
var state_30959__$1 = (function (){var statearr_30969 = state_30959;
(statearr_30969[(9)] = inst_30952);

return statearr_30969;
})();
var statearr_30970_31015 = state_30959__$1;
(statearr_30970_31015[(2)] = null);

(statearr_30970_31015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (13))){
var inst_30914 = (state_30959[(10)]);
var inst_30916 = cljs.core.chunked_seq_QMARK_.call(null,inst_30914);
var state_30959__$1 = state_30959;
if(inst_30916){
var statearr_30971_31016 = state_30959__$1;
(statearr_30971_31016[(1)] = (16));

} else {
var statearr_30972_31017 = state_30959__$1;
(statearr_30972_31017[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (22))){
var inst_30944 = (state_30959[(2)]);
var state_30959__$1 = state_30959;
if(cljs.core.truth_(inst_30944)){
var statearr_30973_31018 = state_30959__$1;
(statearr_30973_31018[(1)] = (23));

} else {
var statearr_30974_31019 = state_30959__$1;
(statearr_30974_31019[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (6))){
var inst_30938 = (state_30959[(7)]);
var inst_30890 = (state_30959[(8)]);
var inst_30940 = (state_30959[(11)]);
var inst_30938__$1 = topic_fn.call(null,inst_30890);
var inst_30939 = cljs.core.deref.call(null,mults);
var inst_30940__$1 = cljs.core.get.call(null,inst_30939,inst_30938__$1);
var state_30959__$1 = (function (){var statearr_30975 = state_30959;
(statearr_30975[(7)] = inst_30938__$1);

(statearr_30975[(11)] = inst_30940__$1);

return statearr_30975;
})();
if(cljs.core.truth_(inst_30940__$1)){
var statearr_30976_31020 = state_30959__$1;
(statearr_30976_31020[(1)] = (19));

} else {
var statearr_30977_31021 = state_30959__$1;
(statearr_30977_31021[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (25))){
var inst_30949 = (state_30959[(2)]);
var state_30959__$1 = state_30959;
var statearr_30978_31022 = state_30959__$1;
(statearr_30978_31022[(2)] = inst_30949);

(statearr_30978_31022[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (17))){
var inst_30914 = (state_30959[(10)]);
var inst_30923 = cljs.core.first.call(null,inst_30914);
var inst_30924 = cljs.core.async.muxch_STAR_.call(null,inst_30923);
var inst_30925 = cljs.core.async.close_BANG_.call(null,inst_30924);
var inst_30926 = cljs.core.next.call(null,inst_30914);
var inst_30900 = inst_30926;
var inst_30901 = null;
var inst_30902 = (0);
var inst_30903 = (0);
var state_30959__$1 = (function (){var statearr_30979 = state_30959;
(statearr_30979[(12)] = inst_30900);

(statearr_30979[(13)] = inst_30925);

(statearr_30979[(14)] = inst_30901);

(statearr_30979[(15)] = inst_30902);

(statearr_30979[(16)] = inst_30903);

return statearr_30979;
})();
var statearr_30980_31023 = state_30959__$1;
(statearr_30980_31023[(2)] = null);

(statearr_30980_31023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (3))){
var inst_30957 = (state_30959[(2)]);
var state_30959__$1 = state_30959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30959__$1,inst_30957);
} else {
if((state_val_30960 === (12))){
var inst_30934 = (state_30959[(2)]);
var state_30959__$1 = state_30959;
var statearr_30981_31024 = state_30959__$1;
(statearr_30981_31024[(2)] = inst_30934);

(statearr_30981_31024[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (2))){
var state_30959__$1 = state_30959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30959__$1,(4),ch);
} else {
if((state_val_30960 === (23))){
var state_30959__$1 = state_30959;
var statearr_30982_31025 = state_30959__$1;
(statearr_30982_31025[(2)] = null);

(statearr_30982_31025[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (19))){
var inst_30890 = (state_30959[(8)]);
var inst_30940 = (state_30959[(11)]);
var inst_30942 = cljs.core.async.muxch_STAR_.call(null,inst_30940);
var state_30959__$1 = state_30959;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30959__$1,(22),inst_30942,inst_30890);
} else {
if((state_val_30960 === (11))){
var inst_30914 = (state_30959[(10)]);
var inst_30900 = (state_30959[(12)]);
var inst_30914__$1 = cljs.core.seq.call(null,inst_30900);
var state_30959__$1 = (function (){var statearr_30983 = state_30959;
(statearr_30983[(10)] = inst_30914__$1);

return statearr_30983;
})();
if(inst_30914__$1){
var statearr_30984_31026 = state_30959__$1;
(statearr_30984_31026[(1)] = (13));

} else {
var statearr_30985_31027 = state_30959__$1;
(statearr_30985_31027[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (9))){
var inst_30936 = (state_30959[(2)]);
var state_30959__$1 = state_30959;
var statearr_30986_31028 = state_30959__$1;
(statearr_30986_31028[(2)] = inst_30936);

(statearr_30986_31028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (5))){
var inst_30897 = cljs.core.deref.call(null,mults);
var inst_30898 = cljs.core.vals.call(null,inst_30897);
var inst_30899 = cljs.core.seq.call(null,inst_30898);
var inst_30900 = inst_30899;
var inst_30901 = null;
var inst_30902 = (0);
var inst_30903 = (0);
var state_30959__$1 = (function (){var statearr_30987 = state_30959;
(statearr_30987[(12)] = inst_30900);

(statearr_30987[(14)] = inst_30901);

(statearr_30987[(15)] = inst_30902);

(statearr_30987[(16)] = inst_30903);

return statearr_30987;
})();
var statearr_30988_31029 = state_30959__$1;
(statearr_30988_31029[(2)] = null);

(statearr_30988_31029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (14))){
var state_30959__$1 = state_30959;
var statearr_30992_31030 = state_30959__$1;
(statearr_30992_31030[(2)] = null);

(statearr_30992_31030[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (16))){
var inst_30914 = (state_30959[(10)]);
var inst_30918 = cljs.core.chunk_first.call(null,inst_30914);
var inst_30919 = cljs.core.chunk_rest.call(null,inst_30914);
var inst_30920 = cljs.core.count.call(null,inst_30918);
var inst_30900 = inst_30919;
var inst_30901 = inst_30918;
var inst_30902 = inst_30920;
var inst_30903 = (0);
var state_30959__$1 = (function (){var statearr_30993 = state_30959;
(statearr_30993[(12)] = inst_30900);

(statearr_30993[(14)] = inst_30901);

(statearr_30993[(15)] = inst_30902);

(statearr_30993[(16)] = inst_30903);

return statearr_30993;
})();
var statearr_30994_31031 = state_30959__$1;
(statearr_30994_31031[(2)] = null);

(statearr_30994_31031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (10))){
var inst_30900 = (state_30959[(12)]);
var inst_30901 = (state_30959[(14)]);
var inst_30902 = (state_30959[(15)]);
var inst_30903 = (state_30959[(16)]);
var inst_30908 = cljs.core._nth.call(null,inst_30901,inst_30903);
var inst_30909 = cljs.core.async.muxch_STAR_.call(null,inst_30908);
var inst_30910 = cljs.core.async.close_BANG_.call(null,inst_30909);
var inst_30911 = (inst_30903 + (1));
var tmp30989 = inst_30900;
var tmp30990 = inst_30901;
var tmp30991 = inst_30902;
var inst_30900__$1 = tmp30989;
var inst_30901__$1 = tmp30990;
var inst_30902__$1 = tmp30991;
var inst_30903__$1 = inst_30911;
var state_30959__$1 = (function (){var statearr_30995 = state_30959;
(statearr_30995[(12)] = inst_30900__$1);

(statearr_30995[(17)] = inst_30910);

(statearr_30995[(14)] = inst_30901__$1);

(statearr_30995[(15)] = inst_30902__$1);

(statearr_30995[(16)] = inst_30903__$1);

return statearr_30995;
})();
var statearr_30996_31032 = state_30959__$1;
(statearr_30996_31032[(2)] = null);

(statearr_30996_31032[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (18))){
var inst_30929 = (state_30959[(2)]);
var state_30959__$1 = state_30959;
var statearr_30997_31033 = state_30959__$1;
(statearr_30997_31033[(2)] = inst_30929);

(statearr_30997_31033[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30960 === (8))){
var inst_30902 = (state_30959[(15)]);
var inst_30903 = (state_30959[(16)]);
var inst_30905 = (inst_30903 < inst_30902);
var inst_30906 = inst_30905;
var state_30959__$1 = state_30959;
if(cljs.core.truth_(inst_30906)){
var statearr_30998_31034 = state_30959__$1;
(statearr_30998_31034[(1)] = (10));

} else {
var statearr_30999_31035 = state_30959__$1;
(statearr_30999_31035[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23281__auto___31007,mults,ensure_mult,p))
;
return ((function (switch__23216__auto__,c__23281__auto___31007,mults,ensure_mult,p){
return (function() {
var state_machine__23217__auto__ = null;
var state_machine__23217__auto____0 = (function (){
var statearr_31003 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31003[(0)] = state_machine__23217__auto__);

(statearr_31003[(1)] = (1));

return statearr_31003;
});
var state_machine__23217__auto____1 = (function (state_30959){
while(true){
var ret_value__23218__auto__ = (function (){try{while(true){
var result__23219__auto__ = switch__23216__auto__.call(null,state_30959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23219__auto__;
}
break;
}
}catch (e31004){if((e31004 instanceof Object)){
var ex__23220__auto__ = e31004;
var statearr_31005_31036 = state_30959;
(statearr_31005_31036[(5)] = ex__23220__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31037 = state_30959;
state_30959 = G__31037;
continue;
} else {
return ret_value__23218__auto__;
}
break;
}
});
state_machine__23217__auto__ = function(state_30959){
switch(arguments.length){
case 0:
return state_machine__23217__auto____0.call(this);
case 1:
return state_machine__23217__auto____1.call(this,state_30959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23217__auto____0;
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23217__auto____1;
return state_machine__23217__auto__;
})()
;})(switch__23216__auto__,c__23281__auto___31007,mults,ensure_mult,p))
})();
var state__23283__auto__ = (function (){var statearr_31006 = f__23282__auto__.call(null);
(statearr_31006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23281__auto___31007);

return statearr_31006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23283__auto__);
});})(c__23281__auto___31007,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23281__auto___31174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23281__auto___31174,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23282__auto__ = (function (){var switch__23216__auto__ = ((function (c__23281__auto___31174,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31144){
var state_val_31145 = (state_31144[(1)]);
if((state_val_31145 === (7))){
var state_31144__$1 = state_31144;
var statearr_31146_31175 = state_31144__$1;
(statearr_31146_31175[(2)] = null);

(statearr_31146_31175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31145 === (1))){
var state_31144__$1 = state_31144;
var statearr_31147_31176 = state_31144__$1;
(statearr_31147_31176[(2)] = null);

(statearr_31147_31176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31145 === (4))){
var inst_31108 = (state_31144[(7)]);
var inst_31110 = (inst_31108 < cnt);
var state_31144__$1 = state_31144;
if(cljs.core.truth_(inst_31110)){
var statearr_31148_31177 = state_31144__$1;
(statearr_31148_31177[(1)] = (6));

} else {
var statearr_31149_31178 = state_31144__$1;
(statearr_31149_31178[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31145 === (15))){
var inst_31140 = (state_31144[(2)]);
var state_31144__$1 = state_31144;
var statearr_31150_31179 = state_31144__$1;
(statearr_31150_31179[(2)] = inst_31140);

(statearr_31150_31179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31145 === (13))){
var inst_31133 = cljs.core.async.close_BANG_.call(null,out);
var state_31144__$1 = state_31144;
var statearr_31151_31180 = state_31144__$1;
(statearr_31151_31180[(2)] = inst_31133);

(statearr_31151_31180[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31145 === (6))){
var state_31144__$1 = state_31144;
var statearr_31152_31181 = state_31144__$1;
(statearr_31152_31181[(2)] = null);

(statearr_31152_31181[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31145 === (3))){
var inst_31142 = (state_31144[(2)]);
var state_31144__$1 = state_31144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31144__$1,inst_31142);
} else {
if((state_val_31145 === (12))){
var inst_31130 = (state_31144[(8)]);
var inst_31130__$1 = (state_31144[(2)]);
var inst_31131 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31130__$1);
var state_31144__$1 = (function (){var statearr_31153 = state_31144;
(statearr_31153[(8)] = inst_31130__$1);

return statearr_31153;
})();
if(cljs.core.truth_(inst_31131)){
var statearr_31154_31182 = state_31144__$1;
(statearr_31154_31182[(1)] = (13));

} else {
var statearr_31155_31183 = state_31144__$1;
(statearr_31155_31183[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31145 === (2))){
var inst_31107 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31108 = (0);
var state_31144__$1 = (function (){var statearr_31156 = state_31144;
(statearr_31156[(9)] = inst_31107);

(statearr_31156[(7)] = inst_31108);

return statearr_31156;
})();
var statearr_31157_31184 = state_31144__$1;
(statearr_31157_31184[(2)] = null);

(statearr_31157_31184[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31145 === (11))){
var inst_31108 = (state_31144[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31144,(10),Object,null,(9));
var inst_31117 = chs__$1.call(null,inst_31108);
var inst_31118 = done.call(null,inst_31108);
var inst_31119 = cljs.core.async.take_BANG_.call(null,inst_31117,inst_31118);
var state_31144__$1 = state_31144;
var statearr_31158_31185 = state_31144__$1;
(statearr_31158_31185[(2)] = inst_31119);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31144__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31145 === (9))){
var inst_31108 = (state_31144[(7)]);
var inst_31121 = (state_31144[(2)]);
var inst_31122 = (inst_31108 + (1));
var inst_31108__$1 = inst_31122;
var state_31144__$1 = (function (){var statearr_31159 = state_31144;
(statearr_31159[(10)] = inst_31121);

(statearr_31159[(7)] = inst_31108__$1);

return statearr_31159;
})();
var statearr_31160_31186 = state_31144__$1;
(statearr_31160_31186[(2)] = null);

(statearr_31160_31186[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31145 === (5))){
var inst_31128 = (state_31144[(2)]);
var state_31144__$1 = (function (){var statearr_31161 = state_31144;
(statearr_31161[(11)] = inst_31128);

return statearr_31161;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31144__$1,(12),dchan);
} else {
if((state_val_31145 === (14))){
var inst_31130 = (state_31144[(8)]);
var inst_31135 = cljs.core.apply.call(null,f,inst_31130);
var state_31144__$1 = state_31144;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31144__$1,(16),out,inst_31135);
} else {
if((state_val_31145 === (16))){
var inst_31137 = (state_31144[(2)]);
var state_31144__$1 = (function (){var statearr_31162 = state_31144;
(statearr_31162[(12)] = inst_31137);

return statearr_31162;
})();
var statearr_31163_31187 = state_31144__$1;
(statearr_31163_31187[(2)] = null);

(statearr_31163_31187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31145 === (10))){
var inst_31112 = (state_31144[(2)]);
var inst_31113 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31144__$1 = (function (){var statearr_31164 = state_31144;
(statearr_31164[(13)] = inst_31112);

return statearr_31164;
})();
var statearr_31165_31188 = state_31144__$1;
(statearr_31165_31188[(2)] = inst_31113);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31144__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31145 === (8))){
var inst_31126 = (state_31144[(2)]);
var state_31144__$1 = state_31144;
var statearr_31166_31189 = state_31144__$1;
(statearr_31166_31189[(2)] = inst_31126);

(statearr_31166_31189[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23281__auto___31174,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23216__auto__,c__23281__auto___31174,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__23217__auto__ = null;
var state_machine__23217__auto____0 = (function (){
var statearr_31170 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31170[(0)] = state_machine__23217__auto__);

(statearr_31170[(1)] = (1));

return statearr_31170;
});
var state_machine__23217__auto____1 = (function (state_31144){
while(true){
var ret_value__23218__auto__ = (function (){try{while(true){
var result__23219__auto__ = switch__23216__auto__.call(null,state_31144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23219__auto__;
}
break;
}
}catch (e31171){if((e31171 instanceof Object)){
var ex__23220__auto__ = e31171;
var statearr_31172_31190 = state_31144;
(statearr_31172_31190[(5)] = ex__23220__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31191 = state_31144;
state_31144 = G__31191;
continue;
} else {
return ret_value__23218__auto__;
}
break;
}
});
state_machine__23217__auto__ = function(state_31144){
switch(arguments.length){
case 0:
return state_machine__23217__auto____0.call(this);
case 1:
return state_machine__23217__auto____1.call(this,state_31144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23217__auto____0;
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23217__auto____1;
return state_machine__23217__auto__;
})()
;})(switch__23216__auto__,c__23281__auto___31174,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23283__auto__ = (function (){var statearr_31173 = f__23282__auto__.call(null);
(statearr_31173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23281__auto___31174);

return statearr_31173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23283__auto__);
});})(c__23281__auto___31174,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23281__auto___31299 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23281__auto___31299,out){
return (function (){
var f__23282__auto__ = (function (){var switch__23216__auto__ = ((function (c__23281__auto___31299,out){
return (function (state_31275){
var state_val_31276 = (state_31275[(1)]);
if((state_val_31276 === (7))){
var inst_31255 = (state_31275[(7)]);
var inst_31254 = (state_31275[(8)]);
var inst_31254__$1 = (state_31275[(2)]);
var inst_31255__$1 = cljs.core.nth.call(null,inst_31254__$1,(0),null);
var inst_31256 = cljs.core.nth.call(null,inst_31254__$1,(1),null);
var inst_31257 = (inst_31255__$1 == null);
var state_31275__$1 = (function (){var statearr_31277 = state_31275;
(statearr_31277[(7)] = inst_31255__$1);

(statearr_31277[(9)] = inst_31256);

(statearr_31277[(8)] = inst_31254__$1);

return statearr_31277;
})();
if(cljs.core.truth_(inst_31257)){
var statearr_31278_31300 = state_31275__$1;
(statearr_31278_31300[(1)] = (8));

} else {
var statearr_31279_31301 = state_31275__$1;
(statearr_31279_31301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (1))){
var inst_31246 = cljs.core.vec.call(null,chs);
var inst_31247 = inst_31246;
var state_31275__$1 = (function (){var statearr_31280 = state_31275;
(statearr_31280[(10)] = inst_31247);

return statearr_31280;
})();
var statearr_31281_31302 = state_31275__$1;
(statearr_31281_31302[(2)] = null);

(statearr_31281_31302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (4))){
var inst_31247 = (state_31275[(10)]);
var state_31275__$1 = state_31275;
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_31275__$1,(7),inst_31247);
} else {
if((state_val_31276 === (6))){
var inst_31271 = (state_31275[(2)]);
var state_31275__$1 = state_31275;
var statearr_31282_31303 = state_31275__$1;
(statearr_31282_31303[(2)] = inst_31271);

(statearr_31282_31303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (3))){
var inst_31273 = (state_31275[(2)]);
var state_31275__$1 = state_31275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31275__$1,inst_31273);
} else {
if((state_val_31276 === (2))){
var inst_31247 = (state_31275[(10)]);
var inst_31249 = cljs.core.count.call(null,inst_31247);
var inst_31250 = (inst_31249 > (0));
var state_31275__$1 = state_31275;
if(cljs.core.truth_(inst_31250)){
var statearr_31284_31304 = state_31275__$1;
(statearr_31284_31304[(1)] = (4));

} else {
var statearr_31285_31305 = state_31275__$1;
(statearr_31285_31305[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (11))){
var inst_31247 = (state_31275[(10)]);
var inst_31264 = (state_31275[(2)]);
var tmp31283 = inst_31247;
var inst_31247__$1 = tmp31283;
var state_31275__$1 = (function (){var statearr_31286 = state_31275;
(statearr_31286[(10)] = inst_31247__$1);

(statearr_31286[(11)] = inst_31264);

return statearr_31286;
})();
var statearr_31287_31306 = state_31275__$1;
(statearr_31287_31306[(2)] = null);

(statearr_31287_31306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (9))){
var inst_31255 = (state_31275[(7)]);
var state_31275__$1 = state_31275;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31275__$1,(11),out,inst_31255);
} else {
if((state_val_31276 === (5))){
var inst_31269 = cljs.core.async.close_BANG_.call(null,out);
var state_31275__$1 = state_31275;
var statearr_31288_31307 = state_31275__$1;
(statearr_31288_31307[(2)] = inst_31269);

(statearr_31288_31307[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (10))){
var inst_31267 = (state_31275[(2)]);
var state_31275__$1 = state_31275;
var statearr_31289_31308 = state_31275__$1;
(statearr_31289_31308[(2)] = inst_31267);

(statearr_31289_31308[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31276 === (8))){
var inst_31255 = (state_31275[(7)]);
var inst_31247 = (state_31275[(10)]);
var inst_31256 = (state_31275[(9)]);
var inst_31254 = (state_31275[(8)]);
var inst_31259 = (function (){var c = inst_31256;
var v = inst_31255;
var vec__31252 = inst_31254;
var cs = inst_31247;
return ((function (c,v,vec__31252,cs,inst_31255,inst_31247,inst_31256,inst_31254,state_val_31276,c__23281__auto___31299,out){
return (function (p1__31192_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31192_SHARP_);
});
;})(c,v,vec__31252,cs,inst_31255,inst_31247,inst_31256,inst_31254,state_val_31276,c__23281__auto___31299,out))
})();
var inst_31260 = cljs.core.filterv.call(null,inst_31259,inst_31247);
var inst_31247__$1 = inst_31260;
var state_31275__$1 = (function (){var statearr_31290 = state_31275;
(statearr_31290[(10)] = inst_31247__$1);

return statearr_31290;
})();
var statearr_31291_31309 = state_31275__$1;
(statearr_31291_31309[(2)] = null);

(statearr_31291_31309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23281__auto___31299,out))
;
return ((function (switch__23216__auto__,c__23281__auto___31299,out){
return (function() {
var state_machine__23217__auto__ = null;
var state_machine__23217__auto____0 = (function (){
var statearr_31295 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31295[(0)] = state_machine__23217__auto__);

(statearr_31295[(1)] = (1));

return statearr_31295;
});
var state_machine__23217__auto____1 = (function (state_31275){
while(true){
var ret_value__23218__auto__ = (function (){try{while(true){
var result__23219__auto__ = switch__23216__auto__.call(null,state_31275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23219__auto__;
}
break;
}
}catch (e31296){if((e31296 instanceof Object)){
var ex__23220__auto__ = e31296;
var statearr_31297_31310 = state_31275;
(statearr_31297_31310[(5)] = ex__23220__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31311 = state_31275;
state_31275 = G__31311;
continue;
} else {
return ret_value__23218__auto__;
}
break;
}
});
state_machine__23217__auto__ = function(state_31275){
switch(arguments.length){
case 0:
return state_machine__23217__auto____0.call(this);
case 1:
return state_machine__23217__auto____1.call(this,state_31275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23217__auto____0;
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23217__auto____1;
return state_machine__23217__auto__;
})()
;})(switch__23216__auto__,c__23281__auto___31299,out))
})();
var state__23283__auto__ = (function (){var statearr_31298 = f__23282__auto__.call(null);
(statearr_31298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23281__auto___31299);

return statearr_31298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23283__auto__);
});})(c__23281__auto___31299,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23281__auto___31404 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23281__auto___31404,out){
return (function (){
var f__23282__auto__ = (function (){var switch__23216__auto__ = ((function (c__23281__auto___31404,out){
return (function (state_31381){
var state_val_31382 = (state_31381[(1)]);
if((state_val_31382 === (7))){
var inst_31363 = (state_31381[(7)]);
var inst_31363__$1 = (state_31381[(2)]);
var inst_31364 = (inst_31363__$1 == null);
var inst_31365 = cljs.core.not.call(null,inst_31364);
var state_31381__$1 = (function (){var statearr_31383 = state_31381;
(statearr_31383[(7)] = inst_31363__$1);

return statearr_31383;
})();
if(inst_31365){
var statearr_31384_31405 = state_31381__$1;
(statearr_31384_31405[(1)] = (8));

} else {
var statearr_31385_31406 = state_31381__$1;
(statearr_31385_31406[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31382 === (1))){
var inst_31358 = (0);
var state_31381__$1 = (function (){var statearr_31386 = state_31381;
(statearr_31386[(8)] = inst_31358);

return statearr_31386;
})();
var statearr_31387_31407 = state_31381__$1;
(statearr_31387_31407[(2)] = null);

(statearr_31387_31407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31382 === (4))){
var state_31381__$1 = state_31381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31381__$1,(7),ch);
} else {
if((state_val_31382 === (6))){
var inst_31376 = (state_31381[(2)]);
var state_31381__$1 = state_31381;
var statearr_31388_31408 = state_31381__$1;
(statearr_31388_31408[(2)] = inst_31376);

(statearr_31388_31408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31382 === (3))){
var inst_31378 = (state_31381[(2)]);
var inst_31379 = cljs.core.async.close_BANG_.call(null,out);
var state_31381__$1 = (function (){var statearr_31389 = state_31381;
(statearr_31389[(9)] = inst_31378);

return statearr_31389;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31381__$1,inst_31379);
} else {
if((state_val_31382 === (2))){
var inst_31358 = (state_31381[(8)]);
var inst_31360 = (inst_31358 < n);
var state_31381__$1 = state_31381;
if(cljs.core.truth_(inst_31360)){
var statearr_31390_31409 = state_31381__$1;
(statearr_31390_31409[(1)] = (4));

} else {
var statearr_31391_31410 = state_31381__$1;
(statearr_31391_31410[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31382 === (11))){
var inst_31358 = (state_31381[(8)]);
var inst_31368 = (state_31381[(2)]);
var inst_31369 = (inst_31358 + (1));
var inst_31358__$1 = inst_31369;
var state_31381__$1 = (function (){var statearr_31392 = state_31381;
(statearr_31392[(10)] = inst_31368);

(statearr_31392[(8)] = inst_31358__$1);

return statearr_31392;
})();
var statearr_31393_31411 = state_31381__$1;
(statearr_31393_31411[(2)] = null);

(statearr_31393_31411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31382 === (9))){
var state_31381__$1 = state_31381;
var statearr_31394_31412 = state_31381__$1;
(statearr_31394_31412[(2)] = null);

(statearr_31394_31412[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31382 === (5))){
var state_31381__$1 = state_31381;
var statearr_31395_31413 = state_31381__$1;
(statearr_31395_31413[(2)] = null);

(statearr_31395_31413[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31382 === (10))){
var inst_31373 = (state_31381[(2)]);
var state_31381__$1 = state_31381;
var statearr_31396_31414 = state_31381__$1;
(statearr_31396_31414[(2)] = inst_31373);

(statearr_31396_31414[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31382 === (8))){
var inst_31363 = (state_31381[(7)]);
var state_31381__$1 = state_31381;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31381__$1,(11),out,inst_31363);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23281__auto___31404,out))
;
return ((function (switch__23216__auto__,c__23281__auto___31404,out){
return (function() {
var state_machine__23217__auto__ = null;
var state_machine__23217__auto____0 = (function (){
var statearr_31400 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31400[(0)] = state_machine__23217__auto__);

(statearr_31400[(1)] = (1));

return statearr_31400;
});
var state_machine__23217__auto____1 = (function (state_31381){
while(true){
var ret_value__23218__auto__ = (function (){try{while(true){
var result__23219__auto__ = switch__23216__auto__.call(null,state_31381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23219__auto__;
}
break;
}
}catch (e31401){if((e31401 instanceof Object)){
var ex__23220__auto__ = e31401;
var statearr_31402_31415 = state_31381;
(statearr_31402_31415[(5)] = ex__23220__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31416 = state_31381;
state_31381 = G__31416;
continue;
} else {
return ret_value__23218__auto__;
}
break;
}
});
state_machine__23217__auto__ = function(state_31381){
switch(arguments.length){
case 0:
return state_machine__23217__auto____0.call(this);
case 1:
return state_machine__23217__auto____1.call(this,state_31381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23217__auto____0;
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23217__auto____1;
return state_machine__23217__auto__;
})()
;})(switch__23216__auto__,c__23281__auto___31404,out))
})();
var state__23283__auto__ = (function (){var statearr_31403 = f__23282__auto__.call(null);
(statearr_31403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23281__auto___31404);

return statearr_31403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23283__auto__);
});})(c__23281__auto___31404,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23281__auto___31513 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23281__auto___31513,out){
return (function (){
var f__23282__auto__ = (function (){var switch__23216__auto__ = ((function (c__23281__auto___31513,out){
return (function (state_31488){
var state_val_31489 = (state_31488[(1)]);
if((state_val_31489 === (7))){
var inst_31483 = (state_31488[(2)]);
var state_31488__$1 = state_31488;
var statearr_31490_31514 = state_31488__$1;
(statearr_31490_31514[(2)] = inst_31483);

(statearr_31490_31514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31489 === (1))){
var inst_31465 = null;
var state_31488__$1 = (function (){var statearr_31491 = state_31488;
(statearr_31491[(7)] = inst_31465);

return statearr_31491;
})();
var statearr_31492_31515 = state_31488__$1;
(statearr_31492_31515[(2)] = null);

(statearr_31492_31515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31489 === (4))){
var inst_31468 = (state_31488[(8)]);
var inst_31468__$1 = (state_31488[(2)]);
var inst_31469 = (inst_31468__$1 == null);
var inst_31470 = cljs.core.not.call(null,inst_31469);
var state_31488__$1 = (function (){var statearr_31493 = state_31488;
(statearr_31493[(8)] = inst_31468__$1);

return statearr_31493;
})();
if(inst_31470){
var statearr_31494_31516 = state_31488__$1;
(statearr_31494_31516[(1)] = (5));

} else {
var statearr_31495_31517 = state_31488__$1;
(statearr_31495_31517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31489 === (6))){
var state_31488__$1 = state_31488;
var statearr_31496_31518 = state_31488__$1;
(statearr_31496_31518[(2)] = null);

(statearr_31496_31518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31489 === (3))){
var inst_31485 = (state_31488[(2)]);
var inst_31486 = cljs.core.async.close_BANG_.call(null,out);
var state_31488__$1 = (function (){var statearr_31497 = state_31488;
(statearr_31497[(9)] = inst_31485);

return statearr_31497;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31488__$1,inst_31486);
} else {
if((state_val_31489 === (2))){
var state_31488__$1 = state_31488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31488__$1,(4),ch);
} else {
if((state_val_31489 === (11))){
var inst_31468 = (state_31488[(8)]);
var inst_31477 = (state_31488[(2)]);
var inst_31465 = inst_31468;
var state_31488__$1 = (function (){var statearr_31498 = state_31488;
(statearr_31498[(10)] = inst_31477);

(statearr_31498[(7)] = inst_31465);

return statearr_31498;
})();
var statearr_31499_31519 = state_31488__$1;
(statearr_31499_31519[(2)] = null);

(statearr_31499_31519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31489 === (9))){
var inst_31468 = (state_31488[(8)]);
var state_31488__$1 = state_31488;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31488__$1,(11),out,inst_31468);
} else {
if((state_val_31489 === (5))){
var inst_31468 = (state_31488[(8)]);
var inst_31465 = (state_31488[(7)]);
var inst_31472 = cljs.core._EQ_.call(null,inst_31468,inst_31465);
var state_31488__$1 = state_31488;
if(inst_31472){
var statearr_31501_31520 = state_31488__$1;
(statearr_31501_31520[(1)] = (8));

} else {
var statearr_31502_31521 = state_31488__$1;
(statearr_31502_31521[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31489 === (10))){
var inst_31480 = (state_31488[(2)]);
var state_31488__$1 = state_31488;
var statearr_31503_31522 = state_31488__$1;
(statearr_31503_31522[(2)] = inst_31480);

(statearr_31503_31522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31489 === (8))){
var inst_31465 = (state_31488[(7)]);
var tmp31500 = inst_31465;
var inst_31465__$1 = tmp31500;
var state_31488__$1 = (function (){var statearr_31504 = state_31488;
(statearr_31504[(7)] = inst_31465__$1);

return statearr_31504;
})();
var statearr_31505_31523 = state_31488__$1;
(statearr_31505_31523[(2)] = null);

(statearr_31505_31523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23281__auto___31513,out))
;
return ((function (switch__23216__auto__,c__23281__auto___31513,out){
return (function() {
var state_machine__23217__auto__ = null;
var state_machine__23217__auto____0 = (function (){
var statearr_31509 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31509[(0)] = state_machine__23217__auto__);

(statearr_31509[(1)] = (1));

return statearr_31509;
});
var state_machine__23217__auto____1 = (function (state_31488){
while(true){
var ret_value__23218__auto__ = (function (){try{while(true){
var result__23219__auto__ = switch__23216__auto__.call(null,state_31488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23219__auto__;
}
break;
}
}catch (e31510){if((e31510 instanceof Object)){
var ex__23220__auto__ = e31510;
var statearr_31511_31524 = state_31488;
(statearr_31511_31524[(5)] = ex__23220__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31525 = state_31488;
state_31488 = G__31525;
continue;
} else {
return ret_value__23218__auto__;
}
break;
}
});
state_machine__23217__auto__ = function(state_31488){
switch(arguments.length){
case 0:
return state_machine__23217__auto____0.call(this);
case 1:
return state_machine__23217__auto____1.call(this,state_31488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23217__auto____0;
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23217__auto____1;
return state_machine__23217__auto__;
})()
;})(switch__23216__auto__,c__23281__auto___31513,out))
})();
var state__23283__auto__ = (function (){var statearr_31512 = f__23282__auto__.call(null);
(statearr_31512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23281__auto___31513);

return statearr_31512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23283__auto__);
});})(c__23281__auto___31513,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23281__auto___31660 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23281__auto___31660,out){
return (function (){
var f__23282__auto__ = (function (){var switch__23216__auto__ = ((function (c__23281__auto___31660,out){
return (function (state_31630){
var state_val_31631 = (state_31630[(1)]);
if((state_val_31631 === (7))){
var inst_31626 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
var statearr_31632_31661 = state_31630__$1;
(statearr_31632_31661[(2)] = inst_31626);

(statearr_31632_31661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (1))){
var inst_31593 = (new Array(n));
var inst_31594 = inst_31593;
var inst_31595 = (0);
var state_31630__$1 = (function (){var statearr_31633 = state_31630;
(statearr_31633[(7)] = inst_31595);

(statearr_31633[(8)] = inst_31594);

return statearr_31633;
})();
var statearr_31634_31662 = state_31630__$1;
(statearr_31634_31662[(2)] = null);

(statearr_31634_31662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (4))){
var inst_31598 = (state_31630[(9)]);
var inst_31598__$1 = (state_31630[(2)]);
var inst_31599 = (inst_31598__$1 == null);
var inst_31600 = cljs.core.not.call(null,inst_31599);
var state_31630__$1 = (function (){var statearr_31635 = state_31630;
(statearr_31635[(9)] = inst_31598__$1);

return statearr_31635;
})();
if(inst_31600){
var statearr_31636_31663 = state_31630__$1;
(statearr_31636_31663[(1)] = (5));

} else {
var statearr_31637_31664 = state_31630__$1;
(statearr_31637_31664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (15))){
var inst_31620 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
var statearr_31638_31665 = state_31630__$1;
(statearr_31638_31665[(2)] = inst_31620);

(statearr_31638_31665[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (13))){
var state_31630__$1 = state_31630;
var statearr_31639_31666 = state_31630__$1;
(statearr_31639_31666[(2)] = null);

(statearr_31639_31666[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (6))){
var inst_31595 = (state_31630[(7)]);
var inst_31616 = (inst_31595 > (0));
var state_31630__$1 = state_31630;
if(cljs.core.truth_(inst_31616)){
var statearr_31640_31667 = state_31630__$1;
(statearr_31640_31667[(1)] = (12));

} else {
var statearr_31641_31668 = state_31630__$1;
(statearr_31641_31668[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (3))){
var inst_31628 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31630__$1,inst_31628);
} else {
if((state_val_31631 === (12))){
var inst_31594 = (state_31630[(8)]);
var inst_31618 = cljs.core.vec.call(null,inst_31594);
var state_31630__$1 = state_31630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31630__$1,(15),out,inst_31618);
} else {
if((state_val_31631 === (2))){
var state_31630__$1 = state_31630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31630__$1,(4),ch);
} else {
if((state_val_31631 === (11))){
var inst_31610 = (state_31630[(2)]);
var inst_31611 = (new Array(n));
var inst_31594 = inst_31611;
var inst_31595 = (0);
var state_31630__$1 = (function (){var statearr_31642 = state_31630;
(statearr_31642[(10)] = inst_31610);

(statearr_31642[(7)] = inst_31595);

(statearr_31642[(8)] = inst_31594);

return statearr_31642;
})();
var statearr_31643_31669 = state_31630__$1;
(statearr_31643_31669[(2)] = null);

(statearr_31643_31669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (9))){
var inst_31594 = (state_31630[(8)]);
var inst_31608 = cljs.core.vec.call(null,inst_31594);
var state_31630__$1 = state_31630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31630__$1,(11),out,inst_31608);
} else {
if((state_val_31631 === (5))){
var inst_31595 = (state_31630[(7)]);
var inst_31594 = (state_31630[(8)]);
var inst_31598 = (state_31630[(9)]);
var inst_31603 = (state_31630[(11)]);
var inst_31602 = (inst_31594[inst_31595] = inst_31598);
var inst_31603__$1 = (inst_31595 + (1));
var inst_31604 = (inst_31603__$1 < n);
var state_31630__$1 = (function (){var statearr_31644 = state_31630;
(statearr_31644[(12)] = inst_31602);

(statearr_31644[(11)] = inst_31603__$1);

return statearr_31644;
})();
if(cljs.core.truth_(inst_31604)){
var statearr_31645_31670 = state_31630__$1;
(statearr_31645_31670[(1)] = (8));

} else {
var statearr_31646_31671 = state_31630__$1;
(statearr_31646_31671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (14))){
var inst_31623 = (state_31630[(2)]);
var inst_31624 = cljs.core.async.close_BANG_.call(null,out);
var state_31630__$1 = (function (){var statearr_31648 = state_31630;
(statearr_31648[(13)] = inst_31623);

return statearr_31648;
})();
var statearr_31649_31672 = state_31630__$1;
(statearr_31649_31672[(2)] = inst_31624);

(statearr_31649_31672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (10))){
var inst_31614 = (state_31630[(2)]);
var state_31630__$1 = state_31630;
var statearr_31650_31673 = state_31630__$1;
(statearr_31650_31673[(2)] = inst_31614);

(statearr_31650_31673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31631 === (8))){
var inst_31594 = (state_31630[(8)]);
var inst_31603 = (state_31630[(11)]);
var tmp31647 = inst_31594;
var inst_31594__$1 = tmp31647;
var inst_31595 = inst_31603;
var state_31630__$1 = (function (){var statearr_31651 = state_31630;
(statearr_31651[(7)] = inst_31595);

(statearr_31651[(8)] = inst_31594__$1);

return statearr_31651;
})();
var statearr_31652_31674 = state_31630__$1;
(statearr_31652_31674[(2)] = null);

(statearr_31652_31674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23281__auto___31660,out))
;
return ((function (switch__23216__auto__,c__23281__auto___31660,out){
return (function() {
var state_machine__23217__auto__ = null;
var state_machine__23217__auto____0 = (function (){
var statearr_31656 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31656[(0)] = state_machine__23217__auto__);

(statearr_31656[(1)] = (1));

return statearr_31656;
});
var state_machine__23217__auto____1 = (function (state_31630){
while(true){
var ret_value__23218__auto__ = (function (){try{while(true){
var result__23219__auto__ = switch__23216__auto__.call(null,state_31630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23219__auto__;
}
break;
}
}catch (e31657){if((e31657 instanceof Object)){
var ex__23220__auto__ = e31657;
var statearr_31658_31675 = state_31630;
(statearr_31658_31675[(5)] = ex__23220__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31676 = state_31630;
state_31630 = G__31676;
continue;
} else {
return ret_value__23218__auto__;
}
break;
}
});
state_machine__23217__auto__ = function(state_31630){
switch(arguments.length){
case 0:
return state_machine__23217__auto____0.call(this);
case 1:
return state_machine__23217__auto____1.call(this,state_31630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23217__auto____0;
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23217__auto____1;
return state_machine__23217__auto__;
})()
;})(switch__23216__auto__,c__23281__auto___31660,out))
})();
var state__23283__auto__ = (function (){var statearr_31659 = f__23282__auto__.call(null);
(statearr_31659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23281__auto___31660);

return statearr_31659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23283__auto__);
});})(c__23281__auto___31660,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23281__auto___31819 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23281__auto___31819,out){
return (function (){
var f__23282__auto__ = (function (){var switch__23216__auto__ = ((function (c__23281__auto___31819,out){
return (function (state_31789){
var state_val_31790 = (state_31789[(1)]);
if((state_val_31790 === (7))){
var inst_31785 = (state_31789[(2)]);
var state_31789__$1 = state_31789;
var statearr_31791_31820 = state_31789__$1;
(statearr_31791_31820[(2)] = inst_31785);

(statearr_31791_31820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31790 === (1))){
var inst_31748 = [];
var inst_31749 = inst_31748;
var inst_31750 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31789__$1 = (function (){var statearr_31792 = state_31789;
(statearr_31792[(7)] = inst_31749);

(statearr_31792[(8)] = inst_31750);

return statearr_31792;
})();
var statearr_31793_31821 = state_31789__$1;
(statearr_31793_31821[(2)] = null);

(statearr_31793_31821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31790 === (4))){
var inst_31753 = (state_31789[(9)]);
var inst_31753__$1 = (state_31789[(2)]);
var inst_31754 = (inst_31753__$1 == null);
var inst_31755 = cljs.core.not.call(null,inst_31754);
var state_31789__$1 = (function (){var statearr_31794 = state_31789;
(statearr_31794[(9)] = inst_31753__$1);

return statearr_31794;
})();
if(inst_31755){
var statearr_31795_31822 = state_31789__$1;
(statearr_31795_31822[(1)] = (5));

} else {
var statearr_31796_31823 = state_31789__$1;
(statearr_31796_31823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31790 === (15))){
var inst_31779 = (state_31789[(2)]);
var state_31789__$1 = state_31789;
var statearr_31797_31824 = state_31789__$1;
(statearr_31797_31824[(2)] = inst_31779);

(statearr_31797_31824[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31790 === (13))){
var state_31789__$1 = state_31789;
var statearr_31798_31825 = state_31789__$1;
(statearr_31798_31825[(2)] = null);

(statearr_31798_31825[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31790 === (6))){
var inst_31749 = (state_31789[(7)]);
var inst_31774 = inst_31749.length;
var inst_31775 = (inst_31774 > (0));
var state_31789__$1 = state_31789;
if(cljs.core.truth_(inst_31775)){
var statearr_31799_31826 = state_31789__$1;
(statearr_31799_31826[(1)] = (12));

} else {
var statearr_31800_31827 = state_31789__$1;
(statearr_31800_31827[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31790 === (3))){
var inst_31787 = (state_31789[(2)]);
var state_31789__$1 = state_31789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31789__$1,inst_31787);
} else {
if((state_val_31790 === (12))){
var inst_31749 = (state_31789[(7)]);
var inst_31777 = cljs.core.vec.call(null,inst_31749);
var state_31789__$1 = state_31789;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31789__$1,(15),out,inst_31777);
} else {
if((state_val_31790 === (2))){
var state_31789__$1 = state_31789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31789__$1,(4),ch);
} else {
if((state_val_31790 === (11))){
var inst_31757 = (state_31789[(10)]);
var inst_31753 = (state_31789[(9)]);
var inst_31767 = (state_31789[(2)]);
var inst_31768 = [];
var inst_31769 = inst_31768.push(inst_31753);
var inst_31749 = inst_31768;
var inst_31750 = inst_31757;
var state_31789__$1 = (function (){var statearr_31801 = state_31789;
(statearr_31801[(7)] = inst_31749);

(statearr_31801[(11)] = inst_31767);

(statearr_31801[(12)] = inst_31769);

(statearr_31801[(8)] = inst_31750);

return statearr_31801;
})();
var statearr_31802_31828 = state_31789__$1;
(statearr_31802_31828[(2)] = null);

(statearr_31802_31828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31790 === (9))){
var inst_31749 = (state_31789[(7)]);
var inst_31765 = cljs.core.vec.call(null,inst_31749);
var state_31789__$1 = state_31789;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31789__$1,(11),out,inst_31765);
} else {
if((state_val_31790 === (5))){
var inst_31757 = (state_31789[(10)]);
var inst_31750 = (state_31789[(8)]);
var inst_31753 = (state_31789[(9)]);
var inst_31757__$1 = f.call(null,inst_31753);
var inst_31758 = cljs.core._EQ_.call(null,inst_31757__$1,inst_31750);
var inst_31759 = cljs.core.keyword_identical_QMARK_.call(null,inst_31750,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31760 = (inst_31758) || (inst_31759);
var state_31789__$1 = (function (){var statearr_31803 = state_31789;
(statearr_31803[(10)] = inst_31757__$1);

return statearr_31803;
})();
if(cljs.core.truth_(inst_31760)){
var statearr_31804_31829 = state_31789__$1;
(statearr_31804_31829[(1)] = (8));

} else {
var statearr_31805_31830 = state_31789__$1;
(statearr_31805_31830[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31790 === (14))){
var inst_31782 = (state_31789[(2)]);
var inst_31783 = cljs.core.async.close_BANG_.call(null,out);
var state_31789__$1 = (function (){var statearr_31807 = state_31789;
(statearr_31807[(13)] = inst_31782);

return statearr_31807;
})();
var statearr_31808_31831 = state_31789__$1;
(statearr_31808_31831[(2)] = inst_31783);

(statearr_31808_31831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31790 === (10))){
var inst_31772 = (state_31789[(2)]);
var state_31789__$1 = state_31789;
var statearr_31809_31832 = state_31789__$1;
(statearr_31809_31832[(2)] = inst_31772);

(statearr_31809_31832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31790 === (8))){
var inst_31749 = (state_31789[(7)]);
var inst_31757 = (state_31789[(10)]);
var inst_31753 = (state_31789[(9)]);
var inst_31762 = inst_31749.push(inst_31753);
var tmp31806 = inst_31749;
var inst_31749__$1 = tmp31806;
var inst_31750 = inst_31757;
var state_31789__$1 = (function (){var statearr_31810 = state_31789;
(statearr_31810[(7)] = inst_31749__$1);

(statearr_31810[(8)] = inst_31750);

(statearr_31810[(14)] = inst_31762);

return statearr_31810;
})();
var statearr_31811_31833 = state_31789__$1;
(statearr_31811_31833[(2)] = null);

(statearr_31811_31833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23281__auto___31819,out))
;
return ((function (switch__23216__auto__,c__23281__auto___31819,out){
return (function() {
var state_machine__23217__auto__ = null;
var state_machine__23217__auto____0 = (function (){
var statearr_31815 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31815[(0)] = state_machine__23217__auto__);

(statearr_31815[(1)] = (1));

return statearr_31815;
});
var state_machine__23217__auto____1 = (function (state_31789){
while(true){
var ret_value__23218__auto__ = (function (){try{while(true){
var result__23219__auto__ = switch__23216__auto__.call(null,state_31789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23219__auto__;
}
break;
}
}catch (e31816){if((e31816 instanceof Object)){
var ex__23220__auto__ = e31816;
var statearr_31817_31834 = state_31789;
(statearr_31817_31834[(5)] = ex__23220__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31835 = state_31789;
state_31789 = G__31835;
continue;
} else {
return ret_value__23218__auto__;
}
break;
}
});
state_machine__23217__auto__ = function(state_31789){
switch(arguments.length){
case 0:
return state_machine__23217__auto____0.call(this);
case 1:
return state_machine__23217__auto____1.call(this,state_31789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23217__auto____0;
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23217__auto____1;
return state_machine__23217__auto__;
})()
;})(switch__23216__auto__,c__23281__auto___31819,out))
})();
var state__23283__auto__ = (function (){var statearr_31818 = f__23282__auto__.call(null);
(statearr_31818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23281__auto___31819);

return statearr_31818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23283__auto__);
});})(c__23281__auto___31819,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
