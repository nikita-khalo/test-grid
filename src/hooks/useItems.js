import {useCallback, useEffect, useState} from "react";
import itemsService from "../services/items";

const useItems = () => {

  const [items, setItems] = useState([]);
  const [filters, setFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

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
				setFilteredItems(itemsArray);
			})
		}
  }, [items])

	function onlyUnique(value, index, self) {
		return self.indexOf(value) === index;
	}

	const filterItems = useCallback((value) => {
		if (value !== "none") {
			const filteredArray = items.filter((item) => item.category === value);
			setFilteredItems(filteredArray);
		} else {
			setFilteredItems(items);
		}

	}, [items])

	return {
  	filters,
		filteredItems,
		filterItems
	}

}

export default useItems;