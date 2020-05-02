function reload(){
    alert("All information will be cleared ..");
    location.reload();
    return false;
}




var flagone = document.getElementById("from").value; // variable ng ISO code
var flagtwo = document.getElementById("to").value; // variable ng ISO code

function una(){

    var flagone = document.getElementById("from").value; // variable ng ISO code

    var count = 'https://restcountries.eu/rest/v2/alpha/';
  
    var a = "https://www.countryflags.io/";
    var b = flagone;
    var c = "/flat/64.png";
    var comp = a+b+c;
    
    var bagsakan = document.getElementById("bagsakan");   
    bagsakan.innerHTML= ('<img src="'+ comp +'" />'); ;


    

    fetch(count + flagone)
    .then(response => response.json())
    .then(data => {
        
        var aa = document.getElementById("sym"); // symbol ng currentcy ni from
        var laylayan  = document.getElementById("laylayan");
        var dump1 = document.getElementById("dump1");
        var dump2 = document.getElementById("dump2");
        var dump3 = document.getElementById("dump3");

        var aaa = data.currencies[0].symbol; //symbol ny pera
        var bbb = data.currencies[0].name; //ngalan ng pera
        var ccc = data.currencies[0].code; // 3 digit code para sa ibang api

           
        
        dump1.innerHTML = ccc;
        aa.innerHTML = (aaa); // print statement  // bbb + '&nbsp&nbsp/&nbsp' + nakalagay brfore
        dump2.innerHTML = bbb; //ngalan ng pera
        dump3.innerHTML = aaa; //simbolo ng pera
   
        
        



    });    
   
  }


function dalawa(){

    

    var get = document.getElementById("from").value;
    var getch = document.getElementById("to").value; // variable ng ISO code

    if(get == getch){
        alert("Country From and To cannot be the same\nPlease try again.")   // Condition pag the same
        location.reload();
        return false;

    }
    else{  
    

        // pag hinde the same
    var a1 = "https://www.countryflags.io/"; 
    var b1 = getch;
    var c1 = "/flat/64.png";
    var comp1 = a1+b1+c1;

   
    
    var ikalawangbagsak = document.getElementById("ikalawangbagsak");   
    ikalawangbagsak.innerHTML= ('<img src="'+ comp1 +'" />');


       // ito log para sa hidden p

       var countr = 'https://restcountries.eu/rest/v2/alpha/';

       fetch(countr + b1)
       .then(response => response.json())
       .then(data => {

        var dump4 = document.getElementById("dump4");
        var dump5 = document.getElementById("dump5");
        var dump6 = document.getElementById("dump6");

        var ab = data.currencies[0].symbol; //symbol ny pera
        var ac = data.currencies[0].name; //ngalan ng pera
        var ad = data.currencies[0].code; // 3 digit code para sa ibang api

        dump4.innerHTML = ab;
        dump5.innerHTML = ac; //ngalan ng pera
        dump6.innerHTML = ad; //3 letter code ng pera

        document.getElementById("currency-field").focus();

       });    


    } 
  }
   
// key down sa enter
document.getElementById("currency-field")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("calculate").click();
    }
});


  