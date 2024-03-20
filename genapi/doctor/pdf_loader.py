from tempfile import NamedTemporaryFile
from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from doctor.embed import get_embeddings
from doctor.vectordb import get_qdrant_client, create_qdrant_index_from_documents, retrieve_qdrant_index
from langchain_community.vectorstores import Qdrant
import os


def load_medical_data(contents: bytes, doc_id: str = '453'):
    # Process the PDF file
    medical_embeddings = get_embeddings("doc")
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=450,
        chunk_overlap=0, 
        separators=["\n\n", "\n", " ", ""]
    )

    # Assuming you have the Qdrant URL configured
    url = "http://localhost:6333"
    
    # Save the PDF contents to a temporary file
    with NamedTemporaryFile(delete=False) as tmp_file:
        tmp_file.write(contents)
        tmp_file_path = tmp_file.name

    # Create a PyPDFLoader object with the file path
    loader = PyPDFLoader(tmp_file_path)
    pages = loader.load()
    docs = text_splitter.split_documents(pages)
    
    # Create Qdrant index from the documents
    create_qdrant_index_from_documents(docs, medical_embeddings, url, doc_id)

    # Clean up temporary file
    if tmp_file_path:
        os.unlink(tmp_file_path)

