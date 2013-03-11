Ext.define('Справочники.НазначенияИспользованияСпецификаций.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 435,
	iconCls: 'bogus',
	title: 'Назначения использования спецификаций',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:419px;height:259px;',
			height: 259,width: 419,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:435px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ДействияФормыВыбрать',
				},
			]
		},
	]
});