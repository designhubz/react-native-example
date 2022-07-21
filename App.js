import React from 'react';
import { SpatialXRWidget } from 'designhubz-react-native';

export default function App()
{
	console.log('designhubz-react-native v1.1.1')

	const testApiKey = '1';
	const testProductID = 'spatial-xr-test01';
	const testTheme = 'tanagra';
	const directAR = false;

	return (
		<SpatialXRWidget
			style={{flex: 1}}
			apiKey={testApiKey}
			productID={testProductID}
			theme={testTheme}
			directAR={directAR}
		/>
	);
}
