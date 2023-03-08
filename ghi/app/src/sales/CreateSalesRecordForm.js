import React, { useState, useEffect } from 'react';


function CreateSaleRecord() {
 const [inventory, setInventory] = useState([]);
 const [salespeople, setSalespeople] = useState([]);
 const [customers, setCustomers] = useState([]);
 const [formData, setFormData] = useState({
   automobile: '',
   salesperson: '',
   customer: '',
   price: ''
 });


 const getInventory = async () => {
   const response = await fetch('http://localhost:8000/api/inventory/');
   if (response.ok) {
     const data = await response.json();
     setInventory(data.inventory.filter(auto => !auto.is_sold));
   }
 }


 const getSalespeople = async () => {
   const response = await fetch('http://localhost:8090/api/salespeople/');
   if (response.ok) {
     const data = await response.json();
     setSalespeople(data.salespeople);
   }
 }


 const getCustomers = async () => {
   const response = await fetch('http://localhost:8090/api/customers/');
   if (response.ok) {
     const data = await response.json();
     setCustomers(data.customers);
   }
 }


 useEffect(() => {
   getInventory();
   getSalespeople();
   getCustomers();
 }, []);


 const handleSubmit = async (event) => {
   event.preventDefault();
   const response = await fetch('http://localhost:8090/api/sales/', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(formData)
   });
   if (response.ok) {
     setFormData({
       automobile: '',
       salesperson: '',
       customer: '',
       price: ''
     });
   }
 }


 const handleFormChange = (event) => {
   const inputName = event.target.name;
   const value = event.target.value;
   console.log("this is inputname/value", inputName, value)
   setFormData({
     ...formData,
     [inputName]: value
   });
 }


 return (
   <div className="row">
     <div className="offset-3 col-6">
       <div className="shadow p-4 mt-4">
         <h1>Create a Sale Record</h1>
         <form onSubmit={handleSubmit} id="create-sale-record-form">
           <div className="form-group">
             <label htmlFor="automobile">Automobile:</label>
             <select
               className="form-control"
               id="automobile"
               required
               name="automobile"
               value={formData.automobile}
               onChange={handleFormChange}
             >
               <option value="">Select automobile...</option>
               {inventory.map(auto => {
                 return (
                   <option key={auto.id} value={auto.id}>{`${auto.year} ${auto.make} ${auto.model}`}</option>
                 )
               })}
             </select>
           </div>
           <div className="form-group">
             <label htmlFor="salesperson">Sales Person:</label>
             <select
               className="form-control"
               id="salesperson"
               required
               name="salesperson"
               value={formData.salesperson}
               onChange={handleFormChange}
             >
               <option value="">Select salesperson...</option>
               {salespeople.map(sp => {
                 return (
                   <option key={sp.id} value={sp.id}>{`${sp.first_name} ${sp.last_name}`}</option>
                 )
               })}
             </select>
           </div>
           <div className="form-group">
             <label
         htmlFor="customer">Customer:</label>
         <select
           className="form-control"
           id="customer"
           required
           name="customer"
           value={formData.customer}
           onChange={handleFormChange}
         >
           <option value="">Select customer...</option>
           {customers.map(customer => {
             return (
               <option key={customer.id} value={customer.id}>{`${customer.first_name} ${customer.last_name}`}</option>
             )
           })}
         </select>
       </div>
       <div className="form-group">
         <label htmlFor="price">Price:</label>
         <input
           type="number"
           className="form-control"
           id="price"
           required
           name="price"
           value={formData.price}
           onChange={handleFormChange}
         />
       </div>
       <button type="submit" className="btn btn-primary">Create Sale Record</button>
     </form>
   </div>
 </div>
</div>




);
}


export default CreateSaleRecord;
