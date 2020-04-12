import React from 'react';
import Footer from './footer'
import DesktopVersion from './desktop'
import MobileVersion from './mobile'

class Main extends React.Component{
	constructor(props){
		super(props)
		this.state = {	windowWith: window.innerWidth }

		this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this)
	}

	componentWillMount() {
  		window.addEventListener('resize', this.handleWindowSizeChange)
	}

	componentWillUnmount() {
  		window.removeEventListener('resize', this.handleWindowSizeChange)
	}

	handleWindowSizeChange() {
  		this.setState({ windowWith: window.innerWidth })
	}

	render() {
		const { windowWith } = this.state
		const isMobileOrTablet = (windowWith <= 992)

		if(isMobileOrTablet){
			return(<div className="main-wrapper">
						<MobileVersion />
						<Footer />
					</div>);
		}else{
			return(<div className="main-wrapper">
						<DesktopVersion />
						<Footer />
					</div>);
		}
	}
}

export default Main