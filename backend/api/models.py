from django.db import models

# Create your models here.
class CitySearchCount(models.Model):
    city = models.CharField(max_length=100, unique=True)
    count = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.city}: {self.count}"