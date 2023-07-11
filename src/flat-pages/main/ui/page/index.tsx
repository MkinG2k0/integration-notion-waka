import { DbForm } from 'features/db-form/ui/db-form'

import { http } from 'shared'

const getSummary = async () => await http.get('waka/summary')

export const Main = ({}) => {
	// const summary = await getSummary()

	return <div className={'p-2'}>{/*<Info />*/}</div>
}
