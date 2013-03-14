Ext.define('Документы.ПоступлениеТоваровУслугВНТТ.ФормаОтбораЗаказов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:660px;height:415px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отобрать заказы поставщикам',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:390px;width:658px;height:25px;',
			items:
			[
				{
					text:'Далее>>',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьВариантОтбора',
			text: 'Вариант отбора:',
			style: 'position:absolute;left:325px;top:17px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:84px;top:17px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:188px;top:17px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'За период с:',
			style: 'position:absolute;left:16px;top:17px;width:68px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по:',
			style: 'position:absolute;left:168px;top:17px;width:15px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:276px;top:17px;width:19px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:227px;width:644px;height:25px;',
			items:
			[
				{
					text:'Включить все',
				},
				{
					text:'Выключить все',
				},
				{
					text:'Инвертировать',
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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:390px;width:660px;height:25px;',
			items:
			[
				{
					text:'<<Назад',
				},
				'-',
				{
					text:'Перенести',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:92px;width:644px;height:280px;',
			height: 280,width: 644,
			items:
			[
				{
					title:'Товары',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:33px;width:630px;height:221px;',
			height: 221,width: 630,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Заказ поставщику',
					width:'100',
				},
				{
					text:'Код',
					width:'47',
				},
				{
					text:'Артикул',
					width:'77',
				},
				{
					text:'Номенклатура',
					width:'100',
				},
				{
					text:'Характеристика номенклатуры',
					width:'100',
				},
				{
					text:'Единица измерения',
					width:'54',
				},
				{
					text:'Добавить в документ',
					width:'86',
				},
				{
					text:'Запланировано',
					width:'70',
				},
				{
					text:'Осталось получить',
					width:'70',
				},
				{
					text:'Заполнено',
					width:'70',
				},
				{
					text:'Размещено',
					width:'70',
				},
				{
					text:'Внутренний заказ',
					width:'100',
				},
				{
					text:'Флаг заполнено',
					width:'134',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:630px;height:24px;',
			items:
			[
				{
					text:'Обнулить столбец добавляемых в документ',
				},
				{
					text:'Заполнить столбец добавляемых в документ',
				},
			]
		},
					]
				},
				{
					title:'Тара',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:33px;width:630px;height:221px;',
			height: 221,width: 630,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Заказ поставщику',
					width:'100',
				},
				{
					text:'Код',
					width:'47',
				},
				{
					text:'Артикул',
					width:'77',
				},
				{
					text:'Номенклатура',
					width:'100',
				},
				{
					text:'Единица измерения',
					width:'54',
				},
				{
					text:'Добавить в документ',
					width:'100',
				},
				{
					text:'Запланировано',
					width:'70',
				},
				{
					text:'Осталось получить',
					width:'70',
				},
				{
					text:'Заполнено',
					width:'70',
				},
				{
					text:'Размещено',
					width:'70',
				},
				{
					text:'Внутренний заказ',
					width:'100',
				},
				{
					text:'Флаг заполнено',
					width:'133',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:630px;height:24px;',
			items:
			[
				{
					text:'Обнулить столбец добавляемых в документ',
				},
				{
					text:'Заполнить столбец добавляемых в документ',
				},
			]
		},
					]
				},
				{
					title:'Услуги',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:630px;height:24px;',
			items:
			[
				{
					text:'Обнулить столбец добавляемых в документ',
				},
				{
					text:'Заполнить столбец добавляемых в документ',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:33px;width:630px;height:221px;',
			height: 221,width: 630,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Заказ поставщику',
					width:'100',
				},
				{
					text:'Код',
					width:'47',
				},
				{
					text:'Артикул',
					width:'77',
				},
				{
					text:'Номенклатура',
					width:'100',
				},
				{
					text:'Единица измерения',
					width:'54',
				},
				{
					text:'Добавить в документ',
					width:'100',
				},
				{
					text:'Запланировано',
					width:'70',
				},
				{
					text:'Осталось получить',
					width:'70',
				},
				{
					text:'Заполнено',
					width:'70',
				},
				{
					text:'Флаг заполнено',
					width:'100',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Товары',
			style: 'position:absolute;left:23px;top:38px;width:102px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Возвратная тара',
			style: 'position:absolute;left:145px;top:38px;width:106px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Услуги',
			style: 'position:absolute;left:23px;top:61px;width:102px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:250px;width:644px;height:131px;',
			height: 131,width: 644,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'',
					width:'21',
				},
				{
					text:'Ссылка',
					width:'22',
				},
				{
					text:'Дата',
					width:'110',
				},
				{
					text:'Номер',
					width:'90',
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
					text:'Ост. пол.',
					width:'80',
				},
				{
					text:'Кол.',
					width:'30',
				},
				{
					text:'Тара',
					width:'30',
				},
				{
					text:'Ост. опл.',
					width:'80',
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
					text:'Дата поступления',
					width:'80',
				},
				{
					text:'Организация',
					width:'100',
				},
				{
					text:'Склад',
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
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСпособЗаполнения',
			text: 'Способ заполнения:',
			style: 'position:absolute;left:311px;top:36px;width:104px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:41px;width:644px;height:167px;',
			height: 167,width: 644,
			items:
			[
				{
					title:'Настройки',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеДатаПоступления',
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
			name: 'НадписьНаличиеРазмещений',
			text: 'Наличие размещений:',
			style: 'position:absolute;left:16px;top:8px;width:132px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеОтгрузки',
			text: 'Поступление товара:',
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
			style: 'position:absolute;left:6px;top:24px;width:630px;height:114px;',
			height: 114,width: 630,
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
			style: 'position:absolute;left:406px;top:4px;width:219px;height:17px;',
		},
					]
				},
			]
		},
	]
});