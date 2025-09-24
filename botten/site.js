
// site.js - 共通スクリプト
document.addEventListener('DOMContentLoaded', function() {
  // mobile menu toggle
  var menuBtn = document.getElementById('menuBtn');
  var nav = document.querySelector('.main-nav');
  if (menuBtn) {
    menuBtn.addEventListener('click', function() {
      if (nav.style.display === 'flex') {
        nav.style.display = 'none';
      } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
      }
    });
  }

  // active link highlight
  var links = document.querySelectorAll('.main-nav a');
  links.forEach(function(a){
    try {
      if (location.pathname.endsWith(a.getAttribute('href'))) {
        a.style.background = 'rgba(255,255,255,0.12)';
        a.style.borderRadius = '8px';
      }
    } catch(e){}
  });

  // contact form validation and dummy submit
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var name = form.elements['name'].value.trim();
      var email = form.elements['email'].value.trim();
      var message = form.elements['message'].value.trim();
      if (!name || !email || !message) {
        alert('氏名・メール・お問い合わせ内容は必須です。');
        return;
      }
      // simple email check
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('有効なメールアドレスを入力してください。');
        return;
      }
      alert('送信を受け付けました（デモ）。実運用ではバックエンドをご用意ください。');
      form.reset();
    });
  }
});
