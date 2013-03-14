Ext.define('Документы.КомплектацияНоменклатуры.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:652px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Комплектация номенклатуры',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:369px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:92px;top:369px;width:552px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:424px;top:33px;width:70px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:133px;width:636px;height:230px;',
			height: 230,width: 636,
			items:
			[
				{
					title:'Комплект',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номенклатура',
			style: 'position:absolute;left:102px;top:8px;width:205px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Количество',
			style: 'position:absolute;left:427px;top:8px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаИзмерения',
			style: 'position:absolute;left:427px;top:32px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Коэффициент',
			style: 'position:absolute;left:427px;top:56px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ХарактеристикаНоменклатуры',
			style: 'position:absolute;left:102px;top:32px;width:205px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерияНоменклатуры',
			style: 'position:absolute;left:102px;top:56px;width:205px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерГТД',
			style: 'position:absolute;left:102px;top:80px;width:205px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтранаПроисхождения',
			style: 'position:absolute;left:102px;top:104px;width:205px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособСписанияОстаткаТоваров',
			style: 'position:absolute;left:427px;top:153px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаКомплектаБУ',
			text: 'Счет учета (БУ):',
			style: 'position:absolute;left:328px;top:128px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаБУ',
			style: 'position:absolute;left:427px;top:127px;width:58px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаКомплектаНУ',
			text: 'Счет учета (НУ):',
			style: 'position:absolute;left:487px;top:127px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаНУ',
			style: 'position:absolute;left:571px;top:127px;width:58px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатусПартии',
			text: 'Статус партии:',
			style: 'position:absolute;left:328px;top:177px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатусПартии',
			style: 'position:absolute;left:427px;top:177px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСпецификация',
			text: 'Спецификация:',
			style: 'position:absolute;left:6px;top:128px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Спецификация',
			style: 'position:absolute;left:102px;top:128px;width:205px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаказВыпуска',
			text: 'Заказ (выпуск):',
			style: 'position:absolute;left:6px;top:152px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗаказВыпуска',
			style: 'position:absolute;left:102px;top:152px;width:205px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЦенаПередачи',
			text: 'Цена передачи:',
			style: 'position:absolute;left:328px;top:80px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЦенаПередачи',
			style: 'position:absolute;left:427px;top:80px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаПередачи',
			text: 'Сумма передачи:',
			style: 'position:absolute;left:328px;top:104px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаПередачи',
			style: 'position:absolute;left:427px;top:104px;width:92px;height:19px;',
		},
					]
				},
				{
					title:'Комплектующие',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:4px;top:24px;width:626px;height:179px;',
			height: 179,width: 626,
			columns:
			[
				{
					text:'№',
					width:'30',
				},
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Артикул',
					width:'120',
				},
				{
					text:'Комплектующая',
					width:'212',
				},
				{
					text:'Характеристика комплектующей',
					width:'171',
				},
				{
					text:'Серия комплектующей',
					width:'141',
				},
				{
					text:'Количество',
					width:'76',
				},
				{
					text:'Единица измерения',
					width:'56',
				},
				{
					text:'К.',
					width:'39',
				},
				{
					text:'Цена передачи',
					width:'82',
				},
				{
					text:'Сумма передачи',
					width:'92',
				},
				{
					text:'Статья затрат',
					width:'100',
				},
				{
					text:'Доля стоимости',
					width:'89',
				},
				{
					text:'Способ списания комплектующей',
					width:'100',
				},
				{
					text:'Номер ГТД',
					width:'109',
				},
				{
					text:'Страна происхождения',
					width:'136',
				},
				{
					text:'Счет учета комплектующей (БУ)',
					width:'100',
				},
				{
					text:'Счет учета комплектующей (НУ)',
					width:'100',
				},
				{
					text:'Статус партии',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:4px;top:0px;width:626px;height:24px;',
			items:
			[
				{
					text:'Поиск по штрихкоду',
				},
				'-',
				'-',
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНоменклатура',
			text: 'Номенклатура:',
			style: 'position:absolute;left:8px;top:8px;width:94px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'НДС',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКоличество',
			text: 'Количество:',
			style: 'position:absolute;left:328px;top:8px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьНДСвСтоимостиТоваров',
			text: 'НДС в стоимости:',
			style: 'position:absolute;left:6px;top:6px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НДСвСтоимостиТоваров',
			style: 'position:absolute;left:100px;top:6px;width:210px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:104px;width:304px;height:100px;',
			height: 100,width: 304,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Счет',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСчетСписанияНДС',
			text: 'Счет:',
			style: 'position:absolute;left:0px;top:0px;width:94px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетСписанияНДС',
			style: 'position:absolute;left:94px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДС1',
			text: 'Субконто 1:',
			style: 'position:absolute;left:0px;top:24px;width:94px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДС2',
			text: 'Субконто 2:',
			style: 'position:absolute;left:0px;top:48px;width:94px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДС3',
			text: 'Субконто 3:',
			style: 'position:absolute;left:0px;top:71px;width:94px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДС1',
			style: 'position:absolute;left:94px;top:24px;width:210px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДС2',
			style: 'position:absolute;left:94px;top:48px;width:210px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДС3',
			style: 'position:absolute;left:94px;top:71px;width:210px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетСписанияНДСНеТребуется',
			text: 'В соответствии с настройкой учетной политики по налоговому учету указание счета списания НДС в бухгалтерском учете не требуется - НДС включается в стоимость, а не списывается на затраты',
			style: 'position:absolute;left:0px;top:0px;width:304px;height:54px;',
		},
					]
				},
				{
					title:'Надпись',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:324px;top:104px;width:304px;height:100px;',
			height: 100,width: 304,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Счет',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСчетСписанияНДСНУ',
			text: 'Счет (НУ):',
			style: 'position:absolute;left:0px;top:0px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетСписанияНДСНУ',
			style: 'position:absolute;left:93px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДСНУ1',
			text: 'Субконто 1 (НУ):',
			style: 'position:absolute;left:0px;top:24px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДСНУ1',
			style: 'position:absolute;left:93px;top:24px;width:211px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДСНУ2',
			text: 'Субконто 2 (НУ):',
			style: 'position:absolute;left:0px;top:48px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДСНУ2',
			style: 'position:absolute;left:93px;top:48px;width:211px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоСписанияНДСНУ3',
			text: 'Субконто 3 (НУ):',
			style: 'position:absolute;left:0px;top:71px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоСписанияНДСНУ3',
			style: 'position:absolute;left:93px;top:71px;width:211px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетСписанияНДСНУНеТребуется',
			text: 'Указание счета списания НДС в налоговом учете не требуется - НДС включается в стоимость, а не списывается на затраты',
			style: 'position:absolute;left:0px;top:0px;width:304px;height:51px;',
		},
					]
				},
				{
					title:'Надпись',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяЗатратСписанияНДС',
			text: 'Статья затрат:',
			style: 'position:absolute;left:6px;top:79px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяЗатратСписанияНДС',
			style: 'position:absolute;left:100px;top:79px;width:210px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНоменклатурнаяГруппа',
			text: 'Ном. группа:',
			style: 'position:absolute;left:324px;top:79px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НоменклатурнаяГруппа',
			style: 'position:absolute;left:416px;top:79px;width:212px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизации',
			text: 'Подразделение организации:',
			style: 'position:absolute;left:6px;top:52px;width:94px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:100px;top:54px;width:210px;height:19px;',
		},
					]
				},
				{
					title:'Учет затрат',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:6px;top:6px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:95px;top:6px;width:215px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделениеОрганизации1',
			text: 'Подразделение организации:',
			style: 'position:absolute;left:324px;top:6px;width:94px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации1',
			style: 'position:absolute;left:418px;top:6px;width:210px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетЗатрат',
			text: 'Счет затрат (БУ):',
			style: 'position:absolute;left:324px;top:33px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетЗатрат',
			style: 'position:absolute;left:418px;top:33px;width:117px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетЗатратНУ',
			text: 'Счет затрат (НУ):',
			style: 'position:absolute;left:324px;top:57px;width:93px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетЗатратНУ',
			style: 'position:absolute;left:418px;top:57px;width:117px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНоменклатурнаяГруппа1',
			text: 'Ном. группа:',
			style: 'position:absolute;left:6px;top:33px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НоменклатурнаяГруппа1',
			style: 'position:absolute;left:95px;top:33px;width:215px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаказ',
			text: 'Заказ (затраты):',
			style: 'position:absolute;left:6px;top:81px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Заказ',
			style: 'position:absolute;left:95px;top:81px;width:215px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатьяЗатрат',
			text: 'Статья затрат:',
			style: 'position:absolute;left:6px;top:57px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяЗатрат',
			style: 'position:absolute;left:95px;top:57px;width:215px;height:19px;',
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьЕдиницаИзмерения',
			text: 'Ед. измерения:',
			style: 'position:absolute;left:328px;top:32px;width:94px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:6px;top:6px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:100px;top:6px;width:210px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение1',
			text: 'Подразделение:',
			style: 'position:absolute;left:6px;top:30px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение1',
			style: 'position:absolute;left:100px;top:30px;width:210px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСклад',
			text: 'Склад:',
			style: 'position:absolute;left:336px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СкладКомпании',
			style: 'position:absolute;left:424px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтраженияВУчете',
			text: 'Отразить в:',
			style: 'position:absolute;left:336px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:396px;width:652px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				'-',
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
			xtype: 'label',
			name: 'НадписьЗаказПокупателя',
			text: 'Заказ (резерв):',
			style: 'position:absolute;left:8px;top:105px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗаказРезерв',
			style: 'position:absolute;left:96px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:498px;top:33px;width:71px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'нал. учете',
			style: 'position:absolute;left:573px;top:33px;width:71px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидКомплектации',
			text: 'Вид выпуска:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидКомплектации',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:',
			style: 'position:absolute;left:336px;top:81px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:424px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоговор',
			text: 'Договор:',
			style: 'position:absolute;left:336px;top:105px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:424px;top:105px;width:220px;height:19px;',
		},
	]
});