### Description

The anchor-link component allows you to add an anchor link with various options.

Mandatory properties are
  - linkTarget | The URL, where the link should go
  - linkText | The text, which should be linked

If only these two are used, we got a standard yellow button styled anchor link

Optional properties are
  - backgroundColor | The background color
  - textColor | The text color
  - borderColor | The border color
  - icon | The icon class - must be a valid one from the _sprite.scss

### Examples:

```js
  <anchor-link
    linkTarget="/more"
    linkText="More"/>

  <anchor-link
    linkTarget="/flightreserveration"
    linkText="Flight reservation"
    backgroundColor="#000036"
    textColor="#ffffff"
    borderColor="#fcfcfc"
    icon="icon-menu-my-booking-active"/>
```