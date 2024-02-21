const functions = require("./functions.js");

describe('multiply function', () => {
  it('should be return multiple when I sent two numbers', () => {
    //ARRANGE
    const a = 2;
    const b = 2;

    //ACT
    const result = functions.multiply(a,b);

    //ASSERT
    expect(result).toEqual(4);
  })
  it('should be undefined if you enter a string', () => {
    //ARRANGE
    const a = "A";
    const b = 2;

    //ACT
    const result = functions.multiply(a, b);

    //ARRANGE
    expect(result).toEqual("undefined");
  });
});


describe('isNull function', () => {
  it('should be return null', () => {
    //ARRANGE
    const a = null;

    //ACT
    const result = functions.isNull(a);

    //ASSERT
    expect(result).toEqual("null");
  })
  it('should be return null if you enter a string', () => {
    //ARRANGE
    const a = "Hola";

    //ACT
    const result = functions.isNull(a);

    //ASSERT
    expect(result).toEqual("null");
  });
});

describe('checkTruthy function', () => {
  it('should be return true when I sent true', () => {
    //ARRANGE
    const a = true;

    //ACT
    const result = functions.checkTruthy(a);

    //ASSERT
    expect(result).toEqual("true")
  })
  it('should be return true when I sent 1', () => {
    //ARRANGE
    const a = 1;

    //ACT
    const result = functions.checkTruthy(a);

    //ASSERT
    expect(result).toEqual("true")
  });
});

describe('addLastName function', () => {
  it('should be return Pepito Perez when I sent Perez', () => {
    //ARRANGE
    const a = "Perez";

    //ACT
    const result = functions.addLastName(a);

    //ASSERT
    expect(result).toEqual("Pepito Perez")
  })
  it('should be return Pepito null when I sent null', () => {
    //ARRANGE
    const a = null;

    //ACT
    const result = functions.addLastName(a);

    //ASSERT
    expect(result).toEqual("Pepito ")
  });
});
