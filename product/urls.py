from django.urls import path

from django.conf.urls.static import static
from django.conf import settings

from .views import ProductReadUpdateDelete, ProductList, ProductBestSellers, ProductNewArrivals

urlpatterns = [
	# Product List Endpoint
	path('api/products/', ProductList.as_view(), name='product_list_view'),

	# Product Filtered List Endpoint
	path('api/products/best_sellers', ProductBestSellers.as_view(), name='product_best_sellers'),
	path('api/products/new_arrivals', ProductNewArrivals.as_view(), name='product_new_arrivals'),

	# Product Lookup Endpoint
	path('api/products/<slug>', ProductReadUpdateDelete.as_view(lookup_field='slug'), name='product_detail_view'),


] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
