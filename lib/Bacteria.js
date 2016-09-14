'use strict';

var LivingThings = require('./LivingThing.js');

module.exports = class Bacteria extends LivingThings {
  constructor( name ) {
    super( name, true, false, false, true, false );
  }
};