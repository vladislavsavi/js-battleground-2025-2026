// Лайк/дислайк
// Как работают кнопки лайка и дислайка на ютубе? Изначально ни одна из них не выбрана. Если вы нажимаете на кнопку лайк, то она становится активной. Если вы нажмете на нее еще раз, то она отожмется и активной кнопки не будет.

// Если изначально нажать на лайк, а потом на дислайк, то активной будет только кнопка дислайка. Кнопка лайка будет неактивной, т.к. активной может быть только одна кнопка.

// Определите, какая кнопка будет выбрана после серии нажатий. Считаем, что изначально ни одна кнопка не выбрана.


function likeOrDislike(buttons) {
    if (buttons.length === 1) {
        return buttons[0];
    }

    const lastEvent = buttons.at(-1);

    let diffEventIndex = -1;

    for (let index = buttons.length - 1; index >= 0; index--) {
        if (buttons[index] !== lastEvent) {
            diffEventIndex = index;
            break;
        }
    }


    let sameEventArrLength = 0;

    if (diffEventIndex >= 0) {
        sameEventArrLength = buttons.length - 1 - diffEventIndex;
    } else {
        sameEventArrLength = buttons.length;
    }


    if (sameEventArrLength % 2 === 0) {
        return 'Nothing';
    } else {
        return lastEvent;
    }
}


console.log(likeOrDislike(["Dislike"])); // "Dislike"
console.log(likeOrDislike(["Like", "Like"])); // "Nothing"
console.log(likeOrDislike(["Dislike", "Like"])); // "Like"
console.log(likeOrDislike(["Like", "Dislike", "Dislike"])); // "Nothing"
