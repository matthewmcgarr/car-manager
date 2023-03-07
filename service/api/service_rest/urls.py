from django.contrib import admin
from django.urls import path
from service_rest.views import api_list_automobiles, api_list_services, api_list_technicians, api_show_service, api_show_technician

urlpatterns = [
    path("services/", api_list_services, name="api_list_services"),
    path("services/<int:id>/", api_show_service, name="api_show_service"),
    path("technicians/", api_list_technicians, name="api_list_technicians"),
    path("technicians/<int:id>/", api_show_technician, name="api_show_technician"),
    path("automobiles/", api_list_automobiles, name="api_list_automobiles"),

]
