export default {
	myVar1: [],
	myVar2: {},
	async verifyConfig () {
		const api_url = await appsmith.store.api_url;
		const api_key = await appsmith.store.api_key;
		if(!api_url && !api_key){
			showModal('ModalConfig');
			return false;
		}
		
		fetch_Instances.run();
		Find_Webhook.run();
		Find_Settings.run();
		Find_Chatwoot.run();
		return true;
	}
}