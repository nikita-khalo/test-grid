import './App.css';
import React from "react";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import useItems from "./hooks/useItems";

function App() {

	const {filters, filteredItems, selectedFilter, setSelectedFilter} = useItems();

	return (
    <div className="App">
			<Header filters={filters} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter}/>
      <Gallery items={filteredItems}/>
    </div>
  );
}

export default App;
