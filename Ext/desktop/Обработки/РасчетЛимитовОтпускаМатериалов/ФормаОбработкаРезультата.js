Ext.define('Обработки.РасчетЛимитовОтпускаМатериалов.ФормаОбработкаРезультата',
	{
	extend: 'Ext.window.Window',
	height: 89,width: 362,
	iconCls: 'bogus',
	title: 'Обработка результата',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:64px;width:362px;height:25px;',
			items:
			[
				{
					text:'КнопкаВыполнить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:29px;width:346px;height:28px;',
			height: 28,width: 346,
			items:
			[
				{
					title:'Периодичность',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Периодичность',
			style: 'position:absolute;left:81px;top:4px;width:265px;height:19px;',
		},
					]
				},
				{
					title:'КонтролироватьЛимит',
					items:
					[
					]
				},
			]
		},
	]
});