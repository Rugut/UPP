Ext.define('Документы.АктОбОказанииПроизводственныхУслуг.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 521,width: 668,
	iconCls: 'bogus',
	title: 'Акт об оказании производственных услуг',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:668px;height:25px;',
			items:
			[
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'ПодписатьИОтправить',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ЭД',
				},
				{
					text:'СформироватьНовый',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ПоказатьСкрытьСчетаУчета',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'ДействиеЦеныВалюта',
				},
				{
					text:'Настройка',
				},
				{
					text:'РазделительЭД',
				},
				{
					text:'Действие',
				},
				{
					text:'СписокЭлектронныхДокументов',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель10',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:496px;width:668px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Печать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
			]
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
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:424px;top:57px;width:236px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:84px;top:469px;width:576px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:152px;width:652px;height:264px;',
			height: 264,width: 652,
			items:
			[
				{
					title:'Услуги',
				},
				{
					title:'Материалы',
				},
				{
					title:'Распределение',
				},
				{
					title:'ПрочиеЗатраты',
				},
				{
					title:'РаспределениеПрочихЗатрат',
				},
				{
					title:'Дополнительно',
				},
				{
					title:'ДокументыРасчетовСКонтрагентом',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сделка',
			style: 'position:absolute;left:96px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:424px;top:81px;width:236px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:550px;top:421px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:550px;top:445px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:424px;top:105px;width:236px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерерассчитатьДолг',
			text: '',
			style: 'position:absolute;left:645px;top:129px;width:15px;height:19px;',
		},
	]
});