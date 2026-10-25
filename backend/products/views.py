from django.http import JsonResponse
from .models import Products

def product_list(request):
    products = list(Products.objects.values())

    return JsonResponse(products, safe=False)
