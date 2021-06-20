from django.contrib import admin
from django.urls import path
from django.urls.conf import include
from . import views

urlpatterns = [
    path('', views.login, name='login'),
    path('student_register', views.student_register, name='student_register'),
    path('student_index', views.student_index, name='student_index'),
    path('student_profile', views.student_profile, name='student_profile'),
    path('student_activity', views.student_activity, name='student_activity'),
    path('activity_details', views.activity_details, name='activity_details'),
    path('student_edit_profile', views.student_edit_profile, name='student_edit_profile'),
]
