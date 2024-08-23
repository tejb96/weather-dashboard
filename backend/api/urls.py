from django.urls import path
from .views import WeatherView, CitySearchStatsView

urlpatterns = [
    path('weather/<str:city>/<str:period>/', WeatherView.as_view()),
    path('search-stats/', CitySearchStatsView.as_view()),
]
