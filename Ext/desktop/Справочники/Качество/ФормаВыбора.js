Ext.define('Справочники.Качество.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:484px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Качество',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:468px;height:280px;',
			height: 280,width: 468,
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
			style: 'position:absolute;left:0px;top:0px;width:484px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				'-',
			]
		},
	]
});