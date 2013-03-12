Ext.define('Документы.ABCКлассификацияПокупателей.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:600px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'ABC-классификации покупателей',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:584px;height:380px;',
			height: 380,width: 584,
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
					text:'Начало',
					width:'80',
				},
				{
					text:'Окончание',
					width:'80',
				},
				{
					text:'% А класса',
					width:'60',
				},
				{
					text:'% B класса',
					width:'60',
				},
				{
					text:'% С класса',
					width:'60',
				},
				{
					text:'Комментарий',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:600px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'Подменю2',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Действие',
				},
			]
		},
	]
});