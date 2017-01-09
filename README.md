# letterimages [![npm version](https://badge.fury.io/js/letterimages.svg)](https://badge.fury.io/js/letterimages)

Generate profile images, e.g. for profiles without photo.

It can either be used as jQuery Plugin with JavaScript or as CSS-only stylesheet.

Have a look at the [Demo page (jQuery Plugin)](https://danieljoos.github.io/letterimages/dist/demo.html) 
and the [Demo page (CSS-only)](https://danieljoos.github.io/letterimages/dist/demo-css.html) to see it in action.

It is very similar to [initial.js](http://judelicio.us/initial.js/) and heavily inspired by
the _Contacts_ app of [OxygenOS 4.0](https://oneplus.net/oxygenos).

## Usage (jQuery Plugin)

_letterimages_ requires _jQuery_ and registers itself as jQuery plugin.
It looks for the `name` data attribute on elements it gets applied to.

Add the desired name to `img` tags using the `data-name` attribute:
```html
    <img data-name="John Doe" class="profile" />
```

During initialization of your page, apply the jQuery plugin to those `img` tags:
```js
    $('img.profile').letterimages();
```

The plugin only injects the image source. The actual style (size, rounded, etc.)
need to be set from outside, e.g. using _Bootstrap_'s image classes (see [Demo page (jQuery Plugin)](https://danieljoos.github.io/letterimages/dist/demo.html)).

## Usage (CSS-only)

First, include the stylesheet using a `link` tag:
```html
    <link href="/path/to/letterimages.css" rel="stylesheet">
```

Similar to the description above you then simply need to add the desired name as `data-name` attribute.
In addition, add the CSS class `letterimages-profile`:
```html
    <img data-name="John Doe" class="letterimages-profile">
```

The stylesheet uses some default coloring for each letter.
Customize the style using utility classes as shown on the [Demo page (CSS-only)](https://danieljoos.github.io/letterimages/dist/demo-css.html)

## Installation

Using npm:
```
npm install letterimages
```

Using bower:
```
bower install letterimages
```

## Options (jQuery Plugin)

### Custom color themes

```js
$('img.profile').letterimages({
    themes: [
        // 4 colors are used by the glyphs
        ['#000', '#111', '#222', '#333'],
        // ...
    ]
});
```

### Resolve glyph by name

```js
$('img.profile').letterimages({
    glyphResolver: function(name, glyphs) {
        return glyphs[name[0].toLowerCase()];  // Use your own logic here
    }
});
```

### Resolve theme by name

```js
$('img.profile').letterimages({
    themeResolver: function(name, themes) {
        return themes[name.length % themes.length];  // Use your own logic here
    }
});
```
