export default class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      throw new Error('Abstract classes cannot be instantiated.');
    }

    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }

    this._sqft = sqft;

    if (typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }
}
