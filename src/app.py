from flask import Flask, request, jsonify
from flask_socketio import SocketIO, emit
import re
import random
from chatbot import get_response

app = Flask(__name__)
app.debug = True
app.config['SECRET_KEY'] = 'secret!'
socket_io = SocketIO(app, cors_allowed_origins="*")


@socket_io.on('connect')
def handle_connect():
    print('Client connected')
    socket_id = request.sid


@socket_io.on('disconnect')
def handle_disconnect():
    print('Client disconnected')

@socket_io.on('message')
@socket_io.on('message')
def handle_message(data):
    message = {
        'socket_id': request.sid,
        'message': data
    }
    print('Received message:', message)
    
    # Enviar el mensaje al chatbot y obtener la respuesta
    response = get_response(data)
    
    # Crear un mensaje con la respuesta del chatbot
    bot_message = {
        'socket_id': 'bot',
        'message': response
    }
    
    # Emitir el mensaje del bot a todos los clientes conectados
    emit('message', bot_message, broadcast=True)  # Emitir el mensaje a todos los clientes conectados

if __name__ == "__main__":
    socket_io.run(app, host="0.0.0.0", port=5000)
