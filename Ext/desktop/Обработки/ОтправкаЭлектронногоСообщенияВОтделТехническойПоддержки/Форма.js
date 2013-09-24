Ext.require(['Данные.Обработки.ОтправкаЭлектронногоСообщенияВОтделТехническойПоддержки'], function () 
{
	Ext.define('Обработки.ОтправкаЭлектронногоСообщенияВОтделТехническойПоддержки.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Отправка электронного сообщения в отдел технической поддержки',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:313px;width:764px;height:24px;',
			width: 764,
			height: 24,
			items:
			[
			]
		},
		{
			id: 'ФайлыВложения',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:337px;width:764px;height:80px;',
			height: 80,width: 764,
			columns:
			[
				{
					text:'',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Путь к файлу',
					width:'475',
					dataIndex:'ПутьКФайлу',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОтправкаЭлектронногоСообщенияВОтделТехническойПоддержки/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'ПутьКФайлу',
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
						var грид = Ext.getCmp('ФайлыВложения');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ОтправкаЭлектронногоСообщенияВОтделТехническойПоддержки.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ОтправкаЭлектронногоСообщенияВОтделТехническойПоддержки.ФормаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:780px;height:25px;',
			width: 780,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Отправить',
					tooltip:'Отправить сообщение',
				},
				'-',
				{
					text:'',
					tooltip:'',
				},
				'-',
				{
					text:'',
					tooltip:'',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
					handler: function () {this.up('window').close();},
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отправлять слепую копию себе',
			style: 'position:absolute;left:573px;top:8px;width:199px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ТемаСообщения',
			width: 520,
			height: 19,
			style: 'position:absolute;left:47px;top:8px;width:520px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Тема:',
			style: 'position:absolute;left:8px;top:8px;width:36px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Вложения',
			style: 'position:absolute;left:8px;top:297px;width:764px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		],
	}],
	dockedItems:
	[
	]
	});
});