export function RunPlayer(_0x98a1x2, _0x98a1x3, _0x98a1x4, _0x98a1x5, _0x98a1x6, _0x98a1x7, _0x98a1x8, _0x98a1x9, _0x98a1xa, _0x98a1xb, _0x98a1xc, _0x98a1xd, _0x98a1xe) {
    if (!('MediaSource' in window && 'WebSocket' in window)) {
        return
    }
    var _0x98a1xf;
    var _0x98a1x10 = null;
    var _0x98a1x11 = null;
    var _0x98a1x12 = null;
    var _0x98a1x13 = false;
    var _0x98a1x14 = 0;
    var _0x98a1x15 = 0;
    var _0x98a1x16 = [];
    var _0x98a1x17 = _0x98a1xc * 60;
    var _0x98a1x18 = false;
    var _0x98a1x19 = false;
    var _0x98a1x1a;
    var _0x98a1x1b = 0;
    var _0x98a1x1c = false;
    var _0x98a1x1d = false;
    var _0x98a1x1e = 100;
    var _0x98a1x1f = false;
    var _0x98a1x20 = 0;
    var _0x98a1x21 = 0;
    var _0x98a1x22 = false;
    var _0x98a1x23 = false;
    var _0x98a1x24 = false;
    var _0x98a1x25 = false;
    var _0x98a1x26 = null;
    var _0x98a1x27 = 0;
    var _0x98a1x28 = 1;
    var _0x98a1x29 = 0;
    var _0x98a1x2a = 0;
    var _0x98a1x2b = 1;
    var _0x98a1x2c = false;
    if (_0x98a1x8['constructor'] === Array) {
        _0x98a1x1a = _0x98a1x8[0]
    } else {
        _0x98a1x1a = _0x98a1x8
    }
    if (_0x98a1x17 < 0) {
        _0x98a1x17 = 0
    }
    var _0x98a1x2d = (_0x98a1x7) ? 'wss://' : 'ws://';
    _0x98a1x2d += _0x98a1x5 + ':' + _0x98a1x6 + '/' + _0x98a1x1a;
    if (_0x98a1x9 != '') {
        _0x98a1x2d += '/sid:' + _0x98a1x9
    }
    var _0x98a1x2e = document['getElementById'](_0x98a1x2);
    if (_0x98a1x2e == null) {
        return
    }
    _0x98a1x2e['style']['width'] = _0x98a1x3 + 'px';
    _0x98a1x2e['style']['height'] = _0x98a1x4 + 'px';
    _0x98a1x2e['style']['position'] = 'relative';
    var _0x98a1x2f = _0x98a1x2 + '_Video';
    var _0x98a1x30 = _0x98a1x2 + '_videoControls';
    var _0x98a1x31 = _0x98a1x2 + '_volSlider';
    var _0x98a1x32 = _0x98a1x2 + '_showTime';
    var _0x98a1x33 = _0x98a1x2 + '_playpause';
    var _0x98a1x34 = _0x98a1x2 + '_stop';
    var _0x98a1x35 = _0x98a1x2 + '_volume';
    var _0x98a1x36 = _0x98a1x2 + '_progress';
    var _0x98a1x37 = _0x98a1x2 + '_fullscreen';
    var _0x98a1x38 = _0x98a1x2 + '_progressTip';
    var _0x98a1x39 = _0x98a1x2 + '_statusmessage';
    _0x98a1x2e['innerHTML'] = '<video id="' + _0x98a1x2f + '" width="' + _0x98a1x3 + '" height="' + _0x98a1x4 + '" style="background-color: black"></video>' + '<div id="' + _0x98a1x30 + '" class="controls" data-state="hidden">' + '<button id="' + _0x98a1x33 + '" type="button" data-state="play">Play/Pause</button>' + '<button id="' + _0x98a1x34 + '" type="button" data-state="stop">Stop</button>' + '<div id="' + _0x98a1x32 + '" style="width:130px; text-align:center; margin-top: 11px; padding-left: 2px; color: #FFFFFF;">0:00 / 0:00</div>' + '<input type="range" id="' + _0x98a1x36 + '" min="0" max="0" step="0.1" value="0" style="cursor:pointer; margin-top: 14px;"/>' + '<button id="' + _0x98a1x35 + '" type="button" data-state="volume">Volume</button>' + '<button id="' + _0x98a1x37 + '" type="button" data-state="go-fullscreen">Fullscreen</button></div>' + '<div id="' + _0x98a1x38 + '" style="z-index: 100; position: absolute; display: none; color: #FFFFFF; "></div>' + '<input type="range" id="' + _0x98a1x31 + '" min="0" max="1" step="0.01" value="0.5" style="cursor:pointer; z-index: 100; position: absolute; display: none; width: 100px; height: 12px; padding:20px; -webkit-transform:rotate(270deg); -moz-transform:rotate(270deg); -o-transform:rotate(270deg); -ms-transform:rotate(90deg); transform:rotate(270deg);"/>' + '<div id="' + _0x98a1x39 + '" style="z-index: 100; position: absolute; display: none; color: red; "></div>';
    var _0x98a1x3a = document['getElementById'](_0x98a1x2f);
    var _0x98a1x3b = document['getElementById'](_0x98a1x30);
    var _0x98a1x3c = document['getElementById'](_0x98a1x31);
    var _0x98a1x3d = document['getElementById'](_0x98a1x32);
    var _0x98a1x3e = document['getElementById'](_0x98a1x33);
    var _0x98a1x3f = document['getElementById'](_0x98a1x34);
    var _0x98a1x40 = document['getElementById'](_0x98a1x35);
    var _0x98a1x41 = document['getElementById'](_0x98a1x36);
    var _0x98a1x42 = document['getElementById'](_0x98a1x37);
    var _0x98a1x43 = document['getElementById'](_0x98a1x38);
    var _0x98a1x44 = document['getElementById'](_0x98a1x39);
    _0x98a1x3a['autoplay'] = true;
    _0x98a1x3a['controls'] = false;
    _0x98a1x3a['poster'] = _0x98a1xd;
    if (_0x98a1x45()) {
        _0x98a1xa = false;
        _0x98a1xe = true;
        _0x98a1x3a['autoplay'] = false;
        _0x98a1x1c = true
    }
    _0x98a1x1d = _0x98a1x46();
    if (!_0x98a1xa) {
        _0x98a1xb = true
    }
    _0x98a1x52();
    if (_0x98a1xe && _0x98a1xb) {
        _0x98a1x5d()
    }
    if (_0x98a1xa) {
        _0x98a1xa = false;
        _0x98a1x62()
    }

    function _0x98a1x45() {
        if (navigator['userAgent']['match'](/Android/i) || navigator['userAgent']['match'](/webOS/i) || navigator['userAgent']['match'](/iPhone/i) || navigator['userAgent']['match'](/iPad/i) || navigator['userAgent']['match'](/iPod/i) || navigator['userAgent']['match'](/BlackBerry/i) || navigator['userAgent']['match'](/Windows Phone/i)) {
            return true
        } else {
            return false
        }
    }

    function _0x98a1x46() {
        var _0x98a1x47 = window['chrome'],
            _0x98a1x48 = window['navigator'],
            _0x98a1x49 = _0x98a1x48['vendor'],
            _0x98a1x4a = _0x98a1x48['userAgent']['indexOf']('OPR') > -1,
            _0x98a1x4b = _0x98a1x48['userAgent']['indexOf']('Edge') > -1;
        if (_0x98a1x47 !== null && _0x98a1x47 !== undefined && _0x98a1x49 === 'Google Inc.' && _0x98a1x4a == false && _0x98a1x4b == false) {
            return true
        } else {
            return false
        }
    }

    function _0x98a1x4c(_0x98a1x4d) {
        _0x98a1x4d = Number(_0x98a1x4d);
        var _0x98a1x4e = Math['floor'](_0x98a1x4d / 3600);
        var _0x98a1x4f = Math['floor'](_0x98a1x4d % 3600 / 60);
        var _0x98a1x50 = Math['floor'](_0x98a1x4d % 3600 % 60);
        return ((_0x98a1x4e > 0 ? _0x98a1x4e + ':' + (_0x98a1x4f < 10 ? '0' : '') : '') + _0x98a1x4f + ':' + (_0x98a1x50 < 10 ? '0' : '') + _0x98a1x50)
    }

    function _0x98a1x51() {
        if (_0x98a1x11 != null) {
            _0x98a1x11['onmessage'] = null;
            _0x98a1x11['onclose'] = null;
            _0x98a1x11['onerror'] = null;
            _0x98a1x11['close']();
            _0x98a1x11 = null
        }
        _0x98a1x13 = false;
        _0x98a1x1f = false;
        _0x98a1x22 = false;
        _0x98a1x23 = false;
        _0x98a1x24 = false;
        _0x98a1x25 = false;
        _0x98a1x3a['pause']();
        _0x98a1x41['value'] = 0;
        _0x98a1x41['disabled'] = true;
        _0x98a1x41['max'] = 0;
        _0x98a1x1b = 0;
        _0x98a1x1e = 100;
        _0x98a1x3c['style']['display'] = 'none';
        _0x98a1x3d['innerHTML'] = '0:00 / 0:00';
        _0x98a1x3e['setAttribute']('data-state', 'play');
        if (_0x98a1x12 != null) {
            _0x98a1x10['removeSourceBuffer'](_0x98a1x12);
            _0x98a1x12['onupdateend'] = null;
            _0x98a1x12 = null
        }
        if (_0x98a1x10 != null) {
            _0x98a1x10['onsourceopen'] = null;
            _0x98a1x10 = null
        }
        _0x98a1x14 = 0;
        _0x98a1x15 = 0;
        _0x98a1x20 = 0;
        _0x98a1x21 = 0;
        _0x98a1x16['length'] = 0;
        _0x98a1x3e['disabled'] = false;
        _0x98a1x3f['disabled'] = false;
        _0x98a1x3a['src'] = '';
        _0x98a1x3a['load']();
        if (_0x98a1x26 != null) {
            clearInterval(_0x98a1x26);
            _0x98a1x26 = null
        }
        _0x98a1x27 = 0;
        _0x98a1x28 = 1;
        _0x98a1x29 = 0;
        _0x98a1x2a = 0;
        _0x98a1x2b = 1;
        _0x98a1x2c = false
    }

    function _0x98a1x52() {
        'use strict';
        _0x98a1x3b['setAttribute']('data-state', 'visible');
        var _0x98a1x53 = _0x98a1x3a['width'] + 'px';
        _0x98a1x3b['style']['width'] = _0x98a1x53;
        _0x98a1x41['disabled'] = true;
        _0x98a1x41['style']['width'] = _0x98a1x3a['width'] - 280 + 'px';
        _0x98a1x3c['value'] = _0x98a1x3a['volume'];
        _0x98a1x3a['addEventListener']('contextmenu', function(_0x98a1x54) {
            _0x98a1x54['preventDefault']()
        });
        var _0x98a1x55 = function() {
            return !!(_0x98a1x3a['fullScreen'] || _0x98a1x3a['webkitIsFullScreen'] || _0x98a1x3a['mozFullScreen'] || _0x98a1x3a['msFullscreenElement'] || _0x98a1x3a['fullscreenElement'])
        }
        var _0x98a1x56 = function() {
            if (_0x98a1x55()) {
                if (_0x98a1x3a['exitFullscreen']) {
                    _0x98a1x3a['exitFullscreen']()
                } else {
                    if (_0x98a1x3a['mozCancelFullScreen']) {
                        _0x98a1x3a['mozCancelFullScreen']()
                    } else {
                        if (_0x98a1x3a['webkitCancelFullScreen']) {
                            _0x98a1x3a['webkitCancelFullScreen']()
                        } else {
                            if (_0x98a1x3a['msExitFullscreen']) {
                                _0x98a1x3a['msExitFullscreen']()
                            }
                        }
                    }
                }
            } else {
                if (_0x98a1x3a['requestFullscreen']) {
                    _0x98a1x3a['requestFullscreen']()
                } else {
                    if (_0x98a1x3a['mozRequestFullScreen']) {
                        _0x98a1x3a['mozRequestFullScreen']()
                    } else {
                        if (_0x98a1x3a['webkitRequestFullScreen']) {
                            _0x98a1x3a['webkitRequestFullScreen']()
                        } else {
                            if (_0x98a1x3a['msRequestFullscreen']) {
                                _0x98a1x3a['msRequestFullscreen']()
                            }
                        }
                    }
                }
            }
        }
        var _0x98a1x57 = function() {
            if (_0x98a1x3a['paused']) {
                _0x98a1x3e['setAttribute']('data-state', 'play')
            } else {
                _0x98a1x3e['setAttribute']('data-state', 'pause')
            }
        }
        if (!_0x98a1xb) {
            _0x98a1x3b['style']['display'] = 'none'
        } else {
            var _0x98a1x58;
            _0x98a1x3a['addEventListener']('mouseover', function() {
                _0x98a1x3b['style']['display'] = 'block'
            });
            _0x98a1x3a['addEventListener']('mouseout', function() {
                _0x98a1x3b['style']['display'] = 'none'
            });
            _0x98a1x3b['addEventListener']('mouseover', function() {
                clearTimeout(_0x98a1x58);
                _0x98a1x3b['style']['display'] = 'block'
            });
            _0x98a1x3b['addEventListener']('mouseout', function() {
                _0x98a1x3b['style']['display'] = 'none'
            });
            _0x98a1x3a['addEventListener']('mousemove', function() {
                _0x98a1x3b['style']['display'] = 'block';
                clearTimeout(_0x98a1x58);
                _0x98a1x58 = setTimeout(function() {
                    _0x98a1x3b['style']['display'] = 'none';
                    _0x98a1x3c['style']['display'] = 'none'
                }, 3000)
            })
        }
        _0x98a1x3a['addEventListener']('play', function() {
            _0x98a1x25 = true;
            if (_0x98a1x44['style']['display'] != 'none' && !_0x98a1x22) {
                _0x98a1x3a['pause']();
                _0x98a1x5f('Buffering...', false)
            }
            _0x98a1x57()
        });
        _0x98a1x3a['addEventListener']('pause', function() {
            _0x98a1x57()
        });
        _0x98a1x3e['addEventListener']('click', function(_0x98a1x54) {
            if (!_0x98a1x13) {
                _0x98a1x62()
            } else {
                if (_0x98a1x3a['paused']) {
                    if (_0x98a1x21 < _0x98a1x15 / 1000) {
                        _0x98a1x3a['currentTime'] = _0x98a1x15 / 1000 + 1
                    }
                    _0x98a1x3a['play']()
                } else {
                    if (_0x98a1x17 > 0) {
                        _0x98a1x21 = _0x98a1x3a['currentTime'];
                        _0x98a1x3a['pause']()
                    }
                }
            }
        });
        _0x98a1x3f['addEventListener']('click', function(_0x98a1x54) {
            _0x98a1x19 = true;
            _0x98a1x44['style']['display'] = 'none';
            _0x98a1x51()
        });
        _0x98a1x40['addEventListener']('click', function(_0x98a1x54) {
            if (_0x98a1x3c['style']['display'] == 'none') {
                if (_0x98a1xe) {
                    _0x98a1x3c['style']['left'] = this['offsetLeft'] - 50 + 'px';
                    _0x98a1x3c['style']['top'] = this['offsetTop'] - 150 + 'px'
                } else {
                    _0x98a1x3c['style']['left'] = this['offsetLeft'] - 60 + 'px';
                    _0x98a1x3c['style']['top'] = this['offsetTop'] - 120 + 'px'
                }
                _0x98a1x3c['style']['display'] = 'block'
            } else {
                _0x98a1x3c['style']['display'] = 'none'
            }
        });
        _0x98a1x42['addEventListener']('click', function(_0x98a1x54) {
            _0x98a1x56()
        });
        _0x98a1x3a['addEventListener']('timeupdate', function() {
            if (_0x98a1x13 && !isNaN(_0x98a1x3a['duration']) && (_0x98a1x3a['duration'] > _0x98a1x1b)) {
                _0x98a1x1b = _0x98a1x3a['duration'];
                _0x98a1x1f = true;
                if (_0x98a1x17 > 0 && !_0x98a1x18) {
                    _0x98a1x41['max'] = (_0x98a1x1b - _0x98a1x15 / 1000);
                    if (_0x98a1x3a['currentTime'] > _0x98a1x15 / 1000) {
                        _0x98a1x41['value'] = _0x98a1x3a['currentTime'] - _0x98a1x15 / 1000
                    }
                    _0x98a1x3d['innerHTML'] = _0x98a1x4c(Math['floor'](_0x98a1x3a['currentTime'])) + ' / ' + _0x98a1x4c(Math['floor'](_0x98a1x1b))
                }
            }
        });
        _0x98a1x41['addEventListener']('mouseup', function(_0x98a1x54) {
                _0x98a1x18 = false;
                if (_0x98a1x17 > 0) {
                    var _0x98a1x59 = (_0x98a1x54['layerX'] - (this['offsetLeft'] + this['offsetParent']['offsetLeft'])) / this['offsetWidth'];
                    if (_0x98a1x59 < 0) {
                        _0x98a1x59 = 0
                    }
                    var _0x98a1x5a = (_0x98a1x23) ? 0.1 : 1;
                    if (_0x98a1x59 > 0.98) {
                        _0x98a1x3a['currentTime'] = _0x98a1x3a['duration'] - _0x98a1x5a
                    } else {
                        _0x98a1x3a['currentTime'] = _0x98a1x15 / 1000 + _0x98a1x59 * (_0x98a1x3a['duration'] - _0x98a1x15 / 1000)
                    }
                }
            }); _0x98a1x41['addEventListener']('mousedown', function(_0x98a1x54) {
                _0x98a1x18 = true
            });
            var _0x98a1x5b; _0x98a1x41['addEventListener']('mousemove', function(_0x98a1x54) {
                if (!isNaN(_0x98a1x3a['duration']) && !_0x98a1x41['disabled'] && this['offsetParent'] != null) {
                    _0x98a1x43['style']['left'] = _0x98a1x54['layerX'] - 15 + 'px';
                    _0x98a1x43['style']['top'] = this['offsetTop'] + this['offsetParent']['offsetTop'] - 25 + 'px';
                    _0x98a1x43['style']['display'] = 'block';
                    var _0x98a1x59 = (_0x98a1x54['layerX'] - (this['offsetLeft'] + this['offsetParent']['offsetLeft'])) / this['offsetWidth'];
                    if (_0x98a1x59 < 0) {
                        _0x98a1x59 = 0
                    }
                    var _0x98a1x5c = _0x98a1x15 / 1000 + _0x98a1x59 * (_0x98a1x3a['duration'] - _0x98a1x15 / 1000);
                    _0x98a1x43['innerHTML'] = _0x98a1x4c(Math['floor'](_0x98a1x5c));
                    clearTimeout(_0x98a1x5b);
                    _0x98a1x5b = setTimeout(function() {
                        _0x98a1x43['style']['display'] = 'none'
                    }, 1000)
                }
            }); _0x98a1x41['addEventListener']('mouseout', function() {
                _0x98a1x43['style']['display'] = 'none'
            }); _0x98a1x3c['addEventListener']('change', function(_0x98a1x54) {
                _0x98a1x3a['volume'] = this['value']
            }); _0x98a1x3c['addEventListener']('mouseout', function() {
                _0x98a1x3c['style']['display'] = 'none'
            })
        }

        function _0x98a1x5d() {
            _0x98a1x3b['style']['height'] = '70px';
            _0x98a1x41['style']['width'] = _0x98a1x3a['width'] - 410 + 'px';
            _0x98a1x3e['style']['width'] = '64px';
            _0x98a1x3e['style']['backgroundSize'] = '64px 64px';
            _0x98a1x3f['style']['width'] = '64px';
            _0x98a1x3f['style']['backgroundSize'] = '64px 64px';
            _0x98a1x40['style']['width'] = '64px';
            _0x98a1x40['style']['backgroundSize'] = '64px 64px';
            _0x98a1x42['style']['width'] = '64px';
            _0x98a1x42['style']['backgroundSize'] = '64px 64px';
            _0x98a1x41['style']['marginTop'] = '30px';
            _0x98a1x3d['style']['marginTop'] = '27px'
        }

        function _0x98a1x5e(_0x98a1x54) {
            _0x98a1x10['duration'] = 0;
            _0x98a1x3f['disabled'] = false;
            _0x98a1x69()
        }

        function _0x98a1x5f(_0x98a1x60, _0x98a1x61) {
            if (_0x98a1x61) {
                _0x98a1x44['style']['top'] = -1 * _0x98a1x3a['height'] + 20 + 'px'
            } else {
                if (_0x98a1xe) {
                    _0x98a1x44['style']['top'] = '-80px'
                } else {
                    _0x98a1x44['style']['top'] = '-50px'
                }
            }
            _0x98a1x44['style']['left'] = _0x98a1x3a['offsetWidth'] - _0x98a1x3a['width'] + 5 + 'px';
            _0x98a1x44['innerHTML'] = _0x98a1x60;
            _0x98a1x44['style']['display'] = 'block'
        }

        function _0x98a1x62() {
            _0x98a1x16['length'] = 0;
            _0x98a1x19 = false;
            _0x98a1x3e['disabled'] = true;
            _0x98a1x3f['disabled'] = true;
            if (_0x98a1x17 > 0) {
                _0x98a1x41['disabled'] = false
            }
            _0x98a1x10 = new window.MediaSource();
            _0x98a1x3a['src'] = window['URL']['createObjectURL'](_0x98a1x10);
            _0x98a1x10['addEventListener']('sourceopen', _0x98a1x5e, false);
            if (_0x98a1x1c) {
                _0x98a1x3a['play']()
            }
            _0x98a1x5f('Connecting...', false)
        }

        function _0x98a1x63(_0x98a1x54) {
            if ((_0x98a1x12 != null) && !_0x98a1x12['updating']) {
                if (_0x98a1x16['length'] > 0) {
                    _0x98a1x12['appendBuffer'](_0x98a1x16['shift']())
                } else {
                    var _0x98a1x64 = (_0x98a1x14 - _0x98a1x15) - _0x98a1x17 * 1000;
                    if (_0x98a1x64 >= 1000) {
                        _0x98a1x15 = _0x98a1x15 + _0x98a1x64
                    }
                    var _0x98a1x65 = (_0x98a1x14 - _0x98a1x20) - _0x98a1x17 * 1000;
                    if ((_0x98a1x65 >= 10000) && (_0x98a1x15 / 1000 >= 30)) {
                        _0x98a1x12['remove'](Math['max'](0, _0x98a1x15 / 1000 - 35), _0x98a1x15 / 1000 - 20);
                        _0x98a1x20 = _0x98a1x20 + _0x98a1x65
                    }
                }
            }
        }

        function _0x98a1x66() {
            if (_0x98a1x8['constructor'] === Array) {
                var _0x98a1x67 = _0x98a1x27 / _0x98a1x28;
                var _0x98a1x68 = false;
                if (_0x98a1x67 > 0.05) {
                    if (_0x98a1x29 + 1 < _0x98a1x8['length']) {
                        _0x98a1x29++;
                        _0x98a1x68 = true;
                        _0x98a1x2c = false
                    }
                } else {
                    if (_0x98a1x29 - 1 >= 0) {
                        if (_0x98a1x2c) {
                            _0x98a1x2a = 0;
                            _0x98a1x2b = 0
                        }
                        if (_0x98a1x2b == 0) {
                            _0x98a1x29--;
                            _0x98a1x68 = true;
                            _0x98a1x2c = true;
                            _0x98a1x2a++;
                            _0x98a1x2b = _0x98a1x2a
                        } else {
                            _0x98a1x2b--
                        }
                    }
                }
                if (_0x98a1x68) {
                    _0x98a1x2a++;
                    _0x98a1x11['send']('switch:' + _0x98a1x8[_0x98a1x29])
                }
                _0x98a1x27 = 0;
                _0x98a1x28 = 1
            }
        }

        function _0x98a1x69() {
            _0x98a1x11 = new WebSocket(_0x98a1x2d);
            _0x98a1x11['binaryType'] = 'arraybuffer';
            _0x98a1x11['onmessage'] = function(_0x98a1x6a) {
                var _0x98a1x6b = new Uint8Array(_0x98a1x6a['data']);
                var _0x98a1x6c;
                if (_0x98a1x6b[0] == 0) {
                    var _0x98a1x61 = new Uint16Array(_0x98a1x6a['data'], 2, (_0x98a1x6a['data']['byteLength'] - 2) / 2);
                    var _0x98a1x6d = String['fromCharCode']['apply'](null, _0x98a1x61);
                    _0x98a1x5f('Error: ' + _0x98a1x6d, true);
                    _0x98a1x51();
                    return
                }
                if (_0x98a1x6b[0] == 1) {
                    if (!_0x98a1x1d) {
                        _0x98a1x1e = 1000
                    }
                    _0x98a1x23 = (_0x98a1x6b[1] == 4) || (_0x98a1x6b[1] == 8) || (_0x98a1x6b[1] == 12);
                    var _0x98a1x6e = new Uint16Array(_0x98a1x6a['data'], 18, 1);
                    var _0x98a1x6f = _0x98a1x6e[0];
                    if (!_0x98a1x13) {
                        _0x98a1x13 = true;
                        var _0x98a1x70 = new Uint16Array(_0x98a1x6a['data'], 20, _0x98a1x6f / 2);
                        var _0x98a1x71 = String['fromCharCode']['apply'](null, _0x98a1x70);
                        var _0x98a1x72 = new DOMParser();
                        var _0x98a1x73 = _0x98a1x72['parseFromString'](_0x98a1x71, 'text/xml');
                        _0x98a1xf = _0x98a1x73['getElementsByTagName']('mimetypecodec')[0]['childNodes'][0]['nodeValue'];
                        _0x98a1x12 = _0x98a1x10['addSourceBuffer'](_0x98a1xf);
                        _0x98a1x12['addEventListener']('updateend', _0x98a1x63, false)
                    }
                    _0x98a1x6c = new Uint8Array(_0x98a1x6a['data'], 20 + _0x98a1x6f, _0x98a1x6a['data']['byteLength'] - 20 - _0x98a1x6f)
                } else {
                    if (_0x98a1x6b[0] == 2) {
                        if (_0x98a1x6b[1] == 1) {
                            _0x98a1x27++
                        } else {
                            _0x98a1x28++
                        }
                        _0x98a1x14 = new DataView(_0x98a1x6a['data'])['getInt32'](6, true);
                        _0x98a1x6c = new Uint8Array(_0x98a1x6a['data'], 10, _0x98a1x6a['data']['byteLength'] - 10)
                    }
                }
                if (_0x98a1x3a['error'] != null) {
                    _0x98a1x5f('Error during playback.', true);
                    _0x98a1x51();
                    return
                }
                if (_0x98a1x25 && _0x98a1x22 && _0x98a1x1f && !_0x98a1x23) {
                    if ((_0x98a1x3a['duration'] - _0x98a1x3a['currentTime'] < 0.5) && !_0x98a1x24) {
                        _0x98a1x3e['disabled'] = true;
                        _0x98a1x24 = true;
                        _0x98a1x5f('Buffering...', false);
                        _0x98a1x3a['pause']()
                    } else {
                        if ((_0x98a1x3a['duration'] - _0x98a1x3a['currentTime'] >= 5) && _0x98a1x24) {
                            _0x98a1x3e['disabled'] = false;
                            _0x98a1x24 = false;
                            _0x98a1x44['style']['display'] = 'none';
                            _0x98a1x3a['play']()
                        }
                    }
                }
                if (_0x98a1x12 != null) {
                    if (_0x98a1x12['updating'] || _0x98a1x16['length'] > 0) {
                        _0x98a1x16['push'](_0x98a1x6c)
                    } else {
                        _0x98a1x12['appendBuffer'](_0x98a1x6c)
                    }
                }
                var _0x98a1x74 = (_0x98a1x23) ? 0 : 2000;
                if ((_0x98a1x14 > _0x98a1x1e) && (_0x98a1x14 > _0x98a1x74) && _0x98a1x13 && (_0x98a1x44['style']['display'] != 'none') && !_0x98a1x22) {
                    _0x98a1x44['style']['display'] = 'none';
                    _0x98a1x3e['disabled'] = false;
                    _0x98a1x22 = true;
                    _0x98a1x3a['play']();
                    if ((_0x98a1x8['constructor'] === Array) && (_0x98a1x26 == null)) {
                        _0x98a1x26 = setInterval(_0x98a1x66, 10000)
                    }
                }
            }
            _0x98a1x11['onclose'] = function() {
                _0x98a1x51()
            }
            _0x98a1x11['onerror'] = function() {
                if (!_0x98a1x19) {
                    _0x98a1x5f('Error: Websocket connection is closed or could not be established.', true);
                    _0x98a1x51()
                }
            }
        }
    }