// Compiled by ClojureScript 0.0-2511
goog.provide('cljs.test');
goog.require('cljs.core');
goog.require('clojure.string');
cljs.test.empty_env = (function() {
var empty_env = null;
var empty_env__0 = (function (){
return empty_env.call(null,new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322));
});
var empty_env__1 = (function (reporter){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"test","test",577538877),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0)], null),new cljs.core.Keyword(null,"testing-vars","testing-vars",-2114769150),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"reporter","reporter",-805360621),reporter], null);
});
empty_env = function(reporter){
switch(arguments.length){
case 0:
return empty_env__0.call(this);
case 1:
return empty_env__1.call(this,reporter);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
empty_env.cljs$core$IFn$_invoke$arity$0 = empty_env__0;
empty_env.cljs$core$IFn$_invoke$arity$1 = empty_env__1;
return empty_env;
})()
;
cljs.test._STAR_current_env_STAR_ = null;
cljs.test.get_current_env = (function get_current_env(){
var or__3646__auto__ = cljs.test._STAR_current_env_STAR_;
if(cljs.core.truth_(or__3646__auto__)){
return or__3646__auto__;
} else {
return cljs.test.empty_env.call(null);
}
});
/**
* @param {...*} var_args
*/
cljs.test.update_current_env_BANG_ = (function() { 
var update_current_env_BANG___delegate = function (ks,f,args){
return cljs.test._STAR_current_env_STAR_ = cljs.core.apply.call(null,cljs.core.update_in,cljs.test.get_current_env.call(null),ks,f,args);
};
var update_current_env_BANG_ = function (ks,f,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return update_current_env_BANG___delegate.call(this,ks,f,args);};
update_current_env_BANG_.cljs$lang$maxFixedArity = 2;
update_current_env_BANG_.cljs$lang$applyTo = (function (arglist__9379){
var ks = cljs.core.first(arglist__9379);
arglist__9379 = cljs.core.next(arglist__9379);
var f = cljs.core.first(arglist__9379);
var args = cljs.core.rest(arglist__9379);
return update_current_env_BANG___delegate(ks,f,args);
});
update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_current_env_BANG___delegate;
return update_current_env_BANG_;
})()
;
cljs.test.set_env_BANG_ = (function set_env_BANG_(new_env){
return cljs.test._STAR_current_env_STAR_ = new_env;
});
cljs.test.clear_env_BANG_ = (function clear_env_BANG_(){
return cljs.test._STAR_current_env_STAR_ = null;
});
/**
* Returns a string representation of the current test.  Renders names
* in *testing-vars* as a list, then the source file and line of
* current assertion.
*/
cljs.test.testing_vars_str = (function testing_vars_str(m){
var map__9382 = m;
var map__9382__$1 = ((cljs.core.seq_QMARK_.call(null,map__9382))?cljs.core.apply.call(null,cljs.core.hash_map,map__9382):map__9382);
var line = cljs.core.get.call(null,map__9382__$1,new cljs.core.Keyword(null,"line","line",212345235));
var file = cljs.core.get.call(null,map__9382__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return [cljs.core.str(cljs.core.reverse.call(null,cljs.core.map.call(null,((function (map__9382,map__9382__$1,line,file){
return (function (p1__9380_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__9380_SHARP_));
});})(map__9382,map__9382__$1,line,file))
,new cljs.core.Keyword(null,"testing-vars","testing-vars",-2114769150).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env.call(null))))),cljs.core.str(" ("),cljs.core.str(file),cljs.core.str(":"),cljs.core.str(line),cljs.core.str(")")].join('');
});
/**
* Returns a string representation of the current test context. Joins
* strings in *testing-contexts* with spaces.
*/
cljs.test.testing_contexts_str = (function testing_contexts_str(){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core.reverse.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env.call(null)))));
});
/**
* Increments the named counter in *report-counters*, a ref to a map.
* Does nothing if *report-counters* is nil.
*/
cljs.test.inc_report_counter_BANG_ = (function inc_report_counter_BANG_(name){
if(cljs.core.truth_(new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env.call(null)))){
return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242),name], null),cljs.core.fnil.call(null,cljs.core.inc,(0)));
} else {
return null;
}
});
/**
* Generic reporting function, may be overridden to plug in
* different report formats (e.g., TAP, JUnit).  Assertions such as
* 'is' call 'report' to indicate results.  The argument given to
* 'report' will be a map with a :type key.
*/
cljs.test.report = (function (){var method_table__4543__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4544__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4545__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4546__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4547__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.test","report"),((function (method_table__4543__auto__,prefer_table__4544__auto__,method_cache__4545__auto__,cached_hierarchy__4546__auto__,hierarchy__4547__auto__){
return (function (m){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reporter","reporter",-805360621).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env.call(null)),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m)], null);
});})(method_table__4543__auto__,prefer_table__4544__auto__,method_cache__4545__auto__,cached_hierarchy__4546__auto__,hierarchy__4547__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4547__auto__,method_table__4543__auto__,prefer_table__4544__auto__,method_cache__4545__auto__,cached_hierarchy__4546__auto__));
})();
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
return cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993));
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

cljs.core.println.call(null,"\nFAIL in",cljs.test.testing_vars_str.call(null,m));

if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env.call(null)))){
cljs.core.println.call(null,cljs.test.testing_contexts_str.call(null));
} else {
}

var temp__4126__auto___9383 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto___9383)){
var message_9384 = temp__4126__auto___9383;
cljs.core.println.call(null,message_9384);
} else {
}

cljs.core.println.call(null,"expected:",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(m)));

return cljs.core.println.call(null,"  actual:",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m)));
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

cljs.core.println.call(null,"\nERROR in",cljs.test.testing_vars_str.call(null,m));

if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env.call(null)))){
cljs.core.println.call(null,cljs.test.testing_contexts_str.call(null));
} else {
}

var temp__4126__auto___9385 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto___9385)){
var message_9386 = temp__4126__auto___9385;
cljs.core.println.call(null,message_9386);
} else {
}

cljs.core.println.call(null,"expected:",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(m)));

cljs.core.print.call(null,"  actual: ");

return cljs.core.prn.call(null,new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m));
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"summary","summary",380847952)], null),(function (m){
cljs.core.println.call(null,"\nRan",new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(m),"tests containing",((new cljs.core.Keyword(null,"pass","pass",1574159993).cljs$core$IFn$_invoke$arity$1(m) + new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(m)) + new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(m)),"assertions.");

return cljs.core.println.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(m),"failures,",new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(m),"errors.");
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null),(function (m){
return cljs.core.println.call(null,"\nTesting",cljs.core.name.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m)));
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"begin-test-var","begin-test-var",-908571100)], null),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"end-test-var","end-test-var",984198545)], null),(function (m){
return null;
}));
cljs.test.js_line_and_column = (function js_line_and_column(stack_element){
var parts = stack_element.split(":");
var cnt = cljs.core.count.call(null,parts);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(cljs.core.nth.call(null,parts,(cnt - (2)))),parseInt(cljs.core.nth.call(null,parts,(cnt - (1))))], null);
});
cljs.test.js_filename = (function js_filename(stack_element){
return cljs.core.first.call(null,cljs.core.last.call(null,stack_element.split("/out/")).split(":"));
});
cljs.test.mapped_line_and_column = (function mapped_line_and_column(filename,line,column){
var default$ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,line,column], null);
var temp__4124__auto__ = new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env.call(null));
if(cljs.core.truth_(temp__4124__auto__)){
var source_map = temp__4124__auto__;
var temp__4124__auto____$1 = cljs.core.get_in.call(null,source_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,(line - (1))], null));
if(cljs.core.truth_(temp__4124__auto____$1)){
var columns = temp__4124__auto____$1;
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.first.call(null,(function (){var temp__4124__auto____$2 = cljs.core.get.call(null,columns,(column - (1)));
if(cljs.core.truth_(temp__4124__auto____$2)){
var mapping = temp__4124__auto____$2;
return mapping;
} else {
return cljs.core.second.call(null,cljs.core.first.call(null,columns));
}
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"col","col",-1959363084)], null)));
} else {
return default$;
}
} else {
return default$;
}
});
cljs.test.file_and_line = (function file_and_line(exception,depth){
var stack = exception.stack;
if(cljs.core.truth_((function (){var and__3634__auto__ = stack;
if(cljs.core.truth_(and__3634__auto__)){
return typeof stack === 'string';
} else {
return and__3634__auto__;
}
})())){
var stacktrace = cljs.core.vec.call(null,cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,stack,/\n/)));
var stack_element = cljs.core.nth.call(null,stacktrace,depth);
var fname = cljs.test.js_filename.call(null,stack_element);
var vec__9389 = cljs.test.js_line_and_column.call(null,stack_element);
var line = cljs.core.nth.call(null,vec__9389,(0),null);
var column = cljs.core.nth.call(null,vec__9389,(1),null);
var vec__9390 = cljs.test.mapped_line_and_column.call(null,fname,line,column);
var fname__$1 = cljs.core.nth.call(null,vec__9390,(0),null);
var line__$1 = cljs.core.nth.call(null,vec__9390,(1),null);
var column__$1 = cljs.core.nth.call(null,vec__9390,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),fname__$1,new cljs.core.Keyword(null,"line","line",212345235),line__$1,new cljs.core.Keyword(null,"column","column",2078222095),column__$1], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),exception.fileName,new cljs.core.Keyword(null,"line","line",212345235),exception.lineNumber], null);
}
});
cljs.test.do_report = (function do_report(m){
var m__$1 = (function (){var G__9392 = (((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m).fqn:null);
switch (G__9392) {
case "error":
return cljs.core.merge.call(null,cljs.test.file_and_line.call(null,new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m),(0)),m);

break;
case "fail":
return cljs.core.merge.call(null,cljs.test.file_and_line.call(null,(new Error()),(4)),m);

break;
default:
return m;

}
})();
return cljs.test.report.call(null,m__$1);
});
/**
* If v has a function in its :test metadata, calls that function,
* add v to :testing-vars property of env.
*/
cljs.test.test_var = (function test_var(v){
if((v instanceof cljs.core.Var)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"Var","Var",-1833791616,null),new cljs.core.Symbol(null,"v","v",1661996586,null))))].join('')));
}

var temp__4124__auto__ = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v));
if(cljs.core.truth_(temp__4124__auto__)){
var t = temp__4124__auto__;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-vars","testing-vars",-2114769150)], null),cljs.core.conj,v);

cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242),new cljs.core.Keyword(null,"test","test",577538877)], null),cljs.core.inc);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-var","begin-test-var",-908571100),new cljs.core.Keyword(null,"var","var",-769682797),v], null));

try{t.call(null);
}catch (e9395){var e_9396 = e9395;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"message","message",-406056002),"Uncaught exception, not in assertion.",new cljs.core.Keyword(null,"expected","expected",1583670997),null,new cljs.core.Keyword(null,"actual","actual",107306363),e_9396], null));
}
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-var","end-test-var",984198545),new cljs.core.Keyword(null,"var","var",-769682797),v], null));

return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-vars","testing-vars",-2114769150)], null),cljs.core.rest);
} else {
return null;
}
});
/**
* The default, empty, fixture function.  Just calls its argument.
*/
cljs.test.default_fixture = (function default_fixture(f){
return f.call(null);
});
/**
* Composes two fixture functions, creating a new fixture function
* that combines their behavior.
*/
cljs.test.compose_fixtures = (function compose_fixtures(f1,f2){
return (function (g){
return f1.call(null,(function (){
return f2.call(null,g);
}));
});
});
/**
* Composes a collection of fixtures, in order.  Always returns a valid
* fixture function, even if the collection is empty.
*/
cljs.test.join_fixtures = (function join_fixtures(fixtures){
return cljs.core.reduce.call(null,cljs.test.compose_fixtures,cljs.test.default_fixture,fixtures);
});
/**
* Groups vars by their namespace and runs test-vars on them with
* appropriate fixtures assuming they are present in the current
* testing environment.
*/
cljs.test.test_vars = (function test_vars(vars){
var seq__9411 = cljs.core.seq.call(null,cljs.core.group_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.meta),vars));
var chunk__9412 = null;
var count__9413 = (0);
var i__9414 = (0);
while(true){
if((i__9414 < count__9413)){
var vec__9415 = cljs.core._nth.call(null,chunk__9412,i__9414);
var ns = cljs.core.nth.call(null,vec__9415,(0),null);
var vars__$1 = cljs.core.nth.call(null,vec__9415,(1),null);
var env_9425 = cljs.test.get_current_env.call(null);
var once_fixture_fn_9426 = cljs.test.join_fixtures.call(null,cljs.core.get_in.call(null,env_9425,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null)));
var each_fixture_fn_9427 = cljs.test.join_fixtures.call(null,cljs.core.get_in.call(null,env_9425,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null)));
once_fixture_fn_9426.call(null,((function (seq__9411,chunk__9412,count__9413,i__9414,env_9425,once_fixture_fn_9426,each_fixture_fn_9427,vec__9415,ns,vars__$1){
return (function (){
var seq__9416 = cljs.core.seq.call(null,vars__$1);
var chunk__9417 = null;
var count__9418 = (0);
var i__9419 = (0);
while(true){
if((i__9419 < count__9418)){
var v = cljs.core._nth.call(null,chunk__9417,i__9419);
if(cljs.core.truth_(new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))){
each_fixture_fn_9427.call(null,((function (seq__9416,chunk__9417,count__9418,i__9419,seq__9411,chunk__9412,count__9413,i__9414,v,env_9425,once_fixture_fn_9426,each_fixture_fn_9427,vec__9415,ns,vars__$1){
return (function (){
return cljs.test.test_var.call(null,v);
});})(seq__9416,chunk__9417,count__9418,i__9419,seq__9411,chunk__9412,count__9413,i__9414,v,env_9425,once_fixture_fn_9426,each_fixture_fn_9427,vec__9415,ns,vars__$1))
);
} else {
}

var G__9428 = seq__9416;
var G__9429 = chunk__9417;
var G__9430 = count__9418;
var G__9431 = (i__9419 + (1));
seq__9416 = G__9428;
chunk__9417 = G__9429;
count__9418 = G__9430;
i__9419 = G__9431;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__9416);
if(temp__4126__auto__){
var seq__9416__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9416__$1)){
var c__4433__auto__ = cljs.core.chunk_first.call(null,seq__9416__$1);
var G__9432 = cljs.core.chunk_rest.call(null,seq__9416__$1);
var G__9433 = c__4433__auto__;
var G__9434 = cljs.core.count.call(null,c__4433__auto__);
var G__9435 = (0);
seq__9416 = G__9432;
chunk__9417 = G__9433;
count__9418 = G__9434;
i__9419 = G__9435;
continue;
} else {
var v = cljs.core.first.call(null,seq__9416__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))){
each_fixture_fn_9427.call(null,((function (seq__9416,chunk__9417,count__9418,i__9419,seq__9411,chunk__9412,count__9413,i__9414,v,seq__9416__$1,temp__4126__auto__,env_9425,once_fixture_fn_9426,each_fixture_fn_9427,vec__9415,ns,vars__$1){
return (function (){
return cljs.test.test_var.call(null,v);
});})(seq__9416,chunk__9417,count__9418,i__9419,seq__9411,chunk__9412,count__9413,i__9414,v,seq__9416__$1,temp__4126__auto__,env_9425,once_fixture_fn_9426,each_fixture_fn_9427,vec__9415,ns,vars__$1))
);
} else {
}

var G__9436 = cljs.core.next.call(null,seq__9416__$1);
var G__9437 = null;
var G__9438 = (0);
var G__9439 = (0);
seq__9416 = G__9436;
chunk__9417 = G__9437;
count__9418 = G__9438;
i__9419 = G__9439;
continue;
}
} else {
return null;
}
}
break;
}
});})(seq__9411,chunk__9412,count__9413,i__9414,env_9425,once_fixture_fn_9426,each_fixture_fn_9427,vec__9415,ns,vars__$1))
);

var G__9440 = seq__9411;
var G__9441 = chunk__9412;
var G__9442 = count__9413;
var G__9443 = (i__9414 + (1));
seq__9411 = G__9440;
chunk__9412 = G__9441;
count__9413 = G__9442;
i__9414 = G__9443;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__9411);
if(temp__4126__auto__){
var seq__9411__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9411__$1)){
var c__4433__auto__ = cljs.core.chunk_first.call(null,seq__9411__$1);
var G__9444 = cljs.core.chunk_rest.call(null,seq__9411__$1);
var G__9445 = c__4433__auto__;
var G__9446 = cljs.core.count.call(null,c__4433__auto__);
var G__9447 = (0);
seq__9411 = G__9444;
chunk__9412 = G__9445;
count__9413 = G__9446;
i__9414 = G__9447;
continue;
} else {
var vec__9420 = cljs.core.first.call(null,seq__9411__$1);
var ns = cljs.core.nth.call(null,vec__9420,(0),null);
var vars__$1 = cljs.core.nth.call(null,vec__9420,(1),null);
var env_9448 = cljs.test.get_current_env.call(null);
var once_fixture_fn_9449 = cljs.test.join_fixtures.call(null,cljs.core.get_in.call(null,env_9448,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null)));
var each_fixture_fn_9450 = cljs.test.join_fixtures.call(null,cljs.core.get_in.call(null,env_9448,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null)));
once_fixture_fn_9449.call(null,((function (seq__9411,chunk__9412,count__9413,i__9414,env_9448,once_fixture_fn_9449,each_fixture_fn_9450,vec__9420,ns,vars__$1,seq__9411__$1,temp__4126__auto__){
return (function (){
var seq__9421 = cljs.core.seq.call(null,vars__$1);
var chunk__9422 = null;
var count__9423 = (0);
var i__9424 = (0);
while(true){
if((i__9424 < count__9423)){
var v = cljs.core._nth.call(null,chunk__9422,i__9424);
if(cljs.core.truth_(new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))){
each_fixture_fn_9450.call(null,((function (seq__9421,chunk__9422,count__9423,i__9424,seq__9411,chunk__9412,count__9413,i__9414,v,env_9448,once_fixture_fn_9449,each_fixture_fn_9450,vec__9420,ns,vars__$1,seq__9411__$1,temp__4126__auto__){
return (function (){
return cljs.test.test_var.call(null,v);
});})(seq__9421,chunk__9422,count__9423,i__9424,seq__9411,chunk__9412,count__9413,i__9414,v,env_9448,once_fixture_fn_9449,each_fixture_fn_9450,vec__9420,ns,vars__$1,seq__9411__$1,temp__4126__auto__))
);
} else {
}

var G__9451 = seq__9421;
var G__9452 = chunk__9422;
var G__9453 = count__9423;
var G__9454 = (i__9424 + (1));
seq__9421 = G__9451;
chunk__9422 = G__9452;
count__9423 = G__9453;
i__9424 = G__9454;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__9421);
if(temp__4126__auto____$1){
var seq__9421__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9421__$1)){
var c__4433__auto__ = cljs.core.chunk_first.call(null,seq__9421__$1);
var G__9455 = cljs.core.chunk_rest.call(null,seq__9421__$1);
var G__9456 = c__4433__auto__;
var G__9457 = cljs.core.count.call(null,c__4433__auto__);
var G__9458 = (0);
seq__9421 = G__9455;
chunk__9422 = G__9456;
count__9423 = G__9457;
i__9424 = G__9458;
continue;
} else {
var v = cljs.core.first.call(null,seq__9421__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))){
each_fixture_fn_9450.call(null,((function (seq__9421,chunk__9422,count__9423,i__9424,seq__9411,chunk__9412,count__9413,i__9414,v,seq__9421__$1,temp__4126__auto____$1,env_9448,once_fixture_fn_9449,each_fixture_fn_9450,vec__9420,ns,vars__$1,seq__9411__$1,temp__4126__auto__){
return (function (){
return cljs.test.test_var.call(null,v);
});})(seq__9421,chunk__9422,count__9423,i__9424,seq__9411,chunk__9412,count__9413,i__9414,v,seq__9421__$1,temp__4126__auto____$1,env_9448,once_fixture_fn_9449,each_fixture_fn_9450,vec__9420,ns,vars__$1,seq__9411__$1,temp__4126__auto__))
);
} else {
}

var G__9459 = cljs.core.next.call(null,seq__9421__$1);
var G__9460 = null;
var G__9461 = (0);
var G__9462 = (0);
seq__9421 = G__9459;
chunk__9422 = G__9460;
count__9423 = G__9461;
i__9424 = G__9462;
continue;
}
} else {
return null;
}
}
break;
}
});})(seq__9411,chunk__9412,count__9413,i__9414,env_9448,once_fixture_fn_9449,each_fixture_fn_9450,vec__9420,ns,vars__$1,seq__9411__$1,temp__4126__auto__))
);

var G__9463 = cljs.core.next.call(null,seq__9411__$1);
var G__9464 = null;
var G__9465 = (0);
var G__9466 = (0);
seq__9411 = G__9463;
chunk__9412 = G__9464;
count__9413 = G__9465;
i__9414 = G__9466;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
* Returns true if the given test summary indicates all tests
* were successful, false otherwise.
*/
cljs.test.successful_QMARK_ = (function successful_QMARK_(summary){
return ((new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$2(summary,(0)) === (0))) && ((new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$2(summary,(0)) === (0)));
});
