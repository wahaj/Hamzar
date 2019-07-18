from django.urls import path

from django.conf.urls.static import static
from django.conf import settings

from .views import ProductReadUpdateDelete, ProductList

urlpatterns = [
    path('api/products/', ProductList.as_view(), name='product_list_view'),
    path('api/products/<slug>', ProductReadUpdateDelete.as_view(lookup_field='slug'), name='product_detail_view'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
