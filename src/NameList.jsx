import React, { useState, useEffect } from 'react';

const NameList = () => {
  const [nameInput, setNameInput] = useState('');
  const [names, setNames] = useState([]);

  useEffect(() => {
    // Загрузка списка имен из localStorage при монтировании компонента
    const storedNames = localStorage.getItem('reactNames');
    if (storedNames) {
      setNames(JSON.parse(storedNames));
    }
  }, []);

  const addName = () => {
    if (nameInput.trim() !== '') {
      // Обновление списка и сохранение в localStorage
      const updatedNames = [...names, nameInput.trim()];
      setNames(updatedNames);
      localStorage.setItem('reactNames', JSON.stringify(updatedNames));

      // Очистка поля ввода
      setNameInput('');
    }
  };

  return (
    <div>
      <h2>Список имён</h2>
      <input
        type="text"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
        placeholder="Введите имя"
      />
      <button onClick={addName}>Добавить</button>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NameList;