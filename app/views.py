from django.shortcuts import render
import requests
from bs4 import BeautifulSoup
from datetime import datetime
from .models import StockQuotes

def index(request):
    url = 'https://www.bankier.pl/gielda/notowania/akcje'
    page = requests.get(url)

    soup = BeautifulSoup(page.content, 'html.parser')
    walors = soup.find_all('td', class_='colWalor')
    prices = soup.find_all('td', class_='colKurs')
    data = []

    StockQuotes.objects.all().delete()

    for walor, price in zip(walors, prices):
        
        name = walor.find('a').get('title')
        code = walor.find('a').text
        price = price.text
        date = datetime.now().strftime('%H:%M:%S %Y-%m-%d')
        
        stock_quotes = StockQuotes(name=name, code=code, price=price, date=date)
        stock_quotes.save()
        
        data.append([name, code, price, date])

    return render(request, 'app/index.html', {'data': data})