Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.УведомлениеОбУточнении505',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:481px;height:561px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Уведомление об уточнении',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
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
			id: 'РезультатыПроверки',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:450px;height:422px;',
			height: 422,width: 450,
			columns:
			[
				{
					text:'N',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Текст сообщения',
					width:'100',
					dataIndex:'ТекстСообщения',
					flex:1,
				},
				{
					text:'',
					width:'21',
					dataIndex:'ЭтоОшибка',
					flex:1,
				},
				{
					text:'Местоположение ошибки',
					width:'152',
					dataIndex:'Местоположение',
					flex:1,
				},
				{
					text:'Ошибочное значение',
					width:'124',
					dataIndex:'ОшибочноеЗначение',
					flex:1,
				},
				{
					text:'Код ошибки',
					width:'100',
					dataIndex:'КодОшибки',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'ТекстСообщения',
					},
					{
						name:'ЭтоОшибка',
					},
					{
						name:'Местоположение',
					},
					{
						name:'ОшибочноеЗначение',
					},
					{
						name:'КодОшибки',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('РезультатыПроверки');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.УведомлениеОбУточнении505События'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.УведомлениеОбУточнении505События");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
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
			disabled: false,
			name: 'ТекстОшОб',
			style: 'position:absolute;left:0px;top:27px;width:450px;height:38px;',
		},
		{
			xtype: 'fieldset',
			title: 'Обобщенный результат',
			style: 'position:absolute;left:0px;top:8px;width:450px;height:16px;',
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
			disabled: false,
			name: 'ИмяОбрабФайла',
			width: 291,
			height: 19,
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
			disabled: false,
			name: 'ИдФайл',
			width: 291,
			height: 19,
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
			disabled: false,
			name: 'ИдДок',
			width: 291,
			height: 19,
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
			disabled: false,
			name: 'ДатаПрием',
			width: 291,
			height: 19,
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
			disabled: false,
			name: 'ДатаФормУвед',
			width: 291,
			height: 19,
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
			disabled: false,
			name: 'КНД',
			width: 291,
			height: 19,
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
			disabled: false,
			name: 'НаимОтч',
			width: 291,
			height: 19,
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
			disabled: false,
			name: 'НомКорр',
			width: 291,
			height: 19,
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
			disabled: false,
			name: 'ОтчетГод',
			width: 291,
			height: 19,
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
			disabled: false,
			name: 'ОтчетныйПериод',
			width: 291,
			height: 19,
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
			disabled: false,
			name: 'РегНом',
			width: 291,
			height: 19,
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
			disabled: false,
			name: 'ПрогрКомпл',
			width: 291,
			height: 19,
			style: 'position:absolute;left:165px;top:293px;width:291px;height:19px;',
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:536px;width:481px;height:25px;',
			dock: 'bottom',
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
	]
	});
});