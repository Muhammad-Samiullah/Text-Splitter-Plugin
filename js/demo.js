document.addEventListener('DOMContentLoaded', function() {
	
	
	let splitTextarea = document.querySelector('.split-textarea');
	let pasteBtn = document.querySelector('.split-paste');
	let splitBtn = document.querySelector('.split-split');
	
	
	splitTextarea.onfocus = function() {
		if(splitTextarea.value == 'Enter text here or click paste') {
			splitTextarea.value = '';
		}
	}
	
	splitTextarea.onblur = function() {
		if (splitTextarea.value == '') {
			splitTextarea.value = 'Enter text here or click paste';
		}
	}
	
	pasteBtn.onclick = function() {
		navigator.clipboard.readText()
		  .then(text => {
			splitTextarea.value = text;
		  });
	}
	
	splitBtn.onclick = function() {
		let textareaText = splitTextarea.value;
		textareaText = textareaText.replace('.', '.*');
		textareaText = textareaText.replace(',', ',*');
		textareaText = textareaText.replace('!', '!*');
		textareaText = textareaText.replace('and', 'and*');
		textareaText = textareaText.replace('but', 'but*');
		textareaText = textareaText.replace('so', 'so*');
		textareaText = textareaText.replace('because', 'because*');
		console.log(textareaText);
		let splitTextArray = textareaText.split('*');
		for (let i=0; i<splitTextArray.length; i++) {
			splitTextArray[i] = splitTextArray[i].trim();
		}
		let newText = splitTextArray.join('\r\n');
		splitTextarea.value = '';
		splitTextarea.value = newText;
	}
	
	
	
})