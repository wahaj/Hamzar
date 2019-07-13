from django.urls import path

from django.conf.urls.static import static
from django.conf import settings

from .views import ProductReadUpdateDelete , ProductCreate

urlpatterns = [

    path('api/products/', ProductCreate.as_view(), name='ProductCreate'),
    # path('api/product/', ProductsRead.as_view(), name='ProductsRead'),
    path('api/products/<slug>/', ProductReadUpdateDelete.as_view(lookup_field='slug'), name='ProductDetailView'),
] + static(settings.MEDIA_URL , document_root=settings.MEDIA_ROOT)