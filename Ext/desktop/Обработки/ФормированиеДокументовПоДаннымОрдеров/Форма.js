Ext.define('Обработки.ФормированиеДокументовПоДаннымОрдеров.Форма',
	{
	extend: 'Ext.window.Window',
	height: 292,width: 532,
	iconCls: 'bogus',
	title: 'Формирование документов по ордерам',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончанияПериода',
			style: 'position:absolute;left:176px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:532px;height:25px;',
			items:
			[
				{
					text:'СформироватьДокументы',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие5',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаПериода',
			style: 'position:absolute;left:76px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:59px;width:516px;height:200px;',
			height: 200,width: 516,
			items:
			[
				{
					title:'СформированныеДокументы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:502px;height:144px;',
			height: 144,width: 502,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Флаг',
				},
				{
					text:'Статус',
				},
				{
					text:'Дата',
				},
				{
					text:'Номер',
				},
				{
					text:'Документ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:502px;height:24px;',
			items:
			[
				{
					text:'Разделитель3',
				},
				{
					text:'УстановитьФлажки',
				},
				{
					text:'Обновить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Провести',
				},
				{
					text:'СнятьФлажки',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПодменюПерейти',
				},
				{
					text:'Печать',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'УстановитьПометкуУдаления',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:20px;top:80px;width:436px;height:24px;',
			items:
			[
				{
					text:'УстановитьПометкуУдаления',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие8',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Провести',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие',
				},
				{
					text:'УстановитьФлажки',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'СнятьФлажки',
				},
				{
					text:'Печать',
				},
				{
					text:'Действие9',
				},
				{
					text:'Обновить',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель2',
				},
			]
		},
					]
				},
				{
					title:'УчтенныеДокументы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:502px;height:144px;',
			height: 144,width: 502,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Флаг',
				},
				{
					text:'Статус',
				},
				{
					text:'Дата',
				},
				{
					text:'Номер',
				},
				{
					text:'Документ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:502px;height:24px;',
			items:
			[
				{
					text:'СнятьФлажки',
				},
				{
					text:'Печать',
				},
				{
					text:'Обновить',
				},
				{
					text:'Провести',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'УстановитьФлажки',
				},
				{
					text:'ПодменюПерейти',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'УстановитьПометкуУдаления',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:20px;top:80px;width:436px;height:24px;',
			items:
			[
				{
					text:'СнятьФлажки',
				},
				{
					text:'Действие6',
				},
				{
					text:'УстановитьФлажки',
				},
				{
					text:'Действие5',
				},
				{
					text:'УстановитьПометкуУдаления',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие9',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Печать',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие7',
				},
				{
					text:'Провести',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Обновить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель3',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Настройка',
			style: 'position:absolute;left:76px;top:8px;width:448px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:258px;top:32px;width:19px;height:19px;',
		},
	]
});