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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:340px;width:365px;height:25px;',
			items:
			[
				{
					text:'Отмена',
				},
				{
					text:'ОК',
				},
				'-',
			]
		},
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
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:335px;height:24px;',
			items:
			[
				{
					text:'Снять отметку со всех регистров',
				},
				{
					text:'Отметить все регистры',
				},
				{
					text:'Инвертировать отметки',
				},
			]
		},
					]
				},
				{
					title:'Сведений',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:335px;height:24px;',
			items:
			[
				{
					text:'Отметить все регистры',
				},
				{
					text:'Инвертировать отметки',
				},
				{
					text:'Снять отметку со всех регистров',
				},
			]
		},
					]
				},
				{
					title:'Бухгалтерии',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:335px;height:24px;',
			items:
			[
				{
					text:'Инвертировать отметки',
				},
				{
					text:'Снять отметку со всех регистров',
				},
				{
					text:'Отметить все регистры',
				},
			]
		},
					]
				},
			]
		},
	]
});