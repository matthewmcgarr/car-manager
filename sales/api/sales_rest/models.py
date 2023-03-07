from django.db import models


class AutomobileVO(models.Model):
    color = models.CharField(max_length=50)
    year = models.PositiveSmallIntegerField()
    vin = models.CharField(max_length=17, unique=True)
    model_name = models.CharField(max_length=100)

    def __str__(self):
        return self.vin

class SalesPersons(models.Model):
    name = models.CharField(max_length=255)
    employee_number = models.CharField(max_length=10, unique=True)

    def __str__(self):
        return f"{self.name} ({self.employee_number})"


class Customer(models.Model):
    name = models.CharField(max_length=255)
    address = models.TextField()
    phone_number = models.CharField(max_length=20)

    def __str__(self):
        return self.name


class Automobile(models.Model):
    make = models.CharField(max_length=255)
    model = models.CharField(max_length=255)
    year = models.IntegerField()
    vin = models.CharField(max_length=17, unique=True)

    def __str__(self):
        return f"{self.make} {self.model} ({self.year})"


class Sale(models.Model):
    automobile = models.ForeignKey(Automobile, on_delete=models.CASCADE)
    sales_person = models.ForeignKey(SalesPersons, on_delete=models.CASCADE)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    date_sold = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.automobile} sold by {self.sales_person} to {self.customer} for ${self.price}"
