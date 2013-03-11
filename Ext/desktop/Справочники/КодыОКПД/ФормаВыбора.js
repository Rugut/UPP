Ext.define('Справочники.КодыОКПД.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 292,width: 400,
	iconCls: 'bogus',
	title: 'Коды ОКПД',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:384px;height:226px;',
			height: 226,width: 384,
			columns:
			[
				{
					text:'Код',
				},
				{
					text:'Имя',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
				{
					text:'Действие5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействияФормыВыбрать',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:400px;height:25px;',
			items:
			[
			]
		},
	]
});