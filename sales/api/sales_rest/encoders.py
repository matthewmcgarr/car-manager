from common.json import ModelEncoder
from .models import AutomobileVO,Customer,Sale,SalesPersons


class SalesPersonsEncoder(ModelEncoder):
    model = SalesPersons
    properties = [
        "id",
        "name",
        "employee_number"
    ]


class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "id",
        "name",
        "phone_number"
    ]

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "id",
        "vin",
        "import_href"
    ]

class SaleEncoder(ModelEncoder):
    model = Sale
    properties = [
        "id",
        "sales_person",
        "customer",
        "automobile",
        "price",
    ]

    encoders = {
        "sales_person": SalesPersonsEncoder(),
        "customer": CustomerEncoder(),
        "automobile": AutomobileVOEncoder(),
    }
