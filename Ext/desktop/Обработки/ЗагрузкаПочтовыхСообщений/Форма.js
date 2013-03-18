Ext.define('Обработки.ЗагрузкаПочтовыхСообщений.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:643px;height:416px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Загрузка почтовых сообщений',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:643px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:391px;width:643px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:81px;width:627px;height:302px;',
			height: 302,width: 627,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'',
					width:'21',
				},
				{
					text:'Дата получения',
					width:'100',
				},
				{
					text:'Копии',
					width:'117',
				},
				{
					text:'Отправитель',
					width:'110',
				},
				{
					text:'Получатели',
					width:'106',
				},
				{
					text:'Тема',
					width:'146',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:57px;width:627px;height:24px;',
			items:
			[
				'-',
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
				'-',
				{
					text:'Заполнить',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Учетная запись:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УчетнаяЗапись',
			style: 'position:absolute;left:98px;top:33px;width:385px;height:19px;',
		},
	]
});