Ext.define('Справочники.ВидыЗадачПользователей.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 400,
	iconCls: 'bogus',
	title: 'Виды задач пользователей',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:384px;height:259px;',
			height: 259,width: 384,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
				{
					text:'Подменю',
				},
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