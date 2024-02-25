function foo(num){
    console.log('foo:' + num);
    data.count++;
}

var data={
    count:0
}

var i;

for(i=0; i<10; i++){
    if(i>5){
        foo(i)
    }
}
// Q. how many times was 'foo' called
console.log(data.count);  // 4