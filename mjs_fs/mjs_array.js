let Array={create:function(t){if(t===undefined){t=[]}if(typeof t!=="array"){return null}t.__p=this._prot;return t},from:function(t,e,r){if(typeof t!=="array"){return null}if(e!==undefined&&typeof t!=="function"){return null}let n=Array.create();let i=this.length;if(e){for(let t=0;t<i;t++){n.push(func.apply(r,[this[t],t,this]))}}else{for(let t=0;t<i;t++){n.push(this[t])}}return n},_prot:{every:function(t,e){let r=this.length;for(let n=0;n<r;n++){if(!t.apply(e,[this[n],n,this])){return false}}return true},filter:function(t,e){let r=Array.create();let n=this.length;for(let i=0;i<n;i++){let n=this[i];if(t.apply(e,[n,i,this])){r.push(n)}}return r},find:function(t,e){let r=this.length;for(let n=0;n<r;n++){let r=this[n];if(t.apply(e,[r,n,this])){return r}}return undefined},findIndex:function(t,e){let r=this.length;for(let n=0;n<r;n++){if(t.apply(e,[this[n],n,this])){return n}}return-1},forEach:function(t,e){let r=this.length;for(let n=0;n<r;n++){t.apply(e,[array[n],n,this])}},map:function(t,e){let r=Array.create();let n=this.length;for(let i=0;i<n;i++){r.push(t.apply(e,[this[i],i,this]))}return r},reduce:function(t,e){let r=this.length;let n=0;if(e===undefined){if(r<1){return undefined}e=this[0];n++}for(n=n;n<r;n++){e=t(e,thia[n],n,this)}return e},some:function(t,e){let r=this.length;for(let n=0;n<r;n++){if(t.apply(e,[this[n],n,this])){return true}}return false}}};