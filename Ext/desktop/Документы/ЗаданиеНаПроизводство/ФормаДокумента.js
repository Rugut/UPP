Ext.define('Документы.ЗаданиеНаПроизводство.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:644px;height:381px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Задание на производство',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаЗадания',
			text: 'Дата задания:',
			style: 'position:absolute;left:334px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаЗадания',
			style: 'position:absolute;left:416px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:644px;height:25px;',
			items:
			[
				{
					text:'Структура подчиненности документа',
				},
				'-',
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Движения документа по регистрам',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:356px;width:644px;height:25px;',
			items:
			[
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'Записать',
				},
				'-',
				'-',
				{
					text:'Печать',
				},
				{
					text:'OK',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:83px;width:628px;height:239px;',
			height: 239,width: 628,
			items:
			[
				{
					title:'Выпуск/Тех. процесс',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:614px;height:24px;',
			items:
			[
				'-',
				{
					text:'Заполнить',
				},
				{
					text:'Подбор',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:614px;height:189px;',
			height: 189,width: 614,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Дата начала',
					width:'120',
				},
				{
					text:'Дата окончания',
					width:'120',
				},
				{
					text:'Рабочий центр',
					width:'100',
				},
				{
					text:'Смена',
					width:'100',
				},
				{
					text:'Тех. операция',
					width:'200',
				},
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Артикул',
					width:'120',
				},
				{
					text:'Номенклатура',
					width:'200',
				},
				{
					text:'Характеристика',
					width:'200',
				},
				{
					text:'Количество',
					width:'68',
				},
				{
					text:'Ед.',
					width:'45',
				},
				{
					text:'К.',
					width:'45',
				},
				{
					text:'Спецификация',
					width:'200',
				},
				{
					text:'Конечная продукция',
					width:'200',
				},
				{
					text:'Заказ',
					width:'200',
				},
				{
					text:'Проект',
					width:'200',
				},
			]
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:12px;top:27px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:98px;top:27px;width:206px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:329px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:98px;top:329px;width:538px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеКомпании',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСмена',
			text: 'Смена:',
			style: 'position:absolute;left:334px;top:57px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Смена',
			style: 'position:absolute;left:416px;top:57px;width:220px;height:19px;',
		},
	]
});