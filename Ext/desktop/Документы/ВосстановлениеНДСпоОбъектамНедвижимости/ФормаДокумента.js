Ext.define('Документы.ВосстановлениеНДСпоОбъектамНедвижимости.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 459,width: 644,
	iconCls: 'bogus',
	title: 'Восстановление НДС по объектам недвижимости',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:203px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:58px;width:227px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:407px;width:540px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:644px;height:25px;',
			items:
			[
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:434px;width:644px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:82px;width:628px;height:321px;',
			height: 321,width: 628,
			items:
			[
				{
					title:'ОбъектыНедвижимости',
				},
				{
					title:'СчетаСписанияНДС',
				},
				{
					title:'Дополнительно',
				},
			]
		},
	]
});