require('regenerator-runtime/runtime');
const { logOutput, logError, clearOutput } = require("./output.js");
const { composeAPI } = require('@iota/core');

// The node to connect to
const provider = "https://nodes.thetangle.org:443";

(async function () {
  clearOutput();

  // Create IOTA instance directly with provider
  const { getNodeInfo } = composeAPI({ provider });

  try {
    // Call getNodeInfo to get some information about the node
    logOutput("Calling getNodeInfo");
    const nodeInfo = await getNodeInfo();
    logOutput("Success");
    logOutput(JSON.stringify(nodeInfo, undefined, "\t"));
  } catch (err) {
    logError("Failed calling getNodeInfo", err);
  }
  logOutput("Finished.");
})();

