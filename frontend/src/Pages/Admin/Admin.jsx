import React, { useEffect, useState } from 'react';
import { config } from '../../firebase';
import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';
import { useDispatch, useSelector } from 'react-redux';
import { postItem } from '../../Redux/itemReducer/itemReducer';
import { Link } from 'react-router-dom';
import './Admin.scss';
import productAPI from '../../Utils/productAPI';
import ItemDisplay from '../../Components/ItemDisplay/ItemDisplay';
firebase.initializeApp(config);

const Admin = () => {
	const item = useSelector((state) => state.itemReducer.items);
	const dispatch = useDispatch();
	const [ avatar, setAvatar ] = useState('');
	const [ isUploading, setIsuploading ] = useState(false);
	const [ progress, setProgress ] = useState(0);
	const [ avatarUrl, setAvatarUrl ] = useState('');
	const [ productList, setProductList ] = useState([]);
	const [ formData, setFormData ] = useState({
		sku: '',
		itemName: '',
		description: '',
		price: 0.0
	});
	const { sku, itemName, description, price } = formData;

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	let handleUploadStart = () => {
		setIsuploading(true);
		setProgress(0);
	};
	let handleProgress = (progress) => setProgress(progress);
	let handleUploadError = (error) => {
		setIsuploading(false);
	};
	let handleUploadSuccess = (filename) => {
		setAvatar(filename);
		setProgress(100);
		setIsuploading(false);
		firebase.storage().ref('images').child(filename).getDownloadURL().then((url) => setAvatarUrl(url));
	};

	useEffect(() => {
		const getProductList = async () => {
			const returnedList = await productAPI.getProducts();
			setProductList(returnedList.data);
		};
		getProductList();
	});

	return (
		<div className="input-wrapper">
			<h1>Add Product</h1>
			<form>
				<label htmlFor="sku">Item Sku</label>
				<input
					value={sku}
					onChange={(e) => onChange(e)}
					name="sku"
					id="sku"
					type="input"
					placeholder="Enter Item SKU"
				/>
				<label htmlFor="itemName">Item Name</label>
				<input
					value={itemName}
					onChange={(e) => onChange(e)}
					name="itemName"
					id="itemName"
					type="input"
					placeholder="Enter Item Name"
				/>
				<br />
				<label htmlFor="description">Item Description</label>
				<input
					value={description}
					onChange={(e) => onChange(e)}
					name="description"
					id="description"
					type="textarea"
					placeholder="Enter Item Description"
				/>
				<label htmlFor="price">Item Price</label>
				<input
					onChange={(e) => onChange(e)}
					name="price"
					id="price"
					type="input"
					placeholder="Enter Item Price"
				/>
				<br />
				<label htmlFor="imgInput">Item Image</label>
				<FileUploader
					accept="image/*"
					name="avatar"
					id="imgInput"
					randomizeFilename
					storageRef={firebase.storage().ref('images')}
					onUploadStart={handleUploadStart}
					onUploadError={handleUploadError}
					onUploadSuccess={handleUploadSuccess}
					onProgress={handleProgress}
				/>
				<br />
				<button
					type="submit"
					onClick={(e) => {
						dispatch(postItem(sku, itemName, description, price, avatarUrl));
					}}
				>
					Add to List
				</button>
			</form>

			<ItemDisplay productList={productList} admin={true} />
		</div>
	);
};

export default Admin;
