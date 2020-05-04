import React from 'react'

export default function verify(squares) {

    const win = 'Parabêns você ganhou!'
    const loose = 'Que pena, você perdeu!'

    console.log('Verficando')
    if (squares[0].text == 'X' || squares[0].text == 'O') {
        if (squares[0].text == squares[1].text && squares[1].text == squares[2].text) {
            if (squares[0].text == 'X') {
                alert(win)
                return true
            } else {
                alert(loose)
                return true
            }
        }
    }

    //fechou segunda linha
    if (squares[3].text == 'X' || squares[3].text == 'O') {
        if (squares[3].text == squares[4].text && squares[4].text == squares[5].text) {
            if (squares[3].text == 'X') {
                alert(win)
                return true
            } else {
                alert(loose)
                return true
            }
        }
    }

    //fechou terceira linha
    if (squares[6].text == 'X' || squares[6].text == 'O') {
        if (squares[6].text == squares[7].text && squares[7].text == squares[8].text) {
            if (squares[6].text == 'X') {
                alert(win)
                return true
            } else {
                alert(loose)
                return true
            }
        }
    }

    //fechou primeira coluna
    if (squares[0].text == 'X' || squares[0].text == 'O') {
        if (squares[0].text == squares[3].text && squares[3].text == squares[6].text) {
            if (squares[0].text == 'X') {
                alert(win)
                return true
            } else {
                alert(loose)
                return true
            }
        }
    }

    //fechou segunda coluna
    if (squares[1].text == 'X' || squares[1].text == 'O') {
        if (squares[1].text == squares[4].text && squares[4].text == squares[7].text) {
            if (squares[1].text == 'X') {
                alert(win)
                return true
            } else {
                alert(loose)
                return true
            }
        }
    }

    //fechou terceira coluna
    if (squares[2].text == 'X' || squares[2].text == 'O') {
        if (squares[2].text == squares[5].text && squares[5].text == squares[8].text) {
            if (squares[2].text == 'X') {
                alert(win)
                return true
            } else {
                alert(loose)
                return true
            }
        }
    }

    //fechou primeira diagonal
    if (squares[0].text === 'X' || squares[0].text == 'O') {
        if (squares[0].text == squares[4].text && squares[4].text == squares[8].text) {
            if (squares[0].text == 'X') {
                alert(win)
                return true
            } else {
                alert(loose)
                return true
            }
        }
    }

    //fechou segunda diagonal
    if (squares[2].text == 'X' || squares[2].text == 'O') {
        if (squares[2].text == squares[4].text && squares[4].text == squares[6].text) {
            if (squares[2].text == 'X') {
                alert(win)
                return true
            } else {
                alert(loose)
                return true
            }
        }
    }
    return false
}