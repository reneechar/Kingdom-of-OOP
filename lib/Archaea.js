'use strict';

var LivingThings = require('./LivingThing.js');

module.exports = class Archaea extends LivingThings {
  constructor( name ) {
    super( name, true, false, true, true, false );
  }
};