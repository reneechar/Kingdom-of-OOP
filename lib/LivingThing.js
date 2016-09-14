'use strict';

module.exports = class LivingThing {
  constructor ( name, uniCellular, trueNucleus, anaerobic, asexual, mobile ) {
    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  }

  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }

  get uniCellular(){
    return this._uniCellular;
  }

  set uniCellular(bool){
    this._uniCellular = bool;
  }

  get multiCellular() {
    return !this._uniCellular;
  }

  set multiCellular(bool) {
    this._uniCellular = !bool;
  }

  get eukaryote() {
    return this._trueNucleus;
  }

  set eukaryote(bool) {
    this._trueNucleus = bool;
  }

  get prokaryote() {
    return !this._trueNucleus;
  }

  set prokaryote(bool) {
    this._trueNucleus = !bool;
  }

  get anaerobic() {
    return this._anaerobic;
  }

  set anaerobic(bool) {
    this._anaerobic = bool;
  }

  get aerobic() {
    return !this._anaerobic;
  }

  set aerobic(bool) {
    this._anaerobic = !bool;
  }

  get asexual() {
    return this._asexual;
  }

  set asexual(bool) {
    this._asexual = bool;
  }

  get sexual() {
    return !this._asexual;
  }

  set sexual(bool) {
    this._asexual = !bool;
  }

  get mobile() {
    return this._mobile;
  }
  set mobile(bool) {
    this._mobile = bool;
  }

  get immobile() {
    return !this._mobile;
  }

  set immobile(bool) {
    this._mobile = !bool;
  }
};