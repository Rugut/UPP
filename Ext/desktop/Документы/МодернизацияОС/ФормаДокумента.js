Ext.define('Документы.МодернизацияОС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 500,width: 655,
	iconCls: 'bogus',
	title: 'Модернизация ОС',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:427px;top:448px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:448px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Событие',
			style: 'position:absolute;left:421px;top:57px;width:226px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:655px;height:25px;',
			items:
			[
				{
					text:'Разделитель6',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:475px;width:655px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОперацийСОсновнымиСредствами',
			style: 'position:absolute;left:94px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СобытиеРегл',
			style: 'position:absolute;left:421px;top:81px;width:226px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:151px;width:639px;height:267px;',
			height: 267,width: 639,
			items:
			[
				{
					title:'ОсновныеСредства',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:625px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подбор',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'ЗаполнитьПоНаименованию',
				},
				{
					text:'ЗаполнитьДляСписка',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:625px;height:217px;',
			height: 217,width: 625,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ОсновноеСредство',
				},
				{
					text:'ИнвентарныйНомер',
				},
				{
					text:'СрокПолезногоИспользованияУУ',
				},
				{
					text:'ФактСрокИспользованияУУ',
				},
				{
					text:'ОстСрокИспользованияУУ',
				},
				{
					text:'ОбъемПродукцииРаботУУ',
				},
				{
					text:'ФактОбъемПродукцииРаботУУ',
				},
				{
					text:'ОстОбъемПродукцииРаботУУ',
				},
				{
					text:'СтоимостьУУ',
				},
				{
					text:'СуммаМодернизацииУУ',
				},
				{
					text:'АмортизацияУУ',
				},
				{
					text:'АмортизацияЗаМесяцУУ',
				},
				{
					text:'ОстСтоимостьУУ',
				},
				{
					text:'КоэффициентАмортизацииУУ',
				},
				{
					text:'КоэффициентУскоренияУУ',
				},
				{
					text:'СрокПолезногоИспользованияБУ',
				},
				{
					text:'ФактСрокИспользованияБУ',
				},
				{
					text:'ОстСрокИспользованияБУ',
				},
				{
					text:'ОбъемПродукцииРаботБУ',
				},
				{
					text:'ФактОбъемПродукцииРаботБУ',
				},
				{
					text:'ОстОбъемПродукцииРаботБУ',
				},
				{
					text:'СтоимостьБУ',
				},
				{
					text:'СуммаМодернизацииБУ',
				},
				{
					text:'СуммаМодернизацииБУХоз',
				},
				{
					text:'АмортизацияБУ',
				},
				{
					text:'АмортизацияЗаМесяцБУ',
				},
				{
					text:'ОстСтоимостьБУ',
				},
				{
					text:'КоэффициентАмортизацииБУ',
				},
				{
					text:'КоэффициентУскоренияБУ',
				},
				{
					text:'СрокПолезногоИспользованияНУ',
				},
				{
					text:'СтоимостьНУ',
				},
				{
					text:'СуммаМодернизацииНУ',
				},
				{
					text:'СуммаМодернизацииНУХоз',
				},
				{
					text:'ОбщаяСуммаНУ',
				},
				{
					text:'СуммаКапитальныхВложенийВключаемыхВРасходыНУ',
				},
				{
					text:'СуммаМодернизацииВР',
				},
				{
					text:'СуммаМодернизацииВРХоз',
				},
				{
					text:'СуммаМодернизацииПР',
				},
				{
					text:'СуммаМодернизацииПРХоз',
				},
				{
					text:'СуммаМодернизацииУСН',
				},
				{
					text:'СтоимостьПР',
				},
				{
					text:'АмортизацияПР',
				},
			]
		},
					]
				},
				{
					title:'ВложенияВоВнеоборотныеАктивы',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОбъектСтроительства',
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
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Стоимость',
			style: 'position:absolute;left:79px;top:6px;width:120px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:50px;width:625px;height:72px;',
			height: 72,width: 625,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаБУВнеоборотногоАктива',
			style: 'position:absolute;left:79px;top:29px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтоимостьБУ',
			style: 'position:absolute;left:79px;top:53px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтоимостьБУХоз',
			style: 'position:absolute;left:404px;top:53px;width:120px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:122px;width:625px;height:119px;',
			height: 119,width: 625,
			items:
			[
				{
					title:'НУ',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаНУВнеоборотногоАктива',
			style: 'position:absolute;left:79px;top:28px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтоимостьНУ',
			style: 'position:absolute;left:79px;top:52px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтоимостьНУХоз',
			style: 'position:absolute;left:404px;top:52px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтоимостьПР',
			style: 'position:absolute;left:79px;top:76px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтоимостьПРХоз',
			style: 'position:absolute;left:404px;top:76px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтоимостьВР',
			style: 'position:absolute;left:79px;top:100px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтоимостьУСН',
			style: 'position:absolute;left:79px;top:26px;width:120px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:1px;top:71px;width:624px;height:48px;',
			height: 48,width: 624,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ДатаОплаты',
				},
				{
					text:'СуммаОплаты',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:2px;top:47px;width:623px;height:24px;',
			items:
			[
				{
					text:'Действие10',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие12',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие7',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие8',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие9',
				},
				{
					text:'Разделитель2',
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
					title:'АмортизационнаяПремия',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаЗатратПоАмортизационнойПремии',
			style: 'position:absolute;left:131px;top:41px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоПоАмортизационнойПремии1',
			style: 'position:absolute;left:131px;top:65px;width:184px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоПоАмортизационнойПремии2',
			style: 'position:absolute;left:131px;top:89px;width:184px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоПоАмортизационнойПремии3',
			style: 'position:absolute;left:131px;top:113px;width:184px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВключатьАПВСоставРасходовПриОтраженииМодернизации',
			style: 'position:absolute;left:334px;top:125px;width:313px;height:19px;',
		},
	]
});