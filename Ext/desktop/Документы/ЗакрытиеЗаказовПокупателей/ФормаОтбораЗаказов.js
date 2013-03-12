Ext.define('Документы.ЗакрытиеЗаказовПокупателей.ФормаОтбораЗаказов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:595px;height:440px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отобрать заказы покупателей',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:415px;width:595px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'Перенести',
				},
				{
					text:'Справка',
				},
				'-',
				'-',
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:30px;width:579px;height:167px;',
			height: 167,width: 579,
			items:
			[
				{
					title:'Настройки',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеДатаОтгрузки',
			style: 'position:absolute;left:258px;top:64px;width:102px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСрокОтргузки',
			text: 'Дата отгрузки:',
			style: 'position:absolute;left:16px;top:64px;width:132px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаличиеРезервов',
			text: 'Наличие резервов:',
			style: 'position:absolute;left:16px;top:8px;width:132px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеОтгрузки',
			text: 'Состояние отгрузки:',
			style: 'position:absolute;left:16px;top:40px;width:132px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеПросроченоДнейОтгрузки',
			style: 'position:absolute;left:318px;top:64px;width:42px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеПросроченоДнейОплаты',
			style: 'position:absolute;left:318px;top:120px;width:42px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеОплаты',
			text: 'Состояние оплаты:',
			style: 'position:absolute;left:16px;top:96px;width:132px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСрокОплаты',
			text: 'Дата оплаты:',
			style: 'position:absolute;left:16px;top:120px;width:132px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеДатаОплаты',
			style: 'position:absolute;left:258px;top:120px;width:102px;height:19px;',
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:565px;height:114px;',
			height: 114,width: 565,
			columns:
			[
				{
					text:'',
					width:'22',
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
			style: 'position:absolute;left:6px;top:0px;width:281px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать свойства и категории',
			style: 'position:absolute;left:352px;top:4px;width:219px;height:17px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:251px;width:579px;height:25px;',
			items:
			[
				{
					text:'Вверх',
				},
				{
					text:'По возрастанию',
				},
				'-',
				'-',
				{
					text:'Заполнить',
				},
				'-',
				'-',
				'-',
				{
					text:'Вниз',
				},
				{
					text:'По убыванию',
				},
				{
					text:'Включить все',
				},
				{
					text:'Анализ',
				},
				{
					text:'Выключить все',
				},
				{
					text:'Настройка списка',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:276px;width:579px;height:131px;',
			height: 131,width: 579,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'БУ',
					width:'20',
				},
				{
					text:'НУ',
					width:'20',
				},
				{
					text:'Ссылка',
					width:'23',
				},
				{
					text:'Дата',
					width:'110',
				},
				{
					text:'Номер',
					width:'85',
				},
				{
					text:'Вид операции',
					width:'80',
				},
				{
					text:'Контрагент',
					width:'110',
				},
				{
					text:'Договор',
					width:'100',
				},
				{
					text:'Контактное лицо',
					width:'100',
				},
				{
					text:'Сумма',
					width:'80',
				},
				{
					text:'Валюта',
					width:'30',
				},
				{
					text:'Ост. отгр.',
					width:'80',
				},
				{
					text:'Кол.',
					width:'35',
				},
				{
					text:'Ост. опл.',
					width:'80',
				},
				{
					text:'Рез.',
					width:'35',
				},
				{
					text:'Разм.',
					width:'35',
				},
				{
					text:'Тип цен',
					width:'80',
				},
				{
					text:'Тип скидки',
					width:'80',
				},
				{
					text:'Дата оплаты',
					width:'80',
				},
				{
					text:'Дата отгрузки',
					width:'80',
				},
				{
					text:'Организация',
					width:'100',
				},
				{
					text:'Склад/группа',
					width:'100',
				},
				{
					text:'Подразделение',
					width:'100',
				},
				{
					text:'Ответственный',
					width:'100',
				},
				{
					text:'Проведен',
					width:'70',
				},
				{
					text:'Причина закрытия',
					width:'120',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСпособЗаполнения',
			text: 'Вариант отбора:',
			style: 'position:absolute;left:320px;top:6px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:76px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:180px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'За период с:',
			style: 'position:absolute;left:8px;top:6px;width:68px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по:',
			style: 'position:absolute;left:160px;top:6px;width:15px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:268px;top:6px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаПричинаЗакрытия',
			style: 'position:absolute;left:160px;top:212px;width:200px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПричинаЗакрытия',
			text: 'Причина закрытия заказов:',
			style: 'position:absolute;left:8px;top:212px;width:148px;height:19px;',
		},
	]
});