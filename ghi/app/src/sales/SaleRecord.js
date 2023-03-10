import React, { useState, useEffect } from 'react';

function CreateSaleRecord() {
  const [salesPerson, setSalesPerson] = useState("");
  const [customer, setCustomer] = useState("");
  const [automobile, setAutomobile] = useState("");
  const [price, setPrice] = useState("");
  const [salesPeopleOptions, setSalesPeopleOptions] = useState([]);
  const [customerOptions, setCustomerOptions] = useState([]);
  const [autos, setAutos] = useState([]);


  useEffect(() => {
    const fetchOptions = async () => {
      const salesPeopleResponse = await fetch("http://localhost:8090/api/salespeople");
      const salesPeopleData = await salesPeopleResponse.json();
      setSalesPeopleOptions(salesPeopleData);

      const customersResponse = await fetch("http://localhost:8090/api/customers");
      const customersData = await customersResponse.json();
      setCustomerOptions(customersData);
    };

    const fetchAutos = async () => {
      const autosResponse = await fetch('http://localhost:8100/api/automobiles/');
      if (autosResponse.ok) {
        const autosData = await autosResponse.json();
        setAutos(autosData.autos);
      }
    };

    fetchOptions();
    fetchAutos();
  }, []);


 const handleSalesPersonChange = (e) => {
   setSalesPerson(e.target.value);
 };


 const handleCustomerChange = (e) => {
   setCustomer(e.target.value);
 };

  const data = {
  sales_person: salesPerson,
  customer: Number(customer), // convert selected value to number
  automobile: automobile,
  price: price,
};


 const handleAutosChange = (e) => {
   setAutomobile(e.target.value);
 };


 const handlePriceChange = (e) => {
   setPrice(e.target.value);
 };


 const handleSubmit = async (e) => {
  e.preventDefault();

  const data = {
    sales_person: salesPerson,
    customer: customer,
    automobile: automobile,
    price: price
  };

  const response = await fetch("http://localhost:8090/api/sales/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (response.ok) {
    // reset form after successful submission
    setSalesPerson("");
    setCustomer("");
    setAutomobile("");
    setPrice("");
    window.location.reload(); // refresh the page
  } else {
    // handle error
    console.error("Error creating sale");
  }
};



 return (
   <div className="row">
     <div className="col-lg-10 offset-lg-1 col-md-12">
       <div className="shadow p-4 mt-4">
         <h1>Create a Sales Record</h1>
         <form onSubmit={handleSubmit}>
           <div className="form-group">
             <label htmlFor="salesPersonInput">Sales Person:</label>
             <select
               className="form-control"
               id="salesPersonInput"
               value={salesPerson}
               onChange={handleSalesPersonChange}
             >
               <option value="">Select a sales person</option>
               {salesPeopleOptions.map(option => (
                 <option key={option.id} value={option.id}>{option.name}</option>
               ))}
             </select>
           </div>
           <div className="form-group">
             <label htmlFor="customerInput">Customer Name:</label>
             <select
               className="form-control"
               id="customerInput"
               value={customer}
               onChange={handleCustomerChange}
             >
               <option value="">Select a customer</option>
               {customerOptions.map(option => (
                 <option key={option.id} value={option.id}>{option.name}</option>
               ))}
             </select>
           </div>
           <div className="form-group">
             <label htmlFor="automobileInput">Automobile:</label>
             <select
             className="form-control"
             id="autos"
             required
             name="autos"
             value={automobile}
             onChange={handleAutosChange}
           >
             <option value="">Select automobile</option>
             {autos.map(auto => {
               return (
                 <option key={auto.id} value={auto.id}> {auto.vin} </option>
               )
             })}
           </select>
           </div>
           <div className="form-group">
             <label htmlFor="priceInput">Sale Price:</label>
             <input
               type="number"


               className="form-control"
               id="priceInput"
               value={price}
               onChange={handlePriceChange}
             />
           </div>
           <button type="submit" className="btn btn-primary">
             Create Sale
           </button>
         </form>
       </div>
     </div>
   </div>
 );
}


export default CreateSaleRecord;
