Ext.define('Отчеты.ПланированиеЗакупок.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:800px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Планирование закупок',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:800px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'',
				},
				{
					text:'Сформировать заказ',
				},
				{
					text:'Формирование внутренних заказов...',
				},
				'-',
				{
					text:'Восстановить настройки...',
				},
				{
					text:'Сохранить настройки...',
				},
				'-',
				{
					text:'Справка',
				},
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Сформировать заказ',
				},
				'-',
				{
					text:'Формирование внутренних заказов...',
				},
				'-',
				{
					text:'Восстановить настройки...',
				},
				{
					text:'Сохранить настройки...',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:784px;height:123px;',
			height: 123,width: 784,
			items:
			[
				{
					title:'Параметры',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКонПродаж',
			style: 'position:absolute;left:248px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачПродаж',
			style: 'position:absolute;left:148px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодПродаж',
			text: 'Период анализа продаж с:',
			style: 'position:absolute;left:6px;top:6px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПродажПо',
			text: 'по:',
			style: 'position:absolute;left:230px;top:6px;width:16px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаПродаж',
			text: '...',
			style: 'position:absolute;left:330px;top:6px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКонЗакупок',
			style: 'position:absolute;left:248px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачЗакупок',
			style: 'position:absolute;left:148px;top:30px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодЗакупок',
			text: 'Период закупок с:',
			style: 'position:absolute;left:6px;top:30px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗакупокПо',
			text: 'по:',
			style: 'position:absolute;left:230px;top:30px;width:16px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаЗакупок',
			text: '...',
			style: 'position:absolute;left:330px;top:30px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаОкруглятьВБольшуюСторону',
			style: 'position:absolute;left:586px;top:54px;width:190px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Показать только необходимые закупки',
			style: 'position:absolute;left:6px;top:54px;width:222px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаТипЦенНоменклатуры',
			style: 'position:absolute;left:148px;top:78px;width:201px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипЦенНоменклатуры',
			text: 'Тип цен номенклатуры:',
			style: 'position:absolute;left:6px;top:78px;width:140px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'По всей номенклатуре',
			style: 'position:absolute;left:238px;top:54px;width:140px;height:19px;',
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:770px;height:67px;',
			height: 67,width: 770,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Тип сравнения',
					width:'60',
				},
				{
					text:'Значение',
					width:'100',
				},
				{
					text:'С',
					width:'100',
				},
				{
					text:'По',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:770px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Дополнительные поля',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:770px;height:67px;',
			height: 67,width: 770,
			columns:
			[
				{
					text:'Поле',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:770px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Показатели',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:770px;height:91px;',
			height: 91,width: 770,
			columns:
			[
				{
					text:'',
					width:'23',
				},
				{
					text:'Показатель',
					width:'100',
				},
			]
		},
					]
				},
			]
		},
	]
});