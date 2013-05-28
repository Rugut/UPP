Ext.define('Обработки.ПодготовкаДанныхПФР2009.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:970px;height:548px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Подготовка данных СЗВ-4',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Учреждение:',
			style: 'position:absolute;left:8px;top:8px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация',
			width: 249,
			height: 19,
			style: 'position:absolute;left:93px;top:8px;width:249px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Год',
			text: 'Год:',
			style: 'position:absolute;left:364px;top:8px;width:25px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'РасчетныйПериод',
			style: 'position:absolute;left:393px;top:8px;width:72px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Тип сведений:',
			style: 'position:absolute;left:727px;top:8px;width:77px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДанныеОСтажеФизлица',
			text: '  Состав пачки',
			style: 'position:absolute;left:8px;top:243px;width:954px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНазваниеПачки',
			text: '  Документы, пачки документов',
			style: 'position:absolute;left:8px;top:57px;width:954px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:105px;width:275px;height:130px;',
			height: 130,width: 275,
			columns:
			[
				{
					text:'Пачка',
					width:'100',
					dataIndex:'Пачка',
					flex:1,
				},
				{
					text:'Номер пачки',
					width:'100',
					dataIndex:'НомерПачки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодготовкаДанныхПФР2009/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Пачка',
					},
					{
						name:'НомерПачки',
					},
				]
			},
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:300px;top:81px;width:662px;height:154px;',
			height: 154,width: 662,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'АДВ11',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись21',
			text: 'Дата заполнения:',
			style: 'position:absolute;left:0px;top:0px;width:96px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаСоставления',
			width: 136,
			height: 19,
			style: 'position:absolute;left:96px;top:0px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерВПачке',
			text: 'Номер пачки:',
			style: 'position:absolute;left:247px;top:0px;width:73px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерПачки',
			width: 92,
			height: 19,
			style: 'position:absolute;left:320px;top:0px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись23',
			text: 'Ведомость составлена по состоянию на дату:',
			style: 'position:absolute;left:444px;top:0px;width:102px;height:43px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаДействия',
			width: 92,
			height: 19,
			style: 'position:absolute;left:546px;top:24px;width:92px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Уплата страховых взносов на обязательное пенсионное страхование',
			style: 'position:absolute;left:0px;top:53px;width:662px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Надпись28',
			text: 'Дата заполнения:',
			style: 'position:absolute;left:0px;top:0px;width:93px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:0px;top:24px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный1',
			text: 'Ответственный:',
			style: 'position:absolute;left:0px;top:24px;width:96px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Исполнитель1',
			width: 316,
			height: 19,
			style: 'position:absolute;left:96px;top:24px;width:316px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:69px;width:662px;height:85px;',
			height: 85,width: 662,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:662px;height:59px;',
			height: 59,width: 662,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Тип строки',
					width:'100',
					dataIndex:'ТипСтроки',
					flex:1,
				},
				{
					text:'Год',
					width:'100',
					dataIndex:'Год',
					flex:1,
				},
				{
					text:'Страховая часть',
					width:'100',
					dataIndex:'СтраховаяЧасть',
					flex:1,
				},
				{
					text:'Накопительная часть',
					width:'118',
					dataIndex:'НакопительнаяЧасть1',
					flex:1,
				},
				{
					text:'Дополнительный тариф',
					width:'130',
					dataIndex:'ДополнительныйТариф',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодготовкаДанныхПФР2009/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ТипСтроки',
					},
					{
						name:'Год',
					},
					{
						name:'СтраховаяЧасть',
					},
					{
						name:'НакопительнаяЧасть1',
					},
					{
						name:'ДополнительныйТариф',
					},
				]
			},
		},
					]
				},
				{
					title:'',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись29',
			text: 'Данные о уплате взносов доступны только расчетчику!',
			style: 'position:absolute;left:25px;top:9px;width:291px;height:18px;text-align:left;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'СЗВ4',
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ТерриториальныеУсловия',
			width: 66,
			height: 19,
			style: 'position:absolute;left:167px;top:120px;width:66px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипФормы',
			text: 'Тип формы:',
			style: 'position:absolute;left:0px;top:50px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидКорректировки',
			text: 'Вид корректировки:',
			style: 'position:absolute;left:480px;top:0px;width:131px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаСоставления1',
			width: 117,
			height: 19,
			style: 'position:absolute;left:98px;top:0px;width:117px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерВпачкеСЗВ4',
			text: 'Номер пачки:',
			style: 'position:absolute;left:230px;top:0px;width:71px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерПачки1',
			width: 92,
			height: 19,
			style: 'position:absolute;left:306px;top:0px;width:92px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Исполнитель',
			width: 300,
			height: 19,
			style: 'position:absolute;left:98px;top:24px;width:300px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Отсутствует',
			style: 'position:absolute;left:485px;top:20px;width:117px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Корректирующие',
			style: 'position:absolute;left:485px;top:38px;width:117px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Отменяющие',
			style: 'position:absolute;left:485px;top:56px;width:117px;height:15px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'СЗВ-4-1',
			style: 'position:absolute;left:7px;top:74px;width:57px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'СЗВ-4-2',
			style: 'position:absolute;left:7px;top:98px;width:57px;height:19px;',
		},
			]
		},
					]
				},
				{
					title:'',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСостояниеПодготовкиДокументов',
			text: 'Данные для передачи еще не готовы. Необходимо создать хотя бы одну пачку документов.',
			style: 'position:absolute;left:30px;top:519px;width:493px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВерсияФормата',
			text: 'Формат файла:',
			style: 'position:absolute;left:487px;top:8px;width:84px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ФорматФайла',
			width: 123,
			height: 19,
			style: 'position:absolute;left:576px;top:8px;width:123px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Печать',
			text: '&Печать',
			style: 'position:absolute;left:622px;top:519px;width:76px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'ПоказатьФайл',
			text: 'Показать &файл',
			style: 'position:absolute;left:699px;top:519px;width:118px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'НаДиск',
			text: 'На &диск',
			style: 'position:absolute;left:818px;top:519px;width:81px;height:21px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:266px;width:954px;height:243px;',
			height: 243,width: 954,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'СЗВ4',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:275px;height:219px;',
			height: 219,width: 275,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Физ лицо',
					width:'200',
					dataIndex:'ФизЛицо',
					flex:1,
				},
				{
					text:'Адрес для информирования',
					width:'100',
					dataIndex:'АдресДляИнформирования',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодготовкаДанныхПФР2009/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ФизЛицо',
					},
					{
						name:'АдресДляИнформирования',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Стаж работы за отчетный период',
			style: 'position:absolute;left:290px;top:115px;width:664px;height:16px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:290px;top:131px;width:664px;height:112px;',
			height: 112,width: 664,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница СЗВ41',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:664px;height:88px;',
			height: 88,width: 664,
			columns:
			[
				{
					text:'Период',
					width:'120',
					dataIndex:'НевидимаяКолонка1',
					flex:1,
				},
				{
					text:'Начало',
					width:'60',
					dataIndex:'ДатаНачалаПериода',
					flex:1,
				},
				{
					text:'Окончание',
					width:'60',
					dataIndex:'ДатаОкончанияПериода',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'НевидимаяКолонка2',
					flex:1,
				},
				{
					text:'Территориальные условия',
					width:'30',
					dataIndex:'ТерриториальныеУсловия',
					flex:1,
				},
				{
					text:'Условия труда',
					width:'120',
					dataIndex:'НевидимаяКолонка3',
					flex:1,
				},
				{
					text:'Код особых условий труда',
					width:'60',
					dataIndex:'ОсобыеУсловияТруда',
					flex:1,
				},
				{
					text:'Код позиции списка',
					width:'60',
					dataIndex:'КодПозицииСписка',
					flex:1,
				},
				{
					text:'Исчисление страхового стажа',
					width:'160',
					dataIndex:'НевидимаяКолонка4',
					flex:1,
				},
				{
					text:'Код',
					width:'60',
					dataIndex:'ОснованиеИсчисляемогоСтажа',
					flex:1,
				},
				{
					text:'Месяцы',
					width:'30',
					dataIndex:'ПервыйПараметрИсчисляемогоСтажа',
					flex:1,
				},
				{
					text:'Дни',
					width:'30',
					dataIndex:'ВторойПараметрИсчисляемогоСтажа',
					flex:1,
				},
				{
					text:'Вид отпуска',
					width:'40',
					dataIndex:'ТретийПараметрИсчисляемогоСтажа',
					flex:1,
				},
				{
					text:'Досрочное назначение пенсии',
					width:'150',
					dataIndex:'НевидимаяКолонка5',
					flex:1,
				},
				{
					text:'Код',
					width:'60',
					dataIndex:'ОснованиеВыслугиЛет',
					flex:1,
				},
				{
					text:'Часы/месяцы',
					width:'30',
					dataIndex:'ПервыйПараметрВыслугиЛет',
					flex:1,
				},
				{
					text:'Минуты',
					width:'30',
					dataIndex:'ВторойПараметрВыслугиЛет',
					flex:1,
				},
				{
					text:'Ставка',
					width:'30',
					dataIndex:'ТретийПараметрВыслугиЛет',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодготовкаДанныхПФР2009/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НевидимаяКолонка1',
					},
					{
						name:'ДатаНачалаПериода',
					},
					{
						name:'ДатаОкончанияПериода',
					},
					{
						name:'НевидимаяКолонка2',
					},
					{
						name:'ТерриториальныеУсловия',
					},
					{
						name:'НевидимаяКолонка3',
					},
					{
						name:'ОсобыеУсловияТруда',
					},
					{
						name:'КодПозицииСписка',
					},
					{
						name:'НевидимаяКолонка4',
					},
					{
						name:'ОснованиеИсчисляемогоСтажа',
					},
					{
						name:'ПервыйПараметрИсчисляемогоСтажа',
					},
					{
						name:'ВторойПараметрИсчисляемогоСтажа',
					},
					{
						name:'ТретийПараметрИсчисляемогоСтажа',
					},
					{
						name:'НевидимаяКолонка5',
					},
					{
						name:'ОснованиеВыслугиЛет',
					},
					{
						name:'ПервыйПараметрВыслугиЛет',
					},
					{
						name:'ВторойПараметрВыслугиЛет',
					},
					{
						name:'ТретийПараметрВыслугиЛет',
					},
				]
			},
		},
					]
				},
				{
					title:'Страница СЗВ42',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись19',
			text: 'Начало периода:',
			style: 'position:absolute;left:12px;top:13px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись20',
			text: 'Конец периода:',
			style: 'position:absolute;left:12px;top:37px;width:88px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'СтажРаботыНачалоПериода',
			width: 80,
			height: 19,
			style: 'position:absolute;left:106px;top:13px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'СтажРаботыОкончаниеПериода',
			width: 80,
			height: 19,
			style: 'position:absolute;left:106px;top:37px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:290px;top:0px;width:664px;height:108px;',
			height: 108,width: 664,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница со всеми взносами',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Сумма начисленных страховых взносов',
			style: 'position:absolute;left:0px;top:0px;width:467px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Периоды отсутствия',
			style: 'position:absolute;left:0px;top:45px;width:467px;height:16px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'МесяцыБолезни',
			style: 'position:absolute;left:225px;top:66px;width:45px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтпускВН',
			text: 'Отпуск по временной нетрудоспособности:',
			style: 'position:absolute;left:0px;top:66px;width:225px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'МесяцыОтпускаЗаСвойСчет',
			style: 'position:absolute;left:225px;top:89px;width:45px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтпускБСЗП',
			text: 'Отпуск без сохранения заработной платы:',
			style: 'position:absolute;left:0px;top:89px;width:225px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСЗПДней',
			text: 'дней',
			style: 'position:absolute;left:375px;top:89px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ДниОтпускаЗаСвойСчет',
			style: 'position:absolute;left:324px;top:89px;width:45px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись13',
			text: 'месяцев',
			style: 'position:absolute;left:270px;top:89px;width:54px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьВНДней',
			text: 'дней',
			style: 'position:absolute;left:375px;top:66px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'месяцев',
			style: 'position:absolute;left:270px;top:66px;width:54px;height:19px;text-align:center;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ДниБолезни',
			style: 'position:absolute;left:324px;top:66px;width:45px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Адрес для информирования',
			style: 'position:absolute;left:476px;top:69px;width:188px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресДляИнформирования',
			width: 188,
			height: 19,
			style: 'position:absolute;left:476px;top:89px;width:188px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:21px;width:467px;height:19px;',
			height: 19,width: 467,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'',
					items:
					[
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НачисленоНаСтраховуюЧастьПФР',
			style: 'position:absolute;left:59px;top:0px;width:75px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НачисленоНаНакопительнуюЧастьПФР',
			style: 'position:absolute;left:224px;top:0px;width:75px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаСтраховуюЧасть',
			text: 'Страховая:',
			style: 'position:absolute;left:0px;top:0px;width:57px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНакопительнаяЧасть',
			text: 'Накопительная:',
			style: 'position:absolute;left:140px;top:0px;width:82px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись31',
			text: 'Данные о начисленных взносах доступны только расчетчику!',
			style: 'position:absolute;left:24px;top:0px;width:443px;height:19px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:304px;top:0px;width:163px;height:19px;',
			height: 19,width: 163,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НачисленоПоДополнительномуТарифу',
			style: 'position:absolute;left:90px;top:0px;width:73px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПоДополнительномуТарифу',
			text: 'Дополнительная:',
			style: 'position:absolute;left:0px;top:0px;width:90px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:476px;top:0px;width:188px;height:64px;',
			height: 64,width: 188,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Всего взносов',
			style: 'position:absolute;left:0px;top:0px;width:186px;height:16px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НачисленоПоВсейОрганизацииНаСтраховуюЧастьПФР',
			style: 'position:absolute;left:115px;top:21px;width:71px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаСтраховуюЧасть1',
			text: 'Страховая часть:',
			style: 'position:absolute;left:0px;top:21px;width:89px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НачисленоПоВсейОрганизацииНаНакопительнуюЧастьПФР',
			style: 'position:absolute;left:115px;top:45px;width:71px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНакопительнаяЧасть1',
			text: 'Накопительная часть:',
			style: 'position:absolute;left:0px;top:45px;width:113px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Страница без всех взносов',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Сумма начисленных страховых взносов',
			style: 'position:absolute;left:0px;top:0px;width:664px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Периоды отсутствия',
			style: 'position:absolute;left:0px;top:45px;width:428px;height:16px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'МесяцыБолезни1',
			style: 'position:absolute;left:225px;top:66px;width:45px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтпускВН1',
			text: 'Отпуск по временной нетрудоспособности:',
			style: 'position:absolute;left:0px;top:66px;width:225px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'МесяцыОтпускаЗаСвойСчет1',
			style: 'position:absolute;left:225px;top:89px;width:45px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтпускБСЗП1',
			text: 'Отпуск без сохранения заработной платы:',
			style: 'position:absolute;left:0px;top:89px;width:225px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСЗПДней1',
			text: 'дней',
			style: 'position:absolute;left:375px;top:89px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ДниОтпускаЗаСвойСчет1',
			style: 'position:absolute;left:324px;top:89px;width:45px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись32',
			text: 'месяцев',
			style: 'position:absolute;left:270px;top:89px;width:54px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьВНДней1',
			text: 'дней',
			style: 'position:absolute;left:375px;top:66px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись33',
			text: 'месяцев',
			style: 'position:absolute;left:270px;top:66px;width:54px;height:19px;text-align:center;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ДниБолезни1',
			style: 'position:absolute;left:324px;top:66px;width:45px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Адрес для информирования',
			style: 'position:absolute;left:439px;top:45px;width:225px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресДляИнформирования1',
			width: 225,
			height: 19,
			style: 'position:absolute;left:439px;top:65px;width:225px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:21px;width:664px;height:19px;',
			height: 19,width: 664,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'',
					items:
					[
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НачисленоНаСтраховуюЧастьПФР1',
			style: 'position:absolute;left:60px;top:0px;width:110px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НачисленоНаНакопительнуюЧастьПФР1',
			style: 'position:absolute;left:304px;top:0px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаСтраховуюЧасть2',
			text: 'Страховая:',
			style: 'position:absolute;left:0px;top:0px;width:57px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНакопительнаяЧасть2',
			text: 'Накопительная:',
			style: 'position:absolute;left:217px;top:0px;width:82px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:425px;top:0px;width:239px;height:19px;',
			height: 19,width: 239,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НачисленоПоДополнительномуТарифу1',
			style: 'position:absolute;left:129px;top:0px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПоДополнительномуТарифу1',
			text: 'Дополнительная:',
			style: 'position:absolute;left:33px;top:0px;width:90px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись34',
			text: 'Данные о начисленных взносах доступны только расчетчику!',
			style: 'position:absolute;left:24px;top:0px;width:640px;height:19px;text-align:left;',
		},
					]
				},
			]
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Пустая страница',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:0px;width:940px;height:226px;',
			height: 226,width: 940,
			columns:
			[
				{
					text:'',
					width:'0',
					dataIndex:'',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПодготовкаДанныхПФР2009/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'',
					},
				]
			},
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'Проверить',
			text: 'Проверить',
			style: 'position:absolute;left:526px;top:519px;width:95px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Сформировать',
			text: 'Заполнить',
			style: 'position:absolute;left:8px;top:32px;width:80px;height:21px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:8px;top:513px;width:954px;height:3px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОК',
			text: 'ОК',
			style: 'position:absolute;left:901px;top:519px;width:36px;height:21px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВвода1',
			width: 45,
			height: 19,
			style: 'position:absolute;left:43px;top:148px;width:45px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Справка',
			text: '',
			style: 'position:absolute;left:939px;top:519px;width:23px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокументы2010',
			text: 'Данные за 2010 год формируются в документе "Опись сведений АДВ-6-2"!',
			style: 'position:absolute;left:93px;top:32px;width:478px;height:21px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'НадписьПерейти',
			text: 'Перейти к списку документов',
			style: 'position:absolute;left:576px;top:32px;width:158px;height:21px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Исходные',
			style: 'position:absolute;left:807px;top:8px;width:155px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Назначение пенсии',
			style: 'position:absolute;left:807px;top:30px;width:155px;height:15px;',
		},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:81px;width:275px;height:24px;',
			dock: 'top',
			items:
			[
				'-',
				{
					text:'Удалить',
				},
				{
					text:'Принято ПФР',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Перенести',
				},
			]
		},
	]
});