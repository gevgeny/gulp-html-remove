'use strict';

var assert = require("assert"),
    fs = require('fs');

describe('clean-templates', function(){
    it('should clean nodes with attrs to-remove="bar" and to-remove="foo"', function() {
        var actual = fs.readFileSync('test/tmp/case1.html').toString(),
            expected = fs.readFileSync('test/expected/case1.html').toString();
        assert.equal(actual, expected);
    });

    it('should clean nodes with attr "to-remove" with any value', function() {
        var actual = fs.readFileSync('test/tmp/case2.html').toString(),
            expected = fs.readFileSync('test/expected/case2.html').toString();
        assert.equal(actual, expected);
    });

    it('should clean nodes with attrs "to-remove1" and "to-remove2" with any value', function() {
        var actual = fs.readFileSync('test/tmp/case3.html').toString(),
            expected = fs.readFileSync('test/expected/case3.html').toString();
        assert.equal(actual, expected);
    });
    
    it('should clean nodes with attrs "to-remove1" with "foo1" and "bar1" values and "to-remove2" with "foo2" and "bar2" values', function() {
        var actual = fs.readFileSync('test/tmp/case4.html').toString(),
            expected = fs.readFileSync('test/expected/case4.html').toString();
        assert.equal(actual, expected);
    });
    it('should remove root node', function() {
        var actual = fs.readFileSync('test/tmp/case5.html').toString(),
            expected = fs.readFileSync('test/expected/case5.html').toString();
        assert.equal(actual, expected);
    });
});

