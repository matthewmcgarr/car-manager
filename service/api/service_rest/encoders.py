from common.json import ModelEncoder
from .models import AutomobileVO, Technician, Service

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "id",
        "name",
        "employee_number",
    ]


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "id",
        "vin",
        "import_href",
    ]


class ServiceEncoder(ModelEncoder):
    model = Service
    properties = [
        "id",
        "vin",
        "reason",
        "appointment_time",
        "customer_name",
        "completed",
        "vip",
        "technician",
        ]

    encoders = {
        "technician": TechnicianEncoder(),
    }
