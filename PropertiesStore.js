import {BaseStore, named, hears} from './Store'
import {PROPERTIES_REFRESHING, PROPERTIES_REFRESHED} from './PropertiesActions'

@named('PropertiesStore')
export default class PropertiesStore extends BaseStore {

	properties = [
		{id:1}, {id:2}, {id:3}
	]

	isLoading = false

	all() {
		return this.properties
	}

	status() {
		return {
			isLoading: this.isLoading
		}
	}

	@hears(PROPERTIES_REFRESHING) handleRefreshing() {
		this.isLoading = true
		this.emitChange()
	}

	@hears(PROPERTIES_REFRESHED) handleRefreshed({property}) {
		this.properties.push(property)
		this.isLoading = false
		this.emitChange()
	}

}

//PropertiesStore.storeName = 'PropertiesStore'
//PropertiesStore.handlers = {
//	[REFRESH_PROPERTIES]: 'handleRefresh'
//}
