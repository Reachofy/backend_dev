/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// import React, { useContext } from "react";
// import Button from "react-bootstrap/Button";
// import {loadStdlib} from '@reach-sh/stdlib';
// import Algorand from "../../assets/algorand.png";
// import { Context } from "../../Context";
// const Reach = loadStdlib('ALGO');

// const ConnectWallet = () => {
//     const [account, setAccount, , setBalance] = useContext(Context);

//     const connectWallet = async () => {        
//         Reach.setSignStrategy('AlgoSigner');
//         Reach.setProviderByName('TestNet');
//         const acc = await Reach.getDefaultAccount();
//         const amount = Reach.parseCurrency(10);
//         await Reach.fundFromFaucet(acc, amount);
//         const balAtomic = await Reach.balanceOf(acc);
//         const bal = Reach.formatCurrency(balAtomic, 4);
//         setAccount(Object.assign({}, acc));
//         setBalance(bal);
//     }
//     const buttonStyle = {
//         bottom: "2em",
//         right: "2em",
//         backgroundColor:"#000",
//     }

//     return Object.keys(account).length === 0 ? (
//         <Button 
//             variant="info"
//             style={buttonStyle}
//             className="position-absolute m-3"
//             onClick={connectWallet}
//             size="lg">
//             <img src={Algorand} alt="Algorand Logo" width="30" />
//             {" "}<p className="d-inline-block mb-1 ml-1">Connect Wallet</p>
//         </Button>
//     ) : <div />;
// }

// export default ConnectWallet;


// import React, { useContext } from "react";
// import Button from "react-bootstrap/Button";
// import {loadStdlib} from '@reach-sh/stdlib';
// import Algorand from "../../assets/algorand.png";
// import { Context } from "../../Context";
// const Reach = loadStdlib('ALGO');


// const ConnectWallet = () => {

//     const [account, setAccount, , setBalance] = useContext(Context);

//     const connectWallet = async () => {
//         const acc = await Reach.getDefaultAccount();

//         const balAtomic = await Reach.balanceOf(acc);
//         const bal = Reach.formatCurrency(balAtomic, 4);

//         setAccount(Object.assign({}, acc));

//         setBalance(bal);
//     }

//     const buttonStyle = {
//         bottom: "2em",
//         right: "2em",
//     }
    
//     return Object.keys(account).length === 0 ? (
//         <Button variant="dark"
//             style={buttonStyle}
//             className="position-absolute m-3"
//             onClick={connectWallet}
//             size="lg">
//             <img src={Algorand} alt="Algorand Logo" width="30" />
//             {" "}<p className="d-inline-block mb-1 ml-1">Connect Wallet</p>
//         </Button>
//     ) : <div />;
// }

// export default ConnectWallet;




// import React, { useContext } from "react";
// import Button from "react-bootstrap/Button";
import {loadStdlib} from '@reach-sh/stdlib';
// import Algorand from "../../assets/algorand.png";
// import { Context } from "../../Context";
// import { useRef } from 'react';


// Added popup algoconnect feature 
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib'

const reach = loadStdlib(process.env);

reach.setWalletFallback(reach.walletFallback({

providerEnv: 'TestNet', MyAlgoConnect 

}))



// const reach = loadStdlib('ALGO');


const ConnectWallet = () => {

    let account;
	let balance;
	let fundAmount;
	const fundWallet = async () => {
		await reach.fundFromFaucet(account, reach.parseCurrency(fundAmount))
		await getBalance()
	}
	const connectWallet = async () => {
		await getAccount()
		await getBalance()
	}
	const getAccount = async () => {
		account = await reach.getDefaultAccount()
		console.log(account)
	}
	const getBalance = async () => {
		let rawBalance = await reach.balanceOf(account)
		balance = reach.formatCurrency(rawBalance, 4)
		console.log(balance)
	}

    return (
        <div>
        <button onClick={connectWallet}>connect wallet</button>
        <div>
          <input onChange={(e) => fundAmount.current = e.target.value} />
          <button onClick={fundWallet}>fund wallet</button>
        </div>
      </div>
    );
  }
  
  export default ConnectWallet;




