from urllib.request import urlopen
from bs4 import BeautifulSoup
import time
from flask import Flask
from flask import jsonify
app = Flask(__name__)
import json 

    
raceid="104374"
@app.route('/time/<int:raceid>')
def get_current_time(raceid):
    r =  urlopen('https://data.fis-ski.com/fis_events/ajax/raceresultsfunctions/details.html?sectorcode=AL&raceid=104374')
    soup = BeautifulSoup(r)
    b = soup.find_all("section", class_="section section_events-info_results section_theme_results")
    return {'time': str(b)}


