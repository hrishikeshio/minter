pragma solidity ^0.5.8;
contract Oracle {
	event Requested(bytes32 id, string url, string selector);
	function request (bytes32 id, string memory url, string memory selector) public {
		emit Requested(id, url, selector);
	}

	event Fulfilled (bytes32 id, uint256 value);
	function fulfil (bytes32 id, uint256 value) public {
		emit Fulfilled(id, value);
	}
}
