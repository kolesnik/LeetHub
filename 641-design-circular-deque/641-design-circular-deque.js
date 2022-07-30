/**
 * @param {number} k
 */
var MyCircularDeque = function(k) {
    this.maxSize = k;
    this.circularDeque = [];
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if (!this.isFull()) {
        this.circularDeque.push(value);
        return true;
    } else return false;
    
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
     if (!this.isFull()) {
        this.circularDeque.unshift(value);
        return true;
    } else return false;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
     if (!this.isEmpty()) {
        this.circularDeque = this.circularDeque.slice(0, this.circularDeque.length - 1);
      
        return true;
    } else return false;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if (!this.isEmpty()) {
        this.circularDeque = this.circularDeque.slice(1);
        return true;
    } else return false
        
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
     if (this.isEmpty()) return -1;
     return this.circularDeque[this.circularDeque.length -1];
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if (this.isEmpty()) return -1;
    return this.circularDeque[0];
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return  this.circularDeque.length === 0
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.circularDeque.length === this.maxSize
};

/** 
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */