const BaseArray = require("../baseArray/baseArray");

class BigUint64 extends BaseArray {
  constructor(length) {
    super(length, "BigUint", "bigint", 8);
  }

  get ArrayType() {
    return BigUint64Array;
  }
}

module.exports = BigUint64;