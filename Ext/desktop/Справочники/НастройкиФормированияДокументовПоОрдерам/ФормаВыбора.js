Ext.define('Справочники.НастройкиФормированияДокументовПоОрдерам.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:657px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройки формирования документов по ордерам',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:159px;top:33px;width:490px;height:259px;',
			height: 259,width: 490,
			columns:
			[
				{
					text:'',
					width:'39',
				},
				{
					text:'Наименование',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:657px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
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
	]
});