import re
import random

def get_response(user_input):
    split_message = re.split(r'\s|[,:;.?!-_]\s*', user_input.lower())
    response = check_all_messages(split_message)
    if response == '¿En qué distrito te encuentras?':
        print('Hola')
        branch_location = handle_branch_location(user_input)
        response = 'La sucursal principal se encuentra en el distrito ' + 'branch_location'
    return response

def message_probability(user_message, recognized_words, single_response=False, required_words=[]):
    message_certainty = 0
    has_required_words = True

    for word in user_message:
        if word in recognized_words:
            message_certainty +=1

    percentage = float(message_certainty) / float (len(recognized_words))

    for word in required_words:
        if word not in user_message:
            has_required_words = False
            break

    if has_required_words or single_response:
        return int(percentage * 100)
    else:
        return 0

def handle_branch_location(user_input):
    split_message = re.split(r'\s|[,:;.?!-_]\s*', user_input.lower())
    # Realizar el procesamiento de la respuesta del cliente y obtener la ubicación de la sucursal
    # Puedes usar lógica condicional y análisis de palabras clave para determinar el distrito
    branch_location = obtain_branch_location(split_message)
    return branch_location

def obtain_branch_location(user_message):
    district_keywords = ['distrito', 'zona', 'sector', 'barrio']
    district = None
    
    # Buscar palabras clave relacionadas con distritos en el mensaje del usuario
    for word in user_message:
        if word in district_keywords:
            # Obtener el siguiente elemento después de la palabra clave como el distrito
            district_index = user_message.index(word) + 1
            if district_index < len(user_message):
                district = user_message[district_index]
            break
    
    if district is None:
        district = "desconocido"  # Asignar un valor predeterminado si no se encuentra ningún distrito
    
    return district

def check_all_messages(message):
    highest_prob = {}

    def response(bot_response, list_of_words, single_response=False, required_words=[]):
        nonlocal highest_prob
        if single_response:
            highest_prob[bot_response] = message_probability(message, list_of_words, single_response, required_words)
        else:
            for word in list_of_words:
                if word in message:
                    highest_prob[bot_response] = message_probability(message, list_of_words, single_response, required_words)
                    break

    response('Hola, ¿en qué puedo ayudarte?', ['hola', 'klk', 'saludos', 'buenas'], single_response=True)
    response('¿En qué distrito te encuentras?', ['sucursal', 'dónde', 'distrito', 'ubicación'], single_response=True)
    response('Ofrecemos una amplia gama de servicios de envío y logística', ['servicios', 'envío', 'logística'], single_response=True)
    response('Puedes consultar nuestros costos en nuestro sitio web o contactarnos para más información', ['costos', 'precios'], single_response=True)
    response('Tenemos promociones especiales disponibles, visita nuestro sitio web para más detalles', ['promociones', 'ofertas'], single_response=True)
    response('Contamos con una flota de vehículos modernos y seguros para tus envíos', ['vehículos', 'flota'], single_response=True)
    response('Nuestros horarios de atención son de lunes a viernes de 9 AM a 6 PM', ['horarios', 'atención', 'horas'], single_response=True)
    response('Nuestras políticas incluyen medidas de seguridad, privacidad y garantía de entrega', ['políticas', 'seguridad', 'privacidad', 'garantía'], single_response=True)
    response('Nuestro horario de atención al cliente es de lunes a viernes de 9 AM a 6 PM', ['atención al cliente', 'horario'], single_response=True)
    response('Puedes rastrear tu envío utilizando el número de seguimiento en nuestro sitio web', ['rastrear', 'seguimiento', 'envío'], single_response=True)
    response('Para realizar una reclamación, por favor contáctanos a través de nuestro servicio de atención al cliente', ['reclamación', 'servicio al cliente'], single_response=True)
    response('Aceptamos diferentes formas de pago, incluyendo efectivo y tarjetas de crédito', ['formas de pago', 'pagos', 'efectivo', 'tarjetas de crédito'], single_response=True)
   

    best_match = max(highest_prob, key=highest_prob.get)

    return unknown() if highest_prob[best_match] < 1 else best_match

def unknown():
    response = random.choice(['Puedes decirlo de nuevo?', 'No estoy seguro de lo que quieres', 'Búscalo en Google a ver qué tal'])
    
    return response

def run_chatbot():
    while True:
        user_input = input('You: ')
        if user_input.lower() == 'adios':
            print('Bot: ¡Hasta luego!')
            break
        else:
            print('Bot: ' + get_response(user_input))
