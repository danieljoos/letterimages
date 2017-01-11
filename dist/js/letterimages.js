//
// Letter Images - Generated Profile Images
//
// Copyright (c) 2017 Daniel Joos
//
// Distributed under MIT license. (See file LICENSE)
//

; (function (root, factory) {
    /* global define */
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory(require('jquery'));
    } else {
        /* global jQuery */
        factory(jQuery);
    }
} ((typeof window !== 'undefined') ? window : this, function ($) {

    'use strict';

    var themes = ['teal', 'blue', 'purple', 'orange', 'grey'];

    function LetterImages(options) {
        this.options = $.extend({
            themeResolver: resolveTheme
        }, options);
    }

    LetterImages.prototype.resolveTheme = function (element) {
        element = $(element);
        if (!themes.reduce(function (ret, theme) {
            return ret && !element.hasClass('letterimages-' + theme);
        }, true)) { return; }
        var config = $.extend({ name: '?' }, element.data());
        var theme = this.options.themeResolver(config.name, themes);
        element.addClass('letterimages-' + theme);
    };

    function resolveTheme(name, themes) {
        var hash = 5381;
        for (var i = 0; i < name.length; ++i) {
            hash = ((hash << 5) + hash) + name.charCodeAt(i);
        }
        return themes[Math.abs(hash) % themes.length];
    }

    $.fn.letterimages = function (options) {
        var l = new LetterImages(options);
        this.each(function () { l.resolveTheme(this); });
    };

    return LetterImages;
}));
