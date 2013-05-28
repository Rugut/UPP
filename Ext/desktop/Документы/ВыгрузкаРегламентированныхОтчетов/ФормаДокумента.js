Ext.define('Документы.ВыгрузкаРегламентированныхОтчетов.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:720px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата1',
			text: 'от:',
			style: 'position:absolute;left:198px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 102,
			height: 19,
			style: 'position:absolute;left:93px;top:33px;width:102px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 127,
			height: 19,
			style: 'position:absolute;left:216px;top:33px;width:127px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Организация',
			width: 251,
			height: 19,
			style: 'position:absolute;left:93px;top:57px;width:251px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Код ИФНС:',
			style: 'position:absolute;left:354px;top:57px;width:68px;height:19px;text-align:center;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:138px;width:704px;height:258px;',
			height: 258,width: 704,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Отчеты',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:45px;width:704px;height:211px;',
			height: 211,width: 704,
			columns:
			[
				{
					text:'',
					width:'22',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Отчет',
					width:'142',
					dataIndex:'Отчет',
					flex:1,
				},
				{
					text:'Вид',
					width:'41',
					dataIndex:'Вид',
					flex:1,
				},
				{
					text:'Период',
					width:'100',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'94',
					dataIndex:'Комментарий',
					flex:1,
				},
				{
					text:'Текст',
					width:'45',
					dataIndex:'НомерСтрокиТекстаВыгрузки',
					flex:1,
				},
				{
					text:'Ссылка',
					width:'100',
					dataIndex:'Ссылка',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВыгрузкаРегламентированныхОтчетов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Пометка',
					},
					{
						name:'Отчет',
					},
					{
						name:'Вид',
					},
					{
						name:'Период',
					},
					{
						name:'Комментарий',
					},
					{
						name:'НомерСтрокиТекстаВыгрузки',
					},
					{
						name:'Ссылка',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Отчеты',
			style: 'position:absolute;left:0px;top:0px;width:704px;height:16px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодИМНС',
			width: 62,
			height: 19,
			style: 'position:absolute;left:424px;top:57px;width:62px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:398px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 622,
			height: 19,
			style: 'position:absolute;left:90px;top:398px;width:622px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц1',
			text: 'Янв',
			style: 'position:absolute;left:186px;top:115px;width:25px;height:18px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц3',
			text: 'I кв',
			style: 'position:absolute;left:243px;top:115px;width:28px;height:18px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц5',
			text: 'Май',
			style: 'position:absolute;left:304px;top:115px;width:25px;height:18px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц7',
			text: 'Июл',
			style: 'position:absolute;left:363px;top:115px;width:25px;height:18px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц9',
			text: 'III кв',
			style: 'position:absolute;left:419px;top:115px;width:32px;height:18px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц11',
			text: 'Ноя',
			style: 'position:absolute;left:482px;top:115px;width:25px;height:18px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц2',
			text: 'Фев',
			style: 'position:absolute;left:215px;top:115px;width:25px;height:18px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц4',
			text: 'Апр',
			style: 'position:absolute;left:274px;top:115px;width:25px;height:18px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц6',
			text: 'II кв',
			style: 'position:absolute;left:332px;top:115px;width:28px;height:18px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц8',
			text: 'Авг',
			style: 'position:absolute;left:393px;top:115px;width:25px;height:18px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц10',
			text: 'Окт',
			style: 'position:absolute;left:452px;top:115px;width:25px;height:18px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьГод',
			text: 'Год:',
			style: 'position:absolute;left:8px;top:84px;width:80px;height:15px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Год',
			style: 'position:absolute;left:93px;top:81px;width:60px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц12',
			text: 'IV кв',
			style: 'position:absolute;left:509px;top:115px;width:32px;height:18px;text-align:center;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отбор по коду ИФНС',
			style: 'position:absolute;left:354px;top:33px;width:132px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:720px;height:25px;',
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:720px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Зашифровать и отправить',
				},
				'-',
				{
					text:'Сформировать тексты выгрузки',
				},
				'-',
				{
					text:'Проверить',
				},
				'-',
				{
					text:'Сохранить',
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
	]
});