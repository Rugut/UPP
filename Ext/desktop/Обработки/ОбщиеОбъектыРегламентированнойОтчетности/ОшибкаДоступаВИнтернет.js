Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.ОшибкаДоступаВИнтернет',
	{
	extend: 'Ext.window.Window',
	height: 398,width: 396,
	iconCls: 'bogus',
	title: 'Ошибка доступа в Интернет',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:373px;width:396px;height:25px;',
			items:
			[
				{
					text:'Отмена',
				},
				{
					text:'Повторить',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:64px;top:299px;width:263px;height:47px;',
			height: 47,width: 263,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяПользователя',
			style: 'position:absolute;left:110px;top:3px;width:153px;height:19px;',
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
	]
});