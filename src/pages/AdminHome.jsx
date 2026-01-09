import { useEffect, useState } from "react";
import "../style/AdminHome.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminHome =  () => {
    const navigate = useNavigate()

    
      const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://p1backend.onrender.com/products");
        setProducts(res.data);
       console.log( products)
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
  try {
    await axios.delete(`https://p1backend.onrender.com/deleteProduct/${id}`);
     setProducts(products.filter((p) => p._id !== id));
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};

    

    return (
        <div class="container">
        <div class="header">
            <h2>Product Management</h2>
            <button class="add-btn" onClick={()=>navigate("/adminDetail")}>
                <span>+</span>
                Add New Product
            </button>
        </div>

        <div class="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>Sl No</th>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Color</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id="productTableBody">
 
   {products.map((val, ind) => (
    <tr key={val._id || ind}>
      <td>{ind + 1}</td>
      <td>
        <img
          src={val.images?.[0] ? `https://p1backend.onrender.com/${val.images[0]}` : "/placeholder.png"}
          alt={val.name ?? "Product Image"}
          style={{
            width: "60px",      // fits in the table nicely
            height: "60px",
            objectFit: "cover", // ensures image doesn't stretch
            borderRadius: "4px",
          }}
        />
      </td>
      <td>{val.name ?? "N/A"}</td>
      <td>{val.description ?? "No Description"}</td>
      <td>₹{val.price ?? "0"}</td>
      <td>{val.color ?? "White"}</td>
      <td>
        <button
          style={{
            background: "red",
            color: "white",
            border: "none",
            padding: "5px 10px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={() => handleDelete(val._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  ))}
 
                 </tbody>
            </table>
        </div>

        <div class="footer">
            <div class="total-count">
                Showing <span id="currentCount">10</span> of <span id="totalCount">100</span> products
            </div>
            <div class="pagination">
                <button class="page-btn" onclick="changePage('prev')">‹</button>
                <button class="page-btn active" onclick="changePage(1)">1</button>
                <button class="page-btn" onclick="changePage(2)">2</button>
                <button class="page-btn" onclick="changePage(3)">3</button>
                <button class="page-btn" onclick="changePage(4)">4</button>
                <button class="page-btn" onclick="changePage(5)">5</button>
                <button class="page-btn" onclick="changePage('next')">›</button>
            </div>
        </div>
    </div>

   
    )
}
 <script>

    </script>

export default AdminHome;        // Sample product data
        