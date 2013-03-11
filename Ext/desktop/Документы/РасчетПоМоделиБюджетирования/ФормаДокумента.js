Ext.define('Документы.РасчетПоМоделиБюджетирования.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 470,width: 751,
	iconCls: 'bogus',
	title: 'Расчет по модели бюджетирования',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРасчета',
			style: 'position:absolute;left:121px;top:59px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сценарий',
			style: 'position:absolute;left:121px;top:84px;width:236px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:751px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'Расчет',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ПросмотрОпераций',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:445px;width:751px;height:25px;',
			items:
			[
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
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:199px;width:735px;height:219px;',
			height: 219,width: 735,
			items:
			[
				{
					title:'Детально',
				},
				{
					title:'Таблица',
				},
				{
					title:'Комментарий',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:191px;top:419px;width:209px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Состояние',
			style: 'position:absolute;left:526px;top:419px;width:217px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:121px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:221px;top:33px;width:136px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:366px;top:33px;width:377px;height:159px;',
			height: 159,width: 377,
			items:
			[
				{
					title:'Показатели',
				},
				{
					title:'ДополнительныеИсточникиДанных',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновнойИсточникДанных',
			style: 'position:absolute;left:121px;top:108px;width:236px;height:19px;',
		},
	]
});