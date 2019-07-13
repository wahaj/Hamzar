from django.shortcuts import render
from rest_framework import generics
from .models import Product
from .serializers import ProductSerializer, ProductPicSerializer
from rest_framework import permissions
from django.http import HttpResponse
from rest_framework import parsers
from rest_framework import response
from rest_framework import status
from rest_framework import viewsets


class ProductReadUpdateDelete(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    queryset = Product.objects.all()
    lookup_field='slug'
    serializer_class = ProductSerializer

    @decorators.action(
        detail=True,
        methods=['PUT'],
        serializer_class=ProductPicSerializer,
        parser_classes=[parsers.MultiPartParser],
    )
    def pic(self, request, pk):
        obj = self.get_object()
        serializer = self.serializer_class(obj, data=request.data,
                                           partial=True)
        if serializer.is_valid():
            serializer.save()
            return response.Response(serializer.data)
        return response.Response(serializer.errors,
                                 status.HTTP_400_BAD_REQUEST)

    pass