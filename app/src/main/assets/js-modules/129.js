__d(129,function(t,l,s,c){"use strict";function n(){this._callbacks=null,this._contexts=null}var i=l(17),h=l(14),e=l(16);l(18);h(n.prototype,{enqueue:function(t,l){this._callbacks=this._callbacks||[],this._contexts=this._contexts||[],this._callbacks.push(t),this._contexts.push(l)},notifyAll:function(){var t=this._callbacks,l=this._contexts;if(t){t.length!==l.length&&i("24"),this._callbacks=null,this._contexts=null;for(var s=0;s<t.length;s++)t[s].call(l[s]);t.length=0,l.length=0}},checkpoint:function(){return this._callbacks?this._callbacks.length:0},rollback:function(t){this._callbacks&&(this._callbacks.length=t,this._contexts.length=t)},reset:function(){this._callbacks=null,this._contexts=null},destructor:function(){this.reset()}}),e.addPoolingTo(n),s.exports=n});