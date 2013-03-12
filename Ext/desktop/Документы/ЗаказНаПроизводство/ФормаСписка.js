Ext.define('Документы.ЗаказНаПроизводство.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Заказы на производство',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:380px;',
			height: 380,width: 764,
			columns:
			[
				{
					text:' ',
					width:'32',
				},
				{
					text:'Дата',
					width:'132',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Подразделение',
					width:'114',
				},
				{
					text:'Дата запуска',
					width:'84',
				},
				{
					text:'Дата исполнения',
					width:'98',
				},
				{
					text:'Ответственный',
					width:'106',
				},
				{
					text:'Комментарий',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Анализ',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
				'-',
				{
					text:'Печать по умолчанию',
				},
				{
					text:'Файлы',
				},
				'-',
			]
		},
	]
});