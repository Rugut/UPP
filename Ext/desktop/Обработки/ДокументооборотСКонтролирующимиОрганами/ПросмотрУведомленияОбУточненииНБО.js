Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ПросмотрУведомленияОбУточненииНБО',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:662px;height:696px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:9px;width:646px;height:654px;',
			height: 654,width: 646,
			items:
			[
				{
					title:'Результаты проверки',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись39',
			text: 'Обобщенный результат:',
			style: 'position:absolute;left:6px;top:8px;width:154px;height:17px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:54px;width:632px;height:573px;',
			height: 573,width: 632,
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
			style: 'position:absolute;left:0px;top:71px;width:632px;height:502px;',
			height: 502,width: 632,
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
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
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.ПросмотрУведомленияОбУточненииНБОСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.ПросмотрУведомленияОбУточненииНБОСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'Надпись37',
			text: 'Количество ошибок:',
			style: 'position:absolute;left:0px;top:22px;width:154px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'Надпись38',
			text: 'Количество рекомендаций:',
			style: 'position:absolute;left:0px;top:47px;width:154px;height:17px;',
		},
		{
			xtype: 'fieldset',
			title: 'Подробно',
			style: 'position:absolute;left:0px;top:0px;width:632px;height:16px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись27',
			text: 'Требуется уточненный отчет?',
			style: 'position:absolute;left:6px;top:32px;width:154px;height:15px;',
		},
					]
				},
				{
					title:'Прочие сведения',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Идентификатор файла отчетности:',
			style: 'position:absolute;left:6px;top:26px;width:252px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Надпись2',
			style: 'position:absolute;left:263px;top:26px;width:375px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Отчетный год:',
			style: 'position:absolute;left:6px;top:206px;width:252px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Период (код):',
			style: 'position:absolute;left:6px;top:226px;width:252px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Номер корректировки:',
			style: 'position:absolute;left:6px;top:186px;width:252px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Версия формата:',
			style: 'position:absolute;left:6px;top:166px;width:252px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Наименование формы отчётности:',
			style: 'position:absolute;left:6px;top:146px;width:252px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись13',
			text: 'Код формы отчетности по КНД:',
			style: 'position:absolute;left:6px;top:126px;width:252px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Регистрационный номер отчётности:',
			style: 'position:absolute;left:6px;top:106px;width:252px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись17',
			text: 'Название проверяющей программы:',
			style: 'position:absolute;left:6px;top:86px;width:252px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись19',
			text: 'Дата приема файла в налоговом органе:',
			style: 'position:absolute;left:6px;top:66px;width:252px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись21',
			text: 'Идентификатор документа:',
			style: 'position:absolute;left:6px;top:46px;width:252px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись23',
			text: 'Наименование налогового (отчётного) периода:',
			style: 'position:absolute;left:6px;top:246px;width:252px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись25',
			text: 'Дата формирования документа:',
			style: 'position:absolute;left:6px;top:266px;width:252px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись29',
			text: 'Регистрационный номер уведомления:',
			style: 'position:absolute;left:6px;top:286px;width:252px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись31',
			text: 'Дата формирования уведомления:',
			style: 'position:absolute;left:6px;top:306px;width:252px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись40',
			text: 'Надпись40',
			style: 'position:absolute;left:166px;top:8px;width:472px;height:17px;',
		},
		{
			xtype: 'fieldset',
			title: 'Общие сведения',
			style: 'position:absolute;left:6px;top:6px;width:632px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Сведения о налогоплательщике',
			style: 'position:absolute;left:6px;top:328px;width:632px;height:16px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:348px;width:632px;height:95px;',
			height: 95,width: 632,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Юр. лицо',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись41',
			text: 'Номер контактного телефона:',
			style: 'position:absolute;left:0px;top:0px;width:252px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись43',
			text: 'Наименование организации:',
			style: 'position:absolute;left:0px;top:20px;width:252px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись45',
			text: 'ИНН:',
			style: 'position:absolute;left:0px;top:40px;width:252px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись47',
			text: 'КПП:',
			style: 'position:absolute;left:0px;top:60px;width:252px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись49',
			text: 'Адрес:',
			style: 'position:absolute;left:0px;top:80px;width:252px;height:15px;',
		},
					]
				},
				{
					title:'Физ. лицо',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись42',
			text: 'Надпись42',
			style: 'position:absolute;left:257px;top:0px;width:375px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись51',
			text: 'Номер контактного телефона:',
			style: 'position:absolute;left:0px;top:0px;width:252px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись52',
			text: 'Надпись52',
			style: 'position:absolute;left:257px;top:0px;width:375px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись53',
			text: 'Фамилия, имя, отчество:',
			style: 'position:absolute;left:0px;top:20px;width:252px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись55',
			text: 'ИНН:',
			style: 'position:absolute;left:0px;top:40px;width:252px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись57',
			text: 'Адрес:',
			style: 'position:absolute;left:0px;top:60px;width:252px;height:15px;',
		},
					]
				},
			]
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
			style: 'position:absolute;left:0px;top:671px;width:662px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});