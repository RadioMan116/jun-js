const smartgrid = require("smart-grid");

const settings = {
  columns: 12,
  offset: "20px",
  container: {
    maxWidth: "1600px",
    fields: "62px"
  },
  breakPoints: {
    m: {
      width: "1024px",
      fields: "30px"
    },
    s: {
      width: "850px",
      fields: "20px"
    },
    xs: {
      width: "740px",
      fields: "15px"
    },
    xxs: {
      width: "600px",
      fields: "10px"
    },
    mini: {
      width: "500px",
      fields: "10px"
    }
  },
  oldSizeStyle: false,
  properties: ["justify-content"]
};

smartgrid("./src/precss", settings);
