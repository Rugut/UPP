Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ВыборСертификатаИзСистемногоХранилища',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:745px;height:414px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Цифровые сертификаты',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'Сертификаты',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:729px;height:269px;',
			height: 269,width: 729,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Имя владельца',
					width:'1200',
					dataIndex:'ИмяВладельца',
					flex:1,
				},
				{
					text:'Организация',
					width:'1200',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'ИНН',
					width:'114',
					dataIndex:'ИНН',
					flex:1,
				},
				{
					text:'Должность',
					width:'100',
					dataIndex:'Должность',
					flex:1,
				},
				{
					text:'Начало действия',
					width:'116',
					dataIndex:'ДействителенС',
					flex:1,
				},
				{
					text:'Конец действия',
					width:'116',
					dataIndex:'ДействителенПо',
					flex:1,
				},
				{
					text:'E-mail',
					width:'100',
					dataIndex:'EMail',
					flex:1,
				},
				{
					text:'Отпечаток',
					width:'2400',
					dataIndex:'Отпечаток',
					flex:1,
				},
				{
					text:'Пригоден для шифрования',
					width:'21',
					dataIndex:'ПригоденДляШифрования',
					flex:1,
				},
				{
					text:'Пригоден для подписания',
					width:'21',
					dataIndex:'ПригоденДляПодписания',
					flex:1,
				},
				{
					text:'Поставщик',
					width:'1200',
					dataIndex:'Поставщик',
					flex:1,
				},
				{
					text:'Серийный номер',
					width:'1200',
					dataIndex:'СерийныйНомер',
					flex:1,
				},
				{
					text:'Наименование',
					width:'1200',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Владелец',
					width:'1200',
					dataIndex:'Владелец',
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
						name:'Пометка',
					},
					{
						name:'ИмяВладельца',
					},
					{
						name:'Организация',
					},
					{
						name:'ИНН',
					},
					{
						name:'Должность',
					},
					{
						name:'ДействителенС',
					},
					{
						name:'ДействителенПо',
					},
					{
						name:'EMail',
					},
					{
						name:'Отпечаток',
					},
					{
						name:'ПригоденДляШифрования',
					},
					{
						name:'ПригоденДляПодписания',
					},
					{
						name:'Поставщик',
					},
					{
						name:'СерийныйНомер',
					},
					{
						name:'Наименование',
					},
					{
						name:'Владелец',
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
						var грид = Ext.getCmp('Сертификаты');
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
		{
			xtype: 'fieldset',
			title: 'Подробнее',
			style: 'position:absolute;left:8px;top:329px;width:729px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:349px;width:82px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Наименование',
			text: '',
			style: 'position:absolute;left:91px;top:350px;width:275px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВладелец',
			text: 'Владелец:',
			style: 'position:absolute;left:369px;top:349px;width:92px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Владелец',
			text: '',
			style: 'position:absolute;left:462px;top:350px;width:275px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДействителенС',
			text: 'Действует с:',
			style: 'position:absolute;left:369px;top:389px;width:92px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ДействуетС',
			text: '',
			style: 'position:absolute;left:462px;top:390px;width:121px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПо',
			text: 'по:',
			style: 'position:absolute;left:591px;top:389px;width:19px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ДействуетПо',
			text: '',
			style: 'position:absolute;left:616px;top:390px;width:121px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПоставщик',
			text: 'Поставщик:',
			style: 'position:absolute;left:8px;top:369px;width:82px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСерийныйНомер',
			text: 'Серийный номер:',
			style: 'position:absolute;left:369px;top:369px;width:92px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Поставщик',
			text: '',
			style: 'position:absolute;left:91px;top:370px;width:275px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'СерийныйНомер',
			text: '',
			style: 'position:absolute;left:462px;top:370px;width:275px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтпечаток',
			text: 'Отпечаток:',
			style: 'position:absolute;left:8px;top:389px;width:82px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Отпечаток',
			text: '',
			style: 'position:absolute;left:91px;top:390px;width:275px;height:16px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:745px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				{
					text:'Показывать просроченные',
				},
				'-',
				{
					text:'Открыть справку',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:33px;width:729px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'Открыть',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Множественный выбор',
				},
				{
					text:'Установить все флажки',
				},
				{
					text:'Снять все флажки',
				},
			]
		},
	]
});