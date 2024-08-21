from django.conf import settings
import requests
from rest_framework.response import Response
from rest_framework.views import APIView
from urllib.parse import quote

class WeatherView(APIView):
    def get(self, request, city, period):
        api_key = settings.WEATHER_API_KEY
        city_encoded = quote(city)  # Handles spaces and special characters in city names
        print(city,period)
        url = f"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/{city_encoded}/{period}?unitGroup=metric&key={api_key}&contentType=json"
        response = requests.get(url)
        if response.status_code == 200:
            return Response(response.json())
        else:
            return Response({"error": "City not found or other error"}, status=response.status_code)
