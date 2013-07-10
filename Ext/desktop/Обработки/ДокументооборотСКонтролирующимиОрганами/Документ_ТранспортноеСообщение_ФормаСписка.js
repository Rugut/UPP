Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ТранспортноеСообщение_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:924px;height:445px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Транспортные сообщения',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ДокументСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:908px;height:405px;',
			height: 405,width: 908,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Дата',
					width:'124',
					dataIndex:'Дата',
					flex:1,
				},
				{
					text:'Дата транспортировки',
					width:'144',
					dataIndex:'ДатаТранспорта',
					flex:1,
				},
				{
					text:'Тип',
					width:'1200',
					dataIndex:'Тип',
					flex:1,
				},
				{
					text:'Цикл обмена',
					width:'1200',
					dataIndex:'ЦиклОбмена',
					flex:1,
				},
				{
					text:'Отправитель',
					width:'1200',
					dataIndex:'Отправитель',
					flex:1,
				},
				{
					text:'Получатель',
					width:'1200',
					dataIndex:'Получатель',
					flex:1,
				},
				{
					text:'Учетная запись',
					width:'1200',
					dataIndex:'УчетнаяЗапись',
					flex:1,
				},
				{
					text:'Статус',
					width:'112',
					dataIndex:'Статус',
					flex:1,
				},
				{
					text:'От кого (адрес)',
					width:'1200',
					dataIndex:'ОтКогоАдрес',
					flex:1,
				},
				{
					text:'От кого (представление)',
					width:'1200',
					dataIndex:'ОтКогоПредставление',
					flex:1,
				},
				{
					text:'Основание',
					width:'1200',
					dataIndex:'Основание',
					flex:1,
				},
				{
					text:'Тема',
					width:'1200',
					dataIndex:'Тема',
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
						name:'Картинка',
					},
					{
						name:'Дата',
					},
					{
						name:'ДатаТранспорта',
					},
					{
						name:'Тип',
					},
					{
						name:'ЦиклОбмена',
					},
					{
						name:'Отправитель',
					},
					{
						name:'Получатель',
					},
					{
						name:'УчетнаяЗапись',
					},
					{
						name:'Статус',
					},
					{
						name:'ОтКогоАдрес',
					},
					{
						name:'ОтКогоПредставление',
					},
					{
						name:'Основание',
					},
					{
						name:'Тема',
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
						var грид = Ext.getCmp('ДокументСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Банки.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Банки.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:924px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
	]
});