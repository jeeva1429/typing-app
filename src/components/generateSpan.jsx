import React from 'react'

function GenerateSpan(props) {
    const {typingWords, typedWords} = props
    
    const renderTextContent = () => {
        return typingWords.split('').map((char, index) => {
            if (typedWords[index]?.valid === true) {
                if (typingWords[index] === " "){
                return <span key={index} className="bg-green-500">{char}</span>;
                }
                return <span key={index} className="text-green-500">{char}</span>;
            } 
            else if (typedWords[index]?.valid === false) {
                if (typingWords[index] === " "){
                    return <span key={index} className="bg-red-500">{char}</span>;
                    }
                return <span key={index} className="text-red-500">{char}</span>;
            } 
            else {
                return <span key={index}>{char}</span>;
            }

        });
    };
  return (
    <div>
      {renderTextContent()}
    </div>
  )
}

export default GenerateSpan
