Ext.define('Справочники.ЗначенияПоказателейАнализовНоменклатуры.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:570px;height:347px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Значения показателей анализов номенклатуры',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:159px;top:33px;width:403px;height:306px;',
			height: 306,width: 403,
			columns:
			[
				{
					text:'',
					width:'33',
				},
				{
					text:'Код',
					width:'62',
				},
				{
					text:'Наименование',
					width:'350',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:145px;height:306px;',
			height: 306,width: 145,
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
			style: 'position:absolute;left:0px;top:0px;width:570px;height:25px;',
			items:
			[
			]
		},
	]
});