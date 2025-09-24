// site.js - 共通ナビ&簡易スクリプト
document.addEventListener('DOMContentLoaded', function() {
  // アクティブリンク設定
  const links = document.querySelectorAll('header nav a');
  links.forEach(a => {
    if (a.href === location.href || location.pathname.endsWith(a.getAttribute('href'))) {
      a.classList.add('active');
    }
  });

  // 問い合わせフォームの簡易バリデーション（存在する場合）
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = contactForm.elements['name'].value.trim();
      const email = contactForm.elements['email'].value.trim();
      const message = contactForm.elements['message'].value.trim();
      if (!name || !email || !message) {
        alert('氏名・メール・メッセージは必須です。');
        return;
      }
      // ここでは送信処理は行わず、ダミーで成功表示
      alert('送信を受け付けました（ダミー）。実運用ではバックエンドを用意してください。');
      contactForm.reset();
    });
  }
});
