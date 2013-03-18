Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ОшибкаДоступаВИнтернет',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:396px;height:398px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ошибка доступа в Интернет',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:373px;width:396px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Повторить',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОписаниеОшибки',
			text: '',
			style: 'position:absolute;left:8px;top:8px;width:380px;height:29px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Ошибка может быть связана с тем, что с Вашего компьютера отсутствует возможность доступа в Интернет, некорректно заданы настройки доступа или сервер Интернета не отвечает.

Ниже приведены параметры доступа в Интернет, которые используются для подключения. Вы можете проверить их и, при необходимости, уточнить, а затем повторить попытку соединения.

Измененные параметры доступа в Интернет будут сохранены и использованы при следующем обращении к серверу.',
			style: 'position:absolute;left:8px;top:63px;width:380px;height:135px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Для доступа в Интернет необходима авторизация на прокси',
			style: 'position:absolute;left:8px;top:241px;width:333px;height:15px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:64px;top:299px;width:263px;height:47px;',
			height: 47,width: 263,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Имя пользователя:',
			style: 'position:absolute;left:4px;top:5px;width:105px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяПользователя',
			style: 'position:absolute;left:110px;top:3px;width:153px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Пароль:',
			style: 'position:absolute;left:4px;top:30px;width:105px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Пароль',
			style: 'position:absolute;left:110px;top:28px;width:153px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Если для доступа в Интернет необходима авторизация на прокси, то установите данный флажок и задайте параметры авторизации ниже.',
			style: 'position:absolute;left:25px;top:257px;width:363px;height:29px;',
		},
	]
});