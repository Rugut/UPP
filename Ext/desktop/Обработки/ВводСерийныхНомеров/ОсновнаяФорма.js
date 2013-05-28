Ext.define('Обработки.ВводСерийныхНомеров.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:781px;height:332px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод серийных номеров',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНоменклатура',
			text: 'Номенклатура (характеристика, серия):',
			style: 'position:absolute;left:8px;top:59px;width:134px;height:27px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'Номенклатура',
			width: 160,
			height: 19,
			style: 'position:absolute;left:142px;top:59px;width:160px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'ХарактеристикаНоменклатуры',
			width: 140,
			height: 19,
			style: 'position:absolute;left:307px;top:59px;width:140px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'СерияНоменклатуры',
			width: 140,
			height: 19,
			style: 'position:absolute;left:452px;top:59px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличество',
			text: 'Количество:',
			style: 'position:absolute;left:8px;top:86px;width:134px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Количество',
			style: 'position:absolute;left:142px;top:86px;width:89px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиницаИзмерения',
			text: 'Единица:',
			style: 'position:absolute;left:239px;top:86px;width:63px;height:19px;text-align:right;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			name: 'ЕдиницаИзмерения',
			width: 69,
			height: 19,
			style: 'position:absolute;left:307px;top:86px;width:69px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерСтрокиТабличнойЧасти',
			text: 'Номер строки документа:',
			style: 'position:absolute;left:8px;top:33px;width:134px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НомерСтрокиТабличнойЧасти',
			style: 'position:absolute;left:142px;top:33px;width:89px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:105px;width:765px;height:194px;',
			height: 194,width: 765,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Формирование серийных номеров',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:430px;top:50px;width:335px;height:121px;',
			height: 121,width: 335,
			columns:
			[
				{
					text:'N',
					width:'51',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Серийный номер',
					width:'358',
					dataIndex:'СерийныйНомер',
					flex:1,
				},
				{
					text:'Ключ связи',
					width:'100',
					dataIndex:'КлючСвязи',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводСерийныхНомеров/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'СерийныйНомер',
					},
					{
						name:'КлючСвязи',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:50px;width:426px;height:121px;',
			height: 121,width: 426,
			columns:
			[
				{
					text:'N',
					width:'50',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Источник',
					width:'82',
					dataIndex:'Источник',
					flex:1,
				},
				{
					text:'Значение',
					width:'78',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'Тип разряда',
					width:'68',
					dataIndex:'ТипРазряда',
					flex:1,
				},
				{
					text:'Размер разряда',
					width:'50',
					dataIndex:'РазмерРазряда',
					flex:1,
				},
				{
					text:'Начальное значение разряда',
					width:'95',
					dataIndex:'НачальноеЗначениеРазряда',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводСерийныхНомеров/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Источник',
					},
					{
						name:'Значение',
					},
					{
						name:'ТипРазряда',
					},
					{
						name:'РазмерРазряда',
					},
					{
						name:'НачальноеЗначениеРазряда',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПорядокПрисвоенияСерийногоНомера',
			text: 'Порядок присвоения:',
			style: 'position:absolute;left:150px;top:28px;width:115px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ПорядокПрисвоенияСерийногоНомера',
			width: 161,
			height: 19,
			style: 'position:absolute;left:265px;top:28px;width:161px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Разряды серийного номера',
			style: 'position:absolute;left:0px;top:6px;width:426px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПримерСерийногоНомера',
			text: 'Пример номера:',
			style: 'position:absolute;left:0px;top:175px;width:89px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПримерСерийногоНомера',
			width: 210,
			height: 19,
			style: 'position:absolute;left:89px;top:175px;width:210px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоЗнаков',
			text: 'Кол-во знаков:',
			style: 'position:absolute;left:305px;top:175px;width:91px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоЗнаков',
			style: 'position:absolute;left:396px;top:175px;width:30px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Серийные номера',
			style: 'position:absolute;left:430px;top:6px;width:335px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоСерийныхНомеров',
			text: 'Кол-во серийных номеров:',
			style: 'position:absolute;left:596px;top:175px;width:139px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоСерийныхНомеров',
			style: 'position:absolute;left:735px;top:175px;width:30px;height:19px;',
		},
					]
				},
				{
					title:'Ввод серийных номеров',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:50px;width:765px;height:121px;',
			height: 121,width: 765,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Серийный номер',
					width:'184',
					dataIndex:'СерийныйНомер',
					flex:1,
				},
				{
					text:'Ключ связи',
					width:'81',
					dataIndex:'КлючСвязи',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводСерийныхНомеров/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'СерийныйНомер',
					},
					{
						name:'КлючСвязи',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Серийные номера',
			style: 'position:absolute;left:0px;top:6px;width:765px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоСерийныхНомеровВвод',
			text: 'Кол-во серийных номеров:',
			style: 'position:absolute;left:596px;top:175px;width:139px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоСерийныхНомеровВвод',
			style: 'position:absolute;left:735px;top:175px;width:30px;height:19px;',
		},
					]
				},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:781px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:307px;width:781px;height:25px;',
			dock: 'bottom',
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
					text:'Закрыть',
				},
			]
		},
	]
});