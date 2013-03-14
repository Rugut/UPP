Ext.define('Документы.УстановкаЗависимостейОборотовПоСтатьям.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Установки зависимостей оборотов по статьям',
	
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
					text:'Статья оборотов',
					width:'120',
				},
				{
					text:'ЦФО',
					width:'120',
				},
				{
					text:'Проект',
					width:'120',
				},
				{
					text:'Контрагент',
					width:'120',
				},
				{
					text:'Номенклатура',
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
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				'-',
					]
				},
			]
		},
	]
});