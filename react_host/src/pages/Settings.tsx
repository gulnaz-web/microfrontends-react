import React from 'react';
import * as Styled from './styled/Settings';

const Settings: React.FC = () => {
   return (
      <div className="card-section">
         <div className="section-header">
            <h2 className="section-title">Настройки аккаунта</h2>
            <button className="btn btn-secondary">Сохранить изменения</button>
         </div>

         <Styled.SettingsLayout>
            <Styled.SettingsSidebar>
               <Styled.SettingsNav>
                  <Styled.SettingsNavItemActive>Профиль</Styled.SettingsNavItemActive>
                  <Styled.SettingsNavItem>Безопасность</Styled.SettingsNavItem>
                  <Styled.SettingsNavItem>Уведомления</Styled.SettingsNavItem>
                  <Styled.SettingsNavItem>Предпочтения</Styled.SettingsNavItem>
                  <Styled.SettingsNavItem>Интеграции</Styled.SettingsNavItem>
               </Styled.SettingsNav>
            </Styled.SettingsSidebar>

            <Styled.SettingsContent>
               <div className="profile-settings">
                  <Styled.ProfileHeader>
                     <Styled.ProfileAvatarLarge>
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
                        <Styled.ChangeAvatarBtn>Изменить</Styled.ChangeAvatarBtn>
                     </Styled.ProfileAvatarLarge>

                     <Styled.ProfileDetails>
                        <h3>Andrew</h3>
                        <Styled.UserStatus>Администратор</Styled.UserStatus>
                        <Styled.UserSince>Пользователь с 10.03.2020</Styled.UserSince>
                     </Styled.ProfileDetails>
                  </Styled.ProfileHeader>

                  <Styled.SettingsForm>
                     <Styled.FormRow>
                        <Styled.FormGroup>
                           <Styled.FormLabel>Имя</Styled.FormLabel>
                           <Styled.FormControl type="text" defaultValue="Andrew" />
                        </Styled.FormGroup>
                        <Styled.FormGroup>
                           <Styled.FormLabel>Фамилия</Styled.FormLabel>
                           <Styled.FormControl type="text" defaultValue="Smith" />
                        </Styled.FormGroup>
                     </Styled.FormRow>

                     <Styled.FormRow>
                        <Styled.FormGroup>
                           <Styled.FormLabel>Email</Styled.FormLabel>
                           <Styled.FormControl type="email" defaultValue="andrew@example.com" />
                        </Styled.FormGroup>
                        <Styled.FormGroup>
                           <Styled.FormLabel>Телефон</Styled.FormLabel>
                           <Styled.FormControl type="tel" defaultValue="+7 (900) 123-45-67" />
                        </Styled.FormGroup>
                     </Styled.FormRow>

                     <Styled.FormGroup>
                        <Styled.FormLabel>Адрес</Styled.FormLabel>
                        <Styled.FormControl
                           type="text"
                           defaultValue="Москва, ул. Примерная, д. 123"
                        />
                     </Styled.FormGroup>

                     <Styled.FormRow>
                        <Styled.FormGroup>
                           <Styled.FormLabel>Город</Styled.FormLabel>
                           <Styled.FormControl type="text" defaultValue="Москва" />
                        </Styled.FormGroup>
                        <Styled.FormGroup>
                           <Styled.FormLabel>Почтовый индекс</Styled.FormLabel>
                           <Styled.FormControl type="text" defaultValue="123456" />
                        </Styled.FormGroup>
                     </Styled.FormRow>

                     <Styled.FormGroup>
                        <Styled.FormLabel>Язык интерфейса</Styled.FormLabel>
                        <Styled.FormSelect>
                           <option value="ru">Русский</option>
                           <option value="en">English</option>
                           <option value="de">Deutsch</option>
                        </Styled.FormSelect>
                     </Styled.FormGroup>

                     <Styled.FormGroup>
                        <Styled.FormLabel>Валюта по умолчанию</Styled.FormLabel>
                        <Styled.FormSelect>
                           <option value="RUB">Российский рубль (₽)</option>
                           <option value="USD">Доллар США ($)</option>
                           <option value="EUR">Евро (€)</option>
                        </Styled.FormSelect>
                     </Styled.FormGroup>
                  </Styled.SettingsForm>
               </div>
            </Styled.SettingsContent>
         </Styled.SettingsLayout>
      </div>
   );
};

export default Settings;
