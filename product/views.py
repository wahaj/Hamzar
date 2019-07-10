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



class ProductReadUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.AllowAny,)

    # def get_object(self):
    #     obj = super().get_object()
    #     return obj

    serializer_class = ProductSerializer
    pass