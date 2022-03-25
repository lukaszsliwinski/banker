from django.shortcuts import render
import requests
from bs4 import BeautifulSoup
from datetime import datetime
from .models import StockQuotes

def index(request):
    # import data from website
    url = 'https://www.bankier.pl/gielda/notowania/akcje'
    page = requests.get(url)

    # create object with 
    soup = BeautifulSoup(page.content, 'html.parser')

    # find walors and prices
    walors = soup.find_all('td', class_='colWalor')
    prices = soup.find_all('td', class_='colKurs')

    # clear database
    StockQuotes.objects.all().delete()

    # create list for data
    data = []
    for walor, price in zip(walors, prices):
        # get content from tags
        name = walor.find('a').get('title')
        code = walor.find('a').text
        price = price.text

        # get actual date
        date = datetime.now().strftime('%H:%M:%S %Y-%m-%d')
        
        # send data to database
        stock_quotes = StockQuotes(name=name, code=code, price=price, date=date)
        stock_quotes.save()
        
        # add row of data to list
        data.append([name, code, price, date])

    return render(request, 'app/index.html', {'data': data})