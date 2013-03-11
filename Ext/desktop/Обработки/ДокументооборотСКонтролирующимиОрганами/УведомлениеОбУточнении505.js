Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.УведомлениеОбУточнении505',
	{
	extend: 'Ext.window.Window',
	height: 561,width: 481,
	iconCls: 'bogus',
	title: 'Уведомление об уточнении',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:536px;width:481px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:9px;width:465px;height:519px;',
			height: 519,width: 465,
			items:
			[
				{
					title:'РезультатыПроверки',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:450px;height:422px;',
			height: 422,width: 450,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:450px;height:422px;',
			height: 422,width: 450,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ТекстСообщения',
				},
				{
					text:'ЭтоОшибка',
				},
				{
					text:'Местоположение',
				},
				{
					text:'ОшибочноеЗначение',
				},
				{
					text:'КодОшибки',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:428px;width:450px;height:65px;',
			height: 65,width: 450,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТекстОшОб',
			style: 'position:absolute;left:0px;top:27px;width:450px;height:38px;',
		},
					]
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
			name: 'ИмяОбрабФайла',
			style: 'position:absolute;left:165px;top:6px;width:291px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИдФайл',
			style: 'position:absolute;left:165px;top:32px;width:291px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИдДок',
			style: 'position:absolute;left:165px;top:58px;width:291px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПрием',
			style: 'position:absolute;left:165px;top:84px;width:291px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаФормУвед',
			style: 'position:absolute;left:165px;top:240px;width:291px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КНД',
			style: 'position:absolute;left:165px;top:110px;width:291px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаимОтч',
			style: 'position:absolute;left:165px;top:136px;width:291px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомКорр',
			style: 'position:absolute;left:165px;top:162px;width:291px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчетГод',
			style: 'position:absolute;left:165px;top:214px;width:291px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчетныйПериод',
			style: 'position:absolute;left:165px;top:188px;width:291px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РегНом',
			style: 'position:absolute;left:165px;top:267px;width:291px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПрогрКомпл',
			style: 'position:absolute;left:165px;top:293px;width:291px;height:19px;',
		},
					]
				},
			]
		},
	]
});