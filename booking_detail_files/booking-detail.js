// javascript
// 说明：此脚本在 DOMContentLoaded 后运行，支持属性名 deep_link 或 data-deep-link。
//       点击按钮时会读取属性并跳转；对 http(s) 使用 window.open，新 scheme 使用 location.href。
document.addEventListener('DOMContentLoaded', function () {
  function handleDeepLinkClick(e) {
    var btn = e.currentTarget;
    // 先尝试 data-deep-link，再尝试 deep_link（兼容现有 HTML）
    var url = btn.getAttribute('data-deep-link') || btn.getAttribute('deep_link');
    if (!url) return;
    // 防止表单提交或其它默认行为
    e.preventDefault();
    // 简单的判断：http/https 在新窗口打开，其他 scheme 用 location.href
    try {
      var lower = url.trim().toLowerCase();
      if (lower.indexOf('http://') === 0 || lower.indexOf('https://') === 0) {
        window.open(url, '_blank', 'noopener');
      } else {
        // 自定义 scheme（例如 klook://...），使用 location.href 触发 App 或浏览器行为
        window.open(url, '_blank', 'noopener');
        // window.location.href = url;
      }
    } catch (err) {
      // 兜底：直接跳转
      window.location.href = url;
    }
  }

  // 选择带 deep_link 或 data-deep-link 的按钮
  var buttons = document.querySelectorAll('button[deep_link], button[data-deep-link]');
  buttons.forEach(function (b) {
    // 避免重复绑定
    b.removeEventListener('click', handleDeepLinkClick);
    b.addEventListener('click', handleDeepLinkClick);
  });
});