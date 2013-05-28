Ext.define('Документы.ВводИндивидуальныхГрафиковРаботыОрганизации.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:1000px;height:486px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод индивидуальных графиков работы организации',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:40px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 78,
			height: 19,
			style: 'position:absolute;left:48px;top:33px;width:78px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:137px;top:33px;width:19px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:159px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:294px;top:33px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация',
			width: 169,
			height: 19,
			style: 'position:absolute;left:379px;top:33px;width:169px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:294px;top:57px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ПодразделениеОрганизации',
			width: 169,
			height: 19,
			style: 'position:absolute;left:379px;top:57px;width:169px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:57px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный',
			width: 183,
			height: 19,
			style: 'position:absolute;left:96px;top:57px;width:183px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:434px;width:77px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 907,
			height: 19,
			style: 'position:absolute;left:85px;top:434px;width:907px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:196px;width:984px;height:24px;',
			items:
			[
				'-',
				{
					text:'Подбор',
				},
				'-',
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
					text:'Ночные',
				},
				'-',
				{
					text:'Вечерние',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:220px;width:984px;height:208px;',
			height: 208,width: 984,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Таб. №',
					width:'68',
					dataIndex:'ТабельныйНомерСтрока',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'200',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Итого
дней     часов',
					width:'82',
					dataIndex:'ЗаголовокИтогоДнейЧасов',
					flex:1,
				},
				{
					text:'',
					width:'40',
					dataIndex:'ИтогоРасчетДней',
					flex:1,
				},
				{
					text:'',
					width:'40',
					dataIndex:'ИтогоРасчетЧасов',
					flex:1,
				},
				{
					text:'',
					width:'82',
					dataIndex:'ИтогоРасчетВечерних',
					flex:1,
				},
				{
					text:'',
					width:'82',
					dataIndex:'ИтогоРасчетНочных',
					flex:1,
				},
				{
					text:'Часов за день',
					width:'93',
					dataIndex:'ЧасовЗаДень',
					flex:1,
				},
				{
					text:'Из них вечерних',
					width:'93',
					dataIndex:'ИзНихВечерних',
					flex:1,
				},
				{
					text:'Из них ночных',
					width:'93',
					dataIndex:'ИзНихНочных',
					flex:1,
				},
				{
					text:'1',
					width:'43',
					dataIndex:'Часов1',
					flex:1,
				},
				{
					text:'ВЧ',
					width:'43',
					dataIndex:'ЧасовВечерних1',
					flex:1,
				},
				{
					text:'Н',
					width:'43',
					dataIndex:'ЧасовНочных1',
					flex:1,
				},
				{
					text:'2',
					width:'43',
					dataIndex:'Часов2',
					flex:1,
				},
				{
					text:'ВЧ',
					width:'43',
					dataIndex:'ЧасовВечерних2',
					flex:1,
				},
				{
					text:'Н',
					width:'43',
					dataIndex:'ЧасовНочных2',
					flex:1,
				},
				{
					text:'3',
					width:'43',
					dataIndex:'Часов3',
					flex:1,
				},
				{
					text:'ВЧ',
					width:'43',
					dataIndex:'ЧасовВечерних3',
					flex:1,
				},
				{
					text:'Н',
					width:'43',
					dataIndex:'ЧасовНочных3',
					flex:1,
				},
				{
					text:'4',
					width:'43',
					dataIndex:'Часов4',
					flex:1,
				},
				{
					text:'ВЧ',
					width:'43',
					dataIndex:'ЧасовВечерних4',
					flex:1,
				},
				{
					text:'Н',
					width:'43',
					dataIndex:'ЧасовНочных4',
					flex:1,
				},
				{
					text:'5',
					width:'43',
					dataIndex:'Часов5',
					flex:1,
				},
				{
					text:'ВЧ',
					width:'43',
					dataIndex:'ЧасовВечерних5',
					flex:1,
				},
				{
					text:'Н',
					width:'43',
					dataIndex:'ЧасовНочных5',
					flex:1,
				},
				{
					text:'6',
					width:'43',
					dataIndex:'Часов6',
					flex:1,
				},
				{
					text:'ВЧ',
					width:'43',
					dataIndex:'ЧасовВечерних6',
					flex:1,
				},
				{
					text:'Н',
					width:'43',
					dataIndex:'ЧасовНочных6',
					flex:1,
				},
				{
					text:'7',
					width:'43',
					dataIndex:'Часов7',
					flex:1,
				},
				{
					text:'ВЧ',
					width:'43',
					dataIndex:'ЧасовВечерних7',
					flex:1,
				},
				{
					text:'Н',
					width:'43',
					dataIndex:'ЧасовНочных7',
					flex:1,
				},
				{
					text:'8',
					width:'43',
					dataIndex:'Часов8',
					flex:1,
				},
				{
					text:'ВЧ',
					width:'43',
					dataIndex:'ЧасовВечерних8',
					flex:1,
				},
				{
					text:'Н',
					width:'43',
					dataIndex:'ЧасовНочных8',
					flex:1,
				},
				{
					text:'9',
					width:'43',
					dataIndex:'Часов9',
					flex:1,
				},
				{
					text:'ВЧ',
					width:'43',
					dataIndex:'ЧасовВечерних9',
					flex:1,
				},
				{
					text:'Н',
					width:'43',
					dataIndex:'ЧасовНочных9',
					flex:1,
				},
				{
					text:'10',
					width:'43',
					dataIndex:'Часов10',
					flex:1,
				},
				{
					text:'ВЧ',
					width:'43',
					dataIndex:'ЧасовВечерних10',
					flex:1,
				},
				{
					text:'Н',
					width:'43',
					dataIndex:'ЧасовНочных10',
					flex:1,
				},
				{
					text:'11',
					width:'43',
					dataIndex:'Часов11',
					flex:1,
				},
				{
					text:'ВЧ',
					width:'43',
					dataIndex:'ЧасовВечерних11',
					flex:1,
				},
				{
					text:'Н',
					width:'43',
					dataIndex:'ЧасовНочных11',
					flex:1,
				},
				{
					text:'12',
					width:'43',
					dataIndex:'Часов12',
					flex:1,
				},
				{
					text:'ВЧ',
					width:'43',
					dataIndex:'ЧасовВечерних12',
					flex:1,
				},
				{
					text:'Н',
					width:'43',
					dataIndex:'ЧасовНочных12',
					flex:1,
				},
				{
					text:'13',
					width:'43',
					dataIndex:'Часов13',
					flex:1,
				},
				{
					text:'ВЧ',
					width:'43',
					dataIndex:'ЧасовВечерних13',
					flex:1,
				},
				{
					text:'Н',
					width:'43',
					dataIndex:'ЧасовНочных13',
					flex:1,
				},
				{
					text:'14',
					width:'43',
					dataIndex:'Часов14',
					flex:1,
				},
				{
					text:'ВЧ',
					width:'43',
					dataIndex:'ЧасовВечерних14',
					flex:1,
				},
				{
					text:'Н',
					width:'43',
					dataIndex:'ЧасовНочных14',
					flex:1,
				},
				{
					text:'15',
					width:'43',
					dataIndex:'Часов15',
					flex:1,
				},
				{
					text:'ВЧ',
					width:'43',
					dataIndex:'ЧасовВечерних15',
					flex:1,
				},
				{
					text:'Н',
					width:'43',
					dataIndex:'ЧасовНочных15',
					flex:1,
				},
				{
					text:'16',
					width:'43',
					dataIndex:'Часов16',
					flex:1,
				},
				{
					text:'ВЧ',
					width:'43',
					dataIndex:'ЧасовВечерних16',
					flex:1,
				},
				{
					text:'Н',
					width:'43',
					dataIndex:'ЧасовНочных16',
					flex:1,
				},
				{
					text:'17',
					width:'43',
					dataIndex:'Часов17',
					flex:1,
				},
				{
					text:'ВЧ',
					width:'43',
					dataIndex:'ЧасовВечерних17',
					flex:1,
				},
				{
					text:'Н',
					width:'43',
					dataIndex:'ЧасовНочных17',
					flex:1,
				},
				{
					text:'18',
					width:'43',
					dataIndex:'Часов18',
					flex:1,
				},
				{
					text:'ВЧ',
					width:'43',
					dataIndex:'ЧасовВечерних18',
					flex:1,
				},
				{
					text:'Н',
					width:'43',
					dataIndex:'ЧасовНочных18',
					flex:1,
				},
				{
					text:'19',
					width:'43',
					dataIndex:'Часов19',
					flex:1,
				},
				{
					text:'ВЧ',
					width:'43',
					dataIndex:'ЧасовВечерних19',
					flex:1,
				},
				{
					text:'Н',
					width:'43',
					dataIndex:'ЧасовНочных19',
					flex:1,
				},
				{
					text:'20',
					width:'43',
					dataIndex:'Часов20',
					flex:1,
				},
				{
					text:'ВЧ',
					width:'43',
					dataIndex:'ЧасовВечерних20',
					flex:1,
				},
				{
					text:'Н',
					width:'43',
					dataIndex:'ЧасовНочных20',
					flex:1,
				},
				{
					text:'21',
					width:'43',
					dataIndex:'Часов21',
					flex:1,
				},
				{
					text:'ВЧ',
					width:'43',
					dataIndex:'ЧасовВечерних21',
					flex:1,
				},
				{
					text:'Н',
					width:'43',
					dataIndex:'ЧасовНочных21',
					flex:1,
				},
				{
					text:'22',
					width:'43',
					dataIndex:'Часов22',
					flex:1,
				},
				{
					text:'ВЧ',
					width:'43',
					dataIndex:'ЧасовВечерних22',
					flex:1,
				},
				{
					text:'Н',
					width:'43',
					dataIndex:'ЧасовНочных22',
					flex:1,
				},
				{
					text:'23',
					width:'43',
					dataIndex:'Часов23',
					flex:1,
				},
				{
					text:'ВЧ',
					width:'43',
					dataIndex:'ЧасовВечерних23',
					flex:1,
				},
				{
					text:'Н',
					width:'43',
					dataIndex:'ЧасовНочных23',
					flex:1,
				},
				{
					text:'24',
					width:'43',
					dataIndex:'Часов24',
					flex:1,
				},
				{
					text:'ВЧ',
					width:'43',
					dataIndex:'ЧасовВечерних24',
					flex:1,
				},
				{
					text:'Н',
					width:'43',
					dataIndex:'ЧасовНочных24',
					flex:1,
				},
				{
					text:'25',
					width:'43',
					dataIndex:'Часов25',
					flex:1,
				},
				{
					text:'ВЧ',
					width:'43',
					dataIndex:'ЧасовВечерних25',
					flex:1,
				},
				{
					text:'Н',
					width:'43',
					dataIndex:'ЧасовНочных25',
					flex:1,
				},
				{
					text:'26',
					width:'43',
					dataIndex:'Часов26',
					flex:1,
				},
				{
					text:'ВЧ',
					width:'43',
					dataIndex:'ЧасовВечерних26',
					flex:1,
				},
				{
					text:'Н',
					width:'43',
					dataIndex:'ЧасовНочных26',
					flex:1,
				},
				{
					text:'27',
					width:'43',
					dataIndex:'Часов27',
					flex:1,
				},
				{
					text:'ВЧ',
					width:'43',
					dataIndex:'ЧасовВечерних27',
					flex:1,
				},
				{
					text:'Н',
					width:'43',
					dataIndex:'ЧасовНочных27',
					flex:1,
				},
				{
					text:'28',
					width:'43',
					dataIndex:'Часов28',
					flex:1,
				},
				{
					text:'ВЧ',
					width:'43',
					dataIndex:'ЧасовВечерних28',
					flex:1,
				},
				{
					text:'Н',
					width:'43',
					dataIndex:'ЧасовНочных28',
					flex:1,
				},
				{
					text:'29',
					width:'43',
					dataIndex:'Часов29',
					flex:1,
				},
				{
					text:'ВЧ',
					width:'43',
					dataIndex:'ЧасовВечерних29',
					flex:1,
				},
				{
					text:'Н',
					width:'43',
					dataIndex:'ЧасовНочных29',
					flex:1,
				},
				{
					text:'30',
					width:'43',
					dataIndex:'Часов30',
					flex:1,
				},
				{
					text:'ВЧ',
					width:'43',
					dataIndex:'ЧасовВечерних30',
					flex:1,
				},
				{
					text:'Н',
					width:'43',
					dataIndex:'ЧасовНочных30',
					flex:1,
				},
				{
					text:'31',
					width:'43',
					dataIndex:'Часов31',
					flex:1,
				},
				{
					text:'ВЧ',
					width:'43',
					dataIndex:'ЧасовВечерних31',
					flex:1,
				},
				{
					text:'Н',
					width:'43',
					dataIndex:'ЧасовНочных31',
					flex:1,
				},
				{
					text:'Всего дней',
					width:'100',
					dataIndex:'ВсегоДней',
					flex:1,
				},
				{
					text:'Всего часов',
					width:'100',
					dataIndex:'ВсегоЧасов',
					flex:1,
				},
				{
					text:'Всего часов вечерних',
					width:'137',
					dataIndex:'ВсегоЧасовВечерних',
					flex:1,
				},
				{
					text:'Всего часов ночных',
					width:'132',
					dataIndex:'ВсегоЧасовНочных',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВводИндивидуальныхГрафиковРаботыОрганизации/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ТабельныйНомерСтрока',
					},
					{
						name:'Сотрудник',
					},
					{
						name:'ЗаголовокИтогоДнейЧасов',
					},
					{
						name:'ИтогоРасчетДней',
					},
					{
						name:'ИтогоРасчетЧасов',
					},
					{
						name:'ИтогоРасчетВечерних',
					},
					{
						name:'ИтогоРасчетНочных',
					},
					{
						name:'ЧасовЗаДень',
					},
					{
						name:'ИзНихВечерних',
					},
					{
						name:'ИзНихНочных',
					},
					{
						name:'Часов1',
					},
					{
						name:'ЧасовВечерних1',
					},
					{
						name:'ЧасовНочных1',
					},
					{
						name:'Часов2',
					},
					{
						name:'ЧасовВечерних2',
					},
					{
						name:'ЧасовНочных2',
					},
					{
						name:'Часов3',
					},
					{
						name:'ЧасовВечерних3',
					},
					{
						name:'ЧасовНочных3',
					},
					{
						name:'Часов4',
					},
					{
						name:'ЧасовВечерних4',
					},
					{
						name:'ЧасовНочных4',
					},
					{
						name:'Часов5',
					},
					{
						name:'ЧасовВечерних5',
					},
					{
						name:'ЧасовНочных5',
					},
					{
						name:'Часов6',
					},
					{
						name:'ЧасовВечерних6',
					},
					{
						name:'ЧасовНочных6',
					},
					{
						name:'Часов7',
					},
					{
						name:'ЧасовВечерних7',
					},
					{
						name:'ЧасовНочных7',
					},
					{
						name:'Часов8',
					},
					{
						name:'ЧасовВечерних8',
					},
					{
						name:'ЧасовНочных8',
					},
					{
						name:'Часов9',
					},
					{
						name:'ЧасовВечерних9',
					},
					{
						name:'ЧасовНочных9',
					},
					{
						name:'Часов10',
					},
					{
						name:'ЧасовВечерних10',
					},
					{
						name:'ЧасовНочных10',
					},
					{
						name:'Часов11',
					},
					{
						name:'ЧасовВечерних11',
					},
					{
						name:'ЧасовНочных11',
					},
					{
						name:'Часов12',
					},
					{
						name:'ЧасовВечерних12',
					},
					{
						name:'ЧасовНочных12',
					},
					{
						name:'Часов13',
					},
					{
						name:'ЧасовВечерних13',
					},
					{
						name:'ЧасовНочных13',
					},
					{
						name:'Часов14',
					},
					{
						name:'ЧасовВечерних14',
					},
					{
						name:'ЧасовНочных14',
					},
					{
						name:'Часов15',
					},
					{
						name:'ЧасовВечерних15',
					},
					{
						name:'ЧасовНочных15',
					},
					{
						name:'Часов16',
					},
					{
						name:'ЧасовВечерних16',
					},
					{
						name:'ЧасовНочных16',
					},
					{
						name:'Часов17',
					},
					{
						name:'ЧасовВечерних17',
					},
					{
						name:'ЧасовНочных17',
					},
					{
						name:'Часов18',
					},
					{
						name:'ЧасовВечерних18',
					},
					{
						name:'ЧасовНочных18',
					},
					{
						name:'Часов19',
					},
					{
						name:'ЧасовВечерних19',
					},
					{
						name:'ЧасовНочных19',
					},
					{
						name:'Часов20',
					},
					{
						name:'ЧасовВечерних20',
					},
					{
						name:'ЧасовНочных20',
					},
					{
						name:'Часов21',
					},
					{
						name:'ЧасовВечерних21',
					},
					{
						name:'ЧасовНочных21',
					},
					{
						name:'Часов22',
					},
					{
						name:'ЧасовВечерних22',
					},
					{
						name:'ЧасовНочных22',
					},
					{
						name:'Часов23',
					},
					{
						name:'ЧасовВечерних23',
					},
					{
						name:'ЧасовНочных23',
					},
					{
						name:'Часов24',
					},
					{
						name:'ЧасовВечерних24',
					},
					{
						name:'ЧасовНочных24',
					},
					{
						name:'Часов25',
					},
					{
						name:'ЧасовВечерних25',
					},
					{
						name:'ЧасовНочных25',
					},
					{
						name:'Часов26',
					},
					{
						name:'ЧасовВечерних26',
					},
					{
						name:'ЧасовНочных26',
					},
					{
						name:'Часов27',
					},
					{
						name:'ЧасовВечерних27',
					},
					{
						name:'ЧасовНочных27',
					},
					{
						name:'Часов28',
					},
					{
						name:'ЧасовВечерних28',
					},
					{
						name:'ЧасовНочных28',
					},
					{
						name:'Часов29',
					},
					{
						name:'ЧасовВечерних29',
					},
					{
						name:'ЧасовНочных29',
					},
					{
						name:'Часов30',
					},
					{
						name:'ЧасовВечерних30',
					},
					{
						name:'ЧасовНочных30',
					},
					{
						name:'Часов31',
					},
					{
						name:'ЧасовВечерних31',
					},
					{
						name:'ЧасовНочных31',
					},
					{
						name:'ВсегоДней',
					},
					{
						name:'ВсегоЧасов',
					},
					{
						name:'ВсегоЧасовВечерних',
					},
					{
						name:'ВсегоЧасовНочных',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Сотрудники',
			style: 'position:absolute;left:8px;top:180px;width:984px;height:16px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:92px;width:984px;height:82px;',
			height: 82,width: 984,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПериодРегистрации',
			text: 'Месяц:',
			style: 'position:absolute;left:8px;top:9px;width:40px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПериодРегистрации',
			width: 162,
			height: 19,
			style: 'position:absolute;left:52px;top:9px;width:162px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Способ ввода данных',
			style: 'position:absolute;left:254px;top:12px;width:275px;height:16px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Ввод времени по каждому дню периода',
			style: 'position:absolute;left:254px;top:31px;width:275px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Сводный ввод времени в целом за период',
			style: 'position:absolute;left:254px;top:53px;width:275px;height:19px;',
		},
			]
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
			style: 'position:absolute;left:0px;top:0px;width:1000px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:461px;width:1000px;height:25px;',
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