from django.shortcuts import render
from rest_framework import generics
from .models import Product
from .serializers import ProductSerializer , CreateProductSerializer
from rest_framework import permissions
from django.http import HttpResponse
from rest_framework import parsers
from rest_framework import response
from rest_framework import status



class ProductCreate (generics.CreateAPIView):
    permission_classes = (permissions.AllowAny,)

    queryset = Product.objects.all()
    serializer_class = CreateProductSerializer
    pass


class ProductReadUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Product.objects.all()
    lookup_field='slug'
    serializer_class = ProductSerializer
    pass