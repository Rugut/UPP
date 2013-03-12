Ext.define('Документы.ЗаданиеНаПроизводство.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:700px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Задания на производство',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:684px;height:380px;',
			height: 380,width: 684,
			columns:
			[
				{
					text:'',
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
					text:'Вид задания',
					width:'120',
				},
				{
					text:'Дата задания',
					width:'80',
				},
				{
					text:'Подразделение',
					width:'100',
				},
				{
					text:'Смена',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:700px;height:25px;',
			items:
			[
				{
					text:'Перейти',
				},
				'-',
				{
					text:'Печать по умолчанию',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
			]
		},
	]
});