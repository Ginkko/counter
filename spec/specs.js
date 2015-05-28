describe('count', function() {
  it('can count to a single digit number by 1', function() {
    expect(count(10, 1)).to.eql([1,2,3,4,5,6,7,8,9,10])
  });

});
