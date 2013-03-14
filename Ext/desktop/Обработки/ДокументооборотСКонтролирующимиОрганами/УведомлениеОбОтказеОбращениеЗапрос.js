Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.УведомлениеОбОтказеОбращениеЗапрос',
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:177px;width:483px;height:303px;',
			height: 303,width: 483,
			tabBar:{hidden:true},
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
					width:'111',
				},
				{
					text:'Код ошибки',
					width:'89',
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
			tabBar:{hidden:true},
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
					width:'111',
				},
				{
					text:'Код ошибки',
					width:'89',
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
					title:'Общие сведения',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Имя обработанного файла:',
			style: 'position:absolute;left:6px;top:6px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяОбрабФайла',
			style: 'position:absolute;left:191px;top:6px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Дата и время направления файла:',
			style: 'position:absolute;left:6px;top:30px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВремяПредст',
			style: 'position:absolute;left:191px;top:30px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Дата поступления файла:',
			style: 'position:absolute;left:6px;top:54px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПрием',
			style: 'position:absolute;left:191px;top:54px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Код формы по КНД:',
			style: 'position:absolute;left:6px;top:78px;width:181px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КНД',
			style: 'position:absolute;left:191px;top:78px;width:298px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Наименование вида документа:',
			style: 'position:absolute;left:6px;top:102px;width:181px;height:19px;',
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