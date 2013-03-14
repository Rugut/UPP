Ext.define('Справочники.ИсточникиДанныхДляРасчетовБюджетирования.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:601px;height:440px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Элемент Источники данных для расчетов бюджетирования',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:601px;height:25px;',
			items:
			[
				{
					text:'Проверить',
				},
				'-',
				{
					text:'Произвольный запрос',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:415px;width:601px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:33px;width:370px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставлениеРегистра',
			style: 'position:absolute;left:94px;top:57px;width:499px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставлениеРегистра',
			text: 'Источник:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:84px;width:585px;height:323px;',
			height: 323,width: 585,
			items:
			[
				{
					title:'Данные',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:27px;width:571px;height:100px;',
			height: 100,width: 571,
			columns:
			[
				{
					text:'Имя',
					width:'100',
				},
				{
					text:'Представление',
					width:'133',
				},
				{
					text:'Начальная граница',
					width:'96',
				},
				{
					text:'Дата начальной границы',
					width:'134',
				},
				{
					text:'Период смещения',
					width:'102',
				},
				{
					text:'Сдвиг (в периодах)',
					width:'115',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:173px;width:264px;height:124px;',
			height: 124,width: 264,
			columns:
			[
				{
					text:'№',
					width:'24',
				},
				{
					text:'Использование',
					width:'29',
				},
				{
					text:'Представление',
					width:'211',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:149px;width:264px;height:24px;',
			items:
			[
				{
					text:'Установить все',
				},
				{
					text:'Снять все',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:276px;top:173px;width:300px;height:124px;',
			height: 124,width: 300,
			columns:
			[
				{
					text:'Поле источника',
					width:'180',
				},
				{
					text:'Измерение',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:276px;top:149px;width:300px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Закончить редактирование',
				},
			]
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:380px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:380px;height:273px;',
			height: 273,width: 380,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Поле',
					width:'120',
				},
				{
					text:'Тип сравнения',
					width:'80',
				},
				{
					text:'Значение',
					width:'160',
				},
				{
					text:'С',
					width:'80',
				},
				{
					text:'По',
					width:'80',
				},
			]
		},
					]
				},
				{
					title:'Настройка',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:571px;height:291px;',
			height: 291,width: 571,
			items:
			[
				{
					title:'Запрос',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:259px;width:144px;height:24px;',
			items:
			[
				{
					text:'Конструктор',
				},
				{
					text:'Закончить редактирование',
				},
			]
		},
					]
				},
				{
					title:'Параметры',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:539px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
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
					text:'&Скопировать',
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
			style: 'position:absolute;left:6px;top:30px;width:539px;height:253px;',
			height: 253,width: 539,
			columns:
			[
				{
					text:'Имя параметра',
					width:'235',
				},
				{
					text:'Значение параметра',
					width:'280',
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
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:468px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:512px;top:33px;width:81px;height:19px;',
		},
	]
});