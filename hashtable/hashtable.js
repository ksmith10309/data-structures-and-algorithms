'use strict';

class HashTable {

  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    return key.split('').reduce((acc,cur) => acc + cur.charCodeAt(0), 0) % this.size;
  }

  add(key, value) {
    if (arguments.length !== 2) return 'Bad request';
    let hash = this.hash(key);
    if(!this.map[hash]) this.map[hash] = [];
    this.map[hash].push({[key]:value});
  }

  find(key) {
    let hash = this.hash(key);
    if (!this.map[hash]) return 'Cannot find ' + key;
    else {
      let found = this.map[hash].find(obj => Object.keys(obj).includes(key));
      if (!found) return 'Cannot find ' + key;
      else return found[key];
    }
  }

  contains(key) {
    let hash = this.hash(key);
    if (!this.map[hash]) return false;
    else {
      return this.map[hash].filter(obj => Object.keys(obj).includes(key)).length > 0;
    }
  }

  getHash(key) {
    let hash = this.hash(key);
    if (!this.map[hash]) return 'Cannot find ' + key;
    else {
      return hash;
    }
  }

}

module.exports = HashTable;
