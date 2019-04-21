(function (document) {
    // Cache DOM
    const $goLogin = document.querySelector('#go-login'),
        $goRegister = document.querySelector('#go-register'),
        $container = document.querySelector('.container');

    $container.classList.add('go-register');
    _toggleForm = ({ currentTarget }) => {
        if ($container.classList.contains('go-register')) {
            $container.classList.remove('go-register')
            $container.classList.add('go-login')
        } else {
            $container.classList.remove('go-login')
            $container.classList.add('go-register')
        }
    }

    $goLogin.addEventListener('click', _toggleForm);
    $goRegister.addEventListener('click', _toggleForm);
})(document);