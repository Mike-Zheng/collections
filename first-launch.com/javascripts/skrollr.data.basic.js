(function() {

  window.skrollrData || (window.skrollrData = {});

  window.skrollrData.basic = {
    begin: 0,
    data: [
      {
        selector: '.space-background',
        animations: {
          0: "background-position:0px 0px;",
          7500: "background-position:0px -800px;",
          11000: "background-position:500px -800px;",
          33000: "background-position:500px -1600px;"
        }
      }, {
        selector: '.star-front-background',
        animations: {
          0: "background-position:0px 0px;",
          2500: "background-position:0px -400px;",
          3400: "",
          4000: "background-position:0px -500px;",
          5900: "",
          7000: "background-position:-300px -900px;",
          7500: "background-position:-300px -900px;",
          12500: "background-position:200px -900px;",
          13000: "background-position:200px -1100px;"
        }
      }, {
        selector: '.star-back-background',
        animations: {
          0: "background-position:0px 0px;",
          2500: "background-position:0px -300px;",
          3400: "",
          4000: "background-position:0px -400px;",
          5900: "",
          7000: "background-position:-200px -600px;",
          7500: "background-position:-200px -600px;",
          12500: "background-position:200px -600px;",
          13000: "background-position:200px -800px;"
        }
      }, {
        selector: '.star-far-background',
        animations: {
          0: "background-position:0px 0px;",
          2500: "background-position:0px -200px;",
          3400: "",
          4000: "background-position:0px -300px;",
          5900: "",
          7000: "background-position:-100px -400px;",
          7500: "background-position:-100px -400px;",
          12500: "background-position:300px -400px;",
          13000: "background-position:300px -500px;"
        }
      }, {
        selector: '.logo',
        animations: {
          0: "opacity:1;",
          500: "opacity:0; display:block;",
          501: "           display:none;"
        }
      }, {
        selector: '.scrolldown',
        animations: {
          0: "opacity:1; bottom:10px",
          500: "opacity:0; bottom:50px; display:block;",
          501: "                         display:none;"
        }
      }, {
        selector: '.homelogo',
        animations: {
          0: "opacity:1; bottom:85px",
          500: "opacity:0; bottom:125px; display:block;",
          501: "                         display:none;"
        }
      }, {
        selector: '.homelogo--fourdesire',
        animations: {
          0: "opacity:0.4; bottom:85px",
          500: "opacity:0; bottom:125px; display:block;",
          501: "                         display:none;"
        }
      }, {
        selector: '.homelogo--bigcat',
        animations: {
          0: "opacity:0.4; bottom:85px",
          500: "opacity:0; bottom:125px; display:block;",
          501: "                         display:none;"
        }
      }, {
        selector: '.screen-mask',
        animations: {
          1499: "display:none;",
          1500: "opacity:0; display:block;",
          2500: "opacity:1;",
          3000: "",
          4000: "opacity:0",
          4001: "display:none;"
        }
      }, {
        selector: '.screenlight',
        animations: {
          2069: "margin-top:0px; display:none;",
          2070: "margin-top:-450px; display:block;",
          3000: "",
          4000: "margin-top:-1325px; display:block;",
          4001: "display:none;"
        }
      }, {
        selector: '.teaser-title',
        animations: {
          2499: "display:none;",
          2500: "opacity:0; display:block;",
          2800: "opacity:1; margin-top:280px;",
          3000: "",
          4000: "margin-top:-650px; opacity:0;",
          4001: "display:none;"
        }
      }
    ]
  };

}).call(this);
