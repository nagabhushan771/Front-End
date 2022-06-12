// var c = {
//     Name : 'Nagabhushan',
//     Year : '2020',
//     current : 'None'
// }

// console.log(c.Name);
// console.log(c.current);

// var d = new Date();
// console.log(d);
// console.log(d.getDate());
// console.log(d.getFullYear());
// console.log(d.getMilliseconds());
// console.log(d.getMonth());
// console.log(d.getDay());
// console.log(d.getHours());

// for(var i = 21; i>=1; i-=2){
//     console.log(i);
// }

//array creation
// var a = [1, 2 , 3];
// console.log(typeof(a));

function addDivisors(n, map){
    let m = 1;
      
    while (m*m <= n){
      if (n % m == 0){
        // console.log(~map[m]);
        // map[m] = -~map[m];
        map[m] = 1;
        // console.log(map[m]);
        
        const l = n / m;
        
        if (l != m)
        //   map[l] = -~map[l];
        map[l] = 1;
      }
      
      m += 1;
    }
    console.log(map);
  }

  addDivisors(6, {});


//   function gcd(a, b){
//     return b ? gcd(b, a % b) : a;
//   }
  
  
//   function getQ(X, j){
//     return X / gcd(X, j);
//   }

//   console.log(getQ(18, 8));

// console.log(-~3);