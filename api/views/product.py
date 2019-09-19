from rest_framework import generics
from oscar.apps.catalogue.models import Product
from oscarapi.serializers.product import ProductLinkSerializer
from oscar.apps.analytics.models import ProductRecord


class BestSellers(generics.ListAPIView):
	serializer_class = ProductLinkSerializer

	def get_queryset(self):
		products = Product.objects.all()
		records = ProductRecord.objects.all().order_by('-num_purchases')
		record_ids = records.values('product')

		filtered_products = products.filter(pk__in=record_ids)
		parent_ids = filtered_products.values('parent')
		return products.filter(pk__in=parent_ids, structure='parent').distinct()[:10]


class NewArrivals(generics.ListAPIView):
	serializer_class = ProductLinkSerializer

	def get_queryset(self):
		return Product.objects.all().order_by('-date_created').filter(structure='parent')[:10]


class Search(generics.ListAPIView):
	serializer_class = ProductLinkSerializer

	def get_queryset(self):
		query_string = self.kwargs['query']
		return Product.objects.all().filter(structure='parent', title__icontains=query_string)[:5]


class SearchCategory(generics.ListAPIView):
	serializer_class = ProductLinkSerializer

	def get_queryset(self):
		category = self.kwargs['category']
		return Product.objects.all().filter(structure='parent', category=category)

