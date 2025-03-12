import json
import logging
from dotenv import load_dotenv

load_dotenv()

from fastapi import Request
from fastapi.responses import RedirectResponse, FileResponse
from fastapi.staticfiles import StaticFiles

from server import create_app


logger = logging.getLogger(__name__)


app = create_app(
    title="OpenAI API",
    description="OpenAI Compliant REST API",
    version="0.0.1",
    openapi_url="/v1/openapi",
    docs_url="/v1/docs",
)


# API routes
@app.get("/v1/docs")
def redirect_to_docs(request: Request):
    """
    Redirect to the OpenAPI docs.
    """
    headers = dict(request.headers)
    logger.info(json.dumps(headers))
    return RedirectResponse(url="/docs")


app.mount("/assets", StaticFiles(directory="./web/dist/assets"), name="assets")


@app.get("/{full_path:path}")
async def serve_react(full_path: str):
    """
    Redirects to index.html
    """
    if full_path.startswith("v1/"):
        return {"detail": "Not Found"}
    return FileResponse("./web/dist/index.html")
