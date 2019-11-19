import ComboBox from "sap/m/ComboBox";

@namespace("sap.test")
class Son extends ComboBox {
  constructor(something) {
    super(something);
  }

  public method(): any {
    super.init(this, arguments);
  }

  public setSelectedKey(selectedKey: string): any {
    super.setSelectedKey.apply(this, arguments);
  }
}