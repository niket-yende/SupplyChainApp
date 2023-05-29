const ERC20Token = artifacts.require("ERC20Token");

contract("ERC20Token", function (accounts) {
  it("should assert true", async function () {
    await ERC20Token.deployed();
    return assert.isTrue(true);
  });
});
