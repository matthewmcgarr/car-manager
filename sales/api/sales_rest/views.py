from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder

from .models import AutomobileVO,Customer,Sale,SalesPersons

class SalespersonsEncoder(ModelEncoder):
    model = SalesPersons
    properties = [
        "id",
        "first_name",
        "last_name",
        "employee_number"
    ]

class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "id",
        "first_name",
        "last_name",
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
        "salesperson",
        "customer",
        "automobile",
        "price",
    ]

    encoders = {
        "salesperson": SalespersonsEncoder(),
        "customer": CustomerEncoder(),
        "automobile": AutomobileVOEncoder(),
    }

# Get/Post for Salesperson
@require_http_methods(["GET", "POST"])
def api_list_salespeople(request):
    if request.method == "GET":
        salespeople = SalesPersons.objects.all()
        return JsonResponse(
            {"salespeople": salespeople},
            encoder=SalespersonsEncoder
        )
    else:
        content = json.loads(request.body)
        salesperson = SalesPersons.objects.create(**content)
        return JsonResponse(
            salesperson,
            encoder=SalespersonsEncoder
        )

# Delete/Get/Put for Salesperson
@require_http_methods(["DELETE", "GET", "PUT"])
def api_show_salesperson(request, id):
    if request.method == "GET":
        try:
            salesperson = SalesPersons.objects.get(id=id)
            return JsonResponse(
                salesperson,
                encoder=SalespersonsEncoder,
                safe=False
            )
        except SalesPersons.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Salesperson ID"}
            )
    elif request.method == "DELETE":
        try:
            salesperson = SalesPersons.objects.get(id=id)
            salesperson.delete()
            return JsonResponse(
                salesperson,
                encoder=SalespersonsEncoder,
                safe=False
            )
        except SalesPersons.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Salesperson ID"}
            )
    else:
        try:
            content = json.loads(request.body)
            salesperson = SalesPersons.objects.get(id=id)
            props = ["first_name", "last_name", "employee_number"]
            for prop in props:
                if prop in content:
                    setattr(salesperson, prop, content[prop])
            salesperson.save()
            return JsonResponse(
                salesperson,
                encoder=SalespersonsEncoder,
                safe=False
            )
        except SalesPersons.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Salesperson ID"}
            )
# Get/Post for Customer
@require_http_methods(["GET", "POST"])
def api_list_customers(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerEncoder
        )
    else:
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder
        )

@require_http_methods(["DELETE", "GET", "PUT"])
def api_show_customer(request, id):
    if request.method == "GET":
        try:
            customer = Customer.objects.get(id=id)
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False
            )
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Customer ID"}
            )
    elif request.method == "DELETE":
        try:
            customer = Customer.objects.get(id=id)
            customer.delete()
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False
            )
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Customer ID"}
            )
    else:
        try:
            content = json.loads(request.body)
            customer = Customer.objects.get(id=id)
            props = ["first_name", "last_name", "phone_number"]
            for prop in props:
                if prop in content:
                    setattr(customer, prop, content[prop])
            customer.save()
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False
            )
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Customer ID"}
            )
