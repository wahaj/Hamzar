from django.urls import path
from order.views import OrderList

urlpatterns = [
	path('api/orders/', OrderList.as_view(), name="order_list")
]