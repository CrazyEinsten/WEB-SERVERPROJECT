# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.http import HttpResponse
from django.shortcuts import render
import json

from Vote.models import *

# Create your views here.

def index(request):
    return render(request,'hello')

def VoteUI(request):
    aimReturn = {   }
    JsonResponse()

def RuleUI(request):
    aimReturn = {   }
    JsonResponse()

def MainUI(request):
    aimReturn = {   }
    JsonResponse()

def Voting(request):
    tmpName = request.GET.get('name')
    ip = request.GET.get('IP')
    result = VoteUsr.object.get_or_create(IP = ip)
    if result[1] == True:
        aimGirl = PrettyGirl.object.get(name = tmpName)
        aimGirl.ballot += 1
        aimGirl.save()
        ReResult = {result:'success'}
        JsonResponse(ReResult)
    else:
        FaResult = {result:'faild'}
        JsonResponse(FaResult)
