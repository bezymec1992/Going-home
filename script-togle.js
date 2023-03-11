document.addEventListener('DOMContentLoaded', () => {
	const toggle_buttons = document.querySelectorAll('.rotate');

	for (const toggle_button of toggle_buttons) {
		toggle_button.addEventListener('click', function() {
			let block =  this.closest('.block')
			block.classList.toggle('close');
			
		});

	}
	const countFun = setInterval(function(){
		const blocks = document.querySelectorAll('.block');
		if(window.innerWidth > 900) {
			for( const block of blocks) {
				block.classList.remove('close')
			}
			
		}
	},200)

})