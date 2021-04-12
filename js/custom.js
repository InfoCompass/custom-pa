
angular.module('icFilters')

.filter('icCategory', [

	'icTaxonomy',

	function(icTaxonomy){
		var dummy = {name: 'unknown'}
		
		return function(item){
			var tags = item && item.tags

			if(!tags) return dummy


			return icTaxonomy.getCategory(item && item.primaryTopic || tags)
		}
	}
])