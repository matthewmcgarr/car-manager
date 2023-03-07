from django.db import models
from django.urls import reverse
# Create your models here.


# tech model
class Technician(models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.PositiveIntegerField()

    def __str__(self):
        return self.name

    def get_api_url(self):
        return reverse("api_technician", kwargs={"pk": self.id})

# appointment model
class Service(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    reason = models.TextField()
    appointment_time = models.DateTimeField()
    customer_name = models.CharField(max_length=200)
    completed = models.BooleanField(default=False)
    tech = models.ForeignKey(
        Technician,
        related_name="service",
        on_delete=models.CASCADE
    )

    def __str__(self):
        return self.vin

    def get_api_url(self):
        return reverse("api_appointment", kwargs={"pk": self.id})

# Automobile VO model
class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    import_href = models.CharField(max_length=200, unique=True)

    def get_api_url(self):
        return reverse("api_automobilevo", kwargs={"vin": self.vin})
