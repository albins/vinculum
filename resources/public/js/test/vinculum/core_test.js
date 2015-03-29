// Compiled by ClojureScript 0.0-2511
goog.provide('vinculum.core_test');
goog.require('cljs.core');
goog.require('cljs.test');
vinculum.core_test.example_passing_test = (function example_passing_test(){
return cljs.test.test_var.call(null,example_passing_test.cljs$lang$var);
});
vinculum.core_test.example_passing_test.cljs$lang$test = (function (){
try{var values__6981__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(1));
var result__6982__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__6981__auto__);
if(cljs.core.truth_(result__6982__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__6981__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__6981__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__6982__auto__;
}catch (e7142){var t__7019__auto__ = e7142;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__7019__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

vinculum.core_test.example_passing_test.cljs$lang$var = new cljs.core.Var(vinculum.core_test.example_passing_test,new cljs.core.Symbol("vinculum.core-test","example-passing-test","vinculum.core-test/example-passing-test",-940686657,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(vinculum.core_test.example_passing_test)?vinculum.core_test.example_passing_test.cljs$lang$test:null),new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"line","line",212345235),5,new cljs.core.Keyword(null,"file","file",-1269645878),"test/cljs/vinculum/core-test.cljs",new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("vinculum.core-test","example-passing-test","vinculum.core-test/example-passing-test",-940686657,null),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"vinculum.core-test","vinculum.core-test",-403975603,null)], null));
