import React from 'react';
import PageError from 'widgets/PageError';

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {hasError: false};
	}

	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		return {hasError: true};
	}

	componentDidCatch(error, info) {
		// Example "componentStack":
		//   in ComponentThatThrows (created by App)
		//   in ErrorBoundary (created by App)
		//   in div (created by App)
		//   in App
		console.log(error, info.componentStack);
	}

	render() {
		const {hasError} = this.state;
		const {children} = this.props;
		if (hasError) {
			// You can render any custom fallback UI
			return <PageError />;
		}

		return children;
	}
}

export default ErrorBoundary;
