from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):# desde serializer creamos un ModelSerializer
    class Meta:
       model = Product
       # fields = ('id', 'name', 'description', 'done') #manera manualde agregar los campos para convertirlos a JSon
       fields = '__all__' #manera automatica para añadir todos los campos directamente
       #es fields nofield

       #Serializers convert the attributes to JSON and vise versa using rest_framework directly to don't doing by hand