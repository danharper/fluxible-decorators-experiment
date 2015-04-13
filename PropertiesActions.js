export const PROPERTIES_REFRESHING = 'PROPERTIES_REFRESHING'
export const PROPERTIES_REFRESHED = 'PROPERTIES_REFRESHED'

export function refreshProperties(ctx, payload) {
	ctx.dispatch(PROPERTIES_REFRESHING, payload)

	setTimeout(() => {
		ctx.dispatch(PROPERTIES_REFRESHED, {
			property: {id:Math.random()+' :D'}
		})
	}, 1000)
}