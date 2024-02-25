from . import views
from django.urls import path


urlpatterns = [
    path('', views.helloworld, name='helloworld'),
    path('gg/', views.rock, name='rock')
]