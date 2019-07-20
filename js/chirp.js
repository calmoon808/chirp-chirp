function chirp(n){
  // FIX ME
  if (n <= 1){
    return 'chirp';
  } else {
    return 'chirp' + ' ' + chirp(--n);
  }
}
console.log(chirp(3));

// $(document).ready(function(){
//   $("#result").html(chirp(3));
// });