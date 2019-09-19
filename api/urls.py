from django.urls import path
from .views import product, offer, review

urlpatterns = [
	path('products/best_sellers/', product.BestSellers.as_view(), name='best-sellers'),
	path('products/new_arrivals/', product.NewArrivals.as_view(), name='new-arrivals'),

	path('products/search/<str:query>/', product.Search.as_view(), name='search'),
	path('products/category/<str:category>', product.SearchCategory.as_view(), name='product-search-category'),

	path('products/<int:pk>/reviews/', review.ProductReviewList.as_view(), name='product-review-list'),

	path('offers/', offer.OfferListView.as_view())
]
