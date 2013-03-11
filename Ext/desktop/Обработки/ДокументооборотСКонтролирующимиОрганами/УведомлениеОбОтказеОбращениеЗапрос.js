Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.УведомлениеОбОтказеОбращениеЗапрос',
	{
	extend: 'Ext.window.Window',
	height: 547,width: 513,
	iconCls: 'bogus',
	title: 'Уведомление об отказе',
	
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
					title:'ВыявленныеНарушения',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:177px;width:483px;height:303px;',
			height: 303,width: 483,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:23px;width:483px;height:280px;',
			height: 280,width: 483,
			columns:
			[
				{
					text:'Описание',
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
			style: 'position:absolute;left:6px;top:6px;width:483px;height:171px;',
			height: 171,width: 483,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:483px;height:171px;',
			height: 171,width: 483,
			columns:
			[
				{
					text:'Описание',
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
			style: 'position:absolute;left:191px;top:6px;width:298px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВремяПредст',
			style: 'position:absolute;left:191px;top:30px;width:298px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПрием',
			style: 'position:absolute;left:191px;top:54px;width:298px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КНД',
			style: 'position:absolute;left:191px;top:78px;width:298px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаимВидДок',
			style: 'position:absolute;left:191px;top:102px;width:298px;height:19px;',
		},
					]
				},
			]
		},
	]
});