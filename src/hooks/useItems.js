import {useEffect, useState} from "react";
import itemsService from "../services/items";

const useItems = () => {

  const [items, setItems] = useState([]);
  const [filters, setFilters] = useState([]);
	const [selectedFilter, setSelectedFilter] = useState('none');

  useEffect(() => {
  	if (items.length === 0) {
			itemsService.getItems().then((result) => {
				const categoriesArray = [];
				const itemsArray = result.data.map((item) => {
					const parsedUrl = item.image.split('/');
					item.category = parsedUrl[parsedUrl.length - 1];
					categoriesArray.push(parsedUrl[parsedUrl.length - 1])
					return item;
				});
				const uniqueCategories = categoriesArray.filter(onlyUnique);
				setItems(itemsArray);
				setFilters(uniqueCategories);
			})
		}
  }, [items])

	function onlyUnique(value, index, self) {
		return self.indexOf(value) === index;
	}

	const filteredItems = selectedFilter === "none"
		? items
		: items.filter((item) => item.category === selectedFilter);

	return {
  	filters,
		filteredItems,
		selectedFilter,
		setSelectedFilter
	}

}

export default useItems;