import FluxibleBaseStore from 'fluxible/addons/BaseStore'

export const BaseStore = FluxibleBaseStore

export function named(storeName) {
	return function(target) {
		target.storeName = storeName
	}
}

export function hears(event) {
	return function (target, name, descriptor) {
		if ( ! target.constructor.handlers) target.constructor.handlers = {}
		target.constructor.handlers[event] = name
	}
}
