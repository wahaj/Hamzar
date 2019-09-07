from django.urls import path
from .views import product,offer

urlpatterns = [
	path('products/best_sellers/', product.BestSellers.as_view(), name='best-sellers'),
	path('products/new_arrivals/', product.NewArrivals.as_view(), name='new-arrivals'),
	path('products/search/<str:query>/', product.Search.as_view(), name='search'),

	path('offers/', offer.OfferListView.as_view())
]
