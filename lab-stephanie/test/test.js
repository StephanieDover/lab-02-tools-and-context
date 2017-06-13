'use strict';

const expect = require('expect');
const fp = require('../lib/fp.js');

let nums = [1,2,3,4];
let cat = 'cat';

describe('testing fp', () => {
  describe('testing fp.map', ()=> {
    it('should return [2,4,6,8]', () =>{
      expect(fp.map(nums, n => n * 2)).toEqual([2,4,6,8]);
    });
    it('should return ["c","a","t"]', () =>{
      expect(fp.map(cat, n => n)).toEqual(['c','a','t']);
    });
  });
  describe('testing fp.reduce', ()=> {
    it('should return 10', () =>{
      expect(fp.reduce(nums, (a, c) => a + c)).toEqual(10);
    });
    it('should return CAT', () =>{
      expect(fp.reduce(cat, (a, c) => a.toUpperCase() + c.toUpperCase())).toEqual('CAT');
    });
  });
  describe('testing fp.filter', ()=> {
    it('should return an array with numbers less than 3', () =>{
      expect(fp.filter(nums, n => n < 3)).toEqual([1,2]);
    });
    it('should return ["a"]', () =>{
      expect(fp.filter(cat, n => n == 'a')).toEqual(['a']);
    });
  });
  describe('testing fp.concat', ()=> {
    it('should return [1,2]', () =>{
      expect(fp.concat([1],[2])).toEqual([1,2]);
    });
    it('should return ["cat","dog"]', () =>{
      expect(fp.concat(['cat'],['dog'])).toEqual(['cat','dog']);
    });
  });
  describe('testing fp.splice', ()=> {
    it('should return [2,3,4]', () =>{
      expect(fp.splice(nums, [1])).toEqual([2,3,4]);
    });
    it('should return ["dog"]', () =>{
      expect(fp.splice([cat, 'dog'], [1])).toEqual(['dog']);
    });
  });
});
