var expect = require('chai').expect;

const MyMath = require('../mymath');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('returns -1 when value is not present', function() {
      // Passing test
      expect(-1).to.equal([1,2,3].indexOf(4));
      // Failing test
      // expect(-1).to.equal([1,2,3].indexOf(4));
    });
    it('returns index when value is present', function() {
      expect(0).to.equal([1,2,3].indexOf(1));
    });
  });
});

describe('MyMath Module', function() {
  it('returns 4 when given params (2, 2)', function() {
    let ans = MyMath.addTwoNums(2, 2);
    expect(ans).to.equal(4);
  })
});
