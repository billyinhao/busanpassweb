// javascript
(function () {
    const VOUCHER_URL = 'voucher_page.html';
    const BOOKING_NO = 'PQQ764286';
    const BOOKING_DATE = '8月25日';
    const PARTICIPANT_NAME = 'Ye Yuxuan';
    const VOUCHER_INFO = [
        {'qrcode_url': 'voucher_page_files/M08021562024.jpeg', 'number': 'M08021562024'},
        {'qrcode_url': 'voucher_page_files/M08021562026.jpeg', 'number': 'M08021562026'}
    ];

    function setDeepLinkForElement(el) {
        try {
            if (el && el.innerText) {
                if (el.innerText.trim() === '查看凭证') {
                    el.setAttribute('deep_link', VOUCHER_URL);
                }
            }
        } catch (err) {
            // ignore
        }
        return true;
    }

    function setVoucherLink(root) {
        root = root || document;
        var candidates = root.querySelectorAll('button, a, span, div, p, li, i, strong');
        candidates.forEach(function (el) {
            setDeepLinkForElement(el);
        });
    }

    function setVoucherInfo(root) {
        root = root || document;
        var bookingHeader = root.querySelector('span.header-title-box__text');
        if (bookingHeader && bookingHeader.innerHTML) {
            bookingHeader.innerHTML = '订单编号：' + BOOKING_NO;
        }
        var bookingValidity = root.querySelector('div.booking-validity-box');
        if (bookingValidity) {
            bookingValidity.querySelector('li').innerHTML = '有效期为2025年'+BOOKING_DATE+' 00:00至2026年'+BOOKING_DATE+' 00:00';
        }
        var candidates = root.querySelectorAll('div.voucher_title_text');
        candidates.forEach(function (el) {
            var titleText = el.querySelector('p.voucher_title_text__title').innerHTML;
            if (titleText && titleText.indexOf('Lead participant') >= 0) {
                el.querySelector('div.voucher_title_text__content > div.markdown-content').innerHTML = PARTICIPANT_NAME;
            } else if (titleText && titleText.indexOf('Validity') >= 0) {
                el.querySelector('div.voucher_title_text__content > div.markdown-content').innerHTML = '有效期由2025年'+BOOKING_DATE+' 00:00至2026年'+BOOKING_DATE+' 00:00';
            } else if (titleText && titleText.indexOf('Booking reference ID') >= 0) {
                el.querySelector('div.voucher_title_text__content > div.markdown-content').innerHTML = BOOKING_NO;
            }
        });
        var i = 0;
        candidates = root.querySelectorAll('div.voucher_code_main');
        candidates.forEach(function (el) {
            el.querySelector('div.voucher_code_main__img--qrcode').style.backgroundImage = 'url(' + VOUCHER_INFO[i].qrcode_url + ')';
            el.querySelector('p.voucher_code_main__number > span').innerHTML = VOUCHER_INFO[i].number;
            i += 1;
        });
    }

    // 初始扫描（DOMContentLoaded 或立即，如果已就绪）
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            setVoucherLink();
            setVoucherInfo();
        });
    } else {
        setVoucherLink();
        setVoucherInfo();
    }
})();