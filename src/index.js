var IOTA = require('iota.lib.js');
var curl = require('curl.lib.js');

// Create IOTA instance directly with provider
var iota = new IOTA({
  provider: "https://nodes.iota.fm:443/"
});

// What is the IOTA lib version
console.log("IOTA Version", iota.version);

// Attach curl to iota instance so that we can perform WebGL proof of work
curl.init();
curl.overrideAttachToTangle(iota);

// Call getNodeInfo to get some information about the node
console.log("Calling getNodeInfo");
iota.api.getNodeInfo(function(error, success) {
  if (error) {
    console.error("Error", error);
  } else {
    console.log("Success", success);
  }
});
