from django.db import models

class Products(models.Model):
    id = models.PositiveIntegerField(primary_key=True)
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=7, decimal_places=2)
    thumbnail = models.URLField(blank=True)

    def __str__(self):
        return f"{self.id}: {self.name}"
