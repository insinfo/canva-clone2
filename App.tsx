import { FC } from 'react';
import ReactGA from 'react-ga4';
import Test from './src/Test';

if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize('G-68BJDBYMLE');
}
const App: FC = () => {
  return <Test />;
};

export default App;
