Ext.define('Документы.КорректировкаЗаписейРегистров.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:365px;height:365px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка состава регистров',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:349px;height:324px;',
			height: 324,width: 349,
			items:
			[
				{
					title:'Накопления',
					items:
					[
		{
			xtype: 'itemselector',
			style: 'position:absolute;left:6px;top:30px;width:335px;height:268px;',
		},
					]
				},
				{
					title:'Сведений',
					items:
					[
		{
			xtype: 'itemselector',
			style: 'position:absolute;left:6px;top:30px;width:335px;height:268px;',
		},
					]
				},
				{
					title:'Бухгалтерии',
					items:
					[
		{
			xtype: 'itemselector',
			style: 'position:absolute;left:6px;top:30px;width:335px;height:268px;',
		},
					]
				},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:340px;width:365px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
	]
});