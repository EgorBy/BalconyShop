// 1.делаем модель кликера (toggle  по клику)
const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);


        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                // document.body.classList.add('modal-open');
            });
        });

        close.addEventListener('click', () => {
            modal.style.display = 'none';
            // // bootstrap variant---------------------------
            // document.body.classList.add('modal-open');
            // // --------------------------------------
            document.body.style.overflow = '';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                // // bootstrap variant---------------------------
                // document.body.classList.add('modal-open');
                // // --------------------------------------
                document.body.style.overflow = '';
            }
        })
    }


    // 2.Показывание окна через время---------------------------------------
    function showModalByTime(selector, time) {
        setTimeout(function () {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    // showModalByTime('.popup', 3000);
};



export default modals;
// -------------------------------------------------