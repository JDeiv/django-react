from django.db import models

# Create your models here.


class Product(models.Model):
    name = models.CharField(max_length=100) #atributo tipo Varchar de 100 caracteres
    description = models.TextField(blank=True) #atributo tipo varchar (campode texto) vacio por default no requiere datos obligatorios
    #done = models.BooleanField(default=False) #atributo tipo booleano por defecto False
    price = models.DecimalField(max_digits=10, decimal_places=2,default='') #atributo tipo decimal

    def __str__(self):
        return self.name  #este codigo muestra el atributo nombre de la base de datos enel frontend
    
    