import React from 'preact-compat'
import shallow from 'enzyme/shallow'
import mount from 'enzyme/mount'
import { FormattedMessage, defineMessages } from 'react-intl/lib/index.es'
import Provider from 'react-redux/lib/components/Provider'

import ConnectedLanguageProvider, { LanguageProvider } from '../index'
import store from '../../../store'
import { translationMessages } from '../../../i18n'

const messages = defineMessages({
	someMessage: {
		id: 'some.id',
		defaultMessage: 'This is some default message',
		en: 'This is some en message',
	},
})

describe('<LanguageProvider />', () => {
	it('should render its children', () => {
		const children = (<h1>Test</h1>)
		const renderedComponent = shallow(
			<LanguageProvider messages={messages} locale='en'>
				{children}
			</LanguageProvider>
    )
		expect(renderedComponent.contains(children)).toBe(true)
	})
})

describe('<ConnectedLanguageProvider />', () => {
	it('should render the default language messages', () => {
		const renderedComponent = mount(
			<Provider store={store}>
				<ConnectedLanguageProvider messages={translationMessages}>
					<FormattedMessage {...messages.someMessage} />
				</ConnectedLanguageProvider>
			</Provider>
    )
		expect(renderedComponent.contains(<FormattedMessage {...messages.someMessage} />)).toBe(true)
	})
})
