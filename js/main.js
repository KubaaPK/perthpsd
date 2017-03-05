(function(){

    var showNavigationBtn = document.querySelector('.navigation__showMenuBtn'),
        navigation = document.querySelector('.navigation__list');


        showNavigationBtn.addEventListener('click', function() {
            this.classList.toggle('open');
            navigation.classList.toggle('show');
        });

})();