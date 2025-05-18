// Vollständige Liste der Gegenstände mit geschätzten Gewichten (in Gramm)
const allItems = [
    { id: 'laptop', name: 'Laptop (ca. 13-15 Zoll)', weight: 1700, type: 'checkbox' },
    { id: 'tablet', name: 'Tablet', weight: 600, type: 'checkbox' },
    { id: 'smartphone', name: 'Smartphone', weight: 200, type: 'checkbox' },
    { id: 'laptopCharger', name: 'Laptop-Netzteil + Kabel', weight: 300, type: 'checkbox' },
    { id: 'smartphoneCable', name: 'Smartphone-Ladekabel', weight: 50, type: 'checkbox' },
    { id: 'powerbank', name: 'Powerbank (mittelgroß)', weight: 300, type: 'checkbox' },
    { id: 'headphonesOverEar', name: 'Kopfhörer (Over-Ear)', weight: 300, type: 'checkbox' },
    { id: 'headphonesInEar', name: 'Kopfhörer (In-Ear mit Ladecase)', weight: 70, type: 'checkbox' },
    { id: 'ereader', name: 'E-Reader', weight: 200, type: 'checkbox' },
    { id: 'textbook', name: 'Lehrbuch (groß, Hardcover)', weight: 1500, type: 'number', unit: 'Stück' },
    { id: 'novelPaperback', name: 'Roman (Taschenbuch)', weight: 300, type: 'number', unit: 'Stück' },
    { id: 'notebookA4', name: 'Notizbuch (A4, ca. 100 Blätter)', weight: 400, type: 'number', unit: 'Stück' },
    { id: 'notebookA5', name: 'Notizblock (A5)', weight: 150, type: 'number', unit: 'Stück' },
    { id: 'folderDocs', name: 'Ordner mit ca. 50 Seiten Dokumenten', weight: 500, type: 'checkbox' },
    { id: 'waterbottle1L', name: 'Wasserflasche (1L, gefüllt)', weight: 1100, type: 'number', unit: 'Stück' },
    { id: 'thermos05L', name: 'Thermoskanne (0.5L, gefüllt)', weight: 800, type: 'number', unit: 'Stück' },
    { id: 'snackbar', name: 'Snackriegel', weight: 80, type: 'number', unit: 'Stück' },
    { id: 'apple', name: 'Apfel (mittelgroß)', weight: 200, type: 'number', unit: 'Stück' },
    { id: 'lunchboxEmpty', name: 'Brotdose (leer)', weight: 300, type: 'checkbox' },
    { id: 'wallet', name: 'Geldbörse (mit Inhalt)', weight: 150, type: 'checkbox' },
    { id: 'keys', name: 'Schlüsselbund', weight: 100, type: 'checkbox' },
    { id: 'tissues', name: 'Taschentücher (kleine Packung)', weight: 40, type: 'number', unit: 'Stück' }, // In vereinfachter Liste als Number
    { id: 'handSanitizer', name: 'Handdesinfektionsmittel (kleine Flasche)', weight: 70, type: 'checkbox' },
    { id: 'cosmeticBag', name: 'Kleine Kosmetiktasche', weight: 300, type: 'checkbox' },
    { id: 'lipBalm', name: 'Lippenbalsam', weight: 20, type: 'checkbox' },
    { id: 'firstAidKit', name: 'Kleines Erste-Hilfe-Set', weight: 200, type: 'checkbox' },
    { id: 'sunglasses', name: 'Sonnenbrille (mit Etui)', weight: 100, type: 'checkbox' },
    { id: 'readingGlasses', name: 'Lesebrille (mit Etui)', weight: 70, type: 'checkbox' },
    { id: 'scarf', name: 'Leichter Schal', weight: 100, type: 'checkbox' },
    { id: 'beanie', name: 'Mütze (Strickmütze)', weight: 70, type: 'checkbox' },
    { id: 'gloves', name: 'Handschuhe (dünn)', weight: 70, type: 'checkbox' },
    { id: 'lightJacket', name: 'Leichte Jacke (gefaltet)', weight: 500, type: 'checkbox' },
    { id: 'pen', name: 'Kugelschreiber (einzeln)', weight: 15, type: 'number', unit: 'Stück' },
    { id: 'pencil', name: 'Bleistift (einzeln)', weight: 10, type: 'number', unit: 'Stück' },
    { id: 'pencilCase', name: 'Stifte-Etui (mit ca. 5 Stiften)', weight: 100, type: 'checkbox' },
    { id: 'foldingUmbrella', name: 'Kleiner Faltregenschirm', weight: 300, type: 'checkbox' },
    { id: 'digitalCamera', name: 'Kleine Digitalkamera', weight: 200, type: 'checkbox' },
    { id: 'externalDrive', name: 'Externe Festplatte (tragbar)', weight: 150, type: 'checkbox' },
    { id: 'usbStick', name: 'USB-Stick', weight: 20, type: 'checkbox' },
    { id: 'portableSpeaker', name: 'Tragbarer Lautsprecher (klein)', weight: 200, type: 'checkbox' },
    { id: 'travelAdapter', name: 'Reiseadapter', weight: 100, type: 'checkbox' },
    { id: 'gum', name: 'Packung Kaugummis/Bonbons', weight: 30, type: 'checkbox' },
    { id: 'handCream', name: 'Kleine Handcreme (Tube)', weight: 70, type: 'checkbox' },
    { id: 'reusableBag', name: 'Wiederverwendbare Einkaufstasche (gefaltet)', weight: 70, type: 'checkbox' },
    { id: 'cardHolder', name: 'Visitenkartenetui', weight: 50, type: 'checkbox' },
    { id: 'smallPad', name: 'Kleiner Notizblock (Post-its o.ä.)', weight: 50, type: 'checkbox' },
    { id: 'medication', name: 'Medikamente (kleine Blisterpackung)', weight: 40, type: 'checkbox' },
    { id: 'travelPillow', name: 'Reisekissen (aufblasbar, leer)', weight: 100, type: 'checkbox' },
    { id: 'portableMouse', name: 'Tragbare Maus', weight: 100, type: 'checkbox' },
    { id: 'flashlight', name: 'Taschenlampe (klein, LED)', weight: 100, type: 'checkbox' }
];

// IDs der Gegenstände, die bereits im vereinfachten Formular als Hauptfelder sind
const excludedOriginalItemIds = [
     'laptop', 'smartphone', 'powerbank', 'wallet', 'keys', 'foldingUmbrella',
     // IDs, die durch aggregierte Felder im vereinfachten Formular abgedeckt sind:
     'textbook', 'novelPaperback', 'notebookA4', 'notebookA5', // -> 'books'
     'waterbottle1L', // -> 'waterBottle'
     'headphonesInEar', // -> 'headphones'
     'snackbar', // -> 'snacks'
     'lunch', // -> 'lunch'
     'pencilCase', // -> 'penPencilCase'
     'tissues' // -> 'tissues'
];

// Filtern der verbleibenden Gegenstände für die "Weiterer Gegenstand" Liste
const otherItems = allItems.filter(item => !excludedOriginalItemIds.includes(item.id));

// Container für dynamisch hinzugefügte Felder
const otherItemsContainer = document.getElementById('other-items-container');
const maxItemsMessage = document.getElementById('max-items-message');

const maxOtherItemFields = 11; // 1 initial + 10 zusätzlich
let currentOtherItemFields = 0;

// Funktion zum Füllen eines Select-Elements mit den 'otherItems' Optionen
function populateSelectWithOptions(selectElement) {
    // Standardoption hinzufügen
    const defaultOption = document.createElement('option');
    defaultOption.value = "0";
    defaultOption.textContent = "Nichts ausgewählt";
    selectElement.appendChild(defaultOption);

    // Optionen aus der gefilterten Liste hinzufügen
    otherItems.forEach(item => {
        const option = document.createElement('option');
        option.value = item.weight; // Gewicht als Wert speichern
        option.textContent = `${item.name} (ca. ${item.weight}g)`;
        selectElement.appendChild(option);
    });
}

// Funktion zum Hinzufügen eines neuen "Weiterer Gegenstand" Feldes
function addNewOtherItemSelectField() {
    // Prüfen, ob das Limit erreicht ist
    if (currentOtherItemFields >= maxOtherItemFields) {
        // Meldung anzeigen (wird im HTML nur sichtbar gemacht)
        maxItemsMessage.textContent = "Das schaffst du nicht zu tragen.";
        maxItemsMessage.style.display = 'flex'; // flex, damit es zentriert wird laut CSS
        return; // Nichts weiter hinzufügen
    }

    const itemDiv = document.createElement('div');
    itemDiv.classList.add('form-item'); // CSS Klasse wiederverwenden

    const label = document.createElement('label');
    // Label anpassen, um die Nummer anzuzeigen
    label.textContent = `Weiterer Gegenstand ${currentOtherItemFields + 1}:`; // Zähler +1 für Anzeige

    const selectElement = document.createElement('select');
    // IDs sind nicht zwingend nötig, aber eine Klasse hilft beim Auswählen für die Berechnung
    selectElement.classList.add('other-item-select');

    // Optionen in das neue Select-Element füllen
    populateSelectWithOptions(selectElement);

    // Event Listener für das neue Select-Element hinzufügen
    selectElement.addEventListener('change', function() {
        // Wenn ein gültiger Gegenstand ausgewählt wurde (Wert > 0)
        if (this.value !== '0') {
            // Ein weiteres Feld hinzufügen, wenn das Limit noch nicht erreicht ist
            // Diese Überprüfung wird auch am Anfang von addNewOtherItemSelectField() gemacht
            addNewOtherItemSelectField();

            // Dieses Select-Feld deaktivieren, sobald eine Auswahl getroffen wurde,
            // damit es nicht erneut ein neues Feld hinzufügt und die Auswahl fixiert ist.
            this.disabled = true;
            // Label des deaktivierten Feldes anpassen
             label.textContent = `${label.textContent.replace(':', '')} (Ausgewählt):`;
        }
    });

    itemDiv.appendChild(label);
    itemDiv.appendChild(selectElement);

    otherItemsContainer.appendChild(itemDiv);

    currentOtherItemFields++; // Zähler nach erfolgreichem Hinzufügen erhöhen

     // Wenn das Limit JETZT erreicht wurde, die Meldung anzeigen
     if (currentOtherItemFields >= maxOtherItemFields) {
          maxItemsMessage.textContent = "Das schaffst du nicht zu tragen.";
          maxItemsMessage.style.display = 'flex'; // flex, damit es zentriert wird
          // Optional: Den Button deaktivieren oder ausblenden
          // document.getElementById('calculateWeight').disabled = true;
     }
}


// --- Funktion zum Zurücksetzen des Formulars ---
function resetMonsterBagForm() {
    // 1. Reset static form fields using the built-in form.reset()
    const form = document.getElementById('monsterBagForm');
    form.reset();

    // 2. Remove all dynamically added "Weiterer Gegenstand" fields except the first one
    // Loop while there's more than 1 child (the initial one)
    while (otherItemsContainer.children.length > 0) {
        otherItemsContainer.removeChild(otherItemsContainer.lastChild);
    }

    // 3. Reset the counter
    currentOtherItemFields = 0;

    // 4. Add the first (initial) "Weiterer Gegenstand" field back
    addNewOtherItemSelectField();


    // 5. Hide the max items message
    maxItemsMessage.style.display = 'none';
    maxItemsMessage.textContent = ''; // Clear message text

    // 6. Reset the result display
    const totalWeightSpan = document.getElementById('totalWeight');
    const comparisonDiv = document.getElementById('comparison');
    totalWeightSpan.textContent = '0';
    comparisonDiv.textContent = ''; // Inhalt leeren
}


// Event Listener für den Reset Button
document.getElementById('resetForm').addEventListener('click', resetMonsterBagForm);


// Sobald das DOM geladen ist, das erste "Weiterer Gegenstand" Feld hinzufügen
document.addEventListener('DOMContentLoaded', function() {
    addNewOtherItemSelectField(); // Fügt das erste Feld hinzu und setzt counter auf 1
});


// Event Listener für den Berechnen-Button
document.getElementById('calculateWeight').addEventListener('click', function() {
    let totalWeight = 0;

    // Gewichte der einzelnen, festen Items abrufen (ids sind fest im HTML)
    const mainItemIds = [
        'laptop', 'books', 'waterBottle', 'smartphone', 'powerbank',
        'headphones', 'wallet', 'keys', 'snacks', 'umbrella',
        'lunch', 'penPencilCase', 'tissues'
    ];

    mainItemIds.forEach(id => {
        const element = document.getElementById(id);
         if (!element) return; // Überspringen, falls Element nicht gefunden (sollte nicht passieren)

        if (element.tagName === 'SELECT') { // Dropdown (Ja/Nein)
            if (element.value === '1') {
                 totalWeight += parseInt(element.dataset.weight);
            }
        } else if (element.tagName === 'INPUT' && element.type === 'number') { // Number Input (Menge)
            const quantity = parseInt(element.value) || 0;
            totalWeight += quantity * parseInt(element.dataset.weightPerUnit);
        }
    });


    // Gewichte von ALLEN dynamisch hinzugefügten "Weiterer Gegenstand" Feldern addieren
    const otherItemSelects = otherItemsContainer.querySelectorAll('.other-item-select');
    otherItemSelects.forEach(select => {
        // Sicherstellen, dass nur ausgewählte (nicht Standard) Werte addiert werden
        if (select.value !== '0') {
             totalWeight += parseInt(select.value);
        }
    });


    // Gesamtgewicht anzeigen
    document.getElementById('totalWeight').textContent = totalWeight;

    // Vergleichsobjekt finden und anzeigen (vereinfacht)
    const comparisonDiv = document.getElementById('comparison');
    let comparisonObject = "ein paar Äpfel."; // Default für sehr leicht

    // Die Vergleichsbereiche können beibehalten oder angepasst werden
    if (totalWeight > 500 && totalWeight <= 2000) {
        comparisonObject = "eine Tüte Mehl (1kg) oder ein kleiner Laptop.";
    } else if (totalWeight > 2000 && totalWeight <= 5000) {
        comparisonObject = "einen Sack Kartoffeln (5kg) oder eine Bowlingkugel.";
    } else if (totalWeight > 5000 && totalWeight <= 10000) {
         comparisonObject = "einen mittelgroßen Hund oder einen Handgepäckkoffer.";
    } else if (totalWeight > 10000 && totalWeight <= 20000) {
         comparisonObject = "einen Sack Zement (25kg) oder einen großen Koffer.";
    } else if (totalWeight > 20000) {
        comparisonObject = "einen kleinen Kühlschrank oder einen Erwachsenen.";
    } else { // Für sehr geringes Gewicht (<= 500g)
         comparisonObject = "eine halbe Packung Butter oder ein Smartphone.";
    }

    comparisonDiv.textContent = `Das ist ungefähr so schwer wie ${comparisonObject}`;
});