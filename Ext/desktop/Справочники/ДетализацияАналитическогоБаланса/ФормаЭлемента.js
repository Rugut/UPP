Ext.require(['Данные.Справочники.ДетализацияАналитическогоБаланса'], function () 
{
	Ext.define('Справочники.ДетализацияАналитическогоБаланса.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:406px;height:338px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Детализация аналитического баланса',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 179,
			height: 19,
			style: 'position:absolute;left:94px;top:33px;width:179px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:275px;top:33px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 81,
			height: 19,
			style: 'position:absolute;left:317px;top:33px;width:81px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:313px;width:406px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Счета бюджетирования',
			style: 'position:absolute;left:8px;top:105px;width:390px;height:16px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:121px;width:390px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:406px;height:25px;',
			items:
			[
			]
		},
		{
			id: 'ОтборСчетовБюджетирования',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:145px;width:390px;height:160px;',
			height: 160,width: 390,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Счет',
					width:'80',
					dataIndex:'Счет',
					flex:1,
				},
				{
					text:'Наименование счета',
					width:'120',
					dataIndex:'НаименованиеСчета',
					flex:1,
				},
				{
					text:'Вид остатка',
					width:'120',
					dataIndex:'ВидОстатка',
					flex:1,
				},
				{
					text:'Знак',
					width:'40',
					dataIndex:'Знак',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.ДетализацияАналитическогоБаланса").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДетализацияАналитическогоБаланса/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Счет',
					},
					{
						name:'НаименованиеСчета',
					},
					{
						name:'ВидОстатка',
					},
					{
						name:'Знак',
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
						var грид = Ext.getCmp('ОтборСчетовБюджетирования');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ДетализацияАналитическогоБаланса.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДетализацияАналитическогоБаланса.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеДляОтчета',
			style: 'position:absolute;left:94px;top:57px;width:304px;height:40px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеДляОтчета',
			text: 'Наименование для отчета:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:27px;text-align:left;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});