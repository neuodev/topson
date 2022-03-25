from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('api/user/', include('user.urls')),

    # 3rd party
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
]
