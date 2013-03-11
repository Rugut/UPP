Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.КвитанцияОПриемеЗаявление',
	{
	extend: 'Ext.window.Window',
	height: 547,width: 513,
	iconCls: 'bogus',
	title: 'Квитанция о приеме заявления',
	
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
					title:'ОбщиеСведения',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяПринятФайла',
			style: 'position:absolute;left:191px;top:10px;width:298px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВремяНапр',
			style: 'position:absolute;left:191px;top:35px;width:298px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПост',
			style: 'position:absolute;left:191px;top:160px;width:298px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КНД',
			style: 'position:absolute;left:191px;top:60px;width:298px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаимВидДок',
			style: 'position:absolute;left:191px;top:85px;width:298px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПрин',
			style: 'position:absolute;left:191px;top:185px;width:298px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РегНом',
			style: 'position:absolute;left:191px;top:210px;width:298px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДокНП',
			style: 'position:absolute;left:191px;top:110px;width:298px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаДокНП',
			style: 'position:absolute;left:191px;top:135px;width:298px;height:19px;',
		},
					]
				},
				{
					title:'ВыявленныеНарушения',
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
			]
		},
	]
});