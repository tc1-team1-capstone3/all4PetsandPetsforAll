import React, { useState } from 'react';
import productAPI from '../../Utils/productAPI.js';
import { config } from '../../firebase';
import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';
import { useDispatch, useSelector } from 'react-redux';
import { postItem } from '../../Redux/itemReducer/itemReducer';
firebase.initializeApp(config);

const Admin = () => {
	const item = useSelector((state) => state.itemReducer.items);
	const dispatch = useDispatch();
	const [ avatar, setAvatar ] = useState('');
	const [ isUploading, setIsuploading ] = useState(false);
	const [ progress, setProgress ] = useState(0);
	const [ avatarUrl, setAvatarUrl ] = useState('');
	const [ formData, setFormData ] = useState({
		sku: '',
		itemName: '',
		description: '',
		price: 0.0,
		quantity: 0
	});
	const { sku, itemName, description, price, quantity } = formData;

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// const onSubmit = async (e) => {
	// 	e.preventDefault();
	// 	console.log(formData);
	// 	try {
	// 		productAPI.createProduct({}).then((res) => {
	// 			console.log(res);
	// 		});
	// 	} catch (e) {
	// 		throw new Error(e);
	// 	}
	// };

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
	console.log(item);
	return (
		<div>
			<h1>Add Product</h1>
			<form>
				<input
					value={sku}
					onChange={(e) => onChange(e)}
					name="sku"
					id="sku"
					type="input"
					//placeholder="Enter Item SKU"
				/>
				<input
					value={itemName}
					onChange={(e) => onChange(e)}
					name="itemName"
					id="itemName"
					type="input"
					//placeholder="Enter Item Name"
				/>
				<input
					value={description}
					onChange={(e) => onChange(e)}
					name="description"
					id="description"
					type="textarea"
					//placeholder="Enter Item Description"
				/>
				<input
					onChange={(e) => onChange(e)}
					name="price"
					id="price"
					type="input"
					//defaultValue={price}
					//placeholder="Enter Item Price"
				/>
				<input
					onChange={(e) => onChange(e)}
					name="quantity"
					id="quantity"
					type="input"
					//defaultValue={quantity}
					//placeholder="Enter Item Quantity"
				/>
				<FileUploader
					accept="image/*"
					name="avatar"
					randomizeFilename
					storageRef={firebase.storage().ref('images')}
					onUploadStart={handleUploadStart}
					onUploadError={handleUploadError}
					onUploadSuccess={handleUploadSuccess}
					onProgress={handleProgress}
				/>
				<button
					type="submit"
					onClick={(e) => dispatch(postItem(sku, itemName, description, price, quantity, avatarUrl))}
				>
					Add to List
				</button>
			</form>
		</div>
	);
};

export default Admin;
