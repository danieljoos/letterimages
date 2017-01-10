# letterimages [![npm version](https://badge.fury.io/js/letterimages.svg)](https://badge.fury.io/js/letterimages) [![Bower version](https://badge.fury.io/bo/letterimages.svg)](https://badge.fury.io/bo/letterimages)

Use CSS and webfonts to generate profile images, e.g. for profiles without photo.

An optional jQuery plugin can be used for more versatile color theme usage:
This results in names starting with the same letter more likely to become differently colored profile images.

Have a look at the [Demo page (CSS-only)](https://danieljoos.github.io/letterimages/dist/demo-css.html) 
and the [Demo page (with jQuery Plugin)](https://danieljoos.github.io/letterimages/dist/demo-js.html) to see it in action.

It is very similar to [initial.js](http://judelicio.us/initial.js/) and heavily inspired by
the _Contacts_ app of [OxygenOS 4.0](https://oneplus.net/oxygenos).

## Usage (CSS-only)

Copy the `dist/css` and `dist/fonts` directories to your assets location.
Include the stylesheet as usual, using a `link` tag:
```html
    <link href="/path/to/letterimages.css" rel="stylesheet">
```

Simply add a tag with the desired name as `data-name` attribute.
In addition, add the CSS class `letterimages`:
```html
    <i data-name="John Doe" class="letterimages"></i>
```

The stylesheet uses some default coloring for each letter.
Customize the style using utility classes as shown on the [Demo page (CSS-only)](https://danieljoos.github.io/letterimages/dist/demo-css.html)

## Usage (jQuery Plugin)

Use the _letterimages_ jQuery plugin in addition to the CSS.

```js
    $('.letterimages').letterimages();
```

### Override theme resolution

```js
$('.letterimages').letterimages({
    themeResolver: function(name, themes) {
        return themes[name.length % themes.length];  // Use your own logic here
    }
});
```

## Installation

Using npm:
```
npm install letterimages
```

Using bower:
```
bower install letterimages
```
