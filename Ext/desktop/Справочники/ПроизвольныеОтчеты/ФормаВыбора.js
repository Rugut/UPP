Ext.define('Справочники.ПроизвольныеОтчеты.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 345,width: 398,
	iconCls: 'bogus',
	title: 'Справочник Произвольные отчеты',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:382px;height:268px;',
			height: 268,width: 382,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:398px;height:25px;',
			items:
			[
				{
					text:'ДействияФормыВыбрать',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});