from django.db import models
from django.urls import reverse

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    import_href = models.CharField(max_length=200, unique=True, default="")

    def __str__(self):
        return self.vin

    def get_api_url(self):
        return reverse("api_automobilevo", kwargs={"vin": self.vin})

class SalesPersons(models.Model):
    name = models.CharField(max_length=255)
    employee_number = models.CharField(max_length=10, unique=True)

    def __str__(self):
        return f"{self.name} ({self.employee_number})"

    def get_api_url(self):
        return reverse("api_salespersons", kwargs={"pk": self.id})

class Customer(models.Model):
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=20)

    def __str__(self):
        return self.name

    def get_api_url(self):
        return reverse("api_customer", kwargs={"pk": self.id})

class Sale(models.Model):
    automobile = models.ForeignKey(AutomobileVO, on_delete=models.CASCADE)
    sales_person = models.ForeignKey(SalesPersons, on_delete=models.CASCADE)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    price = models.FloatField()
    date_sold = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.automobile} sold by {self.sales_person} to {self.customer} for ${self.price}"

    def get_api_url(self):
        return reverse("api_sale", kwargs={"pk": self.id})
