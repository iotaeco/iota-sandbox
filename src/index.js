var IOTA = require("iota.lib.js");

// Create IOTA instance directly with provider
var iota = new IOTA({
  provider: "https://nodes.iota.fm:443/"
});

// What it the IOTA lib version
console.log("IOTA Version", iota.version);

// Call getNodeInfo to get some information about the node
console.log("Calling getNodeInfo");
iota.api.getNodeInfo(function(error, success) {
  if (error) {
    console.error("Error", error);
  } else {
    console.log("Success", success);
  }
});
