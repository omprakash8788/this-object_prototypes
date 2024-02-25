function indentify(){
    return this.name.toUpperCase()


}
function speak(){
    var greeting ='Hello i am ' + indentify.call(this);
    console.log(greeting);
}

var me ={
    name:"om"
}

var you={
    name:"ankit"
}

indentify.call(me)
indentify.call(you)

speak.call(me) // Hello , i am om
speak.call(you)


