from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .models import Customer,Sale,SalesPersons, AutomobileVO
from .encoders import SaleEncoder, SalesPersonsEncoder, CustomerEncoder



#Get/Post for Salesperson
@require_http_methods(["GET", "POST"])
def api_list_salespeople(request):
    if request.method == "GET":
        salespeople = SalesPersons.objects.all()
        return JsonResponse(
            {"salespeople": salespeople},
            encoder=SalesPersonsEncoder
        )
    else:
        try:
            content = json.loads(request.body)
            salesperson = SalesPersons.objects.create(**content)
            return JsonResponse(
                salesperson,
                encoder=SalesPersonsEncoder,
                safe=False
            )
        except:
            return JsonResponse(
                {"message": "Invalid data"},
                status=404
            )


# Delete/Get/Put for Salesperson
@require_http_methods(["DELETE", "GET", "PUT"])
def api_show_salesperson(request, id):
    if request.method == "GET":
        try:
            salesperson = SalesPersons.objects.get(id=id)
            return JsonResponse(
                salesperson,
                encoder=SalesPersonsEncoder,
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
                encoder=SalesPersonsEncoder,
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
                encoder=SalesPersonsEncoder,
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
        try:
            content = json.loads(request.body)
            customer = Customer.objects.create(**content)
            return JsonResponse(
                customer,
                encoder=CustomerEncoder
            )
        except:
            return JsonResponse(
                {"error": "Failed to create customer record."},
                status=400
            )
# Get/DELETE/PUT for Customer
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

# Get/Post for Sales
@require_http_methods(["GET", "POST"])
def api_list_sales(request):
    if request.method == "GET":
        sales = Sale.objects.all()
        return JsonResponse(
            {"sales": list(sales)},
            encoder=SaleEncoder,
            safe=False
        )
    else: # POST request
        try:
            content = json.loads(request.body)
            automobile_vin = content["automobile"]
            sales_person_id = content["salesperson"]
            customer_id = content["customer"]
            price = content["price"]
            automobile = AutomobileVO.objects.get(vin=automobile_vin)
            sales_person = SalesPersons.objects.get(id=sales_person_id)
            customer = Customer.objects.get(id=customer_id)
            sale = Sale.objects.create(
                automobile=automobile,
                sales_person=sales_person,
                customer=customer,
                price=price
            )
            return JsonResponse(
                {"sale": sale},
                encoder=SaleEncoder,
                safe=False
            )
        except (ValueError, KeyError, Sale.DoesNotExist, AutomobileVO.DoesNotExist, SalesPersons.DoesNotExist, Customer.DoesNotExist):
            return JsonResponse(
                {"message": "Invalid data provided"},
                status=400,
                safe=False
            )

# Get/PUT,DELETE for Sales
@require_http_methods(["GET", "PUT", "DELETE"])
def api_show_sale(request, id):
    if request.method == "GET":
        try:
            sale = Sale.objects.get(id=id)
            return JsonResponse(
                sale,
                encoder=SaleEncoder,
                safe=False
            )
        except Sale.DoesNotExist:
            return JsonResponse(
                {"message": "Sale not found."},
                status=404
            )
    elif request.method == "PUT":
        try:
            content = json.loads(request.body)
            sale = Sale.objects.get(id=id)
            sale.price = content['price']
            sale.save()
            return JsonResponse(
                sale,
                encoder=SaleEncoder,
                safe=False
            )
        except Sale.DoesNotExist:
            return JsonResponse(
                {"message": "Sale not found."},
                status=404
            )
    elif request.method == "DELETE":
        try:
            sale = Sale.objects.get(id=id)
            sale.delete()
            return JsonResponse(
                {"message": "Sale deleted."},
                status=204
            )
        except Sale.DoesNotExist:
            return JsonResponse(
                {"message": "Sale not found."},
                status=404
            )
