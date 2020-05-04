import React, {useState, useEffect} from 'react'
import {View, SafeAreaView, Text, TouchableOpacity} from 'react-native'

import verify from './verify'

import styles from './styles'

export default function Game() {

    const [squares, setSquares] = useState([
        {id: 1, disabled: false, text: ''},
        {id: 2, disabled: false, text: ''},
        {id: 3, disabled: false, text: ''},
        {id: 4, disabled: false, text: ''},
        {id: 5, disabled: false, text: ''},
        {id: 6, disabled: false, text: ''},
        {id: 7, disabled: false, text: ''},
        {id: 8, disabled: false, text: ''},
        {id: 9, disabled: false, text: ''}
    ])

    const [gameOver, setGameOver] = useState(false)

    function newGame() {

        const aux = squares.map((repo) => {
          return repo.id >= 0 ? {...repo, disabled: false, text: ''} : repo
        })

        setSquares(aux)
        setGameOver(false)
    }

    function handleClick(id) {

        const aux = squares.map(repo => {
            return repo.id == id
                ? {...repo, disabled: true, text: 'X'}
                : repo
        })

        setSquares(aux)

        let finish = true
        
        while(finish) {
            
            const pc = Math.floor(Math.random() * 8) + 1

            if(squares[pc].text === '') {
                finish = false
                
                squares[pc].text = 'O'
                squares[pc].disabled = true
            }
        }
    }

    useEffect(() => {
        if(!gameOver) {

            if(verify(squares)) {
                const aux = squares.map(repo => {
                    return repo.disabled === false
                        ? {...repo, disabled: true}
                        : repo
                })
    
                setSquares(aux)
                setGameOver(true)
            }
        }
    }, [squares])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.txt_title}>Jogo da Velha</Text>
            <View style={styles.board}>
                {squares.map((repo) => {
                    return (
                        <View key={repo.id} style={styles.row}>
                            <TouchableOpacity
                                key={repo.id}
                                style={styles.square}
                                onPress={() => handleClick(repo.id)}
                                disabled={repo.disabled}>
                                <Text style={styles.txt}>{repo.text}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </View>
            <View style={styles.container}>
                <TouchableOpacity style={styles.btn_inicio} onPress={newGame}>
                    <Text style={styles.txt}>Novo jogo</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}