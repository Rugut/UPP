Ext.define('Обработки.ЗначенияСвойствОбъекта.ЗначенияСвойствОбъекта',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:476px;height:346px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Свойства',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:476px;height:25px;',
			items:
			[
				{
					text:'Действие справка',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие закончить редактирование',
				},
				{
					text:'Действие удалить',
				},
				{
					text:'Записать',
				},
				'-',
				{
					text:'Действие добавить',
				},
				{
					text:'Перечитать',
				},
				{
					text:'Действие изменить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:460px;height:280px;',
			height: 280,width: 460,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Свойство',
					width:'220',
				},
				{
					text:'Значение',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:321px;width:476px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'OK',
				},
				'-',
			]
		},
	]
});