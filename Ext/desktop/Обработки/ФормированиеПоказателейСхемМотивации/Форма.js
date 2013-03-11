Ext.define('Обработки.ФормированиеПоказателейСхемМотивации.Форма',
	{
	extend: 'Ext.window.Window',
	height: 320,width: 402,
	iconCls: 'bogus',
	title: 'Формирование показателей',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:402px;height:25px;',
			items:
			[
				{
					text:'Сохранить',
				},
				{
					text:'Востановить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:295px;width:402px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыВыполнить',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:116px;width:388px;height:24px;',
			items:
			[
				{
					text:'СнятьФлажки1',
				},
				{
					text:'УстановитьФлажки1',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:140px;width:388px;height:147px;',
			height: 147,width: 388,
			columns:
			[
				{
					text:'ИспользованиеПоказателя',
				},
				{
					text:'ПредставлениеПоказателя',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МесяцСтрока',
			style: 'position:absolute;left:91px;top:33px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиМенеджер',
			style: 'position:absolute;left:190px;top:74px;width:206px;height:19px;',
		},
	]
});