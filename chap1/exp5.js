function foo(num){
    console.log('foo:' + num);
    // keep track of how many times 'foo' is called
    foo.count++;
}

foo.count=0;


var i;

for(i=0; i<10; i++){
    if(i>5){
        foo(i)
    }
}
// Q. how many times was 'foo' called
console.log(foo.count);  // 4