from langchain.prompts import PromptTemplate
from langchain_community.llms import Ollama
from langchain.chains import RetrievalQA
from doctor.embed import get_embeddings
from doctor.vectordb import get_qdrant_client, create_qdrant_index_from_documents, retrieve_qdrant_index,create_qdrant_index

doc_id = "457"

url = "http://localhost:6333"
local_llm = "llama2"
llm = Ollama(
    model = local_llm,
    temperature =0.1,
)

print("LLM Loaded Successfully!")

prompt_template = """
Use the following pieces of information to answer the questions of the patient.If the question can be answered without using the given context then answer it.
Context:{context}
Question:{question}
Only return the answer to the question.
"""

embeddings = get_embeddings("doc")

client =  get_qdrant_client(url)

db =  create_qdrant_index(client,embeddings=embeddings,collection_name=doc_id)

print("Qdrant Index Loaded Successfully!")


prompt = PromptTemplate(template=prompt_template,input_variables=["context","question"])

def chat(query,doc_id=doc_id):
    db =  create_qdrant_index(client,embeddings=embeddings,collection_name=doc_id)
    retriever = db.as_retriever(search_kwargs = {"k":2})
    chain_type_kwargs = {"prompt":prompt}
    qa= RetrievalQA.from_chain_type(llm=llm,chain_type_kwargs=chain_type_kwargs,retriever=retriever,chain_type="stuff",verbose=True,return_source_documents=True)
    response = qa(query)
    return response['result']


#asnwer = chat("What is the treatment for diabetes?")
#print(asnwer)

