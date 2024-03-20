from flask import Flask, request, jsonify
from doctor.pdf_loader import load_medical_data
from doctor.research_chatbot import chat
from doctor.diagnosis_chatbot import infer

app = Flask(__name__)

@app.route('/')
def root():
    return jsonify({"message": "Hello World"})

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({"message": "No file part"})

    file = request.files['file']
    
    if file.filename == '':
        return jsonify({"message": "No selected file"})

    if not file.filename.endswith('.pdf'):
        return jsonify({"message": "Only PDF files are allowed."})

    # Read the uploaded PDF file
    contents = file.read()
    print(type(contents))

    # Load medical data from the PDF contents
    load_medical_data(contents, request.form.get('doc_id', '457'))

    return jsonify({"message": "File uploaded and processed successfully."})


@app.route('/chat', methods=['POST'])
def chat_endpoint():
    if request.is_json:
        data = request.json
    else:
        data = request.form
    
    if 'query' not in data or 'doc_id' not in data:
        return jsonify({"error": "Missing 'query' or 'doc_id' in request body"}), 400
    
    query = data['query']
    doc_id = data.get('doc_id', '457')
    
    response = chat(query, doc_id)
    
    return jsonify({"response": response})



@app.route('/infer', methods=['POST'])
def infer_endpoint():
    if request.is_json:
        data = request.json
    else:
        data = request.form
    
    if 'query' not in data:
        return jsonify({"error": "Missing 'query' in request body"}), 400
    
    query = data['query']
    
    response = infer(query)
    
    return jsonify({"response": response})


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8000,debug=True)

