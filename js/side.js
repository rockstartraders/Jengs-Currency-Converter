// use this APi https://api.ratesapi.io/api/latest?base=USD

function onlowd(){
    fetch('https://cors-anywhere.herokuapp.com/https://api.ratesapi.io/api/latest?base=USD')
        .then(response => response.json())
        .then(data => {
         
         var str = JSON.stringify(data);
         var obj = JSON.parse(str);
       
         // var a = "PHP";  sample of passing in JSON object
         
         // console.log(obj.rates[a]);
       
         // GBP 
         
         var xa = "GBP";
         var xaa = obj.rates[xa];
         var xaaa = new Intl.NumberFormat('gb', { style: 'currency', currency: xa }).format(xaa).replace(/^(\D+)/, '$1 ');  // formatter for currency 
       
        var xaaaa = document.getElementById("gbp");    
         xaaaa.innerHTML =xaaa;
       
       
       // HKD 
         
         var xb = "HKD";
         var xbb = obj.rates[xb];
         var xbbb= new Intl.NumberFormat('en-hk', { style: 'currency', currency: xb }).format(xbb).replace(/^(\D+)/, '$1 ');  // formatter for currency  and adding space
       
        var xbbbb = document.getElementById("hkd");    
         xbbbb.innerHTML =xbbb;
        
        
       
        // IDR
         
         var xc = "IDR";
         var xcc = obj.rates[xc];
         var xccc= new Intl.NumberFormat('id', { style: 'currency', currency: xc }).format(xcc).replace(/^(\D+)/, '$1 ');  // formatter for currency  and adding space
       
        var xcccc = document.getElementById("idr");    
         xcccc.innerHTML =xccc;
        
       
         // ILS
         
         var xd = "ILS";
         var xdd = obj.rates[xd];
         var xddd= new Intl.NumberFormat('en-il', { style: 'currency', currency: xd }).format(xdd).replace(/^(\D+)/, '$1 ');  // formatter for currency  and adding space
       
        var xdddd = document.getElementById("ils");    
         xdddd.innerHTML =xddd;
       
       
        // ILS
         
         var xe = "DKK";
         var xee = obj.rates[xe];
         var xeee= new Intl.NumberFormat('en-dk', { style: 'currency', currency: xe }).format(xee).replace(/^(\D+)/, '$1 ');  // formatter for currency  and adding space
       
        var xeeee = document.getElementById("dkk");    
         xeeee.innerHTML =xeee;
       
       
       
         // INR
         
         var xf = "INR";
         var xff = obj.rates[xf];
         var xfff= new Intl.NumberFormat('en-IN', { style: 'currency', currency: xf }).format(xff).replace(/^(\D+)/, '$1 ');  // formatter for currency  and adding space
       
        var xffff = document.getElementById("inr");    
         xffff.innerHTML =xfff;
       
       
         // CHF
         
         var xg = "CHF";
         var xgg = obj.rates[xg];
         var xggg= new Intl.NumberFormat('fr', { style: 'currency', currency: xg }).format(xgg).replace(/^(\D+)/, '$1 ');  // formatter for currency  and adding space
       
        var xgggg = document.getElementById("chf");    
         xgggg.innerHTML =xggg;
       
       
        // MXN
         
         var xh = "MXN";
         var xhh = obj.rates[xh];
         var xhhh= new Intl.NumberFormat('en-mx', { style: 'currency', currency: xh }).format(xhh).replace(/^(\D+)/, '$1 ');  // formatter for currency  and adding space
       
        var xhhhh = document.getElementById("mxn");    
         xhhhh.innerHTML =xhhh;
       
       
       
        // CZK
         
         var xj = "CZK";
         var xjj = obj.rates[xj];
         var xjjj= new Intl.NumberFormat('cs', { style: 'currency', currency: xj }).format(xjj).replace(/^(\D+)/, '$1 ');  // formatter for currency  and adding space
       
        var xjjjj = document.getElementById("czk");    
         xjjjj.innerHTML =xjjj;
       
       
         // SGD
         
         var xk = "SGD";
         var xkk = obj.rates[xk];
         var xkkk= new Intl.NumberFormat('sg', { style: 'currency', currency: xk }).format(xkk).replace(/^(\D+)/, '$1 ');  // formatter for currency  and adding space
       
        var xkkkk = document.getElementById("sgd");    
         xkkkk.innerHTML =xkkk;
       
       
       
         // THB
         
         var xl = "THB";
         var xll = obj.rates[xl];
         var xlll= new Intl.NumberFormat('th', { style: 'currency', currency: xl }).format(xll).replace(/^(\D+)/, '$1 ');  // formatter for currency  and adding space
       
        var xllll = document.getElementById("thb");    
         xllll.innerHTML =xlll;
       
       
       
         // HRK
         
         var xq = "HRK";
         var xqq = obj.rates[xq];
         var xqqq = xqq.toFixed(2);     
       
        var xqqqq = document.getElementById("hrk");    
         xqqqq.innerHTML =xqqq + " Kn";
       
       
        // EUR
         
         var xw = "EUR";
         var xww = obj.rates[xw];
         var xwww= new Intl.NumberFormat('eu', { style: 'currency', currency: xw }).format(xww).replace(/^(\D+)/, '$1 ');  // formatter for currency  and adding space
       
        var xwwww = document.getElementById("eur");    
         xwwww.innerHTML =xwww;
       
       
         // MYR
         
         var xe = "MYR";
         var xee = obj.rates[xe];
        var xeee = xee.toFixed(2);  
       
        var xeeee = document.getElementById("myr");    
         xeeee.innerHTML ="rm " + xeee;
       
       
         // NOK
         
         var xr = "NOK";
         var xrr = obj.rates[xr];
         var xrrr = xrr.toFixed(2);  
       
         var xrrrr = document.getElementById("nok");    
         xrrrr.innerHTML ="kr " + xrrr;
       
          // CNY
         
         var xt = "CNY";
         var xtt = obj.rates[xt];
         var xttt= new Intl.NumberFormat('cn', { style: 'currency', currency: xt }).format(xtt).replace(/^(\D+)/, '$1 ');  // formatter for currency  and adding space
       
        var xtttt = document.getElementById("cny");    
         xtttt.innerHTML =xttt;
      
       
          // BGN
         
         var xy = "BGN";
         var xyy = obj.rates[xy];
         var xyyy= new Intl.NumberFormat('bg', { style: 'currency', currency: xy }).format(xyy).replace(/^(\D+)/, '$1 ');  // formatter for currency  and adding space
       
        var xyyyy = document.getElementById("bgn");    
         xyyyy.innerHTML =xyyy;
      
       
           // PHP
         
         var xu = "PHP";
         var xuu = obj.rates[xu];
         var xuuu= new Intl.NumberFormat('en-ph', { style: 'currency', currency: xu }).format(xuu).replace(/^(\D+)/, '$1 ');  // formatter for currency  and adding space
       
        var xuuuu = document.getElementById("php");    
         xuuuu.innerHTML =xuuu;
       
       
       // PLN
         
         var xi = "PLN";
         var xii = obj.rates[xi];
         var xiii= new Intl.NumberFormat('pl', { style: 'currency', currency: xi }).format(xii).replace(/^(\D+)/, '$1 ');  // formatter for currency  and adding space
       
        var xiiii = document.getElementById("pln");    
         xiiii.innerHTML =xiii;
       
       
       // ZAR
         
         var xo = "ZAR";
         var xoo = obj.rates[xo];
         var xooo= new Intl.NumberFormat('en-za', { style: 'currency', currency: xo }).format(xoo).replace(/^(\D+)/, '$1 ');  // formatter for currency  and adding space
       
        var xoooo = document.getElementById("zar");    
         xoooo.innerHTML =xooo;
      
      
       // CAD
         
         var xp = "CAD";
         var xpp = obj.rates[xp];
         var xppp= new Intl.NumberFormat('en-ca', { style: 'currency', currency: xp }).format(xpp).replace(/^(\D+)/, '$1 ');  // formatter for currency  and adding space
       
        var xpppp = document.getElementById("cad");    
         xpppp.innerHTML =xppp;
       
       
        // ISK
         
         var xz = "ISK";
         var xzz = obj.rates[xz];
         var xzzz = xzz.toFixed(2);  
       
         var xzzzz = document.getElementById("isk");    
         xzzzz.innerHTML ="Íkr " + xzzz;
       
      
      
        // BRL
         
         var zz = "BRL";
         var zzz = obj.rates[zz];
         var zzzz= new Intl.NumberFormat('br', { style: 'currency', currency: zz }).format(zzz).replace(/^(\D+)/, '$1 ');  // formatter for currency  and adding space
       
        var zzzzz = document.getElementById("brl");    
         zzzzz.innerHTML =zzzz;
       
       
       // RON
       
          var xpq = "RON";
          var xpqq = obj.rates[xpq];
          var xpqqq = xpqq.toFixed(2);  
       
          var xpqqqq = document.getElementById("ron");    
           xpqqqq.innerHTML ="lei " + xpqqq;
       
       
       
        // NZD
         
         var zzr = "NZD";
         var zzzr = obj.rates[zzr];
         var zzzzr= new Intl.NumberFormat('nz', { style: 'currency', currency: zzr }).format(zzzr).replace(/^(\D+)/, '$1 ');  // formatter for currency  and adding space
       
        var zzzzzr = document.getElementById("nzd");    
         zzzzzr.innerHTML =zzzzr;
       
       
        // TRY
         
         var zzry = "TRY";
         var zzzry = obj.rates[zzry];
         var zzzzry= new Intl.NumberFormat('tr', { style: 'currency', currency: zzry }).format(zzzry).replace(/^(\D+)/, '$1 ');  // formatter for currency  and adding space
       
        var zzzzzry = document.getElementById("try");    
         zzzzzry.innerHTML =zzzzry;
       
       
          // JPY
         
         var zzryp = "JPY";
         var zzzryp = obj.rates[zzryp];
         var zzzzryp= new Intl.NumberFormat('jp', { style: 'currency', currency: zzryp }).format(zzzryp).replace(/^(\D+)/, '$1 ');  // formatter for currency  and adding space
       
        var zzzzzryp = document.getElementById("jpy");    
         zzzzzryp.innerHTML =zzzzryp;
       
       
          // RUB
         
         var zzrypq = "RUB";
         var zzzrypq = obj.rates[zzrypq];
         var zzzzrypq= new Intl.NumberFormat('ru', { style: 'currency', currency: zzrypq }).format(zzzrypq).replace(/^(\D+)/, '$1 ');  // formatter for currency  and adding space
       
        var zzzzzrypq = document.getElementById("rub");    
         zzzzzrypq.innerHTML =zzzzrypq;
       
       
         // KRW
         
         var kr = "KRW";
         var krr = obj.rates[kr];
         var krrr= new Intl.NumberFormat('kr', { style: 'currency', currency: kr }).format(krr).replace(/^(\D+)/, '$1 ');  // formatter for currency  and adding space
       
        var krrrr = document.getElementById("krw");    
         krrrr.innerHTML =krrr;
       
       
        // USD
         
         var krq = "USD";
         var krrq = obj.rates[krq];
         var krrrq= new Intl.NumberFormat('en-us', { style: 'currency', currency: krq }).format(krrq).replace(/^(\D+)/, '$1 ');  // formatter for currency  and adding space
       
        var krrrrq = document.getElementById("usd");    
         krrrrq.innerHTML =krrrq;
       
       
        // AUD
         
         var krql = "AUD";
         var krrql = obj.rates[krql];
         var krrrql= new Intl.NumberFormat('au', { style: 'currency', currency: krql }).format(krrql).replace(/^(\D+)/, '$1 ');  // formatter for currency  and adding space
       
        var krrrrql = document.getElementById("aud");    
         krrrrql.innerHTML =krrrql;
       
       
       
       // HUF
         
         var krqlh = "HUF";
         var krrqlh = obj.rates[krqlh];
         var krrrqlh= new Intl.NumberFormat('hu', { style: 'currency', currency: krqlh }).format(krrqlh).replace(/^(\D+)/, '$1 ');  // formatter for currency  and adding space
       
        var krrrrqlh = document.getElementById("huf");    
         krrrrqlh.innerHTML =krrrqlh;
       
       
       
         // SEK
         
         var krqlhn = "SEK";
         var krrqlhn = obj.rates[krqlhn];
         var krrrqlhn= new Intl.NumberFormat('en-se', { style: 'currency', currency: krqlhn }).format(krrqlhn).replace(/^(\D+)/, '$1 ');  // formatter for currency  and adding space
       
        var krrrrqlhn = document.getElementById("sek");    
         krrrrqlhn.innerHTML =krrrqlhn;   
                     
        
      });  // end statement of fetch 
      }  // end statement of function lowd
    