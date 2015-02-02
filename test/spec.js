'use strict';

var assert = require("assert"),
    fs = require('fs');

var compareFiles = function (_case) {
    var actual = fs.readFileSync('test/tmp/' + _case + '.html').toString(),
        expected = fs.readFileSync('test/expected/' + _case + '.html').toString();

    //console.log('');
    //console.log(actual);
    //console.log('');
    //console.log(expected);
    //console.log('');
    assert.equal(actual, expected);
}

describe('clean-templates', function(){
    it('should clean nodes with attrs to-remove="bar" and to-remove="foo"', function() {
        compareFiles('case1');
    });

    it('should clean nodes with attr "to-remove" with any value', function() {
        compareFiles('case2');
    });

    it('should clean nodes with attrs "to-remove1" and "to-remove2" with any value', function() {
        compareFiles('case3');
    });
    
    it('should clean nodes with attrs "to-remove1" with "foo1" and "bar1" values and "to-remove2" with "foo2" and "bar2" values', function() {
        compareFiles('case4');
    });
    it('should remove root node', function() {
        compareFiles('case5');
    });

    it('should remove all nodes with "my-attr" attribute not equals to "foo"', function() {
        compareFiles('case6');
    });

    it('should remove all nodes "to-remove" class.', function() {
        compareFiles('case7');
    });
});

