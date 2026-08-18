// ============================================================
// STATUEDEX GO
// BRUSSELS - 19 MUNICIPALITIES
// REBUILT VERSION
// ============================================================


// ============================================================
// SETTINGS
// ============================================================

const CONFIG = {

    TOWER_DISTANCE: 50,
    STATUE_DISTANCE: 30,

    TEST_STEP: 0.0002,

    TEST_MODE: false,

    SAVE_KEY: "statueDexSave",

    SAVE_VERSION: 2,

    MAP_CENTER: [50.8503, 4.3517],

    MAP_ZOOM: 12,

    OSM_BBOX: "50.75,4.25,50.95,4.55",

    GPS_MAX_AGE: 5000,

    GPS_TIMEOUT: 15000

};


// ============================================================
// MAP
// ============================================================

const map = L.map("map").setView(
    CONFIG.MAP_CENTER,
    CONFIG.MAP_ZOOM
);

L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    {
        maxZoom: 19,
        attribution: "© OpenStreetMap © CARTO"
    }
).addTo(map);


// ============================================================
// DATA
// ============================================================

const towers = [

    {
        id: "tower_anderlecht",
        name: "Anderlecht Tower",
        municipality: "Anderlecht",
        lat: 50.8367,
        lng: 4.3070,
        unlocked: false
    },

    {
        id: "tower_brussels",
        name: "Brussels Tower",
        municipality: "Bruxelles",
        lat: 50.8467,
        lng: 4.3525,
        unlocked: false
    },

    {
        id: "tower_ixelles",
        name: "Abbaye de la Cambre Tower",
        municipality: "Ixelles",
        lat: 50.8188,
        lng: 4.3741,
        unlocked: false
    },

    {
        id: "tower_schaerbeek",
        name: "Maison Autrique Tower",
        municipality: "Schaerbeek",
        lat: 50.8632742,
        lng: 4.3731245,
        unlocked: false
    },

    {
        id: "tower_uccle",
        name: "Royal Observatory Tower",
        municipality: "Uccle",
        lat: 50.797778,
        lng: 4.358111,
        unlocked: false
    },

    {
        id: "tower_etterbeek",
        name: "Maison Cauchie Tower",
        municipality: "Etterbeek",
        lat: 50.8383967,
        lng: 4.3953547,
        unlocked: false
    },

    {
        id: "tower_forest",
        name: "Forest Abbey Tower",
        municipality: "Forest",
        lat: 50.810454,
        lng: 4.316597,
        unlocked: false
    },

    {
        id: "tower_saint_gilles",
        name: "Saint-Gilles Town Hall Tower",
        municipality: "Saint-Gilles",
        lat: 50.82454,
        lng: 4.34577,
        unlocked: false
    },

    {
        id: "tower_jette",
        name: "Dieleghem Abbey Tower",
        municipality: "Jette",
        lat: 50.886478,
        lng: 4.3178,
        unlocked: false
    },

    {
        id: "tower_koekelberg",
        name: "Sacré-Cœur Basilica Tower",
        municipality: "Koekelberg",
        lat: 50.86708,
        lng: 4.31705,
        unlocked: false
    },

    {
        id: "tower_molenbeek",
        name: "Karreveld Castle Tower",
        municipality: "Molenbeek-Saint-Jean",
        lat: 50.86036,
        lng: 4.31543,
        unlocked: false
    },

    {
        id: "tower_saint_josse",
        name: "Botanical Garden Tower",
        municipality: "Saint-Josse-ten-Noode",
        lat: 50.85488,
        lng: 4.365192,
        unlocked: false
    },

    {
        id: "tower_evere",
        name: "Evere Windmill Tower",
        municipality: "Evere",
        lat: 50.873121,
        lng: 4.3949765,
        unlocked: false
    },

    {
        id: "tower_ganshoren",
        name: "Rivieren Castle Tower",
        municipality: "Ganshoren",
        lat: 50.876743,
        lng: 4.3110341,
        unlocked: false
    },

    {
        id: "tower_berchem",
        name: "Sainte-Agathe Church Tower",
        municipality: "Berchem-Sainte-Agathe",
        lat: 50.86361,
        lng: 4.29527,
        unlocked: false
    },

    {
        id: "tower_watermael",
        name: "Maison Haute Tower",
        municipality: "Watermael-Boitsfort",
        lat: 50.79754,
        lng: 4.41653,
        unlocked: false
    },

    {
        id: "tower_auderghem",
        name: "Rouge-Cloître Tower",
        municipality: "Auderghem",
        lat: 50.8136,
        lng: 4.44309,
        unlocked: false
    },

    {
        id: "tower_wsl",
        name: "Wolubilis Tower",
        municipality: "Woluwe-Saint-Lambert",
        lat: 50.84819,
        lng: 4.43821,
        unlocked: false
    },

    {
        id: "tower_wsp",
        name: "Tram Museum Tower",
        municipality: "Woluwe-Saint-Pierre",
        lat: 50.8312447,
        lng: 4.4338632,
        unlocked: false
    }

];


const statues = [

    // ANDERLECHT

    {
        id: "landmark_anderlecht_1",
        name: "Erasmus House",
        municipality: "Anderlecht",
        lat: 50.8357,
        lng: 4.3084,
        discovered: false,
        photo: null
    },

    {
        id: "landmark_anderlecht_2",
        name: "Saint Peter and Saint Guido Collegiate Church",
        municipality: "Anderlecht",
        lat: 50.8353,
        lng: 4.3076,
        discovered: false,
        photo: null
    },


    // BRUXELLES

    {
        id: "landmark_bruxelles_1",
        name: "Manneken Pis",
        municipality: "Bruxelles",
        lat: 50.84499,
        lng: 4.34998,
        discovered: false,
        photo: null
    },

    {
        id: "landmark_bruxelles_2",
        name: "Grand-Place",
        municipality: "Bruxelles",
        lat: 50.84673,
        lng: 4.34990,
        discovered: false,
        photo: null
    },


    // IXELLES

    {
        id: "landmark_ixelles_1",
        name: "Flagey",
        municipality: "Ixelles",
        lat: 50.82761,
        lng: 4.37230,
        discovered: false,
        photo: null
    },

    {
        id: "landmark_ixelles_2",
        name: "Abbaye de la Cambre",
        municipality: "Ixelles",
        lat: 50.81672,
        lng: 4.37430,
        discovered: false,
        photo: null
    },


    // SCHAERBEEK

    {
        id: "landmark_schaerbeek_1",
        name: "Maison Autrique",
        municipality: "Schaerbeek",
        lat: 50.86327,
        lng: 4.37312,
        discovered: false,
        photo: null
    },

    {
        id: "landmark_schaerbeek_2",
        name: "Josaphat Park",
        municipality: "Schaerbeek",
        lat: 50.86250,
        lng: 4.38400,
        discovered: false,
        photo: null
    },


    // UCCLE

    {
        id: "landmark_uccle_1",
        name: "Royal Observatory of Belgium",
        municipality: "Uccle",
        lat: 50.79778,
        lng: 4.35811,
        discovered: false,
        photo: null
    },

    {
        id: "landmark_uccle_2",
        name: "Wolvendael Park",
        municipality: "Uccle",
        lat: 50.80090,
        lng: 4.34080,
        discovered: false,
        photo: null
    },


    // ETTERBEEK

    {
        id: "landmark_etterbeek_1",
        name: "Maison Cauchie",
        municipality: "Etterbeek",
        lat: 50.83840,
        lng: 4.39535,
        discovered: false,
        photo: null
    },

    {
        id: "landmark_etterbeek_2",
        name: "Place Jourdan",
        municipality: "Etterbeek",
        lat: 50.83710,
        lng: 4.38280,
        discovered: false,
        photo: null
    },


    // FOREST

    {
        id: "landmark_forest_1",
        name: "Forest Abbey",
        municipality: "Forest",
        lat: 50.81045,
        lng: 4.31660,
        discovered: false,
        photo: null
    },

    {
        id: "landmark_forest_2",
        name: "WIELS",
        municipality: "Forest",
        lat: 50.81690,
        lng: 4.32660,
        discovered: false,
        photo: null
    },


    // SAINT-GILLES

    {
        id: "landmark_saint_gilles_1",
        name: "Saint-Gilles Town Hall",
        municipality: "Saint-Gilles",
        lat: 50.82454,
        lng: 4.34577,
        discovered: false,
        photo: null
    },

    {
        id: "landmark_saint_gilles_2",
        name: "Horta Museum",
        municipality: "Saint-Gilles",
        lat: 50.81970,
        lng: 4.34470,
        discovered: false,
        photo: null
    },


    // JETTE

    {
        id: "landmark_jette_1",
        name: "Dieleghem Abbey",
        municipality: "Jette",
        lat: 50.88648,
        lng: 4.31780,
        discovered: false,
        photo: null
    },

    {
        id: "landmark_jette_2",
        name: "Place Cardinal Mercier",
        municipality: "Jette",
        lat: 50.87580,
        lng: 4.32730,
        discovered: false,
        photo: null
    },


    // KOEKELBERG

    {
        id: "landmark_koekelberg_1",
        name: "National Basilica of the Sacred Heart",
        municipality: "Koekelberg",
        lat: 50.86708,
        lng: 4.31705,
        discovered: false,
        photo: null
    },

    {
        id: "landmark_koekelberg_2",
        name: "Elisabeth Park",
        municipality: "Koekelberg",
        lat: 50.86770,
        lng: 4.32180,
        discovered: false,
        photo: null
    },


    // MOLENBEEK

    {
        id: "landmark_molenbeek_1",
        name: "Karreveld Castle",
        municipality: "Molenbeek-Saint-Jean",
        lat: 50.86036,
        lng: 4.31543,
        discovered: false,
        photo: null
    },

    {
        id: "landmark_molenbeek_2",
        name: "Molenbeek Town Hall",
        municipality: "Molenbeek-Saint-Jean",
        lat: 50.85420,
        lng: 4.33820,
        discovered: false,
        photo: null
    },


    // SAINT-JOSSE

    {
        id: "landmark_saint_josse_1",
        name: "Le Botanique",
        municipality: "Saint-Josse-ten-Noode",
        lat: 50.85490,
        lng: 4.36535,
        discovered: false,
        photo: null
    },

    {
        id: "landmark_saint_josse_2",
        name: "Charlier Museum",
        municipality: "Saint-Josse-ten-Noode",
        lat: 50.85090,
        lng: 4.37330,
        discovered: false,
        photo: null
    },


    // EVERE

    {
        id: "landmark_evere_1",
        name: "Brussels Cemetery",
        municipality: "Evere",
        lat: 50.86808,
        lng: 4.41622,
        discovered: false,
        photo: null
    },

    {
        id: "landmark_evere_2",
        name: "Evere Town Hall",
        municipality: "Evere",
        lat: 50.87320,
        lng: 4.40030,
        discovered: false,
        photo: null
    },


    // GANSHOREN

    {
        id: "landmark_ganshoren_1",
        name: "Rivieren Castle",
        municipality: "Ganshoren",
        lat: 50.87674,
        lng: 4.31103,
        discovered: false,
        photo: null
    },

    {
        id: "landmark_ganshoren_2",
        name: "Saint-Martin Church",
        municipality: "Ganshoren",
        lat: 50.87250,
        lng: 4.31450,
        discovered: false,
        photo: null
    },


    // BERCHEM-SAINTE-AGATHE

    {
        id: "landmark_berchem_1",
        name: "Old Saint-Agatha Church",
        municipality: "Berchem-Sainte-Agathe",
        lat: 50.86359,
        lng: 4.29527,
        discovered: false,
        photo: null
    },

    {
        id: "landmark_berchem_2",
        name: "Cité Moderne",
        municipality: "Berchem-Sainte-Agathe",
        lat: 50.86180,
        lng: 4.28690,
        discovered: false,
        photo: null
    },


    // WATERMAEL-BOITSFORT

    {
        id: "landmark_watermael_1",
        name: "Le Logis",
        municipality: "Watermael-Boitsfort",
        lat: 50.80627,
        lng: 4.42240,
        discovered: false,
        photo: null
    },

    {
        id: "landmark_watermael_2",
        name: "Floréal",
        municipality: "Watermael-Boitsfort",
        lat: 50.80290,
        lng: 4.42100,
        discovered: false,
        photo: null
    },


    // AUDERGHEM

    {
        id: "landmark_auderghem_1",
        name: "Rouge-Cloître",
        municipality: "Auderghem",
        lat: 50.81360,
        lng: 4.44309,
        discovered: false,
        photo: null
    },

    {
        id: "landmark_auderghem_2",
        name: "Château de la Solitude",
        municipality: "Auderghem",
        lat: 50.80680,
        lng: 4.43420,
        discovered: false,
        photo: null
    },


    // WOLUWE-SAINT-LAMBERT

    {
        id: "landmark_wsl_1",
        name: "Wolubilis",
        municipality: "Woluwe-Saint-Lambert",
        lat: 50.84819,
        lng: 4.43821,
        discovered: false,
        photo: null
    },

    {
        id: "landmark_wsl_2",
        name: "Malou Park",
        municipality: "Woluwe-Saint-Lambert",
        lat: 50.84480,
        lng: 4.45150,
        discovered: false,
        photo: null
    },


    // WOLUWE-SAINT-PIERRE

    {
        id: "landmark_wsp_1",
        name: "Tram Museum",
        municipality: "Woluwe-Saint-Pierre",
        lat: 50.83124,
        lng: 4.43386,
        discovered: false,
        photo: null
    },

    {
        id: "landmark_wsp_2",
        name: "Stockel Square",
        municipality: "Woluwe-Saint-Pierre",
        lat: 50.83960,
        lng: 4.46450,
        discovered: false,
        photo: null
    }

];


// ============================================================
// STATE
// ============================================================

let municipalities = [];

let playerMarker = null;

let playerAccuracyCircle = null;

let playerLocation = null;

let nearbyStatue = null;

let gpsWatchId = null;

let testLat = 50.8367;

let testLng = 4.3070;

let placesMarkers = [];

let currentPlaceCategory = "all";

let currentPlaceSearch = "";

let placesCache = [];


// ============================================================
// MAP LAYERS
// ============================================================

const municipalityLayers = {};

const towerMarkers = {};

const statueMarkers = {};


// ============================================================
// UI
// ============================================================

const status =
    document.getElementById("status");

const panelTitle =
    document.getElementById("panel-title");

const panelText =
    document.getElementById("panel-text");

const discoverButton =
    document.getElementById("discover-btn");

const cameraInput =
    document.getElementById("camera-input");

const municipalityCount =
    document.getElementById("municipality-count");

const landmarkCount =
    document.getElementById("landmark-count");

const completionCount =
    document.getElementById("completion-count");

const resetButton =
    document.getElementById("reset-btn");

const galleryButton =
    document.getElementById("gallery-btn");

const galleryOverlay =
    document.getElementById("gallery-overlay");

const closeGallery =
    document.getElementById("close-gallery");

const galleryGrid =
    document.getElementById("gallery-grid");

const placesButton =
    document.getElementById("places-btn");

const placesOverlay =
    document.getElementById("places-overlay");

const closePlaces =
    document.getElementById("close-places");

const placesList =
    document.getElementById("places-list");

const placesStatus =
    document.getElementById("places-status");

const locateButton =
    document.getElementById("locate-btn");

const placeSearch =
    document.getElementById("place-search");

const placeCategoryButtons =
    document.querySelectorAll(".place-category");


// ============================================================
// HELPERS
// ============================================================

function getMunicipality(name) {

    return municipalities.find(
        municipality =>
            municipality.name === name
    ) || null;

}


function getStatue(id) {

    return statues.find(
        statue =>
            statue.id === id
    ) || null;

}


function getTower(id) {

    return towers.find(
        tower =>
            tower.id === id
    ) || null;

}


function escapeHTML(text) {

    return String(text ?? "")

        .replace(/&/g, "&amp;")

        .replace(/</g, "&lt;")

        .replace(/>/g, "&gt;")

        .replace(/"/g, "&quot;")

        .replace(/'/g, "&#039;");

}


// ============================================================
// PROGRESS
// ============================================================

function updateProgress() {

    const unlocked =
        municipalities.filter(
            municipality =>
                municipality.unlocked
        ).length;


    const discovered =
        statues.filter(
            statue =>
                statue.discovered
        ).length;


    const totalMunicipalities =
        municipalities.length || 19;


    const totalStatues =
        statues.length;


    if (municipalityCount) {

        municipalityCount.textContent =
            `${unlocked} / ${totalMunicipalities}`;

    }


    if (landmarkCount) {

        landmarkCount.textContent =
            `${discovered} / ${totalStatues}`;

    }


    if (completionCount) {

        const total =
            totalMunicipalities +
            totalStatues;

        const completed =
            unlocked +
            discovered;


        const percentage =
            total > 0
                ? Math.round(
                    completed /
                    total *
                    100
                )
                : 0;


        completionCount.textContent =
            `${percentage}%`;

    }

}


// ============================================================
// SAVE
// ============================================================

function saveProgress() {

    const data = {

        version:
            CONFIG.SAVE_VERSION,

        towers:
            towers.map(tower => ({

                id:
                    tower.id,

                unlocked:
                    Boolean(
                        tower.unlocked
                    )

            })),

        municipalities:
            municipalities.map(
                municipality => ({

                    name:
                        municipality.name,

                    unlocked:
                        Boolean(
                            municipality.unlocked
                        )

                })
            ),

        statues:
            statues.map(statue => ({

                id:
                    statue.id,

                discovered:
                    Boolean(
                        statue.discovered
                    ),

                photo:
                    statue.photo || null

            }))

    };


    try {

        localStorage.setItem(
            CONFIG.SAVE_KEY,
            JSON.stringify(data)
        );


        updateProgress();


        console.log(
            "StatueDex progress saved."
        );

    } catch (error) {

        console.error(
            "Save failed:",
            error
        );

    }

}


// ============================================================
// LOAD
// ============================================================

function loadProgress() {

    const raw =
        localStorage.getItem(
            CONFIG.SAVE_KEY
        );


    if (!raw) {

        updateProgress();

        return;

    }


    try {

        const data =
            JSON.parse(raw);


        if (
            Array.isArray(
                data.towers
            )
        ) {

            data.towers.forEach(
                saved => {

                    const tower =
                        getTower(
                            saved.id
                        );


                    if (tower) {

                        tower.unlocked =
                            Boolean(
                                saved.unlocked
                            );

                    }

                }
            );

        }


        if (
            Array.isArray(
                data.municipalities
            )
        ) {

            data.municipalities.forEach(
                saved => {

                    const municipality =
                        getMunicipality(
                            saved.name
                        );


                    if (municipality) {

                        municipality.unlocked =
                            Boolean(
                                saved.unlocked
                            );

                    }

                }
            );

        }


        if (
            Array.isArray(
                data.statues
            )
        ) {

            data.statues.forEach(
                saved => {

                    const statue =
                        getStatue(
                            saved.id
                        );


                    if (statue) {

                        statue.discovered =
                            Boolean(
                                saved.discovered
                            );


                        statue.photo =
                            saved.photo ||
                            null;

                    }

                }
            );

        }


        console.log(
            "StatueDex save loaded."
        );

    } catch (error) {

        console.error(
            "Save corrupted:",
            error
        );

    }


    updateProgress();

}


// ============================================================
// RESET
// ============================================================

function resetProgress() {

    const confirmed =
        confirm(
            "Reset all StatueDex progress?\n\n" +
            "This removes discovered landmarks, " +
            "photos and unlocked municipalities."
        );


    if (!confirmed) {
        return;
    }


    localStorage.removeItem(
        CONFIG.SAVE_KEY
    );


    towers.forEach(
        tower => {

            tower.unlocked =
                false;

        }
    );


    municipalities.forEach(
        municipality => {

            municipality.unlocked =
                false;

        }
    );


    statues.forEach(
        statue => {

            statue.discovered =
                false;

            statue.photo =
                null;

        }
    );


    nearbyStatue =
        null;


    placesCache =
        [];


    clearPlacesMarkers();


    drawMunicipalities();

    drawTowers();

    drawStatues();


    updateProgress();


    if (placesList) {

        placesList.innerHTML =
            `<p class="places-loading">
                🔒 Unlock a municipality first.
            </p>`;

    }


    if (placesStatus) {

        placesStatus.textContent =
            "0 places";

    }


    if (panelTitle) {

        panelTitle.textContent =
            "Explore";

    }


    if (panelText) {

        panelText.textContent =
            "Find a revealed landmark.";

    }


    if (discoverButton) {

        discoverButton.disabled =
            true;

    }


    if (galleryGrid) {

        galleryGrid.innerHTML =
            "";

    }


    status.textContent =
        "🗑️ Progress reset.";

}


// ============================================================
// DISTANCE
// ============================================================

function getDistance(
    lat1,
    lng1,
    lat2,
    lng2
) {

    const R =
        6371000;


    const dLat =
        (
            lat2 -
            lat1
        ) *
        Math.PI /
        180;


    const dLng =
        (
            lng2 -
            lng1
        ) *
        Math.PI /
        180;


    const a =

        Math.sin(
            dLat / 2
        ) ** 2

        +

        Math.cos(
            lat1 *
            Math.PI /
            180
        )

        *

        Math.cos(
            lat2 *
            Math.PI /
            180
        )

        *

        Math.sin(
            dLng / 2
        ) ** 2;


    return (

        2 *
        R *
        Math.atan2(
            Math.sqrt(a),
            Math.sqrt(
                1 - a
            )
        )

    );

}


// ============================================================
// MUNICIPALITY STYLE
// ============================================================

function municipalityStyle(feature) {

    const name =
        feature.properties.name_fr ||
        feature.properties.name ||
        "";


    const municipality =
        getMunicipality(name);


    const unlocked =
        municipality
            ? municipality.unlocked
            : false;


    return {

        fillColor:
            unlocked
                ? "transparent"
                : "#000000",

        fillOpacity:
            unlocked
                ? 0
                : 0.96,

        color:
            unlocked
                ? "#4b6470"
                : "#000000",

        weight:
            unlocked
                ? 1
                : 0

    };

}


// ============================================================
// MUNICIPALITY CLICK
// ============================================================

function municipalityClick(event) {

    const layer =
        event.target;


    const name =
        layer.feature.properties.name_fr ||
        layer.feature.properties.name ||
        "Unknown";


    const municipality =
        getMunicipality(name);


    if (!municipality) {
        return;
    }


    layer.bindPopup(

        `<b>${escapeHTML(name)}</b><br>` +

        (

            municipality.unlocked

                ? "🗺️ Revealed"

                : "⬛ Unexplored"

        )

    ).openPopup();

}


// ============================================================
// DRAW MUNICIPALITIES
// ============================================================

function drawMunicipalities() {

    Object.values(
        municipalityLayers
    ).forEach(
        layer => {

            map.removeLayer(
                layer
            );

        }
    );


    Object.keys(
        municipalityLayers
    ).forEach(
        key => {

            delete municipalityLayers[key];

        }
    );


    municipalities.forEach(
        municipality => {

            if (
                !municipality.feature
            ) {
                return;
            }


            const layer =
                L.geoJSON(
                    municipality.feature,
                    {

                        style:
                            municipalityStyle,

                        onEachFeature:
                            (
                                feature,
                                layer
                            ) => {

                                layer.on(
                                    "click",
                                    municipalityClick
                                );

                            }

                    }
                ).addTo(map);


            municipalityLayers[
                municipality.name
            ] = layer;

        }
    );

}


// ============================================================
// TOWER ICON
// ============================================================

function createTowerIcon(
    unlocked
) {

    return L.divIcon({

        className:
            "tower-icon" +
            (
                unlocked
                    ? " unlocked"
                    : ""
            ),

        iconSize:
            [42, 64],

        iconAnchor:
            [21, 64]

    });

}


// ============================================================
// DRAW TOWERS
// ============================================================

function drawTowers() {

    Object.values(
        towerMarkers
    ).forEach(
        marker => {

            map.removeLayer(
                marker
            );

        }
    );


    Object.keys(
        towerMarkers
    ).forEach(
        key => {

            delete towerMarkers[key];

        }
    );


    towers.forEach(
        tower => {

            const marker =
                L.marker(
                    [
                        tower.lat,
                        tower.lng
                    ],
                    {

                        icon:
                            createTowerIcon(
                                tower.unlocked
                            ),

                        zIndexOffset:
                            500

                    }
                );


            marker.bindPopup(

                `<b>🗼 ${escapeHTML(
                    tower.name
                )}</b><br>` +

                `<b>${escapeHTML(
                    tower.municipality
                )}</b><br><br>` +

                (

                    tower.unlocked

                        ? "🗺️ Municipality revealed!"

                        : "Reach this tower to reveal the municipality."

                )

            );


            marker.addTo(map);


            towerMarkers[
                tower.id
            ] = marker;

        }
    );

}


// ============================================================
// UNLOCK TOWER
// ============================================================

function unlockTower(tower) {

    if (
        !tower ||
        tower.unlocked
    ) {

        return false;

    }


    tower.unlocked =
        true;


    const municipality =
        getMunicipality(
            tower.municipality
        );


    if (municipality) {

        municipality.unlocked =
            true;

    }


    status.textContent =
        `🗼 ${tower.name} unlocked!`;


    drawMunicipalities();

    drawTowers();

    drawStatues();


    updateProgress();


    saveProgress();


    return true;

}


// ============================================================
// TEST TOWER
// ============================================================

function testTower(
    towerId
) {

    const tower =
        getTower(
            towerId
        );


    if (!tower) {
        return;
    }


    testLat =
        tower.lat;

    testLng =
        tower.lng;


    unlockTower(
        tower
    );


    updateLocation(
        tower.lat,
        tower.lng,
        5
    );


    map.setView(
        [
            tower.lat,
            tower.lng
        ],
        17
    );


    status.textContent =
        `🧪 TEST: ${tower.name}`;


}


// ============================================================
// STATUE ICON
// ============================================================

function createStatueIcon(
    discovered
) {

    return L.divIcon({

        className:
            "statue-icon" +
            (
                discovered
                    ? " discovered"
                    : ""
            ),

        iconSize:
            [30, 40],

        iconAnchor:
            [15, 35]

    });

}


// ============================================================
// DRAW STATUES
// ============================================================

function drawStatues() {

    Object.values(
        statueMarkers
    ).forEach(
        marker => {

            map.removeLayer(
                marker
            );

        }
    );


    Object.keys(
        statueMarkers
    ).forEach(
        key => {

            delete statueMarkers[key];

        }
    );


    statues.forEach(
        statue => {

            const municipality =
                getMunicipality(
                    statue.municipality
                );


            if (
                !municipality ||
                !municipality.unlocked
            ) {

                return;

            }


            const marker =
                L.marker(
                    [
                        statue.lat,
                        statue.lng
                    ],
                    {

                        icon:
                            createStatueIcon(
                                statue.discovered
                            )

                    }
                );


            const button =
                statue.discovered

                    ? ""

                    : `
                        <br>
                        <button
                            onclick="testStatue('${escapeHTML(
                                statue.id
                            )}')"
                        >
                            🧪 TEST LANDMARK
                        </button>
                    `;


            marker.bindPopup(

                `<b>🗿 ${escapeHTML(
                    statue.name
                )}</b><br>` +

                `<b>${escapeHTML(
                    statue.municipality
                )}</b><br><br>` +

                (

                    statue.discovered
                        ? "🎉 Discovered!"
                        : "❓ Undiscovered"

                ) +

                button

            );


            marker.addTo(map);


            statueMarkers[
                statue.id
            ] = marker;

        }
    );

}


// ============================================================
// TEST STATUE
// ============================================================

function testStatue(
    statueId
) {

    const statue =
        getStatue(
            statueId
        );


    if (!statue) {
        return;
    }


    const municipality =
        getMunicipality(
            statue.municipality
        );


    if (municipality) {

        municipality.unlocked =
            true;

    }


    testLat =
        statue.lat;

    testLng =
        statue.lng;


    updateLocation(
        statue.lat,
        statue.lng,
        5
    );


    map.setView(
        [
            statue.lat,
            statue.lng
        ],
        18
    );


    nearbyStatue =
        statue;


    panelTitle.textContent =
        `🗿 ${statue.name}`;


    panelText.textContent =
        "🧪 TEST MODE: take a photo to discover this landmark.";


    discoverButton.disabled =
        statue.discovered;


    status.textContent =
        `🧪 TEST: ${statue.name}`;

}


// ============================================================
// PLAYER ICON
// ============================================================

function createPlayerIcon() {

    return L.divIcon({

        className:
            "",

        html:
            '<div class="player-dot"></div>',

        iconSize:
            [18, 18],

        iconAnchor:
            [9, 9]

    });

}


// ============================================================
// FIND NEAREST STATUE
// ============================================================

function findNearbyStatue(
    lat,
    lng
) {

    let closest =
        null;


    let closestDistance =
        Infinity;


    statues.forEach(
        statue => {

            if (
                statue.discovered
            ) {
                return;
            }


            const municipality =
                getMunicipality(
                    statue.municipality
                );


            if (
                !municipality ||
                !municipality.unlocked
            ) {

                return;

            }


            const distance =
                getDistance(
                    lat,
                    lng,
                    statue.lat,
                    statue.lng
                );


            if (
                distance <=
                CONFIG.STATUE_DISTANCE &&
                distance <
                closestDistance
            ) {

                closest =
                    statue;

                closestDistance =
                    distance;

            }

        }
    );


    return closest;

}


// ============================================================
// UPDATE PLAYER LOCATION
// ============================================================

function updateLocation(
    lat,
    lng,
    accuracy
) {

    playerLocation = {

        lat,
        lng,
        accuracy:
            accuracy || 5

    };


    // --------------------------------------------------------
    // PLAYER MARKER
    // --------------------------------------------------------

    if (playerMarker) {

        playerMarker.setLatLng(
            [
                lat,
                lng
            ]
        );

    } else {

        playerMarker =
            L.marker(
                [
                    lat,
                    lng
                ],
                {

                    icon:
                        createPlayerIcon(),

                    zIndexOffset:
                        2000

                }
            ).addTo(map);

    }


    // --------------------------------------------------------
    // ACCURACY
    // --------------------------------------------------------

    const safeAccuracy =
        Math.max(
            Number(accuracy) || 5,
            5
        );


    if (playerAccuracyCircle) {

        playerAccuracyCircle
            .setLatLng(
                [
                    lat,
                    lng
                ]
            );


        playerAccuracyCircle
            .setRadius(
                safeAccuracy
            );

    } else {

        playerAccuracyCircle =
            L.circle(
                [
                    lat,
                    lng
                ],
                {

                    radius:
                        safeAccuracy,

                    color:
                        "#2aa8ff",

                    fillColor:
                        "#2aa8ff",

                    fillOpacity:
                        0.15,

                    weight:
                        2,

                    interactive:
                        false

                }
            ).addTo(map);

    }


    // --------------------------------------------------------
    // TOWERS
    // --------------------------------------------------------

    let unlockedSomething =
        false;


    towers.forEach(
        tower => {

            if (
                tower.unlocked
            ) {
                return;
            }


            const distance =
                getDistance(
                    lat,
                    lng,
                    tower.lat,
                    tower.lng
                );


            if (
                distance <=
                CONFIG.TOWER_DISTANCE
            ) {

                if (
                    unlockTower(
                        tower
                    )
                ) {

                    unlockedSomething =
                        true;

                }

            }

        }
    );


    if (unlockedSomething) {

        placesCache =
            [];

    }


    // --------------------------------------------------------
    // NEAREST LANDMARK
    // --------------------------------------------------------

    nearbyStatue =
        findNearbyStatue(
            lat,
            lng
        );


    // --------------------------------------------------------
    // PANEL
    // --------------------------------------------------------

    if (nearbyStatue) {

        const distance =
            getDistance(
                lat,
                lng,
                nearbyStatue.lat,
                nearbyStatue.lng
            );


        panelTitle.textContent =
            `🗿 ${nearbyStatue.name}`;


        panelText.textContent =
            `You're ${Math.round(
                distance
            )}m away. Take a photo to discover it!`;


        discoverButton.disabled =
            false;

    } else {

        panelTitle.textContent =
            "Explore";


        panelText.textContent =
            "Find a revealed landmark.";


        discoverButton.disabled =
            true;

    }

}


// ============================================================
// GPS
// ============================================================

function startGPS() {

    if (
        !navigator.geolocation
    ) {

        status.textContent =
            "❌ GPS is not supported on this device.";

        return;

    }


    if (
        gpsWatchId !== null
    ) {

        navigator.geolocation.clearWatch(
            gpsWatchId
        );

    }


    status.textContent =
        "📍 Requesting GPS location...";


    gpsWatchId =
        navigator.geolocation.watchPosition(

            position => {

                const lat =
                    position.coords.latitude;

                const lng =
                    position.coords.longitude;

                const accuracy =
                    position.coords.accuracy;


                updateLocation(
                    lat,
                    lng,
                    accuracy
                );


                status.textContent =
                    `📍 GPS active • ±${Math.round(
                        accuracy
                    )}m`;

            },

            error => {

                console.error(
                    "GPS error:",
                    error
                );


                if (
                    error.code ===
                    1
                ) {

                    status.textContent =
                        "❌ GPS permission denied.";

                }

                else if (
                    error.code ===
                    2
                ) {

                    status.textContent =
                        "❌ GPS position unavailable.";

                }

                else if (
                    error.code ===
                    3
                ) {

                    status.textContent =
                        "❌ GPS request timed out.";

                }

                else {

                    status.textContent =
                        "❌ GPS error.";

                }

            },

            {

                enableHighAccuracy:
                    true,

                maximumAge:
                    CONFIG.GPS_MAX_AGE,

                timeout:
                    CONFIG.GPS_TIMEOUT

            }

        );

}


// ============================================================
// LOCATE BUTTON
// ============================================================

if (locateButton) {

    locateButton.addEventListener(
        "click",
        () => {

            if (
                playerLocation
            ) {

                map.setView(
                    [
                        playerLocation.lat,
                        playerLocation.lng
                    ],
                    17
                );


                return;

            }


            status.textContent =
                "📍 Waiting for GPS...";


            startGPS();

        }
    );

}


// ============================================================
// CAMERA / DISCOVERY
// ============================================================

if (discoverButton) {

    discoverButton.addEventListener(
        "click",
        () => {

            if (
                !nearbyStatue
            ) {
                return;
            }


            cameraInput.click();

        }
    );

}


if (cameraInput) {

    cameraInput.addEventListener(
        "change",
        event => {

            const file =
                event.target.files[0];


            if (
                !file ||
                !nearbyStatue
            ) {

                return;

            }


            const statue =
                nearbyStatue;


            const reader =
                new FileReader();


            reader.onload = () => {

                statue.photo =
                    reader.result;


                statue.discovered =
                    true;


                nearbyStatue =
                    null;


                saveProgress();


                status.textContent =
                    `🎉 ${statue.name} discovered!`;


                panelTitle.textContent =
                    "LANDMARK DISCOVERED! 🎉";


                panelText.textContent =
                    `${statue.name} has been added to your StatueDex.`;


                discoverButton.disabled =
                    true;


                drawStatues();


                renderGallery();


                cameraInput.value =
                    "";

            };


            reader.readAsDataURL(
                file
            );

        }
    );

}


// ============================================================
// GALLERY
// ============================================================

function renderGallery() {

    if (!galleryGrid) {
        return;
    }


    galleryGrid.innerHTML =
        "";


    const discovered =
        statues.filter(
            statue =>
                statue.discovered &&
                statue.photo
        );


    if (
        discovered.length ===
        0
    ) {

        galleryGrid.innerHTML =

            `<p class="no-photos">
                No landmarks discovered yet.
                Go explore Brussels! 🗿
            </p>`;

        return;

    }


    discovered.forEach(
        statue => {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "gallery-card";


            card.innerHTML = `

                <img
                    src="${statue.photo}"
                    alt="${escapeHTML(
                        statue.name
                    )}"
                >

                <div class="gallery-card-info">

                    <strong>
                        ${escapeHTML(
                            statue.name
                        )}
                    </strong>

                    <small>
                        ${escapeHTML(
                            statue.municipality
                        )}
                    </small>

                    <small>
                        🗿 Discovered
                    </small>

                </div>

            `;


            galleryGrid.appendChild(
                card
            );

        }
    );

}


// ============================================================
// GALLERY OPEN
// ============================================================

if (galleryButton) {

    galleryButton.addEventListener(
        "click",
        () => {

            renderGallery();


            galleryOverlay.classList.remove(
                "hidden"
            );

        }
    );

}


// ============================================================
// GALLERY CLOSE
// ============================================================

if (closeGallery) {

    closeGallery.addEventListener(
        "click",
        () => {

            galleryOverlay.classList.add(
                "hidden"
            );

        }
    );

}


if (galleryOverlay) {

    galleryOverlay.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                galleryOverlay
            ) {

                galleryOverlay.classList.add(
                    "hidden"
                );

            }

        }
    );

}


// ============================================================
// TEST CONTROLS
// ============================================================

document.addEventListener(
    "keydown",
    event => {

        if (
            !CONFIG.TEST_MODE
        ) {
            return;
        }


        let moved =
            false;


        switch (
            event.key
        ) {

            case "ArrowUp":

                testLat +=
                    CONFIG.TEST_STEP;

                moved =
                    true;

                break;


            case "ArrowDown":

                testLat -=
                    CONFIG.TEST_STEP;

                moved =
                    true;

                break;


            case "ArrowLeft":

                testLng -=
                    CONFIG.TEST_STEP;

                moved =
                    true;

                break;


            case "ArrowRight":

                testLng +=
                    CONFIG.TEST_STEP;

                moved =
                    true;

                break;

        }


        if (!moved) {
            return;
        }


        event.preventDefault();


        updateLocation(
            testLat,
            testLng,
            5
        );


        map.setView(
            [
                testLat,
                testLng
            ],
            map.getZoom()
        );

    }
);


// ============================================================
// LOAD MUNICIPALITIES
// ============================================================

async function loadMunicipalities() {

    try {

        status.textContent =
            "🗺️ Loading Brussels municipalities...";


        const response =
            await fetch(
                "municipalities.geojson"
            );


        if (
            !response.ok
        ) {

            throw new Error(
                "municipalities.geojson not found"
            );

        }


        const geojson =
            await response.json();


        if (
            !geojson.features ||
            !Array.isArray(
                geojson.features
            )
        ) {

            throw new Error(
                "Invalid GeoJSON"
            );

        }


        municipalities =
            geojson.features.map(
                feature => ({

                    name:
                        feature.properties.name_fr ||
                        feature.properties.name,

                    unlocked:
                        false,

                    feature:
                        feature

                })
            );


        console.log(
            `Loaded ${municipalities.length} municipalities.`
        );


        loadProgress();


        drawMunicipalities();

        drawTowers();

        drawStatues();

        updateProgress();


        if (
            CONFIG.TEST_MODE
        ) {

            updateLocation(
                testLat,
                testLng,
                5
            );


            map.setView(
                [
                    testLat,
                    testLng
                ],
                15
            );


            status.textContent =
                "🧪 TEST MODE • Arrow keys enabled.";

        }

        else {

            startGPS();

        }


    } catch (error) {

        console.error(
            error
        );


        status.textContent =
            "❌ Could not load municipalities.geojson.";

    }

}


// ============================================================
// PLACES
// OPENSTREETMAP / OVERPASS
// ============================================================

const PLACE_CATEGORIES = {

    library: {

        icon: "📚",

        name: "Libraries",

        query:
            '["amenity"="library"]'

    },


    restaurant: {

        icon: "🍽️",

        name: "Restaurants",

        query:
            '["amenity"="restaurant"]'

    },


    cafe: {

        icon: "☕",

        name: "Cafés",

        query:
            '["amenity"="cafe"]'

    },


    toilet: {

        icon: "🚻",

        name: "Toilets",

        query:
            '["amenity"="toilets"]'

    },


    museum: {

        icon: "🏛️",

        name: "Museums",

        query:
            '["tourism"="museum"]'

    },


    park: {

        icon: "🌳",

        name: "Parks",

        query:
            '["leisure"="park"]'

    },


    place_of_worship: {

        icon: "⛪",

        name: "Churches",

        query:
            '["amenity"="place_of_worship"]'

    },


    shop: {

        icon: "🛍️",

        name: "Shops",

        query:
            '["shop"]'

    },


    historic: {

        icon: "🏰",

        name: "Historic",

        query:
            '["historic"]'

    }

};


// ============================================================
// CATEGORY DETECTION
// ============================================================

function detectPlaceCategory(
    tags
) {

    if (
        tags.amenity ===
        "library"
    ) {

        return "library";

    }


    if (
        tags.amenity ===
        "restaurant"
    ) {

        return "restaurant";

    }


    if (
        tags.amenity ===
        "cafe"
    ) {

        return "cafe";

    }


    if (
        tags.amenity ===
        "toilets"
    ) {

        return "toilet";

    }


    if (
        tags.tourism ===
        "museum"
    ) {

        return "museum";

    }


    if (
        tags.leisure ===
        "park"
    ) {

        return "park";

    }


    if (
        tags.amenity ===
        "place_of_worship"
    ) {

        return "place_of_worship";

    }


    if (
        tags.shop
    ) {

        return "shop";

    }


    if (
        tags.historic
    ) {

        return "historic";

    }


    return "all";

}


// ============================================================
// OPEN PLACES
// ============================================================

if (placesButton) {

    placesButton.addEventListener(
        "click",
        () => {

            placesOverlay.classList.remove(
                "hidden"
            );


            loadPlaces(
                currentPlaceCategory
            );

        }
    );

}


// ============================================================
// CLOSE PLACES
// ============================================================

if (closePlaces) {

    closePlaces.addEventListener(
        "click",
        () => {

            placesOverlay.classList.add(
                "hidden"
            );

        }
    );

}


// ============================================================
// CATEGORY BUTTONS
// ============================================================

placeCategoryButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                placeCategoryButtons.forEach(
                    other => {

                        other.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                currentPlaceCategory =
                    button.dataset.category ||
                    "all";


                displayPlacesFromCache();

            }
        );

    }
);


// ============================================================
// SEARCH
// ============================================================

if (placeSearch) {

    placeSearch.addEventListener(
        "input",
        () => {

            currentPlaceSearch =
                placeSearch.value
                    .trim()
                    .toLowerCase();


            displayPlacesFromCache();

        }
    );

}


// ============================================================
// CLEAR PLACE MARKERS
// ============================================================

function clearPlacesMarkers() {

    placesMarkers.forEach(
        marker => {

            map.removeLayer(
                marker
            );

        }
    );


    placesMarkers =
        [];

}


// ============================================================
// PLACE POSITION
// ============================================================

function getPlacePosition(
    element
) {

    if (

        element.type ===
        "node"

        &&

        element.lat != null

        &&

        element.lon != null

    ) {

        return [
            element.lat,
            element.lon
        ];

    }


    if (

        element.center

        &&

        element.center.lat != null

        &&

        element.center.lon != null

    ) {

        return [
            element.center.lat,
            element.center.lon
        ];

    }


    return null;

}


// ============================================================
// POINT IN RING
// ============================================================

function pointInRing(
    lat,
    lng,
    ring
) {

    let inside =
        false;


    for (
        let i = 0,
        j = ring.length - 1;

        i < ring.length;

        j = i++
    ) {

        const xi =
            ring[i][0];

        const yi =
            ring[i][1];

        const xj =
            ring[j][0];

        const yj =
            ring[j][1];


        const intersect =

            (
                yi > lat
            )

            !==

            (
                yj > lat
            )

            &&

            (
                lng <
                (
                    xj - xi
                )

                *

                (
                    lat - yi
                )

                /

                (
                    yj - yi
                )

                +

                xi
            );


        if (intersect) {

            inside =
                !inside;

        }

    }


    return inside;

}


// ============================================================
// POINT IN GEOMETRY
// ============================================================

function pointInGeometry(
    lat,
    lng,
    geometry
) {

    if (!geometry) {
        return false;
    }


    if (
        geometry.type ===
        "Polygon"
    ) {

        const rings =
            geometry.coordinates;


        if (
            !rings ||
            !rings.length
        ) {

            return false;

        }


        if (
            !pointInRing(
                lat,
                lng,
                rings[0]
            )
        ) {

            return false;

        }


        for (
            let i = 1;

            i < rings.length;

            i++
        ) {

            if (
                pointInRing(
                    lat,
                    lng,
                    rings[i]
                )
            ) {

                return false;

            }

        }


        return true;

    }


    if (
        geometry.type ===
        "MultiPolygon"
    ) {

        return geometry.coordinates.some(
            polygon => {

                if (
                    !polygon ||
                    !polygon.length
                ) {

                    return false;

                }


                if (
                    !pointInRing(
                        lat,
                        lng,
                        polygon[0]
                    )
                ) {

                    return false;

                }


                for (
                    let i = 1;

                    i < polygon.length;

                    i++
                ) {

                    if (
                        pointInRing(
                            lat,
                            lng,
                            polygon[i]
                        )
                    ) {

                        return false;

                    }

                }


                return true;

            }
        );

    }


    return false;

}


// ============================================================
// FIND MUNICIPALITY
// ============================================================

function getPlaceMunicipality(
    lat,
    lng
) {

    for (
        const municipality
        of municipalities
    ) {

        if (
            !municipality.feature ||
            !municipality.feature.geometry
        ) {

            continue;

        }


        if (
            pointInGeometry(
                lat,
                lng,
                municipality.feature.geometry
            )
        ) {

            return municipality;

        }

    }


    return null;

}


// ============================================================
// PLACE ICON
// ============================================================

function createPlaceIcon(
    category
) {

    const definition =
        PLACE_CATEGORIES[
            category
        ];


    const icon =
        definition
            ? definition.icon
            : "📍";


    return L.divIcon({

        className:
            "place-map-icon",

        html:
            `<div style="
                font-size:24px;
                filter:drop-shadow(
                    0 0 5px
                    rgba(98,215,255,0.7)
                );
            ">${icon}</div>`,

        iconSize:
            [30, 30],

        iconAnchor:
            [15, 15]

    });

}


// ============================================================
// BUILD OVERPASS QUERY
// ============================================================

function buildPlacesQuery(
    category
) {

    let parts =
        [];


    if (
        category ===
        "all"
    ) {

        Object.values(
            PLACE_CATEGORIES
        ).forEach(
            definition => {

                parts.push(
                    `nwr${definition.query}(${CONFIG.OSM_BBOX});`
                );

            }
        );

    }

    else {

        const definition =
            PLACE_CATEGORIES[
                category
            ];


        if (!definition) {

            return null;

        }


        parts.push(
            `nwr${definition.query}(${CONFIG.OSM_BBOX});`
        );

    }


    return `

        [out:json][timeout:30];

        (
            ${parts.join("\n")}
        );

        out center tags;

    `;

}


// ============================================================
// LOAD PLACES
// ============================================================

async function loadPlaces(
    category
) {

    clearPlacesMarkers();


    const unlocked =
        municipalities.filter(
            municipality =>
                municipality.unlocked
        );


    if (
        unlocked.length ===
        0
    ) {

        placesList.innerHTML =
            `<p class="places-loading">
                🔒 Unlock a municipality first.
            </p>`;


        placesStatus.textContent =
            "0 places";


        return;

    }


    placesList.innerHTML =
        `<p class="places-loading">
            🔄 Loading places from OpenStreetMap...
        </p>`;


    placesStatus.textContent =
        "Loading...";


    const query =
        buildPlacesQuery(
            category
        );


    if (!query) {
        return;
    }


    try {

        const response =
            await fetch(
                "https://overpass-api.de/api/interpreter",
                {

                    method:
                        "POST",

                    body:
                        query

                }
            );


        if (
            !response.ok
        ) {

            throw new Error(
                `Overpass HTTP ${response.status}`
            );

        }


        const data =
            await response.json();


        placesCache =
            Array.isArray(
                data.elements
            )
                ? data.elements
                : [];


        displayPlacesFromCache();


    } catch (error) {

        console.error(
            "Places error:",
            error
        );


        placesStatus.textContent =
            "Could not load places.";


        placesList.innerHTML =
            `<p class="places-error">
                ❌ Could not load places.
                Try again later.
            </p>`;

    }

}


// ============================================================
// DISPLAY PLACES FROM CACHE
// ============================================================

function displayPlacesFromCache() {

    clearPlacesMarkers();


    if (
        !placesList
    ) {
        return;
    }


    placesList.innerHTML =
        "";


    const seen =
        new Set();


    const results =
        [];


    placesCache.forEach(
        element => {

            const position =
                getPlacePosition(
                    element
                );


            if (!position) {
                return;
            }


            const lat =
                position[0];

            const lng =
                position[1];


            const municipality =
                getPlaceMunicipality(
                    lat,
                    lng
                );


            if (
                !municipality ||
                !municipality.unlocked
            ) {

                return;

            }


            const tags =
                element.tags || {};


            const name =
                tags.name ||
                tags["name:fr"] ||
                tags["name:en"] ||
                "Unnamed place";


            const key =
                `${element.type}-${element.id}`;


            if (
                seen.has(key)
            ) {

                return;

            }


            seen.add(key);


            const placeCategory =
                currentPlaceCategory ===
                "all"

                    ? detectPlaceCategory(
                        tags
                    )

                    : currentPlaceCategory;


            if (
                currentPlaceCategory !==
                "all"

                &&

                placeCategory !==
                currentPlaceCategory
            ) {

                return;

            }


            const searchText =
                (

                    name +

                    " " +

                    municipality.name +

                    " " +

                    (
                        tags["addr:street"] ||
                        ""
                    )

                ).toLowerCase();


            if (

                currentPlaceSearch

                &&

                !searchText.includes(
                    currentPlaceSearch
                )

            ) {

                return;

            }


            let distance =
                null;


            if (
                playerLocation
            ) {

                distance =
                    getDistance(
                        playerLocation.lat,
                        playerLocation.lng,
                        lat,
                        lng
                    );

            }


            results.push({

                element,
                position,
                municipality,
                tags,
                name,
                placeCategory,
                distance

            });

        }
    );


    // --------------------------------------------------------
    // SORT
    // --------------------------------------------------------

    results.sort(
        (a, b) => {

            if (
                a.distance == null
            ) {

                return a.name.localeCompare(
                    b.name
                );

            }


            if (
                b.distance == null
            ) {

                return -1;

            }


            return (
                a.distance -
                b.distance
            );

        }
    );


    // --------------------------------------------------------
    // NO RESULTS
    // --------------------------------------------------------

    if (
        results.length ===
        0
    ) {

        placesList.innerHTML =
            `<p class="places-loading">
                🔍 No matching places found.
            </p>`;


        placesStatus.textContent =
            "0 places";


        return;

    }


    // --------------------------------------------------------
    // RENDER
    // --------------------------------------------------------

    results.forEach(
        result => {

            const {

                position,
                municipality,
                tags,
                name,
                placeCategory,
                distance

            } = result;


            const definition =
                PLACE_CATEGORIES[
                    placeCategory
                ];


            const icon =
                definition
                    ? definition.icon
                    : "📍";


            const categoryName =
                definition
                    ? definition.name
                    : "Place";


            const marker =
                L.marker(
                    position,
                    {

                        icon:
                            createPlaceIcon(
                                placeCategory
                            ),

                        zIndexOffset:
                            300

                    }
                );


            let popup =
                `<b>${icon} ${escapeHTML(
                    name
                )}</b>`;


            popup +=
                `<br><small>${escapeHTML(
                    municipality.name
                )}</small>`;


            if (
                tags["addr:street"]
            ) {

                popup +=
                    `<br>${escapeHTML(
                        tags["addr:street"]
                    )}`;


                if (
                    tags["addr:housenumber"]
                ) {

                    popup +=
                        ` ${escapeHTML(
                            tags[
                                "addr:housenumber"
                            ]
                        )}`;

                }

            }


            popup +=
                `<br><small>${escapeHTML(
                    categoryName
                )}</small>`;


            if (
                distance != null
            ) {

                popup +=
                    `<br><small>📍 ${formatDistance(
                        distance
                    )}</small>`;

            }


            marker.bindPopup(
                popup
            );


            marker.addTo(
                map
            );


            placesMarkers.push(
                marker
            );


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "place-card";


            let address =
                "";


            if (
                tags["addr:street"]
            ) {

                address =
                    tags["addr:street"];


                if (
                    tags["addr:housenumber"]
                ) {

                    address +=
                        ` ${tags[
                            "addr:housenumber"
                        ]}`;

                }

            }


            const distanceHTML =
                distance != null

                    ? `<small>
                        📍 ${formatDistance(
                            distance
                        )}
                    </small>`

                    : "";


            card.innerHTML = `

                <strong>
                    ${icon}
                    ${escapeHTML(
                        name
                    )}
                </strong>

                <small>
                    ${
                        address
                            ? escapeHTML(
                                address
                            )
                            : "Address unavailable"
                    }
                </small>

                <small>
                    🏙️ ${escapeHTML(
                        municipality.name
                    )}
                </small>

                ${distanceHTML}

                <div class="place-type">
                    ${escapeHTML(
                        categoryName
                    )}
                </div>

            `;


            card.addEventListener(
                "click",
                () => {

                    placesOverlay.classList.add(
                        "hidden"
                    );


                    map.setView(
                        position,
                        18
                    );


                    marker.openPopup();

                }
            );


            placesList.appendChild(
                card
            );

        }
    );


    placesStatus.textContent =
        `${results.length} places found`;

}


// ============================================================
// FORMAT DISTANCE
// ============================================================

function formatDistance(
    meters
) {

    if (
        meters < 1000
    ) {

        return `${Math.round(
            meters
        )} m`;

    }


    return `${(
        meters /
        1000
    ).toFixed(1)} km`;

}


// ============================================================
// RESET BUTTON
// ============================================================

if (resetButton) {

    resetButton.addEventListener(
        "click",
        resetProgress
    );

}


// ============================================================
// START
// ============================================================

loadMunicipalities();