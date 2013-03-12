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
				{
					text:'Закрыть',
				},
				'-',
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтавкаНДС',
			style: 'position:absolute;left:160px;top:45px;width:127px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтавкаАкциз',
			style: 'position:absolute;left:160px;top:211px;width:127px;height:19px;',
		},
	]
});