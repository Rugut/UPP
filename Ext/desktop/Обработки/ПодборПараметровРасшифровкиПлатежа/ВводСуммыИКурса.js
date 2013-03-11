Ext.define('Обработки.ПодборПараметровРасшифровкиПлатежа.ВводСуммыИКурса',
	{
	extend: 'Ext.window.Window',
	height: 138,width: 260,
	iconCls: 'bogus',
	title: 'Ввод суммы и курса',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:113px;width:260px;height:25px;',
			items:
			[
				{
					text:'Ок',
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
			style: 'position:absolute;left:8px;top:32px;width:244px;height:73px;',
			height: 73,width: 244,
			items:
			[
				{
					title:'ПоСуммеВзаиморасчетов',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаПлатежа',
			style: 'position:absolute;left:126px;top:54px;width:118px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КурсВзаиморасчетов',
			style: 'position:absolute;left:126px;top:30px;width:118px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаВзаиморасчетов',
			style: 'position:absolute;left:126px;top:6px;width:118px;height:19px;',
		},
					]
				},
				{
					title:'ПоСуммеПлатежа',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаПлатежа1',
			style: 'position:absolute;left:126px;top:6px;width:118px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КурсВзаиморасчетов1',
			style: 'position:absolute;left:126px;top:30px;width:118px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаВзаиморасчетов1',
			style: 'position:absolute;left:126px;top:54px;width:118px;height:19px;',
		},
					]
				},
			]
		},
	]
});