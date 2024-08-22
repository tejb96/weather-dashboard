from django.urls import path
from .views import WeatherView

urlpatterns = [
    path('weather/<str:city>/<str:period>/', WeatherView.as_view()),
]
