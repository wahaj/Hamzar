from rest_framework import serializers
from .models import Product





class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        lookup_field='slug'
        fields = ('id', 'title' , 'author' , 'description')
        extra_field_kwargs = {'url': {'lookup_field':'slug'}}
        read_only_fields = ['product_image']

class ProductPicSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ('product_image')