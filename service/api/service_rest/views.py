from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder

from .models import AutomobileVO, Technician, Service
# Create your views here.

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "id",
        "name",
        "employee_number",
    ]


class ServiceEncoder(ModelEncoder):
    model = Service
    properties = [
        "id",
        "reason",
        "appointment_time",
        "customer_name",
        "completed",
        "tech",
        ]

    encoders = {
        "tech": TechnicianEncoder(),
    }


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "id",
        "vin",
        "import_href",
    ]

# Get/Post for Technician
@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder
        )
    else:
        content = json.loads(request.body)
        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder
        )

# Delete/Get/Put for Technician
@require_http_methods(["DELETE", "GET", "PUT"])
def api_show_technician(request, id):
    if request.method == "GET":
        try:
            technician = Technician.objects.get(id=id)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False
            )
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Tech ID"}
            )
    elif request.method == "DELETE":
        try:
            technician = Technician.objects.get(id=id)
            technician.delete()
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False
            )
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Tech ID"}
            )
    else:
        try:
            content = json.loads(request.body)
            technician = Technician.objects.get(id=id)
            props = ["name", "employee_number"]
            for prop in props:
                if prop in content:
                    setattr(technician, prop, content[prop])
            technician.save()
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False
            )
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Tech ID"}
            )

# Get/Post for Service
@require_http_methods(["GET", "POST"])
def api_list_services(request):
    if request.method == "GET":
        services = Service.objects.all()
        return JsonResponse(
            {"services": services},
            encoder=ServiceEncoder
        )
    else:
        content = json.loads(request.body)


# Delete/Get/Put for Service
@require_http_methods(["DELETE", "GET", "PUT"])
def api_show_service(request, id):
    if request.method == "GET":
        try:
            service = Service.objects.get(id=id)
            return JsonResponse(
                service,
                encoder=ServiceEncoder,
                safe=False
            )
        except Service.DoesNotExist:
            response = JsonResponse({"message": "Service does not Exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            service = Service.objects.get(id=id)
            service.delete()
            return JsonResponse(
                service,
                encoder=ServiceEncoder,
                safe=False,
            )
        except Service.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})
    else:
        try:
            content = json.loads(request.body)
            service = Service.objects.get(id=id)
            props = ["reason", "appointment_date", "customer_name", "completed", "tech",]
            for prop in props:
                if prop in content:
                    setattr(service, prop, content[prop])
            service.save()
            return JsonResponse(
                service,
                encoder=ServiceEncoder,
                safe=False,
            )
        except Service.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response

# Get Automobiles
@require_http_methods(["GET", ])
def api_list_automobiles(request):
    if request.method == "GET":
        automobiles = AutomobileVO.objects.all()
        return JsonResponse(
            {"automobiles": automobiles},
            encoder=AutomobileVO
        )
