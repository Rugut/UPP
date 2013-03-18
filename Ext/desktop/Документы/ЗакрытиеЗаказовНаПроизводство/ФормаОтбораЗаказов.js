Ext.define('Документы.ЗакрытиеЗаказовНаПроизводство.ФормаОтбораЗаказов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:595px;height:449px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отобрать заказы на производство',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:424px;width:595px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Перенести',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:30px;width:579px;height:176px;',
			height: 176,width: 579,
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
			style: 'position:absolute;left:258px;top:128px;width:102px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:150px;top:128px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСрокОтргузки',
			text: 'Дата исполнения:',
			style: 'position:absolute;left:16px;top:128px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:150px;top:8px;width:210px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаличиеРезервов',
			text: 'Наличие резервов:',
			style: 'position:absolute;left:16px;top:8px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:150px;top:104px;width:210px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеОтгрузки',
			text: 'Состояние исполнения:',
			style: 'position:absolute;left:16px;top:104px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:364px;top:8px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеПросроченоДнейОтгрузки',
			style: 'position:absolute;left:318px;top:128px;width:42px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеПотребностей',
			text: 'Наличие потребностей:',
			style: 'position:absolute;left:16px;top:32px;width:132px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:150px;top:32px;width:210px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеНЗП',
			text: 'Наличие затрат в НЗП:',
			style: 'position:absolute;left:16px;top:56px;width:132px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:150px;top:56px;width:210px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Наличие размещения в заказе на производство:',
			style: 'position:absolute;left:16px;top:76px;width:132px;height:27px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:150px;top:80px;width:210px;height:19px;',
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:565px;height:123px;',
			height: 123,width: 565,
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
			style: 'position:absolute;left:8px;top:260px;width:579px;height:25px;',
			items:
			[
				{
					text:'Включить все',
				},
				{
					text:'Выключить все',
				},
				'-',
				{
					text:'Вверх',
				},
				{
					text:'Вниз',
				},
				'-',
				{
					text:'По возрастанию',
				},
				{
					text:'По убыванию',
				},
				'-',
				{
					text:'Настройка списка',
				},
				'-',
				{
					text:'Анализ',
				},
				'-',
				{
					text:'Заполнить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:285px;width:579px;height:131px;',
			height: 131,width: 579,
			columns:
			[
				{
					text:'',
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
					text:'Подразделение',
					width:'100',
				},
				{
					text:'Ост. исп.',
					width:'80',
				},
				{
					text:'Кол.',
					width:'35',
				},
				{
					text:'Рез.',
					width:'35',
				},
				{
					text:'Разм.',
					width:'38',
				},
				{
					text:'Потр.',
					width:'40',
				},
				{
					text:'НЗП',
					width:'39',
				},
				{
					text:'Разм. потр.',
					width:'39',
				},
				{
					text:'Дата исполнения',
					width:'95',
				},
				{
					text:'Организация',
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
			xtype: 'combobox',
			style: 'position:absolute;left:408px;top:6px;width:179px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСпособЗаполнения',
			text: 'Вариант отбора:',
			style: 'position:absolute;left:320px;top:6px;width:84px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:8px;top:6px;width:68px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по:',
			style: 'position:absolute;left:160px;top:6px;width:15px;height:19px;text-align:center;',
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
			style: 'position:absolute;left:159px;top:221px;width:209px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПричинаЗакрытия',
			text: 'Причина закрытия заказов:',
			style: 'position:absolute;left:8px;top:221px;width:148px;height:19px;',
		},
	]
});