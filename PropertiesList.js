import React from 'react'
import {refreshProperties} from './PropertiesActions'
import PropertiesStore from './PropertiesStore'
import {useStores, provideContext} from './decorators'


class Item extends React.Component {
	render() {
		return (
			<li>{this.props.property.id}</li>
		)
	}
}





class List extends React.Component {
	render() {
		return (
			<ul>
				{this.props.properties.map(property => <Item key={property.id} property={property} />)}
			</ul>
		)
	}
}





@provideContext
class Header extends React.Component {

	render() {
		return (
			<header>
				<button disabled={this.props.isLoading} onClick={this.refresh.bind(this)}>
					Refresh
				</button>
			</header>
		)
	}

	refresh() {
		this.context.executeAction(refreshProperties)
	}

}




@useStores([PropertiesStore])
class PropertiesList extends React.Component {

	static fromStores(stores, props) {
		return {
			properties: stores.PropertiesStore.all(),
			loading: stores.PropertiesStore.status().isLoading,
		}
	}

	render() {
		return (
			<div>
				<Header isLoading={this.props.loading} />
				<List properties={this.props.properties} />
			</div>
		)
	}

}

export default PropertiesList
