"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8182],{57143:function(t,r,e){e.d(r,{S:function(){return n}});var a=e(27969);class n{get chainId(){return this._chainId}constructor(t,r,e){this.contractWrapper=t,this.storage=r,this.erc1155=new a.aL(this.contractWrapper,this.storage,e),this._chainId=e}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async get(t){return this.erc1155.get(t)}async totalSupply(t){return this.erc1155.totalSupply(t)}async balanceOf(t,r){return this.erc1155.balanceOf(t,r)}async balance(t){return this.erc1155.balance(t)}async isApproved(t,r){return this.erc1155.isApproved(t,r)}transfer=(0,a.dt)((()=>{var t=this;return async function(r,e,a){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0];return t.erc1155.transfer.prepare(r,e,a,n)}})());setApprovalForAll=(0,a.dt)(async(t,r)=>this.erc1155.setApprovalForAll.prepare(t,r));airdrop=(0,a.dt)((()=>{var t=this;return async function(r,e){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[0];return t.erc1155.airdrop.prepare(r,e,a)}})())}},22285:function(t,r,e){e.d(r,{h:function(){return s}});var a=e(49242),n=e(27969);async function s(t,r,e){let s=t.getProvider(),o=new n.ds(s,r,a,{},t.storage),c=await t.getSignerAddress(),d=t.address,i=await o.read("allowance",[c,d]);return i.gte(e)}},38182:function(t,r,e){e.r(r),e.d(r,{Pack:function(){return P}});var a=e(27969),n=e(57143),s=e(49242),o=e(27761),c=e(2593),d=e(61744),i=e(9279),p=e(62),h=e(1604),l=e(22285);e(2162),e(64063),e(77191),e(54098),e(54146),e(13550);let u=h.z.object({contractAddress:a.ab}),g=u.extend({quantity:p.A}),w=u.extend({tokenId:a.a8}),k=u.extend({tokenId:a.a8,quantity:a.a8}),f=g.omit({quantity:!0}).extend({quantityPerReward:p.A}),W=k.omit({quantity:!0}).extend({quantityPerReward:a.a8}),v=f.extend({totalRewards:a.a8.default("1")}),A=W.extend({totalRewards:a.a8.default("1")}),y=h.z.object({erc20Rewards:h.z.array(v).default([]),erc721Rewards:h.z.array(w).default([]),erc1155Rewards:h.z.array(A).default([])}),m=y.extend({packMetadata:p.N,rewardsPerPack:a.a8.default("1"),openStartTime:a.ac.default(new Date)});class C{featureName=a.dT.name;constructor(t,r,e,n,s){let c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:new a.ds(t,r,o,n,e);this.contractWrapper=c,this.storage=e,this.chainId=s,this.events=new a.aR(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}open=(0,a.dt)((()=>{var t=this;return async function(r){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e5;return a.aW.fromContractWrapper({contractWrapper:t.contractWrapper,method:"openPack",args:[r,e],overrides:{gasLimit:n},parse:r=>{let e=c.O$.from(0);try{let a=t.contractWrapper.parseLogs("PackOpenRequested",r?.logs);e=a[0].args.requestId}catch(t){}return{receipt:r,id:e}}})}})());claimRewards=(0,a.dt)((()=>{var t=this;return async function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5e5;return a.aW.fromContractWrapper({contractWrapper:t.contractWrapper,method:"claimRewards",args:[],overrides:{gasLimit:r},parse:async r=>{let e=t.contractWrapper.parseLogs("PackOpened",r?.logs);if(0===e.length)throw Error("PackOpened event not found");let a=e[0].args.rewardUnitsDistributed;return await t.parseRewards(a)}})}})());async parseRewards(t){let r=[],e=[],n=[];for(let s of t)switch(s.tokenType){case 0:{let t=await (0,a.bb)(this.contractWrapper.getProvider(),s.assetContract);r.push({contractAddress:s.assetContract,quantityPerReward:d.formatUnits(s.totalAmount,t.decimals).toString()});break}case 1:e.push({contractAddress:s.assetContract,tokenId:s.tokenId.toString()});break;case 2:n.push({contractAddress:s.assetContract,tokenId:s.tokenId.toString(),quantityPerReward:s.totalAmount.toString()})}return{erc20Rewards:r,erc721Rewards:e,erc1155Rewards:n}}async addPackOpenEventListener(t){return this.events.addEventListener("PackOpened",async r=>{t(r.data.packId.toString(),r.data.opener,await this.parseRewards(r.data.rewardUnitsDistributed))})}async canClaimRewards(t){let r=await (0,a.cG)(t||await this.contractWrapper.getSignerAddress());return await this.contractWrapper.readContract.canClaimRewards(r)}async openAndClaim(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e5,a=await this.contractWrapper.sendTransaction("openPackAndClaimRewards",[t,r,e],{gasLimit:c.O$.from(5e5)}),n=c.O$.from(0);try{let t=this.contractWrapper.parseLogs("PackOpenRequested",a?.logs);n=t[0].args.requestId}catch(t){}return{receipt:a,id:n}}async getLinkBalance(){return this.getLinkContract().balanceOf(this.contractWrapper.readContract.address)}async transferLink(t){await this.getLinkContract().transfer(this.contractWrapper.readContract.address,t)}getLinkContract(){let t=a.cU[this.chainId];if(!t)throw Error(`No LINK token address found for chainId ${this.chainId}`);let r=new a.ds(this.contractWrapper.getSignerOrProvider(),t,s,this.contractWrapper.options,this.storage);return new a.au(r,this.storage,this.chainId)}}class P extends n.S{static contractRoles=a.dU;get vrf(){return(0,a.cc)(this._vrf,a.dT)}constructor(t,r,e){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new a.ds(t,r,s,n.gasless&&"openzeppelin"in n.gasless?{...n,gasless:{...n.gasless,openzeppelin:{...n.gasless.openzeppelin,useEOAForwarder:!0}}}:n,e);super(c,e,o),this.abi=a.e.parse(s||[]),this.metadata=new a.ah(this.contractWrapper,a.dV,this.storage),this.app=new a.b0(this.contractWrapper,this.metadata,this.storage),this.roles=new a.ai(this.contractWrapper,P.contractRoles),this.royalties=new a.aj(this.contractWrapper,this.metadata),this.encoder=new a.ag(this.contractWrapper),this.estimator=new a.aQ(this.contractWrapper),this.events=new a.aR(this.contractWrapper),this.interceptor=new a.aS(this.contractWrapper),this.owner=new a.aV(this.contractWrapper),this._vrf=this.detectVrf()}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t),this._vrf?.onNetworkUpdated(t)}getAddress(){return this.contractWrapper.readContract.address}async get(t){return this.erc1155.get(t)}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t){return this.erc1155.getOwned(t)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){let t=await this.contractWrapper.readContract.hasRole((0,a.bI)("transfer"),i.d);return!t}async getPackContents(t){let{contents:r,perUnitAmounts:e}=await this.contractWrapper.readContract.getPackContents(t),n=[],s=[],o=[];for(let t=0;t<r.length;t++){let i=r[t],p=e[t];switch(i.tokenType){case 0:{let t=await (0,a.bb)(this.contractWrapper.getProvider(),i.assetContract),r=d.formatUnits(p,t.decimals),e=d.formatUnits(c.O$.from(i.totalAmount).div(p),t.decimals);n.push({contractAddress:i.assetContract,quantityPerReward:r,totalRewards:e});break}case 1:s.push({contractAddress:i.assetContract,tokenId:i.tokenId.toString()});break;case 2:o.push({contractAddress:i.assetContract,tokenId:i.tokenId.toString(),quantityPerReward:p.toString(),totalRewards:c.O$.from(i.totalAmount).div(p).toString()})}}return{erc20Rewards:n,erc721Rewards:s,erc1155Rewards:o}}create=(0,a.dt)(async t=>{let r=await this.contractWrapper.getSignerAddress();return this.createTo.prepare(r,t)});addPackContents=(0,a.dt)(async(t,r)=>{let e=await this.contractWrapper.getSignerAddress(),n=await y.parseAsync(r),{contents:s,numOfRewardUnits:o}=await this.toPackContentArgs(n);return a.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:"addPackContents",args:[t,s,o,e],parse:t=>{let r=this.contractWrapper.parseLogs("PackUpdated",t?.logs);if(0===r.length)throw Error("PackUpdated event not found");let e=r[0].args.packId;return{id:e,receipt:t,data:()=>this.erc1155.get(e)}}})});createTo=(0,a.dt)(async(t,r)=>{let e=await (0,a.dQ)(r.packMetadata,this.storage),n=await m.parseAsync(r),{erc20Rewards:s,erc721Rewards:o,erc1155Rewards:c}=n,{contents:d,numOfRewardUnits:i}=await this.toPackContentArgs({erc20Rewards:s,erc721Rewards:o,erc1155Rewards:c});return a.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:"createPack",args:[d,i,e,n.openStartTime,n.rewardsPerPack,await (0,a.cG)(t)],parse:t=>{let r=this.contractWrapper.parseLogs("PackCreated",t?.logs);if(0===r.length)throw Error("PackCreated event not found");let e=r[0].args.packId;return{id:e,receipt:t,data:()=>this.erc1155.get(e)}}})});open=(0,a.dt)((()=>{var t=this;return async function(r){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e5;if(t._vrf)throw Error("This contract is using Chainlink VRF, use `contract.vrf.open()` or `contract.vrf.openAndClaim()` instead");return a.aW.fromContractWrapper({contractWrapper:t.contractWrapper,method:"openPack",args:[r,e],overrides:{gasLimit:n},parse:async r=>{let e=t.contractWrapper.parseLogs("PackOpened",r?.logs);if(0===e.length)throw Error("PackOpened event not found");let n=e[0].args.rewardUnitsDistributed,s=[],o=[],c=[];for(let r of n)switch(r.tokenType){case 0:{let e=await (0,a.bb)(t.contractWrapper.getProvider(),r.assetContract);s.push({contractAddress:r.assetContract,quantityPerReward:d.formatUnits(r.totalAmount,e.decimals).toString()});break}case 1:o.push({contractAddress:r.assetContract,tokenId:r.tokenId.toString()});break;case 2:c.push({contractAddress:r.assetContract,tokenId:r.tokenId.toString(),quantityPerReward:r.totalAmount.toString()})}return{erc20Rewards:s,erc721Rewards:o,erc1155Rewards:c}}})}})());async toPackContentArgs(t){let r=[],e=[],{erc20Rewards:n,erc721Rewards:s,erc1155Rewards:o}=t,d=this.contractWrapper.getProvider(),i=await this.contractWrapper.getSignerAddress();for(let t of n){let n=await (0,a.ba)(d,t.quantityPerReward,t.contractAddress),s=n.mul(t.totalRewards),o=await (0,l.h)(this.contractWrapper,t.contractAddress,s);if(!o)throw Error(`ERC20 token with contract address "${t.contractAddress}" does not have enough allowance to transfer.

You can set allowance to the multiwrap contract to transfer these tokens by running:

await sdk.getToken("${t.contractAddress}").setAllowance("${this.getAddress()}", ${s});

`);e.push(t.totalRewards),r.push({assetContract:t.contractAddress,tokenType:0,totalAmount:s,tokenId:0})}for(let t of s){let n=await (0,a.dC)(this.contractWrapper.getProvider(),this.getAddress(),t.contractAddress,t.tokenId,i);if(!n)throw Error(`ERC721 token "${t.tokenId}" with contract address "${t.contractAddress}" is not approved for transfer.

You can give approval the multiwrap contract to transfer this token by running:

await sdk.getNFTCollection("${t.contractAddress}").setApprovalForToken("${this.getAddress()}", ${t.tokenId});

`);e.push("1"),r.push({assetContract:t.contractAddress,tokenType:1,totalAmount:1,tokenId:t.tokenId})}for(let t of o){let n=await (0,a.dC)(this.contractWrapper.getProvider(),this.getAddress(),t.contractAddress,t.tokenId,i);if(!n)throw Error(`ERC1155 token "${t.tokenId}" with contract address "${t.contractAddress}" is not approved for transfer.

You can give approval the multiwrap contract to transfer this token by running:

await sdk.getEdition("${t.contractAddress}").setApprovalForAll("${this.getAddress()}", true);

`);e.push(t.totalRewards),r.push({assetContract:t.contractAddress,tokenType:2,totalAmount:c.O$.from(t.quantityPerReward).mul(c.O$.from(t.totalRewards)),tokenId:t.tokenId})}return{contents:r,numOfRewardUnits:e}}async prepare(t,r,e){return a.aW.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}detectVrf(){if((0,a.cd)(this.contractWrapper,"PackVRF"))return new C(this.contractWrapper.getSignerOrProvider(),this.contractWrapper.readContract.address,this.storage,this.contractWrapper.options,this.chainId)}}}}]);