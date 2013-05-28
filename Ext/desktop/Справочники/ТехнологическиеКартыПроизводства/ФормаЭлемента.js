Ext.define('Справочники.ТехнологическиеКартыПроизводства.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:660px;height:406px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Технологические карты производства',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Код:',
			style: 'position:absolute;left:546px;top:33px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 64,
			height: 19,
			style: 'position:absolute;left:588px;top:33px;width:64px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 446,
			height: 19,
			style: 'position:absolute;left:98px;top:33px;width:446px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Подразделение',
			width: 304,
			height: 19,
			style: 'position:absolute;left:98px;top:57px;width:304px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Состояние:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Состояние',
			width: 120,
			height: 19,
			style: 'position:absolute;left:98px;top:81px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаУтверждения',
			text: 'Дата утверждения:',
			style: 'position:absolute;left:220px;top:81px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаУтверждения',
			width: 80,
			height: 19,
			style: 'position:absolute;left:322px;top:81px;width:80px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:147px;width:644px;height:226px;',
			height: 226,width: 644,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'№ операции',
					width:'100',
					dataIndex:'НомерОперации',
					flex:1,
				},
				{
					text:'Рабочий центр (подготов.)',
					width:'240',
					dataIndex:'РабочийЦентрПодготовительныхОпераций',
					flex:1,
				},
				{
					text:'Тех. операция (подготов.)',
					width:'140',
					dataIndex:'ТехнологическаяОперацияПодготовительная',
					flex:1,
				},
				{
					text:'Ед.',
					width:'44',
					dataIndex:'ЕдиницаПодготовительная',
					flex:1,
				},
				{
					text:'К',
					width:'41',
					dataIndex:'КоэффициентПодготовительная',
					flex:1,
				},
				{
					text:'Время (подготов.)',
					width:'100',
					dataIndex:'ВремяПодготовительныхОпераций',
					flex:1,
				},
				{
					text:'Рабочий центр (выполн.)',
					width:'490',
					dataIndex:'РабочийЦентр',
					flex:1,
				},
				{
					text:'Тех. операция (выполн.)',
					width:'140',
					dataIndex:'ТехнологическаяОперация',
					flex:1,
				},
				{
					text:'Ед.',
					width:'54',
					dataIndex:'Единица',
					flex:1,
				},
				{
					text:'К',
					width:'33',
					dataIndex:'Коэффициент',
					flex:1,
				},
				{
					text:'Время (выполн.)',
					width:'100',
					dataIndex:'ВремяВыполнения',
					flex:1,
				},
				{
					text:'Количество',
					width:'80',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Следующие операции',
					width:'120',
					dataIndex:'СледующиеОперации',
					flex:1,
				},
				{
					text:'Перенос',
					width:'50',
					dataIndex:'ДопускаетПеренос',
					flex:1,
				},
				{
					text:'Рабочий центр (заключ.)',
					width:'240',
					dataIndex:'РабочийЦентрЗаключительныхОпераций',
					flex:1,
				},
				{
					text:'Тех. операция (заключ.)',
					width:'140',
					dataIndex:'ТехнологическаяОперацияЗаключительная',
					flex:1,
				},
				{
					text:'Ед.',
					width:'37',
					dataIndex:'ЕдиницаЗаключительная',
					flex:1,
				},
				{
					text:'К',
					width:'33',
					dataIndex:'КоэффициентЗаключительная',
					flex:1,
				},
				{
					text:'Время (заключ.)',
					width:'92',
					dataIndex:'ВремяЗавершающихОпераций',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТехнологическиеКартыПроизводства/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'НомерОперации',
					},
					{
						name:'РабочийЦентрПодготовительныхОпераций',
					},
					{
						name:'ТехнологическаяОперацияПодготовительная',
					},
					{
						name:'ЕдиницаПодготовительная',
					},
					{
						name:'КоэффициентПодготовительная',
					},
					{
						name:'ВремяПодготовительныхОпераций',
					},
					{
						name:'РабочийЦентр',
					},
					{
						name:'ТехнологическаяОперация',
					},
					{
						name:'Единица',
					},
					{
						name:'Коэффициент',
					},
					{
						name:'ВремяВыполнения',
					},
					{
						name:'Количество',
					},
					{
						name:'СледующиеОперации',
					},
					{
						name:'ДопускаетПеренос',
					},
					{
						name:'РабочийЦентрЗаключительныхОпераций',
					},
					{
						name:'ТехнологическаяОперацияЗаключительная',
					},
					{
						name:'ЕдиницаЗаключительная',
					},
					{
						name:'КоэффициентЗаключительная',
					},
					{
						name:'ВремяЗавершающихОпераций',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Маршрут',
			style: 'position:absolute;left:8px;top:107px;width:644px;height:16px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:123px;width:644px;height:24px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:660px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:381px;width:660px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
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
	]
});