import streamlit as st
import ollama

# Create a sidebar
with st.sidebar:
    st.title("Diagnosis Assistant Options")
    # Add options here (e.g., buttons, checkboxes)
    # For example:
    selected_symptom = st.selectbox("Select Symptom", ["Fever", "Cough", "Headache"])

# Main content area
st.title("Hello Ramesh,")
st.subheader("I am your Diagnosis Assistant. How can I help you today?")

if "messages" not in st.session_state:
    st.session_state["messages"] = [{"role": "assistant", "content": "How can I help you?"}]

### Write Message History
for msg in st.session_state.messages:
    if msg["role"] == "user":
        st.chat_message(msg["role"]).write(msg["content"])
    else:
        st.chat_message(msg["role"]).write(msg["content"])

## Generator for Streaming Tokens
def generate_response():
    response = ollama.chat(model='biomistral', stream=True, messages=st.session_state.messages)
    for partial_resp in response:
        token = partial_resp["message"]["content"]
        st.session_state["full_message"] += token
        yield token

if prompt := st.chat_input():
    st.session_state.messages.append({"role": "user", "content": prompt})
    st.chat_message("user",).write(prompt)
    st.session_state["full_message"] = ""
    st.chat_message("assistant").write_stream(generate_response)
    st.session_state.messages.append({"role": "assistant", "content": st.session_state["full_message"]})
