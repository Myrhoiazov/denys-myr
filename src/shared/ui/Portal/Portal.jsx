import {createPortal} from 'react-dom';

export const Portal = (props) => {
	const {children, portal = document.body} = props;
	return createPortal(children, portal);
};
