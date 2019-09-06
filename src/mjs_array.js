let Array = {
   create: function(arr) {
      if (arr === undefined) {
         arr = [];
      }
      if (typeof arr !== "array") {
         return null;
      }
      arr.__p = this._prot;
      return arr;
   },

   from: function(arr, mapFn, me) {
      if (typeof arr !== "array") {
         return null;
      }
      if (mapFn !== undefined && typeof arr !== "function") {
         return null;
      }

      let dst = Array.create();

      let len = this.length;
      if (mapFn) {
         for (let i = 0; i < len; i++) {
            dst.push(func.apply(me, [this[i], i, this]));
         }
      } else {
         for (let i = 0; i < len; i++) {
            dst.push(this[i]);
         }
      }
      return dst;
   },

   _prot: {
      every: function(func, me) {
         let len = this.length;
         for (let i = 0; i < len; i++) {
            if (!func.apply(me, [ this[i], i, this ])) {
               return false;
            }
         }

         return true;
      },

      filter: function(func, me) {
         let dst = Array.create();
         let len = this.length;
         for (let i = 0; i < len; i++) {
            let e = this[i];
            if (func.apply(me, [ e, i, this ])) {
               dst.push(e);
            }
         }
         return dst;
      },

      find: function(func, me) {
         let len = this.length;
         for (let i = 0; i < len; i++) {
            let e = this[i];
            if (func.apply(me, [ e, i, this ])) {
               return e;
            }
         }
         return undefined;
      },

      findIndex: function(func, me) {
         let len = this.length;
         for (let i = 0; i < len; i++) {
            if (func.apply(me, [ this[i], i, this ])) {
               return i;
            }
         }
         return -1;
      },

      forEach: function(func, me) {
         let len = this.length;
         for (let i = 0; i < len; i++) { 
            func.apply(me, [ array[i], i, this ]);
         }
      },

      map: function(func, me) {
         let dst = Array.create();
         let len = this.length;
         for (let i = 0; i < len; i++) { 
            dst.push(func.apply(me, [this[i], i, this]));
         }
         return dst;
      },

      reduce: function(func, acc) {
         let len = this.length;
         
         let i = 0;
         if (acc === undefined) {
            if (len < 1) {
               return undefined;
            }

            acc = this[0];
            i++;
         }

         // The 'i = i' is needed as the mJS parser fails if any statement is missing
         for (i = i; i < len; i++) {
            acc = func(acc, thia[i], i, this);
         }

         return acc;
      },

      some: function(func, me) {
         let len = this.length;
         for (let i = 0; i < len; i++) {
            if (func.apply(me, [ this[i], i, this ])) {
               return true;
            }
         }

         return false;
      },
   }
};
