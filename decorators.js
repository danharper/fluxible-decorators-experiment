import React from 'react'
import connectToStores from 'fluxible/addons/connectToStores'

/**
 * Decorates a Component to listen on given stores
 * @param stores
 * @returns {Function} a higher-order component
 */
export function useStores(stores) {
	return function (target) {
		return connectToStores(target, stores, target.fromStores)
	}
}

export function provideContext(ComposedComponent) {
	if (arguments.length === 0) return passContext;

	ComposedComponent.contextTypes = Object.assign({
		getStore: React.PropTypes.func.isRequired,
		executeAction: React.PropTypes.func.isRequired
	}, ComposedComponent.contextTypes)

	return ComposedComponent

	//return class extends React.Component {
	//	static contextTypes = {
	//		getStore: React.PropTypes.func,
	//		executeAction: React.PropTypes.func
	//	}
	//	render() {
	//		return <ComposedComponent {...this.props} context={this.context} />
	//	}
	//}
}


