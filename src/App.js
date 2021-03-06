import React from "react";
import "./App.css";
import { Provider } from "react-redux";

import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import store from "./store";

function App() {
	return (
		// Use the redux store in the app
		<Provider store={store}>
			<div className="App">
				<header className="App-header">
					<PostForm />
					<Posts />
				</header>
			</div>
		</Provider>
	);
}

export default App;
