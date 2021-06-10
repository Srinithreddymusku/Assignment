function weeks(){
    var day=Number(document.getElementById('week').value)
    console.log(day)

switch(day){
case 1:console.log('Monday')
break;
case 2:console.log('Tueday')
break;
case 3:console.log('Wednesday')
break;
case 4:console.log('Thursday')
break;
case 5:console.log('Friday')
break;
case 6:console.log('Saturday')
break;
default:console.log('Sunday')
break;
}
}