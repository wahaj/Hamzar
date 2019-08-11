from django import http

from rest_framework import generics
from . import product

from oscar.apps.catalogue.models import Product
from oscar.apps.offer.views import OfferListView


class DiscountedProducts(generics.ListAPIView):
	serializer_class = product.ProductLinkSerializer

	def get_queryset(self):
		return OfferListView.get_queryset()