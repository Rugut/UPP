Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ПросмотрПодтвержденияПолученияПФР',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:473px;height:453px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Подтверждение получения',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:258px;width:457px;height:162px;',
			height: 162,width: 457,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			id: 'Содержимое',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:20px;width:457px;height:142px;',
			height: 142,width: 457,
			columns:
			[
				{
					text:'Имя',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Идентификатор',
					width:'100',
					dataIndex:'Идентификатор',
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
						name:'Имя',
					},
					{
						name:'Идентификатор',
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
						var грид = Ext.getCmp('Содержимое');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.ПросмотрПодтвержденияПолученияПФРСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.ПросмотрПодтвержденияПолученияПФРСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			text: 'Было получено следующее содержимое:',
			style: 'position:absolute;left:0px;top:0px;width:457px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:8px;width:457px;height:25px;',
			height: 25,width: 457,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись42',
			text: 'Отчет считается представленным?',
			style: 'position:absolute;left:0px;top:0px;width:206px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтчетПредставлен',
			text: 'НадписьОтчетПредставлен',
			style: 'position:absolute;left:210px;top:0px;width:247px;height:16px;',
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:33px;width:457px;height:82px;',
			height: 82,width: 457,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			text: 'Причина отказа в приеме',
			style: 'position:absolute;left:0px;top:0px;width:457px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'ПричинаОтказаВПриеме',
			style: 'position:absolute;left:0px;top:20px;width:457px;height:52px;',
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:206px;width:457px;height:52px;',
			height: 52,width: 457,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Дата и время получения документов:',
			style: 'position:absolute;left:0px;top:0px;width:206px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Регистрационный номер организации:',
			style: 'position:absolute;left:0px;top:24px;width:206px;height:18px;',
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:115px;width:457px;height:86px;',
			height: 86,width: 457,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:81px;width:457px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			text: 'Протоколы проверки',
			style: 'position:absolute;left:0px;top:0px;width:457px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			id: 'Протоколы',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:457px;height:52px;',
			height: 52,width: 457,
			columns:
			[
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'ИмяФайла',
					flex:1,
				},
				{
					text:'Идентификатор',
					width:'100',
					dataIndex:'Идентификатор',
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
						name:'ИмяФайла',
					},
					{
						name:'Идентификатор',
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
						var грид = Ext.getCmp('Протоколы');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.ПросмотрПодтвержденияПолученияПФРСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.ПросмотрПодтвержденияПолученияПФРСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
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
			style: 'position:absolute;left:0px;top:428px;width:473px;height:25px;',
			width: 473,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});