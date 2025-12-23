// javascript
// 在 `voucher_page_files/voucher-code.js` 中合适的位置（DOM 已就绪时）添加以下代码：
(function () {
    var containers = document.querySelectorAll('.voucher_code__sub_codes');
    if (!containers || containers.length === 0) return;

    containers.forEach(function (container) {
        container.addEventListener('click', function (event) {
            var clickedItem = event.target.closest('.voucher_code__sub_code');
            if (!clickedItem || !container.contains(clickedItem)) return;

            var items = container.querySelectorAll('.voucher_code__sub_code');
            items.forEach(function (item) {
                var panel = item.querySelector('.voucher_code__sub_code_panel');
                var main = item.querySelector('.voucher_code_main');

                if (item === clickedItem) {
                    if (panel) panel.style.display = 'none';
                    if (main) main.style.display = ''; // 恢复到样式表默认显示
                } else {
                    if (panel) panel.style.display = ''; // 显示 panel
                    if (main) main.style.display = 'none'; // 隐藏 main
                }
            });
        });
    });
})();

(function () {
  function bindSection(section) {
    if (!section || section.__voucher_bind_done) return;
    section.__voucher_bind_done = true;

    var header = section.querySelector('.voucher_panel_header');
    if (!header) return;

    header.addEventListener('click', function () {
      var main = section.querySelector('.voucher_panel_header__main');
      var panel = section.querySelector('.voucher_panel');
      var arrow = header.querySelector('.voucher_panel_header__icon');
      if (!main || !panel || !arrow) return;

      arrow.classList.toggle('voucher_panel_header__icon--collapsed');

      // 判断当前是否处于折叠状态：优先看 panel 是否含有折叠类，回退到 main 的计算样式
      var isCollapsed = panel.classList.contains('voucher_panel--collapsed') ||
        window.getComputedStyle(main).display === 'none';

      if (isCollapsed) {
        // 展示状态
        main.style.display = '';
        panel.className = 'voucher_panel voucher_detail__component--bottom_padding voucher_detail__component--top_radius voucher_detail__component--bottom_radius';
      } else {
        // 隐藏状态
        main.style.display = 'none';
        panel.className = 'voucher_panel voucher_panel--collapsed voucher_detail__component--bottom_padding voucher_detail__component--top_radius voucher_detail__component--bottom_radius';
      }
    }, false);
  }

  function init() {
    document.querySelectorAll('.voucher_section').forEach(bindSection);

    // 监听动态插入的 section
    var mo = new MutationObserver(function (mutations) {
      mutations.forEach(function (m) {
        m.addedNodes.forEach(function (node) {
          if (node.nodeType !== 1) return;
          if (node.matches && node.matches('.voucher_section')) {
            bindSection(node);
          }
          var children = node.querySelectorAll && node.querySelectorAll('.voucher_section');
          if (children && children.length) {
            children.forEach(bindSection);
          }
        });
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
