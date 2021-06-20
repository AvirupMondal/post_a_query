from django.contrib import admin
from django.urls import path
from django.urls.conf import include
from . import views

urlpatterns = [
    path('', views.login, name='login'),
    path('teacher_register', views.teacher_register, name='teacher_register'),
    path('teacher_index', views.teacher_index, name='teacher_index'),
    path('teacher_profile', views.teacher_profile, name='teacher_profile'),
    path('teacher_edit_profile', views.teacher_edit_profile, name='teacher_edit_profile'),
]
