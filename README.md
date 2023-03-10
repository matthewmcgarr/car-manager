# CarCar

Team:

- Khalid - Sales
- Matthew McGarr - Services

## Design

We will be using BootStrap for the design

## Service microservice

For the service models, I created a model for the technician with a name and employee number, which is unique. A service model, which has a vin, reason, date, time, vip, customer name, completed status, and a foreign key to technician. Lastly, there is a model for a AutomobileVO, which only contains the necessary fields from the automobile in the inventory -- the vin and href. The VOs are populated through a poller to the inventory microservice.

The entire microservice allows for users to enter new technicians and service appointments. They are also able to view a list of all the current services and then mark them as completed or delete them to remove them from this list. There is the ability to view past services and search by vin, reason, customer, or VIP status.

Lastly, VIP status is granted to customers who purchased their vehicle with us. The VIN is compared with the inventory, and if a match is found then they are granted VIP status.

## Sales microservice

In the sales microservice, vehicle models are a critical aspect of the application. A model represents a particular type of vehicle, such as a Honda Civic, and is generally defined by attributes such as make, model name, model year and so on.

The integration of the models with the inventory microservice involves storing and retrieving information about the available vehicles in the inventory, including their model information. This information may include the quantity of vehicles available for each model, their location, pricing, and so on.

The sales microservice can make API calls to the inventory microservice to retrieve the list of available vehicles and their associated model information. This data can then be used by the sales microservice to display relevant information to the users, such as available models, their prices, and locations. When a customer decides to purchase a vehicle, the sales microservice can initiate an API call to the inventory microservice to reserve the vehicle and decrement its quantity.

Furthermore, in the sales microservice, the bounded context is the sales domain, which includes all the functionality related to managing the sales process, such as creating and managing sales orders, tracking inventory levels, and so on. By defining clear boundaries between different bounded contexts, we can ensure that each microservice is focused on a specific task and has clear responsibilities, which helps to simplify the development and maintenance of the system.

Overall, the integration of vehicle models with the inventory microservice is essential for the successful operation of a sales microservice as it enables any sales team to have accurate and up-to-date information about available vehicles, which helps them make informed decisions and improve customer satisfaction.
