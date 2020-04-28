function calc(){

          // para validation 
         var from = document.getElementById("from").value;
         var to = document.getElementById("to").value;

         // From
         var dump1 = document.getElementById("dump1").textContent; // currency code ng FROM 3 letter-
         var dump2 = document.getElementById("dump2").textContent; //currency name ng from-
         var dump3 = document.getElementById("dump3").textContent; // para sa currency simbolo ng from
         
        // To
        var dump4 = document.getElementById("dump4").textContent; // simbolo ng TO-
        var dump5 = document.getElementById("dump5").textContent; // pangalan ng pera ng TO
        var dump6 = document.getElementById("dump6").textContent; // 3 letter code ng pera ng TO

        var amount = document.getElementById("currency-field").value; // amount na input ng mga mokong
      
        // answer field

        var Ans1 = document.getElementById("Ans1");
        var Ans2 = document.getElementById("Ans2");
        var Ans3 = document.getElementById("Ans3");
        var Ans4 = document.getElementById("Ans4");

        var konvert = new Intl.NumberFormat('en');

        var dey = Date();
        

       if(from =="" || to=="" || amount==""){
          alert("All fields are required andcannot be set as empty.")


       }else{

         fetch('https://free.currconv.com/api/v7/convert?apiKey=7803ea082ced7918c5e2&q=' + dump1 + "_" + dump6)
         .then(response => response.json())
         .then(data => {

            var ka = JSON.stringify(data);
            var datung = JSON.parse(ka);
            var datung1 = datung.query.count;
            var datung2 = datung.status;

            if(datung1 == 0){
               Ans1.innerHTML= "Sorry but we cannot determine thevalue of this currency pair.";
               Ans2.innerHTML= "Please try a different currency or try again by hitting the reset button";
               document.getElementById("calculate").setAttribute("disabled","disabled");             
               document.getElementById("currency-field").setAttribute("disabled","disabled");    



            } // end ng if
            else if(datung2 == 400){
               alert("Sorry but We are having some issues connecting to the IP address that you are using\nPlease Try Again later...");

            }
            else{
              
            fetch('https://free.currconv.com/api/v7/convert?apiKey=7803ea082ced7918c5e2&q=' + dump1 + "_" + dump6)          
            .then(response => response.json())
            .then(data => {

               var combi = dump1 + "_" + dump6;  // pang string replace once parse

               var ka = JSON.stringify(data);
               var kb = JSON.parse(ka);
               

               // conversion stage 
               var pamalit = kb.results[combi].val;  // ito yung result na value from json
               var pampalit = pamalit.toFixed(2); // bawas digit
               var limbag = pampalit.toString();  // ito yung result na value from json na string na

               // input stage 

               var saimo = amount.replace(/\D/g,'');  //remove decimals muna

               // result phase

               var magingnum = parseFloat(limbag);  // konvert sa numero
               var multipli = (saimo * magingnum);   // sagot pag nag multiply sila


               var pinakatama = konvert.format(multipli);  // huling sagot na converted at with decimals sa TO currency
               
               var orasan = moment(dey).format('LL'); // orasan ito 


               var Ans1 = document.getElementById("Ans1");
               var Ans2 = document.getElementById("Ans2");
               var Ans3 = document.getElementById("Ans3");
               var Ans4 = document.getElementById("Ans4");


               // kulay 

               var pinta = dump3.fontcolor("#E53935");
               var pintb = dump1.fontcolor("#E53935");
               var pintc = dump4.fontcolor("#1B5E20");
               var pintd = limbag.fontcolor("#1B5E20");
               var pinte = dump6.fontcolor("#1B5E20");
               var pintf = amount.fontcolor("#EF5350");

               

               // modified kasagutan 


               var mesa = ("As of " + orasan + "&nbsp" + "your base currency which is " + dump2 + "&nbsp" + "or" + "&nbsp" + pinta + "&nbsp" + "(" + "&nbsp" + pintb + "&nbsp" + "),"); // Una 
               var mesb =("has a " + dump5 + "&nbsp" + "value amounting to " + pintc + "&nbsp" + pintd + "&nbsp" + "(" + "&nbsp" + pinte + "&nbsp" + ")." ); 
             
               

               // Output mader pakers
               Ans0.innerHTML = ("Greetings,"); 
               Ans1.innerHTML = (mesa);
               Ans2.innerHTML = (mesb);
               Ans3.innerHTML = ("Therefore " + pinta + "&nbsp" +  pintf + "&nbsp" + pintb +"&nbsp" + "is equivalent to: " ); 
               Ans4.innerHTML = (dump4 + "&nbsp" + pinakatama);  

               document.getElementById("calculate").setAttribute("disabled","disabled");             
               document.getElementById("currency-field").setAttribute("disabled","disabled");    
              
              


            }  // end ng else
              


      )};


      }

      )};

        



    
  
    
     
}





