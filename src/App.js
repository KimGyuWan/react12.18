
import { useState } from 'react';
import db from './data/gnb.json';

function App() {
  const [taBvar, setTabVar] = useState("");

  return (
    <div>
      <ul className="">
        {
          db.map((el, idx) => {
            return (
              <>
                <li onClick={() => { setTabVar(idx) }}>
                  {el.nm}
                </li>
                {
                  taBvar === idx && <div>
                    <img src={el.src} alt={el.alt} />{el.nm}
                  </div>
                }
              </>
            )
          })
        }
      </ul>

    </div>
  );
}

export default App;
