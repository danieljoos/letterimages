# letterimages [![npm version](https://badge.fury.io/js/letterimages.svg)](https://badge.fury.io/js/letterimages)

Use CSS and webfonts as fallback profile images, e.g. for profiles without photo.

The optional Javascript module can be used for more versatile color theme usage.

![letterimages glyphs](preview.png)

## Usage

The stylesheet and webfont assets can be found in the `dist` directory.

Include the stylesheet as usual:
```html
<link href="/path/to/letterimages.css" rel="stylesheet">
```

Now, add a tag with the desired name in the `data-name` attribute.
Add the class `letterimages` to the element:
```html
<i data-name="John Doe" class="letterimages"></i>
```

### Themes

The stylesheet defines some default coloring for each letter.
However the theme of a letterimages-element can be overridden by setting one of the available theme classes:

* `letterimages-teal`
* `letterimages-blue`
* `letterimages-purple`
* `letterimages-orange`
* `letterimages-grey`

### Shapes & Sizes

The size of letterimages elements can be set by the `font-size` CSS attribute.

The stylesheet defines a set of size helper-classes:

* `letterimages-32`
* `letterimages-48`
* `letterimages-64`
* `letterimages-96`
* `letterimages-128`

Custom sizes can be specified by setting the `font-size` to the desired value:

```css
.letterimages-custom {
    font-size: 256px;
    width: 256px;
    height: 256px;
}
```

All letterimages icons have a square base, but can also be used as rounded or circular icons.
The stylesheet defines the following shape helper-classes:

* `letterimages-rounded`
* `letterimages-circle`

### Javascript Module

Optionally, the included Javascript can be used such that names starting with the same letter are more likely to become differently colored:
```html
<script type="module">
    import letterimages from '/path/to/letterimages.js';
    letterimages();
</script>
```

## Installation

```
npm install letterimages
```

## License

Creative Commons Zero v1.0 Universal

See file `LICENSE`.
