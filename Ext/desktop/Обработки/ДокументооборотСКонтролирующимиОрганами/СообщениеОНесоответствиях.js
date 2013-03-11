Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.СообщениеОНесоответствиях',
	{
	extend: 'Ext.window.Window',
	height: 547,width: 513,
	iconCls: 'bogus',
	title: 'Сообщение о несоответствиях',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:522px;width:513px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:497px;height:506px;',
			height: 506,width: 497,
			items:
			[
				{
					title:'ОшибкиФЛК',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:483px;height:474px;',
			height: 474,width: 483,
			columns:
			[
				{
					text:'КодОшибки',
				},
				{
					text:'Описание',
				},
			]
		},
					]
				},
				{
					title:'ОшибкиИД',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:483px;height:474px;',
			height: 474,width: 483,
			columns:
			[
				{
					text:'ИНН',
				},
				{
					text:'Комментарий',
				},
			]
		},
					]
				},
				{
					title:'ОбщиеСведения',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РегНомДок',
			style: 'position:absolute;left:191px;top:60px;width:298px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРегЭл',
			style: 'position:absolute;left:191px;top:90px;width:298px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРегБум',
			style: 'position:absolute;left:191px;top:125px;width:298px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДокНП',
			style: 'position:absolute;left:191px;top:10px;width:298px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодСтранПрод1',
			style: 'position:absolute;left:191px;top:155px;width:298px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаДокНП',
			style: 'position:absolute;left:191px;top:35px;width:298px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяФЛК',
			style: 'position:absolute;left:191px;top:180px;width:298px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаФЛК',
			style: 'position:absolute;left:191px;top:205px;width:298px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаИД',
			style: 'position:absolute;left:191px;top:230px;width:298px;height:19px;',
		},
					]
				},
			]
		},
	]
});