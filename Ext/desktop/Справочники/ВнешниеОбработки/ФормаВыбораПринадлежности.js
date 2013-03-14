Ext.define('Справочники.ВнешниеОбработки.ФормаВыбораПринадлежности',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:425px;height:435px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Принадлежность печатной формы',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:410px;width:425px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:409px;height:394px;',
			height: 394,width: 409,
			items:
			[
				{
					title:'Документы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:395px;height:362px;',
			height: 362,width: 395,
			columns:
			[
				{
					text:'',
					width:'0',
				},
			]
		},
					]
				},
				{
					title:'Справочники',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:395px;height:362px;',
			height: 362,width: 395,
			columns:
			[
				{
					text:'',
					width:'0',
				},
			]
		},
					]
				},
				{
					title:'Отчеты',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:395px;height:362px;',
			height: 362,width: 395,
			columns:
			[
				{
					text:'',
					width:'0',
				},
			]
		},
					]
				},
			]
		},
	]
});