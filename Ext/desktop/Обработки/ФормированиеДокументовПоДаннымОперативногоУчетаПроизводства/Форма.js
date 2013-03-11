Ext.define('Обработки.ФормированиеДокументовПоДаннымОперативногоУчетаПроизводства.Форма',
	{
	extend: 'Ext.window.Window',
	height: 292,width: 532,
	iconCls: 'bogus',
	title: 'Формирование документов по данным оперативного учета производства',
	
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
					text:'Разделитель2',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
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
					text:'ПодменюПерейти',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
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
					text:'СнятьФлажки',
				},
				{
					text:'Печать',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'УстановитьФлажки',
				},
				{
					text:'Разделитель',
				},
				{
					text:'УстановитьПометкуУдаления',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:20px;top:80px;width:436px;height:24px;',
			items:
			[
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Печать',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие4',
				},
				{
					text:'Провести',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие8',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие7',
				},
				{
					text:'УстановитьФлажки',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие1',
				},
				{
					text:'Обновить',
				},
				{
					text:'СнятьФлажки',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'УстановитьПометкуУдаления',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель4',
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
					text:'Разделитель1',
				},
				{
					text:'Обновить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'УстановитьПометкуУдаления',
				},
				{
					text:'УстановитьФлажки',
				},
				{
					text:'СнятьФлажки',
				},
				{
					text:'Печать',
				},
				{
					text:'Провести',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:20px;top:80px;width:436px;height:24px;',
			items:
			[
				{
					text:'Провести',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие',
				},
				{
					text:'УстановитьФлажки',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие1',
				},
				{
					text:'Обновить',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'СнятьФлажки',
				},
				{
					text:'Действие2',
				},
				{
					text:'УстановитьПометкуУдаления',
				},
				{
					text:'Действие8',
				},
				{
					text:'Печать',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие9',
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