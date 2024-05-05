from . import views
from django.urls import path


urlpatterns = [
    path('', views.helloworld, name='helloworld'),
    path('gg/', views.rock, name='rock'),
    path('gorin/', views.gorin, name='gorin'),
    path('reg/', views.reg, name='reg'),
    path('vxod/', views.vxod, name='vxod'),
]