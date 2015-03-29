// Compiled by ClojureScript 0.0-2511
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('figwheel.client.heads_up');
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__31946){
var map__31948 = p__31946;
var map__31948__$1 = ((cljs.core.seq_QMARK_.call(null,map__31948))?cljs.core.apply.call(null,cljs.core.hash_map,map__31948):map__31948);
var class$ = cljs.core.get.call(null,map__31948__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__31948__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__20733__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__20733__auto__)){
return or__20733__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__20721__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__20721__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__20721__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23281__auto___32069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23281__auto___32069,ch){
return (function (){
var f__23282__auto__ = (function (){var switch__23216__auto__ = ((function (c__23281__auto___32069,ch){
return (function (state_32043){
var state_val_32044 = (state_32043[(1)]);
if((state_val_32044 === (7))){
var inst_32039 = (state_32043[(2)]);
var state_32043__$1 = state_32043;
var statearr_32045_32070 = state_32043__$1;
(statearr_32045_32070[(2)] = inst_32039);

(statearr_32045_32070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32044 === (1))){
var state_32043__$1 = state_32043;
var statearr_32046_32071 = state_32043__$1;
(statearr_32046_32071[(2)] = null);

(statearr_32046_32071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32044 === (4))){
var inst_32011 = (state_32043[(7)]);
var inst_32011__$1 = (state_32043[(2)]);
var state_32043__$1 = (function (){var statearr_32047 = state_32043;
(statearr_32047[(7)] = inst_32011__$1);

return statearr_32047;
})();
if(cljs.core.truth_(inst_32011__$1)){
var statearr_32048_32072 = state_32043__$1;
(statearr_32048_32072[(1)] = (5));

} else {
var statearr_32049_32073 = state_32043__$1;
(statearr_32049_32073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32044 === (13))){
var state_32043__$1 = state_32043;
var statearr_32050_32074 = state_32043__$1;
(statearr_32050_32074[(2)] = null);

(statearr_32050_32074[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32044 === (6))){
var state_32043__$1 = state_32043;
var statearr_32051_32075 = state_32043__$1;
(statearr_32051_32075[(2)] = null);

(statearr_32051_32075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32044 === (3))){
var inst_32041 = (state_32043[(2)]);
var state_32043__$1 = state_32043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32043__$1,inst_32041);
} else {
if((state_val_32044 === (12))){
var inst_32018 = (state_32043[(8)]);
var inst_32027 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32018);
var inst_32028 = cljs.core.first.call(null,inst_32027);
var inst_32029 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_32028);
var inst_32030 = console.warn("Figwheel: Not loading code with warnings - ",inst_32029);
var state_32043__$1 = state_32043;
var statearr_32052_32076 = state_32043__$1;
(statearr_32052_32076[(2)] = inst_32030);

(statearr_32052_32076[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32044 === (2))){
var state_32043__$1 = state_32043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32043__$1,(4),ch);
} else {
if((state_val_32044 === (11))){
var inst_32023 = (state_32043[(2)]);
var state_32043__$1 = state_32043;
var statearr_32053_32077 = state_32043__$1;
(statearr_32053_32077[(2)] = inst_32023);

(statearr_32053_32077[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32044 === (9))){
var inst_32017 = (state_32043[(9)]);
var inst_32025 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_32017,opts);
var state_32043__$1 = state_32043;
if(inst_32025){
var statearr_32054_32078 = state_32043__$1;
(statearr_32054_32078[(1)] = (12));

} else {
var statearr_32055_32079 = state_32043__$1;
(statearr_32055_32079[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32044 === (5))){
var inst_32011 = (state_32043[(7)]);
var inst_32017 = (state_32043[(9)]);
var inst_32013 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_32014 = (new cljs.core.PersistentArrayMap(null,2,inst_32013,null));
var inst_32015 = (new cljs.core.PersistentHashSet(null,inst_32014,null));
var inst_32016 = figwheel.client.focus_msgs.call(null,inst_32015,inst_32011);
var inst_32017__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_32016);
var inst_32018 = cljs.core.first.call(null,inst_32016);
var inst_32019 = figwheel.client.reload_file_state_QMARK_.call(null,inst_32017__$1,opts);
var state_32043__$1 = (function (){var statearr_32056 = state_32043;
(statearr_32056[(8)] = inst_32018);

(statearr_32056[(9)] = inst_32017__$1);

return statearr_32056;
})();
if(cljs.core.truth_(inst_32019)){
var statearr_32057_32080 = state_32043__$1;
(statearr_32057_32080[(1)] = (8));

} else {
var statearr_32058_32081 = state_32043__$1;
(statearr_32058_32081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32044 === (14))){
var inst_32033 = (state_32043[(2)]);
var state_32043__$1 = state_32043;
var statearr_32059_32082 = state_32043__$1;
(statearr_32059_32082[(2)] = inst_32033);

(statearr_32059_32082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32044 === (10))){
var inst_32035 = (state_32043[(2)]);
var state_32043__$1 = (function (){var statearr_32060 = state_32043;
(statearr_32060[(10)] = inst_32035);

return statearr_32060;
})();
var statearr_32061_32083 = state_32043__$1;
(statearr_32061_32083[(2)] = null);

(statearr_32061_32083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32044 === (8))){
var inst_32018 = (state_32043[(8)]);
var inst_32021 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_32018);
var state_32043__$1 = state_32043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32043__$1,(11),inst_32021);
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
});})(c__23281__auto___32069,ch))
;
return ((function (switch__23216__auto__,c__23281__auto___32069,ch){
return (function() {
var state_machine__23217__auto__ = null;
var state_machine__23217__auto____0 = (function (){
var statearr_32065 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32065[(0)] = state_machine__23217__auto__);

(statearr_32065[(1)] = (1));

return statearr_32065;
});
var state_machine__23217__auto____1 = (function (state_32043){
while(true){
var ret_value__23218__auto__ = (function (){try{while(true){
var result__23219__auto__ = switch__23216__auto__.call(null,state_32043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23219__auto__;
}
break;
}
}catch (e32066){if((e32066 instanceof Object)){
var ex__23220__auto__ = e32066;
var statearr_32067_32084 = state_32043;
(statearr_32067_32084[(5)] = ex__23220__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32085 = state_32043;
state_32043 = G__32085;
continue;
} else {
return ret_value__23218__auto__;
}
break;
}
});
state_machine__23217__auto__ = function(state_32043){
switch(arguments.length){
case 0:
return state_machine__23217__auto____0.call(this);
case 1:
return state_machine__23217__auto____1.call(this,state_32043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23217__auto____0;
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23217__auto____1;
return state_machine__23217__auto__;
})()
;})(switch__23216__auto__,c__23281__auto___32069,ch))
})();
var state__23283__auto__ = (function (){var statearr_32068 = f__23282__auto__.call(null);
(statearr_32068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23281__auto___32069);

return statearr_32068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23283__auto__);
});})(c__23281__auto___32069,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__32089){
var vec__32090 = p__32089;
var map__32091 = cljs.core.nth.call(null,vec__32090,(0),null);
var map__32091__$1 = ((cljs.core.seq_QMARK_.call(null,map__32091))?cljs.core.apply.call(null,cljs.core.hash_map,map__32091):map__32091);
var msg = map__32091__$1;
var msg_name = cljs.core.get.call(null,map__32091__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32090,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__32092){
var map__32100 = p__32092;
var map__32100__$1 = ((cljs.core.seq_QMARK_.call(null,map__32100))?cljs.core.apply.call(null,cljs.core.hash_map,map__32100):map__32100);
var on_compile_fail = cljs.core.get.call(null,map__32100__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__32100__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__32100,map__32100__$1,on_compile_fail,on_compile_warning){
return (function (p__32101){
var vec__32102 = p__32101;
var map__32103 = cljs.core.nth.call(null,vec__32102,(0),null);
var map__32103__$1 = ((cljs.core.seq_QMARK_.call(null,map__32103))?cljs.core.apply.call(null,cljs.core.hash_map,map__32103):map__32103);
var msg = map__32103__$1;
var msg_name = cljs.core.get.call(null,map__32103__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32102,(1));
var pred__32104 = cljs.core._EQ_;
var expr__32105 = msg_name;
if(cljs.core.truth_(pred__32104.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__32105))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__32104.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__32105))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__32100,map__32100__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23281__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23281__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23282__auto__ = (function (){var switch__23216__auto__ = ((function (c__23281__auto__,msg_hist,msg_names,msg){
return (function (state_32282){
var state_val_32283 = (state_32282[(1)]);
if((state_val_32283 === (7))){
var inst_32231 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32282__$1 = state_32282;
if(inst_32231){
var statearr_32284_32321 = state_32282__$1;
(statearr_32284_32321[(1)] = (11));

} else {
var statearr_32285_32322 = state_32282__$1;
(statearr_32285_32322[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32283 === (20))){
var inst_32272 = (state_32282[(2)]);
var state_32282__$1 = state_32282;
var statearr_32286_32323 = state_32282__$1;
(statearr_32286_32323[(2)] = inst_32272);

(statearr_32286_32323[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32283 === (27))){
var inst_32263 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32282__$1 = state_32282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32282__$1,(30),inst_32263);
} else {
if((state_val_32283 === (1))){
var inst_32214 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32282__$1 = state_32282;
if(cljs.core.truth_(inst_32214)){
var statearr_32287_32324 = state_32282__$1;
(statearr_32287_32324[(1)] = (2));

} else {
var statearr_32288_32325 = state_32282__$1;
(statearr_32288_32325[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32283 === (24))){
var inst_32261 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32282__$1 = state_32282;
if(inst_32261){
var statearr_32289_32326 = state_32282__$1;
(statearr_32289_32326[(1)] = (27));

} else {
var statearr_32290_32327 = state_32282__$1;
(statearr_32290_32327[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32283 === (4))){
var inst_32280 = (state_32282[(2)]);
var state_32282__$1 = state_32282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32282__$1,inst_32280);
} else {
if((state_val_32283 === (15))){
var inst_32241 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32242 = figwheel.client.heads_up.append_message.call(null,inst_32241);
var state_32282__$1 = state_32282;
var statearr_32291_32328 = state_32282__$1;
(statearr_32291_32328[(2)] = inst_32242);

(statearr_32291_32328[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32283 === (21))){
var inst_32248 = (state_32282[(2)]);
var inst_32249 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32250 = figwheel.client.heads_up.display_warning.call(null,inst_32249);
var state_32282__$1 = (function (){var statearr_32292 = state_32282;
(statearr_32292[(7)] = inst_32248);

return statearr_32292;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32282__$1,(22),inst_32250);
} else {
if((state_val_32283 === (13))){
var inst_32276 = (state_32282[(2)]);
var state_32282__$1 = state_32282;
var statearr_32293_32329 = state_32282__$1;
(statearr_32293_32329[(2)] = inst_32276);

(statearr_32293_32329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32283 === (22))){
var inst_32252 = (state_32282[(2)]);
var state_32282__$1 = state_32282;
var statearr_32294_32330 = state_32282__$1;
(statearr_32294_32330[(2)] = inst_32252);

(statearr_32294_32330[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32283 === (29))){
var inst_32268 = (state_32282[(2)]);
var state_32282__$1 = state_32282;
var statearr_32295_32331 = state_32282__$1;
(statearr_32295_32331[(2)] = inst_32268);

(statearr_32295_32331[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32283 === (6))){
var inst_32222 = figwheel.client.heads_up.clear.call(null);
var state_32282__$1 = state_32282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32282__$1,(9),inst_32222);
} else {
if((state_val_32283 === (28))){
var state_32282__$1 = state_32282;
var statearr_32296_32332 = state_32282__$1;
(statearr_32296_32332[(2)] = null);

(statearr_32296_32332[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32283 === (25))){
var inst_32270 = (state_32282[(2)]);
var state_32282__$1 = state_32282;
var statearr_32297_32333 = state_32282__$1;
(statearr_32297_32333[(2)] = inst_32270);

(statearr_32297_32333[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32283 === (17))){
var inst_32274 = (state_32282[(2)]);
var state_32282__$1 = state_32282;
var statearr_32298_32334 = state_32282__$1;
(statearr_32298_32334[(2)] = inst_32274);

(statearr_32298_32334[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32283 === (3))){
var inst_32220 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32282__$1 = state_32282;
if(inst_32220){
var statearr_32299_32335 = state_32282__$1;
(statearr_32299_32335[(1)] = (6));

} else {
var statearr_32300_32336 = state_32282__$1;
(statearr_32300_32336[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32283 === (12))){
var inst_32239 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32282__$1 = state_32282;
if(inst_32239){
var statearr_32301_32337 = state_32282__$1;
(statearr_32301_32337[(1)] = (15));

} else {
var statearr_32302_32338 = state_32282__$1;
(statearr_32302_32338[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32283 === (2))){
var inst_32216 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32282__$1 = state_32282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32282__$1,(5),inst_32216);
} else {
if((state_val_32283 === (23))){
var inst_32256 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32257 = figwheel.client.heads_up.display_warning.call(null,inst_32256);
var state_32282__$1 = state_32282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32282__$1,(26),inst_32257);
} else {
if((state_val_32283 === (19))){
var inst_32254 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32282__$1 = state_32282;
if(inst_32254){
var statearr_32303_32339 = state_32282__$1;
(statearr_32303_32339[(1)] = (23));

} else {
var statearr_32304_32340 = state_32282__$1;
(statearr_32304_32340[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32283 === (11))){
var inst_32233 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32234 = figwheel.client.format_messages.call(null,inst_32233);
var inst_32235 = figwheel.client.heads_up.display_error.call(null,inst_32234);
var state_32282__$1 = state_32282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32282__$1,(14),inst_32235);
} else {
if((state_val_32283 === (9))){
var inst_32224 = (state_32282[(2)]);
var inst_32225 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32226 = figwheel.client.format_messages.call(null,inst_32225);
var inst_32227 = figwheel.client.heads_up.display_error.call(null,inst_32226);
var state_32282__$1 = (function (){var statearr_32305 = state_32282;
(statearr_32305[(8)] = inst_32224);

return statearr_32305;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32282__$1,(10),inst_32227);
} else {
if((state_val_32283 === (5))){
var inst_32218 = (state_32282[(2)]);
var state_32282__$1 = state_32282;
var statearr_32306_32341 = state_32282__$1;
(statearr_32306_32341[(2)] = inst_32218);

(statearr_32306_32341[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32283 === (14))){
var inst_32237 = (state_32282[(2)]);
var state_32282__$1 = state_32282;
var statearr_32307_32342 = state_32282__$1;
(statearr_32307_32342[(2)] = inst_32237);

(statearr_32307_32342[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32283 === (26))){
var inst_32259 = (state_32282[(2)]);
var state_32282__$1 = state_32282;
var statearr_32308_32343 = state_32282__$1;
(statearr_32308_32343[(2)] = inst_32259);

(statearr_32308_32343[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32283 === (16))){
var inst_32244 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32282__$1 = state_32282;
if(inst_32244){
var statearr_32309_32344 = state_32282__$1;
(statearr_32309_32344[(1)] = (18));

} else {
var statearr_32310_32345 = state_32282__$1;
(statearr_32310_32345[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32283 === (30))){
var inst_32265 = (state_32282[(2)]);
var state_32282__$1 = state_32282;
var statearr_32311_32346 = state_32282__$1;
(statearr_32311_32346[(2)] = inst_32265);

(statearr_32311_32346[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32283 === (10))){
var inst_32229 = (state_32282[(2)]);
var state_32282__$1 = state_32282;
var statearr_32312_32347 = state_32282__$1;
(statearr_32312_32347[(2)] = inst_32229);

(statearr_32312_32347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32283 === (18))){
var inst_32246 = figwheel.client.heads_up.clear.call(null);
var state_32282__$1 = state_32282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32282__$1,(21),inst_32246);
} else {
if((state_val_32283 === (8))){
var inst_32278 = (state_32282[(2)]);
var state_32282__$1 = state_32282;
var statearr_32313_32348 = state_32282__$1;
(statearr_32313_32348[(2)] = inst_32278);

(statearr_32313_32348[(1)] = (4));


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
});})(c__23281__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23216__auto__,c__23281__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__23217__auto__ = null;
var state_machine__23217__auto____0 = (function (){
var statearr_32317 = [null,null,null,null,null,null,null,null,null];
(statearr_32317[(0)] = state_machine__23217__auto__);

(statearr_32317[(1)] = (1));

return statearr_32317;
});
var state_machine__23217__auto____1 = (function (state_32282){
while(true){
var ret_value__23218__auto__ = (function (){try{while(true){
var result__23219__auto__ = switch__23216__auto__.call(null,state_32282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23219__auto__;
}
break;
}
}catch (e32318){if((e32318 instanceof Object)){
var ex__23220__auto__ = e32318;
var statearr_32319_32349 = state_32282;
(statearr_32319_32349[(5)] = ex__23220__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32350 = state_32282;
state_32282 = G__32350;
continue;
} else {
return ret_value__23218__auto__;
}
break;
}
});
state_machine__23217__auto__ = function(state_32282){
switch(arguments.length){
case 0:
return state_machine__23217__auto____0.call(this);
case 1:
return state_machine__23217__auto____1.call(this,state_32282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23217__auto____0;
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23217__auto____1;
return state_machine__23217__auto__;
})()
;})(switch__23216__auto__,c__23281__auto__,msg_hist,msg_names,msg))
})();
var state__23283__auto__ = (function (){var statearr_32320 = f__23282__auto__.call(null);
(statearr_32320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23281__auto__);

return statearr_32320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23283__auto__);
});})(c__23281__auto__,msg_hist,msg_names,msg))
);

return c__23281__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23281__auto___32413 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23281__auto___32413,ch){
return (function (){
var f__23282__auto__ = (function (){var switch__23216__auto__ = ((function (c__23281__auto___32413,ch){
return (function (state_32396){
var state_val_32397 = (state_32396[(1)]);
if((state_val_32397 === (8))){
var inst_32388 = (state_32396[(2)]);
var state_32396__$1 = (function (){var statearr_32398 = state_32396;
(statearr_32398[(7)] = inst_32388);

return statearr_32398;
})();
var statearr_32399_32414 = state_32396__$1;
(statearr_32399_32414[(2)] = null);

(statearr_32399_32414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32397 === (7))){
var inst_32392 = (state_32396[(2)]);
var state_32396__$1 = state_32396;
var statearr_32400_32415 = state_32396__$1;
(statearr_32400_32415[(2)] = inst_32392);

(statearr_32400_32415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32397 === (6))){
var state_32396__$1 = state_32396;
var statearr_32401_32416 = state_32396__$1;
(statearr_32401_32416[(2)] = null);

(statearr_32401_32416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32397 === (5))){
var inst_32384 = (state_32396[(8)]);
var inst_32386 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32384);
var state_32396__$1 = state_32396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32396__$1,(8),inst_32386);
} else {
if((state_val_32397 === (4))){
var inst_32384 = (state_32396[(8)]);
var inst_32384__$1 = (state_32396[(2)]);
var state_32396__$1 = (function (){var statearr_32402 = state_32396;
(statearr_32402[(8)] = inst_32384__$1);

return statearr_32402;
})();
if(cljs.core.truth_(inst_32384__$1)){
var statearr_32403_32417 = state_32396__$1;
(statearr_32403_32417[(1)] = (5));

} else {
var statearr_32404_32418 = state_32396__$1;
(statearr_32404_32418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32397 === (3))){
var inst_32394 = (state_32396[(2)]);
var state_32396__$1 = state_32396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32396__$1,inst_32394);
} else {
if((state_val_32397 === (2))){
var state_32396__$1 = state_32396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32396__$1,(4),ch);
} else {
if((state_val_32397 === (1))){
var state_32396__$1 = state_32396;
var statearr_32405_32419 = state_32396__$1;
(statearr_32405_32419[(2)] = null);

(statearr_32405_32419[(1)] = (2));


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
});})(c__23281__auto___32413,ch))
;
return ((function (switch__23216__auto__,c__23281__auto___32413,ch){
return (function() {
var state_machine__23217__auto__ = null;
var state_machine__23217__auto____0 = (function (){
var statearr_32409 = [null,null,null,null,null,null,null,null,null];
(statearr_32409[(0)] = state_machine__23217__auto__);

(statearr_32409[(1)] = (1));

return statearr_32409;
});
var state_machine__23217__auto____1 = (function (state_32396){
while(true){
var ret_value__23218__auto__ = (function (){try{while(true){
var result__23219__auto__ = switch__23216__auto__.call(null,state_32396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23219__auto__;
}
break;
}
}catch (e32410){if((e32410 instanceof Object)){
var ex__23220__auto__ = e32410;
var statearr_32411_32420 = state_32396;
(statearr_32411_32420[(5)] = ex__23220__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32421 = state_32396;
state_32396 = G__32421;
continue;
} else {
return ret_value__23218__auto__;
}
break;
}
});
state_machine__23217__auto__ = function(state_32396){
switch(arguments.length){
case 0:
return state_machine__23217__auto____0.call(this);
case 1:
return state_machine__23217__auto____1.call(this,state_32396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23217__auto____0;
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23217__auto____1;
return state_machine__23217__auto__;
})()
;})(switch__23216__auto__,c__23281__auto___32413,ch))
})();
var state__23283__auto__ = (function (){var statearr_32412 = f__23282__auto__.call(null);
(statearr_32412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23281__auto___32413);

return statearr_32412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23283__auto__);
});})(c__23281__auto___32413,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23281__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23281__auto__){
return (function (){
var f__23282__auto__ = (function (){var switch__23216__auto__ = ((function (c__23281__auto__){
return (function (state_32442){
var state_val_32443 = (state_32442[(1)]);
if((state_val_32443 === (2))){
var inst_32439 = (state_32442[(2)]);
var inst_32440 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32442__$1 = (function (){var statearr_32444 = state_32442;
(statearr_32444[(7)] = inst_32439);

return statearr_32444;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32442__$1,inst_32440);
} else {
if((state_val_32443 === (1))){
var inst_32437 = cljs.core.async.timeout.call(null,(3000));
var state_32442__$1 = state_32442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32442__$1,(2),inst_32437);
} else {
return null;
}
}
});})(c__23281__auto__))
;
return ((function (switch__23216__auto__,c__23281__auto__){
return (function() {
var state_machine__23217__auto__ = null;
var state_machine__23217__auto____0 = (function (){
var statearr_32448 = [null,null,null,null,null,null,null,null];
(statearr_32448[(0)] = state_machine__23217__auto__);

(statearr_32448[(1)] = (1));

return statearr_32448;
});
var state_machine__23217__auto____1 = (function (state_32442){
while(true){
var ret_value__23218__auto__ = (function (){try{while(true){
var result__23219__auto__ = switch__23216__auto__.call(null,state_32442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23219__auto__;
}
break;
}
}catch (e32449){if((e32449 instanceof Object)){
var ex__23220__auto__ = e32449;
var statearr_32450_32452 = state_32442;
(statearr_32450_32452[(5)] = ex__23220__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32453 = state_32442;
state_32442 = G__32453;
continue;
} else {
return ret_value__23218__auto__;
}
break;
}
});
state_machine__23217__auto__ = function(state_32442){
switch(arguments.length){
case 0:
return state_machine__23217__auto____0.call(this);
case 1:
return state_machine__23217__auto____1.call(this,state_32442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23217__auto____0;
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23217__auto____1;
return state_machine__23217__auto__;
})()
;})(switch__23216__auto__,c__23281__auto__))
})();
var state__23283__auto__ = (function (){var statearr_32451 = f__23282__auto__.call(null);
(statearr_32451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23281__auto__);

return statearr_32451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23283__auto__);
});})(c__23281__auto__))
);

return c__23281__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
if(cljs.core.truth_(("CustomEvent" in window))){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj32457 = {"detail":url};
return obj32457;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__32458){
var map__32464 = p__32458;
var map__32464__$1 = ((cljs.core.seq_QMARK_.call(null,map__32464))?cljs.core.apply.call(null,cljs.core.hash_map,map__32464):map__32464);
var ed = map__32464__$1;
var exception_data = cljs.core.get.call(null,map__32464__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__32464__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
console.debug("Figwheel: Compile Exception");

var seq__32465_32469 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__32466_32470 = null;
var count__32467_32471 = (0);
var i__32468_32472 = (0);
while(true){
if((i__32468_32472 < count__32467_32471)){
var msg_32473 = cljs.core._nth.call(null,chunk__32466_32470,i__32468_32472);
console.log(msg_32473);

var G__32474 = seq__32465_32469;
var G__32475 = chunk__32466_32470;
var G__32476 = count__32467_32471;
var G__32477 = (i__32468_32472 + (1));
seq__32465_32469 = G__32474;
chunk__32466_32470 = G__32475;
count__32467_32471 = G__32476;
i__32468_32472 = G__32477;
continue;
} else {
var temp__4126__auto___32478 = cljs.core.seq.call(null,seq__32465_32469);
if(temp__4126__auto___32478){
var seq__32465_32479__$1 = temp__4126__auto___32478;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32465_32479__$1)){
var c__21520__auto___32480 = cljs.core.chunk_first.call(null,seq__32465_32479__$1);
var G__32481 = cljs.core.chunk_rest.call(null,seq__32465_32479__$1);
var G__32482 = c__21520__auto___32480;
var G__32483 = cljs.core.count.call(null,c__21520__auto___32480);
var G__32484 = (0);
seq__32465_32469 = G__32481;
chunk__32466_32470 = G__32482;
count__32467_32471 = G__32483;
i__32468_32472 = G__32484;
continue;
} else {
var msg_32485 = cljs.core.first.call(null,seq__32465_32479__$1);
console.log(msg_32485);

var G__32486 = cljs.core.next.call(null,seq__32465_32479__$1);
var G__32487 = null;
var G__32488 = (0);
var G__32489 = (0);
seq__32465_32469 = G__32486;
chunk__32466_32470 = G__32487;
count__32467_32471 = G__32488;
i__32468_32472 = G__32489;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__32490){
var map__32492 = p__32490;
var map__32492__$1 = ((cljs.core.seq_QMARK_.call(null,map__32492))?cljs.core.apply.call(null,cljs.core.hash_map,map__32492):map__32492);
var w = map__32492__$1;
var message = cljs.core.get.call(null,map__32492__$1,new cljs.core.Keyword(null,"message","message",-406056002));
console.warn("Figwheel: Compile Warning -",message);

return w;
});
figwheel.client.default_before_load = (function default_before_load(files){
console.debug("Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
console.debug("Figwheel: loaded CSS files");

console.log(cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,true,[cljs.core.str("ws://"),cljs.core.str(location.host),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),cljs.core.identity,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options))){
return cljs.core.assoc.call(null,base,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base;
}
});
figwheel.client.add_plugins = (function add_plugins(plugins,system_options){
var seq__32499 = cljs.core.seq.call(null,plugins);
var chunk__32500 = null;
var count__32501 = (0);
var i__32502 = (0);
while(true){
if((i__32502 < count__32501)){
var vec__32503 = cljs.core._nth.call(null,chunk__32500,i__32502);
var k = cljs.core.nth.call(null,vec__32503,(0),null);
var plugin = cljs.core.nth.call(null,vec__32503,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32505 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32499,chunk__32500,count__32501,i__32502,pl_32505,vec__32503,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32505.call(null,msg_hist);
});})(seq__32499,chunk__32500,count__32501,i__32502,pl_32505,vec__32503,k,plugin))
);
} else {
}

var G__32506 = seq__32499;
var G__32507 = chunk__32500;
var G__32508 = count__32501;
var G__32509 = (i__32502 + (1));
seq__32499 = G__32506;
chunk__32500 = G__32507;
count__32501 = G__32508;
i__32502 = G__32509;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__32499);
if(temp__4126__auto__){
var seq__32499__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32499__$1)){
var c__21520__auto__ = cljs.core.chunk_first.call(null,seq__32499__$1);
var G__32510 = cljs.core.chunk_rest.call(null,seq__32499__$1);
var G__32511 = c__21520__auto__;
var G__32512 = cljs.core.count.call(null,c__21520__auto__);
var G__32513 = (0);
seq__32499 = G__32510;
chunk__32500 = G__32511;
count__32501 = G__32512;
i__32502 = G__32513;
continue;
} else {
var vec__32504 = cljs.core.first.call(null,seq__32499__$1);
var k = cljs.core.nth.call(null,vec__32504,(0),null);
var plugin = cljs.core.nth.call(null,vec__32504,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32514 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32499,chunk__32500,count__32501,i__32502,pl_32514,vec__32504,k,plugin,seq__32499__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32514.call(null,msg_hist);
});})(seq__32499,chunk__32500,count__32501,i__32502,pl_32514,vec__32504,k,plugin,seq__32499__$1,temp__4126__auto__))
);
} else {
}

var G__32515 = cljs.core.next.call(null,seq__32499__$1);
var G__32516 = null;
var G__32517 = (0);
var G__32518 = (0);
seq__32499 = G__32515;
chunk__32500 = G__32516;
count__32501 = G__32517;
i__32502 = G__32518;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var start = null;
var start__0 = (function (){
return start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var start__1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = (function (){var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
})();
}
});
start = function(opts){
switch(arguments.length){
case 0:
return start__0.call(this);
case 1:
return start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
start.cljs$core$IFn$_invoke$arity$0 = start__0;
start.cljs$core$IFn$_invoke$arity$1 = start__1;
return start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__32519){
var map__32521 = p__32519;
var map__32521__$1 = ((cljs.core.seq_QMARK_.call(null,map__32521))?cljs.core.apply.call(null,cljs.core.hash_map,map__32521):map__32521);
var opts = map__32521__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__32519 = null;
if (arguments.length > 0) {
  p__32519 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return watch_and_reload__delegate.call(this,p__32519);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__32522){
var p__32519 = cljs.core.seq(arglist__32522);
return watch_and_reload__delegate(p__32519);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
