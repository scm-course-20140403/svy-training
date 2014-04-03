
/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"444ECEC1-BE60-4761-A513-0B8A177A0F6F"}
 */
function onDataChange(oldValue, newValue, event) {
	application.output('company name is changed!');
	return true
}
