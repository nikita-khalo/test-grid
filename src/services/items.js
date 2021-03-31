import axios from "../utilities/axios";

const itemsService = {
	getItems: () => axios.get('/flow')
}

export default itemsService