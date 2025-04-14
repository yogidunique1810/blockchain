
Smart contract = Container of state variables and functions

State variables = Stored on blockchain (🔐 storage, costly 💰)

Local variables = Exist in RAM during function execution (🧠 memory, cheap ✅)

Functions = Used to read (view) or change (write) data




1. Function Visibility
public: Anyone can call (even outside the contract)

private: Only this contract can call

internal: Only this & inherited contracts can call

external: Can be called externally but not internally with this

2. Function Type Modifiers
view: Reads from blockchain (no gas when called externally)

pure: Doesn’t even read blockchain (e.g., returns calculation)

payable: Accepts Ether into the contract

3. Constructor
Special function that runs once when contract is deployed.

solidity
Copy
Edit
constructor(string memory _name) {
    name = _name;
}
4. Events
Used to log something on the blockchain
Great for tracking actions (like who minted or transferred)
event Mint(address indexed sender, uint amount);
emit Mint(msg.sender, amount);

5. Error Handling: require()
Validates conditions and reverts if false.
require(balance[msg.sender] >= amount, "Not enough tokens");