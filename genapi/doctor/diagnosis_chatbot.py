from langchain_community.chat_models import ChatOllama
from langchain_community.llms import Ollama
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate
from langchain.chains.conversation.memory import ConversationBufferMemory
from langchain.chains import ConversationChain

memory = ConversationBufferMemory()

# supports many more optional parameters. Hover on your `ChatOllama(...)`
# class to view the latest available supported parameters
llm = Ollama(model="biomistral")

conversation_buf = ConversationChain(
    llm=llm,
    memory=memory)


def infer(query):
    response = conversation_buf.invoke(input=query)
    return response['response']
