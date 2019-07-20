function chirp(n){
  // FIX ME
  if (n <= 1){
    return 'chirp ';
  } else {
    return chirp(n - 1) + chirp(n - 2);
  }
}
let x = 3;

$(document).ready(function(){
  $("#result").html(chirp(3));
});