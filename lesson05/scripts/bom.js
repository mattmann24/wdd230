
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.getElementsByClassName('list');


button.addEventListener = ('click', function() {

    if (input.value != '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('Button');

        li.textContent = input.value;
        deleteButton.textContent = '❌';

        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', function (){
            list.removeChild(li);
            input.focus();
        })
        input.focus();

        input.value = '';

    }
});