// Compiled by ClojureScript 0.0-2511
goog.provide('vinculum.test_runner');
goog.require('cljs.core');
goog.require('vinculum.core_test');
goog.require('cljs.test');
cljs.core.enable_console_print_BANG_.call(null);
vinculum.test_runner.runner = (function runner(){
if(cljs.test.successful_QMARK_.call(null,(function (){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));

var summary__7043__auto__ = cljs.core.assoc.call(null,cljs.core.reduce.call(null,(function (acc__7044__auto__,res__7045__auto__){
return cljs.core.merge_with.call(null,cljs.core._PLUS_,acc__7044__auto__,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(res__7045__auto__));
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"vinculum.core-test","vinculum.core-test",-403975603,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

var env__7069__auto___7143 = cljs.test.get_current_env.call(null);
if((env__7069__auto___7143 == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}



cljs.test.test_vars.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(vinculum.core_test.example_passing_test,new cljs.core.Symbol("vinculum.core-test","example-passing-test","vinculum.core-test/example-passing-test",-940686657,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(vinculum.core_test.example_passing_test)?vinculum.core_test.example_passing_test.cljs$lang$test:null),new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"line","line",212345235),5,new cljs.core.Keyword(null,"file","file",-1269645878),"test/cljs/vinculum/core-test.cljs",new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("vinculum.core-test","example-passing-test","vinculum.core-test/example-passing-test",-940686657,null),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"vinculum.core-test","vinculum.core-test",-403975603,null)], null))], null));

if((env__7069__auto___7143 == null)){
cljs.test.clear_env_BANG_.call(null);
} else {
}

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"vinculum.core-test","vinculum.core-test",-403975603,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));

var ret__7085__auto__ = cljs.test.get_current_env.call(null);
cljs.test.clear_env_BANG_.call(null);

return ret__7085__auto__;
})()
], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952));
cljs.test.do_report.call(null,summary__7043__auto__);

return summary__7043__auto__;
})()
)){
return (0);
} else {
return (1);
}
});
