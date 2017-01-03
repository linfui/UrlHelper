QUnit.test( "测试传入的Url", function( assert ) {
  //assert.ok( 1 == "1", "Passed!" );
  //assert.equal(window.urlHelper.getHostname(), "just now");
  //assert.equal(window.urlHelper.getHostname("http://www.baidu.com"), "www.baidu.com");
  //assert.equal(window.urlHelper.getProtocol("http://www.baidu.com"), "www.baidu.com");
  //assert.equal(window.urlHelper.getPath("http://www.baidu.com"), "www.baidu.com");
  //assert.equal(window.urlHelper.getPort("http://www.baidu.com"), "www.baidu.com");
  //assert.equal(window.urlHelper.getHashStr("http://www.baidu.com"), "www.baidu.com");
  //assert.equal(window.urlHelper.setHashStr("http://www.baidu.com"), "www.baidu.com");
  assert.equal(window.urlHelper.setHashStr("aaa"), "www.baidu.com");
});
