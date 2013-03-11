Ext.define('Обработки.РасчетПлановойСебестоимости.ФормаОбработкаРезультата',
	{
	extend: 'Ext.window.Window',
	height: 118,width: 362,
	iconCls: 'bogus',
	title: 'Обработка результата',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:93px;width:362px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'КнопкаВыполнить',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяЗатрат',
			style: 'position:absolute;left:89px;top:31px;width:265px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:58px;width:346px;height:28px;',
			height: 28,width: 346,
			items:
			[
				{
					title:'Сумма',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сумма',
			style: 'position:absolute;left:82px;top:0px;width:102px;height:19px;',
		},
					]
				},
				{
					title:'СтатьяЗатрат',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НоваяСтатьяЗатрат',
			style: 'position:absolute;left:81px;top:0px;width:265px;height:19px;',
		},
					]
				},
			]
		},
	]
});