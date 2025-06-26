import speech_recognition as sr
import pyttsx3

r = sr.Recognizer()

def speak(command):

	engine = pyttsx3.init()
	engine.say(command)
	engine.runAndWait()

while(True):

	with sr.Microphone() as source2:

		r.adjust_for_ambient_noise(source2, duration=0.2)

		audio2 = r.listen(source2)

		myText = r.recognize_google(audio2)

		print(myText)

		