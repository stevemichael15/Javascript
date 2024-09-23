let yes=narcissistic(123);
console.log(yes)
function narcissistic(value) {
  let dupvalue=value;
  let digitcount=0;
  let comparevalue=0;
  while(dupvalue>0){
    dupvalue=Math.floor(dupvalue/10);
    digitcount++;
  }
  dupvalue=value;
  while(dupvalue>0){
    let a=dupvalue%10;
    comparevalue+=+Math.pow(a,digitcount);
    dupvalue=Math.floor(dupvalue/10);
}
  return comparevalue===value;
}
