# Eindopdracht-Thomas


Weet jij ook nooit wat je vanavond moet koken? Lijkt het alsofjouw creativiteit en 
besluitvaardigheid rond etenstijd ook ineens verdwenen is? Persoonlijk ervaar ik dit ongeveer iedere dag.
Daarom ga ik een applicatie programmeren waarinik een aantal grappige vragen kan beantwoorden over o.a. mijn stemming, 
eetgezelschap en motivatie-om-te-koken-niveau. De applicatie stelt vervolgens een aantal passende recepten voor om uit te kiezen. 
Wanneer iemand een rotdag heeft gehad, zal de applicatie bijvoorbeeld meer comfort-food recepten voorstellen. Wanneer iemand geen zin heeft om te koken, 
worden er snelle en makkelijke recepten getoond. Opde dagen dat de gebruiker zich wel besluitvaardig voelt, 
is er ook een mogelijkheid om door alle beschikbare recepten te browsen en op zoek te gaan naar specifieke recepten met behulp van een zoekfunctie. 
Als de gebruiker zijn/haar besluit aan het lot wilt overlaten dan is er ook de optie om een recept randomly te genereren.
Ten slotte heeft de gebruiker ook de mogelijkheid om recepten te bekijken op basis van de ingrediënten die hij of zij nog in de koelkast heeft liggen. 
Om dit te doen maak ik HTTP requests naar de Spoontacular API(https://spoonacular.com/food-api/docs) en API (https://api.edamam.com/api/recipes/v2")
om zo de juiste data op te vragen en te verwerken in mijn applicatie.

C:\Users\Thomas\WebstormProjects\Eindopdracht\assets\Readme image.jpeg  (image staat in assets.)

1:
Benodigdheden voor het runnen van de applicatie:
(deze zijn al inbegrepen in de js code en werken. ze kunnen gewoon gebruikt worden.)

voor de edamam API moet het volgende worden meegegeven in de params:

params: {
type: "public",
app_id: "009506a1",
app_key: "75b4c94ffbafb4cd084d4d9e06e1e174",
q: query,

            },

        headers:{
                "Content-Type": "application/json"
        }
        } );


voor de spoonacular API moet het volgende bij de params staan:

params: {
apiKey:"7335910d97484c39956f8795ed5e678b",
},
headers:{
"Content-Type": "application/json"

}
} );

///////////

2: wanneer de gebruiker aankomt op de index/search by ingredients pagina, is het mogelijk om te zoeken in de searchbalk op basis van ingredienten
of titel. dit dient gedaan te worden door de volgende syntax aan te houden:

ingredient,ingredient,ingredient...
Ofwell ingredient gevolgd door een komma en daarna een volgend ingredient. Allemaal met LOWER CAPS!
vervolgens kan de gebruiker op de search button clicken waarna een aantal recepten op het scherm verschijnen.

3: Wanneer de gebruiker klaar is om naar een volgende pagina te navigeren is dit mogelijk door bovenin het scherm van de
navigatie bar gebruik te maken door op de betreffende pagina te clicken. hierna wordt de gebruiker naar de betreffende pagina gelinkt.

4:wanneer de gebruiker aankomt op de Moodcalculator, is het mogelijk om te zoeken in de searchbalk op basis van moods
. dit dient gedaan te worden door de volgende syntax aan te houden:

mood,mood,mood...
Ofwell een mood gevolgd door een komma en daarna een volgend mood tot er in totaal 3 moods in het input veld staan. Allemaal met LOWER CAPS!
vervolgens kan de gebruiker op de search button clicken waarna een aantal recepten op het scherm verschijnen.

5: wanneer de gebruiker aankomt op de random recipe generator pagina, 
kan de gebruiker op de search button clicken waarna een random recept op het scherm verschijnt.
dit kan de gebruiker maximaal 150 keer doen.


EXTRA:

npm run start     

kan in de terminal gelogd worden om de pagina op te starten.


Veel plezier!


(p.s.  dev dependencies staan in de json file. parcel, parcel nuke dist , axios)

----------------------


