Ext.define('Документы.ВнутреннийЗаказ.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:657px;height:395px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Документ Внутренний заказ',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:14px;top:32px;width:76px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:172px;top:32px;width:16px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:344px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:90px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:190px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:344px;width:559px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:657px;height:25px;',
			items:
			[
				{
					text:'Структура подчиненности документа',
				},
				'-',
				{
					text:'Заполнить и провести',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Движения документа по регистрам',
				},
				'-',
				{
					text:'Анализ',
				},
				'-',
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:109px;width:641px;height:227px;',
			height: 227,width: 641,
			items:
			[
				{
					title:'Товары',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:627px;height:177px;',
			height: 177,width: 627,
			columns:
			[
				{
					text:'№',
					width:'28',
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
					width:'251',
				},
				{
					text:'Характеристика номенклатуры',
					width:'250',
				},
				{
					text:'Ед. мест',
					width:'50',
				},
				{
					text:'К. мест',
					width:'45',
				},
				{
					text:'Мест',
					width:'70',
				},
				{
					text:'Количество',
					width:'65',
				},
				{
					text:'Ед.',
					width:'50',
				},
				{
					text:'К.',
					width:'45',
				},
				{
					text:'Размещение',
					width:'184',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:627px;height:24px;',
			items:
			[
				{
					text:'Очистить размещение',
				},
				{
					text:'Подбор',
				},
				'-',
				'-',
			]
		},
					]
				},
				{
					title:'Возвратная тара',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:627px;height:24px;',
			items:
			[
				{
					text:'Очистить размещение',
				},
				'-',
				{
					text:'Подбор',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:627px;height:177px;',
			height: 177,width: 627,
			columns:
			[
				{
					text:'№',
					width:'28',
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
					width:'250',
				},
				{
					text:'Количество',
					width:'65',
				},
				{
					text:'Ед. хранения',
					width:'52',
				},
				{
					text:'Размещение',
					width:'250',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеКомпании',
			style: 'position:absolute;left:98px;top:72px;width:204px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:322px;top:72px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:410px;top:72px;width:223px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'напомнить',
			style: 'position:absolute;left:12px;top:117px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВремяНапоминания',
			style: 'position:absolute;left:100px;top:117px;width:126px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Исполнитель',
			style: 'position:absolute;left:410px;top:27px;width:223px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеИсполнитель',
			text: 'Подразделение:',
			style: 'position:absolute;left:12px;top:27px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеИсполнитель',
			style: 'position:absolute;left:98px;top:27px;width:204px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Основание',
			style: 'position:absolute;left:100px;top:141px;width:202px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:14px;top:56px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:90px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Склад',
			style: 'position:absolute;left:487px;top:81px;width:162px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаОтгрузки',
			text: 'Отгрузка:',
			style: 'position:absolute;left:14px;top:81px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОтгрузки',
			style: 'position:absolute;left:90px;top:81px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:370px;width:657px;height:25px;',
			items:
			[
				'-',
				{
					text:'Печать',
				},
				{
					text:'Закрыть',
				},
				'-',
				'-',
				{
					text:'ОК',
				},
				{
					text:'Записать',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидЗаказа',
			style: 'position:absolute;left:391px;top:81px;width:93px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаказчик',
			text: 'Заказчик:',
			style: 'position:absolute;left:337px;top:81px;width:54px;height:19px;',
		},
	]
});