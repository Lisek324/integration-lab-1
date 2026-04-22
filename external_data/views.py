from django.shortcuts import render
import requests


def weather_view(request):
    url = 'https://api.open-meteo.com/v1/forecast'
    params = {
        'latitude': 52.2297,  #  Szerokość geografic
        'longitude': 21.0122, #  Długość geograficzna
        'current_weather': True
    }

    response = requests.get(url, params=params, timeout=10)
    data = response.json()

    context = {
        'weather': data.get('current_weather'),
        'latitude': data.get('latitude'),
        'longitude': data.get('longitude'),
    }

    return render(request, 'weather.html', context)
