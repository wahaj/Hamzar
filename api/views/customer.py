from rest_framework import permissions
from oscarapi.views.admin import user


class UserDetail(user.UserDetail):
    permission_classes = (permissions.AllowAny,)
    pass
