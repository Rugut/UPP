Ext.define('Обработки.КатегорииОбъекта.КатегорииОбъекта',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 376,
	iconCls: 'bogus',
	title: 'Категории',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:376px;height:25px;',
			items:
			[
				{
					text:'ДействиеИзменить',
				},
				{
					text:'ДействиеПеречитать',
				},
				{
					text:'ДействиеДобавить',
				},
				{
					text:'ДействиеУдалить',
				},
				{
					text:'ДействиеЗакончитьРедактирование',
				},
				{
					text:'ДействиеЗаписать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДействиеСправка',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:360px;height:234px;',
			height: 234,width: 360,
			columns:
			[
				{
					text:'ПометкаУдаления',
				},
				{
					text:'Принадлежность',
				},
				{
					text:'Категория',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:275px;width:376px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Закрыть',
				},
				{
					text:'КнопкаOK',
				},
			]
		},
	]
});