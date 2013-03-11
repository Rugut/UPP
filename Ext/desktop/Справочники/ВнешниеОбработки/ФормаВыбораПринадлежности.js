Ext.define('Справочники.ВнешниеОбработки.ФормаВыбораПринадлежности',
	{
	extend: 'Ext.window.Window',
	height: 435,width: 425,
	iconCls: 'bogus',
	title: 'Принадлежность печатной формы',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:410px;width:425px;height:25px;',
			items:
			[
				{
					text:'Отмена',
				},
				{
					text:'КнопкаОК',
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
				},
			]
		},
					]
				},
			]
		},
	]
});