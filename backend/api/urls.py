from django.urls import path
from .views import *

urlpatterns = [
     path('weather/<str:city>/', WeatherView.as_view()),
]