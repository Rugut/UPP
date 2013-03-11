Ext.define('Обработки.ЗагрузкаПочтовыхСообщений.Форма',
	{
	extend: 'Ext.window.Window',
	height: 416,width: 643,
	iconCls: 'bogus',
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
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
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
					text:'Использование',
				},
				{
					text:'Вложения',
				},
				{
					text:'ДатаПолучения',
				},
				{
					text:'Копии',
				},
				{
					text:'ОтправительПредставление',
				},
				{
					text:'Кому',
				},
				{
					text:'Тема',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:57px;width:627px;height:24px;',
			items:
			[
				{
					text:'УстановитьФлажки',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Заполнить',
				},
				{
					text:'СнятьФлажки',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УчетнаяЗапись',
			style: 'position:absolute;left:98px;top:33px;width:385px;height:19px;',
		},
	]
});