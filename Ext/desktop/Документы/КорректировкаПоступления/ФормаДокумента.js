Ext.define('Документы.КорректировкаПоступления.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 478,width: 671,
	iconCls: 'bogus',
	title: 'Корректировка поступления',
	
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
			style: 'position:absolute;left:94px;top:426px;width:569px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:671px;height:25px;',
			items:
			[
				{
					text:'Действие3',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Действие4',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Действие7',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Разделитель10',
				},
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель11',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'Подменю3',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие5',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:105px;width:655px;height:250px;',
			height: 250,width: 655,
			items:
			[
				{
					title:'Товары',
				},
				{
					title:'Услуги',
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
			style: 'position:absolute;left:94px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:540px;top:359px;width:116px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:540px;top:380px;width:116px;height:17px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:453px;width:671px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'Записать',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Закрыть1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументПоступления',
			style: 'position:absolute;left:94px;top:80px;width:220px;height:19px;',
		},
	]
});