from django.shortcuts import render
import requests

def index(request):
    url = 'https://www.bankier.pl/gielda/notowania/akcje'
    page = requests.get(url)
    return render(request, 'app/index.html', {'data': page.text})
