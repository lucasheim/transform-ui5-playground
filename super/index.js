sap.ui.define(["sap/m/ComboBox"], function (ComboBox) {
  const Son = ComboBox.extend("sap.test.Son", {
    constructor: function _constructor(something) {
      ComboBox.prototype.constructor.call(this, something);
    },
    method: function _method() {
      ComboBox.prototype.init.call(this, this, arguments);
    },
    setSelectedKey: function _setSelectedKey(selectedKey) {
      super.setSelectedKey.apply(this, arguments);
    }
  });
});