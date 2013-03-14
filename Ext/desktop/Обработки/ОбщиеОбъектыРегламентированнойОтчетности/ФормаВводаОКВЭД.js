Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.ФормаВводаОКВЭД',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:166px;height:59px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'ОКВЭД',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:34px;width:166px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьВведитеКодОКВЭД',
			text: 'Код по ОКВЭД:',
			style: 'position:absolute;left:8px;top:7px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВведитеКодОКВЭД',
			style: 'position:absolute;left:92px;top:7px;width:66px;height:19px;',
		},
	]
});