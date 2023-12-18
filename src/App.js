
import { useState } from 'react';
import navijson from './data/gnb.json';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [taBvar, setTabVar] = useState(0);

  return (
    <div>
      <ul className="">
        {
          navijson.map((el, idx) => {
            return (
              <>
                <li onClick={() => { setTabVar(idx) }}>
                  {el.nm}
                </li>
              </>
            )
          })
        }
      </ul>
      <div className='border py-5 bg-dark text-white'>
        {
          navijson[taBvar] && <p>
            <img src={navijson[taBvar].src} alt={navijson[taBvar].alt} />
            <strong>{navijson[taBvar].nm}</strong>
          </p>
        }
      </div>
    </div>
  );
}

export default App;
