const $form = document.getElementById('form');

$form.addEventListener('submit',handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData($form);//Guarda los datos del formulario
    const title = data.get('title');
    console.log(title)
}
