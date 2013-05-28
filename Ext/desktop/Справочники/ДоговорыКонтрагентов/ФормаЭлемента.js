Ext.define('Справочники.ДоговорыКонтрагентов.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:511px;height:579px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Договор контрагента',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 284,
			height: 19,
			style: 'position:absolute;left:106px;top:105px;width:284px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:511px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'Файлы',
				},
					]
				},
				'-',
				{
					text:'Файлы',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 80,
			height: 19,
			style: 'position:absolute;left:423px;top:105px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование :',
			style: 'position:absolute;left:8px;top:105px;width:96px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:393px;top:105px;width:30px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:526px;width:96px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 397,
			height: 19,
			style: 'position:absolute;left:106px;top:526px;width:397px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Группа договоров:',
			style: 'position:absolute;left:8px;top:81px;width:96px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Родитель',
			width: 397,
			height: 19,
			style: 'position:absolute;left:106px;top:81px;width:397px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:554px;width:511px;height:25px;',
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
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:175px;width:495px;height:346px;',
			height: 346,width: 495,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьВалютаВзаиморасчетов',
			text: 'Валюта :',
			style: 'position:absolute;left:341px;top:25px;width:62px;height:19px;text-align:center;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ВалютаВзаиморасчетов',
			width: 80,
			height: 19,
			style: 'position:absolute;left:405px;top:25px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроцентПредоплаты',
			text: 'Размер предоплаты по заказу покупателя, процентов, не менее:',
			style: 'position:absolute;left:14px;top:185px;width:356px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентПредоплаты',
			style: 'position:absolute;left:405px;top:185px;width:80px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ДопустимоеЧислоДнейЗадолженности',
			style: 'position:absolute;left:405px;top:210px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:14px;top:210px;width:370px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Рамка',
			style: 'position:absolute;left:6px;top:6px;width:479px;height:16px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ДопустимаяСуммаЗадолженности',
			style: 'position:absolute;left:405px;top:161px;width:80px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Рамка',
			style: 'position:absolute;left:6px;top:141px;width:479px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидВзаиморасчетов',
			text: 'Вид взаиморасчетов:',
			style: 'position:absolute;left:14px;top:88px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ВидВзаиморасчетов',
			width: 335,
			height: 19,
			style: 'position:absolute;left:150px;top:88px;width:335px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контролировать сумму задолженности,  сумма (руб.), не более:',
			style: 'position:absolute;left:14px;top:161px;width:352px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВедениеВзаиморасчетов',
			text: 'Взаиморасчеты ведутся:',
			style: 'position:absolute;left:14px;top:25px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Расчеты в условных единицах',
			style: 'position:absolute;left:14px;top:68px;width:178px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'По документам расчетов с контрагентами',
			style: 'position:absolute;left:14px;top:47px;width:271px;height:15px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:151px;top:25px;width:170px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Реализация на экспорт',
			style: 'position:absolute;left:197px;top:68px;width:178px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Установлен срок оплаты для резервов по сомнительным долгам, дней:',
			style: 'position:absolute;left:14px;top:112px;width:389px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СрокОплатыДляРезервовПоСомнительнымДолгам',
			style: 'position:absolute;left:405px;top:112px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Учет товаров',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:14px;top:27px;width:370px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ЧислоДнейРезерваБезОплаты',
			style: 'position:absolute;left:407px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:14px;top:76px;width:370px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Рамка',
			style: 'position:absolute;left:8px;top:55px;width:479px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Рамка',
			style: 'position:absolute;left:8px;top:6px;width:479px;height:16px;',
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьТипЦенПокупки',
			text: 'Тип цен :',
			style: 'position:absolute;left:12px;top:26px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ТипЦенПокупки',
			width: 363,
			height: 19,
			style: 'position:absolute;left:122px;top:26px;width:363px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроцентКомиссионногоВознаграждения',
			text: 'Процент:',
			style: 'position:absolute;left:371px;top:98px;width:52px;height:19px;text-align:center;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентКомиссионногоВознаграждения',
			style: 'position:absolute;left:425px;top:98px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСпособРасчетаКомиссионногоВознаграждения',
			text: 'Способ расчета:',
			style: 'position:absolute;left:12px;top:98px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'СпособРасчетаКомиссионногоВознаграждения',
			width: 228,
			height: 19,
			style: 'position:absolute;left:122px;top:98px;width:228px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Рамка',
			style: 'position:absolute;left:6px;top:78px;width:479px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Рамка',
			style: 'position:absolute;left:6px;top:6px;width:479px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Контролировать денежные средства комитента',
			style: 'position:absolute;left:12px;top:128px;width:441px;height:15px;',
		},
		{
			xtype: 'fieldset',
			title: 'Рамка',
			style: 'position:absolute;left:6px;top:280px;width:479px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОсновнойПроект',
			width: 342,
			height: 19,
			style: 'position:absolute;left:143px;top:301px;width:342px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПроект',
			text: 'Основной проект:',
			style: 'position:absolute;left:12px;top:301px;width:108px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОсновнаяСтатьяДвиженияДенежныхСредств',
			text: 'Основная статья:',
			style: 'position:absolute;left:12px;top:50px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ОсновнаяСтатьяДвиженияДенежныхСредств',
			width: 363,
			height: 19,
			style: 'position:absolute;left:122px;top:50px;width:363px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:149px;width:485px;height:127px;',
			height: 127,width: 485,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'НДС с авансов',
					items:
					[
		{
			xtype: 'label',
			name: 'ТекстВидАгентскогоДоговора',
			text: 'Вид агентского договора:',
			style: 'position:absolute;left:7px;top:41px;width:136px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Рамка',
			style: 'position:absolute;left:6px;top:0px;width:479px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеДляСчетаФактурыНаАванс',
			text: 'Обобщенное наименование товаров для счета-фактуры на аванс:',
			style: 'position:absolute;left:7px;top:89px;width:478px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'НаименованиеДляСчетаФактурыНаАванс',
			width: 478,
			height: 19,
			style: 'position:absolute;left:7px;top:108px;width:478px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:7px;top:41px;width:478px;height:43px;',
			height: 43,width: 478,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Не регистрировать',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПорядокРегистрацииСчетовФактурНаАвансПоДоговору',
			text: 'Порядок регистрации счетов-фактур на аванс по договору:',
			style: 'position:absolute;left:0px;top:0px;width:478px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ПорядокРегистрацииСчетовФактурНаАвансПоДоговору',
			width: 478,
			height: 19,
			style: 'position:absolute;left:0px;top:24px;width:478px;height:19px;',
		},
					]
				},
				{
					title:'Информация',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Для указания особого порядка регистрации счетов-фактур на аванс по договору снимите установленный флажок.',
			style: 'position:absolute;left:0px;top:0px;width:478px;height:43px;',
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Регистрировать счета-фактуры на аванс в порядке, соответствующем учетной политике',
			style: 'position:absolute;left:7px;top:20px;width:478px;height:16px;',
		},
					]
				},
				{
					title:'НДС налоговый агент',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Организация выступает в качестве налогового агента по уплате НДС',
			style: 'position:absolute;left:7px;top:21px;width:478px;height:15px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВидАгентскогоДоговора',
			width: 339,
			height: 19,
			style: 'position:absolute;left:146px;top:41px;width:339px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Рамка',
			style: 'position:absolute;left:7px;top:0px;width:478px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеДляСчетаФактурыНаАванс1',
			text: 'Обобщенное наименование товаров для счета-фактуры на аванс:',
			style: 'position:absolute;left:7px;top:65px;width:478px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'НаименованиеДляСчетаФактурыНаАванс1',
			width: 478,
			height: 19,
			style: 'position:absolute;left:7px;top:84px;width:478px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НалоговыйАгентПоОплате',
			width: 225,
			height: 19,
			style: 'position:absolute;left:260px;top:108px;width:225px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНалоговыйАгентПоОплате',
			text: 'НДС в качестве налогового агента начисляется:',
			style: 'position:absolute;left:7px;top:108px;width:251px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Условия договора',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:54px;width:481px;height:256px;',
			height: 256,width: 481,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Дата',
					width:'132',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'№',
					width:'80',
					dataIndex:'Номер',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'80',
					dataIndex:'ДатаНачала',
					flex:1,
				},
				{
					text:'Периодичность',
					width:'80',
					dataIndex:'Периодичность',
					flex:1,
				},
				{
					text:'Сумма условий договора',
					width:'80',
					dataIndex:'СуммаУсловийДоговора',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДоговорыКонтрагентов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Дата',
					},
					{
						name:'Номер',
					},
					{
						name:'ДатаНачала',
					},
					{
						name:'Периодичность',
					},
					{
						name:'СуммаУсловийДоговора',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьВидУсловийДоговора',
			text: 'Условия договора:',
			style: 'position:absolute;left:6px;top:6px;width:132px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ВидУсловийДоговора',
			width: 345,
			height: 19,
			style: 'position:absolute;left:142px;top:6px;width:345px;height:19px;',
		},
					]
				},
				{
					title:'Скидки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:481px;height:222px;',
			height: 222,width: 481,
			columns:
			[
				{
					text:'Получатель скидки',
					width:'100',
					dataIndex:'ПолучательСкидки',
					flex:1,
				},
				{
					text:'Номенклатура',
					width:'100',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика',
					width:'100',
					dataIndex:'Характеристика',
					flex:1,
				},
				{
					text:'Качество',
					width:'100',
					dataIndex:'Качество',
					flex:1,
				},
				{
					text:'Условие',
					width:'253',
					dataIndex:'Условие',
					flex:1,
				},
				{
					text:'Значение условия',
					width:'253',
					dataIndex:'ЗначениеУсловия',
					flex:1,
				},
				{
					text:'Процент',
					width:'48',
					dataIndex:'Процент',
					flex:1,
				},
				{
					text:'Валюта',
					width:'50',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'День недели',
					width:'88',
					dataIndex:'ДеньНедели',
					flex:1,
				},
				{
					text:'Время начала',
					width:'97',
					dataIndex:'ВремяНачала',
					flex:1,
				},
				{
					text:'Время окончания',
					width:'97',
					dataIndex:'ВремяОкончания',
					flex:1,
				},
				{
					text:'Начало',
					width:'103',
					dataIndex:'Начало',
					flex:1,
				},
				{
					text:'Окончание',
					width:'103',
					dataIndex:'Окончание',
					flex:1,
				},
				{
					text:'Установка скидок',
					width:'276',
					dataIndex:'УстановкаСкидокНоменклатуры',
					flex:1,
				},
				{
					text:'Отмена скидок',
					width:'276',
					dataIndex:'ОтменаСкидок',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДоговорыКонтрагентов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ПолучательСкидки',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'Характеристика',
					},
					{
						name:'Качество',
					},
					{
						name:'Условие',
					},
					{
						name:'ЗначениеУсловия',
					},
					{
						name:'Процент',
					},
					{
						name:'Валюта',
					},
					{
						name:'ДеньНедели',
					},
					{
						name:'ВремяНачала',
					},
					{
						name:'ВремяОкончания',
					},
					{
						name:'Начало',
					},
					{
						name:'Окончание',
					},
					{
						name:'УстановкаСкидокНоменклатуры',
					},
					{
						name:'ОтменаСкидок',
					},
				]
			},
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачалаПериода',
			width: 88,
			height: 19,
			style: 'position:absolute;left:101px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНачалоПериода',
			text: 'Начало периода:',
			style: 'position:absolute;left:6px;top:6px;width:90px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончанияПериода',
			width: 88,
			height: 19,
			style: 'position:absolute;left:306px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОкончаниеПериода',
			text: 'Окончание периода:',
			style: 'position:absolute;left:196px;top:6px;width:106px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПоказать',
			text: 'Показать',
			style: 'position:absolute;left:399px;top:6px;width:88px;height:19px;',
		},
					]
				},
				{
					title:'Свойства',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:481px;height:222px;',
			height: 222,width: 481,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'ПометкаУдаления',
					flex:1,
				},
				{
					text:'Свойство',
					width:'186',
					dataIndex:'Свойство',
					flex:1,
				},
				{
					text:'Значение',
					width:'302',
					dataIndex:'Значение',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДоговорыКонтрагентов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ПометкаУдаления',
					},
					{
						name:'Свойство',
					},
					{
						name:'Значение',
					},
				]
			},
		},
					]
				},
				{
					title:'Категории',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:481px;height:222px;',
			height: 222,width: 481,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'ПометкаУдаления',
					flex:1,
				},
				{
					text:'',
					width:'32',
					dataIndex:'Принадлежность',
					flex:1,
				},
				{
					text:'Категория',
					width:'465',
					dataIndex:'Категория',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДоговорыКонтрагентов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ПометкаУдаления',
					},
					{
						name:'Принадлежность',
					},
					{
						name:'Категория',
					},
				]
			},
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьВидДоговора',
			text: 'Вид договора:',
			style: 'position:absolute;left:8px;top:129px;width:96px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВладелец',
			text: 'Контрагент:',
			style: 'position:absolute;left:8px;top:57px;width:96px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Владелец',
			width: 397,
			height: 19,
			style: 'position:absolute;left:106px;top:57px;width:397px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:106px;top:129px;width:397px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:96px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация',
			width: 397,
			height: 19,
			style: 'position:absolute;left:106px;top:33px;width:397px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 92,
			height: 19,
			style: 'position:absolute;left:106px;top:153px;width:92px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 80,
			height: 19,
			style: 'position:absolute;left:229px;top:153px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:208px;top:153px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:153px;width:40px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСрокДействия',
			text: 'Срок действия:',
			style: 'position:absolute;left:338px;top:153px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'СрокДействия',
			width: 80,
			height: 19,
			style: 'position:absolute;left:423px;top:153px;width:80px;height:19px;',
		},
	],
	dockedItems:
	[
	]
});