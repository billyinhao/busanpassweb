// javascript
(function () {
    const VOUCHER_URL = 'voucher_page.html';
    // const BOOKING_NO = 'GYQ747883';
    const BOOKING_DATE = '8月18日';
    // const DURATION_HOURS = 48;
    const PARTICIPANT_NAME = 'CHEN XIAOEN';
    const VOUCHER_INFO = {
        'ECW723599': {
            'duration_hours': 48,
            'vouchers': [
                {'qrcode_url': 'voucher_page_files/qrcodes/M040211139730.png', 'number': 'M040211139730'},
                {'qrcode_url': 'voucher_page_files/qrcodes/M040211139740.png', 'number': 'M040211139740'},
            ]
        },
        'WBE310311': {
            'duration_hours': 48,
            'vouchers': [
                {'qrcode_url': 'voucher_page_files/qrcodes/M040211200406.png', 'number': 'M040211200406'},
                {'qrcode_url': 'voucher_page_files/qrcodes/M040211139750.png', 'number': 'M040211139750'},
                {'qrcode_url': 'voucher_page_files/qrcodes/M040211142404.png', 'number': 'M040211142404'},
                {'qrcode_url': 'voucher_page_files/qrcodes/M040211142402.png', 'number': 'M040211142402'},
            ]
        },
        'NQR193014': {
            'duration_hours': 24,
            'vouchers': [
                {'qrcode_url': 'voucher_page_files/qrcodes/M040111136892.png', 'number': 'M040111136892'},
                {'qrcode_url': 'voucher_page_files/qrcodes/M040111136894.png', 'number': 'M040111136894'},
            ]
        },
    };

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
        const candidates = root.querySelectorAll('button, a, span, div, p, li, i, strong');
        candidates.forEach(function (el) {
            setDeepLinkForElement(el);
        });
    }

    // 从 URL 查询参数中获取 bookingNo，支持 ?booking_no= 或 ?bookingNo=
    function getBookingNoFromParam() {
        try {
            const search = window.location.search || '';
            const params = new URLSearchParams(search);
            // 支持两种常见参数名：booking_no 与 bookingNo
            let bookingNo = params.get('booking_no') || params.get('bookingNo') || null;
            // 额外保护：去掉前后空白
            if (bookingNo && typeof bookingNo === 'string') {
                bookingNo = bookingNo.trim();
                if (bookingNo === '') return null;
            }
            return bookingNo;
        } catch (e) {
            // 解析失败则返回 null，保持原有行为（不做任何替换）
            return null;
        }
    }

    function setVoucherInfo(root) {
        root = root || document;

        // 根据 URL 解析 bookingNo
        const bookingNo = getBookingNoFromParam();
        if (!bookingNo) {
            // 未能从路径解析出 bookingNo，则不做任何替换（按要求）
            return;
        }

        // 从VOUCHER_INFO中取出对应的voucher列表
        const duration_hours = VOUCHER_INFO[bookingNo].duration_hours;
        const vouchers = VOUCHER_INFO[bookingNo].vouchers;
        if (!Array.isArray(vouchers) || vouchers.length === 0) {
            // bookingNo在VOUCHER_INFO中找不到或没有数据，则不做替换
            return;
        }
        const voucher_count = vouchers.length;

        const accountButton = root.querySelector('a[data-spm-module="TopNavigationAccount?trg=manual"]');
        if (accountButton && accountButton.href) {
            accountButton.href = accountButton.href + '?booking_no=' + bookingNo;
        }
        const bookingsButton = root.querySelector('a[href="bookings_page.html"]');
        if (bookingsButton && bookingsButton.href) {
            bookingsButton.href = bookingsButton.href + '?booking_no=' + bookingNo;
        }
        const bookingHeader = root.querySelector('span.header-title-box__text');
        if (bookingHeader && bookingHeader.innerHTML) {
            bookingHeader.innerHTML = '订单编号：' + bookingNo;
        }
        const bookingValidity = root.querySelector('div.booking-validity-box');
        if (bookingValidity) {
            bookingValidity.querySelector('li').innerHTML = '有效期为2025年' + BOOKING_DATE + ' 00:00至2026年' + BOOKING_DATE + ' 00:00';
        }
        const bookingCardDetail = root.querySelector('div.booking-card-detail_desc');
        if (bookingCardDetail) {
            bookingCardDetail.querySelector('p:nth-child(1)').innerHTML = '电子通行证 · ' + duration_hours + '小时';
            bookingCardDetail.querySelector('p:nth-child(3)').innerHTML = '票卡 * ' + voucher_count;
        }
        const packageBox = root.querySelector('span.package-box__value');
        if (packageBox && packageBox.innerHTML) {
            packageBox.innerHTML = '電子通行證 ·' + duration_hours + '時';
        }
        const packageName = root.querySelector('p.voucher_title__pkg_name');
        if (packageName && packageName.innerHTML) {
            packageName.innerHTML = '電子通行證 · ' + duration_hours + '小時';
        }
        const packageNameEn = root.querySelector('p.voucher_title__pkg_name_en');
        if (packageNameEn && packageNameEn.innerHTML) {
            packageNameEn.innerHTML = 'Mobile Pass · ' + duration_hours + '-Hour';
        }
        const textListBox = root.querySelector('p.text-list-box__value.color-text-primary > span');
        if (textListBox && textListBox.innerHTML) {
            textListBox.innerHTML = voucher_count + ' x 票卡';
        }
        let candidates = root.querySelectorAll('div.voucher_title_text');
        candidates.forEach(function (el) {
            const titleTextEl = el.querySelector('p.voucher_title_text__title');
            const titleText = titleTextEl && titleTextEl.innerHTML ? titleTextEl.innerHTML : '';
            if (titleText && titleText.indexOf('Lead participant') >= 0) {
                // Lead participant
                el.querySelector('div.voucher_title_text__content > div.markdown-content').innerHTML = PARTICIPANT_NAME;
            } else if (titleText && titleText.indexOf('Validity') >= 0) {
                // Validity
                el.querySelector('div.voucher_title_text__content > div.markdown-content').innerHTML = '有效期由2025年' + BOOKING_DATE + ' 00:00至2026年' + BOOKING_DATE + ' 00:00';
            } else if (titleText && titleText.indexOf('Quantity') >= 0) {
                // Quantity
                el.querySelector('div.voucher_title_text__content > div.markdown-content').innerHTML = voucher_count + ' x 票卡';
            } else if (titleText && titleText.indexOf('Booking reference ID') >= 0) {
                // Booking reference ID
                el.querySelector('div.voucher_title_text__content > div.markdown-content').innerHTML = bookingNo;
            }
        });

        let i = 0;
        candidates = root.querySelectorAll('div.voucher_code_main');
        candidates.forEach(function (el) {
            const voucher = vouchers[i];
            if (!voucher) {
                // 如果页面中的 voucher 卡位多于实际数据，则跳过后续空位（也可选择隐藏）
                return;
            }
            el.querySelector('div.voucher_code_main__img--qrcode').style.backgroundImage = 'url(' + voucher.qrcode_url + ')';
            el.querySelector('p.voucher_code_main__number > span').innerHTML = voucher.number;
            i += 1;
        });

        try {
            const subItems = root.querySelectorAll('div.voucher_code__sub_code');
            const showCount = vouchers.length;
            if (subItems && subItems.length > 0) {
                subItems.forEach(function (subEl, idx) {
                    // 恢复前 N 个为可见，隐藏其余
                    if (idx < showCount) {
                        subEl.style.display = '';
                    } else {
                        subEl.style.display = 'none';
                    }
                });
            }
        } catch (e) {
            // 忽略任何 DOM 操作异常，保持原有行为
        }
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