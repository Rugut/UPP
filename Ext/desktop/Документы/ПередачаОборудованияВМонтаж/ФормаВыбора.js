Ext.define('Документы.ПередачаОборудованияВМонтаж.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:681px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Передача оборудования в монтаж',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:665px;height:380px;',
			height: 380,width: 665,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'УУ',
					width:'20',
				},
				{
					text:'БУ',
					width:'20',
				},
				{
					text:'НУ',
					width:'20',
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
					text:'Объект строительства',
					width:'120',
				},
				{
					text:'Ответственный',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:681px;height:25px;',
			items:
			[
				{
					text:'Дт/кт',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
				{
					text:'Дт/кт',
				},
				'-',
				{
					text:'Выбрать',
				},
				'-',
				{
					text:'Движения документа по регистрам',
				},
			]
		},
	]
});