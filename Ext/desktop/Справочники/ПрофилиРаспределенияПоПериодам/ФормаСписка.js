Ext.define('Справочники.ПрофилиРаспределенияПоПериодам.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:682px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'40',
				},
				{
					text:'Наименование',
					width:'220',
				},
				{
					text:'Период',
					width:'80',
				},
				{
					text:'Подпериод',
					width:'80',
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
					text:'№',
					width:'28',
				},
				{
					text:'№ подпериода',
					width:'80',
				},
				{
					text:'Доля подпериода',
					width:'100',
				},
			]
		},
	]
});