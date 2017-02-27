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
		<div class='datafield'>" + props.NAME + "</div><div class='labelfield'>Category:</div>\
		<div class='datafield'>" + props.CATEGORY0 + "</div><div class='labelfield'>Mode:</div>\
		<div class='datafield'>" + props.MODE + "</div><div class='labelfield'>Investment Area:</div>\
		<div id='needpadding' class='datafield'>" + props.AREA + "</div>\
		<div id='indactorInfo'>\
			<ul class='nav nav-tabs'><!--tabs for indicators-->\
				<li class='active'><a href='#Fun' data-toggle='tab'>Funding</a></li>\
				<li><a href='#Des' data-toggle='tab'>Description</a></li>\
				<li><a href='#Com' data-toggle='tab'>Comment</a></li>\
			</ul>\
			<div id='indicator' class='tab-content'><!--tab panes-->\
				<div class='tab-pane active' id='Fun'>\
					<table class='table table-hover' >\
						<tr><td><div class='labelfield'>2017 Funding:</div></td><td>" + numeral(props.FYSEVEN_TOT * 1000).format('$0,0[.]00') + "</td></tr>\
						<tr><td><div class='labelfield'>2018 Funding:</div></td><td>" + numeral(props.FYEIGHT_TOT * 1000).format('$0,0[.]00') + "</td></tr>\
						<tr><td><div class='labelfield'>2019 Funding:</div></td><td>" + numeral(props.FYNINE_TOT * 1000).format('$0,0[.]00') + "</td></tr>\
						<tr><td><div class='labelfield'>2020 Funding:</div></td><td>" + numeral(props.FYTWENTY_TOT * 1000).format('$0,0[.]00') + "</td></tr>\
						<tr><td><div class='labelfield'>2021 Funding:</div></td><td>" + numeral(props.FYTWENTYONE_TOT * 1000).format('$0,0[.]00') + "</td></tr>\
						<tr><td><div class='labelfield'>Total Funding (2018-2021):</div></td><td>" + numeral((props.FYEIGHT_TOT + props.FYNINE_TOT + props.FYTWENTY_TOT + props. FYTWENTYONE_TOT) * 1000).format('$0,0[.]00') + "</td></tr>\
					</table>\
				</div>\
				<div class='tab-pane' id='Des'>\
					<div class='descWrapper' id='wrapA'>\
						<div class='datafield'>" + props.DESCRIPTIO + "</div>\
					</div>\
				</div>\
				<div class='tab-pane' id='Com'>\
					<div class='descWrapper' id='wrapA'>\
						<textarea name='comment' id='commentForm'></textarea><br>\
						<div id='submitButtonDiv'>\
							<input type='submit' value='Submit' class='SubmitButton'>\
						</div>\
						<div class='labelfield' id='submitFeedback'>Comment submitted!</div>\
					</div>\
				</div>\
			</div>\
		</div>\
		<div class='labelfield source'>Source: 2016 Wilmapco</div>\
	</div>",
    layerName = 'layer1';
    contentPush(header, content, layerName, titleName, headerClass);       
};