(function() {

  window.skrollrData || (window.skrollrData = {});

  window.skrollrData.sketch = {
    begin: -500,
    data: [
      {
        selector: '.sketch-area--top',
        animations: {
          13499: "display:none;",
          13500: "display:block; margin-top:-460px; transform:translate(-105%, 100%) rotate(-5deg); ",
          14000: "margin-top:-460px; transform:translate(-50%, 5%) rotate(-5deg);",
          16500: "transform:translate(-7%, -15%) rotate(-5deg);",
          17500: "transform:translate(5%, -250%) rotate(-5deg); display:block;",
          17501: "display:none;"
        }
      }, {
        selector: '.sketch-area--bottom',
        animations: {
          13499: "display:none;",
          13500: "display:block; transform:translate(-100%, 100%) rotate(-5deg);",
          14000: "transform:translate(-50%, 5%) rotate(-5deg);",
          16500: "transform:translate(-5.5%, -27%) rotate(-5deg);",
          17500: "transform:translate(10%, -300%) rotate(-5deg); display:block;",
          17501: "display:none;"
        }
      }, {
        selector: '.sketch-tissue',
        animations: {
          13249: "display:none;",
          13250: "display:block; transform:rotate(-5deg); margin-top:1060px; margin-left:280px;",
          13500: "margin-top:10px;",
          14000: "margin-top:-110px;",
          16500: "margin-top:20px; margin-left:-320px;",
          17500: "margin-top:-1140px; display:block;",
          17501: "display:none;"
        }
      }
    ]
  };

}).call(this);
