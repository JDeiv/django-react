from django.urls import path, include
from rest_framework import routers
from api import views
from rest_framework.documentation import include_docs_urls

router = routers.DefaultRouter()
router.register(r'product', views.ProductView, 'product')

urlpatterns = [
    path("v1/", include(router.urls)), #we use the rest framework to rute easily
    path('docs/', include_docs_urls(title="Crud API"))
]