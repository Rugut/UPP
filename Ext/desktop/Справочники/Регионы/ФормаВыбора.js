Ext.define('Справочники.Регионы.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Регионы',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:384px;height:260px;',
			height: 260,width: 384,
			columns:
			[
				{
					text:'',
					width:'33',
				},
				{
					text:'Код',
					width:'63',
				},
				{
					text:'Наименование',
					width:'350',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:24px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
	]
});