import './App.css';
import Header from './components/Header';
import SideBar from './components/Sidebar';

function App() {
	return (
		<div className="main-container">
			<Header />
			<SideBar />
			<div className="main-sections titles border-purple-500 border-solid border-2"></div>
			<div className="main-sections games border-blue-800 border-solid border-2"></div>
		</div>
	);
}

export default App;
