Ext.define('Отчеты.РегламентированныйОтчетЗемельныйНалог.ФормаВводаОснованияЛьготы',
	{
	extend: 'Ext.window.Window',
	height: 154,width: 349,
	iconCls: 'bogus',
	title: 'Ввод основания применения льготы',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:129px;width:349px;height:25px;',
			items:
			[
				{
					text:'ВыполнитьВвод',
				},
				{
					text:'Отмена',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерСтатьи',
			style: 'position:absolute;left:88px;top:54px;width:49px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Пункт',
			style: 'position:absolute;left:88px;top:78px;width:49px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подпункт',
			style: 'position:absolute;left:88px;top:102px;width:49px;height:19px;',
		},
	]
});