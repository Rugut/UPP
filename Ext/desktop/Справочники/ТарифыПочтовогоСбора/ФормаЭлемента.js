Ext.require(['Данные.Справочники.ТарифыПочтовогоСбора'], function () 
{
	Ext.define('Справочники.ТарифыПочтовогоСбора.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:305px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Тариф почтового сбора',
	
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
			style: 'position:absolute;left:8px;top:33px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 183,
			height: 19,
			style: 'position:absolute;left:93px;top:33px;width:183px;height:19px;',
		},
		{
			id: 'СоставШкалы',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:166px;width:384px;height:104px;',
			height: 104,width: 384,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'С',
					width:'60',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'по',
					width:'60',
					dataIndex:'ЗначениеПо',
					flex:1,
				},
				{
					text:'Процент',
					width:'120',
					dataIndex:'Процент',
					flex:1,
				},
				{
					text:'Сумма',
					width:'120',
					dataIndex:'Сумма',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ТарифыПочтовогоСбора").data,
					fields: ['Картинка','ЗначениеС','ЗначениеПо','Процент','Сумма',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТарифыПочтовогоСбора/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'ЗначениеС',
					},
					{
						name:'ЗначениеПо',
					},
					{
						name:'Процент',
					},
					{
						name:'Сумма',
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
						var грид = Ext.getCmp('СоставШкалы');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ТарифыПочтовогоСбора.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ТарифыПочтовогоСбора.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'fieldset',
			title: 'Шкала тарифа',
			style: 'position:absolute;left:8px;top:126px;width:384px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:284px;top:33px;width:23px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 83,
			height: 19,
			style: 'position:absolute;left:309px;top:33px;width:83px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПорядокРасчетаПоТарифу',
			text: 'Порядок расчета по тарифу',
			style: 'position:absolute;left:8px;top:61px;width:384px;height:16px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Процент исчисляется с суммы превышения',
			style: 'position:absolute;left:20px;top:82px;width:372px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Процент исчисляется со всей пересылаемой суммы',
			style: 'position:absolute;left:20px;top:102px;width:372px;height:15px;',
		},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Записать',
				},
				{
					text:'Записать и закрыть',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'',
				},
					]
				},
				'-',
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:280px;width:400px;height:25px;',
			dock: 'bottom',
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
					handler: function () {this.up('window').close();},
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:142px;width:384px;height:24px;',
			dock: 'top',
			items:
			[
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'',
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
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
	]
	});
});