Ext.define('Справочники.ТиповыеАнализыНоменклатуры.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 360,width: 550,
	iconCls: 'bogus',
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
			style: 'position:absolute;left:8px;top:33px;width:145px;height:319px;',
			height: 319,width: 145,
			columns:
			[
				{
					text:'Наименование',
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
					text:'НомерСтроки',
				},
				{
					text:'ПоказательАнализа',
				},
			]
		},
	]
});