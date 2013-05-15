Ext.define('Обработки.РасчетАвансовыхПлатежейПоТранспортномуНалогу.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:787px;height:392px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Расчет авансовых платежей по транспортному налогу',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			style: 'position:absolute;left:84px;top:33px;width:308px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:87px;width:771px;height:177px;',
			height: 177,width: 771,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Код вида',
					width:'61',
					dataIndex:'КодВида',
					flex:1,
				},
				{
					text:'Идентификационный номер',
					width:'73',
					dataIndex:'ИдентификационныйНомер',
					flex:1,
				},
				{
					text:'Марка',
					width:'82',
					dataIndex:'Марка',
					flex:1,
				},
				{
					text:'Регистрационный знак',
					width:'100',
					dataIndex:'РегистрационныйЗнак',
					flex:1,
				},
				{
					text:'Налоговая база',
					width:'76',
					dataIndex:'НалоговаяБаза',
					flex:1,
				},
				{
					text:'Единица измерения',
					width:'79',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Срок использования',
					width:'93',
					dataIndex:'СрокИспользования',
					flex:1,
				},
				{
					text:'Коэффициент',
					width:'87',
					dataIndex:'Коэффициент',
					flex:1,
				},
				{
					text:'Ставка налога',
					width:'70',
					dataIndex:'СтавкаНалога',
					flex:1,
				},
				{
					text:'Сумма налога',
					width:'72',
					dataIndex:'СуммаНалога',
					flex:1,
				},
				{
					text:'Код налоговй льготы',
					width:'83',
					dataIndex:'КодНалоговйЛьготы',
					flex:1,
				},
				{
					text:'Сумма налоговой льготы',
					width:'99',
					dataIndex:'СуммаНалоговойЛьготы',
					flex:1,
				},
				{
					text:'Сумма налога к уплате',
					width:'94',
					dataIndex:'СуммаНалогаКуплате',
					flex:1,
				},
				{
					text:'Код ОКАТО',
					width:'100',
					dataIndex:'КодОКАТО',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетАвансовыхПлатежейПоТранспортномуНалогу/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'КодВида',
					},
					{
						name:'ИдентификационныйНомер',
					},
					{
						name:'Марка',
					},
					{
						name:'РегистрационныйЗнак',
					},
					{
						name:'НалоговаяБаза',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'СрокИспользования',
					},
					{
						name:'Коэффициент',
					},
					{
						name:'СтавкаНалога',
					},
					{
						name:'СуммаНалога',
					},
					{
						name:'КодНалоговйЛьготы',
					},
					{
						name:'СуммаНалоговойЛьготы',
					},
					{
						name:'СуммаНалогаКуплате',
					},
					{
						name:'КодОКАТО',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:274px;width:771px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:298px;width:771px;height:61px;',
			height: 61,width: 771,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Код ОКАТО',
					width:'100',
					dataIndex:'КодОКАТО',
					flex:1,
				},
				{
					text:'Сумма',
					width:'120',
					dataIndex:'Сумма',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетАвансовыхПлатежейПоТранспортномуНалогу/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'КодОКАТО',
					},
					{
						name:'Сумма',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьПериодСоставленияОтчета',
			text: '',
			style: 'position:absolute;left:470px;top:33px;width:100px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущийПериод',
			text: '',
			style: 'position:absolute;left:445px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующийПериод',
			text: '',
			style: 'position:absolute;left:576px;top:33px;width:20px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:63px;width:771px;height:24px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:787px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
					]
				},
				{
					text:'Регистрация транспортных средств',
				},
				'-',
				{
					text:'Заполнить',
				},
				'-',
				{
					text:'Сохранить значения...',
				},
				{
					text:'Восстановить значения...',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:367px;width:787px;height:25px;',
			dock: 'bottom',
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
					text:'Закрыть',
				},
			]
		},
	]
});