Ext.define('Справочники.ОсновноеСырье.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:336px;height:447px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'72',
				},
				{
					text:'Наименование',
					width:'220',
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
					text:'№',
					width:'28',
				},
				{
					text:'Основной материал и его аналоги',
					width:'220',
				},
			]
		},
	]
});