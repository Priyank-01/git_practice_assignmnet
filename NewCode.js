var x=3;
var count=0;
for (var i=1;i<=x;i++){
  if (x%i==0){
    count+=1;
  }
}
if (count==2){
  console.log(x, "is a prime number");
}
else {
  console.log(x, "is not a prime number");
}