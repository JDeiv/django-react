# backend/Dockerfile

# Usa una imagen oficial de Python como base
FROM python:3.12.6-alpine

# Establecer el directorio de trabajo en /app
WORKDIR /app

RUN apk add --no-cache gcc musl-dev libffi-dev 
# Copiar el archivo de requisitos
COPY requirements.txt .

# Instalar las dependencias del backend
RUN pip install --no-cache-dir -r requirements.txt

# Copiar todo el proyecto al contenedor
COPY . .

# Exponer el puerto donde Django correrá (generalmente 8000)
EXPOSE 8000

# Correr las migraciones y levantar el servidor de desarrollo de Django
CMD ["sh", "-c", "python manage.py migrate --noinput && python manage.py runserver 0.0.0.0:8000"]