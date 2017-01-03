# UrlHelper
a library to deal with url.

* Works in browsers
* [Heavily](test) tested
* No dependency
* JSON support
* Supports AMD/CommonJS
* Useful [Wiki](https://github.com/linfui/UrlHelper/wiki)

## Installation

### Direct download

Download the script [here](https://github.com/linfui/UrlHelper/blob/master/url-helper.js) and include it (unless you are packaging scripts somehow else):

```html
<script src="/path/url-helper.js"></script>
```
## Basic Usage

e.g. http://test.example.com:8080/some/path => test.www.example.com:8080:

```javascript
window.urlHelper.getHost([url]);
```

e.g. http://test.example.com:8080/some/path => test.www.example.com:

```javascript
window.urlHelper.getHostname([url]);
```

e.g. http://test.example.com:8080/some/path?a=b#c=d => http

```javascript
window.urlHelper.getProtocol([url]);
```

e.g. http://test.example.com:8080/some/path?a=b#c=d => /some/path

```javascript
window.urlHelper.getPathName([url]);
```

e.g. http://test.example.com:8080/some/path?a=b#c=d => 8080

```javascript
window.urlHelper.getPort([url]);
```

e.g. http://test.example.com:8080/some/path?a=b#c=d => a=b

```javascript
window.urlHelper.getSearch([url]);
```

e.g. http://test.example.com:8080/some/path?a=b#c=d => c=d

```javascript
window.urlHelper.getHashStr([url]);
```

e.g. c=d => http://test.example.com:8080/some/path?a=b#c=d

```javascript
window.urlHelper.setHashStr(hash, [url]);
```

e.g. c, d => http://test.example.com:8080/some/path?a=b#c=d

```javascript
window.urlHelper.setHash({c: d});
```

e.g. http://test.example.com:8080/some/path?a=b#c=d, c => d

```javascript
window.urlHelper.getHash(key, [url]);
```

e.g. http://test.example.com:8080/some/path?a=b#c=d => {c: d}

```javascript
window.urlHelper.getHashs([url]);
```

e.g. {c: d} => http://test.example.com:8080/some/path?a=b#c=d

```javascript
window.urlHelper.setHashs({c: d});
```

e.g. c, http://test.example.com:8080/some/path?a=b#c=d => d

```javascript
window.urlHelper.getQuery(key, [url]);
```

e.g. c, d, http://test.example.com:8080/some/path?a=b => http://test.example.com:8080/some/path?a=b&c=d

```javascript
window.urlHelper.setQuery(key, value, [url]);
```

e.g. c, e, http://test.example.com:8080/some/path?a=b => http://test.example.com:8080/some/path?a=b&c=e

```javascript
window.urlHelper.replaceQuery(key, value, [url]);
```

e.g. c, http://test.example.com:8080/some/path?a=b => http://test.example.com:8080/some/path?a=b

```javascript
window.urlHelper.removeQuery(key, [url]);
```

*IMPORTANT! [url] means it can be null*

## Authors

* [Leo Lin](https://github.com/linfui)
