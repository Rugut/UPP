Ext.define('Документы.КорректировкаЗаписейРегистров.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	height: 365,width: 365,
	iconCls: 'bogus',
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
				{
					text:'Разделитель',
				},
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
					text:'ДействиеСнятьОтметкуСоВсехРегистровНакопления',
				},
				{
					text:'ДействиеОтметитьВсеРегистрыНакопления',
				},
				{
					text:'ДействиеИнвертироватьОтметкиРегистровНакопления',
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
					text:'ДействиеОтметитьВсеРегистрыСведений',
				},
				{
					text:'ДействиеИнвертироватьОтметкиРегистровСведений',
				},
				{
					text:'ДействиеСнятьОтметкуСоВсехРегистровСведений',
				},
			]
		},
					]
				},
				{
					title:'Бухгалтери',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:335px;height:24px;',
			items:
			[
				{
					text:'ДействиеИнвертироватьОтметкиРегистровБухгалтерии',
				},
				{
					text:'ДействиеСнятьОтметкуСоВсехРегистровБухгалтерии',
				},
				{
					text:'ДействиеОтметитьВсеРегистрыБухгалтерии',
				},
			]
		},
					]
				},
			]
		},
	]
});