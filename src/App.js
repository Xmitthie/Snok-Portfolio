import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Loading from './components/load'

const Home = lazy(() => import('./components/home'));
const Me = lazy (() => import('./components/me'));
const Networks = lazy(() => import('./components/networks'))
const Guilds = lazy(() => import('./components/guilds'))
const Error = lazy(() => import('./components/error'))

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/@me" element={<Me />} />
      <Route exact path="/networks" element={<Networks />} />
      <Route exact path="/guilds" element={<Guilds />} />
      <Route exact path="*" element={<Error code={404} text={'Not found'}/>}/>
      </Routes>
      </Suspense>
    </Router>
  );
}

export default App; 