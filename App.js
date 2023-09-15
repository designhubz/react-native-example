import React from 'react';
import { View, Alert, Share } from 'react-native';
import { SpatialXRWidget } from 'designhubz-react-native';

export default function App()
{
	console.log('designhubz-react-native v1.2.4')

	const testApiKey = '7';
	const testProductID = '028214117691';
	const testTheme = 'tanagra';
	const directAR = false;
	const userId = 'react-native-user';

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
				userId={userId}
			/>

		</View>
	);
}

function shareExampleHandler()
{
	const title = 'Oriental Scents Flower Arrangement';
	const url = 'https://www.joigifts.com/en-ae/dubai/oriental-scents-flower-arrangement';
	Share.share({ title, url, message: `Check ${title} in AR:\n${url}` });
}
