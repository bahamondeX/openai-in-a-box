from .completions import app as completions_app
from .chat.completions import app as chat_app
from .embeddings import app as embeddings_app
from .images import app as images_app
from .models import app as models_app
from .audio import translations_app, transcriptions_app
from .files import app as files_app
from .vector_stores import app as vector_stores_app

__all__ = [
    "chat_app",
    "completions_app",
    "models_app",
    "translations_app",
    "transcriptions_app",
    "images_app",
    "embeddings_app",
    "files_app",
    "vector_stores_app",
]
