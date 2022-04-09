import React, {useState} from 'react';
import './App.css';

const GIFS = ['https://media2.giphy.com/media/B8jsA9l2Jr5mw/giphy.gif?cid=ecf05e479fi86hirfgeccd6w93l2s01bp07koxepjrsqqxfc&rid=giphy.gif', 'https://media4.giphy.com/media/2uIljEE8N07gfsXaC2/giphy.gif?cid=ecf05e47ws1hje034qshmzxbg2mcxb6qup753tkuxbn8tbdc&rid=giphy.gif']

function App() {
	const [gifs, setGifs] = useState(GIFS)
  return (
    <div className="App">
			<section className="App-content">
				{
					gifs.map(singleGif => <img src={singleGif} />)
				}
			</section>
    </div>
  );
}

export default App;
