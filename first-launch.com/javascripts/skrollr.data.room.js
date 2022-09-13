(function() {

  window.skrollrData || (window.skrollrData = {});

  window.skrollrData.room = {
    begin: 2700,
    data: [
      {
        selector: '.girl-room',
        animations: {
          28899: "display:none;",
          28900: "display:block;",
          31000: "transform:scale(1) translate(0px,0px);",
          31100: "display:none; transform:scale(0.9) translate(0px,20px);"
        }
      }, {
        selector: '.storyboard',
        animations: {
          28900: "margin-top:-250px; ",
          29100: "margin-top:-1750px;",
          30300: "display:none;"
        }
      }, {
        selector: '.room-light-area',
        animations: {
          28899: "display:none;",
          28900: "margin-top:430px; opacity:0; display:block; transform:scale(0.1);",
          29000: "margin-top:230px; opacity:1; transform:scale(1);",
          31100: "display:none;"
        }
      }, {
        selector: '.room-light',
        animations: {
          28899: "display:none;",
          28970: "opacity:0; margin-top:-30px; display:block; width:270px; margin-left:-135px;",
          29000: "opacity:1; margin-top:-630px; width:450px; margin-left:-225px;",
          31000: "opacity:1;",
          31050: "opacity:0.5;",
          31100: "display:none;"
        }
      }, {
        selector: '.girl-shadow',
        animations: {
          28899: "display:none;",
          28900: "opacity:0; margin-top:255px; display:block;",
          29000: "opacity:1; margin-top:155px;",
          31000: "transform:scale(1.8);",
          31100: "display:none; transform:scale(1.6);"
        }
      }, {
        selector: '.coming-title',
        animations: {
          29949: "display:none;",
          29950: "opacity:0; display:block;",
          30200: "opacity:1;",
          31100: "display:none;"
        }
      }, {
        selector: '.coming-text',
        animations: {
          29949: "display:none;",
          29950: "opacity:0; display:block;",
          30200: "opacity:1;",
          31100: "display:none;"
        }
      }, {
        selector: '.house-mask',
        animations: {
          30999: "display:none;",
          31000: "opacity:0; display:block;",
          31100: "opacity:1;",
          31150: "",
          31250: "opacity:0;",
          31251: "display:none;"
        }
      }, {
        selector: '.hud-background',
        animations: {
          31100: "display:none;"
        }
      }, {
        selector: '.house',
        animations: {
          31098: "display:none;",
          31099: "display:block; opacity:0;",
          31150: "opacity:1; margin-left:800px; transform:scale(6); margin-bottom:0px;",
          31250: "margin-left:-840px; transform:scale(1); margin-bottom:0px;"
        }
      }, {
        selector: '.dawn',
        animations: {
          31098: "display:none;",
          31099: "display:block; opacity:0;",
          31150: "opacity:1; margin-left:800px; transform:scale(6); margin-bottom:0px;",
          31250: "margin-left:-1024px; transform:scale(1); margin-bottom:0px;"
        }
      }, {
        selector: ".cloud-1",
        animations: {
          31099: "display:none;",
          31150: "display:block; opacity:0; transform:translate(0px, -150px);",
          31250: "               opacity:1; transform:translate(0px, 0px);"
        }
      }, {
        selector: ".cloud-2",
        animations: {
          31099: "display:none;",
          31150: "display:block; opacity:0; transform:translate(0px, -100px);",
          31250: "               opacity:1; transform:translate(0px, 0px);"
        }
      }, {
        selector: ".cloud-3",
        animations: {
          31099: "display:none;",
          31150: "display:block; opacity:0; transform:translate(0px, -100px);",
          31250: "               opacity:1; transform:translate(0px, 0px);"
        }
      }, {
        selector: ".cloud-4",
        animations: {
          31099: "display:none;",
          31150: "display:block; opacity:0; transform:translate(0px, -250px);",
          31250: "               opacity:1; transform:translate(0px, 0px);"
        }
      }, {
        selector: ".cloud-5",
        animations: {
          31099: "display:none;",
          31150: "display:block; opacity:0; transform:translate(0px, -300px);",
          31250: "               opacity:1; transform:translate(0px, 0px);"
        }
      }, {
        selector: ".credit",
        animations: {
          31099: "display:none;",
          31250: "display:block; opacity:0;",
          31300: "opacity:1"
        }
      }
    ]
  };

}).call(this);
