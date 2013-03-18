Ext.define('Документы.ЗакрытиеВнутреннихЗаказов.ФормаОтбораЗаказов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:595px;height:397px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отобрать внутренние заказы',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:372px;width:595px;height:25px;',
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
			style: 'position:absolute;left:8px;top:30px;width:579px;height:120px;',
			height: 120,width: 579,
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
			style: 'position:absolute;left:250px;top:68px;width:102px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:142px;top:68px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСрокОтргузки',
			text: 'Дата отгрузки:',
			style: 'position:absolute;left:16px;top:68px;width:124px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:142px;top:12px;width:210px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаличиеРезервов',
			text: 'Наличие резервов:',
			style: 'position:absolute;left:16px;top:12px;width:124px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:142px;top:44px;width:210px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеОтгрузки',
			text: 'Состояние отгрузки:',
			style: 'position:absolute;left:16px;top:44px;width:124px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:356px;top:12px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеПросроченоДнейОтгрузки',
			style: 'position:absolute;left:310px;top:68px;width:42px;height:19px;',
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:565px;height:67px;',
			height: 67,width: 565,
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
			style: 'position:absolute;left:8px;top:205px;width:579px;height:25px;',
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
			style: 'position:absolute;left:8px;top:233px;width:579px;height:131px;',
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
					width:'86',
				},
				{
					text:'Вид заказа',
					width:'100',
				},
				{
					text:'Заказчик',
					width:'110',
				},
				{
					text:'Контактное лицо',
					width:'100',
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
					text:'Рез.',
					width:'35',
				},
				{
					text:'Разм.',
					width:'35',
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
			xtype: 'combobox',
			style: 'position:absolute;left:408px;top:6px;width:179px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСпособЗаполнения',
			text: 'Вариант отбора:',
			style: 'position:absolute;left:317px;top:6px;width:87px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:160px;top:164px;width:200px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПричинаЗакрытия',
			text: 'Причина закрытия заказов:',
			style: 'position:absolute;left:8px;top:164px;width:148px;height:19px;',
		},
	]
});