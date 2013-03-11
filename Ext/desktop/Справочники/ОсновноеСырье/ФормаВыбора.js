Ext.define('Справочники.ОсновноеСырье.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 447,width: 336,
	iconCls: 'bogus',
	title: 'Справочник Основное сырье',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:320px;height:220px;',
			height: 220,width: 320,
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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:336px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:259px;width:320px;height:180px;',
			height: 180,width: 320,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Номенклатура',
				},
			]
		},
	]
});