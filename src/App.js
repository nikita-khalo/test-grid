import './App.css';
import React from "react";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import useItems from "./hooks/useItems";

function App() {


	const {filterItems, filters, filteredItems} = useItems();

	return (
    <div className="App">
			<Header filters={filters} filterItem={filterItems}/>
      <Gallery items={filteredItems}/>
    </div>
  );
}

export default App;
