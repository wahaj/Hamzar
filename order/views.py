from django.shortcuts import render
from rest_framework import generics, status, permissions
from order.serializers import OrderSerializer
from order.models import Order
# Create your views here.


class OrderList(generics.ListCreateAPIView):
	permission_classes = (permissions.IsAuthenticated,)

	def get_queryset(self):
		return Order.objects.filter(user=self.request.user)
	serializer_class = OrderSerializer
