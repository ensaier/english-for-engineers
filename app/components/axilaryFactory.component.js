var app = app || {};
app.components = app.components || {};

app.components.axilaryFactory = (function(){

	var mapper = {
		N: 'negativeMarker',
		A: 'questionMarker',
		Q: 'questionMarker',
		AS: 'specialMarker',
	}

	/**
	 * Build dropdown from income data
	 * @param  {object]} mapping Simple relations mapper
	 * @param  {object} node    datasheet
	 * @return {object}         DOM element
	 */
	function buildDropdown(mapping, node) {
		var element = document.createElement('div');
		var select = document.createElement('select');

		element.className = 'col-md-2 plain-element';
		select.className = 'form-control';

		['singular', 'plural'].forEach(function(element){
			var optgroup = document.createElement('optgroup');

			optgroup.label = element;
			["1","2","3"].forEach(function(type) {
				var option = document.createElement('option');

				option.innerHTML = type + ': ' + node[mapping][element][type];
				optgroup.appendChild(option);
			});
			select.appendChild(optgroup);
		});
		element.appendChild(select);

		return element;
	}

	return function(type, node) {
		var target = buildDropdown(mapper[type], node);

		return target;
	}
})();