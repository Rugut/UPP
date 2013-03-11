Ext.define('Справочники.ПрофилиРаспределенияПоПериодам.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 682,
	iconCls: 'bogus',
	title: 'Профили распределения по периодам',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:454px;height:280px;',
			height: 280,width: 454,
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
				{
					text:'Период',
				},
				{
					text:'Подпериод',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:682px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:468px;top:33px;width:206px;height:280px;',
			height: 280,width: 206,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'НомерПодпериода',
				},
				{
					text:'ДоляПодпериода',
				},
			]
		},
	]
});