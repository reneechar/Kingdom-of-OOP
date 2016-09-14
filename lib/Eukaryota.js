'use strict';

var LivingThings = require('./LivingThing.js');

module.exports = class Eukaryota extends LivingThings {
  constructor( name, uniCellular, asexual, mobile, heterotroph ) {
    super( name, uniCellular, true, false, asexual, mobile );
    this._heterotroph = heterotroph;
  }

  get heterotroph() {
    return this._heterotroph;
  }
  set heterotroph(bool) {
    this._heterotroph = bool;
  }
  get autotroph() {
    return !this._heterotroph;
  }
  set autotroph(bool) {
    this._heterotroph = !bool;
  }
};