# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import random
import json
from models import Usr
from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

def register(request):
    return render(request, 'register.html')

def login(request):
    return render(request, 'index.html')

@csrf_exempt
def regist(request):
    usrname = request.POST.get('usrname')
    passwd = request.POST.get('passwd')
    rdmmark = int(random.random() * 100)
    result = Usr.objects.get_or_create(name = usrname)
    if result[1] == True:
        result[0].passwd = passwd
        result[0].mark = rdmmark
        result[0].isPre = 0
        result[0].save()
        return JsonResponse({'isokey':'True'})
    else:
        return JsonResponse({'isokey':'False'})

@csrf_exempt
def index(request):
    usrname = request.POST.get('usrname')
    passwd = request.POST.get('passwd')
    result = Usr.objects.filter(name = usrname)
    if result.exists():
        return render(request, 'main.html', {'usrname':json.dumps(usrname)})
    else:
        return JsonResponse({'isokey':'False'})

@csrf_exempt
def marksearch(request):
    usrname = request.POST.get('usrname')
    mark = Usr.objects.get(name = usrname).mark
    return JsonResponse(mark)

@csrf_exempt
def pre(request):
    usrname = request.POST.get('usrname')
    pre = request.POST.get('pre')
    result = Usr.objects.get(name = usrname)
    tmp = result.pre
    if tmp == 0:
        result.pre = int(pre)
        result.save()
        JsonResponse('True')
    else:
        JsonResponse('False')

@csrf_exempt
def presearch(request):
    usrname = request.POST.get('usrname')
    result = Usr.objects.get(name = usrname)
    pre = result.pre
    return JsonResponse(pre)



