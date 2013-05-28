Ext.define('Документы.НДФЛПодтверждениеПраваНаИмущественныйВычет.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:621px;height:392px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Подтверждение права на имущественный вычет',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:82px;width:102px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный',
			width: 220,
			height: 19,
			style: 'position:absolute;left:113px;top:82px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:340px;width:102px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 500,
			height: 19,
			style: 'position:absolute;left:113px;top:340px;width:500px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:173px;width:605px;height:160px;',
			height: 160,width: 605,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Физическое лицо',
					width:'120',
					dataIndex:'ФизЛицо',
					flex:1,
				},
				{
					text:'Дата',
					width:'60',
					dataIndex:'ДатаСобытия',
					flex:1,
				},
				{
					text:'Расходы',
					width:'90',
					dataIndex:'Расходы',
					flex:1,
				},
				{
					text:'%% по кредитам',
					width:'90',
					dataIndex:'ПроцентыПоКредитам',
					flex:1,
				},
				{
					text:'%% при перекредитовании',
					width:'120',
					dataIndex:'ПроцентыПриПерекредитовании',
					flex:1,
				},
				{
					text:'Код ИФНС',
					width:'66',
					dataIndex:'КодНалоговогоОргана',
					flex:1,
				},
				{
					text:'Номер уведомления',
					width:'100',
					dataIndex:'НомерВходящегоДокумента',
					flex:1,
				},
				{
					text:'Дата уведомления',
					width:'97',
					dataIndex:'ДатаУведомления',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НДФЛПодтверждениеПраваНаИмущественныйВычет/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ФизЛицо',
					},
					{
						name:'ДатаСобытия',
					},
					{
						name:'Расходы',
					},
					{
						name:'ПроцентыПоКредитам',
					},
					{
						name:'ПроцентыПриПерекредитовании',
					},
					{
						name:'КодНалоговогоОргана',
					},
					{
						name:'НомерВходящегоДокумента',
					},
					{
						name:'ДатаУведомления',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:102px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:113px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 120,
			height: 19,
			style: 'position:absolute;left:213px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:195px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'fieldset',
			title: 'Сотрудники учреждения',
			style: 'position:absolute;left:8px;top:133px;width:605px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Учреждение:',
			style: 'position:absolute;left:8px;top:57px;width:102px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация',
			width: 220,
			height: 19,
			style: 'position:absolute;left:113px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНалоговыйПериод',
			text: 'Вычет по налогу за:',
			style: 'position:absolute;left:8px;top:107px;width:102px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НалоговыйПериод',
			style: 'position:absolute;left:113px;top:107px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГод',
			text: 'год',
			style: 'position:absolute;left:201px;top:107px;width:25px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:149px;width:605px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:621px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'Редактировать номер',
				},
					]
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
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
			style: 'position:absolute;left:0px;top:367px;width:621px;height:25px;',
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