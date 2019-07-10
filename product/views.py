from django.shortcuts import render
from rest_framework import generics
from .models import Product
from .serializers import ProductSerializer
from rest_framework import permissions
from django.http import HttpResponse




class ProductDetailView(generics.RetrieveAPIView):
    permission_classes = (permissions.AllowAny,)

    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field='slug'



# def detail(request, slug): 
#     q = Product.objects.filter(slug__iexact = slug) 
#     if q.exists(): 
#        q = q.first() 
#     else: 
#        return HttpResponse('<h1>Book Not Found</h1>') 
#     context = { 
#        'product': q 
#     }
#     return render(request, 'posts/details.html', context) 