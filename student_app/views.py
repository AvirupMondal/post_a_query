from django.http.response import HttpResponse
from django.shortcuts import render, redirect
# Create your views here.
def login(request):
    return render(request,'login.html')
def student_register(request):
    return render(request,'student/student_registration.html')
def student_index(request):
    return render(request,'student/student_index.html')
def student_profile(request):
    return render(request,'student/student_profile.html')
def student_activity(request):
    return render(request,'student/student_activity.html')
def activity_details(request):
    return render(request,'student/activity_details.html')
def student_edit_profile(request):
    return render(request,'student/student_edit_profile.html')