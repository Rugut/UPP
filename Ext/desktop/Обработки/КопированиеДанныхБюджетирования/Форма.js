Ext.define('Обработки.КопированиеДанныхБюджетирования.Форма',
	{
	extend: 'Ext.window.Window',
	height: 465,width: 732,
	iconCls: 'bogus',
	title: 'Обработка  Копирование данных бюджетирования',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:732px;height:25px;',
			items:
			[
				{
					text:'Подменю',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:440px;width:732px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СценарийИсточник',
			style: 'position:absolute;left:79px;top:97px;width:267px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаИсточник',
			style: 'position:absolute;left:78px;top:121px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКонцаИсточник',
			style: 'position:absolute;left:194px;top:121px;width:96px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаИсточника',
			text: '...',
			style: 'position:absolute;left:292px;top:121px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СценарийПриемник',
			style: 'position:absolute;left:451px;top:99px;width:267px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаПриемник',
			style: 'position:absolute;left:451px;top:123px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКонцаПриемник',
			style: 'position:absolute;left:567px;top:123px;width:96px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаПриемник',
			text: '...',
			style: 'position:absolute;left:665px;top:123px;width:20px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:157px;width:716px;height:251px;',
			height: 251,width: 716,
			items:
			[
				{
					title:'БюджетныеОперации',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЦФОПриемник',
			style: 'position:absolute;left:482px;top:50px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроектПриемник',
			style: 'position:absolute;left:482px;top:74px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтрагентПриемник',
			style: 'position:absolute;left:482px;top:98px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НоменклатураПриемник',
			style: 'position:absolute;left:482px;top:122px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяОборотовПриемник',
			style: 'position:absolute;left:482px;top:26px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:7px;top:177px;width:701px;height:48px;',
			height: 48,width: 701,
			items:
			[
				{
					title:'ПоПериодам',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоэффициентПериоды',
			style: 'position:absolute;left:505px;top:5px;width:118px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АбсолютноеЗначениеПериодыСумма',
			style: 'position:absolute;left:212px;top:5px;width:118px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АбсолютноеЗначениеПериодыКоличество',
			style: 'position:absolute;left:212px;top:29px;width:118px;height:19px;',
		},
					]
				},
				{
					title:'Нормировать',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоэффициентБазовый',
			style: 'position:absolute;left:117px;top:5px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИзменениеЗаПериод',
			style: 'position:absolute;left:481px;top:29px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипИзменения',
			style: 'position:absolute;left:117px;top:29px;width:214px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипРаспределения',
			style: 'position:absolute;left:481px;top:5px;width:220px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:50px;width:339px;height:97px;',
			height: 97,width: 339,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Имя',
				},
				{
					text:'ВидСравнения',
				},
				{
					text:'Значение',
				},
				{
					text:'ЗначениеС',
				},
				{
					text:'ЗначениеПо',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:26px;width:339px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
			]
		},
					]
				},
				{
					title:'Документы',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:702px;height:25px;',
			items:
			[
				{
					text:'УстановитьПометки',
				},
				{
					text:'Удалить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'СнятьПометки',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Провести',
				},
				{
					text:'Очистить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:25px;width:702px;height:200px;',
			height: 200,width: 702,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ДокументОперация',
				},
				{
					text:'СтатьяОборотов',
				},
				{
					text:'Валюта',
				},
				{
					text:'Сумма',
				},
			]
		},
					]
				},
				{
					title:'ДокументыРасчеты',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:702px;height:25px;',
			items:
			[
				{
					text:'УстановитьПометки',
				},
				{
					text:'РассчитатьИПровести',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Удалить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'СнятьПометки',
				},
				{
					text:'Очистить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:25px;width:702px;height:200px;',
			height: 200,width: 702,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ДокументРасчет',
				},
				{
					text:'ДатаРасчета',
				},
				{
					text:'ИсточникДанных',
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
			name: 'СпособКопированияДанных',
			style: 'position:absolute;left:120px;top:33px;width:232px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:164px;top:413px;width:182px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Состояние',
			style: 'position:absolute;left:497px;top:413px;width:227px;height:19px;',
		},
	]
});