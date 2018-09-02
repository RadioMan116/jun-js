const smartgrid = require("smart-grid");

const settings = {
  columns: 12,
  offset: "20px",
  container: {
    maxWidth: "1440px",
    fields: "30px"
  },
  breakPoints: {
    dd: {
      width: "1700px",
      fields: "15px"
    },
    id: {
      width: "1500px",
      fields: "15px"
    },
    if: {
      width: "1335px",
      fields: "15px"
    },
    ig: {
      width: "1190px",
      fields: "15px"
    },
    ps: {
      width: "1090px",
      fields: "15px"
    },
    ld: {
      width: "1024px",
      fields: "15px"
    },
    m: {
      width: "960px",
      fields: "15px"
    },
    ms: {
      width: "949px",
      fields: "15px"
    },
    s: {
      width: "933px",
      fields: "15px"
    },
    e: {
      width: "885px",
      fields: "10px"
    },
    ee: {
      width: "835px",
      fields: "10px"
    },
    am: {
      width: "800px",
      fields: "10px"
    },
    sm: {
      width: "768px",
      fields: "10px"
    },
    md: {
      width: "730px",
      fields: "5px"
    },
    pr: {
      width: "655px",
      fields: "5px"
    },
    wd: {
      width: "596px",
      fields: "5px"
    },
    de: {
      width: "610px",
      fields: "5px"
    },
    xe: {
      width: "550px",
      fields: "5px"
    },
    www: {
      width: "536px",
      fields: "5px"
    },
    xz: {
      width: "500px",
      fields: "5px"
    },
    xs: {
      width: "480px",
      fields: "5px"
    },
    ss: {
      width: "385px",
      fields: "5px"
    },
    ls: {
      width: "375px",
      fields: "5px"
    },
    wr: {
      width: "366px",
      fields: "5px"
    },
    xxs: {
      width: "320px",
      fields: "5px"
    }
  },
  oldSizeStyle: false,
  properties: ["justify-content"]
};

smartgrid("./src/precss", settings);
