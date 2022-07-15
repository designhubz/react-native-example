import React from 'react';
import { SpatialXRWidget } from 'designhubz-react-native';

export default function App()
{
	const testApiKey = '1';
	const testProductID = 'spatial-xr-test01';
	const testTheme = 'tanagra';

	return (
		<SpatialXRWidget
			style={{flex: 1}}
			apiKey={testApiKey}
			productID={testProductID}
			theme={testTheme}
		/>
	);
}
