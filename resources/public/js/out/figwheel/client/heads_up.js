// Compiled by ClojureScript 0.0-2511
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

/**
* @param {...*} var_args
*/
figwheel.client.heads_up.node = (function() { 
var node__delegate = function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__32538_32546 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__32539_32547 = null;
var count__32540_32548 = (0);
var i__32541_32549 = (0);
while(true){
if((i__32541_32549 < count__32540_32548)){
var k_32550 = cljs.core._nth.call(null,chunk__32539_32547,i__32541_32549);
e.setAttribute(cljs.core.name.call(null,k_32550),cljs.core.get.call(null,attrs,k_32550));

var G__32551 = seq__32538_32546;
var G__32552 = chunk__32539_32547;
var G__32553 = count__32540_32548;
var G__32554 = (i__32541_32549 + (1));
seq__32538_32546 = G__32551;
chunk__32539_32547 = G__32552;
count__32540_32548 = G__32553;
i__32541_32549 = G__32554;
continue;
} else {
var temp__4126__auto___32555 = cljs.core.seq.call(null,seq__32538_32546);
if(temp__4126__auto___32555){
var seq__32538_32556__$1 = temp__4126__auto___32555;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32538_32556__$1)){
var c__21520__auto___32557 = cljs.core.chunk_first.call(null,seq__32538_32556__$1);
var G__32558 = cljs.core.chunk_rest.call(null,seq__32538_32556__$1);
var G__32559 = c__21520__auto___32557;
var G__32560 = cljs.core.count.call(null,c__21520__auto___32557);
var G__32561 = (0);
seq__32538_32546 = G__32558;
chunk__32539_32547 = G__32559;
count__32540_32548 = G__32560;
i__32541_32549 = G__32561;
continue;
} else {
var k_32562 = cljs.core.first.call(null,seq__32538_32556__$1);
e.setAttribute(cljs.core.name.call(null,k_32562),cljs.core.get.call(null,attrs,k_32562));

var G__32563 = cljs.core.next.call(null,seq__32538_32556__$1);
var G__32564 = null;
var G__32565 = (0);
var G__32566 = (0);
seq__32538_32546 = G__32563;
chunk__32539_32547 = G__32564;
count__32540_32548 = G__32565;
i__32541_32549 = G__32566;
continue;
}
} else {
}
}
break;
}

var seq__32542_32567 = cljs.core.seq.call(null,children);
var chunk__32543_32568 = null;
var count__32544_32569 = (0);
var i__32545_32570 = (0);
while(true){
if((i__32545_32570 < count__32544_32569)){
var ch_32571 = cljs.core._nth.call(null,chunk__32543_32568,i__32545_32570);
e.appendChild(ch_32571);

var G__32572 = seq__32542_32567;
var G__32573 = chunk__32543_32568;
var G__32574 = count__32544_32569;
var G__32575 = (i__32545_32570 + (1));
seq__32542_32567 = G__32572;
chunk__32543_32568 = G__32573;
count__32544_32569 = G__32574;
i__32545_32570 = G__32575;
continue;
} else {
var temp__4126__auto___32576 = cljs.core.seq.call(null,seq__32542_32567);
if(temp__4126__auto___32576){
var seq__32542_32577__$1 = temp__4126__auto___32576;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32542_32577__$1)){
var c__21520__auto___32578 = cljs.core.chunk_first.call(null,seq__32542_32577__$1);
var G__32579 = cljs.core.chunk_rest.call(null,seq__32542_32577__$1);
var G__32580 = c__21520__auto___32578;
var G__32581 = cljs.core.count.call(null,c__21520__auto___32578);
var G__32582 = (0);
seq__32542_32567 = G__32579;
chunk__32543_32568 = G__32580;
count__32544_32569 = G__32581;
i__32545_32570 = G__32582;
continue;
} else {
var ch_32583 = cljs.core.first.call(null,seq__32542_32577__$1);
e.appendChild(ch_32583);

var G__32584 = cljs.core.next.call(null,seq__32542_32577__$1);
var G__32585 = null;
var G__32586 = (0);
var G__32587 = (0);
seq__32542_32567 = G__32584;
chunk__32543_32568 = G__32585;
count__32544_32569 = G__32586;
i__32545_32570 = G__32587;
continue;
}
} else {
}
}
break;
}

return e;
};
var node = function (t,attrs,var_args){
var children = null;
if (arguments.length > 2) {
  children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__32588){
var t = cljs.core.first(arglist__32588);
arglist__32588 = cljs.core.next(arglist__32588);
var attrs = cljs.core.first(arglist__32588);
var children = cljs.core.rest(arglist__32588);
return node__delegate(t,attrs,children);
});
node.cljs$core$IFn$_invoke$arity$variadic = node__delegate;
return node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__21630__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21631__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21632__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21633__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21634__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__21630__auto__,prefer_table__21631__auto__,method_cache__21632__auto__,cached_hierarchy__21633__auto__,hierarchy__21634__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__21630__auto__,prefer_table__21631__auto__,method_cache__21632__auto__,cached_hierarchy__21633__auto__,hierarchy__21634__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21634__auto__,method_table__21630__auto__,prefer_table__21631__auto__,method_cache__21632__auto__,cached_hierarchy__21633__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

return document.body.appendChild(el);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
}
});
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__32589,st_map){
var map__32593 = p__32589;
var map__32593__$1 = ((cljs.core.seq_QMARK_.call(null,map__32593))?cljs.core.apply.call(null,cljs.core.hash_map,map__32593):map__32593);
var container_el = cljs.core.get.call(null,map__32593__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__32593,map__32593__$1,container_el){
return (function (p__32594){
var vec__32595 = p__32594;
var k = cljs.core.nth.call(null,vec__32595,(0),null);
var v = cljs.core.nth.call(null,vec__32595,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__32593,map__32593__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__32596,dom_str){
var map__32598 = p__32596;
var map__32598__$1 = ((cljs.core.seq_QMARK_.call(null,map__32598))?cljs.core.apply.call(null,cljs.core.hash_map,map__32598):map__32598);
var c = map__32598__$1;
var content_area_el = cljs.core.get.call(null,map__32598__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__32599){
var map__32601 = p__32599;
var map__32601__$1 = ((cljs.core.seq_QMARK_.call(null,map__32601))?cljs.core.apply.call(null,cljs.core.hash_map,map__32601):map__32601);
var content_area_el = cljs.core.get.call(null,map__32601__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__23281__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23281__auto__){
return (function (){
var f__23282__auto__ = (function (){var switch__23216__auto__ = ((function (c__23281__auto__){
return (function (state_32643){
var state_val_32644 = (state_32643[(1)]);
if((state_val_32644 === (2))){
var inst_32628 = (state_32643[(7)]);
var inst_32637 = (state_32643[(2)]);
var inst_32638 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_32639 = ["auto"];
var inst_32640 = cljs.core.PersistentHashMap.fromArrays(inst_32638,inst_32639);
var inst_32641 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32628,inst_32640);
var state_32643__$1 = (function (){var statearr_32645 = state_32643;
(statearr_32645[(8)] = inst_32637);

return statearr_32645;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32643__$1,inst_32641);
} else {
if((state_val_32644 === (1))){
var inst_32628 = (state_32643[(7)]);
var inst_32628__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_32629 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_32630 = ["10px","10px","100%","68px","1.0"];
var inst_32631 = cljs.core.PersistentHashMap.fromArrays(inst_32629,inst_32630);
var inst_32632 = cljs.core.merge.call(null,inst_32631,style);
var inst_32633 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32628__$1,inst_32632);
var inst_32634 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_32628__$1,msg);
var inst_32635 = cljs.core.async.timeout.call(null,(300));
var state_32643__$1 = (function (){var statearr_32646 = state_32643;
(statearr_32646[(9)] = inst_32634);

(statearr_32646[(10)] = inst_32633);

(statearr_32646[(7)] = inst_32628__$1);

return statearr_32646;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32643__$1,(2),inst_32635);
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
var statearr_32650 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32650[(0)] = state_machine__23217__auto__);

(statearr_32650[(1)] = (1));

return statearr_32650;
});
var state_machine__23217__auto____1 = (function (state_32643){
while(true){
var ret_value__23218__auto__ = (function (){try{while(true){
var result__23219__auto__ = switch__23216__auto__.call(null,state_32643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23219__auto__;
}
break;
}
}catch (e32651){if((e32651 instanceof Object)){
var ex__23220__auto__ = e32651;
var statearr_32652_32654 = state_32643;
(statearr_32652_32654[(5)] = ex__23220__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32655 = state_32643;
state_32643 = G__32655;
continue;
} else {
return ret_value__23218__auto__;
}
break;
}
});
state_machine__23217__auto__ = function(state_32643){
switch(arguments.length){
case 0:
return state_machine__23217__auto____0.call(this);
case 1:
return state_machine__23217__auto____1.call(this,state_32643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23217__auto____0;
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23217__auto____1;
return state_machine__23217__auto__;
})()
;})(switch__23216__auto__,c__23281__auto__))
})();
var state__23283__auto__ = (function (){var statearr_32653 = f__23282__auto__.call(null);
(statearr_32653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23281__auto__);

return statearr_32653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23283__auto__);
});})(c__23281__auto__))
);

return c__23281__auto__;
});
figwheel.client.heads_up.heading = (function heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__32657 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__32657,(0),null);
var ln = cljs.core.nth.call(null,vec__32657,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__32660 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__32660,(0),null);
var file_line = cljs.core.nth.call(null,vec__32660,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__32660,file_name,file_line){
return (function (p1__32658_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__32658_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__32660,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function append_message(message){
var map__32662 = figwheel.client.heads_up.ensure_container.call(null);
var map__32662__$1 = ((cljs.core.seq_QMARK_.call(null,map__32662))?cljs.core.apply.call(null,cljs.core.hash_map,map__32662):map__32662);
var content_area_el = cljs.core.get.call(null,map__32662__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__23281__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23281__auto__){
return (function (){
var f__23282__auto__ = (function (){var switch__23216__auto__ = ((function (c__23281__auto__){
return (function (state_32709){
var state_val_32710 = (state_32709[(1)]);
if((state_val_32710 === (3))){
var inst_32692 = (state_32709[(7)]);
var inst_32706 = (state_32709[(2)]);
var inst_32707 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_32692,"");
var state_32709__$1 = (function (){var statearr_32711 = state_32709;
(statearr_32711[(8)] = inst_32706);

return statearr_32711;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32709__$1,inst_32707);
} else {
if((state_val_32710 === (2))){
var inst_32692 = (state_32709[(7)]);
var inst_32699 = (state_32709[(2)]);
var inst_32700 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_32701 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_32702 = cljs.core.PersistentHashMap.fromArrays(inst_32700,inst_32701);
var inst_32703 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32692,inst_32702);
var inst_32704 = cljs.core.async.timeout.call(null,(200));
var state_32709__$1 = (function (){var statearr_32712 = state_32709;
(statearr_32712[(9)] = inst_32703);

(statearr_32712[(10)] = inst_32699);

return statearr_32712;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32709__$1,(3),inst_32704);
} else {
if((state_val_32710 === (1))){
var inst_32692 = (state_32709[(7)]);
var inst_32692__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_32693 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_32694 = ["0.0"];
var inst_32695 = cljs.core.PersistentHashMap.fromArrays(inst_32693,inst_32694);
var inst_32696 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32692__$1,inst_32695);
var inst_32697 = cljs.core.async.timeout.call(null,(300));
var state_32709__$1 = (function (){var statearr_32713 = state_32709;
(statearr_32713[(7)] = inst_32692__$1);

(statearr_32713[(11)] = inst_32696);

return statearr_32713;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32709__$1,(2),inst_32697);
} else {
return null;
}
}
}
});})(c__23281__auto__))
;
return ((function (switch__23216__auto__,c__23281__auto__){
return (function() {
var state_machine__23217__auto__ = null;
var state_machine__23217__auto____0 = (function (){
var statearr_32717 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32717[(0)] = state_machine__23217__auto__);

(statearr_32717[(1)] = (1));

return statearr_32717;
});
var state_machine__23217__auto____1 = (function (state_32709){
while(true){
var ret_value__23218__auto__ = (function (){try{while(true){
var result__23219__auto__ = switch__23216__auto__.call(null,state_32709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23219__auto__;
}
break;
}
}catch (e32718){if((e32718 instanceof Object)){
var ex__23220__auto__ = e32718;
var statearr_32719_32721 = state_32709;
(statearr_32719_32721[(5)] = ex__23220__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32722 = state_32709;
state_32709 = G__32722;
continue;
} else {
return ret_value__23218__auto__;
}
break;
}
});
state_machine__23217__auto__ = function(state_32709){
switch(arguments.length){
case 0:
return state_machine__23217__auto____0.call(this);
case 1:
return state_machine__23217__auto____1.call(this,state_32709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23217__auto____0;
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23217__auto____1;
return state_machine__23217__auto__;
})()
;})(switch__23216__auto__,c__23281__auto__))
})();
var state__23283__auto__ = (function (){var statearr_32720 = f__23282__auto__.call(null);
(statearr_32720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23281__auto__);

return statearr_32720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23283__auto__);
});})(c__23281__auto__))
);

return c__23281__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__23281__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23281__auto__){
return (function (){
var f__23282__auto__ = (function (){var switch__23216__auto__ = ((function (c__23281__auto__){
return (function (state_32754){
var state_val_32755 = (state_32754[(1)]);
if((state_val_32755 === (4))){
var inst_32752 = (state_32754[(2)]);
var state_32754__$1 = state_32754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32754__$1,inst_32752);
} else {
if((state_val_32755 === (3))){
var inst_32749 = (state_32754[(2)]);
var inst_32750 = figwheel.client.heads_up.clear.call(null);
var state_32754__$1 = (function (){var statearr_32756 = state_32754;
(statearr_32756[(7)] = inst_32749);

return statearr_32756;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32754__$1,(4),inst_32750);
} else {
if((state_val_32755 === (2))){
var inst_32746 = (state_32754[(2)]);
var inst_32747 = cljs.core.async.timeout.call(null,(400));
var state_32754__$1 = (function (){var statearr_32757 = state_32754;
(statearr_32757[(8)] = inst_32746);

return statearr_32757;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32754__$1,(3),inst_32747);
} else {
if((state_val_32755 === (1))){
var inst_32744 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_32754__$1 = state_32754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32754__$1,(2),inst_32744);
} else {
return null;
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
var statearr_32761 = [null,null,null,null,null,null,null,null,null];
(statearr_32761[(0)] = state_machine__23217__auto__);

(statearr_32761[(1)] = (1));

return statearr_32761;
});
var state_machine__23217__auto____1 = (function (state_32754){
while(true){
var ret_value__23218__auto__ = (function (){try{while(true){
var result__23219__auto__ = switch__23216__auto__.call(null,state_32754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23219__auto__;
}
break;
}
}catch (e32762){if((e32762 instanceof Object)){
var ex__23220__auto__ = e32762;
var statearr_32763_32765 = state_32754;
(statearr_32763_32765[(5)] = ex__23220__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23218__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32766 = state_32754;
state_32754 = G__32766;
continue;
} else {
return ret_value__23218__auto__;
}
break;
}
});
state_machine__23217__auto__ = function(state_32754){
switch(arguments.length){
case 0:
return state_machine__23217__auto____0.call(this);
case 1:
return state_machine__23217__auto____1.call(this,state_32754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23217__auto____0;
state_machine__23217__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23217__auto____1;
return state_machine__23217__auto__;
})()
;})(switch__23216__auto__,c__23281__auto__))
})();
var state__23283__auto__ = (function (){var statearr_32764 = f__23282__auto__.call(null);
(statearr_32764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23281__auto__);

return statearr_32764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23283__auto__);
});})(c__23281__auto__))
);

return c__23281__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";
