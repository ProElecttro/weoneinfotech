import { useState, ChangeEvent } from "react";
import styles from "./addProduct.module.css";

function AddProduct() {
  const initialFormData = {
    productName: "",
    category: "",
    brandName: "",
    stock: "",
    status: "",
    MRP: "",
    salesPrice: "",
    description: "",
    images: [] as string[],
    specifications: [] as {key: string, value: string}[],
  };  

  const [formData, setFormData] = useState(initialFormData);
  const [selectImage, setSelectedImage] = useState("");
  const [newKey, setNewKey] = useState("");
  const [newValue, setNewValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const addImage = () => {
    const { images } = formData;
    setFormData((prevFormData) => ({
      ...prevFormData,
      images: [...images, selectImage],
    }));
    
    setSelectedImage("");
  };

  const addSpecification = () => {
    const { specifications } = formData;
    const newSpec = { key: newKey, value: newValue };
    setFormData((prevFormData) => ({
      ...prevFormData,
      specifications: [...specifications, newSpec],
    }));
    
    setNewKey("");
    setNewValue("");
  };
  
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const bodyData = {
        ...formData,
        images: JSON.stringify(formData.images),
        specifications: JSON.stringify(formData.specifications)
      };
      
      const response = await fetch("http://localhost:3002/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
      });

      const savedProduct = await response.json();
      console.log(savedProduct)
  
      if (response.status === 201) {
        alert("Product Added");
        window.location.reload();
      } else {
        alert("Failed to save product");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={styles.addProductContainer}>
        <div className={styles.title}>
          <p>Add New Product</p>
          <button id={styles.addProductBtn} onClick={handleSubmit}>
            Add Product
          </button>
        </div>

        <form id={styles.fillProduct}>
          <div className={styles.inputBox}>
            <label htmlFor="productName">Product Name</label>
            <input 
              type="text" 
              name="productName" 
              value={formData.productName}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.inputBox}>
            <label htmlFor="category">Category</label>
            <input 
              type="text" 
              name="category" 
              value={formData.category}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.inputBox}>
            <label htmlFor="brandName">Brand Name</label>
            <input 
              type="text" 
              name="brandName" 
              value={formData.brandName}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.inputBox}>
            <label htmlFor="stock">Quantity</label>
            <input 
              type="text" 
              name="stock" 
              value={formData.stock}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.inputBox}>
            <label htmlFor="mrp">Maximum Retail Price (MRP)</label>
            <input 
              type="text" 
              name="MRP" 
              value={formData.MRP}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.inputBox}>
            <label htmlFor="salesPrice">Sales Price</label>
            <input 
              type="text" 
              name="salesPrice" 
              value={formData.salesPrice}
              onChange={handleInputChange}
            />
          </div>
        </form>

        <div className={styles.productSpecs}>
          <div className={styles.title}>
            <p>Upload Images</p>
          </div>
          <div className={styles.specsArea}>
            <input 
              type="text"
              name="images"
              placeholder="paste image url"
              value={selectImage}
              onChange={(e) => setSelectedImage(e.target.value)}
            />
            <button type="button" onClick={addImage} className={styles.uploadImageBtn}>
              Upload Image
            </button>
          </div>
          {
            formData.images.length > 0 && (
              <>
                {formData.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    style={{ maxWidth: '100px', marginRight: '5px' }}
                  />
                ))}
              </>
            )
          }
        </div>

        <div className={styles.productSpecs}>
          <div className={styles.title}>
            <p>Add Specifications</p>
          </div>
          <div className={styles.specsArea}>
            <input
              type="text"
              placeholder="Key"
              value={newKey}
              onChange={(e) => setNewKey(e.target.value)}
              />
            <input
              type="text"
              placeholder="Value"
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
              />
            <button type="button" onClick={addSpecification} className={styles.addSpecsBtn}>
              Add Specification
            </button>
          </div>
          {
            formData.specifications.length > 0 && (
              <div className={styles.specifications}>
                {formData.specifications.map((spec, index) => (
                  <div className={styles.specs} key={index}>
                    <strong>{spec.key}</strong> <p>:</p> <p>{spec.value}</p>
                  </div>
                ))}
              </div>
            )
          }
        </div>
      </div>
    </>
  );
}

export default AddProduct;
