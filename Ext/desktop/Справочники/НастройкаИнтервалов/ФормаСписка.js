Ext.define('Справочники.НастройкаИнтервалов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:384px;height:387px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройки временных интервалов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:368px;height:100px;',
			height: 100,width: 368,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Наименование',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:384px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:139px;width:368px;height:240px;',
			height: 240,width: 368,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Граница интервала',
					width:'120',
				},
				{
					text:'Подпись',
					width:'220',
				},
			]
		},
	]
});