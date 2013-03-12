Ext.define('Документы.Событие.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:736px;height:261px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'События',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:720px;height:220px;',
			height: 220,width: 720,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'Дата',
					width:'139',
				},
				{
					text:'Номер',
					width:'117',
				},
				{
					text:'Вид события',
					width:'126',
				},
				{
					text:'Группа события',
					width:'120',
				},
				{
					text:'Контрагент',
					width:'126',
				},
				{
					text:'Контактное лицо',
					width:'126',
				},
				{
					text:'Описание',
					width:'126',
				},
				{
					text:'Ответственный',
					width:'144',
				},
				{
					text:'Проект',
					width:'126',
				},
				{
					text:'Содержание',
					width:'105',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:736px;height:25px;',
			items:
			[
				'-',
				{
					text:'Движения документа по регистрам',
				},
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Содержание',
				},
				{
					text:'Печать по умолчанию',
				},
				'-',
			]
		},
	]
});