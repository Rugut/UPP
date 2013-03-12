Ext.define('Справочники.ПараметрыВыработкиОС.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:362px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Параметры выработки ОС',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:346px;height:280px;',
			height: 280,width: 346,
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
					text:'Ед. изм.',
					width:'54',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:362px;height:25px;',
			items:
			[
			]
		},
	]
});