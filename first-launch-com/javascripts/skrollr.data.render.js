(function() {

  window.skrollrData || (window.skrollrData = {});

  window.skrollrData.render = {
    begin: 2700,
    data: [
      {
        selector: '.mask--top',
        animations: {
          25700: "background:rgba(0,0,0,0.7);",
          25800: "background:rgba(0,0,0,1);"
        }
      }, {
        selector: '.frame-text--title-1',
        animations: {
          24635: "display:block;",
          24665: "display:none;"
        }
      }, {
        selector: '.frame-text--title-2',
        animations: {
          24635: "display:none;",
          24665: "display:block;"
        }
      }, {
        selector: '.mask--bottom',
        animations: {
          25700: "background:rgba(0,0,0,0.7);",
          25800: "background:rgba(0,0,0,1);"
        }
      }, {
        selector: '.render-box',
        animations: {
          25799: "display:none;",
          25800: "display:block; opacity:0; ",
          25900: "								opacity:1;",
          26200: "                          height:500px; margin-top:-250px;",
          26300: "                          height:850px; margin-top:-425px;"
        }
      }, {
        selector: '.render-box-title',
        animations: {
          25799: "display:none;",
          25800: "display:block; opacity:0;",
          25900: "								opacity:1;",
          26200: "",
          26250: "opacity:0;",
          26251: "display:none;"
        }
      }, {
        selector: '.render-box-description',
        animations: {
          25799: "display:none;",
          25800: "display:block; opacity:0;",
          25900: "								opacity:1;",
          26200: "",
          26250: "opacity:0;",
          26251: "display:none;"
        }
      }, {
        selector: '.render-image-1',
        animations: {
          26200: "margin-top:-175px;",
          26300: "margin-top:0px;"
        }
      }, {
        selector: '.render-image-2',
        animations: {
          26300: "background-position:0px -850px; margin-top:850px;",
          26500: "background-position:0px 0px;    margin-top:0px;"
        }
      }, {
        selector: '.render-image-2 .render-title',
        animations: {
          26300: "opacity:0;",
          26320: "opacity:1;",
          26480: "opacity:1;",
          26500: "opacity:0;"
        }
      }, {
        selector: '.render-image-3',
        animations: {
          26500: "background-position:0px -850px; margin-top:850px;",
          26700: "background-position:0px 0px;    margin-top:0px;"
        }
      }, {
        selector: '.render-image-3 .render-title',
        animations: {
          26500: "opacity:0;",
          26520: "opacity:1;",
          26680: "opacity:1;",
          26700: "opacity:0;"
        }
      }, {
        selector: '.render-image-4',
        animations: {
          26700: "background-position:0px -850px; margin-top:850px;",
          26900: "background-position:0px 0px;    margin-top:0px;"
        }
      }, {
        selector: '.render-image-4 .render-title',
        animations: {
          26700: "opacity:0;",
          26720: "opacity:1;",
          26880: "opacity:1;",
          26900: "opacity:0;"
        }
      }, {
        selector: '.render-image-5',
        animations: {
          26900: "background-position:0px -850px; margin-top:850px;",
          27100: "background-position:0px 0px;    margin-top:0px;"
        }
      }, {
        selector: '.render-image-5 .render-title',
        animations: {
          26900: "opacity:0;",
          26920: "opacity:1;",
          27080: "opacity:1;",
          27100: "opacity:0;"
        }
      }, {
        selector: '.render-image-6',
        animations: {
          27100: "background-position:0px -850px; margin-top:850px;",
          27300: "background-position:0px 0px;    margin-top:0px;"
        }
      }, {
        selector: '.render-image-6 .render-title',
        animations: {
          27100: "opacity:0;",
          27120: "opacity:1;",
          27280: "opacity:1;",
          27300: "opacity:0;"
        }
      }, {
        selector: '.render-image-7',
        animations: {
          27300: "background-position:0px -850px; margin-top:850px;",
          27500: "background-position:0px 0px;    margin-top:0px;"
        }
      }, {
        selector: '.render-image-7 .render-title',
        animations: {
          27300: "opacity:0;",
          27320: "opacity:1;",
          27480: "opacity:1;",
          27500: "opacity:0;"
        }
      }, {
        selector: '.render-image-8',
        animations: {
          27500: "background-position:0px -850px; margin-top:850px;",
          27700: "background-position:0px 0px;    margin-top:0px;"
        }
      }, {
        selector: '.render-image-8 .render-title',
        animations: {
          27500: "opacity:0;",
          27520: "opacity:1;",
          27680: "opacity:1;",
          27700: "opacity:0;"
        }
      }, {
        selector: '.render-image-9',
        animations: {
          27700: "background-position:0px -850px; margin-top:850px;",
          27900: "background-position:0px 0px;    margin-top:0px;"
        }
      }, {
        selector: '.render-image-9 .render-title',
        animations: {
          27700: "opacity:0;",
          27720: "opacity:1;",
          27880: "opacity:1;",
          27900: "opacity:0;"
        }
      }, {
        selector: '.render-image-10',
        animations: {
          27900: "background-position:0px -850px; margin-top:850px;",
          28100: "background-position:0px 0px;    margin-top:0px;"
        }
      }, {
        selector: '.render-image-10 .render-title',
        animations: {
          27900: "opacity:0;",
          27920: "opacity:1;",
          28080: "opacity:1;",
          28100: "opacity:0;"
        }
      }, {
        selector: '.render-image-11',
        animations: {
          28100: "background-position:0px -850px; margin-top:850px;",
          28300: "background-position:0px 0px;    margin-top:0px;"
        }
      }, {
        selector: '.render-image-11 .render-title',
        animations: {
          28100: "opacity:0;",
          28120: "opacity:1;",
          28280: "opacity:1;",
          28300: "opacity:0;"
        }
      }, {
        selector: '.render-image-12',
        animations: {
          28299: "display:none;",
          28300: "background-position:0px 0px; margin-top:0px; display:block;"
        }
      }, {
        selector: '.render-image-13',
        animations: {
          28349: "display:none;",
          28350: "background-position:0px 0px; margin-top:0px; display:block;"
        }
      }, {
        selector: '.render-image-14',
        animations: {
          28399: "display:none;",
          28400: "background-position:0px 0px; margin-top:0px; display:block;"
        }
      }, {
        selector: '.render-image-15',
        animations: {
          28449: "display:none;",
          28450: "background-position:0px 0px; margin-top:0px; display:block;"
        }
      }, {
        selector: '.render-image-16',
        animations: {
          28499: "display:none;",
          28500: "background-position:0px 0px; margin-top:0px; display:block;"
        }
      }, {
        selector: '.render-image-17',
        animations: {
          28549: "display:none;",
          28550: "background-position:0px 0px; margin-top:0px; display:block;"
        }
      }, {
        selector: '.render-image-18',
        animations: {
          28599: "display:none;",
          28600: "background-position:0px 0px; margin-top:0px; display:block;"
        }
      }, {
        selector: '.render-image-19',
        animations: {
          28649: "display:none;",
          28650: "background-position:0px 0px; margin-top:0px; display:block;"
        }
      }, {
        selector: '.render-image-20',
        animations: {
          28699: "display:none;",
          28700: "background-position:0px 0px; margin-top:0px; display:block;"
        }
      }, {
        selector: '.render-image-21',
        animations: {
          28749: "display:none;",
          28750: "background-position:0px 0px; margin-top:0px; display:block;"
        }
      }, {
        selector: '.render-image-22',
        animations: {
          28799: "display:none;",
          28800: "background-position:0px 0px; margin-top:0px; display:block;"
        }
      }, {
        selector: '.render-image-23',
        animations: {
          28849: "display:none;",
          28850: "background-position:0px 0px; margin-top:0px; display:block;"
        }
      }, {
        selector: '.render-image-24',
        animations: {
          28899: "display:none;",
          28900: "background-position:0px 0px; margin-top:0px; display:block;"
        }
      }
    ]
  };

}).call(this);
