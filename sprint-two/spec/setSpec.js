var expect = chai.expect;
var assert = chai.assert;

describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it("should add values to a set", function(){
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    assert.isTrue(set.contains("Danny Glover"));
    assert.isTrue(set.contains("Susan Sarandon"));
  });

  it("should remove values from a set", function(){
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    assert.isFalse(set.contains('Mel Gibson'));
  });

  it("should add number values to a set", function(){
      set.add(3);
      set.add(7);
      set.add("7");
      assert.isTrue(set.contains("7"));
      assert.isTrue(set.contains(7));
      assert.isTrue(set.contains(3));
  });
  it("should remove number values from a set", function(){
    set.add(7);
    set.remove(7);
    assert.isFalse(set.contains(7));
  });

  it("should add function values to a set", function(){
    var addFunc = function(value) {return ++value;};
    var minusFunc = function(value) {return --value;};
      set.add(addFunc);
      set.add(minusFunc);
      assert.isTrue(set.contains(addFunc));
      assert.isTrue(set.contains(minusFunc));
  });
  it("should remove function values from a set", function(){
    var addFunc = function(value) {return ++value;};
    set.add(addFunc);
    set.remove(addFunc);
    assert.isFalse(set.contains(addFunc));
  });

  it("should add array values to a set", function(){
    var arr1 = [1,2,3];
    var arr2 = ['a', 'b', 'c'];
      set.add(arr1);
      set.add(arr2);
      assert.isTrue(set.contains(arr1));
      assert.isTrue(set.contains(arr2));
  });
  it("should remove array values from a set", function(){
    set.add([1,2,3]);
    set.remove([1,2,3]);
    assert.isFalse(set.contains([1,2,3]));
  });
});
