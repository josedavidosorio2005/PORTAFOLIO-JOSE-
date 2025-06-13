import os
import sys
from pathlib import Path

# Verificar si hay PDFs en la carpeta de certificados
certificados_folder = Path("certificados")
pdfs = list(certificados_folder.glob("*.pdf"))

print(f"Certificados encontrados: {len(pdfs)}")
for pdf in pdfs:
    print(f"- {pdf.name}")

# Crear carpeta para imágenes
images_folder = certificados_folder / "images"
images_folder.mkdir(exist_ok=True)

print(f"\nCarpeta de imágenes creada: {images_folder}")

# Instrucciones para el usuario
print("""
INSTRUCCIONES PARA CONVERTIR PDFs A IMÁGENES:

1. Instala pdf2image (si no lo tienes):
   pip install pdf2image pillow

2. También necesitas poppler-utils:
   - Windows: Descargar de https://github.com/oschwartz10612/poppler-windows/releases
   - Agregar a PATH o especificar ruta

3. Ejecuta este script de nuevo después de instalar las dependencias.

Por ahora, vamos a usar imágenes placeholder que se parezcan a certificados de Platzi.
""")

# Mapeo de certificados con colores de Platzi
certificados_info = {
    "diploma-ciberseguridad-personal": {
        "color": "00d9ff",
        "icon": "🔐",
        "area": "CIBERSEGURIDAD"
    },
    "diploma-ciberseguridad-whatsapp": {
        "color": "25d366", 
        "icon": "💬",
        "area": "SEGURIDAD DIGITAL"
    },
    "diploma-computacion-basica": {
        "color": "98ca3f",
        "icon": "💻",
        "area": "FUNDAMENTOS"
    },
    "diploma-dbsql": {
        "color": "ff6b6b",
        "icon": "🗄️",
        "area": "BASES DE DATOS"
    },
    "diploma-estrategias-ingles": {
        "color": "4ecdc4",
        "icon": "🌍",
        "area": "IDIOMAS"
    },
    "diploma-guia-seguridad-informatica": {
        "color": "fd79a8",
        "icon": "🛡️",
        "area": "CIBERSEGURIDAD"
    },
    "diploma-ingenieria2017": {
        "color": "6c5ce7",
        "icon": "⚙️",
        "area": "INGENIERÍA"
    },
    "diploma-ingenieria-social": {
        "color": "e17055",
        "icon": "🎭",
        "area": "HACKING ÉTICO"
    },
    "diploma-ingles-a1-principiantes": {
        "color": "0984e3",
        "icon": "🇺🇸",
        "area": "INGLÉS A1"
    },
    "diploma-intro-ciberseguridad-empresas": {
        "color": "74b9ff",
        "icon": "🏢",
        "area": "SEGURIDAD EMPRESARIAL"
    },
    "diploma-java-basico": {
        "color": "f39c12",
        "icon": "☕",
        "area": "PROGRAMACIÓN JAVA"
    },
    "diploma-pensamiento-logico-estructuras": {
        "color": "9b59b6",
        "icon": "🧠",
        "area": "LÓGICA & ESTRUCTURAS"
    },
    "diploma-pensamiento-logico-lenguajes": {
        "color": "2d3436",
        "icon": "💭",
        "area": "LÓGICA & LENGUAJES"
    },
    "diploma-python": {
        "color": "3776ab",
        "icon": "🐍",
        "area": "PROGRAMACIÓN PYTHON"
    },
    "diploma-python-fundamentos": {
        "color": "ffd43b",
        "icon": "🔧",
        "area": "FUNDAMENTOS PYTHON"
    },
    "diploma-taller-ciberseguridad": {
        "color": "e84393",
        "icon": "🔬",
        "area": "TALLER CIBERSEGURIDAD"
    }
}

# Generar URLs de imágenes placeholder estilo Platzi
for cert_name, info in certificados_info.items():
    url = f"https://via.placeholder.com/400x300/{info['color']}/ffffff?text={info['icon']}+{info['area'].replace(' ', '+')}%0A%0AJOSÉ+DAVID+OSORIO+GALLEGO%0A%0APLATZI"
    print(f"{cert_name}: {url}")
