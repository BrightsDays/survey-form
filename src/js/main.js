window.addEventListener("DOMContentLoaded", () => {
    'use strict';

    //SURVEY
    let count = 0;
    let surveyValue = 0;
    const surveyForm = document.querySelector('.survey__form');
    const surveyItem = document.querySelectorAll('.survey__item');
    const surveyCount = document.querySelector('.survey__counter');
    const surveyImage = document.querySelector('.survey__image');
    const surveyInputs = document.querySelectorAll('.survey__input');
    const surveyButton = document.querySelector('.survey__button');
    const surveyQuestions = document.querySelectorAll('.survey__question');
    
    surveyQuestions[count].style.display = 'inline';

    const survey = () => {
        if (count < 5) {
            surveyValue += +document.querySelector('.survey__check:checked').value;
            count += 1;
    
            surveyQuestions.forEach(item => {
                item.style.display = 'none';
            });

            surveyQuestions[count].style.display = 'inline';
            surveyItem[count].classList.add('survey__item_full');
            surveyCount.textContent = `${count + 1}/6`;
            surveyImage.style.background = `linear-gradient(180deg, #111111 9.69%, rgba(17, 17, 17, 0) 49.22%), url(https://viposidn.com/content/MoqeWGih6igQuz1/img/sur_${count + 1}.jpg)`;
            surveyImage.style.backgroundSize = `100% 100%`
        } else {
            surveyButton.style.display = 'none';
            surveyInputs.forEach(item => {
                item.style.display = 'none';
            });
            surveyQuestions[5].style.position = 'static';
            surveyQuestions[5].style.marginBottom = '0';
            surveyForm.style.paddingTop = '24px';

            if (surveyValue <= 6) {
                surveyQuestions[5].textContent = `
                Pazite na svoje zdravlje. Da bismo u potpunosti eliminirali rizik od razvoja upale zdjeličnih organa, preporučujemo održavanje preventivnog tečaja održavanja. Za vas smo odabrali lijek za jačanje imunološkog sustava i zaštitu tijela.
                `;
            } else if (surveyValue <= 12) {
                surveyQuestions[5].textContent = `
                U riziku ste. S vjerovatnoćom od 87%, postoje žarišta upale u organima genitourinarnog sistema koji nemaju vidljive simptome. Za vas smo odabrali prirodni, siguran lijek koji će ukloniti simptome u ranim fazama i spriječiti razvoj kroničnih bolesti.
                `;
            } else {
                surveyQuestions[5].textContent = `
                Situacija je kritična, imate kliničke simptome teške upalne bolesti zdjelice. Hitno je potrebno voditi računa o svom zdravlju.
                `;
            }
        }
    };

    //PACK PRICE
    function packPrice () {
        var input = document.querySelector('.order__packs'),
            priceNew = document.querySelector('.form__price_new'),
            priceOld = document.querySelector('.form__price_old');

        input.addEventListener('change', function() {
            if (this.value == '1') {
                priceNew.textContent = document.querySelector('.pack1').innerHTML;
                priceOld.textContent = document.querySelector('.old-pack1').innerHTML;
            } else if (this.value == '2') {
                priceNew.textContent = document.querySelector('.pack2').innerHTML;
                priceOld.textContent = document.querySelector('.old-pack2').innerHTML;
            } else if (this.value == '3') {
                priceNew.textContent = document.querySelector('.pack3').innerHTML;
                priceOld.textContent = document.querySelector('.old-pack3').innerHTML;
            }
        });
    }

    //SCROLL TO FORM
    const scrollToForm = (buttons, target) => {
        const anchors = document.querySelectorAll(buttons);
    
        for (let anchor of anchors) {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                
                const blockID = document.querySelector(target);
                
                blockID.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        }
    };

    //RUN
    scrollToForm('a[href="#"]', '.form');
    surveyButton.addEventListener('click', (e) => {
        e.preventDefault();
        survey();
    });
    packPrice();
});