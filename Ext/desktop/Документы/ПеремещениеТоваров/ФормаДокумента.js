Ext.define('Документы.ПеремещениеТоваров.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 416,width: 652,
	iconCls: 'bogus',
	title: 'Перемещение товаров',
	
	items:
	[
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
			style: 'position:absolute;left:87px;top:365px;width:557px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Подменю3',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'ОткрытьФормуНастройкиБланкаТоварногоНаполнения',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'ПоказатьСкрытьСчетаУчета',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'ДействиеЗаполнитьИПровести',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Разделитель7',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:105px;width:636px;height:233px;',
			height: 233,width: 636,
			items:
			[
				{
					title:'Товары',
				},
				{
					title:'Тара',
				},
				{
					title:'НДС',
				},
				{
					title:'Дополнительно',
				},
			]
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
			name: 'СкладОтправитель',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СкладПолучатель',
			style: 'position:absolute;left:406px;top:81px;width:238px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:391px;width:652px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
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
				{
					text:'Записать',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'Печать',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВнутреннийЗаказ',
			style: 'position:absolute;left:406px;top:57px;width:238px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:564px;top:342px;width:80px;height:17px;',
		},
	]
});