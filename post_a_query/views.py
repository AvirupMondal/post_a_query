from django.http.response import HttpResponse
from django.shortcuts import render, redirect
# Create your views here.
def login(request):
    return render(request,'login.html')
def register(request):
    return render(request,'registration.html')
def forget_password(request):
    return render(request,'forget_password.html')
