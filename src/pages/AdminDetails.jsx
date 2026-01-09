import React, { useState } from "react";
import "../style/AdminDetails.css";
import axios from "axios";
  import { useNavigate } from "react-router-dom";


const AdminDetails = () => {
      const navigate = useNavigate()
   const [images, setImages] = useState([null, null, null, null]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    const newImages = [...images];
    newImages[index] = file;
    setImages(newImages);
  };

  const removeImage = (index) => {
    const newImages = [...images];
    newImages[index] = null;
    setImages(newImages);

    const fileInput = document.getElementById(`file${index}`);
    if (fileInput) fileInput.value = "";
  };

  const openFile = (id) => {
    document.getElementById(id).click();
  };

  const addProduct = async (e) => {
    e.preventDefault();

    if (images.some((img) => img === null)) {
      alert("Please upload all 4 images");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);

    images.forEach((file) => {
      formData.append("images", file);
    });

    try {
      const res = await axios.post(
        "http://localhost:5000/addProduct",
        formData,{
  headers: { "Content-Type": "multipart/form-data" }
});

      console.log("Success:", res.data);
      if(res.data.status == 200){
        navigate("/adminConfirm")
      setName("")
      setPrice("")
      setDescription("")
      setImages([null, null, null, null])
      }

 
  
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h2>Add Product</h2>

      <form onSubmit={addProduct}>
      <input
  type="text"
  placeholder="Product Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

<input
  type="number"
  placeholder="Price"
  value={price}
  onChange={(e) => setPrice(e.target.value)}
/>

<input
  type="text"
  placeholder="Description"
  value={description}
  onChange={(e) => setDescription(e.target.value)}
/>


        <div className="upload-images">
          {images.map((img, index) => (
            <div
              key={index}
              className="image-upload-box"
              onClick={() => openFile(`file${index}`)}
            >
              <input
                type="file"
                id={`file${index}`}
                accept="image/*"
                hidden
                onChange={(e) => handleImageUpload(e, index)}
              />

              {img ? (
                <>
                  <img
                    src={URL.createObjectURL(img)}
                    alt="preview"
                    className="preview-img"
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeImage(index);
                    }}
                  >
                    Remove
                  </button>
                </>
              ) : (
                <>
                  <div className="upload-icon">📤</div>
                  <div>Upload</div>
                </>
              )}
            </div>
          ))}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdminDetails;
