function indentify(context){
    return context.name.toUpperCase()


}
function speak(context){
    var greeting ='Hello i am ' + indentify(context);
    console.log(greeting);
}

indentify(you)
speak(me)