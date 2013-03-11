Ext.define('Документы.ЗаказНаПроизводство.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 424,width: 657,
	iconCls: 'bogus',
	title: 'Документ Заказ на производство',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:90px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:190px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:371px;width:559px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:657px;height:25px;',
			items:
			[
				{
					text:'Разделитель7',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеАнализ',
				},
				{
					text:'ДействиеЗаполнитьИПровести',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель14',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Файлы1',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель13',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:136px;width:641px;height:227px;',
			height: 227,width: 641,
			items:
			[
				{
					title:'Продукция',
				},
				{
					title:'Материалы',
				},
				{
					title:'Дополнительно',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:450px;top:56px;width:199px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:90px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаИсполнения',
			style: 'position:absolute;left:90px;top:106px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:399px;width:657px;height:25px;',
			items:
			[
				{
					text:'Записать',
				},
				{
					text:'Печать',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновнойЗаказНаПроизводство',
			style: 'position:absolute;left:450px;top:81px;width:199px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаЗапуска',
			style: 'position:absolute;left:90px;top:81px;width:80px;height:19px;',
		},
	]
});