$(function () {
  const checkedAmenity = {};
  $('li input[type="checkbox"]').on('change', function () {
    if(this.checked) {
	  checkedAmenity[this.dataset.name] = this.dataset.id;
	} else {
	  delete checkedAmenity[this.dataset.name];
	}
	$('.amenities h4').text(Object.keys(checkedAmenity).sort().join(', '));
  });
});
