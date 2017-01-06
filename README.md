# letterimages

Generate profile images, e.g. for profiles without photo.

Similar to [initial.js](http://judelicio.us/initial.js/) and heavily inspired by
the _Contacts_ app of [OxygenOS 4.0](https://oneplus.net/oxygenos).

Have a look at the [demo page](https://danieljoos.github.io/letterimages/dist/demo.html) to see it in action.

## Usage

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
need to be set from outside, e.g. using _Bootstrap_'s image classes (see [demo page](https://danieljoos.github.io/letterimages/dist/demo.html)).

## Installation

Using npm:
```
npm install letterimages
```

Using bower:
```
bower install letterimages
```

## Options

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
        return glyphs(name[0].toLowerCase());  // Use your own logic here
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
