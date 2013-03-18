Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.УведомлениеОбОтказеДокумент',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:513px;height:547px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Уведомление об отказе',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:522px;width:513px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
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
					title:'Выявленные нарушения',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:6px;width:483px;height:474px;',
			height: 474,width: 483,
			columns:
			[
				{
					text:'Код ошибки',
					width:'89',
				},
				{
					text:'Описание',
					width:'111',
				},
			]
		},
					]
				},
				{
					title:'Общие сведения',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Дата и время направления:',
			style: 'position:absolute;left:6px;top:55px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВремяНапр',
			style: 'position:absolute;left:191px;top:55px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Дата поступления:',
			style: 'position:absolute;left:6px;top:80px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПост',
			style: 'position:absolute;left:191px;top:80px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Код формы по КНД:',
			style: 'position:absolute;left:6px;top:30px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КНД',
			style: 'position:absolute;left:191px;top:30px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Наименование формы:',
			style: 'position:absolute;left:6px;top:5px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаимВидДок',
			style: 'position:absolute;left:191px;top:5px;width:298px;height:19px;',
		},
		{
			xtype: 'itemselector',
			style: 'position:absolute;left:6px;top:124px;width:483px;height:356px;',
		},
					]
				},
			]
		},
	]
});