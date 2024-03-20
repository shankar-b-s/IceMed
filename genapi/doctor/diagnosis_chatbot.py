from langchain.prompts import PromptTemplate
from langchain_community.llms import Ollama
from langchain_text_splitters import RecursiveJsonSplitter

llm = Ollama(model="biomistral")

PromptTemplate = "You are a medical AI assistant for a doctor give answers to the following questions: {question}"

def infer(query: str):
    while True:
        response = llm.invoke(query)

        return response
