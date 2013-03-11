Ext.define('Документы.ПоступлениеТоваровУслуг.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 480,width: 671,
	iconCls: 'bogus',
	title: 'Поступление товаров и услуг',
	
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
			style: 'position:absolute;left:0px;top:0px;width:671px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'Действие3',
				},
				{
					text:'Подменю3',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель12',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие1',
				},
				{
					text:'ПерезаполнитьДаннымиИзЭД',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ЭД',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'ДействиеЦеныВалюта',
				},
				{
					text:'Разделитель10',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие7',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю2',
				},
				{
					text:'ДействиеЗаполнитьИПровести',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'РазделительЭД',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'Разделитель11',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ПоказатьСкрытьСчетаУчета',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие6',
				},
				{
					text:'ПараметрыЭлектронногоОбменаДокументами',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'СписокЭлектронныхДокументов',
				},
				{
					text:'ОткрытьФормуНастройкиБланкаТоварногоНаполнения',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:131px;width:655px;height:250px;',
			height: 250,width: 655,
			items:
			[
				{
					title:'Оборудование',
				},
				{
					title:'ОбъектыСтроительства',
				},
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
			name: 'СкладОрдер',
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
			style: 'position:absolute;left:540px;top:384px;width:116px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:540px;top:406px;width:116px;height:17px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:455px;width:671px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Печать',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'ОК',
				},
				{
					text:'Записать',
				},
				{
					text:'Закрыть1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПоступления',
			style: 'position:absolute;left:334px;top:56px;width:84px;height:19px;',
		},
	]
});