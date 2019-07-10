from django.contrib import admin
from .models import Product
from django.utils.translation import ugettext_lazy as _

# Register your models here.
@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    """Define admin model for custom User model with no username field."""

    fieldsets = (
        (None, {'fields': ('title', 'author', 'description')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('title', 'author', 'description'),
        }),
    )
    list_display = ('title', 'author','slug', 'description')
    search_fields = ('title','author')
    ordering = ('title',)