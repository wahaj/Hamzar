from rest_framework import serializers
from .models import Product, ProductImage





# class ProductSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = Product
#         lookup_field='slug'
#         fields = ('id', 'title' , 'author' , 'description' , 'product_image')
#         extra_field_kwargs = {'url': {'lookup_field':'slug'}}
#         # read_only_fields = ['product_image']

# class CreateProductSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = Product
#         fields = ('title' , 'author' , 'description' , 'product_image')
class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ('image',)

class ProductSerializer(serializers.HyperlinkedModelSerializer):
    images = ProductImageSerializer(source='image_set', many=True, read_only=True)

    class Meta:
        model = Product
        fields = ('id', 'title', 'author', 'description' , 'images')

    def create(self, validated_data):
        images_data = self.context.get('view').request.FILES
        product = Product.objects.create(title=validated_data.get('title', 'no-title'),product_id=1)
        for image_data in images_data.values():
            ProductImage.objects.create(product=product, image=image_data)
        return product

class CreateProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ('title' , 'author' , 'description' )