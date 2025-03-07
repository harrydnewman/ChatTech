import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Compare from './pages/Compare';
import Letters from './pages/ArtifactPages/Letters';
import Graffiti from './pages/ArtifactPages/Graffiti';
import PrivateMessaging from './pages/ArtifactPages/PrivateMessaging';
import PublicThreads from './pages/ArtifactPages/PublicThreads';
import AIChats from './pages/ArtifactPages/AIChats';
import CodeInChat from './pages/CodeInChat';
import Future from './pages/Future';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/compare' element={<Compare/>}/>
          <Route path='/artifacts/letters' element={<Letters />} />
          <Route path='/artifacts/graffiti' element={<Graffiti />} />
          <Route path='/artifacts/privatemessaging' element={<PrivateMessaging />} />
          <Route path='/artifacts/publicthreads' element={<PublicThreads />} />
          <Route path='/artifacts/aichats' element={<AIChats />} />
          <Route path='/codeinchat' element={<CodeInChat/>}/>
          <Route path='/future' element={<Future/>}/>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
