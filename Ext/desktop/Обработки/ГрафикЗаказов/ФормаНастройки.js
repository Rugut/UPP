Ext.define('Обработки.ГрафикЗаказов.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:840px;height:412px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:158px;width:827px;height:71px;',
			height: 71,width: 827,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'196',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'84',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'161',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'161',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'161',
					dataIndex:'ЗначениеПо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГрафикЗаказов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Использование',
					},
					{
						name:'Имя',
					},
					{
						name:'ВидСравнения',
					},
					{
						name:'Значение',
					},
					{
						name:'ЗначениеС',
					},
					{
						name:'ЗначениеПо',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:16px;top:132px;width:515px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Обновлять диаграмму после изменения заказов',
			style: 'position:absolute;left:8px;top:21px;width:274px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Разрешены изменения',
			style: 'position:absolute;left:8px;top:5px;width:207px;height:15px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:302px;width:192px;height:79px;',
			height: 79,width: 192,
			columns:
			[
				{
					text:'Поле',
					width:'178',
					dataIndex:'Поле',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГрафикЗаказов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Поле',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьЗаказНаПроизводство',
			text: 'Заказ на производство',
			style: 'position:absolute;left:8px;top:259px;width:151px;height:15px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:221px;top:302px;width:192px;height:79px;',
			height: 79,width: 192,
			columns:
			[
				{
					text:'Поле',
					width:'182',
					dataIndex:'Поле',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГрафикЗаказов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Поле',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьЗаказПоставщику',
			text: 'Заказ поставщику',
			style: 'position:absolute;left:221px;top:259px;width:142px;height:15px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:432px;top:302px;width:192px;height:79px;',
			height: 79,width: 192,
			columns:
			[
				{
					text:'Поле',
					width:'181',
					dataIndex:'Поле',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГрафикЗаказов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Поле',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьЗаказПокупателя',
			text: 'Заказ покупателя',
			style: 'position:absolute;left:429px;top:259px;width:165px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтбор',
			text: 'Отбор',
			style: 'position:absolute;left:8px;top:116px;width:827px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставлениеЗаказов',
			text: 'Представление заказов',
			style: 'position:absolute;left:14px;top:241px;width:821px;height:16px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:275px;width:151px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:221px;top:275px;width:151px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:429px;top:275px;width:151px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'График',
			style: 'position:absolute;left:388px;top:90px;width:248px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГрафик',
			text: 'График:',
			style: 'position:absolute;left:340px;top:90px;width:43px;height:21px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'По регламентированному производственному календарю',
			style: 'position:absolute;left:8px;top:68px;width:317px;height:21px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'По графику',
			style: 'position:absolute;left:8px;top:90px;width:317px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтображениеРабочихДней',
			text: 'Отображение рабочих и выходных дней',
			style: 'position:absolute;left:8px;top:50px;width:827px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаОткрытьКалендарь',
			text: 'Открыть',
			style: 'position:absolute;left:340px;top:68px;width:51px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКалендарьНеЗаполнен',
			text: 'Календарь за указанный период не заполнен. В качестве рабочих дней будут отображены дни с понедельника по пятницу',
			style: 'position:absolute;left:394px;top:68px;width:441px;height:15px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:387px;width:840px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:643px;top:302px;width:192px;height:79px;',
			height: 79,width: 192,
			columns:
			[
				{
					text:'Поле',
					width:'185',
					dataIndex:'Поле',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГрафикЗаказов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Поле',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:643px;top:275px;width:151px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'НадписьВнутреннийЗаказ',
			text: 'Внутренний заказ',
			style: 'position:absolute;left:643px;top:259px;width:165px;height:15px;',
		},
	]
});