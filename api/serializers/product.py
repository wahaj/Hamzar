from oscarapi.serializers.utils import OscarModelSerializer
from oscar.apps.catalogue.reviews.models import ProductReview
from rest_framework import serializers


class ProductReviewSerializer(OscarModelSerializer):

	class Meta:
		model = ProductReview
		fields = '__all__'
