// Compiled by ClojureScript 0.0-2511
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('goog.net.jsloader');
goog.require('goog.string');
goog.require('goog.Uri');
figwheel.client.file_reloading.add_cache_buster = (function add_cache_buster(url){
return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.reload_host = (function reload_host(p__32785){
var map__32787 = p__32785;
var map__32787__$1 = ((cljs.core.seq_QMARK_.call(null,map__32787))?cljs.core.apply.call(null,cljs.core.hash_map,map__32787):map__32787);
var websocket_url = cljs.core.get.call(null,map__32787__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^wss?:/,""),/^\/\//,""),/\//));
});
if(typeof figwheel.client.file_reloading.ns_meta_data !== 'undefined'){
} else {
figwheel.client.file_reloading.ns_meta_data = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.get_meta_data_for_ns = (function get_meta_data_for_ns(ns){
return cljs.core.get.call(null,figwheel.client.file_reloading.ns_meta_data,ns);
});
figwheel.client.file_reloading.resolve_ns = (function resolve_ns(ns){
return [cljs.core.str(clojure.string.replace_first.call(null,goog.basePath,"/goog","")),cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.js_reload = (function js_reload(p__32788,callback){
var map__32790 = p__32788;
var map__32790__$1 = ((cljs.core.seq_QMARK_.call(null,map__32790))?cljs.core.apply.call(null,cljs.core.hash_map,map__32790):map__32790);
var msg = map__32790__$1;
var meta_data = cljs.core.get.call(null,map__32790__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var dependency_file = cljs.core.get.call(null,map__32790__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));
var namespace = cljs.core.get.call(null,map__32790__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__32790__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.ns_meta_data,cljs.core.assoc,namespace,meta_data);

if(cljs.core.truth_((function (){var and__20721__auto__ = (function (){var or__20733__auto__ = dependency_file;
if(cljs.core.truth_(or__20733__auto__)){
return or__20733__auto__;
} else {
var or__20733__auto____$1 = (function (){var and__20721__auto__ = meta_data;
if(cljs.core.truth_(and__20721__auto__)){
return new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
} else {
return and__20721__auto__;
}
})();
if(cljs.core.truth_(or__20733__auto____$1)){
return or__20733__auto____$1;
} else {
return goog.isProvided_(cljs.core.name.call(null,namespace));
}
}
})();
if(cljs.core.truth_(and__20721__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1((function (){var or__20733__auto__ = meta_data;
if(cljs.core.truth_(or__20733__auto__)){
return or__20733__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()));
} else {
return and__20721__auto__;
}
})())){
return goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true}).addCallback(((function (map__32790,map__32790__$1,msg,meta_data,dependency_file,namespace,request_url){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
});})(map__32790,map__32790__$1,msg,meta_data,dependency_file,namespace,request_url))
);
} else {
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(10));

return out;
});
/**
* Returns a chanel with one collection of loaded filenames on it.
*/
figwheel.client.file_reloading.load_all_js_files = (function load_all_js_files(files){
return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.file_reloading.reload_js_file,files))));
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__32791,p__32792){
var map__32795 = p__32791;
var map__32795__$1 = ((cljs.core.seq_QMARK_.call(null,map__32795))?cljs.core.apply.call(null,cljs.core.hash_map,map__32795):map__32795);
var opts = map__32795__$1;
var url_rewriter = cljs.core.get.call(null,map__32795__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__32796 = p__32792;
var map__32796__$1 = ((cljs.core.seq_QMARK_.call(null,map__32796))?cljs.core.apply.call(null,cljs.core.hash_map,map__32796):map__32796);
var d = map__32796__$1;
var file = cljs.core.get.call(null,map__32796__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.file_reloading.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__32798,p__32799){
var map__32853 = p__32798;
var map__32853__$1 = ((cljs.core.seq_QMARK_.call(null,map__32853))?cljs.core.apply.call(null,cljs.core.hash_map,map__32853):map__32853);
var opts = map__32853__$1;
var on_jsload = cljs.core.get.call(null,map__32853__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__32853__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__32854 = p__32799;
var map__32854__$1 = ((cljs.core.seq_QMARK_.call(null,map__32854))?cljs.core.apply.call(null,cljs.core.hash_map,map__32854):map__32854);
var msg = map__32854__$1;
var files = cljs.core.get.call(null,map__32854__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__23281__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23281__auto__,map__32853,map__32853__$1,opts,on_jsload,before_jsload,map__32854,map__32854__$1,msg,files){
return (function (){
var f__23282__auto__ = (function (){var switch__23216__auto__ = ((function (c__23281__auto__,map__32853,map__32853__$1,opts,on_jsload,before_jsload,map__32854,map__32854__$1,msg,files){
return (function (state_32884){
var state_val_32885 = (state_32884[(1)]);
if((state_val_32885 === (8))){
var inst_32882 = (state_32884[(2)]);
var state_32884__$1 = state_32884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32884__$1,inst_32882);
} else {
if((state_val_32885 === (7))){
var state_32884__$1 = state_32884;
var statearr_32886_32906 = state_32884__$1;
(statearr_32886_32906[(2)] = null);

(statearr_32886_32906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (6))){
var inst_32862 = (state_32884[(7)]);
var inst_32876 = console.debug("Figwheel: NOT loading files that haven't been required");
var inst_32877 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32862);
var inst_32878 = cljs.core.pr_str.call(null,inst_32877);
var inst_32879 = console.log("not required:",inst_32878);
var state_32884__$1 = (function (){var statearr_32887 = state_32884;
(statearr_32887[(8)] = inst_32876);

return statearr_32887;
})();
var statearr_32888_32907 = state_32884__$1;
(statearr_32888_32907[(2)] = inst_32879);

(statearr_32888_32907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (5))){
var inst_32862 = (state_32884[(7)]);
var inst_32873 = (state_32884[(2)]);
var inst_32874 = cljs.core.not_empty.call(null,inst_32862);
var state_32884__$1 = (function (){var statearr_32889 = state_32884;
(statearr_32889[(9)] = inst_32873);

return statearr_32889;
})();
if(cljs.core.truth_(inst_32874)){
var statearr_32890_32908 = state_32884__$1;
(statearr_32890_32908[(1)] = (6));

} else {
var statearr_32891_32909 = state_32884__$1;
(statearr_32891_32909[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (4))){
var state_32884__$1 = state_32884;
var statearr_32892_32910 = state_32884__$1;
(statearr_32892_32910[(2)] = null);

(statearr_32892_32910[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (3))){
var inst_32859 = (state_32884[(10)]);
var inst_32856 = (state_32884[(11)]);
var inst_32860 = (state_32884[(12)]);
var inst_32862 = (state_32884[(7)]);
var inst_32865 = console.debug("Figwheel: loaded these files");
var inst_32866 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32860);
var inst_32867 = cljs.core.pr_str.call(null,inst_32866);
var inst_32868 = console.log(inst_32867);
var inst_32869 = (function (){var files_not_loaded = inst_32862;
var res = inst_32860;
var res_SINGLEQUOTE_ = inst_32859;
var files_SINGLEQUOTE_ = inst_32856;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_32859,inst_32856,inst_32860,inst_32862,inst_32865,inst_32866,inst_32867,inst_32868,state_val_32885,c__23281__auto__,map__32853,map__32853__$1,opts,on_jsload,before_jsload,map__32854,map__32854__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_32859,inst_32856,inst_32860,inst_32862,inst_32865,inst_32866,inst_32867,inst_32868,state_val_32885,c__23281__auto__,map__32853,map__32853__$1,opts,on_jsload,before_jsload,map__32854,map__32854__$1,msg,files))
})();
var inst_32870 = setTimeout(inst_32869,(10));
var state_32884__$1 = (function (){var statearr_32893 = state_32884;
(statearr_32893[(13)] = inst_32868);

(statearr_32893[(14)] = inst_32865);

return statearr_32893;
})();
var statearr_32894_32911 = state_32884__$1;
(statearr_32894_32911[(2)] = inst_32870);

(statearr_32894_32911[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (2))){
var inst_32859 = (state_32884[(10)]);
var inst_32856 = (state_32884[(11)]);
var inst_32860 = (state_32884[(12)]);
var inst_32859__$1 = (state_32884[(2)]);
var inst_32860__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32859__$1);
var inst_32861 = (function (){var res = inst_32860__$1;
var res_SINGLEQUOTE_ = inst_32859__$1;
var files_SINGLEQUOTE_ = inst_32856;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_32859,inst_32856,inst_32860,inst_32859__$1,inst_32860__$1,state_val_32885,c__23281__auto__,map__32853,map__32853__$1,opts,on_jsload,before_jsload,map__32854,map__32854__$1,msg,files){
return (function (p1__32797_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32797_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_32859,inst_32856,inst_32860,inst_32859__$1,inst_32860__$1,state_val_32885,c__23281__auto__,map__32853,map__32853__$1,opts,on_jsload,before_jsload,map__32854,map__32854__$1,msg,files))
})();
var inst_32862 = cljs.core.filter.call(null,inst_32861,inst_32859__$1);
var inst_32863 = cljs.core.not_empty.call(null,inst_32860__$1);
var state_32884__$1 = (function (){var statearr_32895 = state_32884;
(statearr_32895[(10)] = inst_32859__$1);

(statearr_32895[(12)] = inst_32860__$1);

(statearr_32895[(7)] = inst_32862);

return statearr_32895;
})();
if(cljs.core.truth_(inst_32863)){
var statearr_32896_32912 = state_32884__$1;
(statearr_32896_32912[(1)] = (3));

} else {
var statearr_32897_32913 = state_32884__$1;
(statearr_32897_32913[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (1))){
var inst_32856 = (state_32884[(11)]);
var inst_32855 = before_jsload.call(null,files);
var inst_32856__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,files);
var inst_32857 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32856__$1);
var state_32884__$1 = (function (){var statearr_32898 = state_32884;
(statearr_32898[(11)] = inst_32856__$1);

(statearr_32898[(15)] = inst_32855);

return statearr_32898;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32884__$1,(2),inst_32857);
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
});})(c__23281__auto__,map__32853,map__32853__$1,opts,on_jsload,before_jsload,map__32854,map__32854__$1,msg,files))
;
return ((function (switch__23216__auto__,c__23281__auto__,map__32853,map__32853__$1,opts,on_jsload,before_jsload,map__32854,map__32854__$1,msg,files){
return (function() {
var state_machine__23217__auto__ = null;
var state_machine__23217__auto____0 = (function (){
var statearr_32902 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32902[(0)] = state_machine__23217__auto__);

(statearr_32902[(1)] = (1));

return statearr_32902;
});
var state_machine__23217__auto____1 = (function (state_32884){
while(true){
var ret_value__23218__auto__ = (function (){try{while(true){
var result__23219__auto__ = switch__23216__auto__.call(null,state_32884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23219__auto__;
}
break;
}
}catch (e32903){if((e32903 instanceof Object)){
var ex__23220__auto__ = e32903;
var statearr_32904_32914 = state_32884;
(statearr_32904_32914[(5)] = ex__23220__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32915 = state_32884;
state_32884 = G__32915;
continue;
} else {
return ret_value__23218__auto__;
}
break;
}
});
state_machine__23217__auto__ = function(state_32884){
switch(arguments.length){
case 0:
return state_machine__23217__auto____0.call(this);
case 1:
return state_machine__23217__auto____1.call(this,state_32884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23217__auto____0;
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23217__auto____1;
return state_machine__23217__auto__;
})()
;})(switch__23216__auto__,c__23281__auto__,map__32853,map__32853__$1,opts,on_jsload,before_jsload,map__32854,map__32854__$1,msg,files))
})();
var state__23283__auto__ = (function (){var statearr_32905 = f__23282__auto__.call(null);
(statearr_32905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23281__auto__);

return statearr_32905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23283__auto__);
});})(c__23281__auto__,map__32853,map__32853__$1,opts,on_jsload,before_jsload,map__32854,map__32854__$1,msg,files))
);

return c__23281__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__32916,link_href){
var map__32918 = p__32916;
var map__32918__$1 = ((cljs.core.seq_QMARK_.call(null,map__32918))?cljs.core.apply.call(null,cljs.core.hash_map,map__32918):map__32918);
var request_url = cljs.core.get.call(null,map__32918__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__32918__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var trunc_href = figwheel.client.file_reloading.truncate_url.call(null,link_href);
return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.file_reloading.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.file_reloading.get_correct_link = (function get_correct_link(f_data){
return cljs.core.some.call(null,(function (l){
if(figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,l.href)){
return l;
} else {
return null;
}
}),figwheel.client.file_reloading.current_links.call(null));
});
figwheel.client.file_reloading.clone_link = (function clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

var c__23281__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23281__auto__,parent){
return (function (){
var f__23282__auto__ = (function (){var switch__23216__auto__ = ((function (c__23281__auto__,parent){
return (function (state_32939){
var state_val_32940 = (state_32939[(1)]);
if((state_val_32940 === (2))){
var inst_32936 = (state_32939[(2)]);
var inst_32937 = parent.removeChild(orig_link);
var state_32939__$1 = (function (){var statearr_32941 = state_32939;
(statearr_32941[(7)] = inst_32936);

return statearr_32941;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32939__$1,inst_32937);
} else {
if((state_val_32940 === (1))){
var inst_32934 = cljs.core.async.timeout.call(null,(200));
var state_32939__$1 = state_32939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32939__$1,(2),inst_32934);
} else {
return null;
}
}
});})(c__23281__auto__,parent))
;
return ((function (switch__23216__auto__,c__23281__auto__,parent){
return (function() {
var state_machine__23217__auto__ = null;
var state_machine__23217__auto____0 = (function (){
var statearr_32945 = [null,null,null,null,null,null,null,null];
(statearr_32945[(0)] = state_machine__23217__auto__);

(statearr_32945[(1)] = (1));

return statearr_32945;
});
var state_machine__23217__auto____1 = (function (state_32939){
while(true){
var ret_value__23218__auto__ = (function (){try{while(true){
var result__23219__auto__ = switch__23216__auto__.call(null,state_32939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23219__auto__;
}
break;
}
}catch (e32946){if((e32946 instanceof Object)){
var ex__23220__auto__ = e32946;
var statearr_32947_32949 = state_32939;
(statearr_32947_32949[(5)] = ex__23220__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32950 = state_32939;
state_32939 = G__32950;
continue;
} else {
return ret_value__23218__auto__;
}
break;
}
});
state_machine__23217__auto__ = function(state_32939){
switch(arguments.length){
case 0:
return state_machine__23217__auto____0.call(this);
case 1:
return state_machine__23217__auto____1.call(this,state_32939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23217__auto____0;
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23217__auto____1;
return state_machine__23217__auto__;
})()
;})(switch__23216__auto__,c__23281__auto__,parent))
})();
var state__23283__auto__ = (function (){var statearr_32948 = f__23282__auto__.call(null);
(statearr_32948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23281__auto__);

return statearr_32948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23283__auto__);
});})(c__23281__auto__,parent))
);

return c__23281__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__32951){
var map__32953 = p__32951;
var map__32953__$1 = ((cljs.core.seq_QMARK_.call(null,map__32953))?cljs.core.apply.call(null,cljs.core.hash_map,map__32953):map__32953);
var f_data = map__32953__$1;
var request_url = cljs.core.get.call(null,map__32953__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__32953__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,request_url));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,request_url));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__32954,files_msg){
var map__32976 = p__32954;
var map__32976__$1 = ((cljs.core.seq_QMARK_.call(null,map__32976))?cljs.core.apply.call(null,cljs.core.hash_map,map__32976):map__32976);
var opts = map__32976__$1;
var on_cssload = cljs.core.get.call(null,map__32976__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var seq__32977_32997 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__32978_32998 = null;
var count__32979_32999 = (0);
var i__32980_33000 = (0);
while(true){
if((i__32980_33000 < count__32979_32999)){
var f_33001 = cljs.core._nth.call(null,chunk__32978_32998,i__32980_33000);
figwheel.client.file_reloading.reload_css_file.call(null,f_33001);

var G__33002 = seq__32977_32997;
var G__33003 = chunk__32978_32998;
var G__33004 = count__32979_32999;
var G__33005 = (i__32980_33000 + (1));
seq__32977_32997 = G__33002;
chunk__32978_32998 = G__33003;
count__32979_32999 = G__33004;
i__32980_33000 = G__33005;
continue;
} else {
var temp__4126__auto___33006 = cljs.core.seq.call(null,seq__32977_32997);
if(temp__4126__auto___33006){
var seq__32977_33007__$1 = temp__4126__auto___33006;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32977_33007__$1)){
var c__21520__auto___33008 = cljs.core.chunk_first.call(null,seq__32977_33007__$1);
var G__33009 = cljs.core.chunk_rest.call(null,seq__32977_33007__$1);
var G__33010 = c__21520__auto___33008;
var G__33011 = cljs.core.count.call(null,c__21520__auto___33008);
var G__33012 = (0);
seq__32977_32997 = G__33009;
chunk__32978_32998 = G__33010;
count__32979_32999 = G__33011;
i__32980_33000 = G__33012;
continue;
} else {
var f_33013 = cljs.core.first.call(null,seq__32977_33007__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_33013);

var G__33014 = cljs.core.next.call(null,seq__32977_33007__$1);
var G__33015 = null;
var G__33016 = (0);
var G__33017 = (0);
seq__32977_32997 = G__33014;
chunk__32978_32998 = G__33015;
count__32979_32999 = G__33016;
i__32980_33000 = G__33017;
continue;
}
} else {
}
}
break;
}

var c__23281__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23281__auto__,map__32976,map__32976__$1,opts,on_cssload){
return (function (){
var f__23282__auto__ = (function (){var switch__23216__auto__ = ((function (c__23281__auto__,map__32976,map__32976__$1,opts,on_cssload){
return (function (state_32987){
var state_val_32988 = (state_32987[(1)]);
if((state_val_32988 === (2))){
var inst_32983 = (state_32987[(2)]);
var inst_32984 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_32985 = on_cssload.call(null,inst_32984);
var state_32987__$1 = (function (){var statearr_32989 = state_32987;
(statearr_32989[(7)] = inst_32983);

return statearr_32989;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32987__$1,inst_32985);
} else {
if((state_val_32988 === (1))){
var inst_32981 = cljs.core.async.timeout.call(null,(100));
var state_32987__$1 = state_32987;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32987__$1,(2),inst_32981);
} else {
return null;
}
}
});})(c__23281__auto__,map__32976,map__32976__$1,opts,on_cssload))
;
return ((function (switch__23216__auto__,c__23281__auto__,map__32976,map__32976__$1,opts,on_cssload){
return (function() {
var state_machine__23217__auto__ = null;
var state_machine__23217__auto____0 = (function (){
var statearr_32993 = [null,null,null,null,null,null,null,null];
(statearr_32993[(0)] = state_machine__23217__auto__);

(statearr_32993[(1)] = (1));

return statearr_32993;
});
var state_machine__23217__auto____1 = (function (state_32987){
while(true){
var ret_value__23218__auto__ = (function (){try{while(true){
var result__23219__auto__ = switch__23216__auto__.call(null,state_32987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23219__auto__;
}
break;
}
}catch (e32994){if((e32994 instanceof Object)){
var ex__23220__auto__ = e32994;
var statearr_32995_33018 = state_32987;
(statearr_32995_33018[(5)] = ex__23220__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33019 = state_32987;
state_32987 = G__33019;
continue;
} else {
return ret_value__23218__auto__;
}
break;
}
});
state_machine__23217__auto__ = function(state_32987){
switch(arguments.length){
case 0:
return state_machine__23217__auto____0.call(this);
case 1:
return state_machine__23217__auto____1.call(this,state_32987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23217__auto____0;
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23217__auto____1;
return state_machine__23217__auto__;
})()
;})(switch__23216__auto__,c__23281__auto__,map__32976,map__32976__$1,opts,on_cssload))
})();
var state__23283__auto__ = (function (){var statearr_32996 = f__23282__auto__.call(null);
(statearr_32996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23281__auto__);

return statearr_32996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23283__auto__);
});})(c__23281__auto__,map__32976,map__32976__$1,opts,on_cssload))
);

return c__23281__auto__;
});
figwheel.client.file_reloading.figwheel_closure_import_script = (function figwheel_closure_import_script(src){
if(cljs.core.truth_(goog.inHtmlDocument_())){
goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,src));

return true;
} else {
return false;
}
});
figwheel.client.file_reloading.patch_goog_base = (function patch_goog_base(){
goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.figwheel_closure_import_script;
});
