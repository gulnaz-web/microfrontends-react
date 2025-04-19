import React from 'react';
import '../styles/settings/settings.css';

const Settings: React.FC = () => {
   return (
      <div className="card-section">
         <div className="section-header">
            <h2 className="section-title">Настройки аккаунта</h2>
            <button className="btn btn-secondary">Сохранить изменения</button>
         </div>

         <div className="settings-layout">
            <div className="settings-sidebar">
               <div className="settings-nav">
                  <button className="settings-nav-item active">Профиль</button>
                  <button className="settings-nav-item">Безопасность</button>
                  <button className="settings-nav-item">Уведомления</button>
                  <button className="settings-nav-item">Предпочтения</button>
                  <button className="settings-nav-item">Интеграции</button>
               </div>
            </div>

            <div className="settings-content">
               <div className="profile-settings">
                  <div className="profile-header">
                     <div className="profile-avatar-large">
                        <svg
                           width="80"
                           height="80"
                           viewBox="0 0 24 24"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                              fill="#FFB930"
                           />
                        </svg>
                        <button className="change-avatar-btn">Изменить</button>
                     </div>

                     <div className="profile-details">
                        <h3>Andrew</h3>
                        <p className="user-status">Администратор</p>
                        <p className="user-since">Пользователь с 10.03.2020</p>
                     </div>
                  </div>

                  <div className="settings-form">
                     <div className="form-row">
                        <div className="form-group">
                           <label>Имя</label>
                           <input type="text" className="form-control" defaultValue="Andrew" />
                        </div>
                        <div className="form-group">
                           <label>Фамилия</label>
                           <input type="text" className="form-control" defaultValue="Smith" />
                        </div>
                     </div>

                     <div className="form-row">
                        <div className="form-group">
                           <label>Email</label>
                           <input
                              type="email"
                              className="form-control"
                              defaultValue="andrew@example.com"
                           />
                        </div>
                        <div className="form-group">
                           <label>Телефон</label>
                           <input
                              type="tel"
                              className="form-control"
                              defaultValue="+7 (900) 123-45-67"
                           />
                        </div>
                     </div>

                     <div className="form-group">
                        <label>Адрес</label>
                        <input
                           type="text"
                           className="form-control"
                           defaultValue="Москва, ул. Примерная, д. 123"
                        />
                     </div>

                     <div className="form-row">
                        <div className="form-group">
                           <label>Город</label>
                           <input type="text" className="form-control" defaultValue="Москва" />
                        </div>
                        <div className="form-group">
                           <label>Почтовый индекс</label>
                           <input type="text" className="form-control" defaultValue="123456" />
                        </div>
                     </div>

                     <div className="form-group">
                        <label>Язык интерфейса</label>
                        <select className="form-control">
                           <option value="ru">Русский</option>
                           <option value="en">English</option>
                           <option value="de">Deutsch</option>
                        </select>
                     </div>

                     <div className="form-group">
                        <label>Валюта по умолчанию</label>
                        <select className="form-control">
                           <option value="RUB">Российский рубль (₽)</option>
                           <option value="USD">Доллар США ($)</option>
                           <option value="EUR">Евро (€)</option>
                        </select>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Settings;
