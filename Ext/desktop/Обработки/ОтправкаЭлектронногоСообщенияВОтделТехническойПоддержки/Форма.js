Ext.define('Обработки.ОтправкаЭлектронногоСообщенияВОтделТехническойПоддержки.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отправка электронного сообщения в отдел технической поддержки',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:313px;width:764px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:337px;width:764px;height:80px;',
			height: 80,width: 764,
			columns:
			[
				{
					text:'',
					width:'28',
				},
				{
					text:'Путь к файлу',
					width:'476',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:780px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Отправить',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отправлять слепую копию себе',
			style: 'position:absolute;left:573px;top:8px;width:199px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТемаСообщения',
			style: 'position:absolute;left:47px;top:8px;width:520px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Тема:',
			style: 'position:absolute;left:8px;top:8px;width:36px;height:19px;',
		},
	]
});