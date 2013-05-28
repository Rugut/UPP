Ext.define('Документы.МодернизацияОС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:655px;height:500px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Модернизация ОС',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:16px;height:19px;text-align:center;',
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
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:341px;top:448px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Ответственный',
			width: 220,
			height: 19,
			style: 'position:absolute;left:427px;top:448px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:448px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 220,
			height: 19,
			style: 'position:absolute;left:94px;top:448px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;text-align:left;',
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
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСобытие',
			text: 'Событие:',
			style: 'position:absolute;left:334px;top:57px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Событие',
			width: 226,
			height: 19,
			style: 'position:absolute;left:421px;top:57px;width:226px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'упр. учете',
			style: 'position:absolute;left:421px;top:33px;width:69px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'бух. учете',
			style: 'position:absolute;left:494px;top:33px;width:68px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:655px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
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
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Дт/кт',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:475px;width:655px;height:25px;',
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
		{
			xtype: 'label',
			name: 'НадписьОтражать',
			text: 'Отражать:',
			style: 'position:absolute;left:334px;top:33px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'налог. учете',
			style: 'position:absolute;left:567px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'ВидОперацийСОсновнымиСредствами',
			width: 220,
			height: 19,
			style: 'position:absolute;left:94px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидРабот',
			text: 'Вид работ:',
			style: 'position:absolute;left:8px;top:81px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСобытиеРегл',
			text: 'Событие (регл.):',
			style: 'position:absolute;left:334px;top:81px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СобытиеРегл',
			width: 226,
			height: 19,
			style: 'position:absolute;left:421px;top:81px;width:226px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:151px;width:639px;height:267px;',
			height: 267,width: 639,
			items:
			[
				{
					title:'Основные средства',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:625px;height:217px;',
			height: 217,width: 625,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Основное средство',
					width:'120',
					dataIndex:'ОсновноеСредство',
					flex:1,
				},
				{
					text:'Инв. №',
					width:'120',
					dataIndex:'ИнвентарныйНомер',
					flex:1,
				},
				{
					text:'Новый срок использ. (УУ)',
					width:'140',
					dataIndex:'СрокПолезногоИспользованияУУ',
					flex:1,
				},
				{
					text:'Факт. срок использ. (УУ)',
					width:'140',
					dataIndex:'ФактСрокИспользованияУУ',
					flex:1,
				},
				{
					text:'Ост. срок использ. (УУ)',
					width:'140',
					dataIndex:'ОстСрокИспользованияУУ',
					flex:1,
				},
				{
					text:'Новый объем работ (УУ)',
					width:'140',
					dataIndex:'ОбъемПродукцииРаботУУ',
					flex:1,
				},
				{
					text:'Факт. объем работ (УУ)',
					width:'140',
					dataIndex:'ФактОбъемПродукцииРаботУУ',
					flex:1,
				},
				{
					text:'Ост. объем работ (УУ)',
					width:'140',
					dataIndex:'ОстОбъемПродукцииРаботУУ',
					flex:1,
				},
				{
					text:'Стоимость (УУ)',
					width:'120',
					dataIndex:'СтоимостьУУ',
					flex:1,
				},
				{
					text:'Сумма модерн. (УУ)',
					width:'120',
					dataIndex:'СуммаМодернизацииУУ',
					flex:1,
				},
				{
					text:'Факт. аморт. (УУ)',
					width:'120',
					dataIndex:'АмортизацияУУ',
					flex:1,
				},
				{
					text:'Аморт. за месяц (УУ)',
					width:'120',
					dataIndex:'АмортизацияЗаМесяцУУ',
					flex:1,
				},
				{
					text:'Ост. стоимость (УУ)',
					width:'120',
					dataIndex:'ОстСтоимостьУУ',
					flex:1,
				},
				{
					text:'% год. аморт. (УУ)',
					width:'80',
					dataIndex:'КоэффициентАмортизацииУУ',
					flex:1,
				},
				{
					text:'Коэф. ускорения (УУ)',
					width:'80',
					dataIndex:'КоэффициентУскоренияУУ',
					flex:1,
				},
				{
					text:'Новый срок использ. (БУ)',
					width:'140',
					dataIndex:'СрокПолезногоИспользованияБУ',
					flex:1,
				},
				{
					text:'Факт. срок использ. (БУ)',
					width:'140',
					dataIndex:'ФактСрокИспользованияБУ',
					flex:1,
				},
				{
					text:'Ост. срок использ. (БУ)',
					width:'140',
					dataIndex:'ОстСрокИспользованияБУ',
					flex:1,
				},
				{
					text:'Новый объем работ (БУ)',
					width:'140',
					dataIndex:'ОбъемПродукцииРаботБУ',
					flex:1,
				},
				{
					text:'Факт. объем работ (БУ)',
					width:'140',
					dataIndex:'ФактОбъемПродукцииРаботБУ',
					flex:1,
				},
				{
					text:'Ост. объем работ (БУ)',
					width:'140',
					dataIndex:'ОстОбъемПродукцииРаботБУ',
					flex:1,
				},
				{
					text:'Стоимость (БУ)',
					width:'140',
					dataIndex:'СтоимостьБУ',
					flex:1,
				},
				{
					text:'Сумма модерн. (БУ)',
					width:'140',
					dataIndex:'СуммаМодернизацииБУ',
					flex:1,
				},
				{
					text:'в т.ч. хоз. способом (БУ)',
					width:'140',
					dataIndex:'СуммаМодернизацииБУХоз',
					flex:1,
				},
				{
					text:'Факт. аморт. (БУ)',
					width:'120',
					dataIndex:'АмортизацияБУ',
					flex:1,
				},
				{
					text:'Аморт. за месяц (БУ)',
					width:'120',
					dataIndex:'АмортизацияЗаМесяцБУ',
					flex:1,
				},
				{
					text:'Ост. стоимость (БУ)',
					width:'120',
					dataIndex:'ОстСтоимостьБУ',
					flex:1,
				},
				{
					text:'% год. аморт. (БУ)',
					width:'80',
					dataIndex:'КоэффициентАмортизацииБУ',
					flex:1,
				},
				{
					text:'Коэф. ускорения (БУ)',
					width:'80',
					dataIndex:'КоэффициентУскоренияБУ',
					flex:1,
				},
				{
					text:'Новый срок использ. (НУ)',
					width:'120',
					dataIndex:'СрокПолезногоИспользованияНУ',
					flex:1,
				},
				{
					text:'Стоимость (НУ)',
					width:'140',
					dataIndex:'СтоимостьНУ',
					flex:1,
				},
				{
					text:'Сумма модерн. (НУ)',
					width:'140',
					dataIndex:'СуммаМодернизацииНУ',
					flex:1,
				},
				{
					text:'в т.ч. хоз. способом (НУ)',
					width:'140',
					dataIndex:'СуммаМодернизацииНУХоз',
					flex:1,
				},
				{
					text:'Общая сумма (НУ)',
					width:'120',
					dataIndex:'ОбщаяСуммаНУ',
					flex:1,
				},
				{
					text:'Сумма амортизационной премии (НУ)',
					width:'120',
					dataIndex:'СуммаКапитальныхВложенийВключаемыхВРасходыНУ',
					flex:1,
				},
				{
					text:'Сумма модерн. (ВР)',
					width:'100',
					dataIndex:'СуммаМодернизацииВР',
					flex:1,
				},
				{
					text:'в т.ч. хоз. способом (ВР)',
					width:'100',
					dataIndex:'СуммаМодернизацииВРХоз',
					flex:1,
				},
				{
					text:'Сумма модерн. (ПР)',
					width:'100',
					dataIndex:'СуммаМодернизацииПР',
					flex:1,
				},
				{
					text:'в т.ч. хоз. способом (ПР)',
					width:'100',
					dataIndex:'СуммаМодернизацииПРХоз',
					flex:1,
				},
				{
					text:'Сумма модернизации (УСН)',
					width:'100',
					dataIndex:'СуммаМодернизацииУСН',
					flex:1,
				},
				{
					text:'Стоимость (ПР)',
					width:'100',
					dataIndex:'СтоимостьПР',
					flex:1,
				},
				{
					text:'Факт. аморт. (ПР)',
					width:'100',
					dataIndex:'АмортизацияПР',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МодернизацияОС/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ОсновноеСредство',
					},
					{
						name:'ИнвентарныйНомер',
					},
					{
						name:'СрокПолезногоИспользованияУУ',
					},
					{
						name:'ФактСрокИспользованияУУ',
					},
					{
						name:'ОстСрокИспользованияУУ',
					},
					{
						name:'ОбъемПродукцииРаботУУ',
					},
					{
						name:'ФактОбъемПродукцииРаботУУ',
					},
					{
						name:'ОстОбъемПродукцииРаботУУ',
					},
					{
						name:'СтоимостьУУ',
					},
					{
						name:'СуммаМодернизацииУУ',
					},
					{
						name:'АмортизацияУУ',
					},
					{
						name:'АмортизацияЗаМесяцУУ',
					},
					{
						name:'ОстСтоимостьУУ',
					},
					{
						name:'КоэффициентАмортизацииУУ',
					},
					{
						name:'КоэффициентУскоренияУУ',
					},
					{
						name:'СрокПолезногоИспользованияБУ',
					},
					{
						name:'ФактСрокИспользованияБУ',
					},
					{
						name:'ОстСрокИспользованияБУ',
					},
					{
						name:'ОбъемПродукцииРаботБУ',
					},
					{
						name:'ФактОбъемПродукцииРаботБУ',
					},
					{
						name:'ОстОбъемПродукцииРаботБУ',
					},
					{
						name:'СтоимостьБУ',
					},
					{
						name:'СуммаМодернизацииБУ',
					},
					{
						name:'СуммаМодернизацииБУХоз',
					},
					{
						name:'АмортизацияБУ',
					},
					{
						name:'АмортизацияЗаМесяцБУ',
					},
					{
						name:'ОстСтоимостьБУ',
					},
					{
						name:'КоэффициентАмортизацииБУ',
					},
					{
						name:'КоэффициентУскоренияБУ',
					},
					{
						name:'СрокПолезногоИспользованияНУ',
					},
					{
						name:'СтоимостьНУ',
					},
					{
						name:'СуммаМодернизацииНУ',
					},
					{
						name:'СуммаМодернизацииНУХоз',
					},
					{
						name:'ОбщаяСуммаНУ',
					},
					{
						name:'СуммаКапитальныхВложенийВключаемыхВРасходыНУ',
					},
					{
						name:'СуммаМодернизацииВР',
					},
					{
						name:'СуммаМодернизацииВРХоз',
					},
					{
						name:'СуммаМодернизацииПР',
					},
					{
						name:'СуммаМодернизацииПРХоз',
					},
					{
						name:'СуммаМодернизацииУСН',
					},
					{
						name:'СтоимостьПР',
					},
					{
						name:'АмортизацияПР',
					},
				]
			},
		},
					]
				},
				{
					title:'Вложения во внеоборотные активы',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОбъектСтроительства',
			text: 'Объект:',
			style: 'position:absolute;left:6px;top:6px;width:74px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ОбъектСтроительства',
			width: 220,
			height: 19,
			style: 'position:absolute;left:85px;top:6px;width:220px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'РассчитатьСтоимость',
			text: 'Рассчитать суммы',
			style: 'position:absolute;left:310px;top:6px;width:106px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:25px;width:625px;height:25px;',
			height: 25,width: 625,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСумма',
			text: 'Сумма (УУ):',
			style: 'position:absolute;left:0px;top:6px;width:74px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'Стоимость',
			style: 'position:absolute;left:79px;top:6px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'УпрВалюта',
			text: 'УпрВалюта',
			style: 'position:absolute;left:204px;top:6px;width:60px;height:19px;text-align:center;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:50px;width:625px;height:72px;',
			height: 72,width: 625,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаБУВнеоборотногоАктива',
			text: 'Счет (БУ):',
			style: 'position:absolute;left:6px;top:29px;width:68px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СчетУчетаБУВнеоборотногоАктива',
			width: 80,
			height: 19,
			style: 'position:absolute;left:79px;top:29px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаБУ',
			text: 'Сумма (БУ):',
			style: 'position:absolute;left:6px;top:53px;width:68px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтоимостьБУ',
			style: 'position:absolute;left:79px;top:53px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'РеглВалюта1',
			text: 'РеглВалюта',
			style: 'position:absolute;left:204px;top:53px;width:60px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтоимостьБУХоз',
			text: 'в т.ч. хоз. способом (БУ):',
			style: 'position:absolute;left:269px;top:53px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтоимостьБУХоз',
			style: 'position:absolute;left:404px;top:53px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'РеглВалюта2',
			text: 'РеглВалюта',
			style: 'position:absolute;left:529px;top:53px;width:60px;height:19px;text-align:center;',
		},
		{
			xtype: 'fieldset',
			title: 'Бухгалтерский учет',
			style: 'position:absolute;left:0px;top:8px;width:625px;height:16px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:122px;width:625px;height:119px;',
			height: 119,width: 625,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'НУ',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаНУВнеоборотногоАктива',
			text: 'Счет (НУ):',
			style: 'position:absolute;left:7px;top:28px;width:68px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СчетУчетаНУВнеоборотногоАктива',
			width: 80,
			height: 19,
			style: 'position:absolute;left:79px;top:28px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаНУ',
			text: 'Сумма (НУ):',
			style: 'position:absolute;left:7px;top:52px;width:68px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтоимостьНУ',
			style: 'position:absolute;left:79px;top:52px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'РеглВалюта3',
			text: 'РеглВалюта',
			style: 'position:absolute;left:204px;top:52px;width:60px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'РеглВалюта4',
			text: 'РеглВалюта',
			style: 'position:absolute;left:529px;top:52px;width:60px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаНУХоз',
			text: 'в т.ч. хоз. способом (НУ):',
			style: 'position:absolute;left:269px;top:52px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтоимостьНУХоз',
			style: 'position:absolute;left:404px;top:52px;width:120px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Налоговый учет (по налогу на прибыль)',
			style: 'position:absolute;left:0px;top:7px;width:625px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаПР',
			text: 'Сумма (ПР):',
			style: 'position:absolute;left:7px;top:76px;width:68px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтоимостьПР',
			style: 'position:absolute;left:79px;top:76px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'РеглВалюта5',
			text: 'РеглВалюта',
			style: 'position:absolute;left:204px;top:76px;width:60px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'РеглВалюта6',
			text: 'РеглВалюта',
			style: 'position:absolute;left:529px;top:76px;width:60px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаПРХоз',
			text: 'в т.ч. хоз. способом (ПР):',
			style: 'position:absolute;left:269px;top:76px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтоимостьПРХоз',
			style: 'position:absolute;left:404px;top:76px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаВР',
			text: 'Сумма (ВР):',
			style: 'position:absolute;left:7px;top:100px;width:68px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтоимостьВР',
			style: 'position:absolute;left:79px;top:100px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'РеглВалюта7',
			text: 'РеглВалюта',
			style: 'position:absolute;left:204px;top:100px;width:60px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'РеглВалюта8',
			text: 'РеглВалюта',
			style: 'position:absolute;left:529px;top:100px;width:60px;height:19px;text-align:center;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаВРХоз',
			text: 'в т.ч. хоз. способом (ВР):',
			style: 'position:absolute;left:269px;top:100px;width:130px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтоимостьВРХоз',
			style: 'position:absolute;left:404px;top:100px;width:120px;height:19px;',
		},
					]
				},
				{
					title:'УСН',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСтоимостьУСН',
			text: 'Сумма (УСН):',
			style: 'position:absolute;left:6px;top:26px;width:69px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтоимостьУСН',
			style: 'position:absolute;left:79px;top:26px;width:120px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Расходы УСН',
			style: 'position:absolute;left:0px;top:6px;width:625px;height:17px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:1px;top:71px;width:624px;height:48px;',
			height: 48,width: 624,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Дата оплаты',
					width:'100',
					dataIndex:'ДатаОплаты',
					flex:1,
				},
				{
					text:'Сумма оплаты',
					width:'100',
					dataIndex:'СуммаОплаты',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/МодернизацияОС/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ДатаОплаты',
					},
					{
						name:'СуммаОплаты',
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
					title:'Амортизационная премия',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Сумма амортизационной премии указывается в табличном поле "Основные средства"\r\nиндивидуально для каждого основного средства.',
			style: 'position:absolute;left:6px;top:6px;width:452px;height:27px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'СчетУчетаЗатратПоАмортизационнойПремии',
			width: 80,
			height: 19,
			style: 'position:absolute;left:131px;top:41px;width:80px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СубконтоПоАмортизационнойПремии1',
			width: 184,
			height: 19,
			style: 'position:absolute;left:131px;top:65px;width:184px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СубконтоПоАмортизационнойПремии2',
			width: 184,
			height: 19,
			style: 'position:absolute;left:131px;top:89px;width:184px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СубконтоПоАмортизационнойПремии3',
			width: 184,
			height: 19,
			style: 'position:absolute;left:131px;top:113px;width:184px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетУчетаЗатратПоАмортизационнойПремии',
			text: 'Счет учета затрат:',
			style: 'position:absolute;left:6px;top:41px;width:120px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоПоАмортизационнойПремии1',
			text: 'Субконто НУ 1:',
			style: 'position:absolute;left:6px;top:65px;width:120px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоПоАмортизационнойПремии2',
			text: 'Субконто НУ 2:',
			style: 'position:absolute;left:6px;top:89px;width:120px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоПоАмортизационнойПремии3',
			text: 'Субконто НУ 3:',
			style: 'position:absolute;left:6px;top:113px;width:120px;height:19px;text-align:left;',
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Включить амортизационную премию в состав расходов',
			style: 'position:absolute;left:334px;top:106px;width:313px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетФактура',
			text: 'Счет-фактура:',
			style: 'position:absolute;left:8px;top:423px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'ГиперссылкаСчетФактура',
			text: 'Ввести счет-фактуру',
			style: 'position:absolute;left:94px;top:423px;width:553px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВключатьАПВСоставРасходовПриОтраженииМодернизации',
			width: 313,
			height: 19,
			style: 'position:absolute;left:334px;top:125px;width:313px;height:19px;',
		},
	],
	dockedItems:
	[
	]
});