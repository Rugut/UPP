Ext.define('Обработки.ФормированиеДокументовПоНДС.Форма',
	{
	extend: 'Ext.window.Window',
	height: 289,width: 532,
	iconCls: 'bogus',
	title: 'Формирование документов по НДС',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:264px;width:532px;height:25px;',
			items:
			[
				{
					text:'СформироватьДокументы',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
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
			style: 'position:absolute;left:8px;top:56px;width:516px;height:200px;',
			height: 200,width: 516,
			items:
			[
				{
					title:'СформированныеДокументы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:50px;width:502px;height:144px;',
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
					text:'Документ',
				},
				{
					text:'Номер',
				},
				{
					text:'Дата',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:26px;width:502px;height:24px;',
			items:
			[
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'УстановитьФлажки',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Обновить',
				},
				{
					text:'УстановитьПометкуУдаления',
				},
				{
					text:'СнятьФлажки',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Провести',
				},
				{
					text:'ПодменюПерейти',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:22px;top:121px;width:436px;height:24px;',
			items:
			[
				{
					text:'СнятьФлажки',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие6',
				},
				{
					text:'УстановитьФлажки',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'УстановитьПометкуУдаления',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				{
					text:'Провести',
				},
				{
					text:'Печать',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Обновить',
				},
				{
					text:'Действие',
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
	]
});