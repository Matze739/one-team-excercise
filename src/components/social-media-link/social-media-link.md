### Description

The social-media-link component allows you to add social media links.

Mandatory properties are
  - linkTarget | The URL, where the link should go
  - linkText | The text, which should be linked
  - iconName | The icon, which should be displayed (currently available are _facebook_ and _twitter_)

### Examples:

```js
  <social-media-link
    linkTarget="http://www.facebook.com"
    linkText="Facebook"
    iconName="facebook"/>
  <social-media-link
    linkTarget="http://www.twitter.com"
    linkText="Twitter"
    iconName="twitter"/>
```