/**
 * @format
 */

import {AppRegistry, Text} from 'react-native';
import App from './navigation/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => () => <App />);