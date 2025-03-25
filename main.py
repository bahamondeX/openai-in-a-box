
from dotenv import load_dotenv

load_dotenv()

from server import create_app





app = create_app(
    title="OpenAI API",
    description="OpenAI Compliant REST API",
    version="0.0.1"
)
