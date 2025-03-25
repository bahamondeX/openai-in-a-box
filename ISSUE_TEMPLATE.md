## ISSUE TEMPLATE

### 📝 Descripción
_Proporciona una descripción clara y concisa del problema o la solicitud de mejora._

**Resumen:**
> _Ejemplo: La API `/completions` no devuelve una respuesta esperada cuando se usa con el modelo Llama 70B._

### 📌 Pasos para Reproducir
1. _Ejemplo: Llamar a `/completions` con el siguiente payload:_
    ```json
    {
      "model": "llama-3.3-70b-versatile",
      "prompt": "¿Qué es OpenAI In a Box?",
      "max_tokens": 512
    }
    ```
2. _Observar la respuesta errónea._

### 🧐 Comportamiento Esperado
_Describe el resultado correcto que debería obtenerse._

### 🖥️ Entorno
- **Sistema Operativo:** (Ubuntu 22.04 / MacOS / Windows)
- **Versión de Docker:** (`docker --version`)
- **Versión de OpenAI In a Box:** (`git rev-parse --short HEAD`)

### 📷 Capturas o Logs
_Si es aplicable, adjunta capturas de pantalla o logs relevantes._