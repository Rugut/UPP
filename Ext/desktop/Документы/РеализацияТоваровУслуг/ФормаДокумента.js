Ext.define('Документы.РеализацияТоваровУслуг.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 488,width: 676,
	iconCls: 'bogus',
	title: 'Реализация товаров и услуг',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:98px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:198px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:436px;width:574px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:676px;height:25px;',
			items:
			[
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ОткрытьФормуНастройкиБланкаТоварногоНаполнения',
				},
				{
					text:'Разделитель11',
				},
				{
					text:'СписокЭлектронныхДокументов',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLЭлПочта',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеЗаполнитьИПровести',
				},
				{
					text:'Подменю3',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLФайл',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'РазделительЭД',
				},
				{
					text:'ВыгрузитьВФорматеCommerceML',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLЭлПочтаПанель',
				},
				{
					text:'Действие',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'ПоказатьСкрытьСчетаУчета',
				},
				{
					text:'ДействиеЦеныВалюта',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель12',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'СформироватьНовый',
				},
				{
					text:'ДействиеСоздатьПакетДокументовСОткрытиемФормы',
				},
				{
					text:'ПодписатьИОтправить',
				},
				{
					text:'Разделитель10',
				},
				{
					text:'ЭД',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLПанель',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'ВыгрузитьВФорматеCommerceMLФайлПанель',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'ОформитьДокументы',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:128px;width:660px;height:262px;',
			height: 262,width: 660,
			items:
			[
				{
					title:'Товары',
				},
				{
					title:'Тара',
				},
				{
					title:'Услуги',
				},
				{
					title:'Дополнительно',
				},
				{
					title:'СчетаУчета',
				},
				{
					title:'АвтоматическиеСкидки',
				},
				{
					title:'Печать',
				},
				{
					title:'ДокументыРасчетовСКонтрагентом',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:428px;top:81px;width:236px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:98px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:98px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сделка',
			style: 'position:absolute;left:98px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Склад',
			style: 'position:absolute;left:428px;top:57px;width:236px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерерассчитатьДолг',
			text: '',
			style: 'position:absolute;left:649px;top:105px;width:15px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:542px;top:392px;width:122px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:542px;top:414px;width:122px;height:17px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:463px;width:676px;height:25px;',
			items:
			[
				{
					text:'Закрыть1',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Печать',
				},
				{
					text:'Записать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОК',
				},
				{
					text:'РазделительЗаписать',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПередачи',
			style: 'position:absolute;left:338px;top:57px;width:88px;height:19px;',
		},
	]
});