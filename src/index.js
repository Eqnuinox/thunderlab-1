import React from 'react';
import {createRoot} from 'react-dom/client';
import Header from './Header';
import ItemsList from './ItemsList';
import { itunesApiRequest } from './utility';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { searchResults: [] };
		this.updateSearch = this.updateSearch.bind(this);
	}

	async updateSearch(text) {
		const response = await itunesApiRequest(text);
		this.setState({ searchResults: response.results });
	}

	render() {
		const { searchResults } = this.state;
		return (
			<>
				<div>
					<Header startSearch={this.updateSearch} />
					<ItemsList items={searchResults} />
				
				</div>
			</>
		);
	}
}


const rootElement = document.getElementById('root');
createRoot(document.getElementById('root')).render(<App />);
