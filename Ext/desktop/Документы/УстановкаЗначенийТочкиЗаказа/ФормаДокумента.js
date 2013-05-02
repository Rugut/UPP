Ext.define('Документы.УстановкаЗначенийТочкиЗаказа.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:652px;height:341px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Установка значений точки заказа',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:98px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:180px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:198px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:83px;width:636px;height:24px;',
			items:
			[
				'-',
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:107px;width:636px;height:175px;',
			height: 175,width: 636,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'100',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика номенклатуры',
					width:'169',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Способ определения',
					width:'175',
					dataIndex:'СпособОпределенияЗначенияТочкиЗаказа',
					flex:1,
				},
				{
					text:'Значение точки заказа',
					width:'156',
					dataIndex:'ЗначениеТочкиЗаказа',
					flex:1,
				},
				{
					text:'Страховой запас',
					width:'156',
					dataIndex:'МинимальныйСтраховойЗапас',
					flex:1,
				},
				{
					text:'% значения точки заказа',
					width:'100',
					dataIndex:'ПроцентнаяСтавкаЗначенияТочкиЗаказа',
					flex:1,
				},
				{
					text:'% страхового запаса',
					width:'100',
					dataIndex:'ПроцентнаяСтавкаМинимальногоСтраховогоЗапаса',
					flex:1,
				},
				{
					text:'Дата нач.',
					width:'80',
					dataIndex:'ДатаНач',
					flex:1,
				},
				{
					text:'Дата кон.',
					width:'80',
					dataIndex:'ДатаКон',
					flex:1,
				},
				{
					text:'Склад',
					width:'100',
					dataIndex:'Склад',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УстановкаЗначенийТочкиЗаказа/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'СпособОпределенияЗначенияТочкиЗаказа',
					},
					{
						name:'ЗначениеТочкиЗаказа',
					},
					{
						name:'МинимальныйСтраховойЗапас',
					},
					{
						name:'ПроцентнаяСтавкаЗначенияТочкиЗаказа',
					},
					{
						name:'ПроцентнаяСтавкаМинимальногоСтраховогоЗапаса',
					},
					{
						name:'ДатаНач',
					},
					{
						name:'ДатаКон',
					},
					{
						name:'Склад',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:316px;width:652px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
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
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:289px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:289px;width:548px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеКомпании',
			style: 'position:absolute;left:98px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:334px;top:57px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:424px;top:57px;width:220px;height:19px;',
		},
	]
});