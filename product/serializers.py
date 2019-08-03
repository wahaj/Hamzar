from rest_framework import serializers
from .models import Product


class ProductSerializer(serializers.ModelSerializer):

	class Meta:
		model = Product
		lookup_field = 'slug'
		fields = ('slug', 'units_sold', 'title', 'author', 'description', 'product_image', 'price', 'num_in_stock')
		extra_field_kwargs = {'url': {'lookup_field': 'slug'}}
		# read_only_fields = ['product_image']

#
# class ProductReadSerializer(serializers.ModelSerializer):
#
# 	class Meta:
# 		model = Product
# 		lookup_field = 'slug'
# 		fields = ('slug', 'title', 'author', 'description', 'product_image', 'units_sold')
# 		extra_field_kwargs = {'url': {'lookup_field': 'slug'}}
# 		pass
# 	pass
