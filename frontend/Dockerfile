# frontend/Dockerfile

# Usa una imagen oficial de Node.js como base
FROM node:18-alpine

# Establecer el directorio de trabajo en /app
WORKDIR /app

# Copiar los archivos de configuración
COPY package*.json ./

# Instalar las dependencias del frontend
RUN npm install

# Copiar todo el código del proyecto al contenedor
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Exponer el puerto donde la aplicación se servirá (generalmente 3000)
EXPOSE 5173

# Ejecutar la aplicación
CMD ["npm", "run", "dev"]
