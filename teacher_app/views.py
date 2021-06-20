from django.http.response import HttpResponse
from django.shortcuts import render, redirect
# Create your views here.
def login(request):
    return render(request,'login.html')
def teacher_register(request):
    return render(request,'teacher/teacher_registration.html')
def teacher_index(request):
    return render(request,'teacher/teacher_index.html')
def teacher_profile(request):
    return render(request,'teacher/teacher_profile.html')
def teacher_edit_profile(request):
    return render(request,'teacher/teacher_edit_profile.html')
