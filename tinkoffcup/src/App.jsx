import Main from './Page/Main'
import { Registration } from './Page/Registration';
import {Login} from './Page/Login';
import TableTournamemt from './Page/TableTournament'
import { Route, Routes} from 'react-router-dom'

function App() {
  return (
      <Routes>
          <Route path='/' element={<Main/>}/> 
          <Route path='/register' element={<Registration/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/tourlist' element={<TableTournamemt/>}/>
      </Routes>
  );
}

export default App;
