Ext.define('Справочники.ТиповыеАнализыНоменклатуры.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:550px;height:360px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Типовые анализы номенклатуры',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:159px;top:33px;width:383px;height:193px;',
			height: 193,width: 383,
			columns:
			[
				{
					text:'',
					width:'33',
				},
				{
					text:'Код',
					width:'56',
				},
				{
					text:'Наименование',
					width:'295',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:145px;height:319px;',
			height: 319,width: 145,
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
			style: 'position:absolute;left:0px;top:0px;width:550px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:159px;top:231px;width:383px;height:121px;',
			height: 121,width: 383,
			columns:
			[
				{
					text:'N',
					width:'34',
				},
				{
					text:'Показатель анализа',
					width:'338',
				},
			]
		},
	]
});