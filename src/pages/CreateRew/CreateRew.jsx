import React, { useState } from 'react'; // Импортируем useState из react
import './CreateRew.css';
const tg = window.Telegram.WebApp;

const CreateRew = () => {
  const [purchaseNumber, setPurchaseNumber] = useState(''); // Используем useState

  const rewAlert = () => {
    if (purchaseNumber.trim() === '') {
      // Если поле "Номер покупки" пустое, показываем алерт "Введите номер покупки!"
      tg.showAlert('Введите номер покупки!');
    } else {
      // Если введено что-то, то показываем следующее:
      tg.showAlert('Введен неверный номер покупки!');
    }
  };

  return (
    <section className="rew">
      <div className="container">
        <div className="review-form">
          <input
            type="text"
            className="review-input"
            placeholder="Номер покупки"
            value={purchaseNumber} // Привязываем значение поля к состоянию purchaseNumber
            onChange={(e) => setPurchaseNumber(e.target.value)} // Обработчик изменения поля
          />
          <input
            type="text"
            className="review-input"
            placeholder="Заголовок отзыва"
          />
          <textarea
            className="review-textarea"
            placeholder="Основной текст (минимум 400 символов)"
            rows="4"
          ></textarea>
        </div>
        <button className="rew__send-btn btn" onClick={rewAlert}>
          Оставить отзыв
        </button>
      </div>
    </section>
  );
}

export default CreateRew;
