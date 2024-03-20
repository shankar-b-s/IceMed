from langchain_community.embeddings import SentenceTransformerEmbeddings
from langchain_community.embeddings import OllamaEmbeddings

def get_embeddings(name):
    if("doc"):
        return SentenceTransformerEmbeddings(model_name = "NeuML/pubmedbert-base-embeddings")
    else:
        return OllamaEmbeddings(model="llama2")
