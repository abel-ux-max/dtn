(function () {
  // iOS Safari only applies :active styles when a touch listener exists
  document.addEventListener('touchstart', function () {}, { passive: true });

  var btn = document.getElementById('copy');
  btn.addEventListener('click', function () {
    var addr = 'banddtn@gmail.com';
    function done() { btn.textContent = 'Copied'; setTimeout(function () { btn.textContent = 'Copy'; }, 1600); }
    function fallback() {
      var r = document.createRange(); r.selectNodeContents(document.getElementById('mail'));
      var s = getSelection(); s.removeAllRanges(); s.addRange(r);
    }
    try { navigator.clipboard.writeText(addr).then(done, fallback); } catch (e) { fallback(); }
  });
})();
