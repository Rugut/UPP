Ext.define('Документы.ABCКлассификацияПокупателей.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 434,width: 630,
	iconCls: 'bogus',
	title: 'ABC-классификация покупателей',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:86px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:186px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:630px;height:25px;',
			items:
			[
				{
					text:'ДействиеОткрытьКатегории1',
				},
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
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель5',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:409px;width:630px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Печать',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:60px;width:614px;height:290px;',
			height: 290,width: 614,
			items:
			[
				{
					title:'Распределение',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:163px;top:6px;width:77px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:265px;top:6px;width:77px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:31px;width:600px;height:24px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'УстановитьОтборИСортировкуСписка___',
				},
				{
					text:'Перераспределить',
				},
				{
					text:'ОтключитьОтбор',
				},
				{
					text:'Подменю',
				},
				{
					text:'История',
				},
				{
					text:'Перейти',
				},
				{
					text:'Действие3',
				},
				{
					text:'Взаиморасчеты',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие1',
				},
				{
					text:'ДокументыПоКонтрагенту',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОтборПоТекущемуЗначению',
				},
				{
					text:'Заполнить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:55px;width:600px;height:209px;',
			height: 209,width: 600,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ABCКлассификация',
				},
				{
					text:'Контрагент',
				},
				{
					text:'ЗначениеПараметра',
				},
				{
					text:'ПроцентПараметра',
				},
				{
					text:'МенеджерКонтрагента',
				},
				{
					text:'ABCКлассификацияСтарая',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:348px;top:6px;width:19px;height:19px;',
		},
					]
				},
				{
					title:'ПараметрыРаспределения',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода1',
			style: 'position:absolute;left:66px;top:72px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода2',
			style: 'position:absolute;left:66px;top:97px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода3',
			style: 'position:absolute;left:66px;top:122px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:382px;width:526px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:358px;width:526px;height:19px;',
		},
	]
});