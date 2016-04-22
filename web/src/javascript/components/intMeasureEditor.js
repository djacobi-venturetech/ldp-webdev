/**
 * Created by vtdev on 4/19/16.
 */
function onIntMeasureInput(element, targetName, targetLabelId) {
	var val = parseInt(element.value);
	var target = document.getElementsByName(targetName)[0];
	if(target.type.toLowerCase() == 'range' && parseInt(target.max) < val) {
		target.max = val;
	}
	target.value = val;
}