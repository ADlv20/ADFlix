import React from 'react';
import './App.css';
import Row from './Row';
import requests from './Requests'
import Quote from './Quote';

function App() {
  return (
    <div className="App">
      <h1>ADFlix</h1>
      <h3>
        <Quote/>
      </h3>
      <Row title="NotFlix ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumantaries} />

      <h2 className="spirited_away">
        <iframe src="https://drive.google.com/file/d/1GkBsVNDn2kjWT-1XxznIBFaFtLeO3tPE/preview" width="640" height="480" allow="autoplay" title='Spirited Away'></iframe>
      </h2>

    </div>
  );
}

export default App;
