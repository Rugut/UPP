Ext.define('Справочники.ГруппыСобытий.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 500,
	iconCls: 'bogus',
	title: 'Справочник Группы событий',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:484px;height:259px;',
			height: 259,width: 484,
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
				{
					text:'ВидОбъекта',
				},
				{
					text:'ОписаниеСобытия',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:500px;height:25px;',
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