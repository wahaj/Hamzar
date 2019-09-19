from rest_framework import generics
from oscar.apps.catalogue.models import Product

from oscar.apps.catalogue.reviews.models import ProductReview
from ..serializers.product import ProductReviewSerializer
from django.shortcuts import get_object_or_404


class ProductReviewList(generics.ListCreateAPIView):
	serializer_class = ProductReviewSerializer

	def get_queryset(self):
		product = get_object_or_404(Product, pk=self.kwargs['pk'])
		qs = product.reviews.all()
		return qs

	pass
