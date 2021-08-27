
module.exports = (function () {
    Set.prototype.hasObject = function(set, object2) {
        var arr = Array.from(set);
        let obj = {};   
        arr.reduce((prev, curr) => {
            Object.keys(curr).forEach( prop => {
                obj[prop] = curr[prop];
            })
        }, {})
        const keys2 = Object.keys(object2);
        const keys1 = Object.keys(obj);
        if (keys1.length !== keys2.length) {
            return false;
          }
        
          for (let key of keys1) {
            if (obj[key] !== object2[key]) {
              return false;
            }
          }
        return true;
    }
  })();