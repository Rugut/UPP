Ext.define('Обработки.КатегорииОбъекта.КатегорииОбъекта',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:376px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Категории',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:376px;height:25px;',
			items:
			[
				{
					text:'Записать',
				},
				{
					text:'Перечитать',
				},
				{
					text:'Справка',
				},
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Закончить редактирование',
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
					text:'',
					width:'20',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'Категория',
					width:'320',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:275px;width:376px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});