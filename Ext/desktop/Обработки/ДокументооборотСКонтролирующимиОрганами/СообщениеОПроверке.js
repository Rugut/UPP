Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.СообщениеОПроверке',
	{
	extend: 'Ext.window.Window',
	height: 288,width: 513,
	iconCls: 'bogus',
	title: 'Сообщение о проверке заявления',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:263px;width:513px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РегНомДок',
			style: 'position:absolute;left:202px;top:165px;width:303px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отметка',
			style: 'position:absolute;left:202px;top:10px;width:303px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРегЭл',
			style: 'position:absolute;left:202px;top:195px;width:303px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРегБум',
			style: 'position:absolute;left:202px;top:230px;width:303px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДокНП',
			style: 'position:absolute;left:202px;top:115px;width:303px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаДокНП',
			style: 'position:absolute;left:202px;top:140px;width:303px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:30px;width:497px;height:80px;',
			height: 80,width: 497,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерУведОткз',
			style: 'position:absolute;left:194px;top:25px;width:303px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаУведОткз',
			style: 'position:absolute;left:194px;top:50px;width:303px;height:19px;',
		},
					]
				},
			]
		},
	]
});