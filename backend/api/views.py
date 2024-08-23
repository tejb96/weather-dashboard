from django.conf import settings
import requests
from rest_framework.response import Response
from rest_framework.views import APIView
from urllib.parse import quote
from django.db.models import F  
from .models import CitySearchCount

class WeatherView(APIView):
    def get(self, request, city, period):
        api_key = settings.WEATHER_API_KEY
        city_encoded = quote(city)  # Handles spaces and special characters in city names
        # print(city,period)
        unit = request.GET.get('unit')

        # print(f"Unit: {unit}")

        url = f"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/{city_encoded}/{period}?unitGroup={unit}&key={api_key}&contentType=json"
        
        # print(f"Request URL: {url}")
        response = requests.get(url)
        if response.status_code == 200:

            # Record city searched if the city name is valid
            obj, created = CitySearchCount.objects.get_or_create(city=city)
            print(obj)
            if not created:
                obj.count = F('count') + 1
                obj.save()
                # print(obj)
            else:
                obj.count = 1  # Initialize count to 1 if it's a new record
                obj.save()
                # print(obj)
            return Response(response.json())
        else:
            return Response({"error": "City not found or other error"}, status=response.status_code)


class CitySearchStatsView(APIView):
    def get(self, request):
        stats = CitySearchCount.objects.order_by('-count')[:10]  # Top 10 searches
        data = [{"city": item.city, "count": item.count} for item in stats]
        print(data)
        return Response(data)