// confirm('check');
// prompt("I am prompt");
// alert("I am prompt");

// let x=10;
// let y = '10';
// let z = 10;
// console.log(x==y);
// console.log(x===y);
// console.log(x+y);
// console.log(x+z);
// console.log(x+""+z);

//defining the function
// function func1(){
//   console.log('function1');
// }

// function func2(){
//   console.log('function2');
//   func1();//here func1 is the callback function
// }
// func2();

function changeStyle(){
  // document.getElementById('heading').innerHTML = '<i>Changed Heading</i>';
  // document.getElementById('heading').style.color = 'red';
  // document.getElementById('heading').style.fontSize = '100px';
  // document.getElementById('heading').style.transition = '2s';
  // document.getElementById('image').src = 'https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/cheetah.jpg';
  // document.getElementById('image').width = '600';

  // var h = document.getElementById('heading1');
  // h.innerHTML = '<i>Changed Heading</i>';
  // h.style.cssText = 'color: red; font-size:100px; background-color: yellow; transition: 2s';

  // var hArr = document.getElementsByClassName('heading');
  // hArr[0].style.cssText = 'color: red; font-size:100px; background-color: yellow; transition: 2s';
  // hArr[1].innerHTML = '<i><strong>Changes second heading</strong></i>'
  // console.log(hArr.length);
  // console.log(hArr);

  var a;
  console.log("Value of var a is "+ a);
  console.log("Typr of a is " + typeof(a));

  a = 10.5;
  console.log("Value of var a is "+ a);
  console.log("Typr of a is " + typeof(a));

  a = "JavaSctipt";
  console.log("Value of var a is "+ a);
  console.log("Typr of a is " + typeof(a));

  b = Number("12234");
  console.log("Value of var a is "+ b);
  console.log("Typr of a is " + typeof(b));

  if(a){
    console.log("True");
  } else {
    console.log("False");
  }

  console.log(a?"True":"False")

}
