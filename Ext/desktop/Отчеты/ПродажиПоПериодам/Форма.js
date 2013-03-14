Ext.define('Отчеты.ПродажиПоПериодам.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:900px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Продажи по периодам',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:900px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Восстановить настройку...',
				},
				{
					text:'Сохранить настройку...',
				},
				'-',
				{
					text:'Заполнить',
				},
				'-',
				{
					text:'Справка',
				},
					]
				},
				'-',
				{
					text:'Заполнить',
				},
				'-',
				{
					text:'Восстановить настройку...',
				},
				{
					text:'Сохранить настройку...',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:884px;height:539px;',
			height: 539,width: 884,
			items:
			[
				{
					title:'Товары',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:870px;height:483px;',
			height: 483,width: 870,
			columns:
			[
				{
					text:'N',
					width:'40',
				},
				{
					text:'Номенклатура',
					width:'200',
				},
				{
					text:'Поле_01',
					width:'200',
				},
				{
					text:'Поле_02',
					width:'200',
				},
				{
					text:'Поле_03',
					width:'200',
				},
				{
					text:'Поле_04',
					width:'200',
				},
				{
					text:'Поле_05',
					width:'200',
				},
				{
					text:'Поле_06',
					width:'200',
				},
				{
					text:'Поле_07',
					width:'200',
				},
				{
					text:'Поле_08',
					width:'200',
				},
				{
					text:'Поле_09',
					width:'200',
				},
				{
					text:'Поле_10',
					width:'200',
				},
				{
					text:'Поле_11',
					width:'200',
				},
				{
					text:'Поле_12',
					width:'200',
				},
				{
					text:'Поле_13',
					width:'200',
				},
				{
					text:'Поле_14',
					width:'200',
				},
				{
					text:'Поле_15',
					width:'200',
				},
				{
					text:'Поле_16',
					width:'200',
				},
				{
					text:'Поле_17',
					width:'200',
				},
				{
					text:'Поле_18',
					width:'200',
				},
				{
					text:'Поле_19',
					width:'200',
				},
				{
					text:'Поле_20',
					width:'200',
				},
				{
					text:'Поле_21',
					width:'200',
				},
				{
					text:'Поле_22',
					width:'200',
				},
				{
					text:'Поле_23',
					width:'200',
				},
				{
					text:'Поле_24',
					width:'200',
				},
				{
					text:'Поле_25',
					width:'200',
				},
				{
					text:'Поле_26',
					width:'200',
				},
				{
					text:'Поле_27',
					width:'200',
				},
				{
					text:'Поле_28',
					width:'200',
				},
				{
					text:'Поле_29',
					width:'200',
				},
				{
					text:'Поле_30',
					width:'200',
				},
				{
					text:'Поле_31',
					width:'200',
				},
				{
					text:'Поле_32',
					width:'200',
				},
				{
					text:'Поле_33',
					width:'200',
				},
				{
					text:'Поле_34',
					width:'200',
				},
				{
					text:'Поле_35',
					width:'200',
				},
				{
					text:'Поле_36',
					width:'200',
				},
				{
					text:'Поле_37',
					width:'200',
				},
				{
					text:'Поле_38',
					width:'200',
				},
				{
					text:'Поле_39',
					width:'200',
				},
				{
					text:'Поле_40',
					width:'200',
				},
				{
					text:'Продажи_01',
					width:'80',
				},
				{
					text:'ПродажиПроцент_01',
					width:'80',
				},
				{
					text:'Продажи_02',
					width:'80',
				},
				{
					text:'ПродажиПроцент_02',
					width:'80',
				},
				{
					text:'Продажи_03',
					width:'80',
				},
				{
					text:'ПродажиПроцент_03',
					width:'80',
				},
				{
					text:'Продажи_04',
					width:'80',
				},
				{
					text:'ПродажиПроцент_04',
					width:'80',
				},
				{
					text:'Продажи_05',
					width:'80',
				},
				{
					text:'ПродажиПроцент_05',
					width:'80',
				},
				{
					text:'Продажи_06',
					width:'80',
				},
				{
					text:'ПродажиПроцент_06',
					width:'80',
				},
				{
					text:'Продажи_07',
					width:'80',
				},
				{
					text:'ПродажиПроцент_07',
					width:'80',
				},
				{
					text:'Продажи_08',
					width:'80',
				},
				{
					text:'ПродажиПроцент_08',
					width:'80',
				},
				{
					text:'Продажи_09',
					width:'80',
				},
				{
					text:'ПродажиПроцент_09',
					width:'80',
				},
				{
					text:'Продажи_10',
					width:'80',
				},
				{
					text:'ПродажиПроцент_10',
					width:'80',
				},
				{
					text:'Продажи_11',
					width:'80',
				},
				{
					text:'ПродажиПроцент_11',
					width:'80',
				},
				{
					text:'Продажи_12',
					width:'80',
				},
				{
					text:'ПродажиПроцент_12',
					width:'80',
				},
				{
					text:'Продажи_13',
					width:'80',
				},
				{
					text:'ПродажиПроцент_13',
					width:'80',
				},
				{
					text:'Продажи_14',
					width:'80',
				},
				{
					text:'ПродажиПроцент_14',
					width:'80',
				},
				{
					text:'Продажи_15',
					width:'80',
				},
				{
					text:'ПродажиПроцент_15',
					width:'80',
				},
				{
					text:'Продажи_16',
					width:'80',
				},
				{
					text:'ПродажиПроцент_16',
					width:'80',
				},
				{
					text:'Продажи_17',
					width:'80',
				},
				{
					text:'ПродажиПроцент_17',
					width:'80',
				},
				{
					text:'Продажи_18',
					width:'80',
				},
				{
					text:'ПродажиПроцент_18',
					width:'80',
				},
				{
					text:'Продажи_19',
					width:'80',
				},
				{
					text:'ПродажиПроцент_19',
					width:'80',
				},
				{
					text:'Продажи_20',
					width:'80',
				},
				{
					text:'ПродажиПроцент_20',
					width:'80',
				},
				{
					text:'Продажи_21',
					width:'80',
				},
				{
					text:'ПродажиПроцент_21',
					width:'80',
				},
				{
					text:'Продажи_22',
					width:'80',
				},
				{
					text:'ПродажиПроцент_22',
					width:'80',
				},
				{
					text:'Продажи_23',
					width:'80',
				},
				{
					text:'ПродажиПроцент_23',
					width:'80',
				},
				{
					text:'Продажи_24',
					width:'80',
				},
				{
					text:'ПродажиПроцент_24',
					width:'80',
				},
				{
					text:'Продажи_25',
					width:'80',
				},
				{
					text:'ПродажиПроцент_25',
					width:'80',
				},
				{
					text:'Продажи_26',
					width:'80',
				},
				{
					text:'ПродажиПроцент_26',
					width:'80',
				},
				{
					text:'Продажи_27',
					width:'80',
				},
				{
					text:'ПродажиПроцент_27',
					width:'80',
				},
				{
					text:'Продажи_28',
					width:'80',
				},
				{
					text:'ПродажиПроцент_28',
					width:'80',
				},
				{
					text:'Продажи_29',
					width:'80',
				},
				{
					text:'ПродажиПроцент_29',
					width:'80',
				},
				{
					text:'Продажи_30',
					width:'80',
				},
				{
					text:'ПродажиПроцент_30',
					width:'80',
				},
				{
					text:'Остатки_01',
					width:'80',
				},
				{
					text:'Остатки_02',
					width:'80',
				},
				{
					text:'Остатки_03',
					width:'80',
				},
				{
					text:'Остатки_04',
					width:'80',
				},
				{
					text:'Остатки_05',
					width:'80',
				},
				{
					text:'Остатки_06',
					width:'80',
				},
				{
					text:'Остатки 07',
					width:'80',
				},
				{
					text:'Остатки 08',
					width:'80',
				},
				{
					text:'Остатки 09',
					width:'80',
				},
				{
					text:'Остатки_10',
					width:'80',
				},
				{
					text:'Остатки (итог)',
					width:'80',
				},
				{
					text:'Цена_01',
					width:'80',
				},
				{
					text:'Цена_02',
					width:'80',
				},
				{
					text:'Цена_03',
					width:'80',
				},
				{
					text:'Цена_04',
					width:'80',
				},
				{
					text:'Цена_05',
					width:'80',
				},
				{
					text:'Цена_06',
					width:'80',
				},
				{
					text:'Цена_07',
					width:'80',
				},
				{
					text:'Цена_08',
					width:'80',
				},
				{
					text:'Цена_09',
					width:'80',
				},
				{
					text:'Цена_10',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:870px;height:24px;',
			items:
			[
				{
					text:'&Изменить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Настройка списка...',
				},
				{
					text:'Вывести список...',
				},
				'-',
				{
					text:'Зафиксировать слева',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПериодичностьПродаж',
			text: 'Периодичность продаж:',
			style: 'position:absolute;left:203px;top:27px;width:125px;height:19px;',
		},
					]
				},
				{
					title:'Настройки',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПериодов',
			text: 'Периодов:',
			style: 'position:absolute;left:425px;top:27px;width:55px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоПериодов',
			style: 'position:absolute;left:482px;top:27px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаФормирования',
			style: 'position:absolute;left:118px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоРабочихДней',
			style: 'position:absolute;left:604px;top:27px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГрафик',
			text: 'График:',
			style: 'position:absolute;left:649px;top:27px;width:45px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'График',
			style: 'position:absolute;left:696px;top:27px;width:180px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить процент',
			style: 'position:absolute;left:6px;top:51px;width:120px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:75px;width:870px;height:437px;',
			height: 437,width: 870,
			items:
			[
				{
					title:'Поля',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:438px;top:46px;width:424px;height:158px;',
			height: 158,width: 424,
			columns:
			[
				{
					text:'Склад',
					width:'100',
				},
				{
					text:'Представление',
					width:'100',
				},
				{
					text:'Включать в итог',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:438px;top:22px;width:424px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:438px;top:253px;width:424px;height:158px;',
			height: 158,width: 424,
			columns:
			[
				{
					text:'Тип цен',
					width:'100',
				},
				{
					text:'Представление',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:438px;top:229px;width:424px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:424px;height:365px;',
			height: 365,width: 424,
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
			style: 'position:absolute;left:6px;top:22px;width:424px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
			]
		},
					]
				},
				{
					title:'Отбор и сортировка',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:424px;height:365px;',
			height: 365,width: 424,
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
			style: 'position:absolute;left:6px;top:22px;width:424px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:438px;top:46px;width:424px;height:365px;',
			height: 365,width: 424,
			columns:
			[
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Направление сортировки',
					width:'60',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:438px;top:22px;width:424px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Удалить',
				},
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
			]
		},
					]
				},
			]
		},
					]
				},
			]
		},
	]
});