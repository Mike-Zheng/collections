(function() {

  window.skrollrData || (window.skrollrData = {});

  window.skrollrData.storyline = {
    begin: 3000,
    data: [
      {
        selector: '.section-title--storyline',
        animations: {
          749: "display:none;",
          750: "display:block; opacity:0;",
          1000: "opacity:1;",
          2300: "",
          2450: "display:block; opacity:0;",
          2451: "display:none;"
        }
      }, {
        selector: '.storyline-box',
        animations: {
          0: "display:none;",
          1: "display:block; margin-left:1800px;",
          1000: "margin-left:0px; margin-top:-320px;",
          2300: "",
          3250: "display:block; margin-top:-1300px;",
          3251: "display:none;"
        }
      }, {
        selector: '.moon',
        animations: {
          0: "display:none; ",
          1: "display:block; margin-top:1500px; margin-left:80px;",
          1000: "margin-left:80px;  margin-top:240px;",
          2350: "",
          2950: "margin-left:280px; margin-top:-80px; transform:scale(1); opacity:1;",
          3900: "margin-left:680px; margin-top:-380px; transform:sacle(0.02); opacity:0;",
          3901: "display:none;"
        }
      }, {
        selector: '.storyline-description',
        animations: {
          0: "display:none;",
          1000: "display:block; margin-top:-250px; opacity:0;",
          1100: "margin-top:-200px; opacity:1;",
          2300: "",
          3250: "display:block; margin-top:-250px; opacity:0;",
          3251: "display:none;"
        }
      }
    ]
  };

}).call(this);
