$(function() {
	
	
	$("#trx_slider").on("input", function(e) {
		$("#trx_value").val($("#trx_slider").val());
	});
	
	
	$("#trx_value").on("input", function(e) {
		$("#trx_slider").val($("#trx_value").val());
	});

});

(function() {
	'use strict';

	const ABI = [
	{
		"constant": false,
		"inputs": [],
		"name": "withdraw_referral",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "devCommission",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalPayout",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "commissionDivisor",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalInvested",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "getUserInfo",
		"outputs": [
			{
				"name": "total_deposit",
				"type": "uint256"
			},
			{
				"name": "remaining_time",
				"type": "uint256"
			},
			{
				"name": "withdrawable",
				"type": "uint256"
			},
			{
				"name": "withdrawn",
				"type": "uint256"
			},
			{
				"name": "ref_rewards",
				"type": "uint256"
			},
			{
				"name": "referrals1",
				"type": "uint256"
			},
			{
				"name": "referrals2",
				"type": "uint256"
			},
			{
				"name": "referrals3",
				"type": "uint256"
			},
			{
				"name": "tier",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getContractInfo",
		"outputs": [
			{
				"name": "total_users",
				"type": "uint256"
			},
			{
				"name": "total_invested",
				"type": "uint256"
			},
			{
				"name": "total_withdrawn",
				"type": "uint256"
			},
			{
				"name": "total_referrals",
				"type": "uint256"
			},
			{
				"name": "contract_balance",
				"type": "uint256"
			},
			{
				"name": "contract_launchdate",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "referrals",
		"outputs": [
			{
				"name": "player_addr",
				"type": "address"
			},
			{
				"name": "aff1sum",
				"type": "uint256"
			},
			{
				"name": "aff2sum",
				"type": "uint256"
			},
			{
				"name": "aff3sum",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "getProfit",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalRefDistributed",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "players",
		"outputs": [
			{
				"name": "trxDeposit",
				"type": "uint256"
			},
			{
				"name": "time",
				"type": "uint256"
			},
			{
				"name": "interestProfit",
				"type": "uint256"
			},
			{
				"name": "affRewards",
				"type": "uint256"
			},
			{
				"name": "payoutSum",
				"type": "uint256"
			},
			{
				"name": "affFrom",
				"type": "address"
			},
			{
				"name": "tier",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_affAddr",
				"type": "address"
			}
		],
		"name": "deposit",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalPlayers",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "reinvest",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
];

    let contract = null;

    let VueTRON = {
        data() {
            return {
                tron: {	
                    tronWeb: false,
                    auth: false,
                    account: ''
                }
            };
        },
        created() {
            let self = this,
                tries = 0;
            setTimeout(function initTimer() {
                if(!window.tronWeb) return ++tries < 50 ? setTimeout(initTimer, 100) : null;
                self.tron.tronWeb = !!window.tronWeb;
                window.tronWeb.on('addressChanged', function() {
                    self.tron.account = window.tronWeb.defaultAddress.base58;
                });
                setTimeout(function chechAuth() {
                    self.tron.auth = window.tronWeb && window.tronWeb.ready;
                    if(!self.tron.auth) setTimeout(chechAuth, 200);
                    else self.tron.account = window.tronWeb.defaultAddress.base58;
                }, 200);
            }, 100);
        },
        methods: {
            getTronWeb() {
                return new Promise((resolve, reject) => {
                    window.tronWeb ? resolve(window.tronWeb) : reject('TronWeb not found');
                });
            }
        }
    };

	window.App = new Vue({
  		mixins: [VueTRON],
		el: '#root',
		data: {
            default_ref: 'TVtQ6qCsR2yVxf53GostDqH9QR6mYaP4SS',
            ref: 'TVtQ6qCsR2yVxf53GostDqH9QR6mYaP4SS',
            contract_address: 'TUMatgmcCgc3q6XS4iECadPB3upb1wZwpQ', // TTzv1Vpnvpqu6wCqzUFZpSVnBrunEiSeGA
            contract: {
                users: 0,
                invested: 0,
                withdrawn: 0,
                referrals: 0,
                balance: 0,
				launch_date: 1614340800
            },
			current_date: new Date().getTime()/1e3,
            user: {
            	trx: 0,
                total_deposit: 0,
                remaining_time: 0,
                for_withdraw: 0,
                total_withdrawn: 0,
                total_refreward: 0,
                structure: [0,0,0],
				tier: 0,
                tierPercent: 20
            },
            calc: {
            	amount: 100
            }
		},
		mounted() {
            let m = location.search.match(/r=(T[1-9A-HJ-NP-Za-km-z]{33})/i);
            if(m) {
            	this.ref = m[1];
            	document.cookie = "ref=" + this.ref + "; path=/; expires=" + (new Date(new Date().getTime() + 86400 * 365 * 1000)).toUTCString();
            }

            m = document.cookie.match(/ref=(T[1-9A-HJ-NP-Za-km-z]{33})/i);
            if(m) this.ref = m[1];
		    /*if(!document.cookie.match(/coopolice=1/)) {
		    	this.notice('We use cookies to store temporary data of your current session. If you agree to our use of cookies, continue using our dApp.', '653aba',  0).then(() => (document.cookie = 'coopolice=1; Max-Age=31536000; path=/'));
		    }*/
            setInterval(() => {
                try {
                    this.getContractInfo();
                    this.getUserInfo();
                } catch(e) { console.log(e) }
            }, 3000);
		},
        watch: {
            'tron.account'() {
                this.getTronWeb().then(tronWeb => {
                    try {
                        contract = tronWeb.contract(ABI, tronWeb.address.toHex(this.contract_address));
                        this.getContractInfo();
                        this.getUserInfo();
                    } catch(e) { console.log(e) }
                });
            }
        },
		methods: {
			notice(msg, color = 'c2e93c', time = 3000) {
				return new Promise((resolve, reject) => {
					let wrap = $('<div style="position:fixed; left:calc(50% - 150px); box-shadow:0 5px 25px rgba(0,0,0,0.2); width:320px; top:40px; background:#' + (color ? color : '653aba') + '; border-radius:10px; color:#fff; padding:20px 20px; font:14px/1.2 Tahoma, sans-serif; cursor:pointer; z-index:999999; text-align:center;">' + msg + '</div>')
						.on('click', () => { wrap.remove(); resolve(); })
						.appendTo('body');
					if(time) setTimeout(() => { wrap.remove(); }, time);
				});
			},
			copyText(value) {
				let s = document.createElement('input');
				s.value = value;
				document.body.appendChild(s);

				if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
					s.contentEditable = true;
					s.readOnly = false;
					let range = document.createRange();
					range.selectNodeContents(s);
					let sel = window.getSelection();
					sel.removeAllRanges();
					sel.addRange(range);
					s.setSelectionRange(0, 999999);
				} else
					s.select();

				try {
					document.execCommand('copy');
					this.notice('Link copied to clipboard', 'c2e93c');
				} catch (err) {}

				s.remove();
			},
            getContractInfo() {
                this.getTronWeb().then(tronWeb => {
					contract = tronWeb.contract(ABI, tronWeb.address.toHex(this.contract_address));
                    if(contract) {
                        contract.getContractInfo().call().then(res => {
                        	this.contract.users = parseFloat(res.total_users);
                        	this.contract.invested = parseFloat(tronWeb.fromSun(res.total_invested));
                        	this.contract.withdrawn = parseFloat(tronWeb.fromSun(res.total_withdrawn))-28e4;
                            this.contract.referrals = parseFloat(tronWeb.fromSun(res.total_referrals));
                        	this.contract.balance = parseFloat(tronWeb.fromSun(res.contract_balance));
							// this.contract.launch_date = res._launch_date;
							this.current_date = Math.round(new Date().getTime()/1e3);
                        });
                    }
                });
            },
            getUserInfo() {
                this.getTronWeb().then(tronWeb => {
                    tronWeb.trx.getBalance(this.tron.account).then(res => {
                        this.user.trx = parseFloat(tronWeb.fromSun(res));
                    });
					contract = tronWeb.contract(ABI, tronWeb.address.toHex(this.contract_address));
                    if(contract) {
						contract.getUserInfo(this.tron.account).call().then(res => {
							this.user.total_deposit = parseFloat(tronWeb.fromSun(res.total_deposit));
							this.user.for_withdraw = parseFloat(tronWeb.fromSun(res.withdrawable));
							this.user.total_withdrawn = parseFloat(tronWeb.fromSun(res.withdrawn));
							this.user.total_refreward = parseFloat(tronWeb.fromSun(res.ref_rewards));
							this.user.structure = [
                                res.referrals1,
                                res.referrals2,
                                res.referrals3
                            ];
							this.user.remaining_time = parseInt(res.remaining_time) * 1e3;
							this.user.tier = res.tier;
                            switch(parseInt(res.tier)) {
                                case 0:
                                    this.user.tierPercent = 20;
                                    this.user.remaining_time = (864e5*15) - this.user.remaining_time;
                                break;
                                case 1:
                                    this.user.tierPercent = 15;
                                    this.user.remaining_time = (864e5*20) - this.user.remaining_time;
                                break;
                                case 2:
                                    this.user.tierPercent = 10;
                                    this.user.remaining_time = (864e5*30) - this.user.remaining_time;
                                break;
                                case 3:
                                    this.user.tierPercent = 6;
                                    this.user.remaining_time = (864e5*50) - this.user.remaining_time;
                                break;
                                case 4:
                                    this.user.tierPercent = 2;
                                    this.user.remaining_time = (864e5*150) - this.user.remaining_time;
                                break;
                            }
                            this.user.remaining_time += new Date().getTime();
						});
                    }
                });
            },
            deposit(amount) {
                amount = parseFloat(amount) || 0;
                if(amount >= 100) {
                    this.getTronWeb().then(tronWeb => {
                        this.notice('Confirm transaction', 'c2e93c');
                        contract.deposit(this.ref).send({
                            callValue: tronWeb.toSun(amount),
                            shouldPollResponse: true
                        }).then(res => {
                            console.log("TX SUCCESS");
                            this.getUserInfo();
                            this.notice('Transaction successful', 'c2e93c');
                        });
                    }).catch(e => this.notice('Transaction Failed', 'f70000'));
                }
            },
            withdraw() {
                this.getTronWeb().then(tronWeb => {
                    this.notice('Confirm transaction', 'c2e93c');
					contract = tronWeb.contract(ABI, tronWeb.address.toHex(this.contract_address));
                    contract.withdraw().send({shouldPollResponse: true}).then(res => {
                        this.getUserInfo();
                        console.log("TX WD SUCCESS");
                        this.notice('Transaction successful', 'c2e93c');
                    }).catch(e => this.notice('Transaction Failed', 'f70000'));
                });
            },
            withdraw_ref() {
                this.getTronWeb().then(tronWeb => {
                    this.notice('Confirm transaction', 'c2e93c');
					contract = tronWeb.contract(ABI, tronWeb.address.toHex(this.contract_address));
                    contract.withdraw_referral().send({shouldPollResponse: true}).then(res => {
                        this.getUserInfo();
                        console.log("TX WDREF SUCCESS");
                        this.notice('Transaction successful', 'c2e93c');
                    }).catch(e => this.notice('Transaction Failed', 'f70000'));
                });
            },
            reinvest() {
                this.getTronWeb().then(tronWeb => {
                    this.notice('Confirm transaction', 'c2e93c');
                    contract = tronWeb.contract(ABI, tronWeb.address.toHex(this.contract_address));
                    contract.reinvest().send({shouldPollResponse: true}).then(res => {
                        this.getUserInfo();
                        console.log("TX RD SUCCESS");
                        this.notice('Transaction successful', 'c2e93c');
                    }).catch(e => this.notice('Transaction Failed', 'f70000'));
                });
                
            }
		}
	});
})();