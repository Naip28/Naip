from django.shortcuts import render

def helloworld(request):
    return render(request, 'helloworld.html')

def rock(request):
    return render(request, 'rock.html')