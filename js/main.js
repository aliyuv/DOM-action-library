window.dom = {
    create(string){
        const container = document.createElement('template');
        container.innerHTML = string.trim();
        // console.log(container);
        return container.content.firstChild;s
    },
    _after(node,node2) {
        console.log(node.parentNode);
        node.parentNode.insertBefore(node2,node.nextSibling);
    },
    _before(node,node2){
        node.parentNode.insertBefore(node2,node);
    },
    _append(parent,node){
        parent.appendChild(node);
    },
    _wrap(node,parent){
        dom._before(node,parent);
        dom._append(parent,node);
    },
    _remove(node){
        node.parentNode.removeChild(node);
        return node;
    },
    //给一个节点,把这个节点的所有儿子都干掉
    _empty(node){
       // const {childNodes} = node;
       const array = [];
       let x = node.firstChild;
       while (x){
          array.push(dom._remove(node.firstChild));
          x = node.firstChild;
       }
       return array;
    },
    _attr(node,name,value){
        if (arguments.length === 3){
            node.setAttribute(name,value)
        }else if(arguments.length === 2){
            return node.getAttribute(name);
        }
    },
    _text(node,string){
        if(arguments.length === 2){
            if('innerText in node'){
                node.innerText = string;
            }else {
                node.textContent = string;
            }
        }else if (arguments.length === 1){
            if('innerText in node'){
                return node.innerText;
            }else {
                return node.textContent;
            }
        }

    },
    _html(node,string){
        if (arguments.length === 2 ){
            node.innerHTML = string;
        }else if (arguments.length === 1){
            return node.innerHTML;
        }
    },
    _style(node,name,value){
        if (arguments.length === 3){
            //dom._style(div,'color','red')
            node.style[name] = value;
        }else if(arguments.length === 2){
            if (typeof name === 'string'){
                //dom._style(div,'color)
                return node.style[name];
            }else if (name instanceof Object){
                for (let key in name){
                    node.style[key] = name[key];
                }
            }
        }
        console.log(name);
    },
    class:{
        add(node,className){
            node.classList.add(className);
        },
        remove(node,className){
            node.classList.remove(className);
        },
        has(node,className){
            return node.classList.contains(className);
        }
    },
    _on(node,eventName,fn){
        node.addEventListener(eventName,fn);
    },
    _off(node,eventName,fn){
        node.removeEventListener(eventName,fn);
    },
    _find(selector,scope){
        return (scope || document).querySelectorAll(selector);
    },
    _parent(node){
        return node.parentNode;
    },
    _children(node){
        console.log(node.children);
        return node.children;
    },
    _siblings(node){
        //只要传进来的节点不等于当前这个节点
        console.log(node.parentNode);
        return  Array.from(node.parentNode.children)
            .filter(n => n !== node);
    },
    _next(node){
        let x = node.nextSibling;
        while (x && x.nodeType === 3){
           x = x.nextSibling;
        }
        return x;
    },
    _previous(node){
        let x = node.previousSibling;
        while (x && x.nodeType === 3){
            x = x.previousSibling;
        }
        return x;
    },
    _each(nodeList,fn){
        for (let i = 0;i<nodeList.length;i++){
            fn.call(null,nodeList[i]);
        }
    },
    _index(node){
        const list = dom._children(node.parentNode);
        console.log(list);
        let i;
        for (i =0;i<list.length;i++){
            if (list[i] === node){
                break;
            }
        }
        return i;
    }
}