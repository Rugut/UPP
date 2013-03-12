Ext.define('Документы.ПереоценкаВалютныхСтатейПриБюджетировании.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Переоценка валютных статей при бюджетировании',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:380px;',
			height: 380,width: 764,
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
					text:'Сценарий',
					width:'120',
				},
				{
					text:'Дата переоценки',
					width:'80',
				},
				{
					text:'Счет курсовых разниц',
					width:'80',
				},
				{
					text:'Ответственный',
					width:'120',
				},
				{
					text:'Статья оборотов',
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
					text:'Структура подчиненности документа',
				},
				{
					text:'Движения документа по регистрам',
				},
				'-',
			]
		},
	]
});