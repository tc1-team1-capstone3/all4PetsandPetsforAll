import ProductsApi from '../../Utils/productAPI';

const POST_ITEM = 'POST_ITEM';
const GET_ITEMS = 'GET_ITEMS';
const GET_ITEM = 'GET_ITEM';

const setPostItem = (payload) => ({ type: POST_ITEM, payload });
const setGetItems = (payload) => ({ type: GET_ITEMS, payload });
const setGetItem = (payload) => ({ type: GET_ITEM, payload });

export const getItem = (id) => {
	return (dispatch) => {
		ProductsApi.getProducts(id).then((response) => dispatch(setGetItem(response.data)));
	};
};

export const getItems = () => {
	return (dispatch) => {
		ProductsApi.getProducts().then((response) => dispatch(setGetItems(response.data)));
	};
};

export const postItem = (sku, itemName, description, price, quantity, pic) => {
	return (dispatch) => {
		ProductsApi.createProduct({ sku, itemName, description, price, quantity, pic }).then((response) =>
			dispatch(setPostItem(response.data))
		);
	};
};

const initialState = {
	items: []
};

export default function itemReducer(state = initialState, action) {
	switch (action.type) {
		case `${POST_ITEM}`:
			return {
				...state,
				items: action.payload
			};
		case `${GET_ITEMS}`:
			return {
				...state,
				items: action.payload
			};
		default:
			return state;
	}
}
