Ext.require(['Данные.Справочники.ИндивидуальныеГрафикиАмортизации'], function () 
{
	Ext.define('Справочники.ИндивидуальныеГрафикиАмортизации.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:405px;height:377px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Индивидуальные графики амортизации',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:316px;top:33px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 39,
			height: 19,
			style: 'position:absolute;left:358px;top:33px;width:39px;height:19px;',
		},
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
			width: 220,
			height: 19,
			style: 'position:absolute;left:94px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:325px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 303,
			height: 19,
			style: 'position:absolute;left:94px;top:325px;width:303px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:76px;width:389px;height:24px;',
			width: 389,
			height: 24,
			items:
			[
			]
		},
		{
			id: 'График',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:100px;width:389px;height:220px;',
			height: 220,width: 389,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Месяц',
					width:'120',
					dataIndex:'Месяц',
					flex:1,
				},
				{
					text:'Коэффициент',
					width:'120',
					dataIndex:'Коэффициент',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ИндивидуальныеГрафикиАмортизации").data,
					fields: ['Ссылка','НомерСтроки','Месяц','Коэффициент',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИндивидуальныеГрафикиАмортизации/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Месяц',
					},
					{
						name:'Коэффициент',
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
						var грид = Ext.getCmp('График');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ИндивидуальныеГрафикиАмортизации.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ИндивидуальныеГрафикиАмортизации.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:405px;height:25px;',
			width: 405,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'label',
			text: 'График',
			style: 'position:absolute;left:8px;top:60px;width:389px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:352px;width:405px;height:25px;',
			width: 405,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
					tooltip:'Записать объект и закрыть форму',
				},
				'-',
				{
					text:'Записать',
					tooltip:'Записать объект',
				},
				'-',
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