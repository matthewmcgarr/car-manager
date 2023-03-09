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
        "date",
        "time",
        "customer_name",
        "completed",
        "vip",
        "technician",
        ]

    def default(self, obj):
        if isinstance(obj, Service):
            obj_dict = super().default(obj)
            obj_dict['date'] = obj.date.strftime("%Y-%m-%d")
            obj_dict['time'] = obj.time.strftime("%H:%M:%S")
            return obj_dict
        else:
            return super().default(obj)


    encoders = {
        "technician": TechnicianEncoder(),
    }
