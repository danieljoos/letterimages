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

    // The default color themes. Inspired by OxygenOS's contact app.
    var themes = [
        ['#00796b', '#009688', '#a5d6a7', '#00695c'],  // Teal
        ['#1565c0', '#1e88e5', '#81d4fa', '#0d47a1'],  // Blue
        ['#673ab7', '#9575cd', '#ce93d8', '#5e35b1'],  // Purple
        ['#ef6c00', '#ffa726', '#fff59d', '#fdd835'],  // Orange
        ['#78909c', '#b0bec5', '#e3f2fd', '#607d8b']   // Grey
    ];

    var glyphs = {
        /* jscs:disable */
        /* jshint ignore:start */

        a: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" height="300" width="300"><path d="M0 0h300v300H0z" fill="#111" class="color1"/><path d="M185.05 0L0 284.62v15.35l86.398-.26 124.086-190.9L300 246.525V98.562L235.918 0h-50.867z" fill="#222" class="color2"/><path d="M210.484 109.098L86.398 300H300v-53.186l-89.516-137.716z" fill="#333" class="color3"/></svg>',
        b: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" height="300" width="300"><path d="M0 0h300v300H0z" fill="#111" class="color1"/><path d="M0 0v300h136.857c53.184 0 96-41.924 96-94 0-21.017-6.977-40.378-18.793-56 11.816-15.622 18.793-34.983 18.793-56 0-52.076-42.816-94-96-94H0z" fill="#222" class="color2"/><path d="M0 111v77h136.857c31.948 0 60.149-15.131 77.58-38.5-17.431-23.369-45.632-38.5-77.58-38.5H0z" fill="#333" class="color3"/></svg>',
        c: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" height="300" width="300"><path d="M0 0h300v300H0z" fill="#111" class="color1"/><path d="M87.9 0C60.4 44.6 45.8 96 45.7 148.4c0 53.6 15.2 106.2 43.9 151.6H300V0H87.9z" fill="#222" class="color2"/><path d="M300 64.3V0h-61.3c-51.5 31.7-83 87.9-83 148.4.1 62.7 33.8 120.6 88.3 151.6h56v-67.4c-35.5-12.7-59.3-46.4-59.3-84.1 0-37.8 23.8-71.5 59.3-84.2z" fill="#333" class="color3"/></svg>',
        d: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" height="300" width="300"><path d="M0 0h300v300H0z" fill="#111" class="color1"/><path d="M23.688 0h96v300h-96z" fill="#222" class="color2"/><path d="M119.688 0v300H150c83.1 0 150-66.9 150-150S233.1 0 150 0h-30.313z" fill="#333" class="color3"/></svg>',
        e: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" height="300" width="300"><path d="M0 0h300v300H0z" fill="#444" class="color4"/><path d="M0 0h200v300H0z" fill="#111" class="color1"/><path d="M100 215h200v85H100zm0-215h200v85H100z" fill="#222" class="color2"/><path d="M100 107.5h200v85H100z" fill="#333" class="color3"/></svg>',
        f: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" height="300" width="300"><path d="M0 0h300v300H0z" fill="#444" class="color4"/><path d="M0 0h200v300H0z" fill="#111" class="color1"/><path d="M100 0h200v85H100z" fill="#222" class="color2"/><path d="M100 107.5h200v85H100z" fill="#333" class="color3"/></svg>',
        g: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" height="300" width="300"><path d="M0 0h300v300H0z" fill="#111" class="color1"/><path d="M300 150a150 150 0 0 1-150 150A150 150 0 0 1 0 150 150 150 0 0 1 150 0a150 150 0 0 1 150 150z" fill="#222" class="color2"/><path d="M153.586 102l-46.822 96H204v102h96V102H153.586z" fill="#333" class="color3"/></svg>',
        h: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" height="300" width="300"><path d="M0 0h300v300H0z" fill="#444" class="color4"/><path d="M0 0h102v300H0z" fill="#111" class="color1"/><path d="M198 0h102v300H198z" fill="#222" class="color2"/><path d="M102 102h96v96h-96z" fill="#333" class="color3"/></svg>',
        i: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" height="300" width="300"><path d="M0 0h300v300H0z" fill="#444" class="color4"/><path d="M0 0h300v96H0z" fill="#111" class="color1"/><path d="M0 204h300v96H0z" fill="#222" class="color2"/><path d="M92.5 96h115v108h-115z" fill="#333" class="color3"/></svg>',
        j: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" height="300" width="300"><path d="M0 0h300v300H0z" fill="#111" class="color1"/><path d="M10.076 204A150 150 0 0 0 150 300a150 150 0 0 0 139.77-96H10.076z" fill="#222" class="color2"/><path d="M180 0v296.807A150 150 0 0 0 299.893 153.04H300V0H180z" fill="#333" class="color3"/></svg>',
        k: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" height="300" width="300"><path d="M0 0h300v300H0z" fill="#111" class="color1"/><path d="M0 0h150v300H0z" fill="#222" class="color2"/><path d="M150 0v300h150v-.707L150.707 150 300 .707V0H150z" fill="#333" class="color3"/></svg>',
        l: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" height="300" width="300"><path d="M0 0h300v300H0z" fill="#111" class="color1"/><path d="M0 0h135v300H0z" fill="#222" class="color2"/><path d="M0 175h300v125H0z" fill="#333" class="color3"/></svg>',
        m: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" height="300" width="300"><path d="M0 0h300v300H0z" fill="#111" class="color1"/><path d="M10.492 0L0 18.174V300h253.713L80.508 0H10.492z" fill="#222" class="color2"/><path d="M219.492 0L46.287 300H300V18.174L289.508 0h-70.016z" fill="#333" class="color3"/></svg>',
        n: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" height="300" width="300"><path d="M0 0h300v300H0z" fill="#111" class="color1"/><path d="M36.746 0L26.145 18.363 0 63.646v230l77.49-134.214L128.652 300h122.381L152.551 29.422 141.84 0H36.747z" fill="#222" class="color2"/><path d="M300 4.033L129.123 300h132.791L300 234.033v-230z" fill="#333" class="color3"/></svg>',
        o: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" height="300" width="300"><path d="M0 0h300v300H0z" fill="#111" class="color1"/><path d="M300 150a150 150 0 0 1-150 150A150 150 0 0 1 0 150 150 150 0 0 1 150 0a150 150 0 0 1 150 150z" fill="#222" class="color2"/><path d="M240 150a90 90 0 0 1-90 90 90 90 0 0 1-90-90 90 90 0 0 1 90-90 90 90 0 0 1 90 90z" fill="#333" class="color3"/></svg>',
        p: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" height="300" width="300"><path d="M0 0h300v300H0z" fill="#111" class="color1"/><path d="M0 0h135v300H0z" fill="#222" class="color2"/><path d="M135 0v201.998h35.703a125 125 0 0 0 124.5-124.982A125 125 0 0 0 268.46 0H135z" fill="#333" class="color3"/></svg>',
        q: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" height="300" width="300"><path d="M0 0h300v300H0z" fill="#111" class="color1"/><path d="M0 0v100A100 100 0 0 1 100 0H0zm100 0a100 100 0 0 1 100 100 100 100 0 0 1-100 100A100 100 0 0 1 0 100v172.992A200 200 0 0 0 100 300a200 200 0 0 0 200-200A200 200 0 0 0 272.918 0H100z" fill="#222" class="color2"/><path d="M125.708 299.999L300 300 125.706 125.707l.001 174.292z" fill="#333" class="color3"/></svg>',
        r: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" height="300" width="300"><path d="M0 0h300v300H0z" fill="#111" class="color1"/><path d="M0 0v201.998h170.703a125 125 0 0 0 124.5-124.982A125 125 0 0 0 268.461 0H0z" fill="#333" class="color3"/><path d="M0 0v300h250L0 0z" fill="#222" class="color2"/></svg>',
        s: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" height="300" width="300"><path d="M0 0h300v300H0z" fill="#111" class="color1"/><path d="M110 0C54.6 0 10 44.6 10 100v200h180c55.4 0 100-44.6 100-100V0H110z" fill="#222" class="color2"/><path d="M10 100c0 55.4 44.6 100 100 100h180c0-55.4-44.6-100-100-100H10z" fill="#333" class="color3"/></svg>',
        t: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" height="300" width="300"><path d="M0 0h300v300H0z" fill="#111" class="color1"/><path d="M0 0h300v135H0z" fill="#222" class="color2"/><path d="M75 135h150v165H75z" fill="#333" class="color3"/></svg>',
        u: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" height="300" width="300"><path d="M0 0h300v300H0z" fill="#111" class="color1"/><path d="M0 0v266.18C28.194 287.424 63.322 300 101.5 300c93.349 0 168.5-75.151 168.5-168.5V0h-96v131.5c0 40.165-32.335 72.5-72.5 72.5S29 171.665 29 131.5V0H0z" fill="#222" class="color2"/><path d="M29 0v131.5c0 40.165 32.335 72.5 72.5 72.5s72.5-32.335 72.5-72.5V0z" fill="#333" class="color3"/></svg>',
        v: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" height="300" width="300"><path d="M0 0h300v300H0z" fill="#111" class="color1"/><path d="M0 0v98.299l92.102 136.547L136.049 300h27.902l43.947-65.154L300 98.299V0h-49.492L150 149.01 49.492 0H0z" fill="#222" class="color2"/><path d="M49.492 0L150 149.01 250.508 0z" fill="#333" class="color3"/></svg>',
        w: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" height="300" width="300"><path d="M0 0h300v300H0z" fill="#111" class="color1"/><path d="M0 0v193.965L61.219 300h32.496L266.918 0H0z" fill="#222" class="color2"/><path d="M33.082 0l173.203 300h32.496L300 193.965V0H33.082z" fill="#333" class="color3"/></svg>',
        x: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" height="300" width="300"><path d="M0 0h300v300H0z" fill="#111" class="color1"/><path d="M300 50L150 150l150 100V50z" fill="#222" class="color2"/><path d="M0 50v200l150-100L0 50z" fill="#333" class="color3"/></svg>',
        y: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" height="300" width="300"><path d="M0 0h300v300H0z" fill="#111" class="color1"/><path d="M0 0v137.162a270 270 0 0 0 150 45.656 270 270 0 0 0 150-45.75V0H0z" fill="#222" class="color2"/><path d="M75 0v300h150V0H75z" fill="#333" class="color3"/></svg>',
        z: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" height="300" width="300"><path d="M0 0h300v300H0z" fill="#111" class="color1"/><path d="M300 24.992L0 198.197V300h300v-96H181.95L300 135.844V24.992z" fill="#222" class="color2"/><path d="M300 135.844L181.95 204H300z" fill="#333" class="color3"/></svg>',
        
        /* jshint ignore:end */
        /* jscs:enable */
    };

    function LetterImages(options) {
        this.options = $.extend({
            themes: themes,
            themeResolver: resolveTheme,
            glyphResolver: resolveGlyph
        }, options);
    }

    LetterImages.prototype.imageSource = function (element) {
        element = $(element);
        var config = $.extend({ name: '?' }, element.data());
        var svg = $(resolveGlyph(config.name, glyphs));
        var style = $('<style>').text(resolveTheme(config.name, this.options.themes)
            .map(function (val, i) { return '.color' + (i + 1) + ' {fill: ' + val + ';}'; })
            .join('\n'));
        svg.append(style);
        var data = svg.wrap('<p>').parent().html();
        element.attr('src', 'data:image/svg+xml;base64,' + btoa(data));
    }

    function resolveGlyph(name, glyphs) {
        var k = name.slice(0, 1).toLowerCase();
        return (k in glyphs) ? glyphs[k] : glyphs.default;
    }

    function resolveTheme(name, themes) {
        var hash = 5381;
        for (var i = 0; i < name.length; ++i) {
            hash = ((hash << 5) + hash) + name.charCodeAt(i);
        }
        return themes[Math.abs(hash) % themes.length];
    }

    $.fn.letterimages = function (options) {
        var l = new LetterImages(options);
        this.each(function () { l.imageSource(this); });
    };

    return LetterImages;
}));
