//declare boundary of region
var oLat = 39.5675, oLng = -75.5651, zLevel = 10, mZoom = 16;             //adjust lat-lon coordinates to center on your region


//declare basemaps
// Basemap Layers
var Esri_WorldImagery = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
	maxZoom: mZoom
});

var Esri_transportation = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community',
	maxZoom: mZoom
});

var Esri_WorldGrayCanvas = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
    maxZoom: mZoom
});


//create map instance
var map = L.map("mapDIV", {
    minZoom: 1,
    zoomControl: false,
    layers: [Esri_transportation]
}).setView([oLat, oLng],zLevel);

//add Layer Control to map
var baseLayers = {
    "Satellite": Esri_WorldImagery,      
    "Grey": Esri_WorldGrayCanvas,
	"Detailed": Esri_transportation
};
L.control.layers(baseLayers).addTo(map);

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
/////////      Declare Data Layers Here        ///////////////////
//////////////////////////////////////////////////////////////////

//define Icon Set and Marker Types 
var IconPresets = {iconSet:'dynico', markerSet: 'open-freight', mapMarker: 'circle-cm', legendMarker: 'circle-md'};
 
//declare Base Info for layers
var layer1icon = L.OpenFreightMarkers.icon({
        icon: 'nhs', markerColor: 'purple', layer:'layer1', title: 'layer 1'}, IconPresets);
	

//define search groups for each layer that will be searchable
var layer1Search = [];

//layer 1 (point)
var layer1 = L.geoJson(null, {
    style: {weight:4, color:"#9854c9 ", opacity:.75},    
    onEachFeature: function (feature, layer){
        layer.on({
            click: highlightLayer1,
            dblclick: zoomToFeature
        });
        layer1Search.push({
            name: layer.feature.properties.NAME,
            source: "Layer 1",
            id: L.stamp(layer),
            bounds: layer.getBounds()
        });
    }
});
$.getJSON("data/TIP2018poly.json", function (data) {
    layer1.addData(data);
});
polyLayer.push('layer1');

///////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//  Create search functionality using Typeahead   ////
//////////////////////////////////////////////////////
 
$("#searchbox").click(function () {
    $(this).select();
});

// Typeahead search functionality
$(document).one("ajaxStop", function() {
    $("#loading").hide();
    //tokenize each search array using Bloodhound
   var layer1BH = new Bloodhound({
        name: "Layer 1",
        datumTokenizer: function (d) {
            return Bloodhound.tokenizers.whitespace(d.name);
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: layer1Search,
        limit: 10
    });
   //initialize 
    layer1BH.initialize();
    //activate Typeahead on Searchbox DOM element
    $("#searchbox").typeahead({
    	//define options (see Typeahead documentation)
    	minLength: 2,
        highlight: true,
        hint: false
    },{
    	name: "Layer1data",
        displayKey: "name",
        source: layer1BH.ttAdapter(),
        templates: {
            header: "<h5 class='typeahead-header'>layer 1</h5>"
        }
	}).on("typeahead:selected", function (obj, datum) {		//define action on selection of a search result
       if (datum.source === "Layer 1") {	
            if (!map.hasLayer(layer1)) {	
                map.addLayer(layer1);	
                $("#layer1").prop("checked", true);				 
            };
            map.fitBounds(datum.bounds);						
            if (map._layers[datum.id]) {					
                map._layers[datum.id].fire("click");
            }; 
        };
    }).on("typeahead:opened", function () {
            $(".navbar-collapse.in").css("max-height", $(document).height()-$(".navbar-header").height());
            $(".navbar-collapse.in").css("height", $(document).height()-$(".navbar-header").height());
        }).on("typeahead:closed", function () {
            $(".navbar-collapse.in").css("max-height", "");
            $(".navbar-collapse.in").css("height", "");
        });
        $(".twitter-typeahead").css("position", "static");
        $(".twitter-typeahead").css("display", "block");
    });

    
