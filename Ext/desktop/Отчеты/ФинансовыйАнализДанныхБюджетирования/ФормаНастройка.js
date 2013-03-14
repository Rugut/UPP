Ext.define('Отчеты.ФинансовыйАнализДанныхБюджетирования.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:356px;height:263px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отчет  Финансовый анализ данных бюджетирования',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:238px;width:356px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись36',
			text: 'Период с:',
			style: 'position:absolute;left:8px;top:8px;width:104px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:114px;top:8px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись37',
			text: 'по:',
			style: 'position:absolute;left:212px;top:8px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:230px;top:8px;width:96px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:328px;top:8px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сценарий',
			style: 'position:absolute;left:114px;top:32px;width:234px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Сценарий:',
			style: 'position:absolute;left:8px;top:32px;width:104px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВариантНастройки',
			style: 'position:absolute;left:114px;top:56px;width:234px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Вариант настройки:',
			style: 'position:absolute;left:8px;top:56px;width:104px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:83px;width:340px;height:147px;',
			height: 147,width: 340,
			items:
			[
				{
					title:'Разделы отчета',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Аналитический баланс',
			style: 'position:absolute;left:6px;top:6px;width:142px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отчет о прибылях и убытках',
			style: 'position:absolute;left:6px;top:46px;width:166px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Анализ ликвидности и платежеспособности',
			style: 'position:absolute;left:6px;top:26px;width:246px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Анализ оборачиваемости активов и пассивов',
			style: 'position:absolute;left:6px;top:66px;width:256px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Анализ доходности и рентабельности ФХД',
			style: 'position:absolute;left:6px;top:86px;width:245px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Анализ эффективности использования капитала',
			style: 'position:absolute;left:6px;top:106px;width:275px;height:15px;',
		},
					]
				},
				{
					title:'Сравнение прибыли',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись38',
			text: 'Сценарий:',
			style: 'position:absolute;left:6px;top:30px;width:56px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СценарийСравнениеПрибыли',
			style: 'position:absolute;left:64px;top:30px;width:268px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись39',
			text: 'Период с:',
			style: 'position:absolute;left:6px;top:6px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачСравнениеПрибыли',
			style: 'position:absolute;left:64px;top:6px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись40',
			text: 'по:',
			style: 'position:absolute;left:162px;top:6px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКонСравнениеПрибыли',
			style: 'position:absolute;left:180px;top:6px;width:96px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериодаСравнение',
			text: '...',
			style: 'position:absolute;left:278px;top:6px;width:19px;height:19px;',
		},
					]
				},
			]
		},
	]
});