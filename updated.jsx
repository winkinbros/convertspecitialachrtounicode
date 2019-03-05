
var defaultfont ="Minion Pro";
var exceptFont = [
  {
    "font": "Symbol",
    "char": [
      {
        "name": "b",
        "unicode": "03B2"
      },
      {
        "name": "a",
        "unicode": "03B1"
      },
      {
        "name": "c",
        "unicode": "03C7"
      },
      {
        "name": "d",
        "unicode": "03B4"
      },
      {
        "name": "e",
        "unicode": "03B5"
      },
      {
        "name": "f",
        "unicode": "03D5"
      },
      {
        "name": "g",
        "unicode": "03B3"
      },
      {
        "name": "h",
        "unicode": "03B7"
      },
      {
        "name": "i",
        "unicode": "03B9"
      },
      {
        "name": "j",
        "unicode": "03C6"
      },
      {
        "name": "k",
        "unicode": "03BA"
      },
      {
        "name": "l",
        "unicode": "03BB"
      },
      {
        "name": "m",
        "unicode": "03BC"
      },
      {
        "name": "n",
        "unicode": "03BD"
      },
      {
        "name": "o",
        "unicode": "03C9"
      },
      {
        "name": "p",
        "unicode": "03C0"
      },
      {
        "name": "q",
        "unicode": "03B8"
      },
      {
        "name": "r",
        "unicode": "03C1"
      },
      {
        "name": "s",
        "unicode": "03C3"
      },
      {
        "name": "t",
        "unicode": "03C4"
      },
      {
        "name": "u",
        "unicode": "03C5"
      },
      {
        "name": "v",
        "unicode": "03D6"
      },
      {
        "name": "w",
        "unicode": "03C9"
      },
      {
        "name": "x",
        "unicode": "03BE"
      },
      {
        "name": "y",
        "unicode": "03C8"
      },
      {
        "name": "z",
        "unicode": "03B6"
      },
      {
        "name": "A",
        "unicode": "0391"
      },
      {
        "name": "B",
        "unicode": "0392"
      },
      {
        "name": "C",
        "unicode": "03A7"
      },
      {
        "name": "E",
        "unicode": "0395"
      },
      {
        "name": "F",
        "unicode": "03A6"
      },
      {
        "name": "G",
        "unicode": "0393"
      },
      {
        "name": "H",
        "unicode": "0397"
      },
      {
        "name": "I",
        "unicode": "0399"
      },
      {
        "name": "J",
        "unicode": "03D1"
      },
      {
        "name": "K",
        "unicode": "039A"
      },
      {
        "name": "L",
        "unicode": "039B"
      },
      {
        "name": "M",
        "unicode": "039C"
      },
      {
        "name": "N",
        "unicode": "039D"
      },
      {
        "name": "O",
        "unicode": "039F"
      },
      {
        "name": "P",
        "unicode": "03A0"
      },
      {
        "name": "Q",
        "unicode": "0398"
      },
      {
        "name": "R",
        "unicode": "0398"
      },
      {
        "name": "S",
        "unicode": "03A3"
      },
      {
        "name": "T",
        "unicode": "03A4"
      },
      {
        "name": "U",
        "unicode": "03A5"
      },
      {
        "name": "V",
        "unicode": "03C2"
      },
      {
        "name": "W",
        "unicode": "03A9"
      },
      {
        "name": "X",
        "unicode": "039E"
      },
      {
        "name": "Y",
        "unicode": "03A8"
      },
      {
        "name": "Z",
        "unicode": "0396"
      }
    ]
  }
];







var splarray = [];

findAndReplaceSymbolFont();

function findAndReplaceSymbolFont() {

    for (var i = 0; i < exceptFont.length; i++) {
        var font = exceptFont[i]['font'];

        var fontTexCommatlist = exceptFont[i]['char'];


        for (var i = 0; i < fontTexCommatlist.length; i++) {
          //  alert (unicodecharctor); 
            var unicodecharctor = fontTexCommatlist[i]['unicode'];
            app.findGrepPreferences = app.changeGrepPreferences = null;
            
            app.findGrepPreferences.findWhat = fontTexCommatlist[i]['name'];
            app.findGrepPreferences.appliedFont = font;
            app.changeGrepPreferences.appliedFont = defaultfont;
            app.changeGrepPreferences.changeTo = "<" + unicodecharctor + ">";
            app.activeDocument.changeGrep();
            app.findGrepPreferences = app.changeGrepPreferences = null;
            
           
            
            }
    }
}

getSplChar();

//Method to get all spl char into array
function getSplChar() {

    //Read current document text frames
    for (var i = 0; i < app.activeDocument.textFrames.length; i++) {

        var str = app.activeDocument.textFrames[i].contents;

        //alert (str,null, null); 

        //read text frameds text
        for (var j = 0; j < str.length; j++) {

            str.charAt(j).font;
            // alert( str.charAt(j));
            //   $.write (str.charAt (j));


            var charctor = str.charAt(j);
            var unicodecharctor = toUnicode(charctor);
            var last4char = unicodecharctor.substr(unicodecharctor.length - 4);
            var parseintvalue = parseInt(last4char, 16);
            ///alert (str.charAt (j),null, null); 
            //var unicodetext = String.fromCharCode(parseInt(str.charAt (j), 8)); 
            //From  00A1  --> 161 to 00FF --> 255
            //   alert (parseintvalue+"-->"+ splarray)
            //    if ((parseintvalue < 32) || (parseintvalue > 126) && (parseintvalue != 13) 
            if ((parseintvalue < 32) || (parseintvalue > 126)){
                
                if((parseintvalue != 9) && (parseintvalue != 13) && (parseintvalue != 65279) &&(parseintvalue < 32) || (parseintvalue > 126) && (parseintvalue != 13)&& (parseintvalue != 9) && 
            (parseintvalue !=8217)&&(parseintvalue !=10)&&(parseintvalue !=8195)&&(parseintvalue !=8194)&&
            (parseintvalue !=8)&&(parseintvalue !=8201)&&(parseintvalue !=65532)&&(parseintvalue !=7)&&
            (parseintvalue !=8220)&&(parseintvalue !=8221)&&(parseintvalue !=8221)&&(parseintvalue !=173)){
                
                splarray.push(charctor);
                }
            }
        }
    }


    replaceSplChar();
}

function replaceSplChar() {

    filterunique();
    alert("The follwing charactor's are going to convert : " + splarray);
    
    for (var i = 0; i < splarray.length; i++) {

            //  $.write (splarray[i]);
            if (splarray[i] != null) {
                var unicodecharctor = toUnicode(splarray[i]);
                replaceText(splarray[i], "<" + unicodecharctor + ">");
            }
    }
}

//Get unicode by passing string
function toUnicode(theString) {
    
    var unicodeString = '';
      
    for (var i = 0; i < theString.length; i++) {
        var theUnicode = theString.charCodeAt(i).toString(16).toUpperCase();
        while (theUnicode.length < 4) {
            theUnicode = '0' + theUnicode;
        }
        theUnicode = theUnicode;
        unicodeString += theUnicode;
    }


    return unicodeString;
}

function filterunique() {

    var newarray = [];

    for (var i = 0; i < splarray.length; i++) {

        var currentchar = splarray[i];

        var status = true;

        for (var j = 0; j < newarray.length; j++) {

            if (currentchar == newarray[j]) {

                status = false;
                
            }
        }
        try {

            if (status) {
                
                newarray.push(currentchar);
    //    $.writeln("M:Filterunique : "+err);
            }
        } catch (err) {}

    }
    splarray = newarray;

}


function replaceText(input, output) {
    try{
            app.findGrepPreferences = app.changeGrepPreferences = null;
            app.findGrepPreferences.findWhat = input;
            app.changeGrepPreferences.changeTo = output;
            app.activeDocument.changeGrep();
            app.findGrepPreferences = app.changeGrepPreferences = null;       
            }catch(err){}
}
