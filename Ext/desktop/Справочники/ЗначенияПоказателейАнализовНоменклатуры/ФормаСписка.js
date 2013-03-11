Ext.define('Справочники.ЗначенияПоказателейАнализовНоменклатуры.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 347,width: 570,
	iconCls: 'bogus',
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
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
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