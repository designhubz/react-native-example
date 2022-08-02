import React from 'react';
import { View, Alert } from 'react-native';
import { SpatialXRWidget } from 'designhubz-react-native';

export default function App()
{
	console.log('designhubz-react-native v1.2.0')

	const testApiKey = '7';
	const testProductID = '002215234877';
	const testTheme = 'tanagra';
	const directAR = false;

	const onError = (err) =>
	{
		Alert.alert('SpatialXRWidget', err.toString());
		throw err;
	};

	return (
		<View
		style={{
			flex: 1, 
			backgroundColor: directAR ? 'grey' : 'white'
		}}
		>

			<SpatialXRWidget
				style={{ flex: 1 }}
				onError={onError}
				apiKey={testApiKey}
				productID={testProductID}
				theme={testTheme}
				directAR={directAR}
			/>
			
		</View>
	);
}
