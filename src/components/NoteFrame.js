import React, { useState } from 'react';
import './NoteFrame.css';

function NoteFrame({ isVisible, onClose }) {
  const [note, setNote] = useState('');
  const [penColor, setPenColor] = useState('black');

  if (!isVisible) return null;

  return (
    <div className="note-frame">
      <button onClick={onClose}>Close</button>
      <textarea
        style={{ color: penColor }}
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your note here..."
      />
      <div className="color-buttons">
        <button style={{ color: 'black' }} onClick={() => setPenColor('black')}>Black</button>
        <button style={{ color: 'red' }} onClick={() => setPenColor('red')}>Red</button>
        <button style={{ color: 'blue' }} onClick={() => setPenColor('blue')}>Blue</button>
      </div>
      <button onClick={() => console.log('Note saved:', note)}>Save Note</button>
    </div>
  );
}

export default NoteFrame;
