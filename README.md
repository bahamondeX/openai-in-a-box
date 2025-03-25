# OpenAI In a Box

![alt text](image.png)

## 🌟 Visión General

**OpenAI In a Box** es una implementación avanzada de una API compatible con OpenAI, diseñada para ejecutarse en la nube de AWS con soporte para múltiples endpoints esenciales en inteligencia artificial generativa.

Este proyecto proporciona una solución **autoalojada y escalable**, ideal para desarrolladores, startups y empresas que desean aprovechar modelos de IA de vanguardia sin depender de proveedores externos.

## ✨ Características Clave

- **100% compatible con OpenAI API**, facilitando la integración con aplicaciones existentes.
- **Ejecución en AWS**, optimizada para alto rendimiento y escalabilidad.
- **Modelos de última generación**, con soporte para lenguaje, imágenes, audio y búsqueda vectorial.
- **Infraestructura basada en Docker**, lo que permite una implementación rápida y reproducible.
- **Código abierto y extensible**, fomentando la innovación y contribuciones de la comunidad.

## 🌐 Endpoints Soportados

| Endpoint               | Descripción |
|------------------------|-------------|
| `/models`              | Listado de modelos disponibles. |
| `/completions`         | Generación de texto. |
| `/chat/completions`    | Chat interactivo con IA. |
| `/embeddings`          | Representaciones vectoriales para búsqueda semántica. |
| `/audio`               | Procesamiento de audio (TTS y STT). |
| `/images`              | Generación, edición y variaciones de imágenes. |
| `/files`               | Gestión de archivos. |
| `/vector_stores`       | Indexación y recuperación eficiente de datos. |
| `/search` 🌟 Nuevo  | Búsqueda semántica avanzada. |

## 🔬 Modelos Soportados

### 🌐 **Modelos de Lenguaje Natural**

- **DeepSeek R1 & Llama 70B**: Modelos LLM con razonamiento basado en *Chain of Thoughts* 🔍 🌟 ![Groq Badge](https://img.shields.io/badge/Groq-orange)
- **Nomic Embeddings**: Codificación vectorial para datos contextuales. ![Multimodal Badge](https://img.shields.io/badge/Multimodal-cyan) ![Nomic Badge](https://img.shields.io/badge/Nomic-orange)

### 🎨 **Generación de Imágenes**

- **Titan G1 Images**: Creación, edición y modificación de imágenes generativas. ![AWS Badge](https://img.shields.io/badge/AWS-orange)

### 🎤 **Procesamiento de Audio**

- **Kokoro TTS**: Conversión de texto a voz con calidad premium. ![Kokoro AI Badge](https://img.shields.io/badge/KokoroAI-orange)
- **Whisper-Large-v3**: Transcripción y traducción de voz a texto. ![OpenAI Badge](https://img.shields.io/badge/OpenAI-orange)

## 🛠️ Instalación y Configuración

### 🔹 **Requisitos Previos**

- Docker
- Cuenta en AWS
- Python 3.8+

### 👉 **Instalación Rápida**

Clona el repositorio e inicia el servicio:

```bash
# Clonar el repositorio
git clone https://github.com/bahamondex/openai-in-a-box.git
cd openai-in-a-box

# Construir y ejecutar con Docker
docker-compose up --build
```

Una vez desplegado, la API estará disponible en:

```plaintext
http://localhost:80
```

## 👨‍💻 Contribuciones

¡Las contribuciones son bienvenidas! Para más detalles, revisa el archivo `CONTRIBUTING.md` en el repositorio.

## 👤 Contacto

Para soporte o consultas:

- **Email:** [oscar.bahamonde.dev@gmail.com](mailto:oscar.bahamonde.dev@gmail.com)
- **GitHub Issues:** Abre un ticket en el repositorio oficial.

---

🌟 *Hecho con pasión por* **Oscar Bahamonde** *para impulsar el futuro de la inteligencia artificial.*

