Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.УведомлениеОбУточнении505',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:481px;height:561px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Уведомление об уточнении',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:536px;width:481px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
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
					title:'Результаты проверки',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:450px;height:422px;',
			height: 422,width: 450,
			tabBar:{hidden:true},
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
					text:'N',
					width:'28',
				},
				{
					text:'Текст сообщения',
					width:'100',
				},
				{
					text:'',
					width:'21',
				},
				{
					text:'Местоположение ошибки',
					width:'152',
				},
				{
					text:'Ошибочное значение',
					width:'124',
				},
				{
					text:'Код ошибки',
					width:'100',
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
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textarea',
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
					title:'Общие сведения',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Имя обработанного файла:',
			style: 'position:absolute;left:6px;top:6px;width:158px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяОбрабФайла',
			style: 'position:absolute;left:165px;top:6px;width:291px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Идентификатор файла:',
			style: 'position:absolute;left:6px;top:32px;width:158px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИдФайл',
			style: 'position:absolute;left:165px;top:32px;width:291px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Идентификатор документа:',
			style: 'position:absolute;left:6px;top:58px;width:158px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИдДок',
			style: 'position:absolute;left:165px;top:58px;width:291px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Дата приема:',
			style: 'position:absolute;left:6px;top:84px;width:158px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПрием',
			style: 'position:absolute;left:165px;top:84px;width:291px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Дата уведомления:',
			style: 'position:absolute;left:6px;top:240px;width:158px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаФормУвед',
			style: 'position:absolute;left:165px;top:240px;width:291px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Код формы по КНД:',
			style: 'position:absolute;left:6px;top:110px;width:158px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КНД',
			style: 'position:absolute;left:165px;top:110px;width:291px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Наименование формы:',
			style: 'position:absolute;left:6px;top:136px;width:158px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаимОтч',
			style: 'position:absolute;left:165px;top:136px;width:291px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Номер корректировки:',
			style: 'position:absolute;left:6px;top:162px;width:158px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомКорр',
			style: 'position:absolute;left:165px;top:162px;width:291px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Отчетный год:',
			style: 'position:absolute;left:6px;top:214px;width:158px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчетГод',
			style: 'position:absolute;left:165px;top:214px;width:291px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Отчетный период:',
			style: 'position:absolute;left:6px;top:188px;width:158px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтчетныйПериод',
			style: 'position:absolute;left:165px;top:188px;width:291px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Рег. номер отчетности в НО:',
			style: 'position:absolute;left:6px;top:267px;width:158px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РегНом',
			style: 'position:absolute;left:165px;top:267px;width:291px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Проверившая программа:',
			style: 'position:absolute;left:6px;top:293px;width:158px;height:19px;',
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