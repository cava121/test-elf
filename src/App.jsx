import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Albums from './components/Albums';
import Photos from './components/Photos';
import './app.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

async function getData(data) {
  const result = await axios.get(
    'https://jsonplaceholder.typicode.com/' + data
  );
  return result.data;
}

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const albums = await getData('albums');
      const users = await getData('users');
      const photos = await getData('photos');
      dispatch({
        type: 'GET_DATA',
        payload: {
          albums,
          users,
          photos,
        },
      });
    };
    fetchData();
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/album_:id">
            <Photos />
          </Route>
          <Route exact path="/">
            <Albums />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
