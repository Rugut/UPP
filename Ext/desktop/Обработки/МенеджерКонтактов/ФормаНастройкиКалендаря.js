Ext.define('Обработки.МенеджерКонтактов.ФормаНастройкиКалендаря',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:357px;height:471px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка параметров календаря',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:446px;width:357px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Закрыть',
				},
				'-',
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:9px;top:7px;width:340px;height:431px;',
			height: 431,width: 340,
			items:
			[
				{
					title:'Общее',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Отображение документов "Событие" (по типу события):',
			style: 'position:absolute;left:12px;top:327px;width:289px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Отображение документов "Событие" (по состоянию):',
			style: 'position:absolute;left:12px;top:263px;width:320px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Количество отображаемых дней недели:',
			style: 'position:absolute;left:12px;top:180px;width:213px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОграничитьВремяС',
			style: 'position:absolute;left:142px;top:72px;width:38px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОграничитьВремяПо',
			style: 'position:absolute;left:202px;top:72px;width:38px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ТекстОграничитьВремяПо',
			text: 'по',
			style: 'position:absolute;left:184px;top:72px;width:15px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Ограничить время с',
			style: 'position:absolute;left:12px;top:72px;width:128px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Настройка режима "День":',
			style: 'position:absolute;left:12px;top:94px;width:213px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Занятость помещений',
			style: 'position:absolute;left:18px;top:156px;width:136px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственные',
			style: 'position:absolute;left:6px;top:27px;width:326px;height:19px;',
		},
					]
				},
				{
					title:'Заказы',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Отображение заказов (покупателей и поставщикам):',
			style: 'position:absolute;left:6px;top:27px;width:279px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отображать заказы',
			style: 'position:absolute;left:16px;top:47px;width:192px;height:16px;',
		},
					]
				},
			]
		},
	]
});