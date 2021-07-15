import { BrowserRouter, Route } from 'react-router-dom';
import PostMain from './component/post/PostMain';
import PostView from './component/post/PostView';
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/postView/:no' component={PostView} />
        <Route exact path='/' component={PostMain} />
      </BrowserRouter>
    </div>
  );
}
 
export default App;
