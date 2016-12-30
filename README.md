# UrlHelper
a library to deal with url.

* Works in browsers
* [Heavily](test) tested
* No dependency
* JSON support
* Supports AMD/CommonJS
* [RFC 6265](https://tools.ietf.org/html/rfc6265) compliant
* Useful [Wiki](https://github.com/linfui/UrlHelper/wiki)

## Installation

### Direct download

Download the script [here](https://github.com/linfui/UrlHelper/blob/master/url-helper.js) and include it (unless you are packaging scripts somehow else):

```html
<script src="/path/url-helper.js"></script>
```
## Basic Usage

get the host name; e.g. http://test.example.com:8080/some/path => test.www.example.com:8080:

```javascript
window.urlHelper.getHost([url]);
```

get the host name; e.g. http://test.example.com:8080/some/path => test.www.example.com:

```javascript
window.urlHelper.getHostname([url]);
```

get the host name; e.g. http://test.example.com:8080/some/path => test.www.example.com:

```javascript
window.urlHelper.getHostname([url]);
```

*IMPORTANT! [url] means it can be null*

## Authors

* [Leo Lin](https://github.com/linfui)
