from django.contrib import admin
from .models import Product
from django.utils.translation import ugettext_lazy as _

# Register your models here.
# @admin.register(Product)
# class ProductAdmin(admin.ModelAdmin):
#     """Define admin model for custom User model with no username field."""

#     fieldsets = (
#         (None, {'fields': ('title', 'author', 'description' , 'product_image')}),
#     )
#     add_fieldsets = (
#         (None, {
#             'classes': ('wide',),
#             'fields': ('title', 'author', 'description', 'product_image'),
#         }),
#     )
#     list_display = ('title', 'author','slug', 'description', 'images')
#     search_fields = ('title','author')
#     ordering = ('title',)