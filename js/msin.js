
// Editor
let textarea = document.querySelector('.ba-textarea');
let editor = document.querySelector('.ba-editor');
textarea.hidden = true;
function useEditor(event) {
	if (event.keyCode == 69 && event.ctrlKey && textarea.hidden) { // ctrl+E == change text to textarea
		event.preventDefault(); //clear default functions browser
		textarea.value = editor.innerHTML; //save text in textarea
		textarea.hidden = false;
		editor.hidden = true;
	}
	if (event.keyCode == 83 && event.ctrlKey && !textarea.hidden) {// ctrl+S == save text in textarea into text
		event.preventDefault();
		editor.innerHTML = textarea.value;
		textarea.hidden = true;
		editor.hidden = false;
	}
	if (event.keyCode == 27 && !textarea.hidden) { // esc == exit of textarea without save changes
		event.preventDefault();
		textarea.hidden = true;
		editor.hidden = false;
	}
}
window.addEventListener('keydown', useEditor);