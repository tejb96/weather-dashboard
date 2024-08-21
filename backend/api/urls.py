from django.urls import path
from .views import WeatherView

urlpatterns = [
    path('weather/<str:period>/<str:city>/', WeatherView.as_view()),
]
