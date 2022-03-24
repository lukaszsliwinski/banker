from django.db import models

class StockQuotes(models.Model):
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=100)
    price = models.CharField(max_length=100)
    date = models.CharField(max_length=100)

    def __str__(self):
        return self.name