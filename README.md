# CarCar

Team:

- Khalid - Auto Sales
- Matthew McGarr - Services

## Design

We will be using BootStrap for the design

## Service microservice

For the service models, I created a model for the technician with a name and employee number, which is unique. A service model, which has a vin, reason, date, time, vip, customer name, completed status, and a foreign key to technician. Lastly, there is a model for a AutomobileVO, which only contains the necessary fields from the automobile in the inventory -- the vin and href. The VOs are populated through a poller to the inventory microservice.

The entire microservice allows for users to enter new technicians and service appointments. They are also able to view a list of all the current services and then mark them as completed or delete them to remove them from this list. There is the ability to view past services and search by vin, reason, customer, or VIP status.

Lastly, VIP status is granted to customers who purchased their vehicle with us. The VIN is compared with the inventory, and if a match is found then they are granted VIP status.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.
