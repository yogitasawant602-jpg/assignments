function scopeExample() {
  var a = 10;
  let b = 20;
  const c = 30;

  if (true) {
    var x = 1;
    let y = 2;
    const z = 3;
  }

  console.log(a); 
  console.log(b); 
  console.log(c); 
  console.log(x); 
 
}

scopeExample();
