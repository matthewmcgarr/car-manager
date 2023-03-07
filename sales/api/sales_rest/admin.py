from django.contrib import admin


from .models import Sale,SalesPersons,AutomobileVO,Customer


@admin.register(SalesPersons)
class SalesPersonsAdmin(admin.ModelAdmin):
    pass


@admin.register(AutomobileVO)
class AutomobileVOAdmin(admin.ModelAdmin):
    pass


@admin.register(Sale)
class SaleAdmin(admin.ModelAdmin):
    pass


@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    pass
