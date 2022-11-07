import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import Register from "./components/Auth/Register/Register.component";
import Login from "./components/Auth/Login/Login.component";
import firebase from "./server/firebase";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";
import "semantic-ui-css/semantic.min.css"
import reportWebVitals from './reportWebVitals';
// Upward is different - serviceWorker
import { combinedReducers } from "./store/reducer";
import { setUser } from "./store/actioncreator";
import { AppLoader } from './components/AppLoader/AppLoader.component';
 

const store = createStore(combinedReducers)

const Index = (props) => {

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        props.setUser(user);
        props.history.push("/");
      } else {
        props.setUser(null);
        props.history.push("/login");
      }
    })
  }, []);

  console.log("Debug", props.currentUser);

  return (<>
    <AppLoader loading={props.loading && props.location.pathname === "/"} />
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/" component={App} />
    </Switch></>)
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    loading: state.channel.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => { dispatch(setUser(user)) }
  }
}

const IndexWithRouter = withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <IndexWithRouter />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
