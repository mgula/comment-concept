//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////  Declare Shared Values //////////////////////

var hlweight = 6, 			//weight of highlighted feature outline
	hlColor = "#EFA06A";	//color of point, outline and line highlights


// required variables DO NOT REMOVE
var polyLayer= [],layersearch, props, header, content, titleName, headerClass;

////////////////////////////////////////////////////
//Individual Feature actions /////////////////////	
//Note: attribute names in the .json files cannot begin with an integer - you'll get an error
//  layer 1
function highlightLayer1(e) {
    initializeHL(e);
	header = '&nbsp;',
    content = "<div id='baseInfo'>\
		<div class='labelfield'>Project Name:</div>\
		<div class='datafield' id='projectName'>" + props.NAME + "</div><div class='labelfield'>Category:</div>\
		<div class='datafield'>" + props.CATEGORY0 + "</div><div class='labelfield'>Mode:</div>\
		<div class='datafield'>" + props.MODE + "</div><div class='labelfield'>Investment Area:</div>\
		<div id='needpadding' class='datafield'>" + props.AREA + "</div>\
		<div id='formDiv'>\
			<form id='ajax-contact' action='/submit.php' method='POST'>\
				<div class='labelfield'>Your name (optional):</div>\
				<textarea name='name' id='nameForm'></textarea>\
				<div class='labelfield'>Your email (optional):</div>\
				<textarea name='email' id='emailForm'></textarea>\
				<div class='labelfield'>Your comment:</div>\
				<textarea name='comment' id='commentForm' required></textarea>\
				<br>\
				<button type='submit' class='submitButton'>Send</button>\
			</form>\
		</div>\
		<div class='labelfield source'>Source: 2016 Wilmapco</div>\
	</div>",
    layerName = 'layer1';
    contentPush(header, content, layerName, titleName, headerClass);       
};