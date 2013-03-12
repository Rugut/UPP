Ext.define('Документы.ВыработкаНМА.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:720px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выработка НМА',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:704px;height:380px;',
			height: 380,width: 704,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'БУ',
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
					text:'Ответственный',
					width:'120',
				},
				{
					text:'Организация',
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
			style: 'position:absolute;left:0px;top:0px;width:720px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				{
					text:'Перейти',
				},
				'-',
				'-',
				{
					text:'Выбрать',
				},
			]
		},
	]
});