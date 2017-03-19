module.exports = {
  normalizeEntityName() {
    // allows to run ember -g ember-chartist-shim and not blow up
    // because ember cli normally expects the format
    // ember generate <entityName> <blueprint>
  }
};
