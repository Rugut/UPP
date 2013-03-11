Ext.define('Отчеты.РегламентированныйОтчетРВ3.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 287,width: 600,
	iconCls: 'bogus',
	title: 'Выбор из списка',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:584px;height:246px;',
			height: 246,width: 584,
			columns:
			[
				{
					text:'Код',
				},
				{
					text:'Название',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:262px;width:600px;height:25px;',
			items:
			[
				{
					text:'ДействияФормыВыбрать',
				},
			]
		},
	]
});