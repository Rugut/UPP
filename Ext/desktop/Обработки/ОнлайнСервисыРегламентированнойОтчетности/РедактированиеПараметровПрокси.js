Ext.define('Обработки.ОнлайнСервисыРегламентированнойОтчетности.РедактированиеПараметровПрокси',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:323px;height:133px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ошибка доступа в Интернет',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:108px;width:323px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Имя пользователя:',
			style: 'position:absolute;left:9px;top:59px;width:111px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяПользователя',
			style: 'position:absolute;left:125px;top:56px;width:190px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Пароль:',
			style: 'position:absolute;left:9px;top:84px;width:111px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Пароль',
			style: 'position:absolute;left:125px;top:81px;width:190px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Если для доступа в Интернет необходима авторизация на прокси-сервере, задайте параметры авторизации ниже.',
			style: 'position:absolute;left:8px;top:8px;width:307px;height:32px;',
		},
	]
});