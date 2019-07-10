from django.db.models import Max, Min
from rest_framework import serializers

from restshop.api.product.models import Product
from restshop.api.tag.serializers import TagSerializer
from restshop.api.unit.serializers import UnitSerializer




class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ('id', 'title', 'author' , 'tags', 'description', 'units')