Ext.define('Документы.ИзменениеПараметровНачисленияАмортизацииОС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 395,width: 671,
	iconCls: 'bogus',
	title: 'Изменение параметров начисления амортизации ОС',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:92px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:192px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:154px;width:654px;height:24px;',
			items:
			[
				{
					text:'ЗаполнитьПоНаименованию',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ЗаполнитьДляСписка',
				},
				{
					text:'Подбор',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:179px;width:654px;height:159px;',
			height: 159,width: 654,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ОсновноеСредство',
				},
				{
					text:'ИнвентарныйНомер',
				},
				{
					text:'СрокПолезногоИспользованияУУ',
				},
				{
					text:'СрокИспользованияДляВычисленияАмортизацииУУ',
				},
				{
					text:'ОбъемПродукцииРаботУУ',
				},
				{
					text:'ОбъемПродукцииРаботДляВычисленияАмортизацииУУ',
				},
				{
					text:'СтоимостьДляВычисленияАмортизацииУУ',
				},
				{
					text:'КоэффициентАмортизацииУУ',
				},
				{
					text:'КоэффициентУскоренияУУ',
				},
				{
					text:'СрокПолезногоИспользованияБУ',
				},
				{
					text:'СрокИспользованияДляВычисленияАмортизацииБУ',
				},
				{
					text:'ОбъемПродукцииРаботБУ',
				},
				{
					text:'ОбъемПродукцииРаботДляВычисленияАмортизацииБУ',
				},
				{
					text:'СтоимостьДляВычисленияАмортизацииБУ',
				},
				{
					text:'КоэффициентАмортизацииБУ',
				},
				{
					text:'КоэффициентУскоренияБУ',
				},
				{
					text:'СрокПолезногоИспользованияНУ',
				},
				{
					text:'ИзменятьПараметрыНачисленияПоБазовойСтоимостиНУ',
				},
				{
					text:'НачислятьПоБазовойСтоимости',
				},
				{
					text:'НакопленнаяАмортизацияНУ',
				},
				{
					text:'НакопленныйФактическийСрокИспользованияНУ',
				},
				{
					text:'ПРДляВычисленияАмортизации',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:671px;height:25px;',
			items:
			[
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:370px;width:671px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Печать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:422px;top:57px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:92px;top:343px;width:570px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:92px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Событие',
			style: 'position:absolute;left:92px;top:83px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СобытиеРегл',
			style: 'position:absolute;left:92px;top:108px;width:220px;height:19px;',
		},
	]
});