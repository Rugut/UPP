Ext.define('Обработки.КонструкторСпецификаций.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Конструктор спецификаций',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:408px;',
			height: 408,width: 764,
			items:
			[
				{
					title:'Конструктор спецификации',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:374px;height:336px;',
			height: 336,width: 374,
			columns:
			[
				{
					text:'Вид норматива',
					width:'42',
					dataIndex:'ВидСтроки',
					flex:1,
				},
				{
					text:'Наименование',
					width:'175',
					dataIndex:'Номенклатура',
					flex:1,
				},
				{
					text:'Характеристика',
					width:'129',
					dataIndex:'ХарактеристикаНоменклатуры',
					flex:1,
				},
				{
					text:'Вид номенклатуры',
					width:'100',
					dataIndex:'ВидНоменклатуры',
					flex:1,
				},
				{
					text:'Количество',
					width:'66',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Единица',
					width:'47',
					dataIndex:'ЕдиницаИзмерения',
					flex:1,
				},
				{
					text:'Статья затрат',
					width:'100',
					dataIndex:'СтатьяЗатрат',
					flex:1,
				},
				{
					text:'Вид воспроизводства',
					width:'100',
					dataIndex:'ВидВоспроизводства',
					flex:1,
				},
				{
					text:'Спецификация',
					width:'125',
					dataIndex:'ОсновнаяСпецификация',
					flex:1,
				},
				{
					text:'Формула',
					width:'68',
					dataIndex:'Формула',
					flex:1,
				},
				{
					text:'Указание норматива',
					width:'111',
					dataIndex:'УказаниеНорматива',
					flex:1,
				},
				{
					text:'Списание комплектующей',
					width:'138',
					dataIndex:'СписаниеКомплектующей',
					flex:1,
				},
				{
					text:'Свойства',
					width:'80',
					dataIndex:'СвойствоДляСписания',
					flex:1,
				},
				{
					text:'Номер строки спецификации',
					width:'64',
					dataIndex:'НомерСтрокиСпецификации',
					flex:1,
				},
				{
					text:'Исх. спецификация',
					width:'84',
					dataIndex:'Спецификация',
					flex:1,
				},
				{
					text:'Вид норматива',
					width:'71',
					dataIndex:'ВидНорматива',
					flex:1,
				},
				{
					text:'Есть спецификации',
					width:'76',
					dataIndex:'ЕстьСпецификации',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонструкторСпецификаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ВидСтроки',
					},
					{
						name:'Номенклатура',
					},
					{
						name:'ХарактеристикаНоменклатуры',
					},
					{
						name:'ВидНоменклатуры',
					},
					{
						name:'Количество',
					},
					{
						name:'ЕдиницаИзмерения',
					},
					{
						name:'СтатьяЗатрат',
					},
					{
						name:'ВидВоспроизводства',
					},
					{
						name:'ОсновнаяСпецификация',
					},
					{
						name:'Формула',
					},
					{
						name:'УказаниеНорматива',
					},
					{
						name:'СписаниеКомплектующей',
					},
					{
						name:'СвойствоДляСписания',
					},
					{
						name:'НомерСтрокиСпецификации',
					},
					{
						name:'Спецификация',
					},
					{
						name:'ВидНорматива',
					},
					{
						name:'ЕстьСпецификации',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Дерево спецификаций',
			style: 'position:absolute;left:6px;top:6px;width:374px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Номенклатура',
			style: 'position:absolute;left:386px;top:6px;width:370px;height:16px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:386px;top:207px;width:370px;height:175px;',
			height: 175,width: 370,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Спецификации и характеристики',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:98px;width:370px;height:77px;',
			height: 77,width: 370,
			columns:
			[
				{
					text:'',
					width:'39',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'72',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Версия',
					width:'40',
					dataIndex:'КодВерсии',
					flex:1,
				},
				{
					text:'Наименование',
					width:'157',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Активная',
					width:'20',
					dataIndex:'Активная',
					flex:1,
				},
				{
					text:'Вид',
					width:'70',
					dataIndex:'ВидСпецификации',
					flex:1,
				},
				{
					text:'Состояние',
					width:'76',
					dataIndex:'Состояние',
					flex:1,
				},
				{
					text:'Дата утверждения',
					width:'84',
					dataIndex:'ДатаУтверждения',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'100',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонструкторСпецификаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'КодВерсии',
					},
					{
						name:'Наименование',
					},
					{
						name:'Активная',
					},
					{
						name:'ВидСпецификации',
					},
					{
						name:'Состояние',
					},
					{
						name:'ДатаУтверждения',
					},
					{
						name:'Комментарий',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:370px;height:66px;',
			height: 66,width: 370,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Характеристика',
					width:'350',
					dataIndex:'Наименование',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонструкторСпецификаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Наименование',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:72px;width:369px;height:26px;',
			items:
			[
				{
					text:'Установить основную спецификацию на выбранную дату',
				},
				{
					text:'Установить основную спецификацию на рабочую дату',
				},
			]
		},
					]
				},
				{
					title:'Спецификации',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:370px;height:151px;',
			height: 151,width: 370,
			columns:
			[
				{
					text:'',
					width:'39',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'72',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Версия',
					width:'40',
					dataIndex:'КодВерсии',
					flex:1,
				},
				{
					text:'Наименование',
					width:'172',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Активная',
					width:'20',
					dataIndex:'Активная',
					flex:1,
				},
				{
					text:'Вид',
					width:'70',
					dataIndex:'ВидСпецификации',
					flex:1,
				},
				{
					text:'Состояние',
					width:'96',
					dataIndex:'Состояние',
					flex:1,
				},
				{
					text:'Дата утверждения',
					width:'130',
					dataIndex:'ДатаУтверждения',
					flex:1,
				},
				{
					text:'Комментарий',
					width:'100',
					dataIndex:'Комментарий',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонструкторСпецификаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'КодВерсии',
					},
					{
						name:'Наименование',
					},
					{
						name:'Активная',
					},
					{
						name:'ВидСпецификации',
					},
					{
						name:'Состояние',
					},
					{
						name:'ДатаУтверждения',
					},
					{
						name:'Комментарий',
					},
				]
			},
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:386px;top:22px;width:370px;height:179px;',
			height: 179,width: 370,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Дерево номенклатуры',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:107px;width:370px;height:72px;',
			height: 72,width: 370,
			columns:
			[
				{
					text:'',
					width:'39',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'70',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Полное наименование',
					width:'100',
					dataIndex:'НаименованиеПолное',
					flex:1,
				},
				{
					text:'Артикул ',
					width:'90',
					dataIndex:'Артикул',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонструкторСпецификаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
					{
						name:'НаименованиеПолное',
					},
					{
						name:'Артикул',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:370px;height:77px;',
			height: 77,width: 370,
			columns:
			[
				{
					text:'Наименование',
					width:'217',
					dataIndex:'Картинка',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонструкторСпецификаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
				]
			},
		},
					]
				},
				{
					title:'Номенклатура',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:25px;width:370px;height:154px;',
			height: 154,width: 370,
			columns:
			[
				{
					text:'',
					width:'39',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'72',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Наименование',
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Полное наименование',
					width:'100',
					dataIndex:'НаименованиеПолное',
					flex:1,
				},
				{
					text:'Артикул ',
					width:'90',
					dataIndex:'Артикул',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонструкторСпецификаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
					{
						name:'НаименованиеПолное',
					},
					{
						name:'Артикул',
					},
				]
			},
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Настройка',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Выводить спецификации на дату:',
			style: 'position:absolute;left:6px;top:6px;width:177px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:190px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Разворачивать дерево спецификаций',
			style: 'position:absolute;left:384px;top:51px;width:372px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'В списках чередовать цвета строк',
			style: 'position:absolute;left:6px;top:74px;width:378px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить возвратные отходы',
			style: 'position:absolute;left:384px;top:95px;width:372px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Редактировать в диалоге',
			style: 'position:absolute;left:6px;top:51px;width:378px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Запрашивать подтверждение при установке основной спецификации',
			style: 'position:absolute;left:6px;top:279px;width:378px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Настройка дерева спецификаций',
			style: 'position:absolute;left:6px;top:30px;width:750px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'При изменении спецификации',
			style: 'position:absolute;left:6px;top:238px;width:750px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить выходные изделия',
			style: 'position:absolute;left:384px;top:73px;width:372px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'При вводе новой строки',
			style: 'position:absolute;left:6px;top:168px;width:378px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВыводитьДляНоменклатуры',
			text: 'Выводить в доп. информацию для номенклатуры:',
			style: 'position:absolute;left:6px;top:120px;width:258px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ВыводитьДляНоменклатуры',
			width: 110,
			height: 19,
			style: 'position:absolute;left:274px;top:120px;width:110px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Показывать дерево номенклатуры',
			style: 'position:absolute;left:6px;top:96px;width:378px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Конечная продукция:',
			style: 'position:absolute;left:6px;top:303px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: true,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'КонечнаяПродукция',
			width: 255,
			height: 19,
			style: 'position:absolute;left:129px;top:303px;width:255px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Конечная характеристика продукции:',
			style: 'position:absolute;left:6px;top:327px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: true,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'КонечнаяХарактеристикаПродукции',
			width: 255,
			height: 19,
			style: 'position:absolute;left:129px;top:327px;width:255px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоУровней',
			text: 'Количество уровней разворота дерева:',
			style: 'position:absolute;left:6px;top:144px;width:258px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоУровней',
			style: 'position:absolute;left:274px;top:144px;width:110px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Устанавливать спецификацию как основную',
			style: 'position:absolute;left:6px;top:257px;width:378px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Формировать отчеты по дереву спецификаций',
			style: 'position:absolute;left:384px;top:168px;width:372px;height:16px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Добавлять новую строку спецификации',
			style: 'position:absolute;left:6px;top:192px;width:378px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Выводить меню',
			style: 'position:absolute;left:6px;top:212px;width:378px;height:15px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'На количество выходных изделий по спецификации',
			style: 'position:absolute;left:384px;top:192px;width:372px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'На единицу выходного изделия',
			style: 'position:absolute;left:384px;top:212px;width:372px;height:15px;',
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
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
	]
});