(function() {

  window.skrollrData || (window.skrollrData = {});

  window.skrollrData.charactor = {
    begin: 6000,
    data: [
      {
        selector: '.section-title--charactor',
        animations: {
          1000: "opacity:0;",
          1500: "opacity:1;",
          6500: "",
          7000: "opacity:0;"
        }
      }, {
        selector: '.charactor-line-1',
        animations: {
          0: "display:none;",
          1: "margin-left:-3400px; margin-top:785px; display:block;",
          1000: "margin-left:-1400px; margin-top:285px;",
          6500: "opacity:1",
          7000: "                     margin-top:85px; display:block; opacity:0;",
          7001: "display:none;"
        }
      }, {
        selector: '.charactor-line-2',
        animations: {
          0: "display:none;",
          1: "margin-left:-200px; margin-top:565px; display:block;",
          1000: "margin-left:-500px; margin-top:165px;",
          6500: "opacity:1",
          7000: "                    margin-top:-35px; display:block; opacity:0;",
          7001: "display:none;"
        }
      }, {
        selector: '.charactor-line-2 .star',
        animations: {
          0: "opacity:0;",
          500: "opacity:1;"
        }
      }, {
        selector: '.charactor-line-2 .line',
        animations: {
          500: "width:0%; left:100%;",
          1000: "width:100%; left:0%"
        }
      }, {
        selector: '.charactor-line-3',
        animations: {
          0: "display:none;",
          1: "margin-left:-300px; margin-top:445px; display:block;",
          1000: "margin-left:-600px; margin-top:45px;",
          6500: "opacity:1",
          7000: "                    margin-top:-155px; display:block; opacity:0;",
          7001: "display:none;"
        }
      }, {
        selector: '.charactor-line-3 .star',
        animations: {
          0: "opacity:0;",
          500: "opacity:1;"
        }
      }, {
        selector: '.charactor-line-3 .line',
        animations: {
          500: "width:0%;",
          1000: "width:100%;"
        }
      }, {
        selector: '.charactor-line-4',
        animations: {
          0: "display:none;",
          1: "margin-left:2500px; margin-top:425px; display:block;",
          1000: "margin-left:-500px; margin-top:-75px;",
          6500: "opacity:1",
          7000: "                    margin-top:-275px; display:block; opacity:0;",
          7001: "display:none;"
        }
      }, {
        selector: '.charactor-line-5',
        animations: {
          0: "display:none;",
          1: "margin-left:-200px; margin-top:205px; display:block;",
          1000: "margin-left:-500px; margin-top:-195px;",
          6500: "opacity:1",
          7000: "                    margin-top:-395px; display:block; opacity:0;",
          7001: "display:none;"
        }
      }, {
        selector: '.charactor-line-5 .star',
        animations: {
          0: "opacity:0;",
          500: "opacity:1;"
        }
      }, {
        selector: '.charactor-line-5 .line',
        animations: {
          500: "width:0%;",
          1000: "width:100%;"
        }
      }, {
        selector: '.charactor-line-6',
        animations: {
          0: "display:none;",
          1: "margin-left:-300px; margin-top:85px; display:block;",
          1000: "margin-left:-600px; margin-top:-315px",
          6500: "opacity:1",
          7000: "                    margin-top:-515px; display:block; opacity:0;",
          7001: "display:none;"
        }
      }, {
        selector: '.charactor-line-6 .star',
        animations: {
          0: "opacity:0;",
          500: "opacity:1;"
        }
      }, {
        selector: '.charactor-line-6 .line',
        animations: {
          500: "width:0%; left:100%;",
          1000: "width:100%; left:0%;"
        }
      }, {
        selector: '.charactor-scene__father',
        animations: {
          0: "margin-top:2000px; margin-left:-220px; display:block;",
          1000: "margin-top:-331px;",
          5000: "margin-top:-331px;",
          5250: "                   margin-left:-430px; opacity:1;",
          5500: "                   margin-left:-640px; opacity:0;"
        }
      }, {
        selector: '.charactor-scene__spider',
        animations: {
          0: "margin-top:3500px; margin-left:-70px;  display:block;",
          1000: "margin-top:-210px;",
          5000: "margin-top:-210px; margin-left:-70px;",
          5500: "                   margin-left:-490px; opacity:1;",
          5750: "                   margin-left:-700px; opacity:0;"
        }
      }, {
        selector: '.charactor-scene__snail',
        animations: {
          0: "margin-top:5500px; margin-left:230px; display:block;",
          1000: "margin-top:169px;",
          5000: "margin-top:169px;  margin-left:230px;",
          5500: "                   margin-left:-190px;",
          5750: "                   margin-left:-400px; opacity:1;",
          6000: "                   margin-left:-680px; opacity:0;"
        }
      }, {
        selector: '.charactor-scene__teacher',
        animations: {
          5000: "margin-left:470px;  opacity:0; margin-top:-40px; display:block;",
          5500: "margin-left:70px;   opacity:1;",
          5750: "margin-left:-140px;",
          6000: "margin-left:-420px; opacity:1;",
          6250: "margin-left:-680px; opacity:0;"
        }
      }, {
        selector: '.charactor-scene__driver',
        animations: {
          5000: "margin-left:690px; margin-top:-105px; display:block;",
          5500: "margin-left:290px;  opacity:0;",
          5750: "margin-left:80px;   opacity:1;",
          6000: "margin-left:-200px;",
          6250: "margin-left:-460px; opacity:1;",
          6500: "margin-left:-680px; opacity:0;"
        }
      }, {
        selector: '.charactor-scene__monster',
        animations: {
          5750: "margin-left:440px;  opacity:0; margin-top:-255px; display:block;",
          6000: "margin-left:160px;  opacity:1;",
          6250: "margin-left:-100px;",
          6500: "margin-left:-320px; opacity:1;",
          6750: "margin-left:-520px; opacity:0;"
        }
      }, {
        selector: '.charactor-scene__alien',
        animations: {
          6000: "margin-left:420px;  opacity:0; margin-top:132px;  display:block; ",
          6250: "margin-left:160px;  opacity:1;",
          6500: "margin-left:-60px;",
          6750: "margin-left:-280px;",
          7000: "margin-left:-500px; opacity:0;"
        }
      }, {
        selector: '.charactor-intro--scissors',
        animations: {
          1749: "display:none;",
          1750: "opacity:0; display:block; transform:translate(0px, 20px);",
          2250: "opacity:1; transform:translate(0px, 0px);",
          2750: "opacity:0; transform:translate(0px, -20px);"
        }
      }, {
        selector: '.charactor-intro--father',
        animations: {
          2499: "display:none;",
          2500: "opacity:0; display:block; transform:translate(0px, 20px);",
          3000: "opacity:1; transform:translate(0px, 0px);",
          3500: "opacity:0; transform:translate(0px, -20px);"
        }
      }, {
        selector: '.charactor-intro--spider',
        animations: {
          3249: "display:none;",
          3250: "opacity:0; display:block; transform:translate(0px, 20px);",
          3750: "opacity:1; transform:translate(0px, 0px);",
          4250: "opacity:0; transform:translate(0px, -20px);"
        }
      }, {
        selector: '.charactor-intro--snail',
        animations: {
          3999: "display:none;",
          4000: "opacity:0; display:block; transform:translate(0px, 20px);",
          4500: "opacity:1; transform:translate(0px, 0px);",
          5000: "opacity:0; transform:translate(0px, -20px);"
        }
      }, {
        selector: '.charactor-intro--teacher',
        animations: {
          5249: "display:none;",
          5250: "opacity:0; display:block; transform:translate(250px, 0px);",
          5500: "opacity:1; transform:translate(0px, 0px);",
          5750: "opacity:0; transform:translate(-250px, 0px);"
        }
      }, {
        selector: '.charactor-intro--driver',
        animations: {
          5499: "display:none;",
          5500: "opacity:0; display:block; transform:translate(250px, 0px);",
          5750: "opacity:1; transform:translate(0px, 0px);",
          6000: "opacity:0; transform:translate(-300px, 0px);"
        }
      }, {
        selector: '.charactor-intro--monster',
        animations: {
          5999: "display:none;",
          6000: "opacity:0; display:block; transform:translate(300px, 0px);",
          6250: "opacity:1; transform:translate(0px, 0px);",
          6500: "opacity:0; transform:translate(-260px, 0px);"
        }
      }
    ]
  };

}).call(this);
