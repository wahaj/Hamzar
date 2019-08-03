from rest_framework import serializers
from order.models import Order, OrderUnit


class OrderUnitSerializer(serializers.ModelSerializer):
	product = serializers.SerializerMethodField()

	class Meta:
		model = OrderUnit
		fields = ('quantity', 'status', 'product')


class OrderSerializer(serializers.ModelSerializer):
	products = OrderUnitSerializer(many=True, read_only=True, source='Order.product_set')

	class Meta:
		model = Order
		fields = ('id', 'created_at', 'products')
		list_display = ('title', 'author', 'slug', 'description', 'product_image', 'price', 'units_sold')
