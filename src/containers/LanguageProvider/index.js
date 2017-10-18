/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import React from 'preact-compat'
import PropTypes from 'prop-types'
import connect from 'react-redux/lib/connect/connect'
import { IntlProvider } from 'react-intl'

export class LanguageProvider extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
	render() {
		const { locale, messages, children } = this.props
		return (
			<IntlProvider locale={locale} key={locale} messages={messages[locale]}>
				{React.Children.only(children)}
			</IntlProvider>
		)
	}
}

LanguageProvider.propTypes = {
	locale: PropTypes.string,
	messages: PropTypes.object,
	children: PropTypes.element.isRequired,
}

const mapStateToProps = (state) => ({
	...state.language
})

export default connect(mapStateToProps)(LanguageProvider)
