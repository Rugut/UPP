Ext.define('Документы.ЭлектронноеПисьмо.ФормаПодбораПолучателя',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:448px;height:299px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Проверка и выбор получателей/отправителей',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:274px;width:448px;height:25px;',
			items:
			[
				'-',
				{
					text:'Отмена',
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Пропустить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:104px;width:432px;height:162px;',
			height: 162,width: 432,
			columns:
			[
				{
					text:'Объект',
					width:'276',
				},
				{
					text:'E-mail',
					width:'103',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:80px;width:432px;height:24px;',
			items:
			[
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Зарегистрировать новый',
				},
				'-',
				'-',
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Подобрать из адресной книги (F12)',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСтрокаДляНераспознанногоИмени',
			text: 'Строка для нераспознанного имени',
			style: 'position:absolute;left:8px;top:8px;width:432px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНераспознанногоИмени',
			text: 'Нераспознанное имя',
			style: 'position:absolute;left:8px;top:28px;width:432px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДействияПользователя',
			text: 'Подсказка действий пользователя',
			style: 'position:absolute;left:8px;top:48px;width:432px;height:27px;',
		},
	]
});