from langchain_community.vectorstores import Qdrant
from qdrant_client import QdrantClient

def get_qdrant_client(url):
    return QdrantClient(url, prefer_grpc=False)     

def create_qdrant_index(client,embeddings,collection_name):
    return Qdrant(client=client,embeddings=embeddings, collection_name=collection_name)

def retrieve_qdrant_index(client,embeddings,collection_name,search_kwargs):
    db =  Qdrant(client=client,embeddings=embeddings, collection_name=collection_name)
    return db.as_retriever(search_kwargs = search_kwargs)

def create_qdrant_index_from_documents(docs,embeddings,url,collection_name):
    Qdrant.from_documents(
        docs,
        embeddings,
        url=url,
        prefer_grpc=False,
        collection_name=collection_name,
    )

