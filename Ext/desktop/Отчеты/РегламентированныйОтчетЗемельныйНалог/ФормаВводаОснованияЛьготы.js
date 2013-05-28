Ext.define('Отчеты.РегламентированныйОтчетЗемельныйНалог.ФормаВводаОснованияЛьготы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:349px;height:154px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод основания применения льготы',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьСтатья',
			text: 'Статья нормативного правового акта представительного органа муниципального образования, в соответствии с которым предоставляется льгота:',
			style: 'position:absolute;left:8px;top:8px;width:333px;height:40px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерСтатьи',
			text: 'Номер статьи:',
			style: 'position:absolute;left:8px;top:54px;width:75px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерСтатьи',
			width: 49,
			height: 19,
			style: 'position:absolute;left:88px;top:54px;width:49px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПункт',
			text: 'Пункт:',
			style: 'position:absolute;left:8px;top:78px;width:39px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Пункт',
			width: 49,
			height: 19,
			style: 'position:absolute;left:88px;top:78px;width:49px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодпункт',
			text: 'Подпункт:',
			style: 'position:absolute;left:8px;top:102px;width:75px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Подпункт',
			width: 49,
			height: 19,
			style: 'position:absolute;left:88px;top:102px;width:49px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:129px;width:349px;height:25px;',
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