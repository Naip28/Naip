from django.shortcuts import render

def helloworld(request):
    return render(request, 'helloworld.html')

def rock(request):
    return render(request, 'rock.html')\

def gorin(request):
    return render(request, 'gorin.html')

def reg(request):
    return render(request, 'reg.html')

def vxod(request):
    return render(request, 'vxod.html')

