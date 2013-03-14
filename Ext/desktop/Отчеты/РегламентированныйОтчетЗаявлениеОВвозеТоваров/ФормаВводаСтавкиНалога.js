Ext.define('Отчеты.РегламентированныйОтчетЗаявлениеОВвозеТоваров.ФормаВводаСтавкиНалога',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:304px;height:330px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ставки налога',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:305px;width:304px;height:25px;',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтавкаНДС',
			style: 'position:absolute;left:160px;top:45px;width:127px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Ставка налога (акциз):',
			style: 'position:absolute;left:20px;top:215px;width:136px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Освобождение от уплаты налога',
			style: 'position:absolute;left:20px;top:235px;width:191px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Акциз уплачен иному органу',
			style: 'position:absolute;left:20px;top:255px;width:191px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтавкаАкциз',
			style: 'position:absolute;left:160px;top:211px;width:127px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Твердые (специфические)',
			style: 'position:absolute;left:20px;top:143px;width:155px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Адвалорные',
			style: 'position:absolute;left:20px;top:163px;width:155px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Ставка налога (НДС):',
			style: 'position:absolute;left:20px;top:49px;width:136px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Освобождение от уплаты налога',
			style: 'position:absolute;left:20px;top:71px;width:191px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Товар не является подакцизным',
			style: 'position:absolute;left:20px;top:275px;width:191px;height:15px;',
		},
	]
});