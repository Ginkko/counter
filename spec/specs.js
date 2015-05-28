describe('count', function() {
  it('can count to a single digit number by 1', function() {
    expect(count(10, 1)).to.eql([1,2,3,4,5,6,7,8,9,10])
  });
  it('can count to a large digit number by 5', function() {
    expect(count(100, 5)).to.eql([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100])
  });

});
