function play68_init(){updateShare(0)}function play68_submitScore(e){updateShareScore(e),Play68.shareFriend()}function updateShare(e){shareTitle=e>0?"我在#企鹅保卫战#中玩了"+e+"分，不服来战!!!":"#企鹅保卫战#来证明你的眼力到底行不行吧？",appid="",Play68.setShareInfo(shareTitle,"企鹅保卫战"),document.title=shareTitle}function updateShareScore(e){updateShare(e)}