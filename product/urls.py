from django.urls import path

from .views import ProductReadUpdateDelete

urlpatterns = [

    path('api/products/<slug>/', ProductReadUpdateDelete.as_view(lookup_field='slug'), name='ProductDetailView'),

]