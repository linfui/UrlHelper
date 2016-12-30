/* url-helper.js, v1.0.0.0 (c) 2016  Leo
 * @license MIT */

; (function () {
    var urlHelper = {
        // Current version.
        version: '1.0.0',
        /**
        * http://test.example.com:8080/some/path?a=b#c=d => test.www.example.com:8080
        * @param {string} E.G. http://test.example.com:8080/some/path
        * @return {string} E.G. test.www.example.com:8080
        */
        getHost: function (url) {
            var url = url || window.location.toString();
            var tmp;
            if (tmp = url.match(/(.*?)\:?\/\/(.*)/)) {
                url = tmp[2];
            }
            return url;
        },
        /**
        * http://test.example.com:8080/some/path?a=b#c=d => test.www.example.com
        * @param {string}   http://test.example.com:8080/some/path
        * @return {string} E.G. test.www.example.com
        */
        getHostname: function (url) {
            var url = url || window.location.toString();
            var tmp;
            if (tmp = url.match(/(.*?)\:?\/\/(.*)/)) {
                url = tmp[2];
            }
            return url;
        },
        /**
        * http://test.example.com:8080/some/path?a=b#c=d => http
        * @param {string}    http://test.example.com:8080/some/path
        * @return {string} E.G. http, https
        */
        getProtocol: function (url) {
            var url = url || window.location.toString();
            var protocol, tmp;
            if (tmp = url.match(/(.*?)\:?\/\/(.*)/)) {
                protocol = tmp[1].toLowerCase();
            }
            return protocol;
        },
        /**
        * http://test.example.com:8080/some/path?a=b#c=d => /some/path
        * @param {string}   http://test.example.com:8080/some/path?a=b#c=d
        * @return {string} E.G. /some/path
        */
        getPathName: function (url) {
            return
        },
        /**
        * http://test.example.com:8080/some/path?a=b#c=d => 8080
        * http://test.example.com/some/path?a=b#c=d => 80, 443
        * @param {string}
        * @return {string} E.G. 80, 443
        */
        getPort: function (url) {
            var url = url || window.location.toString();
            var port, tmp;
            if (tmp = url.match(/(.*)\:([0-9]+)$/)) {
                port = tmp[1].toLowerCase();
            }
            var protocol = this.getProtocol(url);
            port = port || (protocol === 'https' ? '443' : '80');
            return port;
        },
        /**
        * http://test.example.com:8080/some/path?a=b#c=d => ?a=b
         * @param {string} E.G. http://test.example.com:8080/some/path?a=b#c=d
         * @return {string} E.G. ?a=b
         */
        getSearch: function () {
            return location.hash.split('#')[1];
        },
        /**
        * http://test.example.com:8080/some/path?a=b#c=d => #c=d
         * @param {string} E.G. http://test.example.com:8080/some/path?a=b#c=d
         * @return {string} E.G. #c=d
         */
        getHashStr: function () {
            return location.hash.split('#')[1];
        },
        /**
        * http://test.example.com:8080/some/path?a=b#c=d => #c=d
         * @param {string}
         * @return {string} E.G. ?a=b#a=b
         */
        setHashStr: function (hashStr) {
            location.hash = '#' + hashStr;
        },
        /**
         * 按Key-Value的方式设置Hash信息，已设置的会被覆盖，空Value的会被删除
         *
         * @param {string} key   Hash的key
         * @param {string} value Hash的value
         */
        setHash: function (key, value) {
            var hashObj = this.getHashObject();
            hashObj[key] = value;
            //删除没有至的hash
            if (!value) {
                delete hashObj[key];
            }
            this.setHashObject(hashObj);
        },
        /**
         * 按Hash的key获取Hash的内容
         *
         * @param  {string} key 要获取的Hash的键值
         * @return {string}     键值对应的HASH内容
         */
        getHash: function (key) {
            return this.getHashObject()[key];
        },
        /**
         * 获取完整的Hash内容，并应设为对象
         *
         * @param  {string} key 要获取的Hash的键值
         * @return {Object} Hash的内容部分
         */
        getHashs: function () {
            var hashStr = this.getHash();
            var result = {};
            if (hashStr) {
                var para = hashStr.split('&');
                for (var i in para) {
                    var kvs = para[i].split('='),
                        key = kvs[0],
                        value = kvs[1];
                    result[key] = value;
                }
            }
            return result;
        },
        /**
         * 将对象复制给Hash
         *
         * @param {Object} hashObject
         * @return {Object} Hash的内容部分
         */
        setHashObject: function (hashObject) {
            var ps = [];
            for (var i in hashObject) {
                if (hashObject.hasOwnProperty(i)) {
                    ps.push(i + '=' + hashObject[i]);
                }
            }
            var hashCode = ps.join('&');
            this.setHashStr(hashCode);
            return this;
        },
        /**
        * http://test.example.com:8080/some/path?a=b#c=d => value; have key, return "", or value; don't have key, return null
        * return: not return null
        * @param {Object} hashObject
        * @return {Object} Hash的内容部分
        */
        getQuery: function (key, url) {
            if (!url) url = window.location.href;
            key = key.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + key + "(=([^&#]*)|&|#|$)", "i"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        },
        /**
        * http://test.example.com:8080/some/path?a=b#c=d => value; have key, return "", or value; don't have key, return null
        * return: not return null
        * @param {Object} hashObject
        * @return {Object} Hash的内容部分
        */
        setQuery: function (key, value, url) {
            var url = url || window.location.toString();
            if (url.indexOf("?") < 0) {
                return url + "?" + key + "=" + value;
            }
            var isExistThisParam = false;
            var uri_array = url.split('?'); // break up url/query
            var params_array = uri_array[1].split('&'); // break up the query
            var items_array = new Array;
            for (i = 0; i < params_array.length; i++) {
                items_array = params_array[i].split('='); // split name/value pairs
                if (items_array[0].toLowerCase() == key.toLowerCase()) {
                    isExistThisParam = true;
                    params_array[i] = items_array[0] + '=' + value;
                } // end if
            } // end for i
            var result = uri_array[0] + '?' + params_array.join('&');
            if (!isExistThisParam) {
                result += "&" + key + "=" + value;
            }

            return result;
        },
        /**
        * http://test.example.com:8080/some/path?a=b#c=d => key: a; http://test.example.com:8080/some/path?#c=d
        * @param {string} key: string
        * @param {object} url: http://test.example.com:8080/some/path?a=b#c=d
        * @return {Object} url or null
        */
        replaceQuery: function (key, url) {
            if (url.indexOf("?") < 0) {
                return url + "?" + paramName + "=" + newValue;
            }
            var isExistThisParam = false;
            var uri_array = url.split('?'); // break up url/query
            var params_array = uri_array[1].split('&'); // break up the query
            var items_array = new Array;
            for (i = 0; i < params_array.length; i++) {
                items_array = params_array[i].split('='); // split name/value pairs
                if (items_array[0].toLowerCase() == paramName.toLowerCase()) {
                    isExistThisParam = true;
                    params_array[i] = items_array[0] + '=' + newValue;
                } // end if
            } // end for i
            var result = uri_array[0] + '?' + params_array.join('&');
            if (!isExistThisParam) {
                result += "&" + paramName + "=" + newValue;
            }

            return result;
        },
        /**
        * http://test.example.com:8080/some/path?a=b#c=d => key: a; http://test.example.com:8080/some/path?#c=d
        * @param {string} key: string
        * @param {object} url: http://test.example.com:8080/some/path?a=b#c=d
        * @return {Object} url or null
        */
        removeQuery: function (key, url) {
            var url = url || window.location.toString();
            //prefer to use l.search if you have a location/link object
            var urlparts = url.split('?');
            if (urlparts.length >= 2) {
                var prefix = encodeURIComponent(key) + '=';
                var pars = urlparts[1].split(/[&;]/g);
                //reverse iteration as may be destructive
                for (var i = pars.length; i-- > 0;) {
                    //idiom for string.startsWith
                    if (pars[i].toLowerCase().lastIndexOf(prefix.toLowerCase(), 0) !== -1) {
                        pars.splice(i, 1);
                    }
                }

                url = urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : "");
                return url;
            } else {
                return url;
            }
        }
    };

    var registeredInModuleLoader = false;
    if (typeof define === 'function' && define.amd) {
        define(urlHelper);
        registeredInModuleLoader = true;
    }
    if (typeof exports === 'object') {
        module.exports = urlHelper
        registeredInModuleLoader = true;
    }
    if (!registeredInModuleLoader) {
        window.urlHelper = urlHelper
    }

    return urlHelper;
}());
