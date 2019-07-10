from django.urls import path

from .views import ProductDetailView

urlpatterns = [

    path('api/products/<int:pk>/', ProductDetailView.as_view(), name='ProductDetailView'),
    path('api/products/<slug>/', ProductDetailView.as_view(lookup_field='slug'), name='ProductDetailView'),
]