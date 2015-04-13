import React from 'react'
import App from './App'
import Fluxible from 'fluxible'
import PropertiesStore from './PropertiesStore'

const stores = [
	PropertiesStore
]

function boot() {
	let flux = new Fluxible({
		component: App
	})

	stores.forEach(store => flux.registerStore(store))

	return flux.createContext()
}

const app = boot().createElement()

React.render(app, document.getElementById('app'))
