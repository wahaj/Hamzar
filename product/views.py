from rest_framework import generics
from .models import Product
from .serializers import ProductSerializer
from rest_framework import permissions


class ProductList (generics.ListAPIView):
	permission_classes = (permissions.AllowAny,)

	queryset = Product.objects.all()
	serializer_class = ProductSerializer
	pass


class ProductReadUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
	permission_classes = (permissions.AllowAny,)
	queryset = Product.objects.all()
	lookup_field = 'slug'
	serializer_class = ProductSerializer
	pass


class ProductBestSellers(generics.ListAPIView):
	permission_classes = (permissions.AllowAny,)
	queryset = Product.objects.order_by('-units_sold')
	serializer_class = ProductSerializer
	pass


class ProductNewArrivals(generics.ListAPIView):
	permission_classes = (permissions.AllowAny,)
	queryset = Product.objects.order_by('-created_at')
	serializer_class = ProductSerializer
	pass
