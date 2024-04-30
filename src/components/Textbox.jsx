import React, { useState, useEffect, useRef } from 'react';
import {article, paragraph, sentence} from 'txtgen'
import GenerateSpan from './generateSpan';
const sampleText = paragraph(5)
const totalChars = sampleText.length;

function Textbox() {
    const [typingWords, setTyping] = useState(sampleText);
    const [typedWords, setTypedWords] = useState([])
    const [typedWord, setTypedWord] = useState({
        index : 0,
        valid : false
    })
    useEffect(() => {
        const handleKeyPress = (e) => {
                handleTyping(e.key);
        };


        const handleKeyDown = (e) => {
            if (e.key === 'Backspace') {
                handleBackSpace()
            }
        };

        window.addEventListener('keypress', handleKeyPress);
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keypress', handleKeyPress);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    const handleTyping = (key) => {
        setTypedWord(prevState => {
            if (typingWords[prevState['index']] === key && prevState['index'] < totalChars && key !== 'Backspace') {
                const typedWordState = prevState
                typedWordState.valid = true;
                setTypedWords(prevData => [...prevData, typedWordState])
            }   
            else {
                setTypedWords(prevData => [...prevData, prevState])   
            }

            return {
                index : prevState.index + 1,
                valid : false
            }
        })
    }
    
    const handleBackSpace = ()=> {
        if(typedWord.index >= 0){
        setTypedWord(prevState => {
            return {
                index : prevState.index - 1,
                valid : false
            }
        })
        setTypedWords(prevState => prevState.slice(0,-1))
    }
    }


    return (
        <div className='text-[#586167] flex flex-col'>
            <div className='rounded-lg text-xl leading-10 font-base py-24 mx-24'>
                <GenerateSpan typedWords={typedWords} typingWords={typingWords}/>
            </div>
        </div>
    );
}
export default Textbox;
