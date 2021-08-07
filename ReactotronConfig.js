import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

const reactotron = Reactotron.configure({name: 'React Native Demo'})
    .use(reactotronRedux())
    .connect();

export default reactotron;
