Ext.define('Документы.ПоступлениеТоваровУслугВНТТ.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 480,width: 664,
	iconCls: 'bogus',
	title: 'Поступление товаров и услуг в НТТ',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:428px;width:562px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:664px;height:25px;',
			items:
			[
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
					text:'Разделитель7',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Действие7',
				},
				{
					text:'ПоказатьСкрытьСчетаУчета',
				},
				{
					text:'Действие6',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие5',
				},
				{
					text:'ДействиеЦеныВалюта',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель10',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю3',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ПроводкиДтКт',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:136px;width:648px;height:244px;',
			height: 244,width: 648,
			items:
			[
				{
					title:'Товары',
				},
				{
					title:'Услуги',
				},
				{
					title:'Тара',
				},
				{
					title:'СчетаУчета',
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
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:420px;top:80px;width:236px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:94px;top:80px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сделка',
			style: 'position:absolute;left:94px;top:104px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Склад',
			style: 'position:absolute;left:420px;top:56px;width:236px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерерассчитатьДолг',
			text: '',
			style: 'position:absolute;left:641px;top:104px;width:15px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:558px;top:384px;width:98px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:558px;top:406px;width:98px;height:17px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:455px;width:664px;height:25px;',
			items:
			[
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
					text:'РазделительОК',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'ОК',
				},
				{
					text:'РазделительЗакрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументПеремещения',
			style: 'position:absolute;left:94px;top:80px;width:220px;height:19px;',
		},
	]
});