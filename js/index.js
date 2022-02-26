const div = dom.create('<duv>n</duv>');
// console.log(div);
dom._after(test,div);

const div3 = dom.create('<div id="parent"></div>');
dom._wrap(test,div3);

dom._empty(window.empty);

dom._attr(test,'title','hi,i am yzy');
console.log(dom._attr(test, 'title'));

dom._text(test,'你好,这是新的内容');
dom._text(test);

dom._style(test,{border:'1px solid red',color:'blue'});

console.log(dom._style(test, 'border'));

dom._style(test,'border','1px solid black');

dom.class.add(test,'red');
dom.class.add(test,'blue');
dom.class.remove(test,'blue');
console.log(dom.class.has(test, 'blue'));

const fn = ()=>{
    console.log('点击了');
}
dom._on(test,'click',fn)
dom._off(test,'click',fn);

const testDiv = dom._find('#test')[0];
console.log(testDiv);
const test2 = dom._find('#test2')[0];
console.log(dom._find('.red', test2)[0]);

console.log(dom._parent(test));


console.log(dom._siblings(dom._find('#s2')[0]));
console.log(dom._next(dom._find('#s2')[0]));

console.log(dom._previous(dom._find('#s2')[0]));

const t = dom._find('#travel')[0];
dom._each(dom._children(t),(n)=> dom._style(n,'color','red'));

console.log(dom._index(dom._find('#s2')[0]));