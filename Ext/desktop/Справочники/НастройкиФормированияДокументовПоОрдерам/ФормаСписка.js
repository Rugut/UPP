Ext.define('Справочники.НастройкиФормированияДокументовПоОрдерам.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:828px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройки формирования документов по ордерам',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:159px;top:33px;width:661px;height:259px;',
			height: 259,width: 661,
			columns:
			[
				{
					text:'',
					width:'33',
				},
				{
					text:'Наименование',
					width:'120',
				},
				{
					text:'Начиная с',
					width:'88',
				},
				{
					text:'Детализация',
					width:'120',
				},
				{
					text:'УУ',
					width:'21',
				},
				{
					text:'БУ',
					width:'21',
				},
				{
					text:'НУ',
					width:'21',
				},
				{
					text:'Автоматич.',
					width:'70',
				},
				{
					text:'Комментарий',
					width:'120',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:145px;height:259px;',
			height: 259,width: 145,
			columns:
			[
				{
					text:'Наименование',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:828px;height:25px;',
			items:
			[
			]
		},
	]
});