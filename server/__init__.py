from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .api import (
    chat_app,
    images_app,
    models_app,
    embeddings_app,
    translations_app,
    transcriptions_app,
    vector_stores_app,
)


def create_app(
    *, title: str, description: str, version: str, docs_url: str, openapi_url: str
):
    app = FastAPI(
        title=title,
        description=description,
        version=version,
        openapi_url=openapi_url,
        docs_url=docs_url,
    )
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    for i in (
        models_app,
        chat_app,
        images_app,
        translations_app,
        embeddings_app,
        transcriptions_app,
        vector_stores_app,
    ):
        app.include_router(i, prefix="/v1")
    return app
